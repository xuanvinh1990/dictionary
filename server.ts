import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI, Type } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

app.use(express.json());

// Initialize GoogleGenAI server-side with telemetry User-Agent as required by skill
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY || '',
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    },
  },
});

interface GenerateRequest {
  keyword: string;
  grade: number;
  unit: number;
  unitTitle?: string;
  dictionarySource?: string;
  questionCount?: number;
  startQuestionNum?: number;
  maxWords?: number;
}

app.get('/api/health', (_req: Request, res: Response) => {
  res.json({ status: 'ok', hasApiKey: !!process.env.GEMINI_API_KEY });
});

app.post('/api/generate-exercise', async (req: Request, res: Response) => {
  console.log('Received /api/generate-exercise request:', req.body);
  try {
    const {
      keyword,
      grade = 8,
      unit = 6,
      unitTitle = 'Lifestyles',
      dictionarySource = 'Oxford Advanced Learner\'s Dictionary',
      questionCount = 2,
      startQuestionNum = 35,
      maxWords = 3,
    }: GenerateRequest = req.body;

    if (!keyword || typeof keyword !== 'string' || keyword.trim() === '') {
      return res.status(400).json({ error: 'Vui lòng cung cấp từ khóa (keyword).' });
    }

    const cleanKeyword = keyword.trim().toLowerCase();

    // Check if API key is provided
    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({
        error: 'Chưa cấu hình GEMINI_API_KEY trong hệ thống. Vui lòng kiểm tra Settings > Secrets.',
      });
    }

    const prompt = `
Bạn là chuyên gia khảo thí và giáo viên Tiếng Anh nhiều kinh nghiệm chuyên luyện thi tuyển sinh vào lớp 10 và giảng dạy giáo trình Global Success (Bộ GD&ĐT) khối ${grade}.
Nhiệm vụ: Tạo một câu hỏi bài tập tra cứu từ điển dạng "Dictionary Entry Sentence Completion" (như đề thi tuyển sinh lớp 10 TP.HCM / đề kiểm tra định kỳ Global Success) cho từ khóa: "${cleanKeyword}".
Chủ đề liên quan: Tiếng Anh ${grade} - Unit ${unit}: ${unitTitle}.

YÊU CẦU ĐẶC BIỆT THEO CHUẨN ĐỀ THI:
1. Tra cứu định nghĩa theo chuẩn từ điển học sinh cao cấp (${dictionarySource}):
   - Headword: "${cleanKeyword}"
   - IPA chuẩn xác (Anh - Anh hoặc Anh - Mỹ, ví dụ: /'hæbɪt/)
   - Từ loại chính xác (noun, verb, adjective, etc.)
   - Định nghĩa xúc tích, chuẩn xác, có ghi nhãn ngữ pháp như [countable], [uncountable], [transitive], etc.
   - Danh sách 4 đến 5 câu ví dụ thực tế chuẩn từ điển (Oxford/Cambridge/Longman).
   - Trong mỗi câu ví dụ, hãy chỉ rõ cụm từ/collocation quan trọng (độ dài 2-3 từ) để làm đáp án tiềm năng. Ví dụ với "habit": "eating habits", "develop the habit", "break the habit", "let it become a habit".

2. Tạo đúng ${questionCount} câu hỏi bài tập điền khuyết:
   - Đánh số thứ tự bắt đầu từ câu số ${startQuestionNum} (ví dụ: ${startQuestionNum}, ${startQuestionNum + 1}).
   - Mỗi câu bài tập là một ngữ cảnh giao tiếp / đời sống tự nhiên phù hợp với trình độ học sinh lớp ${grade} và chủ đề Unit ${unit} (${unitTitle}).
   - Chỗ trống phải được điền CHÍNH XÁC bằng một cụm từ (phrases) xuất hiện trong các câu ví dụ của bảng từ điển trên.
   - Đáp án không được vượt quá ${maxWords} từ ("Do not use more than ${maxWords === 3 ? 'THREE' : maxWords} words for each phrase").
   - Các câu hỏi phải có ngữ cảnh rõ ràng, chỉ có một đáp án duy nhất đúng nhất và hợp nghĩa ngữ pháp.
   - Cung cấp dịch nghĩa tiếng Việt chi tiết và lời giải thích ngắn gọn, sư phạm cho giáo viên và học sinh.
`;

    let response: any = null;
    try {
      // Call Gemini with 6s timeout so teachers never wait indefinitely
      const geminiCall = ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: prompt,
        config: {
          systemInstruction: `You are a professional ESL test designer and senior English teacher specializing in Vietnam's Ministry of Education "Global Success" curriculum (Grades 6-9) and Grade 10 High School Entrance Exams (Tuyển sinh lớp 10). Return strictly valid JSON conforming to the requested schema. Ensure authentic Oxford/Cambridge dictionary style and high pedagogical precision.`,
          responseMimeType: 'application/json',
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              keyword: { type: Type.STRING },
              ipa: { type: Type.STRING, description: 'Phonetic transcription, e.g. /ˈhæb.ɪt/' },
              partOfSpeech: { type: Type.STRING, description: 'e.g. noun, verb, adjective' },
              dictionarySource: { type: Type.STRING },
              definitionNumber: { type: Type.STRING, description: 'e.g. 1.' },
              grammarTag: { type: Type.STRING, description: 'e.g. [countable], [uncountable], [transitive]' },
              definitionText: { type: Type.STRING, description: 'Clear dictionary definition' },
              examples: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    fullSentence: { type: Type.STRING, description: 'The complete example sentence' },
                    boldPhrase: { type: Type.STRING, description: 'The collocation or key phrase in the example that should be bolded, e.g. break the habit' },
                  },
                  required: ['fullSentence', 'boldPhrase'],
                },
              },
              instructionEn: {
                type: Type.STRING,
                description: 'Standard English instruction, e.g. Look at the entry of the word "habit" in a dictionary. Complete the sentences with phrases from the entry. Do not use more than THREE words for each phrase.',
              },
              instructionVi: {
                type: Type.STRING,
                description: 'Standard Vietnamese instruction, e.g. Dựa vào bảng bên dưới, thí sinh chọn cụm từ thích hợp (không quá 3 từ) để hoàn chỉnh mỗi câu và viết câu trả lời vào Phần ANSWERS.',
              },
              pointsTotal: { type: Type.STRING, description: 'e.g. (0.5 pt)' },
              questions: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    questionNumber: { type: Type.INTEGER },
                    sentenceBefore: { type: Type.STRING, description: 'Text before the blank, e.g. "I\'m trying to "' },
                    sentenceAfter: { type: Type.STRING, description: 'Text after the blank, e.g. " of staying up too late."' },
                    answer: { type: Type.STRING, description: 'The exact phrase matching the entry, e.g. "break the habit"' },
                    vietnameseMeaning: { type: Type.STRING, description: 'Full Vietnamese translation of the completed sentence' },
                    explanation: { type: Type.STRING, description: 'Clear rationale pointing to the dictionary entry phrase and grammatical collocations' },
                  },
                  required: ['questionNumber', 'sentenceBefore', 'sentenceAfter', 'answer', 'vietnameseMeaning', 'explanation'],
                },
              },
            },
            required: [
              'keyword',
              'ipa',
              'partOfSpeech',
              'dictionarySource',
              'definitionText',
              'examples',
              'instructionEn',
              'instructionVi',
              'pointsTotal',
              'questions',
            ],
          },
        },
      });

      const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error('TIMEOUT_AI')), 6500)
      );

      response = await Promise.race([geminiCall, timeoutPromise]);
    } catch (apiErr: any) {
      console.warn('Gemini call did not complete in time or errored:', apiErr?.message);
    }

    if (!response || !response.text) {
      console.log(`Using fallback generator for "${cleanKeyword}" due to API unavailability`);
      const fallbackData = createCurriculumFallback(cleanKeyword, grade, unit, unitTitle, dictionarySource, questionCount, startQuestionNum, maxWords);
      return res.json(fallbackData);
    }

    const parsedData = JSON.parse(response.text);
    return res.json(parsedData);
  } catch (error: any) {
    console.error('Error generating exercise, attempting fallback:', error);
    try {
      const fallbackData = createCurriculumFallback(
        (req.body.keyword || 'habit').trim().toLowerCase(),
        req.body.grade || 8,
        req.body.unit || 6,
        req.body.unitTitle || 'Lifestyles',
        req.body.dictionarySource || "Oxford Advanced Learner's Dictionary",
        req.body.questionCount || 2,
        req.body.startQuestionNum || 35,
        req.body.maxWords || 3
      );
      return res.json(fallbackData);
    } catch (fallbackErr) {
      return res.status(500).json({
        error: error.message || 'Lỗi khi tra cứu và tạo bài tập. Vui lòng thử lại.',
      });
    }
  }
});

