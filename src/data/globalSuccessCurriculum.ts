export interface CurriculumUnit {
  unit: number;
  title: string;
  themeVi: string;
  suggestedKeywords: {
    word: string;
    pos: string;
    meaningVi: string;
    keyCollocations: string[];
  }[];
}

export interface GradeCurriculum {
  grade: number;
  gradeName: string;
  units: CurriculumUnit[];
}

export const GLOBAL_SUCCESS_CURRICULUM: GradeCurriculum[] = [
  {
    grade: 6,
    gradeName: 'Lớp 6 - Global Success',
    units: [
      {
        unit: 1,
        title: 'My New School',
        themeVi: 'Trường học mới của tôi',
        suggestedKeywords: [
          { word: 'uniform', pos: 'noun', meaningVi: 'đồng phục', keyCollocations: ['wear school uniform', 'school uniform', 'put on uniform'] },
          { word: 'classmate', pos: 'noun', meaningVi: 'bạn cùng lớp', keyCollocations: ['helpful classmate', 'new classmate', 'classmate of mine'] },
          { word: 'compass', pos: 'noun', meaningVi: 'com-pa / la bàn', keyCollocations: ['pair of compasses', 'use a compass', 'magnetic compass'] },
          { word: 'calculator', pos: 'noun', meaningVi: 'máy tính bỏ túi', keyCollocations: ['pocket calculator', 'use a calculator', 'scientific calculator'] },
          { word: 'activity', pos: 'noun', meaningVi: 'hoạt động', keyCollocations: ['outdoor activities', 'school activities', 'after-school activity'] },
        ],
      },
      {
        unit: 2,
        title: 'My House',
        themeVi: 'Ngôi nhà của tôi',
        suggestedKeywords: [
          { word: 'countryside', pos: 'noun', meaningVi: 'vùng nông thôn', keyCollocations: ['in the countryside', 'peaceful countryside', 'move to the countryside'] },
          { word: 'furniture', pos: 'noun', meaningVi: 'đồ đạc nội thất', keyCollocations: ['piece of furniture', 'wooden furniture', 'modern furniture'] },
          { word: 'cupboard', pos: 'noun', meaningVi: 'tủ chén, tủ đựng đồ', keyCollocations: ['kitchen cupboard', 'store in a cupboard', 'open the cupboard'] },
          { word: 'apartment', pos: 'noun', meaningVi: 'căn hộ', keyCollocations: ['modern apartment', 'rent an apartment', 'apartment building'] },
        ],
      },
      {
        unit: 3,
        title: 'My Friends',
        themeVi: 'Những người bạn của tôi',
        suggestedKeywords: [
          { word: 'caring', pos: 'adjective', meaningVi: 'chu đáo, biết quan tâm', keyCollocations: ['caring friend', 'caring attitude', 'caring person'] },
          { word: 'confident', pos: 'adjective', meaningVi: 'tự tin', keyCollocations: ['feel confident', 'confident smile', 'confident in speaking'] },
          { word: 'creative', pos: 'adjective', meaningVi: 'sáng tạo', keyCollocations: ['creative ideas', 'highly creative', 'creative thinking'] },
          { word: 'reliable', pos: 'adjective', meaningVi: 'đáng tin cậy', keyCollocations: ['reliable friend', 'reliable information', 'completely reliable'] },
        ],
      },
      {
        unit: 4,
        title: 'My Neighbourhood',
        themeVi: 'Khu dân cư của tôi',
        suggestedKeywords: [
          { word: 'neighbourhood', pos: 'noun', meaningVi: 'khu vực lân cận, xóm giềng', keyCollocations: ['friendly neighbourhood', 'in the neighbourhood', 'quiet neighbourhood'] },
          { word: 'convenient', pos: 'adjective', meaningVi: 'thuận tiện', keyCollocations: ['convenient location', 'highly convenient', 'convenient for travel'] },
          { word: 'historic', pos: 'adjective', meaningVi: 'có tính lịch sử', keyCollocations: ['historic building', 'historic town', 'historic site'] },
          { word: 'suburb', pos: 'noun', meaningVi: 'khu ngoại ô', keyCollocations: ['live in the suburbs', 'leafy suburb', 'outer suburbs'] },
        ],
      },
      {
        unit: 5,
        title: 'Natural Wonders of the World',
        themeVi: 'Kỳ quan thiên nhiên thế giới',
        suggestedKeywords: [
          { word: 'waterfall', pos: 'noun', meaningVi: 'thác nước', keyCollocations: ['magnificent waterfall', 'spectacular waterfall', 'visit a waterfall'] },
          { word: 'desert', pos: 'noun', meaningVi: 'sa mạc', keyCollocations: ['cross the desert', 'vast desert', 'Sahara desert'] },
          { word: 'wonder', pos: 'noun', meaningVi: 'kỳ quan / điều kỳ diệu', keyCollocations: ['natural wonder', 'wonder of the world', 'sense of wonder'] },
          { word: 'landscape', pos: 'noun', meaningVi: 'phong cảnh', keyCollocations: ['breathtaking landscape', 'natural landscape', 'mountain landscape'] },
        ],
      },
      {
        unit: 6,
        title: 'Our Tet Holiday',
        themeVi: 'Ngày tết của chúng ta',
        suggestedKeywords: [
          { word: 'celebrate', pos: 'verb', meaningVi: 'ăn mừng, kỷ niệm', keyCollocations: ['celebrate Tet', 'celebrate with family', 'celebrate the New Year'] },
          { word: 'tradition', pos: 'noun', meaningVi: 'truyền thống', keyCollocations: ['family tradition', 'keep the tradition', 'long-standing tradition'] },
          { word: 'decoration', pos: 'noun', meaningVi: 'đồ trang trí', keyCollocations: ['put up decorations', 'colourful decorations', 'New Year decoration'] },
          { word: 'gathering', pos: 'noun', meaningVi: 'buổi sum họp gia đình', keyCollocations: ['family gathering', 'social gathering', 'annual gathering'] },
        ],
      },
      {
        unit: 7,
        title: 'Television',
        themeVi: 'Truyền hình',
        suggestedKeywords: [
          { word: 'educational', pos: 'adjective', meaningVi: 'có tính giáo dục', keyCollocations: ['educational programme', 'educational channel', 'highly educational'] },
          { word: 'broadcast', pos: 'verb', meaningVi: 'phát sóng', keyCollocations: ['broadcast live', 'broadcast on television', 'regularly broadcast'] },
          { word: 'audience', pos: 'noun', meaningVi: 'khán giả', keyCollocations: ['target audience', 'attract an audience', 'large audience'] },
          { word: 'documentary', pos: 'noun', meaningVi: 'phim tài liệu', keyCollocations: ['wildlife documentary', 'nature documentary', 'watch a documentary'] },
        ],
      },
      {
        unit: 8,
        title: 'Sports and Games',
        themeVi: 'Thể thao và trò chơi',
        suggestedKeywords: [
          { word: 'equipment', pos: 'noun', meaningVi: 'dụng cụ, thiết bị', keyCollocations: ['sports equipment', 'protective equipment', 'gym equipment'] },
          { word: 'tournament', pos: 'noun', meaningVi: 'giải đấu', keyCollocations: ['football tournament', 'compete in a tournament', 'win a tournament'] },
          { word: 'champion', pos: 'noun', meaningVi: 'nhà vô địch', keyCollocations: ['world champion', 'defending champion', 'become champion'] },
          { word: 'medal', pos: 'noun', meaningVi: 'huy chương', keyCollocations: ['gold medal', 'win a medal', 'awarded a medal'] },
        ],
      },
      {
        unit: 9,
        title: 'Cities of the World',
        themeVi: 'Các thành phố trên thế giới',
        suggestedKeywords: [
          { word: 'landmark', pos: 'noun', meaningVi: 'danh thắng, công trình biểu tượng', keyCollocations: ['famous landmark', 'historic landmark', 'iconic landmark'] },
          { word: 'palace', pos: 'noun', meaningVi: 'cung điện', keyCollocations: ['royal palace', 'magnificent palace', 'visit the palace'] },
          { word: 'attraction', pos: 'noun', meaningVi: 'điểm thu hút du lịch', keyCollocations: ['tourist attraction', 'popular attraction', 'top attraction'] },
        ],
      },
      {
        unit: 10,
        title: 'Our Houses in the Future',
        themeVi: 'Ngôi nhà tương lai',
        suggestedKeywords: [
          { word: 'appliance', pos: 'noun', meaningVi: 'thiết bị gia dụng', keyCollocations: ['household appliances', 'electrical appliances', 'smart appliance'] },
          { word: 'energy', pos: 'noun', meaningVi: 'năng lượng', keyCollocations: ['solar energy', 'save energy', 'renewable energy'] },
          { word: 'automatic', pos: 'adjective', meaningVi: 'tự động', keyCollocations: ['automatic doors', 'fully automatic', 'automatic machine'] },
        ],
      },
      {
        unit: 11,
        title: 'Our Greener World',
        themeVi: 'Thế giới xanh hơn của chúng ta',
        suggestedKeywords: [
          { word: 'recycle', pos: 'verb', meaningVi: 'tái chế', keyCollocations: ['recycle plastic bottles', 'recycle waste', 'easy to recycle'] },
          { word: 'environment', pos: 'noun', meaningVi: 'môi trường', keyCollocations: ['protect the environment', 'harmful to the environment', 'natural environment'] },
          { word: 'pollution', pos: 'noun', meaningVi: 'sự ô nhiễm', keyCollocations: ['air pollution', 'water pollution', 'cause serious pollution'] },
          { word: 'container', pos: 'noun', meaningVi: 'hộp/thùng chứa', keyCollocations: ['reusable container', 'plastic container', 'storage container'] },
        ],
      },
      {
        unit: 12,
        title: 'Robots',
        themeVi: 'Người máy',
        suggestedKeywords: [
          { word: 'household', pos: 'noun', meaningVi: 'hộ gia đình', keyCollocations: ['household chores', 'household robot', 'household items'] },
          { word: 'rescue', pos: 'verb', meaningVi: 'giải cứu', keyCollocations: ['rescue workers', 'rescue people', 'search and rescue'] },
          { word: 'recognize', pos: 'verb', meaningVi: 'nhận diện, nhận biết', keyCollocations: ['recognize human voice', 'easily recognize', 'face recognition'] },
        ],
      },
    ],
  },
  {
    grade: 7,
    gradeName: 'Lớp 7 - Global Success',
    units: [
      {
        unit: 1,
        title: 'Hobbies',
        themeVi: 'Sở thích',
        suggestedKeywords: [
          { word: 'patience', pos: 'noun', meaningVi: 'sự kiên nhẫn', keyCollocations: ['require great patience', 'have patience', 'lose patience'] },
          { word: 'benefit', pos: 'noun', meaningVi: 'lợi ích', keyCollocations: ['health benefits', 'bring many benefits', 'reap the benefit'] },
          { word: 'creativity', pos: 'noun', meaningVi: 'sự sáng tạo', keyCollocations: ['develop creativity', 'artistic creativity', 'spark creativity'] },
          { word: 'hobby', pos: 'noun', meaningVi: 'sở thích', keyCollocations: ['pursue a hobby', 'favourite hobby', 'take up a hobby'] },
        ],
      },
      {
        unit: 2,
        title: 'Healthy Living',
        themeVi: 'Lối sống lành mạnh',
        suggestedKeywords: [
          { word: 'lifestyle', pos: 'noun', meaningVi: 'lối sống', keyCollocations: ['healthy lifestyle', 'lead a healthy lifestyle', 'sedentary lifestyle'] },
          { word: 'habit', pos: 'noun', meaningVi: 'thói quen', keyCollocations: ['eating habits', 'break the habit', 'develop good habits', 'let it become a habit'] },
          { word: 'diet', pos: 'noun', meaningVi: 'chế độ ăn uống', keyCollocations: ['balanced diet', 'healthy diet', 'go on a diet'] },
          { word: 'energy', pos: 'noun', meaningVi: 'năng lượng', keyCollocations: ['full of energy', 'boost energy levels', 'consume energy'] },
          { word: 'sunburn', pos: 'noun', meaningVi: 'cháy nắng', keyCollocations: ['prevent sunburn', 'severe sunburn', 'treat sunburn'] },
        ],
      },
      {
        unit: 3,
        title: 'Community Service',
        themeVi: 'Dịch vụ cộng đồng',
        suggestedKeywords: [
          { word: 'community', pos: 'noun', meaningVi: 'cộng đồng', keyCollocations: ['local community', 'community service', 'member of the community'] },
          { word: 'volunteer', pos: 'noun/verb', meaningVi: 'tình nguyện viên', keyCollocations: ['volunteer work', 'volunteer to do something', 'active volunteer'] },
          { word: 'donate', pos: 'verb', meaningVi: 'quyên góp, ủng hộ', keyCollocations: ['donate money to charity', 'donate warm clothes', 'donate blood'] },
          { word: 'elderly', pos: 'adjective/noun', meaningVi: 'người cao tuổi', keyCollocations: ['elderly people', 'care for the elderly', 'elderly residents'] },
        ],
      },
      {
        unit: 4,
        title: 'Music and Arts',
        themeVi: 'Âm nhạc và nghệ thuật',
        suggestedKeywords: [
          { word: 'exhibition', pos: 'noun', meaningVi: 'buổi triển lãm', keyCollocations: ['art exhibition', 'hold an exhibition', 'visit an exhibition'] },
          { word: 'performance', pos: 'noun', meaningVi: 'buổi biểu diễn', keyCollocations: ['musical performance', 'live performance', 'give a performance'] },
          { word: 'instrument', pos: 'noun', meaningVi: 'nhạc cụ', keyCollocations: ['musical instrument', 'play an instrument', 'traditional instrument'] },
          { word: 'composer', pos: 'noun', meaningVi: 'nhà soạn nhạc', keyCollocations: ['famous composer', 'classical composer', 'talented composer'] },
        ],
      },
      {
        unit: 5,
        title: 'Food and Drink',
        themeVi: 'Ẩm thực và đồ uống',
        suggestedKeywords: [
          { word: 'ingredient', pos: 'noun', meaningVi: 'nguyên liệu', keyCollocations: ['fresh ingredients', 'main ingredient', 'natural ingredients'] },
          { word: 'recipe', pos: 'noun', meaningVi: 'công thức nấu ăn', keyCollocations: ['traditional recipe', 'follow a recipe', 'secret recipe'] },
          { word: 'flavour', pos: 'noun', meaningVi: 'hương vị', keyCollocations: ['rich flavour', 'distinctive flavour', 'add flavour to'] },
          { word: 'speciality', pos: 'noun', meaningVi: 'đặc sản', keyCollocations: ['local speciality', 'culinary speciality', 'regional speciality'] },
        ],
      },
      {
        unit: 6,
        title: 'A Visit to a School',
        themeVi: 'Thăm một ngôi trường',
        suggestedKeywords: [
          { word: 'facility', pos: 'noun', meaningVi: 'cơ sở vật chất', keyCollocations: ['modern facilities', 'sports facilities', 'school facility'] },
          { word: 'monument', pos: 'noun', meaningVi: 'đài kỷ niệm, di tích', keyCollocations: ['historic monument', 'ancient monument', 'national monument'] },
          { word: 'heritage', pos: 'noun', meaningVi: 'di sản', keyCollocations: ['cultural heritage', 'preserve the heritage', 'world heritage site'] },
        ],
      },
      {
        unit: 7,
        title: 'Traffic',
        themeVi: 'Giao thông',
        suggestedKeywords: [
          { word: 'pedestrian', pos: 'noun', meaningVi: 'người đi bộ', keyCollocations: ['pedestrian crossing', 'safety of pedestrians', 'pedestrian precinct'] },
          { word: 'congestion', pos: 'noun', meaningVi: 'sự tắc nghẽn giao thông', keyCollocations: ['traffic congestion', 'reduce congestion', 'cause severe congestion'] },
          { word: 'regulation', pos: 'noun', meaningVi: 'quy định', keyCollocations: ['traffic regulations', 'follow regulations', 'strict regulations'] },
          { word: 'helmet', pos: 'noun', meaningVi: 'mũ bảo hiểm', keyCollocations: ['wear a helmet', 'fasten the helmet', 'crash helmet'] },
        ],
      },
      {
        unit: 8,
        title: 'Films',
        themeVi: 'Phim ảnh',
        suggestedKeywords: [
          { word: 'character', pos: 'noun', meaningVi: 'nhân vật', keyCollocations: ['main character', 'fictional character', 'strong character'] },
          { word: 'plot', pos: 'noun', meaningVi: 'cốt truyện', keyCollocations: ['gripping plot', 'plot twist', 'complicated plot'] },
          { word: 'director', pos: 'noun', meaningVi: 'đạo diễn', keyCollocations: ['film director', 'talented director', 'award-winning director'] },
          { word: 'review', pos: 'noun', meaningVi: 'đánh giá, nhận xét', keyCollocations: ['positive review', 'film review', 'critical review'] },
        ],
      },
      {
        unit: 9,
        title: 'Festivals around the World',
        themeVi: 'Lễ hội trên thế giới',
        suggestedKeywords: [
          { word: 'parade', pos: 'noun', meaningVi: 'cuộc diễu hành', keyCollocations: ['street parade', 'march in a parade', 'colourful parade'] },
          { word: 'celebration', pos: 'noun', meaningVi: 'sự chào mừng, lễ kỷ niệm', keyCollocations: ['annual celebration', 'join the celebration', 'festive celebration'] },
          { word: 'costume', pos: 'noun', meaningVi: 'trang phục lễ hội', keyCollocations: ['traditional costume', 'wear elaborate costumes', 'folk costume'] },
        ],
      },
      {
        unit: 10,
        title: 'Energy Sources',
        themeVi: 'Các nguồn năng lượng',
        suggestedKeywords: [
          { word: 'renewable', pos: 'adjective', meaningVi: 'tái tạo được', keyCollocations: ['renewable energy', 'renewable sources', 'switch to renewables'] },
          { word: 'turbine', pos: 'noun', meaningVi: 'tua-bin', keyCollocations: ['wind turbine', 'power turbine', 'install turbines'] },
          { word: 'fossil', pos: 'noun', meaningVi: 'hóa thạch', keyCollocations: ['fossil fuels', 'burn fossil fuels', 'dependence on fossil fuels'] },
          { word: 'exhaust', pos: 'verb/noun', meaningVi: 'làm cạn kiệt / khí thải', keyCollocations: ['exhaust natural resources', 'exhaust fumes', 'easily exhausted'] },
        ],
      },
      {
        unit: 11,
        title: 'Travelling in the Future',
        themeVi: 'Giao thông trong tương lai',
        suggestedKeywords: [
          { word: 'driverless', pos: 'adjective', meaningVi: 'không người lái', keyCollocations: ['driverless car', 'driverless vehicle', 'autonomous driverless transport'] },
          { word: 'eco-friendly', pos: 'adjective', meaningVi: 'thân thiện với môi trường', keyCollocations: ['eco-friendly vehicle', 'eco-friendly fuel', 'eco-friendly means of transport'] },
          { word: 'teleportation', pos: 'noun', meaningVi: 'sự dịch chuyển tức thời', keyCollocations: ['instant teleportation', 'means of teleportation', 'concept of teleportation'] },
        ],
      },
      {
        unit: 12,
        title: 'English-Speaking Countries',
        themeVi: 'Các quốc gia nói tiếng Anh',
        suggestedKeywords: [
          { word: 'native', pos: 'adjective', meaningVi: 'bản xứ', keyCollocations: ['native speaker', 'native country', 'native language'] },
          { word: 'accent', pos: 'noun', meaningVi: 'giọng điệu phát âm', keyCollocations: ['foreign accent', 'regional accent', 'speak with an accent'] },
          { word: 'territory', pos: 'noun', meaningVi: 'lãnh thổ', keyCollocations: ['vast territory', 'island territory', 'overseas territory'] },
        ],
      },
    ],
  },
  {
    grade: 8,
    gradeName: 'Lớp 8 - Global Success',
    units: [
      {
        unit: 1,
        title: 'Leisure Time',
        themeVi: 'Thời gian rảnh rỗi',
        suggestedKeywords: [
          { word: 'leisure', pos: 'noun', meaningVi: 'thời gian nhàn rỗi', keyCollocations: ['leisure activities', 'at your leisure', 'leisure time'] },
          { word: 'balance', pos: 'noun/verb', meaningVi: 'sự cân bằng', keyCollocations: ['strike a balance', 'keep your balance', 'balance work and study'] },
          { word: 'satisfaction', pos: 'noun', meaningVi: 'sự hài lòng', keyCollocations: ['derive great satisfaction', 'customer satisfaction', 'feeling of satisfaction'] },
          { word: 'hooked', pos: 'adjective', meaningVi: 'say mê, nghiện', keyCollocations: ['hooked on playing games', 'get hooked on', 'completely hooked'] },
        ],
      },
      {
        unit: 2,
        title: 'Life in the Countryside',
        themeVi: 'Cuộc sống miền quê',
        suggestedKeywords: [
          { word: 'pasture', pos: 'noun', meaningVi: 'đồng cỏ gặm', keyCollocations: ['green pasture', 'graze on pastures', 'vast pasture'] },
          { word: 'harvest', pos: 'noun/verb', meaningVi: 'vụ thu hoạch', keyCollocations: ['bumper harvest', 'harvest season', 'reap the harvest'] },
          { word: 'nomadic', pos: 'adjective', meaningVi: 'du mục', keyCollocations: ['nomadic lifestyle', 'nomadic people', 'lead a nomadic life'] },
          { word: 'hospitality', pos: 'noun', meaningVi: 'lòng hiếu khách', keyCollocations: ['warm hospitality', 'generous hospitality', 'show great hospitality'] },
        ],
      },
      {
        unit: 3,
        title: 'Teenagers',
        themeVi: 'Tuổi thiếu niên',
        suggestedKeywords: [
          { word: 'pressure', pos: 'noun', meaningVi: 'áp lực', keyCollocations: ['peer pressure', 'under great pressure', 'cope with pressure'] },
          { word: 'bully', pos: 'verb/noun', meaningVi: 'bắt nạt', keyCollocations: ['cyber bullying', 'stand up to bullies', 'victim of bullying'] },
          { word: 'expectation', pos: 'noun', meaningVi: 'sự kỳ vọng', keyCollocations: ['live up to expectations', 'parental expectations', 'high expectations'] },
          { word: 'concentrate', pos: 'verb', meaningVi: 'tập trung', keyCollocations: ['concentrate on studies', 'difficult to concentrate', 'concentrate your efforts'] },
        ],
      },
      {
        unit: 4,
        title: 'Ethnic Groups of Viet Nam',
        themeVi: 'Các dân tộc Việt Nam',
        suggestedKeywords: [
          { word: 'communal', pos: 'adjective', meaningVi: 'cộng đồng, chung', keyCollocations: ['communal house', 'communal activities', 'communal spirit'] },
          { word: 'diversity', pos: 'noun', meaningVi: 'sự đa dạng', keyCollocations: ['cultural diversity', 'rich diversity', 'protect diversity'] },
          { word: 'minority', pos: 'noun', meaningVi: 'thiểu số', keyCollocations: ['ethnic minority', 'minority group', 'in the minority'] },
          { word: 'stilt', pos: 'noun', meaningVi: 'nhà sàn', keyCollocations: ['stilt house', 'live in a stilt house', 'wooden stilts'] },
        ],
      },
      {
        unit: 5,
        title: 'Our Customs and Traditions',
        themeVi: 'Phong tục và truyền thống',
        suggestedKeywords: [
          { word: 'custom', pos: 'noun', meaningVi: 'phong tục, tập quán', keyCollocations: ['local customs', 'follow the custom', 'social custom'] },
          { word: 'tradition', pos: 'noun', meaningVi: 'truyền thống', keyCollocations: ['family tradition', 'break with tradition', 'handed down by tradition'] },
          { word: 'respect', pos: 'noun/verb', meaningVi: 'sự tôn kính, tôn trọng', keyCollocations: ['pay respect to elders', 'show respect', 'earn respect'] },
          { word: 'worship', pos: 'verb/noun', meaningVi: 'thờ phụng, cúng tế', keyCollocations: ['worship ancestors', 'place of worship', 'religious worship'] },
          { word: 'manners', pos: 'noun (plural)', meaningVi: 'phép lịch sự', keyCollocations: ['table manners', 'good manners', 'mind your manners'] },
        ],
      },
      {
        unit: 6,
        title: 'Lifestyles',
        themeVi: 'Lối sống',
        suggestedKeywords: [
          { word: 'habit', pos: 'noun', meaningVi: 'thói quen', keyCollocations: ['eating habits', 'break the habit', 'develop the habit', 'let it become a habit'] },
          { word: 'lifestyle', pos: 'noun', meaningVi: 'lối sống', keyCollocations: ['healthy lifestyle', 'nomadic lifestyle', 'modern lifestyle'] },
          { word: 'practice', pos: 'noun', meaningVi: 'thói quen, tập quán', keyCollocations: ['daily practice', 'cultural practices', 'put into practice'] },
          { word: 'routine', pos: 'noun', meaningVi: 'thói quen nề nếp hằng ngày', keyCollocations: ['daily routine', 'stick to a routine', 'morning routine'] },
        ],
      },
      {
        unit: 7,
        title: 'Environmental Protection',
        themeVi: 'Bảo vệ môi trường',
        suggestedKeywords: [
          { word: 'endangered', pos: 'adjective', meaningVi: 'bị đe dọa, có nguy cơ tuyệt chủng', keyCollocations: ['endangered species', 'critically endangered', 'protect endangered animals'] },
          { word: 'habitat', pos: 'noun', meaningVi: 'môi trường sống tự nhiên', keyCollocations: ['natural habitat', 'destroy the habitat', 'wildlife habitat'] },
          { word: 'conserve', pos: 'verb', meaningVi: 'bảo tồn', keyCollocations: ['conserve wildlife', 'conserve electricity', 'efforts to conserve'] },
          { word: 'decompose', pos: 'verb', meaningVi: 'phân hủy', keyCollocations: ['take centuries to decompose', 'easily decompose', 'decompose naturally'] },
        ],
      },
      {
        unit: 8,
        title: 'Shopping',
        themeVi: 'Mua sắm',
        suggestedKeywords: [
          { word: 'bargain', pos: 'noun/verb', meaningVi: 'món hời / mặc cả', keyCollocations: ['drive a hard bargain', 'real bargain', 'bargain for lower prices'] },
          { word: 'discount', pos: 'noun', meaningVi: 'khoản giảm giá', keyCollocations: ['offer a discount', 'special discount', 'at a discount'] },
          { word: 'customer', pos: 'noun', meaningVi: 'khách hàng', keyCollocations: ['regular customer', 'customer satisfaction', 'attract new customers'] },
          { word: 'receipt', pos: 'noun', meaningVi: 'hóa đơn, biên lai', keyCollocations: ['keep the receipt', 'issue a receipt', 'sales receipt'] },
        ],
      },
      {
        unit: 9,
        title: 'Natural Disasters',
        themeVi: 'Thiên tai',
        suggestedKeywords: [
          { word: 'evacuation', pos: 'noun', meaningVi: 'sự sơ tán', keyCollocations: ['mass evacuation', 'order an evacuation', 'evacuation route'] },
          { word: 'eruption', pos: 'noun', meaningVi: 'sự phun trào (núi lửa)', keyCollocations: ['volcanic eruption', 'violent eruption', 'predict an eruption'] },
          { word: 'damage', pos: 'noun/verb', meaningVi: 'thiệt hại', keyCollocations: ['cause severe damage', 'property damage', 'assess the damage'] },
          { word: 'warning', pos: 'noun', meaningVi: 'cảnh báo', keyCollocations: ['early warning system', 'issue a warning', 'flood warning'] },
        ],
      },
      {
        unit: 10,
        title: 'Communication in the Future',
        themeVi: 'Giao tiếp tương lai',
        suggestedKeywords: [
          { word: 'interaction', pos: 'noun', meaningVi: 'sự tương tác', keyCollocations: ['social interaction', 'face-to-face interaction', 'human interaction'] },
          { word: 'telepathy', pos: 'noun', meaningVi: 'thần giao cách cảm', keyCollocations: ['communicate through telepathy', 'mental telepathy', 'form of telepathy'] },
          { word: 'hologram', pos: 'noun', meaningVi: 'hình ảnh 3 chiều', keyCollocations: ['three-dimensional hologram', 'project a hologram', 'hologram technology'] },
        ],
      },
      {
        unit: 11,
        title: 'Science and Technology',
        themeVi: 'Khoa học và công nghệ',
        suggestedKeywords: [
          { word: 'breakthrough', pos: 'noun', meaningVi: 'bước đột phá', keyCollocations: ['major breakthrough', 'scientific breakthrough', 'achieve a breakthrough'] },
          { word: 'invention', pos: 'noun', meaningVi: 'phát minh', keyCollocations: ['groundbreaking invention', 'patent an invention', 'great invention'] },
          { word: 'experiment', pos: 'noun/verb', meaningVi: 'thí nghiệm', keyCollocations: ['conduct an experiment', 'laboratory experiment', 'scientific experiment'] },
          { word: 'advance', pos: 'noun/verb', meaningVi: 'tiến bộ', keyCollocations: ['technological advances', 'make rapid advances', 'medical advance'] },
        ],
      },
      {
        unit: 12,
        title: 'Life on Other Planets',
        themeVi: 'Sự sống trên các hành tinh khác',
        suggestedKeywords: [
          { word: 'habitable', pos: 'adjective', meaningVi: 'có thể sinh sống được', keyCollocations: ['habitable planet', 'habitable zone', 'make Earth habitable'] },
          { word: 'gravity', pos: 'noun', meaningVi: 'trọng lực', keyCollocations: ['zero gravity', 'force of gravity', 'overcome gravity'] },
          { word: 'atmosphere', pos: 'noun', meaningVi: 'khí quyển', keyCollocations: ['dense atmosphere', 'Earth\'s atmosphere', 'breathable atmosphere'] },
        ],
      },
    ],
  },
  {
    grade: 9,
    gradeName: 'Lớp 9 - Global Success (Trọng điểm thi vào 10)',
    units: [
      {
        unit: 1,
        title: 'Local Community',
        themeVi: 'Cộng đồng địa phương',
        suggestedKeywords: [
          { word: 'craft', pos: 'noun/verb', meaningVi: 'nghề thủ công / chế tác', keyCollocations: ['traditional craft', 'handicraft village', 'master the craft', 'craft artisan'] },
          { word: 'artisan', pos: 'noun', meaningVi: 'nghệ nhân', keyCollocations: ['skilled artisan', 'local artisan', 'village artisan'] },
          { word: 'preserve', pos: 'verb', meaningVi: 'bảo tồn, giữ gìn', keyCollocations: ['preserve traditional values', 'preserve historical heritage', 'efforts to preserve'] },
          { word: 'attraction', pos: 'noun', meaningVi: 'điểm thu hút', keyCollocations: ['tourist attraction', 'popular attraction', 'cultural attraction'] },
        ],
      },
      {
        unit: 2,
        title: 'City Life',
        themeVi: 'Cuộc sống thành thị',
        suggestedKeywords: [
          { word: 'metropolis', pos: 'noun', meaningVi: 'đô thị lớn', keyCollocations: ['bustling metropolis', 'modern metropolis', 'thriving metropolis'] },
          { word: 'rush', pos: 'noun/verb', meaningVi: 'giờ cao điểm / vội vã', keyCollocations: ['rush hour', 'avoid the rush', 'in a rush'] },
          { word: 'convenience', pos: 'noun', meaningVi: 'sự tiện lợi', keyCollocations: ['modern convenience', 'for your convenience', 'at your earliest convenience'] },
          { word: 'liveable', pos: 'adjective', meaningVi: 'đáng sống', keyCollocations: ['liveable city', 'most liveable', 'liveable environment'] },
        ],
      },
      {
        unit: 3,
        title: 'Healthy Living for Teens',
        themeVi: 'Sống khỏe cho tuổi dậy thì',
        suggestedKeywords: [
          { word: 'priority', pos: 'noun', meaningVi: 'sự ưu tiên', keyCollocations: ['top priority', 'give priority to', 'set priorities'] },
          { word: 'anxiety', pos: 'noun', meaningVi: 'sự lo âu', keyCollocations: ['reduce anxiety', 'suffer from anxiety', 'acute anxiety'] },
          { word: 'well-balanced', pos: 'adjective', meaningVi: 'cân đối, hài hòa', keyCollocations: ['well-balanced diet', 'well-balanced life', 'well-balanced schedule'] },
          { word: 'counselor', pos: 'noun', meaningVi: 'chuyên viên tư vấn', keyCollocations: ['school counselor', 'guidance counselor', 'consult a counselor'] },
        ],
      },
      {
        unit: 4,
        title: 'Remembering the Past',
        themeVi: 'Nhớ về quá khứ',
        suggestedKeywords: [
          { word: 'generation', pos: 'noun', meaningVi: 'thế hệ', keyCollocations: ['generation gap', 'older generation', 'pass down through generations'] },
          { word: 'extended', pos: 'adjective', meaningVi: 'mở rộng (gia đình)', keyCollocations: ['extended family', 'extended period', 'extended holiday'] },
          { word: 'ancient', pos: 'adjective', meaningVi: 'cổ xưa', keyCollocations: ['ancient town', 'ancient monument', 'ancient tradition'] },
          { word: 'memorial', pos: 'noun', meaningVi: 'đài tưởng niệm', keyCollocations: ['war memorial', 'erect a memorial', 'memorial service'] },
        ],
      },
      {
        unit: 5,
        title: 'Wonders of Viet Nam',
        themeVi: 'Kỳ quan Việt Nam',
        suggestedKeywords: [
          { word: 'spectacular', pos: 'adjective', meaningVi: 'hùng vĩ, ngoạn mục', keyCollocations: ['spectacular scenery', 'spectacular view', 'spectacular cave'] },
          { word: 'citadel', pos: 'noun', meaningVi: 'hoàng thành, thành quách', keyCollocations: ['ancient citadel', 'imperial citadel', 'historic citadel'] },
          { word: 'geological', pos: 'adjective', meaningVi: 'thuộc về địa chất', keyCollocations: ['geological formation', 'geological value', 'geological park'] },
          { word: 'fortress', pos: 'noun', meaningVi: 'pháo đài', keyCollocations: ['stone fortress', 'impenetrable fortress', 'medieval fortress'] },
        ],
      },
      {
        unit: 6,
        title: 'Viet Nam: Then and Now',
        themeVi: 'Việt Nam xưa và nay',
        suggestedKeywords: [
          { word: 'deterioration', pos: 'noun', meaningVi: 'sự xuống cấp', keyCollocations: ['prevent deterioration', 'gradual deterioration', 'sign of deterioration'] },
          { word: 'infrastructure', pos: 'noun', meaningVi: 'cơ sở hạ tầng', keyCollocations: ['modern infrastructure', 'develop infrastructure', 'transport infrastructure'] },
          { word: 'tram', pos: 'noun', meaningVi: 'xe điện', keyCollocations: ['tram line', 'ride a tram', 'historic tram network'] },
          { word: 'thatched', pos: 'adjective', meaningVi: 'lợp bằng tranh, rạ', keyCollocations: ['thatched house', 'thatched roof', 'thatched cottage'] },
        ],
      },
      {
        unit: 7,
        title: 'Natural Wonders of the World',
        themeVi: 'Kỳ quan thiên nhiên thế giới',
        suggestedKeywords: [
          { word: 'biodiversity', pos: 'noun', meaningVi: 'đa dạng sinh học', keyCollocations: ['rich biodiversity', 'protect biodiversity', 'marine biodiversity'] },
          { word: 'ecosystem', pos: 'noun', meaningVi: 'hệ sinh thái', keyCollocations: ['fragile ecosystem', 'coral reef ecosystem', 'disrupt the ecosystem'] },
          { word: 'breathtaking', pos: 'adjective', meaningVi: 'đẹp nín thở', keyCollocations: ['breathtaking view', 'breathtaking scenery', 'breathtaking landscape'] },
        ],
      },
      {
        unit: 8,
        title: 'Tourism',
        themeVi: 'Du lịch',
        suggestedKeywords: [
          { word: 'itinerary', pos: 'noun', meaningVi: 'lịch trình chuyến đi', keyCollocations: ['detailed itinerary', 'plan an itinerary', 'travel itinerary'] },
          { word: 'destination', pos: 'noun', meaningVi: 'điểm đến', keyCollocations: ['popular destination', 'holiday destination', 'tourist destination'] },
          { word: 'expedition', pos: 'noun', meaningVi: 'chuyến thám hiểm', keyCollocations: ['scientific expedition', 'lead an expedition', 'mountaineering expedition'] },
          { word: 'package', pos: 'noun', meaningVi: 'trọn gói', keyCollocations: ['package tour', 'package holiday', 'holiday package'] },
        ],
      },
      {
        unit: 9,
        title: 'World Englishes',
        themeVi: 'Tiếng Anh trên toàn cầu',
        suggestedKeywords: [
          { word: 'bilingual', pos: 'adjective', meaningVi: 'song ngữ', keyCollocations: ['bilingual education', 'fluent bilingual', 'bilingual dictionary'] },
          { word: 'fluent', pos: 'adjective', meaningVi: 'lưu loát, trôi chảy', keyCollocations: ['fluent in English', 'speak fluent English', 'become fluent'] },
          { word: 'dialect', pos: 'noun', meaningVi: 'tiếng địa phương', keyCollocations: ['local dialect', 'regional dialect', 'speak a dialect'] },
          { word: 'tongue', pos: 'noun', meaningVi: 'ngôn ngữ mẹ đẻ', keyCollocations: ['mother tongue', 'native tongue', 'slip of the tongue'] },
        ],
      },
      {
        unit: 10,
        title: 'Planet Earth',
        themeVi: 'Hành tinh Trái Đất',
        suggestedKeywords: [
          { word: 'footprint', pos: 'noun', meaningVi: 'dấu chân (carbon)', keyCollocations: ['carbon footprint', 'reduce carbon footprint', 'ecological footprint'] },
          { word: 'emission', pos: 'noun', meaningVi: 'khí thải', keyCollocations: ['greenhouse gas emissions', 'reduce emissions', 'zero emissions'] },
          { word: 'warming', pos: 'noun', meaningVi: 'sự nóng lên', keyCollocations: ['global warming', 'impact of global warming', 'combat global warming'] },
        ],
      },
      {
        unit: 11,
        title: 'Electronic Devices',
        themeVi: 'Thiết bị điện tử',
        suggestedKeywords: [
          { word: 'gadget', pos: 'noun', meaningVi: 'tiện ích, thiết bị điện tử nhỏ', keyCollocations: ['electronic gadget', 'handy gadget', 'latest gadget'] },
          { word: 'intelligence', pos: 'noun', meaningVi: 'trí thông minh (nhân tạo)', keyCollocations: ['artificial intelligence', 'emotional intelligence', 'human intelligence'] },
          { word: 'screen', pos: 'noun', meaningVi: 'màn hình', keyCollocations: ['screen time', 'limit screen time', 'touch screen'] },
          { word: 'cyberbullying', pos: 'noun', meaningVi: 'bắt nạt trên mạng', keyCollocations: ['prevent cyberbullying', 'victim of cyberbullying', 'stop cyberbullying'] },
        ],
      },
      {
        unit: 12,
        title: 'Career Paths',
        themeVi: 'Định hướng nghề nghiệp',
        suggestedKeywords: [
          { word: 'vocation', pos: 'noun', meaningVi: 'thiên hướng, nghề nghiệp', keyCollocations: ['true vocation', 'vocational training', 'find your vocation'] },
          { word: 'qualification', pos: 'noun', meaningVi: 'bằng cấp, phẩm chất chuyên môn', keyCollocations: ['formal qualification', 'gain qualifications', 'minimum qualification'] },
          { word: 'apprentice', pos: 'noun', meaningVi: 'người học việc', keyCollocations: ['skilled apprentice', 'work as an apprentice', 'apprentice training'] },
          { word: 'profession', pos: 'noun', meaningVi: 'nghề nghiệp chuyên môn', keyCollocations: ['medical profession', 'enter a profession', 'teaching profession'] },
        ],
      },
    ],
  },
];

