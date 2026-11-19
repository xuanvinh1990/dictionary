import { DictionaryExercise, IPADetails } from '../data/globalSuccessCurriculum';
import { deriveIPADetails, findCurriculumWord } from './ipaDictionaryApi';
import { findOxfordWord } from '../data/oxfordVocabulary3000';
import { DICTIONARY_SOURCES, resolveDictionarySourceId } from './dictionarySources';

export interface QuestionTemplateItem {
  sentenceBefore: string;
  sentenceAfter: string;
  answer: string;
  vietnameseMeaning: string;
  explanation: string;
}

export interface ExerciseQuestionItem extends QuestionTemplateItem {
  questionNumber: number;
}

interface CuratedWordEntry {
  ipa: string;
  pos: string;
  grammarTag: string;
  definition: string;
  examples: { fullSentence: string; boldPhrase: string }[];
  collocations: string[];
  gradeQuestions: Record<number, QuestionTemplateItem[]>;
}

/**
 * Curated authentic Cambridge Dictionary entries and grade-tailored questions.
 * Every sentence is 100% grammatically correct and semantically logical.
 */
export const CURATED_TEMPLATES: Record<string, CuratedWordEntry> = {
  habit: {
    ipa: '/ˈhæb.ɪt/',
    pos: 'noun',
    grammarTag: '[countable]',
    definition: 'a thing that you do often and almost without thinking, especially something that is hard to stop doing',
    examples: [
      { fullSentence: 'You need to change your eating habits.', boldPhrase: 'eating habits' },
      { fullSentence: 'Most of us have some undesirable habits.', boldPhrase: 'undesirable habits' },
      { fullSentence: 'The strategy is helping children develop the habit of reading for fun.', boldPhrase: 'develop the habit' },
      { fullSentence: "It's all right to borrow money occasionally, but don't let it become a habit.", boldPhrase: 'let it become a habit' },
      { fullSentence: "It's not easy for children to break the habit of using digital devices while having meals.", boldPhrase: 'break the habit' },
    ],
    collocations: ['break the habit', 'eating habits', 'develop the habit', 'let it become a habit'],
    gradeQuestions: {
      6: [
        {
          sentenceBefore: 'Children should brush their teeth twice a day to ',
          sentenceAfter: ' of good personal hygiene.',
          answer: 'develop the habit',
          vietnameseMeaning: 'Trẻ em nên đánh răng hai lần mỗi ngày để hình thành thói quen vệ sinh cá nhân tốt.',
          explanation: 'Cấp độ Lớp 6 (A1 - Cơ bản): Cấu trúc câu đơn dùng "should + V", cụm "develop the habit" (hình thành thói quen) phù hợp hoàn hảo với nghĩa câu.',
        },
        {
          sentenceBefore: 'Eating plenty of green vegetables and drinking water are healthy ',
          sentenceAfter: ' for growing students.',
          answer: 'eating habits',
          vietnameseMeaning: 'Ăn nhiều rau xanh và uống đủ nước là những thói quen ăn uống lành mạnh cho học sinh đang tuổi lớn.',
          explanation: 'Cấp độ Lớp 6 (A1 - Cơ bản): Cụm danh từ "eating habits" (thói quen ăn uống) đứng sau tính từ "healthy" làm bổ ngữ cho câu.',
        },
        {
          sentenceBefore: 'You should avoid playing computer games late at night so you do not ',
          sentenceAfter: ' of sleeping poorly.',
          answer: 'let it become a habit',
          vietnameseMeaning: 'Bạn nên tránh chơi điện tử đêm muộn để không để nó biến thành thói quen ngủ kém.',
          explanation: 'Cấp độ Lớp 6 (A1 - Cơ bản): Cụm "let it become a habit" mang nghĩa để việc gì biến thành thói quen xấu.',
        },
      ],
      7: [
        {
          sentenceBefore: 'Our school medical worker advised us that maintaining healthy ',
          sentenceAfter: ' will protect our digestive system.',
          answer: 'eating habits',
          vietnameseMeaning: 'Cán bộ y tế trường học khuyên chúng tôi rằng duy trì thói quen ăn uống lành mạnh sẽ bảo vệ hệ tiêu hóa của chúng tôi.',
          explanation: 'Cấp độ Lớp 7 (A2- - Mở rộng): Cụm danh từ "eating habits" kết hợp tự nhiên với động từ "maintaining".',
        },
        {
          sentenceBefore: 'It was very challenging for Nam to ',
          sentenceAfter: ' of drinking sugary soft drinks after school.',
          answer: 'break the habit',
          vietnameseMeaning: 'Không hề dễ dàng chút nào để Nam từ bỏ thói quen uống nước ngọt có ga sau giờ học.',
          explanation: 'Cấp độ Lớp 7 (A2- - Mở rộng): Cấu trúc "It was + adj + for sb to + V", cụm "break the habit" (từ bỏ thói quen) là đáp án chính xác.',
        },
        {
          sentenceBefore: 'Parents ought to encourage teenagers so that they ',
          sentenceAfter: ' of doing morning exercise regularly.',
          answer: 'develop the habit',
          vietnameseMeaning: 'Cha mẹ nên khuyến khích các bạn trẻ để họ hình thành thói quen tập thể dục buổi sáng đều đặn.',
          explanation: 'Cấp độ Lớp 7 (A2- - Mở rộng): Mệnh đề chỉ mục đích với liên từ "so that", điền cụm "develop the habit".',
        },
      ],
      8: [
        {
          sentenceBefore: 'Although office workers are fully aware of health risks, many still ',
          sentenceAfter: ' of skipping breakfast.',
          answer: 'let it become a habit',
          vietnameseMeaning: 'Mặc dù nhân viên văn phòng nhận thức đầy đủ về rủi ro sức khỏe, nhiều người vẫn để việc bỏ bữa sáng trở thành thói quen.',
          explanation: 'Cấp độ Lớp 8 (A2+ - Nâng cao cơ sở): Cấu trúc câu phức nhượng bộ với "Although", cụm "let it become a habit" chuẩn xác về nghĩa và ngữ pháp.',
        },
        {
          sentenceBefore: 'To maintain a balanced lifestyle in busy cities, residents should proactively ',
          sentenceAfter: ' of walking for thirty minutes every day.',
          answer: 'develop the habit',
          vietnameseMeaning: 'Để duy trì lối sống cân bằng ở các thành phố bận rộn, cư dân nên chủ động hình thành thói quen đi bộ ba mươi phút mỗi ngày.',
          explanation: 'Cấp độ Lớp 8 (A2+ - Nâng cao cơ sở): Chủ đề Lifestyles, cấu trúc "should + V", điền cụm "develop the habit".',
        },
        {
          sentenceBefore: 'Health specialists advise adolescents that it requires immense discipline to ',
          sentenceAfter: ' of staying awake late using smartphones.',
          answer: 'break the habit',
          vietnameseMeaning: 'Các chuyên gia y tế khuyên thanh thiếu niên rằng cần có tính kỷ luật rất cao để từ bỏ thói quen thức khuya dùng điện thoại.',
          explanation: 'Cấp độ Lớp 8 (A2+ - Nâng cao cơ sở): Cấu trúc "requires discipline to + V", cụm "break the habit" hoàn chỉnh câu.',
        },
      ],
      9: [
        {
          sentenceBefore: "I'm trying to ",
          sentenceAfter: ' of staying up too late.',
          answer: 'break the habit',
          vietnameseMeaning: 'Tôi đang cố gắng từ bỏ thói quen thức quá khuya.',
          explanation: 'Chuẩn Đề Tuyển sinh Lớp 10 THPT (B1): Dựa vào ví dụ trong bảng từ điển "...break the habit of using digital devices...", cụm từ "break the habit" (từ bỏ thói quen) là đáp án đúng.',
        },
        {
          sentenceBefore: 'Your ',
          sentenceAfter: ' play an important role in body weight control.',
          answer: 'eating habits',
          vietnameseMeaning: 'Thói quen ăn uống của bạn đóng một vai trò quan trọng trong việc kiểm soát trọng lượng cơ thể.',
          explanation: 'Chuẩn Đề Tuyển sinh Lớp 10 THPT (B1): Dựa vào ví dụ: "You need to change your eating habits.", cụm danh từ "eating habits" đứng đầu câu làm chủ ngữ số nhiều.',
        },
        {
          sentenceBefore: 'High school students preparing for exams must establish effective learning routines and proactively ',
          sentenceAfter: ' of reviewing lessons daily.',
          answer: 'develop the habit',
          vietnameseMeaning: 'Học sinh THPT ôn thi phải thiết lập nề nếp học tập hiệu quả và chủ động hình thành thói quen ôn bài mỗi ngày.',
          explanation: 'Chuẩn Đề Tuyển sinh Lớp 10 THPT (B1): Cấu trúc song hành với động từ nguyên mẫu sau "must", cụm "develop the habit" là lựa chọn tối ưu.',
        },
      ],
    },
  },

  uniform: {
    ipa: '/ˈjuː.nɪ.fɔːm/',
    pos: 'noun',
    grammarTag: '[countable, uncountable]',
    definition: 'a particular set of clothes that has to be worn by the members of the same organization or school',
    examples: [
      { fullSentence: 'All students are required to wear school uniform on Mondays.', boldPhrase: 'wear school uniform' },
      { fullSentence: 'He looked very smart and confident in his neat uniform.', boldPhrase: 'neat uniform' },
      { fullSentence: 'Children in Japan usually put on uniform before leaving for school.', boldPhrase: 'put on uniform' },
      { fullSentence: 'The soldiers were on parade in full uniform.', boldPhrase: 'in full uniform' },
    ],
    collocations: ['wear school uniform', 'neat uniform', 'put on uniform', 'in full uniform'],
    gradeQuestions: {
      6: [
        {
          sentenceBefore: 'On Monday mornings, all pupils in our secondary school must ',
          sentenceAfter: ' to attend the flag-raising ceremony.',
          answer: 'wear school uniform',
          vietnameseMeaning: 'Vào các buổi sáng thứ Hai, tất cả học sinh trường THCS chúng tôi phải mặc đồng phục học sinh để dự lễ chào cờ.',
          explanation: 'Cấp độ Lớp 6 (A1 - Cơ bản): Cấu trúc động từ khiếm khuyết "must + V", cụm "wear school uniform" (mặc đồng phục học sinh) là đáp án chính xác.',
        },
        {
          sentenceBefore: 'Nam felt very proud and smart when he wore his ',
          sentenceAfter: ' on the first day of the school year.',
          answer: 'neat uniform',
          vietnameseMeaning: 'Nam cảm thấy rất tự hào và bảnh bao khi mặc bộ đồng phục gọn gàng vào ngày đầu tiên của năm học mới.',
          explanation: 'Cấp độ Lớp 6 (A1 - Cơ bản): Cụm danh từ "neat uniform" (bộ đồng phục gọn gàng) đứng sau tính từ sở hữu "his".',
        },
      ],
      7: [
        {
          sentenceBefore: 'Because we have physical training in the afternoon, we do not have to ',
          sentenceAfter: ' after the lunch break.',
          answer: 'wear school uniform',
          vietnameseMeaning: 'Vì chúng tôi có tiết thể dục vào buổi chiều, chúng tôi không cần phải mặc đồng phục học sinh sau giờ nghỉ trưa.',
          explanation: 'Cấp độ Lớp 7 (A2- - Mở rộng): Cấu trúc câu ghép với liên từ "Because", cụm từ "wear school uniform" đi sau "have to".',
        },
        {
          sentenceBefore: 'The student police volunteers stood by the school gate dressed ',
          sentenceAfter: ' to guide younger children across the street.',
          answer: 'in full uniform',
          vietnameseMeaning: 'Các tình nguyện viên cảnh sát học sinh đứng cạnh cổng trường trong trang phục đầy đủ để hướng dẫn các em nhỏ qua đường.',
          explanation: 'Cấp độ Lớp 7 (A2- - Mở rộng): Cụm giới từ "in full uniform" (trong quân phục/đồng phục đầy đủ) bổ nghĩa cho trạng thái trang phục.',
        },
      ],
      8: [
        {
          sentenceBefore: 'Although some teenagers prefer casual fashion, most schools require pupils to ',
          sentenceAfter: ' to promote a sense of community and equality.',
          answer: 'wear school uniform',
          vietnameseMeaning: 'Mặc dù một số bạn trẻ thích trang phục tự do, hầu hết các trường đều yêu cầu học sinh mặc đồng phục để nâng cao tinh thần cộng đồng và sự bình đẳng.',
          explanation: 'Cấp độ Lớp 8 (A2+ - Nâng cao cơ sở): Cấu trúc câu phức nhượng bộ với "Although", cụm "wear school uniform" đi sau "require pupils to".',
        },
        {
          sentenceBefore: 'Before leaving their dormitories every morning, boarding school pupils routinely ',
          sentenceAfter: ' to maintain school discipline.',
          answer: 'put on uniform',
          vietnameseMeaning: 'Trước khi rời khỏi ký túc xá mỗi sáng, học sinh trường nội trú thường mặc đồng phục để duy trì kỷ luật trường học.',
          explanation: 'Cấp độ Lớp 8 (A2+ - Nâng cao cơ sở): Cụm động từ "put on uniform" (mặc đồng phục vào) diễn tả hành động thói quen hàng ngày.',
        },
      ],
      9: [
        {
          sentenceBefore: 'Educational researchers emphasize that requiring students to ',
          sentenceAfter: ' creates an inclusive learning environment and eliminates socio-economic barriers.',
          answer: 'wear school uniform',
          vietnameseMeaning: 'Các nhà nghiên cứu giáo dục nhấn mạnh rằng việc yêu cầu học sinh mặc đồng phục học sinh sẽ tạo ra một môi trường học tập hòa nhập và xóa bỏ các rào cản kinh tế xã hội.',
          explanation: 'Chuẩn Đề Tuyển sinh Lớp 10 THPT (B1): Cấu trúc "requiring students to + V", cụm "wear school uniform" diễn đạt ý tưởng học thuật chuẩn mực.',
        },
        {
          sentenceBefore: 'During the formal opening ceremony, the honour guards were marching ',
          sentenceAfter: ' to salute the national flag.',
          answer: 'in full uniform',
          vietnameseMeaning: 'Trong buổi lễ khai mạc trang trọng, đội danh dự diễu hành trong trang phục chỉnh tề đầy đủ để chào quốc kỳ.',
          explanation: 'Chuẩn Đề Tuyển sinh Lớp 10 THPT (B1): Cụm từ "in full uniform" diễn đạt sự trang trọng trong nghi lễ ngoại giao/quốc gia.',
        },
      ],
    },
  },

  artisan: {
    ipa: '/ˌɑː.tɪˈzæn/',
    pos: 'noun',
    grammarTag: '[countable]',
    definition: 'a person who does skilled work making things with their hands',
    examples: [
      { fullSentence: 'Bat Trang village is home to many a traditional artisan of pottery.', boldPhrase: 'traditional artisan' },
      { fullSentence: 'It requires years of dedication to become a skilled artisan.', boldPhrase: 'skilled artisan' },
      { fullSentence: 'The workshop was guided by an elderly master artisan.', boldPhrase: 'master artisan' },
      { fullSentence: 'Handmade silk scarves made by a local artisan are popular with tourists.', boldPhrase: 'local artisan' },
    ],
    collocations: ['traditional artisan', 'skilled artisan', 'master artisan', 'local artisan'],
    gradeQuestions: {
      6: [
        {
          sentenceBefore: 'During our art trip to the pottery village, we watched a friendly ',
          sentenceAfter: ' shaping vases on a wheel.',
          answer: 'local artisan',
          vietnameseMeaning: 'Trong chuyến dã ngoại mỹ thuật đến làng gốm, chúng tôi đã quan sát một nghệ nhân địa phương thân thiện nặn bình hoa trên bàn xoay.',
          explanation: 'Cấp độ Lớp 6 (A1 - Cơ bản): Cụm danh từ chỉ người "local artisan" (nghệ nhân địa phương) làm tân ngữ chỉ người.',
        },
        {
          sentenceBefore: 'It takes many years of practice to become a ',
          sentenceAfter: ' who can carve wood beautifully.',
          answer: 'skilled artisan',
          vietnameseMeaning: 'Phải mất rất nhiều năm luyện tập để trở thành một nghệ nhân lành nghề có thể chạm khắc gỗ thật đẹp.',
          explanation: 'Cấp độ Lớp 6 (A1 - Cơ bản): Cụm danh từ "skilled artisan" (nghệ nhân lành nghề) đứng sau mạo từ "a".',
        },
      ],
      7: [
        {
          sentenceBefore: 'The exhibition was successful because an experienced ',
          sentenceAfter: ' showed visitors how to weave exquisite conical hats.',
          answer: 'master artisan',
          vietnameseMeaning: 'Triển lãm đã thành công vì một bậc thầy nghệ nhân giàu kinh nghiệm đã chỉ cho du khách cách đan những chiếc nón lá tinh xảo.',
          explanation: 'Cấp độ Lớp 7 (A2- - Mở rộng): Cụm danh từ "master artisan" (bậc thầy nghệ nhân) làm chủ ngữ trong mệnh đề sau "because".',
        },
        {
          sentenceBefore: 'To preserve heritage crafts, tourists are encouraged to buy handmade souvenirs made by a ',
          sentenceAfter: ' in the village.',
          answer: 'traditional artisan',
          vietnameseMeaning: 'Để bảo tồn các làng nghề di sản, du khách được khuyến khích mua quà lưu niệm thủ công do nghệ nhân truyền thống làm ra trong làng.',
          explanation: 'Cấp độ Lớp 7 (A2- - Mở rộng): Cụm "traditional artisan" (nghệ nhân truyền thống) đứng sau mạo từ "a".',
        },
      ],
      8: [
        {
          sentenceBefore: 'Although modern machines produce goods rapidly, decorative products made by a ',
          sentenceAfter: ' always possess unique aesthetic value.',
          answer: 'skilled artisan',
          vietnameseMeaning: 'Mặc dù máy móc hiện đại sản xuất hàng hóa nhanh chóng, các sản phẩm trang trí do nghệ nhân lành nghề làm ra luôn sở hữu giá trị thẩm mỹ độc đáo.',
          explanation: 'Cấp độ Lớp 8 (A2+ - Nâng cao cơ sở): Cấu trúc câu phức nhượng bộ với "Although", cụm "skilled artisan" hoàn chỉnh cụm phân từ bị động.',
        },
        {
          sentenceBefore: 'If young villagers want to master embroidery techniques, they must observe how a ',
          sentenceAfter: ' handles silk threads with meticulous care.',
          answer: 'traditional artisan',
          vietnameseMeaning: 'Nếu những người trẻ trong làng muốn làm chủ kỹ thuật thêu, họ phải quan sát cách một nghệ nhân truyền thống xử lý các sợi tơ tằm với sự tỉ mỉ.',
          explanation: 'Cấp độ Lớp 8 (A2+ - Nâng cao cơ sở): Câu điều kiện loại 1 kết hợp chủ đề Làng nghề truyền thống, điền cụm "traditional artisan".',
        },
      ],
      9: [
        {
          sentenceBefore: 'Cultural heritage preservationists commend each dedicated ',
          sentenceAfter: ' whose extraordinary craftsmanship keeps centuries-old folk traditions alive.',
          answer: 'traditional artisan',
          vietnameseMeaning: 'Các nhà bảo tồn di sản văn hóa ca ngợi mỗi nghệ nhân truyền thống tận tụy có tay nghề xuất chúng giúp duy trì các truyền thống dân gian hàng thế kỷ.',
          explanation: 'Chuẩn Đề Tuyển sinh Lớp 10 THPT (B1): Câu phức chứa mệnh đề quan hệ sở hữu với "whose", cụm danh từ "traditional artisan" là đáp án chính xác.',
        },
        {
          sentenceBefore: 'The municipal government decided to award prestigious honours to every ',
          sentenceAfter: ' who successfully trains young apprentices to preserve intangible cultural heritage.',
          answer: 'master artisan',
          vietnameseMeaning: 'Chính quyền thành phố đã quyết định trao tặng các danh hiệu cao quý cho mỗi nghệ nhân bậc thầy đào tạo thành công thợ học việc trẻ để bảo tồn di sản văn hóa phi vật thể.',
          explanation: 'Chuẩn Đề Tuyển sinh Lớp 10 THPT (B1): Câu chứa mệnh đề quan hệ xác định "who successfully trains...", cụm "master artisan" là đáp án chuẩn.',
        },
      ],
    },
  },

  craft: {
    ipa: '/krɑːft/',
    pos: 'noun',
    grammarTag: '[countable, uncountable]',
    definition: 'an activity involving a special skill at making things with your hands, or the objects produced by this skill',
    examples: [
      { fullSentence: 'Villagers continue to practise their traditional craft of weaving.', boldPhrase: 'traditional craft' },
      { fullSentence: 'It takes several years of training to master the craft of woodcarving.', boldPhrase: 'master the craft' },
      { fullSentence: 'The market sells various handicraft products to international visitors.', boldPhrase: 'handicraft products' },
      { fullSentence: 'Young apprentices are keen on learning the craft from village masters.', boldPhrase: 'learning the craft' },
    ],
    collocations: ['master the craft', 'traditional craft', 'handicraft products', 'learning the craft'],
    gradeQuestions: {
      6: [
        {
          sentenceBefore: 'In our weekend craft club, pupils enjoy making colourful ',
          sentenceAfter: ' to decorate their bedrooms.',
          answer: 'handicraft products',
          vietnameseMeaning: 'Trong câu lạc bộ thủ công cuối tuần, học sinh thích làm những sản phẩm thủ công rực rỡ để trang trí phòng ngủ.',
          explanation: 'Cấp độ Lớp 6 (A1 - Cơ bản): Cụm danh từ "handicraft products" (sản phẩm thủ công) làm tân ngữ cho động từ "making".',
        },
        {
          sentenceBefore: 'Many enthusiastic children in the village are ',
          sentenceAfter: ' of making pottery from their grandparents.',
          answer: 'learning the craft',
          vietnameseMeaning: 'Nhiều bạn nhỏ nhiệt huyết trong làng đang học nghề làm đồ gốm từ ông bà của mình.',
          explanation: 'Cấp độ Lớp 6 (A1 - Cơ bản): Thì Hiện tại tiếp diễn "are + V-ing", cụm "learning the craft" (đang học nghề) hoàn chỉnh câu.',
        },
      ],
      7: [
        {
          sentenceBefore: 'Tourists enjoy visiting Van Phuc village because villagers still preserve their ',
          sentenceAfter: ' of silk weaving.',
          answer: 'traditional craft',
          vietnameseMeaning: 'Du khách rất thích ghé thăm làng Vạn Phúc vì người dân nơi đây vẫn gìn giữ nghề dệt lụa truyền thống.',
          explanation: 'Cấp độ Lớp 7 (A2- - Mở rộng): Cụm danh từ "traditional craft" (nghề truyền thống) đi sau tính từ sở hữu "their".',
        },
        {
          sentenceBefore: 'Young apprentices have to practise patiently for months before they can ',
          sentenceAfter: ' of making conical hats.',
          answer: 'master the craft',
          vietnameseMeaning: 'Các thợ học việc trẻ tuổi phải kiên nhẫn luyện tập trong nhiều tháng trước khi có thể làm chủ nghề làm nón lá.',
          explanation: 'Cấp độ Lớp 7 (A2- - Mở rộng): Cấu trúc "can + V", cụm "master the craft" (tinh thông nghề) là đáp án.',
        },
      ],
      8: [
        {
          sentenceBefore: 'Although modern industrial machines dominate manufacturing, villagers still uphold their ',
          sentenceAfter: ' to protect cultural heritage.',
          answer: 'traditional craft',
          vietnameseMeaning: 'Mặc dù máy móc công nghiệp hiện đại chiếm ưu thế sản xuất, người dân làng vẫn gìn giữ nghề truyền thống để bảo vệ di sản văn hóa.',
          explanation: 'Cấp độ Lớp 8 (A2+ - Nâng cao cơ sở): Cấu trúc câu phức nhượng bộ với "Although", cụm "traditional craft" điền vào tân ngữ sau "uphold their".',
        },
        {
          sentenceBefore: 'To compete in international markets, artisans must continuously strive to ',
          sentenceAfter: ' and produce high-quality lacquerware.',
          answer: 'master the craft',
          vietnameseMeaning: 'Để cạnh tranh trên thị trường quốc tế, các nghệ nhân phải không ngừng nỗ lực làm chủ tay nghề và làm ra đồ sơn mài chất lượng cao.',
          explanation: 'Cấp độ Lớp 8 (A2+ - Nâng cao cơ sở): Cấu trúc "strive to + V", cụm "master the craft" là lựa chọn tối ưu.',
        },
      ],
      9: [
        {
          sentenceBefore: 'Young craftsmen need exceptional perseverance and years of rigorous training to ',
          sentenceAfter: ' of hand-weaving brocade patterns.',
          answer: 'master the craft',
          vietnameseMeaning: 'Những người thợ thủ công trẻ tuổi cần sự kiên trì đặc biệt và nhiều năm đào tạo nghiêm ngặt để làm chủ tay nghề dệt hoa văn thổ cẩm bằng tay.',
          explanation: 'Chuẩn Đề Tuyển sinh Lớp 10 THPT (B1): Dựa vào ví dụ trong bảng từ điển "...to master the craft of woodcarving", ta điền cụm "master the craft".',
        },
        {
          sentenceBefore: 'Pottery making in Bat Trang is a celebrated ',
          sentenceAfter: ' that has contributed significantly to national tourism revenue.',
          answer: 'traditional craft',
          vietnameseMeaning: 'Nghề làm gốm ở Bát Tràng là một nghề truyền thống nổi tiếng đã đóng góp đáng kể vào doanh thu du lịch quốc gia.',
          explanation: 'Chuẩn Đề Tuyển sinh Lớp 10 THPT (B1): Cấu trúc câu phức chứa mệnh đề quan hệ "that has contributed...", cụm "traditional craft" là đáp án.',
        },
      ],
    },
  },

  community: {
    ipa: '/kəˈmjuː.nə.ti/',
    pos: 'noun',
    grammarTag: '[countable]',
    definition: 'the people living in one particular area or people who are considered as a unit because of common interests',
    examples: [
      { fullSentence: 'Students are actively involved in supporting their local community.', boldPhrase: 'local community' },
      { fullSentence: 'Volunteering gives youths valuable chances to do community service.', boldPhrase: 'community service' },
      { fullSentence: 'He has been an active and respected member of the community.', boldPhrase: 'member of the community' },
      { fullSentence: 'Our project aims to build a stronger community for disadvantaged children.', boldPhrase: 'stronger community' },
    ],
    collocations: ['community service', 'local community', 'stronger community', 'member of the community'],
    gradeQuestions: {
      6: [
        {
          sentenceBefore: 'During summer vacation, our school club cleans the parks to help our ',
          sentenceAfter: ' stay clean and beautiful.',
          answer: 'local community',
          vietnameseMeaning: 'Trong kỳ nghỉ hè, câu lạc bộ trường chúng tôi dọn dẹp các công viên để giúp cộng đồng địa phương luôn sạch đẹp.',
          explanation: 'Cấp độ Lớp 6 (A1 - Cơ bản): Cụm danh từ "local community" (cộng đồng địa phương) làm tân ngữ chỉ địa bàn sinh sống.',
        },
        {
          sentenceBefore: 'Secondary students can do simple ',
          sentenceAfter: ' by planting flowers around neighbourhood gardens.',
          answer: 'community service',
          vietnameseMeaning: 'Học sinh THCS có thể làm các hoạt động công ích cộng đồng đơn giản bằng cách trồng hoa quanh các vườn trong khu phố.',
          explanation: 'Cấp độ Lớp 6 (A1 - Cơ bản): Cụm danh từ "community service" (công ích/phục vụ cộng đồng) kết hợp với động từ "do".',
        },
      ],
      7: [
        {
          sentenceBefore: 'Our youth organization organized a charity concert because we wanted to do ',
          sentenceAfter: ' for elderly people.',
          answer: 'community service',
          vietnameseMeaning: 'Đoàn thanh niên của chúng tôi đã tổ chức một buổi hòa nhạc từ thiện vì chúng tôi muốn làm công ích cộng đồng cho người cao tuổi.',
          explanation: 'Cấp độ Lớp 7 (A2- - Mở rộng): Cấu trúc câu ghép liên từ "because", cụm từ "community service" là tân ngữ sau "do".',
        },
        {
          sentenceBefore: 'By donating warm clothes to impoverished families, volunteers help create a ',
          sentenceAfter: ' filled with warmth and love.',
          answer: 'stronger community',
          vietnameseMeaning: 'Bằng việc quyên góp quần áo ấm cho các gia đình khó khăn, các tình nguyện viên đã giúp tạo nên một cộng đồng vững mạnh hơn chan chứa sự ấm áp và yêu thương.',
          explanation: 'Cấp độ Lớp 7 (A2- - Mở rộng): Cụm danh từ "stronger community" (cộng đồng vững mạnh hơn) đứng sau mạo từ "a".',
        },
      ],
      8: [
        {
          sentenceBefore: 'Although urban life can feel isolated at times, residents are joining hands to build a ',
          sentenceAfter: ' through social events.',
          answer: 'stronger community',
          vietnameseMeaning: 'Mặc dù cuộc sống đô thị đôi lúc có cảm giác cô lập, người dân đang chung tay xây dựng một cộng đồng vững mạnh hơn qua các sự kiện xã hội.',
          explanation: 'Cấp độ Lớp 8 (A2+ - Nâng cao cơ sở): Câu phức nhượng bộ với "Although", cụm "stronger community" hoàn chỉnh câu.',
        },
        {
          sentenceBefore: 'Mr. An has devoted decades to charity, so he is honoured as a prominent ',
          sentenceAfter: ' who inspires everyone around him.',
          answer: 'member of the community',
          vietnameseMeaning: 'Ông An đã cống hiến nhiều thập kỷ cho từ thiện, do đó ông được vinh danh là một thành viên tiêu biểu của cộng đồng truyền cảm hứng cho mọi người.',
          explanation: 'Cấp độ Lớp 8 (A2+ - Nâng cao cơ sở): Cụm từ "member of the community" (thành viên của cộng đồng) sau tính từ "prominent".',
        },
      ],
      9: [
        {
          sentenceBefore: 'In many countries, secondary graduates are required to complete fifty hours of ',
          sentenceAfter: ' to qualify for high school diplomas.',
          answer: 'community service',
          vietnameseMeaning: 'Ở nhiều quốc gia, học sinh tốt nghiệp THCS bắt buộc phải hoàn thành 50 giờ phục vụ cộng đồng để đủ điều kiện nhận bằng tốt nghiệp THPT.',
          explanation: 'Chuẩn Đề Tuyển sinh Lớp 10 THPT (B1): Dựa vào ví dụ: "...valuable chances to do community service", cụm danh từ "community service" là đáp án.',
        },
        {
          sentenceBefore: 'Civic education projects encourage youths to collaborate closely with their ',
          sentenceAfter: ' to resolve pressing environmental issues.',
          answer: 'local community',
          vietnameseMeaning: 'Các dự án giáo dục công dân khuyến khích thanh thiếu niên hợp tác chặt chẽ với cộng đồng địa phương của họ để giải quyết các vấn đề môi trường cấp bách.',
          explanation: 'Chuẩn Đề Tuyển sinh Lớp 10 THPT (B1): Cụm collocation "local community" kết hợp tự nhiên với giới từ "with their".',
        },
      ],
    },
  },

  recycle: {
    ipa: '/ˌriːˈsaɪ.kəl/',
    pos: 'verb',
    grammarTag: '[transitive]',
    definition: 'to put used objects or materials through a special process so that they can be used again',
    examples: [
      { fullSentence: 'Students are taught how to recycle plastic bottles at school.', boldPhrase: 'recycle plastic bottles' },
      { fullSentence: 'It is very easy to recycle paper and cardboard packaging.', boldPhrase: 'easy to recycle' },
      { fullSentence: 'Our town has started a campaign to recycle household waste.', boldPhrase: 'recycle household waste' },
      { fullSentence: 'We must collect and recycle used materials to preserve nature.', boldPhrase: 'recycle used materials' },
    ],
    collocations: ['easy to recycle', 'recycle plastic bottles', 'recycle household waste', 'recycle used materials'],
    gradeQuestions: {
      6: [
        {
          sentenceBefore: 'Most clean aluminum cans and glass jars are ',
          sentenceAfter: ' if people rinse them properly.',
          answer: 'easy to recycle',
          vietnameseMeaning: 'Hầu hết các lon nhôm và lọ thủy tinh sạch đều rất dễ tái chế nếu mọi người tráng rửa chúng cẩn thận.',
          explanation: 'Cấp độ Lớp 6 (A1 - Cơ bản): Cụm tính từ "easy to recycle" (dễ tái chế) đứng sau động từ to be "are".',
        },
        {
          sentenceBefore: 'During Green Day at school, all pupils collect and ',
          sentenceAfter: ' to make pencil holders and plant pots.',
          answer: 'recycle plastic bottles',
          vietnameseMeaning: 'Trong Ngày Xanh ở trường, tất cả học sinh thu gom và tái chế chai nhựa để làm ống cắm bút và chậu cây.',
          explanation: 'Cấp độ Lớp 6 (A1 - Cơ bản): Cụm động từ "recycle plastic bottles" (tái chế chai nhựa) ghép với "collect and".',
        },
      ],
      7: [
        {
          sentenceBefore: 'Our residential area launched a clean-up campaign because we wished to ',
          sentenceAfter: ' and reduce landfill trash.',
          answer: 'recycle household waste',
          vietnameseMeaning: 'Khu dân cư chúng tôi đã phát động chiến dịch dọn vệ sinh vì chúng tôi mong muốn tái chế rác thải sinh hoạt và giảm rác chôn lấp.',
          explanation: 'Cấp độ Lớp 7 (A2- - Mở rộng): Cấu trúc "wished to + V", cụm "recycle household waste" (tái chế rác thải sinh hoạt) là đáp án.',
        },
        {
          sentenceBefore: 'Unlike certain composite materials, cardboard boxes and newsprint are extraordinarily ',
          sentenceAfter: ' at modern processing centers.',
          answer: 'easy to recycle',
          vietnameseMeaning: 'Không giống như một số vật liệu tổng hợp, thùng carton và giấy báo rất dễ tái chế tại các trung tâm xử lý hiện đại.',
          explanation: 'Cấp độ Lớp 7 (A2- - Mở rộng): Cụm tính từ "easy to recycle" sau trạng từ "extraordinarily".',
        },
      ],
      8: [
        {
          sentenceBefore: 'Although sorting trash takes extra effort, citizens are urged to ',
          sentenceAfter: ' to prevent soil contamination.',
          answer: 'recycle used materials',
          vietnameseMeaning: 'Mặc dù phân loại rác đòi hỏi thêm công sức, người dân được khuyến khích tái chế các vật liệu đã qua sử dụng để ngăn ngừa ô nhiễm đất.',
          explanation: 'Cấp độ Lớp 8 (A2+ - Nâng cao cơ sở): Cấu trúc "urged to + V", cụm "recycle used materials" (tái chế vật liệu đã qua sử dụng) hoàn toàn phù hợp.',
        },
        {
          sentenceBefore: 'If local municipalities install dedicated sorting bins, residents will eagerly ',
          sentenceAfter: ' on a daily basis.',
          answer: 'recycle household waste',
          vietnameseMeaning: 'Nếu chính quyền địa phương lắp đặt các thùng phân loại rác chuyên dụng, người dân sẽ hào hứng tái chế rác thải sinh hoạt hàng ngày.',
          explanation: 'Cấp độ Lớp 8 (A2+ - Nâng cao cơ sở): Câu điều kiện Loại 1, cụm "recycle household waste" đi sau trợ động từ "will eagerly".',
        },
      ],
      9: [
        {
          sentenceBefore: 'Environmental policies strictly mandate that industrial manufacturers collect and ',
          sentenceAfter: ' rather than dumping toxic byproducts into rivers.',
          answer: 'recycle used materials',
          vietnameseMeaning: 'Các chính sách môi trường quy định nghiêm ngặt rằng các nhà sản xuất công nghiệp phải thu gom và tái chế vật liệu đã qua sử dụng thay vì xả các phụ phẩm độc hại ra sông ngòi.',
          explanation: 'Chuẩn Đề Tuyển sinh Lớp 10 THPT (B1): Cấu trúc giả định thức "mandate that ... collect and [V]", cụm "recycle used materials" là đáp án.',
        },
        {
          sentenceBefore: 'Modern packaging designs are engineered to be lightweight, biodegradable, and exceptionally ',
          sentenceAfter: ' in commercial recovery facilities.',
          answer: 'easy to recycle',
          vietnameseMeaning: 'Các thiết kế bao bì hiện đại được chế tạo để có trọng lượng nhẹ, có thể phân hủy sinh học và đặc biệt dễ tái chế tại các cơ sở thu hồi thương mại.',
          explanation: 'Chuẩn Đề Tuyển sinh Lớp 10 THPT (B1): Cấu trúc song hành của 3 tính từ (lightweight, biodegradable, and easy to recycle).',
        },
      ],
    },
  },

  lifestyle: {
    ipa: '/ˈlaɪf.staɪl/',
    pos: 'noun',
    grammarTag: '[countable]',
    definition: 'someone’s way of living; the things that a person or particular group of people usually do',
    examples: [
      { fullSentence: 'Eating clean food and exercising ensure a healthy lifestyle.', boldPhrase: 'healthy lifestyle' },
      { fullSentence: 'Many city dwellers now prefer a simple lifestyle close to nature.', boldPhrase: 'simple lifestyle' },
      { fullSentence: 'Regular stress and long working hours lead to a stressful lifestyle.', boldPhrase: 'stressful lifestyle' },
      { fullSentence: 'Modern technology has changed our traditional lifestyle significantly.', boldPhrase: 'traditional lifestyle' },
    ],
    collocations: ['healthy lifestyle', 'simple lifestyle', 'traditional lifestyle', 'stressful lifestyle'],
    gradeQuestions: {
      6: [
        {
          sentenceBefore: 'Exercising every morning and drinking fruit juice help us have a ',
          sentenceAfter: ' throughout the school week.',
          answer: 'healthy lifestyle',
          vietnameseMeaning: 'Tập thể dục mỗi sáng và uống nước hoa quả giúp chúng tôi có một lối sống lành mạnh trong suốt tuần học.',
          explanation: 'Cấp độ Lớp 6 (A1 - Cơ bản): Cụm danh từ "healthy lifestyle" (lối sống lành mạnh) đứng sau mạo từ "a".',
        },
        {
          sentenceBefore: 'My grandparents love the countryside because they can enjoy a peaceful, ',
          sentenceAfter: ' with their garden.',
          answer: 'simple lifestyle',
          vietnameseMeaning: 'Ông bà tôi yêu thích miền quê vì họ có thể tận hưởng một lối sống giản dị, yên bình bên khu vườn của mình.',
          explanation: 'Cấp độ Lớp 6 (A1 - Cơ bản): Cụm từ "simple lifestyle" (lối sống giản dị) hoàn chỉnh câu miêu tả gia đình.',
        },
      ],
      7: [
        {
          sentenceBefore: 'Doctor Mai explained that teenagers should balance study and sports to maintain a ',
          sentenceAfter: ' for good growth.',
          answer: 'healthy lifestyle',
          vietnameseMeaning: 'Bác sĩ Mai giải thích rằng các bạn thanh thiếu niên nên cân bằng giữa học tập và thể thao để duy trì lối sống lành mạnh cho sự phát triển tốt.',
          explanation: 'Cấp độ Lớp 7 (A2- - Mở rộng): Cụm danh từ "healthy lifestyle" làm tân ngữ trực tiếp cho động từ "maintain".',
        },
        {
          sentenceBefore: 'Living in crowded cities with heavy traffic often causes people to experience a ',
          sentenceAfter: ' that affects mental wellness.',
          answer: 'stressful lifestyle',
          vietnameseMeaning: 'Sống ở những thành phố đông đúc với giao thông tắc nghẽn thường khiến mọi người phải trải qua lối sống căng thẳng ảnh hưởng đến sức khỏe tinh thần.',
          explanation: 'Cấp độ Lớp 7 (A2- - Mở rộng): Cụm từ "stressful lifestyle" (lối sống căng thẳng) phù hợp với ngữ cảnh đô thị.',
        },
      ],
      8: [
        {
          sentenceBefore: 'Although ethnic minority groups welcome modern amenities, they still preserve their unique ',
          sentenceAfter: ' in mountainous villages.',
          answer: 'traditional lifestyle',
          vietnameseMeaning: 'Mặc dù các dân tộc thiểu số đón nhận các tiện nghi hiện đại, họ vẫn gìn giữ lối sống truyền thống độc đáo của mình tại các bản làng vùng cao.',
          explanation: 'Cấp độ Lớp 8 (A2+ - Nâng cao cơ sở): Câu phức nhượng bộ với "Although", cụm danh từ "traditional lifestyle" là đáp án chính xác.',
        },
        {
          sentenceBefore: 'If urban families choose to relocate to eco-villages, they will be able to pursue a ',
          sentenceAfter: ' in harmony with nature.',
          answer: 'simple lifestyle',
          vietnameseMeaning: 'Nếu các gia đình thành thị chọn chuyển về các làng sinh thái, họ sẽ có thể theo đuổi một lối sống giản dị hòa hợp với thiên nhiên.',
          explanation: 'Cấp độ Lớp 8 (A2+ - Nâng cao cơ sở): Câu điều kiện loại 1, cụm "simple lifestyle" diễn đạt ý tưởng lối sống sinh thái.',
        },
      ],
      9: [
        {
          sentenceBefore: 'Nutritionists argue that early educational intervention is crucial to fostering a ',
          sentenceAfter: ' among young generations.',
          answer: 'healthy lifestyle',
          vietnameseMeaning: 'Các chuyên gia dinh dưỡng khẳng định rằng sự can thiệp giáo dục sớm là rất quan trọng để nuôi dưỡng một lối sống lành mạnh trong thế hệ trẻ.',
          explanation: 'Chuẩn Đề Tuyển sinh Lớp 10 THPT (B1): Cụm danh từ học thuật "healthy lifestyle" đi sau danh động từ "fostering a".',
        },
        {
          sentenceBefore: 'Rapid urbanization and relentless work demands have inadvertently coerced many professionals into a dangerously ',
          sentenceAfter: ' devoid of leisure.',
          answer: 'stressful lifestyle',
          vietnameseMeaning: 'Quá trình đô thị hóa nhanh chóng và yêu cầu công việc dồn dập đã vô tình đẩy nhiều chuyên gia vào một lối sống căng thẳng nguy hiểm thiếu vắng sự thư giãn.',
          explanation: 'Chuẩn Đề Tuyển sinh Lớp 10 THPT (B1): Câu học thuật phân hóa cao, cụm "stressful lifestyle" đứng sau trạng từ "dangerously".',
        },
      ],
    },
  },

  tradition: {
    ipa: '/trəˈdɪʃ.ən/',
    pos: 'noun',
    grammarTag: '[countable, uncountable]',
    definition: 'a belief, principle, or way of acting that people in a society have continued to follow for a long time',
    examples: [
      { fullSentence: 'Having dinner together on New Year’s Eve is a cherished family tradition.', boldPhrase: 'family tradition' },
      { fullSentence: 'Young people organize festivals to keep the tradition alive.', boldPhrase: 'keep the tradition alive' },
      { fullSentence: 'Some modern families decide to break with tradition and travel during Tet.', boldPhrase: 'break with tradition' },
      { fullSentence: 'These unique folk games have been passed down by tradition.', boldPhrase: 'passed down by tradition' },
    ],
    collocations: ['family tradition', 'keep the tradition alive', 'break with tradition', 'passed down by tradition'],
    gradeQuestions: {
      6: [
        {
          sentenceBefore: 'Making Chung cakes before the Lunar New Year is a warm ',
          sentenceAfter: ' in my grandparents’ home.',
          answer: 'family tradition',
          vietnameseMeaning: 'Gói bánh chưng trước Tết Nguyên Đán là một truyền thống gia đình ấm cúng tại nhà ông bà tôi.',
          explanation: 'Cấp độ Lớp 6 (A1 - Cơ bản): Cụm danh từ "family tradition" (truyền thống gia đình) đứng sau mạo từ "a".',
        },
        {
          sentenceBefore: 'The folk songs and lion dances have been ',
          sentenceAfter: ' from our ancestors.',
          answer: 'passed down by tradition',
          vietnameseMeaning: 'Các điệu dân ca và múa lân đã được truyền lại theo truyền thống từ tổ tiên của chúng tôi.',
          explanation: 'Cấp độ Lớp 6 (A1 - Cơ bản): Cụm "passed down by tradition" (được truyền lại theo truyền thống) ở thể bị động.',
        },
      ],
      7: [
        {
          sentenceBefore: 'Our village organizes an annual boat-racing festival because residents want to ',
          sentenceAfter: ' for youth to witness.',
          answer: 'keep the tradition alive',
          vietnameseMeaning: 'Làng chúng tôi tổ chức lễ hội đua thuyền hàng năm vì người dân muốn gìn giữ truyền thống luôn sống mãi để giới trẻ được chứng kiến.',
          explanation: 'Cấp độ Lớp 7 (A2- - Mở rộng): Cấu trúc "want to + V", cụm "keep the tradition alive" (gìn giữ truyền thống tiếp tục tồn tại) là đáp án.',
        },
        {
          sentenceBefore: 'Instead of staying home for Tet reunions, a few young couples choose to ',
          sentenceAfter: ' and go abroad on holiday.',
          answer: 'break with tradition',
          vietnameseMeaning: 'Thay vì ở nhà sum họp ngày Tết, một vài cặp vợ chồng trẻ chọn phá vỡ truyền thống và đi nghỉ mát ở nước ngoài.',
          explanation: 'Cấp độ Lớp 7 (A2- - Mở rộng): Cụm "break with tradition" (phá vỡ truyền thống/làm khác đi) sau "choose to".',
        },
      ],
      8: [
        {
          sentenceBefore: 'Although globalization brings new foreign customs, cultural festivals help communities to ',
          sentenceAfter: ' for centuries.',
          answer: 'keep the tradition alive',
          vietnameseMeaning: 'Mặc dù toàn cầu hóa mang lại những phong tục nước ngoài mới, các lễ hội văn hóa giúp các cộng đồng gìn giữ truyền thống luôn sống mãi qua nhiều thế kỷ.',
          explanation: 'Cấp độ Lớp 8 (A2+ - Nâng cao cơ sở): Câu phức với "Although", cụm "keep the tradition alive" đi sau "help communities to".',
        },
        {
          sentenceBefore: 'The intangible cultural rituals of Tay and Nung communities have been strictly ',
          sentenceAfter: ' without alteration.',
          answer: 'passed down by tradition',
          vietnameseMeaning: 'Các nghi lễ văn hóa phi vật thể của cộng đồng người Tày và Nùng đã được truyền lại theo truyền thống một cách nghiêm ngặt mà không hề bị thay đổi.',
          explanation: 'Cấp độ Lớp 8 (A2+ - Nâng cao cơ sở): Thể bị động hoàn thành "have been strictly [passed down by tradition]".',
        },
      ],
      9: [
        {
          sentenceBefore: 'Folklorists advocate that hosting interactive school festivals is the most effective approach to ',
          sentenceAfter: ' in modern technological society.',
          answer: 'keep the tradition alive',
          vietnameseMeaning: 'Các nhà nghiên cứu văn hóa dân gian khẳng định rằng việc tổ chức các lễ hội tương tác tại trường học là phương pháp hiệu quả nhất để gìn giữ truyền thống sống mãi trong xã hội công nghệ hiện đại.',
          explanation: 'Chuẩn Đề Tuyển sinh Lớp 10 THPT (B1): Cấu trúc "approach to [doing sth/V]", cụm "keep the tradition alive" là đáp án.',
        },
        {
          sentenceBefore: 'Gathering around the ancestral altar on New Year’s Eve remains an inviolable ',
          sentenceAfter: ' that reinforces familial cohesion across generations.',
          answer: 'family tradition',
          vietnameseMeaning: 'Việc quây quần quanh bàn thờ tổ tiên vào đêm giao thừa vẫn là một truyền thống gia đình thiêng liêng củng cố sự gắn kết tình thân qua nhiều thế hệ.',
          explanation: 'Chuẩn Đề Tuyển sinh Lớp 10 THPT (B1): Câu phức với mệnh đề quan hệ "that reinforces...", cụm "family tradition" là đáp án.',
        },
      ],
    },
  },

  activity: {
    ipa: '/ækˈtɪv.ə.ti/',
    pos: 'noun',
    grammarTag: '[countable, uncountable]',
    definition: 'the situation in which a lot of things are happening, or something that you do for enjoyment',
    examples: [
      { fullSentence: 'Our school organizes exciting outdoor activities like camping and football on weekends.', boldPhrase: 'outdoor activities' },
      { fullSentence: 'Playing chess during break time is a favourite leisure activity for students.', boldPhrase: 'leisure activity' },
      { fullSentence: 'Pupils actively participate in various school activities every semester.', boldPhrase: 'school activities' },
      { fullSentence: 'Volunteering to clean streets is a meaningful community activity for young people.', boldPhrase: 'community activity' },
    ],
    collocations: ['outdoor activities', 'school activities', 'leisure activity', 'community activity'],
    gradeQuestions: {
      6: [
        {
          sentenceBefore: 'At our new school, all students love taking part in fun ',
          sentenceAfter: ' like singing and sports day.',
          answer: 'school activities',
          vietnameseMeaning: 'Ở trường học mới của chúng tôi, tất cả học sinh đều thích tham gia các hoạt động trường học thú vị như ca hát và ngày hội thể thao.',
          explanation: 'Cấp độ Lớp 6 (A1 - Cơ bản): Cụm danh từ số nhiều "school activities" (các hoạt động ở trường) đi sau tính từ "fun".',
        },
        {
          sentenceBefore: 'On cool autumn weekends, children enjoy engaging in ',
          sentenceAfter: ' like cycling and flying kites in the park.',
          answer: 'outdoor activities',
          vietnameseMeaning: 'Vào những ngày cuối tuần mùa thu mát mẻ, trẻ em thích tham gia các hoạt động ngoài trời như đạp xe và thả diều trong công viên.',
          explanation: 'Cấp độ Lớp 6 (A1 - Cơ bản): Cụm danh từ "outdoor activities" (hoạt động ngoài trời) hoàn toàn đúng nghĩa.',
        },
      ],
      7: [
        {
          sentenceBefore: 'Because sitting in front of screens is unhealthy, teenagers should pick an active ',
          sentenceAfter: ' such as swimming or badminton.',
          answer: 'leisure activity',
          vietnameseMeaning: 'Vì ngồi trước màn hình là không tốt cho sức khỏe, thanh thiếu niên nên chọn một hoạt động giải trí tích cực như bơi lội hoặc cầu lông.',
          explanation: 'Cấp độ Lớp 7 (A2- - Mở rộng): Cụm danh từ số ít "leisure activity" (hoạt động giải trí) đứng sau tính từ "active".',
        },
        {
          sentenceBefore: 'Donating used books to rural school children was an extraordinarily meaningful ',
          sentenceAfter: ' that touched everyone.',
          answer: 'community activity',
          vietnameseMeaning: 'Quyên góp sách cũ cho học sinh nông thôn là một hoạt động cộng đồng vô cùng ý nghĩa đã làm lay động tất cả mọi người.',
          explanation: 'Cấp độ Lớp 7 (A2- - Mở rộng): Cụm danh từ "community activity" (hoạt động cộng đồng) đứng sau mạo từ "an" và tính từ.',
        },
      ],
      8: [
        {
          sentenceBefore: 'Although academic curricula are demanding, educational boards mandate diverse ',
          sentenceAfter: ' to encourage holistic student development.',
          answer: 'school activities',
          vietnameseMeaning: 'Mặc dù chương trình học đòi hỏi cao, các hội đồng giáo dục vẫn yêu cầu các hoạt động trường học đa dạng để khuyến khích sự phát triển toàn diện của học sinh.',
          explanation: 'Cấp độ Lớp 8 (A2+ - Nâng cao cơ sở): Cấu trúc câu phức nhượng bộ với "Although", cụm "school activities" là đáp án chuẩn.',
        },
        {
          sentenceBefore: 'If teenagers spend less time playing video games, they will have more energy for healthy ',
          sentenceAfter: ' in open spaces.',
          answer: 'outdoor activities',
          vietnameseMeaning: 'Nếu thanh thiếu niên bớt thời gian chơi điện tử, họ sẽ có nhiều năng lượng hơn cho các hoạt động ngoài trời lành mạnh tại các không gian mở.',
          explanation: 'Cấp độ Lớp 8 (A2+ - Nâng cao cơ sở): Câu điều kiện loại 1, cụm danh từ "outdoor activities" phù hợp tuyệt đối.',
        },
      ],
      9: [
        {
          sentenceBefore: 'Extracurricular coordinators emphasize that student participation in structured ',
          sentenceAfter: ' cultivates leadership, resilience, and collaborative teamwork.',
          answer: 'school activities',
          vietnameseMeaning: 'Các điều phối viên ngoại khóa nhấn mạnh rằng sự tham gia của học sinh vào các hoạt động trường học có tổ chức sẽ rèn luyện kỹ năng lãnh đạo, tính kiên cường và tinh thần đồng đội.',
          explanation: 'Chuẩn Đề Tuyển sinh Lớp 10 THPT (B1): Cụm danh từ học thuật "school activities" sau tính từ "structured".',
        },
        {
          sentenceBefore: 'Adolescent psychologists observe that youth involvement in benevolent ',
          sentenceAfter: ' significantly reinforces emotional empathy and civic conscience.',
          answer: 'community activity',
          vietnameseMeaning: 'Các nhà tâm lý học thanh thiếu niên nhận thấy sự tham gia của giới trẻ vào hoạt động cộng đồng thiện nguyện sẽ củng cố đáng kể sự thấu cảm và lương tâm công dân.',
          explanation: 'Chuẩn Đề Tuyển sinh Lớp 10 THPT (B1): Cụm từ "community activity" đi sau tính từ học thuật "benevolent".',
        },
      ],
    },
  },
};

/**
 * Syntactic categories for accurate slot grammar
 */
type PhraseType =
  | 'VERB_BASE'
  | 'VERB_PAST'
  | 'VERB_PASSIVE'
  | 'VERB_ING'
  | 'AGENT_NOUN'
  | 'ADJ_PRED'
  | 'PREP_PHRASE'
  | 'ADV_PHRASE'
  | 'NOUN_WITH_DET'
  | 'NOUN_PLURAL'
  | 'NOUN_UNCOUNTABLE'
  | 'NOUN_SINGULAR';

const UNCOUNTABLE_HEADS = new Set([
  'music', 'butter', 'sugar', 'water', 'milk', 'rice', 'flour', 'beef', 'pork', 'soup',
  'news', 'advice', 'information', 'homework', 'housework', 'research', 'knowledge',
  'electricity', 'energy', 'power', 'furniture', 'luggage', 'baggage', 'garbage', 'waste',
  'trash', 'litter', 'rubbish', 'aluminium', 'copper', 'plastic', 'wood', 'silk', 'cotton',
  'wool', 'paper', 'glass', 'oil', 'gas', 'heat', 'light', 'noise', 'time', 'money', 'work',
  'health', 'safety', 'peace', 'happiness', 'confidence', 'anxiety', 'amazement', 'discipline',
  'culture', 'heritage', 'biodiversity', 'wildlife', 'nature', 'scenery', 'traffic', 'transport',
  'travel', 'tourism', 'shopping', 'bullying', 'cheating', 'acting', 'cooking', 'swimming',
  'cycling', 'trekking', 'camping', 'gardening', 'painting', 'drawing', 'pollution', 'congestion',
  'protection', 'education', 'communication', 'technology', 'science', 'equipment', 'software',
  'hardware', 'media', 'cuisine', 'weather', 'climate', 'rain', 'snow', 'wind', 'air', 'space',
  'gravity', 'oxygen', 'carbon dioxide', 'footprint', 'attendance', 'aerobics',
  'acrobatics', 'gymnastics', 'athletics', 'mathematics', 'physics', 'economics', 'politics',
  'access', 'stress', 'progress', 'success', 'leisure', 'fun', 'help', 'care', 'love', 'pride',
  'respect', 'patience', 'perseverance', 'determination', 'independence', 'equality',
  'life', 'nightlife', 'behaviour', 'behavior', 'laughter', 'evidence', 'assistance',
  'cooperation', 'tolerance', 'privacy', 'poverty', 'hunger', 'thirst', 'wealth', 'fame',
  'courage', 'wisdom', 'freedom', 'justice', 'honesty', 'charity', 'hospitality', 'generosity',
  'curiosity', 'creativity', 'productivity', 'efficiency', 'flexibility', 'reliability',
  'sustainability', 'popularity', 'simplicity', 'diversity', 'security', 'stability',
  'accommodation', 'transportation', 'conservation', 'deforestation', 'erosion', 'extinction',
  'globalisation', 'globalization', 'urbanisation', 'urbanization', 'overcrowding', 'unemployment',
  'violence', 'crime', 'illiteracy', 'malnutrition', 'inflation', 'disappointment', 'excitement',
  'embarrassment', 'frustration', 'exhaustion', 'relaxation', 'recreation', 'concentration',
  'imagination', 'inspiration', 'motivation', 'preparation', 'participation', 'interaction',
  'farming', 'herding', 'weaving', 'carving', 'knitting', 'sewing', 'pottery', 'embroidery',
  'lacquerware', 'sightseeing', 'sunbathing', 'jogging', 'skating', 'skiing', 'surfing',
  'diving', 'sailing', 'fishing', 'littering', 'cyberbullying', 'hiking', 'sunburn', 'acne',
  'obesity', 'flu', 'smoke', 'smog', 'exhaust', 'fume', 'damage', 'destruction', 'ruin',
  'luck', 'prosperity', 'childhood', 'adolescence', 'adulthood', 'youth', 'sleep', 'rest',
  'bonding', 'community service', 'history', 'training', 'learning', 'teaching',
  'recycling', 'warming', 'planning', 'volunteering', 'engineering', 'marketing',
  'advertising', 'housing', 'parking', 'clothing', 'architecture', 'nutrition', 'pop',
]);

const SINGULAR_S_ENDINGS = new Set([
  'news', 'physics', 'mathematics', 'aerobics', 'economics', 'acrobatics', 'gymnastics',
  'politics', 'ethics', 'athletics', 'series', 'species', 'campus', 'bus', 'glass', 'class',
  'grass', 'compass', 'dress', 'success', 'process', 'access', 'stress', 'progress', 'address',
  'express', 'fitness', 'illness', 'happiness', 'kindness', 'darkness', 'weakness', 'business',
  'witness', 'actress', 'waitress', 'princess', 'mattress', 'mess', 'loss', 'cross', 'boss',
  'plus', 'focus', 'status', 'virus', 'bonus', 'chorus', 'genius', 'cactus', 'tennis', 'crisis',
  'basis', 'thesis', 'analysis', 'oasis', 'chaos', 'gas', 'atlas', 'canvas', 'christmas',
  'homelessness', 'consciousness', 'awareness', 'effectiveness', 'usefulness', 'carelessness',
]);

const ALWAYS_PLURAL_NOUNS = new Set([
  'clothes', 'jeans', 'scissors', 'glasses', 'sunglasses', 'trousers', 'pants', 'shorts',
  'headphones', 'earphones', 'lyrics', 'savings', 'remains', 'goods', 'customs', 'authorities',
  'people', 'children', 'men', 'women', 'feet', 'teeth', 'mice', 'cattle', 'police',
  'handlebars', 'droppings', 'surroundings', 'belongings', 'congratulations', 'facilities',
  'activities', 'habits', 'amenities', 'species', 'chopsticks', 'fireworks', 'greetings',
]);

const BASE_VERB_STARTERS = new Set([
  'be', 'have', 'wear', 'break', 'develop', 'master', 'recycle', 'protect', 'preserve', 'improve',
  'take', 'make', 'do', 'join', 'visit', 'celebrate', 'explore', 'practice', 'practise', 'learn',
  'save', 'clean', 'play', 'eat', 'drink', 'buy', 'sell', 'help', 'support', 'share',
  'respect', 'listen', 'read', 'write', 'build', 'create', 'reduce', 'prevent', 'manage',
  'control', 'attend', 'prepare', 'organize', 'organise', 'promote', 'maintain', 'look',
  'become', 'feel', 'stay', 'keep', 'put', 'let', 'bring', 'give', 'show', 'use', 'study',
  'work', 'live', 'travel', 'go', 'come', 'send', 'spend', 'choose', 'apply', 'pass', 'teach',
  'encourage', 'prefer', 'start', 'stop', 'finish', 'change', 'lead', 'cause', 'allow', 'need',
  'want', 'try', 'enjoy', 'like', 'love', 'speak', 'talk', 'express', 'introduce', 'collect',
  'spread', 'pay', 'fly', 'decorate', 'cut', 'carry', 'herd', 'cultivate', 'browse', 'bully',
  'concentrate', 'erect', 'chase', 'release', 'absorb', 'bargain', 'dye', 'estimate', 'consist',
  'accomplish', 'appreciate', 'combat', 'record', 'watch', 'draw', 'cook', 'dry', 'cheer',
  'behave', 'cross', 'dislike', 'treat', 'avoid', 'compose', 'carve', 'appear', 'disappear',
  'affect', 'discover', 'check', 'discuss', 'damage', 'destroy', 'hold', 'win', 'pack', 'catch',
  'greet', 'follow', 'raise', 'solve', 'gain', 'walk', 'borrow', 'lend', 'climb', 'swim',
  'ride', 'drive', 'charge', 'search', 'upload', 'download', 'design', 'invent', 'connect',
  'communicate', 'produce', 'grow', 'harvest', 'feed', 'pick', 'reuse', 'donate', 'volunteer',
  'perform', 'sing', 'dance', 'paint', 'act', 'direct', 'compete', 'train', 'book', 'reserve',
  'depart', 'arrive', 'land', 'get', 'turn', 'set', 'run', 'move', 'wait', 'remain', 'continue',
  'generate', 'obey', 'admire', 'worship', 'offer', 'wish', 'gather', 'wrap', 'boil', 'fry',
  'bake', 'mix', 'pour', 'chop', 'peel', 'sort', 'plant', 'water', 'sweep', 'tidy', 'wash',
  'iron', 'mend', 'fix', 'repair', 'install', 'operate', 'program', 'navigate', 'orbit',
  'launch', 'evacuate', 'warn', 'rescue', 'foster', 'establish', 'achieve', 'complete', 'submit',
  'review', 'revise', 'memorize', 'memorise', 'translate', 'pronounce', 'chat', 'text', 'call',
  'reply', 'respond', 'interact', 'collaborate', 'cooperate', 'persuade', 'convince',
  'recommend', 'suggest', 'advise', 'remind', 'promise', 'decide', 'plan', 'expect', 'hope',
  'afford', 'earn', 'waste', 'queue', 'compare', 'return', 'exchange', 'refund', 'deliver',
  'order', 'log', 'sign', 'click', 'tap', 'swipe', 'stream', 'post', 'comment', 'subscribe',
  'block', 'report', 'verify', 'secure', 'update', 'upgrade', 'replace', 'remove',
  'knock', 'remember', 'forget', 'throw', 'welcome', 'last', 'score', 'shoot', 'strike',
  'detest', 'hate', 'feature', 'participate', 'recognise', 'recognize', 'locate', 'fine',
  'calculate', 'possess', 'contain', 'include', 'involve', 'require', 'depend', 'rely', 'focus',
  'survive', 'escape', 'predict', 'forecast', 'erupt', 'flood', 'pollute', 'harm', 'threaten',
  'ruin', 'erode', 'ban', 'prohibit', 'forbid', 'punish', 'violate', 'observe', 'pray', 'bow',
  'hug', 'kiss', 'smile', 'laugh', 'cry', 'shout', 'whisper', 'argue', 'debate', 'explain',
  'describe', 'define', 'illustrate', 'demonstrate', 'prove', 'confirm', 'announce', 'inform',
  'notify', 'inspire', 'motivate', 'attract', 'fascinate', 'impress', 'surprise', 'amaze',
  'disappoint', 'worry', 'bother', 'disturb', 'annoy', 'confuse', 'overcome', 'tackle', 'handle',
  'cope', 'deal', 'adapt', 'adjust', 'transform', 'convert', 'examine', 'investigate', 'analyse',
  'analyze', 'measure', 'count', 'weigh', 'balance', 'combine', 'separate', 'divide', 'increase',
  'decrease', 'drop', 'rise', 'expand', 'shrink', 'decline', 'collapse', 'construct', 'weave',
  'knit', 'sew', 'breed', 'hunt', 'conserve', 'safeguard', 'assist', 'contribute', 'tie',
  'applaud', 'entertain', 'relax', 'rest', 'sleep', 'wake', 'dream', 'exercise', 'stretch',
  'jog', 'hike', 'trek', 'camp', 'cycle', 'sail', 'surf', 'dive', 'ski', 'skate', 'jump',
  'skip', 'kick', 'hit', 'lift', 'push', 'pull', 'hang', 'fold', 'unpack', 'lock', 'unlock',
  'open', 'close', 'shut', 'ring', 'press', 'switch', 'plug', 'unplug', 'scroll', 'type',
  'print', 'scan', 'copy', 'paste', 'delete', 'broadcast', 'publish', 'edit', 'film', 'star',
  'conduct', 'rehearse', 'graduate', 'enrol', 'enroll', 'fail', 'hire', 'employ', 'retire',
  'owe', 'negotiate', 'purchase', 'trade', 'cancel', 'postpone', 'delay', 'reach', 'enter',
  'exit', 'tour', 'commute', 'board', 'park', 'steer', 'brake', 'accelerate', 'guide', 'float',
  'sink', 'glide', 'roll', 'spin', 'shake', 'explode', 'burn', 'melt', 'freeze', 'heat',
  'cool', 'warm', 'wet', 'rinse', 'wipe', 'mop', 'vacuum', 'dust', 'arrange', 'roast', 'grill',
  'simmer', 'stir', 'blend', 'beat', 'slice', 'serve', 'taste', 'smell', 'chew', 'swallow',
  'digest', 'breathe', 'cough', 'sneeze', 'bleed', 'heal', 'recover', 'cure', 'vaccinate',
  'quit', 'abandon', 'think', 'know', 'understand', 'realise', 'realize', 'believe', 'doubt',
  'wonder', 'guess', 'suppose', 'mind', 'matter', 'seem', 'sound', 'value', 'begin', 'end',
  'succeed', 'attempt', 'select', 'aim', 'intend', 'agree', 'refuse', 'accept', 'reject',
  'deny', 'admit', 'apologise', 'apologize', 'forgive', 'thank', 'congratulate', 'praise',
  'blame', 'criticise', 'criticize', 'complain', 'test', 'monitor', 'regulate', 'enforce',
  'enhance', 'strengthen', 'boost', 'found', 'supply', 'provide', 'distribute', 'link',
  'belong', 'relate', 'contrast', 'distinguish',  'identify', 'recall', 'remind', 'cherish', 'grip', 'peddle', 'pedal',
  'see', 'sight', 'spot', 'notice', 'watch', 'observe', 'hear', 'feel', 'find',
  'have', 'make', 'do', 'take', 'give', 'keep', 'hold', 'bring', 'carry',
  'buy', 'sell', 'pay', 'cost', 'send', 'show', 'tell', 'ask', 'answer',
  'leave', 'live', 'work', 'play', 'walk', 'ride', 'drive', 'fly', 'travel', 'sit', 'stand', 'lie', 'stay', 'move',
  'eat', 'drink', 'wear', 'read', 'write', 'draw', 'stretch', 'litter',
]);

const AMBIGUOUS_VERB_STARTERS = new Set([
  'clean', 'film', 'volunteer', 'work', 'study', 'play', 'camp', 'shop', 'cook', 'bake',
  'park', 'watch', 'record', 'live', 'train', 'plan', 'guide', 'support', 'help', 'care',
  'love', 'respect', 'trust', 'hope', 'wish', 'travel', 'tour', 'walk', 'run', 'swim',
  'fly', 'ride', 'drive', 'trade', 'focus', 'balance', 'design', 'paint', 'draw', 'print',
  'copy', 'check', 'test', 'monitor', 'control', 'review', 'report', 'post', 'call',
  'ring', 'chat', 'text', 'email', 'stream', 'broadcast', 'edit', 'star', 'act', 'direct',
  'score', 'shoot', 'strike', 'fine', 'warm', 'cool', 'dry', 'wet', 'open', 'close', 'lock',
  'switch', 'plug', 'charge', 'free', 'clear', 'calm', 'quiet', 'light', 'water', 'fire',
  'heat', 'waste', 'harm', 'damage', 'ruin', 'flood', 'crash', 'burn', 'break', 'fall',
  'drop', 'rise', 'step', 'turn', 'move', 'change', 'start', 'stop', 'end', 'stay', 'look',
  'sound', 'feel', 'seem', 'appear', 'last', 'mean', 'matter', 'mind', 'book', 'name',
  'hand', 'face', 'head', 'back', 'side', 'cover', 'store', 'share', 'visit', 'present',
  'value', 'benefit', 'cost', 'limit', 'risk', 'fear', 'need', 'want', 'dream', 'sleep',
  'rest', 'dress', 'wear', 'show', 'match', 'tie', 'seat', 'place', 'order', 'form',
  'mark', 'note', 'sign', 'stamp', 'list', 'search', 'link', 'miss', 'cross', 'pass',
  'stand', 'wait', 'wake', 'wave', 'wash', 'mix', 'blend', 'beat', 'slice', 'serve',
  'taste', 'smell', 'bite', 'chew', 'drink', 'eat', 'feed', 'harvest', 'plant', 'farm',
  'herd', 'hunt', 'fish', 'sail', 'surf', 'dive', 'ski', 'skate', 'hike', 'trek', 'jog',
  'cycle', 'race', 'win', 'lose', 'guess', 'wonder', 'doubt', 'matter', 'excuse',
  'sight', 'spot', 'notice', 'answer', 'stretch', 'litter', 'master',
]);

const PAST_VERB_STARTERS = new Set([
  'reached', 'found', 'went', 'came', 'saw', 'made', 'took', 'got', 'left', 'won', 'lost',
  'built', 'wrote', 'spoke', 'spent', 'kept', 'held', 'fought', 'taught', 'caught', 'bought',
  'brought', 'heard', 'felt', 'began', 'drank', 'sang', 'swam', 'flew', 'grew', 'knew',
  'threw', 'blew', 'drew', 'wore', 'tore', 'sold', 'told', 'paid', 'said', 'laid', 'stood',
  'understood', 'sat', 'ran', 'ate', 'fell', 'gave', 'forgave', 'forgot', 'hid', 'chose',
  'stole', 'woke', 'broke', 'drove', 'rode', 'rose', 'shone', 'struck', 'dug', 'hung',
  'met', 'fed', 'led', 'slept', 'swept', 'wept', 'dealt', 'meant', 'sent', 'lent', 'bent',
  'arrived', 'returned', 'finished', 'completed', 'achieved', 'succeeded', 'failed',
  'escaped', 'survived', 'discovered', 'explored', 'visited', 'joined', 'attended',
]);

const ADJ_ENDING_IN_LY = new Set([
  'friendly', 'lovely', 'lively', 'lonely', 'silly', 'ugly', 'elderly', 'daily', 'weekly',
  'monthly', 'yearly', 'early', 'family', 'homely', 'costly', 'chilly', 'timely', 'deadly',
  'orderly', 'manly', 'womanly', 'brotherly', 'sisterly', 'likely', 'unlikely',
]);

const ADVERB_MODIFIERS = new Set([
  'always', 'never', 'often', 'usually', 'sometimes', 'seldom', 'rarely', 'already',
  'finally', 'gradually', 'quickly', 'slowly', 'carefully', 'clearly', 'easily', 'properly',
  'regularly', 'actively', 'effectively', 'completely', 'warmly', 'adversely', 'greatly',
  'prominently', 'suddenly', 'strongly', 'deeply', 'wirelessly', 'officially', 'strictly',
  'seriously', 'badly', 'widely', 'closely', 'heavily', 'severely', 'quietly', 'patiently',
  'responsibly', 'truly', 'directly', 'safely', 'happily', 'willingly', 'successfully',
  'efficiently', 'continuously', 'immediately', 'constantly', 'independently', 'personally',
  'politely', 'gently', 'physically', 'mentally', 'financially', 'environmentally', 'socially',
  'potentially', 'abundantly', 'increasingly', 'nationally', 'internationally', 'readily',
  'highly', 'extremely', 'very', 'quite', 'rather', 'fairly', 'too',
]);

const AGENT_WORDS = [
  'artisan', 'craftsman', 'volunteer', 'member', 'teacher', 'student', 'pupil', 'classmate',
  'friend', 'neighbour', 'neighbor', 'worker', 'doctor', 'nurse', 'dentist', 'tourist',
  'visitor', 'passenger', 'pedestrian', 'cyclist', 'driver', 'resident', 'citizen', 'villager',
  'farmer', 'fisherman', 'candidate', 'examinee', 'specialist', 'expert', 'leader', 'master',
  'scientist', 'researcher', 'musician', 'composer', 'singer', 'actor', 'actress', 'director',
  'player', 'athlete', 'artist', 'painter', 'writer', 'author', 'journalist', 'reporter',
  'bartender', 'cashier', 'chef', 'cook', 'waiter', 'guide', 'agent', 'commander', 'astronaut',
  'speaker', 'learner', 'helper', 'teenager', 'adolescent', 'elder', 'ancestor',
  'relative', 'parent', 'grandparent', 'cousin', 'sibling', 'firefighter', 'delivery person',
  'person', 'boy', 'girl', 'scorer', 'victim', 'survivor', 'patient', 'refugee',
];

const ADJECTIVE_STARTERS = new Set([
  'easy', 'hard', 'difficult', 'crazy', 'addicted', 'dependent', 'essential', 'available',
  'readily', 'proud', 'famous', 'fond', 'keen', 'good', 'interested', 'suitable', 'full',
  'aware', 'rich', 'popular', 'harmful', 'useful', 'helpful', 'careful', 'friendly', 'active',
  'creative', 'confident', 'caring', 'clever', 'amazing', 'ancient', 'crowded', 'bumpy',
  'comfortable', 'convenient', 'cruel', 'bustling', 'congested', 'democratic', 'extended',
  'family-oriented', 'annual', 'bilingual', 'biometric', 'army-like', 'brilliant', 'chapped',
  'dim', 'confusing', 'healthy', 'unhealthy', 'stressful', 'simple', 'traditional', 'modern',
  'electric', 'automatic', 'reusable', 'broken', 'wooden', 'sandy', 'funny', 'favourite',
  'favorite', 'rural', 'urban', 'ethnic', 'cultural', 'natural', 'solar', 'hydro', 'nuclear',
  'renewable', 'non-renewable', 'sustainable', 'safe', 'dangerous', 'severe', 'major',
  'advanced', 'effective', 'efficient', 'responsible', 'independent', 'capable', 'willing',
  'fit', 'well-known', 'enjoyable', 'moving', 'touching', 'habitable', 'occupied', 'shy',
  'kind', 'warm', 'loving', 'diligent', 'hard-working', 'tall', 'slim', 'sporty', 'smart',
  'calm', 'polite', 'honest', 'generous', 'patient', 'brave', 'curious', 'faithful', 'loyal',
  'picturesque', 'eco-friendly', 'accessible', 'affordable', 'essential', 'vital', 'crucial',
  'significant', 'remarkable', 'memorable', 'unforgettable', 'breathtaking', 'magnificent',
]);

const NOUN_ENDINGS_NOT_ADJ = new Set([
  'fuel', 'ship', 'city', 'life', 'area', 'zone', 'place', 'room', 'time', 'way', 'day',
  'habit', 'habits', 'food', 'diet', 'meal', 'sport', 'game', 'work', 'job', 'role', 'plan',
  'system', 'tool', 'device', 'product', 'service', 'energy', 'power', 'source', 'tour', 'trip',
  'view', 'park', 'lake', 'river', 'beach', 'forest', 'earth', 'world', 'group', 'club', 'team',
  'class', 'school', 'home', 'house', 'village', 'street', 'road', 'path', 'sign', 'rule',
  'law', 'tax', 'fee', 'fine', 'price', 'cost', 'shop', 'store', 'market', 'item', 'gift',
  'toy', 'book', 'song', 'film', 'show', 'news', 'story', 'word', 'language', 'skill', 'test',
  'exam', 'task', 'goal', 'idea', 'issue', 'problem', 'effect', 'impact', 'risk', 'noise',
  'waste', 'gas', 'air', 'water', 'land', 'soil', 'tree', 'plant', 'animal', 'bird', 'fish',
  'star', 'planet', 'moon', 'sun', 'boy', 'girl', 'person', 'man', 'woman', 'student',
  'speaker', 'subject', 'environment', 'uniform', 'design', 'handwriting', 'attitude',
  'solution', 'smile', 'mind', 'heart', 'words', 'figure', 'neighbourhood', 'neighborhood',
  'landmark', 'restaurant', 'town', 'alley', 'passage', 'cafe', 'shore', 'landscape',
  'character', 'programme', 'program', 'value', 'channel', 'match', 'performance', 'scenery',
  'travel', 'transport', 'media', 'science', 'culture', 'behaviour', 'behavior', 'age',
  'gathering', 'portrait', 'footprint', 'firework', 'fireworks', 'display', 'history',
  'training', 'learning', 'teaching', 'practice', 'family', 'society', 'community',
  'activity', 'facility', 'tradition', 'economy', 'library', 'factory', 'gallery',
  'bakery', 'ceremony', 'harmony', 'memory', 'hobby', 'body', 'party', 'study',
  'ability', 'quality', 'safety', 'beauty', 'charity', 'poverty', 'security',
  'electricity', 'technology', 'industry', 'century', 'academy', 'countryside',
  'authority', 'priority', 'variety', 'majority', 'minority', 'opportunity',
  'responsibility', 'university', 'personality', 'nationality', 'reality', 'identity',
  'diversity', 'property', 'delivery', 'discovery', 'recovery', 'battery', 'pottery',
  'machinery', 'grocery', 'diary', 'dictionary', 'salary', 'summary', 'anniversary',
  'strategy', 'allergy', 'biology', 'ecology', 'geology', 'geography', 'photography',
  'company', 'journey', 'money', 'honey', 'valley', 'survey', 'holiday', 'birthday',
  'highway', 'pathway', 'railway', 'subway', 'takeaway', 'essay', 'delay', 'stay',
  'heating', 'lighting', 'clothing', 'housing', 'parking', 'wedding', 'meeting',
  'building', 'feeling', 'meaning', 'recycling', 'warming', 'planning', 'volunteering',
  'engineering', 'marketing', 'advertising', 'flooding', 'sightseeing', 'shopping',
  'cooking', 'reading', 'writing', 'swimming', 'camping', 'farming', 'gardening',
]);

const NEGATIVE_NOUN_WORDS = new Set([
  'earthquake', 'disaster', 'disasters', 'flood', 'floods', 'storm', 'storms', 'typhoon',
  'tsunami', 'volcano', 'eruption', 'landslide', 'tornado', 'drought', 'damage', 'victim',
  'victims', 'pollution', 'pollutant', 'pollutants', 'bullying', 'cyberbullying', 'cheating',
  'congestion', 'traffic jam', 'accident', 'accidents', 'fine', 'acne', 'stress', 'anxiety',
  'waste', 'garbage', 'litter', 'rubbish', 'problem', 'problems', 'risk', 'risks', 'danger',
  'threat', 'threats', 'fire', 'injury', 'injuries', 'illness', 'disease', 'diseases',
  'obesity', 'sunburn', 'allergy', 'symptom', 'symptoms', 'crime', 'poverty', 'unemployment',
  'conflict', 'obstacle', 'obstacles', 'pressure', 'addiction', 'deforestation', 'extinction',
  'warming', 'emission', 'emissions', 'shortage', 'loss', 'destruction', 'ruin', 'noise',
  'disappointment', 'failure', 'mistake', 'error', 'harm', 'hazard', 'hazards', 'crisis',
  'crash', 'collapse', 'hunger', 'pimple', 'pimples', 'flu', 'headache', 'toothache',
  'stomachache', 'fever', 'cough', 'trash', 'smoke', 'smog', 'exhaust', 'fume', 'fumes',
  'oil spill', 'plastic waste', 'carbon footprint', 'chapped lips',
]);

const DESTRUCTIVE_VERBS = new Set([
  'destroy', 'damage', 'pollute', 'harm', 'threaten', 'ruin', 'erode', 'collapse',
  'erupt', 'hurt', 'injure', 'overuse', 'waste', 'bully', 'cheat', 'litter', 'burn',
  'crash', 'explode', 'suffer', 'fail', 'lose', 'fine', 'flood',
]);

const AVOID_VERBS = new Set([
  'detest', 'hate', 'dislike', 'avoid', 'ban', 'prohibit', 'forbid', 'prevent',
  'reduce', 'combat', 'tackle', 'overcome', 'minimise', 'minimize', 'eliminate', 'limit',
]);

const COPING_SAFETY_VERBS = new Set([
  'survive', 'escape', 'evacuate', 'recover', 'rescue', 'shelter', 'withstand', 'flee',
]);

const AFFECTED_PERSON_RE = /\b(?:victim|victims|survivor|survivors|patient|patients|refugee|refugees)\b/i;

function isNegativeNounPhrase(word: string, phrase: string): boolean {
  const w = word.trim().toLowerCase();
  const p = phrase.trim().toLowerCase();
  if (AFFECTED_PERSON_RE.test(p)) return false;
  if (NEGATIVE_NOUN_WORDS.has(w) || NEGATIVE_NOUN_WORDS.has(p)) return true;
  // Strict token / word-boundary matching so "flu" never matches "fluently", "fine" never matches "define", "harm" never matches "harmony"
  const tokens = p.split(/[^a-z-]+/).filter(Boolean);
  for (const tok of tokens) {
    if (NEGATIVE_NOUN_WORDS.has(tok)) return true;
  }
  for (const neg of NEGATIVE_NOUN_WORDS) {
    if (neg.includes(' ')) {
      const escaped = neg.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      if (new RegExp(`\\b${escaped}\\b`, 'i').test(p)) return true;
    }
  }
  return false;
}

type VerbSemanticTone = 'normal' | 'destructive' | 'avoid' | 'coping';

function getVerbSemanticTone(phrase: string): VerbSemanticTone {
  const words = phrase.trim().toLowerCase().split(/\s+/);
  if (words.length === 0) return 'normal';
  if (['never', 'not', 'hardly', 'seldom', 'rarely'].includes(words[0])) {
    return 'normal';
  }
  const headVerb =
    words.length >= 2 &&
    (ADVERB_MODIFIERS.has(words[0]) || (words[0].endsWith('ly') && !ADJ_ENDING_IN_LY.has(words[0])))
      ? words[1]
      : words[0];
  if (COPING_SAFETY_VERBS.has(headVerb)) return 'coping';
  if (DESTRUCTIVE_VERBS.has(headVerb)) return 'destructive';
  if (AVOID_VERBS.has(headVerb)) return 'avoid';
  return 'normal';
}

const NOUN_SUFFIX_EXCEPTIONS = new Set([
  'festival', 'animal', 'capital', 'hospital', 'mineral', 'material', 'signal', 'canal',
  'journal', 'manual', 'metal', 'medal', 'pedal', 'petal', 'rival', 'survival', 'arrival',
  'proposal', 'rehearsal', 'music', 'traffic', 'public', 'republic', 'topic', 'plastic',
  'picnic', 'clinic', 'comic', 'critic', 'logic', 'magic', 'panic', 'student', 'parent',
  'patient', 'resident', 'president', 'accident', 'incident', 'ingredient', 'instrument',
  'equipment', 'environment', 'government', 'department', 'apartment', 'document', 'monument',
  'movement', 'moment', 'talent', 'event', 'tent', 'rent', 'cent', 'percent', 'agent',
  'client', 'accent', 'content', 'restaurant', 'assistant', 'accountant', 'servant',
  'merchant', 'participant', 'inhabitant', 'immigrant', 'plant', 'giant', 'elephant',
  'habit', 'benefit', 'credit', 'limit', 'spirit', 'visit', 'unit', 'exit', 'profit',
  'orbit', 'planet', 'pocket', 'ticket', 'market', 'basket', 'blanket', 'jacket', 'packet',
  'rocket', 'bucket', 'carpet', 'target', 'budget', 'gadget', 'diet', 'poet', 'secret',
  'asset', 'sunset', 'internet', 'alphabet', 'cabinet', 'bracelet', 'helmet', 'tablet',
  'leaflet', 'outlet', 'bullet', 'wallet', 'toilet', 'ballet', 'buffet', 'banquet',
  'memory', 'history', 'story', 'factory', 'gallery', 'bakery', 'library', 'dictionary',
  'vocabulary', 'category', 'territory', 'victory', 'century', 'injury', 'luxury', 'mystery',
  'scenery', 'battery', 'delivery', 'discovery', 'recovery', 'surgery', 'grocery', 'pottery',
  'embroidery', 'stationery', 'machinery', 'detective', 'executive', 'relative', 'native',
  'objective', 'perspective', 'alternative', 'representative', 'initiative', 'narrative',
  'motive', 'olive', 'hive', 'archive', 'facility', 'community', 'activity', 'ability',
]);

/**
 * Infer Part of Speech accurately when a keyword is not in the curated or syllabus wordlists
 * (prevents words like "delicious", "depend", "fluently", "resilient" from defaulting to "noun").
 */
function inferPartOfSpeech(word: string): string {
  const clean = word.trim().toLowerCase();
  if (!clean) return 'noun';
  const words = clean.split(/\s+/);
  const first = words[0] || '';

  if (words.length >= 2) {
    if (BASE_VERB_STARTERS.has(first)) return 'verb phr';
    if (/^(in|on|at|by|for|from|with|without|out|under|over)\b/.test(first)) return 'prep phr';
    return 'noun phr';
  }

  if (clean.endsWith('ly') && !ADJ_ENDING_IN_LY.has(clean) && !['family', 'assembly', 'reply', 'supply', 'butterfly', 'jelly', 'belly', 'ally', 'rally', 'valley', 'trolley', 'alley', 'volley', 'bully'].includes(clean)) {
    return 'adverb';
  }
  if (ADJECTIVE_STARTERS.has(clean) || ATTRIBUTIVE_ONLY_ADJS.has(clean)) {
    return 'adjective';
  }
  if (BASE_VERB_STARTERS.has(clean) && !NOUN_ENDINGS_NOT_ADJ.has(clean) && !NOUN_SUFFIX_EXCEPTIONS.has(clean)) {
    return 'verb';
  }
  if (
    !NOUN_ENDINGS_NOT_ADJ.has(clean) &&
    !NOUN_SUFFIX_EXCEPTIONS.has(clean) &&
    /(?:ous|ful|less|ive|able|ible|ish|ic|al|ent|ant|ary|ory)$/.test(clean) &&
    clean.length >= 4
  ) {
    return 'adjective';
  }
  if (/(?:ize|ise|ify|ate)$/.test(clean) && !NOUN_SUFFIX_EXCEPTIONS.has(clean) && clean.length >= 5) {
    return 'verb';
  }
  return 'noun';
}

type NounSemanticClass =
  | 'HUMAN_GROUP'
  | 'TIME_EVENT'
  | 'PLACE'
  | 'FOOD'
  | 'NEGATIVE_DISASTER'
  | 'GENERAL';

const HUMAN_GROUP_NOUNS = new Set([
  'family', 'families', 'household', 'households', 'generation', 'generations',
  'community', 'communities', 'society', 'societies', 'team', 'teams', 'group', 'groups',
  'club', 'clubs', 'class', 'classes', 'crowd', 'crowds', 'audience', 'staff', 'crew',
  'minority', 'minorities', 'people', 'citizens', 'residents', 'villagers', 'neighbours',
  'neighbors', 'teenagers', 'teens', 'students', 'pupils', 'learners', 'children', 'kids',
  'parents', 'relatives', 'ancestors', 'elders', 'youth', 'friends', 'classmates',
  'schoolmates', 'colleagues', 'workers', 'employees', 'volunteers', 'tourists', 'visitors',
  'travellers', 'travelers', 'passengers', 'customers', 'guests', 'artisans', 'craftsmen',
  'farmers', 'teachers', 'doctors', 'engineers', 'scientists', 'artists', 'performers',
  'musicians', 'singers', 'actors', 'writers', 'athletes', 'players', 'leaders', 'members',
  'participants', 'experts', 'specialists', 'officials', 'authorities', 'speakers',
]);

const TIME_EVENT_NOUNS = new Set([
  'period', 'periods', 'stay', 'stays', 'visit', 'visits', 'trip', 'trips', 'journey',
  'journeys', 'tour', 'tours', 'holiday', 'holidays', 'vacation', 'vacations', 'break',
  'breaks', 'festival', 'festivals', 'ceremony', 'ceremonies', 'anniversary', 'anniversaries',
  'event', 'events', 'celebration', 'celebrations', 'occasion', 'occasions', 'gathering',
  'gatherings', 'meeting', 'meetings', 'reunion', 'reunions', 'contest', 'contests',
  'competition', 'competitions', 'exhibition', 'exhibitions', 'concert', 'concerts',
  'performance', 'performances', 'show', 'shows', 'season', 'seasons', 'century', 'centuries',
  'decade', 'decades', 'era', 'moment', 'moments', 'times', 'time', 'past', 'future',
  'childhood', 'weekend', 'weekends', 'schedule', 'schedules', 'deadline', 'deadlines',
  'memory', 'memories', 'history', 'experience', 'experiences', 'adventure', 'adventures',
]);

const PLACE_NOUNS = new Set([
  'town', 'towns', 'city', 'cities', 'village', 'villages', 'neighbourhood', 'neighbourhoods',
  'neighborhood', 'neighborhoods', 'district', 'districts', 'province', 'provinces',
  'countryside', 'suburb', 'suburbs', 'temple', 'temples', 'pagoda', 'pagodas', 'monument',
  'monuments', 'castle', 'castles', 'palace', 'palaces', 'museum', 'museums', 'library',
  'libraries', 'school', 'schools', 'classroom', 'classrooms', 'campus', 'facility',
  'facilities', 'amenity', 'amenities', 'park', 'parks', 'garden', 'gardens', 'beach',
  'beaches', 'island', 'islands', 'mountain', 'mountains', 'valley', 'valleys', 'river',
  'rivers', 'lake', 'lakes', 'forest', 'forests', 'cave', 'caves', 'waterfall', 'waterfalls',
  'bay', 'bays', 'habitat', 'habitats', 'ecosystem', 'ecosystems', 'home', 'homes', 'house',
  'houses', 'room', 'rooms', 'street', 'streets', 'road', 'roads', 'bridge', 'bridges',
  'station', 'stations', 'airport', 'airports', 'market', 'markets', 'shop', 'shops',
  'store', 'stores', 'mall', 'malls', 'restaurant', 'restaurants', 'cafe', 'cafes',
  'theatre', 'theatres', 'theater', 'theaters', 'cinema', 'cinemas', 'stadium', 'stadiums',
  'hospital', 'hospitals', 'clinic', 'clinics', 'factory', 'factories', 'plant', 'plants',
  'farm', 'farms', 'site', 'sites', 'area', 'areas', 'region', 'regions', 'zone', 'zones', 'space', 'spaces', 'place', 'places', 'destination',
  'destinations', 'attraction', 'attractions', 'wonder', 'wonders', 'landmark', 'landmarks',
  'ruins', 'building', 'buildings', 'centre', 'center', 'centres', 'centers', 'square',
  'hall', 'resort', 'resorts', 'harbour', 'harbor', 'port', 'alley', 'complex',
]);

const FOOD_NOUNS = new Set([
  'food', 'foods', 'dish', 'dishes', 'meal', 'meals', 'snack', 'snacks', 'drink', 'drinks',
  'beverage', 'beverages', 'soup', 'soups', 'noodle', 'noodles', 'cake', 'cakes', 'bread',
  'rice', 'fruit', 'fruits', 'vegetable', 'vegetables', 'ingredient', 'ingredients', 'recipe',
  'recipes', 'cuisine', 'speciality', 'specialities', 'specialty', 'specialties', 'flavour',
  'flavours', 'flavor', 'flavors', 'taste', 'diet', 'diets', 'nutrition', 'breakfast',
  'lunch', 'dinner', 'supper', 'dessert', 'desserts', 'salad', 'tea', 'coffee', 'milk',
  'juice', 'sauce', 'spice', 'spices', 'meat', 'seafood', 'fish', 'pastry', 'sandwich',
]);

function classifyNounSemantics(
  phrase: string,
  word: string,
  isNeg: boolean,
  isAffected: boolean
): NounSemanticClass {
  if (isAffected) return 'HUMAN_GROUP';
  if (isNeg) return 'NEGATIVE_DISASTER';
  const head = getHeadNoun(phrase);
  const wHead = getHeadNoun(word);
  const lowerP = phrase.trim().toLowerCase();
  const isIndustrialPlant = /\b(?:nuclear|power|industrial|chemical|treatment|manufacturing)\s+plants?\b/.test(lowerP);
  if (HUMAN_GROUP_NOUNS.has(head) || HUMAN_GROUP_NOUNS.has(wHead)) return 'HUMAN_GROUP';
  if (TIME_EVENT_NOUNS.has(head) || TIME_EVENT_NOUNS.has(wHead)) return 'TIME_EVENT';
  if (!isIndustrialPlant && (PLACE_NOUNS.has(head) || PLACE_NOUNS.has(wHead))) return 'PLACE';
  if (FOOD_NOUNS.has(head) || FOOD_NOUNS.has(wHead)) return 'FOOD';
  return 'GENERAL';
}

type AdjSemanticClass = 'HUMAN_TRAIT' | 'FOOD_TASTE' | 'PLACE_ATMOSPHERE' | 'GENERAL_EVAL';

const HUMAN_TRAIT_ADJS = new Set([
  'confident', 'happy', 'sad', 'angry', 'proud', 'shy', 'polite', 'rude', 'friendly', 'kind',
  'generous', 'honest', 'patient', 'brave', 'calm', 'excited', 'nervous', 'anxious', 'worried',
  'stressed', 'relaxed', 'tired', 'bored', 'surprised', 'amazed', 'disappointed', 'grateful',
  'helpful', 'careful', 'careless', 'active', 'lazy', 'diligent', 'hard-working', 'creative',
  'curious', 'independent', 'dependent', 'responsible', 'resilient', 'mature', 'ambitious',
  'optimistic', 'tolerant', 'open-minded', 'sociable', 'outgoing', 'talkative', 'selfish',
  'jealous', 'lonely', 'homesick', 'healthy', 'fit', 'ill', 'sick', 'hungry', 'thirsty',
  'clever', 'smart', 'intelligent', 'wise', 'talented', 'fluent', 'capable', 'aware', 'ready',
  'willing', 'eager', 'keen', 'fond', 'afraid', 'scared', 'frightened', 'upset', 'embarrassed',
  'confused', 'delighted', 'cheerful', 'enthusiastic', 'passionate', 'determined', 'persistent',
  'punctual', 'humble', 'loyal', 'faithful', 'trustworthy', 'elderly', 'young', 'polite',
  'considerate', 'thoughtful', 'sympathetic', 'empathetic', 'motivated', 'focused', 'alert',
]);

const FOOD_TASTE_ADJS = new Set([
  'delicious', 'tasty', 'yummy', 'spicy', 'sweet', 'sour', 'bitter', 'salty', 'crispy',
  'crunchy', 'fresh', 'juicy', 'nutritious', 'flavourful', 'flavorful', 'fragrant', 'tender',
  'creamy', 'raw', 'ripe', 'stale', 'rotten', 'greasy', 'oily', 'bland', 'appetizing',
  'mouth-watering', 'savoury', 'savory', 'chewy', 'roasted', 'grilled', 'fried', 'steamed',
]);

const PLACE_ATMOSPHERE_ADJS = new Set([
  'crowded', 'busy', 'noisy', 'quiet', 'peaceful', 'spacious', 'narrow', 'wide', 'scenic',
  'picturesque', 'magnificent', 'breathtaking', 'stunning', 'ancient', 'historic', 'polluted',
  'clean', 'tidy', 'messy', 'dirty', 'dusty', 'humid', 'sunny', 'rainy', 'windy', 'foggy',
  'chilly', 'freezing', 'warm', 'cool', 'comfortable', 'cosy', 'cozy', 'convenient',
  'accessible', 'remote', 'isolated', 'lively', 'vibrant', 'bustling', 'packed', 'deserted',
  'ruined', 'damaged', 'flooded', 'congested', 'spectacular', 'majestic', 'charming',
  'gorgeous', 'tranquil', 'serene', 'urban', 'rural', 'coastal', 'mountainous', 'liveable',
  'livable', 'welcoming', 'hospitable',
]);

function classifyAdjSemantics(phrase: string): AdjSemanticClass {
  const tokens = phrase.trim().toLowerCase().split(/\s+/);
  for (let i = tokens.length - 1; i >= 0; i--) {
    const t = tokens[i];
    if (FOOD_TASTE_ADJS.has(t)) return 'FOOD_TASTE';
    if (HUMAN_TRAIT_ADJS.has(t)) return 'HUMAN_TRAIT';
    if (PLACE_ATMOSPHERE_ADJS.has(t)) return 'PLACE_ATMOSPHERE';
  }
  return 'GENERAL_EVAL';
}

type AdvSemanticClass = 'SPEECH_COMM' | 'GENERAL_MANNER';

const SPEECH_COMM_ADVS = new Set([
  'fluently', 'politely', 'clearly', 'loudly', 'softly', 'quietly', 'honestly', 'warmly',
  'kindly', 'rudely', 'frankly', 'openly', 'confidently', 'eloquently', 'accurately',
  'bilingually', 'expressively', 'respectfully', 'calmly', 'patiently', 'sincerely',
]);

function classifyAdvSemantics(phrase: string): AdvSemanticClass {
  const tokens = phrase.trim().toLowerCase().split(/\s+/);
  for (const t of tokens) {
    if (SPEECH_COMM_ADVS.has(t)) return 'SPEECH_COMM';
  }
  return 'GENERAL_MANNER';
}

function hashString(input: string): number {
  let h = 2166136261;
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function chooseArticle(phrase: string): 'a' | 'an' {
  const clean = phrase.trim().toLowerCase();
  if (!clean) return 'a';
  const firstWord = clean.split(/\s+/)[0] || '';
  if (
    firstWord.startsWith('uni') ||
    firstWord.startsWith('use') ||
    firstWord.startsWith('eu') ||
    firstWord.startsWith('one') ||
    firstWord.startsWith('ufo') ||
    firstWord === 'u'
  ) {
    return 'a';
  }
  if (
    firstWord.startsWith('hour') ||
    firstWord.startsWith('honest') ||
    firstWord.startsWith('honour') ||
    firstWord.startsWith('honor') ||
    firstWord.startsWith('heir') ||
    firstWord === 'led' ||
    firstWord === 'sms' ||
    firstWord === 'ai'
  ) {
    return 'an';
  }
  if (/^[aeiou]/.test(firstWord)) return 'an';
  return 'a';
}

function getHeadNoun(phrase: string): string {
  const cleaned = phrase.trim().toLowerCase();
  const beforePrep = cleaned.split(/\s+(?:of|in|for|on|with|to|from|at|about|by)\s+/)[0] || cleaned;
  const words = beforePrep.split(/\s+/);
  return words[words.length - 1] || '';
}

function isPluralPhrase(phrase: string, pos: string): boolean {
  const clean = phrase.trim().toLowerCase();
  if (pos.includes('plural') && !clean.includes(' ')) return true;
  const head = getHeadNoun(clean);
  if (!head) return false;
  if (ALWAYS_PLURAL_NOUNS.has(head)) return true;
  if (UNCOUNTABLE_HEADS.has(head) || SINGULAR_S_ENDINGS.has(head)) return false;
  if (head.endsWith('s') && head.length > 3 && !head.endsWith('ss') && !head.endsWith('us') && !head.endsWith('is')) {
    return true;
  }
  return false;
}

function looksLikeAdjectiveWord(w: string): boolean {
  if (!w || NOUN_ENDINGS_NOT_ADJ.has(w)) return false;
  if (ADJECTIVE_STARTERS.has(w)) return true;
  return /(?:able|ible|ful|less|ous|ive|ic|ish|ary|ory|ent|ant|ed|ing)$/.test(w);
}

function detectPhraseType(phrase: string, pos: string): PhraseType {
  const p = phrase.trim().toLowerCase();
  const words = p.split(/\s+/);
  const firstWord = words[0] || '';
  const lastWord = words[words.length - 1] || '';
  const pPos = (pos || '').toLowerCase();

  // 1. Prepositional phrase (e.g., "in front of", "on the left", "as a volunteer", "to our disappointment")
  if (
    !BASE_VERB_STARTERS.has(firstWord) &&
    (pPos.includes('prep') ||
      /^(in|on|at|by|with|for|from|between|under|over|near|into|without|instead of|in front of|next to|close to|as|like|about|after|before|during|through|towards|toward|around|against|among|across|beyond|behind|below|beneath|beside|besides|despite|inside|outside|onto|since|throughout|underneath|until|upon|within|to our)\b/.test(p))
  ) {
    if (words.length >= 2 || pPos === 'prep') {
      return 'PREP_PHRASE';
    }
  }

  // 2. Passive / Past participle phrase (e.g., "destroyed by flood", "measured in Fahrenheit", "heavily fined", "conveniently located")
  if (
    words.length >= 2 &&
    (
      /^[a-z-]+(?:ed|en|wn|lt|pt|nt|st|ft|ght|und|ade)\s+(?:by|in|at|from|into)\b/.test(p) ||
      (
        (ADVERB_MODIFIERS.has(firstWord) || (firstWord.endsWith('ly') && !ADJ_ENDING_IN_LY.has(firstWord))) &&
        ['fined', 'located', 'damaged', 'destroyed', 'affected', 'moved', 'respected', 'protected', 'built', 'designed', 'used', 'known', 'written', 'recorded', 'measured', 'received', 'treated'].includes(words[1] || '')
      )
    )
  ) {
    return 'VERB_PASSIVE';
  }

  // 3. Predicative adjective / adj + prep / adv + adj / adj and adj
  // Never misclassify linking-verb phrases like "feel confident", "stay calm", "become popular" as ADJ_PRED
  const startsWithBaseVerb = BASE_VERB_STARTERS.has(firstWord) && words.length >= 2;

  if (
    !startsWithBaseVerb &&
    (
      p.startsWith('easy to ') ||
      p.startsWith('hard to ') ||
      p.startsWith('difficult to ') ||
      p.startsWith('ready to ') ||
      p.startsWith('shy to ') ||
      p.startsWith('likely to ') ||
      p.startsWith('unlikely to ') ||
      p.startsWith('too ') ||
      (/^[a-z-]+\s+(?:to|with|for|of|on|in|at|about|from)\s+/.test(p) && (ADJECTIVE_STARTERS.has(firstWord) || pPos.includes('adj'))) ||
      p.startsWith('very ') ||
      p.startsWith('quite ') ||
      p.startsWith('extremely ')
    )
  ) {
    const lastIsPureAdv = lastWord.endsWith('ly') && !ADJ_ENDING_IN_LY.has(lastWord);
    if (!lastIsPureAdv && !NOUN_ENDINGS_NOT_ADJ.has(lastWord) && !BASE_VERB_STARTERS.has(firstWord)) {
      return 'ADJ_PRED';
    }
  }

  // Coordinated adjectives: "warm and friendly", "fit and healthy", "diligent and hard-working"
  if (!startsWithBaseVerb && words.length >= 3 && words.includes('and') && !NOUN_ENDINGS_NOT_ADJ.has(lastWord) && !isPluralPhrase(p, pPos)) {
    if (pPos.includes('adj') || ADJECTIVE_STARTERS.has(firstWord) || looksLikeAdjectiveWord(lastWord)) {
      return 'ADJ_PRED';
    }
  }

  // Adverb + Adverb phrase: "very fluently", "really fluently", "quite clearly", "more effectively"
  if (
    words.length >= 2 &&
    (ADVERB_MODIFIERS.has(firstWord) ||
      ['more', 'most', 'less', 'so', 'too', 'really', 'very', 'quite', 'fairly', 'pretty', 'extremely', 'especially', 'particularly', 'remarkably', 'increasingly', 'truly', 'completely'].includes(firstWord)) &&
    lastWord.endsWith('ly') &&
    !ADJ_ENDING_IN_LY.has(lastWord)
  ) {
    return 'ADV_PHRASE';
  }

  // Adverb + Adjective: "physically fit", "truly enjoyable", "heavily congested", "fully occupied", "deeply touching"
  if (
    !startsWithBaseVerb &&
    words.length >= 2 &&
    (ADVERB_MODIFIERS.has(firstWord) || (firstWord.endsWith('ly') && !ADJ_ENDING_IN_LY.has(firstWord))) &&
    !NOUN_ENDINGS_NOT_ADJ.has(lastWord) &&
    !isPluralPhrase(p, pPos) &&
    (!BASE_VERB_STARTERS.has(words[1] || '') || ADJECTIVE_STARTERS.has(lastWord)) &&
    (looksLikeAdjectiveWord(lastWord) || ADJECTIVE_STARTERS.has(lastWord) || (pPos.includes('adj') && !pPos.includes('noun')))
  ) {
    return 'ADJ_PRED';
  }

  // Single-word adjective
  if (words.length === 1 && pPos.includes('adj') && !pPos.includes('noun')) {
    return 'ADJ_PRED';
  }

  // Multi-word pure adj phrase ending in an adjective (exclude linking-verb phrases like "feel confident")
  if (
    !startsWithBaseVerb &&
    pPos.includes('adj') &&
    !pPos.includes('noun') &&
    !NOUN_ENDINGS_NOT_ADJ.has(lastWord) &&
    !isPluralPhrase(p, pPos) &&
    !(lastWord.endsWith('ly') && !ADJ_ENDING_IN_LY.has(lastWord)) &&
    (ADJECTIVE_STARTERS.has(lastWord) || looksLikeAdjectiveWord(lastWord))
  ) {
    return 'ADJ_PRED';
  }

  // 4. Past-tense verb phrases: "finally reached home", "finally found the way"
  if (
    PAST_VERB_STARTERS.has(firstWord) ||
    (words.length >= 2 &&
      (ADVERB_MODIFIERS.has(firstWord) || (firstWord.endsWith('ly') && !ADJ_ENDING_IN_LY.has(firstWord))) &&
      PAST_VERB_STARTERS.has(words[1] || ''))
  ) {
    return 'VERB_PAST';
  }

  // 5. Adverb phrase (standalone adverb or adv + adv, NOT adv + verb or adv + adj)
  if (pPos.includes('adv') && words.length === 1) {
    return 'ADV_PHRASE';
  }
  if (words.length === 1 && firstWord.endsWith('ly') && !ADJ_ENDING_IN_LY.has(firstWord) && !pPos.includes('noun')) {
    return 'ADV_PHRASE';
  }

  // 6. V-ing gerund verb phrases (exclude adj+noun like "eating habits", "floating market")
  if (
    words.length >= 2 &&
    firstWord.endsWith('ing') &&
    !ADJECTIVE_STARTERS.has(firstWord) &&
    !isPluralPhrase(p, pPos) &&
    !NOUN_ENDINGS_NOT_ADJ.has(lastWord) &&
    [
      'learning', 'wearing', 'making', 'doing', 'breaking', 'playing', 'living', 'studying',
      'staying', 'helping', 'protecting', 'reducing', 'saving', 'using', 'taking', 'visiting',
      'reading', 'writing', 'eating', 'cooking', 'traveling', 'travelling', 'working', 'speaking',
      'recycling', 'preserving', 'participating', 'volunteering', 'exploring', 'celebrating',
      'decorating', 'preparing', 'maintaining', 'developing', 'building', 'improving', 'sharing',
      'respecting', 'obeying', 'enjoying', 'spending', 'avoiding', 'choosing', 'finding',
      'keeping', 'trying', 'watching', 'communicating', 'listening',
    ].includes(firstWord)
  ) {
    const second = words[1] || '';
    if (['in', 'on', 'at', 'with', 'to', 'the', 'a', 'an', 'for', 'more', 'less', 'together'].includes(second) || words.length >= 3 || second.endsWith('s')) {
      return 'VERB_ING';
    }
  }

  // 7. Base verb phrases (including "ADV + BASE_VERB" like "completely destroy", "warmly welcome", "always remember")
  const isPureVerbPos = pPos.includes('verb') && !pPos.includes('adv') && !pPos.includes('noun');
  const isAdvPlusBaseVerb =
    words.length >= 2 &&
    (ADVERB_MODIFIERS.has(firstWord) || (firstWord.endsWith('ly') && !ADJ_ENDING_IN_LY.has(firstWord))) &&
    (BASE_VERB_STARTERS.has(words[1] || '') || isPureVerbPos) &&
    !PAST_VERB_STARTERS.has(words[1] || '') &&
    !(words[1] || '').endsWith('ed') &&
    !(words[1] || '').endsWith('ing');

  if (isAdvPlusBaseVerb) {
    return 'VERB_BASE';
  }

  const secondWord = words[1] || '';
  const isLinkingVerbPlusAdj =
    words.length >= 2 &&
    ['feel', 'stay', 'remain', 'become', 'grow', 'seem', 'keep'].includes(firstWord) &&
    (ADJECTIVE_STARTERS.has(secondWord) || looksLikeAdjectiveWord(secondWord)) &&
    !NOUN_ENDINGS_NOT_ADJ.has(secondWord);
  const isHelpVerbPlusObj =
    words.length >= 2 &&
    firstWord === 'help' &&
    !['desk', 'line', 'centre', 'center', 'service', 'group'].includes(secondWord);
  const isVerbPlusAdv =
    words.length >= 2 &&
    isPureVerbPos &&
    lastWord.endsWith('ly') &&
    !ADJ_ENDING_IN_LY.has(lastWord);
  const isCareForVerb =
    words.length >= 2 &&
    isPureVerbPos &&
    firstWord === 'care' &&
    ['for', 'about'].includes(secondWord);

  if (isLinkingVerbPlusAdj || isHelpVerbPlusObj || isVerbPlusAdv || isCareForVerb) {
    return 'VERB_BASE';
  }

  const hasVerbCueAfterAmbiguous =
    words.length >= 2 &&
    (['a', 'an', 'the', 'to', 'in', 'on', 'at', 'with', 'for', 'from', 'up', 'down', 'out', 'away', 'each', 'more', 'less', 'well', 'hard'].includes(secondWord) ||
      secondWord.endsWith('ly') ||
      pPos === 'verb' ||
      pPos === 'verb phr');

  if (
    BASE_VERB_STARTERS.has(firstWord) &&
    !(words.length === 1 && pPos.startsWith('noun') && !pPos.includes('verb')) &&
    !(AMBIGUOUS_VERB_STARTERS.has(firstWord) && words.length >= 2 && !hasVerbCueAfterAmbiguous) &&
    !(words.length >= 2 && ['habits', 'games', 'clothes', 'products', 'facilities', 'activities', 'services', 'devices', 'rules', 'skills', 'experiences', 'resources', 'sources', 'materials'].includes(lastWord) && ['working', 'living', 'eating', 'learning', 'reading', 'shopping', 'cooking', 'camping', 'swimming', 'training', 'teaching'].includes(firstWord))
  ) {
    return 'VERB_BASE';
  }
  if (words.length === 1 && (pPos === 'verb' || pPos === 'verb phr')) {
    return 'VERB_BASE';
  }

  // 8. Noun phrases starting with determiner, number, or proper country/city names
  if (
    /^(a|an|the|my|your|our|their|his|her|each|every|some|many|no|\d+)\s+/.test(p) ||
    /^(new zealand|australia|vietnam|viet nam|singapore|london|hanoi|canada|america|britain|scotland|england|wales|ireland|japan|korea|france|spain|italy|germany|china|india|thailand|malaysia|indonesia|new york|united kingdom|united states)$/.test(p)
  ) {
    return 'NOUN_WITH_DET';
  }

  // 9. Plural noun phrases (check BEFORE agent nouns)
  if (isPluralPhrase(p, pPos)) {
    return 'NOUN_PLURAL';
  }

  // 10. Singular Agent nouns (people / professions)
  const head = getHeadNoun(p);
  if (
    AGENT_WORDS.some((w) => head === w || p.endsWith(` ${w}`) || p === w) ||
    (!UNCOUNTABLE_HEADS.has(head) && (head.endsWith('ist') || head.endsWith('ian')) && !['list', 'mist', 'twist', 'assist', 'consist', 'exist'].includes(head))
  ) {
    return 'AGENT_NOUN';
  }

  // 11. Uncountable noun phrases
  if (UNCOUNTABLE_HEADS.has(head) || UNCOUNTABLE_HEADS.has(p)) {
    return 'NOUN_UNCOUNTABLE';
  }

  // 12. Default: Singular countable noun phrase
  return 'NOUN_SINGULAR';
}

/**
 * Condense collocations cleanly so every boldPhrase & answer respects maxWords
 * without cutting phrases mid-idiom or leaving dangling prepositions.
 */
function fitCollocationsToMaxWords(
  rawColls: string[],
  cleanWord: string,
  pos: string,
  maxWords: number
): string[] {
  const effectiveMaxWords = Math.min(3, Math.max(2, maxWords));
  const results: string[] = [];
  const seen = new Set<string>();
  const pPos = (pos || '').toLowerCase();

  const isDangling = (phrase: string) => {
    const t = phrase.trim().toLowerCase();
    if (pPos.includes('prep')) {
      return /^(?:next to|in front of|close to|far from|instead of|because of|out of|away from|due to|according to|up to|on top of)$/.test(t);
    }
    // Allow complete phrasal verbs matching the keyword itself (e.g. "take part in", "log on to", "cut down on")
    if ((pPos.includes('phr') || cleanWord.includes(' ')) && t === cleanWord.toLowerCase()) {
      return false;
    }
    return /(?:^|\s)(?:a|an|the|of|to|in|on|at|for|with|by|from|into|onto|and|or|as|not)$/i.test(t);
  };

  const pushIfValid = (phrase: string) => {
    const trimmed = phrase.trim().replace(/\s+/g, ' ');
    if (!trimmed) return;
    if (isDangling(trimmed)) return;
    const count = trimmed.split(/\s+/).filter(Boolean).length;
    // Strictly 2 to 3 words (never 1 word, never 4+ words)
    if (count >= 2 && count <= effectiveMaxWords && !seen.has(trimmed.toLowerCase())) {
      seen.add(trimmed.toLowerCase());
      results.push(trimmed);
    }
  };

  // First pass: keep complete phrases strictly within 2..effectiveMaxWords (normalizing "do not X" -> "never X")
  for (const c of rawColls) {
    let trimmed = c.trim().replace(/\s+/g, ' ');
    if (/^do\s+not\s+/i.test(trimmed)) {
      trimmed = trimmed.replace(/^do\s+not\s+/i, 'never ');
    }
    const wc = trimmed.split(/\s+/).filter(Boolean).length;
    if (wc >= 2 && wc <= effectiveMaxWords && !isDangling(trimmed)) {
      pushIfValid(trimmed);
    }
  }

  // Second pass: cleanly condense over-long phrases to 2..effectiveMaxWords without breaking grammar
  for (const c of rawColls) {
    const trimmed = c.trim().replace(/\s+/g, ' ');
    const words = trimmed.split(/\s+/).filter(Boolean);
    if (words.length <= effectiveMaxWords) continue;

    // 2a. "<verb> as a/an <agent role>" -> keep if 2..effectiveMaxWords
    const roleMatch = trimmed.match(/^(?:work|serve|act|train|dress)\s+as\s+(?:a|an)\s+(.+)$/i);
    if (roleMatch && roleMatch[1]) {
      const rw = roleMatch[1].split(/\s+/).filter(Boolean).length;
      if (rw >= 2 && rw <= effectiveMaxWords) {
        pushIfValid(roleMatch[1]);
        continue;
      }
    }

    // 2b. "too <adj> to <V>" -> "<adj> to <V>"
    if (/^too\s+/i.test(trimmed)) {
      const noToo = trimmed.replace(/^too\s+/i, '');
      const nw = noToo.split(/\s+/).filter(Boolean).length;
      if (nw >= 2 && nw <= effectiveMaxWords) {
        pushIfValid(noToo);
        continue;
      }
    }

    // 2c. Remove leading "a/an/the"
    const noLeadingDet = trimmed.replace(/^(?:a|an|the)\s+/i, '');
    const ndw = noLeadingDet.split(/\s+/).filter(Boolean).length;
    if (ndw >= 2 && ndw <= effectiveMaxWords) {
      pushIfValid(noLeadingDet);
      continue;
    }

    // 2d. Remove internal "the" before capitalized/proper noun or New Year
    const noInternalThe = trimmed.replace(/\s+the\s+([A-Z])/g, ' $1');
    const niw = noInternalThe.split(/\s+/).filter(Boolean).length;
    if (noInternalThe !== trimmed && niw >= 2 && niw <= effectiveMaxWords) {
      pushIfValid(noInternalThe);
      continue;
    }

    // 2e. Keep tail NP after "<verb> <prep> [a|an|the]" if tail contains keyword and has 2..effectiveMaxWords
    const tailAfterPrep = trimmed.replace(
      /^[a-z]+\s+(?:at|in|on|to|for|with|from|into|of|as|by|over|through|about|near|like)\s+(?:(?:a|an|the)\s+)?/i,
      ''
    );
    const tw = tailAfterPrep.split(/\s+/).filter(Boolean).length;
    if (
      tailAfterPrep !== trimmed &&
      tailAfterPrep.toLowerCase().includes(cleanWord.toLowerCase()) &&
      tw >= 2 &&
      tw <= effectiveMaxWords
    ) {
      pushIfValid(tailAfterPrep);
      continue;
    }

    // 2f. Keep leading "<NP>" before trailing prepositional modifier
    const headBeforePrep = trimmed.split(/\s+(?:from|with|for|in|on|at|of|to|by|during)\s+/i)[0] || '';
    const hw = headBeforePrep.split(/\s+/).filter(Boolean).length;
    if (
      headBeforePrep &&
      headBeforePrep !== trimmed &&
      headBeforePrep.toLowerCase().includes(cleanWord.toLowerCase()) &&
      hw >= 2 &&
      hw <= effectiveMaxWords &&
      !/^(?:cheer|knock|sit|stand|live|stay|work|look|listen|talk)$/i.test(headBeforePrep)
    ) {
      pushIfValid(headBeforePrep);
      continue;
    }

    // 2g. Convert "do not <verb> ..." -> "never <verb> ..." if it fits 2..effectiveMaxWords
    if (/^do\s+not\s+/i.test(trimmed)) {
      const neverForm = trimmed.replace(/^do\s+not\s+/i, 'never ');
      const nfw = neverForm.split(/\s+/).filter(Boolean).length;
      if (nfw >= 2 && nfw <= effectiveMaxWords) {
        pushIfValid(neverForm);
        continue;
      }
    }

    // 2h. For multi-word phrasal verbs (2..effectiveMaxWords), keep the base phrasal verb
    if (pPos.includes('phr') && trimmed.toLowerCase().startsWith(cleanWord.toLowerCase())) {
      pushIfValid(cleanWord);
    }
  }

  // Third pass: ensure usable 2..effectiveMaxWords collocations (never 1-word phrases)
  if (results.length < 2) {
    const wordLen = cleanWord.split(/\s+/).filter(Boolean).length;
    const isNeedsOnVerb = ['depend', 'rely', 'focus', 'concentrate', 'insist', 'count'].includes(cleanWord.toLowerCase());
    const isLinkingPrepEnd = pPos.includes('prep') && /(?:^|\s)(?:to|of|from|with|for|at|in|on)$/i.test(cleanWord);
    if (wordLen >= 2 && wordLen <= effectiveMaxWords && !isNeedsOnVerb && !isLinkingPrepEnd) {
      pushIfValid(cleanWord);
    }
    if (results.length < 2 && wordLen + 1 <= effectiveMaxWords) {
      if (pPos.includes('verb') && !pPos.includes('noun') && !pPos.includes('adv')) {
        const tone = getVerbSemanticTone(cleanWord);
        if (isNeedsOnVerb) {
          if (wordLen + 2 <= effectiveMaxWords) {
            pushIfValid(`${cleanWord} on others`);
          }
        } else if (tone === 'destructive') {
          pushIfValid(`completely ${cleanWord}`);
        } else if (tone === 'avoid') {
          pushIfValid(`strongly ${cleanWord}`);
        } else {
          pushIfValid(`${cleanWord} carefully`);
        }
      } else if (pPos.includes('adj') && !pPos.includes('noun') && !ATTRIBUTIVE_ONLY_ADJS.has(cleanWord.toLowerCase())) {
        pushIfValid(`very ${cleanWord}`);
      } else if (!pPos.includes('prep') && !pPos.includes('conj') && !pPos.includes('adv')) {
        if (
          !isNegativeNounPhrase(cleanWord, cleanWord) &&
          !isPluralPhrase(cleanWord, pPos) &&
          !cleanWord.toLowerCase().startsWith('new ') &&
          !/^(new zealand|australia|vietnam|singapore|london|hanoi|canada|america|britain|scotland|england|japan|korea|france)$/i.test(cleanWord)
        ) {
          pushIfValid(`new ${cleanWord}`);
        }
      }
    }
  }

  return results;
}

/**
 * Exact target number of bolded dictionary examples based on questionCount:
 * - 2 questions -> 4 bolded phrases
 * - 3 questions -> 5 bolded phrases
 * - 4 questions -> 6 bolded phrases
 * - 6 questions -> 8 bolded phrases
 */
export function getTargetBoldExampleCount(questionCount: number): number {
  const safeCount = Math.max(1, Math.floor(questionCount));
  if (safeCount === 2) return 4;
  if (safeCount === 4) return 6;
  if (safeCount === 6) return 8;
  return Math.max(4, safeCount + 2);
}

/**
 * Deterministic PRNG (Mulberry32) so frontend 0ms preview and backend response stay synced for a given seed
 */
function createSeededRng(seed: number): () => number {
  let state = (seed >>> 0) || 1;
  return () => {
    state = (state + 0x6d2b79f5) >>> 0;
    let t = Math.imul(state ^ (state >>> 15), 1 | state);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function seededShuffle<T>(items: T[], seed: number): T[] {
  const arr = [...items];
  const rng = createSeededRng(seed);
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Pick `count` distinct indices from `0..poolSize-1` randomly and guarantee they are NOT in sequential order
 * (e.g., never [0, 1], [1, 2], or [0, 1, 2, 3]).
 */
function pickNonSequentialIndices(
  poolSize: number,
  count: number,
  seed: number
): number[] {
  if (poolSize <= 0 || count <= 0) return [];
  const take = Math.min(poolSize, count);
  const allIndices = Array.from({ length: poolSize }, (_, i) => i);
  const shuffled = seededShuffle(allIndices, seed);
  const chosen = shuffled.slice(0, take);

  const isStrictlyAscending = (arr: number[]) => {
    if (arr.length < 2) return false;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] <= arr[i - 1]) return false;
    }
    return true;
  };

  if (isStrictlyAscending(chosen)) {
    if (chosen.length === 2) {
      // Swap [a, b] (a < b) -> [b, a] (non-ascending)
      const tmp = chosen[0];
      chosen[0] = chosen[1];
      chosen[1] = tmp;
    } else {
      // Swap first two elements to break ascending monotonicity without becoming pure descending
      const tmp = chosen[0];
      chosen[0] = chosen[1];
      chosen[1] = tmp;
    }
  }

  return chosen;
}

const ATTRIBUTIVE_ONLY_ADJS = new Set([
  'extended', 'nuclear', 'live', 'main', 'only', 'indoor', 'outdoor', 'elderly',
  'daily', 'weekly', 'monthly', 'annual', 'local', 'national', 'international',
  'global', 'solar', 'urban', 'rural', 'wooden', 'plastic', 'digital', 'virtual',
  'electronic', 'medical', 'cultural', 'historic', 'historical', 'religious',
  'educational', 'financial', 'environmental', 'ethnic', 'traditional', 'lunar',
  'coastal', 'mountainous', 'agricultural', 'industrial', 'commercial', 'domestic',
  'personal', 'social', 'public', 'private', 'natural', 'artificial', 'renewable',
  'non-renewable', 'nuclear', 'atomic', 'outer', 'inner', 'upper', 'lower', 'former',
]);

const ATTRIBUTIVE_ADJ_COMPANIONS: Record<string, string[]> = {
  extended: ['family', 'household', 'period', 'stay', 'visit', 'trip', 'break', 'holiday', 'vacation', 'version'],
  nuclear: ['family', 'families', 'energy', 'power', 'plant', 'waste', 'physics', 'reactor', 'science', 'research'],
  solar: ['energy', 'power', 'panel', 'panels', 'system', 'heat', 'light', 'battery', 'farm', 'radiation'],
  urban: ['area', 'areas', 'life', 'centre', 'development', 'growth', 'population', 'planning', 'transport', 'lifestyle'],
  rural: ['area', 'areas', 'life', 'village', 'community', 'development', 'population', 'school', 'economy', 'lifestyle'],
  indoor: ['activity', 'activities', 'game', 'games', 'sport', 'sports', 'pool', 'space', 'market', 'garden'],
  outdoor: ['activity', 'activities', 'game', 'games', 'sport', 'sports', 'space', 'event', 'concert', 'market'],
  elderly: ['people', 'residents', 'neighbours', 'citizens', 'relatives', 'parents', 'villagers', 'members', 'patients', 'visitors'],
  daily: ['routine', 'life', 'habit', 'habits', 'schedule', 'activity', 'activities', 'exercise', 'diet', 'commute'],
  lunar: ['calendar', 'month', 'cycle', 'year', 'festival', 'eclipse', 'orbit', 'surface', 'phase', 'mission'],
  wooden: ['house', 'bridge', 'table', 'chair', 'box', 'boat', 'floor', 'door', 'furniture', 'sculpture'],
  plastic: ['bottle', 'bottles', 'bag', 'bags', 'waste', 'container', 'packaging', 'cup', 'straw', 'pollution'],
  digital: ['device', 'devices', 'technology', 'media', 'camera', 'library', 'tool', 'platform', 'skill', 'world'],
  virtual: ['tour', 'classroom', 'world', 'reality', 'meeting', 'museum', 'event', 'space', 'platform', 'community'],
  renewable: ['energy', 'source', 'sources', 'resource', 'resources', 'power', 'electricity', 'fuel', 'technology', 'supply'],
  'non-renewable': ['energy', 'source', 'sources', 'resource', 'resources', 'fuel', 'fuels', 'power', 'material', 'supply'],
  ethnic: ['group', 'groups', 'minority', 'minorities', 'culture', 'heritage', 'community', 'costume', 'tradition', 'identity'],
  cultural: ['heritage', 'tradition', 'festival', 'exchange', 'identity', 'event', 'value', 'activity', 'site', 'diversity'],
  historic: ['site', 'building', 'town', 'city', 'monument', 'centre', 'landmark', 'district', 'bridge', 'event'],
  historical: ['site', 'event', 'period', 'building', 'museum', 'record', 'figure', 'novel', 'place', 'heritage'],
  ancient: ['town', 'monuments', 'times', 'history', 'culture', 'ruins', 'temple', 'city', 'village', 'architecture'],
  religious: ['festival', 'ceremony', 'belief', 'tradition', 'site', 'building', 'holiday', 'practice', 'custom', 'heritage'],
  educational: ['programme', 'system', 'activity', 'value', 'tool', 'resource', 'game', 'institution', 'opportunity', 'tour'],
  environmental: ['protection', 'issue', 'problem', 'impact', 'damage', 'pollution', 'campaign', 'awareness', 'policy', 'project'],
  coastal: ['area', 'city', 'town', 'region', 'village', 'road', 'water', 'ecosystem', 'community', 'resort'],
  mountainous: ['region', 'area', 'village', 'terrain', 'landscape', 'province', 'district', 'path', 'climate', 'community'],
  agricultural: ['product', 'products', 'land', 'area', 'sector', 'work', 'development', 'community', 'system', 'practice'],
  industrial: ['zone', 'area', 'city', 'centre', 'sector', 'development', 'waste', 'production', 'growth', 'design'],
  financial: ['support', 'aid', 'plan', 'goal', 'service', 'difficulty', 'resource', 'system', 'advice', 'burden'],
  medical: ['care', 'help', 'service', 'centre', 'staff', 'team', 'treatment', 'equipment', 'advice', 'check-up'],
  electronic: ['device', 'devices', 'equipment', 'music', 'mail', 'book', 'dictionary', 'gadget', 'media', 'payment'],
  public: ['transport', 'space', 'park', 'library', 'service', 'event', 'health', 'place', 'facility', 'area'],
  private: ['school', 'life', 'space', 'room', 'car', 'vehicle', 'sector', 'garden', 'lesson', 'hospital'],
  personal: ['habit', 'goal', 'experience', 'life', 'choice', 'skill', 'space', 'opinion', 'interest', 'growth'],
  social: ['media', 'network', 'life', 'skill', 'skills', 'event', 'issue', 'group', 'activity', 'change'],
  domestic: ['tourism', 'flight', 'animal', 'chore', 'waste', 'market', 'product', 'travel', 'life', 'use'],
  natural: ['wonder', 'resource', 'resources', 'habitat', 'beauty', 'disaster', 'world', 'environment', 'park', 'landscape'],
  artificial: ['intelligence', 'light', 'lake', 'material', 'flower', 'flavour', 'island', 'turf', 'reef', 'colour'],
  traditional: ['craft', 'dish', 'costume', 'music', 'festival', 'dance', 'market', 'custom', 'village', 'food'],
  local: ['community', 'resident', 'market', 'food', 'culture', 'authority', 'tradition', 'craft', 'festival', 'school'],
  national: ['park', 'heritage', 'holiday', 'museum', 'culture', 'identity', 'team', 'anthem', 'festival', 'symbol'],
  international: ['airport', 'event', 'festival', 'school', 'community', 'trade', 'travel', 'cooperation', 'language', 'competition'],
  global: ['warming', 'issue', 'community', 'network', 'economy', 'market', 'culture', 'change', 'trend', 'language'],
  annual: ['festival', 'event', 'meeting', 'report', 'trip', 'celebration', 'competition', 'budget', 'income', 'holiday'],
  weekly: ['schedule', 'meeting', 'plan', 'report', 'routine', 'market', 'class', 'activity', 'magazine', 'lesson'],
  monthly: ['bill', 'budget', 'income', 'meeting', 'report', 'plan', 'magazine', 'fee', 'event', 'newsletter'],
  live: ['music', 'concert', 'show', 'performance', 'broadcast', 'event', 'stream', 'audience', 'interview', 'programme'],
  main: ['street', 'road', 'idea', 'reason', 'goal', 'entrance', 'square', 'hall', 'course', 'attraction'],
  former: ['student', 'teacher', 'leader', 'president', 'member', 'colleague', 'resident', 'capital', 'building', 'home'],
  commercial: ['centre', 'district', 'area', 'activity', 'building', 'flight', 'product', 'sector', 'port', 'hub'],
  outer: ['space', 'layer', 'area', 'ring', 'wall', 'surface', 'shell', 'district', 'edge', 'zone'],
  inner: ['city', 'circle', 'layer', 'peace', 'strength', 'room', 'wall', 'part', 'area', 'court'],
  'hands-on': ['experience', 'training', 'skills', 'learning', 'practice', 'workshop', 'project', 'activity', 'approach', 'session'],
};

const CURATED_NOUN_MODIFIERS: Record<string, string[]> = {
  habit: ['good', 'bad', 'daily', 'healthy', 'reading', 'study', 'old', 'eating', 'sleeping', 'spending'],
  career: ['successful', 'future', 'long', 'promising', 'rewarding', 'academic', 'medical', 'teaching', 'chosen', 'new'],
  generation: ['older', 'younger', 'future', 'modern', 'next', 'new', 'current', 'previous', 'present', 'rising'],
  earthquake: ['severe', 'major', 'strong', 'powerful', 'sudden', 'devastating', 'destructive', 'minor', 'deadly', 'violent'],
  flood: ['severe', 'major', 'flash', 'heavy', 'sudden', 'devastating', 'annual', 'seasonal', 'coastal', 'deadly'],
  storm: ['severe', 'heavy', 'tropical', 'powerful', 'sudden', 'violent', 'fierce', 'strong', 'winter', 'coastal'],
  facility: ['modern', 'public', 'local', 'medical', 'community', 'recreational', 'educational', 'new', 'indoor', 'shared'],
  uniform: ['school', 'clean', 'neat', 'new', 'formal', 'smart', 'daily', 'official', 'traditional', 'summer'],
  tradition: ['family', 'local', 'ancient', 'cultural', 'rich', 'old', 'long', 'proud', 'national', 'living'],
  lifestyle: ['healthy', 'modern', 'traditional', 'simple', 'active', 'busy', 'stressful', 'urban', 'rural', 'balanced'],
  cyberbullying: ['serious', 'online', 'severe', 'widespread', 'harmful', 'frequent', 'repeated', 'constant', 'anonymous', 'persistent'],
  pollution: ['air', 'water', 'noise', 'plastic', 'soil', 'severe', 'serious', 'heavy', 'urban', 'industrial'],
};

/**
 * Expand collocations cleanly up to `targetCount` (e.g. 4, 6, or 8) distinct phrases <= maxWords,
 * respecting POS, attributive-only adjectives, noun semantic classes, negative tone, and complete live collocations.
 */
function expandCollocationsToCount(
  existing: string[],
  cleanWord: string,
  pos: string,
  maxWords: number,
  targetCount: number,
  grammarTag: string = '',
  liveExamples?: string[]
): string[] {
  const effectiveMaxWords = Math.min(3, Math.max(2, maxWords));
  const results: string[] = [];
  const seen = new Set<string>();
  const pPos = (pos || '').toLowerCase();
  const lowerWord = cleanWord.trim().toLowerCase();
  const wordLen = lowerWord.split(/\s+/).filter(Boolean).length;

  const isDangling = (phrase: string) => {
    const t = phrase.trim().toLowerCase();
    if (pPos.includes('prep')) {
      return /^(?:next to|in front of|close to|far from|instead of|because of|out of|away from|due to|according to|up to|on top of)$/.test(t);
    }
    if ((pPos.includes('phr') || lowerWord.includes(' ')) && t === lowerWord) {
      return false;
    }
    return /(?:^|\s)(?:a|an|the|of|to|in|on|at|for|with|by|from|into|onto|and|or|as|not)$/i.test(t);
  };

  const tryAdd = (phrase: string) => {
    if (results.length >= targetCount) return;
    const cleaned = phrase.trim().replace(/\s+/g, ' ');
    if (!cleaned) return;
    if (isDangling(cleaned)) return;
    const wc = cleaned.split(/\s+/).filter(Boolean).length;
    // Strictly 2 to 3 words (never 1 word, never 4+ words)
    if (wc < 2 || wc > effectiveMaxWords) return;
    const key = cleaned.toLowerCase();
    if (seen.has(key)) return;
    seen.add(key);
    results.push(cleaned);
  };

  // 1. Keep all valid existing collocations first
  for (const c of existing) {
    tryAdd(c);
  }
  if (results.length >= targetCount) return results;

  const isAttributiveOnlyAdj =
    pPos.includes('adj') &&
    !pPos.includes('noun') &&
    (grammarTag.toLowerCase().includes('only before noun') ||
      ATTRIBUTIVE_ONLY_ADJS.has(lowerWord) ||
      !!ATTRIBUTIVE_ADJ_COMPANIONS[lowerWord]);

  // 2. If this adjective has curated idiomatic companions (e.g. extended, nuclear, ancient, solar),
  // use them BEFORE live scraping so we never get truncated noun-compounds like "extended news [bulletin]"!
  if (isAttributiveOnlyAdj && ATTRIBUTIVE_ADJ_COMPANIONS[lowerWord] && wordLen + 1 <= effectiveMaxWords) {
    for (const n of ATTRIBUTIVE_ADJ_COMPANIONS[lowerWord]) {
      tryAdd(`${lowerWord} ${n}`);
    }
    if (results.length >= targetCount) return results;
  }

  // 3. Extract ONLY complete, non-truncated 2-word collocations from live dictionary sentences
  // (verify the word immediately after a 2-word slice is a boundary/function word, NOT another noun!)
  if (liveExamples && liveExamples.length > 0 && wordLen <= 2 && !pPos.includes('adv')) {
    const escaped = lowerWord.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const boundaryAfter = `(?:$|[.,;!?]|\\s+(?:in|on|at|to|for|with|of|by|from|and|or|but|that|which|who|when|while|because|is|are|was|were|has|have|had|will|can|could|should|would|may|might)\\b)`;
    const patNext = new RegExp(`\\b(${escaped}\\s+[a-z]{3,})${boundaryAfter}`, 'i');
    const patPrev = new RegExp(`\\b([a-z]{3,}\\s+${escaped})${boundaryAfter}`, 'i');
    const stopEdges = new Set([
      'the', 'and', 'for', 'that', 'this', 'with', 'from', 'they', 'them', 'their',
      'there', 'these', 'those', 'have', 'has', 'had', 'were', 'was', 'are', 'been',
      'will', 'would', 'could', 'should', 'must', 'might', 'into', 'onto', 'over',
      'under', 'about', 'after', 'before', 'when', 'where', 'while', 'which', 'what',
      'who', 'whom', 'whose', 'your', 'our', 'his', 'her', 'its', 'some', 'many',
      'much', 'more', 'most', 'very', 'just', 'only', 'also', 'than', 'then', 'but',
      'being', 'does', 'did', 'not', 'wasn', 'aren', 'isn', 'can', 'may',
      'ago', 'away', 'back', 'here', 'now', 'soon', 'later', 'already', 'still',
      'yet', 'ever', 'never', 'often', 'always', 'today', 'yesterday', 'tomorrow',
      'too', 'quite', 'rather', 'almost', 'enough', 'instead', 'however', 'perhaps',
    ]);
    for (const ex of liveExamples) {
      if (results.length >= targetCount) break;
      const mNext = ex.match(patNext);
      if (mNext && mNext[1]) {
        const parts = mNext[1].toLowerCase().split(/\s+/);
        if (!stopEdges.has(parts[parts.length - 1])) {
          tryAdd(mNext[1].toLowerCase());
        }
      }
      const mPrev = ex.match(patPrev);
      if (mPrev && mPrev[1]) {
        const parts = mPrev[1].toLowerCase().split(/\s+/);
        if (!stopEdges.has(parts[0])) {
          tryAdd(mPrev[1].toLowerCase());
        }
      }
    }
  }
  if (results.length >= targetCount) return results;

  // 4. POS-aware & semantic-class-aware natural collocation expansion (strictly 2..effectiveMaxWords)
  if (pPos.includes('verb') && !pPos.includes('noun') && !pPos.includes('adv')) {
    const tone = getVerbSemanticTone(lowerWord);
    const hasTrailingPrep = /\s+(?:on|to|with|of|in|for|at|from|after|up|down|out|off|away)$/i.test(lowerWord);
    const needsOnPrep = ['depend', 'rely', 'focus', 'concentrate', 'insist', 'count'].includes(lowerWord);
    if (needsOnPrep && wordLen + 2 <= effectiveMaxWords) {
      const onObjects =
        lowerWord === 'focus' || lowerWord === 'concentrate'
          ? ['study', 'details', 'quality', 'health', 'goals', 'learning', 'safety', 'teamwork', 'practice', 'results']
          : lowerWord === 'insist'
          ? ['quality', 'fairness', 'safety', 'punctuality', 'honesty', 'respect', 'rules', 'accuracy', 'effort', 'clarity']
          : ['family', 'others', 'support', 'teamwork', 'parents', 'technology', 'weather', 'effort', 'friends', 'community'];
      for (const obj of onObjects) {
        tryAdd(`${lowerWord} on ${obj}`);
      }
    } else if (wordLen + 1 <= effectiveMaxWords) {
      if (tone === 'destructive') {
        for (const adv of ['completely', 'severely', 'seriously', 'suddenly', 'quickly', 'badly', 'heavily', 'greatly', 'nearly', 'further']) {
          tryAdd(`${adv} ${lowerWord}`);
        }
      } else if (tone === 'avoid') {
        for (const adv of ['strongly', 'strictly', 'firmly', 'actively', 'completely', 'consistently', 'wisely', 'clearly', 'steadily', 'safely']) {
          tryAdd(`${adv} ${lowerWord}`);
        }
      } else if (tone === 'coping') {
        for (const adv of ['safely', 'quickly', 'calmly', 'barely', 'successfully', 'fully', 'easily', 'together', 'finally', 'miraculously']) {
          tryAdd(`${lowerWord} ${adv}`);
        }
      } else if (hasTrailingPrep || wordLen >= 2) {
        for (const adv of ['regularly', 'carefully', 'properly', 'actively', 'easily', 'promptly', 'calmly', 'gladly', 'always', 'quickly']) {
          tryAdd(`${adv} ${lowerWord}`);
        }
      } else {
        for (const adv of ['carefully', 'regularly', 'effectively', 'properly', 'easily', 'together', 'well', 'daily', 'quickly', 'actively']) {
          tryAdd(`${lowerWord} ${adv}`);
        }
      }
    }
  } else if (isAttributiveOnlyAdj) {
    if (wordLen + 1 <= effectiveMaxWords) {
      const nounCompanions = ATTRIBUTIVE_ADJ_COMPANIONS[lowerWord] || [
        'community', 'area', 'system', 'programme', 'activity', 'event', 'approach', 'experience', 'network', 'service',
      ];
      for (const n of nounCompanions) {
        tryAdd(`${lowerWord} ${n}`);
      }
    }
  } else if (pPos.includes('adj') && !pPos.includes('noun') && !pPos.includes('adv')) {
    if (wordLen + 1 <= effectiveMaxWords) {
      for (const adv of ['very', 'quite', 'really', 'extremely', 'especially', 'particularly', 'truly', 'fairly', 'remarkably', 'increasingly']) {
        tryAdd(`${adv} ${lowerWord}`);
      }
    }
  } else if (pPos.includes('adv')) {
    if (wordLen + 1 <= effectiveMaxWords) {
      for (const mod of ['very', 'quite', 'really', 'more', 'fairly', 'extremely', 'especially', 'particularly', 'remarkably', 'increasingly']) {
        tryAdd(`${mod} ${lowerWord}`);
      }
    }
  } else if (pPos.includes('prep') || pPos.includes('conj')) {
    if (wordLen + 1 <= effectiveMaxWords) {
      const tails =
        lowerWord === 'next to' || lowerWord === 'close to' || lowerWord === 'opposite' || lowerWord === 'near'
          ? ['schools', 'parks', 'shops', 'rivers', 'gardens', 'markets', 'friends', 'homes', 'museums', 'stations']
          : ['time', 'school', 'home', 'nature', 'people', 'class', 'friends', 'work', 'life', 'others'];
      for (const tail of tails) {
        tryAdd(`${lowerWord} ${tail}`);
      }
    }
  } else {
    // Noun (or noun phrase) — choose semantically natural modifiers!
    const isAffected = AFFECTED_PERSON_RE.test(lowerWord);
    const isNeg = !isAffected && isNegativeNounPhrase(lowerWord, lowerWord);
    const head = getHeadNoun(lowerWord);
    const isAgent =
      AGENT_WORDS.some((w) => head === w || lowerWord.endsWith(` ${w}`) || lowerWord === w) ||
      (!UNCOUNTABLE_HEADS.has(head) && (head.endsWith('ist') || head.endsWith('ian')));
    const nounClass = classifyNounSemantics(lowerWord, lowerWord, isNeg, isAffected);

    let modifiers: string[];
    if (CURATED_NOUN_MODIFIERS[lowerWord]) {
      modifiers = CURATED_NOUN_MODIFIERS[lowerWord];
    } else if (isAffected) {
      modifiers = ['local', 'young', 'elderly', 'affected', 'visiting', 'nearby', 'injured', 'helpless', 'grateful', 'rescue'];
    } else if (isNeg) {
      modifiers = ['serious', 'severe', 'major', 'sudden', 'widespread', 'common', 'heavy', 'unexpected', 'dangerous', 'harmful'];
    } else if (isAgent) {
      modifiers = ['experienced', 'skilled', 'local', 'dedicated', 'young', 'friendly', 'famous', 'talented', 'helpful', 'respected'];
    } else if (nounClass === 'HUMAN_GROUP') {
      modifiers = ['local', 'young', 'older', 'modern', 'future', 'new', 'active', 'united', 'supportive', 'growing'];
    } else if (nounClass === 'TIME_EVENT') {
      modifiers = ['annual', 'special', 'memorable', 'short', 'long', 'recent', 'upcoming', 'traditional', 'joyful', 'brief'];
    } else if (nounClass === 'PLACE') {
      modifiers = ['local', 'famous', 'popular', 'modern', 'historic', 'peaceful', 'nearby', 'public', 'beautiful', 'clean'];
    } else if (nounClass === 'FOOD') {
      modifiers = ['traditional', 'local', 'fresh', 'healthy', 'delicious', 'popular', 'homemade', 'favourite', 'simple', 'tasty'];
    } else {
      modifiers = ['modern', 'traditional', 'useful', 'popular', 'important', 'special', 'local', 'practical', 'new', 'unique', 'valuable', 'effective'];
    }

    if (wordLen + 1 <= effectiveMaxWords) {
      for (const mod of modifiers) {
        if (lowerWord.startsWith(`${mod} `) || lowerWord === mod) continue;
        tryAdd(`${mod} ${lowerWord}`);
      }
    }
    if (results.length < targetCount && wordLen >= 2 && wordLen <= effectiveMaxWords) {
      tryAdd(lowerWord);
    }
  }

  // 5. Final safety net for long multi-word keywords (e.g. 3-word phrases when effectiveMaxWords <= 3)
  if (results.length < targetCount) {
    const PHRASAL_FALLBACKS: Record<string, string[]> = {
      'take care of': ['take care of', 'care for family', 'care for pets', 'care for elders', 'care for children', 'care for plants', 'care for health', 'care for others', 'take good care'],
      'look forward to': ['look forward to', 'eagerly await holidays', 'await good news', 'expect great results', 'look ahead happily', 'hope for success', 'plan ahead carefully', 'welcome new chances'],
      'take part in': ['take part in', 'join school clubs', 'join local events', 'join group projects', 'participate actively', 'attend community events', 'join team sports', 'share group activities'],
      'cut down on': ['cut down on', 'reduce plastic waste', 'reduce daily energy', 'limit sugary drinks', 'lower water usage', 'use less plastic', 'save daily power', 'avoid excess waste'],
      'get on with': ['get on with', 'work well together', 'respect close friends', 'support team members', 'cooperate smoothly', 'share ideas openly', 'build strong bonds', 'stay friendly always'],
      'run out of': ['run out of', 'lack clean water', 'save natural energy', 'conserve limited power', 'protect vital resources', 'manage daily supplies', 'avoid wasting fuel', 'use resources wisely'],
    };
    if (PHRASAL_FALLBACKS[lowerWord]) {
      for (const p of PHRASAL_FALLBACKS[lowerWord]) {
        tryAdd(p);
      }
    }
  }
  if (results.length < targetCount) {
    const contentWords = lowerWord
      .split(/\s+/)
      .filter((w) => w.length >= 3 && !['the', 'and', 'for', 'with', 'from', 'into', 'out', 'off', 'new'].includes(w));
    const anchor = contentWords[contentWords.length - 1] || contentWords[0] || lowerWord.split(/\s+/)[0];
    if (anchor && anchor.split(/\s+/).filter(Boolean).length + 1 <= effectiveMaxWords) {
      const isPureVerb = pPos.includes('verb') && !pPos.includes('adv') && !pPos.includes('noun');
      const backupMods = isPureVerb
        ? ['carefully', 'regularly', 'properly', 'effectively', 'actively', 'easily', 'quickly', 'well', 'smoothly', 'steadily']
        : ['modern', 'local', 'special', 'popular', 'useful', 'important', 'common', 'practical', 'traditional', 'unique'];
      for (const mod of backupMods) {
        if (anchor === mod) continue;
        tryAdd(isPureVerb ? `${anchor} ${mod}` : `${mod} ${anchor}`);
      }
    }
  }

  return results.slice(0, targetCount);
}

/**
 * 22 Global Success Thematic Domains covering all 48 Units (Grades 6–9)
 */
type ThemeId =
  | 'school'
  | 'house'
  | 'friends_teens'
  | 'community'
  | 'natural_wonders'
  | 'festivals'
  | 'media_arts'
  | 'sports_hobbies'
  | 'cities_travel'
  | 'environment'
  | 'technology'
  | 'health_food'
  | 'traffic_transport'
  | 'energy'
  | 'countryside_ethnic'
  | 'lifestyles_past'
  | 'shopping'
  | 'disasters'
  | 'communication'
  | 'space'
  | 'world_englishes'
  | 'career';

interface ThemeMetadata {
  id: ThemeId;
  labelEn: string;
  labelVi: string;
  contextEn: string;
  contextVi: string;
}

const THEME_METADATA: Record<ThemeId, ThemeMetadata> = {
  school: {
    id: 'school',
    labelEn: 'school life and learning',
    labelVi: 'Trường học & Học tập',
    contextEn: 'at school and in the classroom',
    contextVi: 'tại trường học và trong lớp học',
  },
  house: {
    id: 'house',
    labelEn: 'home and living spaces',
    labelVi: 'Ngôi nhà & Không gian sống',
    contextEn: 'around the family home',
    contextVi: 'trong không gian ngôi nhà gia đình',
  },
  friends_teens: {
    id: 'friends_teens',
    labelEn: 'friendship and teenage life',
    labelVi: 'Bạn bè & Tuổi teen',
    contextEn: 'among classmates and teenagers',
    contextVi: 'trong mối quan hệ bạn bè và tuổi teen',
  },
  community: {
    id: 'community',
    labelEn: 'community service',
    labelVi: 'Cộng đồng & Hoạt động thiện nguyện',
    contextEn: 'in the local neighbourhood and community',
    contextVi: 'tại khu phố và cộng đồng địa phương',
  },
  natural_wonders: {
    id: 'natural_wonders',
    labelEn: 'natural wonders',
    labelVi: 'Kỳ quan thiên nhiên',
    contextEn: 'while exploring natural wonders',
    contextVi: 'khi khám phá các kỳ quan thiên nhiên',
  },
  festivals: {
    id: 'festivals',
    labelEn: 'festivals and traditions',
    labelVi: 'Lễ hội, Tết & Phong tục',
    contextEn: 'during cultural festivals and celebrations',
    contextVi: 'trong các dịp lễ hội, Tết và phong tục truyền thống',
  },
  media_arts: {
    id: 'media_arts',
    labelEn: 'music, films, and television',
    labelVi: 'Truyền hình, Âm nhạc & Điện ảnh',
    contextEn: 'in music, arts, and entertainment',
    contextVi: 'trong lĩnh vực âm nhạc, nghệ thuật và phim ảnh',
  },
  sports_hobbies: {
    id: 'sports_hobbies',
    labelEn: 'sports and leisure activities',
    labelVi: 'Thể thao, Sở thích & Giải trí',
    contextEn: 'in sports clubs and leisure time',
    contextVi: 'trong hoạt động thể thao, sở thích và giải trí',
  },
  cities_travel: {
    id: 'cities_travel',
    labelEn: 'cities and tourism',
    labelVi: 'Thành phố & Du lịch',
    contextEn: 'when visiting cities and tourist destinations',
    contextVi: 'khi tham quan các thành phố và du lịch',
  },
  environment: {
    id: 'environment',
    labelEn: 'environmental protection',
    labelVi: 'Bảo vệ Môi trường & Trái Đất',
    contextEn: 'to protect the environment and Planet Earth',
    contextVi: 'nhằm bảo vệ môi trường và hành tinh Trái Đất',
  },
  technology: {
    id: 'technology',
    labelEn: 'science and modern technology',
    labelVi: 'Khoa học, Robot & Thiết bị điện tử',
    contextEn: 'with modern science and electronic devices',
    contextVi: 'trong khoa học, công nghệ và thiết bị điện tử',
  },
  health_food: {
    id: 'health_food',
    labelEn: 'healthy living and food',
    labelVi: 'Sức khỏe & Ẩm thực',
    contextEn: 'for healthy living and daily nutrition',
    contextVi: 'đối với sức khỏe và ẩm thực hàng ngày',
  },
  traffic_transport: {
    id: 'traffic_transport',
    labelEn: 'traffic and future transport',
    labelVi: 'Giao thông & Phương tiện tương lai',
    contextEn: 'on the road and in future transport',
    contextVi: 'khi tham gia giao thông và di chuyển',
  },
  energy: {
    id: 'energy',
    labelEn: 'energy sources',
    labelVi: 'Các nguồn năng lượng',
    contextEn: 'in generating and saving clean energy',
    contextVi: 'trong khai thác và tiết kiệm năng lượng',
  },
  countryside_ethnic: {
    id: 'countryside_ethnic',
    labelEn: 'countryside life and ethnic cultures',
    labelVi: 'Nông thôn & Các dân tộc Việt Nam',
    contextEn: 'in rural villages and ethnic communities',
    contextVi: 'tại vùng nông thôn và các cộng đồng dân tộc',
  },
  lifestyles_past: {
    id: 'lifestyles_past',
    labelEn: 'lifestyles and life experiences',
    labelVi: 'Lối sống, Ký ức & Trải nghiệm',
    contextEn: 'in everyday lifestyles and life experiences',
    contextVi: 'trong lối sống, ký ức và trải nghiệm cuộc sống',
  },
  shopping: {
    id: 'shopping',
    labelEn: 'shopping and consumer habits',
    labelVi: 'Mua sắm & Tiêu dùng',
    contextEn: 'while shopping at markets and stores',
    contextVi: 'trong hoạt động mua sắm hàng ngày',
  },
  disasters: {
    id: 'disasters',
    labelEn: 'natural disasters and safety',
    labelVi: 'Thảm họa thiên nhiên & Ứng phó',
    contextEn: 'during natural disasters and emergency preparation',
    contextVi: 'khi ứng phó với thiên tai và thảm họa thiên nhiên',
  },
  communication: {
    id: 'communication',
    labelEn: 'modern communication',
    labelVi: 'Giao tiếp trong tương lai',
    contextEn: 'in modern digital communication',
    contextVi: 'trong giao tiếp hiện đại và tương lai',
  },
  space: {
    id: 'space',
    labelEn: 'space exploration',
    labelVi: 'Vũ trụ & Sự sống ngoài Trái Đất',
    contextEn: 'in space exploration and astronomy',
    contextVi: 'trong khám phá vũ trụ và các hành tinh',
  },
  world_englishes: {
    id: 'world_englishes',
    labelEn: 'world Englishes',
    labelVi: 'Tiếng Anh toàn cầu',
    contextEn: 'across global varieties of English',
    contextVi: 'trong học tập và sử dụng tiếng Anh toàn cầu',
  },
  career: {
    id: 'career',
    labelEn: 'career choices',
    labelVi: 'Định hướng Nghề nghiệp',
    contextEn: 'when planning future career paths',
    contextVi: 'khi định hướng và lựa chọn nghề nghiệp tương lai',
  },
};

function matchThemeFromTitle(rawTitle: string, grade: number): ThemeMetadata | null {
  const title = rawTitle.trim().toLowerCase();
  if (!title) return null;

  if (title.includes('school')) return THEME_METADATA.school;
  if (title.includes('house')) return THEME_METADATA.house;
  if (title.includes('friend') || title.includes('teen')) return THEME_METADATA.friends_teens;
  if (title.includes('neighbour') || title.includes('neighbor') || title.includes('community')) return THEME_METADATA.community;
  if (title.includes('wonder')) return THEME_METADATA.natural_wonders;
  if (title.includes('tet') || title.includes('festival') || title.includes('custom') || title.includes('tradition')) return THEME_METADATA.festivals;
  if (title.includes('television') || title.includes('music') || title.includes('film')) return THEME_METADATA.media_arts;
  if (title.includes('sport') || title.includes('hobb') || title.includes('leisure')) return THEME_METADATA.sports_hobbies;
  if (title.includes('cit') || title.includes('english-speaking') || title.includes('tourism')) return THEME_METADATA.cities_travel;
  if (title.includes('greener') || title.includes('environment') || title.includes('planet earth')) return THEME_METADATA.environment;
  if (title.includes('robot') || title.includes('science') || title.includes('electronic')) return THEME_METADATA.technology;
  if (title.includes('healthy living') && grade === 7) return THEME_METADATA.health_food;
  if (title.includes('food')) return THEME_METADATA.health_food;
  if (title.includes('traffic') || title.includes('travelling')) return THEME_METADATA.traffic_transport;
  if (title.includes('energy')) return THEME_METADATA.energy;
  if (title.includes('countryside') || title.includes('ethnic')) return THEME_METADATA.countryside_ethnic;
  if (title.includes('lifestyle') || title.includes('past') || title.includes('experience')) return THEME_METADATA.lifestyles_past;
  if (title.includes('shopping')) return THEME_METADATA.shopping;
  if (title.includes('disaster')) return THEME_METADATA.disasters;
  if (title.includes('communication')) return THEME_METADATA.communication;
  if (title.includes('other planets')) return THEME_METADATA.space;
  if (title.includes('world englishes')) return THEME_METADATA.world_englishes;
  if (title.includes('career')) return THEME_METADATA.career;
  return null;
}

function resolveTheme(unitTitle: string, unit: number, grade: number, currUnitTitle?: string): ThemeMetadata {
  // Always prioritize the user's currently selected Unit title before falling back to curriculum match
  const fromUnitTitle = matchThemeFromTitle(unitTitle || '', grade);
  if (fromUnitTitle) return fromUnitTitle;

  const fromCurrTitle = matchThemeFromTitle(currUnitTitle || '', grade);
  if (fromCurrTitle) return fromCurrTitle;

  // Fallback by grade + unit number
  if (grade === 6) {
    const map: Record<number, ThemeId> = {
      1: 'school', 2: 'house', 3: 'friends_teens', 4: 'community',
      5: 'natural_wonders', 6: 'festivals', 7: 'media_arts', 8: 'sports_hobbies',
      9: 'cities_travel', 10: 'house', 11: 'environment', 12: 'technology',
    };
    return THEME_METADATA[map[unit] || 'school'];
  }
  if (grade === 7) {
    const map: Record<number, ThemeId> = {
      1: 'sports_hobbies', 2: 'health_food', 3: 'community', 4: 'media_arts',
      5: 'health_food', 6: 'school', 7: 'traffic_transport', 8: 'media_arts',
      9: 'festivals', 10: 'energy', 11: 'traffic_transport', 12: 'cities_travel',
    };
    return THEME_METADATA[map[unit] || 'community'];
  }
  if (grade === 8) {
    const map: Record<number, ThemeId> = {
      1: 'sports_hobbies', 2: 'countryside_ethnic', 3: 'friends_teens', 4: 'countryside_ethnic',
      5: 'festivals', 6: 'lifestyles_past', 7: 'environment', 8: 'shopping',
      9: 'disasters', 10: 'communication', 11: 'technology', 12: 'space',
    };
    return THEME_METADATA[map[unit] || 'lifestyles_past'];
  }
  const map9: Record<number, ThemeId> = {
    1: 'community', 2: 'cities_travel', 3: 'friends_teens', 4: 'lifestyles_past',
    5: 'lifestyles_past', 6: 'lifestyles_past', 7: 'natural_wonders', 8: 'cities_travel',
    9: 'world_englishes', 10: 'environment', 11: 'technology', 12: 'career',
  };
  return THEME_METADATA[map9[unit] || 'community'];
}

interface ThemeActorSet {
  subjectSg: string;
  subjectPl: string;
  place: string;
  goal: string;
  viSubject: string;
  viPlace: string;
}

const THEME_ACTORS: Record<ThemeId, ThemeActorSet> = {
  school: {
    subjectSg: 'our school principal',
    subjectPl: 'secondary students',
    place: 'during school hours',
    goal: 'improve classroom learning',
    viSubject: 'học sinh và giáo viên',
    viPlace: 'tại trường học',
  },
  house: {
    subjectSg: 'my family',
    subjectPl: 'modern homeowners',
    place: 'inside the house',
    goal: 'make daily living more comfortable',
    viSubject: 'các thành viên trong gia đình',
    viPlace: 'trong ngôi nhà',
  },
  friends_teens: {
    subjectSg: 'our youth counsellor',
    subjectPl: 'teenagers',
    place: 'among close classmates',
    goal: 'stay balanced and confident',
    viSubject: 'các bạn thanh thiếu niên',
    viPlace: 'trong môi trường bạn bè và học đường',
  },
  community: {
    subjectSg: 'the neighbourhood committee',
    subjectPl: 'local volunteers',
    place: 'in our local community',
    goal: 'support disadvantaged residents',
    viSubject: 'các tình nguyện viên và người dân',
    viPlace: 'tại cộng đồng địa phương',
  },
  natural_wonders: {
    subjectSg: 'our tour guide',
    subjectPl: 'nature explorers',
    place: 'at famous natural wonders',
    goal: 'protect breathtaking landscapes',
    viSubject: 'du khách và nhà thám hiểm',
    viPlace: 'tại các kỳ quan thiên nhiên',
  },
  festivals: {
    subjectSg: 'every village household',
    subjectPl: 'local residents',
    place: 'during the festive season',
    goal: 'preserve joyful cultural customs',
    viSubject: 'người dân và gia đình',
    viPlace: 'trong dịp lễ hội và ngày Tết',
  },
  media_arts: {
    subjectSg: 'the art director',
    subjectPl: 'young audiences',
    place: 'at the cultural theatre',
    goal: 'appreciate creative performances',
    viSubject: 'khán giả và nghệ sĩ',
    viPlace: 'trong lĩnh vực âm nhạc, nghệ thuật và phim ảnh',
  },
  sports_hobbies: {
    subjectSg: 'our sports coach',
    subjectPl: 'club members',
    place: 'during weekend leisure time',
    goal: 'stay active and refreshed',
    viSubject: 'các thành viên câu lạc bộ',
    viPlace: 'trong hoạt động thể thao và sở thích',
  },
  cities_travel: {
    subjectSg: 'the travel agency',
    subjectPl: 'international tourists',
    place: 'across bustling cities',
    goal: 'experience unforgettable journeys',
    viSubject: 'du khách và người dân thành phố',
    viPlace: 'tại các đô thị và điểm du lịch',
  },
  environment: {
    subjectSg: 'the green campaign',
    subjectPl: 'eco-conscious citizens',
    place: 'to safeguard Planet Earth',
    goal: 'reduce environmental pollution',
    viSubject: 'người dân có ý thức bảo vệ môi trường',
    viPlace: 'trên hành tinh Trái Đất',
  },
  technology: {
    subjectSg: 'our robotics lab',
    subjectPl: 'young inventors',
    place: 'with modern electronic devices',
    goal: 'increase work efficiency',
    viSubject: 'các kỹ sư và người dùng công nghệ',
    viPlace: 'trong lĩnh vực khoa học và thiết bị điện tử',
  },
  health_food: {
    subjectSg: 'the nutritionist',
    subjectPl: 'health-conscious families',
    place: 'in daily meals and routines',
    goal: 'maintain physical wellness',
    viSubject: 'mọi người trong sinh hoạt ăn uống',
    viPlace: 'đối với sức khỏe và ẩm thực',
  },
  traffic_transport: {
    subjectSg: 'the traffic police',
    subjectPl: 'daily commuters',
    place: 'on busy city roads',
    goal: 'ensure road safety',
    viSubject: 'người tham gia giao thông',
    viPlace: 'trên các tuyến đường giao thông',
  },
  energy: {
    subjectSg: 'the power station',
    subjectPl: 'engineers and households',
    place: 'in clean energy projects',
    goal: 'save electricity and fossil fuels',
    viSubject: 'các kỹ sư và hộ gia đình',
    viPlace: 'trong việc sử dụng các nguồn năng lượng',
  },
  countryside_ethnic: {
    subjectSg: 'the village elder',
    subjectPl: 'rural villagers',
    place: 'in peaceful highland villages',
    goal: 'sustain agricultural and ethnic heritage',
    viSubject: 'người dân nông thôn và đồng bào vùng cao',
    viPlace: 'tại các bản làng và miền quê',
  },
  lifestyles_past: {
    subjectSg: 'our grandparents’ generation',
    subjectPl: 'modern families',
    place: 'across changing generations',
    goal: 'remember meaningful life values',
    viSubject: 'các thế hệ gia đình Việt',
    viPlace: 'trong nếp sống xưa và nay',
  },
  shopping: {
    subjectSg: 'the store manager',
    subjectPl: 'smart shoppers',
    place: 'at supermarkets and open markets',
    goal: 'make sensible purchasing choices',
    viSubject: 'người mua sắm và cửa hàng',
    viPlace: 'trong hoạt động mua sắm',
  },
  disasters: {
    subjectSg: 'the rescue team',
    subjectPl: 'local authorities',
    place: 'before severe storms strike',
    goal: 'minimize disaster damage',
    viSubject: 'lực lượng cứu hộ và người dân',
    viPlace: 'khi ứng phó với thiên tai',
  },
  communication: {
    subjectSg: 'the digital platform',
    subjectPl: 'online users',
    place: 'in virtual communication channels',
    goal: 'connect effortlessly across distances',
    viSubject: 'người dùng trong kỷ nguyên số',
    viPlace: 'trong giao tiếp trực tuyến',
  },
  space: {
    subjectSg: 'the space mission',
    subjectPl: 'astronomy researchers',
    place: 'beyond Earth’s atmosphere',
    goal: 'discover distant planets',
    viSubject: 'các nhà thiên văn học và phi hành gia',
    viPlace: 'trong không gian vũ trụ',
  },
  world_englishes: {
    subjectSg: 'our language institute',
    subjectPl: 'English learners',
    place: 'in international communication',
    goal: 'understand global varieties of English',
    viSubject: 'người học tiếng Anh',
    viPlace: 'trong giao tiếp tiếng Anh toàn cầu',
  },
  career: {
    subjectSg: 'the career adviser',
    subjectPl: 'graduating students',
    place: 'when choosing future jobs',
    goal: 'build a fulfilling profession',
    viSubject: 'học sinh và người lao động trẻ',
    viPlace: 'khi định hướng nghề nghiệp tương lai',
  },
};

function getPhrasalObject(phrase: string): string {
  const p = phrase.trim().toLowerCase();
  // Only append an object when the phrase ends with a preposition/particle that requires one!
  if (!/(?:^|\s)(?:of|to|on|in|at|for|with|from|after|about|into)$/.test(p)) {
    return '';
  }
  if (p.endsWith('take part in')) return 'community activities';
  if (p.endsWith('take care of') || p.endsWith('look after')) return 'elderly relatives';
  if (p.endsWith('log on to')) return 'the learning website';
  if (p.endsWith('cut down on')) return 'unnecessary waste';
  if (p.endsWith('come down with')) return 'a seasonal cold';
  if (p.endsWith('run out of')) return 'fresh water';
  if (p.endsWith('get on with')) return 'each other';
  if (p.endsWith('hang out with')) return 'close classmates';
  if (p.endsWith('next to')) return 'their classmates';
  if (p.endsWith('depend on') || p.endsWith('rely on') || p.endsWith('count on')) return 'family support';
  if (p.endsWith('focus on') || p.endsWith('concentrate on')) return 'their main goals';
  if (p.endsWith(' on')) return 'shared resources';
  if (p.endsWith(' to')) return 'the online portal';
  if (p.endsWith(' with')) return 'group members';
  if (p.endsWith(' of')) return 'essential supplies';
  if (p.endsWith(' in')) return 'local activities';
  if (p.endsWith(' for')) return 'useful options';
  if (p.endsWith(' at')) return 'the schedule';
  if (p.endsWith(' from')) return 'reliable sources';
  return '';
}

function buildTopicExamples(
  word: string,
  collocations: string[],
  pos: string,
  theme: ThemeMetadata,
  liveExamples?: string[],
  targetCount: number = 4
): { fullSentence: string; boldPhrase: string }[] {
  const actor = THEME_ACTORS[theme.id];
  const subjPlCap = actor.subjectPl.charAt(0).toUpperCase() + actor.subjectPl.slice(1);
  const usedLive = new Set<string>();

  return collocations.slice(0, targetCount).map((c, idx) => {
    // 1. If a real dictionary example sentence contains the exact collocation, use it once!
    if (liveExamples && liveExamples.length > 0) {
      const matched = liveExamples.find(
        (ex) => !usedLive.has(ex) && ex.includes(c) && ex.length <= 140
      );
      if (matched) {
        usedLive.add(matched);
        return { fullSentence: matched, boldPhrase: c };
      }
    }

    const pType = detectPhraseType(c, pos);
    const art = chooseArticle(c);
    const isAffected = AFFECTED_PERSON_RE.test(c);
    const isNegNoun = !isAffected && (isNegativeNounPhrase(word, c) || theme.id === 'disasters');
    const verbTone = getVerbSemanticTone(c);
    const phrasalObj = getPhrasalObject(c);
    const objSuffix = phrasalObj ? ` ${phrasalObj}` : '';

    switch (pType) {
      case 'VERB_BASE': {
        if (phrasalObj) {
          const frames = [
            `In this lesson on ${theme.labelEn}, ${actor.subjectPl} learn how to ${c}${objSuffix} ${actor.place}.`,
            `Many ${actor.subjectPl} should ${c}${objSuffix} in order to ${actor.goal}.`,
            `People often ${c}${objSuffix} when working ${theme.contextEn}.`,
            `It is practical for ${actor.subjectPl} to ${c}${objSuffix}.`,
            `Teachers remind ${actor.subjectPl} to ${c}${objSuffix} during each term.`,
            `Everyone agreed to ${c}${objSuffix} before the deadline ${actor.place}.`,
            `Good teamwork makes it easier to ${c}${objSuffix} ${theme.contextEn}.`,
            `Young people can ${c}${objSuffix} whenever they want to ${actor.goal}.`,
          ];
          return { fullSentence: frames[idx % frames.length], boldPhrase: c };
        }
        if (verbTone === 'destructive') {
          const collWords = c.trim().toLowerCase().split(/\s+/);
          const hasObj =
            collWords.length >= 2 &&
            !ADVERB_MODIFIERS.has(collWords[0]) &&
            !(collWords[0].endsWith('ly') && !ADJ_ENDING_IN_LY.has(collWords[0]));
          const o = (obj: string) => (hasObj ? '' : ` ${obj}`);
          const frames = [
            `Severe events ${actor.place} can ${c}${o('homes')} if communities are unprepared.`,
            `Careless actions may ${c}${o('local areas')} and create trouble ${theme.contextEn}.`,
            `Residents must take precautions so nothing will ${c}${o('property')} ${actor.place}.`,
            `Experts warned that neglect could ${c}${o('habitats')} ${theme.contextEn}.`,
            `Sudden hazards might ${c}${o('buildings')} before rescue teams arrive.`,
            `Without early planning, storms can ${c}${o('public facilities')} ${actor.place}.`,
            `Officials explained how careless habits could ${c}${o('resources')} ${theme.contextEn}.`,
            `Poor preparation may ${c}${o('the whole area')} during peak seasons.`,
          ];
          return { fullSentence: frames[idx % frames.length], boldPhrase: c };
        }
        if (verbTone === 'avoid') {
          const collWords = c.trim().toLowerCase().split(/\s+/);
          const hasObj =
            collWords.length >= 2 &&
            !ADVERB_MODIFIERS.has(collWords[0]) &&
            !(collWords[0].endsWith('ly') && !ADJ_ENDING_IN_LY.has(collWords[0]));
          const o = (obj: string) => (hasObj ? '' : ` ${obj}`);
          const frames = [
            `Many ${actor.subjectPl} should ${c}${o('careless behaviour')} ${actor.place}.`,
            `Most people tend to ${c}${o('harmful habits')} ${theme.contextEn}.`,
            `Authorities work hard to ${c}${o('negative impacts')} ${actor.place}.`,
            `Students learn how to ${c}${o('common problems')} when working ${theme.contextEn}.`,
            `Responsible citizens try to ${c}${o('unnecessary risks')} ${actor.place}.`,
            `Advisers encourage ${actor.subjectPl} to ${c}${o('poor choices')} each week.`,
            `Families remind children to ${c}${o('unsafe actions')} ${theme.contextEn}.`,
            `Clear rules help communities ${c}${o('serious mistakes')} ${actor.place}.`,
          ];
          return { fullSentence: frames[idx % frames.length], boldPhrase: c };
        }
        if (verbTone === 'coping') {
          const frames = [
            `Safety drills teach ${actor.subjectPl} how to ${c} calmly.`,
            `Emergency guides explain practical steps to ${c} during a crisis.`,
            `Early preparation helps residents ${c} with fewer injuries.`,
            `Families review warning plans so everyone knows how to ${c}.`,
            `Local authorities train volunteers to help communities ${c}.`,
            `Clear instructions make it much easier for people to ${c}.`,
            `Students learned what supplies are needed to ${c} safely.`,
            `Good coordination gives neighbourhoods a better chance to ${c}.`,
          ];
          return { fullSentence: frames[idx % frames.length], boldPhrase: c };
        }
        const frames = [
          `In this lesson on ${theme.labelEn}, ${actor.subjectPl} are advised to ${c} ${actor.place}.`,
          `Many ${actor.subjectPl} try to ${c} in order to ${actor.goal}.`,
          `You can ${c} when spending time ${theme.contextEn}.`,
          `It is essential for ${actor.subjectPl} to ${c} with confidence.`,
          `Teachers encourage ${actor.subjectPl} to ${c} during group projects.`,
          `Most people choose to ${c} whenever they work ${actor.place}.`,
          `Good preparation makes it simpler to ${c} ${theme.contextEn}.`,
          `Everyone should learn how to ${c} so they can ${actor.goal}.`,
        ];
        return { fullSentence: frames[idx % frames.length], boldPhrase: c };
      }
      case 'VERB_PAST': {
        const frames = [
          `After a long effort ${actor.place}, the team ${c} safely.`,
          `Last week, ${actor.subjectPl} cheered happily when they ${c}.`,
          `Everyone felt relieved once the group ${c} ${theme.contextEn}.`,
          `Despite early difficulties, the visitors ${c} before evening.`,
          `Earlier this month, ${actor.subjectPl} worked together and ${c}.`,
          `Local reporters noted how smoothly the participants ${c} ${actor.place}.`,
          `By the end of the session, the whole class ${c} ${theme.contextEn}.`,
          `Everyone was proud after the volunteers ${c} ahead of schedule.`,
        ];
        return { fullSentence: frames[idx % frames.length], boldPhrase: c };
      }
      case 'VERB_PASSIVE': {
        const frames = isNegNoun || verbTone === 'destructive'
          ? [
              `Several buildings ${actor.place} were ${c} during the incident.`,
              `Reports showed that the local area was ${c} earlier this year.`,
              `Careless behaviour can leave people ${c} ${theme.contextEn}.`,
              `Authorities inspected properties that had been ${c} ${actor.place}.`,
              `A few old structures were ${c} before repairs started.`,
              `Officials recorded every neighbourhood that was ${c} ${theme.contextEn}.`,
              `Emergency crews checked roads that had been ${c} overnight.`,
              `News updates confirmed that parts of the district were ${c} ${actor.place}.`,
            ]
          : [
              `The famous project ${actor.place} is ${c} across the region.`,
              `Visitors learned that the site was ${c} with great care.`,
              `The figures are ${c} to help ${actor.subjectPl} ${actor.goal}.`,
              `Many scenes were ${c} ${theme.contextEn}.`,
              `This programme is ${c} by experienced educators ${actor.place}.`,
              `Several examples were ${c} during the workshop ${theme.contextEn}.`,
              `The new materials are ${c} so ${actor.subjectPl} can learn faster.`,
              `Every detail was ${c} before the exhibition opened ${actor.place}.`,
            ];
        return { fullSentence: frames[idx % frames.length], boldPhrase: c };
      }
      case 'VERB_ING': {
        const frames = [
          `Many ${actor.subjectPl} enjoy ${c} ${actor.place}.`,
          `By ${c}, people can ${actor.goal}.`,
          `We learned about the benefits of ${c} ${theme.contextEn}.`,
          `In fact, ${c} regularly helps ${actor.subjectPl} ${actor.goal}.`,
          `Teachers often recommend ${c} as a practical method ${actor.place}.`,
          `Students became more confident after ${c} ${theme.contextEn}.`,
          `Parents appreciate ${c} because it builds useful skills.`,
          `Most participants look forward to ${c} every weekend ${actor.place}.`,
        ];
        return { fullSentence: frames[idx % frames.length], boldPhrase: c };
      }
      case 'AGENT_NOUN': {
        const frames = [
          `We listened carefully to ${art} ${c} who shared useful experience ${theme.contextEn}.`,
          `Every ${c} plays an important part ${actor.place}.`,
          `The local community praised the ${c} for helping ${actor.subjectPl} ${actor.goal}.`,
          `Talking with ${art} ${c} gives us practical insight ${theme.contextEn}.`,
          `Our school invited ${art} ${c} to lead a workshop ${actor.place}.`,
          `Students asked the ${c} thoughtful questions about ${theme.labelEn}.`,
          `Working alongside ${art} ${c} inspires young learners to ${actor.goal}.`,
          `A short interview featured ${art} ${c} known throughout ${actor.place}.`,
        ];
        return { fullSentence: frames[idx % frames.length], boldPhrase: c };
      }
      case 'ADJ_PRED': {
        const adjClass = classifyAdjSemantics(c);
        const frames =
          adjClass === 'FOOD_TASTE'
            ? [
                `Everyone agreed that the homemade soup tasted ${c}.`,
                `Guests noticed that the traditional dish was ${c} during the festival.`,
                `The fresh local ingredients make this meal ${c}.`,
                `Visitors said the street snacks smelled and tasted ${c}.`,
                `Our family found the regional speciality ${c} at dinner.`,
                `Many travellers remember how ${c} the traditional food was.`,
                `The chef prepared a simple dish that turned out ${c}.`,
                `Children thought the freshly baked bread was ${c}.`,
              ]
            : adjClass === 'HUMAN_TRAIT'
            ? [
                `Most ${actor.subjectPl} feel ${c} when they prepare well.`,
                `Teachers noticed how ${c} the students became during the presentation.`,
                `With support from family, young people stay ${c} ${actor.place}.`,
                `Working together helps participants remain ${c} in new situations.`,
                `Parents are proud when their children grow ${c} and thoughtful.`,
                `Good guidance encourages learners to become ${c} over time.`,
                `After months of practice, the speaker looked ${c} on stage.`,
                `Friends admire people who stay ${c} even under pressure.`,
              ]
            : adjClass === 'PLACE_ATMOSPHERE'
            ? [
                `The old neighbourhood looks ${c} early in the morning.`,
                `Tourists found the historic centre ${c} during their visit.`,
                `On holiday weekends, the local market becomes ${c}.`,
                `Many visitors noticed how ${c} the surrounding area felt.`,
                `Residents work together to keep the public park ${c}.`,
                `Compared with last year, the coastal town seems ${c}.`,
                `Travel writers described the mountain village as ${c}.`,
                `At sunset, the riverside square appears ${c} to everyone.`,
              ]
            : [
                `Experts say this approach remains ${c} when trying to ${actor.goal}.`,
                `Students find the topic ${c} during discussions about ${theme.labelEn}.`,
                `Such preparation is considered ${c} ${actor.place}.`,
                `The final results looked ${c} to everyone in the hall.`,
                `Teachers agreed that the new plan seems ${c} ${actor.place}.`,
                `Many ${actor.subjectPl} think the resource is ${c} for daily learning.`,
                `Over time, these methods have proved ${c} for ${actor.subjectPl}.`,
                `Feedback showed that the programme was ${c} for the whole group.`,
              ];
        return { fullSentence: frames[idx % frames.length], boldPhrase: c };
      }
      case 'PREP_PHRASE': {
        const frames = [
          `Visitors reacted calmly ${c} as they observed the scene ${actor.place}.`,
          `People work together ${c} to ${actor.goal}.`,
          `Many daily activities happen ${c} ${theme.contextEn}.`,
          `The task was completed ${c} by ${actor.subjectPl}.`,
          `Students shared their ideas ${c} during the class meeting.`,
          `Several improvements appeared ${c} across the neighbourhood.`,
          `Participants stayed focused ${c} while preparing ${actor.place}.`,
          `Everyone cooperated smoothly ${c} ${theme.contextEn}.`,
        ];
        return { fullSentence: frames[idx % frames.length], boldPhrase: c };
      }
      case 'ADV_PHRASE': {
        const advClass = classifyAdvSemantics(c);
        const frames =
          advClass === 'SPEECH_COMM'
            ? [
                `After years of practice, she can speak English ${c}.`,
                `Students learn to express their ideas ${c} during class discussions.`,
                `The tour guide answered every question ${c} for the visitors.`,
                `Learners who read regularly often communicate ${c} with others.`,
                `During the interview, the candidate replied ${c} and clearly.`,
                `Children are taught to speak ${c} to elders and guests.`,
                `Good preparation helps presenters deliver their talks ${c}.`,
                `Participants shared their opinions ${c} throughout the workshop.`,
              ]
            : [
                `${subjPlCap} should work ${c} ${actor.place}.`,
                `The team completed each step ${c} to ${actor.goal}.`,
                `Everything was organized ${c} before the event began.`,
                `Speakers responded ${c} during the group discussion.`,
                `The volunteers handled the situation ${c} ${actor.place}.`,
                `Instructions were followed ${c} by all participants.`,
                `Learners finished the project ${c} ahead of schedule.`,
                `Everyone cooperated ${c} throughout the whole programme.`,
              ];
        return { fullSentence: frames[idx % frames.length], boldPhrase: c };
      }
      case 'NOUN_WITH_DET': {
        const frames = [
          `${subjPlCap} often learn about ${c} ${actor.place}.`,
          `Understanding ${c} helps people ${actor.goal}.`,
          `Our class discussed ${c} ${theme.contextEn}.`,
          `They paid close attention to ${c} throughout the project.`,
          `The textbook highlights ${c} in this chapter on ${theme.labelEn}.`,
          `Visitors showed great interest in ${c} ${actor.place}.`,
          `Experts wrote an article examining ${c} ${theme.contextEn}.`,
          `Students prepared a short report on ${c} for next week.`,
        ];
        return { fullSentence: frames[idx % frames.length], boldPhrase: c };
      }
      case 'NOUN_PLURAL': {
        const nounClass = classifyNounSemantics(c, word, isNegNoun, isAffected);
        if (isAffected) {
          const frames = [
            `Emergency teams responded quickly to support ${c} ${actor.place}.`,
            `Volunteers worked together to help ${c} ${theme.contextEn}.`,
            `Medical staff provided essential care for ${c} ${actor.place}.`,
            `Communities united to donate supplies to ${c} ${theme.contextEn}.`,
            `Local shelters offered warm meals to ${c} throughout the week.`,
            `Aid workers stayed in close contact with ${c} ${actor.place}.`,
            `Charity groups raised funds to assist ${c} ${theme.contextEn}.`,
            `Neighbours showed kindness by welcoming ${c} with open arms.`,
          ];
          return { fullSentence: frames[idx % frames.length], boldPhrase: c };
        }
        if (isNegNoun) {
          const frames = [
            `Authorities took urgent steps to address ${c} ${actor.place}.`,
            `Communities work together to reduce ${c} ${theme.contextEn}.`,
            `News reports highlighted ${c} across the region.`,
            `Students discussed practical ways to prevent ${c}.`,
            `Scientists collected data on ${c} over the past decade.`,
            `Clear policies can help cities limit ${c} ${actor.place}.`,
            `Our class studied how to respond safely to ${c}.`,
            `Public campaigns raise awareness about ${c} every year.`,
          ];
          return { fullSentence: frames[idx % frames.length], boldPhrase: c };
        }
        if (nounClass === 'HUMAN_GROUP') {
          const frames = [
            `Cultural stories help ${c} remember important family values.`,
            `Many ${c} today balance work, study, and community life.`,
            `Museums preserve heritage so that ${c} can learn from the past.`,
            `Teachers often discuss how ${c} adapt to modern changes.`,
            `Our documentary featured ${c} living in both cities and villages.`,
            `Community centres create spaces where ${c} can meet and share ideas.`,
            `Sociologists study how ${c} communicate across regions.`,
            `Local programmes aim to support ${c} throughout the neighbourhood.`,
          ];
          return { fullSentence: frames[idx % frames.length], boldPhrase: c };
        }
        if (nounClass === 'PLACE') {
          const frames = [
            `Tourists love visiting ${c} when they explore the region.`,
            `The city invested in upgrading ${c} for local residents.`,
            `Guidebooks highlight several ${c} worth seeing this season.`,
            `Volunteers helped clean and protect ${c} across the district.`,
            `Students took photos of ${c} during their weekend field trip.`,
            `Local authorities work to keep ${c} safe and welcoming.`,
            `Many travellers admire ${c} that reflect local history.`,
            `Maps make it easy for visitors to locate ${c} nearby.`,
          ];
          return { fullSentence: frames[idx % frames.length], boldPhrase: c };
        }
        const frames = [
          `These ${c} are especially important ${actor.place}.`,
          `${subjPlCap} often value ${c} when working to ${actor.goal}.`,
          `Teachers highlighted ${c} during the lesson on ${theme.labelEn}.`,
          `Understanding ${c} properly benefits everyone in the group.`,
          `Our textbook introduces ${c} connected with ${theme.labelEn}.`,
          `Visitors noticed ${c} featured throughout ${actor.place}.`,
          `Students compared ${c} in their group presentation.`,
          `Community articles often mention ${c} in everyday life.`,
        ];
        return { fullSentence: frames[idx % frames.length], boldPhrase: c };
      }
      case 'NOUN_UNCOUNTABLE': {
        if (isNegNoun) {
          const frames = [
            `Effective measures are needed to reduce ${c} ${actor.place}.`,
            `Our class studied the causes and effects of ${c}.`,
            `Raising public awareness helps communities tackle ${c} ${actor.place}.`,
            `Experts explained how to limit ${c} in modern society.`,
            `Local leaders introduced new rules to prevent ${c}.`,
            `Researchers published a detailed report on ${c} ${actor.place}.`,
            `Careful habits can protect families from ${c}.`,
            `Volunteers joined a campaign aimed at stopping ${c} ${actor.place}.`,
          ];
          return { fullSentence: frames[idx % frames.length], boldPhrase: c };
        }
        const frames = [
          `Proper attention to ${c} helps ${actor.subjectPl} ${actor.goal}.`,
          `In modern society, ${c} plays a vital role ${actor.place}.`,
          `Our discussion focused on ${c} during the lesson on ${theme.labelEn}.`,
          `Experts emphasize the value of ${c} in everyday life.`,
          `Students prepared notes about ${c} for their class report.`,
          `Reliable access to ${c} supports progress ${actor.place}.`,
          `Families appreciate ${c} when organizing daily routines.`,
          `The documentary explored ${c} from several useful angles.`,
        ];
        return { fullSentence: frames[idx % frames.length], boldPhrase: c };
      }
      case 'NOUN_SINGULAR':
      default: {
        const nounClass = classifyNounSemantics(c, word, isNegNoun, isAffected);
        if (isNegNoun) {
          const frames = [
            `Communities took quick action to deal with ${art} ${c} ${actor.place}.`,
            `News reports warned residents about ${art} ${c} in the region.`,
            `People learned how to prepare for ${art} ${c} safely.`,
            `The lesson explained the impact of ${art} ${c} on local life.`,
            `Emergency plans reduce the damage caused by ${art} ${c}.`,
            `Authorities monitored every warning sign of ${art} ${c}.`,
            `Neighbours cooperated closely after ${art} ${c} affected the area.`,
            `Advisers discussed practical ways to recover from ${art} ${c}.`,
          ];
          return { fullSentence: frames[idx % frames.length], boldPhrase: c };
        }
        if (nounClass === 'HUMAN_GROUP') {
          const frames = [
            `Growing up in ${art} ${c} teaches children to share and care for others.`,
            `Our documentary featured ${art} ${c} living happily together.`,
            `Many sociologists study how ${art} ${c} passes down cultural values.`,
            `During class, students talked about life in ${art} ${c}.`,
            `Books often describe how ${art} ${c} supports each member in hard times.`,
            `Photos from the past show ${art} ${c} celebrating the New Year together.`,
            `Respect and kindness help ${art} ${c} stay closely united.`,
            `In today's lesson, we compared life in ${art} ${c} then and now.`,
          ];
          return { fullSentence: frames[idx % frames.length], boldPhrase: c };
        }
        if (nounClass === 'TIME_EVENT') {
          const frames = [
            `Visitors often look forward to ${art} ${c} during the summer holidays.`,
            `After ${art} ${c} in the countryside, everyone returned home refreshed.`,
            `Our travel guide recommended ${art} ${c} so guests could see more of the region.`,
            `The family returned from ${art} ${c} with many unforgettable memories.`,
            `Students shared photos from ${art} ${c} during the Monday class meeting.`,
            `Planning ahead makes ${art} ${c} much more enjoyable and relaxing.`,
            `Many travellers prefer ${art} ${c} when visiting historic places.`,
            `Friends talked happily about ${art} ${c} they had spent together.`,
          ];
          return { fullSentence: frames[idx % frames.length], boldPhrase: c };
        }
        if (nounClass === 'PLACE') {
          const frames = [
            `Tourists from around the country love visiting ${art} ${c}.`,
            `Our class took a weekend field trip to ${art} ${c} last month.`,
            `Local residents are proud of having ${art} ${c} in their neighbourhood.`,
            `Travel magazines often feature ${art} ${c} as a must-see destination.`,
            `Preserving ${art} ${c} helps keep local heritage alive for everyone.`,
            `Visitors were impressed by the architecture of ${art} ${c}.`,
            `A local guide showed our group around ${art} ${c} yesterday.`,
            `Many families spend their weekends relaxing near ${art} ${c}.`,
          ];
          return { fullSentence: frames[idx % frames.length], boldPhrase: c };
        }
        if (nounClass === 'FOOD') {
          const frames = [
            `Guests were eager to taste ${art} ${c} prepared by local cooks.`,
            `Our family often enjoys ${art} ${c} together on weekend evenings.`,
            `Visitors remember the region for ${art} ${c} made with fresh ingredients.`,
            `The cooking class taught students how to make ${art} ${c} at home.`,
            `Every festival table includes ${art} ${c} loved by both adults and children.`,
            `My grandmother passed down the recipe for ${art} ${c}.`,
            `Tourists ordered ${art} ${c} at the famous street market.`,
            `Nutritionists recommend choosing ${art} ${c} for a balanced diet.`,
          ];
          return { fullSentence: frames[idx % frames.length], boldPhrase: c };
        }
        const frames = [
          `During the lesson on ${theme.labelEn}, students talked about ${art} ${c}.`,
          `The article highlighted ${art} ${c} as an important detail ${theme.contextEn}.`,
          `Many people appreciate how ${art} ${c} makes a positive difference.`,
          `Our class discussed ${art} ${c} while studying ${theme.labelEn}.`,
          `Readers noticed ${art} ${c} mentioned in the opening chapter.`,
          `Teachers explained why ${art} ${c} matters in everyday life.`,
          `Guests were impressed by ${art} ${c} during the community event.`,
          `Understanding ${art} ${c} helps learners broaden their knowledge.`,
        ];
        return { fullSentence: frames[idx % frames.length], boldPhrase: c };
      }
    }
  });
}

/**
 * Generate a complete, topic-matched, grade-calibrated DictionaryExercise for ANY keyword.
 * - Bolded dictionary examples count: 4 for 2 questions, 6 for 4 questions, 8 for 6 questions (questionCount + 2).
 * - Questions and answers are randomly selected from the bolded phrases in NON-SEQUENTIAL order.
 */
export function generateExerciseForKeyword(
  keyword: string,
  grade: number = 8,
  unit: number = 1,
  unitTitle: string = '',
  questionCount: number = 2,
  startQuestionNum: number = 35,
  maxWords: number = 3,
  dictionarySource: string = "Cambridge Advanced Learner's Dictionary",
  liveData?: {
    examples?: string[];
    examplePairs?: { fullSentence: string; boldPhrase: string }[];
    pos?: string;
    grammarTag?: string;
    defText?: string;
  },
  variationIndex: number = 0
): DictionaryExercise {
  const cleanWord = keyword.trim().toLowerCase();
  const effectiveMaxWords = Math.min(3, Math.max(2, maxWords));
  const sourceId = resolveDictionarySourceId(dictionarySource);
  const sourceInfo = DICTIONARY_SOURCES[sourceId];
  const targetExampleCount = getTargetBoldExampleCount(questionCount);
  const baseSeed = hashString(`${cleanWord}|${grade}|${unit}|${questionCount}|${variationIndex}`);

  // 1. Resolve IPA & dictionary metadata (prefer active Grade & Unit for multi-unit keywords like "career")
  const ipaDetails: IPADetails = deriveIPADetails(cleanWord);
  const currMatch = findCurriculumWord(cleanWord, grade, unit);
  const oxfordMatch = findOxfordWord(cleanWord);
  const theme = resolveTheme(unitTitle, unit, grade, currMatch?.unitTitle);

  // 2. Resolve curated template OR synthesize keyword+topic entry
  const curated = CURATED_TEMPLATES[cleanWord];

  let partOfSpeech =
    curated?.pos || liveData?.pos || currMatch?.pos || oxfordMatch?.pos || inferPartOfSpeech(cleanWord);
  let grammarTag =
    curated?.grammarTag ||
    liveData?.grammarTag ||
    (partOfSpeech.includes('adv')
      ? '[adverb]'
      : partOfSpeech.includes('verb') || partOfSpeech === 'v'
      ? '[transitive, intransitive]'
      : partOfSpeech.includes('adj')
      ? '[adjective]'
      : partOfSpeech.includes('plural')
      ? '[plural]'
      : '[countable, uncountable]');

  let definitionText =
    curated?.definition ||
    (liveData?.defText && liveData.defText.length > 8 ? liveData.defText : '') ||
    (currMatch?.meaningVi
      ? `a key ${partOfSpeech} meaning "${currMatch.meaningVi}", commonly used ${theme.contextEn}`
      : oxfordMatch
      ? `defined as "${oxfordMatch.meaningVi}" (${theme.labelVi})`
      : `an essential English ${partOfSpeech} used ${theme.contextEn}`);

  let examples: { fullSentence: string; boldPhrase: string }[] = [];

  if (curated) {
    // Keep curated examples strictly within 2..effectiveMaxWords (never 1 word, never 4+ words)
    const validCuratedExamples = curated.examples.filter((e) => {
      const wc = e.boldPhrase.trim().split(/\s+/).filter(Boolean).length;
      return wc >= 2 && wc <= effectiveMaxWords;
    });
    const curatedGradeAnswers = new Set(
      (curated.gradeQuestions?.[grade] || []).map((q) => q.answer.trim().toLowerCase())
    );

    if (validCuratedExamples.length >= targetExampleCount) {
      // Prioritize curated examples that match curated grade questions, shuffle them, then fill up to targetExampleCount
      const priority = validCuratedExamples.filter((e) =>
        curatedGradeAnswers.has(e.boldPhrase.trim().toLowerCase())
      );
      const secondary = validCuratedExamples.filter(
        (e) => !curatedGradeAnswers.has(e.boldPhrase.trim().toLowerCase())
      );
      const combined = [
        ...seededShuffle(priority, baseSeed + 11),
        ...seededShuffle(secondary, baseSeed + 19),
      ];
      examples = seededShuffle(combined.slice(0, targetExampleCount), baseSeed + 31);
    } else {
      // Keep all valid curated examples and synthesize additional bold phrases to reach targetExampleCount (e.g. 6 or 8)
      const existingPhrases = validCuratedExamples.map((e) => e.boldPhrase);
      const expandedPhrases = expandCollocationsToCount(
        existingPhrases,
        cleanWord,
        partOfSpeech,
        effectiveMaxWords,
        targetExampleCount,
        grammarTag,
        liveData?.examples
      );
      const existingLower = new Set(existingPhrases.map((p) => p.toLowerCase()));
      const extraPhrases = expandedPhrases.filter((p) => !existingLower.has(p.toLowerCase()));
      const extraExamples = buildTopicExamples(
        cleanWord,
        extraPhrases,
        partOfSpeech,
        theme,
        liveData?.examples,
        extraPhrases.length
      );
      examples = seededShuffle(
        [...validCuratedExamples, ...extraExamples].slice(0, targetExampleCount),
        baseSeed + 31
      );
    }
  } else {
    // Collect candidate collocations from curriculum, live Oxford pairs, or synthesize
    const rawColls: string[] = [];
    if (currMatch?.keyCollocations && currMatch.keyCollocations.length > 0) {
      rawColls.push(...currMatch.keyCollocations);
    }
    if (liveData?.examplePairs && liveData.examplePairs.length > 0) {
      for (const pair of liveData.examplePairs) {
        if (pair.boldPhrase) {
          const wc = pair.boldPhrase.trim().split(/\s+/).filter(Boolean).length;
          if (wc >= 2 && wc <= effectiveMaxWords) {
            rawColls.push(pair.boldPhrase);
          }
        }
      }
    }

    const fitted = fitCollocationsToMaxWords(rawColls, cleanWord, partOfSpeech, effectiveMaxWords);
    const expandedColls = expandCollocationsToCount(
      fitted,
      cleanWord,
      partOfSpeech,
      effectiveMaxWords,
      targetExampleCount,
      grammarTag,
      liveData?.examples
    );

    // Prefer live examplePairs if boldPhrase matches cleanly (and is strictly 2..effectiveMaxWords)
    const livePairMap = new Map<string, { fullSentence: string; boldPhrase: string }>();
    if (liveData?.examplePairs) {
      for (const p of liveData.examplePairs) {
        const wc = (p.boldPhrase || '').trim().split(/\s+/).filter(Boolean).length;
        if (p.boldPhrase && wc >= 2 && wc <= effectiveMaxWords && p.fullSentence.includes(p.boldPhrase)) {
          livePairMap.set(p.boldPhrase.toLowerCase(), {
            fullSentence: p.fullSentence,
            boldPhrase: p.boldPhrase,
          });
        }
      }
    }

    const synthesizedAll = buildTopicExamples(
      cleanWord,
      expandedColls,
      partOfSpeech,
      theme,
      liveData?.examples,
      targetExampleCount
    );

    const mergedExamples = synthesizedAll.map((ex) => {
      const liveMatch = livePairMap.get(ex.boldPhrase.toLowerCase());
      return liveMatch || ex;
    });

    // Shuffle dictionary examples order using seeded PRNG
    examples = seededShuffle(mergedExamples, baseSeed + 31);
  }

  // 3. Randomly select `questionCount` answers from `examples` in guaranteed NON-SEQUENTIAL order!
  const chosenIndices = pickNonSequentialIndices(
    examples.length,
    questionCount,
    baseSeed + 73 + variationIndex * 131
  );
  const chosenCollocations = chosenIndices.map((idx) => examples[idx].boldPhrase);

  const resolvedUnitTitle = unitTitle || currMatch?.unitTitle || theme.labelVi;
  const meaningVi = currMatch?.meaningVi || oxfordMatch?.meaningVi || cleanWord;

  let questions: ExerciseQuestionItem[] = [];
  const curatedPool =
    curated?.gradeQuestions?.[grade]?.filter((q) => {
      const wc = q.answer.trim().split(/\s+/).filter(Boolean).length;
      return wc >= 2 && wc <= effectiveMaxWords;
    }) || [];

  // Map each chosen non-sequential boldPhrase to a curated question (if matching & first variant) or synthesized question
  const usedCuratedKeys = new Set<string>();
  const synthOffsetSeed = Math.abs(variationIndex) + (baseSeed % 17);

  chosenCollocations.forEach((coll, idx) => {
    const qNum = startQuestionNum + idx;
    const curatedMatch =
      variationIndex % 2 === 0
        ? curatedPool.find(
            (q) =>
              q.answer.trim().toLowerCase() === coll.trim().toLowerCase() &&
              !usedCuratedKeys.has(q.sentenceBefore)
          )
        : undefined;

    if (curatedMatch) {
      usedCuratedKeys.add(curatedMatch.sentenceBefore);
      questions.push({
        ...curatedMatch,
        answer: coll,
        questionNumber: qNum,
      });
    } else {
      const [synth] = buildSynthesizedQuestions(
        cleanWord,
        partOfSpeech,
        grade,
        [coll],
        meaningVi,
        theme,
        resolvedUnitTitle,
        qNum,
        1,
        synthOffsetSeed + idx
      );
      questions.push(synth);
    }
  });

  const lastQuestionNum = startQuestionNum + Math.max(questions.length, 1) - 1;
  const wordRuleEn =
    effectiveMaxWords === 2
      ? 'Use TWO words for each phrase.'
      : 'Use TWO or THREE words for each phrase.';
  const wordRuleVi = effectiveMaxWords === 2 ? 'đúng 2 từ' : 'từ 2 đến 3 từ';

  const resolvedIpa =
    sourceId === 'oxford'
      ? ipaDetails.oxford?.uk || ipaDetails.cambridge.uk || curated?.ipa || `/${cleanWord}/`
      : sourceId === 'ldoce'
      ? ipaDetails.longman?.uk || ipaDetails.cambridge.uk || curated?.ipa || `/${cleanWord}/`
      : ipaDetails.cambridge?.uk || curated?.ipa || `/${cleanWord}/`;

  const entryUrl = sourceInfo.buildEntryUrl(cleanWord);

  return {
    keyword: cleanWord,
    ipa: resolvedIpa,
    ipaDetails,
    sourceUrl: entryUrl,
    cambridgeUrl: DICTIONARY_SOURCES.cambridge.buildEntryUrl(cleanWord),
    partOfSpeech,
    dictionarySource: `${sourceInfo.name} (${sourceInfo.domain})`,
    definitionNumber: '1.',
    grammarTag,
    definitionText,
    examples,
    instructionEn: `Look at the entry of the word "${cleanWord}" in a dictionary. Complete the sentences with phrases from the entry. ${wordRuleEn}`,
    instructionVi: `(Từ câu ${startQuestionNum} đến câu ${lastQuestionNum}, dựa vào bảng bên dưới, thí sinh chọn cụm từ thích hợp (${wordRuleVi}) để hoàn chỉnh mỗi câu và viết câu trả lời vào Phần ANSWERS.)`,
    pointsTotal: '(0.5 pt)',
    questions,
  };
}

interface QuestionFrameSpec {
  before: string;
  after: string;
  grammarNote: string;
  viPattern: (meaningVi: string, themeLabel: string, coll: string) => string;
}

/**
 * Synthesize grammatically accurate, topic-matched, grade-calibrated questions
 * that vary distinctly by keyword, unit theme, and grade level (Grades 6–9).
 */
function buildSynthesizedQuestions(
  word: string,
  pos: string,
  grade: number,
  collocations: string[],
  meaningVi: string,
  theme: ThemeMetadata,
  unitTitle: string,
  startNum: number,
  count: number,
  variationIndex: number = 0
): ExerciseQuestionItem[] {
  const result: ExerciseQuestionItem[] = [];
  const actor = THEME_ACTORS[theme.id];
  const seed = hashString(`${word}|${theme.id}|${grade}`);
  const effectiveColls = collocations.length > 0 ? collocations : [word];

  for (let i = 0; i < count; i++) {
    const coll = effectiveColls[i % effectiveColls.length];
    const phraseType = detectPhraseType(coll, pos);
    const qNum = startNum + i;
    const art = chooseArticle(coll);
    const frameIndex = (seed + i + variationIndex) % 6;
    const variantIdx = frameIndex % 3;
    const useAltGrade = frameIndex >= 3;
    // When more than 3 questions share a PhraseType, borrow an adjacent grade's distinct frame
    // to ensure all 4–6 questions have completely distinct sentence structures!
    const effectiveGrade = useAltGrade
      ? grade === 6
        ? 7
        : grade === 9
        ? 8
        : grade === 8
        ? 9
        : 8
      : grade;
    const isAffected = AFFECTED_PERSON_RE.test(coll);
    const isNegNoun = !isAffected && (isNegativeNounPhrase(word, coll) || theme.id === 'disasters');
    const verbTone = getVerbSemanticTone(coll);

    const collWords = coll.trim().toLowerCase().split(/\s+/);
    const phrasalObj = getPhrasalObject(coll);
    const startsWithAdv =
      collWords.length >= 2 &&
      (ADVERB_MODIFIERS.has(collWords[0]) ||
        (collWords[0].endsWith('ly') && !ADJ_ENDING_IN_LY.has(collWords[0])));
    const verbHasObject =
      (!phrasalObj &&
        ((collWords.length >= 2 && !startsWithAdv) || (collWords.length >= 3 && startsWithAdv))) ||
      (collWords.length >= 2 && (collWords[collWords.length - 1] || '').endsWith('ly'));

    const nounClass = classifyNounSemantics(coll, word, isNegNoun, isAffected);
    const adjClass = classifyAdjSemantics(coll);
    const advClass = classifyAdvSemantics(coll);

    const frame = selectGradeTopicFrame(
      phraseType,
      effectiveGrade,
      variantIdx,
      art,
      actor,
      theme,
      isNegNoun,
      verbTone,
      verbHasObject,
      phrasalObj,
      isAffected,
      nounClass,
      adjClass,
      advClass
    );

    const gradeBadge =
      grade === 6
        ? 'Cấp độ Lớp 6 (A1 - Cơ bản)'
        : grade === 7
        ? 'Cấp độ Lớp 7 (A2- - Mở rộng câu ghép)'
        : grade === 8
        ? 'Cấp độ Lớp 8 (A2+ - Câu phức & Điều kiện)'
        : 'Chuẩn Đề Tuyển sinh Lớp 10 THPT (B1 - Phân hóa cao)';

    result.push({
      questionNumber: qNum,
      sentenceBefore: frame.before,
      sentenceAfter: frame.after,
      answer: coll,
      vietnameseMeaning: frame.viPattern(meaningVi, theme.labelVi, coll),
      explanation: `${gradeBadge} • Chủ đề "${unitTitle || theme.labelVi}" • Từ khóa "${word}" (${meaningVi}): ${frame.grammarNote} Cụm từ "${coll}" trích từ bảng từ điển phù hợp chính xác cả về ngữ nghĩa và ngữ pháp.`,
    });
  }

  return result;
}

function selectGradeTopicFrame(
  phraseType: PhraseType,
  grade: number,
  variantIdx: number,
  art: 'a' | 'an',
  actor: ThemeActorSet,
  theme: ThemeMetadata,
  isNegNoun: boolean = false,
  verbTone: VerbSemanticTone = 'normal',
  verbHasObject: boolean = false,
  phrasalObj: string = '',
  isAffected: boolean = false,
  nounClass: NounSemanticClass = 'GENERAL',
  adjClass: AdjSemanticClass = 'GENERAL_EVAL',
  advClass: AdvSemanticClass = 'GENERAL_MANNER'
): QuestionFrameSpec {
  const subjPlCap = actor.subjectPl.charAt(0).toUpperCase() + actor.subjectPl.slice(1);
  const subjSgCap = actor.subjectSg.charAt(0).toUpperCase() + actor.subjectSg.slice(1);

  if (phraseType === 'VERB_BASE') {
    if (phrasalObj) {
      const byGrade: Record<number, QuestionFrameSpec[]> = {
        6: [
          {
            before: `Every week, ${actor.subjectPl} try to `,
            after: ` ${phrasalObj} ${actor.place}.`,
            grammarNote: 'Cụm động từ (phrasal verb) đứng sau "try to" kèm tân ngữ phía sau.',
            viPattern: (m) => `Hàng tuần, ${actor.viSubject} luôn cố gắng "${m}" ${actor.viPlace}.`,
          },
          {
            before: `At school, ${actor.subjectPl} should `,
            after: ` ${phrasalObj} to ${actor.goal}.`,
            grammarNote: 'Cụm động từ đứng sau động từ khiếm khuyết "should".',
            viPattern: (m) => `Ở trường, ${actor.viSubject} nên "${m}" để hoàn thành tốt mục tiêu ${actor.viPlace}.`,
          },
          {
            before: `We often `,
            after: ` ${phrasalObj} ${theme.contextEn}.`,
            grammarNote: 'Cụm động từ ở thì Hiện tại đơn.',
            viPattern: (m) => `Chúng ta thường "${m}" ${actor.viPlace}.`,
          },
        ],
        7: [
          {
            before: `Last month, ${actor.subjectPl} decided to `,
            after: ` ${phrasalObj} because they wanted to ${actor.goal}.`,
            grammarNote: 'Câu ghép liên từ "because" ở thì Quá khứ đơn kết hợp cụm động từ.',
            viPattern: (m) => `Tháng trước, ${actor.viSubject} quyết định "${m}" ${actor.viPlace}.`,
          },
          {
            before: `If everyone cooperates, we can easily `,
            after: ` ${phrasalObj} ${actor.place}.`,
            grammarNote: 'Câu điều kiện Loại 1 với cụm động từ sau "can easily".',
            viPattern: (m) => `Nếu mọi người hợp tác, chúng ta có thể dễ dàng "${m}" ${actor.viPlace}.`,
          },
          {
            before: `${subjSgCap} advised students to `,
            after: ` ${phrasalObj} ${theme.contextEn}.`,
            grammarNote: 'Cấu trúc "advise sb to + cụm động từ".',
            viPattern: (m) => `Học sinh được khuyên nên "${m}" ${actor.viPlace}.`,
          },
        ],
        8: [
          {
            before: `Although schedules are busy, ${actor.subjectPl} still `,
            after: ` ${phrasalObj} ${actor.place}.`,
            grammarNote: 'Câu phức nhượng bộ với "Although" kết hợp cụm động từ.',
            viPattern: (m) => `Dù lịch trình bận rộn, ${actor.viSubject} vẫn "${m}" ${actor.viPlace}.`,
          },
          {
            before: `When ${actor.subjectPl} learn how to `,
            after: ` ${phrasalObj} responsibly, life ${actor.place} improves.`,
            grammarNote: 'Câu phức thời gian với "When" và "learn how to + cụm động từ".',
            viPattern: (m) => `Khi biết cách "${m}" có trách nhiệm, cuộc sống ${actor.viPlace} tốt đẹp hơn.`,
          },
          {
            before: `Unless people `,
            after: ` ${phrasalObj} carefully, it is hard to ${actor.goal}.`,
            grammarNote: 'Câu điều kiện phủ định với "Unless" và cụm động từ.',
            viPattern: (m) => `Nếu không "${m}" cẩn thận, sẽ rất khó đạt mục tiêu ${actor.viPlace}.`,
          },
        ],
        9: [
          {
            before: `Advisers recommend that ${actor.subjectPl} proactively `,
            after: ` ${phrasalObj} to ${actor.goal} sustainably.`,
            grammarNote: 'Cấu trúc giả định thức với "recommend that S + cụm động từ".',
            viPattern: (m) => `Các cố vấn khuyến nghị ${actor.viSubject} chủ động "${m}" ${actor.viPlace}.`,
          },
          {
            before: `Those who regularly `,
            after: ` ${phrasalObj} ${actor.place} tend to ${actor.goal} more effectively.`,
            grammarNote: 'Mệnh đề quan hệ xác định với "who regularly + cụm động từ".',
            viPattern: (m) => `Những người thường xuyên "${m}" thường đạt hiệu quả cao hơn ${actor.viPlace}.`,
          },
          {
            before: `It is important for communities to `,
            after: ` ${phrasalObj} ${theme.contextEn}.`,
            grammarNote: 'Cấu trúc chủ ngữ giả "It is important for sb to + cụm động từ".',
            viPattern: (m) => `Việc "${m}" là rất quan trọng đối với cộng đồng ${actor.viPlace}.`,
          },
        ],
      };
      return (byGrade[grade] || byGrade[8])[variantIdx];
    }

    if (verbTone === 'destructive') {
      const o = (obj: string) => (verbHasObject ? '' : ` ${obj}`);
      const byGrade: Record<number, QuestionFrameSpec[]> = {
        6: [
          {
            before: `Careless actions can `,
            after: `${o('things')} ${actor.place}.`,
            grammarNote: 'Động từ khiếm khuyết "can + V nguyên mẫu" diễn tả cảnh báo.',
            viPattern: (m) => `Hành động bất cẩn có thể gây ra "${m}" ${actor.viPlace}.`,
          },
          {
            before: `We must be careful so that people do not `,
            after: `${o('anything')} ${actor.place}.`,
            grammarNote: 'Câu chỉ mục đích với "so that ... do not + V nguyên mẫu".',
            viPattern: (m) => `Chúng ta cần cẩn thận để mọi người không gây "${m}" ${actor.viPlace}.`,
          },
          {
            before: `Bad habits may `,
            after: `${o('our environment')} ${theme.contextEn}.`,
            grammarNote: 'Động từ khiếm khuyết "may + V nguyên mẫu".',
            viPattern: (m) => `Thói quen xấu có thể dẫn đến "${m}" ${actor.viPlace}.`,
          },
        ],
        7: [
          {
            before: `Last year, a sudden incident threatened to `,
            after: `${o('homes')} ${actor.place}.`,
            grammarNote: 'Động từ nguyên mẫu sau "threatened to" ở thì Quá khứ đơn.',
            viPattern: (m) => `Năm ngoái, sự cố bất ngờ đã đe dọa gây "${m}" ${actor.viPlace}.`,
          },
          {
            before: `If people are careless ${actor.place}, severe hazards may `,
            after: `${o('the surrounding area')} quickly.`,
            grammarNote: 'Câu điều kiện Loại 1 với "may + V nguyên mẫu".',
            viPattern: (m) => `Nếu bất cẩn ${actor.viPlace}, hiểm họa có thể gây "${m}" nhanh chóng.`,
          },
          {
            before: `${subjPlCap} prepared early because heavy storms could `,
            after: `${o('local property')} ${theme.contextEn}.`,
            grammarNote: 'Câu ghép liên từ "because" kết hợp "could + V nguyên mẫu".',
            viPattern: (m) => `${actor.viSubject} chuẩn bị sớm vì bão lớn có thể gây "${m}".`,
          },
        ],
        8: [
          {
            before: `Although warnings were issued early, severe events can `,
            after: `${o('properties')} ${actor.place}.`,
            grammarNote: 'Câu phức nhượng bộ với "Although", động từ sau "can".',
            viPattern: (m) => `Dù đã có cảnh báo sớm, sự cố nghiêm trọng vẫn có thể "${m}" ${actor.viPlace}.`,
          },
          {
            before: `If residents do not act promptly, rising dangers might `,
            after: `${o('property')} ${theme.contextEn}.`,
            grammarNote: 'Câu điều kiện Loại 1, cụm động từ nguyên mẫu sau "might".',
            viPattern: (m) => `Nếu người dân không hành động kịp thời, nguy cơ có thể "${m}" ${actor.viPlace}.`,
          },
          {
            before: `Experts warned that extreme weather could `,
            after: `${o('vital facilities')} ${actor.place}.`,
            grammarNote: 'Mệnh đề tường thuật với "warned that ... could + V nguyên mẫu".',
            viPattern: (m) => `Các chuyên gia cảnh báo thời tiết cực đoan có thể "${m}" ${actor.viPlace}.`,
          },
        ],
        9: [
          {
            before: `Environmental analysts warn that unchecked hazards could `,
            after: `${o('ecosystems')} ${actor.place} within years.`,
            grammarNote: 'Câu phức tường thuật chuẩn B1 với "warn that ... could + V nguyên mẫu".',
            viPattern: (m) => `Các nhà phân tích cảnh báo hiểm họa không kiểm soát có thể "${m}" ${actor.viPlace}.`,
          },
          {
            before: `Unless preventive measures are strictly enforced, unexpected crises may `,
            after: `${o('communities')} ${theme.contextEn}.`,
            grammarNote: 'Câu điều kiện phủ định với "Unless" và động từ nguyên mẫu sau "may".',
            viPattern: (m) => `Trừ khi có biện pháp phòng ngừa nghiêm ngặt, khủng hoảng có thể "${m}" ${actor.viPlace}.`,
          },
          {
            before: `Reports indicate that failure to adapt promptly could `,
            after: `${o('essential resources')} ${actor.place}.`,
            grammarNote: 'Cấu trúc học thuật với danh ngữ "failure to..." và "could + V".',
            viPattern: (m) => `Báo cáo chỉ ra sự chậm thích ứng có thể gây "${m}" ${actor.viPlace}.`,
          },
        ],
      };
      return (byGrade[grade] || byGrade[8])[variantIdx];
    }

    if (verbTone === 'avoid') {
      const o = (obj: string) => (verbHasObject ? '' : ` ${obj}`);
      const byGrade: Record<number, QuestionFrameSpec[]> = {
        6: [
          {
            before: `In our class, students should `,
            after: `${o('bad habits')} ${actor.place}.`,
            grammarNote: 'Động từ khiếm khuyết "should + V nguyên mẫu".',
            viPattern: (m) => `Trong lớp học, học sinh nên "${m}" ${actor.viPlace}.`,
          },
          {
            before: `Many ${actor.subjectPl} try to `,
            after: `${o('unsafe actions')} ${theme.contextEn}.`,
            grammarNote: 'Cấu trúc "try to + V nguyên mẫu" với chủ ngữ số nhiều.',
            viPattern: (m) => `Nhiều ${actor.viSubject} cố gắng "${m}" ${actor.viPlace}.`,
          },
          {
            before: `We must learn to `,
            after: `${o('waste')} ${actor.place}.`,
            grammarNote: 'Cấu trúc "learn to + V nguyên mẫu".',
            viPattern: (m) => `Chúng ta cần học cách "${m}" ${actor.viPlace}.`,
          },
        ],
        7: [
          {
            before: `Most ${actor.subjectPl} should learn to `,
            after: `${o('unhealthy routines')} ${actor.place}.`,
            grammarNote: 'Cấu trúc "learn to + V nguyên mẫu".',
            viPattern: (m) => `Phần lớn ${actor.viSubject} nên học cách "${m}" ${actor.viPlace}.`,
          },
          {
            before: `If everyone cooperates, we can `,
            after: `${o('unnecessary problems')} ${theme.contextEn}.`,
            grammarNote: 'Câu điều kiện Loại 1 với "can + V nguyên mẫu".',
            viPattern: (m) => `Nếu mọi người hợp tác, chúng ta có thể "${m}" ${actor.viPlace}.`,
          },
          {
            before: `${subjSgCap} urged people to `,
            after: `${o('careless behaviour')} ${actor.place}.`,
            grammarNote: 'Cấu trúc "urge sb to + V nguyên mẫu" ở thì Quá khứ đơn.',
            viPattern: (m) => `Mọi người được kêu gọi "${m}" ${actor.viPlace}.`,
          },
        ],
        8: [
          {
            before: `Although tempting habits exist, ${actor.subjectPl} should `,
            after: `${o('harmful behaviours')} ${actor.place}.`,
            grammarNote: 'Câu phức nhượng bộ với "Although" và "should + V nguyên mẫu".',
            viPattern: (m) => `Mặc dù còn nhiều thói quen xấu, ${actor.viSubject} nên "${m}" ${actor.viPlace}.`,
          },
          {
            before: `If communities work together, they will `,
            after: `${o('risks')} ${theme.contextEn}.`,
            grammarNote: 'Câu điều kiện Loại 1 với "will + V nguyên mẫu".',
            viPattern: (m) => `Nếu chung tay, cộng đồng sẽ "${m}" ${actor.viPlace}.`,
          },
          {
            before: `When rules are clear, citizens readily `,
            after: `${o('unfair practices')} ${actor.place}.`,
            grammarNote: 'Câu phức với "When" ở thì Hiện tại đơn.',
            viPattern: (m) => `Khi quy định rõ ràng, người dân sẵn sàng "${m}" ${actor.viPlace}.`,
          },
        ],
        9: [
          {
            before: `Specialists emphasize that young people must `,
            after: `${o('reckless behaviour')} ${actor.place} to protect well-being.`,
            grammarNote: 'Mệnh đề danh ngữ với động từ nguyên mẫu sau "must".',
            viPattern: (m) => `Các chuyên gia nhấn mạnh giới trẻ phải "${m}" ${actor.viPlace}.`,
          },
          {
            before: `Only through strict self-discipline can ${actor.subjectPl} `,
            after: `${o('distractions')} ${theme.contextEn}.`,
            grammarNote: 'Đảo ngữ nhấn mạnh "Only through + N + can S + V" chuẩn đề thi lớp 10.',
            viPattern: (m) => `Chỉ nhờ tự giác kỷ luật, ${actor.viSubject} mới có thể "${m}" ${actor.viPlace}.`,
          },
          {
            before: `Surveys reveal that conscientious citizens always try to `,
            after: `${o('wasteful practices')} ${actor.place}.`,
            grammarNote: 'Câu phức tường thuật với chủ ngữ số nhiều và "try to + V".',
            viPattern: (m) => `Các khảo sát cho thấy công dân có ý thức luôn nỗ lực "${m}" ${actor.viPlace}.`,
          },
        ],
      };
      return (byGrade[grade] || byGrade[8])[variantIdx];
    }

    if (verbTone === 'coping') {
      const byGrade: Record<number, QuestionFrameSpec[]> = {
        6: [
          {
            before: `Safety lessons teach children how to `,
            after: ` when danger appears.`,
            grammarNote: 'Động từ nguyên mẫu đứng sau "how to".',
            viPattern: (m) => `Các bài học an toàn dạy trẻ cách "${m}" khi gặp nguy hiểm.`,
          },
          {
            before: `Residents learn what to do so they can `,
            after: ` safely.`,
            grammarNote: 'Động từ nguyên mẫu sau động từ khiếm khuyết "can".',
            viPattern: (m) => `Người dân học cách xử lý để có thể "${m}" an toàn.`,
          },
          {
            before: `Clear plans help families `,
            after: ` during an emergency.`,
            grammarNote: 'Cấu trúc "help sb + V nguyên mẫu".',
            viPattern: (m) => `Kế hoạch rõ ràng giúp các gia đình "${m}" trong tình huống khẩn cấp.`,
          },
        ],
        7: [
          {
            before: `Because they practised the safety drill, the villagers managed to `,
            after: ` without panic.`,
            grammarNote: 'Câu ghép với "Because", cụm động từ nguyên mẫu sau "managed to".',
            viPattern: (m) => `Vì đã diễn tập an toàn, dân làng đã kịp thời "${m}" mà không hoảng loạn.`,
          },
          {
            before: `If residents follow emergency warnings, they will `,
            after: ` much more safely.`,
            grammarNote: 'Câu điều kiện Loại 1 với "will + V nguyên mẫu".',
            viPattern: (m) => `Nếu tuân thủ cảnh báo khẩn cấp, người dân sẽ "${m}" an toàn hơn nhiều.`,
          },
          {
            before: `Rescue workers showed local families how to `,
            after: ` in severe weather.`,
            grammarNote: 'Cấu trúc "show sb how to + V nguyên mẫu".',
            viPattern: (m) => `Đội cứu hộ hướng dẫn các gia đình cách "${m}" trong thời tiết khắc nghiệt.`,
          },
        ],
        8: [
          {
            before: `Although emergencies happen unexpectedly, proper training helps people `,
            after: ` calmly.`,
            grammarNote: 'Câu phức nhượng bộ với "Although" và "help sb + V nguyên mẫu".',
            viPattern: (m) => `Dù tình huống khẩn cấp xảy ra bất ngờ, việc tập huấn kỹ giúp mọi người "${m}" bình tĩnh.`,
          },
          {
            before: `When communities prepare emergency kits in advance, residents are more likely to `,
            after: `.`,
            grammarNote: 'Câu phức với "When" và cấu trúc "be likely to + V nguyên mẫu".',
            viPattern: (m) => `Khi chuẩn bị sẵn bộ dụng cụ khẩn cấp, người dân dễ dàng "${m}" hơn.`,
          },
          {
            before: `Unless people know the escape routes, it can be hard to `,
            after: ` in time.`,
            grammarNote: 'Câu điều kiện phủ định với "Unless" và "hard to + V nguyên mẫu".',
            viPattern: (m) => `Nếu không nắm rõ lối thoát hiểm, mọi người sẽ khó có thể "${m}" kịp lúc.`,
          },
        ],
        9: [
          {
            before: `Disaster specialists emphasize that knowing how to `,
            after: ` is an essential life skill for every citizen.`,
            grammarNote: 'Mệnh đề danh ngữ với cụm "knowing how to + V nguyên mẫu" làm chủ ngữ.',
            viPattern: (m) => `Các chuyên gia nhấn mạnh rằng biết cách "${m}" là kỹ năng sinh tồn thiết yếu.`,
          },
          {
            before: `Only with early warning systems and regular drills can vulnerable communities `,
            after: ` effectively.`,
            grammarNote: 'Cấu trúc đảo ngữ nhấn mạnh "Only with ... can S + V" chuẩn đề thi lớp 10.',
            viPattern: (m) => `Chỉ nhờ hệ thống cảnh báo sớm và diễn tập định kỳ, cộng đồng mới có thể "${m}" hiệu quả.`,
          },
          {
            before: `Public safety campaigns aim to equip young people with the knowledge needed to `,
            after: `.`,
            grammarNote: 'Cấu trúc "equip sb with ... needed to + V nguyên mẫu".',
            viPattern: (m) => `Các chiến dịch an toàn cộng đồng trang bị cho giới trẻ kiến thức cần thiết để "${m}".`,
          },
        ],
      };
      return (byGrade[grade] || byGrade[8])[variantIdx];
    }

    const byGrade: Record<number, QuestionFrameSpec[]> = {
      6: [
        {
          before: `In the unit on ${theme.labelEn}, ${actor.subjectPl} should `,
          after: ` ${actor.place}.`,
          grammarNote: 'Cấu trúc động từ khiếm khuyết "should + V nguyên mẫu" ở thì Hiện tại đơn.',
          viPattern: (m, t) => `Trong chủ đề ${t}, ${actor.viSubject} nên "${m}" ${actor.viPlace}.`,
        },
        {
          before: `Every week, ${actor.subjectPl} try to `,
          after: ` so they can ${actor.goal}.`,
          grammarNote: 'Cấu trúc "try to + V nguyên mẫu" ở thì Hiện tại đơn.',
          viPattern: (m) => `Hàng tuần, ${actor.viSubject} cố gắng "${m}" để thực hiện tốt mục tiêu ${actor.viPlace}.`,
        },
        {
          before: `At school, ${actor.subjectSg} reminds everyone to `,
          after: ` ${actor.place}.`,
          grammarNote: 'Cấu trúc câu đơn với động từ nguyên mẫu có "to" (remind sb to + V).',
          viPattern: (m) => `Mọi người được nhắc nhở cần "${m}" ${actor.viPlace}.`,
        },
      ],
      7: [
        {
          before: `Last week, ${actor.subjectPl} worked together because they wanted to `,
          after: ` ${actor.place}.`,
          grammarNote: 'Câu ghép liên từ "because" ở thì Quá khứ đơn, cụm động từ nguyên mẫu sau "wanted to".',
          viPattern: (m) => `Tuần trước, ${actor.viSubject} đã phối hợp với nhau vì họ muốn "${m}" ${actor.viPlace}.`,
        },
        {
          before: `If ${actor.subjectPl} cooperate well, they will `,
          after: ` and ${actor.goal}.`,
          grammarNote: 'Câu điều kiện Loại 1 với "will + V nguyên mẫu".',
          viPattern: (m) => `Nếu hợp tác tốt, ${actor.viSubject} sẽ "${m}" ${actor.viPlace}.`,
        },
        {
          before: `${subjSgCap} encouraged us to `,
          after: ` so that we could ${actor.goal}.`,
          grammarNote: 'Mệnh đề chỉ mục đích "so that" kết hợp động từ nguyên mẫu sau "encouraged us to".',
          viPattern: (m) => `Chúng tôi được khuyến khích "${m}" để thực hiện tốt mục tiêu ${actor.viPlace}.`,
        },
      ],
      8: [
        {
          before: `Although conditions ${actor.place} can be challenging, ${actor.subjectPl} still strive to `,
          after: ` to ${actor.goal}.`,
          grammarNote: 'Câu phức nhượng bộ với "Although", động từ nguyên mẫu sau "strive to".',
          viPattern: (m) => `Mặc dù điều kiện ${actor.viPlace} còn nhiều thử thách, ${actor.viSubject} vẫn nỗ lực "${m}".`,
        },
        {
          before: `When ${actor.subjectPl} take part in projects on ${theme.labelEn}, they are expected to `,
          after: `.`,
          grammarNote: 'Câu phức với mệnh đề thời gian "When" và cấu trúc bị động "are expected to + V".',
          viPattern: (m) => `Khi tham gia các dự án về ${actor.viPlace}, ${actor.viSubject} được kỳ vọng sẽ "${m}".`,
        },
        {
          before: `Unless ${actor.subjectPl} prepare early, they will find it hard to `,
          after: ` ${actor.place}.`,
          grammarNote: 'Câu điều kiện với "Unless" và cấu trúc "find it hard to + V".',
          viPattern: (m) => `Nếu không chuẩn bị sớm, ${actor.viSubject} sẽ thấy khó có thể "${m}" ${actor.viPlace}.`,
        },
      ],
      9: [
        {
          before: `Specialists in ${theme.labelEn} recommend that ${actor.subjectPl} `,
          after: ` in order to ${actor.goal}.`,
          grammarNote: 'Cấu trúc giả định thức nâng cao "recommend that S + (should) + V nguyên mẫu".',
          viPattern: (m) => `Các chuyên gia khuyến nghị ${actor.viSubject} nên "${m}" để đạt mục tiêu bền vững ${actor.viPlace}.`,
        },
        {
          before: `To overcome practical challenges ${actor.place}, those who wish to ${actor.goal} should `,
          after: `.`,
          grammarNote: 'Câu phức chứa mệnh đề quan hệ "who" và động từ nguyên mẫu sau "should".',
          viPattern: (m) => `Để vượt qua thách thức thực tiễn ${actor.viPlace}, mọi người nên "${m}".`,
        },
        {
          before: `It is widely acknowledged that encouraging ${actor.subjectPl} to `,
          after: ` significantly strengthens their ability to ${actor.goal}.`,
          grammarNote: 'Cấu trúc chủ ngữ giả "It is acknowledged that..." kết hợp cụm động từ nguyên mẫu.',
          viPattern: (m) => `Việc khuyến khích ${actor.viSubject} "${m}" giúp nâng cao rõ rệt hiệu quả ${actor.viPlace}.`,
        },
      ],
    };
    return (byGrade[grade] || byGrade[8])[variantIdx];
  }

  if (phraseType === 'VERB_PAST') {
    const byGrade: Record<number, QuestionFrameSpec[]> = {
      6: [
        {
          before: `Yesterday, the visitors `,
          after: ` safely after the trip.`,
          grammarNote: 'Cụm động từ ở thì Quá khứ đơn sau chủ ngữ số nhiều.',
          viPattern: (m) => `Hôm qua, du khách đã "${m}" an toàn sau chuyến đi ${actor.viPlace}.`,
        },
        {
          before: `Last weekend, ${actor.subjectPl} `,
          after: ` with big smiles.`,
          grammarNote: 'Thì Quá khứ đơn kể lại sự việc đã xảy ra.',
          viPattern: (m) => `Cuối tuần trước, ${actor.viSubject} đã "${m}" với niềm vui ${actor.viPlace}.`,
        },
        {
          before: `After a long walk ${actor.place}, everyone `,
          after: ` before dinner.`,
          grammarNote: 'Cụm động từ thì Quá khứ đơn sau trạng từ chỉ thời gian.',
          viPattern: (m) => `Sau quãng đường dài ${actor.viPlace}, mọi người đã "${m}" trước bữa tối.`,
        },
      ],
      7: [
        {
          before: `${subjPlCap} felt very happy because they `,
          after: ` on time ${actor.place}.`,
          grammarNote: 'Câu ghép liên từ "because" ở thì Quá khứ đơn.',
          viPattern: (m) => `${actor.viSubject} rất vui vì họ đã "${m}" đúng lúc ${actor.viPlace}.`,
        },
        {
          before: `When the rain stopped, the group `,
          after: ` without getting lost.`,
          grammarNote: 'Mệnh đề thời gian ở thì Quá khứ đơn.',
          viPattern: (m) => `Khi cơn mưa tạnh, cả nhóm đã "${m}" mà không bị lạc ${actor.viPlace}.`,
        },
        {
          before: `Thanks to teamwork, ${actor.subjectPl} `,
          after: ` after hours of effort.`,
          grammarNote: 'Cấu trúc "Thanks to + N" kết hợp cụm động từ quá khứ.',
          viPattern: (m) => `Nhờ tinh thần đồng đội, ${actor.viSubject} đã "${m}" ${actor.viPlace}.`,
        },
      ],
      8: [
        {
          before: `Although the journey ${actor.place} was tiring, the explorers `,
          after: ` before sunset.`,
          grammarNote: 'Câu phức nhượng bộ với "Although" ở thì Quá khứ đơn.',
          viPattern: (m) => `Dù hành trình ${actor.viPlace} khá mệt mỏi, mọi người vẫn "${m}" trước hoàng hôn.`,
        },
        {
          before: `Once the storm cleared, local residents `,
          after: ` and checked on their neighbours.`,
          grammarNote: 'Câu phức thời gian với "Once" và hai động từ quá khứ song song.',
          viPattern: (m) => `Ngay khi bão tan, người dân đã "${m}" ${actor.viPlace}.`,
        },
        {
          before: `Even though visibility was poor ${theme.contextEn}, the team `,
          after: ` safely.`,
          grammarNote: 'Câu phức nhượng bộ với "Even though" ở thì Quá khứ đơn.',
          viPattern: (m) => `Mặc dù tầm nhìn hạn chế ${actor.viPlace}, cả đội vẫn "${m}" an toàn.`,
        },
      ],
      9: [
        {
          before: `After overcoming unexpected challenges ${actor.place}, the participants `,
          after: ` with invaluable experience.`,
          grammarNote: 'Cụm giới từ phân từ "After + V-ing" kết hợp cụm động từ quá khứ.',
          viPattern: (m) => `Sau khi vượt qua nhiều thử thách ${actor.viPlace}, mọi người đã "${m}" với nhiều kinh nghiệm quý.`,
        },
        {
          before: `Witnesses recalled how the exhausted travellers `,
          after: ` just as dusk began to fall.`,
          grammarNote: 'Câu phức tường thuật với mệnh đề "how..." ở thì Quá khứ đơn.',
          viPattern: (m) => `Các nhân chứng kể lại rằng những người lữ hành đã "${m}" khi trời chạng vạng.`,
        },
        {
          before: `Having followed the guide’s advice carefully, the students `,
          after: ` ahead of schedule.`,
          grammarNote: 'Mệnh đề phân từ hoàn thành "Having + V3" chuẩn đề thi tuyển sinh lớp 10.',
          viPattern: (m) => `Sau khi làm theo hướng dẫn cẩn thận, học sinh đã "${m}" sớm hơn dự kiến.`,
        },
      ],
    };
    return (byGrade[grade] || byGrade[8])[variantIdx];
  }

  if (phraseType === 'VERB_PASSIVE') {
    const byGrade: Record<number, QuestionFrameSpec[]> = {
      6: [
        {
          before: isNegNoun || verbTone === 'destructive'
            ? `Some old houses were `
            : `Many famous places are `,
          after: isNegNoun || verbTone === 'destructive'
            ? ` after the heavy rain.`
            : ` ${actor.place}.`,
          grammarNote: 'Cụm phân từ bị động đứng sau động từ "were/are" (câu bị động cơ bản).',
          viPattern: (m) => `Nhiều địa điểm/công trình "${m}" ${actor.viPlace}.`,
        },
        {
          before: isNegNoun || verbTone === 'destructive'
            ? `Last week, careless drivers were `
            : `The cultural centre is `,
          after: isNegNoun || verbTone === 'destructive'
            ? ` for breaking rules.`
            : ` so everyone can visit easily.`,
          grammarNote: 'Thể bị động cơ bản với động từ to be + phân từ quá khứ.',
          viPattern: (m) => `Địa điểm/người tham gia đã được/bị "${m}" ${actor.viPlace}.`,
        },
        {
          before: isNegNoun || verbTone === 'destructive'
            ? `Several buildings were `
            : `This popular spot is `,
          after: isNegNoun || verbTone === 'destructive'
            ? ` during the storm.`
            : ` during holidays.`,
          grammarNote: 'Cấu trúc bị động "is/were + V3/pp".',
          viPattern: (m) => `Nơi đây "${m}" ${actor.viPlace}.`,
        },
      ],
      7: [
        {
          before: isNegNoun || verbTone === 'destructive'
            ? `Last year, dozens of homes were `
            : `The community festival was `,
          after: isNegNoun || verbTone === 'destructive'
            ? ` because the water rose too fast.`
            : ` with support from ${actor.subjectPl}.`,
          grammarNote: 'Câu ghép liên từ kết hợp thể bị động Quá khứ đơn "was/were + V3".',
          viPattern: (m) => `Sự kiện/công trình đã "${m}" ${actor.viPlace}.`,
        },
        {
          before: isNegNoun || verbTone === 'destructive'
            ? `If safety rules are ignored, people may be `
            : `Temperature ${actor.place} is often `,
          after: isNegNoun || verbTone === 'destructive'
            ? ` ${actor.place}.`
            : ` in scientific reports.`,
          grammarNote: 'Thể bị động Hiện tại đơn / động từ khiếm khuyết.',
          viPattern: (m) => `Đối tượng được/bị "${m}" ${actor.viPlace}.`,
        },
        {
          before: isNegNoun || verbTone === 'destructive'
            ? `Many trees in the village were `
            : `Our school library is `,
          after: isNegNoun || verbTone === 'destructive'
            ? ` when the disaster struck.`
            : ` near the main gate.`,
          grammarNote: 'Cụm bị động đứng sau "is/were".',
          viPattern: (m) => `Vị trí/đối tượng "${m}" ${actor.viPlace}.`,
        },
      ],
      8: [
        {
          before: isNegNoun || verbTone === 'destructive'
            ? `Although rescue teams arrived early, riverside farms were `
            : `Although the building looks traditional, it is `,
          after: isNegNoun || verbTone === 'destructive'
            ? ` overnight.`
            : ` to serve ${actor.subjectPl}.`,
          grammarNote: 'Câu phức nhượng bộ với "Although" kết hợp thể bị động.',
          viPattern: (m) => `Mặc dù đã có chuẩn bị, đối tượng vẫn "${m}" ${actor.viPlace}.`,
        },
        {
          before: isNegNoun || verbTone === 'destructive'
            ? `Unless drainage systems are upgraded, low streets will be `
            : `When new centres are `,
          after: isNegNoun || verbTone === 'destructive'
            ? ` each rainy season.`
            : `, residents gain easier access ${theme.contextEn}.`,
          grammarNote: 'Câu phức điều kiện/thời gian kết hợp thể bị động.',
          viPattern: (m) => `Tình huống "${m}" xảy ra ${actor.viPlace}.`,
        },
        {
          before: isNegNoun || verbTone === 'destructive'
            ? `Several bridges had been `
            : `Every detail ${actor.place} has been `,
          after: isNegNoun || verbTone === 'destructive'
            ? ` before emergency crews reached the valley.`
            : ` to ensure high quality.`,
          grammarNote: 'Thể bị động Quá khứ hoàn thành / Hiện tại hoàn thành.',
          viPattern: (m) => `Sự việc đã "${m}" ${actor.viPlace}.`,
        },
      ],
      9: [
        {
          before: isNegNoun || verbTone === 'destructive'
            ? `Official assessments confirmed that coastal settlements had been `
            : `Architects noted that the cultural complex was `,
          after: isNegNoun || verbTone === 'destructive'
            ? ` before relief aid arrived.`
            : ` to harmonize with its surroundings.`,
          grammarNote: 'Câu phức tường thuật kết hợp thể bị động Quá khứ hoàn thành / Quá khứ đơn.',
          viPattern: (m) => `Các báo cáo ghi nhận đối tượng đã "${m}" ${actor.viPlace}.`,
        },
        {
          before: isNegNoun || verbTone === 'destructive'
            ? `Regions which are frequently `
            : `Facilities that are `,
          after: isNegNoun || verbTone === 'destructive'
            ? ` require resilient infrastructure and early-warning systems.`
            : ` attract greater participation from ${actor.subjectPl}.`,
          grammarNote: 'Mệnh đề quan hệ bị động "which/that are + phân từ".',
          viPattern: (m) => `Những khu vực/cơ sở "${m}" đóng vai trò quan trọng ${actor.viPlace}.`,
        },
        {
          before: isNegNoun || verbTone === 'destructive'
            ? `Had preventive barriers been constructed sooner, fewer houses would have been `
            : `Records show that data ${actor.place} must be `,
          after: isNegNoun || verbTone === 'destructive'
            ? ` last autumn.`
            : ` with precision.`,
          grammarNote: 'Đảo ngữ câu điều kiện Loại 3 dạng bị động / bị động với động từ khuyết thiếu.',
          viPattern: (m) => `Đối tượng sẽ không bị / cần phải được "${m}" ${actor.viPlace}.`,
        },
      ],
    };
    return (byGrade[grade] || byGrade[8])[variantIdx];
  }

  if (phraseType === 'VERB_ING') {
    const byGrade: Record<number, QuestionFrameSpec[]> = {
      6: [
        {
          before: `At weekends, ${actor.subjectPl} enjoy `,
          after: ` together ${actor.place}.`,
          grammarNote: 'Cấu trúc "enjoy + V-ing" diễn tả sở thích/hoạt động quen thuộc.',
          viPattern: (m) => `Vào cuối tuần, ${actor.viSubject} rất thích việc "${m}" cùng nhau ${actor.viPlace}.`,
        },
        {
          before: `${subjPlCap} are interested in `,
          after: ` because it helps them ${actor.goal}.`,
          grammarNote: 'Cụm danh động từ đứng sau giới từ "interested in + V-ing".',
          viPattern: (m) => `${actor.viSubject} hứng thú với việc "${m}" ${actor.viPlace}.`,
        },
        {
          before: ``,
          after: ` is a useful activity for ${actor.subjectPl} ${actor.place}.`,
          grammarNote: 'Cụm danh động từ (V-ing) đứng đầu câu làm chủ ngữ số ít.',
          viPattern: (m) => `Việc "${m}" là một hoạt động hữu ích ${actor.viPlace}.`,
        },
      ],
      7: [
        {
          before: `By `,
          after: ` regularly, ${actor.subjectPl} made clear progress ${actor.place}.`,
          grammarNote: 'Cụm danh động từ sau giới từ chỉ phương thức "By + V-ing" ở thì Quá khứ đơn.',
          viPattern: (m) => `Bằng cách "${m}" đều đặn, ${actor.viSubject} đã đạt tiến bộ rõ rệt ${actor.viPlace}.`,
        },
        {
          before: `${subjPlCap} kept `,
          after: ` until they managed to ${actor.goal}.`,
          grammarNote: 'Cấu trúc "keep + V-ing" (tiếp tục làm gì) trong câu ghép.',
          viPattern: (m) => `${actor.viSubject} đã kiên trì "${m}" ${actor.viPlace}.`,
        },
        {
          before: `Instead of wasting time, teenagers can spend weekends `,
          after: ` ${actor.place}.`,
          grammarNote: 'Cấu trúc "spend time + V-ing".',
          viPattern: (m) => `Thay vì lãng phí thời gian, các bạn trẻ có thể dành cuối tuần "${m}" ${actor.viPlace}.`,
        },
      ],
      8: [
        {
          before: `Although `,
          after: ` requires steady effort, ${actor.subjectPl} find it rewarding ${actor.place}.`,
          grammarNote: 'Cụm danh động từ làm chủ ngữ trong mệnh đề nhượng bộ với "Although".',
          viPattern: (m) => `Mặc dù việc "${m}" đòi hỏi sự cố gắng, ${actor.viSubject} vẫn thấy rất xứng đáng ${actor.viPlace}.`,
        },
        {
          before: `If people focus on `,
          after: `, they will find it easier to ${actor.goal}.`,
          grammarNote: 'Câu điều kiện Loại 1 kết hợp "focus on + V-ing".',
          viPattern: (m) => `Nếu tập trung vào việc "${m}", mọi người sẽ dễ dàng đạt mục tiêu ${actor.viPlace}.`,
        },
        {
          before: `${subjPlCap} prefer `,
          after: ` ${actor.place} rather than staying idle.`,
          grammarNote: 'Cấu trúc "prefer + V-ing ... rather than + V-ing".',
          viPattern: (m) => `${actor.viSubject} thích "${m}" ${actor.viPlace} hơn là ngồi yên một chỗ.`,
        },
      ],
      9: [
        {
          before: `Researchers have demonstrated that consistently `,
          after: ` enables ${actor.subjectPl} to ${actor.goal} far more effectively.`,
          grammarNote: 'Cụm danh động từ làm chủ ngữ trong mệnh đề danh ngữ sau "demonstrated that".',
          viPattern: (m) => `Các nhà nghiên cứu chứng minh rằng việc kiên trì "${m}" giúp nâng cao hiệu quả ${actor.viPlace}.`,
        },
        {
          before: `The longitudinal project, which prioritized `,
          after: ` ${actor.place}, yielded remarkable benefits for society.`,
          grammarNote: 'Mệnh đề quan hệ không xác định với "which prioritized + V-ing".',
          viPattern: (m) => `Dự án dài hạn ưu tiên việc "${m}" ${actor.viPlace} đã mang lại nhiều lợi ích nổi bật.`,
        },
        {
          before: `Without actively `,
          after: `, communities may struggle to ${actor.goal} in the modern era.`,
          grammarNote: 'Cụm giới từ giả định "Without + V-ing" chuẩn cấu trúc viết lại câu tuyển sinh lớp 10.',
          viPattern: (m) => `Nếu không tích cực "${m}", cộng đồng sẽ gặp khó khăn ${actor.viPlace}.`,
        },
      ],
    };
    return (byGrade[grade] || byGrade[8])[variantIdx];
  }

  if (phraseType === 'AGENT_NOUN') {
    if (isAffected) {
      const byGrade: Record<number, QuestionFrameSpec[]> = {
        6: [
          {
            before: `Volunteers quickly helped ${art} `,
            after: ` ${actor.place}.`,
            grammarNote: `Cụm danh từ chỉ người cần hỗ trợ đi sau mạo từ "${art}".`,
            viPattern: (m) => `Các tình nguyện viên đã nhanh chóng giúp đỡ một (${m}) ${actor.viPlace}.`,
          },
          {
            before: `Medical staff cared for every `,
            after: ` with kindness.`,
            grammarNote: 'Cụm danh từ chỉ người số ít đứng sau từ hạn định "every".',
            viPattern: (m) => `Nhân viên y tế đã tận tình chăm sóc mỗi (${m}) ${actor.viPlace}.`,
          },
          {
            before: `Our school donated warm clothes to ${art} `,
            after: ` after the incident.`,
            grammarNote: `Cụm danh từ chỉ người làm tân ngữ sau giới từ "to ${art}".`,
            viPattern: (m) => `Trường chúng tôi đã quyên góp quần áo ấm cho một (${m}) sau sự cố.`,
          },
        ],
        7: [
          {
            before: `Because the situation was urgent, rescuers supported each `,
            after: ` ${actor.place}.`,
            grammarNote: 'Câu ghép với "Because", cụm danh từ số ít sau "each".',
            viPattern: (m) => `Vì tình huống khẩn cấp, lực lượng cứu hộ đã hỗ trợ từng (${m}) ${actor.viPlace}.`,
          },
          {
            before: `A local charity provided food and shelter for ${art} `,
            after: ` who lost belongings.`,
            grammarNote: `Mệnh đề quan hệ "who lost..." bổ nghĩa cho danh từ chỉ người sau "${art}".`,
            viPattern: (m) => `Tổ chức từ thiện đã cung cấp lương thực và nơi ở cho một (${m}).`,
          },
          {
            before: `Yesterday, doctors checked on ${art} `,
            after: ` carefully ${theme.contextEn}.`,
            grammarNote: `Cụm danh từ chỉ người làm tân ngữ trong thì Quá khứ đơn.`,
            viPattern: (m) => `Hôm qua, các bác sĩ đã thăm khám cẩn thận cho một (${m}) ${actor.viPlace}.`,
          },
        ],
        8: [
          {
            before: `Although the area was hard to reach, teams rescued ${art} `,
            after: ` safely.`,
            grammarNote: `Câu phức nhượng bộ với "Although", danh từ chỉ người sau "${art}".`,
            viPattern: (m) => `Mặc dù khu vực khó tiếp cận, đội cứu hộ vẫn giải cứu an toàn một (${m}).`,
          },
          {
            before: `If communities respond promptly, every `,
            after: ` will receive essential aid ${actor.place}.`,
            grammarNote: 'Câu điều kiện Loại 1 với cụm danh từ số ít sau "every".',
            viPattern: (m) => `Nếu cộng đồng phản ứng kịp thời, mỗi (${m}) sẽ nhận được hỗ trợ thiết yếu.`,
          },
          {
            before: `Essential relief supplies were delivered to each `,
            after: ` ${actor.place}.`,
            grammarNote: 'Thể bị động Quá khứ đơn với cụm danh từ chỉ người sau "each".',
            viPattern: (m) => `Nhu yếu phẩm cứu trợ đã được chuyển tới từng (${m}) ${actor.viPlace}.`,
          },
        ],
        9: [
          {
            before: `Emergency coordinators ensured that every `,
            after: ` who required urgent assistance received timely care ${actor.place}.`,
            grammarNote: 'Mệnh đề danh ngữ kết hợp mệnh đề quan hệ xác định "who required...".',
            viPattern: (m) => `Điều phối viên đảm bảo mỗi (${m}) cần trợ giúp khẩn cấp đều được chăm sóc kịp thời.`,
          },
          {
            before: `According to humanitarian reports, supporting ${art} `,
            after: ` requires both immediate relief and long-term counselling.`,
            grammarNote: `Cụm danh động từ "supporting ${art}..." làm chủ ngữ trong câu học thuật.`,
            viPattern: (m) => `Theo báo cáo nhân đạo, việc hỗ trợ một (${m}) đòi hỏi cả cứu trợ tức thời lẫn tư vấn lâu dài.`,
          },
          {
            before: `The shelter was established so that any `,
            after: ` affected by hardship could recover safely ${actor.place}.`,
            grammarNote: 'Câu phức chỉ mục đích "so that" kết hợp cụm phân từ quá khứ "affected by".',
            viPattern: (m) => `Khu tạm trú được lập ra để bất kỳ (${m}) nào gặp hoạn nạn đều có thể hồi phục an toàn.`,
          },
        ],
      };
      return (byGrade[grade] || byGrade[8])[variantIdx];
    }

    const byGrade: Record<number, QuestionFrameSpec[]> = {
      6: [
        {
          before: `Yesterday we met ${art} `,
          after: ` who works happily ${actor.place}.`,
          grammarNote: `Cụm danh từ chỉ người đi sau mạo từ "${art}".`,
          viPattern: (m) => `Hôm qua chúng tôi đã gặp một người (${m}) làm việc rất nhiệt tình ${actor.viPlace}.`,
        },
        {
          before: `Every `,
          after: ` tries to ${actor.goal} with joy.`,
          grammarNote: 'Cụm danh từ chỉ người số ít đứng sau từ hạn định "Every".',
          viPattern: (m) => `Mỗi người (${m}) đều cố gắng thực hiện tốt công việc ${actor.viPlace}.`,
        },
        {
          before: `In our project, the `,
          after: ` gave useful help to everyone.`,
          grammarNote: 'Cụm danh từ chỉ người làm chủ ngữ số ít sau mạo từ "the".',
          viPattern: (m) => `Trong dự án, người (${m}) đã hỗ trợ mọi người rất nhiều ${actor.viPlace}.`,
        },
      ],
      7: [
        {
          before: `The event ${actor.place} became successful because ${art} `,
          after: ` guided everyone patiently.`,
          grammarNote: `Câu ghép liên từ "because", cụm danh từ chỉ người đi sau mạo từ "${art}".`,
          viPattern: (m) => `Sự kiện ${actor.viPlace} đã thành công vì có người (${m}) hướng dẫn tận tình.`,
        },
        {
          before: `To ${actor.goal}, it is helpful to ask ${art} `,
          after: ` for practical advice.`,
          grammarNote: `Cụm danh từ chỉ người làm tân ngữ sau động từ "ask ${art}".`,
          viPattern: (m) => `Chúng ta nên hỏi ý kiến từ một người (${m}) có kinh nghiệm ${actor.viPlace}.`,
        },
        {
          before: `Yesterday, ${art} `,
          after: ` showed ${actor.subjectPl} how to ${actor.goal}.`,
          grammarNote: `Cụm danh từ chỉ người sau "${art}" làm chủ ngữ trong thì Quá khứ đơn.`,
          viPattern: (m) => `Hôm qua, một người (${m}) đã hướng dẫn mọi người ${actor.viPlace}.`,
        },
      ],
      8: [
        {
          before: `Although the task ${actor.place} was demanding, the `,
          after: ` still managed to ${actor.goal}.`,
          grammarNote: 'Câu phức nhượng bộ với "Although", cụm danh từ chỉ người sau "the".',
          viPattern: (m) => `Mặc dù nhiệm vụ ${actor.viPlace} đòi hỏi cao, người (${m}) vẫn hoàn thành tốt.`,
        },
        {
          before: `If you visit the centre ${theme.contextEn}, you will surely meet ${art} `,
          after: ` ready to share knowledge.`,
          grammarNote: `Câu điều kiện Loại 1 kết hợp cụm danh từ chỉ người sau "${art}".`,
          viPattern: (m) => `Nếu ghé thăm trung tâm ${actor.viPlace}, bạn sẽ gặp người (${m}) sẵn sàng chia sẻ kiến thức.`,
        },
        {
          before: `The workshop was led by ${art} `,
          after: ` respected widely ${actor.place}.`,
          grammarNote: `Thể bị động kết hợp cụm phân từ quá khứ "respected widely", sau giới từ "by ${art}".`,
          viPattern: (m) => `Buổi hướng dẫn được chủ trì bởi một người (${m}) rất được kính trọng ${actor.viPlace}.`,
        },
      ],
      9: [
        {
          before: `The committee honoured every `,
          after: ` whose dedication helped ${actor.subjectPl} ${actor.goal}.`,
          grammarNote: 'Câu phức chứa mệnh đề quan hệ sở hữu "whose dedication...", cụm danh từ chỉ người đi sau "every".',
          viPattern: (m) => `Hội đồng đã vinh danh mỗi người (${m}) có đóng góp lớn ${actor.viPlace}.`,
        },
        {
          before: `According to recent studies on ${theme.labelEn}, becoming ${art} `,
          after: ` requires both dedication and adaptability.`,
          grammarNote: `Cấu trúc danh động từ "becoming ${art}..." làm chủ ngữ trong câu học thuật.`,
          viPattern: (m) => `Theo các báo cáo, để trở thành một người (${m}) đòi hỏi cả sự tận tâm lẫn khả năng thích ứng ${actor.viPlace}.`,
        },
        {
          before: `Only ${art} `,
          after: ` who possesses genuine passion can inspire others ${actor.place}.`,
          grammarNote: 'Mệnh đề quan hệ xác định với "who possesses...", cụm danh từ chỉ người làm chủ ngữ.',
          viPattern: (m) => `Chỉ có người (${m}) mang niềm đam mê thực sự mới có thể truyền cảm hứng ${actor.viPlace}.`,
        },
      ],
    };
    return (byGrade[grade] || byGrade[8])[variantIdx];
  }

  if (phraseType === 'ADJ_PRED') {
    if (adjClass === 'FOOD_TASTE') {
      const byGrade: Record<number, QuestionFrameSpec[]> = {
        6: [
          {
            before: `The homemade soup tastes `,
            after: ` on a cool evening.`,
            grammarNote: 'Tính từ vị giác đứng sau động từ nối "tastes".',
            viPattern: (m) => `Món súp nhà làm có vị "${m}" vào buổi tối mát mẻ.`,
          },
          {
            before: `Everyone says the traditional dish is `,
            after: ` and healthy.`,
            grammarNote: 'Tính từ làm vị ngữ đứng sau động từ to be "is".',
            viPattern: (m) => `Mọi người đều khen món ăn truyền thống này "${m}" và tốt cho sức khỏe.`,
          },
          {
            before: `These fresh snacks look `,
            after: ` to all the children.`,
            grammarNote: 'Tính từ đứng sau động từ nối "look".',
            viPattern: (m) => `Những món ăn nhẹ tươi ngon này trông thật "${m}".`,
          },
        ],
        7: [
          {
            before: `Our guests smiled because the regional meal was `,
            after: ` at dinner.`,
            grammarNote: 'Câu ghép liên từ "because" với tính từ vị giác sau "was".',
            viPattern: (m) => `Các vị khách rất hài lòng vì bữa ăn đặc sản thật "${m}".`,
          },
          {
            before: `If you use fresh herbs, the noodle soup will taste `,
            after: `.`,
            grammarNote: 'Câu điều kiện Loại 1 với "will taste + tính từ".',
            viPattern: (m) => `Nếu dùng rau thơm tươi, món phở/bún sẽ có vị "${m}".`,
          },
          {
            before: `Visitors found the street food `,
            after: ` during the festival.`,
            grammarNote: 'Cấu trúc "find + O + tính từ" ở thì Quá khứ đơn.',
            viPattern: (m) => `Du khách cảm thấy ẩm thực đường phố thật "${m}" trong lễ hội.`,
          },
        ],
        8: [
          {
            before: `Although the recipe uses simple ingredients, the final dish turns out `,
            after: `.`,
            grammarNote: 'Câu phức nhượng bộ với "Although" và động từ nối "turns out + tính từ".',
            viPattern: (m) => `Dù công thức dùng nguyên liệu đơn giản, món ăn hoàn thành lại vô cùng "${m}".`,
          },
          {
            before: `Many travellers remember the coastal town because its seafood is `,
            after: `.`,
            grammarNote: 'Câu phức nguyên nhân kết hợp tính từ đứng sau động từ to be "is".',
            viPattern: (m) => `Nhiều du khách nhớ mãi thị trấn ven biển vì hải sản ở đó thật "${m}".`,
          },
          {
            before: `Even after hours of simmering, the broth remains `,
            after: ` and rich in flavour.`,
            grammarNote: 'Động từ nối "remains + tính từ" mô tả hương vị món ăn.',
            viPattern: (m) => `Ngay cả sau nhiều giờ ninh, nước dùng vẫn giữ được vị "${m}".`,
          },
        ],
        9: [
          {
            before: `Food critics noted that the traditional speciality proved `,
            after: ` among international guests.`,
            grammarNote: 'Cấu trúc tường thuật với động từ nối "proved + tính từ".',
            viPattern: (m) => `Các nhà phê bình ẩm thực ghi nhận món đặc sản thực sự "${m}" trong mắt du khách quốc tế.`,
          },
          {
            before: `What makes this heritage recipe `,
            after: ` is the careful balance of local spices.`,
            grammarNote: 'Câu chẻ mệnh đề danh ngữ "What makes ... [tính từ] is...".',
            viPattern: (m) => `Điều khiến công thức cổ truyền này trở nên "${m}" chính là sự cân bằng gia vị địa phương.`,
          },
          {
            before: `Tourists who sample home-cooked cuisine often agree that it is `,
            after: `.`,
            grammarNote: 'Mệnh đề quan hệ xác định kết hợp mệnh đề danh ngữ "agree that it is + tính từ".',
            viPattern: (m) => `Du khách thưởng thức cơm nhà truyền thống đều đồng ý rằng món ăn thật "${m}".`,
          },
        ],
      };
      return (byGrade[grade] || byGrade[8])[variantIdx];
    }

    if (adjClass === 'HUMAN_TRAIT') {
      const byGrade: Record<number, QuestionFrameSpec[]> = {
        6: [
          {
            before: `Most students feel `,
            after: ` when their teachers encourage them.`,
            grammarNote: 'Tính từ mô tả cảm xúc/phẩm chất con người đứng sau động từ nối "feel".',
            viPattern: (m) => `Hầu hết học sinh cảm thấy "${m}" khi được thầy cô động viên.`,
          },
          {
            before: `Our classmates are `,
            after: ` during group activities.`,
            grammarNote: 'Tính từ làm vị ngữ đứng sau động từ to be "are" với chủ ngữ chỉ người.',
            viPattern: (m) => `Các bạn cùng lớp tỏ ra "${m}" trong các hoạt động nhóm.`,
          },
          {
            before: `With good practice, every learner looks `,
            after: ` in front of the class.`,
            grammarNote: 'Tính từ đứng sau động từ nối "looks" mô tả người học.',
            viPattern: (m) => `Nhờ luyện tập tốt, mỗi học sinh trông thật "${m}" trước lớp.`,
          },
        ],
        7: [
          {
            before: `${subjPlCap} became `,
            after: ` after joining the school club.`,
            grammarNote: 'Tính từ đứng sau động từ nối ở thì Quá khứ đơn "became".',
            viPattern: (m) => `${actor.viSubject} đã trở nên "${m}" sau khi tham gia câu lạc bộ.`,
          },
          {
            before: `If teenagers prepare well, they will feel `,
            after: ` before the presentation.`,
            grammarNote: 'Câu điều kiện Loại 1 với "will feel + tính từ".',
            viPattern: (m) => `Nếu chuẩn bị kỹ, các bạn trẻ sẽ cảm thấy "${m}" trước buổi thuyết trình.`,
          },
          {
            before: `Friends admire anyone who stays `,
            after: ` during difficult moments.`,
            grammarNote: 'Mệnh đề quan hệ với động từ nối "stays + tính từ".',
            viPattern: (m) => `Bạn bè luôn ngưỡng mộ những người giữ được sự "${m}" trong lúc khó khăn.`,
          },
        ],
        8: [
          {
            before: `Although the challenge was unfamiliar, the participants remained `,
            after: ` throughout the contest.`,
            grammarNote: 'Câu phức nhượng bộ với "Although", tính từ đứng sau "remained".',
            viPattern: (m) => `Mặc dù thử thách còn mới mẻ, các thí sinh vẫn giữ được sự "${m}" suốt cuộc thi.`,
          },
          {
            before: `Supportive feedback from mentors helps young learners grow `,
            after: ` over time.`,
            grammarNote: 'Cấu trúc "help sb grow + tính từ".',
            viPattern: (m) => `Sự góp ý tích cực từ người hướng dẫn giúp người học ngày càng "${m}".`,
          },
          {
            before: `Even when schedules are tight, staying `,
            after: ` allows ${actor.subjectPl} to do their best.`,
            grammarNote: 'Cụm danh động từ "staying + tính từ" làm chủ ngữ trong câu phức.',
            viPattern: (m) => `Ngay cả khi lịch trình bận rộn, việc giữ trạng thái "${m}" giúp mọi người làm tốt nhất.`,
          },
        ],
        9: [
          {
            before: `Educators observe that students who read widely often become `,
            after: ` in public speaking.`,
            grammarNote: 'Mệnh đề danh ngữ kết hợp mệnh đề quan hệ xác định với "become + tính từ".',
            viPattern: (m) => `Các nhà giáo dục nhận thấy học sinh đọc nhiều thường trở nên "${m}" khi nói trước đám đông.`,
          },
          {
            before: `What makes the young volunteers `,
            after: ` is their willingness to learn from every experience.`,
            grammarNote: 'Câu chẻ mệnh đề danh ngữ "What makes + O + [tính từ] is...".',
            viPattern: (m) => `Điều làm nên sự "${m}" ở các tình nguyện viên trẻ chính là tinh thần ham học hỏi.`,
          },
          {
            before: `Mentors noted that the graduating students appeared `,
            after: ` as they prepared for future careers.`,
            grammarNote: 'Động từ nối "appeared + tính từ" trong câu phức thời gian với "as".',
            viPattern: (m) => `Các cố vấn ghi nhận học sinh cuối cấp tỏ ra "${m}" khi chuẩn bị cho tương lai.`,
          },
        ],
      };
      return (byGrade[grade] || byGrade[8])[variantIdx];
    }

    if (adjClass === 'PLACE_ATMOSPHERE') {
      const byGrade: Record<number, QuestionFrameSpec[]> = {
        6: [
          {
            before: `The old neighbourhood looks `,
            after: ` on Sunday mornings.`,
            grammarNote: 'Tính từ miêu tả không gian/địa điểm đứng sau động từ nối "looks".',
            viPattern: (m) => `Khu phố cổ trông thật "${m}" vào những sáng Chủ nhật.`,
          },
          {
            before: `During national holidays, the city centre is `,
            after: `.`,
            grammarNote: 'Tính từ làm vị ngữ sau động từ to be "is" mô tả địa điểm.',
            viPattern: (m) => `Vào các dịp lễ lớn, trung tâm thành phố trở nên "${m}".`,
          },
          {
            before: `Our local park feels `,
            after: ` in the early evening.`,
            grammarNote: 'Tính từ đứng sau động từ nối "feels" mô tả không khí nơi chốn.',
            viPattern: (m) => `Công viên địa phương mang lại cảm giác "${m}" vào đầu buổi tối.`,
          },
        ],
        7: [
          {
            before: `Tourists took many photos because the coastal village was `,
            after: `.`,
            grammarNote: 'Câu ghép với "because" kết hợp tính từ miêu tả địa điểm sau "was".',
            viPattern: (m) => `Du khách chụp rất nhiều ảnh vì ngôi làng ven biển thật "${m}".`,
          },
          {
            before: `If more visitors arrive this weekend, the night market will become `,
            after: `.`,
            grammarNote: 'Câu điều kiện Loại 1 với "will become + tính từ".',
            viPattern: (m) => `Nếu cuối tuần có thêm nhiều khách, chợ đêm sẽ trở nên "${m}".`,
          },
          {
            before: `Travel bloggers found the historic district `,
            after: ` at sunset.`,
            grammarNote: 'Cấu trúc "find + O + tính từ" ở thì Quá khứ đơn.',
            viPattern: (m) => `Các blogger du lịch nhận thấy khu phố lịch sử thật "${m}" lúc hoàng hôn.`,
          },
        ],
        8: [
          {
            before: `Although rapid development has changed nearby areas, the mountain valley remains `,
            after: `.`,
            grammarNote: 'Câu phức nhượng bộ với "Although" và động từ nối "remains + tính từ".',
            viPattern: (m) => `Mặc dù sự phát triển đã thay đổi nhiều nơi xung quanh, thung lũng vẫn giữ nét "${m}".`,
          },
          {
            before: `Local residents work together so that their neighbourhood stays `,
            after: ` all year round.`,
            grammarNote: 'Mệnh đề chỉ mục đích "so that" kết hợp động từ nối "stays + tính từ".',
            viPattern: (m) => `Người dân địa phương chung tay để khu phố luôn "${m}" quanh năm.`,
          },
          {
            before: `When the festival begins, the main square quickly grows `,
            after: `.`,
            grammarNote: 'Câu phức thời gian với "When" và động từ nối "grows + tính từ".',
            viPattern: (m) => `Khi lễ hội bắt đầu, quảng trường chính nhanh chóng trở nên "${m}".`,
          },
        ],
        9: [
          {
            before: `Urban planners noted that the renovated riverside area proved `,
            after: ` for families and tourists alike.`,
            grammarNote: 'Cấu trúc tường thuật với động từ nối "proved + tính từ".',
            viPattern: (m) => `Các nhà quy hoạch ghi nhận khu vực ven sông sau cải tạo thực sự "${m}".`,
          },
          {
            before: `What makes the heritage town `,
            after: ` is the harmony between old architecture and green spaces.`,
            grammarNote: 'Câu chẻ mệnh đề danh ngữ "What makes ... [tính từ] is...".',
            viPattern: (m) => `Điều làm cho thị trấn di sản trở nên "${m}" chính là sự hài hòa giữa kiến trúc cổ và không gian xanh.`,
          },
          {
            before: `Visitors who explore the countryside often remark that the landscape appears `,
            after: `.`,
            grammarNote: 'Mệnh đề quan hệ xác định kết hợp động từ nối "appears + tính từ".',
            viPattern: (m) => `Du khách khám phá vùng quê thường nhận xét phong cảnh nơi đây trông thật "${m}".`,
          },
        ],
      };
      return (byGrade[grade] || byGrade[8])[variantIdx];
    }

    const byGrade: Record<number, QuestionFrameSpec[]> = {
      6: [
        {
          before: `For many students, the project on ${theme.labelEn} is `,
          after: `.`,
          grammarNote: 'Cụm tính từ làm vị ngữ đứng sau động từ to be "is".',
          viPattern: (m) => `Đối với nhiều học sinh, dự án về ${actor.viPlace} mang tính chất "${m}".`,
        },
        {
          before: `This approach looks `,
          after: ` for beginners ${actor.place}.`,
          grammarNote: 'Tính từ đứng sau động từ nối "looks".',
          viPattern: (m) => `Cách tiếp cận này có vẻ "${m}" đối với người mới ${actor.viPlace}.`,
        },
        {
          before: `Many learners think the new topic is `,
          after: ` during class discussions.`,
          grammarNote: 'Tính từ làm vị ngữ sau "is" trong câu trần thuật.',
          viPattern: (m) => `Nhiều học sinh nhận thấy chủ đề mới thật "${m}" trong giờ thảo luận.`,
        },
      ],
      7: [
        {
          before: `The class discussion became `,
          after: ` after everyone shared their examples.`,
          grammarNote: 'Tính từ đứng sau động từ nối ở thì Quá khứ đơn "became".',
          viPattern: (m) => `Buổi thảo luận trở nên "${m}" sau khi mọi người chia sẻ ví dụ.`,
        },
        {
          before: `If we prepare carefully, the plan to ${actor.goal} will be `,
          after: ` for everyone.`,
          grammarNote: 'Câu điều kiện Loại 1 với tính từ đứng sau "will be".',
          viPattern: (m) => `Nếu chuẩn bị chu đáo, kế hoạch ${actor.viPlace} sẽ "${m}" đối với mọi người.`,
        },
        {
          before: `Teachers agreed that this method is `,
          after: ` compared with older approaches.`,
          grammarNote: 'Câu ghép kết hợp tính từ làm vị ngữ sau "is".',
          viPattern: (m) => `Giáo viên đồng ý rằng phương pháp này "${m}" so với cách cũ.`,
        },
      ],
      8: [
        {
          before: `Although challenges ${actor.place} persist, the new solution remains `,
          after: ` in modern life.`,
          grammarNote: 'Câu phức nhượng bộ với "Although", tính từ đứng sau động từ nối "remains".',
          viPattern: (m) => `Mặc dù còn khó khăn ${actor.viPlace}, giải pháp mới vẫn giữ được tính "${m}".`,
        },
        {
          before: `${subjPlCap} found the programme `,
          after: ` because it helped them ${actor.goal}.`,
          grammarNote: 'Cấu trúc "find + O + tính từ" kết hợp mệnh đề nguyên nhân.',
          viPattern: (m) => `${actor.viSubject} nhận thấy chương trình thật "${m}".`,
        },
        {
          before: `Even when resources are limited, this idea still seems `,
          after: ` for the community.`,
          grammarNote: 'Câu phức với "Even when" và động từ nối "seems + tính từ".',
          viPattern: (m) => `Ngay cả khi nguồn lực hạn chế, ý tưởng này vẫn tỏ ra "${m}" cho cộng đồng.`,
        },
      ],
      9: [
        {
          before: `Experts concluded that maintaining high standards ${actor.place} is `,
          after: ` when communities aim to ${actor.goal}.`,
          grammarNote: 'Câu phức học thuật với mệnh đề danh ngữ và mệnh đề thời gian "when".',
          viPattern: (m) => `Các chuyên gia kết luận rằng việc duy trì tiêu chuẩn ${actor.viPlace} mang tính "${m}".`,
        },
        {
          before: `What makes initiatives in ${theme.labelEn} `,
          after: ` is their long-term benefit for future generations.`,
          grammarNote: 'Cấu trúc câu chẻ mệnh đề danh ngữ "What makes ... [tính từ] is...".',
          viPattern: (m) => `Điều làm cho các sáng kiến ${actor.viPlace} trở nên "${m}" chính là lợi ích lâu dài.`,
        },
        {
          before: `Observers noted that the newly introduced system proved `,
          after: ` under demanding conditions ${actor.place}.`,
          grammarNote: 'Cấu trúc nâng cao "proved + [tính từ]" trong câu tường thuật.',
          viPattern: (m) => `Các nhà quan sát ghi nhận hệ thống mới đã chứng tỏ sự "${m}" ${actor.viPlace}.`,
        },
      ],
    };
    return (byGrade[grade] || byGrade[8])[variantIdx];
  }

  if (phraseType === 'PREP_PHRASE' || phraseType === 'ADV_PHRASE') {
    if (phraseType === 'ADV_PHRASE' && advClass === 'SPEECH_COMM') {
      const byGrade: Record<number, QuestionFrameSpec[]> = {
        6: [
          {
            before: `In English class, students practise speaking `,
            after: ` with their classmates.`,
            grammarNote: 'Cụm trạng từ chỉ cách thức bổ nghĩa cho động từ "speaking".',
            viPattern: (m) => `Trong giờ tiếng Anh, học sinh luyện nói "${m}" cùng bạn bè.`,
          },
          {
            before: `Children should always answer teachers `,
            after: ` in class.`,
            grammarNote: 'Cụm trạng từ bổ nghĩa cho động từ "answer".',
            viPattern: (m) => `Học sinh luôn nên trả lời thầy cô một cách "${m}" trong lớp.`,
          },
          {
            before: `The tour guide spoke `,
            after: ` so every visitor could understand.`,
            grammarNote: 'Cụm trạng từ đứng sau động từ "spoke".',
            viPattern: (m) => `Hướng dẫn viên nói "${m}" để mọi du khách đều hiểu rõ.`,
          },
        ],
        7: [
          {
            before: `She can speak two foreign languages `,
            after: ` because she practises every day.`,
            grammarNote: 'Câu ghép với "because", cụm trạng từ bổ nghĩa cho động từ "speak".',
            viPattern: (m) => `Cô ấy có thể nói hai ngoại ngữ "${m}" nhờ luyện tập mỗi ngày.`,
          },
          {
            before: `If learners listen to audio stories regularly, they will express ideas `,
            after: `.`,
            grammarNote: 'Câu điều kiện Loại 1, cụm trạng từ bổ nghĩa cho "express ideas".',
            viPattern: (m) => `Nếu nghe truyện audio thường xuyên, người học sẽ diễn đạt ý tưởng "${m}".`,
          },
          {
            before: `During the interview, the speaker replied `,
            after: ` to every question.`,
            grammarNote: 'Cụm trạng từ đứng sau động từ quá khứ "replied".',
            viPattern: (m) => `Trong buổi phỏng vấn, diễn giả đã trả lời "${m}" mọi câu hỏi.`,
          },
        ],
        8: [
          {
            before: `Although English is not his first language, he communicates `,
            after: ` with international friends.`,
            grammarNote: 'Câu phức nhượng bộ với "Although", cụm trạng từ bổ nghĩa cho "communicates".',
            viPattern: (m) => `Mặc dù tiếng Anh không phải tiếng mẹ đẻ, anh ấy vẫn giao tiếp "${m}" với bạn bè quốc tế.`,
          },
          {
            before: `When students prepare presentations thoroughly, they deliver their talks `,
            after: `.`,
            grammarNote: 'Câu phức thời gian với "When", cụm trạng từ bổ nghĩa cho "deliver their talks".',
            viPattern: (m) => `Khi chuẩn bị kỹ bài thuyết trình, học sinh trình bày "${m}".`,
          },
          {
            before: `By joining conversation clubs, teenagers learn to discuss complex topics `,
            after: `.`,
            grammarNote: 'Cấu trúc "By + V-ing" kết hợp trạng từ bổ nghĩa cho động từ "discuss".',
            viPattern: (m) => `Nhờ tham gia câu lạc bộ giao tiếp, học sinh học cách thảo luận "${m}".`,
          },
        ],
        9: [
          {
            before: `Linguists note that immersion in real conversations enables learners to speak `,
            after: `.`,
            grammarNote: 'Mệnh đề danh ngữ kết hợp "enables sb to speak + trạng từ".',
            viPattern: (m) => `Các nhà ngôn ngữ học cho rằng đắm mình trong hội thoại thực tế giúp người học nói "${m}".`,
          },
          {
            before: `Those who communicate `,
            after: ` in international settings often build stronger professional relationships.`,
            grammarNote: 'Mệnh đề quan hệ xác định với "who communicate + trạng từ".',
            viPattern: (m) => `Những người giao tiếp "${m}" trong môi trường quốc tế thường xây dựng mối quan hệ tốt hơn.`,
          },
          {
            before: `Had the candidate not explained the proposal `,
            after: `, the panel might have misunderstood the main idea.`,
            grammarNote: 'Đảo ngữ câu điều kiện Loại 3 chuẩn đề thi tuyển sinh lớp 10.',
            viPattern: (m) => `Nếu ứng viên không trình bày đề xuất "${m}", hội đồng đã có thể hiểu nhầm ý chính.`,
          },
        ],
      };
      return (byGrade[grade] || byGrade[8])[variantIdx];
    }

    const byGrade: Record<number, QuestionFrameSpec[]> = {
      6: [
        {
          before: `${subjPlCap} usually work `,
          after: ` when they learn ${actor.place}.`,
          grammarNote: 'Cụm trạng ngữ/giới từ bổ nghĩa cho động từ hành động.',
          viPattern: (m) => `${actor.viSubject} thường thực hiện "${m}" khi hoạt động ${actor.viPlace}.`,
        },
        {
          before: `The group organized the event `,
          after: ` last weekend.`,
          grammarNote: 'Cụm trạng ngữ bổ nghĩa cho động từ ở thì Quá khứ đơn.',
          viPattern: (m) => `Cả nhóm đã tổ chức sự kiện "${m}" vào cuối tuần trước.`,
        },
        {
          before: `Children watched the performance `,
          after: ` during the school trip.`,
          grammarNote: 'Cụm trạng ngữ chỉ cách thức bổ nghĩa cho động từ.',
          viPattern: (m) => `Các em nhỏ đã theo dõi buổi biểu diễn "${m}" trong chuyến tham quan.`,
        },
      ],
      7: [
        {
          before: `The project ${actor.place} progressed `,
          after: ` because everyone followed the plan.`,
          grammarNote: 'Câu ghép nguyên nhân kết quả, cụm trạng ngữ đứng sau động từ quá khứ.',
          viPattern: (m) => `Dự án ${actor.viPlace} tiến triển "${m}" vì mọi người tuân theo kế hoạch.`,
        },
        {
          before: `If you act `,
          after: `, you will easily ${actor.goal}.`,
          grammarNote: 'Cụm trạng ngữ bổ nghĩa cho động từ "act" trong câu điều kiện.',
          viPattern: (m) => `Nếu hành động "${m}", bạn sẽ dễ dàng đạt kết quả tốt ${actor.viPlace}.`,
        },
        {
          before: `${subjPlCap} responded `,
          after: ` when ${actor.subjectSg} announced the news.`,
          grammarNote: 'Cụm trạng ngữ đứng sau động từ "responded".',
          viPattern: (m) => `${actor.viSubject} đã phản hồi "${m}" ${actor.viPlace}.`,
        },
      ],
      8: [
        {
          before: `Although time was limited, the team handled the task `,
          after: ` to ${actor.goal}.`,
          grammarNote: 'Câu phức nhượng bộ với "Although", cụm trạng ngữ bổ nghĩa cho "handled".',
          viPattern: (m) => `Mặc dù thời gian có hạn, cả nhóm vẫn xử lý công việc "${m}" ${actor.viPlace}.`,
        },
        {
          before: `While conditions were changing rapidly ${actor.place}, residents acted `,
          after: ` to stay safe.`,
          grammarNote: 'Câu phức với "While", cụm trạng ngữ bổ nghĩa cho động từ "acted".',
          viPattern: (m) => `Trong lúc tình hình thay đổi nhanh ${actor.viPlace}, người dân đã hành động "${m}".`,
        },
        {
          before: `Good teamwork enables volunteers to complete each task `,
          after: ` without wasting effort.`,
          grammarNote: 'Cụm trạng ngữ bổ nghĩa cho động từ nguyên mẫu "to complete".',
          viPattern: (m) => `Tinh thần đồng đội tốt giúp tình nguyện viên hoàn thành từng nhiệm vụ "${m}".`,
        },
      ],
      9: [
        {
          before: `Analysts observed that well-trained teams perform `,
          after: ` when guided by clear standards.`,
          grammarNote: 'Mệnh đề danh ngữ kết hợp mệnh đề trạng ngữ rút gọn, cụm trạng ngữ bổ nghĩa cho "perform".',
          viPattern: (m) => `Các nhà phân tích nhận thấy đội ngũ được đào tạo tốt thực hiện "${m}" khi có tiêu chuẩn rõ ràng.`,
        },
        {
          before: `Those who communicate `,
          after: ` ${theme.contextEn} are far more likely to earn public trust.`,
          grammarNote: 'Mệnh đề quan hệ xác định với "who communicate + trạng ngữ".',
          viPattern: (m) => `Những người giao tiếp "${m}" ${actor.viPlace} dễ nhận được sự tin tưởng hơn.`,
        },
        {
          before: `Had the team not responded `,
          after: `, the programme ${actor.place} could not have succeeded.`,
          grammarNote: 'Đảo ngữ câu điều kiện Loại 3 chuẩn đề thi tuyển sinh lớp 10.',
          viPattern: (m) => `Nếu đội ngũ không phản ứng "${m}", chương trình ${actor.viPlace} đã khó thành công.`,
        },
      ],
    };
    return (byGrade[grade] || byGrade[8])[variantIdx];
  }

  if (phraseType === 'NOUN_WITH_DET') {
    const byGrade: Record<number, QuestionFrameSpec[]> = {
      6: [
        {
          before: `In our unit about ${theme.labelEn}, pupils learn about `,
          after: ` ${actor.place}.`,
          grammarNote: 'Cụm danh từ có sẵn từ hạn định/số lượng đứng ngay sau giới từ "about".',
          viPattern: (m) => `Trong chủ đề ${actor.viPlace}, học sinh tìm hiểu về "${m}".`,
        },
        {
          before: `${subjPlCap} often look at `,
          after: ` to ${actor.goal}.`,
          grammarNote: 'Cụm danh từ có sẵn từ hạn định đứng sau cụm động từ "look at".',
          viPattern: (m) => `${actor.viSubject} thường xem xét "${m}" ${actor.viPlace}.`,
        },
        {
          before: `Every weekend, we talk about `,
          after: ` with our friends.`,
          grammarNote: 'Cụm danh từ làm tân ngữ của giới từ "about".',
          viPattern: (m) => `Mỗi cuối tuần, chúng tôi cùng bạn bè trò chuyện về "${m}" ${actor.viPlace}.`,
        },
      ],
      7: [
        {
          before: `During our class project, we explored `,
          after: ` because it relates to ${theme.labelEn}.`,
          grammarNote: 'Câu ghép với "because", cụm danh từ có sẵn hạn định làm tân ngữ của "explored".',
          viPattern: (m) => `Trong dự án lớp, chúng tôi đã tìm hiểu "${m}" liên quan đến chủ đề ${actor.viPlace}.`,
        },
        {
          before: `If you pay attention to `,
          after: `, you will better understand life ${actor.place}.`,
          grammarNote: 'Câu điều kiện Loại 1, cụm danh từ đứng sau giới từ "to".',
          viPattern: (m) => `Nếu chú ý đến "${m}", bạn sẽ hiểu rõ hơn về đời sống ${actor.viPlace}.`,
        },
        {
          before: `${subjSgCap} introduced `,
          after: ` to help everyone ${actor.goal}.`,
          grammarNote: 'Cụm danh từ làm tân ngữ trực tiếp của động từ "introduced".',
          viPattern: (m) => `"${m}" đã được giới thiệu nhằm hỗ trợ mọi người ${actor.viPlace}.`,
        },
      ],
      8: [
        {
          before: `Although circumstances ${actor.place} have evolved, people still value `,
          after: ` today.`,
          grammarNote: 'Câu phức nhượng bộ với "Although", cụm danh từ làm tân ngữ sau "value".',
          viPattern: (m) => `Mặc dù hoàn cảnh ${actor.viPlace} đã thay đổi, mọi người vẫn coi trọng "${m}".`,
        },
        {
          before: `When ${actor.subjectPl} examine `,
          after: `, they discover practical ways to ${actor.goal}.`,
          grammarNote: 'Mệnh đề thời gian với "When", cụm danh từ làm tân ngữ trực tiếp của "examine".',
          viPattern: (m) => `Khi tìm hiểu kỹ "${m}", ${actor.viSubject} khám phá ra nhiều cách thiết thực ${actor.viPlace}.`,
        },
        {
          before: `Public awareness of `,
          after: ` has grown rapidly ${theme.contextEn}.`,
          grammarNote: 'Cụm danh từ đứng sau giới từ "of" trong thì Hiện tại hoàn thành.',
          viPattern: (m) => `Nhận thức cộng đồng về "${m}" đã tăng nhanh ${actor.viPlace}.`,
        },
      ],
      9: [
        {
          before: `Studies focusing on ${theme.labelEn} highlight `,
          after: ` as a decisive factor that shapes modern society.`,
          grammarNote: 'Câu phức chứa mệnh đề quan hệ "that shapes..." và cụm phân từ "focusing on".',
          viPattern: (m) => `Các nghiên cứu ${actor.viPlace} nhấn mạnh "${m}" như một nhân tố quyết định đối với xã hội hiện đại.`,
        },
        {
          before: `Citizens who genuinely care about `,
          after: ` consistently strive to ${actor.goal}.`,
          grammarNote: 'Mệnh đề quan hệ xác định với "who care about...", cụm danh từ làm tân ngữ giới từ.',
          viPattern: (m) => `Những công dân quan tâm sâu sắc đến "${m}" luôn nỗ lực đóng góp ${actor.viPlace}.`,
        },
        {
          before: `A comprehensive grasp of `,
          after: ` enables learners to analyse real-world issues ${actor.place} insightfully.`,
          grammarNote: 'Cụm danh từ học thuật đứng sau giới từ "of" làm chủ ngữ mở rộng.',
          viPattern: (m) => `Việc nắm vững "${m}" giúp người học phân tích sâu sắc các vấn đề ${actor.viPlace}.`,
        },
      ],
    };
    return (byGrade[grade] || byGrade[8])[variantIdx];
  }

  if (phraseType === 'NOUN_PLURAL') {
    if (isAffected) {
      const byGrade: Record<number, QuestionFrameSpec[]> = {
        6: [
          {
            before: `Many volunteers came to help `,
            after: ` ${actor.place}.`,
            grammarNote: 'Cụm danh từ số nhiều chỉ người cần giúp đỡ làm tân ngữ sau "help".',
            viPattern: (m) => `Nhiều tình nguyện viên đã đến giúp đỡ những "${m}" ${actor.viPlace}.`,
          },
          {
            before: `Our class donated food and warm clothes to `,
            after: ` last week.`,
            grammarNote: 'Cụm danh từ số nhiều làm tân ngữ sau giới từ "to" ở thì Quá khứ đơn.',
            viPattern: (m) => `Lớp chúng tôi đã quyên góp lương thực và quần áo ấm cho "${m}" tuần trước.`,
          },
          {
            before: `Doctors and nurses are caring for `,
            after: ` ${actor.place}.`,
            grammarNote: 'Cụm danh từ số nhiều đứng sau cụm động từ "caring for".',
            viPattern: (m) => `Các bác sĩ và y tá đang chăm sóc cho những "${m}" ${actor.viPlace}.`,
          },
        ],
        7: [
          {
            before: `Last month, local residents raised money to support `,
            after: ` ${actor.place}.`,
            grammarNote: 'Cụm danh từ số nhiều làm tân ngữ chỉ đối tượng được hỗ trợ trong thì Quá khứ đơn.',
            viPattern: (m) => `Tháng trước, người dân địa phương đã quyên góp hỗ trợ "${m}" ${actor.viPlace}.`,
          },
          {
            before: `Because heavy damage occurred, rescue teams quickly provided aid for `,
            after: ` ${theme.contextEn}.`,
            grammarNote: 'Câu ghép với "Because", cụm danh từ số nhiều làm tân ngữ sau "for".',
            viPattern: (m) => `Vì thiệt hại nặng nề, đội cứu hộ đã nhanh chóng viện trợ cho "${m}" ${actor.viPlace}.`,
          },
          {
            before: `Charity groups delivered clean water and blankets to `,
            after: ` yesterday.`,
            grammarNote: 'Cụm danh từ số nhiều đứng sau giới từ "to" trong câu trần thuật.',
            viPattern: (m) => `Các nhóm thiện nguyện đã chuyển nước sạch và chăn ấm tới "${m}" hôm qua.`,
          },
        ],
        8: [
          {
            before: `Although road access was blocked, emergency crews reached `,
            after: ` without delay.`,
            grammarNote: 'Câu phức nhượng bộ với "Although", cụm danh từ số nhiều làm tân ngữ.',
            viPattern: (m) => `Mặc dù đường bị chia cắt, đội cứu hộ vẫn tiếp cận được "${m}" ${actor.viPlace} kịp lúc.`,
          },
          {
            before: `If communities organize relief centres early, `,
            after: ` will receive medical care much faster.`,
            grammarNote: 'Câu điều kiện Loại 1, cụm danh từ số nhiều làm chủ ngữ.',
            viPattern: (m) => `Nếu cộng đồng lập trung tâm cứu trợ sớm, "${m}" sẽ được chăm sóc y tế nhanh hơn.`,
          },
          {
            before: `Emergency teams worked tirelessly to assist `,
            after: ` who lost their homes ${actor.place}.`,
            grammarNote: 'Mệnh đề quan hệ "who lost..." bổ nghĩa cho danh từ số nhiều chỉ người.',
            viPattern: (m) => `Đội cứu hộ làm việc không ngừng nghỉ để hỗ trợ "${m}" bị mất nhà cửa ${actor.viPlace}.`,
          },
        ],
        9: [
          {
            before: `Recent humanitarian reports emphasize that supporting `,
            after: ` who face sudden hardship requires rapid coordination ${actor.place}.`,
            grammarNote: 'Mệnh đề danh ngữ kết hợp mệnh đề quan hệ số nhiều "who face...".',
            viPattern: (m) => `Các báo cáo nhân đạo nhấn mạnh việc hỗ trợ "${m}" đòi hỏi sự phối hợp khẩn trương.`,
          },
          {
            before: `Medical agencies pledged that all `,
            after: ` rescued from the area would receive free treatment and shelter.`,
            grammarNote: 'Cụm phân từ quá khứ rút gọn "rescued from..." bổ nghĩa cho chủ ngữ số nhiều.',
            viPattern: (m) => `Các cơ quan y tế cam kết mọi "${m}" được giải cứu sẽ được điều trị và bố trí chỗ ở miễn phí.`,
          },
          {
            before: `Coordinated relief funds dedicated to assisting `,
            after: ` have significantly accelerated recovery efforts ${actor.place}.`,
            grammarNote: 'Cụm phân từ "dedicated to assisting + [noun]" hòa hợp động từ hoàn thành "have".',
            viPattern: (m) => `Các quỹ cứu trợ chuyên hỗ trợ "${m}" đã giúp đẩy nhanh quá trình phục hồi ${actor.viPlace}.`,
          },
        ],
      };
      return (byGrade[grade] || byGrade[8])[variantIdx];
    }

    if (isNegNoun) {
      const byGrade: Record<number, QuestionFrameSpec[]> = {
        6: [
          {
            before: `In our lesson, we talk about how to reduce `,
            after: ` ${actor.place}.`,
            grammarNote: 'Cụm danh từ số nhiều làm tân ngữ sau động từ "reduce".',
            viPattern: (m) => `Trong bài học, chúng ta thảo luận cách giảm thiểu "${m}" ${actor.viPlace}.`,
          },
          {
            before: `${subjPlCap} always try to avoid `,
            after: ` ${theme.contextEn}.`,
            grammarNote: 'Cụm danh từ số nhiều làm tân ngữ sau động từ "avoid".',
            viPattern: (m) => `${actor.viSubject} luôn cố gắng phòng tránh những "${m}" ${actor.viPlace}.`,
          },
          {
            before: `Our teacher explained how to deal with `,
            after: ` ${actor.place}.`,
            grammarNote: 'Cụm danh từ số nhiều đứng sau cụm động từ "deal with".',
            viPattern: (m) => `Giáo viên đã giải thích cách ứng phó với "${m}" ${actor.viPlace}.`,
          },
        ],
        7: [
          {
            before: `If we act responsibly, there will be fewer `,
            after: ` ${theme.contextEn}.`,
            grammarNote: 'Câu điều kiện Loại 1, cụm danh từ số nhiều đếm được sau "fewer".',
            viPattern: (m) => `Nếu hành động có trách nhiệm, sẽ có ít "${m}" hơn ${actor.viPlace}.`,
          },
          {
            before: `Our teacher showed us news reports about `,
            after: ` ${actor.place}.`,
            grammarNote: 'Cụm danh từ số nhiều làm tân ngữ sau giới từ "about" ở thì Quá khứ đơn.',
            viPattern: (m) => `Giáo viên đã cho chúng tôi xem các bản tin về "${m}" ${actor.viPlace}.`,
          },
          {
            before: `Local communities worked together to prevent `,
            after: ` last year.`,
            grammarNote: 'Cụm danh từ số nhiều làm tân ngữ sau động từ "prevent" ở thì Quá khứ đơn.',
            viPattern: (m) => `Cộng đồng địa phương đã chung tay ngăn chặn "${m}" vào năm ngoái.`,
          },
        ],
        8: [
          {
            before: `Although `,
            after: ` can cause great disruption, communities often unite to recover ${actor.place}.`,
            grammarNote: 'Câu phức nhượng bộ với "Although", danh từ số nhiều làm chủ ngữ.',
            viPattern: (m) => `Mặc dù "${m}" gây nhiều gián đoạn, cộng đồng vẫn đoàn kết khắc phục ${actor.viPlace}.`,
          },
          {
            before: `If strict safety plans are followed, `,
            after: ` can be greatly reduced ${theme.contextEn}.`,
            grammarNote: 'Câu điều kiện Loại 1 dạng bị động với chủ ngữ số nhiều.',
            viPattern: (m) => `Nếu tuân thủ kế hoạch an toàn, "${m}" có thể được giảm thiểu đáng kể.`,
          },
          {
            before: `Authorities introduced practical rules to limit `,
            after: ` ${actor.place}.`,
            grammarNote: 'Cụm danh từ số nhiều làm tân ngữ sau động từ "limit".',
            viPattern: (m) => `Chính quyền đã ban hành các quy định thiết thực nhằm hạn chế "${m}" ${actor.viPlace}.`,
          },
        ],
        9: [
          {
            before: `Recent reports emphasize that reducing `,
            after: ` that disrupt daily life requires rapid coordination ${actor.place}.`,
            grammarNote: 'Mệnh đề danh ngữ kết hợp mệnh đề quan hệ số nhiều "that disrupt...".',
            viPattern: (m) => `Các báo cáo nhấn mạnh việc giảm thiểu "${m}" đòi hỏi sự phối hợp nhanh chóng ${actor.viPlace}.`,
          },
          {
            before: `Experts contend that ignoring `,
            after: ` ${actor.place} will only worsen social and environmental challenges.`,
            grammarNote: 'Cấu trúc học thuật với danh động từ "ignoring + [plural noun]".',
            viPattern: (m) => `Chuyên gia cho rằng phớt lờ "${m}" sẽ làm các thách thức thêm trầm trọng.`,
          },
          {
            before: `Comprehensive measures aimed at preventing `,
            after: ` have been prioritized ${actor.place}.`,
            grammarNote: 'Cụm phân từ "aimed at preventing + [plural noun]" hòa hợp động từ bị động "have been".',
            viPattern: (m) => `Các biện pháp toàn diện nhằm ngăn chặn "${m}" đã được ưu tiên ${actor.viPlace}.`,
          },
        ],
      };
      return (byGrade[grade] || byGrade[8])[variantIdx];
    }

    if (nounClass === 'HUMAN_GROUP') {
      const byGrade: Record<number, QuestionFrameSpec[]> = {
        6: [
          {
            before: `Stories from the past help `,
            after: ` remember family traditions.`,
            grammarNote: 'Cụm danh từ số nhiều chỉ nhóm người làm tân ngữ sau động từ "help".',
            viPattern: (m) => `Những câu chuyện xưa giúp "${m}" ghi nhớ truyền thống gia đình.`,
          },
          {
            before: `Many `,
            after: ` enjoy spending time together on weekends.`,
            grammarNote: 'Cụm danh từ số nhiều chỉ người đứng sau lượng từ "Many" hòa hợp "enjoy".',
            viPattern: (m) => `Nhiều "${m}" thích dành thời gian bên nhau vào dịp cuối tuần.`,
          },
          {
            before: `Our school project talked about `,
            after: ` living in the city and countryside.`,
            grammarNote: 'Cụm danh từ số nhiều chỉ người đứng sau giới từ "about".',
            viPattern: (m) => `Dự án ở trường đề cập đến các "${m}" sống tại thành thị và nông thôn.`,
          },
        ],
        7: [
          {
            before: `Museums preserve old objects so that `,
            after: ` can learn about history.`,
            grammarNote: 'Câu phức chỉ mục đích với "so that", cụm danh từ số nhiều làm chủ ngữ.',
            viPattern: (m) => `Bảo tàng lưu giữ hiện vật xưa để "${m}" có thể tìm hiểu lịch sử.`,
          },
          {
            before: `During our seminar, we discussed how `,
            after: ` balance work and daily life.`,
            grammarNote: 'Cụm danh từ số nhiều chỉ người làm chủ ngữ hòa hợp động từ "balance".',
            viPattern: (m) => `Trong buổi hội thảo, chúng tôi thảo luận cách "${m}" cân bằng cuộc sống.`,
          },
          {
            before: `Local programmes were created to support `,
            after: ` across the neighbourhood.`,
            grammarNote: 'Cụm danh từ số nhiều làm tân ngữ sau động từ "support".',
            viPattern: (m) => `Các chương trình địa phương được lập ra nhằm hỗ trợ "${m}" trong khu vực.`,
          },
        ],
        8: [
          {
            before: `Although lifestyles have changed rapidly, `,
            after: ` still value kindness and respect.`,
            grammarNote: 'Câu phức nhượng bộ với "Although", cụm danh từ số nhiều hòa hợp với "value".',
            viPattern: (m) => `Mặc dù lối sống thay đổi nhanh, "${m}" vẫn đề cao lòng tốt và sự tôn trọng.`,
          },
          {
            before: `When `,
            after: ` share their experiences openly, communities grow stronger together.`,
            grammarNote: 'Mệnh đề thời gian với "When", cụm danh từ số nhiều hòa hợp "share".',
            viPattern: (m) => `Khi "${m}" cởi mở chia sẻ trải nghiệm, cộng đồng trở nên gắn kết hơn.`,
          },
          {
            before: `Community centres create welcoming spaces where `,
            after: ` can meet and exchange ideas.`,
            grammarNote: 'Mệnh đề quan hệ nơi chốn với "where", cụm danh từ số nhiều làm chủ ngữ.',
            viPattern: (m) => `Trung tâm cộng đồng tạo không gian thân thiện nơi "${m}" gặp gỡ và trao đổi.`,
          },
        ],
        9: [
          {
            before: `Sociologists emphasize that `,
            after: ` who understand their heritage tend to build stronger communities.`,
            grammarNote: 'Mệnh đề danh ngữ kết hợp mệnh đề quan hệ số nhiều "who understand...".',
            viPattern: (m) => `Các nhà xã hội học nhấn mạnh những "${m}" hiểu rõ cội nguồn thường xây dựng cộng đồng bền vững hơn.`,
          },
          {
            before: `Preserving cultural records ensures that `,
            after: ` can appreciate how everyday life evolved over time.`,
            grammarNote: 'Mệnh đề danh ngữ với "ensures that + [plural noun] + can...".',
            viPattern: (m) => `Lưu giữ tư liệu văn hóa giúp đảm bảo "${m}" trân trọng quá trình phát triển của đời sống.`,
          },
          {
            before: `Recent studies examining `,
            after: ` reveal how values are passed down across changing times.`,
            grammarNote: 'Cụm phân từ "examining + [plural noun]" hòa hợp động từ chính "reveal".',
            viPattern: (m) => `Các nghiên cứu gần đây về "${m}" cho thấy các giá trị được truyền lại qua thời gian.`,
          },
        ],
      };
      return (byGrade[grade] || byGrade[8])[variantIdx];
    }

    if (nounClass === 'PLACE') {
      const byGrade: Record<number, QuestionFrameSpec[]> = {
        6: [
          {
            before: `Tourists love visiting `,
            after: ` during their holiday.`,
            grammarNote: 'Cụm danh từ số nhiều chỉ địa điểm làm tân ngữ sau "visiting".',
            viPattern: (m) => `Du khách rất thích tham quan các "${m}" vào kỳ nghỉ.`,
          },
          {
            before: `There are several `,
            after: ` near our neighbourhood.`,
            grammarNote: 'Cấu trúc "There are + several + danh từ số nhiều" chỉ địa điểm.',
            viPattern: (m) => `Có một vài "${m}" ở gần khu dân cư của chúng tôi.`,
          },
          {
            before: `Students took photos of `,
            after: ` on their school trip.`,
            grammarNote: 'Cụm danh từ số nhiều đứng sau giới từ "of" ở thì Quá khứ đơn.',
            viPattern: (m) => `Học sinh đã chụp ảnh các "${m}" trong chuyến đi thực tế.`,
          },
        ],
        7: [
          {
            before: `The city invested money in upgrading `,
            after: ` for local residents.`,
            grammarNote: 'Cụm danh từ số nhiều làm tân ngữ sau danh động từ "upgrading".',
            viPattern: (m) => `Thành phố đã đầu tư nâng cấp các "${m}" cho người dân địa phương.`,
          },
          {
            before: `Volunteers cleaned and protected `,
            after: ` because they are important to the community.`,
            grammarNote: 'Câu ghép liên từ "because", cụm danh từ số nhiều làm tân ngữ.',
            viPattern: (m) => `Tình nguyện viên đã dọn dẹp và bảo vệ các "${m}" vì chúng quan trọng với cộng đồng.`,
          },
          {
            before: `Guidebooks recommend visiting `,
            after: ` when travellers explore this region.`,
            grammarNote: 'Cụm danh từ số nhiều đứng sau "recommend visiting".',
            viPattern: (m) => `Sách hướng dẫn khuyên du khách ghé thăm các "${m}" khi khám phá vùng này.`,
          },
        ],
        8: [
          {
            before: `Although urban areas are expanding, `,
            after: ` still attract visitors from across the country.`,
            grammarNote: 'Câu phức nhượng bộ với "Although", cụm danh từ số nhiều hòa hợp "attract".',
            viPattern: (m) => `Mặc dù đô thị đang mở rộng, các "${m}" vẫn thu hút khách từ khắp cả nước.`,
          },
          {
            before: `Several `,
            after: ` have been carefully restored to serve the public better.`,
            grammarNote: 'Thể bị động Hiện tại hoàn thành với chủ ngữ số nhiều "Several ... have been".',
            viPattern: (m) => `Một số "${m}" đã được trùng tu cẩn thận để phục vụ cộng đồng tốt hơn.`,
          },
          {
            before: `If local councils maintain `,
            after: ` well, residents will enjoy a healthier environment.`,
            grammarNote: 'Câu điều kiện Loại 1, cụm danh từ số nhiều làm tân ngữ sau "maintain".',
            viPattern: (m) => `Nếu chính quyền địa phương duy trì tốt các "${m}", người dân sẽ có môi trường sống tốt hơn.`,
          },
        ],
        9: [
          {
            before: `Urban planners emphasize that maintaining `,
            after: ` that serve everyday needs improves community well-being.`,
            grammarNote: 'Mệnh đề danh ngữ kết hợp mệnh đề quan hệ số nhiều "that serve...".',
            viPattern: (m) => `Các nhà quy hoạch nhấn mạnh việc duy trì các "${m}" phục vụ nhu cầu hàng ngày giúp nâng cao đời sống.`,
          },
          {
            before: `Preserving `,
            after: ` across the region helps keep local heritage alive for future generations.`,
            grammarNote: 'Cụm danh động từ làm chủ ngữ "Preserving + [plural noun] + helps".',
            viPattern: (m) => `Việc bảo tồn các "${m}" trong khu vực giúp gìn giữ di sản cho thế hệ mai sau.`,
          },
          {
            before: `Travel documentaries often highlight `,
            after: ` which reflect the character and history of the area.`,
            grammarNote: 'Mệnh đề quan hệ số nhiều "which reflect..." bổ nghĩa cho danh từ chỉ địa điểm.',
            viPattern: (m) => `Các phim tài liệu du lịch thường nêu bật những "${m}" phản ánh bản sắc và lịch sử địa phương.`,
          },
        ],
      };
      return (byGrade[grade] || byGrade[8])[variantIdx];
    }

    const byGrade: Record<number, QuestionFrameSpec[]> = {
      6: [
        {
          before: `In our lesson, students talk about `,
          after: ` ${actor.place}.`,
          grammarNote: 'Cụm danh từ số nhiều làm tân ngữ sau giới từ "about".',
          viPattern: (m) => `Trong bài học, học sinh thảo luận về các "${m}" ${actor.viPlace}.`,
        },
        {
          before: `These `,
          after: ` are very helpful for ${actor.subjectPl} ${actor.place}.`,
          grammarNote: 'Cụm danh từ số nhiều sau "These" hòa hợp với động từ số nhiều "are".',
          viPattern: (m) => `Những "${m}" này rất hữu ích cho ${actor.viSubject} ${actor.viPlace}.`,
        },
        {
          before: `${subjPlCap} learn about many `,
          after: ` during the school term.`,
          grammarNote: 'Cụm danh từ số nhiều đứng sau từ chỉ số lượng "many".',
          viPattern: (m) => `${actor.viSubject} tìm hiểu nhiều "${m}" trong suốt học kỳ.`,
        },
      ],
      7: [
        {
          before: `Because ${actor.subjectPl} want to ${actor.goal}, they pay attention to `,
          after: ` ${actor.place}.`,
          grammarNote: 'Câu ghép với "Because", cụm danh từ số nhiều đứng sau "pay attention to".',
          viPattern: (m) => `Vì muốn hoàn thành tốt mục tiêu, ${actor.viSubject} chú ý tới các "${m}" ${actor.viPlace}.`,
        },
        {
          before: `During the lesson, our teacher compared several `,
          after: ` related to ${theme.labelEn}.`,
          grammarNote: 'Cụm danh từ số nhiều đứng sau lượng từ "several" ở thì Quá khứ đơn.',
          viPattern: (m) => `Trong giờ học, giáo viên đã so sánh một số "${m}" liên quan đến chủ đề ${actor.viPlace}.`,
        },
        {
          before: `Such `,
          after: ` help ${actor.subjectPl} understand life ${theme.contextEn}.`,
          grammarNote: 'Cụm danh từ số nhiều sau "Such" hòa hợp với động từ số nhiều "help".',
          viPattern: (m) => `Những "${m}" như vậy giúp ${actor.viSubject} hiểu rõ hơn về đời sống ${actor.viPlace}.`,
        },
      ],
      8: [
        {
          before: `Although modern life brings changes, `,
          after: ` still play an important role ${actor.place}.`,
          grammarNote: 'Câu phức nhượng bộ với "Although", cụm danh từ số nhiều hòa hợp với "play".',
          viPattern: (m) => `Mặc dù cuộc sống hiện đại có nhiều đổi thay, các "${m}" vẫn giữ vai trò quan trọng ${actor.viPlace}.`,
        },
        {
          before: `When ${actor.subjectPl} explore `,
          after: ` carefully, they gain useful insights ${theme.contextEn}.`,
          grammarNote: 'Mệnh đề thời gian với "When", cụm danh từ số nhiều làm tân ngữ sau "explore".',
          viPattern: (m) => `Khi tìm hiểu kỹ các "${m}", ${actor.viSubject} rút ra nhiều hiểu biết hữu ích ${actor.viPlace}.`,
        },
        {
          before: `Several `,
          after: ` have been widely discussed ${actor.place} this year.`,
          grammarNote: 'Thể bị động Hiện tại hoàn thành với chủ ngữ số nhiều "Several ... have been".',
          viPattern: (m) => `Nhiều "${m}" đã được thảo luận rộng rãi ${actor.viPlace} trong năm nay.`,
        },
      ],
      9: [
        {
          before: `Recent surveys indicate that `,
          after: ` that reflect community values significantly help ${actor.subjectPl} ${actor.goal}.`,
          grammarNote: 'Mệnh đề danh ngữ kết hợp mệnh đề quan hệ số nhiều "that reflect..." và động từ "help".',
          viPattern: (m) => `Các khảo sát cho thấy những "${m}" phản ánh giá trị cộng đồng giúp ích rất lớn cho ${actor.viSubject}.`,
        },
        {
          before: `Experts contend that neglecting `,
          after: ` ${actor.place} may hinder sustainable progress ${theme.contextEn}.`,
          grammarNote: 'Cấu trúc học thuật với danh động từ "neglecting + [plural noun]".',
          viPattern: (m) => `Các chuyên gia cho rằng việc bỏ qua các "${m}" ${actor.viPlace} có thể cản trở sự phát triển.`,
        },
        {
          before: `The `,
          after: ` which were documented ${actor.place} reflect the richness of everyday experience.`,
          grammarNote: 'Mệnh đề quan hệ bị động số nhiều "which were documented" hòa hợp động từ chính "reflect".',
          viPattern: (m) => `Những "${m}" được ghi nhận ${actor.viPlace} phản ánh sự phong phú của đời sống thường nhật.`,
        },
      ],
    };
    return (byGrade[grade] || byGrade[8])[variantIdx];
  }

  if (phraseType === 'NOUN_UNCOUNTABLE') {
    if (isNegNoun) {
      const byGrade: Record<number, QuestionFrameSpec[]> = {
        6: [
          {
            before: `We should work together to reduce `,
            after: ` ${actor.place}.`,
            grammarNote: 'Danh từ không đếm được đứng sau động từ "reduce" (không dùng a/an).',
            viPattern: (m) => `Chúng ta nên chung tay giảm thiểu "${m}" ${actor.viPlace}.`,
          },
          {
            before: `In our class, we learn about the causes of `,
            after: ` ${theme.contextEn}.`,
            grammarNote: 'Danh từ không đếm được đứng sau giới từ "of".',
            viPattern: (m) => `Trong lớp học, chúng em tìm hiểu nguyên nhân gây ra "${m}" ${actor.viPlace}.`,
          },
          {
            before: `Too much `,
            after: ` is harmful for ${actor.subjectPl} ${actor.place}.`,
            grammarNote: 'Danh từ không đếm được đi với "Too much" và động từ số ít "is".',
            viPattern: (m) => `Quá nhiều "${m}" gây hại cho ${actor.viSubject} ${actor.viPlace}.`,
          },
        ],
        7: [
          {
            before: `${subjPlCap} joined a campaign because `,
            after: ` was increasing ${actor.place}.`,
            grammarNote: 'Câu ghép với "because", danh từ không đếm được đi với động từ số ít "was".',
            viPattern: (m) => `${actor.viSubject} tham gia chiến dịch vì "${m}" đang gia tăng ${actor.viPlace}.`,
          },
          {
            before: `If we change daily habits, we can prevent `,
            after: ` ${theme.contextEn}.`,
            grammarNote: 'Câu điều kiện Loại 1 với danh từ không đếm được sau "prevent".',
            viPattern: (m) => `Nếu thay đổi thói quen hàng ngày, chúng ta có thể ngăn chặn "${m}" ${actor.viPlace}.`,
          },
          {
            before: `Our group presented practical ways to deal with `,
            after: ` ${actor.place}.`,
            grammarNote: 'Danh từ không đếm được làm tân ngữ của cụm động từ "deal with".',
            viPattern: (m) => `Nhóm chúng tôi trình bày các giải pháp xử lý "${m}" ${actor.viPlace}.`,
          },
        ],
        8: [
          {
            before: `Although authorities warn people regularly, `,
            after: ` still poses a challenge ${actor.place}.`,
            grammarNote: 'Câu phức nhượng bộ với "Although", danh từ không đếm được hòa hợp "poses".',
            viPattern: (m) => `Mặc dù đã có cảnh báo thường xuyên, "${m}" vẫn là thách thức ${actor.viPlace}.`,
          },
          {
            before: `If communities take early action, `,
            after: ` will no longer threaten safety ${theme.contextEn}.`,
            grammarNote: 'Câu điều kiện Loại 1, danh từ không đếm được làm chủ ngữ.',
            viPattern: (m) => `Nếu cộng đồng hành động sớm, "${m}" sẽ không còn đe dọa ${actor.viPlace}.`,
          },
          {
            before: `Public concern about `,
            after: ` has encouraged stricter rules ${actor.place}.`,
            grammarNote: 'Danh từ không đếm được sau giới từ "about" trong thì Hiện tại hoàn thành.',
            viPattern: (m) => `Mối quan tâm của cộng đồng về "${m}" đã thúc đẩy quy định chặt chẽ hơn ${actor.viPlace}.`,
          },
        ],
        9: [
          {
            before: `Policymakers emphasize that `,
            after: ` that harms public well-being must be addressed ${actor.place}.`,
            grammarNote: 'Mệnh đề danh ngữ kết hợp mệnh đề quan hệ số ít ("that harms...") và bị động.',
            viPattern: (m) => `Các nhà hoạch định nhấn mạnh rằng tình trạng "${m}" phải được giải quyết triệt để ${actor.viPlace}.`,
          },
          {
            before: `Studies warn that failing to curb `,
            after: ` ${theme.contextEn} can undermine long-term community resilience.`,
            grammarNote: 'Cấu trúc học thuật "failing to curb + [uncountable noun]".',
            viPattern: (m) => `Nghiên cứu cảnh báo việc không kiềm chế "${m}" sẽ ảnh hưởng lâu dài ${actor.viPlace}.`,
          },
          {
            before: `Only through collective action can society mitigate `,
            after: ` effectively ${actor.place}.`,
            grammarNote: 'Đảo ngữ nhấn mạnh "Only through + N + can S + V" chuẩn đề thi lớp 10.',
            viPattern: (m) => `Chỉ nhờ chung tay hành động, xã hội mới giảm nhẹ được "${m}" ${actor.viPlace}.`,
          },
        ],
      };
      return (byGrade[grade] || byGrade[8])[variantIdx];
    }

    const byGrade: Record<number, QuestionFrameSpec[]> = {
      6: [
        {
          before: `In daily life, `,
          after: ` is very important for ${actor.subjectPl} ${actor.place}.`,
          grammarNote: 'Danh từ không đếm được làm chủ ngữ hòa hợp với động từ số ít "is".',
          viPattern: (m) => `Trong cuộc sống hàng ngày, "${m}" rất quan trọng đối với ${actor.viSubject} ${actor.viPlace}.`,
        },
        {
          before: `We should learn more about `,
          after: ` when studying ${theme.labelEn}.`,
          grammarNote: 'Danh từ không đếm được đứng sau giới từ "about" (không dùng mạo từ a/an).',
          viPattern: (m) => `Chúng ta nên tìm hiểu thêm về "${m}" khi học chủ đề ${actor.viPlace}.`,
        },
        {
          before: `${subjSgCap} needs enough `,
          after: ` to ${actor.goal}.`,
          grammarNote: 'Danh từ không đếm được đứng sau lượng từ "enough".',
          viPattern: (m) => `Cần có đủ "${m}" để đạt kết quả tốt ${actor.viPlace}.`,
        },
      ],
      7: [
        {
          before: `Paying attention to `,
          after: ` helps ${actor.subjectPl} ${actor.goal} in a balanced way.`,
          grammarNote: 'Danh từ không đếm được đứng sau "Paying attention to", chủ ngữ danh động từ đi với "helps".',
          viPattern: (m) => `Việc chú trọng tới "${m}" giúp ${actor.viSubject} thực hiện hiệu quả các hoạt động ${actor.viPlace}.`,
        },
        {
          before: `${subjPlCap} showed great interest in `,
          after: ` during our seminar ${actor.place}.`,
          grammarNote: 'Danh từ không đếm được đứng sau giới từ "in" ở thì Quá khứ đơn.',
          viPattern: (m) => `${actor.viSubject} bày tỏ sự quan tâm lớn tới "${m}" ${actor.viPlace}.`,
        },
        {
          before: `Without enough `,
          after: `, it will be hard for ${actor.subjectPl} to ${actor.goal}.`,
          grammarNote: 'Danh từ không đếm được đứng sau lượng từ "enough".',
          viPattern: (m) => `Nếu không có đủ "${m}", ${actor.viSubject} sẽ gặp khó khăn ${actor.viPlace}.`,
        },
      ],
      8: [
        {
          before: `Although technology continues to advance, `,
          after: ` remains crucial ${actor.place}.`,
          grammarNote: 'Câu phức nhượng bộ với "Although", danh từ không đếm được kết hợp động từ số ít "remains".',
          viPattern: (m) => `Mặc dù công nghệ không ngừng phát triển, "${m}" vẫn giữ vai trò thiết yếu ${actor.viPlace}.`,
        },
        {
          before: `If society invests more in `,
          after: `, communities will successfully ${actor.goal}.`,
          grammarNote: 'Câu điều kiện Loại 1, danh từ không đếm được đứng sau "invests more in".',
          viPattern: (m) => `Nếu xã hội đầu tư nhiều hơn vào "${m}", cộng đồng sẽ gặt hái thành công ${actor.viPlace}.`,
        },
        {
          before: `Greater awareness of `,
          after: ` is widely promoted ${actor.place} to benefit future generations.`,
          grammarNote: 'Thể bị động Hiện tại đơn với danh từ không đếm được đứng sau "of".',
          viPattern: (m) => `Nhận thức sâu sắc hơn về "${m}" đang được thúc đẩy rộng rãi ${actor.viPlace}.`,
        },
      ],
      9: [
        {
          before: `Policymakers emphasize that `,
          after: ` that supports long-term progress is vital ${actor.place}.`,
          grammarNote: 'Câu phức với mệnh đề danh ngữ và mệnh đề quan hệ số ít ("that supports ... is").',
          viPattern: (m) => `Các nhà hoạch định nhấn mạnh rằng "${m}" hỗ trợ phát triển lâu dài đóng vai trò sống còn.`,
        },
        {
          before: `A lack of `,
          after: ` ${theme.contextEn} can undermine long-term efforts to ${actor.goal}.`,
          grammarNote: 'Danh từ không đếm được đứng sau cấu trúc học thuật "A lack of".',
          viPattern: (m) => `Việc thiếu "${m}" ${actor.viPlace} có thể ảnh hưởng tới nỗ lực lâu dài.`,
        },
        {
          before: `It is undeniable that `,
          after: ` contributes substantially to improving quality of life ${actor.place}.`,
          grammarNote: 'Cấu trúc chủ ngữ giả "It is undeniable that..." hòa hợp với động từ số ít "contributes".',
          viPattern: (m) => `Không thể phủ nhận rằng "${m}" góp phần đáng kể nâng cao chất lượng cuộc sống ${actor.viPlace}.`,
        },
      ],
    };
    return (byGrade[grade] || byGrade[8])[variantIdx];
  }

  // Default: NOUN_SINGULAR (Countable singular noun phrase without determiner)
  if (isNegNoun) {
    const byGrade: Record<number, QuestionFrameSpec[]> = {
      6: [
        {
          before: `We must learn what to do during ${art} `,
          after: ` ${actor.place}.`,
          grammarNote: `Cụm danh từ đếm được số ít đi sau mạo từ "${art}" chỉ tình huống cần ứng phó.`,
          viPattern: (m) => `Chúng ta cần biết cách xử lý khi xảy ra một "${m}" ${actor.viPlace}.`,
        },
        {
          before: `Our class is reading a report about ${art} `,
          after: ` ${theme.contextEn}.`,
          grammarNote: `Thì Hiện tại tiếp diễn kết hợp cụm danh từ số ít sau mạo từ "${art}".`,
          viPattern: (m) => `Lớp chúng tôi đang đọc bản tin về một "${m}" ${actor.viPlace}.`,
        },
        {
          before: `People try to stay safe whenever ${art} `,
          after: ` happens ${actor.place}.`,
          grammarNote: `Cụm danh từ đếm được số ít làm chủ ngữ sau "${art}" với động từ chia số ít "happens".`,
          viPattern: (m) => `Mọi người luôn cố gắng giữ an toàn mỗi khi có "${m}" xảy ra ${actor.viPlace}.`,
        },
      ],
      7: [
        {
          before: `Residents prepared carefully because ${art} `,
          after: ` could affect life ${actor.place}.`,
          grammarNote: `Câu ghép liên từ "because", cụm danh từ số ít sau mạo từ "${art}".`,
          viPattern: (m) => `Người dân chuẩn bị kỹ lưỡng vì một "${m}" có thể ảnh hưởng đời sống ${actor.viPlace}.`,
        },
        {
          before: `If people receive warnings before ${art} `,
          after: ` occurs, they can stay much safer.`,
          grammarNote: `Câu điều kiện Loại 1, cụm danh từ số ít làm chủ ngữ của "occurs".`,
          viPattern: (m) => `Nếu nhận được cảnh báo trước khi một "${m}" xảy ra, mọi người sẽ an toàn hơn.`,
        },
        {
          before: `Our school held a safety drill to teach students how to handle ${art} `,
          after: ` ${actor.place}.`,
          grammarNote: `Cụm danh từ số ít sau động từ "handle ${art}".`,
          viPattern: (m) => `Trường học tổ chức diễn tập để hướng dẫn học sinh ứng phó khi có "${m}" ${actor.viPlace}.`,
        },
      ],
      8: [
        {
          before: `Although ${art} `,
          after: ` can occur unexpectedly, local authorities guide residents to respond calmly.`,
          grammarNote: `Câu phức nhượng bộ với "Although", cụm danh từ số ít sau "${art}".`,
          viPattern: (m) => `Mặc dù một "${m}" có thể xảy ra bất ngờ, chính quyền địa phương vẫn tập huấn cách ứng phó bình tĩnh.`,
        },
        {
          before: `When ${actor.subjectPl} face ${art} `,
          after: `, early preparation helps minimize damage ${actor.place}.`,
          grammarNote: `Câu phức với "When", cụm danh từ số ít làm tân ngữ sau "face ${art}".`,
          viPattern: (m) => `Khi ${actor.viSubject} đối mặt với một "${m}", việc chuẩn bị sớm giúp giảm thiểu thiệt hại.`,
        },
        {
          before: `Emergency responders quickly evaluated the impact of ${art} `,
          after: ` ${theme.contextEn}.`,
          grammarNote: `Cụm danh từ số ít đứng sau giới từ và mạo từ "of ${art}" ở thì Quá khứ đơn.`,
          viPattern: (m) => `Lực lượng ứng cứu nhanh chóng đánh giá tác động của một "${m}" ${actor.viPlace}.`,
        },
      ],
      9: [
        {
          before: `Analysts emphasize that preparing early for ${art} `,
          after: ` that threatens community safety is essential ${actor.place}.`,
          grammarNote: `Mệnh đề danh ngữ kết hợp mệnh đề quan hệ xác định "that threatens...", cụm danh từ số ít sau "${art}".`,
          viPattern: (m) => `Các chuyên gia nhấn mạnh việc chuẩn bị sớm cho một "${m}" đe dọa an toàn cộng đồng là hết sức thiết yếu.`,
        },
        {
          before: `Only when early warning systems detect ${art} `,
          after: ` in time can communities evacuate safely ${actor.place}.`,
          grammarNote: `Cấu trúc đảo ngữ nhấn mạnh "Only when ... can S + V" chuẩn đề thi lớp 10.`,
          viPattern: (m) => `Chỉ khi hệ thống cảnh báo phát hiện kịp thời một "${m}", cộng đồng mới có thể sơ tán an toàn.`,
        },
        {
          before: `Every region must develop clear plans to recover from ${art} `,
          after: ` which could disrupt daily life ${actor.place}.`,
          grammarNote: `Mệnh đề quan hệ xác định "which could disrupt..." bổ nghĩa cho cụm danh từ số ít sau "${art}".`,
          viPattern: (m) => `Mỗi khu vực đều cần kế hoạch rõ ràng để phục hồi sau một "${m}" làm gián đoạn đời sống.`,
        },
      ],
    };
    return (byGrade[grade] || byGrade[8])[variantIdx];
  }

  if (nounClass === 'HUMAN_GROUP') {
    const byGrade: Record<number, QuestionFrameSpec[]> = {
      6: [
        {
          before: `Growing up in ${art} `,
          after: ` teaches children to share and care for others.`,
          grammarNote: `Cụm danh từ đếm được số ít chỉ nhóm người đi sau mạo từ "${art}".`,
          viPattern: (m) => `Lớn lên trong một "${m}" dạy trẻ em biết chia sẻ và quan tâm lẫn nhau.`,
        },
        {
          before: `Our class read a warm story about ${art} `,
          after: ` living together happily.`,
          grammarNote: `Cụm danh từ số ít đi sau giới từ và mạo từ "about ${art}".`,
          viPattern: (m) => `Lớp chúng tôi đã đọc một câu chuyện ấm áp về một "${m}" sống hạnh phúc bên nhau.`,
        },
        {
          before: `Everyone in ${art} `,
          after: ` supports one another every day.`,
          grammarNote: `Cụm danh từ số ít đứng sau giới từ "in ${art}".`,
          viPattern: (m) => `Mọi thành viên trong một "${m}" đều hỗ trợ nhau mỗi ngày.`,
        },
      ],
      7: [
        {
          before: `Last week, our documentary showed how ${art} `,
          after: ` celebrates traditional holidays together.`,
          grammarNote: `Cụm danh từ số ít sau "${art}" làm chủ ngữ hòa hợp động từ số ít "celebrates".`,
          viPattern: (m) => `Tuần trước, phim tài liệu cho thấy cách một "${m}" cùng nhau đón lễ truyền thống.`,
        },
        {
          before: `Because members care deeply for each other, life in ${art} `,
          after: ` feels warm and supportive.`,
          grammarNote: `Câu ghép liên từ "because", cụm danh từ số ít đứng sau "in ${art}".`,
          viPattern: (m) => `Vì các thành viên quan tâm nhau sâu sắc, cuộc sống trong một "${m}" thật ấm áp.`,
        },
        {
          before: `During the lesson, students compared daily routines in ${art} `,
          after: ` then and now.`,
          grammarNote: `Cụm danh từ số ít sau "in ${art}" trong thì Quá khứ đơn.`,
          viPattern: (m) => `Trong giờ học, học sinh so sánh nếp sinh hoạt trong một "${m}" xưa và nay.`,
        },
      ],
      8: [
        {
          before: `Although lifestyles have changed rapidly, ${art} `,
          after: ` still preserves meaningful traditions ${actor.place}.`,
          grammarNote: `Câu phức nhượng bộ với "Although", cụm danh từ số ít sau "${art}" hòa hợp "preserves".`,
          viPattern: (m) => `Mặc dù lối sống thay đổi nhanh, một "${m}" vẫn gìn giữ nhiều truyền thống ý nghĩa.`,
        },
        {
          before: `When children grow up in ${art} `,
          after: `, they learn respect and cooperation early.`,
          grammarNote: `Mệnh đề thời gian với "When", cụm danh từ số ít sau "in ${art}".`,
          viPattern: (m) => `Khi trẻ em lớn lên trong một "${m}", các em sớm học được sự tôn trọng và hợp tác.`,
        },
        {
          before: `Many sociologists have studied how ${art} `,
          after: ` adapts to modern society.`,
          grammarNote: `Thì Hiện tại hoàn thành kết hợp cụm danh từ số ít sau "${art}" và "adapts".`,
          viPattern: (m) => `Nhiều nhà xã hội học đã nghiên cứu cách một "${m}" thích nghi với xã hội hiện đại.`,
        },
      ],
      9: [
        {
          before: `Researchers emphasize that living in ${art} `,
          after: ` shapes how young people view heritage and responsibility.`,
          grammarNote: `Mệnh đề danh ngữ với danh động từ "living in ${art} + [noun]".`,
          viPattern: (m) => `Các nhà nghiên cứu nhấn mạnh rằng sống trong một "${m}" định hình nhận thức của giới trẻ về di sản.`,
        },
        {
          before: `Only when members communicate openly can ${art} `,
          after: ` maintain harmony across changing times.`,
          grammarNote: `Cấu trúc đảo ngữ "Only when ... can + S + V", cụm danh từ số ít làm chủ ngữ sau "${art}".`,
          viPattern: (m) => `Chỉ khi các thành viên trao đổi cởi mở, một "${m}" mới giữ được sự hòa thuận qua thời gian.`,
        },
        {
          before: `Studies focusing on ${theme.labelEn} highlight how ${art} `,
          after: ` strengthens bonds within the wider community.`,
          grammarNote: `Cụm phân từ "focusing on" kết hợp mệnh đề phụ "how ${art} + [noun] + strengthens".`,
          viPattern: (m) => `Các nghiên cứu nêu bật cách một "${m}" củng cố sự gắn kết trong cộng đồng.`,
        },
      ],
    };
    return (byGrade[grade] || byGrade[8])[variantIdx];
  }

  if (nounClass === 'TIME_EVENT') {
    const byGrade: Record<number, QuestionFrameSpec[]> = {
      6: [
        {
          before: `Our family is planning ${art} `,
          after: ` during the summer holiday.`,
          grammarNote: `Cụm danh từ số ít chỉ thời gian/sự kiện đi sau mạo từ "${art}".`,
          viPattern: (m) => `Gia đình chúng tôi đang lên kế hoạch cho một "${m}" vào kỳ nghỉ hè.`,
        },
        {
          before: `Everyone enjoyed ${art} `,
          after: ` together last month.`,
          grammarNote: `Cụm danh từ số ít sau "enjoyed ${art}" ở thì Quá khứ đơn.`,
          viPattern: (m) => `Mọi người đều rất thích một "${m}" bên nhau vào tháng trước.`,
        },
        {
          before: `Students wrote a short diary entry about ${art} `,
          after: ` with their friends.`,
          grammarNote: `Cụm danh từ số ít sau giới từ "about ${art}".`,
          viPattern: (m) => `Học sinh đã viết nhật ký ngắn về một "${m}" cùng bạn bè.`,
        },
      ],
      7: [
        {
          before: `Last summer, my cousins went on ${art} `,
          after: ` because they wanted to explore the countryside.`,
          grammarNote: `Câu ghép liên từ "because", cụm danh từ số ít đứng sau "on ${art}".`,
          viPattern: (m) => `Mùa hè năm ngoái, anh chị em họ tôi đã có một "${m}" để khám phá miền quê.`,
        },
        {
          before: `If we prepare carefully for ${art} `,
          after: `, everyone will have a memorable time.`,
          grammarNote: `Câu điều kiện Loại 1, cụm danh từ số ít sau "for ${art}".`,
          viPattern: (m) => `Nếu chuẩn bị chu đáo cho một "${m}", mọi người sẽ có khoảng thời gian đáng nhớ.`,
        },
        {
          before: `After ${art} `,
          after: ` in the mountains, the visitors returned home refreshed.`,
          grammarNote: `Cụm giới từ chỉ thời gian "After ${art} + [noun]".`,
          viPattern: (m) => `Sau một "${m}" ở vùng núi, các du khách trở về với tinh thần sảng khoái.`,
        },
      ],
      8: [
        {
          before: `Although the schedule was busy, the guests really appreciated ${art} `,
          after: ` in the region.`,
          grammarNote: `Câu phức nhượng bộ với "Although", cụm danh từ số ít sau "${art}".`,
          viPattern: (m) => `Mặc dù lịch trình bận rộn, du khách vẫn rất trân trọng một "${m}" tại vùng đất này.`,
        },
        {
          before: `When travellers choose ${art} `,
          after: `, they can experience local culture much more deeply.`,
          grammarNote: `Mệnh đề thời gian với "When", cụm danh từ số ít làm tân ngữ sau "choose ${art}".`,
          viPattern: (m) => `Khi du khách chọn một "${m}", họ có thể trải nghiệm văn hóa địa phương sâu sắc hơn.`,
        },
        {
          before: `Many tourists have recommended ${art} `,
          after: ` for families visiting historic areas.`,
          grammarNote: `Thì Hiện tại hoàn thành với cụm danh từ số ít sau "${art}".`,
          viPattern: (m) => `Nhiều du khách đã gợi ý một "${m}" cho các gia đình đến thăm khu di tích.`,
        },
      ],
      9: [
        {
          before: `Travel writers emphasize that taking ${art} `,
          after: ` allows visitors to understand local heritage more fully.`,
          grammarNote: `Mệnh đề danh ngữ với danh động từ "taking ${art} + [noun]".`,
          viPattern: (m) => `Các tác giả du lịch nhấn mạnh việc có một "${m}" giúp du khách thấu hiểu di sản địa phương hơn.`,
        },
        {
          before: `Only after experiencing ${art} `,
          after: ` did the students realize how diverse the region truly was.`,
          grammarNote: `Đảo ngữ "Only after + V-ing + did S + V" chuẩn đề thi lớp 10.`,
          viPattern: (m) => `Chỉ sau khi trải qua một "${m}", học sinh mới nhận ra vùng đất ấy đa dạng đến nhường nào.`,
        },
        {
          before: `Reports on cultural tourism note that ${art} `,
          after: ` encourages deeper appreciation of local life.`,
          grammarNote: `Mệnh đề danh ngữ với chủ ngữ số ít sau "${art}" hòa hợp "encourages".`,
          viPattern: (m) => `Các báo cáo du lịch văn hóa ghi nhận một "${m}" khuyến khích sự trân trọng đời sống bản địa.`,
        },
      ],
    };
    return (byGrade[grade] || byGrade[8])[variantIdx];
  }

  if (nounClass === 'PLACE') {
    const byGrade: Record<number, QuestionFrameSpec[]> = {
      6: [
        {
          before: `Visitors love taking photos of ${art} `,
          after: ` during their trip.`,
          grammarNote: `Cụm danh từ số ít chỉ địa điểm đi sau mạo từ "${art}".`,
          viPattern: (m) => `Du khách rất thích chụp ảnh một "${m}" trong chuyến đi.`,
        },
        {
          before: `Our class visited ${art} `,
          after: ` last weekend.`,
          grammarNote: `Cụm danh từ số ít làm tân ngữ sau động từ "visited ${art}" ở thì Quá khứ đơn.`,
          viPattern: (m) => `Lớp chúng tôi đã đến thăm một "${m}" vào cuối tuần trước.`,
        },
        {
          before: `Local people are proud of having ${art} `,
          after: ` in their neighbourhood.`,
          grammarNote: `Cụm danh từ số ít đứng sau "having ${art}".`,
          viPattern: (m) => `Người dân địa phương tự hào khi có một "${m}" trong khu vực của mình.`,
        },
      ],
      7: [
        {
          before: `We stopped at ${art} `,
          after: ` because it was featured in our guidebook.`,
          grammarNote: `Câu ghép liên từ "because", cụm danh từ số ít sau giới từ "at ${art}".`,
          viPattern: (m) => `Chúng tôi dừng chân tại một "${m}" vì nơi đó được giới thiệu trong sách hướng dẫn.`,
        },
        {
          before: `If tourists visit ${art} `,
          after: `, they should follow local conservation rules.`,
          grammarNote: `Câu điều kiện Loại 1, cụm danh từ số ít làm tân ngữ sau "visit ${art}".`,
          viPattern: (m) => `Nếu du khách ghé thăm một "${m}", họ nên tuân thủ quy định bảo tồn địa phương.`,
        },
        {
          before: `During our school trip, the guide showed us around ${art} `,
          after: ` in the morning.`,
          grammarNote: `Cụm danh từ số ít đứng sau cụm động từ "showed us around ${art}".`,
          viPattern: (m) => `Trong chuyến đi thực tế, hướng dẫn viên đã dẫn chúng tôi tham quan một "${m}".`,
        },
      ],
      8: [
        {
          before: `Although the region has modernized rapidly, ${art} `,
          after: ` still attracts visitors from everywhere.`,
          grammarNote: `Câu phức nhượng bộ với "Although", cụm danh từ số ít hòa hợp động từ "attracts".`,
          viPattern: (m) => `Mặc dù khu vực hiện đại hóa nhanh, một "${m}" vẫn thu hút du khách khắp nơi.`,
        },
        {
          before: `When communities invest in maintaining ${art} `,
          after: `, residents benefit for many years.`,
          grammarNote: `Mệnh đề thời gian với "When", cụm danh từ số ít sau "maintaining ${art}".`,
          viPattern: (m) => `Khi cộng đồng đầu tư duy trì một "${m}", người dân sẽ hưởng lợi lâu dài.`,
        },
        {
          before: `Local authorities have worked carefully to preserve ${art} `,
          after: ` for future generations.`,
          grammarNote: `Thì Hiện tại hoàn thành kết hợp cụm danh từ số ít sau "preserve ${art}".`,
          viPattern: (m) => `Chính quyền địa phương đã nỗ lực bảo tồn một "${m}" cho các thế hệ tương lai.`,
        },
      ],
      9: [
        {
          before: `Urban planners emphasize that maintaining ${art} `,
          after: ` improves quality of life for local residents.`,
          grammarNote: `Mệnh đề danh ngữ với chủ ngữ danh động từ "maintaining ${art} + [noun]".`,
          viPattern: (m) => `Các nhà quy hoạch nhấn mạnh việc duy trì một "${m}" giúp nâng cao chất lượng sống.`,
        },
        {
          before: `Only by protecting ${art} `,
          after: ` can local communities keep their cultural identity alive.`,
          grammarNote: `Đảo ngữ "Only by + V-ing + can S + V" chuẩn đề thi lớp 10.`,
          viPattern: (m) => `Chỉ bằng cách bảo vệ một "${m}", cộng đồng mới giữ gìn được bản sắc văn hóa.`,
        },
        {
          before: `Architects highlighted ${art} `,
          after: ` that reflects both local character and practical design.`,
          grammarNote: `Mệnh đề quan hệ số ít "that reflects..." bổ nghĩa cho danh từ chỉ địa điểm sau "${art}".`,
          viPattern: (m) => `Các kiến trúc sư nêu bật một "${m}" vừa mang bản sắc địa phương vừa có thiết kế thực tiễn.`,
        },
      ],
    };
    return (byGrade[grade] || byGrade[8])[variantIdx];
  }

  if (nounClass === 'FOOD') {
    const byGrade: Record<number, QuestionFrameSpec[]> = {
      6: [
        {
          before: `My family loves sharing ${art} `,
          after: ` on weekend evenings.`,
          grammarNote: `Cụm danh từ số ít chỉ món ăn đi sau mạo từ "${art}".`,
          viPattern: (m) => `Gia đình tôi thích cùng thưởng thức một "${m}" vào các tối cuối tuần.`,
        },
        {
          before: `Tourists often try ${art} `,
          after: ` when they visit the local market.`,
          grammarNote: `Cụm danh từ số ít làm tân ngữ sau động từ "try ${art}".`,
          viPattern: (m) => `Du khách thường thử một "${m}" khi ghé chợ địa phương.`,
        },
        {
          before: `Our cooking club is learning how to prepare ${art} `,
          after: ` at school.`,
          grammarNote: `Thì Hiện tại tiếp diễn kết hợp cụm danh từ số ít sau "prepare ${art}".`,
          viPattern: (m) => `Câu lạc bộ nấu ăn đang học cách chế biến một "${m}" ở trường.`,
        },
      ],
      7: [
        {
          before: `Guests praised the chef because he served ${art} `,
          after: ` made with fresh local ingredients.`,
          grammarNote: `Câu ghép liên từ "because", cụm danh từ số ít sau "served ${art}".`,
          viPattern: (m) => `Thực khách khen ngợi đầu bếp vì đã phục vụ một "${m}" từ nguyên liệu địa phương tươi ngon.`,
        },
        {
          before: `If you visit this region, you should taste ${art} `,
          after: ` at least once.`,
          grammarNote: `Câu điều kiện Loại 1, cụm danh từ số ít làm tân ngữ sau "taste ${art}".`,
          viPattern: (m) => `Nếu ghé thăm vùng này, bạn nên nếm thử một "${m}" ít nhất một lần.`,
        },
        {
          before: `During the food festival, everyone enjoyed ${art} `,
          after: ` together.`,
          grammarNote: `Cụm danh từ số ít sau động từ "enjoyed ${art}" ở thì Quá khứ đơn.`,
          viPattern: (m) => `Trong lễ hội ẩm thực, mọi người đã cùng nhau thưởng thức một "${m}".`,
        },
      ],
      8: [
        {
          before: `Although recipes vary by region, ${art} `,
          after: ` always brings families closer together.`,
          grammarNote: `Câu phức nhượng bộ với "Although", cụm danh từ số ít hòa hợp "brings".`,
          viPattern: (m) => `Mặc dù công thức khác nhau theo vùng miền, một "${m}" luôn gắn kết gia đình lại gần nhau hơn.`,
        },
        {
          before: `When visitors taste ${art} `,
          after: `, they quickly remember the flavours of local culture.`,
          grammarNote: `Mệnh đề thời gian với "When", cụm danh từ số ít sau "taste ${art}".`,
          viPattern: (m) => `Khi du khách nếm thử một "${m}", họ nhanh chóng ghi nhớ hương vị văn hóa bản địa.`,
        },
        {
          before: `Food writers have praised ${art} `,
          after: ` for its balanced taste and fresh ingredients.`,
          grammarNote: `Thì Hiện tại hoàn thành với cụm danh từ số ít sau "praised ${art}".`,
          viPattern: (m) => `Các cây bút ẩm thực ca ngợi một "${m}" nhờ hương vị hài hòa và nguyên liệu tươi ngon.`,
        },
      ],
      9: [
        {
          before: `Culinary experts emphasize that preparing ${art} `,
          after: ` preserves centuries-old cooking traditions.`,
          grammarNote: `Mệnh đề danh ngữ với chủ ngữ danh động từ "preparing ${art} + [noun]".`,
          viPattern: (m) => `Các chuyên gia ẩm thực nhấn mạnh việc chế biến một "${m}" giúp lưu giữ truyền thống lâu đời.`,
        },
        {
          before: `Only by using fresh ingredients can cooks create ${art} `,
          after: ` with authentic regional flavour.`,
          grammarNote: `Đảo ngữ "Only by + V-ing + can S + V" chuẩn đề thi lớp 10.`,
          viPattern: (m) => `Chỉ khi dùng nguyên liệu tươi, đầu bếp mới tạo nên một "${m}" chuẩn vị địa phương.`,
        },
        {
          before: `Documentaries on regional cuisine often feature ${art} `,
          after: ` that represents local heritage.`,
          grammarNote: `Mệnh đề quan hệ số ít "that represents..." bổ nghĩa cho danh từ chỉ món ăn sau "${art}".`,
          viPattern: (m) => `Các phim tài liệu về ẩm thực vùng miền thường giới thiệu một "${m}" tiêu biểu cho di sản địa phương.`,
        },
      ],
    };
    return (byGrade[grade] || byGrade[8])[variantIdx];
  }

  const byGrade: Record<number, QuestionFrameSpec[]> = {
    6: [
      {
        before: `In our lesson, students talk about ${art} `,
        after: ` ${actor.place}.`,
        grammarNote: `Cụm danh từ đếm được số ít đi sau mạo từ "${art}" ở thì Hiện tại đơn.`,
        viPattern: (m) => `Trong bài học, học sinh cùng tìm hiểu về một "${m}" ${actor.viPlace}.`,
      },
      {
        before: `Our class is learning about ${art} `,
        after: ` ${theme.contextEn}.`,
        grammarNote: `Thì Hiện tại tiếp diễn kết hợp cụm danh từ số ít sau mạo từ "${art}".`,
        viPattern: (m) => `Lớp chúng tôi đang tìm hiểu về một "${m}" ${actor.viPlace}.`,
      },
      {
        before: `Knowing about ${art} `,
        after: ` is very useful for ${actor.subjectPl} ${actor.place}.`,
        grammarNote: `Cụm danh từ đếm được số ít đi sau mạo từ "${art}" trong cụm chủ ngữ danh động từ.`,
        viPattern: (m) => `Hiểu biết về một "${m}" rất hữu ích cho ${actor.viSubject} ${actor.viPlace}.`,
      },
    ],
    7: [
      {
        before: `Our group presented ${art} `,
        after: ` because it relates closely to ${theme.labelEn}.`,
        grammarNote: `Câu ghép liên từ "because" ở thì Quá khứ đơn, cụm danh từ số ít sau mạo từ "${art}".`,
        viPattern: (m) => `Nhóm chúng tôi đã trình bày về một "${m}" vì nó liên quan chặt chẽ đến chủ đề ${actor.viPlace}.`,
      },
      {
        before: `If you pay attention to ${art} `,
        after: `, you will understand the lesson much better.`,
        grammarNote: `Câu điều kiện Loại 1, cụm danh từ số ít đứng sau giới từ và mạo từ "to ${art}".`,
        viPattern: (m) => `Nếu chú ý tới một "${m}", bạn sẽ hiểu bài học sâu sắc hơn nhiều.`,
      },
      {
        before: `During the workshop, the teacher described ${art} `,
        after: ` in clear detail.`,
        grammarNote: `Cụm danh từ số ít làm tân ngữ trực tiếp của động từ "described" ở thì Quá khứ đơn.`,
        viPattern: (m) => `Trong buổi chuyên đề, giáo viên đã mô tả chi tiết một "${m}".`,
      },
    ],
    8: [
      {
        before: `Although times have changed, ${art} `,
        after: ` still attracts interest ${actor.place}.`,
        grammarNote: `Câu phức nhượng bộ với "Although", cụm danh từ số ít sau "${art}" hòa hợp "attracts".`,
        viPattern: (m) => `Mặc dù thời đại đã thay đổi, một "${m}" vẫn thu hút sự quan tâm ${actor.viPlace}.`,
      },
      {
        before: `When ${actor.subjectPl} examine ${art} `,
        after: ` carefully, they notice many meaningful details.`,
        grammarNote: `Mệnh đề thời gian với "When", cụm danh từ số ít sau "examine ${art}".`,
        viPattern: (m) => `Khi ${actor.viSubject} xem xét kỹ một "${m}", họ nhận ra nhiều chi tiết ý nghĩa.`,
      },
      {
        before: `Our recent project highlighted ${art} `,
        after: ` connected with ${theme.labelEn}.`,
        grammarNote: `Cụm danh từ số ít sau "highlighted ${art}" kết hợp cụm phân từ "connected with".`,
        viPattern: (m) => `Dự án gần đây của chúng tôi đã nêu bật một "${m}" gắn liền với chủ đề ${actor.viPlace}.`,
      },
    ],
    9: [
      {
        before: `Analysts emphasize that understanding ${art} `,
        after: ` is important when discussing ${theme.labelEn}.`,
        grammarNote: `Mệnh đề danh ngữ với chủ ngữ danh động từ "understanding ${art} + [noun]".`,
        viPattern: (m) => `Các chuyên gia nhấn mạnh việc hiểu rõ một "${m}" là rất quan trọng khi bàn về ${actor.viPlace}.`,
      },
      {
        before: `Only by examining ${art} `,
        after: ` closely can learners appreciate its role in everyday life.`,
        grammarNote: `Cấu trúc đảo ngữ nhấn mạnh "Only by + V-ing + can S + V" chuẩn đề thi lớp 10, điền cụm danh từ sau "${art}".`,
        viPattern: (m) => `Chỉ bằng cách tìm hiểu kỹ một "${m}", người học mới cảm nhận hết vai trò của nó trong đời sống.`,
      },
      {
        before: `The article featured ${art} `,
        after: ` that caught the attention of readers ${actor.place}.`,
        grammarNote: `Mệnh đề quan hệ xác định "that caught..." bổ nghĩa cho cụm danh từ số ít sau "${art}".`,
        viPattern: (m) => `Bài báo giới thiệu một "${m}" thu hút sự chú ý của độc giả ${actor.viPlace}.`,
      },
    ],
  };
  return (byGrade[grade] || byGrade[8])[variantIdx];
}

