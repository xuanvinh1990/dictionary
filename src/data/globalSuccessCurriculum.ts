/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Bộ từ vựng & Ngữ liệu Chương trình Tiếng Anh Global Success (Lớp 6, 7, 8, 9)
 * Trích xuất trực tiếp từ các file Wordlist đính kèm của Bộ GD&ĐT (Đầy đủ Unit 1 đến Unit 12)
 * Bao gồm từ vựng, từ loại, phiên âm chuẩn IPA và nghĩa tiếng Việt
 */

export interface SuggestedKeyword {
  word: string;
  pos: string;
  ipa?: string;
  meaningVi: string;
  keyCollocations: string[];
}

export interface CurriculumUnit {
  unit: number;
  title: string;
  themeVi: string;
  suggestedKeywords: SuggestedKeyword[];
}

export interface GradeCurriculum {
  grade: number;
  gradeName: string;
  units: CurriculumUnit[];
}

export const GLOBAL_SUCCESS_CURRICULUM: GradeCurriculum[] = [
  {
    "grade": 6,
    "gradeName": "Lớp 6 - Global Success",
    "units": [
      {
        "unit": 1,
        "title": "My new school",
        "themeVi": "Trường học mới của tôi",
        "suggestedKeywords": [
          {
            "word": "activity",
            "pos": "noun",
            "ipa": "/ækˈtɪvəti/",
            "meaningVi": "hoạt động",
            "keyCollocations": [
              "school activities",
              "outdoor activity",
              "fun activity"
            ]
          },
          {
            "word": "art",
            "pos": "noun",
            "ipa": "/ɑːt/",
            "meaningVi": "nghệ thuật, môn mĩ thuật",
            "keyCollocations": [
              "art class",
              "art room",
              "draw in art"
            ]
          },
          {
            "word": "boarding school",
            "pos": "noun phr",
            "ipa": "/ˈbɔːdɪŋ skuːl/",
            "meaningVi": "trường nội trú",
            "keyCollocations": [
              "study at a boarding school",
              "stay at a boarding school",
              "boarding school life"
            ]
          },
          {
            "word": "calculator",
            "pos": "noun",
            "ipa": "/ˈkælkjuleɪtə/",
            "meaningVi": "máy tính bỏ túi",
            "keyCollocations": [
              "pocket calculator",
              "use a calculator",
              "scientific calculator"
            ]
          },
          {
            "word": "classmate",
            "pos": "noun",
            "ipa": "/ˈklɑːsmeɪt/",
            "meaningVi": "bạn cùng lớp",
            "keyCollocations": [
              "new classmate",
              "friendly classmate",
              "help classmates"
            ]
          },
          {
            "word": "compass",
            "pos": "noun",
            "ipa": "/ˈkʌmpəs/",
            "meaningVi": "com-pa",
            "keyCollocations": [
              "pair of compasses",
              "draw circles with a compass",
              "school compass"
            ]
          },
          {
            "word": "favourite",
            "pos": "adj",
            "ipa": "/ˈfeɪvərɪt/",
            "meaningVi": "được yêu thích",
            "keyCollocations": [
              "favourite subject",
              "favourite teacher",
              "favourite sport"
            ]
          },
          {
            "word": "help",
            "pos": "noun/verb",
            "ipa": "/help/",
            "meaningVi": "sự giúp đỡ, giúp đỡ",
            "keyCollocations": [
              "help friends",
              "ask for help",
              "offer help"
            ]
          },
          {
            "word": "international",
            "pos": "adj",
            "ipa": "/ˌɪntəˈnæʃnəl/",
            "meaningVi": "quốc tế",
            "keyCollocations": [
              "international school",
              "international friends",
              "international environment"
            ]
          },
          {
            "word": "interview",
            "pos": "noun/verb",
            "ipa": "/ˈɪntəvjuː/",
            "meaningVi": "cuộc phỏng vấn, phỏng vấn",
            "keyCollocations": [
              "interview a teacher",
              "school interview",
              "conduct an interview"
            ]
          },
          {
            "word": "knock",
            "pos": "verb",
            "ipa": "/nɒk/",
            "meaningVi": "gõ (cửa)",
            "keyCollocations": [
              "knock at the door",
              "knock on the window",
              "knock before entering"
            ]
          },
          {
            "word": "remember",
            "pos": "verb",
            "ipa": "/rɪˈmembə/",
            "meaningVi": "nhớ, ghi nhớ",
            "keyCollocations": [
              "remember your homework",
              "remember rules",
              "always remember"
            ]
          },
          {
            "word": "share",
            "pos": "verb",
            "ipa": "/ʃeə/",
            "meaningVi": "chia sẻ",
            "keyCollocations": [
              "share pens",
              "share lunch",
              "share textbooks"
            ]
          },
          {
            "word": "smart",
            "pos": "adj",
            "ipa": "/smɑːt/",
            "meaningVi": "bảnh bao, gọn gàng, thông minh",
            "keyCollocations": [
              "look smart",
              "smart uniform",
              "smart student"
            ]
          },
          {
            "word": "swimming pool",
            "pos": "noun phr",
            "ipa": "/ˈswɪmɪŋ puːl/",
            "meaningVi": "bể bơi",
            "keyCollocations": [
              "swim in the swimming pool",
              "school swimming pool",
              "large swimming pool"
            ]
          },
          {
            "word": "uniform",
            "pos": "noun",
            "ipa": "/ˈjuːnɪfɔːm/",
            "meaningVi": "đồng phục",
            "keyCollocations": [
              "wear school uniform",
              "put on uniform",
              "new uniform"
            ]
          }
        ]
      },
      {
        "unit": 2,
        "title": "My house",
        "themeVi": "Ngôi nhà của tôi",
        "suggestedKeywords": [
          {
            "word": "between",
            "pos": "prep",
            "ipa": "/bɪˈtwiːn/",
            "meaningVi": "ở giữa",
            "keyCollocations": [
              "between two rooms",
              "sit between friends",
              "between the shelf and the desk"
            ]
          },
          {
            "word": "chest of drawers",
            "pos": "noun phr",
            "ipa": "/ˌtʃest əv ˈdrɔːz/",
            "meaningVi": "tủ có ngăn kéo",
            "keyCollocations": [
              "wooden chest of drawers",
              "clothes in the chest of drawers",
              "bedside chest of drawers"
            ]
          },
          {
            "word": "cooker",
            "pos": "noun",
            "ipa": "/ˈkʊkə/",
            "meaningVi": "bếp",
            "keyCollocations": [
              "electric cooker",
              "gas cooker",
              "clean the cooker"
            ]
          },
          {
            "word": "country house",
            "pos": "noun phr",
            "ipa": "/ˌkʌntri ˈhaʊs/",
            "meaningVi": "nhà ở vùng quê",
            "keyCollocations": [
              "live in a country house",
              "peaceful country house",
              "large country house"
            ]
          },
          {
            "word": "crazy",
            "pos": "adj",
            "ipa": "/ˈkreɪzi/",
            "meaningVi": "kì lạ, lạ thường",
            "keyCollocations": [
              "crazy house",
              "crazy design",
              "crazy room"
            ]
          },
          {
            "word": "cupboard",
            "pos": "noun",
            "ipa": "/ˈkʌbəd/",
            "meaningVi": "tủ đựng bát đĩa, quần áo",
            "keyCollocations": [
              "kitchen cupboard",
              "store in a cupboard",
              "open the cupboard"
            ]
          },
          {
            "word": "department store",
            "pos": "noun phr",
            "ipa": "/dɪˈpɑːtmənt stɔː/",
            "meaningVi": "cửa hàng bách hoá",
            "keyCollocations": [
              "shop at a department store",
              "large department store",
              "visit a department store"
            ]
          },
          {
            "word": "dishwasher",
            "pos": "noun",
            "ipa": "/ˈdɪʃwɒʃə/",
            "meaningVi": "máy rửa bát",
            "keyCollocations": [
              "put dishes in the dishwasher",
              "modern dishwasher",
              "use a dishwasher"
            ]
          },
          {
            "word": "flat",
            "pos": "noun",
            "ipa": "/flæt/",
            "meaningVi": "căn hộ",
            "keyCollocations": [
              "live in a flat",
              "rent a flat",
              "cozy flat"
            ]
          },
          {
            "word": "furniture",
            "pos": "noun",
            "ipa": "/ˈfɜːnɪtʃə/",
            "meaningVi": "đồ đạc trong nhà",
            "keyCollocations": [
              "wooden furniture",
              "modern furniture",
              "piece of furniture"
            ]
          },
          {
            "word": "hall",
            "pos": "noun",
            "ipa": "/hɔːl/",
            "meaningVi": "sảnh, hành lang",
            "keyCollocations": [
              "entrance hall",
              "in the hall",
              "spacious hall"
            ]
          },
          {
            "word": "in front of",
            "pos": "prep phr",
            "ipa": "/ɪn frʌnt əv/",
            "meaningVi": "ở đằng trước",
            "keyCollocations": [
              "in front of the house",
              "garden in front of",
              "stand in front of"
            ]
          },
          {
            "word": "next to",
            "pos": "prep phr",
            "ipa": "/ˈnekst tə/",
            "meaningVi": "bên cạnh",
            "keyCollocations": [
              "next to the window",
              "sit next to",
              "table next to the bed"
            ]
          },
          {
            "word": "shelf",
            "pos": "noun",
            "ipa": "/ʃelf/",
            "meaningVi": "kệ, giá",
            "keyCollocations": [
              "book shelf",
              "put on the shelf",
              "wooden shelf"
            ]
          },
          {
            "word": "sink",
            "pos": "noun",
            "ipa": "/sɪŋk/",
            "meaningVi": "bồn rửa bát",
            "keyCollocations": [
              "kitchen sink",
              "wash at the sink",
              "clean the sink"
            ]
          },
          {
            "word": "strange",
            "pos": "adj",
            "ipa": "/streɪndʒ/",
            "meaningVi": "kì lạ",
            "keyCollocations": [
              "strange house",
              "look strange",
              "strange room"
            ]
          },
          {
            "word": "town house",
            "pos": "noun phr",
            "ipa": "/ˈtaʊn haʊs/",
            "meaningVi": "nhà phố",
            "keyCollocations": [
              "modern town house",
              "live in a town house",
              "three-storey town house"
            ]
          },
          {
            "word": "wardrobe",
            "pos": "noun",
            "ipa": "/ˈwɔːdrəʊb/",
            "meaningVi": "tủ đựng quần áo",
            "keyCollocations": [
              "hang in the wardrobe",
              "wooden wardrobe",
              "large wardrobe"
            ]
          }
        ]
      },
      {
        "unit": 3,
        "title": "My friends",
        "themeVi": "Những người bạn của tôi",
        "suggestedKeywords": [
          {
            "word": "active",
            "pos": "adj",
            "ipa": "/ˈæktɪv/",
            "meaningVi": "hăng hái, năng động",
            "keyCollocations": [
              "active student",
              "active member",
              "very active"
            ]
          },
          {
            "word": "appearance",
            "pos": "noun",
            "ipa": "/əˈpɪərəns/",
            "meaningVi": "bề ngoài, ngoại hình",
            "keyCollocations": [
              "neat appearance",
              "describe appearance",
              "physical appearance"
            ]
          },
          {
            "word": "careful",
            "pos": "adj",
            "ipa": "/ˈkeəfl/",
            "meaningVi": "cẩn thận",
            "keyCollocations": [
              "careful student",
              "be careful",
              "careful handwriting"
            ]
          },
          {
            "word": "caring",
            "pos": "adj",
            "ipa": "/ˈkeərɪŋ/",
            "meaningVi": "chu đáo, biết quan tâm",
            "keyCollocations": [
              "caring friend",
              "caring attitude",
              "caring and helpful"
            ]
          },
          {
            "word": "cheek",
            "pos": "noun",
            "ipa": "/tʃiːk/",
            "meaningVi": "má",
            "keyCollocations": [
              "rosy cheeks",
              "chubby cheeks",
              "kiss on the cheek"
            ]
          },
          {
            "word": "clever",
            "pos": "adj",
            "ipa": "/ˈklevə/",
            "meaningVi": "lanh lợi, thông minh",
            "keyCollocations": [
              "clever boy",
              "clever solution",
              "very clever"
            ]
          },
          {
            "word": "confident",
            "pos": "adj",
            "ipa": "/ˈkɒnfɪdənt/",
            "meaningVi": "tự tin",
            "keyCollocations": [
              "confident speaker",
              "feel confident",
              "confident smile"
            ]
          },
          {
            "word": "creative",
            "pos": "adj",
            "ipa": "/kriˈeɪtɪv/",
            "meaningVi": "sáng tạo",
            "keyCollocations": [
              "creative ideas",
              "creative mind",
              "creative person"
            ]
          },
          {
            "word": "friendly",
            "pos": "adj",
            "ipa": "/ˈfrendli/",
            "meaningVi": "thân thiện",
            "keyCollocations": [
              "friendly smile",
              "friendly to everyone",
              "warm and friendly"
            ]
          },
          {
            "word": "funny",
            "pos": "adj",
            "ipa": "/ˈfʌni/",
            "meaningVi": "ngộ nghĩnh, khôi hài",
            "keyCollocations": [
              "funny jokes",
              "funny stories",
              "very funny"
            ]
          },
          {
            "word": "hard-working",
            "pos": "adj",
            "ipa": "/ˌhɑːd ˈwɜːkɪŋ/",
            "meaningVi": "chăm chỉ",
            "keyCollocations": [
              "hard-working student",
              "hard-working classmate",
              "diligent and hard-working"
            ]
          },
          {
            "word": "kind",
            "pos": "adj",
            "ipa": "/kaɪnd/",
            "meaningVi": "tốt bụng",
            "keyCollocations": [
              "kind heart",
              "kind words",
              "be kind to others"
            ]
          },
          {
            "word": "loving",
            "pos": "adj",
            "ipa": "/ˈlʌvɪŋ/",
            "meaningVi": "giàu tình yêu thương",
            "keyCollocations": [
              "loving friend",
              "loving family",
              "warm and loving"
            ]
          },
          {
            "word": "personality",
            "pos": "noun",
            "ipa": "/ˌpɜːsəˈnæləti/",
            "meaningVi": "tính cách",
            "keyCollocations": [
              "great personality",
              "pleasant personality",
              "describe personality"
            ]
          },
          {
            "word": "shoulder",
            "pos": "noun",
            "ipa": "/ˈʃəʊldə/",
            "meaningVi": "vai",
            "keyCollocations": [
              "broad shoulders",
              "tap on the shoulder",
              "over the shoulder"
            ]
          },
          {
            "word": "shy",
            "pos": "adj",
            "ipa": "/ʃaɪ/",
            "meaningVi": "xấu hổ, e thẹn",
            "keyCollocations": [
              "shy student",
              "feel shy",
              "too shy to speak"
            ]
          },
          {
            "word": "slim",
            "pos": "adj",
            "ipa": "/slɪm/",
            "meaningVi": "mảnh khảnh, thanh mảnh",
            "keyCollocations": [
              "slim figure",
              "tall and slim",
              "look slim"
            ]
          }
        ]
      },
      {
        "unit": 4,
        "title": "My neighbourhood",
        "themeVi": "Khu phố của tôi",
        "suggestedKeywords": [
          {
            "word": "art gallery",
            "pos": "noun phr",
            "ipa": "/ɑːt ˈɡæləri/",
            "meaningVi": "phòng trưng bày tác phẩm nghệ thuật",
            "keyCollocations": [
              "visit an art gallery",
              "neighbourhood art gallery",
              "famous art gallery"
            ]
          },
          {
            "word": "busy",
            "pos": "adj",
            "ipa": "/ˈbɪzi/",
            "meaningVi": "nhộn nhịp, náo nhiệt, bận rộn",
            "keyCollocations": [
              "busy street",
              "busy market",
              "busy neighbourhood"
            ]
          },
          {
            "word": "cathedral",
            "pos": "noun",
            "ipa": "/kəˈθiːdrəl/",
            "meaningVi": "nhà thờ lớn, thánh đường",
            "keyCollocations": [
              "ancient cathedral",
              "Notre Dame cathedral",
              "near the cathedral"
            ]
          },
          {
            "word": "cross",
            "pos": "verb",
            "ipa": "/krɒs/",
            "meaningVi": "đi ngang qua, vượt qua",
            "keyCollocations": [
              "cross the street",
              "cross the road safely",
              "cross at the lights"
            ]
          },
          {
            "word": "dislike",
            "pos": "verb",
            "ipa": "/dɪsˈlaɪk/",
            "meaningVi": "không thích, ghét",
            "keyCollocations": [
              "dislike noise",
              "dislike crowded places",
              "dislike pollution"
            ]
          },
          {
            "word": "famous",
            "pos": "adj",
            "ipa": "/ˈfeɪməs/",
            "meaningVi": "nổi tiếng",
            "keyCollocations": [
              "famous landmark",
              "famous restaurant",
              "famous for food"
            ]
          },
          {
            "word": "faraway",
            "pos": "adj",
            "ipa": "/ˈfɑːəweɪ/",
            "meaningVi": "xa xôi, xa",
            "keyCollocations": [
              "faraway town",
              "faraway places",
              "faraway mountains"
            ]
          },
          {
            "word": "finally",
            "pos": "adv",
            "ipa": "/ˈfaɪnəli/",
            "meaningVi": "cuối cùng",
            "keyCollocations": [
              "finally arrive",
              "finally reached home",
              "finally found the way"
            ]
          },
          {
            "word": "narrow",
            "pos": "adj",
            "ipa": "/ˈnærəʊ/",
            "meaningVi": "hẹp, chật hẹp",
            "keyCollocations": [
              "narrow streets",
              "narrow alley",
              "narrow passage"
            ]
          },
          {
            "word": "outdoor",
            "pos": "adj",
            "ipa": "/ˈaʊtdɔː/",
            "meaningVi": "ngoài trời",
            "keyCollocations": [
              "outdoor market",
              "outdoor cafe",
              "outdoor games"
            ]
          },
          {
            "word": "railway station",
            "pos": "noun phr",
            "ipa": "/ˈreɪlweɪ ˈsteɪʃn/",
            "meaningVi": "ga tàu hoả",
            "keyCollocations": [
              "near railway station",
              "arrive at railway station",
              "busy railway station"
            ]
          },
          {
            "word": "sandy",
            "pos": "adj",
            "ipa": "/ˈsændɪ/",
            "meaningVi": "có cát, phủ cát",
            "keyCollocations": [
              "sandy beach",
              "sandy path",
              "sandy shore"
            ]
          },
          {
            "word": "square",
            "pos": "noun",
            "ipa": "/skweə/",
            "meaningVi": "quảng trường",
            "keyCollocations": [
              "town square",
              "gather in the square",
              "central square"
            ]
          },
          {
            "word": "suburb",
            "pos": "noun",
            "ipa": "/ˈsʌbɜːb/",
            "meaningVi": "khu vực ngoại ô",
            "keyCollocations": [
              "live in the suburb",
              "peaceful suburb",
              "green suburb"
            ]
          },
          {
            "word": "turning",
            "pos": "noun",
            "ipa": "/ˈtɜːnɪŋ/",
            "meaningVi": "chỗ ngoặt, chỗ rẽ",
            "keyCollocations": [
              "take the first turning",
              "turning on the left",
              "second turning"
            ]
          },
          {
            "word": "workshop",
            "pos": "noun",
            "ipa": "/ˈwɜːkʃɒp/",
            "meaningVi": "phân xưởng",
            "keyCollocations": [
              "pottery workshop",
              "craft workshop",
              "repair workshop"
            ]
          }
        ]
      },
      {
        "unit": 5,
        "title": "Natural wonders of Viet Nam",
        "themeVi": "Kỳ quan thiên nhiên Việt Nam",
        "suggestedKeywords": [
          {
            "word": "amazing",
            "pos": "adj",
            "ipa": "/əˈmeɪzɪŋ/",
            "meaningVi": "tuyệt vời",
            "keyCollocations": [
              "amazing caves",
              "amazing view",
              "amazing landscape"
            ]
          },
          {
            "word": "backpack",
            "pos": "noun",
            "ipa": "/ˈbækpæk/",
            "meaningVi": "ba-lô",
            "keyCollocations": [
              "pack a backpack",
              "heavy backpack",
              "carry a backpack"
            ]
          },
          {
            "word": "boat",
            "pos": "noun",
            "ipa": "/bəʊt/",
            "meaningVi": "con thuyền",
            "keyCollocations": [
              "boat trip",
              "row a boat",
              "wooden boat"
            ]
          },
          {
            "word": "compass",
            "pos": "noun",
            "ipa": "/ˈkʌmpəs/",
            "meaningVi": "la bàn",
            "keyCollocations": [
              "magnetic compass",
              "use a compass",
              "follow the compass"
            ]
          },
          {
            "word": "desert",
            "pos": "noun",
            "ipa": "/ˈdezət/",
            "meaningVi": "sa mạc",
            "keyCollocations": [
              "sandy desert",
              "cross the desert",
              "desert dunes"
            ]
          },
          {
            "word": "island",
            "pos": "noun",
            "ipa": "/ˈaɪlənd/",
            "meaningVi": "hòn đảo",
            "keyCollocations": [
              "Phu Quoc island",
              "beautiful island",
              "visit an island"
            ]
          },
          {
            "word": "join in",
            "pos": "verb phr",
            "ipa": "/dʒɔɪn ɪn/",
            "meaningVi": "tham gia",
            "keyCollocations": [
              "join in the tour",
              "join in activities",
              "join in trekking"
            ]
          },
          {
            "word": "landscape",
            "pos": "noun",
            "ipa": "/ˈlændskeɪp/",
            "meaningVi": "phong cảnh",
            "keyCollocations": [
              "natural landscape",
              "stunning landscape",
              "Vietnamese landscape"
            ]
          },
          {
            "word": "litter",
            "pos": "verb",
            "ipa": "/ˈlɪtə/",
            "meaningVi": "vứt rác bừa bãi",
            "keyCollocations": [
              "do not litter",
              "litter the beach",
              "stop littering"
            ]
          },
          {
            "word": "man-made",
            "pos": "adj",
            "ipa": "/ˌmæn ˈmeɪd/",
            "meaningVi": "nhân tạo",
            "keyCollocations": [
              "man-made wonders",
              "man-made lake",
              "man-made structures"
            ]
          },
          {
            "word": "mount",
            "pos": "noun",
            "ipa": "/maʊnt/",
            "meaningVi": "núi, đồi, đỉnh núi",
            "keyCollocations": [
              "Mount Fansipan",
              "climb the mount",
              "reach the mount"
            ]
          },
          {
            "word": "mountain range",
            "pos": "noun phr",
            "ipa": "/ˈmaʊntən ˌreɪndʒ/",
            "meaningVi": "dãy núi",
            "keyCollocations": [
              "Hoang Lien Son mountain range",
              "cross the mountain range",
              "high mountain range"
            ]
          },
          {
            "word": "natural wonder",
            "pos": "noun phr",
            "ipa": "/ˈnætʃrəl ˈwʌndə/",
            "meaningVi": "kì quan thiên nhiên",
            "keyCollocations": [
              "Ha Long Bay natural wonder",
              "visit natural wonders",
              "famous natural wonder"
            ]
          },
          {
            "word": "plaster",
            "pos": "noun",
            "ipa": "/ˈplɑːstə/",
            "meaningVi": "băng, gạc y tế",
            "keyCollocations": [
              "adhesive plaster",
              "put a plaster on cuts",
              "first-aid plaster"
            ]
          },
          {
            "word": "rock",
            "pos": "noun",
            "ipa": "/rɒk/",
            "meaningVi": "tảng đá, phiến đá",
            "keyCollocations": [
              "limestone rocks",
              "climb rocks",
              "sharp rocks"
            ]
          },
          {
            "word": "show",
            "pos": "noun/verb",
            "ipa": "/ʃəʊ/",
            "meaningVi": "buổi trình diễn, trình diễn",
            "keyCollocations": [
              "water puppet show",
              "light show",
              "show visitors around"
            ]
          },
          {
            "word": "suncream",
            "pos": "noun",
            "ipa": "/ˈsʌnkriːm/",
            "meaningVi": "kem chống nắng",
            "keyCollocations": [
              "apply suncream",
              "use suncream",
              "tube of suncream"
            ]
          },
          {
            "word": "waterfall",
            "pos": "noun",
            "ipa": "/ˈwɔːtəfɔːl/",
            "meaningVi": "thác nước",
            "keyCollocations": [
              "Ban Gioc waterfall",
              "magnificent waterfall",
              "swim near the waterfall"
            ]
          }
        ]
      },
      {
        "unit": 6,
        "title": "Our Tet holiday",
        "themeVi": "Ngày Tết của chúng ta",
        "suggestedKeywords": [
          {
            "word": "behave",
            "pos": "verb",
            "ipa": "/bɪˈheɪv/",
            "meaningVi": "đối xử, cư xử",
            "keyCollocations": [
              "behave well at Tet",
              "behave politely",
              "good behaviour"
            ]
          },
          {
            "word": "celebrate",
            "pos": "verb",
            "ipa": "/ˈselɪbreɪt/",
            "meaningVi": "kỉ niệm, tổ chức ăn mừng",
            "keyCollocations": [
              "celebrate Tet with family",
              "celebrate the New Year",
              "celebrate joyfully"
            ]
          },
          {
            "word": "cheer",
            "pos": "verb",
            "ipa": "/tʃɪə/",
            "meaningVi": "chúc mừng, reo hò",
            "keyCollocations": [
              "cheer at countdown",
              "cheer happily",
              "cheer for good luck"
            ]
          },
          {
            "word": "decorate",
            "pos": "verb",
            "ipa": "/ˈdekəreɪt/",
            "meaningVi": "trang hoàng",
            "keyCollocations": [
              "decorate the house with flowers",
              "decorate peach blossoms",
              "decorate beautifully"
            ]
          },
          {
            "word": "family gathering",
            "pos": "noun phr",
            "ipa": "/ˈfæməli ˈɡæðərɪŋ/",
            "meaningVi": "sum họp gia đình",
            "keyCollocations": [
              "warm family gathering",
              "enjoy family gatherings",
              "traditional family gathering"
            ]
          },
          {
            "word": "firework",
            "pos": "noun",
            "ipa": "/ˈfaɪəwɜːk/",
            "meaningVi": "pháo hoa",
            "keyCollocations": [
              "watch fireworks on New Year Eve",
              "firework display",
              "sparkling fireworks"
            ]
          },
          {
            "word": "fun",
            "pos": "noun",
            "ipa": "/fʌn/",
            "meaningVi": "sự vui đùa, niềm vui",
            "keyCollocations": [
              "have lots of fun",
              "full of fun",
              "fun activities"
            ]
          },
          {
            "word": "luck",
            "pos": "noun",
            "ipa": "/lʌk/",
            "meaningVi": "điều may mắn",
            "keyCollocations": [
              "good luck for the New Year",
              "bring good luck",
              "wish luck"
            ]
          },
          {
            "word": "lucky money",
            "pos": "noun phr",
            "ipa": "/ˈlʌki ˈmʌni/",
            "meaningVi": "tiền lì xì",
            "keyCollocations": [
              "receive lucky money in red envelopes",
              "give lucky money",
              "lucky money from grandparents"
            ]
          },
          {
            "word": "mochi rice cake",
            "pos": "noun phr",
            "ipa": "/ˈməʊtʃi raɪs keɪk/",
            "meaningVi": "bánh gạo mochi",
            "keyCollocations": [
              "eat mochi rice cakes",
              "traditional rice cake",
              "delicious mochi"
            ]
          },
          {
            "word": "relative",
            "pos": "noun",
            "ipa": "/ˈrelətɪv/",
            "meaningVi": "bà con, họ hàng",
            "keyCollocations": [
              "visit relatives at Tet",
              "close relatives",
              "greeting relatives"
            ]
          },
          {
            "word": "strike",
            "pos": "verb",
            "ipa": "/straɪk/",
            "meaningVi": "đánh, điểm (chuông, đồng hồ)",
            "keyCollocations": [
              "clock strikes midnight",
              "bells strike",
              "strike twelve"
            ]
          },
          {
            "word": "temple",
            "pos": "noun",
            "ipa": "/ˈtempl/",
            "meaningVi": "ngôi đền",
            "keyCollocations": [
              "visit the temple",
              "pray at the temple",
              "ancient temple"
            ]
          },
          {
            "word": "throw",
            "pos": "verb",
            "ipa": "/θrəʊ/",
            "meaningVi": "ném, vứt",
            "keyCollocations": [
              "do not throw rubbish",
              "throw away bad luck",
              "throw coins"
            ]
          },
          {
            "word": "welcome",
            "pos": "verb",
            "ipa": "/ˈwelkəm/",
            "meaningVi": "chào đón",
            "keyCollocations": [
              "welcome the New Year",
              "welcome guests",
              "warmly welcome"
            ]
          },
          {
            "word": "wish",
            "pos": "noun/verb",
            "ipa": "/wɪʃ/",
            "meaningVi": "điều ước, lời chúc, chúc",
            "keyCollocations": [
              "best wishes for health",
              "make a wish",
              "wish prosperity"
            ]
          }
        ]
      },
      {
        "unit": 7,
        "title": "Television",
        "themeVi": "Truyền hình",
        "suggestedKeywords": [
          {
            "word": "animated film",
            "pos": "noun phr",
            "ipa": "/ˈænɪmeɪtɪd fɪlm/",
            "meaningVi": "phim hoạt hình",
            "keyCollocations": [
              "watch animated films",
              "colourful animated film",
              "popular animated film"
            ]
          },
          {
            "word": "cartoon",
            "pos": "noun",
            "ipa": "/kɑːˈtuːn/",
            "meaningVi": "phim hoạt hình",
            "keyCollocations": [
              "funny cartoon",
              "watch cartoons",
              "cartoon characters"
            ]
          },
          {
            "word": "channel",
            "pos": "noun",
            "ipa": "/ˈtʃænl/",
            "meaningVi": "kênh truyền hình",
            "keyCollocations": [
              "change the channel",
              "sports channel",
              "educational channel"
            ]
          },
          {
            "word": "character",
            "pos": "noun",
            "ipa": "/ˈkærəktə/",
            "meaningVi": "nhân vật",
            "keyCollocations": [
              "favourite character",
              "main character",
              "cartoon character"
            ]
          },
          {
            "word": "clever",
            "pos": "adj",
            "ipa": "/ˈklevə/",
            "meaningVi": "khôn ngoan, thông minh",
            "keyCollocations": [
              "clever fox",
              "clever host",
              "clever jokes"
            ]
          },
          {
            "word": "clip",
            "pos": "noun",
            "ipa": "/klɪp/",
            "meaningVi": "đoạn phim ngắn",
            "keyCollocations": [
              "funny video clip",
              "watch short clips",
              "news clip"
            ]
          },
          {
            "word": "comedy",
            "pos": "noun",
            "ipa": "/ˈkɒmədi/",
            "meaningVi": "phim hài",
            "keyCollocations": [
              "weekend comedy",
              "laugh at comedy",
              "comedy programme"
            ]
          },
          {
            "word": "compete",
            "pos": "verb",
            "ipa": "/kəmˈpiːt/",
            "meaningVi": "thi đấu",
            "keyCollocations": [
              "compete in gameshows",
              "compete for prizes",
              "compete fairly"
            ]
          },
          {
            "word": "cute",
            "pos": "adj",
            "ipa": "/kjuːt/",
            "meaningVi": "xinh xắn, đáng yêu",
            "keyCollocations": [
              "cute animals",
              "cute cartoon character",
              "look so cute"
            ]
          },
          {
            "word": "dolphin",
            "pos": "noun",
            "ipa": "/ˈdɒlfɪn/",
            "meaningVi": "cá heo",
            "keyCollocations": [
              "intelligent dolphin",
              "dolphin documentary",
              "swim with dolphins"
            ]
          },
          {
            "word": "educate",
            "pos": "verb",
            "ipa": "/ˈedʒukeɪt/",
            "meaningVi": "giáo dục",
            "keyCollocations": [
              "educate children",
              "programmes educate viewers",
              "educate through games"
            ]
          },
          {
            "word": "educational",
            "pos": "adj",
            "ipa": "/ˌedʒuˈkeɪʃənl/",
            "meaningVi": "mang tính giáo dục",
            "keyCollocations": [
              "educational programme",
              "educational value",
              "educational channel"
            ]
          },
          {
            "word": "funny",
            "pos": "adj",
            "ipa": "/ˈfʌni/",
            "meaningVi": "buồn cười, ngộ nghĩnh",
            "keyCollocations": [
              "funny programme",
              "funny moments",
              "look funny"
            ]
          },
          {
            "word": "TV guide",
            "pos": "noun phr",
            "ipa": "/ˌtiːˈviː ɡaɪd/",
            "meaningVi": "lịch phát sóng / hướng dẫn truyền hình",
            "keyCollocations": [
              "check the TV guide",
              "read the TV guide",
              "find in the TV guide"
            ]
          },
          {
            "word": "live",
            "pos": "adj",
            "ipa": "/laɪv/",
            "meaningVi": "truyền hình trực tiếp",
            "keyCollocations": [
              "live broadcast",
              "watch live",
              "live concert on TV"
            ]
          },
          {
            "word": "programme",
            "pos": "noun",
            "ipa": "/ˈprəʊɡræm/",
            "meaningVi": "chương trình truyền hình",
            "keyCollocations": [
              "science programme",
              "favourite programme",
              "watch TV programmes"
            ]
          },
          {
            "word": "talent show",
            "pos": "noun phr",
            "ipa": "/ˈtælənt ʃəʊ/",
            "meaningVi": "cuộc thi tài năng trên TV",
            "keyCollocations": [
              "singing talent show",
              "compete in a talent show",
              "watch talent shows"
            ]
          },
          {
            "word": "viewer",
            "pos": "noun",
            "ipa": "/ˈvjuːə/",
            "meaningVi": "người xem truyền hình",
            "keyCollocations": [
              "attract millions of viewers",
              "television viewers",
              "viewer votes"
            ]
          }
        ]
      },
      {
        "unit": 8,
        "title": "Sports and games",
        "themeVi": "Thể thao và trò chơi",
        "suggestedKeywords": [
          {
            "word": "aerobics",
            "pos": "noun",
            "ipa": "/eəˈrəʊbɪks/",
            "meaningVi": "thể dục nhịp điệu",
            "keyCollocations": [
              "do aerobics",
              "aerobics class",
              "aerobics workout"
            ]
          },
          {
            "word": "career",
            "pos": "noun",
            "ipa": "/kəˈrɪə/",
            "meaningVi": "nghề nghiệp, sự nghiệp",
            "keyCollocations": [
              "sports career",
              "football career",
              "promising career"
            ]
          },
          {
            "word": "competition",
            "pos": "noun",
            "ipa": "/ˌkɒmpəˈtɪʃn/",
            "meaningVi": "cuộc thi đấu",
            "keyCollocations": [
              "win a competition",
              "sports competition",
              "enter a competition"
            ]
          },
          {
            "word": "congratulation",
            "pos": "noun",
            "ipa": "/kənˌɡrætʃəˈleɪʃn/",
            "meaningVi": "lời chúc mừng",
            "keyCollocations": [
              "congratulations on winning",
              "send congratulations",
              "warm congratulations"
            ]
          },
          {
            "word": "equipment",
            "pos": "noun",
            "ipa": "/ɪˈkwɪpmənt/",
            "meaningVi": "thiết bị, dụng cụ thể thao",
            "keyCollocations": [
              "sports equipment",
              "protective equipment",
              "gym equipment"
            ]
          },
          {
            "word": "fantastic",
            "pos": "adj",
            "ipa": "/fænˈtæstɪk/",
            "meaningVi": "tuyệt vời",
            "keyCollocations": [
              "fantastic goal",
              "fantastic match",
              "fantastic performance"
            ]
          },
          {
            "word": "fit",
            "pos": "adj",
            "ipa": "/fɪt/",
            "meaningVi": "mạnh khoẻ, cân đối",
            "keyCollocations": [
              "keep fit by playing sports",
              "stay fit and healthy",
              "physically fit"
            ]
          },
          {
            "word": "goggles",
            "pos": "noun plural",
            "ipa": "/ˈɡɒɡlz/",
            "meaningVi": "kính bơi",
            "keyCollocations": [
              "swimming goggles",
              "wear goggles in water",
              "pair of goggles"
            ]
          },
          {
            "word": "gym",
            "pos": "noun",
            "ipa": "/dʒɪm/",
            "meaningVi": "phòng tập thể dục",
            "keyCollocations": [
              "workout at the gym",
              "school gym",
              "go to the gym"
            ]
          },
          {
            "word": "karate",
            "pos": "noun",
            "ipa": "/kəˈrɑːti/",
            "meaningVi": "môn võ ka-ra-tê",
            "keyCollocations": [
              "do karate",
              "black belt in karate",
              "karate training"
            ]
          },
          {
            "word": "last",
            "pos": "verb",
            "ipa": "/lɑːst/",
            "meaningVi": "kéo dài",
            "keyCollocations": [
              "match lasts 90 minutes",
              "competition lasts three days",
              "last for hours"
            ]
          },
          {
            "word": "marathon",
            "pos": "noun",
            "ipa": "/ˈmærəθən/",
            "meaningVi": "cuộc chạy đua ma-ra-tông",
            "keyCollocations": [
              "run a marathon",
              "complete a marathon",
              "annual city marathon"
            ]
          },
          {
            "word": "racket",
            "pos": "noun",
            "ipa": "/ˈrækɪt/",
            "meaningVi": "cái vợt (cầu lông, quần vợt)",
            "keyCollocations": [
              "badminton racket",
              "tennis racket",
              "hold the racket"
            ]
          },
          {
            "word": "score",
            "pos": "verb",
            "ipa": "/skɔː/",
            "meaningVi": "ghi bàn, ghi điểm",
            "keyCollocations": [
              "score a goal",
              "score points",
              "top scorer"
            ]
          },
          {
            "word": "shoot",
            "pos": "verb",
            "ipa": "/ʃuːt/",
            "meaningVi": "sút, bắn",
            "keyCollocations": [
              "shoot the ball into the net",
              "shoot hoops",
              "shoot accurately"
            ]
          },
          {
            "word": "sporty",
            "pos": "adj",
            "ipa": "/ˈspɔːti/",
            "meaningVi": "khoẻ mạnh, yêu thích thể thao",
            "keyCollocations": [
              "sporty person",
              "look sporty",
              "sporty clothes"
            ]
          },
          {
            "word": "take place",
            "pos": "verb phr",
            "ipa": "/teɪk pleɪs/",
            "meaningVi": "diễn ra, được tổ chức",
            "keyCollocations": [
              "tournament takes place in June",
              "Olympic games take place every four years",
              "take place annually"
            ]
          },
          {
            "word": "tournament",
            "pos": "noun",
            "ipa": "/ˈtʊənəmənt/",
            "meaningVi": "giải đấu thể thao",
            "keyCollocations": [
              "football tournament",
              "win the tournament",
              "enter a tournament"
            ]
          }
        ]
      },
      {
        "unit": 9,
        "title": "Cities of the world",
        "themeVi": "Các thành phố trên thế giới",
        "suggestedKeywords": [
          {
            "word": "bank",
            "pos": "noun",
            "ipa": "/bæŋk/",
            "meaningVi": "bờ sông",
            "keyCollocations": [
              "river bank",
              "walk along the river bank",
              "sit on the bank"
            ]
          },
          {
            "word": "crowded",
            "pos": "adj",
            "ipa": "/ˈkraʊdɪd/",
            "meaningVi": "đông đúc",
            "keyCollocations": [
              "crowded city",
              "crowded streets",
              "crowded with tourists"
            ]
          },
          {
            "word": "floating market",
            "pos": "noun phr",
            "ipa": "/ˈfləʊtɪŋ ˈmɑːkɪt/",
            "meaningVi": "chợ nổi",
            "keyCollocations": [
              "visit Cai Rang floating market",
              "boats in floating market",
              "bustling floating market"
            ]
          },
          {
            "word": "helpful",
            "pos": "adj",
            "ipa": "/ˈhelpfl/",
            "meaningVi": "sẵn sàng giúp đỡ",
            "keyCollocations": [
              "helpful local people",
              "helpful guide",
              "kind and helpful"
            ]
          },
          {
            "word": "helmet",
            "pos": "noun",
            "ipa": "/ˈhelmɪt/",
            "meaningVi": "mũ bảo hiểm",
            "keyCollocations": [
              "wear a helmet",
              "bike helmet",
              "fasten your helmet"
            ]
          },
          {
            "word": "landmark",
            "pos": "noun",
            "ipa": "/ˈlændmɑːk/",
            "meaningVi": "công trình biểu tượng thu hút du khách",
            "keyCollocations": [
              "famous landmark",
              "historic landmark",
              "iconic landmark of the city"
            ]
          },
          {
            "word": "city map",
            "pos": "noun phr",
            "ipa": "/ˈsɪti mæp/",
            "meaningVi": "bản đồ thành phố",
            "keyCollocations": [
              "read the city map",
              "find on the city map",
              "tourist city map"
            ]
          },
          {
            "word": "palace",
            "pos": "noun",
            "ipa": "/ˈpæləs/",
            "meaningVi": "cung điện",
            "keyCollocations": [
              "Royal Palace",
              "visit the palace",
              "magnificent palace"
            ]
          },
          {
            "word": "postcard",
            "pos": "noun",
            "ipa": "/ˈpəʊstkɑːd/",
            "meaningVi": "bưu thiếp",
            "keyCollocations": [
              "send a postcard",
              "colourful postcard",
              "postcard from Paris"
            ]
          },
          {
            "word": "rent",
            "pos": "verb",
            "ipa": "/rent/",
            "meaningVi": "thuê",
            "keyCollocations": [
              "rent a bicycle",
              "rent an apartment",
              "rent a car"
            ]
          },
          {
            "word": "Royal Palace",
            "pos": "noun phr",
            "ipa": "/ˈrɔɪəl ˈpæləs/",
            "meaningVi": "Cung điện Hoàng gia",
            "keyCollocations": [
              "visit the Royal Palace",
              "gates of the Royal Palace",
              "historic Royal Palace"
            ]
          },
          {
            "word": "shell",
            "pos": "noun",
            "ipa": "/ʃel/",
            "meaningVi": "vỏ sò, kiến trúc hình vỏ sò",
            "keyCollocations": [
              "Sydney Opera House shells",
              "sea shells on the beach",
              "collect shells"
            ]
          },
          {
            "word": "stall",
            "pos": "noun",
            "ipa": "/stɔːl/",
            "meaningVi": "gian hàng",
            "keyCollocations": [
              "street food stall",
              "fruit stall",
              "market stall"
            ]
          },
          {
            "word": "street food",
            "pos": "noun phr",
            "ipa": "/ˈstriːt fuːd/",
            "meaningVi": "thức ăn đường phố",
            "keyCollocations": [
              "taste street food",
              "delicious street food",
              "street food stalls"
            ]
          },
          {
            "word": "Times Square",
            "pos": "noun phr",
            "ipa": "/ˌtaɪmz ˈskweə/",
            "meaningVi": "Quảng trường Thời đại (New York)",
            "keyCollocations": [
              "visit Times Square",
              "lights of Times Square",
              "New York Times Square"
            ]
          },
          {
            "word": "tower",
            "pos": "noun",
            "ipa": "/ˈtaʊə/",
            "meaningVi": "tháp",
            "keyCollocations": [
              "Eiffel Tower",
              "clock tower",
              "tall tower"
            ]
          }
        ]
      },
      {
        "unit": 10,
        "title": "Our houses in the future",
        "themeVi": "Ngôi nhà tương lai của chúng ta",
        "suggestedKeywords": [
          {
            "word": "appliance",
            "pos": "noun",
            "ipa": "/əˈplaɪəns/",
            "meaningVi": "thiết bị điện gia dụng",
            "keyCollocations": [
              "smart appliances",
              "household appliances",
              "energy-saving appliances"
            ]
          },
          {
            "word": "cottage",
            "pos": "noun",
            "ipa": "/ˈkɒtɪdʒ/",
            "meaningVi": "nhà tranh vùng quê",
            "keyCollocations": [
              "country cottage",
              "cozy cottage",
              "live in a cottage"
            ]
          },
          {
            "word": "dishwasher",
            "pos": "noun",
            "ipa": "/ˈdɪʃwɒʃə/",
            "meaningVi": "máy rửa bát",
            "keyCollocations": [
              "automatic dishwasher",
              "load the dishwasher",
              "smart dishwasher"
            ]
          },
          {
            "word": "dry",
            "pos": "verb",
            "ipa": "/draɪ/",
            "meaningVi": "làm khô, sấy khô",
            "keyCollocations": [
              "dry clothes automatically",
              "dry quickly",
              "dry the dishes"
            ]
          },
          {
            "word": "electric cooker",
            "pos": "noun phr",
            "ipa": "/ɪˈlektrɪk ˈkʊkə/",
            "meaningVi": "bếp điện",
            "keyCollocations": [
              "cook on electric cooker",
              "modern electric cooker",
              "safe electric cooker"
            ]
          },
          {
            "word": "helicopter",
            "pos": "noun",
            "ipa": "/ˈhelɪˌkɒptər/",
            "meaningVi": "máy bay trực thăng",
            "keyCollocations": [
              "helicopter on the roof",
              "travel by helicopter",
              "helicopter pad"
            ]
          },
          {
            "word": "hi-tech",
            "pos": "adj",
            "ipa": "/haɪ ˈtek/",
            "meaningVi": "công nghệ cao",
            "keyCollocations": [
              "hi-tech house",
              "hi-tech features",
              "hi-tech devices"
            ]
          },
          {
            "word": "housework",
            "pos": "noun",
            "ipa": "/ˈhaʊswɜːk/",
            "meaningVi": "công việc nhà",
            "keyCollocations": [
              "robots do housework",
              "help with housework",
              "share housework"
            ]
          },
          {
            "word": "location",
            "pos": "noun",
            "ipa": "/ləʊˈkeɪʃn/",
            "meaningVi": "địa điểm, vị trí",
            "keyCollocations": [
              "house in ocean location",
              "prime location",
              "peaceful location"
            ]
          },
          {
            "word": "look after",
            "pos": "verb phr",
            "ipa": "/lʊk ˈɑːftər/",
            "meaningVi": "trông nom, chăm sóc",
            "keyCollocations": [
              "smart robots look after children",
              "look after pets",
              "look after the house"
            ]
          },
          {
            "word": "ocean",
            "pos": "noun",
            "ipa": "/ˈəʊʃn/",
            "meaningVi": "đại dương",
            "keyCollocations": [
              "house under the ocean",
              "view of the ocean",
              "blue ocean"
            ]
          },
          {
            "word": "outside",
            "pos": "adv",
            "ipa": "/aʊtˈsaɪd/",
            "meaningVi": "ở bên ngoài",
            "keyCollocations": [
              "play outside",
              "garden outside",
              "temperature outside"
            ]
          },
          {
            "word": "solar energy",
            "pos": "noun phr",
            "ipa": "/ˌsəʊlər ˈenədʒi/",
            "meaningVi": "năng lượng mặt trời",
            "keyCollocations": [
              "powered by solar energy",
              "use solar energy",
              "solar energy panels"
            ]
          },
          {
            "word": "space",
            "pos": "noun",
            "ipa": "/speɪs/",
            "meaningVi": "không gian vũ trụ",
            "keyCollocations": [
              "house in space",
              "travel to space",
              "outer space"
            ]
          },
          {
            "word": "super",
            "pos": "adj",
            "ipa": "/ˈsuːpə/",
            "meaningVi": "siêu đẳng, thông minh vượt trội",
            "keyCollocations": [
              "super smart home",
              "super car",
              "super computer"
            ]
          },
          {
            "word": "type",
            "pos": "noun",
            "ipa": "/taɪp/",
            "meaningVi": "kiểu, loại",
            "keyCollocations": [
              "type of house",
              "different types",
              "modern type"
            ]
          },
          {
            "word": "UFO",
            "pos": "noun",
            "ipa": "/ˌjuː ef ˈəʊ/",
            "meaningVi": "vật thể bay không xác định, đĩa bay",
            "keyCollocations": [
              "UFO-shaped house",
              "see a UFO",
              "flying UFO"
            ]
          },
          {
            "word": "washing machine",
            "pos": "noun phr",
            "ipa": "/ˈwɒʃɪŋ məʃiːn/",
            "meaningVi": "máy giặt",
            "keyCollocations": [
              "automatic washing machine",
              "put clothes in washing machine",
              "smart washing machine"
            ]
          },
          {
            "word": "wireless",
            "pos": "adj",
            "ipa": "/ˈwaɪələs/",
            "meaningVi": "không dây",
            "keyCollocations": [
              "wireless controls",
              "wireless device",
              "wireless network"
            ]
          }
        ]
      },
      {
        "unit": 11,
        "title": "Our greener world",
        "themeVi": "Thế giới xanh hơn của chúng ta",
        "suggestedKeywords": [
          {
            "word": "be in need",
            "pos": "verb phr",
            "ipa": "/bi ɪn niːd/",
            "meaningVi": "cần giúp đỡ",
            "keyCollocations": [
              "help people in need",
              "children in need",
              "support families in need"
            ]
          },
          {
            "word": "charity",
            "pos": "noun",
            "ipa": "/ˈtʃærəti/",
            "meaningVi": "từ thiện",
            "keyCollocations": [
              "give to charity",
              "charity event",
              "raise money for charity"
            ]
          },
          {
            "word": "container",
            "pos": "noun",
            "ipa": "/kənˈteɪnə/",
            "meaningVi": "đồ đựng, hộp chứa",
            "keyCollocations": [
              "reusable container",
              "plastic container",
              "food container"
            ]
          },
          {
            "word": "do a survey",
            "pos": "verb phr",
            "ipa": "/du ə ˈsɜːveɪ/",
            "meaningVi": "thực hiện cuộc khảo sát",
            "keyCollocations": [
              "do a green survey",
              "do a survey on recycling",
              "students do a survey"
            ]
          },
          {
            "word": "environment",
            "pos": "noun",
            "ipa": "/ɪnˈvaɪrənmənt/",
            "meaningVi": "môi trường",
            "keyCollocations": [
              "protect the environment",
              "green environment",
              "clean environment"
            ]
          },
          {
            "word": "exchange",
            "pos": "verb",
            "ipa": "/ɪksˈtʃeɪndʒ/",
            "meaningVi": "trao đổi",
            "keyCollocations": [
              "exchange used paper for plants",
              "exchange old clothes",
              "exchange items"
            ]
          },
          {
            "word": "fair",
            "pos": "noun",
            "ipa": "/feə/",
            "meaningVi": "hội chợ",
            "keyCollocations": [
              "green fair",
              "charity fair",
              "school fair"
            ]
          },
          {
            "word": "go green",
            "pos": "verb phr",
            "ipa": "/ɡəʊ ɡriːn/",
            "meaningVi": "sống xanh (thân thiện môi trường)",
            "keyCollocations": [
              "habits to go green",
              "easy ways to go green",
              "campaign to go green"
            ]
          },
          {
            "word": "instead of",
            "pos": "prep phr",
            "ipa": "/ɪnˈsted əv/",
            "meaningVi": "thay vì, thay cho",
            "keyCollocations": [
              "walk instead of driving",
              "reusable bags instead of plastic",
              "water instead of soda"
            ]
          },
          {
            "word": "pick up",
            "pos": "verb phr",
            "ipa": "/pɪk ʌp/",
            "meaningVi": "nhặt (rác)",
            "keyCollocations": [
              "pick up litter",
              "pick up rubbish in the park",
              "volunteers pick up trash"
            ]
          },
          {
            "word": "president",
            "pos": "noun",
            "ipa": "/ˈprezɪdənt/",
            "meaningVi": "chủ tịch",
            "keyCollocations": [
              "club president",
              "school president",
              "class president"
            ]
          },
          {
            "word": "recycle",
            "pos": "verb",
            "ipa": "/ˌriːˈsaɪkl/",
            "meaningVi": "tái chế",
            "keyCollocations": [
              "recycle plastic bottles",
              "easy to recycle",
              "recycle cans and paper"
            ]
          },
          {
            "word": "recycling bin",
            "pos": "noun phr",
            "ipa": "/ˌriːˈsaɪklɪŋ bɪn/",
            "meaningVi": "thùng đựng rác tái chế",
            "keyCollocations": [
              "put into the recycling bin",
              "green recycling bin",
              "recycling bins at school"
            ]
          },
          {
            "word": "reduce",
            "pos": "verb",
            "ipa": "/rɪˈdjuːs/",
            "meaningVi": "giảm",
            "keyCollocations": [
              "reduce waste",
              "reduce plastic use",
              "reduce pollution"
            ]
          },
          {
            "word": "reuse",
            "pos": "verb",
            "ipa": "/ˌriːˈjuːz/",
            "meaningVi": "tái sử dụng",
            "keyCollocations": [
              "reuse plastic bottles",
              "reuse shopping bags",
              "reuse containers"
            ]
          },
          {
            "word": "reusable",
            "pos": "adj",
            "ipa": "/ˌriːˈjuːzəbl/",
            "meaningVi": "có thể dùng lại nhiều lần",
            "keyCollocations": [
              "reusable water bottle",
              "reusable cloth bag",
              "reusable straws"
            ]
          },
          {
            "word": "rubbish",
            "pos": "noun",
            "ipa": "/ˈrʌbɪʃ/",
            "meaningVi": "rác",
            "keyCollocations": [
              "pick up rubbish",
              "throw away rubbish",
              "sort rubbish"
            ]
          },
          {
            "word": "tip",
            "pos": "noun",
            "ipa": "/tɪp/",
            "meaningVi": "mẹo, lời khuyên hữu ích",
            "keyCollocations": [
              "green living tips",
              "useful tips",
              "tips to save water"
            ]
          },
          {
            "word": "wrap",
            "pos": "verb",
            "ipa": "/ræp/",
            "meaningVi": "gói, bọc",
            "keyCollocations": [
              "wrap gifts with paper",
              "wrap with leaves",
              "wrap carefully"
            ]
          }
        ]
      },
      {
        "unit": 12,
        "title": "Robots",
        "themeVi": "Người máy",
        "suggestedKeywords": [
          {
            "word": "age",
            "pos": "noun",
            "ipa": "/eɪdʒ/",
            "meaningVi": "độ tuổi, thời đại",
            "keyCollocations": [
              "age of robots",
              "at an early age",
              "robotics age"
            ]
          },
          {
            "word": "broken",
            "pos": "adj",
            "ipa": "/ˈbrəʊkən/",
            "meaningVi": "bị hỏng, bị vỡ",
            "keyCollocations": [
              "broken robot",
              "fix broken things",
              "broken machine"
            ]
          },
          {
            "word": "choice",
            "pos": "noun",
            "ipa": "/tʃɔɪs/",
            "meaningVi": "sự lựa chọn",
            "keyCollocations": [
              "make a choice",
              "good choice",
              "favourite choice"
            ]
          },
          {
            "word": "do the dishes",
            "pos": "verb phr",
            "ipa": "/duː ðə ˈdɪʃɪz/",
            "meaningVi": "rửa bát, đĩa",
            "keyCollocations": [
              "robots do the dishes",
              "help do the dishes",
              "do the dishes after dinner"
            ]
          },
          {
            "word": "do the washing",
            "pos": "verb phr",
            "ipa": "/duː ðə ˈwɒʃɪŋ/",
            "meaningVi": "giặt giũ quần áo",
            "keyCollocations": [
              "machine does the washing",
              "do the washing quickly",
              "help do the washing"
            ]
          },
          {
            "word": "feelings",
            "pos": "noun plural",
            "ipa": "/ˈfiːlɪŋz/",
            "meaningVi": "cảm xúc, tình cảm",
            "keyCollocations": [
              "robots have no feelings",
              "human feelings",
              "express feelings"
            ]
          },
          {
            "word": "guard",
            "pos": "noun",
            "ipa": "/ɡɑːd/",
            "meaningVi": "người canh gác, bảo vệ",
            "keyCollocations": [
              "guard robot",
              "security guard",
              "guard the house"
            ]
          },
          {
            "word": "height",
            "pos": "noun",
            "ipa": "/haɪt/",
            "meaningVi": "chiều cao",
            "keyCollocations": [
              "measure the height",
              "average height",
              "height of the robot"
            ]
          },
          {
            "word": "iron",
            "pos": "verb",
            "ipa": "/ˈaɪən/",
            "meaningVi": "là, ủi quần áo",
            "keyCollocations": [
              "iron clothes",
              "robots can iron",
              "iron carefully"
            ]
          },
          {
            "word": "pick",
            "pos": "verb",
            "ipa": "/pɪk/",
            "meaningVi": "hái, thu hoạch (hoa, quả)",
            "keyCollocations": [
              "pick fruit in the garden",
              "robots pick apples",
              "pick flowers"
            ]
          },
          {
            "word": "planet",
            "pos": "noun",
            "ipa": "/ˈplænɪt/",
            "meaningVi": "hành tinh",
            "keyCollocations": [
              "explore other planets",
              "robots on planet Mars",
              "protect our planet"
            ]
          },
          {
            "word": "price",
            "pos": "noun",
            "ipa": "/praɪs/",
            "meaningVi": "giá cả",
            "keyCollocations": [
              "affordable price",
              "high price of robots",
              "reasonable price"
            ]
          },
          {
            "word": "put away",
            "pos": "verb phr",
            "ipa": "/pʊt əˈweɪ/",
            "meaningVi": "cất, dọn dẹp",
            "keyCollocations": [
              "put away toys",
              "robots put away books",
              "put away clothes"
            ]
          },
          {
            "word": "repair",
            "pos": "verb",
            "ipa": "/rɪˈpeə/",
            "meaningVi": "sửa chữa",
            "keyCollocations": [
              "repair broken machines",
              "repair cars",
              "repair robots"
            ]
          },
          {
            "word": "robot",
            "pos": "noun",
            "ipa": "/ˈrəʊbɒt/",
            "meaningVi": "người máy",
            "keyCollocations": [
              "worker robot",
              "home robot",
              "teaching robot"
            ]
          },
          {
            "word": "space station",
            "pos": "noun phr",
            "ipa": "/speɪs ˈsteɪʃn/",
            "meaningVi": "trạm vũ trụ",
            "keyCollocations": [
              "robots on the space station",
              "International Space Station",
              "build a space station"
            ]
          },
          {
            "word": "useful",
            "pos": "adj",
            "ipa": "/ˈjuːsfl/",
            "meaningVi": "hữu ích",
            "keyCollocations": [
              "useful robot",
              "extremely useful",
              "useful for household chores"
            ]
          },
          {
            "word": "water",
            "pos": "verb",
            "ipa": "/ˈwɔːtə/",
            "meaningVi": "tưới nước (cho cây)",
            "keyCollocations": [
              "water plants",
              "water the flowers",
              "robots water the garden"
            ]
          },
          {
            "word": "weight",
            "pos": "noun",
            "ipa": "/weɪt/",
            "meaningVi": "trọng lượng",
            "keyCollocations": [
              "heavy weight",
              "measure weight",
              "lift heavy weight"
            ]
          }
        ]
      }
    ]
  },
  {
    "grade": 7,
    "gradeName": "Lớp 7 - Global Success",
    "units": [
      {
        "unit": 1,
        "title": "Hobbies",
        "themeVi": "Sở thích",
        "suggestedKeywords": [
          {
            "word": "belong to",
            "pos": "verb phr",
            "ipa": "/bɪˈlɒŋ tə/",
            "meaningVi": "thuộc về",
            "keyCollocations": [
              "belong to a club",
              "belong to me",
              "belong to nature"
            ]
          },
          {
            "word": "benefit",
            "pos": "noun",
            "ipa": "/ˈbenɪfɪt/",
            "meaningVi": "lợi ích",
            "keyCollocations": [
              "health benefits",
              "benefits of hobbies",
              "bring benefits"
            ]
          },
          {
            "word": "bug",
            "pos": "noun",
            "ipa": "/bʌɡ/",
            "meaningVi": "con bọ",
            "keyCollocations": [
              "collect bugs",
              "tiny bug",
              "garden bugs"
            ]
          },
          {
            "word": "cardboard",
            "pos": "noun",
            "ipa": "/ˈkɑːdbɔːd/",
            "meaningVi": "bìa các tông",
            "keyCollocations": [
              "make from cardboard",
              "cardboard box",
              "cardboard crafts"
            ]
          },
          {
            "word": "dollhouse",
            "pos": "noun",
            "ipa": "/ˈdɒlhaʊs/",
            "meaningVi": "nhà búp bê",
            "keyCollocations": [
              "build a dollhouse",
              "miniature dollhouse",
              "wooden dollhouse"
            ]
          },
          {
            "word": "gardening",
            "pos": "noun",
            "ipa": "/ˈɡɑːdnɪŋ/",
            "meaningVi": "làm vườn",
            "keyCollocations": [
              "enjoy gardening",
              "gardening tools",
              "gardening tips"
            ]
          },
          {
            "word": "glue",
            "pos": "noun",
            "ipa": "/ɡluː/",
            "meaningVi": "keo dán, hồ",
            "keyCollocations": [
              "stick with glue",
              "craft glue",
              "bottle of glue"
            ]
          },
          {
            "word": "horse riding",
            "pos": "noun phr",
            "ipa": "/ˈhɔːs raɪdɪŋ/",
            "meaningVi": "cưỡi ngựa",
            "keyCollocations": [
              "go horse riding",
              "horse riding club",
              "learn horse riding"
            ]
          },
          {
            "word": "insect",
            "pos": "noun",
            "ipa": "/ˈɪnsekt/",
            "meaningVi": "côn trùng",
            "keyCollocations": [
              "catch insects",
              "study insects",
              "rare insect"
            ]
          },
          {
            "word": "jogging",
            "pos": "noun",
            "ipa": "/ˈdʒɒɡɪŋ/",
            "meaningVi": "chạy bộ thư giãn",
            "keyCollocations": [
              "go jogging",
              "morning jogging",
              "jogging track"
            ]
          },
          {
            "word": "making models",
            "pos": "noun phr",
            "ipa": "/ˈmeɪkɪŋ ˈmɒdlz/",
            "meaningVi": "làm mô hình",
            "keyCollocations": [
              "hobby of making models",
              "making plane models",
              "enjoy making models"
            ]
          },
          {
            "word": "maturity",
            "pos": "noun",
            "ipa": "/məˈtʃʊərəti/",
            "meaningVi": "sự trưởng thành",
            "keyCollocations": [
              "gain maturity",
              "show maturity",
              "emotional maturity"
            ]
          },
          {
            "word": "patient",
            "pos": "adj",
            "ipa": "/ˈpeɪʃnt/",
            "meaningVi": "kiên nhẫn",
            "keyCollocations": [
              "be patient",
              "patient person",
              "need to be patient"
            ]
          },
          {
            "word": "popular",
            "pos": "adj",
            "ipa": "/ˈpɒpjələ/",
            "meaningVi": "được nhiều người ưa thích",
            "keyCollocations": [
              "popular hobby",
              "popular with teens",
              "increasingly popular"
            ]
          },
          {
            "word": "responsibility",
            "pos": "noun",
            "ipa": "/rɪˌspɒnsəˈbɪləti/",
            "meaningVi": "sự chịu trách nhiệm",
            "keyCollocations": [
              "take responsibility",
              "sense of responsibility",
              "develop responsibility"
            ]
          },
          {
            "word": "set",
            "pos": "verb",
            "ipa": "/set/",
            "meaningVi": "(mặt trời) lặn",
            "keyCollocations": [
              "sun sets",
              "watch the sun set",
              "before the sun sets"
            ]
          },
          {
            "word": "stress",
            "pos": "noun",
            "ipa": "/stres/",
            "meaningVi": "sự căng thẳng",
            "keyCollocations": [
              "relieve stress",
              "under stress",
              "cause stress"
            ]
          },
          {
            "word": "take on",
            "pos": "verb phr",
            "ipa": "/teɪk ɒn/",
            "meaningVi": "nhận thêm",
            "keyCollocations": [
              "take on new hobbies",
              "take on challenges",
              "take on responsibility"
            ]
          },
          {
            "word": "unusual",
            "pos": "adj",
            "ipa": "/ʌnˈjuːʒuəl/",
            "meaningVi": "khác thường, độc đáo",
            "keyCollocations": [
              "unusual hobby",
              "something unusual",
              "unusual collection"
            ]
          },
          {
            "word": "valuable",
            "pos": "adj",
            "ipa": "/ˈvæljuəbl/",
            "meaningVi": "quý giá",
            "keyCollocations": [
              "valuable lesson",
              "valuable hobby",
              "valuable collection"
            ]
          },
          {
            "word": "yoga",
            "pos": "noun",
            "ipa": "/ˈjəʊɡə/",
            "meaningVi": "môn yoga",
            "keyCollocations": [
              "do yoga",
              "yoga classes",
              "practice yoga daily"
            ]
          }
        ]
      },
      {
        "unit": 2,
        "title": "Healthy living",
        "themeVi": "Sống lành mạnh",
        "suggestedKeywords": [
          {
            "word": "acne",
            "pos": "noun",
            "ipa": "/ˈækni/",
            "meaningVi": "mụn trứng cá",
            "keyCollocations": [
              "treat acne",
              "suffer from acne",
              "prevent acne"
            ]
          },
          {
            "word": "affect",
            "pos": "verb",
            "ipa": "/əˈfekt/",
            "meaningVi": "tác động, ảnh hưởng đến",
            "keyCollocations": [
              "affect your health",
              "affect skin",
              "adversely affect"
            ]
          },
          {
            "word": "avoid",
            "pos": "verb",
            "ipa": "/əˈvɔɪd/",
            "meaningVi": "tránh",
            "keyCollocations": [
              "avoid sweet food",
              "avoid fast food",
              "avoid eye strain"
            ]
          },
          {
            "word": "chapped",
            "pos": "adj",
            "ipa": "/tʃæpt/",
            "meaningVi": "bị nứt nẻ (da, môi)",
            "keyCollocations": [
              "chapped lips",
              "chapped skin",
              "cure chapped skin"
            ]
          },
          {
            "word": "dim",
            "pos": "adj",
            "ipa": "/dɪm/",
            "meaningVi": "lờ mờ, không đủ sáng",
            "keyCollocations": [
              "dim light",
              "read in dim light",
              "avoid dim lighting"
            ]
          },
          {
            "word": "disease",
            "pos": "noun",
            "ipa": "/dɪˈziːz/",
            "meaningVi": "bệnh tật",
            "keyCollocations": [
              "prevent disease",
              "infectious disease",
              "fight disease"
            ]
          },
          {
            "word": "eye drops",
            "pos": "noun phr",
            "ipa": "/ˈaɪ drɒps/",
            "meaningVi": "thuốc nhỏ mắt",
            "keyCollocations": [
              "use eye drops",
              "soothing eye drops",
              "bottle of eye drops"
            ]
          },
          {
            "word": "fat",
            "pos": "noun",
            "ipa": "/fæt/",
            "meaningVi": "mỡ, chất béo",
            "keyCollocations": [
              "animal fat",
              "reduce fat intake",
              "low fat"
            ]
          },
          {
            "word": "fit",
            "pos": "adj",
            "ipa": "/fɪt/",
            "meaningVi": "gọn gàng, cân đối",
            "keyCollocations": [
              "keep fit",
              "stay fit",
              "physically fit"
            ]
          },
          {
            "word": "health",
            "pos": "noun",
            "ipa": "/helθ/",
            "meaningVi": "sức khoẻ",
            "keyCollocations": [
              "good health",
              "protect your health",
              "health care"
            ]
          },
          {
            "word": "healthy",
            "pos": "adj",
            "ipa": "/ˈhelθi/",
            "meaningVi": "khoẻ mạnh, lành mạnh",
            "keyCollocations": [
              "healthy diet",
              "healthy habits",
              "stay healthy"
            ]
          },
          {
            "word": "indoors",
            "pos": "adv",
            "ipa": "/ˌɪnˈdɔːz/",
            "meaningVi": "trong nhà",
            "keyCollocations": [
              "stay indoors",
              "exercise indoors",
              "play indoors"
            ]
          },
          {
            "word": "lip balm",
            "pos": "noun phr",
            "ipa": "/ˈlɪp bɑːm/",
            "meaningVi": "kem bôi môi chống nứt nẻ",
            "keyCollocations": [
              "apply lip balm",
              "use lip balm",
              "pocket lip balm"
            ]
          },
          {
            "word": "pimple",
            "pos": "noun",
            "ipa": "/ˈpɪmpl/",
            "meaningVi": "mụn",
            "keyCollocations": [
              "get pimples",
              "pimples on face",
              "treat pimples"
            ]
          },
          {
            "word": "pop",
            "pos": "verb",
            "ipa": "/pɒp/",
            "meaningVi": "nặn (mụn)",
            "keyCollocations": [
              "do not pop pimples",
              "pop a blister",
              "pop spots"
            ]
          },
          {
            "word": "protein",
            "pos": "noun",
            "ipa": "/ˈprəʊtiːn/",
            "meaningVi": "chất đạm",
            "keyCollocations": [
              "rich in protein",
              "source of protein",
              "protein intake"
            ]
          },
          {
            "word": "skin condition",
            "pos": "noun phr",
            "ipa": "/skɪn kənˈdɪʃn/",
            "meaningVi": "tình trạng da",
            "keyCollocations": [
              "improve skin condition",
              "healthy skin condition",
              "common skin condition"
            ]
          },
          {
            "word": "soybean",
            "pos": "noun",
            "ipa": "/ˈsɔɪbiːn/",
            "meaningVi": "đậu nành",
            "keyCollocations": [
              "soybean milk",
              "eat soybeans",
              "rich soybean protein"
            ]
          },
          {
            "word": "sunburn",
            "pos": "noun",
            "ipa": "/ˈsʌnbɜːn/",
            "meaningVi": "sự cháy nắng",
            "keyCollocations": [
              "avoid sunburn",
              "treat sunburn",
              "painful sunburn"
            ]
          },
          {
            "word": "tofu",
            "pos": "noun",
            "ipa": "/ˈtəʊfuː/",
            "meaningVi": "đậu phụ",
            "keyCollocations": [
              "fried tofu",
              "eat tofu",
              "fresh tofu"
            ]
          },
          {
            "word": "virus",
            "pos": "noun",
            "ipa": "/ˈvaɪrəs/",
            "meaningVi": "vi-rút",
            "keyCollocations": [
              "flu virus",
              "kill viruses",
              "catch a virus"
            ]
          },
          {
            "word": "vitamin",
            "pos": "noun",
            "ipa": "/ˈvɪtəmɪn/",
            "meaningVi": "vitamin",
            "keyCollocations": [
              "rich in vitamins",
              "vitamin C",
              "daily vitamins"
            ]
          }
        ]
      },
      {
        "unit": 3,
        "title": "Community service",
        "themeVi": "Dịch vụ cộng đồng",
        "suggestedKeywords": [
          {
            "word": "board game",
            "pos": "noun phr",
            "ipa": "/ˈbɔːd ɡeɪm/",
            "meaningVi": "trò chơi trên bàn cờ",
            "keyCollocations": [
              "play board games",
              "bring board games",
              "fun board game"
            ]
          },
          {
            "word": "clean-up activity",
            "pos": "noun phr",
            "ipa": "/ˈkliːn ʌp ækˈtɪvəti/",
            "meaningVi": "hoạt động dọn dẹp",
            "keyCollocations": [
              "weekend clean-up activity",
              "school clean-up activity",
              "join clean-up activities"
            ]
          },
          {
            "word": "collect",
            "pos": "verb",
            "ipa": "/kəˈlekt/",
            "meaningVi": "thu thập, quyên góp",
            "keyCollocations": [
              "collect warm clothes",
              "collect rubbish",
              "collect books"
            ]
          },
          {
            "word": "community",
            "pos": "noun",
            "ipa": "/kəˈmjuːnəti/",
            "meaningVi": "cộng đồng",
            "keyCollocations": [
              "help the community",
              "community development",
              "local community"
            ]
          },
          {
            "word": "community service",
            "pos": "noun phr",
            "ipa": "/kəˌmjuːnəti ˈsɜːvɪs/",
            "meaningVi": "dịch vụ công ích cộng đồng",
            "keyCollocations": [
              "do community service",
              "benefits of community service",
              "volunteer community service"
            ]
          },
          {
            "word": "develop",
            "pos": "verb",
            "ipa": "/dɪˈveləp/",
            "meaningVi": "phát triển",
            "keyCollocations": [
              "develop life skills",
              "develop community",
              "develop empathy"
            ]
          },
          {
            "word": "donate",
            "pos": "verb",
            "ipa": "/dəʊˈneɪt/",
            "meaningVi": "cho, tặng, quyên góp",
            "keyCollocations": [
              "donate blood",
              "donate books",
              "donate clothes"
            ]
          },
          {
            "word": "elderly",
            "pos": "adj",
            "ipa": "/ˈeldəli/",
            "meaningVi": "lớn tuổi, cao tuổi",
            "keyCollocations": [
              "help the elderly",
              "elderly people",
              "elderly residents"
            ]
          },
          {
            "word": "exchange",
            "pos": "verb",
            "ipa": "/ɪksˈtʃeɪndʒ/",
            "meaningVi": "trao đổi",
            "keyCollocations": [
              "exchange used paper for plants",
              "exchange books",
              "exchange gifts"
            ]
          },
          {
            "word": "flooded",
            "pos": "adj",
            "ipa": "/ˈflʌdɪd/",
            "meaningVi": "bị lũ lụt",
            "keyCollocations": [
              "flooded areas",
              "help flooded victims",
              "flooded villages"
            ]
          },
          {
            "word": "homeless",
            "pos": "adj",
            "ipa": "/ˈhəʊmləs/",
            "meaningVi": "vô gia cư",
            "keyCollocations": [
              "homeless people",
              "shelter for the homeless",
              "feed the homeless"
            ]
          },
          {
            "word": "mountainous",
            "pos": "adj",
            "ipa": "/ˈmaʊntənəs/",
            "meaningVi": "vùng núi",
            "keyCollocations": [
              "mountainous area",
              "children in mountainous areas",
              "remote mountainous regions"
            ]
          },
          {
            "word": "nursing",
            "pos": "noun",
            "ipa": "/ˈnɜːsɪŋ/",
            "meaningVi": "chăm sóc, điều dưỡng",
            "keyCollocations": [
              "nursing care",
              "nursing assistance",
              "provide nursing"
            ]
          },
          {
            "word": "nursing home",
            "pos": "noun phr",
            "ipa": "/ˈnɜːsɪŋ həʊm/",
            "meaningVi": "viện dưỡng lão",
            "keyCollocations": [
              "visit a nursing home",
              "elderly in nursing homes",
              "volunteer at a nursing home"
            ]
          },
          {
            "word": "orphanage",
            "pos": "noun",
            "ipa": "/ˈɔːfənɪdʒ/",
            "meaningVi": "trại trẻ mồ côi",
            "keyCollocations": [
              "visit an orphanage",
              "donate to an orphanage",
              "children at the orphanage"
            ]
          },
          {
            "word": "plant",
            "pos": "verb",
            "ipa": "/plɑːnt/",
            "meaningVi": "trồng cây",
            "keyCollocations": [
              "plant trees",
              "plant flowers",
              "plant in the school yard"
            ]
          },
          {
            "word": "proud",
            "pos": "adj",
            "ipa": "/praʊd/",
            "meaningVi": "tự hào",
            "keyCollocations": [
              "proud of our work",
              "feel proud",
              "proud to volunteer"
            ]
          },
          {
            "word": "provide",
            "pos": "verb",
            "ipa": "/prəˈvaɪd/",
            "meaningVi": "cung cấp",
            "keyCollocations": [
              "provide food",
              "provide free meals",
              "provide shelter"
            ]
          },
          {
            "word": "rural area",
            "pos": "noun phr",
            "ipa": "/ˈrʊərəl ˈeəriə/",
            "meaningVi": "vùng nông thôn",
            "keyCollocations": [
              "in rural areas",
              "schools in rural areas",
              "support rural areas"
            ]
          },
          {
            "word": "skill",
            "pos": "noun",
            "ipa": "/skɪl/",
            "meaningVi": "kĩ năng",
            "keyCollocations": [
              "practical skills",
              "teamwork skills",
              "communication skills"
            ]
          },
          {
            "word": "teenager",
            "pos": "noun",
            "ipa": "/ˈtiːneɪdʒə/",
            "meaningVi": "thanh thiếu niên",
            "keyCollocations": [
              "encourage teenagers",
              "active teenagers",
              "teenagers in volunteering"
            ]
          },
          {
            "word": "tutor",
            "pos": "verb",
            "ipa": "/ˈtjuːtə/",
            "meaningVi": "phụ đạo, dạy kèm",
            "keyCollocations": [
              "tutor younger kids",
              "tutor English",
              "volunteer to tutor"
            ]
          },
          {
            "word": "volunteer",
            "pos": "noun/verb",
            "ipa": "/ˌvɒlənˈtɪə/",
            "meaningVi": "tình nguyện viên, làm tình nguyện",
            "keyCollocations": [
              "work as a volunteer",
              "volunteer to help",
              "volunteer club"
            ]
          }
        ]
      },
      {
        "unit": 4,
        "title": "Music and arts",
        "themeVi": "Âm nhạc và nghệ thuật",
        "suggestedKeywords": [
          {
            "word": "anthem",
            "pos": "noun",
            "ipa": "/ˈænθəm/",
            "meaningVi": "bài quốc ca",
            "keyCollocations": [
              "national anthem",
              "sing the anthem",
              "compose an anthem"
            ]
          },
          {
            "word": "character",
            "pos": "noun",
            "ipa": "/ˈkærəktə/",
            "meaningVi": "nhân vật trong tác phẩm",
            "keyCollocations": [
              "main character",
              "fictional character",
              "puppet character"
            ]
          },
          {
            "word": "compose",
            "pos": "verb",
            "ipa": "/kəmˈpəʊz/",
            "meaningVi": "soạn, biên soạn nhạc",
            "keyCollocations": [
              "compose music",
              "compose songs",
              "compose a symphony"
            ]
          },
          {
            "word": "composer",
            "pos": "noun",
            "ipa": "/kəmˈpəʊzə/",
            "meaningVi": "nhà soạn nhạc, nhạc sĩ",
            "keyCollocations": [
              "famous composer",
              "classical composer",
              "Vietnamese composer"
            ]
          },
          {
            "word": "concert",
            "pos": "noun",
            "ipa": "/ˈkɒnsət/",
            "meaningVi": "buổi hoà nhạc",
            "keyCollocations": [
              "go to a concert",
              "live concert",
              "attend a concert"
            ]
          },
          {
            "word": "control",
            "pos": "verb",
            "ipa": "/kənˈtrəʊl/",
            "meaningVi": "điều khiển",
            "keyCollocations": [
              "control puppets",
              "control strings",
              "control instruments"
            ]
          },
          {
            "word": "country music",
            "pos": "noun phr",
            "ipa": "/ˈkʌntri mjuːzɪk/",
            "meaningVi": "nhạc đồng quê",
            "keyCollocations": [
              "listen to country music",
              "fan of country music",
              "country music singer"
            ]
          },
          {
            "word": "exhibition",
            "pos": "noun",
            "ipa": "/ˌeksɪˈbɪʃn/",
            "meaningVi": "cuộc triển lãm",
            "keyCollocations": [
              "art exhibition",
              "photo exhibition",
              "visit an exhibition"
            ]
          },
          {
            "word": "folk music",
            "pos": "noun phr",
            "ipa": "/ˈfəʊk mjuːzɪk/",
            "meaningVi": "nhạc dân gian, truyền thống",
            "keyCollocations": [
              "traditional folk music",
              "appreciate folk music",
              "enjoy folk music"
            ]
          },
          {
            "word": "gallery",
            "pos": "noun",
            "ipa": "/ˈɡæləri/",
            "meaningVi": "phòng triển lãm tranh",
            "keyCollocations": [
              "art gallery",
              "visit a gallery",
              "exhibit in a gallery"
            ]
          },
          {
            "word": "musical instrument",
            "pos": "noun phr",
            "ipa": "/ˌmjuːzɪkl ˈɪnstrəmənt/",
            "meaningVi": "nhạc cụ",
            "keyCollocations": [
              "play a musical instrument",
              "traditional musical instruments",
              "learn musical instruments"
            ]
          },
          {
            "word": "originate",
            "pos": "verb",
            "ipa": "/əˈrɪdʒɪneɪt/",
            "meaningVi": "bắt nguồn, xuất phát từ",
            "keyCollocations": [
              "originate in Vietnam",
              "originate from folk culture",
              "originate in 11th century"
            ]
          },
          {
            "word": "perform",
            "pos": "verb",
            "ipa": "/pəˈfɔːm/",
            "meaningVi": "biểu diễn, trình diễn",
            "keyCollocations": [
              "perform on stage",
              "perform songs",
              "perform water puppetry"
            ]
          },
          {
            "word": "performance",
            "pos": "noun",
            "ipa": "/pəˈfɔːməns/",
            "meaningVi": "buổi biểu diễn",
            "keyCollocations": [
              "puppet performance",
              "spectacular performance",
              "enjoy the performance"
            ]
          },
          {
            "word": "photography",
            "pos": "noun",
            "ipa": "/fəˈtɒɡrəfi/",
            "meaningVi": "nhiếp ảnh",
            "keyCollocations": [
              "passion for photography",
              "learn photography",
              "artistic photography"
            ]
          },
          {
            "word": "portrait",
            "pos": "noun",
            "ipa": "/ˈpɔːtreɪt/",
            "meaningVi": "bức chân dung",
            "keyCollocations": [
              "paint a portrait",
              "self-portrait",
              "family portrait"
            ]
          },
          {
            "word": "prefer",
            "pos": "verb",
            "ipa": "/prɪˈfɜː/",
            "meaningVi": "thích hơn",
            "keyCollocations": [
              "prefer pop music to rock",
              "prefer painting",
              "greatly prefer"
            ]
          },
          {
            "word": "puppet",
            "pos": "noun",
            "ipa": "/ˈpʌpɪt/",
            "meaningVi": "con rối",
            "keyCollocations": [
              "water puppet",
              "string puppet",
              "wooden puppet"
            ]
          },
          {
            "word": "sculpture",
            "pos": "noun",
            "ipa": "/ˈskʌlptʃə/",
            "meaningVi": "điêu khắc, tác phẩm điêu khắc",
            "keyCollocations": [
              "stone sculpture",
              "bronze sculpture",
              "famous sculpture"
            ]
          },
          {
            "word": "water puppetry",
            "pos": "noun phr",
            "ipa": "/ˈwɔːtə ˈpʌpɪtri/",
            "meaningVi": "múa rối nước",
            "keyCollocations": [
              "traditional water puppetry",
              "watch water puppetry",
              "art of water puppetry"
            ]
          }
        ]
      },
      {
        "unit": 5,
        "title": "Food and drink",
        "themeVi": "Ẩm thực và đồ uống",
        "suggestedKeywords": [
          {
            "word": "beef",
            "pos": "noun",
            "ipa": "/biːf/",
            "meaningVi": "thịt bò",
            "keyCollocations": [
              "beef noodle soup",
              "roast beef",
              "tender beef"
            ]
          },
          {
            "word": "butter",
            "pos": "noun",
            "ipa": "/ˈbʌtə/",
            "meaningVi": "bơ",
            "keyCollocations": [
              "spread butter on bread",
              "melted butter",
              "fresh butter"
            ]
          },
          {
            "word": "dish",
            "pos": "noun",
            "ipa": "/dɪʃ/",
            "meaningVi": "món ăn",
            "keyCollocations": [
              "traditional dish",
              "delicious dish",
              "speciality dish"
            ]
          },
          {
            "word": "eel",
            "pos": "noun",
            "ipa": "/iːl/",
            "meaningVi": "con lươn",
            "keyCollocations": [
              "eel soup",
              "eel vermicelli",
              "catch an eel"
            ]
          },
          {
            "word": "flour",
            "pos": "noun",
            "ipa": "/flaʊə/",
            "meaningVi": "bột mì, bột gạo",
            "keyCollocations": [
              "wheat flour",
              "rice flour",
              "mix flour"
            ]
          },
          {
            "word": "fried",
            "pos": "adj",
            "ipa": "/fraɪd/",
            "meaningVi": "được chiên, rán",
            "keyCollocations": [
              "fried rice",
              "fried chicken",
              "fried tofu"
            ]
          },
          {
            "word": "green tea",
            "pos": "noun phr",
            "ipa": "/ˌɡriːn ˈtiː/",
            "meaningVi": "chè xanh, trà xanh",
            "keyCollocations": [
              "drink green tea",
              "cup of green tea",
              "fragrant green tea"
            ]
          },
          {
            "word": "ingredient",
            "pos": "noun",
            "ipa": "/ɪnˈɡriːdiənt/",
            "meaningVi": "nguyên liệu, thành phần",
            "keyCollocations": [
              "fresh ingredients",
              "key ingredient",
              "main ingredient"
            ]
          },
          {
            "word": "juice",
            "pos": "noun",
            "ipa": "/dʒuːs/",
            "meaningVi": "nước ép",
            "keyCollocations": [
              "orange juice",
              "apple juice",
              "fresh fruit juice"
            ]
          },
          {
            "word": "lemonade",
            "pos": "noun",
            "ipa": "/ˌleməˈneɪd/",
            "meaningVi": "nước chanh",
            "keyCollocations": [
              "glass of lemonade",
              "cool lemonade",
              "make lemonade"
            ]
          },
          {
            "word": "mineral water",
            "pos": "noun phr",
            "ipa": "/ˈmɪnərəl wɔːtə/",
            "meaningVi": "nước khoáng",
            "keyCollocations": [
              "bottle of mineral water",
              "drink mineral water",
              "pure mineral water"
            ]
          },
          {
            "word": "noodles",
            "pos": "noun plural",
            "ipa": "/ˈnuːdlz/",
            "meaningVi": "mì, phở, bún",
            "keyCollocations": [
              "bowl of noodles",
              "instant noodles",
              "rice noodles"
            ]
          },
          {
            "word": "omelette",
            "pos": "noun",
            "ipa": "/ˈɒmlət/",
            "meaningVi": "trứng tráng",
            "keyCollocations": [
              "make an omelette",
              "cheese omelette",
              "tasty omelette"
            ]
          },
          {
            "word": "onion",
            "pos": "noun",
            "ipa": "/ˈʌnjən/",
            "meaningVi": "củ hành",
            "keyCollocations": [
              "chop onions",
              "spring onions",
              "sliced onions"
            ]
          },
          {
            "word": "pancake",
            "pos": "noun",
            "ipa": "/ˈpænkeɪk/",
            "meaningVi": "bánh kếp",
            "keyCollocations": [
              "eat pancakes",
              "sweet pancake",
              "Vietnamese pancake"
            ]
          },
          {
            "word": "pepper",
            "pos": "noun",
            "ipa": "/ˈpepə/",
            "meaningVi": "hạt tiêu",
            "keyCollocations": [
              "black pepper",
              "pinch of pepper",
              "ground pepper"
            ]
          },
          {
            "word": "pie",
            "pos": "noun",
            "ipa": "/paɪ/",
            "meaningVi": "bánh nướng, bánh hấp",
            "keyCollocations": [
              "apple pie",
              "meat pie",
              "bake a pie"
            ]
          },
          {
            "word": "pork",
            "pos": "noun",
            "ipa": "/pɔːk/",
            "meaningVi": "thịt lợn",
            "keyCollocations": [
              "roast pork",
              "grilled pork",
              "slice of pork"
            ]
          },
          {
            "word": "recipe",
            "pos": "noun",
            "ipa": "/ˈresɪpi/",
            "meaningVi": "công thức nấu ăn",
            "keyCollocations": [
              "follow a recipe",
              "secret recipe",
              "traditional recipe"
            ]
          },
          {
            "word": "roast",
            "pos": "adj",
            "ipa": "/rəʊst/",
            "meaningVi": "quay, nướng",
            "keyCollocations": [
              "roast duck",
              "roast chicken",
              "roast meat"
            ]
          },
          {
            "word": "salt",
            "pos": "noun",
            "ipa": "/sɔːlt/",
            "meaningVi": "muối",
            "keyCollocations": [
              "pinch of salt",
              "table salt",
              "add salt"
            ]
          },
          {
            "word": "sauce",
            "pos": "noun",
            "ipa": "/sɔːs/",
            "meaningVi": "nước chấm, nước xốt",
            "keyCollocations": [
              "fish sauce",
              "tomato sauce",
              "soya sauce"
            ]
          },
          {
            "word": "shrimp",
            "pos": "noun",
            "ipa": "/ʃrɪmp/",
            "meaningVi": "con tôm",
            "keyCollocations": [
              "fried shrimp",
              "fresh shrimp",
              "shrimp paste"
            ]
          },
          {
            "word": "soup",
            "pos": "noun",
            "ipa": "/suːp/",
            "meaningVi": "xúp, canh",
            "keyCollocations": [
              "hot soup",
              "bowl of soup",
              "chicken soup"
            ]
          },
          {
            "word": "spring roll",
            "pos": "noun phr",
            "ipa": "/sprɪŋ rəʊl/",
            "meaningVi": "nem rán, chả giò",
            "keyCollocations": [
              "crispy spring rolls",
              "make spring rolls",
              "traditional spring rolls"
            ]
          },
          {
            "word": "tablespoon",
            "pos": "noun",
            "ipa": "/ˈteɪblspuːn/",
            "meaningVi": "muỗng canh, thìa súp",
            "keyCollocations": [
              "one tablespoon of sugar",
              "tablespoon of oil",
              "add a tablespoon"
            ]
          },
          {
            "word": "teaspoon",
            "pos": "noun",
            "ipa": "/ˈtiːspuːn/",
            "meaningVi": "thìa cà phê",
            "keyCollocations": [
              "teaspoon of salt",
              "half a teaspoon",
              "stir with a teaspoon"
            ]
          },
          {
            "word": "toast",
            "pos": "noun",
            "ipa": "/təʊst/",
            "meaningVi": "bánh mì nướng",
            "keyCollocations": [
              "eat toast",
              "butter on toast",
              "slice of toast"
            ]
          }
        ]
      },
      {
        "unit": 6,
        "title": "A visit to a school",
        "themeVi": "Thăm một ngôi trường",
        "suggestedKeywords": [
          {
            "word": "celebrate",
            "pos": "verb",
            "ipa": "/ˈselɪbreɪt/",
            "meaningVi": "kỉ niệm, tổ chức",
            "keyCollocations": [
              "celebrate school founding",
              "celebrate achievements",
              "celebrate Teachers Day"
            ]
          },
          {
            "word": "entrance exam",
            "pos": "noun phr",
            "ipa": "/ˈentrəns ɪɡˈzæm/",
            "meaningVi": "kì thi đầu vào",
            "keyCollocations": [
              "pass the entrance exam",
              "high school entrance exam",
              "prepare for the entrance exam"
            ]
          },
          {
            "word": "equipment",
            "pos": "noun",
            "ipa": "/ɪˈkwɪpmənt/",
            "meaningVi": "đồ dùng, thiết bị",
            "keyCollocations": [
              "school equipment",
              "modern equipment",
              "laboratory equipment"
            ]
          },
          {
            "word": "extra",
            "pos": "adj",
            "ipa": "/ˈekstrə/",
            "meaningVi": "thêm, phụ trội",
            "keyCollocations": [
              "extra classes",
              "extra activities",
              "extra lessons"
            ]
          },
          {
            "word": "facility",
            "pos": "noun",
            "ipa": "/fəˈsɪləti/",
            "meaningVi": "thiết bị, cơ sở vật chất",
            "keyCollocations": [
              "sports facilities",
              "school facilities",
              "improve facilities"
            ]
          },
          {
            "word": "gifted",
            "pos": "adj",
            "ipa": "/ˈɡɪftɪd/",
            "meaningVi": "năng khiếu",
            "keyCollocations": [
              "gifted school",
              "gifted students",
              "specialized gifted classes"
            ]
          },
          {
            "word": "laboratory",
            "pos": "noun",
            "ipa": "/ləˈbɒrətri/",
            "meaningVi": "phòng thí nghiệm",
            "keyCollocations": [
              "science laboratory",
              "experiment in the laboratory",
              "modern laboratory"
            ]
          },
          {
            "word": "lower secondary school",
            "pos": "noun phr",
            "ipa": "/ˈləʊə ˈsekəndri skuːl/",
            "meaningVi": "trường trung học cơ sở (cấp 2)",
            "keyCollocations": [
              "study at lower secondary school",
              "enter lower secondary school",
              "lower secondary curriculum"
            ]
          },
          {
            "word": "midterm",
            "pos": "adj",
            "ipa": "/ˌmɪdˈtɜːm/",
            "meaningVi": "giữa học kì",
            "keyCollocations": [
              "midterm test",
              "midterm break",
              "midterm scores"
            ]
          },
          {
            "word": "outdoor",
            "pos": "adj",
            "ipa": "/ˈaʊtdɔː/",
            "meaningVi": "ngoài trời",
            "keyCollocations": [
              "outdoor activities",
              "outdoor sports",
              "outdoor learning"
            ]
          },
          {
            "word": "private",
            "pos": "adj",
            "ipa": "/ˈpraɪvət/",
            "meaningVi": "tư thục, riêng tư",
            "keyCollocations": [
              "private school",
              "private tutor",
              "private lessons"
            ]
          },
          {
            "word": "projector",
            "pos": "noun",
            "ipa": "/prəˈdʒektə/",
            "meaningVi": "máy chiếu",
            "keyCollocations": [
              "use a projector",
              "classroom projector",
              "overhead projector"
            ]
          },
          {
            "word": "resource",
            "pos": "noun",
            "ipa": "/rɪˈsɔːs/",
            "meaningVi": "tài nguyên, nguồn lực",
            "keyCollocations": [
              "learning resources",
              "library resources",
              "online resources"
            ]
          },
          {
            "word": "royal",
            "pos": "adj",
            "ipa": "/ˈrɔɪəl/",
            "meaningVi": "thuộc hoàng gia",
            "keyCollocations": [
              "royal school",
              "royal history",
              "royal palace"
            ]
          },
          {
            "word": "service",
            "pos": "noun",
            "ipa": "/ˈsɜːvɪs/",
            "meaningVi": "dịch vụ",
            "keyCollocations": [
              "school bus service",
              "canteen service",
              "library service"
            ]
          },
          {
            "word": "share",
            "pos": "verb",
            "ipa": "/ʃeə/",
            "meaningVi": "chia sẻ",
            "keyCollocations": [
              "share textbooks",
              "share ideas",
              "share resources"
            ]
          },
          {
            "word": "talented",
            "pos": "adj",
            "ipa": "/ˈtæləntɪd/",
            "meaningVi": "tài năng",
            "keyCollocations": [
              "talented students",
              "talented teacher",
              "show talent"
            ]
          },
          {
            "word": "well-known",
            "pos": "adj",
            "ipa": "/ˌwel ˈnəʊn/",
            "meaningVi": "nổi tiếng",
            "keyCollocations": [
              "well-known school",
              "well-known teacher",
              "nationally well-known"
            ]
          }
        ]
      },
      {
        "unit": 7,
        "title": "Traffic",
        "themeVi": "Giao thông",
        "suggestedKeywords": [
          {
            "word": "bumpy",
            "pos": "adj",
            "ipa": "/ˈbʌmpi/",
            "meaningVi": "lồi lõm, nhiều ổ gà",
            "keyCollocations": [
              "bumpy road",
              "bumpy ride",
              "bumpy street"
            ]
          },
          {
            "word": "distance",
            "pos": "noun",
            "ipa": "/ˈdɪstəns/",
            "meaningVi": "khoảng cách",
            "keyCollocations": [
              "safe distance",
              "long distance",
              "short distance"
            ]
          },
          {
            "word": "fine",
            "pos": "verb/noun",
            "ipa": "/faɪn/",
            "meaningVi": "phạt tiền",
            "keyCollocations": [
              "pay a fine",
              "fine drivers",
              "heavily fined"
            ]
          },
          {
            "word": "fly",
            "pos": "verb",
            "ipa": "/flaɪ/",
            "meaningVi": "bay, đi máy bay",
            "keyCollocations": [
              "fly by plane",
              "fly to Hanoi",
              "birds fly"
            ]
          },
          {
            "word": "handlebars",
            "pos": "noun plural",
            "ipa": "/ˈhændlbɑːz/",
            "meaningVi": "tay lái, ghi-đông",
            "keyCollocations": [
              "hold both handlebars",
              "bicycle handlebars",
              "grip the handlebars"
            ]
          },
          {
            "word": "lane",
            "pos": "noun",
            "ipa": "/leɪn/",
            "meaningVi": "làn đường",
            "keyCollocations": [
              "bike lane",
              "bus lane",
              "stay in your lane"
            ]
          },
          {
            "word": "obey traffic rules",
            "pos": "verb phr",
            "ipa": "/əˈbeɪ ˈtræfɪk ruːlz/",
            "meaningVi": "tuân theo luật giao thông",
            "keyCollocations": [
              "strictly obey traffic rules",
              "students must obey traffic rules",
              "importance of obeying traffic rules"
            ]
          },
          {
            "word": "passenger",
            "pos": "noun",
            "ipa": "/ˈpæsɪndʒə/",
            "meaningVi": "hành khách",
            "keyCollocations": [
              "bus passenger",
              "seat for passengers",
              "safety of passengers"
            ]
          },
          {
            "word": "pavement",
            "pos": "noun",
            "ipa": "/ˈpeɪvmənt/",
            "meaningVi": "vỉa hè (cho người đi bộ)",
            "keyCollocations": [
              "walk on the pavement",
              "pavement parking",
              "clear the pavement"
            ]
          },
          {
            "word": "pedestrian",
            "pos": "noun",
            "ipa": "/pəˈdestriən/",
            "meaningVi": "người đi bộ",
            "keyCollocations": [
              "pedestrian crossing",
              "safety for pedestrians",
              "pedestrian bridge"
            ]
          },
          {
            "word": "plane",
            "pos": "noun",
            "ipa": "/pleɪn/",
            "meaningVi": "máy bay",
            "keyCollocations": [
              "catch a plane",
              "travel by plane",
              "plane takes off"
            ]
          },
          {
            "word": "road sign",
            "pos": "noun phr",
            "ipa": "/ˈrəʊd saɪn/",
            "meaningVi": "biển báo giao thông",
            "keyCollocations": [
              "observe road signs",
              "meaning of road signs",
              "look at road signs"
            ]
          },
          {
            "word": "roof",
            "pos": "noun",
            "ipa": "/ruːf/",
            "meaningVi": "nóc xe, mái nhà",
            "keyCollocations": [
              "roof of the car",
              "do not ride on the roof",
              "roof rack"
            ]
          },
          {
            "word": "safety",
            "pos": "noun",
            "ipa": "/ˈseɪfti/",
            "meaningVi": "sự an toàn",
            "keyCollocations": [
              "road safety",
              "traffic safety",
              "safety helmet"
            ]
          },
          {
            "word": "seatbelt",
            "pos": "noun",
            "ipa": "/ˈsiːtbelt/",
            "meaningVi": "dây an toàn",
            "keyCollocations": [
              "fasten seatbelt",
              "wear a seatbelt",
              "click seatbelt"
            ]
          },
          {
            "word": "signal",
            "pos": "noun",
            "ipa": "/ˈsɪɡnəl/",
            "meaningVi": "tín hiệu, dấu hiệu",
            "keyCollocations": [
              "traffic signal",
              "turn signal",
              "red signal"
            ]
          },
          {
            "word": "traffic jam",
            "pos": "noun phr",
            "ipa": "/ˈtræfɪk dʒæm/",
            "meaningVi": "sự tắc đường",
            "keyCollocations": [
              "stuck in a traffic jam",
              "heavy traffic jam",
              "avoid traffic jams"
            ]
          },
          {
            "word": "traffic rule",
            "pos": "noun phr",
            "ipa": "/ˈtræfɪk ruːl/",
            "meaningVi": "luật giao thông",
            "keyCollocations": [
              "learn traffic rules",
              "follow traffic rules",
              "break traffic rules"
            ]
          },
          {
            "word": "vehicle",
            "pos": "noun",
            "ipa": "/ˈviːəkl/",
            "meaningVi": "xe cộ, phương tiện",
            "keyCollocations": [
              "motor vehicle",
              "electric vehicle",
              "public transport vehicle"
            ]
          },
          {
            "word": "zebra crossing",
            "pos": "noun phr",
            "ipa": "/ˌziːbrə ˈkrɒsɪŋ/",
            "meaningVi": "vạch kẻ cho người đi bộ qua đường",
            "keyCollocations": [
              "cross at the zebra crossing",
              "stop at the zebra crossing",
              "paint zebra crossings"
            ]
          }
        ]
      },
      {
        "unit": 8,
        "title": "Film",
        "themeVi": "Phim ảnh",
        "suggestedKeywords": [
          {
            "word": "acting",
            "pos": "noun",
            "ipa": "/ˈæktɪŋ/",
            "meaningVi": "diễn xuất",
            "keyCollocations": [
              "great acting",
              "superb acting",
              "acting skills"
            ]
          },
          {
            "word": "comedy",
            "pos": "noun",
            "ipa": "/ˈkɒmədi/",
            "meaningVi": "phim hài",
            "keyCollocations": [
              "romantic comedy",
              "watch a comedy",
              "hilarious comedy"
            ]
          },
          {
            "word": "confusing",
            "pos": "adj",
            "ipa": "/kənˈfjuːzɪŋ/",
            "meaningVi": "khó hiểu, gây bối rối",
            "keyCollocations": [
              "confusing plot",
              "feel confusing",
              "confusing ending"
            ]
          },
          {
            "word": "director",
            "pos": "noun",
            "ipa": "/dɪˈrektə/",
            "meaningVi": "đạo diễn",
            "keyCollocations": [
              "film director",
              "famous director",
              "directed by"
            ]
          },
          {
            "word": "documentary",
            "pos": "noun",
            "ipa": "/ˌdɒkjəˈmentri/",
            "meaningVi": "phim tài liệu",
            "keyCollocations": [
              "nature documentary",
              "watch a documentary",
              "historical documentary"
            ]
          },
          {
            "word": "dull",
            "pos": "adj",
            "ipa": "/dʌl/",
            "meaningVi": "buồn tẻ, chán ngắt",
            "keyCollocations": [
              "dull film",
              "feel dull",
              "dull storyline"
            ]
          },
          {
            "word": "enjoyable",
            "pos": "adj",
            "ipa": "/ɪnˈdʒɔɪəbl/",
            "meaningVi": "thú vị, thích thú",
            "keyCollocations": [
              "enjoyable movie",
              "truly enjoyable",
              "enjoyable to watch"
            ]
          },
          {
            "word": "fantasy",
            "pos": "noun",
            "ipa": "/ˈfæntəsi/",
            "meaningVi": "phim giả tưởng",
            "keyCollocations": [
              "fantasy film",
              "fantasy world",
              "popular fantasy"
            ]
          },
          {
            "word": "frightening",
            "pos": "adj",
            "ipa": "/ˈfraɪtnɪŋ/",
            "meaningVi": "làm sợ hãi, rùng rợn",
            "keyCollocations": [
              "frightening scenes",
              "frightening monster",
              "feel frightening"
            ]
          },
          {
            "word": "gripping",
            "pos": "adj",
            "ipa": "/ˈɡrɪpɪŋ/",
            "meaningVi": "hấp dẫn, kịch tính",
            "keyCollocations": [
              "gripping storyline",
              "gripping plot",
              "gripping film"
            ]
          },
          {
            "word": "horror film",
            "pos": "noun phr",
            "ipa": "/ˈhɒrə fɪlm/",
            "meaningVi": "phim kinh dị",
            "keyCollocations": [
              "scary horror film",
              "watch horror films",
              "fan of horror films"
            ]
          },
          {
            "word": "moving",
            "pos": "adj",
            "ipa": "/ˈmuːvɪŋ/",
            "meaningVi": "cảm động",
            "keyCollocations": [
              "moving story",
              "moving scene",
              "deeply moving"
            ]
          },
          {
            "word": "must-see",
            "pos": "noun/adj",
            "ipa": "/mʌst ˈsiː/",
            "meaningVi": "bộ phim hấp dẫn phải xem",
            "keyCollocations": [
              "must-see film",
              "this year must-see",
              "declared a must-see"
            ]
          },
          {
            "word": "poster",
            "pos": "noun",
            "ipa": "/ˈpəʊstə/",
            "meaningVi": "áp phích quảng cáo",
            "keyCollocations": [
              "movie poster",
              "film poster",
              "design a poster"
            ]
          },
          {
            "word": "review",
            "pos": "noun",
            "ipa": "/rɪˈvjuː/",
            "meaningVi": "bài phê bình phim",
            "keyCollocations": [
              "read film reviews",
              "positive review",
              "film reviewer"
            ]
          },
          {
            "word": "scary",
            "pos": "adj",
            "ipa": "/ˈskeəri/",
            "meaningVi": "sợ hãi, rùng rợn",
            "keyCollocations": [
              "scary movie",
              "scary music",
              "feel scary"
            ]
          },
          {
            "word": "science fiction",
            "pos": "noun phr",
            "ipa": "/ˈsaɪəns ˈfɪkʃn/",
            "meaningVi": "phim khoa học viễn tưởng",
            "keyCollocations": [
              "science fiction film",
              "sci-fi movie",
              "science fiction novel"
            ]
          },
          {
            "word": "shocking",
            "pos": "adj",
            "ipa": "/ˈʃɒkɪŋ/",
            "meaningVi": "làm sửng sốt",
            "keyCollocations": [
              "shocking ending",
              "shocking twist",
              "shocking revelation"
            ]
          },
          {
            "word": "star",
            "pos": "verb",
            "ipa": "/stɑː/",
            "meaningVi": "đóng vai chính",
            "keyCollocations": [
              "star in a movie",
              "movie stars Tom Holland",
              "guest star"
            ]
          },
          {
            "word": "survey",
            "pos": "noun",
            "ipa": "/ˈsɜːveɪ/",
            "meaningVi": "cuộc khảo sát",
            "keyCollocations": [
              "conduct a survey",
              "survey on favourite films",
              "survey results"
            ]
          },
          {
            "word": "twin",
            "pos": "noun",
            "ipa": "/twɪn/",
            "meaningVi": "đứa trẻ sinh đôi",
            "keyCollocations": [
              "twin brother",
              "twin sister",
              "identical twins"
            ]
          },
          {
            "word": "violent",
            "pos": "adj",
            "ipa": "/ˈvaɪələnt/",
            "meaningVi": "bạo lực",
            "keyCollocations": [
              "violent scenes",
              "too violent",
              "avoid violent movies"
            ]
          },
          {
            "word": "wizard",
            "pos": "noun",
            "ipa": "/ˈwɪzəd/",
            "meaningVi": "phù thuỷ",
            "keyCollocations": [
              "young wizard",
              "wizard world",
              "wizard magic"
            ]
          }
        ]
      },
      {
        "unit": 9,
        "title": "Festival around the world",
        "themeVi": "Lễ hội trên thế giới",
        "suggestedKeywords": [
          {
            "word": "candy",
            "pos": "noun",
            "ipa": "/ˈkændi/",
            "meaningVi": "kẹo",
            "keyCollocations": [
              "give candy",
              "sweet candy",
              "Halloween candy"
            ]
          },
          {
            "word": "Cannes Film Festival",
            "pos": "noun phr",
            "ipa": "/kæn fɪlm ˈfestɪvl/",
            "meaningVi": "Liên hoan phim Cannes",
            "keyCollocations": [
              "held at Cannes Film Festival",
              "attend Cannes Film Festival",
              "award at Cannes Film Festival"
            ]
          },
          {
            "word": "carve",
            "pos": "verb",
            "ipa": "/kɑːv/",
            "meaningVi": "chạm, khắc",
            "keyCollocations": [
              "carve pumpkins",
              "carve statues",
              "carve patterns"
            ]
          },
          {
            "word": "costume",
            "pos": "noun",
            "ipa": "/ˈkɒstjuːm/",
            "meaningVi": "trang phục lễ hội",
            "keyCollocations": [
              "wear costumes",
              "festival costume",
              "colourful costume"
            ]
          },
          {
            "word": "decorate",
            "pos": "verb",
            "ipa": "/ˈdekəreɪt/",
            "meaningVi": "trang trí",
            "keyCollocations": [
              "decorate houses",
              "decorate streets",
              "decorate trees"
            ]
          },
          {
            "word": "decoration",
            "pos": "noun",
            "ipa": "/ˌdekəˈreɪʃn/",
            "meaningVi": "đồ trang trí",
            "keyCollocations": [
              "put up decorations",
              "holiday decorations",
              "festive decorations"
            ]
          },
          {
            "word": "disappointing",
            "pos": "adj",
            "ipa": "/ˌdɪsəˈpɔɪntɪŋ/",
            "meaningVi": "đáng thất vọng",
            "keyCollocations": [
              "disappointing weather",
              "disappointing result",
              "feel disappointing"
            ]
          },
          {
            "word": "disappointment",
            "pos": "noun",
            "ipa": "/ˌdɪsəˈpɔɪntmənt/",
            "meaningVi": "sự thất vọng",
            "keyCollocations": [
              "express disappointment",
              "great disappointment",
              "to our disappointment"
            ]
          },
          {
            "word": "Dutch",
            "pos": "adj/noun",
            "ipa": "/dʌtʃ/",
            "meaningVi": "thuộc về Hà Lan, người Hà Lan",
            "keyCollocations": [
              "Dutch festival",
              "Dutch culture",
              "Dutch tulip"
            ]
          },
          {
            "word": "Easter",
            "pos": "noun",
            "ipa": "/ˈiːstə/",
            "meaningVi": "Lễ Phục sinh",
            "keyCollocations": [
              "celebrate Easter",
              "Easter bunny",
              "Easter egg hunt"
            ]
          },
          {
            "word": "feast",
            "pos": "noun",
            "ipa": "/fiːst/",
            "meaningVi": "bữa tiệc lớn",
            "keyCollocations": [
              "holiday feast",
              "traditional feast",
              "enjoy a feast"
            ]
          },
          {
            "word": "feature",
            "pos": "verb",
            "ipa": "/ˈfiːtʃə/",
            "meaningVi": "trình diễn đặc biệt, có nét đặc trưng",
            "keyCollocations": [
              "feature parades",
              "feature fireworks",
              "prominently feature"
            ]
          },
          {
            "word": "fireworks display",
            "pos": "noun phr",
            "ipa": "/ˈfaɪəwɜːks dɪˈspleɪ/",
            "meaningVi": "màn bắn pháo hoa",
            "keyCollocations": [
              "watch fireworks display",
              "spectacular fireworks display",
              "annual fireworks display"
            ]
          },
          {
            "word": "float",
            "pos": "noun",
            "ipa": "/fləʊt/",
            "meaningVi": "xe diễu hành trang hoàng",
            "keyCollocations": [
              "colourful festival float",
              "carnival float",
              "parade float"
            ]
          },
          {
            "word": "folk dance",
            "pos": "noun phr",
            "ipa": "/ˈfəʊk dɑːns/",
            "meaningVi": "điệu múa dân gian",
            "keyCollocations": [
              "perform folk dances",
              "traditional folk dance",
              "join the folk dance"
            ]
          },
          {
            "word": "Mid-Autumn Festival",
            "pos": "noun phr",
            "ipa": "/ˈmɪd ɔːtəm ˈfestɪvl/",
            "meaningVi": "Tết Trung thu",
            "keyCollocations": [
              "celebrate Mid-Autumn Festival",
              "Mid-Autumn Festival lanterns",
              "mooncakes in Mid-Autumn Festival"
            ]
          },
          {
            "word": "Netherlands",
            "pos": "noun",
            "ipa": "/ˈneðələndz/",
            "meaningVi": "nước Hà Lan",
            "keyCollocations": [
              "in the Netherlands",
              "tulip festival in the Netherlands",
              "visit the Netherlands"
            ]
          },
          {
            "word": "parade",
            "pos": "noun",
            "ipa": "/pəˈreɪd/",
            "meaningVi": "cuộc diễu hành",
            "keyCollocations": [
              "street parade",
              "march in a parade",
              "carnival parade"
            ]
          },
          {
            "word": "prosperity",
            "pos": "noun",
            "ipa": "/prɒˈsperəti/",
            "meaningVi": "sự thịnh vượng, phồn vinh",
            "keyCollocations": [
              "symbol of prosperity",
              "wish prosperity",
              "peace and prosperity"
            ]
          },
          {
            "word": "symbol",
            "pos": "noun",
            "ipa": "/ˈsɪmbl/",
            "meaningVi": "biểu tượng",
            "keyCollocations": [
              "symbol of luck",
              "symbol of peace",
              "cultural symbol"
            ]
          },
          {
            "word": "take part in",
            "pos": "verb phr",
            "ipa": "/teɪk pɑːt ɪn/",
            "meaningVi": "tham gia",
            "keyCollocations": [
              "take part in festivals",
              "take part in games",
              "take part in parades"
            ]
          },
          {
            "word": "Thanksgiving",
            "pos": "noun",
            "ipa": "/ˌθæŋksˈɡɪvɪŋ/",
            "meaningVi": "Lễ Tạ ơn",
            "keyCollocations": [
              "Thanksgiving dinner",
              "celebrate Thanksgiving",
              "Thanksgiving turkey"
            ]
          }
        ]
      },
      {
        "unit": 10,
        "title": "Energy sources",
        "themeVi": "Các nguồn năng lượng",
        "suggestedKeywords": [
          {
            "word": "available",
            "pos": "adj",
            "ipa": "/əˈveɪləbl/",
            "meaningVi": "sẵn có",
            "keyCollocations": [
              "readily available",
              "available energy",
              "abundantly available"
            ]
          },
          {
            "word": "electricity",
            "pos": "noun",
            "ipa": "/ɪˌlekˈtrɪsəti/",
            "meaningVi": "điện năng",
            "keyCollocations": [
              "generate electricity",
              "save electricity",
              "conduct electricity"
            ]
          },
          {
            "word": "energy",
            "pos": "noun",
            "ipa": "/ˈenədʒi/",
            "meaningVi": "năng lượng",
            "keyCollocations": [
              "renewable energy",
              "save energy",
              "clean energy"
            ]
          },
          {
            "word": "hydro",
            "pos": "adj",
            "ipa": "/ˈhaɪdrəʊ/",
            "meaningVi": "liên quan đến nước (thủy năng)",
            "keyCollocations": [
              "hydro power",
              "hydro electricity",
              "hydro energy"
            ]
          },
          {
            "word": "light bulb",
            "pos": "noun phr",
            "ipa": "/ˈlaɪt bʌlb/",
            "meaningVi": "bóng đèn",
            "keyCollocations": [
              "energy-saving light bulb",
              "LED light bulb",
              "turn off light bulbs"
            ]
          },
          {
            "word": "limited",
            "pos": "adj",
            "ipa": "/ˈlɪmɪtɪd/",
            "meaningVi": "bị hạn chế",
            "keyCollocations": [
              "limited resources",
              "limited supply",
              "fossil fuels are limited"
            ]
          },
          {
            "word": "non-renewable",
            "pos": "adj",
            "ipa": "/ˌnɒn rɪˈnjuːəbl/",
            "meaningVi": "không thể tái tạo",
            "keyCollocations": [
              "non-renewable energy",
              "non-renewable sources",
              "coal is non-renewable"
            ]
          },
          {
            "word": "nuclear",
            "pos": "adj",
            "ipa": "/ˈnjuːkliə/",
            "meaningVi": "thuộc về hạt nhân",
            "keyCollocations": [
              "nuclear energy",
              "nuclear power plant",
              "nuclear power"
            ]
          },
          {
            "word": "overcool",
            "pos": "verb",
            "ipa": "/ˌəʊvəˈkuːl/",
            "meaningVi": "làm cho quá lạnh",
            "keyCollocations": [
              "do not overcool the room",
              "avoid overcooling",
              "overcool the house"
            ]
          },
          {
            "word": "overheat",
            "pos": "verb",
            "ipa": "/ˌəʊvəˈhiːt/",
            "meaningVi": "làm cho quá nóng",
            "keyCollocations": [
              "avoid overheating",
              "do not overheat rooms",
              "devices overheat"
            ]
          },
          {
            "word": "panel",
            "pos": "noun",
            "ipa": "/ˈpænl/",
            "meaningVi": "tấm ghép, tấm pin",
            "keyCollocations": [
              "solar panel",
              "install panels",
              "roof panels"
            ]
          },
          {
            "word": "produce",
            "pos": "verb",
            "ipa": "/prəˈdjuːs/",
            "meaningVi": "sản xuất",
            "keyCollocations": [
              "produce clean electricity",
              "produce power",
              "produce energy"
            ]
          },
          {
            "word": "reduce",
            "pos": "verb",
            "ipa": "/rɪˈdjuːs/",
            "meaningVi": "giảm",
            "keyCollocations": [
              "reduce energy consumption",
              "reduce waste",
              "reduce emissions"
            ]
          },
          {
            "word": "renewable",
            "pos": "adj",
            "ipa": "/rɪˈnjuːəbl/",
            "meaningVi": "có thể tái tạo",
            "keyCollocations": [
              "renewable energy sources",
              "renewable power",
              "switch to renewable"
            ]
          },
          {
            "word": "replace",
            "pos": "verb",
            "ipa": "/rɪˈpleɪs/",
            "meaningVi": "thay thế",
            "keyCollocations": [
              "replace fossil fuels",
              "replace ordinary bulbs",
              "replace old sources"
            ]
          },
          {
            "word": "solar",
            "pos": "adj",
            "ipa": "/ˈsəʊlə/",
            "meaningVi": "liên quan đến mặt trời",
            "keyCollocations": [
              "solar energy",
              "solar panel",
              "solar power"
            ]
          },
          {
            "word": "source",
            "pos": "noun",
            "ipa": "/sɔːs/",
            "meaningVi": "nguồn",
            "keyCollocations": [
              "source of energy",
              "alternative source",
              "natural source"
            ]
          },
          {
            "word": "syllable",
            "pos": "noun",
            "ipa": "/ˈsɪləbl/",
            "meaningVi": "âm tiết",
            "keyCollocations": [
              "stressed syllable",
              "number of syllables",
              "two syllables"
            ]
          },
          {
            "word": "tap",
            "pos": "noun",
            "ipa": "/tæp/",
            "meaningVi": "vòi nước",
            "keyCollocations": [
              "turn off the tap",
              "dripping tap",
              "running tap"
            ]
          },
          {
            "word": "warm",
            "pos": "verb",
            "ipa": "/wɔːm/",
            "meaningVi": "làm ấm lên, nóng lên",
            "keyCollocations": [
              "warm the house",
              "sun warms the water",
              "warm up"
            ]
          }
        ]
      },
      {
        "unit": 11,
        "title": "Travelling in the future",
        "themeVi": "Giao thông trong tương lai",
        "suggestedKeywords": [
          {
            "word": "appear",
            "pos": "verb",
            "ipa": "/əˈpɪə/",
            "meaningVi": "xuất hiện",
            "keyCollocations": [
              "appear in cities",
              "suddenly appear",
              "new vehicles appear"
            ]
          },
          {
            "word": "autopilot",
            "pos": "noun/adj",
            "ipa": "/ˈɔːtəʊpaɪlət/",
            "meaningVi": "lái tự động",
            "keyCollocations": [
              "fly on autopilot",
              "autopilot mode",
              "autopilot system"
            ]
          },
          {
            "word": "bamboo-copter",
            "pos": "noun phr",
            "ipa": "/ˌbæmˈbuː ˈkɒptə/",
            "meaningVi": "chong chóng tre",
            "keyCollocations": [
              "fly with a bamboo-copter",
              "Doraemon bamboo-copter",
              "mini bamboo-copter"
            ]
          },
          {
            "word": "comfortable",
            "pos": "adj",
            "ipa": "/ˈkʌmftəbl/",
            "meaningVi": "thoải mái, đủ tiện nghi",
            "keyCollocations": [
              "comfortable vehicle",
              "feel comfortable",
              "comfortable seat"
            ]
          },
          {
            "word": "convenient",
            "pos": "adj",
            "ipa": "/kənˈviːniənt/",
            "meaningVi": "thuận tiện, tiện lợi",
            "keyCollocations": [
              "convenient travel",
              "convenient transport",
              "very convenient"
            ]
          },
          {
            "word": "disappear",
            "pos": "verb",
            "ipa": "/ˌdɪsəˈpɪə/",
            "meaningVi": "biến mất",
            "keyCollocations": [
              "traffic jams will disappear",
              "disappear quickly",
              "fumes disappear"
            ]
          },
          {
            "word": "driverless",
            "pos": "adj",
            "ipa": "/ˈdraɪvələs/",
            "meaningVi": "không người lái",
            "keyCollocations": [
              "driverless car",
              "driverless train",
              "driverless vehicle"
            ]
          },
          {
            "word": "eco-friendly",
            "pos": "adj",
            "ipa": "/ˌiːkəʊ ˈfrendli/",
            "meaningVi": "thân thiện với môi trường",
            "keyCollocations": [
              "eco-friendly transport",
              "eco-friendly fuel",
              "eco-friendly ship"
            ]
          },
          {
            "word": "economical",
            "pos": "adj",
            "ipa": "/ˌiːkəˈnɒmɪkl/",
            "meaningVi": "tiết kiệm nhiên liệu",
            "keyCollocations": [
              "economical car",
              "economical mode of travel",
              "very economical"
            ]
          },
          {
            "word": "fume",
            "pos": "noun",
            "ipa": "/fjuːm/",
            "meaningVi": "khói, khí thải",
            "keyCollocations": [
              "exhaust fumes",
              "toxic fumes",
              "no fumes"
            ]
          },
          {
            "word": "function",
            "pos": "noun",
            "ipa": "/ˈfʌŋkʃn/",
            "meaningVi": "chức năng",
            "keyCollocations": [
              "safety function",
              "automatic function",
              "special functions"
            ]
          },
          {
            "word": "hyperloop",
            "pos": "noun",
            "ipa": "/ˈhaɪpəluːp/",
            "meaningVi": "hệ thống giao thông tốc độ cao trong ống",
            "keyCollocations": [
              "travel by hyperloop",
              "hyperloop train",
              "speed of hyperloop"
            ]
          },
          {
            "word": "mode of travel",
            "pos": "noun phr",
            "ipa": "/məʊd əv ˈtrævl/",
            "meaningVi": "phương thức đi lại",
            "keyCollocations": [
              "fastest mode of travel",
              "future mode of travel",
              "convenient mode of travel"
            ]
          },
          {
            "word": "pedal",
            "pos": "verb",
            "ipa": "/ˈpedl/",
            "meaningVi": "đạp (xe đạp)",
            "keyCollocations": [
              "pedal a bicycle",
              "pedal to school",
              "pedal hard"
            ]
          },
          {
            "word": "run on",
            "pos": "verb phr",
            "ipa": "/rʌn ɒn/",
            "meaningVi": "chạy bằng (nhiên liệu nào)",
            "keyCollocations": [
              "run on electricity",
              "run on solar energy",
              "run on green fuel"
            ]
          },
          {
            "word": "sail",
            "pos": "verb",
            "ipa": "/seɪl/",
            "meaningVi": "lướt buồm, đi thuyền buồm",
            "keyCollocations": [
              "sail across the ocean",
              "sail on water",
              "sail smoothly"
            ]
          },
          {
            "word": "skyTran",
            "pos": "noun",
            "ipa": "/skaɪtræn/",
            "meaningVi": "hệ thống tàu điện trên không tự hành",
            "keyCollocations": [
              "ride skyTran",
              "skyTran pods",
              "skyTran network"
            ]
          },
          {
            "word": "solar-powered",
            "pos": "adj",
            "ipa": "/ˌsəʊlə ˈpaʊəd/",
            "meaningVi": "chạy bằng năng lượng mặt trời",
            "keyCollocations": [
              "solar-powered car",
              "solar-powered vehicle",
              "solar-powered plane"
            ]
          },
          {
            "word": "solar-powered ship",
            "pos": "noun phr",
            "ipa": "/ˌsəʊlə ˈpaʊəd ʃɪp/",
            "meaningVi": "tàu thuỷ chạy bằng năng lượng mặt trời",
            "keyCollocations": [
              "sail in a solar-powered ship",
              "green solar-powered ship",
              "modern solar-powered ship"
            ]
          },
          {
            "word": "solowheel",
            "pos": "noun",
            "ipa": "/ˈsəʊləʊwiːl/",
            "meaningVi": "phương tiện tự hành cá nhân 1 bánh",
            "keyCollocations": [
              "ride a solowheel",
              "electric solowheel",
              "portable solowheel"
            ]
          },
          {
            "word": "walkcar",
            "pos": "noun",
            "ipa": "/wɔːkɑː/",
            "meaningVi": "ô tô tự hành dùng chân",
            "keyCollocations": [
              "ride a walkcar",
              "portable walkcar",
              "stand on a walkcar"
            ]
          },
          {
            "word": "teleporter",
            "pos": "noun",
            "ipa": "/ˈtelɪpɔːtə/",
            "meaningVi": "phương tiện di chuyển tức thời",
            "keyCollocations": [
              "step into a teleporter",
              "teleporter device",
              "instant teleporter"
            ]
          }
        ]
      },
      {
        "unit": 12,
        "title": "English-speaking countries",
        "themeVi": "Các nước nói tiếng Anh",
        "suggestedKeywords": [
          {
            "word": "amazement",
            "pos": "noun",
            "ipa": "/əˈmeɪzmənt/",
            "meaningVi": "sự kinh ngạc thích thú",
            "keyCollocations": [
              "in amazement",
              "watch with amazement",
              "expression of amazement"
            ]
          },
          {
            "word": "amazing",
            "pos": "adj",
            "ipa": "/əˈmeɪzɪŋ/",
            "meaningVi": "ngạc nhiên, kì diệu",
            "keyCollocations": [
              "amazing landscape",
              "amazing wildlife",
              "amazing country"
            ]
          },
          {
            "word": "ancient",
            "pos": "adj",
            "ipa": "/ˈeɪnʃənt/",
            "meaningVi": "cổ, lâu đời",
            "keyCollocations": [
              "ancient castle",
              "ancient monuments",
              "ancient heritage"
            ]
          },
          {
            "word": "Australia",
            "pos": "noun",
            "ipa": "/ɒˈstreɪliə/",
            "meaningVi": "nước Úc",
            "keyCollocations": [
              "visit Australia",
              "native animals in Australia",
              "Sydney in Australia"
            ]
          },
          {
            "word": "Canada",
            "pos": "noun",
            "ipa": "/ˈkænədə/",
            "meaningVi": "nước Ca-na-đa",
            "keyCollocations": [
              "bilingual Canada",
              "nature of Canada",
              "visit Canada"
            ]
          },
          {
            "word": "capital",
            "pos": "noun",
            "ipa": "/ˈkæpɪtl/",
            "meaningVi": "thủ đô",
            "keyCollocations": [
              "capital city",
              "capital of the UK",
              "visit the capital"
            ]
          },
          {
            "word": "castle",
            "pos": "noun",
            "ipa": "/ˈkɑːsl/",
            "meaningVi": "pháo đài, lâu đài",
            "keyCollocations": [
              "Edinburgh Castle",
              "explore castles",
              "historic castle"
            ]
          },
          {
            "word": "coastline",
            "pos": "noun",
            "ipa": "/ˈkəʊstlaɪn/",
            "meaningVi": "đường bờ biển",
            "keyCollocations": [
              "stunning coastline",
              "long coastline",
              "along the coastline"
            ]
          },
          {
            "word": "culture",
            "pos": "noun",
            "ipa": "/ˈkʌltʃə/",
            "meaningVi": "nền văn hoá",
            "keyCollocations": [
              "rich culture",
              "traditional culture",
              "western culture"
            ]
          },
          {
            "word": "historic",
            "pos": "adj",
            "ipa": "/hɪˈstɒrɪk/",
            "meaningVi": "có giá trị lịch sử",
            "keyCollocations": [
              "historic landmarks",
              "historic town",
              "historic event"
            ]
          },
          {
            "word": "island country",
            "pos": "noun phr",
            "ipa": "/ˈaɪlənd ˈkʌntri/",
            "meaningVi": "đảo quốc",
            "keyCollocations": [
              "beautiful island country",
              "New Zealand is an island country",
              "explore an island country"
            ]
          },
          {
            "word": "kilt",
            "pos": "noun",
            "ipa": "/kɪlt/",
            "meaningVi": "váy truyền thống của đàn ông Scotland",
            "keyCollocations": [
              "wear a tartan kilt",
              "traditional Scottish kilt",
              "bagpiper in a kilt"
            ]
          },
          {
            "word": "landscape",
            "pos": "noun",
            "ipa": "/ˈlændskeɪp/",
            "meaningVi": "phong cảnh",
            "keyCollocations": [
              "breathtaking landscape",
              "dramatic landscape",
              "natural landscape"
            ]
          },
          {
            "word": "local",
            "pos": "adj",
            "ipa": "/ˈləʊkl/",
            "meaningVi": "thuộc về địa phương",
            "keyCollocations": [
              "local people",
              "local customs",
              "local food"
            ]
          },
          {
            "word": "native",
            "pos": "adj",
            "ipa": "/ˈneɪtɪv/",
            "meaningVi": "nguyên thuỷ, bản xứ",
            "keyCollocations": [
              "native animals",
              "native culture",
              "native English speakers"
            ]
          },
          {
            "word": "New Zealand",
            "pos": "noun",
            "ipa": "/ˌnjuː ˈziːlənd/",
            "meaningVi": "nước Niu Di-lân",
            "keyCollocations": [
              "travel to New Zealand",
              "islands of New Zealand",
              "Maori culture in New Zealand"
            ]
          },
          {
            "word": "penguin",
            "pos": "noun",
            "ipa": "/ˈpeŋɡwɪn/",
            "meaningVi": "chim cánh cụt",
            "keyCollocations": [
              "see penguins",
              "penguin colony",
              "fairy penguin"
            ]
          },
          {
            "word": "shining",
            "pos": "adj",
            "ipa": "/ˈʃaɪnɪŋ/",
            "meaningVi": "chói chang, chan hòa ánh nắng",
            "keyCollocations": [
              "shining sun",
              "bright shining sky",
              "shining light"
            ]
          },
          {
            "word": "sunset",
            "pos": "noun",
            "ipa": "/ˈsʌnset/",
            "meaningVi": "mặt trời lặn, hoàng hôn",
            "keyCollocations": [
              "watch the sunset",
              "beautiful sunset",
              "at sunset"
            ]
          },
          {
            "word": "tattoo",
            "pos": "noun",
            "ipa": "/təˈtuː/",
            "meaningVi": "hình xăm",
            "keyCollocations": [
              "Maori tattoo",
              "traditional tattoo",
              "symbolic tattoo"
            ]
          },
          {
            "word": "UK",
            "pos": "noun",
            "ipa": "/ˌjuː ˈkeɪ/",
            "meaningVi": "Vương quốc Anh",
            "keyCollocations": [
              "in the UK",
              "visit the UK",
              "cities in the UK"
            ]
          },
          {
            "word": "USA",
            "pos": "noun",
            "ipa": "/ˌjuː es ˈeɪ/",
            "meaningVi": "Hợp chúng quốc Hoa Kì",
            "keyCollocations": [
              "in the USA",
              "states in the USA",
              "travel to the USA"
            ]
          },
          {
            "word": "tower",
            "pos": "noun",
            "ipa": "/ˈtaʊə/",
            "meaningVi": "tháp",
            "keyCollocations": [
              "Tower of London",
              "tall tower",
              "clock tower"
            ]
          }
        ]
      }
    ]
  },
  {
    "grade": 8,
    "gradeName": "Lớp 8 - Global Success",
    "units": [
      {
        "unit": 1,
        "title": "Leisure time",
        "themeVi": "Thời gian rảnh rỗi",
        "suggestedKeywords": [
          {
            "word": "balance",
            "pos": "noun",
            "ipa": "/ˈbæləns/",
            "meaningVi": "sự thăng bằng, sự cân bằng",
            "keyCollocations": [
              "keep balance",
              "lose balance",
              "sense of balance"
            ]
          },
          {
            "word": "bracelet",
            "pos": "noun",
            "ipa": "/ˈbreɪslət/",
            "meaningVi": "vòng đeo tay",
            "keyCollocations": [
              "gold bracelet",
              "wear a bracelet",
              "handmade bracelet"
            ]
          },
          {
            "word": "crazy",
            "pos": "adj",
            "ipa": "/ˈkreɪzi/",
            "meaningVi": "rất thích, quá say mê",
            "keyCollocations": [
              "crazy about games",
              "crazy about music",
              "go crazy"
            ]
          },
          {
            "word": "cruel",
            "pos": "adj",
            "ipa": "/ˈkruːəl/",
            "meaningVi": "độc ác",
            "keyCollocations": [
              "cruel treatment",
              "cruel to animals",
              "cruel words"
            ]
          },
          {
            "word": "detest",
            "pos": "verb",
            "ipa": "/dɪˈtest/",
            "meaningVi": "căm ghét",
            "keyCollocations": [
              "detest doing chores",
              "detest waiting",
              "strongly detest"
            ]
          },
          {
            "word": "DIY",
            "pos": "noun",
            "ipa": "/ˌdiː aɪ ˈwaɪ/",
            "meaningVi": "hoạt động tự làm đồ tại nhà",
            "keyCollocations": [
              "do DIY projects",
              "DIY enthusiast",
              "DIY kit"
            ]
          },
          {
            "word": "fancy",
            "pos": "verb",
            "ipa": "/ˈfænsi/",
            "meaningVi": "mến, thích",
            "keyCollocations": [
              "fancy playing football",
              "fancy going out",
              "fancy reading"
            ]
          },
          {
            "word": "fold",
            "pos": "verb",
            "ipa": "/fəʊld/",
            "meaningVi": "gấp, gập",
            "keyCollocations": [
              "fold paper",
              "fold clothes",
              "fold carefully"
            ]
          },
          {
            "word": "fond",
            "pos": "adj",
            "ipa": "/fɒnd/",
            "meaningVi": "mến, thích",
            "keyCollocations": [
              "fond of cooking",
              "fond memories",
              "be fond of"
            ]
          },
          {
            "word": "keen",
            "pos": "adj",
            "ipa": "/kiːn/",
            "meaningVi": "say mê, ham thích",
            "keyCollocations": [
              "keen on sports",
              "keen learner",
              "keen interest"
            ]
          },
          {
            "word": "keep in touch",
            "pos": "verb phr",
            "ipa": "/kiːp ɪn tʌtʃ/",
            "meaningVi": "giữ liên lạc (với ai)",
            "keyCollocations": [
              "keep in touch with classmates",
              "promise to keep in touch",
              "easy to keep in touch"
            ]
          },
          {
            "word": "kit",
            "pos": "noun",
            "ipa": "/kɪt/",
            "meaningVi": "bộ đồ nghề",
            "keyCollocations": [
              "first-aid kit",
              "tool kit",
              "craft kit"
            ]
          },
          {
            "word": "leisure",
            "pos": "noun",
            "ipa": "/ˈleʒə/",
            "meaningVi": "thời gian rảnh rỗi",
            "keyCollocations": [
              "leisure activities",
              "leisure time",
              "at your leisure"
            ]
          },
          {
            "word": "message",
            "pos": "verb",
            "ipa": "/ˈmesɪdʒ/",
            "meaningVi": "gửi tin nhắn",
            "keyCollocations": [
              "message friends",
              "instant message",
              "send a message"
            ]
          },
          {
            "word": "muscle",
            "pos": "noun",
            "ipa": "/ˈmʌsl/",
            "meaningVi": "cơ bắp",
            "keyCollocations": [
              "build muscles",
              "muscle pain",
              "strong muscles"
            ]
          },
          {
            "word": "origami",
            "pos": "noun",
            "ipa": "/ˌɒrɪˈɡɑːmi/",
            "meaningVi": "nghệ thuật gấp giấy Nhật Bản",
            "keyCollocations": [
              "fold origami",
              "origami crane",
              "origami class"
            ]
          },
          {
            "word": "outdoors",
            "pos": "adv",
            "ipa": "/ˌaʊtˈdɔːz/",
            "meaningVi": "ngoài trời",
            "keyCollocations": [
              "play outdoors",
              "spend time outdoors",
              "enjoy the outdoors"
            ]
          },
          {
            "word": "prefer",
            "pos": "verb",
            "ipa": "/prɪˈfɜː/",
            "meaningVi": "thích hơn",
            "keyCollocations": [
              "prefer tea to coffee",
              "prefer staying home",
              "greatly prefer"
            ]
          },
          {
            "word": "puzzle",
            "pos": "noun",
            "ipa": "/ˈpʌzl/",
            "meaningVi": "trò chơi câu đố / giải đố",
            "keyCollocations": [
              "crossword puzzle",
              "solve a puzzle",
              "jigsaw puzzle"
            ]
          },
          {
            "word": "resort",
            "pos": "noun",
            "ipa": "/rɪˈzɔːt/",
            "meaningVi": "khu nghỉ dưỡng",
            "keyCollocations": [
              "beach resort",
              "luxury resort",
              "holiday resort"
            ]
          },
          {
            "word": "snowboarding",
            "pos": "noun",
            "ipa": "/ˈsnəʊbɔːdɪŋ/",
            "meaningVi": "trượt tuyết bằng ván",
            "keyCollocations": [
              "go snowboarding",
              "snowboarding equipment",
              "enjoy snowboarding"
            ]
          },
          {
            "word": "stay in shape",
            "pos": "verb phr",
            "ipa": "/steɪ ɪn ʃeɪp/",
            "meaningVi": "giữ dáng, giữ thân hình cân đối",
            "keyCollocations": [
              "exercise to stay in shape",
              "healthy diet to stay in shape",
              "stay in shape effectively"
            ]
          }
        ]
      },
      {
        "unit": 2,
        "title": "Life in the countryside",
        "themeVi": "Cuộc sống ở nông thôn",
        "suggestedKeywords": [
          {
            "word": "catch",
            "pos": "verb",
            "ipa": "/kætʃ/",
            "meaningVi": "đánh được, câu được (cá)",
            "keyCollocations": [
              "catch fish",
              "catch a ball",
              "catch the bus"
            ]
          },
          {
            "word": "cattle",
            "pos": "noun",
            "ipa": "/ˈkætl/",
            "meaningVi": "gia súc",
            "keyCollocations": [
              "herd cattle",
              "feed the cattle",
              "cattle farm"
            ]
          },
          {
            "word": "combine harvester",
            "pos": "noun phr",
            "ipa": "/ˈkɒmbaɪn ˈhɑːvɪstə/",
            "meaningVi": "máy gặt đập liên hợp",
            "keyCollocations": [
              "modern combine harvester",
              "drive a combine harvester",
              "use combine harvester"
            ]
          },
          {
            "word": "crop",
            "pos": "noun",
            "ipa": "/krɒp/",
            "meaningVi": "vụ, mùa",
            "keyCollocations": [
              "bumper crop",
              "cash crop",
              "harvest crops"
            ]
          },
          {
            "word": "cultivate",
            "pos": "verb",
            "ipa": "/ˈkʌltɪveɪt/",
            "meaningVi": "trồng trọt",
            "keyCollocations": [
              "cultivate rice",
              "cultivate land",
              "cultivate crops"
            ]
          },
          {
            "word": "dry",
            "pos": "verb",
            "ipa": "/draɪ/",
            "meaningVi": "phơi khô, sấy khô",
            "keyCollocations": [
              "dry rice",
              "dry in the sun",
              "dry completely"
            ]
          },
          {
            "word": "feed",
            "pos": "verb",
            "ipa": "/fiːd/",
            "meaningVi": "cho ăn",
            "keyCollocations": [
              "feed poultry",
              "feed the animals",
              "feed pigs"
            ]
          },
          {
            "word": "ferry",
            "pos": "noun",
            "ipa": "/ˈferi/",
            "meaningVi": "phà",
            "keyCollocations": [
              "cross by ferry",
              "ferry boat",
              "take a ferry"
            ]
          },
          {
            "word": "harvest",
            "pos": "noun/verb",
            "ipa": "/ˈhɑːvɪst/",
            "meaningVi": "vụ thu hoạch, gặt hái",
            "keyCollocations": [
              "harvest season",
              "harvest rice",
              "rich harvest"
            ]
          },
          {
            "word": "herd",
            "pos": "verb",
            "ipa": "/hɜːd/",
            "meaningVi": "chăn giữ vật nuôi",
            "keyCollocations": [
              "herd sheep",
              "herd buffaloes",
              "herd cows"
            ]
          },
          {
            "word": "hospitable",
            "pos": "adj",
            "ipa": "/ˈhɒspɪtəbl/",
            "meaningVi": "mến khách, hiếu khách",
            "keyCollocations": [
              "hospitable villagers",
              "warm and hospitable",
              "hospitable welcome"
            ]
          },
          {
            "word": "lighthouse",
            "pos": "noun",
            "ipa": "/ˈlaɪthaʊs/",
            "meaningVi": "đèn biển, hải đăng",
            "keyCollocations": [
              "historic lighthouse",
              "coastal lighthouse",
              "view from the lighthouse"
            ]
          },
          {
            "word": "load",
            "pos": "verb",
            "ipa": "/ləʊd/",
            "meaningVi": "chất, chở",
            "keyCollocations": [
              "load rice onto carts",
              "load heavy goods",
              "load the truck"
            ]
          },
          {
            "word": "milk",
            "pos": "verb",
            "ipa": "/mɪlk/",
            "meaningVi": "vắt sữa",
            "keyCollocations": [
              "milk cows",
              "milk goats",
              "fresh milk"
            ]
          },
          {
            "word": "orchard",
            "pos": "noun",
            "ipa": "/ˈɔːtʃəd/",
            "meaningVi": "vườn cây ăn quả",
            "keyCollocations": [
              "fruit orchard",
              "apple orchard",
              "visit an orchard"
            ]
          },
          {
            "word": "paddy field",
            "pos": "noun phr",
            "ipa": "/ˈpædi ˌfiːld/",
            "meaningVi": "ruộng lúa",
            "keyCollocations": [
              "vast paddy field",
              "green paddy fields",
              "work on paddy fields"
            ]
          },
          {
            "word": "picturesque",
            "pos": "adj",
            "ipa": "/ˌpɪktʃəˈresk/",
            "meaningVi": "đẹp, hấp dẫn (phong cảnh)",
            "keyCollocations": [
              "picturesque village",
              "picturesque landscape",
              "picturesque scenery"
            ]
          },
          {
            "word": "plough",
            "pos": "verb",
            "ipa": "/plaʊ/",
            "meaningVi": "cày (thửa ruộng)",
            "keyCollocations": [
              "plough fields",
              "plough with buffaloes",
              "plough the soil"
            ]
          },
          {
            "word": "speciality",
            "pos": "noun",
            "ipa": "/ˌspeʃiˈæləti/",
            "meaningVi": "đặc sản",
            "keyCollocations": [
              "countryside speciality",
              "delicious speciality",
              "local speciality"
            ]
          },
          {
            "word": "stretch",
            "pos": "verb",
            "ipa": "/stretʃ/",
            "meaningVi": "kéo dài ra, trải dài",
            "keyCollocations": [
              "stretch as far as eye can see",
              "fields stretch out",
              "stretch across"
            ]
          },
          {
            "word": "unload",
            "pos": "verb",
            "ipa": "/ˌʌnˈləʊd/",
            "meaningVi": "dỡ hàng",
            "keyCollocations": [
              "unload goods",
              "unload cargo",
              "help unload"
            ]
          },
          {
            "word": "vast",
            "pos": "adj",
            "ipa": "/vɑːst/",
            "meaningVi": "rộng lớn, mênh mông, bao la",
            "keyCollocations": [
              "vast rice fields",
              "vast countryside",
              "vast area"
            ]
          },
          {
            "word": "well-trained",
            "pos": "adj",
            "ipa": "/ˌwel ˈtreɪnd/",
            "meaningVi": "lành nghề, có tay nghề",
            "keyCollocations": [
              "well-trained workers",
              "well-trained animals",
              "highly well-trained"
            ]
          }
        ]
      },
      {
        "unit": 3,
        "title": "Teenagers",
        "themeVi": "Tuổi thanh thiếu niên",
        "suggestedKeywords": [
          {
            "word": "account",
            "pos": "noun",
            "ipa": "/əˈkaʊnt/",
            "meaningVi": "tài khoản",
            "keyCollocations": [
              "social media account",
              "create an account",
              "log into your account"
            ]
          },
          {
            "word": "browse",
            "pos": "verb",
            "ipa": "/braʊz/",
            "meaningVi": "đọc lướt, tìm kiếm trên mạng",
            "keyCollocations": [
              "browse websites",
              "browse the internet",
              "browse forums"
            ]
          },
          {
            "word": "bully",
            "pos": "verb",
            "ipa": "/ˈbʊli/",
            "meaningVi": "bắt nạt",
            "keyCollocations": [
              "bully classmates",
              "stop bullying",
              "never bully others"
            ]
          },
          {
            "word": "bullying",
            "pos": "noun",
            "ipa": "/ˈbʊliɪŋ/",
            "meaningVi": "sự bắt nạt",
            "keyCollocations": [
              "school bullying",
              "cyber bullying",
              "prevent bullying"
            ]
          },
          {
            "word": "concentrate",
            "pos": "verb",
            "ipa": "/ˈkɒnsntreɪt/",
            "meaningVi": "tập trung (vào)",
            "keyCollocations": [
              "concentrate on studies",
              "hard to concentrate",
              "concentrate your mind"
            ]
          },
          {
            "word": "connect",
            "pos": "verb",
            "ipa": "/kəˈnekt/",
            "meaningVi": "kết nối",
            "keyCollocations": [
              "connect with friends",
              "connect online",
              "easily connect"
            ]
          },
          {
            "word": "craft",
            "pos": "noun",
            "ipa": "/krɑːft/",
            "meaningVi": "thủ công",
            "keyCollocations": [
              "arts and crafts",
              "make crafts",
              "craft workshop"
            ]
          },
          {
            "word": "enjoyable",
            "pos": "adj",
            "ipa": "/ɪnˈdʒɔɪəbl/",
            "meaningVi": "thú vị, gây hứng thú",
            "keyCollocations": [
              "enjoyable experience",
              "thoroughly enjoyable",
              "enjoyable weekend"
            ]
          },
          {
            "word": "expectation",
            "pos": "noun",
            "ipa": "/ˌekspekˈteɪʃn/",
            "meaningVi": "sự mong chờ, kì vọng",
            "keyCollocations": [
              "meet parents expectations",
              "high expectations",
              "live up to expectations"
            ]
          },
          {
            "word": "focused",
            "pos": "adj",
            "ipa": "/ˈfəʊkəst/",
            "meaningVi": "chuyên tâm, tập trung",
            "keyCollocations": [
              "stay focused",
              "keep focused",
              "focused on schoolwork"
            ]
          },
          {
            "word": "forum",
            "pos": "noun",
            "ipa": "/ˈfɔːrəm/",
            "meaningVi": "diễn đàn",
            "keyCollocations": [
              "online forum",
              "student forum",
              "post on a forum"
            ]
          },
          {
            "word": "log on to",
            "pos": "verb phr",
            "ipa": "/lɒɡ ɒn tə/",
            "meaningVi": "đăng nhập",
            "keyCollocations": [
              "log on to the computer",
              "log on to account",
              "log on to website"
            ]
          },
          {
            "word": "mature",
            "pos": "adj",
            "ipa": "/məˈtʃʊə/",
            "meaningVi": "chín chắn, trưởng thành",
            "keyCollocations": [
              "mature thinking",
              "feel mature",
              "act mature"
            ]
          },
          {
            "word": "media",
            "pos": "noun",
            "ipa": "/ˈmiːdiə/",
            "meaningVi": "phương tiện truyền thông",
            "keyCollocations": [
              "social media",
              "mass media",
              "media influence"
            ]
          },
          {
            "word": "midterm",
            "pos": "adj",
            "ipa": "/ˌmɪdˈtɜːm/",
            "meaningVi": "giữa kì",
            "keyCollocations": [
              "midterm exam",
              "midterm test",
              "prepare for midterms"
            ]
          },
          {
            "word": "notification",
            "pos": "noun",
            "ipa": "/ˌnəʊtɪfɪˈkeɪʃn/",
            "meaningVi": "sự thông báo",
            "keyCollocations": [
              "receive notifications",
              "push notification",
              "turn off notifications"
            ]
          },
          {
            "word": "peer",
            "pos": "noun",
            "ipa": "/pɪə/",
            "meaningVi": "người ngang hàng, bạn đồng lứa",
            "keyCollocations": [
              "peer pressure",
              "peer group",
              "interact with peers"
            ]
          },
          {
            "word": "pressure",
            "pos": "noun",
            "ipa": "/ˈpreʃə/",
            "meaningVi": "áp lực",
            "keyCollocations": [
              "exam pressure",
              "under pressure",
              "cope with pressure"
            ]
          },
          {
            "word": "schoolwork",
            "pos": "noun",
            "ipa": "/ˈskuːlwɜːk/",
            "meaningVi": "bài làm trên lớp",
            "keyCollocations": [
              "heavy schoolwork",
              "finish schoolwork",
              "help with schoolwork"
            ]
          },
          {
            "word": "session",
            "pos": "noun",
            "ipa": "/ˈseʃn/",
            "meaningVi": "tiết học, buổi họp",
            "keyCollocations": [
              "study session",
              "training session",
              "interactive session"
            ]
          },
          {
            "word": "stress",
            "pos": "noun",
            "ipa": "/stres/",
            "meaningVi": "căng thẳng",
            "keyCollocations": [
              "manage stress",
              "relieve stress",
              "reduce stress"
            ]
          },
          {
            "word": "stressful",
            "pos": "adj",
            "ipa": "/ˈstresfl/",
            "meaningVi": "căng thẳng, tạo áp lực",
            "keyCollocations": [
              "stressful period",
              "stressful exams",
              "feel stressful"
            ]
          },
          {
            "word": "upload",
            "pos": "verb",
            "ipa": "/ˌʌpˈləʊd/",
            "meaningVi": "tải lên",
            "keyCollocations": [
              "upload photos",
              "upload assignments",
              "upload videos"
            ]
          }
        ]
      },
      {
        "unit": 4,
        "title": "Ethnic groups of Viet Nam",
        "themeVi": "Các dân tộc Việt Nam",
        "suggestedKeywords": [
          {
            "word": "communal house",
            "pos": "noun phr",
            "ipa": "/kəˈmjuːnl haʊs/",
            "meaningVi": "nhà rông, nhà sinh hoạt cộng đồng",
            "keyCollocations": [
              "visit the communal house",
              "gather at the communal house",
              "central communal house"
            ]
          },
          {
            "word": "costume",
            "pos": "noun",
            "ipa": "/ˈkɒstjuːm/",
            "meaningVi": "trang phục",
            "keyCollocations": [
              "traditional costume",
              "colourful costume",
              "wear ethnic costumes"
            ]
          },
          {
            "word": "crop",
            "pos": "noun",
            "ipa": "/krɒp/",
            "meaningVi": "vụ mùa, vụ trồng trọt",
            "keyCollocations": [
              "harvest crops",
              "grow crops",
              "staple crop"
            ]
          },
          {
            "word": "ethnic group",
            "pos": "noun phr",
            "ipa": "/ˈeθnɪk ɡruːp/",
            "meaningVi": "nhóm dân tộc",
            "keyCollocations": [
              "54 ethnic groups",
              "minority ethnic group",
              "culture of ethnic groups"
            ]
          },
          {
            "word": "feature",
            "pos": "noun",
            "ipa": "/ˈfiːtʃə/",
            "meaningVi": "nét, đặc điểm",
            "keyCollocations": [
              "cultural feature",
              "unique feature",
              "distinctive feature"
            ]
          },
          {
            "word": "flute",
            "pos": "noun",
            "ipa": "/fluːt/",
            "meaningVi": "cái sáo (nhạc cụ)",
            "keyCollocations": [
              "play the bamboo flute",
              "traditional flute",
              "sound of the flute"
            ]
          },
          {
            "word": "folk",
            "pos": "adj",
            "ipa": "/fəʊk/",
            "meaningVi": "thuộc về dân gian, truyền thống",
            "keyCollocations": [
              "folk dance",
              "folk song",
              "folk game"
            ]
          },
          {
            "word": "gong",
            "pos": "noun",
            "ipa": "/ɡɒŋ/",
            "meaningVi": "cái cồng, cái chiêng",
            "keyCollocations": [
              "space of gong culture",
              "beat the gong",
              "traditional gong"
            ]
          },
          {
            "word": "harvest",
            "pos": "noun",
            "ipa": "/ˈhɑːvɪst/",
            "meaningVi": "vụ mùa",
            "keyCollocations": [
              "harvest festival",
              "rice harvest",
              "celebrate the harvest"
            ]
          },
          {
            "word": "highland",
            "pos": "noun",
            "ipa": "/ˈhaɪlənd/",
            "meaningVi": "vùng cao nguyên",
            "keyCollocations": [
              "Central Highlands",
              "in the highlands",
              "highland people"
            ]
          },
          {
            "word": "livestock",
            "pos": "noun",
            "ipa": "/ˈlaɪvstɒk/",
            "meaningVi": "gia súc",
            "keyCollocations": [
              "raise livestock",
              "feed livestock",
              "livestock breeding"
            ]
          },
          {
            "word": "minority",
            "pos": "noun",
            "ipa": "/maɪˈnɒrəti/",
            "meaningVi": "dân tộc thiểu số",
            "keyCollocations": [
              "ethnic minority",
              "minority people",
              "preserve minority culture"
            ]
          },
          {
            "word": "overlook",
            "pos": "verb",
            "ipa": "/ˌəʊvəˈlʊk/",
            "meaningVi": "nhìn ra, đối diện",
            "keyCollocations": [
              "overlook the valley",
              "stilt house overlooking mountains",
              "overlook the river"
            ]
          },
          {
            "word": "post",
            "pos": "noun",
            "ipa": "/pəʊst/",
            "meaningVi": "cột",
            "keyCollocations": [
              "wooden post",
              "bamboo post",
              "support posts"
            ]
          },
          {
            "word": "raise",
            "pos": "verb",
            "ipa": "/reɪz/",
            "meaningVi": "chăn nuôi",
            "keyCollocations": [
              "raise poultry",
              "raise cattle",
              "raise pigs"
            ]
          },
          {
            "word": "soil",
            "pos": "noun",
            "ipa": "/sɔɪl/",
            "meaningVi": "đất trồng",
            "keyCollocations": [
              "fertile soil",
              "rich soil",
              "prepare the soil"
            ]
          },
          {
            "word": "staircase",
            "pos": "noun",
            "ipa": "/ˈsteəkeɪs/",
            "meaningVi": "cầu thang bộ",
            "keyCollocations": [
              "wooden staircase",
              "climb the staircase",
              "stilt house staircase"
            ]
          },
          {
            "word": "statue",
            "pos": "noun",
            "ipa": "/ˈstætʃuː/",
            "meaningVi": "tượng",
            "keyCollocations": [
              "tomb statue",
              "stone statue",
              "wood statue"
            ]
          },
          {
            "word": "stilt house",
            "pos": "noun phr",
            "ipa": "/stɪlt haʊs/",
            "meaningVi": "nhà sàn",
            "keyCollocations": [
              "live in a stilt house",
              "traditional stilt house",
              "visit a stilt house"
            ]
          },
          {
            "word": "terraced",
            "pos": "adj",
            "ipa": "/ˈterəst/",
            "meaningVi": "có hình bậc thang",
            "keyCollocations": [
              "terraced field",
              "magnificent terraced fields",
              "golden terraced fields"
            ]
          },
          {
            "word": "weave",
            "pos": "verb",
            "ipa": "/wiːv/",
            "meaningVi": "dệt, đan, kết lại",
            "keyCollocations": [
              "weave cloth",
              "weave brocade",
              "weave baskets"
            ]
          },
          {
            "word": "wooden",
            "pos": "adj",
            "ipa": "/ˈwʊdn/",
            "meaningVi": "bằng gỗ",
            "keyCollocations": [
              "wooden pillar",
              "wooden house",
              "wooden crafts"
            ]
          }
        ]
      },
      {
        "unit": 5,
        "title": "Our customs and traditions",
        "themeVi": "Phong tục và truyền thống của chúng ta",
        "suggestedKeywords": [
          {
            "word": "acrobatics",
            "pos": "noun",
            "ipa": "/ˌækrəˈbætɪks/",
            "meaningVi": "xiếc, các động tác nhào lộn",
            "keyCollocations": [
              "perform acrobatics",
              "watch acrobatics",
              "acrobatics show"
            ]
          },
          {
            "word": "admire",
            "pos": "verb",
            "ipa": "/ədˈmaɪə/",
            "meaningVi": "khâm phục, ngưỡng mộ",
            "keyCollocations": [
              "admire traditions",
              "admire elders",
              "deeply admire"
            ]
          },
          {
            "word": "bad spirit",
            "pos": "noun phr",
            "ipa": "/bæd ˈspɪrɪt/",
            "meaningVi": "điều xấu xa, tà ma",
            "keyCollocations": [
              "chase away bad spirits",
              "ward off bad spirits",
              "protect from bad spirits"
            ]
          },
          {
            "word": "bamboo pole",
            "pos": "noun phr",
            "ipa": "/bæmˈbuː pəʊl/",
            "meaningVi": "cây nêu",
            "keyCollocations": [
              "erect a bamboo pole",
              "traditional bamboo pole",
              "Tet bamboo pole"
            ]
          },
          {
            "word": "carp",
            "pos": "noun",
            "ipa": "/kɑːp/",
            "meaningVi": "con cá chép",
            "keyCollocations": [
              "release red carps",
              "Kitchen Gods carp",
              "swim like a carp"
            ]
          },
          {
            "word": "coastal",
            "pos": "adj",
            "ipa": "/ˈkəʊstl/",
            "meaningVi": "thuộc miền ven biển, duyên hải",
            "keyCollocations": [
              "coastal festival",
              "coastal village",
              "coastal area"
            ]
          },
          {
            "word": "ceremony",
            "pos": "noun",
            "ipa": "/ˈserəməni/",
            "meaningVi": "nghi thức, nghi lễ",
            "keyCollocations": [
              "opening ceremony",
              "traditional ceremony",
              "attend a ceremony"
            ]
          },
          {
            "word": "chase away",
            "pos": "verb phr",
            "ipa": "/tʃeɪs əˈweɪ/",
            "meaningVi": "xua đuổi",
            "keyCollocations": [
              "chase away bad luck",
              "chase away evil",
              "fireworks chase away"
            ]
          },
          {
            "word": "contestant",
            "pos": "noun",
            "ipa": "/kənˈtestənt/",
            "meaningVi": "thí sinh, người thi đấu",
            "keyCollocations": [
              "festival contestant",
              "cheer for contestants",
              "talented contestant"
            ]
          },
          {
            "word": "decorative",
            "pos": "adj",
            "ipa": "/ˈdekərətɪv/",
            "meaningVi": "có tính trang trí",
            "keyCollocations": [
              "decorative items",
              "decorative lights",
              "decorative patterns"
            ]
          },
          {
            "word": "family bonding",
            "pos": "noun phr",
            "ipa": "/ˌfæməli ˈbɒndɪŋ/",
            "meaningVi": "sự gắn kết tình cảm gia đình",
            "keyCollocations": [
              "promote family bonding",
              "family bonding time",
              "moment for family bonding"
            ]
          },
          {
            "word": "family reunion",
            "pos": "noun phr",
            "ipa": "/ˌfæməli ˌriːˈjuːniən/",
            "meaningVi": "cuộc sum họp gia đình",
            "keyCollocations": [
              "annual family reunion",
              "Tet family reunion",
              "cherish family reunion"
            ]
          },
          {
            "word": "festival goer",
            "pos": "noun phr",
            "ipa": "/ˈfestɪvl ˌɡəʊə/",
            "meaningVi": "người đi xem lễ hội",
            "keyCollocations": [
              "thousands of festival goers",
              "attract festival goers",
              "welcome festival goers"
            ]
          },
          {
            "word": "lantern",
            "pos": "noun",
            "ipa": "/ˈlæntən/",
            "meaningVi": "đèn lồng",
            "keyCollocations": [
              "hang colourful lanterns",
              "light a lantern",
              "Mid-Autumn lantern"
            ]
          },
          {
            "word": "longevity",
            "pos": "noun",
            "ipa": "/lɒnˈdʒevəti/",
            "meaningVi": "sự sống lâu, tuổi thọ",
            "keyCollocations": [
              "wish longevity",
              "longevity ceremony",
              "symbol of longevity"
            ]
          },
          {
            "word": "martial arts",
            "pos": "noun phr",
            "ipa": "/ˌmɑːʃl ˈɑːts/",
            "meaningVi": "võ thuật",
            "keyCollocations": [
              "practice martial arts",
              "traditional martial arts",
              "martial arts performance"
            ]
          },
          {
            "word": "monk",
            "pos": "noun",
            "ipa": "/mʌŋk/",
            "meaningVi": "nhà sư",
            "keyCollocations": [
              "Buddhist monk",
              "listen to monk",
              "respect monks"
            ]
          },
          {
            "word": "offering",
            "pos": "noun",
            "ipa": "/ˈɒfərɪŋ/",
            "meaningVi": "đồ thờ cúng",
            "keyCollocations": [
              "make offerings",
              "fruit offering",
              "altar offering"
            ]
          },
          {
            "word": "ornamental tree",
            "pos": "noun phr",
            "ipa": "/ˌɔːnəˈmentl triː/",
            "meaningVi": "cây cảnh",
            "keyCollocations": [
              "buy ornamental trees",
              "peach blossom ornamental tree",
              "kumquat ornamental tree"
            ]
          },
          {
            "word": "pray",
            "pos": "verb",
            "ipa": "/preɪ/",
            "meaningVi": "cầu nguyện, lễ bái",
            "keyCollocations": [
              "pray for peace",
              "pray for good health",
              "pray at the pagoda"
            ]
          },
          {
            "word": "release",
            "pos": "verb",
            "ipa": "/rɪˈliːs/",
            "meaningVi": "thả",
            "keyCollocations": [
              "release carp into river",
              "release birds",
              "release lanterns"
            ]
          },
          {
            "word": "table manners",
            "pos": "noun phr",
            "ipa": "/ˈteɪbl ˌmænəz/",
            "meaningVi": "phép tắc ăn uống",
            "keyCollocations": [
              "good table manners",
              "teach table manners",
              "follow table manners"
            ]
          },
          {
            "word": "worship",
            "pos": "verb",
            "ipa": "/ˈwɜːʃɪp/",
            "meaningVi": "thờ phụng, tôn kính",
            "keyCollocations": [
              "worship ancestors",
              "ancestor worship",
              "worship heroes"
            ]
          },
          {
            "word": "young rice",
            "pos": "noun phr",
            "ipa": "/jʌŋ raɪs/",
            "meaningVi": "cốm",
            "keyCollocations": [
              "fragrant young rice",
              "eat young rice with bananas",
              "autumn young rice"
            ]
          }
        ]
      },
      {
        "unit": 6,
        "title": "Lifestyles",
        "themeVi": "Lối sống",
        "suggestedKeywords": [
          {
            "word": "dogsled",
            "pos": "noun",
            "ipa": "/ˈdɒɡsled/",
            "meaningVi": "xe trượt tuyết chó kéo",
            "keyCollocations": [
              "ride a dogsled",
              "dogsled team",
              "travel by dogsled"
            ]
          },
          {
            "word": "experience",
            "pos": "noun/verb",
            "ipa": "/ɪkˈspɪəriəns/",
            "meaningVi": "kinh nghiệm, trải nghiệm",
            "keyCollocations": [
              "gain experience",
              "first-hand experience",
              "experience new cultures"
            ]
          },
          {
            "word": "greet",
            "pos": "verb",
            "ipa": "/ɡriːt/",
            "meaningVi": "chào, chào hỏi",
            "keyCollocations": [
              "greet guests warmly",
              "greet each other",
              "friendly greet"
            ]
          },
          {
            "word": "greeting",
            "pos": "noun",
            "ipa": "/ˈɡriːtɪŋ/",
            "meaningVi": "lời chào",
            "keyCollocations": [
              "warm greeting",
              "customary greeting",
              "exchange greetings"
            ]
          },
          {
            "word": "habit",
            "pos": "noun",
            "ipa": "/ˈhæbɪt/",
            "meaningVi": "thói quen",
            "keyCollocations": [
              "eating habits",
              "break the habit",
              "develop a habit"
            ]
          },
          {
            "word": "in the habit of",
            "pos": "prep phr",
            "ipa": "/ɪn ðə ˈhæbɪt əv/",
            "meaningVi": "có thói quen làm gì",
            "keyCollocations": [
              "be in the habit of exercising",
              "get into the habit of",
              "keep the habit of"
            ]
          },
          {
            "word": "hurry",
            "pos": "noun/verb",
            "ipa": "/ˈhʌri/",
            "meaningVi": "vội vàng",
            "keyCollocations": [
              "in a hurry",
              "no need to hurry",
              "hurry up"
            ]
          },
          {
            "word": "in a hurry",
            "pos": "prep phr",
            "ipa": "/ɪn ə ˈhʌri/",
            "meaningVi": "đang vội",
            "keyCollocations": [
              "always in a hurry",
              "leave in a hurry",
              "do things in a hurry"
            ]
          },
          {
            "word": "igloo",
            "pos": "noun",
            "ipa": "/ˈɪɡluː/",
            "meaningVi": "lều tuyết",
            "keyCollocations": [
              "build an igloo",
              "Inuit igloo",
              "stay in an igloo"
            ]
          },
          {
            "word": "impact",
            "pos": "noun",
            "ipa": "/ˈɪmpækt/",
            "meaningVi": "sự ảnh hưởng",
            "keyCollocations": [
              "positive impact",
              "huge impact",
              "impact on lifestyle"
            ]
          },
          {
            "word": "independent",
            "pos": "adj",
            "ipa": "/ˌɪndɪˈpendənt/",
            "meaningVi": "độc lập",
            "keyCollocations": [
              "independent life",
              "financially independent",
              "become independent"
            ]
          },
          {
            "word": "interact",
            "pos": "verb",
            "ipa": "/ˌɪntərˈækt/",
            "meaningVi": "tương tác",
            "keyCollocations": [
              "interact with neighbours",
              "interact with others",
              "regularly interact"
            ]
          },
          {
            "word": "interaction",
            "pos": "noun",
            "ipa": "/ˌɪntərˈækʃn/",
            "meaningVi": "sự tương tác",
            "keyCollocations": [
              "social interaction",
              "face-to-face interaction",
              "daily interaction"
            ]
          },
          {
            "word": "lifestyle",
            "pos": "noun",
            "ipa": "/ˈlaɪfstaɪl/",
            "meaningVi": "lối sống",
            "keyCollocations": [
              "sedentary lifestyle",
              "healthy lifestyle",
              "nomadic lifestyle"
            ]
          },
          {
            "word": "make craft",
            "pos": "verb phr",
            "ipa": "/meɪk krɑːft/",
            "meaningVi": "làm hàng thủ công",
            "keyCollocations": [
              "make crafts at home",
              "learn to make craft",
              "traditional craft making"
            ]
          },
          {
            "word": "maintain",
            "pos": "verb",
            "ipa": "/meɪnˈteɪn/",
            "meaningVi": "duy trì, gìn giữ",
            "keyCollocations": [
              "maintain good habits",
              "maintain traditions",
              "maintain balance"
            ]
          },
          {
            "word": "musher",
            "pos": "noun",
            "ipa": "/ˈmʌʃə/",
            "meaningVi": "người điều khiển xe trượt tuyết chó kéo",
            "keyCollocations": [
              "skilled musher",
              "race musher",
              "famous musher"
            ]
          },
          {
            "word": "nomadic",
            "pos": "adj",
            "ipa": "/nəʊˈmædɪk/",
            "meaningVi": "du mục",
            "keyCollocations": [
              "nomadic lifestyle",
              "nomadic tribe",
              "nomadic people"
            ]
          },
          {
            "word": "offline",
            "pos": "adj/adv",
            "ipa": "/ˌɒfˈlaɪn/",
            "meaningVi": "trực tiếp, ngoại tuyến",
            "keyCollocations": [
              "meet offline",
              "offline activities",
              "learn offline"
            ]
          },
          {
            "word": "online",
            "pos": "adj/adv",
            "ipa": "/ˌɒnˈlaɪn/",
            "meaningVi": "trực tuyến",
            "keyCollocations": [
              "online learning",
              "online shopping",
              "stay online"
            ]
          },
          {
            "word": "online learning",
            "pos": "noun phr",
            "ipa": "/ˌɒnˈlaɪn ˈlɜːnɪŋ/",
            "meaningVi": "việc học trực tuyến",
            "keyCollocations": [
              "benefits of online learning",
              "engage in online learning",
              "online learning platforms"
            ]
          },
          {
            "word": "revive",
            "pos": "verb",
            "ipa": "/rɪˈvaɪv/",
            "meaningVi": "làm sống lại, hồi sinh",
            "keyCollocations": [
              "revive traditions",
              "revive local crafts",
              "revive customs"
            ]
          },
          {
            "word": "serve",
            "pos": "verb",
            "ipa": "/sɜːv/",
            "meaningVi": "phục vụ",
            "keyCollocations": [
              "serve food",
              "serve customers",
              "serve meals"
            ]
          },
          {
            "word": "staple",
            "pos": "adj",
            "ipa": "/ˈsteɪpl/",
            "meaningVi": "cơ bản, chủ yếu",
            "keyCollocations": [
              "staple food",
              "staple diet",
              "staple crop"
            ]
          },
          {
            "word": "street food",
            "pos": "noun phr",
            "ipa": "/striːt fuːd/",
            "meaningVi": "thức ăn đường phố",
            "keyCollocations": [
              "delicious street food",
              "enjoy street food",
              "famous street food"
            ]
          },
          {
            "word": "tribal",
            "pos": "adj",
            "ipa": "/ˈtraɪbl/",
            "meaningVi": "thuộc bộ tộc, thành bộ lạc",
            "keyCollocations": [
              "tribal customs",
              "tribal culture",
              "tribal people"
            ]
          }
        ]
      },
      {
        "unit": 7,
        "title": "Environmental protection",
        "themeVi": "Bảo vệ môi trường",
        "suggestedKeywords": [
          {
            "word": "carbon dioxide",
            "pos": "noun phr",
            "ipa": "/ˌkɑːbən daɪˈɒksaɪd/",
            "meaningVi": "đi ô xit các bon (CO2)",
            "keyCollocations": [
              "absorb carbon dioxide",
              "emit carbon dioxide",
              "reduce carbon dioxide"
            ]
          },
          {
            "word": "carbon footprint",
            "pos": "noun phr",
            "ipa": "/ˌkɑːbən ˈfʊtprɪnt/",
            "meaningVi": "dấu chân cacbon",
            "keyCollocations": [
              "reduce carbon footprint",
              "calculate carbon footprint",
              "low carbon footprint"
            ]
          },
          {
            "word": "coral",
            "pos": "noun",
            "ipa": "/ˈkɒrəl/",
            "meaningVi": "san hô",
            "keyCollocations": [
              "protect coral",
              "coral bleaching",
              "coral underwater"
            ]
          },
          {
            "word": "dugong",
            "pos": "noun",
            "ipa": "/ˈduːɡɒŋ/",
            "meaningVi": "con cá cúi, bò biển",
            "keyCollocations": [
              "endangered dugong",
              "protect dugongs",
              "dugong habitat"
            ]
          },
          {
            "word": "ecosystem",
            "pos": "noun",
            "ipa": "/ˈiːkəʊsɪstəm/",
            "meaningVi": "hệ sinh thái",
            "keyCollocations": [
              "coastal ecosystem",
              "protect ecosystem",
              "healthy ecosystem"
            ]
          },
          {
            "word": "endangered species",
            "pos": "noun phr",
            "ipa": "/ɪnˈdeɪndʒəd ˈspiːʃiːz/",
            "meaningVi": "loài có nguy cơ tuyệt chủng",
            "keyCollocations": [
              "save endangered species",
              "list of endangered species",
              "protect endangered species"
            ]
          },
          {
            "word": "extinction",
            "pos": "noun",
            "ipa": "/ɪkˈstɪŋkʃn/",
            "meaningVi": "sự tuyệt chủng",
            "keyCollocations": [
              "verge of extinction",
              "face extinction",
              "prevent extinction"
            ]
          },
          {
            "word": "habitat",
            "pos": "noun",
            "ipa": "/ˈhæbɪtæt/",
            "meaningVi": "môi trường sống",
            "keyCollocations": [
              "habitat destruction",
              "natural habitat",
              "habitat loss"
            ]
          },
          {
            "word": "oxygen",
            "pos": "noun",
            "ipa": "/ˈɒksɪdʒən/",
            "meaningVi": "khí ô-xi",
            "keyCollocations": [
              "produce oxygen",
              "breathe oxygen",
              "oxygen supply"
            ]
          },
          {
            "word": "participate",
            "pos": "verb",
            "ipa": "/pɑːˈtɪsɪpeɪt/",
            "meaningVi": "tham gia",
            "keyCollocations": [
              "participate in campaigns",
              "actively participate",
              "participate in clean-up"
            ]
          },
          {
            "word": "product",
            "pos": "noun",
            "ipa": "/ˈprɒdʌkt/",
            "meaningVi": "sản phẩm",
            "keyCollocations": [
              "eco-friendly product",
              "green products",
              "recycled products"
            ]
          },
          {
            "word": "protect",
            "pos": "verb",
            "ipa": "/prəˈtekt/",
            "meaningVi": "bảo vệ",
            "keyCollocations": [
              "protect the environment",
              "protect wildlife",
              "protect nature"
            ]
          },
          {
            "word": "release",
            "pos": "verb",
            "ipa": "/rɪˈliːs/",
            "meaningVi": "thải ra, làm thoát ra",
            "keyCollocations": [
              "release pollutants",
              "release toxic gases",
              "release emissions"
            ]
          },
          {
            "word": "resident",
            "pos": "noun",
            "ipa": "/ˈrezɪdənt/",
            "meaningVi": "người dân, dân cư",
            "keyCollocations": [
              "local residents",
              "residents of the area",
              "encourage residents"
            ]
          },
          {
            "word": "single-use",
            "pos": "adj",
            "ipa": "/ˌsɪŋɡl ˈjuːs/",
            "meaningVi": "dùng một lần",
            "keyCollocations": [
              "single-use plastics",
              "ban single-use bags",
              "avoid single-use items"
            ]
          },
          {
            "word": "species",
            "pos": "noun",
            "ipa": "/ˈspiːʃiːz/",
            "meaningVi": "loài động thực vật",
            "keyCollocations": [
              "rare species",
              "plant species",
              "animal species"
            ]
          },
          {
            "word": "substance",
            "pos": "noun",
            "ipa": "/ˈsʌbstəns/",
            "meaningVi": "chất",
            "keyCollocations": [
              "toxic substance",
              "chemical substance",
              "harmful substance"
            ]
          },
          {
            "word": "toxic",
            "pos": "adj",
            "ipa": "/ˈtɒksɪk/",
            "meaningVi": "độc hại",
            "keyCollocations": [
              "toxic waste",
              "toxic fumes",
              "toxic chemicals"
            ]
          }
        ]
      },
      {
        "unit": 8,
        "title": "Shopping",
        "themeVi": "Mua sắm",
        "suggestedKeywords": [
          {
            "word": "access",
            "pos": "noun",
            "ipa": "/ˈækses/",
            "meaningVi": "nguồn tiếp cận, truy cập",
            "keyCollocations": [
              "easy access to stores",
              "access to goods",
              "gain access"
            ]
          },
          {
            "word": "addicted",
            "pos": "adj",
            "ipa": "/əˈdɪktɪd/",
            "meaningVi": "say mê, nghiện (mua sắm)",
            "keyCollocations": [
              "addicted to shopping",
              "easily addicted",
              "addicted to online sales"
            ]
          },
          {
            "word": "advertisement",
            "pos": "noun",
            "ipa": "/ədˈvɜːtɪsmənt/",
            "meaningVi": "quảng cáo",
            "keyCollocations": [
              "see an advertisement",
              "online advertisement",
              "shopping advertisement"
            ]
          },
          {
            "word": "bargain",
            "pos": "verb/noun",
            "ipa": "/ˈbɑːɡən/",
            "meaningVi": "mặc cả, món hời",
            "keyCollocations": [
              "bargain for a lower price",
              "drive a hard bargain",
              "real bargain"
            ]
          },
          {
            "word": "complaint",
            "pos": "noun",
            "ipa": "/kəmˈpleɪnt/",
            "meaningVi": "lời phàn nàn, khiếu nại",
            "keyCollocations": [
              "make a complaint",
              "customer complaint",
              "file a complaint"
            ]
          },
          {
            "word": "convenience store",
            "pos": "noun phr",
            "ipa": "/kənˈviːniəns stɔː/",
            "meaningVi": "cửa hàng tiện ích",
            "keyCollocations": [
              "open 24/7 convenience store",
              "shop at a convenience store",
              "nearby convenience store"
            ]
          },
          {
            "word": "customer",
            "pos": "noun",
            "ipa": "/ˈkʌstəmə/",
            "meaningVi": "khách hàng",
            "keyCollocations": [
              "satisfy customers",
              "loyal customer",
              "customer service"
            ]
          },
          {
            "word": "discount shop",
            "pos": "noun phr",
            "ipa": "/ˈdɪskaʊnt ʃɒp/",
            "meaningVi": "cửa hàng hạ giá",
            "keyCollocations": [
              "buy from a discount shop",
              "find in a discount shop",
              "popular discount shop"
            ]
          },
          {
            "word": "display",
            "pos": "noun/verb",
            "ipa": "/dɪˈspleɪ/",
            "meaningVi": "sự trưng bày, trưng bày",
            "keyCollocations": [
              "window display",
              "on display",
              "display products"
            ]
          },
          {
            "word": "dollar store",
            "pos": "noun phr",
            "ipa": "/ˈdɒlə ˌstɔː/",
            "meaningVi": "cửa hàng đồng giá 1 đô la",
            "keyCollocations": [
              "bargains at the dollar store",
              "visit a dollar store",
              "shop in a dollar store"
            ]
          },
          {
            "word": "fair",
            "pos": "noun",
            "ipa": "/feə/",
            "meaningVi": "hội chợ",
            "keyCollocations": [
              "trade fair",
              "book fair",
              "spring fair"
            ]
          },
          {
            "word": "farmers’ market",
            "pos": "noun phr",
            "ipa": "/ˈfɑːməz mɑːkɪt/",
            "meaningVi": "chợ nông sản",
            "keyCollocations": [
              "fresh goods at farmers market",
              "visit the farmers market",
              "weekend farmers market"
            ]
          },
          {
            "word": "goods",
            "pos": "noun plural",
            "ipa": "/ɡʊdz/",
            "meaningVi": "hàng hoá",
            "keyCollocations": [
              "quality goods",
              "consumer goods",
              "damaged goods"
            ]
          },
          {
            "word": "home-grown",
            "pos": "adj",
            "ipa": "/ˌhəʊm ˈɡrəʊn/",
            "meaningVi": "tự trồng",
            "keyCollocations": [
              "home-grown vegetables",
              "home-grown fruits",
              "fresh home-grown produce"
            ]
          },
          {
            "word": "home-made",
            "pos": "adj",
            "ipa": "/ˌhəʊm ˈmeɪd/",
            "meaningVi": "tự làm",
            "keyCollocations": [
              "home-made cake",
              "home-made cookies",
              "delicious home-made food"
            ]
          },
          {
            "word": "item",
            "pos": "noun",
            "ipa": "/ˈaɪtəm/",
            "meaningVi": "món hàng",
            "keyCollocations": [
              "clothing item",
              "item on sale",
              "grocery items"
            ]
          },
          {
            "word": "on sale",
            "pos": "prep phr",
            "ipa": "/ɒn seɪl/",
            "meaningVi": "đang được bán hạ giá",
            "keyCollocations": [
              "put on sale",
              "buy items on sale",
              "on sale this week"
            ]
          },
          {
            "word": "open-air market",
            "pos": "noun phr",
            "ipa": "/ˌəʊpən ˈeə ˈmɑːkɪt/",
            "meaningVi": "chợ họp ngoài trời",
            "keyCollocations": [
              "traditional open-air market",
              "stalls in open-air market",
              "bustling open-air market"
            ]
          },
          {
            "word": "price tag",
            "pos": "noun phr",
            "ipa": "/ˈpraɪs tæɡ/",
            "meaningVi": "nhãn ghi giá",
            "keyCollocations": [
              "check the price tag",
              "look at price tags",
              "remove price tags"
            ]
          },
          {
            "word": "schedule",
            "pos": "noun",
            "ipa": "/ˈʃedjuːl/",
            "meaningVi": "lịch trình, thời gian biểu",
            "keyCollocations": [
              "tight schedule",
              "shopping schedule",
              "on schedule"
            ]
          }
        ]
      },
      {
        "unit": 9,
        "title": "Natural disasters",
        "themeVi": "Thảm họa thiên nhiên",
        "suggestedKeywords": [
          {
            "word": "authority",
            "pos": "noun",
            "ipa": "/ɔːˈθɒrəti/",
            "meaningVi": "chính quyền",
            "keyCollocations": [
              "local authorities",
              "warned by authorities",
              "authorities respond"
            ]
          },
          {
            "word": "damage",
            "pos": "noun/verb",
            "ipa": "/ˈdæmɪdʒ/",
            "meaningVi": "thiệt hại, gây tổn hại",
            "keyCollocations": [
              "severe damage",
              "cause damage",
              "repair the damage"
            ]
          },
          {
            "word": "destroy",
            "pos": "verb",
            "ipa": "/dɪˈstrɔɪ/",
            "meaningVi": "phá huỷ",
            "keyCollocations": [
              "completely destroy",
              "destroyed by flood",
              "destroy houses"
            ]
          },
          {
            "word": "disaster",
            "pos": "noun",
            "ipa": "/dɪˈzɑːstə/",
            "meaningVi": "thảm hoạ",
            "keyCollocations": [
              "natural disaster",
              "disaster relief",
              "disaster preparedness"
            ]
          },
          {
            "word": "earthquake",
            "pos": "noun",
            "ipa": "/ˈɜːθkweɪk/",
            "meaningVi": "trận động đất",
            "keyCollocations": [
              "major earthquake",
              "earthquake victims",
              "survive an earthquake"
            ]
          },
          {
            "word": "emergency kit",
            "pos": "noun phr",
            "ipa": "/ɪˈmɜːdʒənsi kɪt/",
            "meaningVi": "bộ dụng cụ khẩn cấp",
            "keyCollocations": [
              "prepare an emergency kit",
              "flashlight in emergency kit",
              "first-aid emergency kit"
            ]
          },
          {
            "word": "erupt",
            "pos": "verb",
            "ipa": "/ɪˈrʌpt/",
            "meaningVi": "phun trào (núi lửa)",
            "keyCollocations": [
              "volcano erupts",
              "erupt violently",
              "erupt unexpectedly"
            ]
          },
          {
            "word": "Fahrenheit",
            "pos": "noun",
            "ipa": "/ˈfærənhaɪt/",
            "meaningVi": "độ F",
            "keyCollocations": [
              "degrees Fahrenheit",
              "scale of Fahrenheit",
              "measured in Fahrenheit"
            ]
          },
          {
            "word": "funnel",
            "pos": "noun",
            "ipa": "/ˈfʌnl/",
            "meaningVi": "cái phễu, hình phễu (lốc xoáy)",
            "keyCollocations": [
              "funnel cloud",
              "tornado funnel",
              "funnel shape"
            ]
          },
          {
            "word": "landslide",
            "pos": "noun",
            "ipa": "/ˈlændslaɪd/",
            "meaningVi": "vụ sạt lở đất",
            "keyCollocations": [
              "trigger landslides",
              "massive landslide",
              "prevent landslides"
            ]
          },
          {
            "word": "liquid",
            "pos": "noun",
            "ipa": "/ˈlɪkwɪd/",
            "meaningVi": "chất lỏng",
            "keyCollocations": [
              "hot liquid",
              "liquid lava",
              "clear liquid"
            ]
          },
          {
            "word": "predict",
            "pos": "verb",
            "ipa": "/prɪˈdɪkt/",
            "meaningVi": "dự đoán",
            "keyCollocations": [
              "predict weather",
              "predict disasters",
              "accurately predict"
            ]
          },
          {
            "word": "pretty",
            "pos": "adv",
            "ipa": "/ˈprɪti/",
            "meaningVi": "khá là",
            "keyCollocations": [
              "pretty dangerous",
              "pretty strong",
              "pretty bad"
            ]
          },
          {
            "word": "property",
            "pos": "noun",
            "ipa": "/ˈprɒpəti/",
            "meaningVi": "của cải, nhà cửa",
            "keyCollocations": [
              "property damage",
              "protect property",
              "loss of property"
            ]
          },
          {
            "word": "pull up",
            "pos": "verb phr",
            "ipa": "/pʊl ʌp/",
            "meaningVi": "kéo lên, nhổ lên",
            "keyCollocations": [
              "pull up trees",
              "storm pulls up plants",
              "pull up roots"
            ]
          },
          {
            "word": "rescue worker",
            "pos": "noun phr",
            "ipa": "/ˈreskjuː wɜːkə/",
            "meaningVi": "nhân viên cứu hộ",
            "keyCollocations": [
              "brave rescue worker",
              "deployed rescue workers",
              "support rescue workers"
            ]
          },
          {
            "word": "Richter scale",
            "pos": "noun phr",
            "ipa": "/ˈrɪktə skeɪl/",
            "meaningVi": "độ Rích-te",
            "keyCollocations": [
              "measured on Richter scale",
              "7 on Richter scale",
              "Richter scale magnitude"
            ]
          },
          {
            "word": "shake",
            "pos": "verb",
            "ipa": "/ʃeɪk/",
            "meaningVi": "rung, lắc",
            "keyCollocations": [
              "ground shakes",
              "shake violently",
              "earth shakes"
            ]
          },
          {
            "word": "storm",
            "pos": "noun",
            "ipa": "/stɔːm/",
            "meaningVi": "bão",
            "keyCollocations": [
              "tropical storm",
              "severe storm",
              "storm warnings"
            ]
          },
          {
            "word": "suddenly",
            "pos": "adv",
            "ipa": "/ˈsʌdənli/",
            "meaningVi": "đột nhiên, bỗng nhiên",
            "keyCollocations": [
              "strike suddenly",
              "happen suddenly",
              "stop suddenly"
            ]
          },
          {
            "word": "tornado",
            "pos": "noun",
            "ipa": "/tɔːˈneɪdəʊ/",
            "meaningVi": "lốc xoáy",
            "keyCollocations": [
              "violent tornado",
              "tornado siren",
              "tornado damage"
            ]
          },
          {
            "word": "tremble",
            "pos": "verb",
            "ipa": "/ˈtrembl/",
            "meaningVi": "rung lắc, run rẩy",
            "keyCollocations": [
              "earth trembles",
              "tremble with fear",
              "houses tremble"
            ]
          },
          {
            "word": "tsunami",
            "pos": "noun",
            "ipa": "/tsuːˈnɑːmi/",
            "meaningVi": "trận sóng thần",
            "keyCollocations": [
              "giant tsunami",
              "tsunami warning",
              "trigger a tsunami"
            ]
          },
          {
            "word": "victim",
            "pos": "noun",
            "ipa": "/ˈvɪktɪm/",
            "meaningVi": "nạn nhân",
            "keyCollocations": [
              "disaster victim",
              "aid victims",
              "help flood victims"
            ]
          },
          {
            "word": "volcanic",
            "pos": "adj",
            "ipa": "/vɒlˈkænɪk/",
            "meaningVi": "thuộc núi lửa",
            "keyCollocations": [
              "volcanic eruption",
              "volcanic ash",
              "volcanic rocks"
            ]
          },
          {
            "word": "warn",
            "pos": "verb",
            "ipa": "/wɔːn/",
            "meaningVi": "cảnh báo",
            "keyCollocations": [
              "warn residents",
              "warn against floods",
              "warn in advance"
            ]
          }
        ]
      },
      {
        "unit": 10,
        "title": "Communication in the future",
        "themeVi": "Giao tiếp trong tương lai",
        "suggestedKeywords": [
          {
            "word": "account",
            "pos": "noun",
            "ipa": "/əˈkaʊnt/",
            "meaningVi": "tài khoản (mạng xã hội, ngân hàng)",
            "keyCollocations": [
              "user account",
              "future communication account",
              "manage account"
            ]
          },
          {
            "word": "advanced",
            "pos": "adj",
            "ipa": "/ədˈvɑːnst/",
            "meaningVi": "tiên tiến",
            "keyCollocations": [
              "advanced technology",
              "advanced devices",
              "advanced features"
            ]
          },
          {
            "word": "carrier pigeon",
            "pos": "noun phr",
            "ipa": "/ˈkærɪə pɪdʒɪn/",
            "meaningVi": "bồ câu đưa thư",
            "keyCollocations": [
              "send messages by carrier pigeon",
              "ancient carrier pigeon",
              "historical carrier pigeon"
            ]
          },
          {
            "word": "charge",
            "pos": "verb",
            "ipa": "/tʃɑːdʒ/",
            "meaningVi": "nạp, sạc (pin)",
            "keyCollocations": [
              "charge the battery",
              "wirelessly charge",
              "charge overnight"
            ]
          },
          {
            "word": "emoji",
            "pos": "noun",
            "ipa": "/ɪˈməʊdʒi/",
            "meaningVi": "biểu tượng cảm xúc",
            "keyCollocations": [
              "send an emoji",
              "express with emojis",
              "popular emojis"
            ]
          },
          {
            "word": "holography",
            "pos": "noun",
            "ipa": "/hɒˈlɒɡrəfi/",
            "meaningVi": "giao tiếp bằng ảnh không gian 3 chiều",
            "keyCollocations": [
              "3D holography",
              "holography communication",
              "use holography"
            ]
          },
          {
            "word": "instantly",
            "pos": "adv",
            "ipa": "/ˈɪnstəntli/",
            "meaningVi": "ngay lập tức",
            "keyCollocations": [
              "connect instantly",
              "receive messages instantly",
              "respond instantly"
            ]
          },
          {
            "word": "Internet connection",
            "pos": "noun phr",
            "ipa": "/ˈɪntənet kəˈnekʃn/",
            "meaningVi": "kết nối mạng",
            "keyCollocations": [
              "fast Internet connection",
              "stable Internet connection",
              "lose Internet connection"
            ]
          },
          {
            "word": "language barrier",
            "pos": "noun phr",
            "ipa": "/ˈlæŋɡwɪdʒ ˈbærɪə/",
            "meaningVi": "rào cản ngôn ngữ",
            "keyCollocations": [
              "break language barriers",
              "overcome language barriers",
              "face language barriers"
            ]
          },
          {
            "word": "live",
            "pos": "adj",
            "ipa": "/laɪv/",
            "meaningVi": "trực tiếp (phát sóng)",
            "keyCollocations": [
              "live stream",
              "live video conference",
              "broadcast live"
            ]
          },
          {
            "word": "smartphone",
            "pos": "noun",
            "ipa": "/ˈsmɑːtfəʊn/",
            "meaningVi": "điện thoại thông minh",
            "keyCollocations": [
              "use a smartphone",
              "latest smartphone",
              "smartphone applications"
            ]
          },
          {
            "word": "social network",
            "pos": "noun phr",
            "ipa": "/ˌsəʊʃl ˈnetwɜːk/",
            "meaningVi": "mạng xã hội",
            "keyCollocations": [
              "join a social network",
              "social network platform",
              "share on social networks"
            ]
          },
          {
            "word": "tablet",
            "pos": "noun",
            "ipa": "/ˈtæblət/",
            "meaningVi": "máy tính bảng",
            "keyCollocations": [
              "work on a tablet",
              "tablet computer",
              "touch tablet"
            ]
          },
          {
            "word": "telepathy",
            "pos": "noun",
            "ipa": "/təˈlepəθi/",
            "meaningVi": "thần giao cách cảm",
            "keyCollocations": [
              "communicate through telepathy",
              "mental telepathy",
              "telepathy in science fiction"
            ]
          },
          {
            "word": "text",
            "pos": "verb/noun",
            "ipa": "/tekst/",
            "meaningVi": "nhắn tin, văn bản",
            "keyCollocations": [
              "text friends",
              "send a text message",
              "text quickly"
            ]
          },
          {
            "word": "thought",
            "pos": "noun",
            "ipa": "/θɔːt/",
            "meaningVi": "ý nghĩ",
            "keyCollocations": [
              "share thoughts",
              "deep thought",
              "transmit thoughts"
            ]
          },
          {
            "word": "translation machine",
            "pos": "noun phr",
            "ipa": "/trænzˈleɪʃn məˈʃiːn/",
            "meaningVi": "máy dịch thuật",
            "keyCollocations": [
              "instant translation machine",
              "wearable translation machine",
              "use translation machine"
            ]
          },
          {
            "word": "transmit",
            "pos": "verb",
            "ipa": "/trænzˈmɪt/",
            "meaningVi": "truyền, chuyển giao",
            "keyCollocations": [
              "transmit data",
              "transmit signals",
              "transmit thoughts"
            ]
          },
          {
            "word": "video conference",
            "pos": "noun phr",
            "ipa": "/ˈvɪdiəʊ ˌkɒnfərəns/",
            "meaningVi": "cuộc họp trực tuyến",
            "keyCollocations": [
              "hold a video conference",
              "attend video conferences",
              "join a video conference"
            ]
          },
          {
            "word": "voice message",
            "pos": "noun phr",
            "ipa": "/ˈvɔɪs mesɪdʒ/",
            "meaningVi": "tin nhắn thoại",
            "keyCollocations": [
              "send a voice message",
              "listen to voice messages",
              "record a voice message"
            ]
          },
          {
            "word": "webcam",
            "pos": "noun",
            "ipa": "/ˈwebkæm/",
            "meaningVi": "thiết bị ghi / truyền hình ảnh",
            "keyCollocations": [
              "turn on the webcam",
              "HD webcam",
              "webcam video"
            ]
          },
          {
            "word": "zoom",
            "pos": "verb",
            "ipa": "/zuːm/",
            "meaningVi": "phóng to / thu nhỏ",
            "keyCollocations": [
              "zoom in on image",
              "zoom out",
              "zoom feature"
            ]
          }
        ]
      },
      {
        "unit": 11,
        "title": "Science and technology",
        "themeVi": "Khoa học và công nghệ",
        "suggestedKeywords": [
          {
            "word": "application",
            "pos": "noun",
            "ipa": "/ˌæplɪˈkeɪʃn/",
            "meaningVi": "ứng dụng",
            "keyCollocations": [
              "mobile application",
              "useful application",
              "install an application"
            ]
          },
          {
            "word": "attendance",
            "pos": "noun",
            "ipa": "/əˈtendəns/",
            "meaningVi": "sự có mặt, sĩ số",
            "keyCollocations": [
              "check attendance",
              "biometric attendance",
              "perfect attendance"
            ]
          },
          {
            "word": "biometric",
            "pos": "adj",
            "ipa": "/ˌbaɪəʊˈmetrɪk/",
            "meaningVi": "thuộc về sinh trắc học",
            "keyCollocations": [
              "biometric recognition",
              "biometric authentication",
              "biometric scanner"
            ]
          },
          {
            "word": "breakout room",
            "pos": "noun phr",
            "ipa": "/ˈbreɪkaʊt ruːm/",
            "meaningVi": "phòng học chia nhỏ, chia nhóm",
            "keyCollocations": [
              "discuss in breakout rooms",
              "assign breakout rooms",
              "online breakout room"
            ]
          },
          {
            "word": "cheating",
            "pos": "noun",
            "ipa": "/ˈtʃiːtɪŋ/",
            "meaningVi": "sự gian lận",
            "keyCollocations": [
              "prevent cheating",
              "cheating in exams",
              "detect cheating"
            ]
          },
          {
            "word": "complain",
            "pos": "verb",
            "ipa": "/kəmˈpleɪn/",
            "meaningVi": "phàn nàn, khiếu nại",
            "keyCollocations": [
              "complain about glitches",
              "complain to teachers",
              "reason to complain"
            ]
          },
          {
            "word": "contact lens",
            "pos": "noun phr",
            "ipa": "/ˈkɒntækt lenz/",
            "meaningVi": "kính áp tròng",
            "keyCollocations": [
              "wear contact lenses",
              "smart contact lenses",
              "bionic contact lenses"
            ]
          },
          {
            "word": "convenient",
            "pos": "adj",
            "ipa": "/kənˈviːniənt/",
            "meaningVi": "thuận tiện, tiện lợi",
            "keyCollocations": [
              "convenient device",
              "extremely convenient",
              "convenient method"
            ]
          },
          {
            "word": "develop",
            "pos": "verb",
            "ipa": "/dɪˈveləp/",
            "meaningVi": "phát triển, khai triển",
            "keyCollocations": [
              "develop new software",
              "develop technology",
              "develop skills"
            ]
          },
          {
            "word": "digital",
            "pos": "adj",
            "ipa": "/ˈdɪdʒɪtl/",
            "meaningVi": "kĩ thuật số",
            "keyCollocations": [
              "digital technology",
              "digital camera",
              "digital learning"
            ]
          },
          {
            "word": "discover",
            "pos": "verb",
            "ipa": "/dɪˈskʌvə/",
            "meaningVi": "phát hiện, khám phá",
            "keyCollocations": [
              "discover new planets",
              "discover solutions",
              "scientists discover"
            ]
          },
          {
            "word": "epidemic",
            "pos": "noun",
            "ipa": "/ˌepɪˈdemɪk/",
            "meaningVi": "dịch bệnh",
            "keyCollocations": [
              "prevent epidemics",
              "fight an epidemic",
              "epidemic tracking"
            ]
          },
          {
            "word": "experiment",
            "pos": "noun",
            "ipa": "/ɪkˈsperɪmənt/",
            "meaningVi": "thí nghiệm",
            "keyCollocations": [
              "conduct an experiment",
              "laboratory experiment",
              "scientific experiment"
            ]
          },
          {
            "word": "eye-tracking",
            "pos": "noun phr",
            "ipa": "/ˈaɪ ˌtrækɪŋ/",
            "meaningVi": "theo dõi cử động mắt",
            "keyCollocations": [
              "eye-tracking technology",
              "eye-tracking glasses",
              "use eye-tracking"
            ]
          },
          {
            "word": "face to face",
            "pos": "adj/adv",
            "ipa": "/ˌfeɪs tə ˈfeɪs/",
            "meaningVi": "trực tiếp, mặt đối mặt",
            "keyCollocations": [
              "face to face interaction",
              "learn face to face",
              "meet face to face"
            ]
          },
          {
            "word": "feedback",
            "pos": "noun",
            "ipa": "/ˈfiːdbæk/",
            "meaningVi": "ý kiến phản hồi",
            "keyCollocations": [
              "instant feedback",
              "give helpful feedback",
              "receive positive feedback"
            ]
          },
          {
            "word": "fingerprint",
            "pos": "noun",
            "ipa": "/ˈfɪŋɡəprɪnt/",
            "meaningVi": "dấu vân tay",
            "keyCollocations": [
              "fingerprint scanner",
              "unlock with fingerprint",
              "fingerprint recognition"
            ]
          },
          {
            "word": "invent",
            "pos": "verb",
            "ipa": "/ɪnˈvent/",
            "meaningVi": "phát minh",
            "keyCollocations": [
              "invent new tools",
              "invent devices",
              "invented by scientists"
            ]
          },
          {
            "word": "invention",
            "pos": "noun",
            "ipa": "/ɪnˈvenʃn/",
            "meaningVi": "sự phát minh, sáng chế",
            "keyCollocations": [
              "greatest invention",
              "modern invention",
              "technological invention"
            ]
          },
          {
            "word": "mark",
            "pos": "verb",
            "ipa": "/mɑːk/",
            "meaningVi": "chấm điểm",
            "keyCollocations": [
              "AI marks papers",
              "mark assignments",
              "mark exams"
            ]
          },
          {
            "word": "platform",
            "pos": "noun",
            "ipa": "/ˈplætfɔːm/",
            "meaningVi": "nền tảng",
            "keyCollocations": [
              "learning platform",
              "digital platform",
              "software platform"
            ]
          },
          {
            "word": "recognition",
            "pos": "noun",
            "ipa": "/ˌrekəɡˈnɪʃn/",
            "meaningVi": "sự nhận diện, công nhận",
            "keyCollocations": [
              "facial recognition",
              "speech recognition",
              "pattern recognition"
            ]
          },
          {
            "word": "scanner",
            "pos": "noun",
            "ipa": "/ˈskænə/",
            "meaningVi": "máy quét",
            "keyCollocations": [
              "barcode scanner",
              "document scanner",
              "retina scanner"
            ]
          },
          {
            "word": "science",
            "pos": "noun",
            "ipa": "/ˈsaɪəns/",
            "meaningVi": "khoa học",
            "keyCollocations": [
              "modern science",
              "study science",
              "advances in science"
            ]
          },
          {
            "word": "screen",
            "pos": "noun",
            "ipa": "/skriːn/",
            "meaningVi": "màn hình, màn chiếu",
            "keyCollocations": [
              "touch screen",
              "computer screen",
              "interactive screen"
            ]
          },
          {
            "word": "solution",
            "pos": "noun",
            "ipa": "/səˈluːʃn/",
            "meaningVi": "giải pháp, đáp án",
            "keyCollocations": [
              "technological solution",
              "find a solution",
              "effective solution"
            ]
          },
          {
            "word": "technology",
            "pos": "noun",
            "ipa": "/tekˈnɒlədʒi/",
            "meaningVi": "công nghệ",
            "keyCollocations": [
              "cutting-edge technology",
              "use technology",
              "information technology"
            ]
          },
          {
            "word": "truancy",
            "pos": "noun",
            "ipa": "/ˈtruːənsi/",
            "meaningVi": "trốn học không phép",
            "keyCollocations": [
              "reduce truancy",
              "detect truancy",
              "tackle truancy"
            ]
          }
        ]
      },
      {
        "unit": 12,
        "title": "Life on other planets",
        "themeVi": "Sự sống trên các hành tinh khác",
        "suggestedKeywords": [
          {
            "word": "alien",
            "pos": "noun",
            "ipa": "/ˈeɪliən/",
            "meaningVi": "người ngoài hành tinh",
            "keyCollocations": [
              "alien creature",
              "search for aliens",
              "alien civilization"
            ]
          },
          {
            "word": "commander",
            "pos": "noun",
            "ipa": "/kəˈmɑːndə/",
            "meaningVi": "người chỉ huy",
            "keyCollocations": [
              "spaceship commander",
              "mission commander",
              "brave commander"
            ]
          },
          {
            "word": "crater",
            "pos": "noun",
            "ipa": "/ˈkreɪtə/",
            "meaningVi": "miệng núi lửa, hố thiên thạch",
            "keyCollocations": [
              "crater on the Moon",
              "deep crater",
              "impact crater"
            ]
          },
          {
            "word": "creature",
            "pos": "noun",
            "ipa": "/ˈkriːtʃə/",
            "meaningVi": "sinh vật, loài vật",
            "keyCollocations": [
              "strange creature",
              "living creature",
              "extraterrestrial creature"
            ]
          },
          {
            "word": "galaxy",
            "pos": "noun",
            "ipa": "/ˈɡæləksi/",
            "meaningVi": "thiên hà",
            "keyCollocations": [
              "Milky Way galaxy",
              "explore galaxies",
              "distant galaxy"
            ]
          },
          {
            "word": "gravity",
            "pos": "noun",
            "ipa": "/ˈɡrævəti/",
            "meaningVi": "trọng lực",
            "keyCollocations": [
              "zero gravity",
              "force of gravity",
              "low gravity on Mars"
            ]
          },
          {
            "word": "habitable",
            "pos": "adj",
            "ipa": "/ˈhæbɪtəbl/",
            "meaningVi": "có thể ở được, phù hợp sự sống",
            "keyCollocations": [
              "habitable planet",
              "habitable zone",
              "potentially habitable"
            ]
          },
          {
            "word": "Jupiter",
            "pos": "noun",
            "ipa": "/ˈdʒuːpɪtə/",
            "meaningVi": "sao Mộc",
            "keyCollocations": [
              "planet Jupiter",
              "rings of Jupiter",
              "orbiting Jupiter"
            ]
          },
          {
            "word": "Mars",
            "pos": "noun",
            "ipa": "/mɑːz/",
            "meaningVi": "sao Hỏa",
            "keyCollocations": [
              "mission to Mars",
              "surface of Mars",
              "life on Mars"
            ]
          },
          {
            "word": "Mercury",
            "pos": "noun",
            "ipa": "/ˈmɜːkjəri/",
            "meaningVi": "sao Thủy",
            "keyCollocations": [
              "planet Mercury",
              "closest to Sun Mercury",
              "hot Mercury"
            ]
          },
          {
            "word": "Neptune",
            "pos": "noun",
            "ipa": "/ˈneptjuːn/",
            "meaningVi": "sao Hải Vương",
            "keyCollocations": [
              "planet Neptune",
              "blue Neptune",
              "orbit of Neptune"
            ]
          },
          {
            "word": "oppose",
            "pos": "verb",
            "ipa": "/əˈpəʊz/",
            "meaningVi": "chiến đấu, đánh lại, chống lại",
            "keyCollocations": [
              "oppose alien invaders",
              "oppose the plan",
              "firmly oppose"
            ]
          },
          {
            "word": "possibility",
            "pos": "noun",
            "ipa": "/ˌpɒsəˈbɪləti/",
            "meaningVi": "khả năng, sự có thể",
            "keyCollocations": [
              "possibility of life",
              "explore possibilities",
              "distinct possibility"
            ]
          },
          {
            "word": "promising",
            "pos": "adj",
            "ipa": "/ˈprɒmɪsɪŋ/",
            "meaningVi": "đầy hứa hẹn, nhiều triển vọng",
            "keyCollocations": [
              "promising discoveries",
              "promising signs",
              "promising planet"
            ]
          },
          {
            "word": "rocket",
            "pos": "noun",
            "ipa": "/ˈrɒkɪt/",
            "meaningVi": "tàu vũ trụ, tên lửa",
            "keyCollocations": [
              "launch a rocket",
              "space rocket",
              "board the rocket"
            ]
          },
          {
            "word": "Saturn",
            "pos": "noun",
            "ipa": "/ˈsætən/",
            "meaningVi": "sao Thổ",
            "keyCollocations": [
              "rings of Saturn",
              "planet Saturn",
              "orbit around Saturn"
            ]
          },
          {
            "word": "telescope",
            "pos": "noun",
            "ipa": "/ˈtelɪskəʊp/",
            "meaningVi": "kính thiên văn",
            "keyCollocations": [
              "look through a telescope",
              "space telescope",
              "powerful telescope"
            ]
          },
          {
            "word": "trace",
            "pos": "noun",
            "ipa": "/treɪs/",
            "meaningVi": "dấu vết, vết tích",
            "keyCollocations": [
              "traces of water",
              "trace of life",
              "find traces"
            ]
          },
          {
            "word": "UFO",
            "pos": "noun",
            "ipa": "/ˌjuː ef ˈəʊ/",
            "meaningVi": "vật thể bay không xác định (đĩa bay)",
            "keyCollocations": [
              "sight a UFO",
              "mysterious UFO",
              "flying UFO"
            ]
          },
          {
            "word": "Uranus",
            "pos": "noun",
            "ipa": "/ˈjʊərənəs/",
            "meaningVi": "sao Thiên Vương",
            "keyCollocations": [
              "planet Uranus",
              "ice giant Uranus",
              "explore Uranus"
            ]
          },
          {
            "word": "Venus",
            "pos": "noun",
            "ipa": "/ˈviːnəs/",
            "meaningVi": "sao Kim",
            "keyCollocations": [
              "planet Venus",
              "hot surface of Venus",
              "atmosphere of Venus"
            ]
          }
        ]
      }
    ]
  },
  {
    "grade": 9,
    "gradeName": "Lớp 9 - Global Success (Trọng tâm thi vào 10)",
    "units": [
      {
        "unit": 1,
        "title": "Local community",
        "themeVi": "Cộng đồng địa phương",
        "suggestedKeywords": [
          {
            "word": "artisan",
            "pos": "noun",
            "ipa": "/ˌɑːtɪˈzæn/",
            "meaningVi": "thợ làm nghề thủ công",
            "keyCollocations": [
              "skilled artisan",
              "traditional artisan",
              "local artisan"
            ]
          },
          {
            "word": "community",
            "pos": "noun",
            "ipa": "/kəˈmjuːnəti/",
            "meaningVi": "cộng đồng",
            "keyCollocations": [
              "local community",
              "community service",
              "member of the community"
            ]
          },
          {
            "word": "community helper",
            "pos": "noun phr",
            "ipa": "/kəˈmjuːnəti ˈhelpə/",
            "meaningVi": "người phục vụ cộng đồng",
            "keyCollocations": [
              "dedicated community helper",
              "role of community helper",
              "support community helper"
            ]
          },
          {
            "word": "craft village",
            "pos": "noun phr",
            "ipa": "/ˌkrɑːft ˈvɪlɪdʒ/",
            "meaningVi": "làng nghề thủ công",
            "keyCollocations": [
              "visit a craft village",
              "traditional craft village",
              "famous craft village"
            ]
          },
          {
            "word": "cut down on",
            "pos": "verb phr",
            "ipa": "/kʌt daʊn ɒn/",
            "meaningVi": "cắt giảm",
            "keyCollocations": [
              "cut down on waste",
              "cut down on expenses",
              "cut down on sugar"
            ]
          },
          {
            "word": "delivery person",
            "pos": "noun phr",
            "ipa": "/dɪˈlɪvəri ˈpɜːsn/",
            "meaningVi": "nhân viên giao hàng",
            "keyCollocations": [
              "fast delivery person",
              "contact the delivery person",
              "friendly delivery person"
            ]
          },
          {
            "word": "electrician",
            "pos": "noun",
            "ipa": "/ɪˌlekˈtrɪʃn/",
            "meaningVi": "thợ điện",
            "keyCollocations": [
              "call an electrician",
              "qualified electrician",
              "professional electrician"
            ]
          },
          {
            "word": "facilities",
            "pos": "noun plural",
            "ipa": "/fəˈsɪlətiz/",
            "meaningVi": "cơ sở vật chất",
            "keyCollocations": [
              "modern facilities",
              "public facilities",
              "school facilities"
            ]
          },
          {
            "word": "firefighter",
            "pos": "noun",
            "ipa": "/ˈfaɪəfaɪtə/",
            "meaningVi": "lính cứu hoả",
            "keyCollocations": [
              "brave firefighter",
              "work as a firefighter",
              "firefighter team"
            ]
          },
          {
            "word": "fragrance",
            "pos": "noun",
            "ipa": "/ˈfreɪɡrəns/",
            "meaningVi": "hương thơm",
            "keyCollocations": [
              "pleasant fragrance",
              "natural fragrance",
              "sweet fragrance"
            ]
          },
          {
            "word": "function",
            "pos": "noun",
            "ipa": "/ˈfʌŋkʃn/",
            "meaningVi": "chức năng",
            "keyCollocations": [
              "main function",
              "perform a function",
              "important function"
            ]
          },
          {
            "word": "garbage collector",
            "pos": "noun phr",
            "ipa": "/ˈɡɑːbɪdʒ kəlektə/",
            "meaningVi": "nhân viên dọn vệ sinh",
            "keyCollocations": [
              "hardworking garbage collector",
              "job of garbage collector",
              "help garbage collector"
            ]
          },
          {
            "word": "get on with",
            "pos": "verb phr",
            "ipa": "/ɡet ɒn wɪð/",
            "meaningVi": "có quan hệ tốt với",
            "keyCollocations": [
              "get on well with",
              "get on with neighbours",
              "get on with friends"
            ]
          },
          {
            "word": "hand down",
            "pos": "verb phr",
            "ipa": "/hænd daʊn/",
            "meaningVi": "truyền lại",
            "keyCollocations": [
              "hand down traditions",
              "handed down by ancestors",
              "hand down skills"
            ]
          },
          {
            "word": "handicraft",
            "pos": "noun",
            "ipa": "/ˈhændikrɑːft/",
            "meaningVi": "sản phẩm thủ công",
            "keyCollocations": [
              "traditional handicraft",
              "make handicrafts",
              "handicraft market"
            ]
          },
          {
            "word": "look around",
            "pos": "verb phr",
            "ipa": "/lʊk əˈraʊnd/",
            "meaningVi": "ngắm nghía xung quanh",
            "keyCollocations": [
              "look around the village",
              "look around the shop",
              "look around carefully"
            ]
          },
          {
            "word": "original",
            "pos": "adj",
            "ipa": "/əˈrɪdʒənl/",
            "meaningVi": "nguyên bản",
            "keyCollocations": [
              "original design",
              "original version",
              "original product"
            ]
          },
          {
            "word": "pass down",
            "pos": "verb phr",
            "ipa": "/pɑːs daʊn/",
            "meaningVi": "truyền lại",
            "keyCollocations": [
              "pass down from generation",
              "pass down knowledge",
              "pass down customs"
            ]
          },
          {
            "word": "police officer",
            "pos": "noun phr",
            "ipa": "/pəˈliːs ɒfɪsə/",
            "meaningVi": "công an, cảnh sát",
            "keyCollocations": [
              "traffic police officer",
              "ask a police officer",
              "police officer on duty"
            ]
          },
          {
            "word": "pottery",
            "pos": "noun",
            "ipa": "/ˈpɒtəri/",
            "meaningVi": "đồ gốm",
            "keyCollocations": [
              "pottery village",
              "make pottery",
              "traditional pottery"
            ]
          },
          {
            "word": "preserve",
            "pos": "verb",
            "ipa": "/prɪˈzɜːv/",
            "meaningVi": "bảo tồn",
            "keyCollocations": [
              "preserve heritage",
              "preserve traditions",
              "preserve the environment"
            ]
          },
          {
            "word": "run out of",
            "pos": "verb phr",
            "ipa": "/rʌn aʊt əv/",
            "meaningVi": "hết, cạn kiệt",
            "keyCollocations": [
              "run out of time",
              "run out of money",
              "run out of resources"
            ]
          },
          {
            "word": "speciality",
            "pos": "noun",
            "ipa": "/ˌspeʃiˈæləti/",
            "meaningVi": "đặc sản",
            "keyCollocations": [
              "local speciality",
              "famous speciality",
              "taste the speciality"
            ]
          },
          {
            "word": "suburb",
            "pos": "noun",
            "ipa": "/ˈsʌbɜːb/",
            "meaningVi": "vùng ngoại ô",
            "keyCollocations": [
              "live in the suburbs",
              "peaceful suburb",
              "quiet suburb"
            ]
          },
          {
            "word": "tourist attraction",
            "pos": "noun phr",
            "ipa": "/ˈtʊərɪst əˈtrækʃn/",
            "meaningVi": "điểm du lịch",
            "keyCollocations": [
              "popular tourist attraction",
              "famous tourist attraction",
              "visit tourist attractions"
            ]
          }
        ]
      },
      {
        "unit": 2,
        "title": "City life",
        "themeVi": "Cuộc sống thành thị",
        "suggestedKeywords": [
          {
            "word": "bustling",
            "pos": "adj",
            "ipa": "/ˈbʌslɪŋ/",
            "meaningVi": "hối hả, nhộn nhịp, náo nhiệt",
            "keyCollocations": [
              "bustling city",
              "bustling street",
              "bustling market"
            ]
          },
          {
            "word": "carry out",
            "pos": "verb phr",
            "ipa": "/ˈkæri aʊt/",
            "meaningVi": "tiến hành (nghiên cứu, nhiệm vụ)",
            "keyCollocations": [
              "carry out research",
              "carry out a survey",
              "carry out a plan"
            ]
          },
          {
            "word": "come down with",
            "pos": "verb phr",
            "ipa": "/kʌm daʊn wɪð/",
            "meaningVi": "bị ốm (vì bệnh gì)",
            "keyCollocations": [
              "come down with the flu",
              "come down with a cold",
              "come down with a fever"
            ]
          },
          {
            "word": "concrete jungle",
            "pos": "noun phr",
            "ipa": "/ˌkɒŋkriːt ˈdʒʌŋɡl/",
            "meaningVi": "rừng bê tông (nhiều nhà cao tầng)",
            "keyCollocations": [
              "living in a concrete jungle",
              "escape the concrete jungle",
              "modern concrete jungle"
            ]
          },
          {
            "word": "congested",
            "pos": "adj",
            "ipa": "/kənˈdʒestɪd/",
            "meaningVi": "tắc nghẽn (giao thông)",
            "keyCollocations": [
              "congested streets",
              "heavily congested",
              "congested roads"
            ]
          },
          {
            "word": "construction site",
            "pos": "noun phr",
            "ipa": "/kənˈstrʌkʃn saɪt/",
            "meaningVi": "công trường xây dựng",
            "keyCollocations": [
              "work at a construction site",
              "noisy construction site",
              "near a construction site"
            ]
          },
          {
            "word": "downtown",
            "pos": "noun/adv",
            "ipa": "/ˌdaʊnˈtaʊn/",
            "meaningVi": "khu trung tâm thành phố",
            "keyCollocations": [
              "go downtown",
              "in downtown",
              "downtown area"
            ]
          },
          {
            "word": "get around",
            "pos": "verb phr",
            "ipa": "/ɡet əˈraʊnd/",
            "meaningVi": "di chuyển xung quanh",
            "keyCollocations": [
              "easy to get around",
              "get around by bus",
              "get around the city"
            ]
          },
          {
            "word": "hang out with",
            "pos": "verb phr",
            "ipa": "/hæŋ aʊt wɪð/",
            "meaningVi": "đi chơi (cùng ai)",
            "keyCollocations": [
              "hang out with friends",
              "hang out at the mall",
              "hang out on weekends"
            ]
          },
          {
            "word": "hygiene",
            "pos": "noun",
            "ipa": "/ˈhaɪdʒiːn/",
            "meaningVi": "vệ sinh",
            "keyCollocations": [
              "food hygiene",
              "personal hygiene",
              "improve hygiene"
            ]
          },
          {
            "word": "itchy",
            "pos": "adj",
            "ipa": "/ˈɪtʃi/",
            "meaningVi": "ngứa, gây ngứa",
            "keyCollocations": [
              "itchy eyes",
              "feel itchy",
              "itchy skin"
            ]
          },
          {
            "word": "leftover",
            "pos": "noun",
            "ipa": "/ˈleftəʊvə/",
            "meaningVi": "thức ăn thừa",
            "keyCollocations": [
              "eat leftovers",
              "store leftovers",
              "leftover food"
            ]
          },
          {
            "word": "liveable",
            "pos": "adj",
            "ipa": "/ˈlɪvəbl/",
            "meaningVi": "đáng sống",
            "keyCollocations": [
              "most liveable city",
              "liveable environment",
              "liveable conditions"
            ]
          },
          {
            "word": "metro",
            "pos": "noun",
            "ipa": "/ˈmetrəʊ/",
            "meaningVi": "hệ thống tàu điện ngầm",
            "keyCollocations": [
              "metro system",
              "take the metro",
              "metro station"
            ]
          },
          {
            "word": "pricey",
            "pos": "adj",
            "ipa": "/ˈpraɪsi/",
            "meaningVi": "đắt đỏ",
            "keyCollocations": [
              "pricey restaurant",
              "quite pricey",
              "pricey goods"
            ]
          },
          {
            "word": "process",
            "pos": "verb",
            "ipa": "/ˈprəʊses/",
            "meaningVi": "xử lí",
            "keyCollocations": [
              "process waste",
              "process information",
              "process data"
            ]
          },
          {
            "word": "public amenities",
            "pos": "noun phr",
            "ipa": "/ˈpʌblɪk əˈmiːnətiz/",
            "meaningVi": "tiện ích công cộng",
            "keyCollocations": [
              "access to public amenities",
              "improve public amenities",
              "modern public amenities"
            ]
          },
          {
            "word": "rush hour",
            "pos": "noun phr",
            "ipa": "/ˈrʌʃ aʊə/",
            "meaningVi": "giờ cao điểm",
            "keyCollocations": [
              "during rush hour",
              "morning rush hour",
              "avoid rush hour"
            ]
          },
          {
            "word": "sky train",
            "pos": "noun phr",
            "ipa": "/skaɪ treɪn/",
            "meaningVi": "tàu điện trên không",
            "keyCollocations": [
              "ride the sky train",
              "sky train project",
              "modern sky train"
            ]
          },
          {
            "word": "tram",
            "pos": "noun",
            "ipa": "/træm/",
            "meaningVi": "xe điện",
            "keyCollocations": [
              "take a tram",
              "tram line",
              "historic tram"
            ]
          },
          {
            "word": "underground",
            "pos": "noun",
            "ipa": "/ˌʌndəˈɡraʊnd/",
            "meaningVi": "tàu điện ngầm",
            "keyCollocations": [
              "travel by underground",
              "underground station",
              "London underground"
            ]
          }
        ]
      },
      {
        "unit": 3,
        "title": "Healthy living for teens",
        "themeVi": "Lối sống lành mạnh cho thanh thiếu niên",
        "suggestedKeywords": [
          {
            "word": "accomplish",
            "pos": "verb",
            "ipa": "/əˈkʌmplɪʃ/",
            "meaningVi": "hoàn thành, đạt được",
            "keyCollocations": [
              "accomplish goals",
              "accomplish a task",
              "accomplish a mission"
            ]
          },
          {
            "word": "additional",
            "pos": "adj",
            "ipa": "/əˈdɪʃənl/",
            "meaningVi": "thêm, thêm vào",
            "keyCollocations": [
              "additional information",
              "additional support",
              "additional cost"
            ]
          },
          {
            "word": "anxiety",
            "pos": "noun",
            "ipa": "/æŋˈzaɪəti/",
            "meaningVi": "sự lo lắng, băn khoăn",
            "keyCollocations": [
              "reduce anxiety",
              "cause anxiety",
              "suffer from anxiety"
            ]
          },
          {
            "word": "appropriately",
            "pos": "adv",
            "ipa": "/əˈprəʊpriətli/",
            "meaningVi": "phù hợp, thích đáng",
            "keyCollocations": [
              "behave appropriately",
              "dress appropriately",
              "respond appropriately"
            ]
          },
          {
            "word": "assignment",
            "pos": "noun",
            "ipa": "/əˈsaɪnmənt/",
            "meaningVi": "nhiệm vụ, bài tập",
            "keyCollocations": [
              "complete assignments",
              "homework assignment",
              "submit assignments"
            ]
          },
          {
            "word": "counsellor",
            "pos": "noun",
            "ipa": "/ˈkaʊnsələ/",
            "meaningVi": "cố vấn, người tư vấn",
            "keyCollocations": [
              "school counsellor",
              "talk to a counsellor",
              "seek guidance from a counsellor"
            ]
          },
          {
            "word": "deadline",
            "pos": "noun",
            "ipa": "/ˈdedlaɪn/",
            "meaningVi": "thời hạn cuối cùng",
            "keyCollocations": [
              "meet deadlines",
              "tight deadline",
              "miss the deadline"
            ]
          },
          {
            "word": "delay",
            "pos": "verb",
            "ipa": "/dɪˈleɪ/",
            "meaningVi": "chậm trễ, trì hoãn",
            "keyCollocations": [
              "delay doing homework",
              "without delay",
              "cause a delay"
            ]
          },
          {
            "word": "distraction",
            "pos": "noun",
            "ipa": "/dɪˈstrækʃn/",
            "meaningVi": "điều làm sao lãng",
            "keyCollocations": [
              "avoid distractions",
              "free from distraction",
              "major distraction"
            ]
          },
          {
            "word": "due date",
            "pos": "noun phr",
            "ipa": "/ˈdjuː deɪt/",
            "meaningVi": "hạn chót",
            "keyCollocations": [
              "before the due date",
              "project due date",
              "check the due date"
            ]
          },
          {
            "word": "fattening",
            "pos": "adj",
            "ipa": "/ˈfætnɪŋ/",
            "meaningVi": "gây béo phì",
            "keyCollocations": [
              "fattening food",
              "avoid fattening snacks",
              "high fattening content"
            ]
          },
          {
            "word": "mental",
            "pos": "adj",
            "ipa": "/ˈmentl/",
            "meaningVi": "(thuộc) tinh thần, trí óc",
            "keyCollocations": [
              "mental health",
              "mental well-being",
              "mental focus"
            ]
          },
          {
            "word": "minimise",
            "pos": "verb",
            "ipa": "/ˈmɪnɪmaɪz/",
            "meaningVi": "giảm đến mức tối thiểu",
            "keyCollocations": [
              "minimise stress",
              "minimise risks",
              "minimise distractions"
            ]
          },
          {
            "word": "mood",
            "pos": "noun",
            "ipa": "/muːd/",
            "meaningVi": "tâm trạng",
            "keyCollocations": [
              "in a good mood",
              "bad mood",
              "boost your mood"
            ]
          },
          {
            "word": "optimistic",
            "pos": "adj",
            "ipa": "/ˌɒptɪˈmɪstɪk/",
            "meaningVi": "lạc quan",
            "keyCollocations": [
              "optimistic attitude",
              "remain optimistic",
              "feel optimistic"
            ]
          },
          {
            "word": "physical",
            "pos": "adj",
            "ipa": "/ˈfɪzɪkl/",
            "meaningVi": "(thuộc) cơ thể, thể chất",
            "keyCollocations": [
              "physical health",
              "physical exercise",
              "physical fitness"
            ]
          },
          {
            "word": "priority",
            "pos": "noun",
            "ipa": "/praɪˈɒrəti/",
            "meaningVi": "sự ưu tiên",
            "keyCollocations": [
              "top priority",
              "set priorities",
              "give priority to"
            ]
          },
          {
            "word": "stressed out",
            "pos": "adj phr",
            "ipa": "/strest aʊt/",
            "meaningVi": "căng thẳng",
            "keyCollocations": [
              "feel stressed out",
              "get stressed out",
              "stressed out about exams"
            ]
          },
          {
            "word": "well-balanced",
            "pos": "adj",
            "ipa": "/ˌwel ˈbælənst/",
            "meaningVi": "cân bằng, đúng mực",
            "keyCollocations": [
              "well-balanced diet",
              "well-balanced lifestyle",
              "well-balanced meal"
            ]
          }
        ]
      },
      {
        "unit": 4,
        "title": "Remembering the past",
        "themeVi": "Nhớ về quá khứ",
        "suggestedKeywords": [
          {
            "word": "ancient",
            "pos": "adj",
            "ipa": "/ˈeɪnʃənt/",
            "meaningVi": "cổ đại, lâu đời",
            "keyCollocations": [
              "ancient town",
              "ancient monuments",
              "ancient times"
            ]
          },
          {
            "word": "anniversary",
            "pos": "noun",
            "ipa": "/ˌænɪˈvɜːsəri/",
            "meaningVi": "ngày kỉ niệm, lễ kỉ niệm",
            "keyCollocations": [
              "celebrate an anniversary",
              "wedding anniversary",
              "founding anniversary"
            ]
          },
          {
            "word": "barefoot",
            "pos": "adj/adv",
            "ipa": "/ˈbeəfʊt/",
            "meaningVi": "chân trần",
            "keyCollocations": [
              "walk barefoot",
              "run barefoot",
              "play barefoot"
            ]
          },
          {
            "word": "basic",
            "pos": "adj",
            "ipa": "/ˈbeɪsɪk/",
            "meaningVi": "cơ bản",
            "keyCollocations": [
              "basic needs",
              "basic skills",
              "basic facilities"
            ]
          },
          {
            "word": "castle",
            "pos": "noun",
            "ipa": "/ˈkɑːsl/",
            "meaningVi": "lâu đài",
            "keyCollocations": [
              "historic castle",
              "visit a castle",
              "medieval castle"
            ]
          },
          {
            "word": "communal",
            "pos": "adj",
            "ipa": "/kəˈmjuːnl/",
            "meaningVi": "dùng chung, thuộc cộng đồng",
            "keyCollocations": [
              "communal house",
              "communal activities",
              "communal life"
            ]
          },
          {
            "word": "complex",
            "pos": "noun",
            "ipa": "/ˈkɒmpleks/",
            "meaningVi": "khu phức hợp, quần thể",
            "keyCollocations": [
              "monument complex",
              "temple complex",
              "cultural complex"
            ]
          },
          {
            "word": "deep-rooted",
            "pos": "adj",
            "ipa": "/ˌdiːp ˈruːtɪd/",
            "meaningVi": "lâu đời, ăn sâu bén rễ",
            "keyCollocations": [
              "deep-rooted tradition",
              "deep-rooted belief",
              "deep-rooted customs"
            ]
          },
          {
            "word": "face to face",
            "pos": "adv/adj",
            "ipa": "/ˌfeɪs tə ˈfeɪs/",
            "meaningVi": "trực tiếp, mặt đối mặt",
            "keyCollocations": [
              "talk face to face",
              "meet face to face",
              "face to face communication"
            ]
          },
          {
            "word": "fish and chips",
            "pos": "noun phr",
            "ipa": "/ˌfɪʃ ən ˈtʃɪps/",
            "meaningVi": "món cá và khoai tây chiên Anh",
            "keyCollocations": [
              "traditional fish and chips",
              "eat fish and chips",
              "famous fish and chips"
            ]
          },
          {
            "word": "found",
            "pos": "verb",
            "ipa": "/faʊnd/",
            "meaningVi": "thành lập",
            "keyCollocations": [
              "found an organization",
              "founded in 1010",
              "found a school"
            ]
          },
          {
            "word": "generation",
            "pos": "noun",
            "ipa": "/ˌdʒenəˈreɪʃn/",
            "meaningVi": "thế hệ",
            "keyCollocations": [
              "younger generation",
              "older generation",
              "future generations"
            ]
          },
          {
            "word": "monument",
            "pos": "noun",
            "ipa": "/ˈmɒnjumənt/",
            "meaningVi": "tượng đài",
            "keyCollocations": [
              "historic monument",
              "build a monument",
              "national monument"
            ]
          },
          {
            "word": "observe",
            "pos": "verb",
            "ipa": "/əbˈzɜːv/",
            "meaningVi": "duy trì, tuân theo, quan sát",
            "keyCollocations": [
              "observe rules",
              "observe traditions",
              "observe behaviour"
            ]
          },
          {
            "word": "occupied",
            "pos": "adj",
            "ipa": "/ˈɒkjupaɪd/",
            "meaningVi": "có người ở",
            "keyCollocations": [
              "fully occupied",
              "remained occupied",
              "occupied territory"
            ]
          },
          {
            "word": "occupy",
            "pos": "verb",
            "ipa": "/ˈɒkjupaɪ/",
            "meaningVi": "chiếm giữ",
            "keyCollocations": [
              "occupy a space",
              "occupy time",
              "occupy land"
            ]
          },
          {
            "word": "promote",
            "pos": "verb",
            "ipa": "/prəˈməʊt/",
            "meaningVi": "thúc đẩy, quảng bá",
            "keyCollocations": [
              "promote tourism",
              "promote culture",
              "promote understanding"
            ]
          },
          {
            "word": "recognise",
            "pos": "verb",
            "ipa": "/ˈrekəɡnaɪz/",
            "meaningVi": "công nhận, nhận ra",
            "keyCollocations": [
              "recognised as world heritage",
              "recognise achievements",
              "officially recognise"
            ]
          },
          {
            "word": "religious",
            "pos": "adj",
            "ipa": "/rɪˈlɪdʒəs/",
            "meaningVi": "(thuộc) tôn giáo",
            "keyCollocations": [
              "religious festival",
              "religious belief",
              "religious ceremony"
            ]
          },
          {
            "word": "structure",
            "pos": "noun",
            "ipa": "/ˈstrʌktʃə/",
            "meaningVi": "cấu trúc, công trình kiến trúc",
            "keyCollocations": [
              "wooden structure",
              "architectural structure",
              "ancient structure"
            ]
          },
          {
            "word": "takeaway",
            "pos": "noun",
            "ipa": "/ˈteɪkəweɪ/",
            "meaningVi": "đồ ăn bán sẵn mang về",
            "keyCollocations": [
              "order takeaway",
              "takeaway food",
              "takeaway meal"
            ]
          }
        ]
      },
      {
        "unit": 5,
        "title": "Our experiences",
        "themeVi": "Những trải nghiệm của chúng ta",
        "suggestedKeywords": [
          {
            "word": "amazing",
            "pos": "adj",
            "ipa": "/əˈmeɪzɪŋ/",
            "meaningVi": "ngạc nhiên ở mức đáng ngưỡng mộ",
            "keyCollocations": [
              "amazing experience",
              "feel amazing",
              "look amazing"
            ]
          },
          {
            "word": "army-like",
            "pos": "adj",
            "ipa": "/ˈɑːmi laɪk/",
            "meaningVi": "như trong quân đội",
            "keyCollocations": [
              "army-like discipline",
              "army-like training",
              "army-like camp"
            ]
          },
          {
            "word": "brilliant",
            "pos": "adj",
            "ipa": "/ˈbrɪliənt/",
            "meaningVi": "rất ấn tượng, rất thông minh",
            "keyCollocations": [
              "brilliant idea",
              "brilliant performance",
              "brilliant student"
            ]
          },
          {
            "word": "campus",
            "pos": "noun",
            "ipa": "/ˈkæmpəs/",
            "meaningVi": "khuôn viên trường",
            "keyCollocations": [
              "university campus",
              "on campus",
              "school campus"
            ]
          },
          {
            "word": "confidence",
            "pos": "noun",
            "ipa": "/ˈkɒnfɪdəns/",
            "meaningVi": "sự tự tin",
            "keyCollocations": [
              "gain confidence",
              "boost confidence",
              "have confidence"
            ]
          },
          {
            "word": "coral reef",
            "pos": "noun phr",
            "ipa": "/ˈkɒrəl riːf/",
            "meaningVi": "rặng san hô",
            "keyCollocations": [
              "explore coral reefs",
              "protect coral reefs",
              "colourful coral reefs"
            ]
          },
          {
            "word": "eco-tour",
            "pos": "noun phr",
            "ipa": "/ˈiːkəʊ ˌtʊə/",
            "meaningVi": "du lịch sinh thái",
            "keyCollocations": [
              "join an eco-tour",
              "eco-tour package",
              "book an eco-tour"
            ]
          },
          {
            "word": "embarrassing",
            "pos": "adj",
            "ipa": "/ɪmˈbærəsɪŋ/",
            "meaningVi": "làm ai bối rối, ngượng ngùng",
            "keyCollocations": [
              "embarrassing moment",
              "feel embarrassing",
              "embarrassing situation"
            ]
          },
          {
            "word": "exhilarating",
            "pos": "adj",
            "ipa": "/ɪɡˈzɪləreɪtɪŋ/",
            "meaningVi": "đầy phấn khích",
            "keyCollocations": [
              "exhilarating experience",
              "exhilarating ride",
              "feel exhilarating"
            ]
          },
          {
            "word": "experience",
            "pos": "noun",
            "ipa": "/ɪkˈspɪəriəns/",
            "meaningVi": "trải nghiệm, kinh nghiệm",
            "keyCollocations": [
              "unforgettable experience",
              "valuable experience",
              "gain experience"
            ]
          },
          {
            "word": "explore",
            "pos": "verb",
            "ipa": "/ɪkˈsplɔː/",
            "meaningVi": "khám phá",
            "keyCollocations": [
              "explore new places",
              "explore nature",
              "explore caves"
            ]
          },
          {
            "word": "fauna",
            "pos": "noun",
            "ipa": "/ˈfɔːnə/",
            "meaningVi": "hệ động vật",
            "keyCollocations": [
              "flora and fauna",
              "rich fauna",
              "local fauna"
            ]
          },
          {
            "word": "flora",
            "pos": "noun",
            "ipa": "/ˈflɔːrə/",
            "meaningVi": "hệ thực vật",
            "keyCollocations": [
              "native flora",
              "rich flora",
              "protect the flora"
            ]
          },
          {
            "word": "lack",
            "pos": "verb",
            "ipa": "/læk/",
            "meaningVi": "thiếu",
            "keyCollocations": [
              "lack confidence",
              "lack experience",
              "lack resources"
            ]
          },
          {
            "word": "learn by rote",
            "pos": "verb phr",
            "ipa": "/lɜːn bai rəʊt/",
            "meaningVi": "học vẹt",
            "keyCollocations": [
              "avoid learning by rote",
              "learn formulas by rote",
              "do not learn by rote"
            ]
          },
          {
            "word": "memorable",
            "pos": "adj",
            "ipa": "/ˈmemərəbl/",
            "meaningVi": "đáng nhớ",
            "keyCollocations": [
              "memorable trip",
              "memorable event",
              "memorable experience"
            ]
          },
          {
            "word": "performance",
            "pos": "noun",
            "ipa": "/pəˈfɔːməns/",
            "meaningVi": "buổi biểu diễn",
            "keyCollocations": [
              "live performance",
              "give a performance",
              "musical performance"
            ]
          },
          {
            "word": "seabed",
            "pos": "noun",
            "ipa": "/ˈsiːbed/",
            "meaningVi": "đáy biển",
            "keyCollocations": [
              "dive to the seabed",
              "marine life on the seabed",
              "explore the seabed"
            ]
          },
          {
            "word": "snorkelling",
            "pos": "noun",
            "ipa": "/ˈsnɔːkəlɪŋ/",
            "meaningVi": "lặn có ống thở",
            "keyCollocations": [
              "go snorkelling",
              "snorkelling gear",
              "try snorkelling"
            ]
          },
          {
            "word": "theme",
            "pos": "noun",
            "ipa": "/θiːm/",
            "meaningVi": "chủ đề, đề tài",
            "keyCollocations": [
              "main theme",
              "theme of the event",
              "theme park"
            ]
          },
          {
            "word": "thrilling",
            "pos": "adj",
            "ipa": "/ˈθrɪlɪŋ/",
            "meaningVi": "hồi hộp, phấn khích",
            "keyCollocations": [
              "thrilling adventure",
              "thrilling match",
              "thrilling experience"
            ]
          },
          {
            "word": "touching",
            "pos": "adj",
            "ipa": "/ˈtʌtʃɪŋ/",
            "meaningVi": "gây xúc động",
            "keyCollocations": [
              "touching story",
              "touching moment",
              "deeply touching"
            ]
          },
          {
            "word": "tribal dance",
            "pos": "noun phr",
            "ipa": "/ˈtraɪbl dɑːns/",
            "meaningVi": "điệu múa của bộ tộc",
            "keyCollocations": [
              "traditional tribal dance",
              "watch tribal dance",
              "perform tribal dance"
            ]
          },
          {
            "word": "unpleasant",
            "pos": "adj",
            "ipa": "/ʌnˈpleznt/",
            "meaningVi": "không thoải mái, khó chịu",
            "keyCollocations": [
              "unpleasant smell",
              "unpleasant weather",
              "unpleasant feeling"
            ]
          }
        ]
      },
      {
        "unit": 6,
        "title": "Vietnamese lifestyles: Then and now",
        "themeVi": "Lối sống người Việt xưa và nay",
        "suggestedKeywords": [
          {
            "word": "democratic",
            "pos": "adj",
            "ipa": "/ˌdeməˈkrætɪk/",
            "meaningVi": "thuộc dân chủ",
            "keyCollocations": [
              "democratic society",
              "democratic process",
              "democratic values"
            ]
          },
          {
            "word": "dependent",
            "pos": "adj",
            "ipa": "/dɪˈpendənt/",
            "meaningVi": "lệ thuộc vào",
            "keyCollocations": [
              "dependent on parents",
              "financially dependent",
              "be dependent"
            ]
          },
          {
            "word": "dye",
            "pos": "verb",
            "ipa": "/daɪ/",
            "meaningVi": "nhuộm",
            "keyCollocations": [
              "dye fabric",
              "dye hair",
              "natural dye"
            ]
          },
          {
            "word": "extended",
            "pos": "adj",
            "ipa": "/ɪkˈstendɪd/",
            "meaningVi": "nhiều thế hệ (trong gia đình)",
            "keyCollocations": [
              "extended family",
              "extended household",
              "live in an extended family"
            ]
          },
          {
            "word": "family-oriented",
            "pos": "adj",
            "ipa": "/ˈfæməli ˈɔrientɪd/",
            "meaningVi": "hướng về gia đình",
            "keyCollocations": [
              "family-oriented person",
              "family-oriented culture",
              "family-oriented activities"
            ]
          },
          {
            "word": "gap",
            "pos": "noun",
            "ipa": "/ɡæp/",
            "meaningVi": "khoảng cách",
            "keyCollocations": [
              "generation gap",
              "bridge the gap",
              "close the gap"
            ]
          },
          {
            "word": "generation",
            "pos": "noun",
            "ipa": "/ˌdʒenəˈreɪʃn/",
            "meaningVi": "thế hệ",
            "keyCollocations": [
              "bridge generations",
              "generation to generation",
              "younger generation"
            ]
          },
          {
            "word": "household",
            "pos": "noun",
            "ipa": "/ˈhaʊshəʊld/",
            "meaningVi": "hộ gia đình",
            "keyCollocations": [
              "household chores",
              "household income",
              "head of household"
            ]
          },
          {
            "word": "lifestyle",
            "pos": "noun",
            "ipa": "/ˈlaɪfstaɪl/",
            "meaningVi": "lối sống",
            "keyCollocations": [
              "healthy lifestyle",
              "modern lifestyle",
              "traditional lifestyle"
            ]
          },
          {
            "word": "memorise",
            "pos": "verb",
            "ipa": "/ˈmeməraɪz/",
            "meaningVi": "ghi nhớ",
            "keyCollocations": [
              "memorise vocabulary",
              "memorise facts",
              "easy to memorise"
            ]
          },
          {
            "word": "monk",
            "pos": "noun",
            "ipa": "/mʌŋk/",
            "meaningVi": "nhà sư",
            "keyCollocations": [
              "Buddhist monk",
              "monk in a pagoda",
              "listen to a monk"
            ]
          },
          {
            "word": "nuclear",
            "pos": "adj",
            "ipa": "/ˈnjuːkliə/",
            "meaningVi": "hai thế hệ (trong gia đình)",
            "keyCollocations": [
              "nuclear family",
              "parents and children in a nuclear family",
              "shift to nuclear families"
            ]
          },
          {
            "word": "opportunity",
            "pos": "noun",
            "ipa": "/ˌɒpəˈtjuːnəti/",
            "meaningVi": "cơ hội",
            "keyCollocations": [
              "learning opportunity",
              "career opportunity",
              "take the opportunity"
            ]
          },
          {
            "word": "popularity",
            "pos": "noun",
            "ipa": "/ˌpɒpjuˈlærəti/",
            "meaningVi": "sự phổ biến",
            "keyCollocations": [
              "gain popularity",
              "rise in popularity",
              "wide popularity"
            ]
          },
          {
            "word": "privacy",
            "pos": "noun",
            "ipa": "/ˈprɪvəsi/",
            "meaningVi": "sự riêng tư",
            "keyCollocations": [
              "respect privacy",
              "need for privacy",
              "protect personal privacy"
            ]
          },
          {
            "word": "promise",
            "pos": "noun/verb",
            "ipa": "/ˈprɒmɪs/",
            "meaningVi": "lời hứa, hứa",
            "keyCollocations": [
              "keep a promise",
              "make a promise",
              "break a promise"
            ]
          },
          {
            "word": "pursue",
            "pos": "verb",
            "ipa": "/pəˈsjuː/",
            "meaningVi": "theo đuổi",
            "keyCollocations": [
              "pursue dreams",
              "pursue a career",
              "pursue higher education"
            ]
          },
          {
            "word": "replace",
            "pos": "verb",
            "ipa": "/rɪˈpleɪs/",
            "meaningVi": "thay thế",
            "keyCollocations": [
              "replace old habits",
              "replace equipment",
              "replace tradition"
            ]
          },
          {
            "word": "take notes",
            "pos": "verb phr",
            "ipa": "/teɪk nəʊts/",
            "meaningVi": "ghi chép",
            "keyCollocations": [
              "take notes in class",
              "take careful notes",
              "take lecture notes"
            ]
          },
          {
            "word": "trend",
            "pos": "noun",
            "ipa": "/trend/",
            "meaningVi": "xu hướng",
            "keyCollocations": [
              "modern trend",
              "latest trend",
              "follow the trend"
            ]
          },
          {
            "word": "western",
            "pos": "adj",
            "ipa": "/ˈwestən/",
            "meaningVi": "thuộc phương Tây",
            "keyCollocations": [
              "western culture",
              "western fashion",
              "western lifestyle"
            ]
          }
        ]
      },
      {
        "unit": 7,
        "title": "Natural wonders of the world",
        "themeVi": "Kỳ quan thiên nhiên thế giới",
        "suggestedKeywords": [
          {
            "word": "access",
            "pos": "noun",
            "ipa": "/ˈækses/",
            "meaningVi": "tiếp cận, đến được",
            "keyCollocations": [
              "access to nature",
              "easy access",
              "gain access"
            ]
          },
          {
            "word": "annual",
            "pos": "adj",
            "ipa": "/ˈænjuəl/",
            "meaningVi": "hằng năm",
            "keyCollocations": [
              "annual event",
              "annual festival",
              "annual report"
            ]
          },
          {
            "word": "biodiversity",
            "pos": "noun",
            "ipa": "/ˌbaɪəʊdaɪˈvɜːsəti/",
            "meaningVi": "sự đa dạng sinh học",
            "keyCollocations": [
              "rich biodiversity",
              "protect biodiversity",
              "threat to biodiversity"
            ]
          },
          {
            "word": "coral",
            "pos": "noun/adj",
            "ipa": "/ˈkɒrəl/",
            "meaningVi": "san hô",
            "keyCollocations": [
              "coral species",
              "coral island",
              "coral formation"
            ]
          },
          {
            "word": "crazy",
            "pos": "adj",
            "ipa": "/ˈkreɪzi/",
            "meaningVi": "thích mê",
            "keyCollocations": [
              "crazy about trekking",
              "crazy about scenery",
              "go crazy"
            ]
          },
          {
            "word": "destination",
            "pos": "noun",
            "ipa": "/ˌdestɪˈneɪʃn/",
            "meaningVi": "điểm đến",
            "keyCollocations": [
              "holiday destination",
              "popular destination",
              "dream destination"
            ]
          },
          {
            "word": "ecosystem",
            "pos": "noun",
            "ipa": "/ˈiːkəʊsɪstəm/",
            "meaningVi": "hệ sinh thái",
            "keyCollocations": [
              "fragile ecosystem",
              "marine ecosystem",
              "forest ecosystem"
            ]
          },
          {
            "word": "feature",
            "pos": "noun",
            "ipa": "/ˈfiːtʃə/",
            "meaningVi": "đặc điểm",
            "keyCollocations": [
              "geographical feature",
              "prominent feature",
              "unique feature"
            ]
          },
          {
            "word": "locate",
            "pos": "verb",
            "ipa": "/ləʊˈkeɪt/",
            "meaningVi": "định vị, đặt ở",
            "keyCollocations": [
              "be located in",
              "locate the site",
              "conveniently located"
            ]
          },
          {
            "word": "location",
            "pos": "noun",
            "ipa": "/ləʊˈkeɪʃn/",
            "meaningVi": "địa điểm, nơi chốn",
            "keyCollocations": [
              "ideal location",
              "remote location",
              "exact location"
            ]
          },
          {
            "word": "majestic",
            "pos": "adj",
            "ipa": "/məˈdʒestɪk/",
            "meaningVi": "uy nghi, tráng lệ",
            "keyCollocations": [
              "majestic waterfall",
              "majestic mountains",
              "majestic scenery"
            ]
          },
          {
            "word": "occur",
            "pos": "verb",
            "ipa": "/əˈkɜː/",
            "meaningVi": "xảy ra",
            "keyCollocations": [
              "naturally occur",
              "likely to occur",
              "occur frequently"
            ]
          },
          {
            "word": "paradise",
            "pos": "noun",
            "ipa": "/ˈpærədaɪs/",
            "meaningVi": "thiên đường, nơi đẹp tuyệt trần",
            "keyCollocations": [
              "tropical paradise",
              "paradise on earth",
              "nature lover paradise"
            ]
          },
          {
            "word": "peak",
            "pos": "noun",
            "ipa": "/piːk/",
            "meaningVi": "đỉnh núi",
            "keyCollocations": [
              "mountain peak",
              "reach the peak",
              "snow-capped peak"
            ]
          },
          {
            "word": "permission",
            "pos": "noun",
            "ipa": "/pəˈmɪʃn/",
            "meaningVi": "sự cho phép",
            "keyCollocations": [
              "ask for permission",
              "grant permission",
              "without permission"
            ]
          },
          {
            "word": "permit",
            "pos": "verb",
            "ipa": "/pəˈmɪt/",
            "meaningVi": "cho phép",
            "keyCollocations": [
              "weather permitting",
              "permit visitors",
              "strictly permitted"
            ]
          },
          {
            "word": "possess",
            "pos": "verb",
            "ipa": "/pəˈzes/",
            "meaningVi": "có, sở hữu",
            "keyCollocations": [
              "possess unique beauty",
              "possess qualities",
              "possess land"
            ]
          },
          {
            "word": "support",
            "pos": "verb",
            "ipa": "/səˈpɔːt/",
            "meaningVi": "ủng hộ, giúp đỡ, nuôi sống",
            "keyCollocations": [
              "support biodiversity",
              "support local people",
              "support conservation"
            ]
          },
          {
            "word": "sustainable",
            "pos": "adj",
            "ipa": "/səˈsteɪnəbl/",
            "meaningVi": "bền vững",
            "keyCollocations": [
              "sustainable tourism",
              "sustainable development",
              "sustainable practices"
            ]
          },
          {
            "word": "travel destination",
            "pos": "noun phr",
            "ipa": "/ˈtrævl ˌdestɪˈneɪʃn/",
            "meaningVi": "điểm đến du lịch",
            "keyCollocations": [
              "favourite travel destination",
              "attractive travel destination",
              "explore travel destinations"
            ]
          },
          {
            "word": "urgent",
            "pos": "adj",
            "ipa": "/ˈɜːdʒənt/",
            "meaningVi": "gấp, cấp bách",
            "keyCollocations": [
              "urgent action",
              "urgent need",
              "urgent measures"
            ]
          }
        ]
      },
      {
        "unit": 8,
        "title": "Tourism",
        "themeVi": "Du lịch",
        "suggestedKeywords": [
          {
            "word": "agency",
            "pos": "noun",
            "ipa": "/ˈeɪdʒənsi/",
            "meaningVi": "hãng, đại lý du lịch",
            "keyCollocations": [
              "travel agency",
              "tour agency",
              "contact an agency"
            ]
          },
          {
            "word": "agent",
            "pos": "noun",
            "ipa": "/ˈeɪdʒənt/",
            "meaningVi": "nhân viên hãng",
            "keyCollocations": [
              "travel agent",
              "insurance agent",
              "ask the agent"
            ]
          },
          {
            "word": "brochure",
            "pos": "noun",
            "ipa": "/ˈbrəʊʃə/",
            "meaningVi": "quyển quảng cáo du lịch",
            "keyCollocations": [
              "travel brochure",
              "colourful brochure",
              "read the brochure"
            ]
          },
          {
            "word": "domestic tourism",
            "pos": "noun phr",
            "ipa": "/dəˈmestɪk tʊərɪzəm/",
            "meaningVi": "du lịch trong nước",
            "keyCollocations": [
              "promote domestic tourism",
              "growth in domestic tourism",
              "domestic tourism market"
            ]
          },
          {
            "word": "estimate",
            "pos": "verb",
            "ipa": "/ˈestɪmeɪt/",
            "meaningVi": "ước tính",
            "keyCollocations": [
              "estimate the cost",
              "estimated budget",
              "roughly estimate"
            ]
          },
          {
            "word": "fixed",
            "pos": "adj",
            "ipa": "/fɪkst/",
            "meaningVi": "cố định",
            "keyCollocations": [
              "fixed schedule",
              "fixed price",
              "fixed itinerary"
            ]
          },
          {
            "word": "food tourism",
            "pos": "noun phr",
            "ipa": "/fuːd ˈtʊərɪzəm/",
            "meaningVi": "du lịch ẩm thực",
            "keyCollocations": [
              "experience food tourism",
              "trend of food tourism",
              "enjoy food tourism"
            ]
          },
          {
            "word": "graveyard",
            "pos": "noun",
            "ipa": "/ˈɡreɪvjɑːd/",
            "meaningVi": "nghĩa địa",
            "keyCollocations": [
              "historic graveyard",
              "ancient graveyard",
              "visit a graveyard"
            ]
          },
          {
            "word": "holidaymaker",
            "pos": "noun",
            "ipa": "/ˈhɒlədeɪmeɪkə/",
            "meaningVi": "người đi nghỉ",
            "keyCollocations": [
              "attract holidaymakers",
              "thousands of holidaymakers",
              "holidaymaker resort"
            ]
          },
          {
            "word": "homestay",
            "pos": "noun",
            "ipa": "/ˈhəʊmsteɪ/",
            "meaningVi": "nhà trọ, ở cùng dân bản địa",
            "keyCollocations": [
              "stay at a homestay",
              "friendly homestay",
              "book a homestay"
            ]
          },
          {
            "word": "hop-on hop-off",
            "pos": "noun phr",
            "ipa": "/hɒp ɒn hɒp ɒf/",
            "meaningVi": "tour xe buýt lên xuống nhiều điểm",
            "keyCollocations": [
              "hop-on hop-off bus",
              "hop-on hop-off tour",
              "take the hop-on hop-off"
            ]
          },
          {
            "word": "hunt",
            "pos": "verb",
            "ipa": "/hʌnt/",
            "meaningVi": "săn tìm",
            "keyCollocations": [
              "hunt for bargains",
              "hunt for souvenirs",
              "hunt for accommodation"
            ]
          },
          {
            "word": "itinerary",
            "pos": "noun",
            "ipa": "/aɪˈtɪnərəri/",
            "meaningVi": "lịch trình",
            "keyCollocations": [
              "planned itinerary",
              "detailed itinerary",
              "follow the itinerary"
            ]
          },
          {
            "word": "loft",
            "pos": "noun",
            "ipa": "/lɒft/",
            "meaningVi": "gác mái",
            "keyCollocations": [
              "loft apartment",
              "converted loft",
              "stay in a loft"
            ]
          },
          {
            "word": "low season",
            "pos": "noun phr",
            "ipa": "/ˈləʊ siːzn/",
            "meaningVi": "mùa du lịch vắng khách",
            "keyCollocations": [
              "travel in the low season",
              "low season discounts",
              "low season rates"
            ]
          },
          {
            "word": "package holiday",
            "pos": "noun phr",
            "ipa": "/ˈpækɪdʒ hɒlədeɪ/",
            "meaningVi": "kỳ nghỉ trọn gói",
            "keyCollocations": [
              "book a package holiday",
              "convenient package holiday",
              "all-inclusive package holiday"
            ]
          },
          {
            "word": "ruinous",
            "pos": "adj",
            "ipa": "/ˈruːɪnəs/",
            "meaningVi": "đổ nát",
            "keyCollocations": [
              "ruinous castle",
              "ruinous temple",
              "ancient ruinous site"
            ]
          },
          {
            "word": "self-guided",
            "pos": "adj",
            "ipa": "/self ˈɡaɪdɪd/",
            "meaningVi": "tự tổ chức, tự khám phá",
            "keyCollocations": [
              "self-guided tour",
              "self-guided walk",
              "self-guided travel"
            ]
          },
          {
            "word": "shopping tourism",
            "pos": "noun phr",
            "ipa": "/ˈʃɒpɪŋ ˈtʊərɪzəm/",
            "meaningVi": "du lịch mua sắm",
            "keyCollocations": [
              "boost shopping tourism",
              "shopping tourism destination",
              "retail shopping tourism"
            ]
          },
          {
            "word": "smooth",
            "pos": "adj",
            "ipa": "/smuːð/",
            "meaningVi": "trôi chảy, êm ả",
            "keyCollocations": [
              "smooth journey",
              "smooth trip",
              "smooth flight"
            ]
          },
          {
            "word": "wander",
            "pos": "verb",
            "ipa": "/ˈwɒndə/",
            "meaningVi": "dạo chơi, lang thang",
            "keyCollocations": [
              "wander through streets",
              "wander around the market",
              "wander in the park"
            ]
          },
          {
            "word": "world-famous",
            "pos": "adj",
            "ipa": "/ˌwɜːld ˈfeɪməs/",
            "meaningVi": "nổi tiếng thế giới",
            "keyCollocations": [
              "world-famous destination",
              "world-famous landmark",
              "world-famous museum"
            ]
          },
          {
            "word": "work out",
            "pos": "verb phr",
            "ipa": "/wɜːk aʊt/",
            "meaningVi": "soạn thảo, lên kế hoạch",
            "keyCollocations": [
              "work out a plan",
              "work out the details",
              "work out costs"
            ]
          }
        ]
      },
      {
        "unit": 9,
        "title": "World Englishes",
        "themeVi": "Các biến thể tiếng Anh trên thế giới",
        "suggestedKeywords": [
          {
            "word": "bilingual",
            "pos": "adj",
            "ipa": "/baɪˈlɪŋɡwəl/",
            "meaningVi": "sử dụng được hai ngôn ngữ",
            "keyCollocations": [
              "bilingual speaker",
              "bilingual education",
              "bilingual student"
            ]
          },
          {
            "word": "borrowed word",
            "pos": "noun phr",
            "ipa": "/ˈbɒrəʊ wɜːd/",
            "meaningVi": "từ mượn",
            "keyCollocations": [
              "borrowed word from French",
              "use borrowed words",
              "common borrowed words"
            ]
          },
          {
            "word": "concentric",
            "pos": "adj",
            "ipa": "/kənˈsentrɪk/",
            "meaningVi": "đồng tâm",
            "keyCollocations": [
              "concentric circles",
              "concentric model",
              "concentric rings"
            ]
          },
          {
            "word": "consist",
            "pos": "verb",
            "ipa": "/kənˈsɪst/",
            "meaningVi": "bao gồm",
            "keyCollocations": [
              "consist of three circles",
              "consist of many varieties",
              "consist mainly of"
            ]
          },
          {
            "word": "copy",
            "pos": "verb",
            "ipa": "/ˈkɒpi/",
            "meaningVi": "chép lại",
            "keyCollocations": [
              "copy words",
              "copy notes",
              "copy sentences"
            ]
          },
          {
            "word": "establish",
            "pos": "verb",
            "ipa": "/ɪˈstæblɪʃ/",
            "meaningVi": "thành lập, thiết lập",
            "keyCollocations": [
              "establish rules",
              "establish standards",
              "establish communication"
            ]
          },
          {
            "word": "exchange student",
            "pos": "noun phr",
            "ipa": "/ɪksˈtʃeɪndʒ stjuːdnt/",
            "meaningVi": "học sinh trao đổi",
            "keyCollocations": [
              "international exchange student",
              "welcome exchange students",
              "host an exchange student"
            ]
          },
          {
            "word": "Expanding Circle",
            "pos": "noun phr",
            "ipa": "/ɪkˈspændɪŋ sɜːkl/",
            "meaningVi": "vòng tròn mở rộng",
            "keyCollocations": [
              "countries in the Expanding Circle",
              "Expanding Circle model",
              "Kachru Expanding Circle"
            ]
          },
          {
            "word": "first language",
            "pos": "noun phr",
            "ipa": "/ˌfɜːst ˈlæŋɡwɪdʒ/",
            "meaningVi": "ngôn ngữ thứ nhất, tiếng mẹ đẻ",
            "keyCollocations": [
              "speak as a first language",
              "acquire first language",
              "native first language"
            ]
          },
          {
            "word": "fluent",
            "pos": "adj",
            "ipa": "/ˈfluːənt/",
            "meaningVi": "trôi chảy, thành thạo",
            "keyCollocations": [
              "fluent in English",
              "fluent speaker",
              "speak fluently"
            ]
          },
          {
            "word": "go over",
            "pos": "verb phr",
            "ipa": "/ɡəʊ ˈəʊvə/",
            "meaningVi": "ôn tập lại",
            "keyCollocations": [
              "go over the lesson",
              "go over grammar",
              "go over notes"
            ]
          },
          {
            "word": "immigrant",
            "pos": "noun",
            "ipa": "/ˈɪmɪɡrənt/",
            "meaningVi": "người nhập cư",
            "keyCollocations": [
              "new immigrant",
              "immigrant community",
              "support immigrants"
            ]
          },
          {
            "word": "Inner Circle",
            "pos": "noun phr",
            "ipa": "/ˌɪnə ˈsɜːkl/",
            "meaningVi": "vòng tròn bên trong",
            "keyCollocations": [
              "Inner Circle nations",
              "native speakers in Inner Circle",
              "Inner Circle varieties"
            ]
          },
          {
            "word": "look up",
            "pos": "verb phr",
            "ipa": "/lʊk ʌp/",
            "meaningVi": "tra (từ điển)",
            "keyCollocations": [
              "look up words",
              "look up in dictionary",
              "look up spelling"
            ]
          },
          {
            "word": "mean",
            "pos": "verb",
            "ipa": "/miːn/",
            "meaningVi": "nghĩa là",
            "keyCollocations": [
              "what does it mean",
              "mean in English",
              "exact meaning"
            ]
          },
          {
            "word": "model",
            "pos": "noun",
            "ipa": "/ˈmɒdl/",
            "meaningVi": "mô hình",
            "keyCollocations": [
              "three-circle model",
              "linguistic model",
              "standard model"
            ]
          },
          {
            "word": "official language",
            "pos": "noun phr",
            "ipa": "/ˌəfɪʃl ˈlæŋɡwɪdʒ/",
            "meaningVi": "ngôn ngữ chính thức",
            "keyCollocations": [
              "English as an official language",
              "designated official language",
              "national official language"
            ]
          },
          {
            "word": "Outer Circle",
            "pos": "noun phr",
            "ipa": "/ˌaʊtə ˈsɜːkl/",
            "meaningVi": "vòng tròn bên ngoài",
            "keyCollocations": [
              "countries of Outer Circle",
              "post-colonial Outer Circle",
              "Outer Circle English"
            ]
          },
          {
            "word": "pick up",
            "pos": "verb phr",
            "ipa": "/pɪk ʌp/",
            "meaningVi": "học (ngôn ngữ tự nhiên)",
            "keyCollocations": [
              "pick up English quickly",
              "pick up accents",
              "pick up vocabulary"
            ]
          },
          {
            "word": "propose",
            "pos": "verb",
            "ipa": "/prəˈpəʊz/",
            "meaningVi": "đề xuất",
            "keyCollocations": [
              "propose a model",
              "propose a solution",
              "propose ideas"
            ]
          },
          {
            "word": "second language",
            "pos": "noun phr",
            "ipa": "/ˌsekənd ˈlæŋɡwɪdʒ/",
            "meaningVi": "ngôn ngữ thứ hai",
            "keyCollocations": [
              "learn as a second language",
              "second language acquisition",
              "second language teaching"
            ]
          },
          {
            "word": "standard",
            "pos": "noun",
            "ipa": "/ˈstændəd/",
            "meaningVi": "chuẩn mực",
            "keyCollocations": [
              "standard English",
              "set standards",
              "international standard"
            ]
          },
          {
            "word": "translate",
            "pos": "verb",
            "ipa": "/trænzˈleɪt/",
            "meaningVi": "dịch",
            "keyCollocations": [
              "translate into Vietnamese",
              "translate sentences",
              "translate texts"
            ]
          },
          {
            "word": "variety",
            "pos": "noun",
            "ipa": "/vəˈraɪəti/",
            "meaningVi": "biến thể",
            "keyCollocations": [
              "varieties of English",
              "wide variety",
              "regional varieties"
            ]
          },
          {
            "word": "vocabulary",
            "pos": "noun",
            "ipa": "/vəˈkæbjələri/",
            "meaningVi": "từ vựng",
            "keyCollocations": [
              "rich vocabulary",
              "expand vocabulary",
              "learn vocabulary"
            ]
          }
        ]
      },
      {
        "unit": 10,
        "title": "Planet Earth",
        "themeVi": "Hành tinh Trái đất",
        "suggestedKeywords": [
          {
            "word": "affect",
            "pos": "verb",
            "ipa": "/əˈfekt/",
            "meaningVi": "gây ảnh hưởng",
            "keyCollocations": [
              "affect the climate",
              "affect ecosystems",
              "badly affect"
            ]
          },
          {
            "word": "appreciate",
            "pos": "verb",
            "ipa": "/əˈpriːʃieɪt/",
            "meaningVi": "đánh giá cao, trân trọng",
            "keyCollocations": [
              "appreciate nature",
              "appreciate the environment",
              "fully appreciate"
            ]
          },
          {
            "word": "climate change",
            "pos": "noun phr",
            "ipa": "/ˈklaɪmət tʃeɪndʒ/",
            "meaningVi": "biến đổi khí hậu",
            "keyCollocations": [
              "combat climate change",
              "effects of climate change",
              "global climate change"
            ]
          },
          {
            "word": "droppings",
            "pos": "noun plural",
            "ipa": "/ˈdrɒpɪŋz/",
            "meaningVi": "phân (động vật)",
            "keyCollocations": [
              "animal droppings",
              "bird droppings",
              "organic droppings"
            ]
          },
          {
            "word": "essential",
            "pos": "adj",
            "ipa": "/ɪˈsenʃl/",
            "meaningVi": "vô cùng quan trọng",
            "keyCollocations": [
              "essential for life",
              "play an essential role",
              "essential resources"
            ]
          },
          {
            "word": "ecological balance",
            "pos": "noun phr",
            "ipa": "/ˌiːkəˈlɒdʒɪkl ˈbæləns/",
            "meaningVi": "cân bằng sinh thái",
            "keyCollocations": [
              "maintain ecological balance",
              "disrupt ecological balance",
              "restore ecological balance"
            ]
          },
          {
            "word": "fascinating",
            "pos": "adj",
            "ipa": "/ˈfæsɪneɪtɪŋ/",
            "meaningVi": "rất thú vị và hấp dẫn",
            "keyCollocations": [
              "fascinating planet",
              "fascinating wildlife",
              "truly fascinating"
            ]
          },
          {
            "word": "fertilizer",
            "pos": "noun",
            "ipa": "/ˈfɜːtəlaɪzə/",
            "meaningVi": "phân bón",
            "keyCollocations": [
              "chemical fertilizer",
              "organic fertilizer",
              "use fertilizer"
            ]
          },
          {
            "word": "food chain",
            "pos": "noun phr",
            "ipa": "/ˈfuːd tʃeɪn/",
            "meaningVi": "chuỗi thức ăn",
            "keyCollocations": [
              "top of the food chain",
              "disrupt the food chain",
              "in the food chain"
            ]
          },
          {
            "word": "grassland",
            "pos": "noun",
            "ipa": "/ˈɡrɑːslænd/",
            "meaningVi": "khu vực đồng cỏ",
            "keyCollocations": [
              "tropical grassland",
              "vast grassland",
              "grassland habitat"
            ]
          },
          {
            "word": "habitat",
            "pos": "noun",
            "ipa": "/ˈhæbɪtæt/",
            "meaningVi": "môi trường sống",
            "keyCollocations": [
              "natural habitat",
              "destroy habitats",
              "protect habitats"
            ]
          },
          {
            "word": "harm",
            "pos": "verb",
            "ipa": "/hɑːm/",
            "meaningVi": "làm hại",
            "keyCollocations": [
              "harm wildlife",
              "harm the environment",
              "cause no harm"
            ]
          },
          {
            "word": "landform",
            "pos": "noun",
            "ipa": "/ˈlændfɔːm/",
            "meaningVi": "dạng địa hình, địa mạo",
            "keyCollocations": [
              "natural landforms",
              "diverse landforms",
              "study landforms"
            ]
          },
          {
            "word": "nature reserve",
            "pos": "noun phr",
            "ipa": "/ˈneɪtʃə rɪzɜːv/",
            "meaningVi": "khu bảo tồn thiên nhiên",
            "keyCollocations": [
              "visit a nature reserve",
              "establish nature reserves",
              "wildlife in nature reserves"
            ]
          },
          {
            "word": "orbit",
            "pos": "verb",
            "ipa": "/ˈɔːbɪt/",
            "meaningVi": "quay quanh quỹ đạo",
            "keyCollocations": [
              "orbit the sun",
              "orbit Earth",
              "satellite in orbit"
            ]
          },
          {
            "word": "outer space",
            "pos": "noun phr",
            "ipa": "/ˌaʊtə ˈspeɪs/",
            "meaningVi": "ngoài vũ trụ",
            "keyCollocations": [
              "explore outer space",
              "travel into outer space",
              "outer space missions"
            ]
          },
          {
            "word": "pesticide",
            "pos": "noun",
            "ipa": "/ˈpestɪsaɪd/",
            "meaningVi": "thuốc trừ sâu",
            "keyCollocations": [
              "spray pesticides",
              "overuse of pesticides",
              "ban toxic pesticides"
            ]
          },
          {
            "word": "pole",
            "pos": "noun",
            "ipa": "/pəʊl/",
            "meaningVi": "cực (bắc / nam)",
            "keyCollocations": [
              "North Pole",
              "South Pole",
              "melting at the poles"
            ]
          },
          {
            "word": "preserve",
            "pos": "verb",
            "ipa": "/prɪˈzɜːv/",
            "meaningVi": "bảo tồn",
            "keyCollocations": [
              "preserve nature",
              "preserve rare species",
              "preserve ecosystems"
            ]
          },
          {
            "word": "threat",
            "pos": "noun",
            "ipa": "/θret/",
            "meaningVi": "mối đe doạ",
            "keyCollocations": [
              "major threat",
              "pose a threat",
              "threat to planet Earth"
            ]
          },
          {
            "word": "vital",
            "pos": "adj",
            "ipa": "/ˈvaɪtl/",
            "meaningVi": "quan trọng mức sống còn",
            "keyCollocations": [
              "vital for survival",
              "vital role",
              "vital nutrients"
            ]
          }
        ]
      },
      {
        "unit": 11,
        "title": "Electronic devices",
        "themeVi": "Thiết bị điện tử",
        "suggestedKeywords": [
          {
            "word": "3D printer",
            "pos": "noun phr",
            "ipa": "/ˌθriː diː ˈprɪntə/",
            "meaningVi": "máy in 3D",
            "keyCollocations": [
              "use a 3D printer",
              "modern 3D printer",
              "print models with a 3D printer"
            ]
          },
          {
            "word": "aluminium",
            "pos": "noun",
            "ipa": "/ˌæljəˈmɪniəm/",
            "meaningVi": "nhôm",
            "keyCollocations": [
              "made of aluminium",
              "lightweight aluminium",
              "aluminium frame"
            ]
          },
          {
            "word": "camcorder",
            "pos": "noun",
            "ipa": "/ˈkæmkɔːdə/",
            "meaningVi": "máy quay phim xách tay",
            "keyCollocations": [
              "record with a camcorder",
              "digital camcorder",
              "portable camcorder"
            ]
          },
          {
            "word": "cardboard",
            "pos": "noun",
            "ipa": "/ˈkɑːdbɔːd/",
            "meaningVi": "bìa cứng, các tông",
            "keyCollocations": [
              "cardboard box",
              "thick cardboard",
              "made from cardboard"
            ]
          },
          {
            "word": "copper",
            "pos": "noun",
            "ipa": "/ˈkɒpə/",
            "meaningVi": "đồng",
            "keyCollocations": [
              "copper wires",
              "pure copper",
              "copper cables"
            ]
          },
          {
            "word": "e-reader",
            "pos": "noun",
            "ipa": "/ˈiː riːdə/",
            "meaningVi": "máy đọc sách điện tử",
            "keyCollocations": [
              "read on an e-reader",
              "convenient e-reader",
              "lightweight e-reader"
            ]
          },
          {
            "word": "leaflet",
            "pos": "noun",
            "ipa": "/ˈliːflət/",
            "meaningVi": "tờ rơi quảng cáo",
            "keyCollocations": [
              "hand out leaflets",
              "advertising leaflet",
              "informative leaflet"
            ]
          },
          {
            "word": "plastic",
            "pos": "noun",
            "ipa": "/ˈplæstɪk/",
            "meaningVi": "chất dẻo, nhựa",
            "keyCollocations": [
              "made of plastic",
              "recycled plastic",
              "plastic casing"
            ]
          },
          {
            "word": "portable",
            "pos": "adj",
            "ipa": "/ˈpɔːtəbl/",
            "meaningVi": "có thể mang theo, xách tay",
            "keyCollocations": [
              "portable device",
              "portable charger",
              "portable speaker"
            ]
          },
          {
            "word": "portable music player",
            "pos": "noun phr",
            "ipa": "/ˈpɔːtəbl ˈmjuːzɪk ˌpleɪə/",
            "meaningVi": "máy nghe nhạc cầm tay",
            "keyCollocations": [
              "listen on a portable music player",
              "modern portable music player",
              "carry a portable music player"
            ]
          },
          {
            "word": "robotic vacuum cleaner",
            "pos": "noun phr",
            "ipa": "/rəʊˈbɒtɪk ˈvækjuːm ˌkliːnə/",
            "meaningVi": "robot hút bụi tự động",
            "keyCollocations": [
              "smart robotic vacuum cleaner",
              "clean with a robotic vacuum cleaner",
              "buy a robotic vacuum cleaner"
            ]
          },
          {
            "word": "rubber",
            "pos": "noun",
            "ipa": "/ˈrʌbə/",
            "meaningVi": "cao su",
            "keyCollocations": [
              "natural rubber",
              "rubber cover",
              "made of rubber"
            ]
          },
          {
            "word": "self-portrait",
            "pos": "noun",
            "ipa": "/ˌself ˈpɔːtreɪt/",
            "meaningVi": "ảnh chân dung tự chụp",
            "keyCollocations": [
              "take a self-portrait",
              "paint a self-portrait",
              "digital self-portrait"
            ]
          },
          {
            "word": "smartwatch",
            "pos": "noun",
            "ipa": "/ˈsmɑːtwɒtʃ/",
            "meaningVi": "đồng hồ thông minh",
            "keyCollocations": [
              "wear a smartwatch",
              "track health with a smartwatch",
              "connect smartwatch"
            ]
          },
          {
            "word": "steel",
            "pos": "noun",
            "ipa": "/stiːl/",
            "meaningVi": "thép",
            "keyCollocations": [
              "stainless steel",
              "strong steel",
              "steel frame"
            ]
          },
          {
            "word": "stylish",
            "pos": "adj",
            "ipa": "/ˈstaɪlɪʃ/",
            "meaningVi": "hợp thời trang, kiểu cách",
            "keyCollocations": [
              "stylish design",
              "stylish look",
              "modern and stylish"
            ]
          },
          {
            "word": "suck",
            "pos": "verb",
            "ipa": "/sʌk/",
            "meaningVi": "hút",
            "keyCollocations": [
              "suck up dust",
              "vacuum sucks dirt",
              "suck moisture"
            ]
          },
          {
            "word": "touchscreen",
            "pos": "noun",
            "ipa": "/ˈtʌtʃskriːn/",
            "meaningVi": "màn hình cảm ứng",
            "keyCollocations": [
              "responsive touchscreen",
              "tap the touchscreen",
              "touchscreen technology"
            ]
          },
          {
            "word": "virtual",
            "pos": "adj",
            "ipa": "/ˈvɜːtʃuəl/",
            "meaningVi": "ảo",
            "keyCollocations": [
              "virtual reality",
              "virtual assistant",
              "virtual classroom"
            ]
          },
          {
            "word": "window shade",
            "pos": "noun phr",
            "ipa": "/ˈwɪndəʊ ʃeɪd/",
            "meaningVi": "mành cửa sổ",
            "keyCollocations": [
              "pull down the window shade",
              "smart window shade",
              "adjust window shades"
            ]
          },
          {
            "word": "wireless",
            "pos": "adj",
            "ipa": "/ˈwaɪələs/",
            "meaningVi": "không dây",
            "keyCollocations": [
              "wireless connection",
              "wireless earphones",
              "wireless charging"
            ]
          }
        ]
      },
      {
        "unit": 12,
        "title": "Career choices",
        "themeVi": "Lựa chọn nghề nghiệp",
        "suggestedKeywords": [
          {
            "word": "agriculture engineering",
            "pos": "noun phr",
            "ipa": "/ˈæɡrɪkʌltʃə ˌendʒɪˈnɪərɪŋ/",
            "meaningVi": "ngành kĩ sư nông nghiệp",
            "keyCollocations": [
              "study agriculture engineering",
              "career in agriculture engineering",
              "modern agriculture engineering"
            ]
          },
          {
            "word": "assembly worker",
            "pos": "noun phr",
            "ipa": "/əˈsembli ˈwɜːkə/",
            "meaningVi": "công nhân dây chuyền",
            "keyCollocations": [
              "job of assembly worker",
              "factory assembly worker",
              "assembly worker skills"
            ]
          },
          {
            "word": "bartender",
            "pos": "noun",
            "ipa": "/ˈbɑːtendə/",
            "meaningVi": "thợ pha chế đồ uống",
            "keyCollocations": [
              "professional bartender",
              "work as a bartender",
              "skills of a bartender"
            ]
          },
          {
            "word": "career",
            "pos": "noun",
            "ipa": "/kəˈrɪə/",
            "meaningVi": "sự nghiệp",
            "keyCollocations": [
              "choose a career",
              "successful career",
              "career path"
            ]
          },
          {
            "word": "cashier",
            "pos": "noun",
            "ipa": "/kæˈʃɪə/",
            "meaningVi": "thu ngân",
            "keyCollocations": [
              "supermarket cashier",
              "work as a cashier",
              "pay at the cashier"
            ]
          },
          {
            "word": "decisive",
            "pos": "adj",
            "ipa": "/dɪˈsaɪsɪv/",
            "meaningVi": "quyết đoán",
            "keyCollocations": [
              "decisive leader",
              "decisive role",
              "be decisive"
            ]
          },
          {
            "word": "demanding",
            "pos": "adj",
            "ipa": "/dɪˈmɑːndɪŋ/",
            "meaningVi": "khắt khe, phức tạp, đòi hỏi cao",
            "keyCollocations": [
              "demanding job",
              "demanding career",
              "physically demanding"
            ]
          },
          {
            "word": "fabric",
            "pos": "noun",
            "ipa": "/ˈfæbrɪk/",
            "meaningVi": "vải vóc",
            "keyCollocations": [
              "cotton fabric",
              "quality fabric",
              "choose fabric"
            ]
          },
          {
            "word": "garment worker",
            "pos": "noun phr",
            "ipa": "/ˈɡɑːmənt ˈwɜːkə/",
            "meaningVi": "công nhân may",
            "keyCollocations": [
              "skilled garment worker",
              "textile garment worker",
              "support garment workers"
            ]
          },
          {
            "word": "hand-eye coordination",
            "pos": "noun phr",
            "ipa": "/hænd aɪ kəʊˌɔːdɪˈneɪʃn/",
            "meaningVi": "sự phối hợp tay và mắt",
            "keyCollocations": [
              "good hand-eye coordination",
              "develop hand-eye coordination",
              "require hand-eye coordination"
            ]
          },
          {
            "word": "hands-on",
            "pos": "adj",
            "ipa": "/ˌhændz ˈɒn/",
            "meaningVi": "thực tiễn, thực hành",
            "keyCollocations": [
              "hands-on experience",
              "hands-on training",
              "hands-on skills"
            ]
          },
          {
            "word": "inquiring",
            "pos": "adj",
            "ipa": "/ɪnˈkwaɪərɪŋ/",
            "meaningVi": "ham học hỏi, tìm tòi",
            "keyCollocations": [
              "inquiring mind",
              "inquiring attitude",
              "curious and inquiring"
            ]
          },
          {
            "word": "knowledgeable",
            "pos": "adj",
            "ipa": "/ˈnɒlɪdʒəbl/",
            "meaningVi": "am hiểu, thông thạo",
            "keyCollocations": [
              "knowledgeable guide",
              "highly knowledgeable",
              "knowledgeable about science"
            ]
          },
          {
            "word": "mechanic",
            "pos": "noun",
            "ipa": "/məˈkænɪk/",
            "meaningVi": "thợ sửa chữa máy móc",
            "keyCollocations": [
              "car mechanic",
              "experienced mechanic",
              "visit the mechanic"
            ]
          },
          {
            "word": "orientation",
            "pos": "noun",
            "ipa": "/ˌɔːriənˈteɪʃn/",
            "meaningVi": "sự định hướng",
            "keyCollocations": [
              "career orientation",
              "orientation day",
              "provide orientation"
            ]
          },
          {
            "word": "repetitive",
            "pos": "adj",
            "ipa": "/rɪˈpetətɪv/",
            "meaningVi": "lặp đi lặp lại",
            "keyCollocations": [
              "repetitive work",
              "repetitive tasks",
              "avoid repetitive jobs"
            ]
          },
          {
            "word": "rewarding",
            "pos": "adj",
            "ipa": "/rɪˈwɔːdɪŋ/",
            "meaningVi": "bổ ích, xứng đáng",
            "keyCollocations": [
              "rewarding career",
              "rewarding experience",
              "feel rewarding"
            ]
          },
          {
            "word": "sew",
            "pos": "verb",
            "ipa": "/səʊ/",
            "meaningVi": "khâu, may vá",
            "keyCollocations": [
              "sew clothes",
              "learn to sew",
              "sew by hand"
            ]
          },
          {
            "word": "software engineer",
            "pos": "noun phr",
            "ipa": "/ˈsɒftweər endʒɪˈnɪə/",
            "meaningVi": "kĩ sư phần mềm",
            "keyCollocations": [
              "talented software engineer",
              "work as a software engineer",
              "software engineer job"
            ]
          },
          {
            "word": "surgeon",
            "pos": "noun",
            "ipa": "/ˈsɜːdʒən/",
            "meaningVi": "bác sĩ phẫu thuật",
            "keyCollocations": [
              "heart surgeon",
              "skilled surgeon",
              "chief surgeon"
            ]
          },
          {
            "word": "vocational",
            "pos": "adj",
            "ipa": "/vəʊˈkeɪʃənl/",
            "meaningVi": "thuộc về nghề nghiệp, hướng nghiệp",
            "keyCollocations": [
              "vocational training",
              "vocational school",
              "vocational guidance"
            ]
          },
          {
            "word": "well-paid",
            "pos": "adj",
            "ipa": "/ˌwel ˈpeɪd/",
            "meaningVi": "được trả lương cao",
            "keyCollocations": [
              "well-paid job",
              "well-paid career",
              "find a well-paid position"
            ]
          }
        ]
      }
    ]
  }
];

export interface IPADetails {
  oxford: {
    uk: string;
    us: string;
    note?: string;
  };
  cambridge: {
    uk: string;
    us: string;
    note?: string;
    audioUk?: string;
    audioUs?: string;
  };
  longman: {
    uk: string;
    us: string;
    syllables?: string;
    note?: string;
  };
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