export interface DictionaryPhonetics {
  uk: string;
  us: string;
  audioUk?: string;
  audioUs?: string;
  syllables?: string;
  note?: string;
}

export interface IPADetails {
  oxford: DictionaryPhonetics;
  cambridge: DictionaryPhonetics;
  longman: DictionaryPhonetics;
  syllables?: string;
  audioUrlUk?: string;
  audioUrlUs?: string;
}

export interface DictionaryExercise {
  keyword: string;
  ipa: string;
  ipaDetails?: IPADetails;
  cambridgeUrl?: string;
  partOfSpeech: string;
  dictionarySource: string;
  definitionNumber?: string;
  grammarTag?: string;
  definitionText: string;
  examples: {
    fullSentence: string;
    boldPhrase: string;
  }[];
  instructionEn: string;
  instructionVi: string;
  pointsTotal: string;
  questions: {
    questionNumber: number;
    sentenceBefore: string;
    sentenceAfter: string;
    answer: string;
    vietnameseMeaning: string;
    explanation: string;
  }[];
}

// Pre-seeded high quality sample from the user's uploaded image (Word: habit)
export const SAMPLE_HABIT_EXERCISE: DictionaryExercise = {
  keyword: 'habit',
  ipa: "/ˈhæb.ɪt/",
  cambridgeUrl: "https://dictionary.cambridge.org/dictionary/english/habit",
  ipaDetails: {
    oxford: {
      uk: "/'hæbɪt/",
      us: "/ˈhæbɪt/",
      note: "Oxford Advanced Learner's Dictionary (OALD)",
    },
    cambridge: {
      uk: "/ˈhæb.ɪt/",
      us: "/ˈhæb.ət/",
      note: "Cambridge Advanced Learner's Dictionary (CALD)",
    },
    longman: {
      uk: "/ˈhæbɪt/",
      us: "/ˈhæbɪt/",
      syllables: "hab‧it",
      note: "Longman Dictionary of Contemporary English (LDOCE)",
    },
    syllables: "hab·it",
  },
  partOfSpeech: 'noun',
  dictionarySource: "Cambridge Advanced Learner's Dictionary",
  definitionNumber: '1.',
  grammarTag: '[countable]',
  definitionText: 'a thing that you do often and almost without thinking, especially something that is hard to stop doing',
  examples: [
    {
      fullSentence: 'You need to change your eating habits.',
      boldPhrase: 'eating habits',
    },
    {
      fullSentence: 'Most of us have some undesirable habits.',
      boldPhrase: 'have some undesirable habits',
    },
    {
      fullSentence: 'The strategy is helping children develop the habit of reading for fun.',
      boldPhrase: 'develop the habit',
    },
    {
      fullSentence: "It's all right to borrow money occasionally, but don't let it become a habit.",
      boldPhrase: 'let it become a habit',
    },
    {
      fullSentence: "It's not easy for children to break the habit of using digital devices while having meals.",
      boldPhrase: 'break the habit',
    },
  ],
  instructionEn: 'Look at the entry of the word "habit" in a dictionary. Complete the sentences with phrases from the entry. Do not use more than THREE words for each phrase.',
  instructionVi: '(Từ câu 35 đến câu 36, dựa vào bảng bên dưới, thí sinh chọn cụm từ thích hợp (không quá 3 từ) để hoàn chỉnh mỗi câu và viết câu trả lời vào Phần ANSWERS.)',
  pointsTotal: '(0.5 pt)',
  questions: [
    {
      questionNumber: 35,
      sentenceBefore: "I'm trying to ",
      sentenceAfter: ' of staying up too late.',
      answer: 'break the habit',
      vietnameseMeaning: 'Tôi đang cố gắng từ bỏ thói quen thức quá khuya.',
      explanation: 'Dựa vào câu ví dụ trong từ điển: "It\'s not easy for children to break the habit of using digital devices...", cụm từ "break the habit" mang nghĩa là từ bỏ một thói quen xấu.',
    },
    {
      questionNumber: 36,
      sentenceBefore: 'Your ',
      sentenceAfter: ' play an important role in body weight control.',
      answer: 'eating habits',
      vietnameseMeaning: 'Thói quen ăn uống của bạn đóng một vai trò quan trọng trong việc kiểm soát trọng lượng cơ thể.',
      explanation: 'Dựa vào câu ví dụ đầu tiên: "You need to change your eating habits.", cụm danh từ "eating habits" (thói quen ăn uống) đứng đầu câu làm chủ ngữ của động từ "play".',
    },
  ],
};

