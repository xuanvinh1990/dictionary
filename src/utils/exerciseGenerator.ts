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
  'bonding', 'community service',
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
  'leave', 'live', 'work', 'play', 'walk', 'ride', 'drive', 'fly', 'travel',
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
  'gathering', 'portrait', 'footprint', 'firework', 'fireworks', 'display', 'gathering',
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

const AFFECTED_PERSON_RE = /\b(?:victim|victims|survivor|survivors|patient|patients|refugee|refugees)\b/i;

function isNegativeNounPhrase(word: string, phrase: string): boolean {
  const w = word.trim().toLowerCase();
  const p = phrase.trim().toLowerCase();
  if (AFFECTED_PERSON_RE.test(p)) return false;
  if (NEGATIVE_NOUN_WORDS.has(w) || NEGATIVE_NOUN_WORDS.has(p)) return true;
  for (const neg of NEGATIVE_NOUN_WORDS) {
    if (p.includes(neg)) return true;
  }
  return false;
}

function getVerbSemanticTone(phrase: string): 'normal' | 'destructive' | 'avoid' {
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
  if (DESTRUCTIVE_VERBS.has(headVerb)) return 'destructive';
  if (AVOID_VERBS.has(headVerb)) return 'avoid';
  return 'normal';
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
    pPos.includes('prep') ||
    /^(in|on|at|by|with|for|from|between|under|over|near|into|without|instead of|in front of|as|like|about|after|before|during|through|towards|toward|around|against|among|across|beyond|behind|below|beneath|beside|besides|despite|inside|outside|onto|since|throughout|underneath|until|upon|within|to our)\b/.test(p)
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
  if (
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
  ) {
    if (!NOUN_ENDINGS_NOT_ADJ.has(lastWord) && !BASE_VERB_STARTERS.has(firstWord)) {
      return 'ADJ_PRED';
    }
  }

  // Coordinated adjectives: "warm and friendly", "fit and healthy", "diligent and hard-working"
  if (words.length >= 3 && words.includes('and') && !NOUN_ENDINGS_NOT_ADJ.has(lastWord) && !isPluralPhrase(p, pPos)) {
    if (pPos.includes('adj') || ADJECTIVE_STARTERS.has(firstWord) || looksLikeAdjectiveWord(lastWord)) {
      return 'ADJ_PRED';
    }
  }

  // Adverb + Adjective: "physically fit", "truly enjoyable", "heavily congested", "fully occupied", "deeply touching"
  if (
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

  // Multi-word pure adj phrase ending in an adjective (e.g. "crowded with tourists" caught above, "well known")
  if (
    pPos.includes('adj') &&
    !pPos.includes('noun') &&
    !NOUN_ENDINGS_NOT_ADJ.has(lastWord) &&
    !isPluralPhrase(p, pPos) &&
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
  if ((pPos === 'adv' || pPos === 'adv/adj') && words.length === 1) {
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
  const isAdvPlusBaseVerb =
    words.length >= 2 &&
    (ADVERB_MODIFIERS.has(firstWord) || (firstWord.endsWith('ly') && !ADJ_ENDING_IN_LY.has(firstWord))) &&
    (BASE_VERB_STARTERS.has(words[1] || '') || pPos.includes('verb')) &&
    !PAST_VERB_STARTERS.has(words[1] || '') &&
    !(words[1] || '').endsWith('ed') &&
    !(words[1] || '').endsWith('ing');

  if (isAdvPlusBaseVerb) {
    return 'VERB_BASE';
  }

  const secondWord = words[1] || '';
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

  // 8. Noun phrases starting with determiner or number
  if (/^(a|an|the|my|your|our|their|his|her|each|every|some|many|no|\d+)\s+/.test(p)) {
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
  const results: string[] = [];
  const seen = new Set<string>();
  const pPos = (pos || '').toLowerCase();

  const isDangling = (phrase: string) => {
    const t = phrase.trim().toLowerCase();
    if (pPos.includes('prep')) return false;
    // Allow complete phrasal verbs matching the keyword itself (e.g. "take part in", "log on to", "cut down on")
    if ((pPos.includes('phr') || cleanWord.includes(' ')) && t === cleanWord.toLowerCase()) {
      return false;
    }
    return /\b(?:a|an|the|of|to|in|on|at|for|with|by|from|into|onto|and|or|as|not)$/i.test(t);
  };

  const pushIfValid = (phrase: string) => {
    const trimmed = phrase.trim().replace(/\s+/g, ' ');
    if (!trimmed) return;
    if (isDangling(trimmed)) return;
    const count = trimmed.split(/\s+/).length;
    if (count <= maxWords && !seen.has(trimmed.toLowerCase())) {
      seen.add(trimmed.toLowerCase());
      results.push(trimmed);
    }
  };

  // First pass: keep complete phrases already within maxWords (normalizing "do not X" -> "never X")
  for (const c of rawColls) {
    let trimmed = c.trim().replace(/\s+/g, ' ');
    if (/^do\s+not\s+/i.test(trimmed)) {
      trimmed = trimmed.replace(/^do\s+not\s+/i, 'never ');
    }
    if (trimmed.split(/\s+/).length <= maxWords && !isDangling(trimmed)) {
      pushIfValid(trimmed);
    }
  }

  // Second pass: cleanly condense over-long phrases without breaking grammar
  for (const c of rawColls) {
    const trimmed = c.trim().replace(/\s+/g, ' ');
    const words = trimmed.split(/\s+/);
    if (words.length <= maxWords) continue;

    // 2a. "<verb> as a/an <agent role>" -> "<agent role>" (e.g. "work as a bartender" -> "bartender")
    const roleMatch = trimmed.match(/^(?:work|serve|act|train|dress)\s+as\s+(?:a|an)\s+(.+)$/i);
    if (roleMatch && roleMatch[1]) {
      if (roleMatch[1].split(/\s+/).length <= maxWords) {
        pushIfValid(roleMatch[1]);
        continue;
      }
    }

    // 2b. "too <adj> to <V>" -> "<adj> to <V>"
    if (/^too\s+/i.test(trimmed)) {
      const noToo = trimmed.replace(/^too\s+/i, '');
      if (noToo.split(/\s+/).length <= maxWords) {
        pushIfValid(noToo);
        continue;
      }
    }

    // 2c. Remove leading "a/an/the"
    const noLeadingDet = trimmed.replace(/^(?:a|an|the)\s+/i, '');
    if (noLeadingDet.split(/\s+/).length <= maxWords) {
      pushIfValid(noLeadingDet);
      continue;
    }

    // 2d. Remove internal "the" before capitalized/proper noun or New Year (e.g. "celebrate the New Year" -> "celebrate New Year")
    const noInternalThe = trimmed.replace(/\s+the\s+([A-Z])/g, ' $1');
    if (noInternalThe !== trimmed && noInternalThe.split(/\s+/).length <= maxWords) {
      pushIfValid(noInternalThe);
      continue;
    }

    // 2e. Keep tail NP after "<verb> <prep> [a|an|the]" if tail contains keyword
    const tailAfterPrep = trimmed.replace(
      /^[a-z]+\s+(?:at|in|on|to|for|with|from|into|of|as|by|over|through|about|near|like)\s+(?:a|an|the\s+)?/i,
      ''
    );
    if (
      tailAfterPrep !== trimmed &&
      tailAfterPrep.toLowerCase().includes(cleanWord.toLowerCase()) &&
      tailAfterPrep.split(/\s+/).length <= maxWords
    ) {
      pushIfValid(tailAfterPrep);
      continue;
    }

    // 2f. Keep leading "<NP>" before trailing prepositional modifier (e.g., "lucky money from grandparents" -> "lucky money")
    const headBeforePrep = trimmed.split(/\s+(?:from|with|for|in|on|at|of|to|by|during)\s+/i)[0] || '';
    if (
      headBeforePrep &&
      headBeforePrep !== trimmed &&
      headBeforePrep.toLowerCase().includes(cleanWord.toLowerCase()) &&
      headBeforePrep.split(/\s+/).length <= maxWords &&
      !/^(?:cheer|knock|sit|stand|live|stay|work|look|listen|talk)$/i.test(headBeforePrep)
    ) {
      pushIfValid(headBeforePrep);
      continue;
    }

    // 2g. Convert "do not <verb> ..." -> "never <verb> ..." if it fits maxWords
    if (/^do\s+not\s+/i.test(trimmed)) {
      const neverForm = trimmed.replace(/^do\s+not\s+/i, 'never ');
      if (neverForm.split(/\s+/).length <= maxWords) {
        pushIfValid(neverForm);
        continue;
      }
    }

    // 2h. For multi-word phrasal verbs (e.g. "take part in festivals"), keep the base phrasal verb if it fits maxWords
    if (pPos.includes('phr') && trimmed.toLowerCase().startsWith(cleanWord.toLowerCase())) {
      pushIfValid(cleanWord);
    }
  }

  // Third pass: ensure at least 2 usable collocations when possible without inventing unnatural words
  if (results.length < 2) {
    const wordLen = cleanWord.split(/\s+/).length;
    if (wordLen <= maxWords) {
      pushIfValid(cleanWord);
      if (results.length < 2 && wordLen + 1 <= maxWords) {
        if (pPos.includes('verb') && !pPos.includes('noun')) {
          const tone = getVerbSemanticTone(cleanWord);
          if (tone === 'destructive') {
            pushIfValid(`completely ${cleanWord}`);
          } else if (tone === 'avoid') {
            pushIfValid(`strongly ${cleanWord}`);
          } else {
            pushIfValid(`${cleanWord} carefully`);
          }
        } else if (pPos.includes('adj') && !pPos.includes('noun')) {
          pushIfValid(`very ${cleanWord}`);
        } else if (!pPos.includes('prep') && !pPos.includes('conj') && !pPos.includes('adv')) {
          if (!isNegativeNounPhrase(cleanWord, cleanWord) && !isPluralPhrase(cleanWord, pPos)) {
            pushIfValid(`new ${cleanWord}`);
          }
        }
      }
    } else {
      pushIfValid(cleanWord.split(/\s+/).slice(0, maxWords).join(' '));
    }
  }

  return results;
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
    subjectPl: 'many teenagers',
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
  if (p === 'take part in') return 'community activities';
  if (p === 'log on to') return 'the learning website';
  if (p === 'cut down on') return 'unnecessary waste';
  if (p === 'come down with') return 'a seasonal cold';
  if (p === 'run out of') return 'fresh water';
  if (p === 'get on with') return 'each other';
  if (p === 'hang out with') return 'close classmates';
  if (p.endsWith(' on')) return 'clean energy';
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
  liveExamples?: string[]
): { fullSentence: string; boldPhrase: string }[] {
  const actor = THEME_ACTORS[theme.id];

  return collocations.slice(0, 4).map((c, idx) => {
    // 1. If a real dictionary example sentence contains the exact collocation, use it!
    if (liveExamples && liveExamples.length > 0) {
      const matched = liveExamples.find(
        (ex) => ex.includes(c) && ex.length <= 140
      );
      if (matched) {
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
          ];
          return { fullSentence: frames[idx % frames.length], boldPhrase: c };
        }
        if (verbTone === 'avoid') {
          const collWords = c.trim().toLowerCase().split(/\s+/);
          const hasObj =
            collWords.length >= 2 &&
            !ADVERB_MODIFIERS.has(collWords[0]) &&
            !(collWords[0].endsWith('ly') && !ADJ_ENDING_IN_LY.has(collWords[0]));
          const optObj1 = hasObj ? '' : ' careless behaviour';
          const optObj2 = hasObj ? '' : ' harmful habits';
          const optObj3 = hasObj ? '' : ' negative impacts';
          const optObj4 = hasObj ? '' : ' common problems';
          const frames = [
            `Many ${actor.subjectPl} should ${c}${optObj1} ${actor.place}.`,
            `Most people tend to ${c}${optObj2} ${theme.contextEn}.`,
            `Authorities work hard to ${c}${optObj3} ${actor.place}.`,
            `Students learn how to ${c}${optObj4} when working ${theme.contextEn}.`,
          ];
          return { fullSentence: frames[idx % frames.length], boldPhrase: c };
        }
        const frames = [
          `In this lesson on ${theme.labelEn}, ${actor.subjectPl} are advised to ${c} ${actor.place}.`,
          `Many ${actor.subjectPl} try to ${c} in order to ${actor.goal}.`,
          `You can easily ${c} when spending time ${theme.contextEn}.`,
          `It is essential for ${actor.subjectPl} to ${c} regularly.`,
        ];
        return { fullSentence: frames[idx % frames.length], boldPhrase: c };
      }
      case 'VERB_PAST': {
        const frames = [
          `After a long effort ${actor.place}, the team ${c} safely.`,
          `Last week, ${actor.subjectPl} cheered happily when they ${c}.`,
          `Everyone felt relieved once the group ${c} ${theme.contextEn}.`,
          `Despite early difficulties, the visitors ${c} before evening.`,
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
            ]
          : [
              `The famous project ${actor.place} is ${c} across the region.`,
              `Visitors learned that the site was ${c} with great care.`,
              `The figures are ${c} to help ${actor.subjectPl} ${actor.goal}.`,
              `Many scenes were ${c} ${theme.contextEn}.`,
            ];
        return { fullSentence: frames[idx % frames.length], boldPhrase: c };
      }
      case 'VERB_ING': {
        const frames = [
          `Many ${actor.subjectPl} enjoy ${c} ${actor.place}.`,
          `By ${c}, people can ${actor.goal}.`,
          `We learned about the benefits of ${c} ${theme.contextEn}.`,
          `In fact, ${c} regularly helps ${actor.subjectPl} ${actor.goal}.`,
        ];
        return { fullSentence: frames[idx % frames.length], boldPhrase: c };
      }
      case 'AGENT_NOUN': {
        const frames = [
          `We listened carefully to ${art} ${c} who shared useful experience ${theme.contextEn}.`,
          `Every dedicated ${c} plays an important part ${actor.place}.`,
          `The local community praised the ${c} for helping ${actor.subjectPl} ${actor.goal}.`,
          `Talking with ${art} ${c} gives us practical insight ${theme.contextEn}.`,
        ];
        return { fullSentence: frames[idx % frames.length], boldPhrase: c };
      }
      case 'ADJ_PRED': {
        const frames = [
          `Conditions ${actor.place} are often ${c} for ${actor.subjectPl}.`,
          `Experts say this approach remains ${c} when trying to ${actor.goal}.`,
          `Students find the topic quite ${c} during discussions ${theme.contextEn}.`,
          `Such preparation is considered ${c} ${actor.place}.`,
        ];
        return { fullSentence: frames[idx % frames.length], boldPhrase: c };
      }
      case 'PREP_PHRASE': {
        const frames = [
          `Visitors reacted calmly ${c} as they observed the scene ${actor.place}.`,
          `People work together ${c} to ${actor.goal}.`,
          `Many daily activities happen ${c} ${theme.contextEn}.`,
          `The task was completed ${c} by ${actor.subjectPl}.`,
        ];
        return { fullSentence: frames[idx % frames.length], boldPhrase: c };
      }
      case 'ADV_PHRASE': {
        const frames = [
          `${actor.subjectPl.charAt(0).toUpperCase() + actor.subjectPl.slice(1)} should act ${c} ${actor.place}.`,
          `The task concluded ${c} after ${actor.subjectPl} worked together.`,
          `Everything is arranged ${c} ${theme.contextEn}.`,
          `Speakers respond ${c} during discussions.`,
        ];
        return { fullSentence: frames[idx % frames.length], boldPhrase: c };
      }
      case 'NOUN_WITH_DET': {
        const frames = [
          `${actor.subjectPl.charAt(0).toUpperCase() + actor.subjectPl.slice(1)} often learn about ${c} ${actor.place}.`,
          `Understanding ${c} helps people ${actor.goal}.`,
          `Our class discussed ${c} ${theme.contextEn}.`,
          `They paid close attention to ${c} throughout the project.`,
        ];
        return { fullSentence: frames[idx % frames.length], boldPhrase: c };
      }
      case 'NOUN_PLURAL': {
        if (isAffected) {
          const frames = [
            `Emergency teams responded quickly to support ${c} ${actor.place}.`,
            `Volunteers worked together to help ${c} ${theme.contextEn}.`,
            `Medical staff provided essential care for ${c} ${actor.place}.`,
            `Communities united to donate supplies to ${c} ${theme.contextEn}.`,
          ];
          return { fullSentence: frames[idx % frames.length], boldPhrase: c };
        }
        if (isNegNoun) {
          const frames = [
            `Authorities took urgent steps to address ${c} ${actor.place}.`,
            `Communities work together to reduce ${c} ${theme.contextEn}.`,
            `News reports highlighted serious ${c} ${actor.place}.`,
            `Students discussed practical ways to prevent ${c} ${theme.contextEn}.`,
          ];
          return { fullSentence: frames[idx % frames.length], boldPhrase: c };
        }
        const frames = [
          `These ${c} are especially important ${actor.place}.`,
          `${actor.subjectPl.charAt(0).toUpperCase() + actor.subjectPl.slice(1)} often value ${c} when working to ${actor.goal}.`,
          `Teachers highlighted several ${c} ${theme.contextEn}.`,
          `Managing ${c} properly benefits everyone in the group.`,
        ];
        return { fullSentence: frames[idx % frames.length], boldPhrase: c };
      }
      case 'NOUN_UNCOUNTABLE': {
        if (isNegNoun) {
          const frames = [
            `Effective measures are needed to reduce ${c} ${actor.place}.`,
            `Our class studied the causes and effects of ${c} ${theme.contextEn}.`,
            `Raising public awareness helps communities tackle ${c} ${actor.place}.`,
            `Experts explained how to limit ${c} in modern society.`,
          ];
          return { fullSentence: frames[idx % frames.length], boldPhrase: c };
        }
        const frames = [
          `Proper attention to ${c} helps ${actor.subjectPl} ${actor.goal}.`,
          `In modern society, ${c} plays a vital role ${actor.place}.`,
          `Our discussion focused on ${c} ${theme.contextEn}.`,
          `Experts emphasize the value of ${c} in everyday life.`,
        ];
        return { fullSentence: frames[idx % frames.length], boldPhrase: c };
      }
      case 'NOUN_SINGULAR':
      default: {
        if (isNegNoun) {
          const frames = [
            `${actor.subjectPl.charAt(0).toUpperCase() + actor.subjectPl.slice(1)} took quick action to deal with ${art} ${c} ${actor.place}.`,
            `News reports warned residents about ${art} ${c} ${theme.contextEn}.`,
            `People learned how to prepare for ${art} ${c} ${actor.place}.`,
            `The lesson explained the impact of ${art} ${c} ${theme.contextEn}.`,
          ];
          return { fullSentence: frames[idx % frames.length], boldPhrase: c };
        }
        const frames = [
          `Having ${art} ${c} makes it easier to ${actor.goal} ${actor.place}.`,
          `${actor.subjectPl.charAt(0).toUpperCase() + actor.subjectPl.slice(1)} often rely on this ${c} ${theme.contextEn}.`,
          `The article introduced ${art} ${c} used widely ${actor.place}.`,
          `Choosing the right ${c} is helpful when people want to ${actor.goal}.`,
        ];
        return { fullSentence: frames[idx % frames.length], boldPhrase: c };
      }
    }
  });
}

/**
 * Generate a complete, topic-matched, grade-calibrated DictionaryExercise for ANY keyword
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
  const sourceId = resolveDictionarySourceId(dictionarySource);
  const sourceInfo = DICTIONARY_SOURCES[sourceId];

  // 1. Resolve IPA & dictionary metadata (prefer active Grade & Unit for multi-unit keywords like "career")
  const ipaDetails: IPADetails = deriveIPADetails(cleanWord);
  const currMatch = findCurriculumWord(cleanWord, grade, unit);
  const oxfordMatch = findOxfordWord(cleanWord);
  const theme = resolveTheme(unitTitle, unit, grade, currMatch?.unitTitle);

  // 2. Resolve curated template OR synthesize keyword+topic entry
  const curated = CURATED_TEMPLATES[cleanWord];

  let partOfSpeech =
    curated?.pos || liveData?.pos || currMatch?.pos || oxfordMatch?.pos || 'noun';
  let grammarTag =
    curated?.grammarTag ||
    liveData?.grammarTag ||
    (partOfSpeech.includes('v')
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

  let examples = curated?.examples || [];
  let collocations = curated?.collocations || [];

  if (!curated) {
    // Collect candidate collocations from curriculum, live Oxford pairs, or synthesize
    const rawColls: string[] = [];
    if (currMatch?.keyCollocations && currMatch.keyCollocations.length > 0) {
      rawColls.push(...currMatch.keyCollocations);
    }
    if (liveData?.examplePairs && liveData.examplePairs.length > 0) {
      for (const pair of liveData.examplePairs) {
        if (pair.boldPhrase) rawColls.push(pair.boldPhrase);
      }
    }
    if (rawColls.length === 0) {
      if (partOfSpeech.includes('verb') && !partOfSpeech.includes('noun')) {
        rawColls.push(`learn to ${cleanWord}`, `${cleanWord} regularly`, `help ${cleanWord}`);
      } else if (partOfSpeech.includes('adj') && !partOfSpeech.includes('noun')) {
        rawColls.push(`very ${cleanWord}`, `quite ${cleanWord}`, `remain ${cleanWord}`);
      } else if (partOfSpeech.includes('adv')) {
        rawColls.push(`${cleanWord}`);
      } else {
        rawColls.push(`important ${cleanWord}`, `modern ${cleanWord}`, `useful ${cleanWord}`);
      }
    }

    collocations = fitCollocationsToMaxWords(rawColls, cleanWord, partOfSpeech, maxWords);

    // Prefer live examplePairs if the boldPhrase survived maxWords filtering
    const usedPairs: { fullSentence: string; boldPhrase: string }[] = [];
    if (liveData?.examplePairs) {
      for (const c of collocations) {
        const foundPair = liveData.examplePairs.find(
          (p) => p.boldPhrase.toLowerCase() === c.toLowerCase() && p.fullSentence.includes(c)
        );
        if (foundPair) {
          usedPairs.push({ fullSentence: foundPair.fullSentence, boldPhrase: c });
        }
      }
    }

    if (usedPairs.length >= collocations.length) {
      examples = usedPairs.slice(0, 4);
    } else {
      const synthesized = buildTopicExamples(cleanWord, collocations, partOfSpeech, theme, liveData?.examples);
      examples = synthesized;
    }
  } else {
    // Respect maxWords in both collocations and examples
    const validCuratedColls = collocations.filter((c) => c.trim().split(/\s+/).length <= maxWords);
    const validCuratedExamples = examples.filter((e) => e.boldPhrase.trim().split(/\s+/).length <= maxWords);
    if (validCuratedColls.length >= 2) {
      collocations = validCuratedColls;
    } else {
      collocations = fitCollocationsToMaxWords(collocations, cleanWord, partOfSpeech, maxWords);
    }
    if (validCuratedExamples.length >= 2) {
      examples = validCuratedExamples;
    } else {
      examples = buildTopicExamples(cleanWord, collocations, partOfSpeech, theme, liveData?.examples);
    }
  }

  // 3. Generate Grade + Topic + Keyword-specific Questions
  let questions: ExerciseQuestionItem[] = [];
  const resolvedUnitTitle = unitTitle || currMatch?.unitTitle || theme.labelVi;
  const meaningVi = currMatch?.meaningVi || oxfordMatch?.meaningVi || cleanWord;

  if (curated && curated.gradeQuestions && curated.gradeQuestions[grade]) {
    const curatedPool = curated.gradeQuestions[grade].filter(
      (q) => q.answer.split(/\s+/).length <= maxWords
    );
    const safeVariation = Math.max(0, Math.floor(variationIndex));

    if (safeVariation === 0) {
      questions = curatedPool.slice(0, questionCount).map((q, idx) => ({
        ...q,
        questionNumber: startQuestionNum + idx,
      }));
    } else if (safeVariation === 1 && curatedPool.length > questionCount) {
      // Surface previously unseen curated questions first, then synthesize extras if needed
      questions = curatedPool.slice(questionCount, questionCount * 2).map((q, idx) => ({
        ...q,
        questionNumber: startQuestionNum + idx,
      }));
    }

    // Fill initial extra slots or generate a completely fresh set when switching questions
    if (questions.length < questionCount) {
      const usedAnswers = new Set(questions.map((q) => q.answer.toLowerCase()));
      const remainingColls = collocations.filter((c) => !usedAnswers.has(c.toLowerCase()));
      const extra = buildSynthesizedQuestions(
        cleanWord,
        partOfSpeech,
        grade,
        remainingColls.length > 0 ? remainingColls : collocations,
        meaningVi,
        theme,
        resolvedUnitTitle,
        startQuestionNum + questions.length,
        questionCount - questions.length,
        safeVariation
      );
      questions = [...questions, ...extra];
    }
  } else {
    questions = buildSynthesizedQuestions(
      cleanWord,
      partOfSpeech,
      grade,
      collocations,
      meaningVi,
      theme,
      resolvedUnitTitle,
      startQuestionNum,
      questionCount,
      Math.max(0, Math.floor(variationIndex))
    );
  }

  const numWordStr = maxWords === 3 ? 'THREE' : maxWords === 2 ? 'TWO' : `${maxWords}`;
  const lastQuestionNum = startQuestionNum + Math.max(questions.length, 1) - 1;

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
    instructionEn: `Look at the entry of the word "${cleanWord}" in a dictionary. Complete the sentences with phrases from the entry. Do not use more than ${numWordStr} words for each phrase.`,
    instructionVi: `(Từ câu ${startQuestionNum} đến câu ${lastQuestionNum}, dựa vào bảng bên dưới, thí sinh chọn cụm từ thích hợp (không quá ${maxWords} từ) để hoàn chỉnh mỗi câu và viết câu trả lời vào Phần ANSWERS.)`,
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
    const coll = effectiveColls[(i + variationIndex) % effectiveColls.length];
    const phraseType = detectPhraseType(coll, pos);
    const qNum = startNum + i;
    const art = chooseArticle(coll);
    const variantIdx = (seed + i + variationIndex * 2) % 3;
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

    const frame = selectGradeTopicFrame(
      phraseType,
      grade,
      variantIdx,
      art,
      actor,
      theme,
      isNegNoun,
      verbTone,
      verbHasObject,
      phrasalObj,
      isAffected
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
  verbTone: 'normal' | 'destructive' | 'avoid' = 'normal',
  verbHasObject: boolean = false,
  phrasalObj: string = '',
  isAffected: boolean = false
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

    const byGrade: Record<number, QuestionFrameSpec[]> = {
      6: [
        {
          before: `In the topic of ${theme.labelEn}, ${actor.subjectPl} should `,
          after: ` ${actor.place}.`,
          grammarNote: 'Cấu trúc động từ khiếm khuyết "should + V nguyên mẫu" ở thì Hiện tại đơn.',
          viPattern: (m, t) => `Trong chủ đề ${t}, ${actor.viSubject} nên "${m}" ${actor.viPlace}.`,
        },
        {
          before: `Every day, ${actor.subjectPl} should `,
          after: ` so they can ${actor.goal}.`,
          grammarNote: 'Cấu trúc động từ khiếm khuyết "should + V nguyên mẫu".',
          viPattern: (m) => `Mỗi ngày, ${actor.viSubject} nên "${m}" để phục vụ tốt cho hoạt động ${actor.viPlace}.`,
        },
        {
          before: `At present, ${actor.subjectSg} reminds everyone to `,
          after: ` ${actor.place}.`,
          grammarNote: 'Cấu trúc câu đơn với động từ nguyên mẫu có "to" (remind sb to + V).',
          viPattern: (m) => `Hiện nay, mọi người được nhắc nhở cần "${m}" ${actor.viPlace}.`,
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
          before: `If ${actor.subjectPl} cooperate well, they will easily `,
          after: ` and ${actor.goal}.`,
          grammarNote: 'Câu điều kiện / tương lai đơn với "will + trạng từ + V nguyên mẫu".',
          viPattern: (m) => `Nếu hợp tác tốt, ${actor.viSubject} sẽ dễ dàng "${m}" ${actor.viPlace}.`,
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
          before: `When ${actor.subjectPl} face new tasks ${theme.contextEn}, they are expected to `,
          after: ` responsibly.`,
          grammarNote: 'Câu phức với mệnh đề thời gian "When" và cấu trúc bị động "are expected to + V".',
          viPattern: (m) => `Khi đối mặt với nhiệm vụ mới ${actor.viPlace}, ${actor.viSubject} cần "${m}" một cách có trách nhiệm.`,
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
          before: `Specialists working ${theme.contextEn} recommend that ${actor.subjectPl} proactively `,
          after: ` in order to ${actor.goal} sustainably.`,
          grammarNote: 'Cấu trúc giả định thức nâng cao "recommend that S + (should) + V nguyên mẫu".',
          viPattern: (m) => `Các chuyên gia khuyến nghị ${actor.viSubject} chủ động "${m}" để phát triển bền vững ${actor.viPlace}.`,
        },
        {
          before: `To resolve practical challenges ${actor.place}, those who wish to ${actor.goal} must persistently `,
          after: ` with clear discipline.`,
          grammarNote: 'Câu phức chứa mệnh đề quan hệ "who" và động từ nguyên mẫu sau "must + trạng từ".',
          viPattern: (m) => `Để giải quyết các thách thức thực tiễn ${actor.viPlace}, mọi người phải kiên trì "${m}".`,
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
            ? `Some old houses `
            : `Many famous places `,
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
          before: `Every young `,
          after: ` tries to ${actor.goal} with joy.`,
          grammarNote: 'Cụm danh từ chỉ người số ít đứng sau từ hạn định "Every" và tính từ "young".',
          viPattern: (m) => `Mỗi người (${m}) đều cố gắng thực hiện tốt công việc ${actor.viPlace}.`,
        },
        {
          before: `In our project, the friendly `,
          after: ` gave useful help to everyone.`,
          grammarNote: 'Cụm danh từ chỉ người làm chủ ngữ số ít sau "the friendly".',
          viPattern: (m) => `Trong dự án, người (${m}) thân thiện đã hỗ trợ mọi người rất nhiều ${actor.viPlace}.`,
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
          before: `Yesterday, an experienced `,
          after: ` showed ${actor.subjectPl} how to ${actor.goal}.`,
          grammarNote: 'Cụm danh từ chỉ người làm chủ ngữ trong thì Quá khứ đơn.',
          viPattern: (m) => `Hôm qua, một người (${m}) giàu kinh nghiệm đã hướng dẫn mọi người ${actor.viPlace}.`,
        },
      ],
      8: [
        {
          before: `Although the task ${actor.place} was demanding, the dedicated `,
          after: ` still managed to ${actor.goal}.`,
          grammarNote: 'Câu phức nhượng bộ với "Although", cụm danh từ chỉ người sau "the dedicated".',
          viPattern: (m) => `Mặc dù nhiệm vụ ${actor.viPlace} đòi hỏi cao, người (${m}) tận tâm vẫn hoàn thành tốt.`,
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
          before: `The committee honoured every accomplished `,
          after: ` whose dedication helped ${actor.subjectPl} ${actor.goal}.`,
          grammarNote: 'Câu phức chứa mệnh đề quan hệ sở hữu "whose dedication...", cụm danh từ chỉ người đi sau "every accomplished".',
          viPattern: (m) => `Hội đồng đã vinh danh mỗi người (${m}) xuất sắc có đóng góp lớn ${actor.viPlace}.`,
        },
        {
          before: `According to recent studies on ${theme.labelEn}, becoming ${art} `,
          after: ` requires both specialized expertise and adaptability.`,
          grammarNote: `Cấu trúc danh động từ "becoming ${art}..." làm chủ ngữ trong câu học thuật.`,
          viPattern: (m) => `Theo các báo cáo, để trở thành một người (${m}) đòi hỏi cả chuyên môn lẫn khả năng thích ứng ${actor.viPlace}.`,
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
    const byGrade: Record<number, QuestionFrameSpec[]> = {
      6: [
        {
          before: `For many students, the activities ${actor.place} are `,
          after: ` and interesting.`,
          grammarNote: 'Cụm tính từ làm vị ngữ đứng sau động từ to be "are".',
          viPattern: (m) => `Đối với nhiều học sinh, các hoạt động ${actor.viPlace} mang tính chất "${m}" và thú vị.`,
        },
        {
          before: `Everyone feels `,
          after: ` when taking part in activities ${theme.contextEn}.`,
          grammarNote: 'Tính từ đứng sau động từ nối chỉ cảm giác "feels".',
          viPattern: (m) => `Mọi người cảm thấy "${m}" khi tham gia các hoạt động ${actor.viPlace}.`,
        },
        {
          before: `This lesson ${actor.place} looks `,
          after: ` for new learners.`,
          grammarNote: 'Tính từ đứng sau động từ nối "looks".',
          viPattern: (m) => `Bài học này có vẻ "${m}" đối với người mới học ${actor.viPlace}.`,
        },
      ],
      7: [
        {
          before: `${subjPlCap} became `,
          after: ` after joining the project ${actor.place}.`,
          grammarNote: 'Tính từ đứng sau động từ nối ở thì Quá khứ đơn "became".',
          viPattern: (m) => `${actor.viSubject} đã trở nên "${m}" sau khi tham gia dự án ${actor.viPlace}.`,
        },
        {
          before: `If we prepare carefully, the plan to ${actor.goal} will be `,
          after: ` for everyone.`,
          grammarNote: 'Câu điều kiện Loại 1 với tính từ đứng sau "will be".',
          viPattern: (m) => `Nếu chuẩn bị chu đáo, kế hoạch ${actor.viPlace} sẽ "${m}" đối với mọi người.`,
        },
        {
          before: `Many people agree that this method is more `,
          after: ` than older ways ${actor.place}.`,
          grammarNote: 'Câu ghép kết hợp so sánh tính từ sau "is more".',
          viPattern: (m) => `Nhiều người đồng ý rằng phương pháp này "${m}" hơn các cách cũ ${actor.viPlace}.`,
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
          before: `${subjPlCap} found the experience ${theme.contextEn} `,
          after: ` because it helped them ${actor.goal}.`,
          grammarNote: 'Cấu trúc "find + O + adj" kết hợp mệnh đề nguyên nhân.',
          viPattern: (m) => `${actor.viSubject} nhận thấy trải nghiệm ${actor.viPlace} thật "${m}".`,
        },
        {
          before: `Even when schedules are tight, staying `,
          after: ` allows ${actor.subjectPl} to ${actor.goal}.`,
          grammarNote: 'Cấu trúc "staying + adj" làm chủ ngữ trong câu phức với "Even when".',
          viPattern: (m) => `Ngay cả khi lịch trình bận rộn, việc giữ thái độ "${m}" vẫn rất có ích ${actor.viPlace}.`,
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
          before: `What makes initiatives ${theme.contextEn} so `,
          after: ` is their long-term benefit for future generations.`,
          grammarNote: 'Cấu trúc câu chẻ mệnh đề danh ngữ "What makes ... so [adj] is...".',
          viPattern: (m) => `Điều làm cho các sáng kiến ${actor.viPlace} trở nên "${m}" chính là lợi ích lâu dài.`,
        },
        {
          before: `Observers noted that the newly introduced system proved `,
          after: ` under demanding conditions ${actor.place}.`,
          grammarNote: 'Cấu trúc nâng cao "proved + [adj]" trong câu tường thuật.',
          viPattern: (m) => `Các nhà quan sát ghi nhận hệ thống mới đã chứng tỏ sự "${m}" ${actor.viPlace}.`,
        },
      ],
    };
    return (byGrade[grade] || byGrade[8])[variantIdx];
  }

  if (phraseType === 'PREP_PHRASE' || phraseType === 'ADV_PHRASE') {
    const byGrade: Record<number, QuestionFrameSpec[]> = {
      6: [
        {
          before: `${subjPlCap} usually work `,
          after: ` when they learn ${actor.place}.`,
          grammarNote: 'Cụm trạng ngữ/giới từ bổ nghĩa cho động từ hành động.',
          viPattern: (m) => `${actor.viSubject} thường thực hiện "${m}" khi hoạt động ${actor.viPlace}.`,
        },
        {
          before: `Everything ${actor.place} happens `,
          after: ` every week.`,
          grammarNote: 'Cụm trạng ngữ bổ nghĩa cho động từ ở thì Hiện tại đơn.',
          viPattern: (m) => `Mọi việc ${actor.viPlace} diễn ra "${m}" hàng tuần.`,
        },
        {
          before: `Children watched the scene `,
          after: ` during the school trip.`,
          grammarNote: 'Cụm trạng ngữ chỉ cách thức bổ nghĩa cho động từ.',
          viPattern: (m) => `Các em nhỏ đã theo dõi khung cảnh một cách "${m}" ${actor.viPlace}.`,
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
          before: `Although time was limited, the team operated `,
          after: ` to ${actor.goal}.`,
          grammarNote: 'Câu phức nhượng bộ với "Although", cụm trạng ngữ bổ nghĩa cho "operated".',
          viPattern: (m) => `Mặc dù thời gian có hạn, cả nhóm vẫn vận hành "${m}" ${actor.viPlace}.`,
        },
        {
          before: `While conditions were changing rapidly ${actor.place}, residents acted `,
          after: ` to stay safe.`,
          grammarNote: 'Câu phức với "While", cụm trạng ngữ bổ nghĩa cho động từ "acted".',
          viPattern: (m) => `Trong lúc tình hình thay đổi nhanh ${actor.viPlace}, người dân đã hành động "${m}".`,
        },
        {
          before: `Modern tools ${theme.contextEn} are designed to function `,
          after: ` without wasting effort.`,
          grammarNote: 'Cụm trạng ngữ bổ nghĩa cho động từ nguyên mẫu "to function".',
          viPattern: (m) => `Các công cụ hiện đại ${actor.viPlace} được thiết kế để vận hành "${m}".`,
        },
      ],
      9: [
        {
          before: `Analysts observed that modern systems ${actor.place} perform `,
          after: ` when guided by transparent regulations.`,
          grammarNote: 'Mệnh đề danh ngữ kết hợp mệnh đề trạng ngữ rút gọn, cụm trạng ngữ bổ nghĩa cho "perform".',
          viPattern: (m) => `Các nhà phân tích nhận thấy hệ thống ${actor.viPlace} vận hành "${m}" khi có quy định rõ ràng.`,
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
            before: `Everyone wants to help `,
            after: ` ${actor.place}.`,
            grammarNote: 'Cụm danh từ số nhiều làm tân ngữ chỉ đối tượng cần hỗ trợ/giải quyết.',
            viPattern: (m) => `Mọi người đều muốn hỗ trợ/khắc phục các "${m}" ${actor.viPlace}.`,
          },
          {
            before: `In our lesson, we talk about how to reduce `,
            after: ` ${theme.contextEn}.`,
            grammarNote: 'Cụm danh từ số nhiều đứng sau cụm động từ "reduce".',
            viPattern: (m) => `Trong bài học, chúng ta thảo luận cách giảm thiểu "${m}" ${actor.viPlace}.`,
          },
          {
            before: `${subjPlCap} always try to avoid `,
            after: ` ${actor.place}.`,
            grammarNote: 'Cụm danh từ số nhiều làm tân ngữ sau động từ "avoid".',
            viPattern: (m) => `${actor.viSubject} luôn cố gắng phòng tránh những "${m}" ${actor.viPlace}.`,
          },
        ],
        7: [
          {
            before: `Last month, volunteers raised money to support `,
            after: ` ${actor.place}.`,
            grammarNote: 'Cụm danh từ số nhiều làm tân ngữ trong thì Quá khứ đơn.',
            viPattern: (m) => `Tháng trước, tình nguyện viên đã quyên góp hỗ trợ "${m}" ${actor.viPlace}.`,
          },
          {
            before: `If we act responsibly, there will be fewer `,
            after: ` ${theme.contextEn}.`,
            grammarNote: 'Câu điều kiện Loại 1, cụm danh từ số nhiều đếm được sau "fewer".',
            viPattern: (m) => `Nếu hành động có trách nhiệm, sẽ có ít "${m}" hơn ${actor.viPlace}.`,
          },
          {
            before: `Our teacher showed us news photos about serious `,
            after: ` ${actor.place}.`,
            grammarNote: 'Cụm danh từ số nhiều đứng sau tính từ "serious".',
            viPattern: (m) => `Giáo viên đã cho chúng tôi xem hình ảnh về những "${m}" nghiêm trọng ${actor.viPlace}.`,
          },
        ],
        8: [
          {
            before: `Although `,
            after: ` can cause great hardship, communities often unite to recover ${actor.place}.`,
            grammarNote: 'Câu phức nhượng bộ với "Although", danh từ số nhiều làm chủ ngữ.',
            viPattern: (m) => `Mặc dù "${m}" gây nhiều khó khăn, cộng đồng vẫn đoàn kết khắc phục ${actor.viPlace}.`,
          },
          {
            before: `Emergency teams worked tirelessly to assist `,
            after: ` ${actor.place}.`,
            grammarNote: 'Cụm danh từ số nhiều làm tân ngữ sau động từ "assist".',
            viPattern: (m) => `Đội cứu hộ đã làm việc không ngừng nghỉ để hỗ trợ "${m}" ${actor.viPlace}.`,
          },
          {
            before: `If strict safety plans are followed, severe `,
            after: ` can be greatly reduced ${theme.contextEn}.`,
            grammarNote: 'Câu điều kiện Loại 1 dạng bị động với chủ ngữ số nhiều.',
            viPattern: (m) => `Nếu tuân thủ kế hoạch an toàn, các "${m}" nghiêm trọng có thể được giảm thiểu.`,
          },
        ],
        9: [
          {
            before: `Recent reports emphasize that supporting `,
            after: ` who face sudden hardship requires rapid coordination ${actor.place}.`,
            grammarNote: 'Mệnh đề danh ngữ kết hợp mệnh đề quan hệ số nhiều "who face...".',
            viPattern: (m) => `Các báo cáo nhấn mạnh việc hỗ trợ "${m}" đòi hỏi sự phối hợp khẩn trương ${actor.viPlace}.`,
          },
          {
            before: `Experts contend that ignoring recurring `,
            after: ` ${actor.place} will only worsen social and environmental challenges.`,
            grammarNote: 'Cấu trúc học thuật với danh động từ "ignoring recurring + [plural noun]".',
            viPattern: (m) => `Chuyên gia cho rằng phớt lờ những "${m}" tái diễn sẽ làm tình hình trầm trọng thêm.`,
          },
          {
            before: `Comprehensive measures aimed at preventing `,
            after: ` that disrupt daily life have been prioritized ${actor.place}.`,
            grammarNote: 'Mệnh đề quan hệ số nhiều "that disrupt..." hòa hợp động từ bị động "have been".',
            viPattern: (m) => `Các biện pháp toàn diện nhằm ngăn chặn "${m}" đã được ưu tiên ${actor.viPlace}.`,
          },
        ],
      };
      return (byGrade[grade] || byGrade[8])[variantIdx];
    }

    const byGrade: Record<number, QuestionFrameSpec[]> = {
      6: [
        {
          before: `In our school club, students often enjoy useful `,
          after: ` ${actor.place}.`,
          grammarNote: 'Cụm danh từ số nhiều đứng sau tính từ "useful" làm tân ngữ.',
          viPattern: (m) => `Trong câu lạc bộ, học sinh thường yêu thích những "${m}" hữu ích ${actor.viPlace}.`,
        },
        {
          before: `Good `,
          after: ` are very helpful for ${actor.subjectPl} ${actor.place}.`,
          grammarNote: 'Cụm danh từ số nhiều làm chủ ngữ phù hợp với động từ số nhiều "are".',
          viPattern: (m) => `Những "${m}" tốt rất hữu ích cho ${actor.viSubject} ${actor.viPlace}.`,
        },
        {
          before: `${subjPlCap} learn about many `,
          after: ` to ${actor.goal}.`,
          grammarNote: 'Cụm danh từ số nhiều đứng sau từ chỉ số lượng "many".',
          viPattern: (m) => `${actor.viSubject} tìm hiểu nhiều "${m}" để phục vụ mục tiêu ${actor.viPlace}.`,
        },
      ],
      7: [
        {
          before: `Because ${actor.subjectPl} want to ${actor.goal}, they pay attention to various `,
          after: ` ${actor.place}.`,
          grammarNote: 'Câu ghép với "Because", cụm danh từ số nhiều đứng sau "various".',
          viPattern: (m) => `Vì muốn hoàn thành tốt mục tiêu, ${actor.viSubject} chú ý tới nhiều "${m}" khác nhau ${actor.viPlace}.`,
        },
        {
          before: `These practical `,
          after: ` help ${actor.subjectPl} stay confident ${theme.contextEn}.`,
          grammarNote: 'Cụm danh từ số nhiều sau "These practical" hòa hợp với động từ số nhiều "help".',
          viPattern: (m) => `Những "${m}" thiết thực này giúp ${actor.viSubject} tự tin hơn ${actor.viPlace}.`,
        },
        {
          before: `During the lesson, our teacher compared several `,
          after: ` used ${actor.place}.`,
          grammarNote: 'Cụm danh từ số nhiều sau "several" kết hợp mệnh đề quá khứ đơn.',
          viPattern: (m) => `Trong giờ học, giáo viên đã so sánh một số "${m}" được sử dụng ${actor.viPlace}.`,
        },
      ],
      8: [
        {
          before: `Although modern life brings changes, local `,
          after: ` still play an important role ${actor.place}.`,
          grammarNote: 'Câu phức nhượng bộ với "Although", cụm danh từ số nhiều hòa hợp với "play".',
          viPattern: (m) => `Mặc dù cuộc sống hiện đại có nhiều đổi thay, các "${m}" vẫn giữ vai trò quan trọng ${actor.viPlace}.`,
        },
        {
          before: `If ${actor.subjectPl} adopt better `,
          after: `, they will find it easier to ${actor.goal}.`,
          grammarNote: 'Câu điều kiện Loại 1, cụm danh từ số nhiều làm tân ngữ sau "adopt better".',
          viPattern: (m) => `Nếu áp dụng những "${m}" tốt hơn, ${actor.viSubject} sẽ đạt hiệu quả cao hơn ${actor.viPlace}.`,
        },
        {
          before: `Several `,
          after: ` have been carefully improved to support ${actor.subjectPl} ${actor.place}.`,
          grammarNote: 'Thể bị động Hiện tại hoàn thành với chủ ngữ số nhiều "Several ... have been".',
          viPattern: (m) => `Nhiều "${m}" đã được cải thiện cẩn thận để hỗ trợ ${actor.viSubject} ${actor.viPlace}.`,
        },
      ],
      9: [
        {
          before: `Recent surveys indicate that well-designed `,
          after: ` that address real community needs significantly help ${actor.subjectPl} ${actor.goal}.`,
          grammarNote: 'Mệnh đề danh ngữ kết hợp mệnh đề quan hệ số nhiều "that address..." và động từ "help".',
          viPattern: (m) => `Các khảo sát cho thấy những "${m}" được thiết kế tốt giúp ích rất lớn cho ${actor.viSubject} ${actor.viPlace}.`,
        },
        {
          before: `Experts contend that neglecting essential `,
          after: ` ${actor.place} may hinder sustainable progress ${theme.contextEn}.`,
          grammarNote: 'Cấu trúc học thuật với danh động từ "neglecting essential + [plural noun]".',
          viPattern: (m) => `Các chuyên gia cho rằng việc bỏ qua những "${m}" thiết yếu ${actor.viPlace} có thể cản trở sự phát triển.`,
        },
        {
          before: `Diverse `,
          after: ` which were documented ${actor.place} reflect the richness of human experience.`,
          grammarNote: 'Mệnh đề quan hệ bị động số nhiều "which were documented" hòa hợp động từ chính "reflect".',
          viPattern: (m) => `Những "${m}" đa dạng được ghi nhận ${actor.viPlace} phản ánh sự phong phú của đời sống.`,
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
            before: `Policymakers emphasize that unchecked `,
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
          before: `${subjSgCap} needs proper `,
          after: ` to ${actor.goal}.`,
          grammarNote: 'Danh từ không đếm được làm tân ngữ sau tính từ "proper".',
          viPattern: (m) => `Cần có "${m}" phù hợp để đạt kết quả tốt ${actor.viPlace}.`,
        },
      ],
      7: [
        {
          before: `Good `,
          after: ` helps ${actor.subjectPl} ${actor.goal} because it keeps everything balanced.`,
          grammarNote: 'Danh từ không đếm được làm chủ ngữ số ít ("helps") trong câu ghép liên từ "because".',
          viPattern: (m) => `"${m}" tốt giúp ${actor.viSubject} thực hiện hiệu quả các hoạt động ${actor.viPlace}.`,
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
          before: `Although technology continues to advance, sustainable `,
          after: ` remains crucial ${actor.place}.`,
          grammarNote: 'Câu phức nhượng bộ với "Although", danh từ không đếm được kết hợp động từ số ít "remains".',
          viPattern: (m) => `Mặc dù công nghệ không ngừng phát triển, "${m}" bền vững vẫn giữ vai trò thiết yếu ${actor.viPlace}.`,
        },
        {
          before: `If society invests more in `,
          after: `, communities will successfully ${actor.goal}.`,
          grammarNote: 'Câu điều kiện Loại 1, danh từ không đếm được đứng sau "invests more in".',
          viPattern: (m) => `Nếu xã hội đầu tư nhiều hơn vào "${m}", cộng đồng sẽ gặt hái thành công ${actor.viPlace}.`,
        },
        {
          before: `Practical `,
          after: ` is widely promoted ${actor.place} to benefit future generations.`,
          grammarNote: 'Thể bị động Hiện tại đơn với chủ ngữ danh từ không đếm được ("is widely promoted").',
          viPattern: (m) => `"${m}" thiết thực đang được thúc đẩy rộng rãi ${actor.viPlace} vì thế hệ tương lai.`,
        },
      ],
      9: [
        {
          before: `Policymakers emphasize that responsible `,
          after: ` that balances growth and preservation is vital ${actor.place}.`,
          grammarNote: 'Câu phức với mệnh đề danh ngữ và mệnh đề quan hệ số ít ("that balances ... is").',
          viPattern: (m) => `Các nhà hoạch định nhấn mạnh rằng "${m}" có trách nhiệm đóng vai trò sống còn ${actor.viPlace}.`,
        },
        {
          before: `A lack of reliable `,
          after: ` ${theme.contextEn} can undermine long-term efforts to ${actor.goal}.`,
          grammarNote: 'Cụm danh từ không đếm được đứng sau cấu trúc học thuật "A lack of reliable".',
          viPattern: (m) => `Việc thiếu "${m}" đáng tin cậy ${actor.viPlace} có thể ảnh hưởng tới nỗ lực lâu dài.`,
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
          before: `Our class is reading a story about ${art} `,
          after: ` ${theme.contextEn}.`,
          grammarNote: `Thì Hiện tại tiếp diễn kết hợp cụm danh từ số ít sau mạo từ "${art}".`,
          viPattern: (m) => `Lớp chúng tôi đang đọc câu chuyện về một "${m}" ${actor.viPlace}.`,
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
          after: ` strikes, they can stay much safer.`,
          grammarNote: `Câu điều kiện Loại 1, cụm danh từ số ít làm chủ ngữ của "strikes".`,
          viPattern: (m) => `Nếu nhận được cảnh báo trước khi một "${m}" ập đến, mọi người sẽ an toàn hơn.`,
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
          after: ` can strike unexpectedly, local authorities train residents to respond calmly.`,
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
          before: `Emergency responders quickly evaluated the impact of this serious `,
          after: ` ${theme.contextEn}.`,
          grammarNote: 'Cụm danh từ số ít đứng sau tính từ "this serious" ở thì Quá khứ đơn.',
          viPattern: (m) => `Lực lượng ứng cứu nhanh chóng đánh giá tác động của "${m}" nghiêm trọng này ${actor.viPlace}.`,
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
          before: `The severe `,
          after: ` which occurred ${actor.place} prompted authorities to strengthen preventive measures.`,
          grammarNote: 'Mệnh đề quan hệ xác định "which occurred..." kết hợp cụm danh từ số ít.',
          viPattern: (m) => `"${m}" nghiêm trọng xảy ra ${actor.viPlace} đã thúc đẩy chính quyền tăng cường biện pháp phòng ngừa.`,
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
        before: `Our class is looking at ${art} `,
        after: ` to ${actor.goal}.`,
        grammarNote: `Thì Hiện tại tiếp diễn kết hợp cụm danh từ số ít sau mạo từ "${art}".`,
        viPattern: (m) => `Lớp chúng tôi đang xem xét một "${m}" để hỗ trợ mục tiêu ${actor.viPlace}.`,
      },
      {
        before: `Having ${art} `,
        after: ` plays an important part ${actor.place}.`,
        grammarNote: `Cụm danh từ đếm được số ít đi sau mạo từ "${art}" trong cụm chủ ngữ danh động từ.`,
        viPattern: (m) => `Việc có một "${m}" đóng vai trò quan trọng ${actor.viPlace}.`,
      },
    ],
    7: [
      {
        before: `Our group chose ${art} `,
        after: ` because it was suitable for activities ${actor.place}.`,
        grammarNote: `Câu ghép liên từ "because" ở thì Quá khứ đơn, cụm danh từ số ít sau mạo từ "${art}".`,
        viPattern: (m) => `Nhóm chúng tôi đã chọn một "${m}" vì nó rất phù hợp với hoạt động ${actor.viPlace}.`,
      },
      {
        before: `If you plan ${art} `,
        after: ` carefully, you will easily ${actor.goal}.`,
        grammarNote: `Câu điều kiện Loại 1, cụm danh từ số ít làm tân ngữ sau "plan ${art}".`,
        viPattern: (m) => `Nếu chuẩn bị chu đáo cho một "${m}", bạn sẽ dễ dàng hoàn thành mục tiêu ${actor.viPlace}.`,
      },
      {
        before: `Having ${art} `,
        after: ` is far better than working without proper preparation ${actor.place}.`,
        grammarNote: `Cụm danh động từ làm chủ ngữ với mạo từ "${art}" kết hợp so sánh hơn.`,
        viPattern: (m) => `Việc có một "${m}" tốt hơn nhiều so với làm việc thiếu chuẩn bị ${actor.viPlace}.`,
      },
    ],
    8: [
      {
        before: `Although resources were limited, ${actor.subjectPl} still developed ${art} `,
        after: ` to ${actor.goal}.`,
        grammarNote: `Câu phức nhượng bộ với "Although", cụm danh từ số ít sau "${art}".`,
        viPattern: (m) => `Mặc dù nguồn lực còn hạn chế, ${actor.viSubject} vẫn xây dựng được một "${m}" ${actor.viPlace}.`,
      },
      {
        before: `When ${actor.subjectPl} rely on ${art} `,
        after: ` effectively, tasks ${actor.place} are completed smoothly.`,
        grammarNote: `Câu phức với "When" và thể bị động, cụm danh từ số ít sau "${art}".`,
        viPattern: (m) => `Khi ${actor.viSubject} phát huy hiệu quả "${m}", công việc ${actor.viPlace} diễn ra suôn sẻ.`,
      },
      {
        before: `This remarkable `,
        after: ` has gained wide attention ${theme.contextEn} to ${actor.goal}.`,
        grammarNote: 'Thì Hiện tại hoàn thành với chủ ngữ số ít "This remarkable ... has gained".',
        viPattern: (m) => `"${m}" đáng chú ý này đã nhận được nhiều sự quan tâm ${actor.viPlace}.`,
      },
    ],
    9: [
      {
        before: `Analysts emphasize that choosing ${art} `,
        after: ` that aligns with practical goals is essential ${actor.place}.`,
        grammarNote: `Mệnh đề danh ngữ kết hợp mệnh đề quan hệ xác định "that aligns...", cụm danh từ số ít sau "${art}".`,
        viPattern: (m) => `Các chuyên gia nhấn mạnh việc lựa chọn một "${m}" phù hợp mục tiêu thực tiễn là rất thiết yếu ${actor.viPlace}.`,
      },
      {
        before: `Only by establishing ${art} `,
        after: ` can communities sustainably ${actor.goal} in a rapidly changing world.`,
        grammarNote: `Cấu trúc đảo ngữ nhấn mạnh "Only by + V-ing + can S + V" chuẩn đề thi lớp 10, điền cụm danh từ sau "${art}".`,
        viPattern: (m) => `Chỉ bằng cách thiết lập một "${m}" phù hợp, cộng đồng mới có thể phát triển bền vững ${actor.viPlace}.`,
      },
      {
        before: `The impressive `,
        after: ` which was highlighted ${actor.place} has inspired how people ${actor.goal}.`,
        grammarNote: 'Mệnh đề quan hệ bị động "which was highlighted..." hòa hợp động từ Hiện tại hoàn thành "has inspired".',
        viPattern: (m) => `"${m}" ấn tượng được đề cập ${actor.viPlace} đã truyền cảm hứng tích cực cho mọi người.`,
      },
    ],
  };
  return (byGrade[grade] || byGrade[8])[variantIdx];
}