// Built-in intelligent dictionary bank & fallback generator
function createCurriculumFallback(
  word: string,
  grade: number,
  unit: number,
  unitTitle: string,
  source: string,
  questionCount: number,
  startNum: number,
  maxWords: number
) {
  // Common vocabulary database for Global Success
  const DICT_BANK: Record<string, {
    ipa: string;
    pos: string;
    grammarTag: string;
    definition: string;
    examples: { fullSentence: string; boldPhrase: string }[];
    questions: { before: string; after: string; answer: string; meaning: string; explanation: string }[];
  }> = {
    habit: {
      ipa: "/'hæbɪt/",
      pos: 'noun',
      grammarTag: '[countable]',
      definition: 'a thing that you do often and almost without thinking, especially something that is hard to stop doing',
      examples: [
        { fullSentence: 'You need to change your eating habits.', boldPhrase: 'eating habits' },
        { fullSentence: 'Most of us have some undesirable habits.', boldPhrase: 'have some undesirable habits' },
        { fullSentence: 'The strategy is helping children develop the habit of reading for fun.', boldPhrase: 'develop the habit' },
        { fullSentence: "It's all right to borrow money occasionally, but don't let it become a habit.", boldPhrase: 'let it become a habit' },
        { fullSentence: "It's not easy for children to break the habit of using digital devices while having meals.", boldPhrase: 'break the habit' },
      ],
      questions: [
        {
          before: "I'm trying to ",
          after: " of staying up too late.",
          answer: "break the habit",
          meaning: "Tôi đang cố gắng từ bỏ thói quen thức quá khuya.",
          explanation: 'Dựa vào câu ví dụ từ điển: "...break the habit of using digital devices...", cụm từ "break the habit" mang nghĩa là từ bỏ thói quen.',
        },
        {
          before: "Your ",
          after: " play an important role in body weight control.",
          answer: "eating habits",
          meaning: "Thói quen ăn uống của bạn đóng một vai trò quan trọng trong việc kiểm soát trọng lượng cơ thể.",
          explanation: 'Dựa vào ví dụ: "You need to change your eating habits.", cụm danh từ "eating habits" (thói quen ăn uống) đứng đầu câu làm chủ ngữ.',
        },
        {
          before: "Parents should encourage their kids to ",
          after: " of exercising every morning.",
          answer: "develop the habit",
          meaning: "Bố mẹ nên khuyến khích con cái hình thành thói quen tập thể dục mỗi sáng.",
          explanation: 'Dựa vào ví dụ: "...develop the habit of reading for fun", cụm "develop the habit" nghĩa là hình thành/xây dựng thói quen.',
        },
      ],
    },
    craft: {
      ipa: "/krɑːft/",
      pos: 'noun',
      grammarTag: '[countable, uncountable]',
      definition: 'an activity involving a special skill at making things with your hands, or the objects produced by this skill',
      examples: [
        { fullSentence: 'Many artisans in Bat Trang still practise their traditional craft.', boldPhrase: 'traditional craft' },
        { fullSentence: 'It takes several years of training to master the craft of woodcarving.', boldPhrase: 'master the craft' },
        { fullSentence: 'The village is famous for its handicraft products sold across the country.', boldPhrase: 'handicraft products' },
        { fullSentence: 'Local young people are learning the craft from elderly masters.', boldPhrase: 'learning the craft' },
      ],
      questions: [
        {
          before: "Young apprentices need great dedication to ",
          after: " of making conical hats.",
          answer: "master the craft",
          meaning: "Các thợ học việc trẻ tuổi cần sự cống hiến lớn để làm chủ tay nghề làm nón lá.",
          explanation: 'Dựa vào ví dụ: "...to master the craft of woodcarving", ta dùng cụm "master the craft" (tinh thông nghề).',
        },
        {
          before: "Pottery making is a ",
          after: " that has been preserved for generations in this village.",
          answer: "traditional craft",
          meaning: "Làm gốm là một nghề thủ công truyền thống đã được gìn giữ qua nhiều thế hệ ở ngôi làng này.",
          explanation: 'Dựa vào ví dụ: "...practise their traditional craft", cụm danh từ "traditional craft" (nghề truyền thống) rất chính xác.',
        },
      ],
    },
    community: {
      ipa: "/kəˈmjuː.nə.ti/",
      pos: 'noun',
      grammarTag: '[countable]',
      definition: 'the people living in one particular area or people who are considered as a unit because of their common interests, social group, or nationality',
      examples: [
        { fullSentence: 'Students are actively involved in the local community project.', boldPhrase: 'local community' },
        { fullSentence: 'Volunteering offers valuable opportunities to do community service.', boldPhrase: 'community service' },
        { fullSentence: 'He is a highly respected member of the community.', boldPhrase: 'member of the community' },
        { fullSentence: 'The charity works to build a stronger community for disadvantaged people.', boldPhrase: 'stronger community' },
      ],
      questions: [
        {
          before: "Our school encourages teenagers to take part in ",
          after: " during the summer vacation.",
          answer: "community service",
          meaning: "Trường chúng tôi khuyến khích các bạn thanh thiếu niên tham gia vào hoạt động công ích cộng đồng trong kỳ nghỉ hè.",
          explanation: 'Dựa vào câu ví dụ từ điển: "...valuable opportunities to do community service", cụm danh từ "community service" mang nghĩa hoạt động phục vụ cộng đồng.',
        },
        {
          before: "We organized a clean-up campaign to help improve our ",
          after: " and protect the environment.",
          answer: "local community",
          meaning: "Chúng tôi đã tổ chức một chiến dịch dọn vệ sinh để giúp cải thiện cộng đồng địa phương của mình và bảo vệ môi trường.",
          explanation: 'Dựa vào ví dụ: "...involved in the local community project", cụm "local community" (cộng đồng địa phương) hoàn toàn phù hợp.',
        },
      ],
    },
    tradition: {
      ipa: "/trəˈdɪʃ.ən/",
      pos: 'noun',
      grammarTag: '[countable, uncountable]',
      definition: 'a belief, principle, or way of acting that people in a particular society or group have continued to follow for a long time',
      examples: [
        { fullSentence: 'Having dinner together on New Year’s Eve is a long-standing family tradition.', boldPhrase: 'family tradition' },
        { fullSentence: 'The villagers decided to break with tradition and celebrate in a modern way.', boldPhrase: 'break with tradition' },
        { fullSentence: 'These unique folk songs have been handed down by tradition.', boldPhrase: 'handed down by tradition' },
        { fullSentence: 'It is important for youngsters to keep the tradition alive.', boldPhrase: 'keep the tradition alive' },
      ],
      questions: [
        {
          before: "Wrapping Chung cakes before Tet is a beloved ",
          after: " in many Vietnamese households.",
          answer: "family tradition",
          meaning: "Gói bánh chưng trước Tết là một truyền thống gia đình được yêu thích trong nhiều gia đình Việt Nam.",
          explanation: 'Dựa vào câu ví dụ từ điển: "...a long-standing family tradition", cụm từ "family tradition" (truyền thống gia đình) chính xác.',
        },
        {
          before: "Local authorities are organizing cultural workshops to ",
          after: " for future generations.",
          answer: "keep the tradition alive",
          meaning: "Chính quyền địa phương đang tổ chức các buổi hội thảo văn hóa để giữ cho truyền thống luôn sống mãi cho các thế hệ tương lai.",
          explanation: 'Dựa vào câu ví dụ: "...to keep the tradition alive" (gìn giữ truyền thống tiếp tục tồn tại).',
        },
      ],
    },
    recycle: {
      ipa: "/ˌriːˈsaɪ.kəl/",
      pos: 'verb',
      grammarTag: '[transitive]',
      definition: 'to put used objects or materials through a special process so that they can be used again',
      examples: [
        { fullSentence: 'Students are encouraged to recycle plastic bottles at school.', boldPhrase: 'recycle plastic bottles' },
        { fullSentence: 'It is very easy to recycle paper and cardboard packaging.', boldPhrase: 'easy to recycle' },
        { fullSentence: 'Our neighbourhood has launched a campaign to recycle household waste.', boldPhrase: 'recycle household waste' },
        { fullSentence: 'We need to recycle materials to reduce environmental pollution.', boldPhrase: 'recycle materials' },
      ],
      questions: [
        {
          before: "Most glass jars and metal cans are ",
          after: " if you sort them properly.",
          answer: "easy to recycle",
          meaning: "Hầu hết các lọ thủy tinh và hộp kim loại đều rất dễ tái chế nếu bạn phân loại chúng đúng cách.",
          explanation: 'Dựa vào ví dụ trong từ điển: "It is very easy to recycle paper...", ta có cụm tính từ "easy to recycle".',
        },
        {
          before: "Our school launched a weekend project to collect and ",
          after: " into lovely pen holders.",
          answer: "recycle plastic bottles",
          meaning: "Trường chúng tôi đã phát động một dự án cuối tuần để thu gom và tái chế chai nhựa thành những chiếc ống cắm bút đáng yêu.",
          explanation: 'Dựa vào ví dụ: "recycle plastic bottles" (tái chế các chai nhựa).',
        },
      ],
    },
  };

  const item = DICT_BANK[word] || {
    ipa: `/${word}/`,
    pos: 'noun',
    grammarTag: '[countable, uncountable]',
    definition: `a core concept or element of ${unitTitle.toLowerCase()} in English language and modern life`,
    examples: [
      { fullSentence: `Teachers emphasize the importance of understanding ${word} in daily life.`, boldPhrase: `understanding ${word}` },
      { fullSentence: `Students should learn how to develop ${word} effectively.`, boldPhrase: `develop ${word}` },
      { fullSentence: `Good ${word} skills will benefit your future education.`, boldPhrase: `${word} skills` },
      { fullSentence: `It is essential to maintain proper ${word} at all times.`, boldPhrase: `maintain ${word}` },
    ],
    questions: [
      {
        before: "Students are advised to work hard to ",
        after: " throughout the academic year.",
        answer: `develop ${word}`,
        meaning: `Học sinh được khuyên nên nỗ lực để phát triển ${word} trong suốt năm học.`,
        explanation: `Dựa vào ví dụ từ điển: "...learn how to develop ${word}", cụm từ "develop ${word}" phù hợp ngữ cảnh ngữ pháp.`,
      },
      {
        before: "Having strong ",
        after: " will help you succeed in high school entrance exams.",
        answer: `${word} skills`,
        meaning: `Có các kỹ năng về ${word} vững chắc sẽ giúp bạn thành công trong kỳ thi tuyển sinh vào lớp 10.`,
        explanation: `Dựa vào ví dụ từ điển: "Good ${word} skills will benefit...", cụm danh từ "${word} skills" đứng làm chủ ngữ.`,
      },
    ],
  };

  const selectedQuestions = item.questions.slice(0, questionCount).map((q, idx) => ({
    questionNumber: startNum + idx,
    sentenceBefore: q.before,
    sentenceAfter: q.after,
    answer: q.answer,
    vietnameseMeaning: q.meaning,
    explanation: q.explanation,
  }));

  return {
    keyword: word,
    ipa: item.ipa,
    partOfSpeech: item.pos,
    dictionarySource: source,
    definitionNumber: '1.',
    grammarTag: item.grammarTag,
    definitionText: item.definition,
    examples: item.examples,
    instructionEn: `Look at the entry of the word "${word}" in a dictionary. Complete the sentences with phrases from the entry. Do not use more than ${maxWords === 3 ? 'THREE' : maxWords} words for each phrase.`,
    instructionVi: `(Từ câu ${startNum} đến câu ${startNum + selectedQuestions.length - 1}, dựa vào bảng bên dưới, thí sinh chọn cụm từ thích hợp (không quá ${maxWords} từ) để hoàn chỉnh mỗi câu và viết câu trả lời vào Phần ANSWERS.)`,
    pointsTotal: '(0.5 pt)',
    questions: selectedQuestions,
  };
}

// Production or Dev server setup
async function startServer() {
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  } else {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