export const PRESET_EXERCISES: { [key: string]: { grade: number; unit: number; unitTitle: string; exercise: DictionaryExercise } } = {
  habit: {
    grade: 8,
    unit: 6,
    unitTitle: 'Lifestyles',
    exercise: SAMPLE_HABIT_EXERCISE,
  },
  craft: {
    grade: 9,
    unit: 1,
    unitTitle: 'Local Community',
    exercise: {
      keyword: 'craft',
      ipa: '/krɑːft/',
      partOfSpeech: 'noun',
      dictionarySource: "Cambridge Advanced Learner's Dictionary",
      definitionNumber: '1.',
      grammarTag: '[countable, uncountable]',
      definitionText: 'an activity involving a special skill at making things with your hands, or the objects produced by this skill',
      examples: [
        {
          fullSentence: 'Many artisans in Bat Trang still practise their traditional craft.',
          boldPhrase: 'traditional craft',
        },
        {
          fullSentence: 'It takes several years of training to master the craft of woodcarving.',
          boldPhrase: 'master the craft',
        },
        {
          fullSentence: 'The village is famous for its handicraft products sold across the country.',
          boldPhrase: 'handicraft products',
        },
        {
          fullSentence: 'Local young people are learning the craft from elderly masters.',
          boldPhrase: 'learning the craft',
        },
      ],
      instructionEn: 'Look at the entry of the word "craft" in a dictionary. Complete the sentences with phrases from the entry. Do not use more than THREE words for each phrase.',
      instructionVi: '(Từ câu 35 đến câu 36, dựa vào bảng bên dưới, thí sinh chọn cụm từ thích hợp (không quá 3 từ) để hoàn chỉnh mỗi câu và viết câu trả lời vào Phần ANSWERS.)',
      pointsTotal: '(0.5 pt)',
      questions: [
        {
          questionNumber: 35,
          sentenceBefore: 'Young apprentices need great dedication to ',
          sentenceAfter: ' of making conical hats.',
          answer: 'master the craft',
          vietnameseMeaning: 'Các thợ học việc trẻ tuổi cần sự cống hiến lớn để tinh thông / làm chủ tay nghề làm nón lá.',
          explanation: 'Dựa vào câu ví dụ từ điển: "...to master the craft of woodcarving", ta dùng cụm động từ "master the craft" (tinh thông nghề).',
        },
        {
          questionNumber: 36,
          sentenceBefore: 'Pottery making is a ',
          sentenceAfter: ' that has been preserved for generations in this village.',
          answer: 'traditional craft',
          vietnameseMeaning: 'Làm gốm là một nghề thủ công truyền thống đã được gìn giữ qua nhiều thế hệ ở ngôi làng này.',
          explanation: 'Dựa vào ví dụ đầu tiên: "...practise their traditional craft", cụm danh từ "traditional craft" (nghề truyền thống) phù hợp ngữ cảnh.',
        },
      ],
    },
  },
  tradition: {
    grade: 8,
    unit: 5,
    unitTitle: 'Our Customs and Traditions',
    exercise: {
      keyword: 'tradition',
      ipa: '/trəˈdɪʃ.ən/',
      partOfSpeech: 'noun',
      dictionarySource: "Cambridge Advanced Learner's Dictionary",
      definitionNumber: '1.',
      grammarTag: '[countable, uncountable]',
      definitionText: 'a belief, principle, or way of acting that people in a particular society or group have continued to follow for a long time',
      examples: [
        {
          fullSentence: 'Having dinner together on New Year’s Eve is a long-standing family tradition.',
          boldPhrase: 'family tradition',
        },
        {
          fullSentence: 'The villagers decided to break with tradition and celebrate in a modern way.',
          boldPhrase: 'break with tradition',
        },
        {
          fullSentence: 'These unique folk songs have been handed down by tradition.',
          boldPhrase: 'handed down by tradition',
        },
        {
          fullSentence: 'It is important for youngsters to keep the tradition alive.',
          boldPhrase: 'keep the tradition alive',
        },
      ],
      instructionEn: 'Look at the entry of the word "tradition" in a dictionary. Complete the sentences with phrases from the entry. Do not use more than THREE words for each phrase.',
      instructionVi: '(Từ câu 35 đến câu 36, dựa vào bảng bên dưới, thí sinh chọn cụm từ thích hợp (không quá 3 từ) để hoàn chỉnh mỗi câu và viết câu trả lời vào Phần ANSWERS.)',
      pointsTotal: '(0.5 pt)',
      questions: [
        {
          questionNumber: 35,
          sentenceBefore: 'Wrapping Chung cakes before Tet is a beloved ',
          sentenceAfter: ' in many Vietnamese households.',
          answer: 'family tradition',
          vietnameseMeaning: 'Gói bánh chưng trước Tết là một truyền thống gia đình được yêu thích trong nhiều gia đình Việt Nam.',
          explanation: 'Dựa vào câu ví dụ từ điển: "...a long-standing family tradition", cụm "family tradition" (truyền thống gia đình) hoàn toàn chính xác.',
        },
        {
          questionNumber: 36,
          sentenceBefore: 'Local authorities are organizing cultural workshops to ',
          sentenceAfter: ' for future generations.',
          answer: 'keep the tradition alive',
          vietnameseMeaning: 'Chính quyền địa phương đang tổ chức các buổi hội thảo văn hóa để giữ cho truyền thống tiếp tục tồn tại cho các thế hệ tương lai.',
          explanation: 'Dựa vào câu ví dụ: "keep the tradition alive" (gìn giữ truyền thống luôn sống mãi).',
        },
      ],
    },
  },
  recycle: {
    grade: 6,
    unit: 11,
    unitTitle: 'Our Greener World',
    exercise: {
      keyword: 'recycle',
      ipa: '/ˌriːˈsaɪ.kəl/',
      partOfSpeech: 'verb',
      dictionarySource: "Cambridge Advanced Learner's Dictionary",
      definitionNumber: '1.',
      grammarTag: '[transitive]',
      definitionText: 'to put used objects or materials through a special process so that they can be used again',
      examples: [
        {
          fullSentence: 'Students are encouraged to recycle plastic bottles at school.',
          boldPhrase: 'recycle plastic bottles',
        },
        {
          fullSentence: 'It is very easy to recycle paper and cardboard packaging.',
          boldPhrase: 'easy to recycle',
        },
        {
          fullSentence: 'Our neighbourhood has launched a campaign to recycle household waste.',
          boldPhrase: 'recycle household waste',
        },
        {
          fullSentence: 'We need to recycle materials to reduce environmental pollution.',
          boldPhrase: 'recycle materials',
        },
      ],
      instructionEn: 'Look at the entry of the word "recycle" in a dictionary. Complete the sentences with phrases from the entry. Do not use more than THREE words for each phrase.',
      instructionVi: '(Từ câu 35 đến câu 36, dựa vào bảng bên dưới, thí sinh chọn cụm từ thích hợp (không quá 3 từ) để hoàn chỉnh mỗi câu và viết câu trả lời vào Phần ANSWERS.)',
      pointsTotal: '(0.5 pt)',
      questions: [
        {
          questionNumber: 35,
          sentenceBefore: 'Most glass jars and metal cans are ',
          sentenceAfter: ' if you sort them properly.',
          answer: 'easy to recycle',
          vietnameseMeaning: 'Hầu hết các lọ thủy tinh và hộp kim loại đều rất dễ tái chế nếu bạn phân loại chúng đúng cách.',
          explanation: 'Dựa vào ví dụ trong từ điển: "It is very easy to recycle paper...", ta có cụm tính từ "easy to recycle".',
        },
        {
          questionNumber: 36,
          sentenceBefore: 'Our school launched a weekend project to collect and ',
          sentenceAfter: ' into lovely pen holders.',
          answer: 'recycle plastic bottles',
          vietnameseMeaning: 'Trường chúng tôi đã phát động một dự án cuối tuần để thu gom và tái chế chai nhựa thành những chiếc ống cắm bút đáng yêu.',
          explanation: 'Dựa vào ví dụ: "recycle plastic bottles" (tái chế các chai nhựa).',
        },
      ],
    },
  },
};

