/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Bộ từ vựng 3000 từ vựng tiếng Anh thông dụng Oxford theo 60 chủ đề
 * Nguồn: Tài liệu đính kèm Oxford 3000 Vocabulary theo 60 chủ đề thông dụng
 * Chuẩn phiên âm IPA theo Cambridge / Oxford Dictionary
 */

export interface OxfordWordItem {
  word: string;
  pos: string;
  ipa: string;
  meaningVi: string;
  topicId: number;
  topicName: string;
}

export interface OxfordTopic {
  id: number;
  name: string;
  wordCount: number;
  words: OxfordWordItem[];
}

export const OXFORD_3000_TOPICS: OxfordTopic[] = [
  {
    "id": 1,
    "name": "Đồ dùng học tập (School stationery)",
    "wordCount": 58,
    "words": [
      {
        "word": "Watercolour",
        "pos": "n",
        "ipa": "/ˈwɔː.təˌkʌl.ər/",
        "meaningVi": "Màunước",
        "topicId": 1,
        "topicName": "Đồ dùng học tập (School stationery)"
      },
      {
        "word": "Thumbtack",
        "pos": "n",
        "ipa": "/ˈθʌm.tæk/",
        "meaningVi": "Đinhghim",
        "topicId": 1,
        "topicName": "Đồ dùng học tập (School stationery)"
      },
      {
        "word": "Textbook",
        "pos": "n",
        "ipa": "/ˈtekst.bʊk/",
        "meaningVi": "Sáchgiáokhoa",
        "topicId": 1,
        "topicName": "Đồ dùng học tập (School stationery)"
      },
      {
        "word": "Test tube",
        "pos": "n. phr",
        "ipa": "/ˈtestˌtjuːb/",
        "meaningVi": "Ốngnghiệm",
        "topicId": 1,
        "topicName": "Đồ dùng học tập (School stationery)"
      },
      {
        "word": "Tape measure",
        "pos": "n. phr",
        "ipa": "/ˈteɪpˌmeʒ.ər/",
        "meaningVi": "Thướcdây",
        "topicId": 1,
        "topicName": "Đồ dùng học tập (School stationery)"
      },
      {
        "word": "Stencil",
        "pos": "n",
        "ipa": "/ˈsten.səl/",
        "meaningVi": "Giấynến",
        "topicId": 1,
        "topicName": "Đồ dùng học tập (School stationery)"
      },
      {
        "word": "Stapler",
        "pos": "n",
        "ipa": "/ˈsteɪ.plər/",
        "meaningVi": "Đồdậpghim",
        "topicId": 1,
        "topicName": "Đồ dùng học tập (School stationery)"
      },
      {
        "word": "Set square",
        "pos": "n. phr",
        "ipa": "/ˈsetˌskweər/",
        "meaningVi": "Ê-ke",
        "topicId": 1,
        "topicName": "Đồ dùng học tập (School stationery)"
      },
      {
        "word": "Scotch tape",
        "pos": "n. phr",
        "ipa": "/ˌskɒtʃ ˈteɪp/",
        "meaningVi": "Băngdínhtrong",
        "topicId": 1,
        "topicName": "Đồ dùng học tập (School stationery)"
      },
      {
        "word": "Scissors",
        "pos": "n",
        "ipa": "/ˈsɪz.əz/",
        "meaningVi": "Kéo",
        "topicId": 1,
        "topicName": "Đồ dùng học tập (School stationery)"
      },
      {
        "word": "Ruler",
        "pos": "n",
        "ipa": "/ˈruː.lər/",
        "meaningVi": "Thước",
        "topicId": 1,
        "topicName": "Đồ dùng học tập (School stationery)"
      },
      {
        "word": "Ribbon",
        "pos": "n",
        "ipa": "/ˈrɪb.ən/",
        "meaningVi": "Ruy-băng",
        "topicId": 1,
        "topicName": "Đồ dùng học tập (School stationery)"
      },
      {
        "word": "Protractor",
        "pos": "n",
        "ipa": "/prəˈtræk.tər/",
        "meaningVi": "Thướcđogóc",
        "topicId": 1,
        "topicName": "Đồ dùng học tập (School stationery)"
      },
      {
        "word": "Post-it note",
        "pos": "n. phr",
        "ipa": "/ˈpəʊst.ɪtˌnəʊt/",
        "meaningVi": "Giấynhớ",
        "topicId": 1,
        "topicName": "Đồ dùng học tập (School stationery)"
      },
      {
        "word": "Pin",
        "pos": "n",
        "ipa": "/pɪn/",
        "meaningVi": "Đinhghim,kẹp",
        "topicId": 1,
        "topicName": "Đồ dùng học tập (School stationery)"
      },
      {
        "word": "Pencil",
        "pos": "n",
        "ipa": "/ˈpen.səl/",
        "meaningVi": "Bútchì",
        "topicId": 1,
        "topicName": "Đồ dùng học tập (School stationery)"
      },
      {
        "word": "Pencil sharpener",
        "pos": "n. phr",
        "ipa": "/ˈpen.səlˌʃɑː.pən.ər/",
        "meaningVi": "Đồgọtbútchì",
        "topicId": 1,
        "topicName": "Đồ dùng học tập (School stationery)"
      },
      {
        "word": "Pencil case",
        "pos": "n. phr",
        "ipa": "/ˈpen.səlˌkeɪs/",
        "meaningVi": "Hộpbút",
        "topicId": 1,
        "topicName": "Đồ dùng học tập (School stationery)"
      },
      {
        "word": "Pen",
        "pos": "n",
        "ipa": "/pen/",
        "meaningVi": "Bútmực",
        "topicId": 1,
        "topicName": "Đồ dùng học tập (School stationery)"
      },
      {
        "word": "Paper",
        "pos": "n",
        "ipa": "/ˈpeɪ.pər/",
        "meaningVi": "Giấy",
        "topicId": 1,
        "topicName": "Đồ dùng học tập (School stationery)"
      },
      {
        "word": "Paper clip",
        "pos": "n. phr",
        "ipa": "/ˈpeɪ.pəˌklɪp/",
        "meaningVi": "Kẹpgiấy",
        "topicId": 1,
        "topicName": "Đồ dùng học tập (School stationery)"
      },
      {
        "word": "Palette",
        "pos": "n",
        "ipa": "/ˈpæl.ət/",
        "meaningVi": "Bảngmàu",
        "topicId": 1,
        "topicName": "Đồ dùng học tập (School stationery)"
      },
      {
        "word": "Paint",
        "pos": "n",
        "ipa": "/peɪnt/",
        "meaningVi": "Sơn,màu",
        "topicId": 1,
        "topicName": "Đồ dùng học tập (School stationery)"
      },
      {
        "word": "Paintbrush",
        "pos": "n. phr",
        "ipa": "/ˈpeɪntˌbrʌʃ/",
        "meaningVi": "Chổisơn",
        "topicId": 1,
        "topicName": "Đồ dùng học tập (School stationery)"
      },
      {
        "word": "Notebook",
        "pos": "n",
        "ipa": "/ˈnəʊt.bʊk/",
        "meaningVi": "Cuốnsổ,vở",
        "topicId": 1,
        "topicName": "Đồ dùng học tập (School stationery)"
      },
      {
        "word": "Map",
        "pos": "n",
        "ipa": "/mæp/",
        "meaningVi": "Bảnđồ",
        "topicId": 1,
        "topicName": "Đồ dùng học tập (School stationery)"
      },
      {
        "word": "Index card",
        "pos": "n. phr",
        "ipa": "/ˈkɑːdˌɪn.deks/",
        "meaningVi": "Phiếulàmmụclục",
        "topicId": 1,
        "topicName": "Đồ dùng học tập (School stationery)"
      },
      {
        "word": "Highlighter",
        "pos": "n",
        "ipa": "/ˈhaɪˌlaɪ.tər/",
        "meaningVi": "Bútđánhdấumàu",
        "topicId": 1,
        "topicName": "Đồ dùng học tập (School stationery)"
      },
      {
        "word": "Glue",
        "pos": "n",
        "ipa": "/ɡluː/",
        "meaningVi": "Keo",
        "topicId": 1,
        "topicName": "Đồ dùng học tập (School stationery)"
      },
      {
        "word": "Globe",
        "pos": "n",
        "ipa": "/ɡləʊb/",
        "meaningVi": "Quảđịacầu",
        "topicId": 1,
        "topicName": "Đồ dùng học tập (School stationery)"
      },
      {
        "word": "Flashcard",
        "pos": "n. phr",
        "ipa": "/ˈflæʃ ˌkɑːd/",
        "meaningVi": "Thẻghinhớ",
        "topicId": 1,
        "topicName": "Đồ dùng học tập (School stationery)"
      },
      {
        "word": "File holder",
        "pos": "n. phr",
        "ipa": "/faɪlˈhəʊl.dər/",
        "meaningVi": "Tậphồsơ",
        "topicId": 1,
        "topicName": "Đồ dùng học tập (School stationery)"
      },
      {
        "word": "File cabinet",
        "pos": "n. phr",
        "ipa": "/ˈfaɪl ˌkæb.ɪ.nət/",
        "meaningVi": "Tủđựngtàiliệu",
        "topicId": 1,
        "topicName": "Đồ dùng học tập (School stationery)"
      },
      {
        "word": "Felt pen",
        "pos": "n. phr",
        "ipa": "/felt pen/",
        "meaningVi": "Bútdạ",
        "topicId": 1,
        "topicName": "Đồ dùng học tập (School stationery)"
      },
      {
        "word": "Rubber",
        "pos": "n",
        "ipa": "/ˈrʌb.ər/",
        "meaningVi": "Cụctẩy",
        "topicId": 1,
        "topicName": "Đồ dùng học tập (School stationery)"
      },
      {
        "word": "Duster",
        "pos": "n",
        "ipa": "/ˈdʌs.tər/",
        "meaningVi": "Khănlaubảng",
        "topicId": 1,
        "topicName": "Đồ dùng học tập (School stationery)"
      },
      {
        "word": "Dossier",
        "pos": "n",
        "ipa": "/ˈdɒs.i.eɪ/",
        "meaningVi": "Hồsơ",
        "topicId": 1,
        "topicName": "Đồ dùng học tập (School stationery)"
      },
      {
        "word": "Dictionary",
        "pos": "adj",
        "ipa": "/ˈdɪk.ʃən.ər.i/",
        "meaningVi": "Từđiển",
        "topicId": 1,
        "topicName": "Đồ dùng học tập (School stationery)"
      },
      {
        "word": "Desk",
        "pos": "n",
        "ipa": "/desk/",
        "meaningVi": "Bànhọc",
        "topicId": 1,
        "topicName": "Đồ dùng học tập (School stationery)"
      },
      {
        "word": "Crayon",
        "pos": "n",
        "ipa": "/ˈkreɪ.ɒn/",
        "meaningVi": "Bútchìmàu",
        "topicId": 1,
        "topicName": "Đồ dùng học tập (School stationery)"
      },
      {
        "word": "Computer",
        "pos": "n",
        "ipa": "/kəmˈpjuː.tər/",
        "meaningVi": "Máytínhbàn",
        "topicId": 1,
        "topicName": "Đồ dùng học tập (School stationery)"
      },
      {
        "word": "Compass",
        "pos": "n",
        "ipa": "/ˈkʌm.pəs/",
        "meaningVi": "Com-pa",
        "topicId": 1,
        "topicName": "Đồ dùng học tập (School stationery)"
      },
      {
        "word": "Coloured pencil",
        "pos": "n. phr",
        "ipa": "/ˈkʌl.əd ˈpen.səl/",
        "meaningVi": "Bútchìmàu",
        "topicId": 1,
        "topicName": "Đồ dùng học tập (School stationery)"
      },
      {
        "word": "Clock",
        "pos": "n",
        "ipa": "/klɒk/",
        "meaningVi": "Đồnghồtreotường",
        "topicId": 1,
        "topicName": "Đồ dùng học tập (School stationery)"
      },
      {
        "word": "Chalk",
        "pos": "n",
        "ipa": "/tʃɔːk/",
        "meaningVi": "Phấn",
        "topicId": 1,
        "topicName": "Đồ dùng học tập (School stationery)"
      },
      {
        "word": "Chair",
        "pos": "n",
        "ipa": "/tʃeər/",
        "meaningVi": "Ghế",
        "topicId": 1,
        "topicName": "Đồ dùng học tập (School stationery)"
      },
      {
        "word": "Carbon paper",
        "pos": "n. phr",
        "ipa": "/ˈkɑː.bənˌpeɪ.pər/",
        "meaningVi": "Giấythan",
        "topicId": 1,
        "topicName": "Đồ dùng học tập (School stationery)"
      },
      {
        "word": "Calculator",
        "pos": "n",
        "ipa": "/ˈkæl.kjə.leɪ.tər/",
        "meaningVi": "Máytínhcầmtay",
        "topicId": 1,
        "topicName": "Đồ dùng học tập (School stationery)"
      },
      {
        "word": "Bookcase",
        "pos": "n",
        "ipa": "/ˈbʊk.keɪs/",
        "meaningVi": "Giásách",
        "topicId": 1,
        "topicName": "Đồ dùng học tập (School stationery)"
      },
      {
        "word": "Book",
        "pos": "n",
        "ipa": "/bʊk/",
        "meaningVi": "Sách",
        "topicId": 1,
        "topicName": "Đồ dùng học tập (School stationery)"
      },
      {
        "word": "Board",
        "pos": "n",
        "ipa": "/bɔːd/",
        "meaningVi": "Bảng",
        "topicId": 1,
        "topicName": "Đồ dùng học tập (School stationery)"
      },
      {
        "word": "Blackboard",
        "pos": "n",
        "ipa": "/ˈblæk.bɔːd/",
        "meaningVi": "Bảngđen",
        "topicId": 1,
        "topicName": "Đồ dùng học tập (School stationery)"
      },
      {
        "word": "Binder",
        "pos": "n",
        "ipa": "/ˈbaɪn.dər/",
        "meaningVi": "Bìarời(báo,tạp",
        "topicId": 1,
        "topicName": "Đồ dùng học tập (School stationery)"
      },
      {
        "word": "Beaker",
        "pos": "n",
        "ipa": "/ˈbiː.kər/",
        "meaningVi": "Cốcbêse",
        "topicId": 1,
        "topicName": "Đồ dùng học tập (School stationery)"
      },
      {
        "word": "Ballpoint pen",
        "pos": "n",
        "ipa": "/ˌbɔːl.pɔɪnt ˈpen/",
        "meaningVi": "Bútbi",
        "topicId": 1,
        "topicName": "Đồ dùng học tập (School stationery)"
      },
      {
        "word": "Bag",
        "pos": "n",
        "ipa": "/bæɡ/",
        "meaningVi": "Cặpsách",
        "topicId": 1,
        "topicName": "Đồ dùng học tập (School stationery)"
      },
      {
        "word": "Backpack",
        "pos": "n",
        "ipa": "/ˈbæk.pæk/",
        "meaningVi": "Balô",
        "topicId": 1,
        "topicName": "Đồ dùng học tập (School stationery)"
      },
      {
        "word": "Funnel",
        "pos": "n",
        "ipa": "/ˈfʌn.əl/",
        "meaningVi": "Cáiphễu",
        "topicId": 1,
        "topicName": "Đồ dùng học tập (School stationery)"
      }
    ]
  },
  {
    "id": 2,
    "name": "Hành động (Actions)",
    "wordCount": 40,
    "words": [
      {
        "word": "Pack",
        "pos": "v",
        "ipa": "/pæk/",
        "meaningVi": "Bó,gói",
        "topicId": 2,
        "topicName": "Hành động (Actions)"
      },
      {
        "word": "Paint",
        "pos": "v",
        "ipa": "/peint/",
        "meaningVi": "Quétsơn",
        "topicId": 2,
        "topicName": "Hành động (Actions)"
      },
      {
        "word": "Paste",
        "pos": "v",
        "ipa": "/peist/",
        "meaningVi": "Dán",
        "topicId": 2,
        "topicName": "Hành động (Actions)"
      },
      {
        "word": "Pick",
        "pos": "v",
        "ipa": "/pik/",
        "meaningVi": "Hái,nhổ",
        "topicId": 2,
        "topicName": "Hành động (Actions)"
      },
      {
        "word": "Plant",
        "pos": "v",
        "ipa": "/plænt/",
        "meaningVi": "Trồng",
        "topicId": 2,
        "topicName": "Hành động (Actions)"
      },
      {
        "word": "Play",
        "pos": "v",
        "ipa": "/plei/",
        "meaningVi": "Chơi",
        "topicId": 2,
        "topicName": "Hành động (Actions)"
      },
      {
        "word": "Point",
        "pos": "v",
        "ipa": "/pɔint/",
        "meaningVi": "Chỉ",
        "topicId": 2,
        "topicName": "Hành động (Actions)"
      },
      {
        "word": "Pour",
        "pos": "v",
        "ipa": "/pɔ:/",
        "meaningVi": "Rót,đổ",
        "topicId": 2,
        "topicName": "Hành động (Actions)"
      },
      {
        "word": "Pull",
        "pos": "v",
        "ipa": "/pul/",
        "meaningVi": "Lôi, kéo",
        "topicId": 2,
        "topicName": "Hành động (Actions)"
      },
      {
        "word": "Push",
        "pos": "v",
        "ipa": "/puʃ/",
        "meaningVi": "Xô,đẩy",
        "topicId": 2,
        "topicName": "Hành động (Actions)"
      },
      {
        "word": "Rake",
        "pos": "v",
        "ipa": "/reik/",
        "meaningVi": "Cào,cời",
        "topicId": 2,
        "topicName": "Hành động (Actions)"
      },
      {
        "word": "Read",
        "pos": "v",
        "ipa": "/ri:d/",
        "meaningVi": "Đọc",
        "topicId": 2,
        "topicName": "Hành động (Actions)"
      },
      {
        "word": "Ride",
        "pos": "v",
        "ipa": "/raid/",
        "meaningVi": "Đi, cưỡi",
        "topicId": 2,
        "topicName": "Hành động (Actions)"
      },
      {
        "word": "Row",
        "pos": "v",
        "ipa": "/rou/",
        "meaningVi": "Chèothuyền",
        "topicId": 2,
        "topicName": "Hành động (Actions)"
      },
      {
        "word": "Run",
        "pos": "v",
        "ipa": "/rʌn/",
        "meaningVi": "Chạy",
        "topicId": 2,
        "topicName": "Hành động (Actions)"
      },
      {
        "word": "Sail",
        "pos": "v",
        "ipa": "/seil/",
        "meaningVi": "Lái(thuyềnbuồm)",
        "topicId": 2,
        "topicName": "Hành động (Actions)"
      },
      {
        "word": "Scrub",
        "pos": "v",
        "ipa": "/skrʌb/",
        "meaningVi": "Lau,chùi,cọrửa",
        "topicId": 2,
        "topicName": "Hành động (Actions)"
      },
      {
        "word": "See",
        "pos": "v",
        "ipa": "/si:/",
        "meaningVi": "Thấy,xem",
        "topicId": 2,
        "topicName": "Hành động (Actions)"
      },
      {
        "word": "Set",
        "pos": "v",
        "ipa": "/set/",
        "meaningVi": "Để,đặt",
        "topicId": 2,
        "topicName": "Hành động (Actions)"
      },
      {
        "word": "Sew",
        "pos": "v",
        "ipa": "/soʊ/",
        "meaningVi": "May,khâu",
        "topicId": 2,
        "topicName": "Hành động (Actions)"
      },
      {
        "word": "Shout",
        "pos": "v",
        "ipa": "/ʃaʊt/",
        "meaningVi": "Lahét,reohò",
        "topicId": 2,
        "topicName": "Hành động (Actions)"
      },
      {
        "word": "Show",
        "pos": "v",
        "ipa": "/ʃou/",
        "meaningVi": "",
        "topicId": 2,
        "topicName": "Hành động (Actions)"
      },
      {
        "word": "Sing",
        "pos": "v",
        "ipa": "/siɳ/",
        "meaningVi": "Hát,hót",
        "topicId": 2,
        "topicName": "Hành động (Actions)"
      },
      {
        "word": "Sit",
        "pos": "v",
        "ipa": "/sit/",
        "meaningVi": "Ngồi",
        "topicId": 2,
        "topicName": "Hành động (Actions)"
      },
      {
        "word": "Skate",
        "pos": "v",
        "ipa": "/skeit/",
        "meaningVi": "Trượtbăng",
        "topicId": 2,
        "topicName": "Hành động (Actions)"
      },
      {
        "word": "Skip",
        "pos": "v",
        "ipa": "/skip/",
        "meaningVi": "Nhảy",
        "topicId": 2,
        "topicName": "Hành động (Actions)"
      },
      {
        "word": "Sleep",
        "pos": "v",
        "ipa": "/sli:p/",
        "meaningVi": "Ngủ",
        "topicId": 2,
        "topicName": "Hành động (Actions)"
      },
      {
        "word": "Slide",
        "pos": "v",
        "ipa": "/slaid/",
        "meaningVi": "Trượt",
        "topicId": 2,
        "topicName": "Hành động (Actions)"
      },
      {
        "word": "Sneeze",
        "pos": "v",
        "ipa": "/sni:z/",
        "meaningVi": "Hắthơi",
        "topicId": 2,
        "topicName": "Hành động (Actions)"
      },
      {
        "word": "Spin",
        "pos": "v",
        "ipa": "/spɪn/",
        "meaningVi": "Quay",
        "topicId": 2,
        "topicName": "Hành động (Actions)"
      },
      {
        "word": "Stand",
        "pos": "v",
        "ipa": "/stænd/",
        "meaningVi": "Đứng",
        "topicId": 2,
        "topicName": "Hành động (Actions)"
      },
      {
        "word": "Stop",
        "pos": "v",
        "ipa": "/stɔp/",
        "meaningVi": "Ngừng",
        "topicId": 2,
        "topicName": "Hành động (Actions)"
      },
      {
        "word": "Sweep",
        "pos": "v",
        "ipa": "/swi:p/",
        "meaningVi": "Quétqua;lanra",
        "topicId": 2,
        "topicName": "Hành động (Actions)"
      },
      {
        "word": "Swim",
        "pos": "v",
        "ipa": "/swim/",
        "meaningVi": "Bơi",
        "topicId": 2,
        "topicName": "Hành động (Actions)"
      },
      {
        "word": "Swing",
        "pos": "v",
        "ipa": "/swɪŋ/",
        "meaningVi": "Đuđưa",
        "topicId": 2,
        "topicName": "Hành động (Actions)"
      },
      {
        "word": "Take",
        "pos": "v",
        "ipa": "/teik/",
        "meaningVi": "Cầm,nắm,lấy",
        "topicId": 2,
        "topicName": "Hành động (Actions)"
      },
      {
        "word": "Talk",
        "pos": "v",
        "ipa": "/tɔ:k/",
        "meaningVi": "Nóichuyện",
        "topicId": 2,
        "topicName": "Hành động (Actions)"
      },
      {
        "word": "Tell",
        "pos": "v",
        "ipa": "/tel/",
        "meaningVi": "Nói",
        "topicId": 2,
        "topicName": "Hành động (Actions)"
      },
      {
        "word": "Throw",
        "pos": "v",
        "ipa": "/θrəʊ/",
        "meaningVi": "Ném,quăng",
        "topicId": 2,
        "topicName": "Hành động (Actions)"
      },
      {
        "word": "Tie",
        "pos": "v",
        "ipa": "/tai/",
        "meaningVi": "Buộc,cột,trói",
        "topicId": 2,
        "topicName": "Hành động (Actions)"
      }
    ]
  },
  {
    "id": 3,
    "name": "Hoạt động thường ngày (Daily activities)",
    "wordCount": 45,
    "words": [
      {
        "word": "Brushyourteeth",
        "pos": "v. phr",
        "ipa": "/brʌʃ ti:θ/",
        "meaningVi": "Đánhrăng",
        "topicId": 3,
        "topicName": "Hoạt động thường ngày (Daily activities)"
      },
      {
        "word": "Buy",
        "pos": "v",
        "ipa": "/bai/",
        "meaningVi": "Mua",
        "topicId": 3,
        "topicName": "Hoạt động thường ngày (Daily activities)"
      },
      {
        "word": "Combthehair",
        "pos": "v. phr",
        "ipa": "/koumðəheə/",
        "meaningVi": "Chảiđầu",
        "topicId": 3,
        "topicName": "Hoạt động thường ngày (Daily activities)"
      },
      {
        "word": "Cook",
        "pos": "v",
        "ipa": "/kuk/",
        "meaningVi": "Nấuăn",
        "topicId": 3,
        "topicName": "Hoạt động thường ngày (Daily activities)"
      },
      {
        "word": "Doexercise",
        "pos": "v. phr",
        "ipa": "/du:eksəsaiz/",
        "meaningVi": "Tậpthểdục",
        "topicId": 3,
        "topicName": "Hoạt động thường ngày (Daily activities)"
      },
      {
        "word": "Doyourhomework",
        "pos": "v. phr",
        "ipa": "/du‘houmwə:k/",
        "meaningVi": "Làmbàitậpvềnhà",
        "topicId": 3,
        "topicName": "Hoạt động thường ngày (Daily activities)"
      },
      {
        "word": "Eatout",
        "pos": "v. phr",
        "ipa": "/ˈiːt ˌaʊt/",
        "meaningVi": "Điănởngoài",
        "topicId": 3,
        "topicName": "Hoạt động thường ngày (Daily activities)"
      },
      {
        "word": "Feedthedog",
        "pos": "v. phr",
        "ipa": "/ff:dðədɔg/",
        "meaningVi": "Chochóăn",
        "topicId": 3,
        "topicName": "Hoạt động thường ngày (Daily activities)"
      },
      {
        "word": "Finishworking",
        "pos": "v. phr",
        "ipa": "/’ffniʃ ˈwəːkɪŋ/",
        "meaningVi": "Kếtthúccôngviệc",
        "topicId": 3,
        "topicName": "Hoạt động thường ngày (Daily activities)"
      },
      {
        "word": "Gardening",
        "pos": "v",
        "ipa": "/ˈɡɑː.dən.ɪŋ/",
        "meaningVi": "Làmvườn",
        "topicId": 3,
        "topicName": "Hoạt động thường ngày (Daily activities)"
      },
      {
        "word": "Getdressed",
        "pos": "v. phr",
        "ipa": "/getdres/",
        "meaningVi": "Mặcquầnáo",
        "topicId": 3,
        "topicName": "Hoạt động thường ngày (Daily activities)"
      },
      {
        "word": "Getup",
        "pos": "v. phr",
        "ipa": "/getΛp/",
        "meaningVi": "Thứcdậy",
        "topicId": 3,
        "topicName": "Hoạt động thường ngày (Daily activities)"
      },
      {
        "word": "Gohome",
        "pos": "v. phr",
        "ipa": "/gouhoum/",
        "meaningVi": "Vềnhà",
        "topicId": 3,
        "topicName": "Hoạt động thường ngày (Daily activities)"
      },
      {
        "word": "Goshopping",
        "pos": "v. phr",
        "ipa": "/gouˈʃɒp.ɪŋ/",
        "meaningVi": "Đimuasắm",
        "topicId": 3,
        "topicName": "Hoạt động thường ngày (Daily activities)"
      },
      {
        "word": "Gotobed",
        "pos": "v. phr",
        "ipa": "/goutəbed/",
        "meaningVi": "Đingủ",
        "topicId": 3,
        "topicName": "Hoạt động thường ngày (Daily activities)"
      },
      {
        "word": "Gotothemovies",
        "pos": "v. phr",
        "ipa": "/goutəðəˈmuː.vi/",
        "meaningVi": "Đixemphim",
        "topicId": 3,
        "topicName": "Hoạt động thường ngày (Daily activities)"
      },
      {
        "word": "Haveabath",
        "pos": "v. phr",
        "ipa": "/hævə‘bɑ:θ/",
        "meaningVi": "Đitắm",
        "topicId": 3,
        "topicName": "Hoạt động thường ngày (Daily activities)"
      },
      {
        "word": "Haveanap",
        "pos": "v. phr",
        "ipa": "/ˌhæv.ənæp/",
        "meaningVi": "Ngủngắn",
        "topicId": 3,
        "topicName": "Hoạt động thường ngày (Daily activities)"
      },
      {
        "word": "Havebreakfast",
        "pos": "v. phr",
        "ipa": "/ˌhævˈbrek.fəst/",
        "meaningVi": "Ănsáng",
        "topicId": 3,
        "topicName": "Hoạt động thường ngày (Daily activities)"
      },
      {
        "word": "Havedinner",
        "pos": "v. phr",
        "ipa": "/ˌhævˈdɪn.ər/",
        "meaningVi": "Ántối",
        "topicId": 3,
        "topicName": "Hoạt động thường ngày (Daily activities)"
      },
      {
        "word": "Havelunch",
        "pos": "v. phr",
        "ipa": "/ˌhævlʌntʃ/",
        "meaningVi": "Ăntrưa",
        "topicId": 3,
        "topicName": "Hoạt động thường ngày (Daily activities)"
      },
      {
        "word": "Haveashower",
        "pos": "v. phr",
        "ipa": "/hævəˈʃaʊər/",
        "meaningVi": "Tắmvòihoasen",
        "topicId": 3,
        "topicName": "Hoạt động thường ngày (Daily activities)"
      },
      {
        "word": "Listentomusic",
        "pos": "v. phr",
        "ipa": "/ˈlɪs.ən tuːˈmjuː.zɪk/",
        "meaningVi": "Nghenhạc",
        "topicId": 3,
        "topicName": "Hoạt động thường ngày (Daily activities)"
      },
      {
        "word": "Makebreakfast",
        "pos": "v. phr",
        "ipa": "/meik‘brekfəst/",
        "meaningVi": "Làmbữaănsáng",
        "topicId": 3,
        "topicName": "Hoạt động thường ngày (Daily activities)"
      },
      {
        "word": "Makeup",
        "pos": "v. phr",
        "ipa": "/meikΛp/",
        "meaningVi": "Trangđiểm",
        "topicId": 3,
        "topicName": "Hoạt động thường ngày (Daily activities)"
      },
      {
        "word": "Meditation",
        "pos": "n",
        "ipa": "/ˌmedi’teiʃn/",
        "meaningVi": "Thiền",
        "topicId": 3,
        "topicName": "Hoạt động thường ngày (Daily activities)"
      },
      {
        "word": "Playoutside",
        "pos": "v. phr",
        "ipa": "/pleɪˌaʊtˈsaɪd/",
        "meaningVi": "Đirangoàichơi",
        "topicId": 3,
        "topicName": "Hoạt động thường ngày (Daily activities)"
      },
      {
        "word": "Playsports",
        "pos": "v. phr",
        "ipa": "/pleɪspɔːts/",
        "meaningVi": "Chơithểthao",
        "topicId": 3,
        "topicName": "Hoạt động thường ngày (Daily activities)"
      },
      {
        "word": "Readbooks",
        "pos": "v. phr",
        "ipa": "/riːd bʊks/",
        "meaningVi": "Đọcsách",
        "topicId": 3,
        "topicName": "Hoạt động thường ngày (Daily activities)"
      },
      {
        "word": "Readnewspapers",
        "pos": "v. phr",
        "ipa": "/ri:d’nju:zˌpeipəz/",
        "meaningVi": "Đọcbáo",
        "topicId": 3,
        "topicName": "Hoạt động thường ngày (Daily activities)"
      },
      {
        "word": "Relax",
        "pos": "v",
        "ipa": "/rɪˈlæks/",
        "meaningVi": "Thưgiãn",
        "topicId": 3,
        "topicName": "Hoạt động thường ngày (Daily activities)"
      },
      {
        "word": "Setthealarm",
        "pos": "v. phr",
        "ipa": "/setðəə’lɑ:m/",
        "meaningVi": "Đặtchuôngbáo",
        "topicId": 3,
        "topicName": "Hoạt động thường ngày (Daily activities)"
      },
      {
        "word": "Shave",
        "pos": "v",
        "ipa": "/∫eiv/",
        "meaningVi": "Cạorâu",
        "topicId": 3,
        "topicName": "Hoạt động thường ngày (Daily activities)"
      },
      {
        "word": "Sleep",
        "pos": "v",
        "ipa": "/sliːp/",
        "meaningVi": "Ngủ",
        "topicId": 3,
        "topicName": "Hoạt động thường ngày (Daily activities)"
      },
      {
        "word": "Study",
        "pos": "v",
        "ipa": "/ˈstʌd.i/",
        "meaningVi": "Họctập,nghiên",
        "topicId": 3,
        "topicName": "Hoạt động thường ngày (Daily activities)"
      },
      {
        "word": "Surftheinternet",
        "pos": "v. phr",
        "ipa": "/sɜːf ðiː ˈɪn.tə.net/",
        "meaningVi": "Lướtmạng",
        "topicId": 3,
        "topicName": "Hoạt động thường ngày (Daily activities)"
      },
      {
        "word": "v. phr",
        "pos": "noun",
        "ipa": "/teikðə‘rʌbiʃaut/",
        "meaningVi": "Điđổrác",
        "topicId": 3,
        "topicName": "Hoạt động thường ngày (Daily activities)"
      },
      {
        "word": "Drink",
        "pos": "v",
        "ipa": "/driɳk/",
        "meaningVi": "Uống",
        "topicId": 3,
        "topicName": "Hoạt động thường ngày (Daily activities)"
      },
      {
        "word": "Turnoff",
        "pos": "phrasalv",
        "ipa": "/tɜrnɒf/",
        "meaningVi": "Tắt",
        "topicId": 3,
        "topicName": "Hoạt động thường ngày (Daily activities)"
      },
      {
        "word": "Visit your friend",
        "pos": "v. phr",
        "ipa": "/ˈvɪz.ɪt jɔːr frend/",
        "meaningVi": "Thămbạnbè",
        "topicId": 3,
        "topicName": "Hoạt động thường ngày (Daily activities)"
      },
      {
        "word": "Wakeup",
        "pos": "phrasalv",
        "ipa": "/weikΛp/",
        "meaningVi": "Tỉnhgiấc",
        "topicId": 3,
        "topicName": "Hoạt động thường ngày (Daily activities)"
      },
      {
        "word": "Washyourface",
        "pos": "v. phr",
        "ipa": "/wɒʃjɔːrfeɪs/",
        "meaningVi": "Rửamặt",
        "topicId": 3,
        "topicName": "Hoạt động thường ngày (Daily activities)"
      },
      {
        "word": "Washthedishes",
        "pos": "v. phr",
        "ipa": "/wɔʃðədɪʃ/",
        "meaningVi": "Rửachén",
        "topicId": 3,
        "topicName": "Hoạt động thường ngày (Daily activities)"
      },
      {
        "word": "Watchtelevision",
        "pos": "v. phr",
        "ipa": "/wɔtʃ‘teliˌviʤn/",
        "meaningVi": "Xemtivi",
        "topicId": 3,
        "topicName": "Hoạt động thường ngày (Daily activities)"
      },
      {
        "word": "Work",
        "pos": "v",
        "ipa": "/wə:k/",
        "meaningVi": "Làmviệc",
        "topicId": 3,
        "topicName": "Hoạt động thường ngày (Daily activities)"
      }
    ]
  },
  {
    "id": 4,
    "name": "Chủ đề Biển (Sea & Ocean)",
    "wordCount": 32,
    "words": [
      {
        "word": "Sea",
        "pos": "n",
        "ipa": "/siː/",
        "meaningVi": "Biển",
        "topicId": 4,
        "topicName": "Chủ đề Biển (Sea & Ocean)"
      },
      {
        "word": "Ocean",
        "pos": "n",
        "ipa": "/ˈəʊʃən/",
        "meaningVi": "Đạidương",
        "topicId": 4,
        "topicName": "Chủ đề Biển (Sea & Ocean)"
      },
      {
        "word": "Wave",
        "pos": "n",
        "ipa": "/weɪv/",
        "meaningVi": "Sóng",
        "topicId": 4,
        "topicName": "Chủ đề Biển (Sea & Ocean)"
      },
      {
        "word": "Island",
        "pos": "n",
        "ipa": "/ˈaɪlənd/",
        "meaningVi": "Hònđảo",
        "topicId": 4,
        "topicName": "Chủ đề Biển (Sea & Ocean)"
      },
      {
        "word": "Harbor",
        "pos": "n",
        "ipa": "/ˈhɑːr.bɚ/",
        "meaningVi": "Cảngbiển",
        "topicId": 4,
        "topicName": "Chủ đề Biển (Sea & Ocean)"
      },
      {
        "word": "Lighthouse",
        "pos": "n",
        "ipa": "/ˈlaɪthaʊs/",
        "meaningVi": "Hảiđăng",
        "topicId": 4,
        "topicName": "Chủ đề Biển (Sea & Ocean)"
      },
      {
        "word": "Submarine",
        "pos": "n",
        "ipa": "/ˌsʌbmərˈiːn/",
        "meaningVi": "Tàungầm",
        "topicId": 4,
        "topicName": "Chủ đề Biển (Sea & Ocean)"
      },
      {
        "word": "Ship",
        "pos": "n",
        "ipa": "/ʃɪp/",
        "meaningVi": "Tàuthuỷ",
        "topicId": 4,
        "topicName": "Chủ đề Biển (Sea & Ocean)"
      },
      {
        "word": "Boat",
        "pos": "n",
        "ipa": "/bəʊt/",
        "meaningVi": "Thuyền",
        "topicId": 4,
        "topicName": "Chủ đề Biển (Sea & Ocean)"
      },
      {
        "word": "Captain",
        "pos": "n",
        "ipa": "/ˈkæptɪn/",
        "meaningVi": "Thuyềntrưởng",
        "topicId": 4,
        "topicName": "Chủ đề Biển (Sea & Ocean)"
      },
      {
        "word": "Fisherman",
        "pos": "n",
        "ipa": "/ˈfɪʃəmən/",
        "meaningVi": "Ngưdân",
        "topicId": 4,
        "topicName": "Chủ đề Biển (Sea & Ocean)"
      },
      {
        "word": "Lifeguard",
        "pos": "n",
        "ipa": "/ˈlaɪfɡɑːd/",
        "meaningVi": "Ngườicứuhộ",
        "topicId": 4,
        "topicName": "Chủ đề Biển (Sea & Ocean)"
      },
      {
        "word": "Seashore",
        "pos": "n",
        "ipa": "/ˈsiːʃɔːr/",
        "meaningVi": "Bờbiển",
        "topicId": 4,
        "topicName": "Chủ đề Biển (Sea & Ocean)"
      },
      {
        "word": "Beach",
        "pos": "n",
        "ipa": "/biːtʃ/",
        "meaningVi": "Bãibiển",
        "topicId": 4,
        "topicName": "Chủ đề Biển (Sea & Ocean)"
      },
      {
        "word": "Coast",
        "pos": "n",
        "ipa": "/kəʊst/",
        "meaningVi": "Bờ(biển)",
        "topicId": 4,
        "topicName": "Chủ đề Biển (Sea & Ocean)"
      },
      {
        "word": "Seagull",
        "pos": "n",
        "ipa": "/ˈsiː.ɡʌl/",
        "meaningVi": "Mòngbiển",
        "topicId": 4,
        "topicName": "Chủ đề Biển (Sea & Ocean)"
      },
      {
        "word": "Whale",
        "pos": "n",
        "ipa": "/weɪl/",
        "meaningVi": "Cávoi",
        "topicId": 4,
        "topicName": "Chủ đề Biển (Sea & Ocean)"
      },
      {
        "word": "Shark",
        "pos": "n",
        "ipa": "/ʃɑːk/",
        "meaningVi": "Cámập",
        "topicId": 4,
        "topicName": "Chủ đề Biển (Sea & Ocean)"
      },
      {
        "word": "Dolphin",
        "pos": "n",
        "ipa": "/ˈdɒlfɪn/",
        "meaningVi": "Cáheo",
        "topicId": 4,
        "topicName": "Chủ đề Biển (Sea & Ocean)"
      },
      {
        "word": "Octopus",
        "pos": "n",
        "ipa": "/ˈɑːktəpəs/",
        "meaningVi": "Bạchtuộc",
        "topicId": 4,
        "topicName": "Chủ đề Biển (Sea & Ocean)"
      },
      {
        "word": "Fish",
        "pos": "n",
        "ipa": "/fɪʃ/",
        "meaningVi": "Cá",
        "topicId": 4,
        "topicName": "Chủ đề Biển (Sea & Ocean)"
      },
      {
        "word": "Jellyffsh",
        "pos": "n",
        "ipa": "/ˈdʒelifɪʃ/",
        "meaningVi": "Sứa",
        "topicId": 4,
        "topicName": "Chủ đề Biển (Sea & Ocean)"
      },
      {
        "word": "Seahorse",
        "pos": "n. phr",
        "ipa": "/ˈsiˌhɔrs/",
        "meaningVi": "Cángựa",
        "topicId": 4,
        "topicName": "Chủ đề Biển (Sea & Ocean)"
      },
      {
        "word": "Seaweed",
        "pos": "n",
        "ipa": "/ˈsiːwiːd/",
        "meaningVi": "Rongbiển",
        "topicId": 4,
        "topicName": "Chủ đề Biển (Sea & Ocean)"
      },
      {
        "word": "Coral",
        "pos": "n",
        "ipa": "/ˈkɒrəl/",
        "meaningVi": "Sanhô",
        "topicId": 4,
        "topicName": "Chủ đề Biển (Sea & Ocean)"
      },
      {
        "word": "Coralreef",
        "pos": "n. phr",
        "ipa": "/ˌkɒr.əl ˈriːf/",
        "meaningVi": "Rạnsanhô",
        "topicId": 4,
        "topicName": "Chủ đề Biển (Sea & Ocean)"
      },
      {
        "word": "Shellffsh",
        "pos": "n",
        "ipa": "/ˈʃel.fɪʃ/",
        "meaningVi": "Độngvậtcóvỏ",
        "topicId": 4,
        "topicName": "Chủ đề Biển (Sea & Ocean)"
      },
      {
        "word": "Clam",
        "pos": "n",
        "ipa": "/klæm/",
        "meaningVi": "Nghêu",
        "topicId": 4,
        "topicName": "Chủ đề Biển (Sea & Ocean)"
      },
      {
        "word": "Starffsh",
        "pos": "n",
        "ipa": "/ˈstɑːrfɪʃ/",
        "meaningVi": "Saobiển",
        "topicId": 4,
        "topicName": "Chủ đề Biển (Sea & Ocean)"
      },
      {
        "word": "Seal",
        "pos": "n",
        "ipa": "/siːl/",
        "meaningVi": "Hảicẩu",
        "topicId": 4,
        "topicName": "Chủ đề Biển (Sea & Ocean)"
      },
      {
        "word": "Turtle",
        "pos": "n",
        "ipa": "/ˈtɜːtl/",
        "meaningVi": "Rùabiển",
        "topicId": 4,
        "topicName": "Chủ đề Biển (Sea & Ocean)"
      },
      {
        "word": "Crab",
        "pos": "n",
        "ipa": "/kræb/",
        "meaningVi": "Cua",
        "topicId": 4,
        "topicName": "Chủ đề Biển (Sea & Ocean)"
      }
    ]
  },
  {
    "id": 5,
    "name": "Chủ đề Số đếm (Numbers)",
    "wordCount": 16,
    "words": [
      {
        "word": "Decimal",
        "pos": "n",
        "ipa": "/ˈdes.ɪ.məl/",
        "meaningVi": "Sốthậpphân",
        "topicId": 5,
        "topicName": "Chủ đề Số đếm (Numbers)"
      },
      {
        "word": "Fraction",
        "pos": "n",
        "ipa": "/ˈfræk.ʃən/",
        "meaningVi": "Phânsố",
        "topicId": 5,
        "topicName": "Chủ đề Số đếm (Numbers)"
      },
      {
        "word": "Percentage",
        "pos": "n",
        "ipa": "/pəˈsen.tɪdʒ/",
        "meaningVi": "Phầntrăm",
        "topicId": 5,
        "topicName": "Chủ đề Số đếm (Numbers)"
      },
      {
        "word": "Divide",
        "pos": "v",
        "ipa": "/dɪˈvaɪd/",
        "meaningVi": "Chia",
        "topicId": 5,
        "topicName": "Chủ đề Số đếm (Numbers)"
      },
      {
        "word": "Plus",
        "pos": "pre",
        "ipa": "/plʌs/",
        "meaningVi": "Cộng",
        "topicId": 5,
        "topicName": "Chủ đề Số đếm (Numbers)"
      },
      {
        "word": "Minus",
        "pos": "pre",
        "ipa": "/ˈmaɪ.nəs/",
        "meaningVi": "Trừ",
        "topicId": 5,
        "topicName": "Chủ đề Số đếm (Numbers)"
      },
      {
        "word": "Multiply",
        "pos": "v",
        "ipa": "/ˈmʌl.tɪ.plaɪ/",
        "meaningVi": "Nhân",
        "topicId": 5,
        "topicName": "Chủ đề Số đếm (Numbers)"
      },
      {
        "word": "Total",
        "pos": "adj",
        "ipa": "/ˈtəʊ.təl/",
        "meaningVi": "Tổng,tổngsố",
        "topicId": 5,
        "topicName": "Chủ đề Số đếm (Numbers)"
      },
      {
        "word": "Dozen",
        "pos": "n",
        "ipa": "/ˈdʌz.ən/",
        "meaningVi": "Tá(12đơnvị)",
        "topicId": 5,
        "topicName": "Chủ đề Số đếm (Numbers)"
      },
      {
        "word": "Around",
        "pos": "adv",
        "ipa": "/əˈraʊnd/",
        "meaningVi": "Khoảng",
        "topicId": 5,
        "topicName": "Chủ đề Số đếm (Numbers)"
      },
      {
        "word": "Zero",
        "pos": "n",
        "ipa": "/ˈzɪə.rəʊ/",
        "meaningVi": "Sốkhông",
        "topicId": 5,
        "topicName": "Chủ đề Số đếm (Numbers)"
      },
      {
        "word": "Hundred",
        "pos": "n",
        "ipa": "/ˈhʌn.drəd/",
        "meaningVi": "Mộttrăm",
        "topicId": 5,
        "topicName": "Chủ đề Số đếm (Numbers)"
      },
      {
        "word": "Thousand",
        "pos": "n",
        "ipa": "/ˈθaʊ.zənd/",
        "meaningVi": "Mộtnghìn",
        "topicId": 5,
        "topicName": "Chủ đề Số đếm (Numbers)"
      },
      {
        "word": "Million",
        "pos": "n",
        "ipa": "/ˈmɪl.jən/",
        "meaningVi": "Mộttriệu",
        "topicId": 5,
        "topicName": "Chủ đề Số đếm (Numbers)"
      },
      {
        "word": "Billion",
        "pos": "n",
        "ipa": "/ˈbɪl.jən/",
        "meaningVi": "Mộttỷ",
        "topicId": 5,
        "topicName": "Chủ đề Số đếm (Numbers)"
      },
      {
        "word": "Half",
        "pos": "n",
        "ipa": "/hɑːf/",
        "meaningVi": "Mộtnửa",
        "topicId": 5,
        "topicName": "Chủ đề Số đếm (Numbers)"
      }
    ]
  },
  {
    "id": 6,
    "name": "Mua sắm (Shopping)",
    "wordCount": 40,
    "words": [
      {
        "word": "Customer",
        "pos": "n",
        "ipa": "/ˈkʌs.tə.mər/",
        "meaningVi": "Kháchhàng",
        "topicId": 6,
        "topicName": "Mua sắm (Shopping)"
      },
      {
        "word": "Cashier",
        "pos": "n",
        "ipa": "/kæʃˈɪər/",
        "meaningVi": "Nhânviênthungân",
        "topicId": 6,
        "topicName": "Mua sắm (Shopping)"
      },
      {
        "word": "Attendant",
        "pos": "n",
        "ipa": "/əˈten.dənt/",
        "meaningVi": "Ngườiphụcvụ",
        "topicId": 6,
        "topicName": "Mua sắm (Shopping)"
      },
      {
        "word": "Manager",
        "pos": "n",
        "ipa": "/ˈmæn.ɪ.dʒər/",
        "meaningVi": "Giámđốc,quảnlý",
        "topicId": 6,
        "topicName": "Mua sắm (Shopping)"
      },
      {
        "word": "Wallet",
        "pos": "n",
        "ipa": "/ˈwɒl.ɪt/",
        "meaningVi": "Vítiền",
        "topicId": 6,
        "topicName": "Mua sắm (Shopping)"
      },
      {
        "word": "Purse",
        "pos": "n",
        "ipa": "/pɜːs/",
        "meaningVi": "Vítiền(nữ)",
        "topicId": 6,
        "topicName": "Mua sắm (Shopping)"
      },
      {
        "word": "Scale",
        "pos": "n",
        "ipa": "/skeɪl/",
        "meaningVi": "Cáicân",
        "topicId": 6,
        "topicName": "Mua sắm (Shopping)"
      },
      {
        "word": "Counter",
        "pos": "n",
        "ipa": "/ˈkaʊn.tər/",
        "meaningVi": "Quầyhàng",
        "topicId": 6,
        "topicName": "Mua sắm (Shopping)"
      },
      {
        "word": "Barcodereader",
        "pos": "n. phr",
        "ipa": "/ˈbɑːˌkəʊdˈriː.dər/",
        "meaningVi": "Máyđọcmãvạch",
        "topicId": 6,
        "topicName": "Mua sắm (Shopping)"
      },
      {
        "word": "Receipt",
        "pos": "n",
        "ipa": "/rɪˈsiːt/",
        "meaningVi": "Biênlai",
        "topicId": 6,
        "topicName": "Mua sắm (Shopping)"
      },
      {
        "word": "Pay",
        "pos": "v",
        "ipa": "/peɪ/",
        "meaningVi": "Trảtiền",
        "topicId": 6,
        "topicName": "Mua sắm (Shopping)"
      },
      {
        "word": "Expensive",
        "pos": "adj",
        "ipa": "/ɪkˈspen.sɪv/",
        "meaningVi": "Đắt",
        "topicId": 6,
        "topicName": "Mua sắm (Shopping)"
      },
      {
        "word": "Cheap",
        "pos": "n",
        "ipa": "/tʃiːp/",
        "meaningVi": "Rẻ",
        "topicId": 6,
        "topicName": "Mua sắm (Shopping)"
      },
      {
        "word": "Discount",
        "pos": "n",
        "ipa": "/ˈdɪs.kaʊnt/",
        "meaningVi": "Giảmgiá",
        "topicId": 6,
        "topicName": "Mua sắm (Shopping)"
      },
      {
        "word": "Sell",
        "pos": "v",
        "ipa": "/sel/",
        "meaningVi": "Bán",
        "topicId": 6,
        "topicName": "Mua sắm (Shopping)"
      },
      {
        "word": "Price",
        "pos": "n",
        "ipa": "/praɪs/",
        "meaningVi": "Giácả",
        "topicId": 6,
        "topicName": "Mua sắm (Shopping)"
      },
      {
        "word": "Trolley",
        "pos": "n",
        "ipa": "/ˈtrɒl.i/",
        "meaningVi": "Xeđẩy",
        "topicId": 6,
        "topicName": "Mua sắm (Shopping)"
      },
      {
        "word": "Creditcard",
        "pos": "n. phr",
        "ipa": "/ˈkred.ɪt ˌkɑːd/",
        "meaningVi": "Thẻtíndụng",
        "topicId": 6,
        "topicName": "Mua sắm (Shopping)"
      },
      {
        "word": "Cash",
        "pos": "n",
        "ipa": "/kæʃ/",
        "meaningVi": "Tiềnmặt",
        "topicId": 6,
        "topicName": "Mua sắm (Shopping)"
      },
      {
        "word": "Shop",
        "pos": "n",
        "ipa": "/ʃɒp/",
        "meaningVi": "Cửahàng",
        "topicId": 6,
        "topicName": "Mua sắm (Shopping)"
      },
      {
        "word": "Money",
        "pos": "n",
        "ipa": "/ˈmʌn.i/",
        "meaningVi": "Tiền",
        "topicId": 6,
        "topicName": "Mua sắm (Shopping)"
      },
      {
        "word": "Basket",
        "pos": "n",
        "ipa": "/ˈbɑː.skɪt/",
        "meaningVi": "Rổ,giỏ",
        "topicId": 6,
        "topicName": "Mua sắm (Shopping)"
      },
      {
        "word": "Bag",
        "pos": "n",
        "ipa": "/bæɡ/",
        "meaningVi": "Túi",
        "topicId": 6,
        "topicName": "Mua sắm (Shopping)"
      },
      {
        "word": "Buy",
        "pos": "v",
        "ipa": "/baɪ/",
        "meaningVi": "Mua",
        "topicId": 6,
        "topicName": "Mua sắm (Shopping)"
      },
      {
        "word": "Greengrocer",
        "pos": "n",
        "ipa": "/ˈɡriːŋ.ɡrəʊ.sər/",
        "meaningVi": "Cửahàngbánrau",
        "topicId": 6,
        "topicName": "Mua sắm (Shopping)"
      },
      {
        "word": "Housewares",
        "pos": "n",
        "ipa": "/ˈhaʊs.weəz/",
        "meaningVi": "Đồgiadụng",
        "topicId": 6,
        "topicName": "Mua sắm (Shopping)"
      },
      {
        "word": "Toystore",
        "pos": "n. phr",
        "ipa": "/tɔɪ stɔːr/",
        "meaningVi": "Cửahàngđồchơi",
        "topicId": 6,
        "topicName": "Mua sắm (Shopping)"
      },
      {
        "word": "Shoppingmall",
        "pos": "n. phr",
        "ipa": "/ˈʃɒp.ɪŋ ˌmɔːl/",
        "meaningVi": "Trungtâmmuasắm",
        "topicId": 6,
        "topicName": "Mua sắm (Shopping)"
      },
      {
        "word": "Grocerystore",
        "pos": "n. phr",
        "ipa": "/ˈɡrəʊ.sər.i ˌstɔːr/",
        "meaningVi": "Cửahàngtạphóa",
        "topicId": 6,
        "topicName": "Mua sắm (Shopping)"
      },
      {
        "word": "Bargain",
        "pos": "n",
        "ipa": "/ˈbɑː.ɡɪn/",
        "meaningVi": "Mặccả",
        "topicId": 6,
        "topicName": "Mua sắm (Shopping)"
      },
      {
        "word": "Brochure",
        "pos": "n",
        "ipa": "/ˈbrəʊ.ʃər/",
        "meaningVi": "Tậpquảngcáo",
        "topicId": 6,
        "topicName": "Mua sắm (Shopping)"
      },
      {
        "word": "Liquorstore",
        "pos": "n. phr",
        "ipa": "/ˈlɪk.ə ˌstɔːr/",
        "meaningVi": "Quánrượu",
        "topicId": 6,
        "topicName": "Mua sắm (Shopping)"
      },
      {
        "word": "Drugstore",
        "pos": "n",
        "ipa": "/ˈdrʌɡ.stɔːr/",
        "meaningVi": "Tiệmthuốc",
        "topicId": 6,
        "topicName": "Mua sắm (Shopping)"
      },
      {
        "word": "Candystore",
        "pos": "n. phr",
        "ipa": "/ˈkæn.diˌstɔːr/",
        "meaningVi": "Cửahàngkẹo",
        "topicId": 6,
        "topicName": "Mua sắm (Shopping)"
      },
      {
        "word": "Giftshop",
        "pos": "n. phr",
        "ipa": "/ˈɡɪft ˌʃɒp/",
        "meaningVi": "Cửahàngđồlưu",
        "topicId": 6,
        "topicName": "Mua sắm (Shopping)"
      },
      {
        "word": "Petshop",
        "pos": "n. phr",
        "ipa": "/petʃɒp/",
        "meaningVi": "Tiệmthúcưng",
        "topicId": 6,
        "topicName": "Mua sắm (Shopping)"
      },
      {
        "word": "Shoeshop",
        "pos": "n. phr",
        "ipa": "/ʃuːʃɒp/",
        "meaningVi": "Tiệmgiày",
        "topicId": 6,
        "topicName": "Mua sắm (Shopping)"
      },
      {
        "word": "Meatshop",
        "pos": "n. phr",
        "ipa": "/miːtʃɒp/",
        "meaningVi": "Cửahàngthịt",
        "topicId": 6,
        "topicName": "Mua sắm (Shopping)"
      },
      {
        "word": "Florist",
        "pos": "n",
        "ipa": "/ˈflɒr.ɪst/",
        "meaningVi": "Ngườibánhoa",
        "topicId": 6,
        "topicName": "Mua sắm (Shopping)"
      },
      {
        "word": "Butcher",
        "pos": "n",
        "ipa": "/ˈbʊtʃ.ər/",
        "meaningVi": "Ngườibánthịt",
        "topicId": 6,
        "topicName": "Mua sắm (Shopping)"
      }
    ]
  },
  {
    "id": 7,
    "name": "Phòng ngủ (Bedroom)",
    "wordCount": 26,
    "words": [
      {
        "word": "Lamp",
        "pos": "n",
        "ipa": "/læmp/",
        "meaningVi": "Đèn",
        "topicId": 7,
        "topicName": "Phòng ngủ (Bedroom)"
      },
      {
        "word": "Pillowcase",
        "pos": "n",
        "ipa": "/ˈpɪl.əʊ.keɪs/",
        "meaningVi": "Baogối",
        "topicId": 7,
        "topicName": "Phòng ngủ (Bedroom)"
      },
      {
        "word": "Curtain",
        "pos": "n",
        "ipa": "/ˈkɜː.tən/",
        "meaningVi": "Rèm",
        "topicId": 7,
        "topicName": "Phòng ngủ (Bedroom)"
      },
      {
        "word": "Bed",
        "pos": "n",
        "ipa": "/bed/",
        "meaningVi": "Giường",
        "topicId": 7,
        "topicName": "Phòng ngủ (Bedroom)"
      },
      {
        "word": "Mirror",
        "pos": "n",
        "ipa": "/ˈmɪr.ər/",
        "meaningVi": "Gương",
        "topicId": 7,
        "topicName": "Phòng ngủ (Bedroom)"
      },
      {
        "word": "Cushion",
        "pos": "n",
        "ipa": "/ˈkʊʃ.ən/",
        "meaningVi": "Đệm",
        "topicId": 7,
        "topicName": "Phòng ngủ (Bedroom)"
      },
      {
        "word": "Wardrobe",
        "pos": "n",
        "ipa": "/ˈwɔː.drəʊb/",
        "meaningVi": "Tủquầnáo",
        "topicId": 7,
        "topicName": "Phòng ngủ (Bedroom)"
      },
      {
        "word": "Fittedcarpet",
        "pos": "n. phr",
        "ipa": "/ˌfɪt.ɪd ˈkɑː.pɪt/",
        "meaningVi": "Thảmlótsàn",
        "topicId": 7,
        "topicName": "Phòng ngủ (Bedroom)"
      },
      {
        "word": "Dressing table",
        "pos": "n. phr",
        "ipa": "/ˈdres.ɪŋˌteɪ.bəl/",
        "meaningVi": "Bàntrangđiểm",
        "topicId": 7,
        "topicName": "Phòng ngủ (Bedroom)"
      },
      {
        "word": "Wallpaper",
        "pos": "n",
        "ipa": "/ˈwɔːlˌpeɪ.pər/",
        "meaningVi": "Giấydántường",
        "topicId": 7,
        "topicName": "Phòng ngủ (Bedroom)"
      },
      {
        "word": "Pillow",
        "pos": "n",
        "ipa": "/ˈpɪl.əʊ/",
        "meaningVi": "Gối",
        "topicId": 7,
        "topicName": "Phòng ngủ (Bedroom)"
      },
      {
        "word": "Carpet",
        "pos": "n",
        "ipa": "/ˈKɑː.pɪt/",
        "meaningVi": "Tấmthảm",
        "topicId": 7,
        "topicName": "Phòng ngủ (Bedroom)"
      },
      {
        "word": "Blind",
        "pos": "n",
        "ipa": "/blaɪnd/",
        "meaningVi": "Mành,rèmche",
        "topicId": 7,
        "topicName": "Phòng ngủ (Bedroom)"
      },
      {
        "word": "Mattress",
        "pos": "n",
        "ipa": "/ˈmæt.rəs/",
        "meaningVi": "Nệm",
        "topicId": 7,
        "topicName": "Phòng ngủ (Bedroom)"
      },
      {
        "word": "Bedspread",
        "pos": "n",
        "ipa": "/ˈbed.spred/",
        "meaningVi": "Khăntrảigiường",
        "topicId": 7,
        "topicName": "Phòng ngủ (Bedroom)"
      },
      {
        "word": "Blanket",
        "pos": "n",
        "ipa": "/ˈblæŋ.kɪt/",
        "meaningVi": "Tấmchăn,mền",
        "topicId": 7,
        "topicName": "Phòng ngủ (Bedroom)"
      },
      {
        "word": "Jewelry",
        "pos": "n",
        "ipa": "/ˈdʒuːl.ri/",
        "meaningVi": "Trangsức",
        "topicId": 7,
        "topicName": "Phòng ngủ (Bedroom)"
      },
      {
        "word": "Alarm clock",
        "pos": "n. phr",
        "ipa": "/əˈlɑːmˌklɒk/",
        "meaningVi": "Đồnghồbáothức",
        "topicId": 7,
        "topicName": "Phòng ngủ (Bedroom)"
      },
      {
        "word": "Airconditioner",
        "pos": "n. phr",
        "ipa": "/ˈeəkənˌdɪʃ.ən.ər/",
        "meaningVi": "Máyđiềuhòa",
        "topicId": 7,
        "topicName": "Phòng ngủ (Bedroom)"
      },
      {
        "word": "Boxspring",
        "pos": "n. phr",
        "ipa": "/ˈbɒksˌsprɪŋ/",
        "meaningVi": "Khunglòxonâng",
        "topicId": 7,
        "topicName": "Phòng ngủ (Bedroom)"
      },
      {
        "word": "Comforter",
        "pos": "n",
        "ipa": "/ˈkʌm.fə.tər/",
        "meaningVi": "Chănbông",
        "topicId": 7,
        "topicName": "Phòng ngủ (Bedroom)"
      },
      {
        "word": "Hanger",
        "pos": "n",
        "ipa": "/ˈhæŋ.ər/",
        "meaningVi": "Móctreo(quầnáo)",
        "topicId": 7,
        "topicName": "Phòng ngủ (Bedroom)"
      },
      {
        "word": "Closet",
        "pos": "n",
        "ipa": "/ˈklɒz.ɪt/",
        "meaningVi": "Tủđóngtrong",
        "topicId": 7,
        "topicName": "Phòng ngủ (Bedroom)"
      },
      {
        "word": "Comb",
        "pos": "n",
        "ipa": "/kəʊm/",
        "meaningVi": "Lược",
        "topicId": 7,
        "topicName": "Phòng ngủ (Bedroom)"
      },
      {
        "word": "Lightswitch",
        "pos": "n",
        "ipa": "/laɪt swɪtʃ/",
        "meaningVi": "Côngtắcđiện",
        "topicId": 7,
        "topicName": "Phòng ngủ (Bedroom)"
      },
      {
        "word": "Chestofdrawers",
        "pos": "n. phr",
        "ipa": "/ˌtʃest əv ˈdrɔːz/",
        "meaningVi": "Tủkéo",
        "topicId": 7,
        "topicName": "Phòng ngủ (Bedroom)"
      }
    ]
  },
  {
    "id": 8,
    "name": "Tình bạn (Friendship)",
    "wordCount": 14,
    "words": [
      {
        "word": "Classmate",
        "pos": "n",
        "ipa": "/ˈklɑːs.meɪt/",
        "meaningVi": "Bạncùnglớp",
        "topicId": 8,
        "topicName": "Tình bạn (Friendship)"
      },
      {
        "word": "Schoolmate",
        "pos": "n",
        "ipa": "/ˈskuːl.meɪt/",
        "meaningVi": "Bạncùngtrường",
        "topicId": 8,
        "topicName": "Tình bạn (Friendship)"
      },
      {
        "word": "Roommate",
        "pos": "n",
        "ipa": "/ˈruːm.meɪt/",
        "meaningVi": "Bạncùngphòng",
        "topicId": 8,
        "topicName": "Tình bạn (Friendship)"
      },
      {
        "word": "Soulmate",
        "pos": "n",
        "ipa": "/ˈsəʊl.meɪt/",
        "meaningVi": "Tri kỷ",
        "topicId": 8,
        "topicName": "Tình bạn (Friendship)"
      },
      {
        "word": "Colleague",
        "pos": "n",
        "ipa": "/ˈkɒl.iːɡ/",
        "meaningVi": "Đồngnghiệp",
        "topicId": 8,
        "topicName": "Tình bạn (Friendship)"
      },
      {
        "word": "Comradeship",
        "pos": "n",
        "ipa": "/ˈkɒm.reɪd.ʃɪp/",
        "meaningVi": "Tìnhbạn,tìnhđồng",
        "topicId": 8,
        "topicName": "Tình bạn (Friendship)"
      },
      {
        "word": "Partner",
        "pos": "n",
        "ipa": "/ˈpɑːt.nər/",
        "meaningVi": "Cộngsự",
        "topicId": 8,
        "topicName": "Tình bạn (Friendship)"
      },
      {
        "word": "Associate",
        "pos": "n",
        "ipa": "/əˈsəʊ.si.eɪt/",
        "meaningVi": "Bạnđồngliêu,đồng",
        "topicId": 8,
        "topicName": "Tình bạn (Friendship)"
      },
      {
        "word": "Buddy",
        "pos": "n",
        "ipa": "/ˈbʌd.i/",
        "meaningVi": "Bạnthân",
        "topicId": 8,
        "topicName": "Tình bạn (Friendship)"
      },
      {
        "word": "Ally",
        "pos": "n",
        "ipa": "/ˈæl.aɪ/",
        "meaningVi": "Đồngminh",
        "topicId": 8,
        "topicName": "Tình bạn (Friendship)"
      },
      {
        "word": "Companion",
        "pos": "n",
        "ipa": "/kəmˈpæn.jən/",
        "meaningVi": "Bạnđồnghành",
        "topicId": 8,
        "topicName": "Tình bạn (Friendship)"
      },
      {
        "word": "Pal",
        "pos": "n",
        "ipa": "/pæl/",
        "meaningVi": "Bạn(từlóng)",
        "topicId": 8,
        "topicName": "Tình bạn (Friendship)"
      },
      {
        "word": "Friendship",
        "pos": "n",
        "ipa": "/ˈfrend.ʃɪp/",
        "meaningVi": "Tìnhbạn",
        "topicId": 8,
        "topicName": "Tình bạn (Friendship)"
      },
      {
        "word": "Close",
        "pos": "adj",
        "ipa": "/kləʊz/",
        "meaningVi": "Thânthiết",
        "topicId": 8,
        "topicName": "Tình bạn (Friendship)"
      }
    ]
  },
  {
    "id": 9,
    "name": "Nhà bếp (Kitchen & Cooking)",
    "wordCount": 35,
    "words": [
      {
        "word": "Dishwasher",
        "pos": "n",
        "ipa": "/ˈdɪʃˌwɒʃ.ər/",
        "meaningVi": "Máyrửachén",
        "topicId": 9,
        "topicName": "Nhà bếp (Kitchen & Cooking)"
      },
      {
        "word": "Dishdrainer",
        "pos": "n. phr",
        "ipa": "/dɪʃ ˈdreɪ.nər/",
        "meaningVi": "Kệđểchénbát",
        "topicId": 9,
        "topicName": "Nhà bếp (Kitchen & Cooking)"
      },
      {
        "word": "Steamer",
        "pos": "n",
        "ipa": "/ˈstiː.mər/",
        "meaningVi": "Nồihấp",
        "topicId": 9,
        "topicName": "Nhà bếp (Kitchen & Cooking)"
      },
      {
        "word": "Colander",
        "pos": "n",
        "ipa": "/ˈkɒl.ən.dər/",
        "meaningVi": "Cáichao",
        "topicId": 9,
        "topicName": "Nhà bếp (Kitchen & Cooking)"
      },
      {
        "word": "Lid",
        "pos": "n",
        "ipa": "/lɪd/",
        "meaningVi": "Nắp,vung",
        "topicId": 9,
        "topicName": "Nhà bếp (Kitchen & Cooking)"
      },
      {
        "word": "Blender",
        "pos": "n",
        "ipa": "/ˈblen.dər/",
        "meaningVi": "Máyxaysinhtố",
        "topicId": 9,
        "topicName": "Nhà bếp (Kitchen & Cooking)"
      },
      {
        "word": "Pot",
        "pos": "n",
        "ipa": "/pɒt/",
        "meaningVi": "Nồi",
        "topicId": 9,
        "topicName": "Nhà bếp (Kitchen & Cooking)"
      },
      {
        "word": "Toaster",
        "pos": "n",
        "ipa": "/ˈtəʊ.stər/",
        "meaningVi": "Lònướngbánh",
        "topicId": 9,
        "topicName": "Nhà bếp (Kitchen & Cooking)"
      },
      {
        "word": "Dishtowel",
        "pos": "n",
        "ipa": "/ˈdɪʃ.taʊəl/",
        "meaningVi": "Khănlauchén",
        "topicId": 9,
        "topicName": "Nhà bếp (Kitchen & Cooking)"
      },
      {
        "word": "Refrigerator",
        "pos": "n",
        "ipa": "/rɪˈfrɪdʒ.ər.eɪ.tər/",
        "meaningVi": "Tủlạnh",
        "topicId": 9,
        "topicName": "Nhà bếp (Kitchen & Cooking)"
      },
      {
        "word": "Freezer",
        "pos": "n",
        "ipa": "/ˈfriː.zər/",
        "meaningVi": "Tủđông",
        "topicId": 9,
        "topicName": "Nhà bếp (Kitchen & Cooking)"
      },
      {
        "word": "Cabinet",
        "pos": "n",
        "ipa": "/ˈkæb.ɪ.nət/",
        "meaningVi": "Tủ(cónhiềungăn)",
        "topicId": 9,
        "topicName": "Nhà bếp (Kitchen & Cooking)"
      },
      {
        "word": "Microwave",
        "pos": "n",
        "ipa": "/ˈmaɪ.krə.weɪv/",
        "meaningVi": "Lòvisóng",
        "topicId": 9,
        "topicName": "Nhà bếp (Kitchen & Cooking)"
      },
      {
        "word": "Bowl",
        "pos": "n",
        "ipa": "/bəʊl/",
        "meaningVi": "Bát,chén",
        "topicId": 9,
        "topicName": "Nhà bếp (Kitchen & Cooking)"
      },
      {
        "word": "Cutting board",
        "pos": "n. phr",
        "ipa": "/ˈkʌt.ɪŋ ˌbɔːd/",
        "meaningVi": "Thớt",
        "topicId": 9,
        "topicName": "Nhà bếp (Kitchen & Cooking)"
      },
      {
        "word": "Stove",
        "pos": "n",
        "ipa": "/stəʊv/",
        "meaningVi": "Bếplò",
        "topicId": 9,
        "topicName": "Nhà bếp (Kitchen & Cooking)"
      },
      {
        "word": "Coffee maker",
        "pos": "n. phr",
        "ipa": "/ˈkɒf.i ˌmeɪ.kər/",
        "meaningVi": "Máyphacàphê",
        "topicId": 9,
        "topicName": "Nhà bếp (Kitchen & Cooking)"
      },
      {
        "word": "Oven",
        "pos": "adv",
        "ipa": "/ˈʌv.ən/",
        "meaningVi": "Lò,lònướng",
        "topicId": 9,
        "topicName": "Nhà bếp (Kitchen & Cooking)"
      },
      {
        "word": "Ovencleaner",
        "pos": "n. phr",
        "ipa": "/ˈʌv.ənˈkliː.nər/",
        "meaningVi": "Nướctẩyrửalò",
        "topicId": 9,
        "topicName": "Nhà bếp (Kitchen & Cooking)"
      },
      {
        "word": "Jar",
        "pos": "n",
        "ipa": "/dʒɑːr/",
        "meaningVi": "Lọ",
        "topicId": 9,
        "topicName": "Nhà bếp (Kitchen & Cooking)"
      },
      {
        "word": "Sink",
        "pos": "n",
        "ipa": "/sɪŋk/",
        "meaningVi": "Bồnrửabát",
        "topicId": 9,
        "topicName": "Nhà bếp (Kitchen & Cooking)"
      },
      {
        "word": "Dishrack",
        "pos": "n. phr",
        "ipa": "/ˈdɪʃ ˌræk/",
        "meaningVi": "Khayđểráochén",
        "topicId": 9,
        "topicName": "Nhà bếp (Kitchen & Cooking)"
      },
      {
        "word": "Sponge",
        "pos": "n",
        "ipa": "/spʌndʒ/",
        "meaningVi": "Bọtbiển",
        "topicId": 9,
        "topicName": "Nhà bếp (Kitchen & Cooking)"
      },
      {
        "word": "Chopstick",
        "pos": "n",
        "ipa": "/ˈtʃɒp.stɪk/",
        "meaningVi": "Đũa",
        "topicId": 9,
        "topicName": "Nhà bếp (Kitchen & Cooking)"
      },
      {
        "word": "Pan",
        "pos": "n",
        "ipa": "/pæn/",
        "meaningVi": "Chảo",
        "topicId": 9,
        "topicName": "Nhà bếp (Kitchen & Cooking)"
      },
      {
        "word": "Cooker",
        "pos": "n",
        "ipa": "/ˈkʊk.ər/",
        "meaningVi": "Bếp,nồinấu",
        "topicId": 9,
        "topicName": "Nhà bếp (Kitchen & Cooking)"
      },
      {
        "word": "Mug",
        "pos": "n",
        "ipa": "/mʌɡ/",
        "meaningVi": "Cốclớn",
        "topicId": 9,
        "topicName": "Nhà bếp (Kitchen & Cooking)"
      },
      {
        "word": "Kettle",
        "pos": "n",
        "ipa": "/ˈket.əl/",
        "meaningVi": "Ấmđunnước",
        "topicId": 9,
        "topicName": "Nhà bếp (Kitchen & Cooking)"
      },
      {
        "word": "Glass",
        "pos": "n",
        "ipa": "/ɡlɑːs/",
        "meaningVi": "Ly",
        "topicId": 9,
        "topicName": "Nhà bếp (Kitchen & Cooking)"
      },
      {
        "word": "Teapot",
        "pos": "n",
        "ipa": "/ˈtiː.pɒt/",
        "meaningVi": "Ấmphatrà",
        "topicId": 9,
        "topicName": "Nhà bếp (Kitchen & Cooking)"
      },
      {
        "word": "Grill",
        "pos": "n",
        "ipa": "/ɡrɪl/",
        "meaningVi": "Vỉnướng",
        "topicId": 9,
        "topicName": "Nhà bếp (Kitchen & Cooking)"
      },
      {
        "word": "Tray",
        "pos": "n",
        "ipa": "/treɪ/",
        "meaningVi": "Cáikhay,cáimâm",
        "topicId": 9,
        "topicName": "Nhà bếp (Kitchen & Cooking)"
      },
      {
        "word": "Whisk",
        "pos": "n",
        "ipa": "/wɪsk/",
        "meaningVi": "Máyđánhtrứng",
        "topicId": 9,
        "topicName": "Nhà bếp (Kitchen & Cooking)"
      },
      {
        "word": "Knife",
        "pos": "n",
        "ipa": "/naɪf/",
        "meaningVi": "Dao",
        "topicId": 9,
        "topicName": "Nhà bếp (Kitchen & Cooking)"
      },
      {
        "word": "Spoon",
        "pos": "n",
        "ipa": "/spuːn/",
        "meaningVi": "Muỗng,thìa",
        "topicId": 9,
        "topicName": "Nhà bếp (Kitchen & Cooking)"
      }
    ]
  },
  {
    "id": 10,
    "name": "Đồ trang sức (Jewellery)",
    "wordCount": 19,
    "words": [
      {
        "word": "Earring",
        "pos": "n",
        "ipa": "/ˈɪə.rɪŋ/",
        "meaningVi": "Bôngtai",
        "topicId": 10,
        "topicName": "Đồ trang sức (Jewellery)"
      },
      {
        "word": "Necklace",
        "pos": "n",
        "ipa": "/ˈnek.ləs/",
        "meaningVi": "Dâychuyền",
        "topicId": 10,
        "topicName": "Đồ trang sức (Jewellery)"
      },
      {
        "word": "Bracelet",
        "pos": "n",
        "ipa": "/ˈbreɪ.slət/",
        "meaningVi": "Vòngtay",
        "topicId": 10,
        "topicName": "Đồ trang sức (Jewellery)"
      },
      {
        "word": "Brooch",
        "pos": "n",
        "ipa": "/brəʊtʃ/",
        "meaningVi": "Trâmcài",
        "topicId": 10,
        "topicName": "Đồ trang sức (Jewellery)"
      },
      {
        "word": "Hairclip",
        "pos": "n. phr",
        "ipa": "/ˈHeəˌklɪp/",
        "meaningVi": "Kẹptóc",
        "topicId": 10,
        "topicName": "Đồ trang sức (Jewellery)"
      },
      {
        "word": "Wedding ring",
        "pos": "n. phr",
        "ipa": "/ˈwed.ɪŋˌrɪŋ/",
        "meaningVi": "Nhẫncưới",
        "topicId": 10,
        "topicName": "Đồ trang sức (Jewellery)"
      },
      {
        "word": "Jeweler",
        "pos": "n",
        "ipa": "/ˈdʒuː.ə.lɚ/",
        "meaningVi": "Thợkimhoàn",
        "topicId": 10,
        "topicName": "Đồ trang sức (Jewellery)"
      },
      {
        "word": "Jewelrystore",
        "pos": "n. phr",
        "ipa": "/ˈdʒuː.əl.ri stɔː r/",
        "meaningVi": "Cửahàngtrangsức",
        "topicId": 10,
        "topicName": "Đồ trang sức (Jewellery)"
      },
      {
        "word": "Anklet",
        "pos": "n",
        "ipa": "/ˈæŋ.klət/",
        "meaningVi": "Vòngchân",
        "topicId": 10,
        "topicName": "Đồ trang sức (Jewellery)"
      },
      {
        "word": "Noble",
        "pos": "adj",
        "ipa": "/ˈnəʊ.bəl/",
        "meaningVi": "Quý",
        "topicId": 10,
        "topicName": "Đồ trang sức (Jewellery)"
      },
      {
        "word": "Luxurious",
        "pos": "adj",
        "ipa": "/lʌɡˈʒʊə.ri.əs/",
        "meaningVi": "Sangtrọng,xahoa",
        "topicId": 10,
        "topicName": "Đồ trang sức (Jewellery)"
      },
      {
        "word": "Modern",
        "pos": "adj",
        "ipa": "/ˈmɒd.ən/",
        "meaningVi": "Hiệnđại",
        "topicId": 10,
        "topicName": "Đồ trang sức (Jewellery)"
      },
      {
        "word": "Suitable",
        "pos": "adj",
        "ipa": "/ˈsuː.tə.bəl/",
        "meaningVi": "Phùhợp,thíchhợp",
        "topicId": 10,
        "topicName": "Đồ trang sức (Jewellery)"
      },
      {
        "word": "Twinkle",
        "pos": "v",
        "ipa": "/ˈtwɪŋ.kəl/",
        "meaningVi": "Lấplánh",
        "topicId": 10,
        "topicName": "Đồ trang sức (Jewellery)"
      },
      {
        "word": "Bead",
        "pos": "n",
        "ipa": "/biːd/",
        "meaningVi": "Hạt(củachuỗihạt)",
        "topicId": 10,
        "topicName": "Đồ trang sức (Jewellery)"
      },
      {
        "word": "Hairtie",
        "pos": "n. phr",
        "ipa": "/ˈheəˌtaɪ/",
        "meaningVi": "Dâybuộctóc",
        "topicId": 10,
        "topicName": "Đồ trang sức (Jewellery)"
      },
      {
        "word": "Pocketwatch",
        "pos": "n. phr",
        "ipa": "/ˈpɒk.ɪt wɒtʃ/",
        "meaningVi": "Đồnghồbỏtúi",
        "topicId": 10,
        "topicName": "Đồ trang sức (Jewellery)"
      },
      {
        "word": "Tiepin",
        "pos": "n",
        "ipa": "/ˈtaɪ.pɪn/",
        "meaningVi": "Ghimcàvạt",
        "topicId": 10,
        "topicName": "Đồ trang sức (Jewellery)"
      },
      {
        "word": "Preciousstone",
        "pos": "n. phr",
        "ipa": "/ˌpreʃ.əs ˈstəʊn/",
        "meaningVi": "Đáquý",
        "topicId": 10,
        "topicName": "Đồ trang sức (Jewellery)"
      }
    ]
  },
  {
    "id": 11,
    "name": "Môi trường (Environment)",
    "wordCount": 19,
    "words": [
      {
        "word": "Land",
        "pos": "n",
        "ipa": "/lænd/",
        "meaningVi": "Đất,đấtđai",
        "topicId": 11,
        "topicName": "Môi trường (Environment)"
      },
      {
        "word": "Pollute",
        "pos": "v",
        "ipa": "/pəˈluːt/",
        "meaningVi": "Làmônhiễm",
        "topicId": 11,
        "topicName": "Môi trường (Environment)"
      },
      {
        "word": "Decompose",
        "pos": "v",
        "ipa": "/ˌdiː.kəmˈpəʊz/",
        "meaningVi": "Phânhủy",
        "topicId": 11,
        "topicName": "Môi trường (Environment)"
      },
      {
        "word": "Balance",
        "pos": "n",
        "ipa": "/ˈbæl.əns/",
        "meaningVi": "Sựcânbằng",
        "topicId": 11,
        "topicName": "Môi trường (Environment)"
      },
      {
        "word": "Climate change",
        "pos": "n. phr",
        "ipa": "/ˈklaɪ.mətˌtʃeɪndʒ/",
        "meaningVi": "Biếnđổikhíhậu",
        "topicId": 11,
        "topicName": "Môi trường (Environment)"
      },
      {
        "word": "Global warming",
        "pos": "n. phr",
        "ipa": "/ˌɡləʊ.bəl ˈwɔː.mɪŋ/",
        "meaningVi": "Nónglêntoàncầu",
        "topicId": 11,
        "topicName": "Môi trường (Environment)"
      },
      {
        "word": "Oil slick",
        "pos": "n. phr",
        "ipa": "/ˈɔɪl ˌslɪk/",
        "meaningVi": "Dầuloang",
        "topicId": 11,
        "topicName": "Môi trường (Environment)"
      },
      {
        "word": "Ozone layer",
        "pos": "n. phr",
        "ipa": "/ˈəʊ.zəʊnˌleɪ.ər/",
        "meaningVi": "Tầngozon",
        "topicId": 11,
        "topicName": "Môi trường (Environment)"
      },
      {
        "word": "Ecology",
        "pos": "n",
        "ipa": "/iˈkɒl.ə.dʒi/",
        "meaningVi": "Sinhtháihọc",
        "topicId": 11,
        "topicName": "Môi trường (Environment)"
      },
      {
        "word": "Water",
        "pos": "n",
        "ipa": "/ˈwɔː.tər/",
        "meaningVi": "Nước",
        "topicId": 11,
        "topicName": "Môi trường (Environment)"
      },
      {
        "word": "Air",
        "pos": "n",
        "ipa": "/eər/",
        "meaningVi": "Khôngkhí",
        "topicId": 11,
        "topicName": "Môi trường (Environment)"
      },
      {
        "word": "Forest",
        "pos": "n",
        "ipa": "/ˈfɒr.ɪst/",
        "meaningVi": "Rừng",
        "topicId": 11,
        "topicName": "Môi trường (Environment)"
      },
      {
        "word": "Flora",
        "pos": "n",
        "ipa": "/ˈflɔː.rə/",
        "meaningVi": "Hệthựcvật",
        "topicId": 11,
        "topicName": "Môi trường (Environment)"
      },
      {
        "word": "Creature",
        "pos": "n",
        "ipa": "/ˈkriː.tʃər/",
        "meaningVi": "Sinhvật",
        "topicId": 11,
        "topicName": "Môi trường (Environment)"
      },
      {
        "word": "Insect",
        "pos": "n",
        "ipa": "/ˈɪn.sekt/",
        "meaningVi": "Côntrùng",
        "topicId": 11,
        "topicName": "Môi trường (Environment)"
      },
      {
        "word": "Reproduction",
        "pos": "n",
        "ipa": "/ˌriː.prəˈdʌk.ʃən/",
        "meaningVi": "Sựsinhsản",
        "topicId": 11,
        "topicName": "Môi trường (Environment)"
      },
      {
        "word": "Wildlife",
        "pos": "n",
        "ipa": "/ˈwaɪld.laɪf/",
        "meaningVi": "Độngvậthoangdã",
        "topicId": 11,
        "topicName": "Môi trường (Environment)"
      },
      {
        "word": "Sewage",
        "pos": "n",
        "ipa": "/ˈsuː.ɪdʒ/",
        "meaningVi": "Nướcthải",
        "topicId": 11,
        "topicName": "Môi trường (Environment)"
      },
      {
        "word": "Fauna",
        "pos": "n",
        "ipa": "/ˈfɔː.nə/",
        "meaningVi": "Hệđộngvật",
        "topicId": 11,
        "topicName": "Môi trường (Environment)"
      }
    ]
  },
  {
    "id": 12,
    "name": "Phòng khách (Living room)",
    "wordCount": 31,
    "words": [
      {
        "word": "Drapes",
        "pos": "n",
        "ipa": "/dreɪps/",
        "meaningVi": "Màncửa",
        "topicId": 12,
        "topicName": "Phòng khách (Living room)"
      },
      {
        "word": "Cushion",
        "pos": "n",
        "ipa": "/ˈkʊʃ.ən/",
        "meaningVi": "Đệmngồi",
        "topicId": 12,
        "topicName": "Phòng khách (Living room)"
      },
      {
        "word": "Sofa",
        "pos": "n",
        "ipa": "/ˈsəʊ.fə/",
        "meaningVi": "Ghếsô-pha",
        "topicId": 12,
        "topicName": "Phòng khách (Living room)"
      },
      {
        "word": "Rug",
        "pos": "n",
        "ipa": "/rʌɡ/",
        "meaningVi": "Tấmthảm",
        "topicId": 12,
        "topicName": "Phòng khách (Living room)"
      },
      {
        "word": "Banister",
        "pos": "n",
        "ipa": "/ˈbæn.ɪ.stər/",
        "meaningVi": "Lancan",
        "topicId": 12,
        "topicName": "Phòng khách (Living room)"
      },
      {
        "word": "Bookcase",
        "pos": "n",
        "ipa": "/ˈbʊk.keɪs/",
        "meaningVi": "Tủsách",
        "topicId": 12,
        "topicName": "Phòng khách (Living room)"
      },
      {
        "word": "Ceiling",
        "pos": "n",
        "ipa": "/ˈsiː.lɪŋ/",
        "meaningVi": "Trầnnhà",
        "topicId": 12,
        "topicName": "Phòng khách (Living room)"
      },
      {
        "word": "Clock",
        "pos": "n",
        "ipa": "/klɒk/",
        "meaningVi": "Đồnghồtreotường",
        "topicId": 12,
        "topicName": "Phòng khách (Living room)"
      },
      {
        "word": "Desk",
        "pos": "n",
        "ipa": "/desk/",
        "meaningVi": "Bànlàmviệc",
        "topicId": 12,
        "topicName": "Phòng khách (Living room)"
      },
      {
        "word": "Frame",
        "pos": "n",
        "ipa": "/freɪm/",
        "meaningVi": "Khung(ảnh,cửa)",
        "topicId": 12,
        "topicName": "Phòng khách (Living room)"
      },
      {
        "word": "Lampshade",
        "pos": "n",
        "ipa": "/ˈlæmp.ʃeɪd/",
        "meaningVi": "Chụpđèn",
        "topicId": 12,
        "topicName": "Phòng khách (Living room)"
      },
      {
        "word": "Mantelpiece",
        "pos": "n",
        "ipa": "/ˈmæn.təl.piːs/",
        "meaningVi": "Bệlòsưởi",
        "topicId": 12,
        "topicName": "Phòng khách (Living room)"
      },
      {
        "word": "Painting",
        "pos": "n",
        "ipa": "/ˈpeɪn.tɪŋ/",
        "meaningVi": "Bứctranh",
        "topicId": 12,
        "topicName": "Phòng khách (Living room)"
      },
      {
        "word": "Speaker",
        "pos": "n",
        "ipa": "/ˈspiː.kər/",
        "meaningVi": "Loa",
        "topicId": 12,
        "topicName": "Phòng khách (Living room)"
      },
      {
        "word": "Step",
        "pos": "n",
        "ipa": "/step/",
        "meaningVi": "Bậcthang",
        "topicId": 12,
        "topicName": "Phòng khách (Living room)"
      },
      {
        "word": "Stereosystem",
        "pos": "n. phr",
        "ipa": "/ˈster.i.əʊ ˈsɪs.təm/",
        "meaningVi": "Dànmáyhát(có",
        "topicId": 12,
        "topicName": "Phòng khách (Living room)"
      },
      {
        "word": "Stereo",
        "pos": "n",
        "ipa": "/ˈster.i.əʊ/",
        "meaningVi": "Máyxtê-rê-ô",
        "topicId": 12,
        "topicName": "Phòng khách (Living room)"
      },
      {
        "word": "Television",
        "pos": "n",
        "ipa": "/ˈtel.ɪ.vɪʒ.ən/",
        "meaningVi": "Ti vi",
        "topicId": 12,
        "topicName": "Phòng khách (Living room)"
      },
      {
        "word": "Vase",
        "pos": "n",
        "ipa": "/vɑːz/",
        "meaningVi": "Cáibình,lọ",
        "topicId": 12,
        "topicName": "Phòng khách (Living room)"
      },
      {
        "word": "Wallunit",
        "pos": "n. phr",
        "ipa": "/wɔːlˈjuː.nɪt/",
        "meaningVi": "Tủtường",
        "topicId": 12,
        "topicName": "Phòng khách (Living room)"
      },
      {
        "word": "Lamp",
        "pos": "n",
        "ipa": "/læmp/",
        "meaningVi": "Đèn",
        "topicId": 12,
        "topicName": "Phòng khách (Living room)"
      },
      {
        "word": "Calendar",
        "pos": "n",
        "ipa": "/ˈkæl.ən.dər/",
        "meaningVi": "Lịch",
        "topicId": 12,
        "topicName": "Phòng khách (Living room)"
      },
      {
        "word": "Fan",
        "pos": "n",
        "ipa": "/fæn/",
        "meaningVi": "Cáiquạt",
        "topicId": 12,
        "topicName": "Phòng khách (Living room)"
      },
      {
        "word": "Chair",
        "pos": "n",
        "ipa": "/tʃeər/",
        "meaningVi": "Cáighế",
        "topicId": 12,
        "topicName": "Phòng khách (Living room)"
      },
      {
        "word": "Stool",
        "pos": "n",
        "ipa": "/stuːl/",
        "meaningVi": "Ghếđẩu",
        "topicId": 12,
        "topicName": "Phòng khách (Living room)"
      },
      {
        "word": "Ashtray",
        "pos": "n",
        "ipa": "/ˈæʃ.treɪ/",
        "meaningVi": "Đồgạttànthuốc",
        "topicId": 12,
        "topicName": "Phòng khách (Living room)"
      },
      {
        "word": "Bookshelf",
        "pos": "n",
        "ipa": "/ˈbʊk.ʃelf/",
        "meaningVi": "Kệsách",
        "topicId": 12,
        "topicName": "Phòng khách (Living room)"
      },
      {
        "word": "Fuse",
        "pos": "n",
        "ipa": "/fjuːz/",
        "meaningVi": "Cầuchì",
        "topicId": 12,
        "topicName": "Phòng khách (Living room)"
      },
      {
        "word": "Switch",
        "pos": "n",
        "ipa": "/swɪtʃ/",
        "meaningVi": "Côngtắc",
        "topicId": 12,
        "topicName": "Phòng khách (Living room)"
      },
      {
        "word": "Couch",
        "pos": "n",
        "ipa": "/kaʊtʃ/",
        "meaningVi": "Trườngkỷ",
        "topicId": 12,
        "topicName": "Phòng khách (Living room)"
      },
      {
        "word": "Curtain",
        "pos": "n",
        "ipa": "/ˈkɜː.tən/",
        "meaningVi": "Rèmcửa",
        "topicId": 12,
        "topicName": "Phòng khách (Living room)"
      }
    ]
  },
  {
    "id": 13,
    "name": "Bệnh viện & Y tế (Hospital & Healthcare)",
    "wordCount": 28,
    "words": [
      {
        "word": "Radiologist",
        "pos": "n",
        "ipa": "/ˌreɪ.diˈɒl.ə.dʒɪst/",
        "meaningVi": "Bácsĩchụp",
        "topicId": 13,
        "topicName": "Bệnh viện & Y tế (Hospital & Healthcare)"
      },
      {
        "word": "Emergencyroom",
        "pos": "n. phr",
        "ipa": "/ɪˈmɜː.dʒən.siˌruːm/",
        "meaningVi": "Phòngcấpcứu",
        "topicId": 13,
        "topicName": "Bệnh viện & Y tế (Hospital & Healthcare)"
      },
      {
        "word": "Obstetrician",
        "pos": "n",
        "ipa": "/ˌɒb.stəˈtrɪʃ.ən/",
        "meaningVi": "Bácsĩsảnkhoa",
        "topicId": 13,
        "topicName": "Bệnh viện & Y tế (Hospital & Healthcare)"
      },
      {
        "word": "Operatingroom",
        "pos": "n. phr",
        "ipa": "/ˈɒp.ər.eɪ.tɪŋ ˌruːm/",
        "meaningVi": "Phòngphẫuthuật",
        "topicId": 13,
        "topicName": "Bệnh viện & Y tế (Hospital & Healthcare)"
      },
      {
        "word": "Needle",
        "pos": "n",
        "ipa": "/ˈniː.dəl/",
        "meaningVi": "Kimtiêm",
        "topicId": 13,
        "topicName": "Bệnh viện & Y tế (Hospital & Healthcare)"
      },
      {
        "word": "Laboratory",
        "pos": "n",
        "ipa": "/ləˈbɒr.ə.tər.i/",
        "meaningVi": "Phòngthínghiệm",
        "topicId": 13,
        "topicName": "Bệnh viện & Y tế (Hospital & Healthcare)"
      },
      {
        "word": "Pharmacy",
        "pos": "n",
        "ipa": "/ˈfɑː.mə.si/",
        "meaningVi": "Tiệmthuốc",
        "topicId": 13,
        "topicName": "Bệnh viện & Y tế (Hospital & Healthcare)"
      },
      {
        "word": "Hospitalbed",
        "pos": "n. phr",
        "ipa": "/ˈhɒs.pɪ.təl bed/",
        "meaningVi": "Giườngbệnh",
        "topicId": 13,
        "topicName": "Bệnh viện & Y tế (Hospital & Healthcare)"
      },
      {
        "word": "Callbutton",
        "pos": "n. phr",
        "ipa": "/kɔːl ˈbʌt.ən/",
        "meaningVi": "Chuônggọi(ytá)",
        "topicId": 13,
        "topicName": "Bệnh viện & Y tế (Hospital & Healthcare)"
      },
      {
        "word": "Doctor",
        "pos": "n",
        "ipa": "/ˈdɒk.tər/",
        "meaningVi": "Bácsĩ",
        "topicId": 13,
        "topicName": "Bệnh viện & Y tế (Hospital & Healthcare)"
      },
      {
        "word": "Nurse",
        "pos": "n",
        "ipa": "/nɜːs/",
        "meaningVi": "Ytá",
        "topicId": 13,
        "topicName": "Bệnh viện & Y tế (Hospital & Healthcare)"
      },
      {
        "word": "Gurney",
        "pos": "n",
        "ipa": "/ˈɡɜː.ni/",
        "meaningVi": "Xeđẩytay",
        "topicId": 13,
        "topicName": "Bệnh viện & Y tế (Hospital & Healthcare)"
      },
      {
        "word": "Waitingroom",
        "pos": "n. phr",
        "ipa": "/ˈweɪ.tɪŋˌruːm/",
        "meaningVi": "Phòngchờ",
        "topicId": 13,
        "topicName": "Bệnh viện & Y tế (Hospital & Healthcare)"
      },
      {
        "word": "Surgeon",
        "pos": "n",
        "ipa": "/ˈsɜː.dʒən/",
        "meaningVi": "Bácsĩphẫuthuật",
        "topicId": 13,
        "topicName": "Bệnh viện & Y tế (Hospital & Healthcare)"
      },
      {
        "word": "Midwife",
        "pos": "n",
        "ipa": "/ˈmɪd.waɪf/",
        "meaningVi": "Bàđỡ",
        "topicId": 13,
        "topicName": "Bệnh viện & Y tế (Hospital & Healthcare)"
      },
      {
        "word": "Injection",
        "pos": "n",
        "ipa": "/ɪnˈdʒek.ʃən/",
        "meaningVi": "Việctiêmthuốc",
        "topicId": 13,
        "topicName": "Bệnh viện & Y tế (Hospital & Healthcare)"
      },
      {
        "word": "Calcium",
        "pos": "n",
        "ipa": "/ˈkæl.si.əm/",
        "meaningVi": "Canxi",
        "topicId": 13,
        "topicName": "Bệnh viện & Y tế (Hospital & Healthcare)"
      },
      {
        "word": "Hospital",
        "pos": "n",
        "ipa": "/ˈhɒs.pɪ.təl/",
        "meaningVi": "Bệnhviện",
        "topicId": 13,
        "topicName": "Bệnh viện & Y tế (Hospital & Healthcare)"
      },
      {
        "word": "Crutch",
        "pos": "n",
        "ipa": "/krʌtʃ/",
        "meaningVi": "Cáinạng",
        "topicId": 13,
        "topicName": "Bệnh viện & Y tế (Hospital & Healthcare)"
      },
      {
        "word": "Paramedic",
        "pos": "n",
        "ipa": "/ˌpær.əˈmed.ɪk/",
        "meaningVi": "Nhânviênytế",
        "topicId": 13,
        "topicName": "Bệnh viện & Y tế (Hospital & Healthcare)"
      },
      {
        "word": "Stretcher",
        "pos": "n",
        "ipa": "/ˈstretʃ.ər/",
        "meaningVi": "Cángcứuthương",
        "topicId": 13,
        "topicName": "Bệnh viện & Y tế (Hospital & Healthcare)"
      },
      {
        "word": "Rush",
        "pos": "n",
        "ipa": "/rʌʃ/",
        "meaningVi": "Đưađi,chuyểnđi",
        "topicId": 13,
        "topicName": "Bệnh viện & Y tế (Hospital & Healthcare)"
      },
      {
        "word": "Treat",
        "pos": "v",
        "ipa": "/triːt/",
        "meaningVi": "Điềutrị,chữatrị",
        "topicId": 13,
        "topicName": "Bệnh viện & Y tế (Hospital & Healthcare)"
      },
      {
        "word": "Condition",
        "pos": "n",
        "ipa": "/kənˈdɪʃ.ən/",
        "meaningVi": "Tìnhtrạng",
        "topicId": 13,
        "topicName": "Bệnh viện & Y tế (Hospital & Healthcare)"
      },
      {
        "word": "Recovery",
        "pos": "n",
        "ipa": "/rɪˈkʌv.ər.i/",
        "meaningVi": "Sựbìnhphục",
        "topicId": 13,
        "topicName": "Bệnh viện & Y tế (Hospital & Healthcare)"
      },
      {
        "word": "Suffer",
        "pos": "v",
        "ipa": "/ˈsʌf.ər/",
        "meaningVi": "Chịuđựng",
        "topicId": 13,
        "topicName": "Bệnh viện & Y tế (Hospital & Healthcare)"
      },
      {
        "word": "Deteriorate",
        "pos": "v",
        "ipa": "/dɪˈtɪə.ri.ə.reɪt/",
        "meaningVi": "Xấuđi,tệhơn",
        "topicId": 13,
        "topicName": "Bệnh viện & Y tế (Hospital & Healthcare)"
      },
      {
        "word": "Coma",
        "pos": "n",
        "ipa": "/ˈkəʊ.mə/",
        "meaningVi": "Sựhônmê",
        "topicId": 13,
        "topicName": "Bệnh viện & Y tế (Hospital & Healthcare)"
      }
    ]
  },
  {
    "id": 14,
    "name": "Máy tính & Công nghệ (Computers & IT)",
    "wordCount": 37,
    "words": [
      {
        "word": "Monitor",
        "pos": "n",
        "ipa": "/ˈmɒn.ɪ.tər/",
        "meaningVi": "Mànhình",
        "topicId": 14,
        "topicName": "Máy tính & Công nghệ (Computers & IT)"
      },
      {
        "word": "Mousepad",
        "pos": "n. phr",
        "ipa": "/ˈmaʊsˌpæd/",
        "meaningVi": "Tấmlótchuột",
        "topicId": 14,
        "topicName": "Máy tính & Công nghệ (Computers & IT)"
      },
      {
        "word": "Printer",
        "pos": "n",
        "ipa": "/ˈprɪn.tər/",
        "meaningVi": "Máyin",
        "topicId": 14,
        "topicName": "Máy tính & Công nghệ (Computers & IT)"
      },
      {
        "word": "Scanner",
        "pos": "n",
        "ipa": "/ˈskæn.ər/",
        "meaningVi": "Máyquét",
        "topicId": 14,
        "topicName": "Máy tính & Công nghệ (Computers & IT)"
      },
      {
        "word": "Open",
        "pos": "v",
        "ipa": "/ˈəʊ.pən/",
        "meaningVi": "Khởiđộng,mở",
        "topicId": 14,
        "topicName": "Máy tính & Công nghệ (Computers & IT)"
      },
      {
        "word": "Close",
        "pos": "v",
        "ipa": "/kləʊz/",
        "meaningVi": "Đóng,tắt",
        "topicId": 14,
        "topicName": "Máy tính & Công nghệ (Computers & IT)"
      },
      {
        "word": "Delete",
        "pos": "v",
        "ipa": "/dɪˈliːt/",
        "meaningVi": "Xóa,loạibỏ",
        "topicId": 14,
        "topicName": "Máy tính & Công nghệ (Computers & IT)"
      },
      {
        "word": "Insert",
        "pos": "v",
        "ipa": "/ɪnˈsɜːt/",
        "meaningVi": "Chovào,chèn",
        "topicId": 14,
        "topicName": "Máy tính & Công nghệ (Computers & IT)"
      },
      {
        "word": "Merge",
        "pos": "v",
        "ipa": "/mɜːdʒ/",
        "meaningVi": "Sátnhập",
        "topicId": 14,
        "topicName": "Máy tính & Công nghệ (Computers & IT)"
      },
      {
        "word": "Helpline",
        "pos": "n",
        "ipa": "/ˈhelp.laɪn/",
        "meaningVi": "Đườngdâytrợgiúp",
        "topicId": 14,
        "topicName": "Máy tính & Công nghệ (Computers & IT)"
      },
      {
        "word": "Harddisk",
        "pos": "n. phr",
        "ipa": "/ˈhɑːdˌdɪsk/",
        "meaningVi": "Ổcứng",
        "topicId": 14,
        "topicName": "Máy tính & Công nghệ (Computers & IT)"
      },
      {
        "word": "Software",
        "pos": "n",
        "ipa": "/ˈsɒft.weər/",
        "meaningVi": "Phầnmềm",
        "topicId": 14,
        "topicName": "Máy tính & Công nghệ (Computers & IT)"
      },
      {
        "word": "CD-ROM",
        "pos": "n",
        "ipa": "/ˌsiː.diːˈrɒm/",
        "meaningVi": "ĐĩaCDdữliệu",
        "topicId": 14,
        "topicName": "Máy tính & Công nghệ (Computers & IT)"
      },
      {
        "word": "Toolbar",
        "pos": "n",
        "ipa": "/ˈtuːl.bɑːr/",
        "meaningVi": "Thanhcôngcụ",
        "topicId": 14,
        "topicName": "Máy tính & Công nghệ (Computers & IT)"
      },
      {
        "word": "Database",
        "pos": "n",
        "ipa": "/ˈdeɪ.tə.beɪs/",
        "meaningVi": "Cơsởdữliệu",
        "topicId": 14,
        "topicName": "Máy tính & Công nghệ (Computers & IT)"
      },
      {
        "word": "Hacker",
        "pos": "n",
        "ipa": "/ˈhæk.ər/",
        "meaningVi": "Tintặc",
        "topicId": 14,
        "topicName": "Máy tính & Công nghệ (Computers & IT)"
      },
      {
        "word": "Save",
        "pos": "v",
        "ipa": "/seɪvæz/",
        "meaningVi": "Lưu",
        "topicId": 14,
        "topicName": "Máy tính & Công nghệ (Computers & IT)"
      },
      {
        "word": "Select",
        "pos": "v",
        "ipa": "/sɪˈlekt/",
        "meaningVi": "Chọn",
        "topicId": 14,
        "topicName": "Máy tính & Công nghệ (Computers & IT)"
      },
      {
        "word": "Copy",
        "pos": "v",
        "ipa": "/ˈkɒp.i/",
        "meaningVi": "Saochép",
        "topicId": 14,
        "topicName": "Máy tính & Công nghệ (Computers & IT)"
      },
      {
        "word": "Computer",
        "pos": "n",
        "ipa": "/kəmˈpjuː.tər/",
        "meaningVi": "Máyvitính",
        "topicId": 14,
        "topicName": "Máy tính & Công nghệ (Computers & IT)"
      },
      {
        "word": "Laptop",
        "pos": "n",
        "ipa": "/ˈlæp.tɒp/",
        "meaningVi": "Máytínhxáchtay",
        "topicId": 14,
        "topicName": "Máy tính & Công nghệ (Computers & IT)"
      },
      {
        "word": "Speaker",
        "pos": "n",
        "ipa": "/ˈspiː.kər/",
        "meaningVi": "Loa",
        "topicId": 14,
        "topicName": "Máy tính & Công nghệ (Computers & IT)"
      },
      {
        "word": "File",
        "pos": "n",
        "ipa": "/faɪl/",
        "meaningVi": "Tệp,tậptin",
        "topicId": 14,
        "topicName": "Máy tính & Công nghệ (Computers & IT)"
      },
      {
        "word": "Diskdrive",
        "pos": "n. phr",
        "ipa": "/ˈdɪskˌdraɪv/",
        "meaningVi": "Ổđĩa",
        "topicId": 14,
        "topicName": "Máy tính & Công nghệ (Computers & IT)"
      },
      {
        "word": "Battery",
        "pos": "n",
        "ipa": "/ˈbæt.ər.i/",
        "meaningVi": "Pin",
        "topicId": 14,
        "topicName": "Máy tính & Công nghệ (Computers & IT)"
      },
      {
        "word": "Click",
        "pos": "n",
        "ipa": "/klɪk/",
        "meaningVi": "Nhấpchuột",
        "topicId": 14,
        "topicName": "Máy tính & Công nghệ (Computers & IT)"
      },
      {
        "word": "Type",
        "pos": "n",
        "ipa": "/taɪp/",
        "meaningVi": "Đánhchữ,gõchữ",
        "topicId": 14,
        "topicName": "Máy tính & Công nghệ (Computers & IT)"
      },
      {
        "word": "Mouse",
        "pos": "n",
        "ipa": "/maʊs/",
        "meaningVi": "Conchuột",
        "topicId": 14,
        "topicName": "Máy tính & Công nghệ (Computers & IT)"
      },
      {
        "word": "Keyboard",
        "pos": "n",
        "ipa": "/ˈkiː.bɔːd/",
        "meaningVi": "Bànphím",
        "topicId": 14,
        "topicName": "Máy tính & Công nghệ (Computers & IT)"
      },
      {
        "word": "Mousemat",
        "pos": "n. phr",
        "ipa": "/ˈmaʊsˌmæt/",
        "meaningVi": "Miếnglótchuột",
        "topicId": 14,
        "topicName": "Máy tính & Công nghệ (Computers & IT)"
      },
      {
        "word": "Key",
        "pos": "n",
        "ipa": "/kiː/",
        "meaningVi": "Phím",
        "topicId": 14,
        "topicName": "Máy tính & Công nghệ (Computers & IT)"
      },
      {
        "word": "Shutdown",
        "pos": "phrasalv",
        "ipa": "/ʃʌt daʊn/",
        "meaningVi": "Tắtmáy",
        "topicId": 14,
        "topicName": "Máy tính & Công nghệ (Computers & IT)"
      },
      {
        "word": "Folder",
        "pos": "n",
        "ipa": "/ˈfəʊl.dər/",
        "meaningVi": "Thưmục",
        "topicId": 14,
        "topicName": "Máy tính & Công nghệ (Computers & IT)"
      },
      {
        "word": "Print",
        "pos": "v",
        "ipa": "/prɪnt/",
        "meaningVi": "In",
        "topicId": 14,
        "topicName": "Máy tính & Công nghệ (Computers & IT)"
      },
      {
        "word": "Program",
        "pos": "n",
        "ipa": "/ˈprəʊ.ɡræm/",
        "meaningVi": "Chươngtrình",
        "topicId": 14,
        "topicName": "Máy tính & Công nghệ (Computers & IT)"
      },
      {
        "word": "Search",
        "pos": "v",
        "ipa": "/sɜːtʃ/",
        "meaningVi": "Tìmkiếm(thông",
        "topicId": 14,
        "topicName": "Máy tính & Công nghệ (Computers & IT)"
      },
      {
        "word": "Screen",
        "pos": "n",
        "ipa": "/skriːn/",
        "meaningVi": "Mànhình",
        "topicId": 14,
        "topicName": "Máy tính & Công nghệ (Computers & IT)"
      }
    ]
  },
  {
    "id": 15,
    "name": "Công việc nhà (Housework & Chores)",
    "wordCount": 19,
    "words": [
      {
        "word": "Dusting",
        "pos": "n",
        "ipa": "/ˈdʌs.tɪŋ/",
        "meaningVi": "Việcquétbụi",
        "topicId": 15,
        "topicName": "Công việc nhà (Housework & Chores)"
      },
      {
        "word": "Cooking",
        "pos": "n",
        "ipa": "/ˈkʊk.ɪŋ/",
        "meaningVi": "Việcnấuăn",
        "topicId": 15,
        "topicName": "Công việc nhà (Housework & Chores)"
      },
      {
        "word": "Ironing",
        "pos": "n",
        "ipa": "/ˈaɪə.nɪŋ/",
        "meaningVi": "Việcủiđồ",
        "topicId": 15,
        "topicName": "Công việc nhà (Housework & Chores)"
      },
      {
        "word": "Sweep",
        "pos": "v",
        "ipa": "/swiːp/",
        "meaningVi": "Quétdọn",
        "topicId": 15,
        "topicName": "Công việc nhà (Housework & Chores)"
      },
      {
        "word": "Wipe",
        "pos": "v",
        "ipa": "/waɪp/",
        "meaningVi": "Chùi,lausạch",
        "topicId": 15,
        "topicName": "Công việc nhà (Housework & Chores)"
      },
      {
        "word": "Throwout",
        "pos": "phrasalv",
        "ipa": "/θrəʊaʊt/",
        "meaningVi": "Vứt,bỏđi",
        "topicId": 15,
        "topicName": "Công việc nhà (Housework & Chores)"
      },
      {
        "word": "Vacuum",
        "pos": "v",
        "ipa": "/ˈvæk.juːm/",
        "meaningVi": "Hútbụi",
        "topicId": 15,
        "topicName": "Công việc nhà (Housework & Chores)"
      },
      {
        "word": "Cleaning",
        "pos": "n",
        "ipa": "/ˈkliː.nɪŋ/",
        "meaningVi": "Việcdọndẹp",
        "topicId": 15,
        "topicName": "Công việc nhà (Housework & Chores)"
      },
      {
        "word": "Polish",
        "pos": "v",
        "ipa": "/ˈpɒl.ɪʃ/",
        "meaningVi": "Đánhbóng",
        "topicId": 15,
        "topicName": "Công việc nhà (Housework & Chores)"
      },
      {
        "word": "Fold",
        "pos": "v",
        "ipa": "/fəʊld/",
        "meaningVi": "Gấpgọn,gậplại",
        "topicId": 15,
        "topicName": "Công việc nhà (Housework & Chores)"
      },
      {
        "word": "Scrub",
        "pos": "v",
        "ipa": "/skrʌb/",
        "meaningVi": "Chà,cọrửa",
        "topicId": 15,
        "topicName": "Công việc nhà (Housework & Chores)"
      },
      {
        "word": "Tighten",
        "pos": "v",
        "ipa": "/ˈtaɪ.tən/",
        "meaningVi": "Thắt,vặn(chặt)",
        "topicId": 15,
        "topicName": "Công việc nhà (Housework & Chores)"
      },
      {
        "word": "Makethebed",
        "pos": "v. phr",
        "ipa": "/meɪkðəbed/",
        "meaningVi": "Dọngiường",
        "topicId": 15,
        "topicName": "Công việc nhà (Housework & Chores)"
      },
      {
        "word": "Setthetable",
        "pos": "v. phr",
        "ipa": "/setðəˈteɪ.bəl/",
        "meaningVi": "Bàychénbát",
        "topicId": 15,
        "topicName": "Công việc nhà (Housework & Chores)"
      },
      {
        "word": "Clearthetable",
        "pos": "v. phr",
        "ipa": "/klɪər ðəˈteɪ.bəl/",
        "meaningVi": "Dọndẹpchénbát",
        "topicId": 15,
        "topicName": "Công việc nhà (Housework & Chores)"
      },
      {
        "word": "Mowthelawn",
        "pos": "v. phr",
        "ipa": "/məʊðəlɔːn/",
        "meaningVi": "Cắtcỏ",
        "topicId": 15,
        "topicName": "Công việc nhà (Housework & Chores)"
      },
      {
        "word": "Dishwashing",
        "pos": "n",
        "ipa": "/dɪʃˈwɒʃ.ɪŋ/",
        "meaningVi": "Việcrửachén",
        "topicId": 15,
        "topicName": "Công việc nhà (Housework & Chores)"
      },
      {
        "word": "Watertheplants",
        "pos": "v. phr",
        "ipa": "/ˈwɔː.tərðəˈplɑːnt/",
        "meaningVi": "Tướicây",
        "topicId": 15,
        "topicName": "Công việc nhà (Housework & Chores)"
      },
      {
        "word": "Cleanthekitchen",
        "pos": "v. phr",
        "ipa": "/kliːn ðə ˈkɪʧən/",
        "meaningVi": "Laudọnbếp",
        "topicId": 15,
        "topicName": "Công việc nhà (Housework & Chores)"
      }
    ]
  },
  {
    "id": 16,
    "name": "Cửa hàng (Shops & Stores)",
    "wordCount": 15,
    "words": [
      {
        "word": "Bakery",
        "pos": "n",
        "ipa": "/ˈbeɪ.kər.i/",
        "meaningVi": "Tiệmbánh",
        "topicId": 16,
        "topicName": "Cửa hàng (Shops & Stores)"
      },
      {
        "word": "Bookshop",
        "pos": "n",
        "ipa": "/ˈbʊk.ʃɒp/",
        "meaningVi": "Tiệmsách",
        "topicId": 16,
        "topicName": "Cửa hàng (Shops & Stores)"
      },
      {
        "word": "Butcher's",
        "pos": "n",
        "ipa": "/ˈbʊtʃ.ər/",
        "meaningVi": "Cửahàngthịt",
        "topicId": 16,
        "topicName": "Cửa hàng (Shops & Stores)"
      },
      {
        "word": "Candystore",
        "pos": "n. phr",
        "ipa": "/ˈkæn.diˌstɔːr/",
        "meaningVi": "Cửahàngkẹo",
        "topicId": 16,
        "topicName": "Cửa hàng (Shops & Stores)"
      },
      {
        "word": "Greengrocer",
        "pos": "n",
        "ipa": "/ˈɡriːŋ.ɡrəʊ.sər/",
        "meaningVi": "Cửahàngbánrau",
        "topicId": 16,
        "topicName": "Cửa hàng (Shops & Stores)"
      },
      {
        "word": "Flowershop",
        "pos": "n. phr",
        "ipa": "/flaʊərʃɒp/",
        "meaningVi": "Cửahànghoa",
        "topicId": 16,
        "topicName": "Cửa hàng (Shops & Stores)"
      },
      {
        "word": "Store",
        "pos": "n",
        "ipa": "/ˌstɔːr/",
        "meaningVi": "Cửahàng",
        "topicId": 16,
        "topicName": "Cửa hàng (Shops & Stores)"
      },
      {
        "word": "Giftshop",
        "pos": "n. phr",
        "ipa": "/ˈɡɪft ˌʃɒp/",
        "meaningVi": "Cửahàngđồlưu",
        "topicId": 16,
        "topicName": "Cửa hàng (Shops & Stores)"
      },
      {
        "word": "Shop",
        "pos": "n",
        "ipa": "/ˌʃɒp/",
        "meaningVi": "Cửahàng",
        "topicId": 16,
        "topicName": "Cửa hàng (Shops & Stores)"
      },
      {
        "word": "Foodstall",
        "pos": "n. phr",
        "ipa": "/fuːdstɔːl/",
        "meaningVi": "Quánăn",
        "topicId": 16,
        "topicName": "Cửa hàng (Shops & Stores)"
      },
      {
        "word": "Dry-cleaner's",
        "pos": "n",
        "ipa": "/ˌdraɪˈkliː.nəz/",
        "meaningVi": "Tiệmgiặtủi",
        "topicId": 16,
        "topicName": "Cửa hàng (Shops & Stores)"
      },
      {
        "word": "Shoestore",
        "pos": "n. phr",
        "ipa": "/ʃuːˌstɔːr/",
        "meaningVi": "Tiệmgiày",
        "topicId": 16,
        "topicName": "Cửa hàng (Shops & Stores)"
      },
      {
        "word": "Barbershop",
        "pos": "n",
        "ipa": "/ˈbɑː.bə.ʃɒp/",
        "meaningVi": "Tiệmcắttócnam",
        "topicId": 16,
        "topicName": "Cửa hàng (Shops & Stores)"
      },
      {
        "word": "Bookstall",
        "pos": "n",
        "ipa": "/ˈbʊk.stɔːl/",
        "meaningVi": "Quầybánsách",
        "topicId": 16,
        "topicName": "Cửa hàng (Shops & Stores)"
      },
      {
        "word": "Sportscenter",
        "pos": "n. phr",
        "ipa": "/ˈspɔːrts ˌsen.t̬ɚ/",
        "meaningVi": "Trungtâmthểthao",
        "topicId": 16,
        "topicName": "Cửa hàng (Shops & Stores)"
      }
    ]
  },
  {
    "id": 17,
    "name": "Giải trí (Entertainment)",
    "wordCount": 16,
    "words": [
      {
        "word": "Play",
        "pos": "n",
        "ipa": "/pleɪ/",
        "meaningVi": "Vởkịch",
        "topicId": 17,
        "topicName": "Giải trí (Entertainment)"
      },
      {
        "word": "Circus",
        "pos": "n",
        "ipa": "/ˈsɜː.kəs/",
        "meaningVi": "Rạpxiếc",
        "topicId": 17,
        "topicName": "Giải trí (Entertainment)"
      },
      {
        "word": "Stadium",
        "pos": "n",
        "ipa": "/ˈsteɪ.di.əm/",
        "meaningVi": "Sânvậnđộng",
        "topicId": 17,
        "topicName": "Giải trí (Entertainment)"
      },
      {
        "word": "Orchestra",
        "pos": "n",
        "ipa": "/ˈɔː.kɪ.strə/",
        "meaningVi": "Bannhạc,dànnhạc",
        "topicId": 17,
        "topicName": "Giải trí (Entertainment)"
      },
      {
        "word": "Scene",
        "pos": "n",
        "ipa": "/siːn/",
        "meaningVi": "Phâncảnh",
        "topicId": 17,
        "topicName": "Giải trí (Entertainment)"
      },
      {
        "word": "Opera",
        "pos": "n",
        "ipa": "/ˈɒp.ər.ə/",
        "meaningVi": "Nhạckịch,ô-pê-ra",
        "topicId": 17,
        "topicName": "Giải trí (Entertainment)"
      },
      {
        "word": "Theater",
        "pos": "n",
        "ipa": "/ˈθɪə.tər/",
        "meaningVi": "Nhàhát",
        "topicId": 17,
        "topicName": "Giải trí (Entertainment)"
      },
      {
        "word": "Applaud",
        "pos": "v",
        "ipa": "/əˈplɔːd/",
        "meaningVi": "Vỗtay(tánthưởng)",
        "topicId": 17,
        "topicName": "Giải trí (Entertainment)"
      },
      {
        "word": "Perform",
        "pos": "v",
        "ipa": "/pəˈfɔːm/",
        "meaningVi": "Trìnhdiễn,biểu",
        "topicId": 17,
        "topicName": "Giải trí (Entertainment)"
      },
      {
        "word": "Exhibit",
        "pos": "n",
        "ipa": "/ɪɡˈzɪb.ɪt/",
        "meaningVi": "Vậttriểnlãm",
        "topicId": 17,
        "topicName": "Giải trí (Entertainment)"
      },
      {
        "word": "Artgallery",
        "pos": "n. phr",
        "ipa": "/ˈɑːt ˌɡæl.ər.i/",
        "meaningVi": "Phòngtriểnlãm",
        "topicId": 17,
        "topicName": "Giải trí (Entertainment)"
      },
      {
        "word": "Comedy",
        "pos": "n",
        "ipa": "/ˈkɒm.ə.di/",
        "meaningVi": "Hàikịch",
        "topicId": 17,
        "topicName": "Giải trí (Entertainment)"
      },
      {
        "word": "Chambermusic",
        "pos": "n. phr",
        "ipa": "/ˈtʃeɪm.bəˌmjuː.zɪk/",
        "meaningVi": "Nhạcthínhphòng",
        "topicId": 17,
        "topicName": "Giải trí (Entertainment)"
      },
      {
        "word": "Casino",
        "pos": "n",
        "ipa": "/kəˈsiː.nəʊ/",
        "meaningVi": "Sòngbạc",
        "topicId": 17,
        "topicName": "Giải trí (Entertainment)"
      },
      {
        "word": "Pub",
        "pos": "n",
        "ipa": "/pʌb/",
        "meaningVi": "Quánrượu",
        "topicId": 17,
        "topicName": "Giải trí (Entertainment)"
      },
      {
        "word": "Concerthall",
        "pos": "n. phr",
        "ipa": "/ˈkɒn.sətˌhɔːl/",
        "meaningVi": "Phònghoànhạc",
        "topicId": 17,
        "topicName": "Giải trí (Entertainment)"
      }
    ]
  },
  {
    "id": 18,
    "name": "Du lịch (Travel & Tourism)",
    "wordCount": 21,
    "words": [
      {
        "word": "Travel",
        "pos": "v",
        "ipa": "/ˈtræv.əl/",
        "meaningVi": "Dulịch",
        "topicId": 18,
        "topicName": "Du lịch (Travel & Tourism)"
      },
      {
        "word": "Travelagent",
        "pos": "n. phr",
        "ipa": "/ˈtræv.əlˌeɪ.dʒənt/",
        "meaningVi": "Đạilýdulịch",
        "topicId": 18,
        "topicName": "Du lịch (Travel & Tourism)"
      },
      {
        "word": "Vacation",
        "pos": "n",
        "ipa": "/veɪˈkeɪ.ʃən/",
        "meaningVi": "Kỳnghỉ",
        "topicId": 18,
        "topicName": "Du lịch (Travel & Tourism)"
      },
      {
        "word": "Flight",
        "pos": "n",
        "ipa": "/flaɪt/",
        "meaningVi": "Chuyếnbay",
        "topicId": 18,
        "topicName": "Du lịch (Travel & Tourism)"
      },
      {
        "word": "Voyage",
        "pos": "n",
        "ipa": "/ˈvɔɪ.ɪdʒ/",
        "meaningVi": "Chuyếnhảihành",
        "topicId": 18,
        "topicName": "Du lịch (Travel & Tourism)"
      },
      {
        "word": "Relax",
        "pos": "v",
        "ipa": "/rɪˈlæks/",
        "meaningVi": "Thưgiãn",
        "topicId": 18,
        "topicName": "Du lịch (Travel & Tourism)"
      },
      {
        "word": "Cancel",
        "pos": "v",
        "ipa": "/ˈkæn.səl/",
        "meaningVi": "Hủybỏ",
        "topicId": 18,
        "topicName": "Du lịch (Travel & Tourism)"
      },
      {
        "word": "Homestay",
        "pos": "n",
        "ipa": "/ˈhəʊm.steɪ/",
        "meaningVi": "(dịchvụ)lưutrútại",
        "topicId": 18,
        "topicName": "Du lịch (Travel & Tourism)"
      },
      {
        "word": "Souvenir",
        "pos": "n",
        "ipa": "/ˌsuː.vənˈɪər/",
        "meaningVi": "Quàlưuniệm",
        "topicId": 18,
        "topicName": "Du lịch (Travel & Tourism)"
      },
      {
        "word": "Travelsickness",
        "pos": "n. phr",
        "ipa": "/ˈtræv.əlˌsɪk.nəs/",
        "meaningVi": "Việcsaytàuxe",
        "topicId": 18,
        "topicName": "Du lịch (Travel & Tourism)"
      },
      {
        "word": "Journey",
        "pos": "n",
        "ipa": "/ˈdʒɜː.ni/",
        "meaningVi": "Chuyếnđi",
        "topicId": 18,
        "topicName": "Du lịch (Travel & Tourism)"
      },
      {
        "word": "Peakseason",
        "pos": "n. phr",
        "ipa": "/piːk ˈsiː.zən/",
        "meaningVi": "Mùacaođiểm",
        "topicId": 18,
        "topicName": "Du lịch (Travel & Tourism)"
      },
      {
        "word": "Route",
        "pos": "n",
        "ipa": "/ruːt/",
        "meaningVi": "Tuyếnđường",
        "topicId": 18,
        "topicName": "Du lịch (Travel & Tourism)"
      },
      {
        "word": "Trip",
        "pos": "n",
        "ipa": "/trɪp/",
        "meaningVi": "Chuyếnđi(ngắn",
        "topicId": 18,
        "topicName": "Du lịch (Travel & Tourism)"
      },
      {
        "word": "Excursion",
        "pos": "n",
        "ipa": "/ɪkˈskɜː.ʃən/",
        "meaningVi": "Chuyếnthamquan",
        "topicId": 18,
        "topicName": "Du lịch (Travel & Tourism)"
      },
      {
        "word": "Luggage",
        "pos": "n",
        "ipa": "/ˈlʌɡ.ɪdʒ/",
        "meaningVi": "Hànhlý",
        "topicId": 18,
        "topicName": "Du lịch (Travel & Tourism)"
      },
      {
        "word": "Tourist",
        "pos": "n",
        "ipa": "/ˈtʊə.rɪst/",
        "meaningVi": "Dukhách",
        "topicId": 18,
        "topicName": "Du lịch (Travel & Tourism)"
      },
      {
        "word": "Ticket",
        "pos": "n",
        "ipa": "/ˈtɪk.ɪt/",
        "meaningVi": "Vé",
        "topicId": 18,
        "topicName": "Du lịch (Travel & Tourism)"
      },
      {
        "word": "Eager",
        "pos": "adj",
        "ipa": "/ˈiː.ɡər/",
        "meaningVi": "Háohức",
        "topicId": 18,
        "topicName": "Du lịch (Travel & Tourism)"
      },
      {
        "word": "Sunglasses",
        "pos": "n",
        "ipa": "/ˈsʌŋˌɡlɑː.sɪz/",
        "meaningVi": "Kínhmát",
        "topicId": 18,
        "topicName": "Du lịch (Travel & Tourism)"
      },
      {
        "word": "Safari",
        "pos": "n",
        "ipa": "/səˈfɑː.ri/",
        "meaningVi": "Chuyếnthámhiểm",
        "topicId": 18,
        "topicName": "Du lịch (Travel & Tourism)"
      }
    ]
  },
  {
    "id": 19,
    "name": "Tết Trung thu (Mid-Autumn Festival)",
    "wordCount": 10,
    "words": [
      {
        "word": "Moon",
        "pos": "n",
        "ipa": "/muːn/",
        "meaningVi": "Trăng",
        "topicId": 19,
        "topicName": "Tết Trung thu (Mid-Autumn Festival)"
      },
      {
        "word": "Cake",
        "pos": "n",
        "ipa": "/keɪk/",
        "meaningVi": "Bánhngọt",
        "topicId": 19,
        "topicName": "Tết Trung thu (Mid-Autumn Festival)"
      },
      {
        "word": "Toy",
        "pos": "n",
        "ipa": "/tɔɪ/",
        "meaningVi": "Đồchơi",
        "topicId": 19,
        "topicName": "Tết Trung thu (Mid-Autumn Festival)"
      },
      {
        "word": "Mask",
        "pos": "n",
        "ipa": "/mɑːsk/",
        "meaningVi": "Mặtnạ",
        "topicId": 19,
        "topicName": "Tết Trung thu (Mid-Autumn Festival)"
      },
      {
        "word": "Banyan",
        "pos": "n",
        "ipa": "/ˈbæn.jæn/",
        "meaningVi": "Câyđa",
        "topicId": 19,
        "topicName": "Tết Trung thu (Mid-Autumn Festival)"
      },
      {
        "word": "Lantern",
        "pos": "n",
        "ipa": "/ˈlæn.tən/",
        "meaningVi": "Lồngđèn",
        "topicId": 19,
        "topicName": "Tết Trung thu (Mid-Autumn Festival)"
      },
      {
        "word": "Bamboo",
        "pos": "n",
        "ipa": "/bæmˈbuː/",
        "meaningVi": "Tre",
        "topicId": 19,
        "topicName": "Tết Trung thu (Mid-Autumn Festival)"
      },
      {
        "word": "Perform",
        "pos": "n",
        "ipa": "/pəˈfɔːm/",
        "meaningVi": "Trìnhdiễn,biểu",
        "topicId": 19,
        "topicName": "Tết Trung thu (Mid-Autumn Festival)"
      },
      {
        "word": "Celebrate",
        "pos": "n",
        "ipa": "/ˈsel.ə.breɪt/",
        "meaningVi": "Kỷniệm",
        "topicId": 19,
        "topicName": "Tết Trung thu (Mid-Autumn Festival)"
      },
      {
        "word": "Rabbit",
        "pos": "n",
        "ipa": "/ˈræb.ɪt/",
        "meaningVi": "Thỏ",
        "topicId": 19,
        "topicName": "Tết Trung thu (Mid-Autumn Festival)"
      }
    ]
  },
  {
    "id": 20,
    "name": "Thể thao (Sports)",
    "wordCount": 33,
    "words": [
      {
        "word": "Sport",
        "pos": "n",
        "ipa": "/spɔːrt/",
        "meaningVi": "Thểthao",
        "topicId": 20,
        "topicName": "Thể thao (Sports)"
      },
      {
        "word": "Skiing",
        "pos": "n",
        "ipa": "/ˈskiː.ɪŋ/",
        "meaningVi": "Trượttuyết",
        "topicId": 20,
        "topicName": "Thể thao (Sports)"
      },
      {
        "word": "Ice skating",
        "pos": "n. phr",
        "ipa": "/ˈaɪsˌskeɪ.tɪŋ/",
        "meaningVi": "Trượtbăng",
        "topicId": 20,
        "topicName": "Thể thao (Sports)"
      },
      {
        "word": "Horseracing",
        "pos": "n. phr",
        "ipa": "/ˈhɔːrs ˌreɪ.sɪŋ/",
        "meaningVi": "Đuangựa",
        "topicId": 20,
        "topicName": "Thể thao (Sports)"
      },
      {
        "word": "Running",
        "pos": "n",
        "ipa": "/ˈrʌn.ɪŋ/",
        "meaningVi": "Chạy",
        "topicId": 20,
        "topicName": "Thể thao (Sports)"
      },
      {
        "word": "Walking",
        "pos": "n",
        "ipa": "/ˈwɔː.kɪŋ/",
        "meaningVi": "Đibộ,tảnbộ",
        "topicId": 20,
        "topicName": "Thể thao (Sports)"
      },
      {
        "word": "Watersports",
        "pos": "n. phr",
        "ipa": "/ˈwɔː.tərspɔːrts/",
        "meaningVi": "Thểthaodướinước",
        "topicId": 20,
        "topicName": "Thể thao (Sports)"
      },
      {
        "word": "Boxing",
        "pos": "n",
        "ipa": "/ˈbɒk.sɪŋ/",
        "meaningVi": "Quyềnanh",
        "topicId": 20,
        "topicName": "Thể thao (Sports)"
      },
      {
        "word": "Swimming",
        "pos": "n",
        "ipa": "/ˈswɪm.ɪŋ/",
        "meaningVi": "Bơilội",
        "topicId": 20,
        "topicName": "Thể thao (Sports)"
      },
      {
        "word": "Football",
        "pos": "n",
        "ipa": "/ˈfʊt.bɔːl/",
        "meaningVi": "Bóngđá",
        "topicId": 20,
        "topicName": "Thể thao (Sports)"
      },
      {
        "word": "Basketball",
        "pos": "n",
        "ipa": "/ˈbæs.kɪtˌbɔːl/",
        "meaningVi": "Bóngrổ",
        "topicId": 20,
        "topicName": "Thể thao (Sports)"
      },
      {
        "word": "Badminton",
        "pos": "n",
        "ipa": "/ˈbæd.mɪn.tən/",
        "meaningVi": "Cầulông",
        "topicId": 20,
        "topicName": "Thể thao (Sports)"
      },
      {
        "word": "Tennis",
        "pos": "n",
        "ipa": "/ˈtɛn.ɪs/",
        "meaningVi": "Quầnvợt",
        "topicId": 20,
        "topicName": "Thể thao (Sports)"
      },
      {
        "word": "Table tennis",
        "pos": "n. phr",
        "ipa": "/ˈteɪ.bəl ˈtɛn.ɪs/",
        "meaningVi": "Bóngbàn",
        "topicId": 20,
        "topicName": "Thể thao (Sports)"
      },
      {
        "word": "Baseball",
        "pos": "n",
        "ipa": "/ˈbeɪs.bɔːl/",
        "meaningVi": "Bóngchày",
        "topicId": 20,
        "topicName": "Thể thao (Sports)"
      },
      {
        "word": "Cycling",
        "pos": "n",
        "ipa": "/ˈsaɪ.klɪŋ/",
        "meaningVi": "Đuaxeđạp,đạpxe",
        "topicId": 20,
        "topicName": "Thể thao (Sports)"
      },
      {
        "word": "Golf",
        "pos": "n",
        "ipa": "/ɡɑːlf/",
        "meaningVi": "Đánhgôn",
        "topicId": 20,
        "topicName": "Thể thao (Sports)"
      },
      {
        "word": "Contactsport",
        "pos": "n. phr",
        "ipa": "/ˈkɒn.tæktspɔːrt/",
        "meaningVi": "Thểthaotiếpxúc",
        "topicId": 20,
        "topicName": "Thể thao (Sports)"
      },
      {
        "word": "Water polo",
        "pos": "n. phr",
        "ipa": "/ˈwɔː.tərˈpoʊ.loʊ/",
        "meaningVi": "Bóngnước",
        "topicId": 20,
        "topicName": "Thể thao (Sports)"
      },
      {
        "word": "Archery",
        "pos": "n",
        "ipa": "/ˈɑːr.tʃər.i/",
        "meaningVi": "Bắncung",
        "topicId": 20,
        "topicName": "Thể thao (Sports)"
      },
      {
        "word": "Weightlifting",
        "pos": "n",
        "ipa": "/ˈweɪtˌlɪf.tɪŋ/",
        "meaningVi": "Cửtạ",
        "topicId": 20,
        "topicName": "Thể thao (Sports)"
      },
      {
        "word": "Wrestling",
        "pos": "n",
        "ipa": "/ˈrɛs.lɪŋ/",
        "meaningVi": "Đấuvật",
        "topicId": 20,
        "topicName": "Thể thao (Sports)"
      },
      {
        "word": "Bowling",
        "pos": "n",
        "ipa": "/ˈboʊ.lɪŋ/",
        "meaningVi": "Bónggỗ",
        "topicId": 20,
        "topicName": "Thể thao (Sports)"
      },
      {
        "word": "Lacrosse",
        "pos": "n",
        "ipa": "/ləˈkrɒs/",
        "meaningVi": "Bóngvợt",
        "topicId": 20,
        "topicName": "Thể thao (Sports)"
      },
      {
        "word": "Hockey",
        "pos": "n",
        "ipa": "/ˈhɒk.i/",
        "meaningVi": "Khúccôncầu",
        "topicId": 20,
        "topicName": "Thể thao (Sports)"
      },
      {
        "word": "Referee",
        "pos": "n",
        "ipa": "/ˌrɛf.əˈriː/",
        "meaningVi": "Trọngtài",
        "topicId": 20,
        "topicName": "Thể thao (Sports)"
      },
      {
        "word": "Dart",
        "pos": "n",
        "ipa": "/dɑːrt/",
        "meaningVi": "Némphitiêu",
        "topicId": 20,
        "topicName": "Thể thao (Sports)"
      },
      {
        "word": "SEAGames",
        "pos": "n. phr",
        "ipa": "/ˈsiː ˌɡeɪmz/",
        "meaningVi": "ĐạihộiThểthao",
        "topicId": 20,
        "topicName": "Thể thao (Sports)"
      },
      {
        "word": "Host",
        "pos": "v",
        "ipa": "/hoʊst/",
        "meaningVi": "Đăngcai,tổchức",
        "topicId": 20,
        "topicName": "Thể thao (Sports)"
      },
      {
        "word": "Wushu",
        "pos": "n",
        "ipa": "/ˈwuː.ʃuː/",
        "meaningVi": "(môn)võwushu",
        "topicId": 20,
        "topicName": "Thể thao (Sports)"
      },
      {
        "word": "Sportsmanship",
        "pos": "n",
        "ipa": "/ˈspɔːrts.mənˌʃɪp/",
        "meaningVi": "Tinhthầnthểthao",
        "topicId": 20,
        "topicName": "Thể thao (Sports)"
      },
      {
        "word": "Captain",
        "pos": "n",
        "ipa": "/ˈkæp.tən/",
        "meaningVi": "Độitrưởng",
        "topicId": 20,
        "topicName": "Thể thao (Sports)"
      },
      {
        "word": "Cross-country",
        "pos": "n",
        "ipa": "/ˌkrɒsˈkʌn.tri/",
        "meaningVi": "Chạyviệtdã",
        "topicId": 20,
        "topicName": "Thể thao (Sports)"
      }
    ]
  },
  {
    "id": 21,
    "name": "Quê hương & Nông thôn (Hometown & Countryside)",
    "wordCount": 34,
    "words": [
      {
        "word": "Village",
        "pos": "n",
        "ipa": "/ˈvɪl.ɪdʒ/",
        "meaningVi": "Ngôilàng",
        "topicId": 21,
        "topicName": "Quê hương & Nông thôn (Hometown & Countryside)"
      },
      {
        "word": "Countryside",
        "pos": "n",
        "ipa": "/ˈkʌn.tri.saɪd/",
        "meaningVi": "Nôngthôn",
        "topicId": 21,
        "topicName": "Quê hương & Nông thôn (Hometown & Countryside)"
      },
      {
        "word": "Cottage",
        "pos": "n",
        "ipa": "/ˈkɒt.ɪdʒ/",
        "meaningVi": "Nhàtranh",
        "topicId": 21,
        "topicName": "Quê hương & Nông thôn (Hometown & Countryside)"
      },
      {
        "word": "Winding",
        "pos": "adj",
        "ipa": "/ˈwaɪn.dɪŋ/",
        "meaningVi": "Quanhco,uốnkhúc",
        "topicId": 21,
        "topicName": "Quê hương & Nông thôn (Hometown & Countryside)"
      },
      {
        "word": "Well",
        "pos": "n",
        "ipa": "/wel/",
        "meaningVi": "Giếng",
        "topicId": 21,
        "topicName": "Quê hương & Nông thôn (Hometown & Countryside)"
      },
      {
        "word": "Buffalo",
        "pos": "n",
        "ipa": "/ˈbʌf.ə.ləʊ/",
        "meaningVi": "Contrâu",
        "topicId": 21,
        "topicName": "Quê hương & Nông thôn (Hometown & Countryside)"
      },
      {
        "word": "Field",
        "pos": "n",
        "ipa": "/ffːld/",
        "meaningVi": "Cánhđồng",
        "topicId": 21,
        "topicName": "Quê hương & Nông thôn (Hometown & Countryside)"
      },
      {
        "word": "Canal",
        "pos": "n",
        "ipa": "/kəˈnæl/",
        "meaningVi": "Kênh",
        "topicId": 21,
        "topicName": "Quê hương & Nông thôn (Hometown & Countryside)"
      },
      {
        "word": "River",
        "pos": "n",
        "ipa": "/ˈrɪv.ər/",
        "meaningVi": "Sông",
        "topicId": 21,
        "topicName": "Quê hương & Nông thôn (Hometown & Countryside)"
      },
      {
        "word": "Pond",
        "pos": "n",
        "ipa": "/pɒnd/",
        "meaningVi": "Ao",
        "topicId": 21,
        "topicName": "Quê hương & Nông thôn (Hometown & Countryside)"
      },
      {
        "word": "Folkmusic",
        "pos": "n. phr",
        "ipa": "/ˈfoʊkˌmju.zɪk/",
        "meaningVi": "Nhạcdângian",
        "topicId": 21,
        "topicName": "Quê hương & Nông thôn (Hometown & Countryside)"
      },
      {
        "word": "Farm",
        "pos": "n",
        "ipa": "/fɑːm/",
        "meaningVi": "Trangtrại",
        "topicId": 21,
        "topicName": "Quê hương & Nông thôn (Hometown & Countryside)"
      },
      {
        "word": "Plow",
        "pos": "v",
        "ipa": "/plaʊ/",
        "meaningVi": "Cày",
        "topicId": 21,
        "topicName": "Quê hương & Nông thôn (Hometown & Countryside)"
      },
      {
        "word": "Agriculture",
        "pos": "n",
        "ipa": "/ˈæɡ.rɪ.kʌl.tʃər/",
        "meaningVi": "Nôngnghiệp",
        "topicId": 21,
        "topicName": "Quê hương & Nông thôn (Hometown & Countryside)"
      },
      {
        "word": "Boat",
        "pos": "n",
        "ipa": "/bəʊt/",
        "meaningVi": "Thuyền",
        "topicId": 21,
        "topicName": "Quê hương & Nông thôn (Hometown & Countryside)"
      },
      {
        "word": "Peaceful",
        "pos": "adj",
        "ipa": "/ˈpiːs.fəl/",
        "meaningVi": "Yênbình",
        "topicId": 21,
        "topicName": "Quê hương & Nông thôn (Hometown & Countryside)"
      },
      {
        "word": "Bay",
        "pos": "n",
        "ipa": "/beɪ/",
        "meaningVi": "Vịnh",
        "topicId": 21,
        "topicName": "Quê hương & Nông thôn (Hometown & Countryside)"
      },
      {
        "word": "Hill",
        "pos": "n",
        "ipa": "/hɪl/",
        "meaningVi": "Ngọnđồi",
        "topicId": 21,
        "topicName": "Quê hương & Nông thôn (Hometown & Countryside)"
      },
      {
        "word": "Forest",
        "pos": "n",
        "ipa": "/ˈfɒr.ɪst/",
        "meaningVi": "Rừng",
        "topicId": 21,
        "topicName": "Quê hương & Nông thôn (Hometown & Countryside)"
      },
      {
        "word": "Mountain",
        "pos": "n",
        "ipa": "/ˈmaʊn.tɪn/",
        "meaningVi": "Núi",
        "topicId": 21,
        "topicName": "Quê hương & Nông thôn (Hometown & Countryside)"
      },
      {
        "word": "Port",
        "pos": "n",
        "ipa": "/pɔːt/",
        "meaningVi": "Bếncảng",
        "topicId": 21,
        "topicName": "Quê hương & Nông thôn (Hometown & Countryside)"
      },
      {
        "word": "Lake",
        "pos": "n",
        "ipa": "/leɪk/",
        "meaningVi": "Hồ",
        "topicId": 21,
        "topicName": "Quê hương & Nông thôn (Hometown & Countryside)"
      },
      {
        "word": "Sea",
        "pos": "n",
        "ipa": "/siː/",
        "meaningVi": "Biển",
        "topicId": 21,
        "topicName": "Quê hương & Nông thôn (Hometown & Countryside)"
      },
      {
        "word": "Sand",
        "pos": "n",
        "ipa": "/sænd/",
        "meaningVi": "Cát",
        "topicId": 21,
        "topicName": "Quê hương & Nông thôn (Hometown & Countryside)"
      },
      {
        "word": "Valley",
        "pos": "n",
        "ipa": "/ˈvæl.i/",
        "meaningVi": "Thunglũng",
        "topicId": 21,
        "topicName": "Quê hương & Nông thôn (Hometown & Countryside)"
      },
      {
        "word": "Waterfall",
        "pos": "n",
        "ipa": "/ˈwɔː.tə.fɔːl/",
        "meaningVi": "Thácnước",
        "topicId": 21,
        "topicName": "Quê hương & Nông thôn (Hometown & Countryside)"
      },
      {
        "word": "Barn",
        "pos": "n",
        "ipa": "/bɑːn/",
        "meaningVi": "Khothóc",
        "topicId": 21,
        "topicName": "Quê hương & Nông thôn (Hometown & Countryside)"
      },
      {
        "word": "Harvest",
        "pos": "n",
        "ipa": "/ˈhɑː.vɪst/",
        "meaningVi": "Vụgặt",
        "topicId": 21,
        "topicName": "Quê hương & Nông thôn (Hometown & Countryside)"
      },
      {
        "word": "Cattle",
        "pos": "n",
        "ipa": "/ˈkæt.əl/",
        "meaningVi": "Giasúc",
        "topicId": 21,
        "topicName": "Quê hương & Nông thôn (Hometown & Countryside)"
      },
      {
        "word": "Rural",
        "pos": "adj",
        "ipa": "/ˈrʊə.rəl/",
        "meaningVi": "(thuộc)nôngthôn",
        "topicId": 21,
        "topicName": "Quê hương & Nông thôn (Hometown & Countryside)"
      },
      {
        "word": "Cliff",
        "pos": "n",
        "ipa": "/klɪf/",
        "meaningVi": "Váchđá",
        "topicId": 21,
        "topicName": "Quê hương & Nông thôn (Hometown & Countryside)"
      },
      {
        "word": "Landscape",
        "pos": "n",
        "ipa": "/ˈlænd.skeɪp/",
        "meaningVi": "Phongcảnh",
        "topicId": 21,
        "topicName": "Quê hương & Nông thôn (Hometown & Countryside)"
      },
      {
        "word": "Terracedhouse",
        "pos": "n. phr",
        "ipa": "/ˈrəʊˌhaʊs/",
        "meaningVi": "Dãynhà",
        "topicId": 21,
        "topicName": "Quê hương & Nông thôn (Hometown & Countryside)"
      },
      {
        "word": "View",
        "pos": "n",
        "ipa": "/vjuː/",
        "meaningVi": "Khungcảnh,quang",
        "topicId": 21,
        "topicName": "Quê hương & Nông thôn (Hometown & Countryside)"
      }
    ]
  },
  {
    "id": 22,
    "name": "Đám cưới (Wedding)",
    "wordCount": 33,
    "words": [
      {
        "word": "Bride",
        "pos": "n",
        "ipa": "/braɪd/",
        "meaningVi": "Côdâu",
        "topicId": 22,
        "topicName": "Đám cưới (Wedding)"
      },
      {
        "word": "Vow",
        "pos": "n",
        "ipa": "/vaʊ/",
        "meaningVi": "Lờithề",
        "topicId": 22,
        "topicName": "Đám cưới (Wedding)"
      },
      {
        "word": "Groomsman",
        "pos": "n",
        "ipa": "/ˈɡruːmz.mən/",
        "meaningVi": "Phùrể",
        "topicId": 22,
        "topicName": "Đám cưới (Wedding)"
      },
      {
        "word": "Groom",
        "pos": "n",
        "ipa": "/ɡruːm/",
        "meaningVi": "Chúrể",
        "topicId": 22,
        "topicName": "Đám cưới (Wedding)"
      },
      {
        "word": "Tuxedo",
        "pos": "n",
        "ipa": "/tʌkˈsiː.dəʊ/",
        "meaningVi": "Áoximôckinh",
        "topicId": 22,
        "topicName": "Đám cưới (Wedding)"
      },
      {
        "word": "Party",
        "pos": "n",
        "ipa": "/ˈpɑː.ti/",
        "meaningVi": "Bữatiệc",
        "topicId": 22,
        "topicName": "Đám cưới (Wedding)"
      },
      {
        "word": "Wedding",
        "pos": "n",
        "ipa": "/ˈwed.ɪŋ/",
        "meaningVi": "Đámcưới",
        "topicId": 22,
        "topicName": "Đám cưới (Wedding)"
      },
      {
        "word": "Weddingcard",
        "pos": "n. phr",
        "ipa": "/ˈwed.ɪŋkɑːd/",
        "meaningVi": "Thiệpmờiđámcưới",
        "topicId": 22,
        "topicName": "Đám cưới (Wedding)"
      },
      {
        "word": "Reception",
        "pos": "n",
        "ipa": "/rɪˈsep.ʃən/",
        "meaningVi": "Tiệcchiêuđãi",
        "topicId": 22,
        "topicName": "Đám cưới (Wedding)"
      },
      {
        "word": "Champagne",
        "pos": "n",
        "ipa": "/ʃæmˈpeɪn/",
        "meaningVi": "Rượusâmpanh",
        "topicId": 22,
        "topicName": "Đám cưới (Wedding)"
      },
      {
        "word": "Bouquet",
        "pos": "n",
        "ipa": "/buˈkeɪ/",
        "meaningVi": "Bóhoa",
        "topicId": 22,
        "topicName": "Đám cưới (Wedding)"
      },
      {
        "word": "Married",
        "pos": "adj",
        "ipa": "/ˈmær.id/",
        "meaningVi": "Đãkếthôn",
        "topicId": 22,
        "topicName": "Đám cưới (Wedding)"
      },
      {
        "word": "Newlywed",
        "pos": "n",
        "ipa": "/ˈnjuː.li.wed/",
        "meaningVi": "Ngườimớicưới",
        "topicId": 22,
        "topicName": "Đám cưới (Wedding)"
      },
      {
        "word": "Cake",
        "pos": "n",
        "ipa": "/keɪk/",
        "meaningVi": "Bánhngọt",
        "topicId": 22,
        "topicName": "Đám cưới (Wedding)"
      },
      {
        "word": "Ring",
        "pos": "n",
        "ipa": "/rɪŋ/",
        "meaningVi": "Nhẫn",
        "topicId": 22,
        "topicName": "Đám cưới (Wedding)"
      },
      {
        "word": "Emblem",
        "pos": "n",
        "ipa": "/ˈem.bləm/",
        "meaningVi": "Biểutượng",
        "topicId": 22,
        "topicName": "Đám cưới (Wedding)"
      },
      {
        "word": "Band",
        "pos": "n",
        "ipa": "/bænd/",
        "meaningVi": "Bannhạc",
        "topicId": 22,
        "topicName": "Đám cưới (Wedding)"
      },
      {
        "word": "Congratulation",
        "pos": "n",
        "ipa": "/kənˌɡrætʃ.əˈleɪ.ʃən/",
        "meaningVi": "Lờichúcmừng",
        "topicId": 22,
        "topicName": "Đám cưới (Wedding)"
      },
      {
        "word": "Jewelry",
        "pos": "n",
        "ipa": "/ˈdʒuː.əl.ri/",
        "meaningVi": "Trangsức",
        "topicId": 22,
        "topicName": "Đám cưới (Wedding)"
      },
      {
        "word": "Wine",
        "pos": "n",
        "ipa": "/waɪn/",
        "meaningVi": "Rượuvang",
        "topicId": 22,
        "topicName": "Đám cưới (Wedding)"
      },
      {
        "word": "Dowry",
        "pos": "n",
        "ipa": "/ˈdaʊ.ri/",
        "meaningVi": "Củahồimôn",
        "topicId": 22,
        "topicName": "Đám cưới (Wedding)"
      },
      {
        "word": "Honeymoon",
        "pos": "n",
        "ipa": "/ˈhʌn.i.muːn/",
        "meaningVi": "Tuầntrăngmật",
        "topicId": 22,
        "topicName": "Đám cưới (Wedding)"
      },
      {
        "word": "Anniversary",
        "pos": "n",
        "ipa": "/ˌæn.ɪˈvɜː.sər.i/",
        "meaningVi": "Ngàykỷniệm",
        "topicId": 22,
        "topicName": "Đám cưới (Wedding)"
      },
      {
        "word": "Anh",
        "pos": "noun",
        "ipa": "/emrểˌanh/",
        "meaningVi": "em",
        "topicId": 22,
        "topicName": "Đám cưới (Wedding)"
      },
      {
        "word": "Brother-in-law",
        "pos": "n",
        "ipa": "/ˈbrʌð.ə.rɪn.lɔː/",
        "meaningVi": "",
        "topicId": 22,
        "topicName": "Đám cưới (Wedding)"
      },
      {
        "word": "Chị",
        "pos": "noun",
        "ipa": "/emdâuˌchị/",
        "meaningVi": "em",
        "topicId": 22,
        "topicName": "Đám cưới (Wedding)"
      },
      {
        "word": "Sister-in-law",
        "pos": "n",
        "ipa": "/ˈsɪs.tə.rɪn.lɔː/",
        "meaningVi": "",
        "topicId": 22,
        "topicName": "Đám cưới (Wedding)"
      },
      {
        "word": "Engaged",
        "pos": "v",
        "ipa": "/ɪnˈɡeɪdʒd/",
        "meaningVi": "Đãđínhước,hứa",
        "topicId": 22,
        "topicName": "Đám cưới (Wedding)"
      },
      {
        "word": "Couple",
        "pos": "n",
        "ipa": "/ˈkʌp.əl/",
        "meaningVi": "Cặpđôi,đôivợ",
        "topicId": 22,
        "topicName": "Đám cưới (Wedding)"
      },
      {
        "word": "Husband",
        "pos": "n",
        "ipa": "/ˈhʌz.bənd/",
        "meaningVi": "Chồng",
        "topicId": 22,
        "topicName": "Đám cưới (Wedding)"
      },
      {
        "word": "Wife",
        "pos": "n",
        "ipa": "/waɪf/",
        "meaningVi": "Vợ",
        "topicId": 22,
        "topicName": "Đám cưới (Wedding)"
      },
      {
        "word": "Ceremony",
        "pos": "n",
        "ipa": "/ˈser.ɪ.mə.ni/",
        "meaningVi": "Nghilễ,nghithức",
        "topicId": 22,
        "topicName": "Đám cưới (Wedding)"
      },
      {
        "word": "Betroth",
        "pos": "v",
        "ipa": "/bɪˈtrəʊð/",
        "meaningVi": "Hứahôn,đínhhôn",
        "topicId": 22,
        "topicName": "Đám cưới (Wedding)"
      }
    ]
  },
  {
    "id": 23,
    "name": "Sân bay (Airport & Aviation)",
    "wordCount": 15,
    "words": [
      {
        "word": "Switchoff",
        "pos": "phrasalv",
        "ipa": "/swɪtʃɒf/",
        "meaningVi": "Tắt",
        "topicId": 23,
        "topicName": "Sân bay (Airport & Aviation)"
      },
      {
        "word": "Lavatory",
        "pos": "n",
        "ipa": "/ˈlæv.ə.tər.i/",
        "meaningVi": "Phòngvệsinh",
        "topicId": 23,
        "topicName": "Sân bay (Airport & Aviation)"
      },
      {
        "word": "Blanket",
        "pos": "n",
        "ipa": "/ˈblæŋ.kɪt/",
        "meaningVi": "Tấmchăn,mền",
        "topicId": 23,
        "topicName": "Sân bay (Airport & Aviation)"
      },
      {
        "word": "Oxygenmask",
        "pos": "n. phr",
        "ipa": "/ˈɒk.sɪ.dʒənˌmɑːsk/",
        "meaningVi": "Mặtnạthởoxy",
        "topicId": 23,
        "topicName": "Sân bay (Airport & Aviation)"
      },
      {
        "word": "Serve",
        "pos": "v",
        "ipa": "/sɜːv/",
        "meaningVi": "Phụcvụ",
        "topicId": 23,
        "topicName": "Sân bay (Airport & Aviation)"
      },
      {
        "word": "Windowseat",
        "pos": "n. phr",
        "ipa": "/ˈwɪn.dəʊˌsiːt/",
        "meaningVi": "Ghếcạnhcửasổ",
        "topicId": 23,
        "topicName": "Sân bay (Airport & Aviation)"
      },
      {
        "word": "Airsick",
        "pos": "adj",
        "ipa": "/ˈeə.sɪk/",
        "meaningVi": "Saymáybay",
        "topicId": 23,
        "topicName": "Sân bay (Airport & Aviation)"
      },
      {
        "word": "Cockpit",
        "pos": "n",
        "ipa": "/ˈkɒk.pɪt/",
        "meaningVi": "Buồnglái",
        "topicId": 23,
        "topicName": "Sân bay (Airport & Aviation)"
      },
      {
        "word": "Fasten",
        "pos": "v",
        "ipa": "/ˈfɑː.sən/",
        "meaningVi": "Thắt,buộc",
        "topicId": 23,
        "topicName": "Sân bay (Airport & Aviation)"
      },
      {
        "word": "Takeoff",
        "pos": "n. phr",
        "ipa": "/teɪkɒf/",
        "meaningVi": "Cấtcánh",
        "topicId": 23,
        "topicName": "Sân bay (Airport & Aviation)"
      },
      {
        "word": "Co-pilot",
        "pos": "n",
        "ipa": "/ˈkəʊˌpaɪ.lət/",
        "meaningVi": "Phicôngphụ",
        "topicId": 23,
        "topicName": "Sân bay (Airport & Aviation)"
      },
      {
        "word": "Assist",
        "pos": "v",
        "ipa": "/əˈsɪst/",
        "meaningVi": "Hỗtrợ,giúpđỡ",
        "topicId": 23,
        "topicName": "Sân bay (Airport & Aviation)"
      },
      {
        "word": "First-class",
        "pos": "adj",
        "ipa": "/ˌfɜːst ˈklɑːs/",
        "meaningVi": "(ghế)hạngnhất",
        "topicId": 23,
        "topicName": "Sân bay (Airport & Aviation)"
      },
      {
        "word": "Conffscate",
        "pos": "v",
        "ipa": "/ˈkɒn.fɪ.skeɪt/",
        "meaningVi": "Tịchthu",
        "topicId": 23,
        "topicName": "Sân bay (Airport & Aviation)"
      },
      {
        "word": "Turnon",
        "pos": "phrasalv",
        "ipa": "/tɜːn ɒn/",
        "meaningVi": "Bật,mở",
        "topicId": 23,
        "topicName": "Sân bay (Airport & Aviation)"
      }
    ]
  },
  {
    "id": 24,
    "name": "Sức khỏe (Health & Wellness)",
    "wordCount": 55,
    "words": [
      {
        "word": "Fever",
        "pos": "n",
        "ipa": "/ˈffːvɚ/",
        "meaningVi": "Sốt",
        "topicId": 24,
        "topicName": "Sức khỏe (Health & Wellness)"
      },
      {
        "word": "Cough",
        "pos": "n",
        "ipa": "/kɔf/",
        "meaningVi": "Ho",
        "topicId": 24,
        "topicName": "Sức khỏe (Health & Wellness)"
      },
      {
        "word": "Hurt",
        "pos": "v",
        "ipa": "/hɜːt/",
        "meaningVi": "Đau",
        "topicId": 24,
        "topicName": "Sức khỏe (Health & Wellness)"
      },
      {
        "word": "Swollen",
        "pos": "adj",
        "ipa": "/ˈswoʊlən/",
        "meaningVi": "Bịsưng",
        "topicId": 24,
        "topicName": "Sức khỏe (Health & Wellness)"
      },
      {
        "word": "Pus",
        "pos": "n",
        "ipa": "/pʌs/",
        "meaningVi": "Mủ",
        "topicId": 24,
        "topicName": "Sức khỏe (Health & Wellness)"
      },
      {
        "word": "Graze",
        "pos": "v",
        "ipa": "/Greiz/",
        "meaningVi": "Trầyxước(da)",
        "topicId": 24,
        "topicName": "Sức khỏe (Health & Wellness)"
      },
      {
        "word": "Headache",
        "pos": "n",
        "ipa": "/ˈhɛdeɪk/",
        "meaningVi": "Đauđầu",
        "topicId": 24,
        "topicName": "Sức khỏe (Health & Wellness)"
      },
      {
        "word": "Insomnia",
        "pos": "n",
        "ipa": "/ɪnˈsɑːmniə/",
        "meaningVi": "Chứngmấtngủ",
        "topicId": 24,
        "topicName": "Sức khỏe (Health & Wellness)"
      },
      {
        "word": "Rash",
        "pos": "n",
        "ipa": "/ræʃ/",
        "meaningVi": "Phátban",
        "topicId": 24,
        "topicName": "Sức khỏe (Health & Wellness)"
      },
      {
        "word": "Blackeye",
        "pos": "n. phr",
        "ipa": "/blækaɪ/",
        "meaningVi": "Thâmmắt",
        "topicId": 24,
        "topicName": "Sức khỏe (Health & Wellness)"
      },
      {
        "word": "Bruise",
        "pos": "n",
        "ipa": "/bruːz/",
        "meaningVi": "Vếtthâm",
        "topicId": 24,
        "topicName": "Sức khỏe (Health & Wellness)"
      },
      {
        "word": "Constipation",
        "pos": "n",
        "ipa": "/ˌkɑːnstɪˈpeɪʃn/",
        "meaningVi": "Táobón",
        "topicId": 24,
        "topicName": "Sức khỏe (Health & Wellness)"
      },
      {
        "word": "Diarrhea",
        "pos": "n",
        "ipa": "/ˌdaɪəˈriːə/",
        "meaningVi": "Tiêuchảy",
        "topicId": 24,
        "topicName": "Sức khỏe (Health & Wellness)"
      },
      {
        "word": "Soreeyes",
        "pos": "n. phr",
        "ipa": "/’so:r ais/",
        "meaningVi": "Đaumắt",
        "topicId": 24,
        "topicName": "Sức khỏe (Health & Wellness)"
      },
      {
        "word": "Runnynose",
        "pos": "n. phr",
        "ipa": "/rʌniɳnəʊz/",
        "meaningVi": "Sổmũi",
        "topicId": 24,
        "topicName": "Sức khỏe (Health & Wellness)"
      },
      {
        "word": "Sniffle",
        "pos": "v",
        "ipa": "/sniflz/",
        "meaningVi": "Sổmũi",
        "topicId": 24,
        "topicName": "Sức khỏe (Health & Wellness)"
      },
      {
        "word": "Sneeze",
        "pos": "v",
        "ipa": "/sni:z/",
        "meaningVi": "Hắthơi",
        "topicId": 24,
        "topicName": "Sức khỏe (Health & Wellness)"
      },
      {
        "word": "Badbreath",
        "pos": "n. phr",
        "ipa": "/bædbreθ/",
        "meaningVi": "Hôimiệng",
        "topicId": 24,
        "topicName": "Sức khỏe (Health & Wellness)"
      },
      {
        "word": "Earache",
        "pos": "n",
        "ipa": "/’iəreik/",
        "meaningVi": "Đautai",
        "topicId": 24,
        "topicName": "Sức khỏe (Health & Wellness)"
      },
      {
        "word": "Nausea",
        "pos": "n",
        "ipa": "/’nɔ:sjə/",
        "meaningVi": "Chứngbuồnnôn",
        "topicId": 24,
        "topicName": "Sức khỏe (Health & Wellness)"
      },
      {
        "word": "Eatingdisorder",
        "pos": "n. phr",
        "ipa": "/ˈiːtɪŋ dɪsˈɔːrdər/",
        "meaningVi": "Rốiloạnănuống",
        "topicId": 24,
        "topicName": "Sức khỏe (Health & Wellness)"
      },
      {
        "word": "Asthma",
        "pos": "n",
        "ipa": "/ˈæzmə/",
        "meaningVi": "Hen,suyễn",
        "topicId": 24,
        "topicName": "Sức khỏe (Health & Wellness)"
      },
      {
        "word": "Backache",
        "pos": "n",
        "ipa": "/ˈbækeɪkbəʊn/",
        "meaningVi": "Bệnhđaulưng",
        "topicId": 24,
        "topicName": "Sức khỏe (Health & Wellness)"
      },
      {
        "word": "Chill",
        "pos": "n",
        "ipa": "/tʃɪl/",
        "meaningVi": "Cảmlạnh",
        "topicId": 24,
        "topicName": "Sức khỏe (Health & Wellness)"
      },
      {
        "word": "Fevervirus",
        "pos": "n. phr",
        "ipa": "/’ff:və‘vaiərəs/",
        "meaningVi": "Sốtsiêuvi",
        "topicId": 24,
        "topicName": "Sức khỏe (Health & Wellness)"
      },
      {
        "word": "Allergy",
        "pos": "n",
        "ipa": "/ˈælərdʒi/",
        "meaningVi": "Dịứng",
        "topicId": 24,
        "topicName": "Sức khỏe (Health & Wellness)"
      },
      {
        "word": "Paralyse",
        "pos": "v",
        "ipa": "/ˈpærəlaɪz/",
        "meaningVi": "Liệt",
        "topicId": 24,
        "topicName": "Sức khỏe (Health & Wellness)"
      },
      {
        "word": "Infected",
        "pos": "v",
        "ipa": "/in’dʤekʃn/",
        "meaningVi": "Nhiễmtrùng",
        "topicId": 24,
        "topicName": "Sức khỏe (Health & Wellness)"
      },
      {
        "word": "Inflamed",
        "pos": "adj",
        "ipa": "/ɪnˈfleɪmd/",
        "meaningVi": "Bịviêm",
        "topicId": 24,
        "topicName": "Sức khỏe (Health & Wellness)"
      },
      {
        "word": "Gout",
        "pos": "n",
        "ipa": "/ɡaʊt/",
        "meaningVi": "BệnhGút",
        "topicId": 24,
        "topicName": "Sức khỏe (Health & Wellness)"
      },
      {
        "word": "Hepatitis",
        "pos": "n",
        "ipa": "/ˌhepəˈtaɪtɪs/",
        "meaningVi": "Viêmgan",
        "topicId": 24,
        "topicName": "Sức khỏe (Health & Wellness)"
      },
      {
        "word": "Lump",
        "pos": "n",
        "ipa": "/lʌmp/",
        "meaningVi": "Ubướu",
        "topicId": 24,
        "topicName": "Sức khỏe (Health & Wellness)"
      },
      {
        "word": "Insectbite",
        "pos": "n. phr",
        "ipa": "/ˈɪn.sekt baɪt/",
        "meaningVi": "Côntrùngđốt",
        "topicId": 24,
        "topicName": "Sức khỏe (Health & Wellness)"
      },
      {
        "word": "Stomachache",
        "pos": "n",
        "ipa": "/ˈstʌmək-eɪk/",
        "meaningVi": "Đaudạdày",
        "topicId": 24,
        "topicName": "Sức khỏe (Health & Wellness)"
      },
      {
        "word": "Toothache",
        "pos": "n",
        "ipa": "/ˈtuːθ.eɪk/",
        "meaningVi": "Đaurăng",
        "topicId": 24,
        "topicName": "Sức khỏe (Health & Wellness)"
      },
      {
        "word": "Highbloodpressure",
        "pos": "n.phr",
        "ipa": "/haɪblʌdˈpreʃ.əʳ/",
        "meaningVi": "Caohuyếtáp",
        "topicId": 24,
        "topicName": "Sức khỏe (Health & Wellness)"
      },
      {
        "word": "Sorethroat",
        "pos": "n. phr",
        "ipa": "/sɔːʳ θrəʊt/",
        "meaningVi": "Viêmhọng",
        "topicId": 24,
        "topicName": "Sức khỏe (Health & Wellness)"
      },
      {
        "word": "Sprain",
        "pos": "n",
        "ipa": "/spreɪn/",
        "meaningVi": "Bonggân",
        "topicId": 24,
        "topicName": "Sức khỏe (Health & Wellness)"
      },
      {
        "word": "Burn",
        "pos": "n",
        "ipa": "/bɜːn/",
        "meaningVi": "Bỏng",
        "topicId": 24,
        "topicName": "Sức khỏe (Health & Wellness)"
      },
      {
        "word": "Malaria",
        "pos": "n",
        "ipa": "/məˈleriə/",
        "meaningVi": "Sốtrét",
        "topicId": 24,
        "topicName": "Sức khỏe (Health & Wellness)"
      },
      {
        "word": "Scabies",
        "pos": "n",
        "ipa": "/ˈskeɪbiːz/",
        "meaningVi": "Bệnhghẻ",
        "topicId": 24,
        "topicName": "Sức khỏe (Health & Wellness)"
      },
      {
        "word": "Smallpox",
        "pos": "n",
        "ipa": "/ˈsmɔːlpɑːks/",
        "meaningVi": "Bệnhđậumùa",
        "topicId": 24,
        "topicName": "Sức khỏe (Health & Wellness)"
      },
      {
        "word": "Heartattack",
        "pos": "n. phr",
        "ipa": "/hɑːrt əˈtæk/",
        "meaningVi": "Nhồimáucơtim",
        "topicId": 24,
        "topicName": "Sức khỏe (Health & Wellness)"
      },
      {
        "word": "Tuberculosis",
        "pos": "n",
        "ipa": "/tuːˌbɜːrkjəˈloʊsɪs/",
        "meaningVi": "Bệnhlao",
        "topicId": 24,
        "topicName": "Sức khỏe (Health & Wellness)"
      },
      {
        "word": "Diabetes",
        "pos": "n",
        "ipa": "/ˌdaiə’bi:tiz/",
        "meaningVi": "Bệnhtiểuđường",
        "topicId": 24,
        "topicName": "Sức khỏe (Health & Wellness)"
      },
      {
        "word": "Cancer",
        "pos": "n",
        "ipa": "/ˈkænsər/",
        "meaningVi": "Bệnhungthư",
        "topicId": 24,
        "topicName": "Sức khỏe (Health & Wellness)"
      },
      {
        "word": "Pneumonia",
        "pos": "n",
        "ipa": "/nuːˈmoʊniə/",
        "meaningVi": "Viêmphổi",
        "topicId": 24,
        "topicName": "Sức khỏe (Health & Wellness)"
      },
      {
        "word": "Chickenpox",
        "pos": "n. phr",
        "ipa": "/ˈtʃɪkɪn pɑːks/",
        "meaningVi": "Bệnhthủyđậu",
        "topicId": 24,
        "topicName": "Sức khỏe (Health & Wellness)"
      },
      {
        "word": "Depression",
        "pos": "n",
        "ipa": "/dɪˈpreʃn/",
        "meaningVi": "Trầmcảm",
        "topicId": 24,
        "topicName": "Sức khỏe (Health & Wellness)"
      },
      {
        "word": "Lowbloodpressure",
        "pos": "n.phr",
        "ipa": "/loʊblʌdˈpreʃər/",
        "meaningVi": "Huyếtápthấp",
        "topicId": 24,
        "topicName": "Sức khỏe (Health & Wellness)"
      },
      {
        "word": "Hypertension",
        "pos": "n",
        "ipa": "/ˌhaɪ.pəˈten.ʃən/",
        "meaningVi": "Huyếtápcao",
        "topicId": 24,
        "topicName": "Sức khỏe (Health & Wellness)"
      },
      {
        "word": "Measles",
        "pos": "n",
        "ipa": "/ˈmiːzlz/",
        "meaningVi": "Bệnhsởi",
        "topicId": 24,
        "topicName": "Sức khỏe (Health & Wellness)"
      },
      {
        "word": "Migraine",
        "pos": "n",
        "ipa": "/ˈmaɪɡreɪn/",
        "meaningVi": "Bệnhđaunửađầu",
        "topicId": 24,
        "topicName": "Sức khỏe (Health & Wellness)"
      },
      {
        "word": "Mumps",
        "pos": "n",
        "ipa": "/mʌmps/",
        "meaningVi": "Bệnhquaibị",
        "topicId": 24,
        "topicName": "Sức khỏe (Health & Wellness)"
      },
      {
        "word": "Rheumatism",
        "pos": "n",
        "ipa": "/ˈruːmətɪzəm/",
        "meaningVi": "Bệnhthấpkhớp",
        "topicId": 24,
        "topicName": "Sức khỏe (Health & Wellness)"
      }
    ]
  },
  {
    "id": 25,
    "name": "Rau, củ, quả (Vegetables & Produce)",
    "wordCount": 26,
    "words": [
      {
        "word": "Tomato",
        "pos": "n",
        "ipa": "/təˈmɑːtəʊ/",
        "meaningVi": "Càchua",
        "topicId": 25,
        "topicName": "Rau, củ, quả (Vegetables & Produce)"
      },
      {
        "word": "Spinach",
        "pos": "n",
        "ipa": "/ˈspɪnɪtʃ/",
        "meaningVi": "Rauchânvịt",
        "topicId": 25,
        "topicName": "Rau, củ, quả (Vegetables & Produce)"
      },
      {
        "word": "Water Spinach",
        "pos": "n. phr",
        "ipa": "/ˈwɔːtə(r)ˈspɪnɪtʃ/",
        "meaningVi": "RauMuống",
        "topicId": 25,
        "topicName": "Rau, củ, quả (Vegetables & Produce)"
      },
      {
        "word": "Thai Basil",
        "pos": "n. phr",
        "ipa": "/taɪˈbæz.əl/",
        "meaningVi": "HúngQuế",
        "topicId": 25,
        "topicName": "Rau, củ, quả (Vegetables & Produce)"
      },
      {
        "word": "Eggplant",
        "pos": "n",
        "ipa": "/ˈeɡplɑːnt/",
        "meaningVi": "Càtím",
        "topicId": 25,
        "topicName": "Rau, củ, quả (Vegetables & Produce)"
      },
      {
        "word": "Beet",
        "pos": "n",
        "ipa": "/biːt/",
        "meaningVi": "Củcảiđường",
        "topicId": 25,
        "topicName": "Rau, củ, quả (Vegetables & Produce)"
      },
      {
        "word": "Pepper",
        "pos": "n",
        "ipa": "/ˈpepə(r)/",
        "meaningVi": "Ớt",
        "topicId": 25,
        "topicName": "Rau, củ, quả (Vegetables & Produce)"
      },
      {
        "word": "Cauliflower",
        "pos": "n",
        "ipa": "/’kɔliflauə/",
        "meaningVi": "Súplơ",
        "topicId": 25,
        "topicName": "Rau, củ, quả (Vegetables & Produce)"
      },
      {
        "word": "Cilantro",
        "pos": "n",
        "ipa": "/sɪˈlæn.trəʊ/",
        "meaningVi": "Raumùi",
        "topicId": 25,
        "topicName": "Rau, củ, quả (Vegetables & Produce)"
      },
      {
        "word": "Marrow",
        "pos": "n",
        "ipa": "/ˈmærəʊ/",
        "meaningVi": "Bíngô",
        "topicId": 25,
        "topicName": "Rau, củ, quả (Vegetables & Produce)"
      },
      {
        "word": "Fish Mint",
        "pos": "n. phr",
        "ipa": "/ˈfɪʃ mɪnt/",
        "meaningVi": "DiếpCá",
        "topicId": 25,
        "topicName": "Rau, củ, quả (Vegetables & Produce)"
      },
      {
        "word": "Rice Paddy",
        "pos": "n. phr",
        "ipa": "/ˈraɪs ˌpæd.i/",
        "meaningVi": "Ngòôm",
        "topicId": 25,
        "topicName": "Rau, củ, quả (Vegetables & Produce)"
      },
      {
        "word": "Batata",
        "pos": "n",
        "ipa": "/bæ’tɑ:tə/",
        "meaningVi": "Khoailang",
        "topicId": 25,
        "topicName": "Rau, củ, quả (Vegetables & Produce)"
      },
      {
        "word": "Asparagus",
        "pos": "n",
        "ipa": "/əˈspærəɡəs/",
        "meaningVi": "Măngtây",
        "topicId": 25,
        "topicName": "Rau, củ, quả (Vegetables & Produce)"
      },
      {
        "word": "Mustard Leaves",
        "pos": "n. phr",
        "ipa": "/ˈmʌstədli:vz/",
        "meaningVi": "Cảibẹxanh",
        "topicId": 25,
        "topicName": "Rau, củ, quả (Vegetables & Produce)"
      },
      {
        "word": "Pumpkinbuds",
        "pos": "n. phr",
        "ipa": "/ˈpʌmp.kɪnbʌdz/",
        "meaningVi": "Bôngbí",
        "topicId": 25,
        "topicName": "Rau, củ, quả (Vegetables & Produce)"
      },
      {
        "word": "Pumpkin",
        "pos": "n",
        "ipa": "/ˈpʌmpkɪn/",
        "meaningVi": "Bíđỏ",
        "topicId": 25,
        "topicName": "Rau, củ, quả (Vegetables & Produce)"
      },
      {
        "word": "Corn",
        "pos": "n",
        "ipa": "/kɔːn/",
        "meaningVi": "Ngô",
        "topicId": 25,
        "topicName": "Rau, củ, quả (Vegetables & Produce)"
      },
      {
        "word": "Pepper-elder",
        "pos": "n. phr",
        "ipa": "/ˈpepəˈeldə(r)/",
        "meaningVi": "RaucàngCua",
        "topicId": 25,
        "topicName": "Rau, củ, quả (Vegetables & Produce)"
      },
      {
        "word": "Onion",
        "pos": "n",
        "ipa": "/’ʌniən/",
        "meaningVi": "Củhành",
        "topicId": 25,
        "topicName": "Rau, củ, quả (Vegetables & Produce)"
      },
      {
        "word": "Cress",
        "pos": "n",
        "ipa": "/kres/",
        "meaningVi": "Raucảixoong",
        "topicId": 25,
        "topicName": "Rau, củ, quả (Vegetables & Produce)"
      },
      {
        "word": "Celery",
        "pos": "n",
        "ipa": "/ˈseləri/",
        "meaningVi": "Cầntây",
        "topicId": 25,
        "topicName": "Rau, củ, quả (Vegetables & Produce)"
      },
      {
        "word": "Potato",
        "pos": "n",
        "ipa": "/pəˈteɪtəʊ/",
        "meaningVi": "Khoaitây",
        "topicId": 25,
        "topicName": "Rau, củ, quả (Vegetables & Produce)"
      },
      {
        "word": "Carrot",
        "pos": "n",
        "ipa": "/ˈkærət/",
        "meaningVi": "Càrốt",
        "topicId": 25,
        "topicName": "Rau, củ, quả (Vegetables & Produce)"
      },
      {
        "word": "Artichoke",
        "pos": "n",
        "ipa": "/’ɑ:tit∫ouk/",
        "meaningVi": "Câyatiso",
        "topicId": 25,
        "topicName": "Rau, củ, quả (Vegetables & Produce)"
      },
      {
        "word": "Beetroot",
        "pos": "n",
        "ipa": "/’bi:tru:t/",
        "meaningVi": "Củdền",
        "topicId": 25,
        "topicName": "Rau, củ, quả (Vegetables & Produce)"
      }
    ]
  },
  {
    "id": 26,
    "name": "Thời gian (Time)",
    "wordCount": 16,
    "words": [
      {
        "word": "Second",
        "pos": "n",
        "ipa": "/ˈsek.ənd/",
        "meaningVi": "Giây",
        "topicId": 26,
        "topicName": "Thời gian (Time)"
      },
      {
        "word": "Minute",
        "pos": "n",
        "ipa": "/ˈmɪn.ɪt/",
        "meaningVi": "Phút",
        "topicId": 26,
        "topicName": "Thời gian (Time)"
      },
      {
        "word": "Hour",
        "pos": "n",
        "ipa": "/aʊr/",
        "meaningVi": "Tiếng",
        "topicId": 26,
        "topicName": "Thời gian (Time)"
      },
      {
        "word": "Week",
        "pos": "n",
        "ipa": "/wiːk/",
        "meaningVi": "Tuần",
        "topicId": 26,
        "topicName": "Thời gian (Time)"
      },
      {
        "word": "Decade",
        "pos": "n",
        "ipa": "/dekˈeɪd/",
        "meaningVi": "Thậpniên",
        "topicId": 26,
        "topicName": "Thời gian (Time)"
      },
      {
        "word": "Century",
        "pos": "n",
        "ipa": "/ˈsen.tʃər.i/",
        "meaningVi": "Thếkỷ",
        "topicId": 26,
        "topicName": "Thời gian (Time)"
      },
      {
        "word": "Weekend",
        "pos": "n",
        "ipa": "/ˈwiːend/",
        "meaningVi": "Cuốituần",
        "topicId": 26,
        "topicName": "Thời gian (Time)"
      },
      {
        "word": "Month",
        "pos": "n",
        "ipa": "/mʌnθ/",
        "meaningVi": "Tháng",
        "topicId": 26,
        "topicName": "Thời gian (Time)"
      },
      {
        "word": "Year",
        "pos": "n",
        "ipa": "/jɪr/",
        "meaningVi": "Năm",
        "topicId": 26,
        "topicName": "Thời gian (Time)"
      },
      {
        "word": "Millennium",
        "pos": "n",
        "ipa": "/mɪˈlen.i.əm/",
        "meaningVi": "Thiênniênkỷ",
        "topicId": 26,
        "topicName": "Thời gian (Time)"
      },
      {
        "word": "Morning",
        "pos": "n",
        "ipa": "/ˈmɔːnɪŋ/",
        "meaningVi": "Buổisáng",
        "topicId": 26,
        "topicName": "Thời gian (Time)"
      },
      {
        "word": "Afternoon",
        "pos": "n",
        "ipa": "/ˌæf.tɚˈnuːn/",
        "meaningVi": "Buổichiều",
        "topicId": 26,
        "topicName": "Thời gian (Time)"
      },
      {
        "word": "Evening",
        "pos": "n",
        "ipa": "/ˈiːnɪŋ/",
        "meaningVi": "Buổitối",
        "topicId": 26,
        "topicName": "Thời gian (Time)"
      },
      {
        "word": "Midnight",
        "pos": "n",
        "ipa": "/ˈmɪd.naɪt/",
        "meaningVi": "Nửađêm",
        "topicId": 26,
        "topicName": "Thời gian (Time)"
      },
      {
        "word": "Dusk",
        "pos": "n",
        "ipa": "/dʌsk/",
        "meaningVi": "Hoànghôn",
        "topicId": 26,
        "topicName": "Thời gian (Time)"
      },
      {
        "word": "Dawn",
        "pos": "n",
        "ipa": "/dɑːn/",
        "meaningVi": "Bìnhminh",
        "topicId": 26,
        "topicName": "Thời gian (Time)"
      }
    ]
  },
  {
    "id": 27,
    "name": "Giao thông (Traffic & Transportation)",
    "wordCount": 48,
    "words": [
      {
        "word": "Road",
        "pos": "n",
        "ipa": "/roʊd/",
        "meaningVi": "Đường",
        "topicId": 27,
        "topicName": "Giao thông (Traffic & Transportation)"
      },
      {
        "word": "Traffc",
        "pos": "n",
        "ipa": "/ˈtræfɪk/",
        "meaningVi": "Giaothông",
        "topicId": 27,
        "topicName": "Giao thông (Traffic & Transportation)"
      },
      {
        "word": "Vehicle",
        "pos": "n",
        "ipa": "/ˈviːəkl/",
        "meaningVi": "Phươngtiện",
        "topicId": 27,
        "topicName": "Giao thông (Traffic & Transportation)"
      },
      {
        "word": "Roadside",
        "pos": "n",
        "ipa": "/ˈroʊdsaɪd/",
        "meaningVi": "Lềđường",
        "topicId": 27,
        "topicName": "Giao thông (Traffic & Transportation)"
      },
      {
        "word": "Carhire",
        "pos": "n. phr",
        "ipa": "/kɑːr ˈhaɪər/",
        "meaningVi": "Việcthuêxeôtô",
        "topicId": 27,
        "topicName": "Giao thông (Traffic & Transportation)"
      },
      {
        "word": "Ringroad",
        "pos": "n. phr",
        "ipa": "/rɪŋ roʊd/",
        "meaningVi": "Đườngvànhđai",
        "topicId": 27,
        "topicName": "Giao thông (Traffic & Transportation)"
      },
      {
        "word": "Petrolstation",
        "pos": "n. phr",
        "ipa": "/ˈpetrəlˈsteɪʃn/",
        "meaningVi": "Trạmxăng",
        "topicId": 27,
        "topicName": "Giao thông (Traffic & Transportation)"
      },
      {
        "word": "Kerb",
        "pos": "n",
        "ipa": "/kɜːrb/",
        "meaningVi": "Lềđường",
        "topicId": 27,
        "topicName": "Giao thông (Traffic & Transportation)"
      },
      {
        "word": "Roadsign",
        "pos": "n. phr",
        "ipa": "/roʊdsaɪn/",
        "meaningVi": "Biểnbáogiao",
        "topicId": 27,
        "topicName": "Giao thông (Traffic & Transportation)"
      },
      {
        "word": "Turning",
        "pos": "n",
        "ipa": "/ˈtɜːrnɪŋ/",
        "meaningVi": "Chỗrẽ,ngãrẽ",
        "topicId": 27,
        "topicName": "Giao thông (Traffic & Transportation)"
      },
      {
        "word": "Fork",
        "pos": "n",
        "ipa": "/fɔːrk/",
        "meaningVi": "Ngãba",
        "topicId": 27,
        "topicName": "Giao thông (Traffic & Transportation)"
      },
      {
        "word": "Toll",
        "pos": "n",
        "ipa": "/toʊl/",
        "meaningVi": "Lệphíquađường,",
        "topicId": 27,
        "topicName": "Giao thông (Traffic & Transportation)"
      },
      {
        "word": "Toll road",
        "pos": "n. phr",
        "ipa": "/toʊlroʊd/",
        "meaningVi": "Đườngcóthuphí",
        "topicId": 27,
        "topicName": "Giao thông (Traffic & Transportation)"
      },
      {
        "word": "Motorway",
        "pos": "n",
        "ipa": "/ˈmoʊtərweɪ/",
        "meaningVi": "Xalộ",
        "topicId": 27,
        "topicName": "Giao thông (Traffic & Transportation)"
      },
      {
        "word": "Hardshoulder",
        "pos": "n. phr",
        "ipa": "/hɑːrdˈʃoʊldə/",
        "meaningVi": "Vạtđấtcạnhxalộ",
        "topicId": 27,
        "topicName": "Giao thông (Traffic & Transportation)"
      },
      {
        "word": "Dualcarriageway",
        "pos": "n. phr",
        "ipa": "/duːəl ˈkærɪdʒweɪ/",
        "meaningVi": "Xalộhaichiều",
        "topicId": 27,
        "topicName": "Giao thông (Traffic & Transportation)"
      },
      {
        "word": "One-waystreet",
        "pos": "n. phr",
        "ipa": "/wʌnweɪstriːt/",
        "meaningVi": "Đườngmộtchiều",
        "topicId": 27,
        "topicName": "Giao thông (Traffic & Transportation)"
      },
      {
        "word": "T-junction",
        "pos": "n",
        "ipa": "/tiːˈdʒʌŋkʃn/",
        "meaningVi": "Ngãba",
        "topicId": 27,
        "topicName": "Giao thông (Traffic & Transportation)"
      },
      {
        "word": "Roundabout",
        "pos": "n",
        "ipa": "/ˈraʊndəbaʊt/",
        "meaningVi": "Bùngbinh",
        "topicId": 27,
        "topicName": "Giao thông (Traffic & Transportation)"
      },
      {
        "word": "Accident",
        "pos": "n",
        "ipa": "/ˈæksɪdənt/",
        "meaningVi": "Tainạn",
        "topicId": 27,
        "topicName": "Giao thông (Traffic & Transportation)"
      },
      {
        "word": "Breathalyser",
        "pos": "n",
        "ipa": "/ˈbreθəlaɪzər/",
        "meaningVi": "Thiếtbịkiểmtrađộ",
        "topicId": 27,
        "topicName": "Giao thông (Traffic & Transportation)"
      },
      {
        "word": "Traffcwarden",
        "pos": "n. phr",
        "ipa": "/ˈtræfɪkˈwɔːrdn/",
        "meaningVi": "Nhânviênkiểm",
        "topicId": 27,
        "topicName": "Giao thông (Traffic & Transportation)"
      },
      {
        "word": "Parking-meter",
        "pos": "n",
        "ipa": "/ˈpɑːrkɪŋˈmiːtər/",
        "meaningVi": "Đồnghồđỗxe",
        "topicId": 27,
        "topicName": "Giao thông (Traffic & Transportation)"
      },
      {
        "word": "Carpark",
        "pos": "n. phr",
        "ipa": "/kɑːr pɑːrk/",
        "meaningVi": "Bãiđỗxe",
        "topicId": 27,
        "topicName": "Giao thông (Traffic & Transportation)"
      },
      {
        "word": "Parkingspace",
        "pos": "n. phr",
        "ipa": "/ˈpɑːrkɪŋspeɪs/",
        "meaningVi": "Chỗđỗxe",
        "topicId": 27,
        "topicName": "Giao thông (Traffic & Transportation)"
      },
      {
        "word": "Parkingticket",
        "pos": "n. phr",
        "ipa": "/ˈpɑːrkɪŋˈtɪkɪt/",
        "meaningVi": "Véđỗxe",
        "topicId": 27,
        "topicName": "Giao thông (Traffic & Transportation)"
      },
      {
        "word": "Drivinglicence",
        "pos": "n. phr",
        "ipa": "/ˈdraɪvɪŋˈlaɪsns/",
        "meaningVi": "Bằngláixe",
        "topicId": 27,
        "topicName": "Giao thông (Traffic & Transportation)"
      },
      {
        "word": "Reversegear",
        "pos": "n. phr",
        "ipa": "/rɪˈvɜːrs ɡɪr/",
        "meaningVi": "Sốlùi(xemáy)",
        "topicId": 27,
        "topicName": "Giao thông (Traffic & Transportation)"
      },
      {
        "word": "Learnerdriver",
        "pos": "n. phr",
        "ipa": "/ˈlɜːrnər ˈdraɪvər/",
        "meaningVi": "Ngườihọcláixe",
        "topicId": 27,
        "topicName": "Giao thông (Traffic & Transportation)"
      },
      {
        "word": "Passenger",
        "pos": "n",
        "ipa": "/ˈpæsɪndʒər/",
        "meaningVi": "Hànhkhách",
        "topicId": 27,
        "topicName": "Giao thông (Traffic & Transportation)"
      },
      {
        "word": "Stall",
        "pos": "v",
        "ipa": "/stɔːl/",
        "meaningVi": "Làmchếtmáy",
        "topicId": 27,
        "topicName": "Giao thông (Traffic & Transportation)"
      },
      {
        "word": "Tyrepressure",
        "pos": "n. phr",
        "ipa": "/ˈtaɪər ˈpreʃər/",
        "meaningVi": "Ápsuấtlốpxe",
        "topicId": 27,
        "topicName": "Giao thông (Traffic & Transportation)"
      },
      {
        "word": "Traffclight",
        "pos": "n. phr",
        "ipa": "/ˈtræfɪklaɪt/",
        "meaningVi": "Đèngiaothông",
        "topicId": 27,
        "topicName": "Giao thông (Traffic & Transportation)"
      },
      {
        "word": "Speedlimit",
        "pos": "n. phr",
        "ipa": "/spiːdˈlɪmɪt/",
        "meaningVi": "Giớihạntốcđộ",
        "topicId": 27,
        "topicName": "Giao thông (Traffic & Transportation)"
      },
      {
        "word": "Speedingffne",
        "pos": "n. phr",
        "ipa": "/ˈspiːdɪŋ faɪn/",
        "meaningVi": "Phạttốcđộ",
        "topicId": 27,
        "topicName": "Giao thông (Traffic & Transportation)"
      },
      {
        "word": "Levelcrossing",
        "pos": "n. phr",
        "ipa": "/ˈlevl ˈkrɔːsɪŋ/",
        "meaningVi": "Chỗchắntàu",
        "topicId": 27,
        "topicName": "Giao thông (Traffic & Transportation)"
      },
      {
        "word": "Jumpleads",
        "pos": "n. phr",
        "ipa": "/dʒʌmpliːdz/",
        "meaningVi": "Dâysạcđiện",
        "topicId": 27,
        "topicName": "Giao thông (Traffic & Transportation)"
      },
      {
        "word": "Oil",
        "pos": "n",
        "ipa": "/ɔɪl/",
        "meaningVi": "Dầu",
        "topicId": 27,
        "topicName": "Giao thông (Traffic & Transportation)"
      },
      {
        "word": "Diesel",
        "pos": "n",
        "ipa": "/ˈdiːzl/",
        "meaningVi": "Dầudiesel",
        "topicId": 27,
        "topicName": "Giao thông (Traffic & Transportation)"
      },
      {
        "word": "Petrol",
        "pos": "n",
        "ipa": "/ˈpetrəl/",
        "meaningVi": "Xăng",
        "topicId": 27,
        "topicName": "Giao thông (Traffic & Transportation)"
      },
      {
        "word": "Unleaded",
        "pos": "adj",
        "ipa": "/ˌʌnˈledɪd/",
        "meaningVi": "Khôngchì",
        "topicId": 27,
        "topicName": "Giao thông (Traffic & Transportation)"
      },
      {
        "word": "Petrolpump",
        "pos": "n. phr",
        "ipa": "/ˈpetrəlpʌmp/",
        "meaningVi": "Bơmxăng",
        "topicId": 27,
        "topicName": "Giao thông (Traffic & Transportation)"
      },
      {
        "word": "Driver",
        "pos": "n",
        "ipa": "/ˈdraɪvər/",
        "meaningVi": "Tàixế",
        "topicId": 27,
        "topicName": "Giao thông (Traffic & Transportation)"
      },
      {
        "word": "Drive",
        "pos": "n. phr",
        "ipa": "/draɪv/",
        "meaningVi": "Láixe",
        "topicId": 27,
        "topicName": "Giao thông (Traffic & Transportation)"
      },
      {
        "word": "Changegear",
        "pos": "n. phr",
        "ipa": "/tʃeɪndʒɡɪr/",
        "meaningVi": "Chuyểnsố",
        "topicId": 27,
        "topicName": "Giao thông (Traffic & Transportation)"
      },
      {
        "word": "Jack",
        "pos": "n",
        "ipa": "/dʒæk/",
        "meaningVi": "Đònbẩy,palăng",
        "topicId": 27,
        "topicName": "Giao thông (Traffic & Transportation)"
      },
      {
        "word": "Flattyre",
        "pos": "n. phr",
        "ipa": "/flætˈtaɪər/",
        "meaningVi": "Lốpxìhơi",
        "topicId": 27,
        "topicName": "Giao thông (Traffic & Transportation)"
      },
      {
        "word": "Puncture",
        "pos": "n",
        "ipa": "/ˈpʌŋktʃər/",
        "meaningVi": "Sựthủngxăm",
        "topicId": 27,
        "topicName": "Giao thông (Traffic & Transportation)"
      }
    ]
  },
  {
    "id": 28,
    "name": "Cảm xúc & Cảm giác (Feelings & Emotions)",
    "wordCount": 15,
    "words": [
      {
        "word": "Angry",
        "pos": "adj",
        "ipa": "/ˈæŋɡri/",
        "meaningVi": "Tứcgiận",
        "topicId": 28,
        "topicName": "Cảm xúc & Cảm giác (Feelings & Emotions)"
      },
      {
        "word": "Sleepy",
        "pos": "adj",
        "ipa": "/ˈsliːpi/",
        "meaningVi": "Buồnngủ",
        "topicId": 28,
        "topicName": "Cảm xúc & Cảm giác (Feelings & Emotions)"
      },
      {
        "word": "Grateful",
        "pos": "adj",
        "ipa": "/ˈɡreɪtfl/",
        "meaningVi": "Biếtơn",
        "topicId": 28,
        "topicName": "Cảm xúc & Cảm giác (Feelings & Emotions)"
      },
      {
        "word": "Scared",
        "pos": "adj",
        "ipa": "/skeəd/",
        "meaningVi": "-/skerd/ Sợhãi",
        "topicId": 28,
        "topicName": "Cảm xúc & Cảm giác (Feelings & Emotions)"
      },
      {
        "word": "Embarrassed",
        "pos": "adj",
        "ipa": "/ɪmˈbærəst/",
        "meaningVi": "Bốirối,xấuhổ",
        "topicId": 28,
        "topicName": "Cảm xúc & Cảm giác (Feelings & Emotions)"
      },
      {
        "word": "Confused",
        "pos": "adj",
        "ipa": "/kənˈfjuːzd/",
        "meaningVi": "Lúngtúng,bốirối",
        "topicId": 28,
        "topicName": "Cảm xúc & Cảm giác (Feelings & Emotions)"
      },
      {
        "word": "Sad",
        "pos": "adj",
        "ipa": "/sæd/",
        "meaningVi": "Buồnrầu",
        "topicId": 28,
        "topicName": "Cảm xúc & Cảm giác (Feelings & Emotions)"
      },
      {
        "word": "Hungry",
        "pos": "adj",
        "ipa": "/ˈhʌŋɡri/",
        "meaningVi": "Đóibụng",
        "topicId": 28,
        "topicName": "Cảm xúc & Cảm giác (Feelings & Emotions)"
      },
      {
        "word": "Full",
        "pos": "adj",
        "ipa": "/fʊl/",
        "meaningVi": "No",
        "topicId": 28,
        "topicName": "Cảm xúc & Cảm giác (Feelings & Emotions)"
      },
      {
        "word": "Happy",
        "pos": "adj",
        "ipa": "/ˈhæpi/",
        "meaningVi": "Vui, hạnhphúc",
        "topicId": 28,
        "topicName": "Cảm xúc & Cảm giác (Feelings & Emotions)"
      },
      {
        "word": "Jealous",
        "pos": "adj",
        "ipa": "/ˈdʒeləs/",
        "meaningVi": "Ghen,ghentuông",
        "topicId": 28,
        "topicName": "Cảm xúc & Cảm giác (Feelings & Emotions)"
      },
      {
        "word": "Thirsty",
        "pos": "adj",
        "ipa": "/ˈθɜːsti/",
        "meaningVi": "- /ˈθɜːrsti/ Khátnước",
        "topicId": 28,
        "topicName": "Cảm xúc & Cảm giác (Feelings & Emotions)"
      },
      {
        "word": "Tense",
        "pos": "adj",
        "ipa": "/tens/",
        "meaningVi": "Căngthẳng",
        "topicId": 28,
        "topicName": "Cảm xúc & Cảm giác (Feelings & Emotions)"
      },
      {
        "word": "Tired",
        "pos": "adj",
        "ipa": "/ˈtaɪəd/",
        "meaningVi": "-/ˈtaɪərd/ Mệtmỏi",
        "topicId": 28,
        "topicName": "Cảm xúc & Cảm giác (Feelings & Emotions)"
      },
      {
        "word": "Bored",
        "pos": "v",
        "ipa": "/bɔːd/",
        "meaningVi": "-/bɔːrd/ Chánnản",
        "topicId": 28,
        "topicName": "Cảm xúc & Cảm giác (Feelings & Emotions)"
      }
    ]
  },
  {
    "id": 29,
    "name": "Tính cách (Personality traits)",
    "wordCount": 38,
    "words": [
      {
        "word": "Reliable",
        "pos": "adj",
        "ipa": "/rɪˈlaɪəbəl/",
        "meaningVi": "Đángtincậy",
        "topicId": 29,
        "topicName": "Tính cách (Personality traits)"
      },
      {
        "word": "Rude",
        "pos": "adj",
        "ipa": "/ruːd/",
        "meaningVi": "Thôlỗ",
        "topicId": 29,
        "topicName": "Tính cách (Personality traits)"
      },
      {
        "word": "Selffsh",
        "pos": "adj",
        "ipa": "/ˈsɛlfɪʃ/",
        "meaningVi": "Íchkỷ",
        "topicId": 29,
        "topicName": "Tính cách (Personality traits)"
      },
      {
        "word": "Sensitive",
        "pos": "adj",
        "ipa": "/ˈsɛnsɪtɪv/",
        "meaningVi": "Nhạycảm",
        "topicId": 29,
        "topicName": "Tính cách (Personality traits)"
      },
      {
        "word": "Stubborn",
        "pos": "adj",
        "ipa": "/ˈstʌb.ərn/",
        "meaningVi": "Bướngbỉnh",
        "topicId": 29,
        "topicName": "Tính cách (Personality traits)"
      },
      {
        "word": "Patient",
        "pos": "adj",
        "ipa": "/ˈpeɪʃənt/",
        "meaningVi": "Kiênnhẫn",
        "topicId": 29,
        "topicName": "Tính cách (Personality traits)"
      },
      {
        "word": "Humorous",
        "pos": "adj",
        "ipa": "/ˈhjuː.mər.əs/",
        "meaningVi": "Hàihước",
        "topicId": 29,
        "topicName": "Tính cách (Personality traits)"
      },
      {
        "word": "Sincere",
        "pos": "adj",
        "ipa": "/sɪnˈsɪr/",
        "meaningVi": "Chânthành",
        "topicId": 29,
        "topicName": "Tính cách (Personality traits)"
      },
      {
        "word": "Generous",
        "pos": "adj",
        "ipa": "/ˈʤɛnərəs/",
        "meaningVi": "Hàophóng",
        "topicId": 29,
        "topicName": "Tính cách (Personality traits)"
      },
      {
        "word": "Honest",
        "pos": "adj",
        "ipa": "/ˈɒn.ɪst/",
        "meaningVi": "Trungthực",
        "topicId": 29,
        "topicName": "Tính cách (Personality traits)"
      },
      {
        "word": "Kind",
        "pos": "adj",
        "ipa": "/kaɪnd/",
        "meaningVi": "Tửtế,tốtbụng",
        "topicId": 29,
        "topicName": "Tính cách (Personality traits)"
      },
      {
        "word": "Loyal",
        "pos": "adj",
        "ipa": "/lɔɪəl/",
        "meaningVi": "Trungthành",
        "topicId": 29,
        "topicName": "Tính cách (Personality traits)"
      },
      {
        "word": "Modest",
        "pos": "adj",
        "ipa": "/ˈmɒd.ɪst/",
        "meaningVi": "Khiêmtốn",
        "topicId": 29,
        "topicName": "Tính cách (Personality traits)"
      },
      {
        "word": "Nasty",
        "pos": "adj",
        "ipa": "/ˈnæsti/",
        "meaningVi": "Khóchịu",
        "topicId": 29,
        "topicName": "Tính cách (Personality traits)"
      },
      {
        "word": "Shy",
        "pos": "adj",
        "ipa": "/ʃaɪ/",
        "meaningVi": "Nhútnhát",
        "topicId": 29,
        "topicName": "Tính cách (Personality traits)"
      },
      {
        "word": "Sociable",
        "pos": "adj",
        "ipa": "/ˈsoʊʃəbəl/",
        "meaningVi": "Hòađồng",
        "topicId": 29,
        "topicName": "Tính cách (Personality traits)"
      },
      {
        "word": "Reserved",
        "pos": "adj",
        "ipa": "/ˈθɔːt.fəl/",
        "meaningVi": "Rụtrè,dèdặt",
        "topicId": 29,
        "topicName": "Tính cách (Personality traits)"
      },
      {
        "word": "Conffdent",
        "pos": "adj",
        "ipa": "/ˈkɑnfədənt/",
        "meaningVi": "Tựtin",
        "topicId": 29,
        "topicName": "Tính cách (Personality traits)"
      },
      {
        "word": "Pleasant",
        "pos": "adj",
        "ipa": "/ˈplɛzənt/",
        "meaningVi": "Lịchsự,hòanhã",
        "topicId": 29,
        "topicName": "Tính cách (Personality traits)"
      },
      {
        "word": "Clever",
        "pos": "adj",
        "ipa": "/ˈklɛvər/",
        "meaningVi": "Thôngminh",
        "topicId": 29,
        "topicName": "Tính cách (Personality traits)"
      },
      {
        "word": "Thoughtful",
        "pos": "adj",
        "ipa": "/ˈθɔːt.fəl/",
        "meaningVi": "Âncần,chuđáo",
        "topicId": 29,
        "topicName": "Tính cách (Personality traits)"
      },
      {
        "word": "Proud",
        "pos": "adj",
        "ipa": "/praʊd/",
        "meaningVi": "Tựtrọng",
        "topicId": 29,
        "topicName": "Tính cách (Personality traits)"
      },
      {
        "word": "Lazy",
        "pos": "adj",
        "ipa": "/ˈleɪzi/",
        "meaningVi": "Lườibiếng",
        "topicId": 29,
        "topicName": "Tính cách (Personality traits)"
      },
      {
        "word": "Crazy",
        "pos": "adj",
        "ipa": "/ˈkreɪzi/",
        "meaningVi": "Ngungốc",
        "topicId": 29,
        "topicName": "Tính cách (Personality traits)"
      },
      {
        "word": "Silly",
        "pos": "adj",
        "ipa": "/ˈsɪli/",
        "meaningVi": "Ngốcnghếch",
        "topicId": 29,
        "topicName": "Tính cách (Personality traits)"
      },
      {
        "word": "Bossy",
        "pos": "adj",
        "ipa": "/ˈbɒs.i/",
        "meaningVi": "Hốnghách",
        "topicId": 29,
        "topicName": "Tính cách (Personality traits)"
      },
      {
        "word": "Gossip",
        "pos": "n",
        "ipa": "/ˈɡɒs.ɪp/",
        "meaningVi": "Ngườimáchlẻo",
        "topicId": 29,
        "topicName": "Tính cách (Personality traits)"
      },
      {
        "word": "Extrovert",
        "pos": "n",
        "ipa": "/ˈɛk.strə.vɜːt/",
        "meaningVi": "Ngườihướngngoại",
        "topicId": 29,
        "topicName": "Tính cách (Personality traits)"
      },
      {
        "word": "Coward",
        "pos": "n",
        "ipa": "/kaʊərd/",
        "meaningVi": "Ngườinhátgan",
        "topicId": 29,
        "topicName": "Tính cách (Personality traits)"
      },
      {
        "word": "Big-head",
        "pos": "n",
        "ipa": "/ˈbɪɡhɛd/",
        "meaningVi": "Ngườitựcao",
        "topicId": 29,
        "topicName": "Tính cách (Personality traits)"
      },
      {
        "word": "Snob",
        "pos": "n",
        "ipa": "/snɒb/",
        "meaningVi": "Ngườihợmhĩnh",
        "topicId": 29,
        "topicName": "Tính cách (Personality traits)"
      },
      {
        "word": "Liar",
        "pos": "n",
        "ipa": "/laɪər/",
        "meaningVi": "Ngườinóidối",
        "topicId": 29,
        "topicName": "Tính cách (Personality traits)"
      },
      {
        "word": "Ambitious",
        "pos": "adj",
        "ipa": "/æmˈbɪʃəs/",
        "meaningVi": "Thamvọng",
        "topicId": 29,
        "topicName": "Tính cách (Personality traits)"
      },
      {
        "word": "Introvert",
        "pos": "n",
        "ipa": "/ˈɪn.trə.vɜːt/",
        "meaningVi": "Ngườihướngnội",
        "topicId": 29,
        "topicName": "Tính cách (Personality traits)"
      },
      {
        "word": "Stingy",
        "pos": "adj",
        "ipa": "/ˈstɪnʤi/",
        "meaningVi": "Keokiệt",
        "topicId": 29,
        "topicName": "Tính cách (Personality traits)"
      },
      {
        "word": "Arrogant",
        "pos": "adj",
        "ipa": "/ˈær.ə.ɡənt/",
        "meaningVi": "Kiêucăng",
        "topicId": 29,
        "topicName": "Tính cách (Personality traits)"
      },
      {
        "word": "Vain",
        "pos": "adj",
        "ipa": "/veɪn/",
        "meaningVi": "Tựphụ",
        "topicId": 29,
        "topicName": "Tính cách (Personality traits)"
      },
      {
        "word": "Hostile",
        "pos": "adj",
        "ipa": "/ˈhɒs.təl/",
        "meaningVi": "Thùđịch",
        "topicId": 29,
        "topicName": "Tính cách (Personality traits)"
      }
    ]
  },
  {
    "id": 30,
    "name": "Đồ uống (Beverages & Drinks)",
    "wordCount": 20,
    "words": [
      {
        "word": "Juice",
        "pos": "n",
        "ipa": "/dʒuːs/",
        "meaningVi": "Nướcép",
        "topicId": 30,
        "topicName": "Đồ uống (Beverages & Drinks)"
      },
      {
        "word": "Lemonade",
        "pos": "n",
        "ipa": "/ˌlɛm.əˈneɪd/",
        "meaningVi": "Nướcchanh",
        "topicId": 30,
        "topicName": "Đồ uống (Beverages & Drinks)"
      },
      {
        "word": "Beer",
        "pos": "n",
        "ipa": "/bɪr/",
        "meaningVi": "Bia",
        "topicId": 30,
        "topicName": "Đồ uống (Beverages & Drinks)"
      },
      {
        "word": "Soda",
        "pos": "n",
        "ipa": "/ˈsoʊdə/",
        "meaningVi": "Sô-đa",
        "topicId": 30,
        "topicName": "Đồ uống (Beverages & Drinks)"
      },
      {
        "word": "Cider",
        "pos": "n",
        "ipa": "/ˈsaɪdər/",
        "meaningVi": "Rượutáo",
        "topicId": 30,
        "topicName": "Đồ uống (Beverages & Drinks)"
      },
      {
        "word": "Rum",
        "pos": "n",
        "ipa": "/rʌm/",
        "meaningVi": "Rượurum",
        "topicId": 30,
        "topicName": "Đồ uống (Beverages & Drinks)"
      },
      {
        "word": "Gingerale",
        "pos": "n. phr",
        "ipa": "/ˈʤɪnʤəreɪl/",
        "meaningVi": "Nướcgừng",
        "topicId": 30,
        "topicName": "Đồ uống (Beverages & Drinks)"
      },
      {
        "word": "Champagne",
        "pos": "n",
        "ipa": "/ʃæmˈpeɪn/",
        "meaningVi": "Rượusâmpanh",
        "topicId": 30,
        "topicName": "Đồ uống (Beverages & Drinks)"
      },
      {
        "word": "Bitter",
        "pos": "adj",
        "ipa": "/ˈbɪtər/",
        "meaningVi": "Đắng",
        "topicId": 30,
        "topicName": "Đồ uống (Beverages & Drinks)"
      },
      {
        "word": "Malt",
        "pos": "n",
        "ipa": "/mɔːlt/",
        "meaningVi": "Mạchnha",
        "topicId": 30,
        "topicName": "Đồ uống (Beverages & Drinks)"
      },
      {
        "word": "Barley",
        "pos": "n",
        "ipa": "/ˈbɑːr.li/",
        "meaningVi": "Lúamạch",
        "topicId": 30,
        "topicName": "Đồ uống (Beverages & Drinks)"
      },
      {
        "word": "Distillery",
        "pos": "n",
        "ipa": "/dɪˈstɪləri/",
        "meaningVi": "Nhàmáyrượu",
        "topicId": 30,
        "topicName": "Đồ uống (Beverages & Drinks)"
      },
      {
        "word": "Coffee",
        "pos": "n",
        "ipa": "/ˈkɔː.ff/",
        "meaningVi": "Càphê",
        "topicId": 30,
        "topicName": "Đồ uống (Beverages & Drinks)"
      },
      {
        "word": "Milk",
        "pos": "n",
        "ipa": "/mɪlk/",
        "meaningVi": "Sữa",
        "topicId": 30,
        "topicName": "Đồ uống (Beverages & Drinks)"
      },
      {
        "word": "Tea",
        "pos": "n",
        "ipa": "/tiː/",
        "meaningVi": "Trà",
        "topicId": 30,
        "topicName": "Đồ uống (Beverages & Drinks)"
      },
      {
        "word": "Redwine",
        "pos": "n. phr",
        "ipa": "/rɛdwaɪn/",
        "meaningVi": "Rượuvangđỏ",
        "topicId": 30,
        "topicName": "Đồ uống (Beverages & Drinks)"
      },
      {
        "word": "Non-alcoholic",
        "pos": "adj",
        "ipa": "/ˌnɑːnˌæl.kəˈhɒl.ɪk/",
        "meaningVi": "Khôngcồn",
        "topicId": 30,
        "topicName": "Đồ uống (Beverages & Drinks)"
      },
      {
        "word": "Full-cream",
        "pos": "adj",
        "ipa": "/ˌfʊl ˈkriːm/",
        "meaningVi": "Nguyênkem",
        "topicId": 30,
        "topicName": "Đồ uống (Beverages & Drinks)"
      },
      {
        "word": "Herbal",
        "pos": "adj",
        "ipa": "/ˈhɜːr.bəl/",
        "meaningVi": "(chứa)thảomộc",
        "topicId": 30,
        "topicName": "Đồ uống (Beverages & Drinks)"
      },
      {
        "word": "Mineralwater",
        "pos": "n. phr",
        "ipa": "/ˈmɪn.ər.əl ˈwɔː.tər/",
        "meaningVi": "Nướckhoáng",
        "topicId": 30,
        "topicName": "Đồ uống (Beverages & Drinks)"
      }
    ]
  },
  {
    "id": 31,
    "name": "Các loài hoa (Flowers)",
    "wordCount": 18,
    "words": [
      {
        "word": "Lotus",
        "pos": "n",
        "ipa": "/ˈloʊtəs/",
        "meaningVi": "Hoasen",
        "topicId": 31,
        "topicName": "Các loài hoa (Flowers)"
      },
      {
        "word": "Lily",
        "pos": "adv",
        "ipa": "/ˈlɪli/",
        "meaningVi": "Hoaloakèn",
        "topicId": 31,
        "topicName": "Các loài hoa (Flowers)"
      },
      {
        "word": "Poppy",
        "pos": "n",
        "ipa": "/ˈpɒp.i/",
        "meaningVi": "Hoaanhtúc",
        "topicId": 31,
        "topicName": "Các loài hoa (Flowers)"
      },
      {
        "word": "Bougainvillea",
        "pos": "n",
        "ipa": "/ˌbuː.ɡənˈvɪl.i.ə/",
        "meaningVi": "Hoagiấy",
        "topicId": 31,
        "topicName": "Các loài hoa (Flowers)"
      },
      {
        "word": "Gerberaflower",
        "pos": "n",
        "ipa": "/ˈɡɜːr.bər.ə ˈflaʊ.ər/",
        "meaningVi": "Hoađồngtiền",
        "topicId": 31,
        "topicName": "Các loài hoa (Flowers)"
      },
      {
        "word": "Tuberose",
        "pos": "n",
        "ipa": "/ˈtuː.bəˌroʊz/",
        "meaningVi": "Hoahuệ",
        "topicId": 31,
        "topicName": "Các loài hoa (Flowers)"
      },
      {
        "word": "Dahlia",
        "pos": "n",
        "ipa": "/ˈdeɪ.li.ə/",
        "meaningVi": "Hoathượcdược",
        "topicId": 31,
        "topicName": "Các loài hoa (Flowers)"
      },
      {
        "word": "Jasmine",
        "pos": "n",
        "ipa": "/ˈʤæzmɪn/",
        "meaningVi": "Hoalài",
        "topicId": 31,
        "topicName": "Các loài hoa (Flowers)"
      },
      {
        "word": "Sunflower",
        "pos": "n",
        "ipa": "/ˈsʌnˌflaʊ.ər/",
        "meaningVi": "Hoahướngdương",
        "topicId": 31,
        "topicName": "Các loài hoa (Flowers)"
      },
      {
        "word": "Marigold",
        "pos": "n",
        "ipa": "/ˈmær.ɪˌɡoʊld/",
        "meaningVi": "Hoacúcvạnthọ",
        "topicId": 31,
        "topicName": "Các loài hoa (Flowers)"
      },
      {
        "word": "Orchid",
        "pos": "n",
        "ipa": "/ˈɔːr.kɪd/",
        "meaningVi": "Hoalan",
        "topicId": 31,
        "topicName": "Các loài hoa (Flowers)"
      },
      {
        "word": "Rose",
        "pos": "n",
        "ipa": "/roʊz/",
        "meaningVi": "Hoahồng",
        "topicId": 31,
        "topicName": "Các loài hoa (Flowers)"
      },
      {
        "word": "Carnation",
        "pos": "n",
        "ipa": "/kɑːrˈneɪ.ʃən/",
        "meaningVi": "Hoacẩmchướng",
        "topicId": 31,
        "topicName": "Các loài hoa (Flowers)"
      },
      {
        "word": "Cherryblossom",
        "pos": "n. phr",
        "ipa": "/ˈtʃɛr.i ˈblɒs.əm/",
        "meaningVi": "Hoaanhđào",
        "topicId": 31,
        "topicName": "Các loài hoa (Flowers)"
      },
      {
        "word": "Poinsettia",
        "pos": "n",
        "ipa": "/ˌpɔɪnˈsɛˌtiə/",
        "meaningVi": "Hoatrạngnguyên",
        "topicId": 31,
        "topicName": "Các loài hoa (Flowers)"
      },
      {
        "word": "Flamboyant",
        "pos": "n",
        "ipa": "/flæmˈbɔɪənt/",
        "meaningVi": "Hoaphượng",
        "topicId": 31,
        "topicName": "Các loài hoa (Flowers)"
      },
      {
        "word": "Hibiscus",
        "pos": "n",
        "ipa": "/hɪˈbɪs.kəs/",
        "meaningVi": "Hoadâmbụt",
        "topicId": 31,
        "topicName": "Các loài hoa (Flowers)"
      },
      {
        "word": "Peachblossom",
        "pos": "n. phr",
        "ipa": "/piːtʃ ˈblɒs.əm/",
        "meaningVi": "Hoađào",
        "topicId": 31,
        "topicName": "Các loài hoa (Flowers)"
      }
    ]
  },
  {
    "id": 32,
    "name": "Phim ảnh (Movies & Cinema)",
    "wordCount": 20,
    "words": [
      {
        "word": "Movie",
        "pos": "n",
        "ipa": "/ˈmuː.vi/",
        "meaningVi": "Phim",
        "topicId": 32,
        "topicName": "Phim ảnh (Movies & Cinema)"
      },
      {
        "word": "Famous",
        "pos": "adj",
        "ipa": "/ˈfeɪməs/",
        "meaningVi": "Nổitiếng",
        "topicId": 32,
        "topicName": "Phim ảnh (Movies & Cinema)"
      },
      {
        "word": "Comedy",
        "pos": "n",
        "ipa": "/ˈkɑmədi/",
        "meaningVi": "Hàikịch",
        "topicId": 32,
        "topicName": "Phim ảnh (Movies & Cinema)"
      },
      {
        "word": "Audience",
        "pos": "n",
        "ipa": "/ˈɔː.di.əns/",
        "meaningVi": "Khángiả",
        "topicId": 32,
        "topicName": "Phim ảnh (Movies & Cinema)"
      },
      {
        "word": "Film Festival",
        "pos": "n. phr",
        "ipa": "/fɪlmˈfɛstɪvəl/",
        "meaningVi": "Liênhoanphim",
        "topicId": 32,
        "topicName": "Phim ảnh (Movies & Cinema)"
      },
      {
        "word": "Trailer",
        "pos": "n",
        "ipa": "/ˈtreɪlər/",
        "meaningVi": "Đoạnphimquảng",
        "topicId": 32,
        "topicName": "Phim ảnh (Movies & Cinema)"
      },
      {
        "word": "Moviestar",
        "pos": "n. phr",
        "ipa": "/ˈmuː.vistɑːr/",
        "meaningVi": "Ngôisaođiệnảnh",
        "topicId": 32,
        "topicName": "Phim ảnh (Movies & Cinema)"
      },
      {
        "word": "Soundtrack",
        "pos": "n",
        "ipa": "/ˈsaʊnˌtræk/",
        "meaningVi": "Nhạcphim",
        "topicId": 32,
        "topicName": "Phim ảnh (Movies & Cinema)"
      },
      {
        "word": "Cartoon",
        "pos": "n",
        "ipa": "/kɑːrˈtuːn/",
        "meaningVi": "Phimhoạthình",
        "topicId": 32,
        "topicName": "Phim ảnh (Movies & Cinema)"
      },
      {
        "word": "Drama",
        "pos": "n",
        "ipa": "/ˈdrɑː.mə/",
        "meaningVi": "Vởkịch",
        "topicId": 32,
        "topicName": "Phim ảnh (Movies & Cinema)"
      },
      {
        "word": "Actionfflm",
        "pos": "n. phr",
        "ipa": "/ˈækʃənfɪlm/",
        "meaningVi": "Phimhànhđộng",
        "topicId": 32,
        "topicName": "Phim ảnh (Movies & Cinema)"
      },
      {
        "word": "Celebrity",
        "pos": "n",
        "ipa": "/səˈlɛbrɪti/",
        "meaningVi": "Ngườinổitiếng",
        "topicId": 32,
        "topicName": "Phim ảnh (Movies & Cinema)"
      },
      {
        "word": "Script",
        "pos": "n",
        "ipa": "/skrɪpt/",
        "meaningVi": "Kịchbản",
        "topicId": 32,
        "topicName": "Phim ảnh (Movies & Cinema)"
      },
      {
        "word": "Theater",
        "pos": "n",
        "ipa": "/ˈθiː.ə.tər/",
        "meaningVi": "Nhàhát",
        "topicId": 32,
        "topicName": "Phim ảnh (Movies & Cinema)"
      },
      {
        "word": "Actor",
        "pos": "n",
        "ipa": "/ˈæktər/",
        "meaningVi": "Namdiễnviên",
        "topicId": 32,
        "topicName": "Phim ảnh (Movies & Cinema)"
      },
      {
        "word": "Actress",
        "pos": "n",
        "ipa": "/ˈæk.trɪs/",
        "meaningVi": "Nữdiễnviên",
        "topicId": 32,
        "topicName": "Phim ảnh (Movies & Cinema)"
      },
      {
        "word": "Director",
        "pos": "n",
        "ipa": "/dɪˈrɛktər/",
        "meaningVi": "Đạodiễn",
        "topicId": 32,
        "topicName": "Phim ảnh (Movies & Cinema)"
      },
      {
        "word": "Romantic",
        "pos": "adj",
        "ipa": "/roʊˈmæntɪk/",
        "meaningVi": "Lãngmạn",
        "topicId": 32,
        "topicName": "Phim ảnh (Movies & Cinema)"
      },
      {
        "word": "Silent fflm",
        "pos": "n. phr",
        "ipa": "/ˈsaɪlənt fɪlm/",
        "meaningVi": "Phimcâm",
        "topicId": 32,
        "topicName": "Phim ảnh (Movies & Cinema)"
      },
      {
        "word": "Movieticket",
        "pos": "n. phr",
        "ipa": "/ˈmuː.viˈtɪk.ɪt/",
        "meaningVi": "Véxemphim",
        "topicId": 32,
        "topicName": "Phim ảnh (Movies & Cinema)"
      }
    ]
  },
  {
    "id": 33,
    "name": "Bóng đá (Football / Soccer)",
    "wordCount": 35,
    "words": [
      {
        "word": "Stadium",
        "pos": "n",
        "ipa": "/ˈsteɪdiəm/",
        "meaningVi": "Sânvậnđộng",
        "topicId": 33,
        "topicName": "Bóng đá (Football / Soccer)"
      },
      {
        "word": "Stand",
        "pos": "n",
        "ipa": "/stænd/",
        "meaningVi": "Khánđài",
        "topicId": 33,
        "topicName": "Bóng đá (Football / Soccer)"
      },
      {
        "word": "Pitch",
        "pos": "n",
        "ipa": "/pɪʧ/",
        "meaningVi": "Sân",
        "topicId": 33,
        "topicName": "Bóng đá (Football / Soccer)"
      },
      {
        "word": "Touchline",
        "pos": "n",
        "ipa": "/ˈtʌtʃ.laɪn/",
        "meaningVi": "Đườngbiên",
        "topicId": 33,
        "topicName": "Bóng đá (Football / Soccer)"
      },
      {
        "word": "Penaltyarea",
        "pos": "n. phr",
        "ipa": "/ˈpɛnəlti ˈɛriə/",
        "meaningVi": "Khuphạtđền",
        "topicId": 33,
        "topicName": "Bóng đá (Football / Soccer)"
      },
      {
        "word": "Goal",
        "pos": "n",
        "ipa": "/goʊl/",
        "meaningVi": "Khungthành",
        "topicId": 33,
        "topicName": "Bóng đá (Football / Soccer)"
      },
      {
        "word": "Penalty",
        "pos": "n",
        "ipa": "/ˈpɛnəlti/",
        "meaningVi": "Phạtđền",
        "topicId": 33,
        "topicName": "Bóng đá (Football / Soccer)"
      },
      {
        "word": "Cornerkick",
        "pos": "n. phr",
        "ipa": "/ˈkɔːr.nər kɪk/",
        "meaningVi": "Cúđáphạtgóc",
        "topicId": 33,
        "topicName": "Bóng đá (Football / Soccer)"
      },
      {
        "word": "Freekick",
        "pos": "n. phr",
        "ipa": "/ˌfriː ˈkɪk/",
        "meaningVi": "Đáphạttrựctiếp",
        "topicId": 33,
        "topicName": "Bóng đá (Football / Soccer)"
      },
      {
        "word": "Kickoff",
        "pos": "phrasalv",
        "ipa": "/ˈkɪk.ɔːf/",
        "meaningVi": "Bắtđầu,lănbóng",
        "topicId": 33,
        "topicName": "Bóng đá (Football / Soccer)"
      },
      {
        "word": "Offside",
        "pos": "n",
        "ipa": "/ˌɒfˈsaɪd/",
        "meaningVi": "Việtvị",
        "topicId": 33,
        "topicName": "Bóng đá (Football / Soccer)"
      },
      {
        "word": "Cornerflag",
        "pos": "n. phr",
        "ipa": "/ˈkɔːr.nər flæɡ/",
        "meaningVi": "Cờcắmtạigócsân",
        "topicId": 33,
        "topicName": "Bóng đá (Football / Soccer)"
      },
      {
        "word": "Bet",
        "pos": "v",
        "ipa": "/bɛt/",
        "meaningVi": "Cáđộ",
        "topicId": 33,
        "topicName": "Bóng đá (Football / Soccer)"
      },
      {
        "word": "Thebench",
        "pos": "n. phr",
        "ipa": "/ðəbɛnʧ/",
        "meaningVi": "Băngghếdựbị",
        "topicId": 33,
        "topicName": "Bóng đá (Football / Soccer)"
      },
      {
        "word": "Foul",
        "pos": "n",
        "ipa": "/faʊl/",
        "meaningVi": "Lỗi, phaphạmlỗi",
        "topicId": 33,
        "topicName": "Bóng đá (Football / Soccer)"
      },
      {
        "word": "Goalline",
        "pos": "n. phr",
        "ipa": "/ˈɡoʊllaɪn/",
        "meaningVi": "Vạchkẻ(khung",
        "topicId": 33,
        "topicName": "Bóng đá (Football / Soccer)"
      },
      {
        "word": "Shoot",
        "pos": "v",
        "ipa": "/ʃuːt/",
        "meaningVi": "Ném,sút",
        "topicId": 33,
        "topicName": "Bóng đá (Football / Soccer)"
      },
      {
        "word": "Goalkeeper",
        "pos": "n",
        "ipa": "/ˈɡoʊlˌkiː.pər/",
        "meaningVi": "Thủmôn",
        "topicId": 33,
        "topicName": "Bóng đá (Football / Soccer)"
      },
      {
        "word": "Defender",
        "pos": "n",
        "ipa": "/dɪˈfɛn.dər/",
        "meaningVi": "Hậuvệ",
        "topicId": 33,
        "topicName": "Bóng đá (Football / Soccer)"
      },
      {
        "word": "Centreback",
        "pos": "n. phr",
        "ipa": "/ˈsɛn.tər bæk/",
        "meaningVi": "Trungvệ",
        "topicId": 33,
        "topicName": "Bóng đá (Football / Soccer)"
      },
      {
        "word": "Midffelder",
        "pos": "n",
        "ipa": "/ˈmɪdˌffːl.dər/",
        "meaningVi": "Trungvệ",
        "topicId": 33,
        "topicName": "Bóng đá (Football / Soccer)"
      },
      {
        "word": "Winger",
        "pos": "n",
        "ipa": "/ˈwɪŋ.ər/",
        "meaningVi": "Cầuthủchạybiên",
        "topicId": 33,
        "topicName": "Bóng đá (Football / Soccer)"
      },
      {
        "word": "Referee",
        "pos": "n",
        "ipa": "/ˌrɛf.əˈriː/",
        "meaningVi": "Trọngtài",
        "topicId": 33,
        "topicName": "Bóng đá (Football / Soccer)"
      },
      {
        "word": "Commentator",
        "pos": "n",
        "ipa": "/ˈkɒm.ənˌteɪ.tər/",
        "meaningVi": "Bìnhluậnviên",
        "topicId": 33,
        "topicName": "Bóng đá (Football / Soccer)"
      },
      {
        "word": "Supporter",
        "pos": "n",
        "ipa": "/səˈpɔːr.tər/",
        "meaningVi": "Cổđộngviên",
        "topicId": 33,
        "topicName": "Bóng đá (Football / Soccer)"
      },
      {
        "word": "Linesman",
        "pos": "n",
        "ipa": "/ˈlaɪnz.mən/",
        "meaningVi": "Trọngtàibiên",
        "topicId": 33,
        "topicName": "Bóng đá (Football / Soccer)"
      },
      {
        "word": "Hooligan",
        "pos": "n",
        "ipa": "/ˈhuː.lɪ.ɡən/",
        "meaningVi": "Kẻcônđồ,quá",
        "topicId": 33,
        "topicName": "Bóng đá (Football / Soccer)"
      },
      {
        "word": "Redcard",
        "pos": "n. phr",
        "ipa": "/ˈrɛdkɑːrd/",
        "meaningVi": "Thẻđỏ",
        "topicId": 33,
        "topicName": "Bóng đá (Football / Soccer)"
      },
      {
        "word": "Yellowcard",
        "pos": "n. phr",
        "ipa": "/ˈjɛl.oʊ kɑːrd/",
        "meaningVi": "Thẻvàng",
        "topicId": 33,
        "topicName": "Bóng đá (Football / Soccer)"
      },
      {
        "word": "Coach",
        "pos": "n",
        "ipa": "/koʊtʃ/",
        "meaningVi": "Huấnluyệnviên",
        "topicId": 33,
        "topicName": "Bóng đá (Football / Soccer)"
      },
      {
        "word": "Reserveteam",
        "pos": "n. phr",
        "ipa": "/rɪˈzɜːrv tiːm/",
        "meaningVi": "Độidựbị",
        "topicId": 33,
        "topicName": "Bóng đá (Football / Soccer)"
      },
      {
        "word": "Caution",
        "pos": "n",
        "ipa": "/ˈkɔː.ʃən/",
        "meaningVi": "Lờicảnhcáo",
        "topicId": 33,
        "topicName": "Bóng đá (Football / Soccer)"
      },
      {
        "word": "Stimulant",
        "pos": "n",
        "ipa": "/ˈstɪm.jʊ.lənt/",
        "meaningVi": "Chấtkíchthích",
        "topicId": 33,
        "topicName": "Bóng đá (Football / Soccer)"
      },
      {
        "word": "Strategy",
        "pos": "n",
        "ipa": "/ˈstræt.ə.dʒi/",
        "meaningVi": "Chiếnlược",
        "topicId": 33,
        "topicName": "Bóng đá (Football / Soccer)"
      },
      {
        "word": "Striker",
        "pos": "n",
        "ipa": "/ˈstraɪ.kər/",
        "meaningVi": "Tiềnđạo",
        "topicId": 33,
        "topicName": "Bóng đá (Football / Soccer)"
      }
    ]
  },
  {
    "id": 34,
    "name": "Giáng sinh (Christmas)",
    "wordCount": 18,
    "words": [
      {
        "word": "Winter",
        "pos": "n",
        "ipa": "/ˈwɪn.tər/",
        "meaningVi": "Mùađông",
        "topicId": 34,
        "topicName": "Giáng sinh (Christmas)"
      },
      {
        "word": "Candle",
        "pos": "n",
        "ipa": "/ˈkæn.dəl/",
        "meaningVi": "Nến",
        "topicId": 34,
        "topicName": "Giáng sinh (Christmas)"
      },
      {
        "word": "Snow",
        "pos": "n",
        "ipa": "/snoʊ/",
        "meaningVi": "Tuyết",
        "topicId": 34,
        "topicName": "Giáng sinh (Christmas)"
      },
      {
        "word": "Sack",
        "pos": "n",
        "ipa": "/sæk/",
        "meaningVi": "Bao,túi",
        "topicId": 34,
        "topicName": "Giáng sinh (Christmas)"
      },
      {
        "word": "Card",
        "pos": "n",
        "ipa": "/kɑːrd/",
        "meaningVi": "Tấmthiệp",
        "topicId": 34,
        "topicName": "Giáng sinh (Christmas)"
      },
      {
        "word": "Fireplace",
        "pos": "n",
        "ipa": "/ˈfaɪərˌpleɪs/",
        "meaningVi": "Lòsưởi",
        "topicId": 34,
        "topicName": "Giáng sinh (Christmas)"
      },
      {
        "word": "Chimney",
        "pos": "n",
        "ipa": "/ˈtʃɪm.ni/",
        "meaningVi": "Ốngkhói",
        "topicId": 34,
        "topicName": "Giáng sinh (Christmas)"
      },
      {
        "word": "Gift",
        "pos": "n",
        "ipa": "/ɡɪft/",
        "meaningVi": "Quàtặng",
        "topicId": 34,
        "topicName": "Giáng sinh (Christmas)"
      },
      {
        "word": "Christmas",
        "pos": "n",
        "ipa": "/ˈkrɪs.məs/",
        "meaningVi": "LễGiángSinh",
        "topicId": 34,
        "topicName": "Giáng sinh (Christmas)"
      },
      {
        "word": "Ornament",
        "pos": "n",
        "ipa": "/ˈɔːr.nə.mənt/",
        "meaningVi": "Đồtrangtrí",
        "topicId": 34,
        "topicName": "Giáng sinh (Christmas)"
      },
      {
        "word": "Pinetree",
        "pos": "n. phr",
        "ipa": "/paɪntriː/",
        "meaningVi": "Câythông",
        "topicId": 34,
        "topicName": "Giáng sinh (Christmas)"
      },
      {
        "word": "Sled",
        "pos": "v",
        "ipa": "/slɛd/",
        "meaningVi": "Xetrượttuyết",
        "topicId": 34,
        "topicName": "Giáng sinh (Christmas)"
      },
      {
        "word": "Bell",
        "pos": "n",
        "ipa": "/bɛl/",
        "meaningVi": "Chuông",
        "topicId": 34,
        "topicName": "Giáng sinh (Christmas)"
      },
      {
        "word": "Snowflake",
        "pos": "n",
        "ipa": "/ˈsnoʊˌfleɪk/",
        "meaningVi": "Bôngtuyết",
        "topicId": 34,
        "topicName": "Giáng sinh (Christmas)"
      },
      {
        "word": "Wreath",
        "pos": "n",
        "ipa": "/riːθ/",
        "meaningVi": "Vònghoa",
        "topicId": 34,
        "topicName": "Giáng sinh (Christmas)"
      },
      {
        "word": "Scarf",
        "pos": "n",
        "ipa": "/skɑːrf/",
        "meaningVi": "Khănchoàngcổ",
        "topicId": 34,
        "topicName": "Giáng sinh (Christmas)"
      },
      {
        "word": "Christmastree",
        "pos": "n. phr",
        "ipa": "/ˈkrɪs.məstriː/",
        "meaningVi": "CâythôngGiáng",
        "topicId": 34,
        "topicName": "Giáng sinh (Christmas)"
      },
      {
        "word": "Christmascard",
        "pos": "n. phr",
        "ipa": "/ˈkrɪs.məskɑːrd/",
        "meaningVi": "ThiệpGiángsinh",
        "topicId": 34,
        "topicName": "Giáng sinh (Christmas)"
      }
    ]
  },
  {
    "id": 35,
    "name": "Đồ ăn (Food & Cuisine)",
    "wordCount": 38,
    "words": [
      {
        "word": "Beef",
        "pos": "n",
        "ipa": "/biːf/",
        "meaningVi": "Thịtbò",
        "topicId": 35,
        "topicName": "Đồ ăn (Food & Cuisine)"
      },
      {
        "word": "Pork",
        "pos": "n",
        "ipa": "/pɔːrk/",
        "meaningVi": "Thịtheo",
        "topicId": 35,
        "topicName": "Đồ ăn (Food & Cuisine)"
      },
      {
        "word": "Bacon",
        "pos": "n",
        "ipa": "/ˈbeɪ.kən/",
        "meaningVi": "Thịtbarọixông",
        "topicId": 35,
        "topicName": "Đồ ăn (Food & Cuisine)"
      },
      {
        "word": "Ham",
        "pos": "n",
        "ipa": "/hæm/",
        "meaningVi": "Thịtđùi,thịtxông",
        "topicId": 35,
        "topicName": "Đồ ăn (Food & Cuisine)"
      },
      {
        "word": "Yoghurt",
        "pos": "n",
        "ipa": "/ˈjoʊ.ɡərt/",
        "meaningVi": "Sữachua",
        "topicId": 35,
        "topicName": "Đồ ăn (Food & Cuisine)"
      },
      {
        "word": "Pie",
        "pos": "n",
        "ipa": "/paɪ/",
        "meaningVi": "Bánhnướng",
        "topicId": 35,
        "topicName": "Đồ ăn (Food & Cuisine)"
      },
      {
        "word": "Bread",
        "pos": "n",
        "ipa": "/brɛd/",
        "meaningVi": "Bánhmì",
        "topicId": 35,
        "topicName": "Đồ ăn (Food & Cuisine)"
      },
      {
        "word": "Cake",
        "pos": "n",
        "ipa": "/keɪk/",
        "meaningVi": "Bánhngọt",
        "topicId": 35,
        "topicName": "Đồ ăn (Food & Cuisine)"
      },
      {
        "word": "Chip",
        "pos": "n",
        "ipa": "/tʃɪp/",
        "meaningVi": "Khoaitâychiên",
        "topicId": 35,
        "topicName": "Đồ ăn (Food & Cuisine)"
      },
      {
        "word": "Biscuit",
        "pos": "n",
        "ipa": "/ˈbɪs.kɪt/",
        "meaningVi": "Bánhquy",
        "topicId": 35,
        "topicName": "Đồ ăn (Food & Cuisine)"
      },
      {
        "word": "Noodle",
        "pos": "n",
        "ipa": "/ˈnuː.dəl/",
        "meaningVi": "Mì,bún",
        "topicId": 35,
        "topicName": "Đồ ăn (Food & Cuisine)"
      },
      {
        "word": "Butter",
        "pos": "n",
        "ipa": "/ˈbʌt.ər/",
        "meaningVi": "Bơ",
        "topicId": 35,
        "topicName": "Đồ ăn (Food & Cuisine)"
      },
      {
        "word": "Olive",
        "pos": "n",
        "ipa": "/ˈɒl.ɪv/",
        "meaningVi": "Quảôliu",
        "topicId": 35,
        "topicName": "Đồ ăn (Food & Cuisine)"
      },
      {
        "word": "Soy",
        "pos": "n",
        "ipa": "/sɔɪ/",
        "meaningVi": "Đậunành",
        "topicId": 35,
        "topicName": "Đồ ăn (Food & Cuisine)"
      },
      {
        "word": "Flour",
        "pos": "n",
        "ipa": "/ˈflaʊər/",
        "meaningVi": "Bột",
        "topicId": 35,
        "topicName": "Đồ ăn (Food & Cuisine)"
      },
      {
        "word": "Lunch",
        "pos": "n",
        "ipa": "/lʌntʃ/",
        "meaningVi": "Bữaăntrưa",
        "topicId": 35,
        "topicName": "Đồ ăn (Food & Cuisine)"
      },
      {
        "word": "Mint",
        "pos": "n",
        "ipa": "/mɪnt/",
        "meaningVi": "Bạchà",
        "topicId": 35,
        "topicName": "Đồ ăn (Food & Cuisine)"
      },
      {
        "word": "Vanilla",
        "pos": "n",
        "ipa": "/vəˈnɪl.ə/",
        "meaningVi": "Vani",
        "topicId": 35,
        "topicName": "Đồ ăn (Food & Cuisine)"
      },
      {
        "word": "Candy",
        "pos": "n",
        "ipa": "/ˈkæn.di/",
        "meaningVi": "Kẹo",
        "topicId": 35,
        "topicName": "Đồ ăn (Food & Cuisine)"
      },
      {
        "word": "Popcorn",
        "pos": "n",
        "ipa": "/ˈpɒp.kɔːrn/",
        "meaningVi": "Bỏngngô",
        "topicId": 35,
        "topicName": "Đồ ăn (Food & Cuisine)"
      },
      {
        "word": "Snack",
        "pos": "n",
        "ipa": "/snæk/",
        "meaningVi": "Bữaănnhẹ",
        "topicId": 35,
        "topicName": "Đồ ăn (Food & Cuisine)"
      },
      {
        "word": "Barbecue",
        "pos": "n",
        "ipa": "/ˈbɑːr.bɪ.kjuː/",
        "meaningVi": "Tiệcnướngngoài",
        "topicId": 35,
        "topicName": "Đồ ăn (Food & Cuisine)"
      },
      {
        "word": "Fastfood",
        "pos": "n. phr",
        "ipa": "/ˌfæstˈfuːd/",
        "meaningVi": "Thứcănnhanh",
        "topicId": 35,
        "topicName": "Đồ ăn (Food & Cuisine)"
      },
      {
        "word": "Junkfood",
        "pos": "n. phr",
        "ipa": "/ˈdʒʌŋkˌfuːd/",
        "meaningVi": "Đồănvặt",
        "topicId": 35,
        "topicName": "Đồ ăn (Food & Cuisine)"
      },
      {
        "word": "Frozenfood",
        "pos": "n. phr",
        "ipa": "/ˈfroʊ.zənˌfuːd/",
        "meaningVi": "Thựcphẩmđông",
        "topicId": 35,
        "topicName": "Đồ ăn (Food & Cuisine)"
      },
      {
        "word": "Healthfood",
        "pos": "n. phr",
        "ipa": "/ˈhɛlθ ˌfuːd/",
        "meaningVi": "Thựcphẩmtựnhiên",
        "topicId": 35,
        "topicName": "Đồ ăn (Food & Cuisine)"
      },
      {
        "word": "Distinctive",
        "pos": "adj",
        "ipa": "/dɪˈstɪŋk.tɪv/",
        "meaningVi": "Đặctrưng,khác",
        "topicId": 35,
        "topicName": "Đồ ăn (Food & Cuisine)"
      },
      {
        "word": "Flavor",
        "pos": "n",
        "ipa": "/ˈfleɪ.vər/",
        "meaningVi": "Hươngvị",
        "topicId": 35,
        "topicName": "Đồ ăn (Food & Cuisine)"
      },
      {
        "word": "Balanceddiet",
        "pos": "n. phr",
        "ipa": "/ˈbæl.ənstˈdaɪ.ət/",
        "meaningVi": "Chếđộănuống",
        "topicId": 35,
        "topicName": "Đồ ăn (Food & Cuisine)"
      },
      {
        "word": "Stale",
        "pos": "adj",
        "ipa": "/steɪl/",
        "meaningVi": "Ôi,thiu",
        "topicId": 35,
        "topicName": "Đồ ăn (Food & Cuisine)"
      },
      {
        "word": "Sour",
        "pos": "adj",
        "ipa": "/ˈsaʊ.ər/",
        "meaningVi": "Chua",
        "topicId": 35,
        "topicName": "Đồ ăn (Food & Cuisine)"
      },
      {
        "word": "Burnt",
        "pos": "adj",
        "ipa": "/bɜːrnt/",
        "meaningVi": "Cháy,khét",
        "topicId": 35,
        "topicName": "Đồ ăn (Food & Cuisine)"
      },
      {
        "word": "Overdone",
        "pos": "adj",
        "ipa": "/ˌoʊ.vərˈdʌn/",
        "meaningVi": "Quáchín,rục",
        "topicId": 35,
        "topicName": "Đồ ăn (Food & Cuisine)"
      },
      {
        "word": "Underdone",
        "pos": "adj",
        "ipa": "/ˌʌn.dərˈdʌn/",
        "meaningVi": "Chưachín,tái",
        "topicId": 35,
        "topicName": "Đồ ăn (Food & Cuisine)"
      },
      {
        "word": "Full",
        "pos": "adj",
        "ipa": "/fʊl/",
        "meaningVi": "No",
        "topicId": 35,
        "topicName": "Đồ ăn (Food & Cuisine)"
      },
      {
        "word": "Veal",
        "pos": "n",
        "ipa": "/viːl/",
        "meaningVi": "Thịtbê",
        "topicId": 35,
        "topicName": "Đồ ăn (Food & Cuisine)"
      },
      {
        "word": "Cereal",
        "pos": "n",
        "ipa": "/ˈsɪər.i.əl/",
        "meaningVi": "Ngũcốc",
        "topicId": 35,
        "topicName": "Đồ ăn (Food & Cuisine)"
      },
      {
        "word": "Hotdog",
        "pos": "n. phr",
        "ipa": "/ˈhɒtdɒɡ/",
        "meaningVi": "Bánhmìkẹpxúc",
        "topicId": 35,
        "topicName": "Đồ ăn (Food & Cuisine)"
      }
    ]
  },
  {
    "id": 36,
    "name": "Âm nhạc (Music)",
    "wordCount": 37,
    "words": [
      {
        "word": "Music",
        "pos": "n",
        "ipa": "/ˈmjuː.zɪk/",
        "meaningVi": "Âmnhạc",
        "topicId": 36,
        "topicName": "Âm nhạc (Music)"
      },
      {
        "word": "Band",
        "pos": "n",
        "ipa": "/bænd/",
        "meaningVi": "Nhómnhạc,ban",
        "topicId": 36,
        "topicName": "Âm nhạc (Music)"
      },
      {
        "word": "Play",
        "pos": "v",
        "ipa": "/pleɪ/",
        "meaningVi": "Chơi(nhạccụ)",
        "topicId": 36,
        "topicName": "Âm nhạc (Music)"
      },
      {
        "word": "Note",
        "pos": "n",
        "ipa": "/noʊt/",
        "meaningVi": "Nốtnhạc",
        "topicId": 36,
        "topicName": "Âm nhạc (Music)"
      },
      {
        "word": "Drum",
        "pos": "n",
        "ipa": "/drʌm/",
        "meaningVi": "Trống",
        "topicId": 36,
        "topicName": "Âm nhạc (Music)"
      },
      {
        "word": "Playlist",
        "pos": "n",
        "ipa": "/ˈpleɪ.lɪst/",
        "meaningVi": "Danhsáchbàihát",
        "topicId": 36,
        "topicName": "Âm nhạc (Music)"
      },
      {
        "word": "Musician",
        "pos": "n",
        "ipa": "/mjuˈzɪʃ.ən/",
        "meaningVi": "Nhạcsĩ",
        "topicId": 36,
        "topicName": "Âm nhạc (Music)"
      },
      {
        "word": "Perform",
        "pos": "v",
        "ipa": "/pərˈfɔːrm/",
        "meaningVi": "Trìnhdiễn,biểu",
        "topicId": 36,
        "topicName": "Âm nhạc (Music)"
      },
      {
        "word": "Rhythm",
        "pos": "n",
        "ipa": "/ˈrɪð.əm/",
        "meaningVi": "Nhịpđiệu",
        "topicId": 36,
        "topicName": "Âm nhạc (Music)"
      },
      {
        "word": "Dance",
        "pos": "v",
        "ipa": "/dæns/",
        "meaningVi": "Nhảy,khiêuvũ",
        "topicId": 36,
        "topicName": "Âm nhạc (Music)"
      },
      {
        "word": "Listen",
        "pos": "v",
        "ipa": "/ˈlɪs.ən/",
        "meaningVi": "Lắngnghe",
        "topicId": 36,
        "topicName": "Âm nhạc (Music)"
      },
      {
        "word": "Volume",
        "pos": "n",
        "ipa": "/ˈvɑːl.juːm/",
        "meaningVi": "Âmlượng",
        "topicId": 36,
        "topicName": "Âm nhạc (Music)"
      },
      {
        "word": "Song",
        "pos": "n",
        "ipa": "/sɔːŋ/",
        "meaningVi": "Bàihát",
        "topicId": 36,
        "topicName": "Âm nhạc (Music)"
      },
      {
        "word": "Sing",
        "pos": "v",
        "ipa": "/sɪŋ/",
        "meaningVi": "Hát,cahát",
        "topicId": 36,
        "topicName": "Âm nhạc (Music)"
      },
      {
        "word": "Piano",
        "pos": "n",
        "ipa": "/piˈæn.oʊ/",
        "meaningVi": "Đànpiano",
        "topicId": 36,
        "topicName": "Âm nhạc (Music)"
      },
      {
        "word": "Guitar",
        "pos": "n",
        "ipa": "/ɡɪˈtɑːr/",
        "meaningVi": "Đànghi-ta",
        "topicId": 36,
        "topicName": "Âm nhạc (Music)"
      },
      {
        "word": "Instrument",
        "pos": "n",
        "ipa": "/ˈɪn.strə.mənt/",
        "meaningVi": "Nhạccụ",
        "topicId": 36,
        "topicName": "Âm nhạc (Music)"
      },
      {
        "word": "Harmony",
        "pos": "n",
        "ipa": "/ˈhɑːr.mə.ni/",
        "meaningVi": "Hoàâm",
        "topicId": 36,
        "topicName": "Âm nhạc (Music)"
      },
      {
        "word": "Melody",
        "pos": "n",
        "ipa": "/ˈmɛl.ə.di/",
        "meaningVi": "Giaiđiệu",
        "topicId": 36,
        "topicName": "Âm nhạc (Music)"
      },
      {
        "word": "String",
        "pos": "n",
        "ipa": "/strɪŋ/",
        "meaningVi": "Dâyđàn",
        "topicId": 36,
        "topicName": "Âm nhạc (Music)"
      },
      {
        "word": "Thebrass",
        "pos": "n. phr",
        "ipa": "/ðəbræs/",
        "meaningVi": "Dànkènđồng",
        "topicId": 36,
        "topicName": "Âm nhạc (Music)"
      },
      {
        "word": "Symphony",
        "pos": "n",
        "ipa": "/ˈsɪm.fə.ni/",
        "meaningVi": "Bảngiaohưởng",
        "topicId": 36,
        "topicName": "Âm nhạc (Music)"
      },
      {
        "word": "Overture",
        "pos": "n",
        "ipa": "/ˈoʊ.vər.tʃʊr/",
        "meaningVi": "Khúcdạođầu",
        "topicId": 36,
        "topicName": "Âm nhạc (Music)"
      },
      {
        "word": "Conductor",
        "pos": "n",
        "ipa": "/kənˈdʌk.tər/",
        "meaningVi": "Nhạctrưởng",
        "topicId": 36,
        "topicName": "Âm nhạc (Music)"
      },
      {
        "word": "Composer",
        "pos": "n",
        "ipa": "/kəmˈpoʊ.zər/",
        "meaningVi": "Nhàsoạnnhạc",
        "topicId": 36,
        "topicName": "Âm nhạc (Music)"
      },
      {
        "word": "Voice",
        "pos": "n",
        "ipa": "/vɔɪs/",
        "meaningVi": "Giọngnói,giọng",
        "topicId": 36,
        "topicName": "Âm nhạc (Music)"
      },
      {
        "word": "Solo",
        "pos": "n",
        "ipa": "/ˈsoʊ.loʊ/",
        "meaningVi": "Bàiđơnca",
        "topicId": 36,
        "topicName": "Âm nhạc (Music)"
      },
      {
        "word": "Leadsinger",
        "pos": "n. phr",
        "ipa": "/liːd ˈsɪŋ.ər/",
        "meaningVi": "Casĩhátchính",
        "topicId": 36,
        "topicName": "Âm nhạc (Music)"
      },
      {
        "word": "Guitarist",
        "pos": "n",
        "ipa": "/ɡɪˈtɑːr.ɪst/",
        "meaningVi": "Nghệsĩghi-ta",
        "topicId": 36,
        "topicName": "Âm nhạc (Music)"
      },
      {
        "word": "Drummer",
        "pos": "n",
        "ipa": "/ˈdrʌm.ər/",
        "meaningVi": "Ngườiđánhtrống",
        "topicId": 36,
        "topicName": "Âm nhạc (Music)"
      },
      {
        "word": "Lyrics",
        "pos": "n",
        "ipa": "/ˈlɪr.ɪks/",
        "meaningVi": "Lờibàihát",
        "topicId": 36,
        "topicName": "Âm nhạc (Music)"
      },
      {
        "word": "Chorus",
        "pos": "n",
        "ipa": "/ˈkɔːr.əs/",
        "meaningVi": "Điệpkhúc",
        "topicId": 36,
        "topicName": "Âm nhạc (Music)"
      },
      {
        "word": "Opera",
        "pos": "n",
        "ipa": "/ˈɑː.pə.rə/",
        "meaningVi": "Nhạckịch,ô-pê-ra",
        "topicId": 36,
        "topicName": "Âm nhạc (Music)"
      },
      {
        "word": "Folkmusic",
        "pos": "n. phr",
        "ipa": "/ˈfoʊkˌmjuː.zɪk/",
        "meaningVi": "Nhạcdângian",
        "topicId": 36,
        "topicName": "Âm nhạc (Music)"
      },
      {
        "word": "Album",
        "pos": "n",
        "ipa": "/ˈæl.bəm/",
        "meaningVi": "Tuyểntậpcakhúc",
        "topicId": 36,
        "topicName": "Âm nhạc (Music)"
      },
      {
        "word": "Tune",
        "pos": "n",
        "ipa": "/tjuːn/",
        "meaningVi": "Giaiđiệu",
        "topicId": 36,
        "topicName": "Âm nhạc (Music)"
      },
      {
        "word": "Violin",
        "pos": "n",
        "ipa": "/ˌvaɪəˈlɪn/",
        "meaningVi": "Đànvi-ô-lông",
        "topicId": 36,
        "topicName": "Âm nhạc (Music)"
      }
    ]
  },
  {
    "id": 37,
    "name": "Tình yêu (Love & Romance)",
    "wordCount": 19,
    "words": [
      {
        "word": "Date",
        "pos": "n",
        "ipa": "/deɪt/",
        "meaningVi": "Buổihẹnhò",
        "topicId": 37,
        "topicName": "Tình yêu (Love & Romance)"
      },
      {
        "word": "Engagement",
        "pos": "n",
        "ipa": "/ɪnˈɡeɪdʒ.mənt/",
        "meaningVi": "Đínhhôn",
        "topicId": 37,
        "topicName": "Tình yêu (Love & Romance)"
      },
      {
        "word": "Ring",
        "pos": "n",
        "ipa": "/rɪŋ/",
        "meaningVi": "Nhẫn",
        "topicId": 37,
        "topicName": "Tình yêu (Love & Romance)"
      },
      {
        "word": "Romantic",
        "pos": "adj",
        "ipa": "/roʊˈmæn.tɪk/",
        "meaningVi": "Lãngmạn",
        "topicId": 37,
        "topicName": "Tình yêu (Love & Romance)"
      },
      {
        "word": "Sweet",
        "pos": "adj",
        "ipa": "/swiːt/",
        "meaningVi": "Ngọtngào",
        "topicId": 37,
        "topicName": "Tình yêu (Love & Romance)"
      },
      {
        "word": "Alone",
        "pos": "adj",
        "ipa": "/əˈloʊn/",
        "meaningVi": "Mộtmình",
        "topicId": 37,
        "topicName": "Tình yêu (Love & Romance)"
      },
      {
        "word": "Couple",
        "pos": "n",
        "ipa": "/ˈkʌp.əl/",
        "meaningVi": "Cặpđôi",
        "topicId": 37,
        "topicName": "Tình yêu (Love & Romance)"
      },
      {
        "word": "Forever",
        "pos": "adv",
        "ipa": "/fɔːrˈɛv.ər/",
        "meaningVi": "Mãimãi",
        "topicId": 37,
        "topicName": "Tình yêu (Love & Romance)"
      },
      {
        "word": "Boyfriend",
        "pos": "n",
        "ipa": "/ˈbɔɪ.frɛnd/",
        "meaningVi": "Bạntrai",
        "topicId": 37,
        "topicName": "Tình yêu (Love & Romance)"
      },
      {
        "word": "Girlfriend",
        "pos": "n",
        "ipa": "/ˈɡɜːl.frɛnd/",
        "meaningVi": "Bạngái",
        "topicId": 37,
        "topicName": "Tình yêu (Love & Romance)"
      },
      {
        "word": "Kiss",
        "pos": "v",
        "ipa": "/kɪs/",
        "meaningVi": "Hôn",
        "topicId": 37,
        "topicName": "Tình yêu (Love & Romance)"
      },
      {
        "word": "Heart",
        "pos": "n",
        "ipa": "/hɑːrt/",
        "meaningVi": "Tráitim",
        "topicId": 37,
        "topicName": "Tình yêu (Love & Romance)"
      },
      {
        "word": "Hug",
        "pos": "v",
        "ipa": "/hʌɡ/",
        "meaningVi": "Ôm",
        "topicId": 37,
        "topicName": "Tình yêu (Love & Romance)"
      },
      {
        "word": "Propose",
        "pos": "v",
        "ipa": "/prəˈpoʊz/",
        "meaningVi": "Cầuhôn",
        "topicId": 37,
        "topicName": "Tình yêu (Love & Romance)"
      },
      {
        "word": "Chocolate",
        "pos": "n",
        "ipa": "/ˈtʃɒk.lɪt/",
        "meaningVi": "Sô-cô-la",
        "topicId": 37,
        "topicName": "Tình yêu (Love & Romance)"
      },
      {
        "word": "Wedding",
        "pos": "n",
        "ipa": "/ˈwɛd.ɪŋ/",
        "meaningVi": "Đámcưới",
        "topicId": 37,
        "topicName": "Tình yêu (Love & Romance)"
      },
      {
        "word": "Anniversary",
        "pos": "n",
        "ipa": "/ˌæn.ɪˈvɜː.sər.i/",
        "meaningVi": "Ngàykỷniệm",
        "topicId": 37,
        "topicName": "Tình yêu (Love & Romance)"
      },
      {
        "word": "Darling",
        "pos": "n",
        "ipa": "/ˈdɑːr.lɪŋ/",
        "meaningVi": "Emyêu,anhyêu",
        "topicId": 37,
        "topicName": "Tình yêu (Love & Romance)"
      },
      {
        "word": "Single",
        "pos": "adj",
        "ipa": "/ˈsɪŋ.ɡəl/",
        "meaningVi": "Độcthân",
        "topicId": 37,
        "topicName": "Tình yêu (Love & Romance)"
      }
    ]
  },
  {
    "id": 38,
    "name": "Nhà hàng & Khách sạn (Restaurant & Hotel)",
    "wordCount": 35,
    "words": [
      {
        "word": "Restaurant",
        "pos": "n",
        "ipa": "/ˈrɛs.tə.rɒnt/",
        "meaningVi": "Nhàhàng",
        "topicId": 38,
        "topicName": "Nhà hàng & Khách sạn (Restaurant & Hotel)"
      },
      {
        "word": "Maincourse",
        "pos": "n. phr",
        "ipa": "/meɪnkɔːrs/",
        "meaningVi": "Mónchính",
        "topicId": 38,
        "topicName": "Nhà hàng & Khách sạn (Restaurant & Hotel)"
      },
      {
        "word": "Napkin",
        "pos": "n",
        "ipa": "/ˈnæp.kɪn/",
        "meaningVi": "Khănăn",
        "topicId": 38,
        "topicName": "Nhà hàng & Khách sạn (Restaurant & Hotel)"
      },
      {
        "word": "Wine",
        "pos": "n",
        "ipa": "/waɪn/",
        "meaningVi": "Rượuvang",
        "topicId": 38,
        "topicName": "Nhà hàng & Khách sạn (Restaurant & Hotel)"
      },
      {
        "word": "Cutlery",
        "pos": "n",
        "ipa": "/ˈkʌt.lə.ri/",
        "meaningVi": "Dụngcụăn",
        "topicId": 38,
        "topicName": "Nhà hàng & Khách sạn (Restaurant & Hotel)"
      },
      {
        "word": "Drink",
        "pos": "n",
        "ipa": "/drɪŋk/",
        "meaningVi": "Đồuống",
        "topicId": 38,
        "topicName": "Nhà hàng & Khách sạn (Restaurant & Hotel)"
      },
      {
        "word": "Combo",
        "pos": "n",
        "ipa": "/ˈkɒm.boʊ/",
        "meaningVi": "Gói,bộ",
        "topicId": 38,
        "topicName": "Nhà hàng & Khách sạn (Restaurant & Hotel)"
      },
      {
        "word": "Sidedish",
        "pos": "n. phr",
        "ipa": "/saɪddɪʃ/",
        "meaningVi": "Đồănkèm",
        "topicId": 38,
        "topicName": "Nhà hàng & Khách sạn (Restaurant & Hotel)"
      },
      {
        "word": "Meal",
        "pos": "n",
        "ipa": "/miːl/",
        "meaningVi": "Bữaăn",
        "topicId": 38,
        "topicName": "Nhà hàng & Khách sạn (Restaurant & Hotel)"
      },
      {
        "word": "Order",
        "pos": "v",
        "ipa": "/ˈɔːr.dər/",
        "meaningVi": "Gọimón",
        "topicId": 38,
        "topicName": "Nhà hàng & Khách sạn (Restaurant & Hotel)"
      },
      {
        "word": "Speciality",
        "pos": "n",
        "ipa": "/ˌspeʃ.iˈæl.ə.ti/",
        "meaningVi": "Đặcsản",
        "topicId": 38,
        "topicName": "Nhà hàng & Khách sạn (Restaurant & Hotel)"
      },
      {
        "word": "Dessert",
        "pos": "n",
        "ipa": "/dɪˈzɜːrt/",
        "meaningVi": "Móntrángmiệng",
        "topicId": 38,
        "topicName": "Nhà hàng & Khách sạn (Restaurant & Hotel)"
      },
      {
        "word": "Salad",
        "pos": "n",
        "ipa": "/ˈsæl.əd/",
        "meaningVi": "Rautrộn",
        "topicId": 38,
        "topicName": "Nhà hàng & Khách sạn (Restaurant & Hotel)"
      },
      {
        "word": "Menu",
        "pos": "n",
        "ipa": "/ˈmɛnjuː/",
        "meaningVi": "Thựcđơn",
        "topicId": 38,
        "topicName": "Nhà hàng & Khách sạn (Restaurant & Hotel)"
      },
      {
        "word": "Waiter",
        "pos": "n",
        "ipa": "/ˈweɪ.tər/",
        "meaningVi": "Ngườihầubàn",
        "topicId": 38,
        "topicName": "Nhà hàng & Khách sạn (Restaurant & Hotel)"
      },
      {
        "word": "Guest",
        "pos": "n",
        "ipa": "/ɡɛst/",
        "meaningVi": "Khách",
        "topicId": 38,
        "topicName": "Nhà hàng & Khách sạn (Restaurant & Hotel)"
      },
      {
        "word": "Coupon",
        "pos": "n",
        "ipa": "/ˈkuː.pɒn/",
        "meaningVi": "Phiếugiảmgiá",
        "topicId": 38,
        "topicName": "Nhà hàng & Khách sạn (Restaurant & Hotel)"
      },
      {
        "word": "Neat",
        "pos": "adj",
        "ipa": "/niːt/",
        "meaningVi": "Gọngàng,ngăn",
        "topicId": 38,
        "topicName": "Nhà hàng & Khách sạn (Restaurant & Hotel)"
      },
      {
        "word": "Animated",
        "pos": "adj",
        "ipa": "/ˈæn.ɪˌmeɪ.tɪd/",
        "meaningVi": "Náonhiệt,sôinổi",
        "topicId": 38,
        "topicName": "Nhà hàng & Khách sạn (Restaurant & Hotel)"
      },
      {
        "word": "Hotel",
        "pos": "n",
        "ipa": "/hoʊˈtɛl/",
        "meaningVi": "Kháchsạn",
        "topicId": 38,
        "topicName": "Nhà hàng & Khách sạn (Restaurant & Hotel)"
      },
      {
        "word": "Housekeeper",
        "pos": "n",
        "ipa": "/ˈhaʊsˌkiː.pər/",
        "meaningVi": "Nhânviêndọn",
        "topicId": 38,
        "topicName": "Nhà hàng & Khách sạn (Restaurant & Hotel)"
      },
      {
        "word": "Hall",
        "pos": "n",
        "ipa": "/hɔːl/",
        "meaningVi": "Hànhlang",
        "topicId": 38,
        "topicName": "Nhà hàng & Khách sạn (Restaurant & Hotel)"
      },
      {
        "word": "Vacancy",
        "pos": "n",
        "ipa": "/ˈveɪ.kən.si/",
        "meaningVi": "Phòngtrống",
        "topicId": 38,
        "topicName": "Nhà hàng & Khách sạn (Restaurant & Hotel)"
      },
      {
        "word": "Lobby",
        "pos": "n",
        "ipa": "/ˈlɒb.i/",
        "meaningVi": "Hànhlang",
        "topicId": 38,
        "topicName": "Nhà hàng & Khách sạn (Restaurant & Hotel)"
      },
      {
        "word": "Concierge",
        "pos": "n",
        "ipa": "/kɒn.siˈɛrʒ/",
        "meaningVi": "Nhânviênhướng",
        "topicId": 38,
        "topicName": "Nhà hàng & Khách sạn (Restaurant & Hotel)"
      },
      {
        "word": "Check-in",
        "pos": "n",
        "ipa": "/ˈtʃɛk.ɪn/",
        "meaningVi": "Việcnhậnphòng",
        "topicId": 38,
        "topicName": "Nhà hàng & Khách sạn (Restaurant & Hotel)"
      },
      {
        "word": "Deskclerk",
        "pos": "n. phr",
        "ipa": "/dɛskklɜːrk/",
        "meaningVi": "Nhânviênlễtân",
        "topicId": 38,
        "topicName": "Nhà hàng & Khách sạn (Restaurant & Hotel)"
      },
      {
        "word": "Double bed",
        "pos": "n. phr",
        "ipa": "/ˈdʌb.əlbɛd/",
        "meaningVi": "Giườngđôi",
        "topicId": 38,
        "topicName": "Nhà hàng & Khách sạn (Restaurant & Hotel)"
      },
      {
        "word": "Single bed",
        "pos": "n. phr",
        "ipa": "/ˈsɪŋ.ɡəl bɛd/",
        "meaningVi": "Giườngđơn",
        "topicId": 38,
        "topicName": "Nhà hàng & Khách sạn (Restaurant & Hotel)"
      },
      {
        "word": "Doorman",
        "pos": "n",
        "ipa": "/ˈdɔːr.mən/",
        "meaningVi": "Nhânviêngáccửa",
        "topicId": 38,
        "topicName": "Nhà hàng & Khách sạn (Restaurant & Hotel)"
      },
      {
        "word": "Reception",
        "pos": "n",
        "ipa": "/rɪˈsɛp.ʃən/",
        "meaningVi": "Quầylễtân",
        "topicId": 38,
        "topicName": "Nhà hàng & Khách sạn (Restaurant & Hotel)"
      },
      {
        "word": "Elevator",
        "pos": "n",
        "ipa": "/ˈɛl.ɪˌveɪ.tər/",
        "meaningVi": "Thangmáy",
        "topicId": 38,
        "topicName": "Nhà hàng & Khách sạn (Restaurant & Hotel)"
      },
      {
        "word": "Reservation",
        "pos": "n",
        "ipa": "/ˌrɛz.ərˈveɪ.ʃən/",
        "meaningVi": "Sựđặtchỗtrước",
        "topicId": 38,
        "topicName": "Nhà hàng & Khách sạn (Restaurant & Hotel)"
      },
      {
        "word": "Bellboy",
        "pos": "n",
        "ipa": "/ˈbɛl.bɔɪ/",
        "meaningVi": "Ngườitrựctầng",
        "topicId": 38,
        "topicName": "Nhà hàng & Khách sạn (Restaurant & Hotel)"
      },
      {
        "word": "Checkout",
        "pos": "phrasalv",
        "ipa": "/ˈtʃɛk aʊt/",
        "meaningVi": "Trảphòng",
        "topicId": 38,
        "topicName": "Nhà hàng & Khách sạn (Restaurant & Hotel)"
      }
    ]
  },
  {
    "id": 39,
    "name": "Trường học (School & Classroom)",
    "wordCount": 39,
    "words": [
      {
        "word": "Nurseryschool",
        "pos": "n. phr",
        "ipa": "/ˈnɜː.sər.i skuːl/",
        "meaningVi": "Trườngmẫugiáo",
        "topicId": 39,
        "topicName": "Trường học (School & Classroom)"
      },
      {
        "word": "Teacher",
        "pos": "n",
        "ipa": "/ˈtiː.tʃər/",
        "meaningVi": "Giáoviên",
        "topicId": 39,
        "topicName": "Trường học (School & Classroom)"
      },
      {
        "word": "Classmate",
        "pos": "n",
        "ipa": "/ˈklæs.meɪt/",
        "meaningVi": "Bạncùnglớp",
        "topicId": 39,
        "topicName": "Trường học (School & Classroom)"
      },
      {
        "word": "Library",
        "pos": "n",
        "ipa": "/ˈlaɪ.brər.i/",
        "meaningVi": "Thưviện",
        "topicId": 39,
        "topicName": "Trường học (School & Classroom)"
      },
      {
        "word": "Pen",
        "pos": "n",
        "ipa": "/pɛn/",
        "meaningVi": "Bútmực",
        "topicId": 39,
        "topicName": "Trường học (School & Classroom)"
      },
      {
        "word": "Pencil",
        "pos": "n",
        "ipa": "/ˈpɛn.səl/",
        "meaningVi": "Bútchì",
        "topicId": 39,
        "topicName": "Trường học (School & Classroom)"
      },
      {
        "word": "Ruler",
        "pos": "n",
        "ipa": "/ˈruː.lər/",
        "meaningVi": "Câythước",
        "topicId": 39,
        "topicName": "Trường học (School & Classroom)"
      },
      {
        "word": "Calculator",
        "pos": "n",
        "ipa": "/ˈkæl.kjʊ.leɪ.tər/",
        "meaningVi": "Máytínhcầmtay",
        "topicId": 39,
        "topicName": "Trường học (School & Classroom)"
      },
      {
        "word": "Chalk",
        "pos": "n",
        "ipa": "/tʃɔːk/",
        "meaningVi": "Phấn",
        "topicId": 39,
        "topicName": "Trường học (School & Classroom)"
      },
      {
        "word": "Student",
        "pos": "n",
        "ipa": "/ˈstjuː.dənt/",
        "meaningVi": "Sinhviên,họcsinh",
        "topicId": 39,
        "topicName": "Trường học (School & Classroom)"
      },
      {
        "word": "Classroom",
        "pos": "n",
        "ipa": "/ˈklæs.ruːm/",
        "meaningVi": "Phònghọc",
        "topicId": 39,
        "topicName": "Trường học (School & Classroom)"
      },
      {
        "word": "Primaryschool",
        "pos": "n. phr",
        "ipa": "/ˈpraɪ.mə.riskuːl/",
        "meaningVi": "Trườngtiểuhọc",
        "topicId": 39,
        "topicName": "Trường học (School & Classroom)"
      },
      {
        "word": "Secondaryschool",
        "pos": "n. phr",
        "ipa": "/ˈsɛk.ən.dər.i skuːl/",
        "meaningVi": "Trườngtrunghọc",
        "topicId": 39,
        "topicName": "Trường học (School & Classroom)"
      },
      {
        "word": "Highschool",
        "pos": "n. phr",
        "ipa": "/haɪskuːl/",
        "meaningVi": "Trườngtrunghọc",
        "topicId": 39,
        "topicName": "Trường học (School & Classroom)"
      },
      {
        "word": "College",
        "pos": "n",
        "ipa": "/ˈkɒl.ɪdʒ/",
        "meaningVi": "Trườngđạihọc,",
        "topicId": 39,
        "topicName": "Trường học (School & Classroom)"
      },
      {
        "word": "University",
        "pos": "n",
        "ipa": "/ˌjuː.nɪˈvɜː.sə.ti/",
        "meaningVi": "Trườngđạihọc",
        "topicId": 39,
        "topicName": "Trường học (School & Classroom)"
      },
      {
        "word": "Principal",
        "pos": "n",
        "ipa": "/ˈprɪn.sɪ.pəl/",
        "meaningVi": "Hiệutrưởng",
        "topicId": 39,
        "topicName": "Trường học (School & Classroom)"
      },
      {
        "word": "Blackboard",
        "pos": "n",
        "ipa": "/ˈblæk.bɔːd/",
        "meaningVi": "Bảngđen",
        "topicId": 39,
        "topicName": "Trường học (School & Classroom)"
      },
      {
        "word": "Compass",
        "pos": "n",
        "ipa": "/ˈkʌm.pəs/",
        "meaningVi": "Com-pa",
        "topicId": 39,
        "topicName": "Trường học (School & Classroom)"
      },
      {
        "word": "History",
        "pos": "n",
        "ipa": "/ˈhɪs.tər.i/",
        "meaningVi": "Mônlịchsử",
        "topicId": 39,
        "topicName": "Trường học (School & Classroom)"
      },
      {
        "word": "Economics",
        "pos": "n",
        "ipa": "/ˌiː.kəˈnɒm.ɪks/",
        "meaningVi": "Kinhtếhọc",
        "topicId": 39,
        "topicName": "Trường học (School & Classroom)"
      },
      {
        "word": "Chemistry",
        "pos": "n",
        "ipa": "/ˈkɛm.ɪ.stri/",
        "meaningVi": "Hóahọc",
        "topicId": 39,
        "topicName": "Trường học (School & Classroom)"
      },
      {
        "word": "Biology",
        "pos": "n",
        "ipa": "/baɪˈɒl.ə.dʒi/",
        "meaningVi": "Sinhhọc",
        "topicId": 39,
        "topicName": "Trường học (School & Classroom)"
      },
      {
        "word": "IT",
        "pos": "n",
        "ipa": "/aɪˈtiː/",
        "meaningVi": "Côngnghệthông",
        "topicId": 39,
        "topicName": "Trường học (School & Classroom)"
      },
      {
        "word": "Geography",
        "pos": "n",
        "ipa": "/dʒɪˈɒɡ.rə.ff/",
        "meaningVi": "Địalý",
        "topicId": 39,
        "topicName": "Trường học (School & Classroom)"
      },
      {
        "word": "Art",
        "pos": "n",
        "ipa": "/ɑːrt/",
        "meaningVi": "Mỹthuật",
        "topicId": 39,
        "topicName": "Trường học (School & Classroom)"
      },
      {
        "word": "Fail",
        "pos": "v",
        "ipa": "/feɪl/",
        "meaningVi": "Rớt;đánhrớt",
        "topicId": 39,
        "topicName": "Trường học (School & Classroom)"
      },
      {
        "word": "Pass",
        "pos": "v",
        "ipa": "/pɑːs/",
        "meaningVi": "Đậu,đỗ(kỳthi)",
        "topicId": 39,
        "topicName": "Trường học (School & Classroom)"
      },
      {
        "word": "Graduate",
        "pos": "v",
        "ipa": "/ˈɡrædʒ.u.eɪt/",
        "meaningVi": "Tốt nghiệp",
        "topicId": 39,
        "topicName": "Trường học (School & Classroom)"
      },
      {
        "word": "Degree",
        "pos": "n",
        "ipa": "/dɪˈɡriː/",
        "meaningVi": "Bằngcấp",
        "topicId": 39,
        "topicName": "Trường học (School & Classroom)"
      },
      {
        "word": "Playground",
        "pos": "n",
        "ipa": "/ˈpleɪ.ɡraʊnd/",
        "meaningVi": "Sânchơi",
        "topicId": 39,
        "topicName": "Trường học (School & Classroom)"
      },
      {
        "word": "Uniform",
        "pos": "n",
        "ipa": "/ˈjuː.nɪ.fɔːm/",
        "meaningVi": "Đồngphục",
        "topicId": 39,
        "topicName": "Trường học (School & Classroom)"
      },
      {
        "word": "Grade",
        "pos": "n",
        "ipa": "/ɡreɪd/",
        "meaningVi": "Điểmsố",
        "topicId": 39,
        "topicName": "Trường học (School & Classroom)"
      },
      {
        "word": "Formteacher",
        "pos": "n. phr",
        "ipa": "/fɔːmˈtiː.tʃər/",
        "meaningVi": "Giáoviênchủ",
        "topicId": 39,
        "topicName": "Trường học (School & Classroom)"
      },
      {
        "word": "Proctor",
        "pos": "n",
        "ipa": "/ˈprɒk.tər/",
        "meaningVi": "Giámthị",
        "topicId": 39,
        "topicName": "Trường học (School & Classroom)"
      },
      {
        "word": "Schoolbag",
        "pos": "n. phr",
        "ipa": "/skuːl bæg/",
        "meaningVi": "Cặp",
        "topicId": 39,
        "topicName": "Trường học (School & Classroom)"
      },
      {
        "word": "Dean",
        "pos": "n",
        "ipa": "/diːn/",
        "meaningVi": "Trưởngkhoa",
        "topicId": 39,
        "topicName": "Trường học (School & Classroom)"
      },
      {
        "word": "Lesson",
        "pos": "n",
        "ipa": "/ˈles.ən/",
        "meaningVi": "Bàihọc",
        "topicId": 39,
        "topicName": "Trường học (School & Classroom)"
      },
      {
        "word": "Course",
        "pos": "n",
        "ipa": "/kɔːs/",
        "meaningVi": "Khoáhọc",
        "topicId": 39,
        "topicName": "Trường học (School & Classroom)"
      }
    ]
  },
  {
    "id": 40,
    "name": "Màu sắc (Colours)",
    "wordCount": 3,
    "words": [
      {
        "word": "Navyblue",
        "pos": "n. phr",
        "ipa": "/ˈneɪ.vi bluː/",
        "meaningVi": "Màuxanhnướcbiển",
        "topicId": 40,
        "topicName": "Màu sắc (Colours)"
      },
      {
        "word": "Brightred",
        "pos": "n. phr",
        "ipa": "/braɪtrɛd/",
        "meaningVi": "(màu)đỏtươi",
        "topicId": 40,
        "topicName": "Màu sắc (Colours)"
      },
      {
        "word": "Vivid",
        "pos": "adj",
        "ipa": "/ˈvɪv.ɪd/",
        "meaningVi": "Rựcrỡ",
        "topicId": 40,
        "topicName": "Màu sắc (Colours)"
      }
    ]
  },
  {
    "id": 41,
    "name": "Thời tiết (Weather)",
    "wordCount": 38,
    "words": [
      {
        "word": "Weather",
        "pos": "n",
        "ipa": "/ˈwɛð.ər/",
        "meaningVi": "Thờitiết",
        "topicId": 41,
        "topicName": "Thời tiết (Weather)"
      },
      {
        "word": "Warm",
        "pos": "adj",
        "ipa": "/wɔːrm/",
        "meaningVi": "Ấmáp,ấm",
        "topicId": 41,
        "topicName": "Thời tiết (Weather)"
      },
      {
        "word": "Wind",
        "pos": "n",
        "ipa": "/wɪnd/",
        "meaningVi": "Gió",
        "topicId": 41,
        "topicName": "Thời tiết (Weather)"
      },
      {
        "word": "Rain",
        "pos": "n",
        "ipa": "/reɪn/",
        "meaningVi": "Mưa",
        "topicId": 41,
        "topicName": "Thời tiết (Weather)"
      },
      {
        "word": "Temperature",
        "pos": "n",
        "ipa": "/ˈtɛm.prə.tʃər/",
        "meaningVi": "Nhiệtđộ",
        "topicId": 41,
        "topicName": "Thời tiết (Weather)"
      },
      {
        "word": "Weatherforecast",
        "pos": "n. phr",
        "ipa": "/ˈwɛð.ərˈfɔːr.kæst/",
        "meaningVi": "Bảntindựbáothời",
        "topicId": 41,
        "topicName": "Thời tiết (Weather)"
      },
      {
        "word": "Sunny",
        "pos": "n",
        "ipa": "/ˈsʌn.i/",
        "meaningVi": "Cónắng",
        "topicId": 41,
        "topicName": "Thời tiết (Weather)"
      },
      {
        "word": "Sunshine",
        "pos": "n",
        "ipa": "/ˈsʌn.ʃaɪn/",
        "meaningVi": "Ánhnắngmặttrời",
        "topicId": 41,
        "topicName": "Thời tiết (Weather)"
      },
      {
        "word": "Icy",
        "pos": "n",
        "ipa": "/ˈaɪ.si/",
        "meaningVi": "Lạnhlẽo",
        "topicId": 41,
        "topicName": "Thời tiết (Weather)"
      },
      {
        "word": "Atmosphere",
        "pos": "n",
        "ipa": "/ˈæt.mə.sfɪər/",
        "meaningVi": "Bầukhíquyển",
        "topicId": 41,
        "topicName": "Thời tiết (Weather)"
      },
      {
        "word": "Dry",
        "pos": "adj",
        "ipa": "/draɪ/",
        "meaningVi": "Khô",
        "topicId": 41,
        "topicName": "Thời tiết (Weather)"
      },
      {
        "word": "Sun",
        "pos": "n",
        "ipa": "/sʌn/",
        "meaningVi": "Mặttrời",
        "topicId": 41,
        "topicName": "Thời tiết (Weather)"
      },
      {
        "word": "Cloud",
        "pos": "n",
        "ipa": "/klaʊd/",
        "meaningVi": "Đámmây",
        "topicId": 41,
        "topicName": "Thời tiết (Weather)"
      },
      {
        "word": "Fog",
        "pos": "n",
        "ipa": "/fɔːɡ/",
        "meaningVi": "Sươngmù",
        "topicId": 41,
        "topicName": "Thời tiết (Weather)"
      },
      {
        "word": "Snow",
        "pos": "n",
        "ipa": "/snoʊ/",
        "meaningVi": "Tuyết",
        "topicId": 41,
        "topicName": "Thời tiết (Weather)"
      },
      {
        "word": "Cold",
        "pos": "adj",
        "ipa": "/koʊld/",
        "meaningVi": "Lạnh",
        "topicId": 41,
        "topicName": "Thời tiết (Weather)"
      },
      {
        "word": "Cool",
        "pos": "adj",
        "ipa": "/kuːl/",
        "meaningVi": "Mátmẻ",
        "topicId": 41,
        "topicName": "Thời tiết (Weather)"
      },
      {
        "word": "Hot",
        "pos": "adj",
        "ipa": "/hɒt/",
        "meaningVi": "Nóng",
        "topicId": 41,
        "topicName": "Thời tiết (Weather)"
      },
      {
        "word": "Wet",
        "pos": "adj",
        "ipa": "/wɛt/",
        "meaningVi": "Ẩmướt",
        "topicId": 41,
        "topicName": "Thời tiết (Weather)"
      },
      {
        "word": "Erratic",
        "pos": "adj",
        "ipa": "/ɪˈræt.ɪk/",
        "meaningVi": "Thấtthường",
        "topicId": 41,
        "topicName": "Thời tiết (Weather)"
      },
      {
        "word": "Thunder",
        "pos": "n",
        "ipa": "/ˈθʌn.dər/",
        "meaningVi": "Sấm",
        "topicId": 41,
        "topicName": "Thời tiết (Weather)"
      },
      {
        "word": "Hailstone",
        "pos": "n",
        "ipa": "/ˈheɪl.stoʊn/",
        "meaningVi": "Viênmưađá",
        "topicId": 41,
        "topicName": "Thời tiết (Weather)"
      },
      {
        "word": "Blustery",
        "pos": "adj",
        "ipa": "/ˈblʌs.tər.i/",
        "meaningVi": "Cógiólớn",
        "topicId": 41,
        "topicName": "Thời tiết (Weather)"
      },
      {
        "word": "Downpour",
        "pos": "n",
        "ipa": "/ˈdaʊn.pɔːr/",
        "meaningVi": "Mưalớn",
        "topicId": 41,
        "topicName": "Thời tiết (Weather)"
      },
      {
        "word": "Raincoat",
        "pos": "n",
        "ipa": "/ˈreɪn.koʊt/",
        "meaningVi": "Áomưa",
        "topicId": 41,
        "topicName": "Thời tiết (Weather)"
      },
      {
        "word": "Blizzard",
        "pos": "n",
        "ipa": "/ˈblɪz.ərd/",
        "meaningVi": "Bãotuyết",
        "topicId": 41,
        "topicName": "Thời tiết (Weather)"
      },
      {
        "word": "Rainbow",
        "pos": "n",
        "ipa": "/ˈreɪn.boʊ/",
        "meaningVi": "Cầuvồng",
        "topicId": 41,
        "topicName": "Thời tiết (Weather)"
      },
      {
        "word": "Dew",
        "pos": "n",
        "ipa": "/djuː/",
        "meaningVi": "Sương",
        "topicId": 41,
        "topicName": "Thời tiết (Weather)"
      },
      {
        "word": "Sleet",
        "pos": "n",
        "ipa": "/sliːt/",
        "meaningVi": "Mưatuyết",
        "topicId": 41,
        "topicName": "Thời tiết (Weather)"
      },
      {
        "word": "Stormy",
        "pos": "adj",
        "ipa": "/ˈstɔːr.mi/",
        "meaningVi": "Cóbão",
        "topicId": 41,
        "topicName": "Thời tiết (Weather)"
      },
      {
        "word": "Snowflake",
        "pos": "n",
        "ipa": "/ˈsnoʊ.fleɪk/",
        "meaningVi": "Bôngtuyết",
        "topicId": 41,
        "topicName": "Thời tiết (Weather)"
      },
      {
        "word": "Puddle",
        "pos": "n",
        "ipa": "/ˈpʌd.əl/",
        "meaningVi": "Vũngnướcmưa",
        "topicId": 41,
        "topicName": "Thời tiết (Weather)"
      },
      {
        "word": "Lightning",
        "pos": "n",
        "ipa": "/ˈlaɪt.nɪŋ/",
        "meaningVi": "Tiachớp",
        "topicId": 41,
        "topicName": "Thời tiết (Weather)"
      },
      {
        "word": "Mild",
        "pos": "adj",
        "ipa": "/maɪld/",
        "meaningVi": "Ônhoà",
        "topicId": 41,
        "topicName": "Thời tiết (Weather)"
      },
      {
        "word": "Dull",
        "pos": "adj",
        "ipa": "/dʌl/",
        "meaningVi": "Uám",
        "topicId": 41,
        "topicName": "Thời tiết (Weather)"
      },
      {
        "word": "Shelter",
        "pos": "n",
        "ipa": "/ˈʃɛl.tər/",
        "meaningVi": "Chỗtrúẩn",
        "topicId": 41,
        "topicName": "Thời tiết (Weather)"
      },
      {
        "word": "Celsius",
        "pos": "adj",
        "ipa": "/ˈsɛl.si.əs/",
        "meaningVi": "(thuộc)độC",
        "topicId": 41,
        "topicName": "Thời tiết (Weather)"
      },
      {
        "word": "Fine",
        "pos": "n",
        "ipa": "/faɪn/",
        "meaningVi": "Đẹp",
        "topicId": 41,
        "topicName": "Thời tiết (Weather)"
      }
    ]
  },
  {
    "id": 42,
    "name": "Quần áo & Trang phục (Clothes & Fashion)",
    "wordCount": 38,
    "words": [
      {
        "word": "Skirt",
        "pos": "n",
        "ipa": "/skɜːrt/",
        "meaningVi": "Váy",
        "topicId": 42,
        "topicName": "Quần áo & Trang phục (Clothes & Fashion)"
      },
      {
        "word": "Leggings",
        "pos": "n",
        "ipa": "/ˈlɛɡ.ɪŋz/",
        "meaningVi": "Quầnbó",
        "topicId": 42,
        "topicName": "Quần áo & Trang phục (Clothes & Fashion)"
      },
      {
        "word": "Overalls",
        "pos": "n",
        "ipa": "/ˈoʊ.vər.ɔːlz/",
        "meaningVi": "Quầnyếm",
        "topicId": 42,
        "topicName": "Quần áo & Trang phục (Clothes & Fashion)"
      },
      {
        "word": "Turtleneck",
        "pos": "n",
        "ipa": "/ˈtɜːr.tl̩.nɛk/",
        "meaningVi": "Áocổlọ",
        "topicId": 42,
        "topicName": "Quần áo & Trang phục (Clothes & Fashion)"
      },
      {
        "word": "Bowtie",
        "pos": "n. phr",
        "ipa": "/ˈboʊtaɪ/",
        "meaningVi": "Nơconbướm",
        "topicId": 42,
        "topicName": "Quần áo & Trang phục (Clothes & Fashion)"
      },
      {
        "word": "Tie",
        "pos": "n",
        "ipa": "/taɪ/",
        "meaningVi": "Càvạt",
        "topicId": 42,
        "topicName": "Quần áo & Trang phục (Clothes & Fashion)"
      },
      {
        "word": "Tunic",
        "pos": "n",
        "ipa": "/ˈtuː.nɪk/",
        "meaningVi": "Áotrùmhông",
        "topicId": 42,
        "topicName": "Quần áo & Trang phục (Clothes & Fashion)"
      },
      {
        "word": "Vest",
        "pos": "n",
        "ipa": "/vɛst/",
        "meaningVi": "Áogi-lê",
        "topicId": 42,
        "topicName": "Quần áo & Trang phục (Clothes & Fashion)"
      },
      {
        "word": "T-shirt",
        "pos": "n",
        "ipa": "/ˈtiː.ʃɜːrt/",
        "meaningVi": "Áothun",
        "topicId": 42,
        "topicName": "Quần áo & Trang phục (Clothes & Fashion)"
      },
      {
        "word": "Shirt",
        "pos": "n",
        "ipa": "/ʃɜːrt/",
        "meaningVi": "Áosơmi",
        "topicId": 42,
        "topicName": "Quần áo & Trang phục (Clothes & Fashion)"
      },
      {
        "word": "Jeans",
        "pos": "n",
        "ipa": "/dʒiːnz/",
        "meaningVi": "Quầnjean",
        "topicId": 42,
        "topicName": "Quần áo & Trang phục (Clothes & Fashion)"
      },
      {
        "word": "Dress",
        "pos": "n",
        "ipa": "/drɛs/",
        "meaningVi": "Áođầm",
        "topicId": 42,
        "topicName": "Quần áo & Trang phục (Clothes & Fashion)"
      },
      {
        "word": "Coat",
        "pos": "n",
        "ipa": "/koʊt/",
        "meaningVi": "Áokhoác",
        "topicId": 42,
        "topicName": "Quần áo & Trang phục (Clothes & Fashion)"
      },
      {
        "word": "Jacket",
        "pos": "n",
        "ipa": "/ˈdʒæk.ɪt/",
        "meaningVi": "Áokhoác",
        "topicId": 42,
        "topicName": "Quần áo & Trang phục (Clothes & Fashion)"
      },
      {
        "word": "Sweater",
        "pos": "n",
        "ipa": "/ˈswɛt.ər/",
        "meaningVi": "Áolen",
        "topicId": 42,
        "topicName": "Quần áo & Trang phục (Clothes & Fashion)"
      },
      {
        "word": "Jumpsuit",
        "pos": "n",
        "ipa": "/ˈdʒʌmp.suːt/",
        "meaningVi": "Bộáoliềnquần",
        "topicId": 42,
        "topicName": "Quần áo & Trang phục (Clothes & Fashion)"
      },
      {
        "word": "Shorts",
        "pos": "n",
        "ipa": "/ʃɔːrts/",
        "meaningVi": "Quầnđùi",
        "topicId": 42,
        "topicName": "Quần áo & Trang phục (Clothes & Fashion)"
      },
      {
        "word": "Suit",
        "pos": "n",
        "ipa": "/suːt/",
        "meaningVi": "Bộcomlê",
        "topicId": 42,
        "topicName": "Quần áo & Trang phục (Clothes & Fashion)"
      },
      {
        "word": "Anorak",
        "pos": "n",
        "ipa": "/ˈæn.ə.ræk/",
        "meaningVi": "Áongoàicómũ",
        "topicId": 42,
        "topicName": "Quần áo & Trang phục (Clothes & Fashion)"
      },
      {
        "word": "Hat",
        "pos": "n",
        "ipa": "/hæt/",
        "meaningVi": "Mũ,nón",
        "topicId": 42,
        "topicName": "Quần áo & Trang phục (Clothes & Fashion)"
      },
      {
        "word": "Cap",
        "pos": "n",
        "ipa": "/kæp/",
        "meaningVi": "Mũlưỡitrai",
        "topicId": 42,
        "topicName": "Quần áo & Trang phục (Clothes & Fashion)"
      },
      {
        "word": "Glove",
        "pos": "n",
        "ipa": "/ɡlʌv/",
        "meaningVi": "Găngtay",
        "topicId": 42,
        "topicName": "Quần áo & Trang phục (Clothes & Fashion)"
      },
      {
        "word": "Scarf",
        "pos": "n",
        "ipa": "/skɑːrf/",
        "meaningVi": "Khănchoàngcổ",
        "topicId": 42,
        "topicName": "Quần áo & Trang phục (Clothes & Fashion)"
      },
      {
        "word": "Sandals",
        "pos": "n",
        "ipa": "/ˈsæn.dəlz/",
        "meaningVi": "Giàyxăng-đan",
        "topicId": 42,
        "topicName": "Quần áo & Trang phục (Clothes & Fashion)"
      },
      {
        "word": "Slippers",
        "pos": "n",
        "ipa": "/ˈslɪp.ərz/",
        "meaningVi": "Đôidép",
        "topicId": 42,
        "topicName": "Quần áo & Trang phục (Clothes & Fashion)"
      },
      {
        "word": "Pocket",
        "pos": "n",
        "ipa": "/ˈpɒk.ɪt/",
        "meaningVi": "Túi(quầnáo)",
        "topicId": 42,
        "topicName": "Quần áo & Trang phục (Clothes & Fashion)"
      },
      {
        "word": "Sleeve",
        "pos": "n",
        "ipa": "/sliːv/",
        "meaningVi": "Tayáo",
        "topicId": 42,
        "topicName": "Quần áo & Trang phục (Clothes & Fashion)"
      },
      {
        "word": "Collar",
        "pos": "n",
        "ipa": "/ˈkɒl.ər/",
        "meaningVi": "Cổáo",
        "topicId": 42,
        "topicName": "Quần áo & Trang phục (Clothes & Fashion)"
      },
      {
        "word": "Zip",
        "pos": "n",
        "ipa": "/zɪp/",
        "meaningVi": "Khóakéo",
        "topicId": 42,
        "topicName": "Quần áo & Trang phục (Clothes & Fashion)"
      },
      {
        "word": "Blouse",
        "pos": "n",
        "ipa": "/blaʊs/",
        "meaningVi": "Áosơminữ",
        "topicId": 42,
        "topicName": "Quần áo & Trang phục (Clothes & Fashion)"
      },
      {
        "word": "Button",
        "pos": "n",
        "ipa": "/ˈbʌt.ən/",
        "meaningVi": "Khuy,nút",
        "topicId": 42,
        "topicName": "Quần áo & Trang phục (Clothes & Fashion)"
      },
      {
        "word": "Underwear",
        "pos": "n",
        "ipa": "/ˈʌn.dərˌwɛər/",
        "meaningVi": "Đồlót",
        "topicId": 42,
        "topicName": "Quần áo & Trang phục (Clothes & Fashion)"
      },
      {
        "word": "Bra",
        "pos": "n",
        "ipa": "/brɑː/",
        "meaningVi": "Áongực",
        "topicId": 42,
        "topicName": "Quần áo & Trang phục (Clothes & Fashion)"
      },
      {
        "word": "Pants",
        "pos": "n",
        "ipa": "/pænts/",
        "meaningVi": "Quầndài",
        "topicId": 42,
        "topicName": "Quần áo & Trang phục (Clothes & Fashion)"
      },
      {
        "word": "Belt",
        "pos": "n",
        "ipa": "/bɛlt/",
        "meaningVi": "Dâynịt",
        "topicId": 42,
        "topicName": "Quần áo & Trang phục (Clothes & Fashion)"
      },
      {
        "word": "Highheels",
        "pos": "n. phr",
        "ipa": "/haɪhiːlz/",
        "meaningVi": "Giàycaogót",
        "topicId": 42,
        "topicName": "Quần áo & Trang phục (Clothes & Fashion)"
      },
      {
        "word": "Tryon",
        "pos": "phrasalv",
        "ipa": "/traɪ ɒn/",
        "meaningVi": "Thử(quầnáo)",
        "topicId": 42,
        "topicName": "Quần áo & Trang phục (Clothes & Fashion)"
      },
      {
        "word": "Size",
        "pos": "n",
        "ipa": "/saɪz/",
        "meaningVi": "Kíchcỡ",
        "topicId": 42,
        "topicName": "Quần áo & Trang phục (Clothes & Fashion)"
      }
    ]
  },
  {
    "id": 43,
    "name": "Bộ phận cơ thể (Body parts)",
    "wordCount": 30,
    "words": [
      {
        "word": "Head",
        "pos": "n",
        "ipa": "/hɛd/",
        "meaningVi": "Đầu",
        "topicId": 43,
        "topicName": "Bộ phận cơ thể (Body parts)"
      },
      {
        "word": "Face",
        "pos": "n",
        "ipa": "/feɪs/",
        "meaningVi": "Khuônmặt",
        "topicId": 43,
        "topicName": "Bộ phận cơ thể (Body parts)"
      },
      {
        "word": "Hair",
        "pos": "n",
        "ipa": "/hɛr/",
        "meaningVi": "Tóc",
        "topicId": 43,
        "topicName": "Bộ phận cơ thể (Body parts)"
      },
      {
        "word": "Ear",
        "pos": "n",
        "ipa": "/ɪr/",
        "meaningVi": "Tai",
        "topicId": 43,
        "topicName": "Bộ phận cơ thể (Body parts)"
      },
      {
        "word": "Neck",
        "pos": "n",
        "ipa": "/nɛk/",
        "meaningVi": "Cổ",
        "topicId": 43,
        "topicName": "Bộ phận cơ thể (Body parts)"
      },
      {
        "word": "Forehead",
        "pos": "n",
        "ipa": "/ˈfɔːrˌhɛd/",
        "meaningVi": "Trán",
        "topicId": 43,
        "topicName": "Bộ phận cơ thể (Body parts)"
      },
      {
        "word": "Beard",
        "pos": "n",
        "ipa": "/bɪrd/",
        "meaningVi": "Râu",
        "topicId": 43,
        "topicName": "Bộ phận cơ thể (Body parts)"
      },
      {
        "word": "Eye",
        "pos": "n",
        "ipa": "/aɪ/",
        "meaningVi": "Mắt",
        "topicId": 43,
        "topicName": "Bộ phận cơ thể (Body parts)"
      },
      {
        "word": "Nose",
        "pos": "n",
        "ipa": "/noʊz/",
        "meaningVi": "Mũi",
        "topicId": 43,
        "topicName": "Bộ phận cơ thể (Body parts)"
      },
      {
        "word": "Mouth",
        "pos": "n",
        "ipa": "/maʊθ/",
        "meaningVi": "Miệng",
        "topicId": 43,
        "topicName": "Bộ phận cơ thể (Body parts)"
      },
      {
        "word": "Chin",
        "pos": "n",
        "ipa": "/tʃɪn/",
        "meaningVi": "Cằm",
        "topicId": 43,
        "topicName": "Bộ phận cơ thể (Body parts)"
      },
      {
        "word": "Shoulder",
        "pos": "n",
        "ipa": "/ˈʃoʊl.dər/",
        "meaningVi": "Vai",
        "topicId": 43,
        "topicName": "Bộ phận cơ thể (Body parts)"
      },
      {
        "word": "Elbow",
        "pos": "n",
        "ipa": "/ˈɛl.boʊ/",
        "meaningVi": "Khuỷutay",
        "topicId": 43,
        "topicName": "Bộ phận cơ thể (Body parts)"
      },
      {
        "word": "Arm",
        "pos": "n",
        "ipa": "/ɑ:rm/",
        "meaningVi": "Cánhtay",
        "topicId": 43,
        "topicName": "Bộ phận cơ thể (Body parts)"
      },
      {
        "word": "Chest",
        "pos": "n",
        "ipa": "/tʃɛst/",
        "meaningVi": "Ngực",
        "topicId": 43,
        "topicName": "Bộ phận cơ thể (Body parts)"
      },
      {
        "word": "Armpit",
        "pos": "n",
        "ipa": "/ˈɑ:rmˌpɪt/",
        "meaningVi": "Nách",
        "topicId": 43,
        "topicName": "Bộ phận cơ thể (Body parts)"
      },
      {
        "word": "Wrist",
        "pos": "n",
        "ipa": "/rɪst/",
        "meaningVi": "Cổtay",
        "topicId": 43,
        "topicName": "Bộ phận cơ thể (Body parts)"
      },
      {
        "word": "Navel",
        "pos": "n",
        "ipa": "/ˈneɪ.vəl/",
        "meaningVi": "Rún,rốn",
        "topicId": 43,
        "topicName": "Bộ phận cơ thể (Body parts)"
      },
      {
        "word": "Ankle",
        "pos": "n",
        "ipa": "/ˈæŋ.kəl/",
        "meaningVi": "Mắtcáchân",
        "topicId": 43,
        "topicName": "Bộ phận cơ thể (Body parts)"
      },
      {
        "word": "Waist",
        "pos": "n",
        "ipa": "/weɪst/",
        "meaningVi": "Eo",
        "topicId": 43,
        "topicName": "Bộ phận cơ thể (Body parts)"
      },
      {
        "word": "Abdomen",
        "pos": "n",
        "ipa": "/ˈæb.də.mən/",
        "meaningVi": "Bụng",
        "topicId": 43,
        "topicName": "Bộ phận cơ thể (Body parts)"
      },
      {
        "word": "Leg",
        "pos": "n",
        "ipa": "/lɛɡ/",
        "meaningVi": "Chân",
        "topicId": 43,
        "topicName": "Bộ phận cơ thể (Body parts)"
      },
      {
        "word": "Thigh",
        "pos": "n",
        "ipa": "/θaɪ/",
        "meaningVi": "Đùi",
        "topicId": 43,
        "topicName": "Bộ phận cơ thể (Body parts)"
      },
      {
        "word": "Knee",
        "pos": "n",
        "ipa": "/niː/",
        "meaningVi": "Đầugối",
        "topicId": 43,
        "topicName": "Bộ phận cơ thể (Body parts)"
      },
      {
        "word": "Hand",
        "pos": "n",
        "ipa": "/hænd/",
        "meaningVi": "Bàntay",
        "topicId": 43,
        "topicName": "Bộ phận cơ thể (Body parts)"
      },
      {
        "word": "Thumb",
        "pos": "n",
        "ipa": "/θʌm/",
        "meaningVi": "Ngóntaycái",
        "topicId": 43,
        "topicName": "Bộ phận cơ thể (Body parts)"
      },
      {
        "word": "Back",
        "pos": "n",
        "ipa": "/bæk/",
        "meaningVi": "Lưng",
        "topicId": 43,
        "topicName": "Bộ phận cơ thể (Body parts)"
      },
      {
        "word": "Foot",
        "pos": "n",
        "ipa": "/fʊt/",
        "meaningVi": "Bànchân",
        "topicId": 43,
        "topicName": "Bộ phận cơ thể (Body parts)"
      },
      {
        "word": "Finger",
        "pos": "n",
        "ipa": "/ˈfɪŋ.ɡər/",
        "meaningVi": "Ngóntay",
        "topicId": 43,
        "topicName": "Bộ phận cơ thể (Body parts)"
      },
      {
        "word": "Toe",
        "pos": "n",
        "ipa": "/toʊ/",
        "meaningVi": "Ngónchân",
        "topicId": 43,
        "topicName": "Bộ phận cơ thể (Body parts)"
      }
    ]
  },
  {
    "id": 44,
    "name": "Giáo dục (Education)",
    "wordCount": 55,
    "words": [
      {
        "word": "Publicschool",
        "pos": "n. phr",
        "ipa": "/ˈpʌb.lɪk skuːl/",
        "meaningVi": "Trườngcônglập",
        "topicId": 44,
        "topicName": "Giáo dục (Education)"
      },
      {
        "word": "Privateschool",
        "pos": "n. phr",
        "ipa": "/ˈpraɪ.vɪt skuːl/",
        "meaningVi": "Trườngtưthục",
        "topicId": 44,
        "topicName": "Giáo dục (Education)"
      },
      {
        "word": "Secondaryschool",
        "pos": "n. phr",
        "ipa": "/ˈsɛk.ənˌdɛr.i skuːl/",
        "meaningVi": "Trườngtrunghọc",
        "topicId": 44,
        "topicName": "Giáo dục (Education)"
      },
      {
        "word": "Highschool",
        "pos": "n. phr",
        "ipa": "/haɪskuːl/",
        "meaningVi": "Trườngtrunghọc",
        "topicId": 44,
        "topicName": "Giáo dục (Education)"
      },
      {
        "word": "Primaryschool",
        "pos": "n",
        "ipa": "/ˈpraɪˌmɛr.i skuːl/",
        "meaningVi": "Trườngtiểuhọc",
        "topicId": 44,
        "topicName": "Giáo dục (Education)"
      },
      {
        "word": "Nurseryschool",
        "pos": "n. phr",
        "ipa": "/ˈnɜːr.sər.i skuːl/",
        "meaningVi": "Trườngmẫugiáo",
        "topicId": 44,
        "topicName": "Giáo dục (Education)"
      },
      {
        "word": "School",
        "pos": "n",
        "ipa": "/skuːl/",
        "meaningVi": "Trườnghọc",
        "topicId": 44,
        "topicName": "Giáo dục (Education)"
      },
      {
        "word": "College",
        "pos": "n",
        "ipa": "/ˈkɒl.ɪdʒ/",
        "meaningVi": "Trườngđạihọc,",
        "topicId": 44,
        "topicName": "Giáo dục (Education)"
      },
      {
        "word": "University",
        "pos": "n",
        "ipa": "/ˌjuː.nɪˈvɜːr.sə.ti/",
        "meaningVi": "Trườngđạihọc",
        "topicId": 44,
        "topicName": "Giáo dục (Education)"
      },
      {
        "word": "Professor",
        "pos": "n",
        "ipa": "/prəˈfɛs.ər/",
        "meaningVi": "Giáosư",
        "topicId": 44,
        "topicName": "Giáo dục (Education)"
      },
      {
        "word": "Lecturer",
        "pos": "n",
        "ipa": "/ˈlɛk.tʃər.ər/",
        "meaningVi": "Giảngviên",
        "topicId": 44,
        "topicName": "Giáo dục (Education)"
      },
      {
        "word": "Researcher",
        "pos": "n",
        "ipa": "/rɪˈsɜːr.tʃər/",
        "meaningVi": "Nghiêncứuviên",
        "topicId": 44,
        "topicName": "Giáo dục (Education)"
      },
      {
        "word": "Graduate",
        "pos": "v",
        "ipa": "/ˈɡrædʒ.u.eɪt/",
        "meaningVi": "Tốtnghiệp",
        "topicId": 44,
        "topicName": "Giáo dục (Education)"
      },
      {
        "word": "Degree",
        "pos": "n",
        "ipa": "/dɪˈɡriː/",
        "meaningVi": "Bằngcấp",
        "topicId": 44,
        "topicName": "Giáo dục (Education)"
      },
      {
        "word": "Thesis",
        "pos": "n",
        "ipa": "/ˈθiː.sɪs/",
        "meaningVi": "Luậnvăn,luậnán",
        "topicId": 44,
        "topicName": "Giáo dục (Education)"
      },
      {
        "word": "Lecture",
        "pos": "n",
        "ipa": "/ˈlɛk.tʃər/",
        "meaningVi": "Bàigiảng,bài",
        "topicId": 44,
        "topicName": "Giáo dục (Education)"
      },
      {
        "word": "Debate",
        "pos": "n",
        "ipa": "/dɪˈbeɪt/",
        "meaningVi": "Cuộctranhluận",
        "topicId": 44,
        "topicName": "Giáo dục (Education)"
      },
      {
        "word": "Semester",
        "pos": "n",
        "ipa": "/sɪˈmɛs.tər/",
        "meaningVi": "Họckỳ",
        "topicId": 44,
        "topicName": "Giáo dục (Education)"
      },
      {
        "word": "Student",
        "pos": "n",
        "ipa": "/ˈstjuː.dənt/",
        "meaningVi": "Sinhviên,họcsinh",
        "topicId": 44,
        "topicName": "Giáo dục (Education)"
      },
      {
        "word": "Tuitionfee",
        "pos": "n. phr",
        "ipa": "/tjuːˈɪʃ.ən ffː/",
        "meaningVi": "Họcphí",
        "topicId": 44,
        "topicName": "Giáo dục (Education)"
      },
      {
        "word": "Exam",
        "pos": "n",
        "ipa": "/ɪɡˈzæm/",
        "meaningVi": "Bàithi,kìthi",
        "topicId": 44,
        "topicName": "Giáo dục (Education)"
      },
      {
        "word": "Fail",
        "pos": "v",
        "ipa": "/feɪl/",
        "meaningVi": "Thitrượt",
        "topicId": 44,
        "topicName": "Giáo dục (Education)"
      },
      {
        "word": "Pass",
        "pos": "v",
        "ipa": "/pæs/",
        "meaningVi": "Đậu,đỗ",
        "topicId": 44,
        "topicName": "Giáo dục (Education)"
      },
      {
        "word": "Study",
        "pos": "v",
        "ipa": "/ˈstʌd.i/",
        "meaningVi": "Học",
        "topicId": 44,
        "topicName": "Giáo dục (Education)"
      },
      {
        "word": "Learn",
        "pos": "v",
        "ipa": "/lɜːrn/",
        "meaningVi": "Học",
        "topicId": 44,
        "topicName": "Giáo dục (Education)"
      },
      {
        "word": "Curriculum",
        "pos": "n",
        "ipa": "/kəˈrɪk.jə.ləm/",
        "meaningVi": "Chươngtrìnhgiảng",
        "topicId": 44,
        "topicName": "Giáo dục (Education)"
      },
      {
        "word": "Course",
        "pos": "n",
        "ipa": "/kɔːrs/",
        "meaningVi": "Khóahọc",
        "topicId": 44,
        "topicName": "Giáo dục (Education)"
      },
      {
        "word": "Subject",
        "pos": "n",
        "ipa": "/ˈsʌb.dʒɪkt/",
        "meaningVi": "Mônhọc",
        "topicId": 44,
        "topicName": "Giáo dục (Education)"
      },
      {
        "word": "Grade",
        "pos": "n",
        "ipa": "/ɡreɪd/",
        "meaningVi": "Điểmsố",
        "topicId": 44,
        "topicName": "Giáo dục (Education)"
      },
      {
        "word": "Mark",
        "pos": "n",
        "ipa": "/mɑːrk/",
        "meaningVi": "Điểmsố",
        "topicId": 44,
        "topicName": "Giáo dục (Education)"
      },
      {
        "word": "Qualiffcation",
        "pos": "n",
        "ipa": "/ˌkwɒl.ɪ.fɪˈkeɪ.ʃən/",
        "meaningVi": "Trìnhđộchuyên",
        "topicId": 44,
        "topicName": "Giáo dục (Education)"
      },
      {
        "word": "Attendance",
        "pos": "n",
        "ipa": "/əˈtɛn.dəns/",
        "meaningVi": "Sựcómặt",
        "topicId": 44,
        "topicName": "Giáo dục (Education)"
      },
      {
        "word": "Absence",
        "pos": "n",
        "ipa": "/ˈæb.səns/",
        "meaningVi": "Sựvắngmặt",
        "topicId": 44,
        "topicName": "Giáo dục (Education)"
      },
      {
        "word": "Projector",
        "pos": "n",
        "ipa": "/prəˈdʒɛk.tər/",
        "meaningVi": "Máychiếu",
        "topicId": 44,
        "topicName": "Giáo dục (Education)"
      },
      {
        "word": "Textbook",
        "pos": "n",
        "ipa": "/ˈtɛkstˌbʊk/",
        "meaningVi": "Sáchgiáokhoa",
        "topicId": 44,
        "topicName": "Giáo dục (Education)"
      },
      {
        "word": "Question",
        "pos": "n",
        "ipa": "/ˈkwɛs.tʃən/",
        "meaningVi": "Câuhỏi",
        "topicId": 44,
        "topicName": "Giáo dục (Education)"
      },
      {
        "word": "Answer",
        "pos": "v",
        "ipa": "/ˈæn.sər/",
        "meaningVi": "Trảlời",
        "topicId": 44,
        "topicName": "Giáo dục (Education)"
      },
      {
        "word": "Mistake",
        "pos": "n",
        "ipa": "/mɪˈsteɪk/",
        "meaningVi": "Sailầm,lỗi",
        "topicId": 44,
        "topicName": "Giáo dục (Education)"
      },
      {
        "word": "Right",
        "pos": "adj",
        "ipa": "/raɪt/",
        "meaningVi": "Đúng",
        "topicId": 44,
        "topicName": "Giáo dục (Education)"
      },
      {
        "word": "Wrong",
        "pos": "adj",
        "ipa": "/rɒŋ/",
        "meaningVi": "Sai",
        "topicId": 44,
        "topicName": "Giáo dục (Education)"
      },
      {
        "word": "Register",
        "pos": "n",
        "ipa": "/ˈrɛdʒ.ɪ.stər/",
        "meaningVi": "Sổsách",
        "topicId": 44,
        "topicName": "Giáo dục (Education)"
      },
      {
        "word": "Assembly",
        "pos": "n",
        "ipa": "/əˈsɛm.bli/",
        "meaningVi": "Cuộchọp",
        "topicId": 44,
        "topicName": "Giáo dục (Education)"
      },
      {
        "word": "Holiday",
        "pos": "n",
        "ipa": "/ˈhɒl.ɪ.deɪ/",
        "meaningVi": "Kỳnghỉ",
        "topicId": 44,
        "topicName": "Giáo dục (Education)"
      },
      {
        "word": "Teacher",
        "pos": "n",
        "ipa": "/ˈtiː.tʃər/",
        "meaningVi": "Giáoviên",
        "topicId": 44,
        "topicName": "Giáo dục (Education)"
      },
      {
        "word": "Pupil",
        "pos": "n",
        "ipa": "/ˈpjuː.pəl/",
        "meaningVi": "Họcsinh",
        "topicId": 44,
        "topicName": "Giáo dục (Education)"
      },
      {
        "word": "Playground",
        "pos": "n",
        "ipa": "/ˈpleɪ.ɡraʊnd/",
        "meaningVi": "Sânchơi",
        "topicId": 44,
        "topicName": "Giáo dục (Education)"
      },
      {
        "word": "Library",
        "pos": "n",
        "ipa": "/ˈlaɪ.brər.i/",
        "meaningVi": "Thưviện",
        "topicId": 44,
        "topicName": "Giáo dục (Education)"
      },
      {
        "word": "Hall",
        "pos": "n",
        "ipa": "/hɔːl/",
        "meaningVi": "Hộitrường",
        "topicId": 44,
        "topicName": "Giáo dục (Education)"
      },
      {
        "word": "Dormitory",
        "pos": "n",
        "ipa": "/ˈdɔːr.mɪ.tɔːr.i/",
        "meaningVi": "Kýtúcxá",
        "topicId": 44,
        "topicName": "Giáo dục (Education)"
      },
      {
        "word": "Locker",
        "pos": "n",
        "ipa": "/ˈlɒk.ər/",
        "meaningVi": "Tủcókhoá",
        "topicId": 44,
        "topicName": "Giáo dục (Education)"
      },
      {
        "word": "Classroom",
        "pos": "n",
        "ipa": "/ˈklæs.ruːm/",
        "meaningVi": "Phònghọc",
        "topicId": 44,
        "topicName": "Giáo dục (Education)"
      },
      {
        "word": "Chalk",
        "pos": "n",
        "ipa": "/tʃɔːk/",
        "meaningVi": "Phấn",
        "topicId": 44,
        "topicName": "Giáo dục (Education)"
      },
      {
        "word": "Lesson",
        "pos": "n",
        "ipa": "/ˈlɛs.ən/",
        "meaningVi": "Bàihọc",
        "topicId": 44,
        "topicName": "Giáo dục (Education)"
      },
      {
        "word": "Homework",
        "pos": "n",
        "ipa": "/ˈhoʊm.wɜːrk/",
        "meaningVi": "Bàitậpvềnhà",
        "topicId": 44,
        "topicName": "Giáo dục (Education)"
      },
      {
        "word": "Test",
        "pos": "n",
        "ipa": "/tɛst/",
        "meaningVi": "Bàikiểmtra",
        "topicId": 44,
        "topicName": "Giáo dục (Education)"
      }
    ]
  },
  {
    "id": 45,
    "name": "Gia đình (Family)",
    "wordCount": 41,
    "words": [
      {
        "word": "Husband",
        "pos": "n",
        "ipa": "/ˈhʌz.bənd/",
        "meaningVi": "Chồng",
        "topicId": 45,
        "topicName": "Gia đình (Family)"
      },
      {
        "word": "Grandson",
        "pos": "n",
        "ipa": "/ˈɡrænd.sʌn/",
        "meaningVi": "Cháutrai(củaông",
        "topicId": 45,
        "topicName": "Gia đình (Family)"
      },
      {
        "word": "Uncle",
        "pos": "n",
        "ipa": "/ˈʌŋ.kəl/",
        "meaningVi": "Chú,cậu,…",
        "topicId": 45,
        "topicName": "Gia đình (Family)"
      },
      {
        "word": "Aunt",
        "pos": "n",
        "ipa": "/ænt/",
        "meaningVi": "Cô,dì,…",
        "topicId": 45,
        "topicName": "Gia đình (Family)"
      },
      {
        "word": "Niece",
        "pos": "n",
        "ipa": "/niːs/",
        "meaningVi": "Cháugái(củacô,",
        "topicId": 45,
        "topicName": "Gia đình (Family)"
      },
      {
        "word": "Nephew",
        "pos": "n",
        "ipa": "/ˈnɛ.vjuː/",
        "meaningVi": "Cháutrai(củacô,",
        "topicId": 45,
        "topicName": "Gia đình (Family)"
      },
      {
        "word": "Son-in-law",
        "pos": "n",
        "ipa": "/ˈsʌnɪnlɔː/",
        "meaningVi": "Conrể",
        "topicId": 45,
        "topicName": "Gia đình (Family)"
      },
      {
        "word": "Daughter-in-law",
        "pos": "n",
        "ipa": "/ˈdɔː.tər ɪn lɔː/",
        "meaningVi": "Condâu",
        "topicId": 45,
        "topicName": "Gia đình (Family)"
      },
      {
        "word": "Granddaughter",
        "pos": "n",
        "ipa": "/ˈɡrændˌdɔː.tər/",
        "meaningVi": "Cháugái(củaông",
        "topicId": 45,
        "topicName": "Gia đình (Family)"
      },
      {
        "word": "Grandfather",
        "pos": "n",
        "ipa": "/ˈɡrændˌfɑː.ðər/",
        "meaningVi": "Ôngnội,ôngngoại",
        "topicId": 45,
        "topicName": "Gia đình (Family)"
      },
      {
        "word": "Wife",
        "pos": "n",
        "ipa": "/waɪf/",
        "meaningVi": "Vợ",
        "topicId": 45,
        "topicName": "Gia đình (Family)"
      },
      {
        "word": "Father",
        "pos": "n",
        "ipa": "/ˈfɑː.ðər/",
        "meaningVi": "Bố",
        "topicId": 45,
        "topicName": "Gia đình (Family)"
      },
      {
        "word": "Mother",
        "pos": "n",
        "ipa": "/ˈmʌð.ər/",
        "meaningVi": "Mẹ",
        "topicId": 45,
        "topicName": "Gia đình (Family)"
      },
      {
        "word": "Daughter",
        "pos": "n",
        "ipa": "/ˈdɔː.tər/",
        "meaningVi": "Congái",
        "topicId": 45,
        "topicName": "Gia đình (Family)"
      },
      {
        "word": "Son",
        "pos": "n",
        "ipa": "/sʌn/",
        "meaningVi": "Contrai",
        "topicId": 45,
        "topicName": "Gia đình (Family)"
      },
      {
        "word": "Sister",
        "pos": "n",
        "ipa": "/ˈsɪs.tər/",
        "meaningVi": "Chịgái,emgái",
        "topicId": 45,
        "topicName": "Gia đình (Family)"
      },
      {
        "word": "Brother",
        "pos": "n",
        "ipa": "/ˈbrʌð.ər/",
        "meaningVi": "Anhtrai,emtrai",
        "topicId": 45,
        "topicName": "Gia đình (Family)"
      },
      {
        "word": "Grandmother",
        "pos": "n",
        "ipa": "/ˈɡrændˌmʌð.ər/",
        "meaningVi": "Bànội,bàngoại",
        "topicId": 45,
        "topicName": "Gia đình (Family)"
      },
      {
        "word": "Anh",
        "pos": "noun",
        "ipa": "/emrểˌanh/",
        "meaningVi": "em",
        "topicId": 45,
        "topicName": "Gia đình (Family)"
      },
      {
        "word": "Brother-in-law",
        "pos": "n",
        "ipa": "/ˈbrʌð.ərɪnlɔː/",
        "meaningVi": "",
        "topicId": 45,
        "topicName": "Gia đình (Family)"
      },
      {
        "word": "Cousin",
        "pos": "n",
        "ipa": "/ˈkʌz.ɪn/",
        "meaningVi": "Anhhọ,emhọ",
        "topicId": 45,
        "topicName": "Gia đình (Family)"
      },
      {
        "word": "Parent",
        "pos": "n",
        "ipa": "/ˈpɛr.ənt/",
        "meaningVi": "Bố,mẹ",
        "topicId": 45,
        "topicName": "Gia đình (Family)"
      },
      {
        "word": "Relative",
        "pos": "n",
        "ipa": "/ˈrɛl.ə.tɪv/",
        "meaningVi": "Họhàng,người",
        "topicId": 45,
        "topicName": "Gia đình (Family)"
      },
      {
        "word": "Mother-in-law",
        "pos": "n",
        "ipa": "/ˈmʌð.ərɪnlɔː/",
        "meaningVi": "Mẹchồng,mẹvợ",
        "topicId": 45,
        "topicName": "Gia đình (Family)"
      },
      {
        "word": "Father-in-law",
        "pos": "n",
        "ipa": "/ˈfɑː.ðər ɪn lɔː/",
        "meaningVi": "Bốchồng,bốvợ",
        "topicId": 45,
        "topicName": "Gia đình (Family)"
      },
      {
        "word": "Chị",
        "pos": "noun",
        "ipa": "/emdâuˌchị/",
        "meaningVi": "em",
        "topicId": 45,
        "topicName": "Gia đình (Family)"
      },
      {
        "word": "Sister-in-law",
        "pos": "n",
        "ipa": "/ˈsɪs.tər ɪn lɔː/",
        "meaningVi": "",
        "topicId": 45,
        "topicName": "Gia đình (Family)"
      },
      {
        "word": "Adopt",
        "pos": "v",
        "ipa": "/əˈdɒpt/",
        "meaningVi": "Nhậnconnuôi",
        "topicId": 45,
        "topicName": "Gia đình (Family)"
      },
      {
        "word": "Children",
        "pos": "n",
        "ipa": "/ˈtʃɪl.drən/",
        "meaningVi": "Concái",
        "topicId": 45,
        "topicName": "Gia đình (Family)"
      },
      {
        "word": "Takecareof",
        "pos": "v. phr",
        "ipa": "/teɪkkɛərəv/",
        "meaningVi": "Chămsóc,quan",
        "topicId": 45,
        "topicName": "Gia đình (Family)"
      },
      {
        "word": "Familytree",
        "pos": "n. phr",
        "ipa": "/ˈfæm.ə.litriː/",
        "meaningVi": "Giaphả",
        "topicId": 45,
        "topicName": "Gia đình (Family)"
      },
      {
        "word": "Anniversary",
        "pos": "n",
        "ipa": "/ˌæn.ɪˈvɜː.sə.ri/",
        "meaningVi": "Ngàykỷniệm",
        "topicId": 45,
        "topicName": "Gia đình (Family)"
      },
      {
        "word": "Stepchild",
        "pos": "n",
        "ipa": "/ˈstɛpˌtʃaɪld/",
        "meaningVi": "Conriêng",
        "topicId": 45,
        "topicName": "Gia đình (Family)"
      },
      {
        "word": "Half-brother",
        "pos": "n",
        "ipa": "/ˈhɑːfˌbrʌð.ər/",
        "meaningVi": "(cùngcha/mẹkhác",
        "topicId": 45,
        "topicName": "Gia đình (Family)"
      },
      {
        "word": "Half-sister",
        "pos": "n",
        "ipa": "/ˈhɑːfˌsɪs.tər/",
        "meaningVi": "(cùngcha/mẹkhác",
        "topicId": 45,
        "topicName": "Gia đình (Family)"
      },
      {
        "word": "Godfather",
        "pos": "n",
        "ipa": "/ˈɡɒdˌfɑː.ðər/",
        "meaningVi": "Chađỡđầu",
        "topicId": 45,
        "topicName": "Gia đình (Family)"
      },
      {
        "word": "Hereditary",
        "pos": "adj",
        "ipa": "/həˈrɛd.ɪ.tər.i/",
        "meaningVi": "Ditruyền",
        "topicId": 45,
        "topicName": "Gia đình (Family)"
      },
      {
        "word": "Stepmother",
        "pos": "n",
        "ipa": "/ˈstɛpˌmʌð.ər/",
        "meaningVi": "Mẹkế",
        "topicId": 45,
        "topicName": "Gia đình (Family)"
      },
      {
        "word": "Stepfather",
        "pos": "n",
        "ipa": "/ˈstɛpˌfɑː.ðər/",
        "meaningVi": "Chadượng",
        "topicId": 45,
        "topicName": "Gia đình (Family)"
      },
      {
        "word": "Orphan",
        "pos": "n",
        "ipa": "/ˈɔːr.fən/",
        "meaningVi": "Trẻmồcôi",
        "topicId": 45,
        "topicName": "Gia đình (Family)"
      },
      {
        "word": "Generation",
        "pos": "n",
        "ipa": "/ˌdʒɛn.əˈreɪ.ʃən/",
        "meaningVi": "Thếhệ",
        "topicId": 45,
        "topicName": "Gia đình (Family)"
      }
    ]
  },
  {
    "id": 46,
    "name": "Trái cây (Fruits)",
    "wordCount": 37,
    "words": [
      {
        "word": "Orange",
        "pos": "n",
        "ipa": "/ˈɔːr.ɪndʒ/",
        "meaningVi": "Quảcam",
        "topicId": 46,
        "topicName": "Trái cây (Fruits)"
      },
      {
        "word": "Lemon",
        "pos": "n",
        "ipa": "/ˈlɛm.ən/",
        "meaningVi": "Quảchanh",
        "topicId": 46,
        "topicName": "Trái cây (Fruits)"
      },
      {
        "word": "Mango",
        "pos": "n",
        "ipa": "/ˈmæŋ.ɡoʊ/",
        "meaningVi": "Quảxoài",
        "topicId": 46,
        "topicName": "Trái cây (Fruits)"
      },
      {
        "word": "Apple",
        "pos": "n",
        "ipa": "/ˈæp.əl/",
        "meaningVi": "Quảtáo",
        "topicId": 46,
        "topicName": "Trái cây (Fruits)"
      },
      {
        "word": "Tangerine",
        "pos": "n",
        "ipa": "/ˌtæn.dʒəˈriːn/",
        "meaningVi": "Quảquýt",
        "topicId": 46,
        "topicName": "Trái cây (Fruits)"
      },
      {
        "word": "Grape",
        "pos": "n",
        "ipa": "/ɡreɪp/",
        "meaningVi": "Quảnho",
        "topicId": 46,
        "topicName": "Trái cây (Fruits)"
      },
      {
        "word": "Strawberry",
        "pos": "n",
        "ipa": "/ˈstrɔːˌbɛr.i/",
        "meaningVi": "Quảdâutây",
        "topicId": 46,
        "topicName": "Trái cây (Fruits)"
      },
      {
        "word": "Melon",
        "pos": "n",
        "ipa": "/ˈmɛl.ən/",
        "meaningVi": "Quảdưa",
        "topicId": 46,
        "topicName": "Trái cây (Fruits)"
      },
      {
        "word": "Passionfruit",
        "pos": "n. phr",
        "ipa": "/ˈpæʃ.ənˌfruːt/",
        "meaningVi": "Quảchanhdây",
        "topicId": 46,
        "topicName": "Trái cây (Fruits)"
      },
      {
        "word": "Grapefruit",
        "pos": "n",
        "ipa": "/ˈɡreɪpˌfruːt/",
        "meaningVi": "Quảbưởichùm",
        "topicId": 46,
        "topicName": "Trái cây (Fruits)"
      },
      {
        "word": "Watermelon",
        "pos": "n",
        "ipa": "/ˈwɔː.tərˌmɛl.ən/",
        "meaningVi": "Quảdưahấu",
        "topicId": 46,
        "topicName": "Trái cây (Fruits)"
      },
      {
        "word": "Peach",
        "pos": "n",
        "ipa": "/piːtʃ/",
        "meaningVi": "Quảđào",
        "topicId": 46,
        "topicName": "Trái cây (Fruits)"
      },
      {
        "word": "Pear",
        "pos": "n",
        "ipa": "/pɛr/",
        "meaningVi": "Quảlê",
        "topicId": 46,
        "topicName": "Trái cây (Fruits)"
      },
      {
        "word": "Banana",
        "pos": "n",
        "ipa": "/bəˈnæn.ə/",
        "meaningVi": "Quảchuối",
        "topicId": 46,
        "topicName": "Trái cây (Fruits)"
      },
      {
        "word": "Plum",
        "pos": "n",
        "ipa": "/plʌm/",
        "meaningVi": "Quảmận",
        "topicId": 46,
        "topicName": "Trái cây (Fruits)"
      },
      {
        "word": "Papaya",
        "pos": "n",
        "ipa": "/pəˈpaɪ.ə/",
        "meaningVi": "Quảđuđủ",
        "topicId": 46,
        "topicName": "Trái cây (Fruits)"
      },
      {
        "word": "Avocado",
        "pos": "n",
        "ipa": "/ˌæv.əˈkɑː.doʊ/",
        "meaningVi": "Quảbơ",
        "topicId": 46,
        "topicName": "Trái cây (Fruits)"
      },
      {
        "word": "Starfruit",
        "pos": "n",
        "ipa": "/ˈstɑːrˌfruːt/",
        "meaningVi": "Quảkhế",
        "topicId": 46,
        "topicName": "Trái cây (Fruits)"
      },
      {
        "word": "Pineapple",
        "pos": "n",
        "ipa": "/ˈpaɪnˌæp.əl/",
        "meaningVi": "Quảdứa",
        "topicId": 46,
        "topicName": "Trái cây (Fruits)"
      },
      {
        "word": "Coconut",
        "pos": "n",
        "ipa": "/ˈkoʊ.kəˌnʌt/",
        "meaningVi": "Quảdừa",
        "topicId": 46,
        "topicName": "Trái cây (Fruits)"
      },
      {
        "word": "Raspberry",
        "pos": "n",
        "ipa": "/ˈræzˌbɛr.i/",
        "meaningVi": "Quảmâmxôi",
        "topicId": 46,
        "topicName": "Trái cây (Fruits)"
      },
      {
        "word": "Nectarine",
        "pos": "n",
        "ipa": "/ˈnɛk.təˌriːn/",
        "meaningVi": "Quảxuânđào",
        "topicId": 46,
        "topicName": "Trái cây (Fruits)"
      },
      {
        "word": "Mulberry",
        "pos": "n",
        "ipa": "/ˈmʌlˌbɛr.i/",
        "meaningVi": "Quảdâutằm",
        "topicId": 46,
        "topicName": "Trái cây (Fruits)"
      },
      {
        "word": "Raisin",
        "pos": "n",
        "ipa": "/ˈreɪ.zən/",
        "meaningVi": "Nhokhô",
        "topicId": 46,
        "topicName": "Trái cây (Fruits)"
      },
      {
        "word": "Jackfruit",
        "pos": "n",
        "ipa": "/ˈdʒækˌfruːt/",
        "meaningVi": "Quảmít",
        "topicId": 46,
        "topicName": "Trái cây (Fruits)"
      },
      {
        "word": "Persimmon",
        "pos": "n",
        "ipa": "/pərˈsɪm.ən/",
        "meaningVi": "Quảhồng",
        "topicId": 46,
        "topicName": "Trái cây (Fruits)"
      },
      {
        "word": "Custardapple",
        "pos": "n. phr",
        "ipa": "/ˈkʌs.tərdˌæp.əl/",
        "meaningVi": "Quảna",
        "topicId": 46,
        "topicName": "Trái cây (Fruits)"
      },
      {
        "word": "Quince",
        "pos": "n",
        "ipa": "/kwɪns/",
        "meaningVi": "Quảmộcqua",
        "topicId": 46,
        "topicName": "Trái cây (Fruits)"
      },
      {
        "word": "Cherry",
        "pos": "n",
        "ipa": "/ˈtʃɛr.i/",
        "meaningVi": "Quảanhđào",
        "topicId": 46,
        "topicName": "Trái cây (Fruits)"
      },
      {
        "word": "Kiwi",
        "pos": "n",
        "ipa": "/ˈkiː.wi/",
        "meaningVi": "Quảkiwi",
        "topicId": 46,
        "topicName": "Trái cây (Fruits)"
      },
      {
        "word": "Pomegranate",
        "pos": "n",
        "ipa": "/ˈpɒm.ɪˌɡræn.ɪt/",
        "meaningVi": "Quảlựu",
        "topicId": 46,
        "topicName": "Trái cây (Fruits)"
      },
      {
        "word": "Guava",
        "pos": "n",
        "ipa": "/ˈɡwɑː.və/",
        "meaningVi": "Quảổi",
        "topicId": 46,
        "topicName": "Trái cây (Fruits)"
      },
      {
        "word": "Apricot",
        "pos": "n",
        "ipa": "/ˈeɪ.prɪˌkɒt/",
        "meaningVi": "Quảmơ",
        "topicId": 46,
        "topicName": "Trái cây (Fruits)"
      },
      {
        "word": "Blueberry",
        "pos": "n",
        "ipa": "/ˈbluːˌbɛr.i/",
        "meaningVi": "Quảviệtquất",
        "topicId": 46,
        "topicName": "Trái cây (Fruits)"
      },
      {
        "word": "Durian",
        "pos": "n",
        "ipa": "/ˈdʊr.i.ən/",
        "meaningVi": "Quảsầuriêng",
        "topicId": 46,
        "topicName": "Trái cây (Fruits)"
      },
      {
        "word": "Lychee",
        "pos": "n",
        "ipa": "/ˈlaɪ.tʃiː/",
        "meaningVi": "Quảvải",
        "topicId": 46,
        "topicName": "Trái cây (Fruits)"
      },
      {
        "word": "Tamarind",
        "pos": "n",
        "ipa": "/ˈtæm.ər.ɪnd/",
        "meaningVi": "Quảme",
        "topicId": 46,
        "topicName": "Trái cây (Fruits)"
      }
    ]
  },
  {
    "id": 47,
    "name": "Động vật (Animals)",
    "wordCount": 40,
    "words": [
      {
        "word": "Piglet",
        "pos": "n",
        "ipa": "/ˈpɪɡ.lɪt/",
        "meaningVi": "Lợncon",
        "topicId": 47,
        "topicName": "Động vật (Animals)"
      },
      {
        "word": "Sow",
        "pos": "n",
        "ipa": "/saʊ/",
        "meaningVi": "Lợncái",
        "topicId": 47,
        "topicName": "Động vật (Animals)"
      },
      {
        "word": "Pig",
        "pos": "n",
        "ipa": "/pɪɡ/",
        "meaningVi": "Lợn",
        "topicId": 47,
        "topicName": "Động vật (Animals)"
      },
      {
        "word": "Duck",
        "pos": "n",
        "ipa": "/dʌk/",
        "meaningVi": "Vịt",
        "topicId": 47,
        "topicName": "Động vật (Animals)"
      },
      {
        "word": "Animal",
        "pos": "n",
        "ipa": "/ˈæn.ɪ.məl/",
        "meaningVi": "Độngvật",
        "topicId": 47,
        "topicName": "Động vật (Animals)"
      },
      {
        "word": "Goat",
        "pos": "n",
        "ipa": "/ɡoʊt/",
        "meaningVi": "Dê",
        "topicId": 47,
        "topicName": "Động vật (Animals)"
      },
      {
        "word": "Horse",
        "pos": "n",
        "ipa": "/hɔːrs/",
        "meaningVi": "Ngựa",
        "topicId": 47,
        "topicName": "Động vật (Animals)"
      },
      {
        "word": "Goose",
        "pos": "n",
        "ipa": "/ɡuːs/",
        "meaningVi": "Ngỗng",
        "topicId": 47,
        "topicName": "Động vật (Animals)"
      },
      {
        "word": "Donkey",
        "pos": "n",
        "ipa": "/ˈdɒŋ.ki/",
        "meaningVi": "Lừa",
        "topicId": 47,
        "topicName": "Động vật (Animals)"
      },
      {
        "word": "Sheep",
        "pos": "n",
        "ipa": "/ʃiːp/",
        "meaningVi": "Cừu",
        "topicId": 47,
        "topicName": "Động vật (Animals)"
      },
      {
        "word": "Ox",
        "pos": "n",
        "ipa": "/ɒks/",
        "meaningVi": "Bò",
        "topicId": 47,
        "topicName": "Động vật (Animals)"
      },
      {
        "word": "Dog",
        "pos": "n",
        "ipa": "/dɒɡ/",
        "meaningVi": "Chó",
        "topicId": 47,
        "topicName": "Động vật (Animals)"
      },
      {
        "word": "Cat",
        "pos": "n",
        "ipa": "/kæt/",
        "meaningVi": "Mèo",
        "topicId": 47,
        "topicName": "Động vật (Animals)"
      },
      {
        "word": "Chicken",
        "pos": "n",
        "ipa": "/ˈtʃɪk.ɪn/",
        "meaningVi": "Gà",
        "topicId": 47,
        "topicName": "Động vật (Animals)"
      },
      {
        "word": "Rooster",
        "pos": "n",
        "ipa": "/ˈruː.stər/",
        "meaningVi": "Gàtrống",
        "topicId": 47,
        "topicName": "Động vật (Animals)"
      },
      {
        "word": "Hen",
        "pos": "n",
        "ipa": "/hɛn/",
        "meaningVi": "Gàmái",
        "topicId": 47,
        "topicName": "Động vật (Animals)"
      },
      {
        "word": "Cow",
        "pos": "n",
        "ipa": "/kaʊ/",
        "meaningVi": "Bòcái",
        "topicId": 47,
        "topicName": "Động vật (Animals)"
      },
      {
        "word": "Bull",
        "pos": "n",
        "ipa": "/bʊl/",
        "meaningVi": "Bòđực",
        "topicId": 47,
        "topicName": "Động vật (Animals)"
      },
      {
        "word": "Calf",
        "pos": "n",
        "ipa": "/kɑːf/",
        "meaningVi": "Bê",
        "topicId": 47,
        "topicName": "Động vật (Animals)"
      },
      {
        "word": "Rabbit",
        "pos": "n",
        "ipa": "/ˈræb.ɪt/",
        "meaningVi": "Thỏ",
        "topicId": 47,
        "topicName": "Động vật (Animals)"
      },
      {
        "word": "Owl",
        "pos": "n",
        "ipa": "/aʊl/",
        "meaningVi": "Cú",
        "topicId": 47,
        "topicName": "Động vật (Animals)"
      },
      {
        "word": "Deer",
        "pos": "n",
        "ipa": "/dɪr/",
        "meaningVi": "Hươu,nai",
        "topicId": 47,
        "topicName": "Động vật (Animals)"
      },
      {
        "word": "Mink",
        "pos": "n",
        "ipa": "/mɪŋk/",
        "meaningVi": "Chồnvizon",
        "topicId": 47,
        "topicName": "Động vật (Animals)"
      },
      {
        "word": "Monkey",
        "pos": "n",
        "ipa": "/ˈmʌŋ.ki/",
        "meaningVi": "Khỉ",
        "topicId": 47,
        "topicName": "Động vật (Animals)"
      },
      {
        "word": "Snake",
        "pos": "n",
        "ipa": "/sneɪk/",
        "meaningVi": "Rắn",
        "topicId": 47,
        "topicName": "Động vật (Animals)"
      },
      {
        "word": "Lizard",
        "pos": "n",
        "ipa": "/ˈlɪz.ərd/",
        "meaningVi": "Thằnlằn",
        "topicId": 47,
        "topicName": "Động vật (Animals)"
      },
      {
        "word": "Giraffe",
        "pos": "n",
        "ipa": "/dʒəˈræf/",
        "meaningVi": "Hươucaocổ",
        "topicId": 47,
        "topicName": "Động vật (Animals)"
      },
      {
        "word": "Bear",
        "pos": "n",
        "ipa": "/bɛr/",
        "meaningVi": "Gấu",
        "topicId": 47,
        "topicName": "Động vật (Animals)"
      },
      {
        "word": "Rhino",
        "pos": "n",
        "ipa": "/ˈraɪ.noʊ/",
        "meaningVi": "Têgiác",
        "topicId": 47,
        "topicName": "Động vật (Animals)"
      },
      {
        "word": "Elephant",
        "pos": "n",
        "ipa": "/ˈɛl.ɪ.fənt/",
        "meaningVi": "Voi",
        "topicId": 47,
        "topicName": "Động vật (Animals)"
      },
      {
        "word": "Panther",
        "pos": "n",
        "ipa": "/ˈpæn.θər/",
        "meaningVi": "Báođen",
        "topicId": 47,
        "topicName": "Động vật (Animals)"
      },
      {
        "word": "Leopard",
        "pos": "n",
        "ipa": "/ˈlɛp.ərd/",
        "meaningVi": "Báo",
        "topicId": 47,
        "topicName": "Động vật (Animals)"
      },
      {
        "word": "Tiger",
        "pos": "n",
        "ipa": "/ˈtaɪ.ɡər/",
        "meaningVi": "Hổ",
        "topicId": 47,
        "topicName": "Động vật (Animals)"
      },
      {
        "word": "Lion",
        "pos": "n",
        "ipa": "/ˈlaɪ.ən/",
        "meaningVi": "Sưtử",
        "topicId": 47,
        "topicName": "Động vật (Animals)"
      },
      {
        "word": "Fox",
        "pos": "n",
        "ipa": "/fɒks/",
        "meaningVi": "Cáo",
        "topicId": 47,
        "topicName": "Động vật (Animals)"
      },
      {
        "word": "Dinosaur",
        "pos": "n",
        "ipa": "/ˈdaɪ.nəˌsɔːr/",
        "meaningVi": "Khủnglong",
        "topicId": 47,
        "topicName": "Động vật (Animals)"
      },
      {
        "word": "Turtle",
        "pos": "n",
        "ipa": "/ˈtɜːr.təl/",
        "meaningVi": "Rùabiển",
        "topicId": 47,
        "topicName": "Động vật (Animals)"
      },
      {
        "word": "Snail",
        "pos": "n",
        "ipa": "/sneɪl/",
        "meaningVi": "Ốcsên",
        "topicId": 47,
        "topicName": "Động vật (Animals)"
      },
      {
        "word": "Crow",
        "pos": "n",
        "ipa": "/kroʊ/",
        "meaningVi": "Quạ",
        "topicId": 47,
        "topicName": "Động vật (Animals)"
      },
      {
        "word": "Parrot",
        "pos": "n",
        "ipa": "/ˈpær.ət/",
        "meaningVi": "Vẹt",
        "topicId": 47,
        "topicName": "Động vật (Animals)"
      }
    ]
  },
  {
    "id": 48,
    "name": "Côn trùng (Insects)",
    "wordCount": 18,
    "words": [
      {
        "word": "Caterpillar",
        "pos": "n",
        "ipa": "/ˈkæt.ərˌpɪl.ər/",
        "meaningVi": "Sâubướm",
        "topicId": 48,
        "topicName": "Côn trùng (Insects)"
      },
      {
        "word": "Cocoon",
        "pos": "n",
        "ipa": "/kəˈkuːn/",
        "meaningVi": "Cáikén(tằm)",
        "topicId": 48,
        "topicName": "Côn trùng (Insects)"
      },
      {
        "word": "Butterfly",
        "pos": "n",
        "ipa": "/ˈbʌt.ərˌflaɪ/",
        "meaningVi": "Bướm",
        "topicId": 48,
        "topicName": "Côn trùng (Insects)"
      },
      {
        "word": "Dragonfly",
        "pos": "n",
        "ipa": "/ˈdræɡ.ənˌflaɪ/",
        "meaningVi": "Chuồnchuồn",
        "topicId": 48,
        "topicName": "Côn trùng (Insects)"
      },
      {
        "word": "Cricket",
        "pos": "n",
        "ipa": "/ˈkrɪk.ɪt/",
        "meaningVi": "Dế",
        "topicId": 48,
        "topicName": "Côn trùng (Insects)"
      },
      {
        "word": "Grasshopper",
        "pos": "n",
        "ipa": "/ˈɡræsˌhɒp.ər/",
        "meaningVi": "Châuchấu",
        "topicId": 48,
        "topicName": "Côn trùng (Insects)"
      },
      {
        "word": "Cockroach",
        "pos": "n",
        "ipa": "/ˈkɒkˌroʊtʃ/",
        "meaningVi": "Gián",
        "topicId": 48,
        "topicName": "Côn trùng (Insects)"
      },
      {
        "word": "Beetle",
        "pos": "n",
        "ipa": "/ˈbiː.təl/",
        "meaningVi": "Bọcánhcứng",
        "topicId": 48,
        "topicName": "Côn trùng (Insects)"
      },
      {
        "word": "Termite",
        "pos": "n",
        "ipa": "/ˈtɜːr.maɪt/",
        "meaningVi": "Mối",
        "topicId": 48,
        "topicName": "Côn trùng (Insects)"
      },
      {
        "word": "Ant",
        "pos": "n",
        "ipa": "/ænt/",
        "meaningVi": "Kiến",
        "topicId": 48,
        "topicName": "Côn trùng (Insects)"
      },
      {
        "word": "Mosquito",
        "pos": "n",
        "ipa": "/məˈskiː.toʊ/",
        "meaningVi": "Muỗi",
        "topicId": 48,
        "topicName": "Côn trùng (Insects)"
      },
      {
        "word": "Ladybug",
        "pos": "n",
        "ipa": "/ˈleɪ.diˌbʌɡ/",
        "meaningVi": "Bọrùa",
        "topicId": 48,
        "topicName": "Côn trùng (Insects)"
      },
      {
        "word": "Spider",
        "pos": "n",
        "ipa": "/ˈspaɪ.dər/",
        "meaningVi": "Nhện",
        "topicId": 48,
        "topicName": "Côn trùng (Insects)"
      },
      {
        "word": "Firefly",
        "pos": "n",
        "ipa": "/ˈfaɪrˌflaɪ/",
        "meaningVi": "Đomđóm",
        "topicId": 48,
        "topicName": "Côn trùng (Insects)"
      },
      {
        "word": "Fly",
        "pos": "n",
        "ipa": "/flaɪ/",
        "meaningVi": "Ruồi",
        "topicId": 48,
        "topicName": "Côn trùng (Insects)"
      },
      {
        "word": "Bee",
        "pos": "n",
        "ipa": "/biː/",
        "meaningVi": "Ong",
        "topicId": 48,
        "topicName": "Côn trùng (Insects)"
      },
      {
        "word": "Wasp",
        "pos": "n",
        "ipa": "/wɒsp/",
        "meaningVi": "Ongbắpcày",
        "topicId": 48,
        "topicName": "Côn trùng (Insects)"
      },
      {
        "word": "Centipede",
        "pos": "n",
        "ipa": "/ˈsɛn.tɪˌpiːd/",
        "meaningVi": "Rết",
        "topicId": 48,
        "topicName": "Côn trùng (Insects)"
      }
    ]
  },
  {
    "id": 49,
    "name": "Học tập (Studying & Learning)",
    "wordCount": 23,
    "words": [
      {
        "word": "Class",
        "pos": "n",
        "ipa": "/klæs/",
        "meaningVi": "Lớphọc",
        "topicId": 49,
        "topicName": "Học tập (Studying & Learning)"
      },
      {
        "word": "Classroom",
        "pos": "n",
        "ipa": "/ˈklæsˌruːm/",
        "meaningVi": "Phònghọc",
        "topicId": 49,
        "topicName": "Học tập (Studying & Learning)"
      },
      {
        "word": "Textbook",
        "pos": "n",
        "ipa": "/ˈtɛkstˌbʊk/",
        "meaningVi": "Sáchgiáokhoa",
        "topicId": 49,
        "topicName": "Học tập (Studying & Learning)"
      },
      {
        "word": "Workbook",
        "pos": "n",
        "ipa": "/ˈwɜːkˌbʊk/",
        "meaningVi": "Sáchbàitập",
        "topicId": 49,
        "topicName": "Học tập (Studying & Learning)"
      },
      {
        "word": "Referencebook",
        "pos": "n. phr",
        "ipa": "/ˈrɛf.ər.əns ˌbʊk/",
        "meaningVi": "Sáchthamkhảo",
        "topicId": 49,
        "topicName": "Học tập (Studying & Learning)"
      },
      {
        "word": "Notebook",
        "pos": "n",
        "ipa": "/ˈnoʊtˌbʊk/",
        "meaningVi": "Vở",
        "topicId": 49,
        "topicName": "Học tập (Studying & Learning)"
      },
      {
        "word": "Notepad",
        "pos": "n",
        "ipa": "/ˈnoʊtˌpæd/",
        "meaningVi": "Sổghichép",
        "topicId": 49,
        "topicName": "Học tập (Studying & Learning)"
      },
      {
        "word": "Pencil",
        "pos": "n",
        "ipa": "/ˈpɛn.səl/",
        "meaningVi": "Bútchì",
        "topicId": 49,
        "topicName": "Học tập (Studying & Learning)"
      },
      {
        "word": "Crayon",
        "pos": "n",
        "ipa": "/ˈkreɪ.ɒn/",
        "meaningVi": "Bútchìmàu",
        "topicId": 49,
        "topicName": "Học tập (Studying & Learning)"
      },
      {
        "word": "Pencilsharpener",
        "pos": "n. phr",
        "ipa": "/ˈpɛn.səl ˌʃɑːp.nər/",
        "meaningVi": "Đồgọtbútchì",
        "topicId": 49,
        "topicName": "Học tập (Studying & Learning)"
      },
      {
        "word": "Eraser",
        "pos": "n",
        "ipa": "/ɪˈreɪ.zər/",
        "meaningVi": "Cụctẩy",
        "topicId": 49,
        "topicName": "Học tập (Studying & Learning)"
      },
      {
        "word": "Pen",
        "pos": "n",
        "ipa": "/pɛn/",
        "meaningVi": "Bútmực",
        "topicId": 49,
        "topicName": "Học tập (Studying & Learning)"
      },
      {
        "word": "Ballpoint pen",
        "pos": "n. phr",
        "ipa": "/ˈbɔːl.pɔɪnt ˌpɛn/",
        "meaningVi": "Bútbi",
        "topicId": 49,
        "topicName": "Học tập (Studying & Learning)"
      },
      {
        "word": "Paper",
        "pos": "n",
        "ipa": "/ˈpeɪ.pər/",
        "meaningVi": "Giấy",
        "topicId": 49,
        "topicName": "Học tập (Studying & Learning)"
      },
      {
        "word": "Desk",
        "pos": "n",
        "ipa": "/dɛsk/",
        "meaningVi": "Bànhọc",
        "topicId": 49,
        "topicName": "Học tập (Studying & Learning)"
      },
      {
        "word": "Map",
        "pos": "n",
        "ipa": "/mæp/",
        "meaningVi": "Bảnđồ",
        "topicId": 49,
        "topicName": "Học tập (Studying & Learning)"
      },
      {
        "word": "Glue",
        "pos": "n",
        "ipa": "/ɡluː/",
        "meaningVi": "Hồdán",
        "topicId": 49,
        "topicName": "Học tập (Studying & Learning)"
      },
      {
        "word": "Scissors",
        "pos": "n",
        "ipa": "/ˈsɪz.ərz/",
        "meaningVi": "Kéo",
        "topicId": 49,
        "topicName": "Học tập (Studying & Learning)"
      },
      {
        "word": "Ruler",
        "pos": "n",
        "ipa": "/ˈruː.lər/",
        "meaningVi": "Thước",
        "topicId": 49,
        "topicName": "Học tập (Studying & Learning)"
      },
      {
        "word": "Protractor",
        "pos": "n",
        "ipa": "/prəˈtræk.tər/",
        "meaningVi": "Thướcđogóc",
        "topicId": 49,
        "topicName": "Học tập (Studying & Learning)"
      },
      {
        "word": "Ink",
        "pos": "n",
        "ipa": "/ɪŋk/",
        "meaningVi": "Mực",
        "topicId": 49,
        "topicName": "Học tập (Studying & Learning)"
      },
      {
        "word": "Chalk",
        "pos": "n",
        "ipa": "/tʃɔːk/",
        "meaningVi": "Phấn",
        "topicId": 49,
        "topicName": "Học tập (Studying & Learning)"
      },
      {
        "word": "Folder",
        "pos": "n",
        "ipa": "/ˈfoʊl.dər/",
        "meaningVi": "Thưmục",
        "topicId": 49,
        "topicName": "Học tập (Studying & Learning)"
      }
    ]
  },
  {
    "id": 50,
    "name": "Thực vật (Plants & Trees)",
    "wordCount": 16,
    "words": [
      {
        "word": "Tree",
        "pos": "n",
        "ipa": "/triː/",
        "meaningVi": "Cây",
        "topicId": 50,
        "topicName": "Thực vật (Plants & Trees)"
      },
      {
        "word": "Pine",
        "pos": "n",
        "ipa": "/paɪn/",
        "meaningVi": "Câythông",
        "topicId": 50,
        "topicName": "Thực vật (Plants & Trees)"
      },
      {
        "word": "Cedar",
        "pos": "n",
        "ipa": "/ˈsiː.dər/",
        "meaningVi": "Câytuyếttùng",
        "topicId": 50,
        "topicName": "Thực vật (Plants & Trees)"
      },
      {
        "word": "Oak",
        "pos": "n",
        "ipa": "/oʊk/",
        "meaningVi": "Câysồi",
        "topicId": 50,
        "topicName": "Thực vật (Plants & Trees)"
      },
      {
        "word": "Ivy",
        "pos": "n",
        "ipa": "/ˈaɪ.vi/",
        "meaningVi": "Dâythườngxuân",
        "topicId": 50,
        "topicName": "Thực vật (Plants & Trees)"
      },
      {
        "word": "Moss",
        "pos": "n",
        "ipa": "/mɔːs/",
        "meaningVi": "Rêu",
        "topicId": 50,
        "topicName": "Thực vật (Plants & Trees)"
      },
      {
        "word": "Mushroom",
        "pos": "n",
        "ipa": "/ˈmʌʃ.rʊm/",
        "meaningVi": "Nấm",
        "topicId": 50,
        "topicName": "Thực vật (Plants & Trees)"
      },
      {
        "word": "Wheat",
        "pos": "n",
        "ipa": "/wiːt/",
        "meaningVi": "Lúamì",
        "topicId": 50,
        "topicName": "Thực vật (Plants & Trees)"
      },
      {
        "word": "Corn",
        "pos": "n",
        "ipa": "/kɔːrn/",
        "meaningVi": "Bắp,ngô",
        "topicId": 50,
        "topicName": "Thực vật (Plants & Trees)"
      },
      {
        "word": "Flower",
        "pos": "n",
        "ipa": "/ˈflaʊ.ər/",
        "meaningVi": "Hoa",
        "topicId": 50,
        "topicName": "Thực vật (Plants & Trees)"
      },
      {
        "word": "Grass",
        "pos": "n",
        "ipa": "/ɡræs/",
        "meaningVi": "Cỏ",
        "topicId": 50,
        "topicName": "Thực vật (Plants & Trees)"
      },
      {
        "word": "Herb",
        "pos": "n",
        "ipa": "/hɜːrb/",
        "meaningVi": "Thảomộc",
        "topicId": 50,
        "topicName": "Thực vật (Plants & Trees)"
      },
      {
        "word": "Bush",
        "pos": "n",
        "ipa": "/bʊʃ/",
        "meaningVi": "Bụicây,bụirậm",
        "topicId": 50,
        "topicName": "Thực vật (Plants & Trees)"
      },
      {
        "word": "Coconuttree",
        "pos": "n. phr",
        "ipa": "/ˈkoʊ.kəˌnʌttriː/",
        "meaningVi": "Câydừa",
        "topicId": 50,
        "topicName": "Thực vật (Plants & Trees)"
      },
      {
        "word": "Appletree",
        "pos": "n. phr",
        "ipa": "/ˈæpəltriː/",
        "meaningVi": "Câytáo",
        "topicId": 50,
        "topicName": "Thực vật (Plants & Trees)"
      },
      {
        "word": "Shrubland",
        "pos": "n",
        "ipa": "/ˈʃrʌblænd/",
        "meaningVi": "Vùngcâybụi",
        "topicId": 50,
        "topicName": "Thực vật (Plants & Trees)"
      }
    ]
  },
  {
    "id": 51,
    "name": "Quốc gia (Countries & Nations)",
    "wordCount": 19,
    "words": [
      {
        "word": "Denmark",
        "pos": "n",
        "ipa": "/ˈdɛnˌmɑːrk/",
        "meaningVi": "ĐanMạch",
        "topicId": 51,
        "topicName": "Quốc gia (Countries & Nations)"
      },
      {
        "word": "England",
        "pos": "n",
        "ipa": "/ˈɪŋ.ɡlənd/",
        "meaningVi": "Anh",
        "topicId": 51,
        "topicName": "Quốc gia (Countries & Nations)"
      },
      {
        "word": "Sweden",
        "pos": "n",
        "ipa": "/ˈswiː.dən/",
        "meaningVi": "ThụyĐiển",
        "topicId": 51,
        "topicName": "Quốc gia (Countries & Nations)"
      },
      {
        "word": "Austria",
        "pos": "n",
        "ipa": "/ˈɒs.tri.ə/",
        "meaningVi": "Áo",
        "topicId": 51,
        "topicName": "Quốc gia (Countries & Nations)"
      },
      {
        "word": "Australia",
        "pos": "n",
        "ipa": "/ɒˈstreɪlɪə/",
        "meaningVi": "Úc",
        "topicId": 51,
        "topicName": "Quốc gia (Countries & Nations)"
      },
      {
        "word": "France",
        "pos": "n",
        "ipa": "/fræns/",
        "meaningVi": "Pháp",
        "topicId": 51,
        "topicName": "Quốc gia (Countries & Nations)"
      },
      {
        "word": "Germany",
        "pos": "n",
        "ipa": "/ˈdʒɜː.mə.ni/",
        "meaningVi": "Đức",
        "topicId": 51,
        "topicName": "Quốc gia (Countries & Nations)"
      },
      {
        "word": "Switzerland",
        "pos": "n",
        "ipa": "/ˈswɪtsərlənd/",
        "meaningVi": "ThụySĩ",
        "topicId": 51,
        "topicName": "Quốc gia (Countries & Nations)"
      },
      {
        "word": "Greece",
        "pos": "n",
        "ipa": "/ɡriːs/",
        "meaningVi": "HyLạp",
        "topicId": 51,
        "topicName": "Quốc gia (Countries & Nations)"
      },
      {
        "word": "Italy",
        "pos": "n",
        "ipa": "/ˈɪtəli/",
        "meaningVi": "Ý",
        "topicId": 51,
        "topicName": "Quốc gia (Countries & Nations)"
      },
      {
        "word": "Spain",
        "pos": "n",
        "ipa": "/speɪn/",
        "meaningVi": "TâyBanNha",
        "topicId": 51,
        "topicName": "Quốc gia (Countries & Nations)"
      },
      {
        "word": "Russia",
        "pos": "n",
        "ipa": "/ˈrʌʃə/",
        "meaningVi": "Nga",
        "topicId": 51,
        "topicName": "Quốc gia (Countries & Nations)"
      },
      {
        "word": "Canada",
        "pos": "n",
        "ipa": "/ˈkænədə/",
        "meaningVi": "Canada",
        "topicId": 51,
        "topicName": "Quốc gia (Countries & Nations)"
      },
      {
        "word": "Mexico",
        "pos": "n",
        "ipa": "/ˈmɛksɪkoʊ/",
        "meaningVi": "Mêxicô",
        "topicId": 51,
        "topicName": "Quốc gia (Countries & Nations)"
      },
      {
        "word": "America",
        "pos": "n",
        "ipa": "/əˈmɛrɪkə/",
        "meaningVi": "Mỹ",
        "topicId": 51,
        "topicName": "Quốc gia (Countries & Nations)"
      },
      {
        "word": "Brazil",
        "pos": "n",
        "ipa": "/brəˈzɪl/",
        "meaningVi": "Braxin",
        "topicId": 51,
        "topicName": "Quốc gia (Countries & Nations)"
      },
      {
        "word": "Japan",
        "pos": "n",
        "ipa": "/dʒəˈpæn/",
        "meaningVi": "NhậtBản",
        "topicId": 51,
        "topicName": "Quốc gia (Countries & Nations)"
      },
      {
        "word": "Korea",
        "pos": "n",
        "ipa": "/kəˈriə/",
        "meaningVi": "HànQuốc",
        "topicId": 51,
        "topicName": "Quốc gia (Countries & Nations)"
      },
      {
        "word": "China",
        "pos": "n",
        "ipa": "/ˈtʃaɪ.nə/",
        "meaningVi": "TrungQuốc",
        "topicId": 51,
        "topicName": "Quốc gia (Countries & Nations)"
      }
    ]
  },
  {
    "id": 52,
    "name": "Hải sản (Seafood)",
    "wordCount": 18,
    "words": [
      {
        "word": "Herring",
        "pos": "n",
        "ipa": "/ˈhɛr.ɪŋ/",
        "meaningVi": "Cátrích",
        "topicId": 52,
        "topicName": "Hải sản (Seafood)"
      },
      {
        "word": "Skate",
        "pos": "n",
        "ipa": "/skeɪt/",
        "meaningVi": "Cáđuối",
        "topicId": 52,
        "topicName": "Hải sản (Seafood)"
      },
      {
        "word": "Salmon",
        "pos": "n",
        "ipa": "/ˈsæmən/",
        "meaningVi": "Cáhồi",
        "topicId": 52,
        "topicName": "Hải sản (Seafood)"
      },
      {
        "word": "Prawn",
        "pos": "n",
        "ipa": "/prɔːn/",
        "meaningVi": "Tôm",
        "topicId": 52,
        "topicName": "Hải sản (Seafood)"
      },
      {
        "word": "Cuttleffsh",
        "pos": "n",
        "ipa": "/ˈkʌtəl.fɪʃ/",
        "meaningVi": "Mựcnang",
        "topicId": 52,
        "topicName": "Hải sản (Seafood)"
      },
      {
        "word": "Lobster",
        "pos": "n",
        "ipa": "/ˈlɒbstər/",
        "meaningVi": "Tômhùm",
        "topicId": 52,
        "topicName": "Hải sản (Seafood)"
      },
      {
        "word": "Squid",
        "pos": "n",
        "ipa": "/skwɪd/",
        "meaningVi": "Mựcống",
        "topicId": 52,
        "topicName": "Hải sản (Seafood)"
      },
      {
        "word": "Shrimp",
        "pos": "n",
        "ipa": "/ʃrɪmp/",
        "meaningVi": "Tôm",
        "topicId": 52,
        "topicName": "Hải sản (Seafood)"
      },
      {
        "word": "Oyster",
        "pos": "n",
        "ipa": "/ˈɔɪ.stər/",
        "meaningVi": "Hàu",
        "topicId": 52,
        "topicName": "Hải sản (Seafood)"
      },
      {
        "word": "Crab",
        "pos": "n",
        "ipa": "/kræb/",
        "meaningVi": "Cua",
        "topicId": 52,
        "topicName": "Hải sản (Seafood)"
      },
      {
        "word": "Cockle",
        "pos": "n",
        "ipa": "/ˈkɒk.əl/",
        "meaningVi": "Sò",
        "topicId": 52,
        "topicName": "Hải sản (Seafood)"
      },
      {
        "word": "Scallop",
        "pos": "n",
        "ipa": "/ˈskɒl.əp/",
        "meaningVi": "Sòđiệp",
        "topicId": 52,
        "topicName": "Hải sản (Seafood)"
      },
      {
        "word": "Octopus",
        "pos": "n",
        "ipa": "/ˈɒk.tə.pʊs/",
        "meaningVi": "Bạchtuộc",
        "topicId": 52,
        "topicName": "Hải sản (Seafood)"
      },
      {
        "word": "Fish",
        "pos": "n",
        "ipa": "/fɪʃ/",
        "meaningVi": "Cá",
        "topicId": 52,
        "topicName": "Hải sản (Seafood)"
      },
      {
        "word": "Eel",
        "pos": "n",
        "ipa": "/iːl/",
        "meaningVi": "Lươn",
        "topicId": 52,
        "topicName": "Hải sản (Seafood)"
      },
      {
        "word": "Mussel",
        "pos": "n",
        "ipa": "/ˈmʌsəl/",
        "meaningVi": "Vẹm",
        "topicId": 52,
        "topicName": "Hải sản (Seafood)"
      },
      {
        "word": "Clam",
        "pos": "n",
        "ipa": "/klæm/",
        "meaningVi": "Nghêu",
        "topicId": 52,
        "topicName": "Hải sản (Seafood)"
      },
      {
        "word": "Jellyffsh",
        "pos": "n",
        "ipa": "/ˈdʒɛliˌfɪʃ/",
        "meaningVi": "Sứa",
        "topicId": 52,
        "topicName": "Hải sản (Seafood)"
      }
    ]
  },
  {
    "id": 53,
    "name": "Năng lượng (Energy & Power)",
    "wordCount": 16,
    "words": [
      {
        "word": "Charcoal",
        "pos": "n",
        "ipa": "/ˈtʃɑːrˌkoʊl/",
        "meaningVi": "Thancủi",
        "topicId": 53,
        "topicName": "Năng lượng (Energy & Power)"
      },
      {
        "word": "Battery",
        "pos": "n",
        "ipa": "/ˈbætəri/",
        "meaningVi": "Pin",
        "topicId": 53,
        "topicName": "Năng lượng (Energy & Power)"
      },
      {
        "word": "Gasoline",
        "pos": "n",
        "ipa": "/ˈɡæsəˌliːn/",
        "meaningVi": "Xăng",
        "topicId": 53,
        "topicName": "Năng lượng (Energy & Power)"
      },
      {
        "word": "Turbine",
        "pos": "n",
        "ipa": "/ˈtɜr.baɪn/",
        "meaningVi": "Tua-bin",
        "topicId": 53,
        "topicName": "Năng lượng (Energy & Power)"
      },
      {
        "word": "Sun",
        "pos": "n",
        "ipa": "/sʌn/",
        "meaningVi": "Mặttrời",
        "topicId": 53,
        "topicName": "Năng lượng (Energy & Power)"
      },
      {
        "word": "Wind",
        "pos": "n",
        "ipa": "/wɪnd/",
        "meaningVi": "Gió",
        "topicId": 53,
        "topicName": "Năng lượng (Energy & Power)"
      },
      {
        "word": "Waterfall",
        "pos": "n",
        "ipa": "/ˈwɔːtərˌfɔːl/",
        "meaningVi": "Thácnước",
        "topicId": 53,
        "topicName": "Năng lượng (Energy & Power)"
      },
      {
        "word": "Reffnery",
        "pos": "n",
        "ipa": "/rɪˈfaɪnəri/",
        "meaningVi": "Nhàmáylọc",
        "topicId": 53,
        "topicName": "Năng lượng (Energy & Power)"
      },
      {
        "word": "Nuclearreactor",
        "pos": "n. phr",
        "ipa": "/ˈnjuː.kliər riˈæktər/",
        "meaningVi": "Lòphảnứnghạt",
        "topicId": 53,
        "topicName": "Năng lượng (Energy & Power)"
      },
      {
        "word": "Dam",
        "pos": "n",
        "ipa": "/dæm/",
        "meaningVi": "Đập(thủyđiện)",
        "topicId": 53,
        "topicName": "Năng lượng (Energy & Power)"
      },
      {
        "word": "Powerplant",
        "pos": "n. phr",
        "ipa": "/ˈpaʊərplænt/",
        "meaningVi": "Nhàmáyđiện",
        "topicId": 53,
        "topicName": "Năng lượng (Energy & Power)"
      },
      {
        "word": "Transformer",
        "pos": "n",
        "ipa": "/trænsˈfɔːrmər/",
        "meaningVi": "Máybiếnthế",
        "topicId": 53,
        "topicName": "Năng lượng (Energy & Power)"
      },
      {
        "word": "Heat",
        "pos": "v",
        "ipa": "/hiːt/",
        "meaningVi": "Sưởiấm,làmnóng",
        "topicId": 53,
        "topicName": "Năng lượng (Energy & Power)"
      },
      {
        "word": "Naturalgas",
        "pos": "n. phr",
        "ipa": "/ˈnætʃərəlɡæs/",
        "meaningVi": "Khítựnhiên",
        "topicId": 53,
        "topicName": "Năng lượng (Energy & Power)"
      },
      {
        "word": "Diesel",
        "pos": "n",
        "ipa": "/ˈdiːzəl/",
        "meaningVi": "Dầuđi-ê-zen",
        "topicId": 53,
        "topicName": "Năng lượng (Energy & Power)"
      },
      {
        "word": "Solar power",
        "pos": "n. phr",
        "ipa": "/ˈsoʊlərˈpaʊər/",
        "meaningVi": "Nănglượngmặttrời",
        "topicId": 53,
        "topicName": "Năng lượng (Energy & Power)"
      }
    ]
  },
  {
    "id": 54,
    "name": "Nghề nghiệp (Jobs & Occupations)",
    "wordCount": 36,
    "words": [
      {
        "word": "Dancer",
        "pos": "n",
        "ipa": "/ˈdæn.sər/",
        "meaningVi": "Vũcông",
        "topicId": 54,
        "topicName": "Nghề nghiệp (Jobs & Occupations)"
      },
      {
        "word": "Designer",
        "pos": "n",
        "ipa": "/dɪˈzaɪ.nər/",
        "meaningVi": "Nhàthiếtkế",
        "topicId": 54,
        "topicName": "Nghề nghiệp (Jobs & Occupations)"
      },
      {
        "word": "Magician",
        "pos": "n",
        "ipa": "/məˈdʒɪʃ.ən/",
        "meaningVi": "Nhàảothuật",
        "topicId": 54,
        "topicName": "Nghề nghiệp (Jobs & Occupations)"
      },
      {
        "word": "Tourguide",
        "pos": "n. phr",
        "ipa": "/tʊrɡaɪd/",
        "meaningVi": "Hướngdẫnviêndu",
        "topicId": 54,
        "topicName": "Nghề nghiệp (Jobs & Occupations)"
      },
      {
        "word": "Sailor",
        "pos": "n",
        "ipa": "/ˈseɪ.lər/",
        "meaningVi": "Thủythủ",
        "topicId": 54,
        "topicName": "Nghề nghiệp (Jobs & Occupations)"
      },
      {
        "word": "Commentator",
        "pos": "n",
        "ipa": "/ˈkɒm.ənˌteɪ.tər/",
        "meaningVi": "Bìnhluậnviên",
        "topicId": 54,
        "topicName": "Nghề nghiệp (Jobs & Occupations)"
      },
      {
        "word": "Dentist",
        "pos": "n",
        "ipa": "/ˈdɛn.tɪst/",
        "meaningVi": "Nhasĩ",
        "topicId": 54,
        "topicName": "Nghề nghiệp (Jobs & Occupations)"
      },
      {
        "word": "Postman",
        "pos": "n",
        "ipa": "/ˈpoʊst.mæn/",
        "meaningVi": "Ngườiđưathư",
        "topicId": 54,
        "topicName": "Nghề nghiệp (Jobs & Occupations)"
      },
      {
        "word": "Writer",
        "pos": "n",
        "ipa": "/ˈraɪ.tər/",
        "meaningVi": "Nhàvăn",
        "topicId": 54,
        "topicName": "Nghề nghiệp (Jobs & Occupations)"
      },
      {
        "word": "Pilot",
        "pos": "n",
        "ipa": "/ˈpaɪ.lət/",
        "meaningVi": "Phicông",
        "topicId": 54,
        "topicName": "Nghề nghiệp (Jobs & Occupations)"
      },
      {
        "word": "Plumber",
        "pos": "n",
        "ipa": "/ˈplʌm.ər/",
        "meaningVi": "Thợsửachữaống",
        "topicId": 54,
        "topicName": "Nghề nghiệp (Jobs & Occupations)"
      },
      {
        "word": "Tailor",
        "pos": "n",
        "ipa": "/ˈteɪ.lər/",
        "meaningVi": "Thợmay",
        "topicId": 54,
        "topicName": "Nghề nghiệp (Jobs & Occupations)"
      },
      {
        "word": "Copywriter",
        "pos": "n",
        "ipa": "/ˈkɒp.iˌraɪ.tər/",
        "meaningVi": "Ngườiviếtbài",
        "topicId": 54,
        "topicName": "Nghề nghiệp (Jobs & Occupations)"
      },
      {
        "word": "Journalist",
        "pos": "n",
        "ipa": "/ˈdʒɜː.nə.lɪst/",
        "meaningVi": "Nhàbáo",
        "topicId": 54,
        "topicName": "Nghề nghiệp (Jobs & Occupations)"
      },
      {
        "word": "Grocer",
        "pos": "n",
        "ipa": "/ˈɡroʊ.sər/",
        "meaningVi": "Ngườibántạphóa",
        "topicId": 54,
        "topicName": "Nghề nghiệp (Jobs & Occupations)"
      },
      {
        "word": "Clerk",
        "pos": "n",
        "ipa": "/klɜrk/",
        "meaningVi": "Ngườithưký",
        "topicId": 54,
        "topicName": "Nghề nghiệp (Jobs & Occupations)"
      },
      {
        "word": "Assistant",
        "pos": "n",
        "ipa": "/əˈsɪs.tənt/",
        "meaningVi": "Trợlý",
        "topicId": 54,
        "topicName": "Nghề nghiệp (Jobs & Occupations)"
      },
      {
        "word": "Model",
        "pos": "n",
        "ipa": "/ˈmɒd.əl/",
        "meaningVi": "Ngườimẫu",
        "topicId": 54,
        "topicName": "Nghề nghiệp (Jobs & Occupations)"
      },
      {
        "word": "Freelancer",
        "pos": "n",
        "ipa": "/ˈfriːˌlænsər/",
        "meaningVi": "Ngườilàmviệctự",
        "topicId": 54,
        "topicName": "Nghề nghiệp (Jobs & Occupations)"
      },
      {
        "word": "Consultant",
        "pos": "n",
        "ipa": "/kənˈsʌl.tənt/",
        "meaningVi": "Chuyênviêntưvấn",
        "topicId": 54,
        "topicName": "Nghề nghiệp (Jobs & Occupations)"
      },
      {
        "word": "Self-employed",
        "pos": "adj",
        "ipa": "/ˌsɛlfɪmˈplɔɪd/",
        "meaningVi": "Tựlàmchủ",
        "topicId": 54,
        "topicName": "Nghề nghiệp (Jobs & Occupations)"
      },
      {
        "word": "Supervisor",
        "pos": "n",
        "ipa": "/ˈsuː.pərˌvaɪ.zər/",
        "meaningVi": "Giámsátviên",
        "topicId": 54,
        "topicName": "Nghề nghiệp (Jobs & Occupations)"
      },
      {
        "word": "Salesmanager",
        "pos": "n. phr",
        "ipa": "/seɪlz ˈmæn.ɪ.dʒər/",
        "meaningVi": "Giámđốckinh",
        "topicId": 54,
        "topicName": "Nghề nghiệp (Jobs & Occupations)"
      },
      {
        "word": "Mechanic",
        "pos": "n",
        "ipa": "/məˈkæn.ɪk/",
        "meaningVi": "Thợcơkhí",
        "topicId": 54,
        "topicName": "Nghề nghiệp (Jobs & Occupations)"
      },
      {
        "word": "Hairdresser",
        "pos": "n",
        "ipa": "/ˈhɛərˌdrɛs.ər/",
        "meaningVi": "Thợcắttóc",
        "topicId": 54,
        "topicName": "Nghề nghiệp (Jobs & Occupations)"
      },
      {
        "word": "Architect",
        "pos": "n",
        "ipa": "/ˈɑːrkɪˌtɛkt/",
        "meaningVi": "Kiếntrúcsư",
        "topicId": 54,
        "topicName": "Nghề nghiệp (Jobs & Occupations)"
      },
      {
        "word": "Engineer",
        "pos": "n",
        "ipa": "/ˌɛn.dʒɪˈnɪər/",
        "meaningVi": "Kỹsư",
        "topicId": 54,
        "topicName": "Nghề nghiệp (Jobs & Occupations)"
      },
      {
        "word": "Vet",
        "pos": "n",
        "ipa": "/vɛt/",
        "meaningVi": "Bácsĩthúy",
        "topicId": 54,
        "topicName": "Nghề nghiệp (Jobs & Occupations)"
      },
      {
        "word": "Shoemaker",
        "pos": "n",
        "ipa": "/ˈʃuːˌmeɪ.kər/",
        "meaningVi": "Thợđónggiày",
        "topicId": 54,
        "topicName": "Nghề nghiệp (Jobs & Occupations)"
      },
      {
        "word": "Translator",
        "pos": "n",
        "ipa": "/trænzˈleɪ.tər/",
        "meaningVi": "Biêndịchviên",
        "topicId": 54,
        "topicName": "Nghề nghiệp (Jobs & Occupations)"
      },
      {
        "word": "Interpreter",
        "pos": "n",
        "ipa": "/ɪnˈtɜː.prɪ.tər/",
        "meaningVi": "Phiêndịchviên",
        "topicId": 54,
        "topicName": "Nghề nghiệp (Jobs & Occupations)"
      },
      {
        "word": "Policeoffcer",
        "pos": "n. phr",
        "ipa": "/pəˈliːs ˈɒfɪ.sər/",
        "meaningVi": "Cảnhsát",
        "topicId": 54,
        "topicName": "Nghề nghiệp (Jobs & Occupations)"
      },
      {
        "word": "Teacher",
        "pos": "n",
        "ipa": "/ˈtiː.tʃər/",
        "meaningVi": "Giáoviên",
        "topicId": 54,
        "topicName": "Nghề nghiệp (Jobs & Occupations)"
      },
      {
        "word": "Doctor",
        "pos": "n",
        "ipa": "/ˈdɒk.tər/",
        "meaningVi": "Bácsĩ",
        "topicId": 54,
        "topicName": "Nghề nghiệp (Jobs & Occupations)"
      },
      {
        "word": "Nurse",
        "pos": "n",
        "ipa": "/nɜrs/",
        "meaningVi": "Ytá",
        "topicId": 54,
        "topicName": "Nghề nghiệp (Jobs & Occupations)"
      },
      {
        "word": "Farmer",
        "pos": "n",
        "ipa": "/ˈfɑː.mər/",
        "meaningVi": "Nôngdân",
        "topicId": 54,
        "topicName": "Nghề nghiệp (Jobs & Occupations)"
      }
    ]
  },
  {
    "id": 55,
    "name": "Chế độ ăn uống (Diet & Nutrition)",
    "wordCount": 19,
    "words": [
      {
        "word": "Keep-fft",
        "pos": "n",
        "ipa": "/kiːp-fɪt/",
        "meaningVi": "Thểdục",
        "topicId": 55,
        "topicName": "Chế độ ăn uống (Diet & Nutrition)"
      },
      {
        "word": "Regular",
        "pos": "adj",
        "ipa": "/ˈrɛɡ.jʊ.lər/",
        "meaningVi": "Thườngxuyên",
        "topicId": 55,
        "topicName": "Chế độ ăn uống (Diet & Nutrition)"
      },
      {
        "word": "Diabetes",
        "pos": "n",
        "ipa": "/ˌdaɪəˈbiːtiːz/",
        "meaningVi": "Bệnhtiểuđường",
        "topicId": 55,
        "topicName": "Chế độ ăn uống (Diet & Nutrition)"
      },
      {
        "word": "Dietitian",
        "pos": "n",
        "ipa": "/ˌdaɪɪˈtɪʃən/",
        "meaningVi": "Chuyêngiavềdinh",
        "topicId": 55,
        "topicName": "Chế độ ăn uống (Diet & Nutrition)"
      },
      {
        "word": "Goiter",
        "pos": "n",
        "ipa": "/ˈɡɔɪtər/",
        "meaningVi": "Bướucổ",
        "topicId": 55,
        "topicName": "Chế độ ăn uống (Diet & Nutrition)"
      },
      {
        "word": "Body",
        "pos": "n",
        "ipa": "/ˈbɒdi/",
        "meaningVi": "Cơthể",
        "topicId": 55,
        "topicName": "Chế độ ăn uống (Diet & Nutrition)"
      },
      {
        "word": "Thin",
        "pos": "adj",
        "ipa": "/θɪn/",
        "meaningVi": "Gầy,ốm",
        "topicId": 55,
        "topicName": "Chế độ ăn uống (Diet & Nutrition)"
      },
      {
        "word": "Dietary",
        "pos": "adj",
        "ipa": "/ˈdaɪəˌtɛri/",
        "meaningVi": "(thuộc)chếđộăn",
        "topicId": 55,
        "topicName": "Chế độ ăn uống (Diet & Nutrition)"
      },
      {
        "word": "Fat",
        "pos": "adj",
        "ipa": "/fæt/",
        "meaningVi": "Mập",
        "topicId": 55,
        "topicName": "Chế độ ăn uống (Diet & Nutrition)"
      },
      {
        "word": "Overweight",
        "pos": "adj",
        "ipa": "/ˌoʊvərˈweɪt/",
        "meaningVi": "Béo,thừacân",
        "topicId": 55,
        "topicName": "Chế độ ăn uống (Diet & Nutrition)"
      },
      {
        "word": "Eatingdisorder",
        "pos": "n. phr",
        "ipa": "/ˈiːtɪŋ dɪsˈɔːrdər/",
        "meaningVi": "Rốiloạnănuống",
        "topicId": 55,
        "topicName": "Chế độ ăn uống (Diet & Nutrition)"
      },
      {
        "word": "Nutrient",
        "pos": "n",
        "ipa": "/ˈnuːtriənt/",
        "meaningVi": "Chấtdinhdưỡng",
        "topicId": 55,
        "topicName": "Chế độ ăn uống (Diet & Nutrition)"
      },
      {
        "word": "Ingredient",
        "pos": "n",
        "ipa": "/ɪnˈɡriːdiənt/",
        "meaningVi": "Thànhphần,",
        "topicId": 55,
        "topicName": "Chế độ ăn uống (Diet & Nutrition)"
      },
      {
        "word": "Allergy",
        "pos": "n",
        "ipa": "/ˈælədʒi/",
        "meaningVi": "Dịứng",
        "topicId": 55,
        "topicName": "Chế độ ăn uống (Diet & Nutrition)"
      },
      {
        "word": "Vitamin",
        "pos": "n",
        "ipa": "/ˈvaɪtəmɪn/",
        "meaningVi": "Vi-ta-min",
        "topicId": 55,
        "topicName": "Chế độ ăn uống (Diet & Nutrition)"
      },
      {
        "word": "Overeat",
        "pos": "v",
        "ipa": "/ˌoʊvərˈiːt/",
        "meaningVi": "Ănquánhiều",
        "topicId": 55,
        "topicName": "Chế độ ăn uống (Diet & Nutrition)"
      },
      {
        "word": "Nutritious",
        "pos": "adj",
        "ipa": "/njuˈtrɪʃəs/",
        "meaningVi": "Bổdưỡng",
        "topicId": 55,
        "topicName": "Chế độ ăn uống (Diet & Nutrition)"
      },
      {
        "word": "Vegetarian",
        "pos": "n",
        "ipa": "/ˌvɛdʒɪˈtɛəriən/",
        "meaningVi": "Ngườiănchay",
        "topicId": 55,
        "topicName": "Chế độ ăn uống (Diet & Nutrition)"
      },
      {
        "word": "Mineral",
        "pos": "n",
        "ipa": "/ˈmɪnərəl/",
        "meaningVi": "Khoángchất",
        "topicId": 55,
        "topicName": "Chế độ ăn uống (Diet & Nutrition)"
      }
    ]
  },
  {
    "id": 56,
    "name": "Thảm họa thiên nhiên (Natural disasters)",
    "wordCount": 15,
    "words": [
      {
        "word": "Earthquake",
        "pos": "n",
        "ipa": "/ˈɜːrθˌkweɪk/",
        "meaningVi": "Độngđất",
        "topicId": 56,
        "topicName": "Thảm họa thiên nhiên (Natural disasters)"
      },
      {
        "word": "Aftershock",
        "pos": "n",
        "ipa": "/ˈæftərˌʃɒk/",
        "meaningVi": "Dưchấn",
        "topicId": 56,
        "topicName": "Thảm họa thiên nhiên (Natural disasters)"
      },
      {
        "word": "Flood",
        "pos": "n",
        "ipa": "/flʌd/",
        "meaningVi": "Lũlụt",
        "topicId": 56,
        "topicName": "Thảm họa thiên nhiên (Natural disasters)"
      },
      {
        "word": "Famine",
        "pos": "n",
        "ipa": "/ˈfæmɪn/",
        "meaningVi": "Nạnđói",
        "topicId": 56,
        "topicName": "Thảm họa thiên nhiên (Natural disasters)"
      },
      {
        "word": "Avalanche",
        "pos": "n",
        "ipa": "/ˈævəˌlæntʃ/",
        "meaningVi": "Tuyếtlở",
        "topicId": 56,
        "topicName": "Thảm họa thiên nhiên (Natural disasters)"
      },
      {
        "word": "Blizzard",
        "pos": "n",
        "ipa": "/ˈblɪzərd/",
        "meaningVi": "Bãotuyết",
        "topicId": 56,
        "topicName": "Thảm họa thiên nhiên (Natural disasters)"
      },
      {
        "word": "Tornado",
        "pos": "n",
        "ipa": "/tɔrˈneɪdoʊ/",
        "meaningVi": "Lốcxoáy",
        "topicId": 56,
        "topicName": "Thảm họa thiên nhiên (Natural disasters)"
      },
      {
        "word": "Forestffre",
        "pos": "n. phr",
        "ipa": "/ˈfɔːrɪst ˌfaɪər/",
        "meaningVi": "Cháyrừng",
        "topicId": 56,
        "topicName": "Thảm họa thiên nhiên (Natural disasters)"
      },
      {
        "word": "Hurricane",
        "pos": "n",
        "ipa": "/ˈhɜːrɪˌkeɪn/",
        "meaningVi": "Bão",
        "topicId": 56,
        "topicName": "Thảm họa thiên nhiên (Natural disasters)"
      },
      {
        "word": "Storm",
        "pos": "n",
        "ipa": "/stɔːrm/",
        "meaningVi": "Bão",
        "topicId": 56,
        "topicName": "Thảm họa thiên nhiên (Natural disasters)"
      },
      {
        "word": "Evacuation",
        "pos": "n",
        "ipa": "/ɪˌvækjuˈeɪʃən/",
        "meaningVi": "Sựsơtán",
        "topicId": 56,
        "topicName": "Thảm họa thiên nhiên (Natural disasters)"
      },
      {
        "word": "Evacuate",
        "pos": "v",
        "ipa": "/ɪˈvækjuˌeɪt/",
        "meaningVi": "Sơtán",
        "topicId": 56,
        "topicName": "Thảm họa thiên nhiên (Natural disasters)"
      },
      {
        "word": "Catastrophic",
        "pos": "adj",
        "ipa": "/ˌkætəˈstrɒfɪk/",
        "meaningVi": "Thảmkhốc",
        "topicId": 56,
        "topicName": "Thảm họa thiên nhiên (Natural disasters)"
      },
      {
        "word": "Nationwide",
        "pos": "adj",
        "ipa": "/ˌneɪʃənˈwaɪd/",
        "meaningVi": "Toànquốc",
        "topicId": 56,
        "topicName": "Thảm họa thiên nhiên (Natural disasters)"
      },
      {
        "word": "Precaution",
        "pos": "n",
        "ipa": "/prɪˈkɔːʃən/",
        "meaningVi": "Sựphòngngừa",
        "topicId": 56,
        "topicName": "Thảm họa thiên nhiên (Natural disasters)"
      }
    ]
  },
  {
    "id": 57,
    "name": "Chỉ đường & Phương hướng (Directions)",
    "wordCount": 13,
    "words": [
      {
        "word": "Avenue",
        "pos": "n",
        "ipa": "/ˈævəˌnjuː/",
        "meaningVi": "Đạilộ",
        "topicId": 57,
        "topicName": "Chỉ đường & Phương hướng (Directions)"
      },
      {
        "word": "Between",
        "pos": "pre",
        "ipa": "/bɪˈtwiːn/",
        "meaningVi": "Ởgiữa",
        "topicId": 57,
        "topicName": "Chỉ đường & Phương hướng (Directions)"
      },
      {
        "word": "Behind",
        "pos": "pre",
        "ipa": "/bɪˈhaɪnd/",
        "meaningVi": "Ởphíasau",
        "topicId": 57,
        "topicName": "Chỉ đường & Phương hướng (Directions)"
      },
      {
        "word": "Curve",
        "pos": "v",
        "ipa": "/kɜːrv/",
        "meaningVi": "Uốncong",
        "topicId": 57,
        "topicName": "Chỉ đường & Phương hướng (Directions)"
      },
      {
        "word": "In front of",
        "pos": "pre",
        "ipa": "/ɪnfrʌntəv/",
        "meaningVi": "(vị trí) ở phía trước,",
        "topicId": 57,
        "topicName": "Chỉ đường & Phương hướng (Directions)"
      },
      {
        "word": "Opposite",
        "pos": "pre",
        "ipa": "/ˈɒpəzɪt/",
        "meaningVi": "Trướcmặt,đốidiện",
        "topicId": 57,
        "topicName": "Chỉ đường & Phương hướng (Directions)"
      },
      {
        "word": "Near",
        "pos": "pre",
        "ipa": "/nɪər/",
        "meaningVi": "Gần",
        "topicId": 57,
        "topicName": "Chỉ đường & Phương hướng (Directions)"
      },
      {
        "word": "Turnright",
        "pos": "v. phr",
        "ipa": "/tɜrnraɪt/",
        "meaningVi": "Rẽphải",
        "topicId": 57,
        "topicName": "Chỉ đường & Phương hướng (Directions)"
      },
      {
        "word": "Turnleft",
        "pos": "v. phr",
        "ipa": "/tɜrnlɛft/",
        "meaningVi": "Rẽtrái",
        "topicId": 57,
        "topicName": "Chỉ đường & Phương hướng (Directions)"
      },
      {
        "word": "Junction",
        "pos": "n",
        "ipa": "/ˈdʒʌŋkʃən/",
        "meaningVi": "Giaolộ",
        "topicId": 57,
        "topicName": "Chỉ đường & Phương hướng (Directions)"
      },
      {
        "word": "Turning",
        "pos": "n",
        "ipa": "/ˈtɜrnɪŋ/",
        "meaningVi": "Ngãrẽ",
        "topicId": 57,
        "topicName": "Chỉ đường & Phương hướng (Directions)"
      },
      {
        "word": "Roundabout",
        "pos": "n",
        "ipa": "/ˈraʊndəˌbaʊt/",
        "meaningVi": "Bùngbinh",
        "topicId": 57,
        "topicName": "Chỉ đường & Phương hướng (Directions)"
      },
      {
        "word": "Pavement",
        "pos": "n",
        "ipa": "/ˈpeɪvmənt/",
        "meaningVi": "Vỉahè",
        "topicId": 57,
        "topicName": "Chỉ đường & Phương hướng (Directions)"
      }
    ]
  },
  {
    "id": 58,
    "name": "Phòng khách sạn (Hotel room & amenities)",
    "wordCount": 19,
    "words": [
      {
        "word": "Bar",
        "pos": "n",
        "ipa": "/bɑːr/",
        "meaningVi": "Quầybánrượu",
        "topicId": 58,
        "topicName": "Phòng khách sạn (Hotel room & amenities)"
      },
      {
        "word": "Chef",
        "pos": "n",
        "ipa": "/ʃɛf/",
        "meaningVi": "Đầubếp",
        "topicId": 58,
        "topicName": "Phòng khách sạn (Hotel room & amenities)"
      },
      {
        "word": "Waiter",
        "pos": "n",
        "ipa": "/ˈweɪtər/",
        "meaningVi": "Ngườihầubàn",
        "topicId": 58,
        "topicName": "Phòng khách sạn (Hotel room & amenities)"
      },
      {
        "word": "Waitress",
        "pos": "n",
        "ipa": "/ˈweɪtrəs/",
        "meaningVi": "Ngườihầubàn(nữ)",
        "topicId": 58,
        "topicName": "Phòng khách sạn (Hotel room & amenities)"
      },
      {
        "word": "Bill",
        "pos": "n",
        "ipa": "/bɪl/",
        "meaningVi": "Hóađơn",
        "topicId": 58,
        "topicName": "Phòng khách sạn (Hotel room & amenities)"
      },
      {
        "word": "Service",
        "pos": "n",
        "ipa": "/ˈsɜːr.vɪs/",
        "meaningVi": "Dịchvụ",
        "topicId": 58,
        "topicName": "Phòng khách sạn (Hotel room & amenities)"
      },
      {
        "word": "Tip",
        "pos": "n",
        "ipa": "/tɪp/",
        "meaningVi": "Tiềnboa",
        "topicId": 58,
        "topicName": "Phòng khách sạn (Hotel room & amenities)"
      },
      {
        "word": "Knife",
        "pos": "n",
        "ipa": "/naɪf/",
        "meaningVi": "Dao",
        "topicId": 58,
        "topicName": "Phòng khách sạn (Hotel room & amenities)"
      },
      {
        "word": "Bowl",
        "pos": "n",
        "ipa": "/boʊl/",
        "meaningVi": "Bát",
        "topicId": 58,
        "topicName": "Phòng khách sạn (Hotel room & amenities)"
      },
      {
        "word": "Teapot",
        "pos": "n",
        "ipa": "/ˈtiːˌpɒt/",
        "meaningVi": "Bìnhtrà",
        "topicId": 58,
        "topicName": "Phòng khách sạn (Hotel room & amenities)"
      },
      {
        "word": "Glass",
        "pos": "n",
        "ipa": "/ɡlæs/",
        "meaningVi": "Ly",
        "topicId": 58,
        "topicName": "Phòng khách sạn (Hotel room & amenities)"
      },
      {
        "word": "Breakfast",
        "pos": "n",
        "ipa": "/ˈbrɛk.fəst/",
        "meaningVi": "Bữaănsáng",
        "topicId": 58,
        "topicName": "Phòng khách sạn (Hotel room & amenities)"
      },
      {
        "word": "Dinner",
        "pos": "n",
        "ipa": "/ˈdɪn.ər/",
        "meaningVi": "Bữaăntối",
        "topicId": 58,
        "topicName": "Phòng khách sạn (Hotel room & amenities)"
      },
      {
        "word": "Lunch",
        "pos": "n",
        "ipa": "/lʌntʃ/",
        "meaningVi": "Bữaăntrưa",
        "topicId": 58,
        "topicName": "Phòng khách sạn (Hotel room & amenities)"
      },
      {
        "word": "Bookingoffce",
        "pos": "n. phr",
        "ipa": "/ˈbʊkɪŋˈɒfɪs/",
        "meaningVi": "Phòngbánvé",
        "topicId": 58,
        "topicName": "Phòng khách sạn (Hotel room & amenities)"
      },
      {
        "word": "Menu",
        "pos": "n",
        "ipa": "/ˈmɛnjuː/",
        "meaningVi": "Thựcđơn",
        "topicId": 58,
        "topicName": "Phòng khách sạn (Hotel room & amenities)"
      },
      {
        "word": "Starter",
        "pos": "n",
        "ipa": "/ˈstɑːr.tər/",
        "meaningVi": "Mónkhaivị",
        "topicId": 58,
        "topicName": "Phòng khách sạn (Hotel room & amenities)"
      },
      {
        "word": "Maincourse",
        "pos": "n. phr",
        "ipa": "/meɪnkɔːrs/",
        "meaningVi": "Mónchính",
        "topicId": 58,
        "topicName": "Phòng khách sạn (Hotel room & amenities)"
      },
      {
        "word": "Dessert",
        "pos": "n",
        "ipa": "/dɪˈzɜːrt/",
        "meaningVi": "Móntrángmiệng",
        "topicId": 58,
        "topicName": "Phòng khách sạn (Hotel room & amenities)"
      }
    ]
  },
  {
    "id": 59,
    "name": "Bưu điện (Post office)",
    "wordCount": 20,
    "words": [
      {
        "word": "Advanced",
        "pos": "adj",
        "ipa": "/ədˈvænst/",
        "meaningVi": "Tiêntiến",
        "topicId": 59,
        "topicName": "Bưu điện (Post office)"
      },
      {
        "word": "Equip",
        "pos": "v",
        "ipa": "/ɪˈkwɪp/",
        "meaningVi": "Trangbị",
        "topicId": 59,
        "topicName": "Bưu điện (Post office)"
      },
      {
        "word": "Expressmail",
        "pos": "n. phr",
        "ipa": "/ɪkˈsprɛsmeɪl/",
        "meaningVi": "Thưchuyểnphát",
        "topicId": 59,
        "topicName": "Bưu điện (Post office)"
      },
      {
        "word": "Graphic",
        "pos": "adj",
        "ipa": "/ˈɡræfɪk/",
        "meaningVi": "Thuộcđồhọa",
        "topicId": 59,
        "topicName": "Bưu điện (Post office)"
      },
      {
        "word": "Notify",
        "pos": "v",
        "ipa": "/ˈnoʊtɪˌfaɪ/",
        "meaningVi": "Thôngbáo",
        "topicId": 59,
        "topicName": "Bưu điện (Post office)"
      },
      {
        "word": "Parcel",
        "pos": "n",
        "ipa": "/ˈpɑːrsəl/",
        "meaningVi": "Bưukiện,bưuphẩm",
        "topicId": 59,
        "topicName": "Bưu điện (Post office)"
      },
      {
        "word": "Press",
        "pos": "n",
        "ipa": "/prɛs/",
        "meaningVi": "Báochí",
        "topicId": 59,
        "topicName": "Bưu điện (Post office)"
      },
      {
        "word": "Receive",
        "pos": "v",
        "ipa": "/rɪˈsiːv/",
        "meaningVi": "Nhận",
        "topicId": 59,
        "topicName": "Bưu điện (Post office)"
      },
      {
        "word": "Secure",
        "pos": "adj",
        "ipa": "/sɪˈkjʊr/",
        "meaningVi": "(cảmgiác)yên",
        "topicId": 59,
        "topicName": "Bưu điện (Post office)"
      },
      {
        "word": "Service",
        "pos": "n",
        "ipa": "/ˈsɜːrvɪs/",
        "meaningVi": "Dịchvụ",
        "topicId": 59,
        "topicName": "Bưu điện (Post office)"
      },
      {
        "word": "Spacious",
        "pos": "adj",
        "ipa": "/ˈspeɪʃəs/",
        "meaningVi": "Rộngrãi",
        "topicId": 59,
        "topicName": "Bưu điện (Post office)"
      },
      {
        "word": "Speedy",
        "pos": "adj",
        "ipa": "/ˈspiːdi/",
        "meaningVi": "Nhanhchóng",
        "topicId": 59,
        "topicName": "Bưu điện (Post office)"
      },
      {
        "word": "Staff",
        "pos": "n",
        "ipa": "/stæf/",
        "meaningVi": "Nhânviên",
        "topicId": 59,
        "topicName": "Bưu điện (Post office)"
      },
      {
        "word": "Subscribe",
        "pos": "v",
        "ipa": "/səbˈskraɪb/",
        "meaningVi": "Đặtmua",
        "topicId": 59,
        "topicName": "Bưu điện (Post office)"
      },
      {
        "word": "Surfacemail",
        "pos": "n. phr",
        "ipa": "/ˈsɜːrfɪs meɪl/",
        "meaningVi": "Thưgửibằng",
        "topicId": 59,
        "topicName": "Bưu điện (Post office)"
      },
      {
        "word": "Technology",
        "pos": "n",
        "ipa": "/tɛkˈnɒlədʒi/",
        "meaningVi": "Côngnghệ",
        "topicId": 59,
        "topicName": "Bưu điện (Post office)"
      },
      {
        "word": "Thoughtful",
        "pos": "adj",
        "ipa": "/ˈθɔːtfəl/",
        "meaningVi": "Âncần,chuđáo",
        "topicId": 59,
        "topicName": "Bưu điện (Post office)"
      },
      {
        "word": "Transfer",
        "pos": "v",
        "ipa": "/trænsˈfɜːr/",
        "meaningVi": "Chuyển",
        "topicId": 59,
        "topicName": "Bưu điện (Post office)"
      },
      {
        "word": "Transmit",
        "pos": "v",
        "ipa": "/trænzˈmɪt/",
        "meaningVi": "Truyền",
        "topicId": 59,
        "topicName": "Bưu điện (Post office)"
      },
      {
        "word": "Well-trained",
        "pos": "adj",
        "ipa": "/wɛltreɪnd/",
        "meaningVi": "Đượcđàotạobài",
        "topicId": 59,
        "topicName": "Bưu điện (Post office)"
      }
    ]
  },
  {
    "id": 60,
    "name": "Ngân hàng & Tài chính (Bank & Finance)",
    "wordCount": 66,
    "words": [
      {
        "word": "Staffmovements",
        "pos": "n. phr",
        "ipa": "/stæfˈmuːvmənts/",
        "meaningVi": "Luânchuyểnnhân",
        "topicId": 60,
        "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
      },
      {
        "word": "Retire",
        "pos": "v",
        "ipa": "/rɪˈtaɪər/",
        "meaningVi": "Nghỉhưu",
        "topicId": 60,
        "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
      },
      {
        "word": "Dismiss",
        "pos": "v",
        "ipa": "/dɪsˈmɪs/",
        "meaningVi": "Sathải",
        "topicId": 60,
        "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
      },
      {
        "word": "Finance",
        "pos": "n",
        "ipa": "/ˈfaɪnæns/",
        "meaningVi": "Tàichính",
        "topicId": 60,
        "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
      },
      {
        "word": "Appointment",
        "pos": "n",
        "ipa": "/əˈpɔɪntmənt/",
        "meaningVi": "Sựbổnhiệm",
        "topicId": 60,
        "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
      },
      {
        "word": "Multinational",
        "pos": "adj",
        "ipa": "/ˌmʌltɪˈnæʃənəl/",
        "meaningVi": "Đaquốcgia",
        "topicId": 60,
        "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
      },
      {
        "word": "Investor",
        "pos": "n",
        "ipa": "/ɪnˈvɛstər/",
        "meaningVi": "Nhàđầutư",
        "topicId": 60,
        "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
      },
      {
        "word": "Inherit",
        "pos": "v",
        "ipa": "/ɪnˈhɛrɪt/",
        "meaningVi": "Thừakế",
        "topicId": 60,
        "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
      },
      {
        "word": "Accountant",
        "pos": "n",
        "ipa": "/əˈkaʊntənt/",
        "meaningVi": "Nhânviênkếtoán",
        "topicId": 60,
        "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
      },
      {
        "word": "Lend",
        "pos": "v",
        "ipa": "/lɛnd/",
        "meaningVi": "Chovay",
        "topicId": 60,
        "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
      },
      {
        "word": "Borrow",
        "pos": "v",
        "ipa": "/ˈbɒroʊ/",
        "meaningVi": "Vay,mượn",
        "topicId": 60,
        "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
      },
      {
        "word": "Rent",
        "pos": "v",
        "ipa": "/rɛnt/",
        "meaningVi": "Thuê",
        "topicId": 60,
        "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
      },
      {
        "word": "Distribution",
        "pos": "n",
        "ipa": "/ˌdɪstrɪˈbjuːʃən/",
        "meaningVi": "Sựphânphối,phân",
        "topicId": 60,
        "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
      },
      {
        "word": "Co-ordinate",
        "pos": "v",
        "ipa": "/koʊˈɔrdəˌneɪt/",
        "meaningVi": "Phốihợp,sắpxếp",
        "topicId": 60,
        "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
      },
      {
        "word": "Purchase",
        "pos": "v",
        "ipa": "/ˈpɜrʧəs/",
        "meaningVi": "Mua",
        "topicId": 60,
        "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
      },
      {
        "word": "Stockexchange",
        "pos": "n. phr",
        "ipa": "/stɒkɪksˈʧeɪndʒ/",
        "meaningVi": "Sàngiaodịch",
        "topicId": 60,
        "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
      },
      {
        "word": "Stockmarket",
        "pos": "n. phr",
        "ipa": "/stɒkˈmɑrkɪt/",
        "meaningVi": "Thịtrườngchứng",
        "topicId": 60,
        "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
      },
      {
        "word": "Opportunity",
        "pos": "n",
        "ipa": "/ˌɒpərˈtunɪti/",
        "meaningVi": "Cơhội",
        "topicId": 60,
        "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
      },
      {
        "word": "Challenge",
        "pos": "n",
        "ipa": "/ˈʧæləndʒ/",
        "meaningVi": "Thửthách",
        "topicId": 60,
        "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
      },
      {
        "word": "Career",
        "pos": "n",
        "ipa": "/kəˈrɪər/",
        "meaningVi": "Nghềnghiệp,sự",
        "topicId": 60,
        "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
      },
      {
        "word": "Intensivecourse",
        "pos": "n. phr",
        "ipa": "/ɪnˈtɛnsɪvkɔrs/",
        "meaningVi": "Khóahọccấptốc",
        "topicId": 60,
        "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
      },
      {
        "word": "Commerce",
        "pos": "n",
        "ipa": "/ˈkɑːmɜrs/",
        "meaningVi": "Thươngmại",
        "topicId": 60,
        "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
      },
      {
        "word": "Costly",
        "pos": "adj",
        "ipa": "/ˈkɒstli/",
        "meaningVi": "Tốnkém",
        "topicId": 60,
        "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
      },
      {
        "word": "Responsible",
        "pos": "adj",
        "ipa": "/rɪˈspɒnsəbl/",
        "meaningVi": "Chịutráchnhiệm",
        "topicId": 60,
        "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
      },
      {
        "word": "Communicate",
        "pos": "v",
        "ipa": "/kəˈmjuːnɪˌkeɪt/",
        "meaningVi": "Giaotiếp",
        "topicId": 60,
        "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
      },
      {
        "word": "Abroad",
        "pos": "adv",
        "ipa": "/əˈbrɔd/",
        "meaningVi": "Ởnướcngoài",
        "topicId": 60,
        "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
      },
      {
        "word": "Inheritance",
        "pos": "n",
        "ipa": "/ɪnˈhɛrɪtəns/",
        "meaningVi": "Sựthừakế",
        "topicId": 60,
        "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
      },
      {
        "word": "Fortune",
        "pos": "n",
        "ipa": "/ˈfɔrʧən/",
        "meaningVi": "Tàisản,vậnmay",
        "topicId": 60,
        "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
      },
      {
        "word": "Property",
        "pos": "n",
        "ipa": "/ˈprɒpərti/",
        "meaningVi": "Tàisản",
        "topicId": 60,
        "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
      },
      {
        "word": "Cashmachine",
        "pos": "n. phr",
        "ipa": "/kæʃməˈʃiːn/",
        "meaningVi": "Máyrúttiền",
        "topicId": 60,
        "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
      },
      {
        "word": "Onlineaccount",
        "pos": "n. phr",
        "ipa": "/ˈɒnˌlaɪn əˈkaʊnt/",
        "meaningVi": "Tàikhoảntrực",
        "topicId": 60,
        "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
      },
      {
        "word": "Insurancepolicy",
        "pos": "n. phr",
        "ipa": "/ɪnˈʃʊrəns ˈpɒlɪsi/",
        "meaningVi": "Hợpđồngbảohiểm",
        "topicId": 60,
        "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
      },
      {
        "word": "Creditcard",
        "pos": "n. phr",
        "ipa": "/ˈkrɛdɪtkɑrd/",
        "meaningVi": "Thẻtíndụng",
        "topicId": 60,
        "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
      },
      {
        "word": "Debitcard",
        "pos": "n. phr",
        "ipa": "/ˈdɛbɪtkɑrd/",
        "meaningVi": "Thẻghinợ",
        "topicId": 60,
        "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
      },
      {
        "word": "Rentalcontract",
        "pos": "n. phr",
        "ipa": "/ˈrɛntəl ˈkɒntrækt/",
        "meaningVi": "Hợpđồngchothuê",
        "topicId": 60,
        "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
      },
      {
        "word": "Discount",
        "pos": "n",
        "ipa": "/ˈdɪskaʊnt/",
        "meaningVi": "Sựgiảmgiá,chiết",
        "topicId": 60,
        "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
      },
      {
        "word": "Creditlimit",
        "pos": "n. phr",
        "ipa": "/ˈkrɛdɪtˈlɪmɪt/",
        "meaningVi": "Hạnmứctíndụng",
        "topicId": 60,
        "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
      },
      {
        "word": "Survey",
        "pos": "n",
        "ipa": "/ˈsɜːrveɪ/",
        "meaningVi": "Khảosát",
        "topicId": 60,
        "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
      },
      {
        "word": "Possession",
        "pos": "n",
        "ipa": "/pəˈzɛʃən/",
        "meaningVi": "Sựsởhữu",
        "topicId": 60,
        "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
      },
      {
        "word": "Equality",
        "pos": "n",
        "ipa": "/ɪˈkwɒlɪti/",
        "meaningVi": "Sựngangbằng",
        "topicId": 60,
        "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
      },
      {
        "word": "Poverty",
        "pos": "n",
        "ipa": "/ˈpɒvərti/",
        "meaningVi": "Sựnghèo",
        "topicId": 60,
        "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
      },
      {
        "word": "Charge",
        "pos": "n",
        "ipa": "/ʧɑrdʒ/",
        "meaningVi": "Phí, tiền phải trả",
        "topicId": 60,
        "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
      },
      {
        "word": "Outsource",
        "pos": "v",
        "ipa": "/ˈaʊtsɔrs/",
        "meaningVi": "Thuêngoài",
        "topicId": 60,
        "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
      },
      {
        "word": "Grant",
        "pos": "n",
        "ipa": "/ɡrænt/",
        "meaningVi": "Trợcấp,côngnhận",
        "topicId": 60,
        "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
      },
      {
        "word": "Warehouse",
        "pos": "n",
        "ipa": "/ˈwɛrˌhaʊs/",
        "meaningVi": "Khohàng",
        "topicId": 60,
        "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
      },
      {
        "word": "Lease",
        "pos": "v",
        "ipa": "/liːs/",
        "meaningVi": "Chothuê",
        "topicId": 60,
        "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
      },
      {
        "word": "In-house",
        "pos": "adj",
        "ipa": "/ˈɪnhaʊs/",
        "meaningVi": "Tiếnhànhtrong",
        "topicId": 60,
        "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
      },
      {
        "word": "Back-office",
        "pos": "n",
        "ipa": "/bækˈɒfɪs/",
        "meaningVi": "Vănphònghành",
        "topicId": 60,
        "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
      },
      {
        "word": "Campaign",
        "pos": "n",
        "ipa": "/kæmˈpeɪn/",
        "meaningVi": "Chiếndịch",
        "topicId": 60,
        "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
      },
      {
        "word": "Insecurity",
        "pos": "n",
        "ipa": "/ˌɪnsɪˈkjʊrɪti/",
        "meaningVi": "Tínhkoantoàn",
        "topicId": 60,
        "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
      },
      {
        "word": "Compensation",
        "pos": "n",
        "ipa": "/ˌkɒmpənˈseɪʃən/",
        "meaningVi": "Sựđềnbù,bồi",
        "topicId": 60,
        "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
      },
      {
        "word": "Commit",
        "pos": "v",
        "ipa": "/kəˈmɪt/",
        "meaningVi": "Camkết",
        "topicId": 60,
        "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
      },
      {
        "word": "Short-termcost",
        "pos": "n. phr",
        "ipa": "/ˈʃɔrtˌtɜrm kɒst/",
        "meaningVi": "Chiphíngắnhạn",
        "topicId": 60,
        "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
      },
      {
        "word": "Long-termgain",
        "pos": "n. phr",
        "ipa": "/ˈlɒŋˌtɜrmɡeɪn/",
        "meaningVi": "Tiềnkiếmđượcdài",
        "topicId": 60,
        "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
      },
      {
        "word": "Expense",
        "pos": "n",
        "ipa": "/ɪkˈspɛns/",
        "meaningVi": "Phítổn",
        "topicId": 60,
        "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
      },
      {
        "word": "Invoice",
        "pos": "n",
        "ipa": "/ˈɪnvɔɪs/",
        "meaningVi": "Hóađơn",
        "topicId": 60,
        "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
      },
      {
        "word": "Bribery",
        "pos": "n",
        "ipa": "/ˈbraɪbəri/",
        "meaningVi": "Sựđútlót,hốilộ",
        "topicId": 60,
        "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
      },
      {
        "word": "Corrupt",
        "pos": "v",
        "ipa": "/kəˈrʌpt/",
        "meaningVi": "Thamnhũng",
        "topicId": 60,
        "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
      },
      {
        "word": "Balanceoftrade",
        "pos": "n. phr",
        "ipa": "/ˈbælɪnsəvtreɪd/",
        "meaningVi": "Cáncânthương",
        "topicId": 60,
        "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
      },
      {
        "word": "Budget",
        "pos": "n",
        "ipa": "/ˈbʌdʒɪt/",
        "meaningVi": "Ngânsách",
        "topicId": 60,
        "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
      },
      {
        "word": "Costofborrowing",
        "pos": "n. phr",
        "ipa": "/kɒstəvˈbɒroʊɪŋ/",
        "meaningVi": "Chiphívay",
        "topicId": 60,
        "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
      },
      {
        "word": "Retailbanking",
        "pos": "n. phr",
        "ipa": "/ˈriːteɪl ˈbæŋkɪŋ/",
        "meaningVi": "Ngânhàngbánlẻ",
        "topicId": 60,
        "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
      },
      {
        "word": "Commercialbank",
        "pos": "n. phr",
        "ipa": "/kəˈmɜrʃəlbæŋk/",
        "meaningVi": "Ngânhàngthương",
        "topicId": 60,
        "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
      },
      {
        "word": "Centralbank",
        "pos": "n. phr",
        "ipa": "/ˈsɛntrəl bæŋk/",
        "meaningVi": "Ngânhàngtrung",
        "topicId": 60,
        "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
      },
      {
        "word": "Treasury",
        "pos": "n",
        "ipa": "/ˈtrɛʒəri/",
        "meaningVi": "Khobạc",
        "topicId": 60,
        "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
      },
      {
        "word": "Investmentbank",
        "pos": "n. phr",
        "ipa": "/ɪnˈvɛstməntbæŋk/",
        "meaningVi": "Ngânhàngđầutư",
        "topicId": 60,
        "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
      }
    ]
  }
];

export const OXFORD_3000_VOCABULARY: OxfordWordItem[] = [
  {
    "word": "Watercolour",
    "pos": "n",
    "ipa": "/ˈwɔː.təˌkʌl.ər/",
    "meaningVi": "Màunước",
    "topicId": 1,
    "topicName": "Đồ dùng học tập (School stationery)"
  },
  {
    "word": "Thumbtack",
    "pos": "n",
    "ipa": "/ˈθʌm.tæk/",
    "meaningVi": "Đinhghim",
    "topicId": 1,
    "topicName": "Đồ dùng học tập (School stationery)"
  },
  {
    "word": "Textbook",
    "pos": "n",
    "ipa": "/ˈtekst.bʊk/",
    "meaningVi": "Sáchgiáokhoa",
    "topicId": 1,
    "topicName": "Đồ dùng học tập (School stationery)"
  },
  {
    "word": "Test tube",
    "pos": "n. phr",
    "ipa": "/ˈtestˌtjuːb/",
    "meaningVi": "Ốngnghiệm",
    "topicId": 1,
    "topicName": "Đồ dùng học tập (School stationery)"
  },
  {
    "word": "Tape measure",
    "pos": "n. phr",
    "ipa": "/ˈteɪpˌmeʒ.ər/",
    "meaningVi": "Thướcdây",
    "topicId": 1,
    "topicName": "Đồ dùng học tập (School stationery)"
  },
  {
    "word": "Stencil",
    "pos": "n",
    "ipa": "/ˈsten.səl/",
    "meaningVi": "Giấynến",
    "topicId": 1,
    "topicName": "Đồ dùng học tập (School stationery)"
  },
  {
    "word": "Stapler",
    "pos": "n",
    "ipa": "/ˈsteɪ.plər/",
    "meaningVi": "Đồdậpghim",
    "topicId": 1,
    "topicName": "Đồ dùng học tập (School stationery)"
  },
  {
    "word": "Set square",
    "pos": "n. phr",
    "ipa": "/ˈsetˌskweər/",
    "meaningVi": "Ê-ke",
    "topicId": 1,
    "topicName": "Đồ dùng học tập (School stationery)"
  },
  {
    "word": "Scotch tape",
    "pos": "n. phr",
    "ipa": "/ˌskɒtʃ ˈteɪp/",
    "meaningVi": "Băngdínhtrong",
    "topicId": 1,
    "topicName": "Đồ dùng học tập (School stationery)"
  },
  {
    "word": "Scissors",
    "pos": "n",
    "ipa": "/ˈsɪz.əz/",
    "meaningVi": "Kéo",
    "topicId": 1,
    "topicName": "Đồ dùng học tập (School stationery)"
  },
  {
    "word": "Ruler",
    "pos": "n",
    "ipa": "/ˈruː.lər/",
    "meaningVi": "Thước",
    "topicId": 1,
    "topicName": "Đồ dùng học tập (School stationery)"
  },
  {
    "word": "Ribbon",
    "pos": "n",
    "ipa": "/ˈrɪb.ən/",
    "meaningVi": "Ruy-băng",
    "topicId": 1,
    "topicName": "Đồ dùng học tập (School stationery)"
  },
  {
    "word": "Protractor",
    "pos": "n",
    "ipa": "/prəˈtræk.tər/",
    "meaningVi": "Thướcđogóc",
    "topicId": 1,
    "topicName": "Đồ dùng học tập (School stationery)"
  },
  {
    "word": "Post-it note",
    "pos": "n. phr",
    "ipa": "/ˈpəʊst.ɪtˌnəʊt/",
    "meaningVi": "Giấynhớ",
    "topicId": 1,
    "topicName": "Đồ dùng học tập (School stationery)"
  },
  {
    "word": "Pin",
    "pos": "n",
    "ipa": "/pɪn/",
    "meaningVi": "Đinhghim,kẹp",
    "topicId": 1,
    "topicName": "Đồ dùng học tập (School stationery)"
  },
  {
    "word": "Pencil",
    "pos": "n",
    "ipa": "/ˈpen.səl/",
    "meaningVi": "Bútchì",
    "topicId": 1,
    "topicName": "Đồ dùng học tập (School stationery)"
  },
  {
    "word": "Pencil sharpener",
    "pos": "n. phr",
    "ipa": "/ˈpen.səlˌʃɑː.pən.ər/",
    "meaningVi": "Đồgọtbútchì",
    "topicId": 1,
    "topicName": "Đồ dùng học tập (School stationery)"
  },
  {
    "word": "Pencil case",
    "pos": "n. phr",
    "ipa": "/ˈpen.səlˌkeɪs/",
    "meaningVi": "Hộpbút",
    "topicId": 1,
    "topicName": "Đồ dùng học tập (School stationery)"
  },
  {
    "word": "Pen",
    "pos": "n",
    "ipa": "/pen/",
    "meaningVi": "Bútmực",
    "topicId": 1,
    "topicName": "Đồ dùng học tập (School stationery)"
  },
  {
    "word": "Paper",
    "pos": "n",
    "ipa": "/ˈpeɪ.pər/",
    "meaningVi": "Giấy",
    "topicId": 1,
    "topicName": "Đồ dùng học tập (School stationery)"
  },
  {
    "word": "Paper clip",
    "pos": "n. phr",
    "ipa": "/ˈpeɪ.pəˌklɪp/",
    "meaningVi": "Kẹpgiấy",
    "topicId": 1,
    "topicName": "Đồ dùng học tập (School stationery)"
  },
  {
    "word": "Palette",
    "pos": "n",
    "ipa": "/ˈpæl.ət/",
    "meaningVi": "Bảngmàu",
    "topicId": 1,
    "topicName": "Đồ dùng học tập (School stationery)"
  },
  {
    "word": "Paint",
    "pos": "n",
    "ipa": "/peɪnt/",
    "meaningVi": "Sơn,màu",
    "topicId": 1,
    "topicName": "Đồ dùng học tập (School stationery)"
  },
  {
    "word": "Paintbrush",
    "pos": "n. phr",
    "ipa": "/ˈpeɪntˌbrʌʃ/",
    "meaningVi": "Chổisơn",
    "topicId": 1,
    "topicName": "Đồ dùng học tập (School stationery)"
  },
  {
    "word": "Notebook",
    "pos": "n",
    "ipa": "/ˈnəʊt.bʊk/",
    "meaningVi": "Cuốnsổ,vở",
    "topicId": 1,
    "topicName": "Đồ dùng học tập (School stationery)"
  },
  {
    "word": "Map",
    "pos": "n",
    "ipa": "/mæp/",
    "meaningVi": "Bảnđồ",
    "topicId": 1,
    "topicName": "Đồ dùng học tập (School stationery)"
  },
  {
    "word": "Index card",
    "pos": "n. phr",
    "ipa": "/ˈkɑːdˌɪn.deks/",
    "meaningVi": "Phiếulàmmụclục",
    "topicId": 1,
    "topicName": "Đồ dùng học tập (School stationery)"
  },
  {
    "word": "Highlighter",
    "pos": "n",
    "ipa": "/ˈhaɪˌlaɪ.tər/",
    "meaningVi": "Bútđánhdấumàu",
    "topicId": 1,
    "topicName": "Đồ dùng học tập (School stationery)"
  },
  {
    "word": "Glue",
    "pos": "n",
    "ipa": "/ɡluː/",
    "meaningVi": "Keo",
    "topicId": 1,
    "topicName": "Đồ dùng học tập (School stationery)"
  },
  {
    "word": "Globe",
    "pos": "n",
    "ipa": "/ɡləʊb/",
    "meaningVi": "Quảđịacầu",
    "topicId": 1,
    "topicName": "Đồ dùng học tập (School stationery)"
  },
  {
    "word": "Flashcard",
    "pos": "n. phr",
    "ipa": "/ˈflæʃ ˌkɑːd/",
    "meaningVi": "Thẻghinhớ",
    "topicId": 1,
    "topicName": "Đồ dùng học tập (School stationery)"
  },
  {
    "word": "File holder",
    "pos": "n. phr",
    "ipa": "/faɪlˈhəʊl.dər/",
    "meaningVi": "Tậphồsơ",
    "topicId": 1,
    "topicName": "Đồ dùng học tập (School stationery)"
  },
  {
    "word": "File cabinet",
    "pos": "n. phr",
    "ipa": "/ˈfaɪl ˌkæb.ɪ.nət/",
    "meaningVi": "Tủđựngtàiliệu",
    "topicId": 1,
    "topicName": "Đồ dùng học tập (School stationery)"
  },
  {
    "word": "Felt pen",
    "pos": "n. phr",
    "ipa": "/felt pen/",
    "meaningVi": "Bútdạ",
    "topicId": 1,
    "topicName": "Đồ dùng học tập (School stationery)"
  },
  {
    "word": "Rubber",
    "pos": "n",
    "ipa": "/ˈrʌb.ər/",
    "meaningVi": "Cụctẩy",
    "topicId": 1,
    "topicName": "Đồ dùng học tập (School stationery)"
  },
  {
    "word": "Duster",
    "pos": "n",
    "ipa": "/ˈdʌs.tər/",
    "meaningVi": "Khănlaubảng",
    "topicId": 1,
    "topicName": "Đồ dùng học tập (School stationery)"
  },
  {
    "word": "Dossier",
    "pos": "n",
    "ipa": "/ˈdɒs.i.eɪ/",
    "meaningVi": "Hồsơ",
    "topicId": 1,
    "topicName": "Đồ dùng học tập (School stationery)"
  },
  {
    "word": "Dictionary",
    "pos": "adj",
    "ipa": "/ˈdɪk.ʃən.ər.i/",
    "meaningVi": "Từđiển",
    "topicId": 1,
    "topicName": "Đồ dùng học tập (School stationery)"
  },
  {
    "word": "Desk",
    "pos": "n",
    "ipa": "/desk/",
    "meaningVi": "Bànhọc",
    "topicId": 1,
    "topicName": "Đồ dùng học tập (School stationery)"
  },
  {
    "word": "Crayon",
    "pos": "n",
    "ipa": "/ˈkreɪ.ɒn/",
    "meaningVi": "Bútchìmàu",
    "topicId": 1,
    "topicName": "Đồ dùng học tập (School stationery)"
  },
  {
    "word": "Computer",
    "pos": "n",
    "ipa": "/kəmˈpjuː.tər/",
    "meaningVi": "Máytínhbàn",
    "topicId": 1,
    "topicName": "Đồ dùng học tập (School stationery)"
  },
  {
    "word": "Compass",
    "pos": "n",
    "ipa": "/ˈkʌm.pəs/",
    "meaningVi": "Com-pa",
    "topicId": 1,
    "topicName": "Đồ dùng học tập (School stationery)"
  },
  {
    "word": "Coloured pencil",
    "pos": "n. phr",
    "ipa": "/ˈkʌl.əd ˈpen.səl/",
    "meaningVi": "Bútchìmàu",
    "topicId": 1,
    "topicName": "Đồ dùng học tập (School stationery)"
  },
  {
    "word": "Clock",
    "pos": "n",
    "ipa": "/klɒk/",
    "meaningVi": "Đồnghồtreotường",
    "topicId": 1,
    "topicName": "Đồ dùng học tập (School stationery)"
  },
  {
    "word": "Chalk",
    "pos": "n",
    "ipa": "/tʃɔːk/",
    "meaningVi": "Phấn",
    "topicId": 1,
    "topicName": "Đồ dùng học tập (School stationery)"
  },
  {
    "word": "Chair",
    "pos": "n",
    "ipa": "/tʃeər/",
    "meaningVi": "Ghế",
    "topicId": 1,
    "topicName": "Đồ dùng học tập (School stationery)"
  },
  {
    "word": "Carbon paper",
    "pos": "n. phr",
    "ipa": "/ˈkɑː.bənˌpeɪ.pər/",
    "meaningVi": "Giấythan",
    "topicId": 1,
    "topicName": "Đồ dùng học tập (School stationery)"
  },
  {
    "word": "Calculator",
    "pos": "n",
    "ipa": "/ˈkæl.kjə.leɪ.tər/",
    "meaningVi": "Máytínhcầmtay",
    "topicId": 1,
    "topicName": "Đồ dùng học tập (School stationery)"
  },
  {
    "word": "Bookcase",
    "pos": "n",
    "ipa": "/ˈbʊk.keɪs/",
    "meaningVi": "Giásách",
    "topicId": 1,
    "topicName": "Đồ dùng học tập (School stationery)"
  },
  {
    "word": "Book",
    "pos": "n",
    "ipa": "/bʊk/",
    "meaningVi": "Sách",
    "topicId": 1,
    "topicName": "Đồ dùng học tập (School stationery)"
  },
  {
    "word": "Board",
    "pos": "n",
    "ipa": "/bɔːd/",
    "meaningVi": "Bảng",
    "topicId": 1,
    "topicName": "Đồ dùng học tập (School stationery)"
  },
  {
    "word": "Blackboard",
    "pos": "n",
    "ipa": "/ˈblæk.bɔːd/",
    "meaningVi": "Bảngđen",
    "topicId": 1,
    "topicName": "Đồ dùng học tập (School stationery)"
  },
  {
    "word": "Binder",
    "pos": "n",
    "ipa": "/ˈbaɪn.dər/",
    "meaningVi": "Bìarời(báo,tạp",
    "topicId": 1,
    "topicName": "Đồ dùng học tập (School stationery)"
  },
  {
    "word": "Beaker",
    "pos": "n",
    "ipa": "/ˈbiː.kər/",
    "meaningVi": "Cốcbêse",
    "topicId": 1,
    "topicName": "Đồ dùng học tập (School stationery)"
  },
  {
    "word": "Ballpoint pen",
    "pos": "n",
    "ipa": "/ˌbɔːl.pɔɪnt ˈpen/",
    "meaningVi": "Bútbi",
    "topicId": 1,
    "topicName": "Đồ dùng học tập (School stationery)"
  },
  {
    "word": "Bag",
    "pos": "n",
    "ipa": "/bæɡ/",
    "meaningVi": "Cặpsách",
    "topicId": 1,
    "topicName": "Đồ dùng học tập (School stationery)"
  },
  {
    "word": "Backpack",
    "pos": "n",
    "ipa": "/ˈbæk.pæk/",
    "meaningVi": "Balô",
    "topicId": 1,
    "topicName": "Đồ dùng học tập (School stationery)"
  },
  {
    "word": "Funnel",
    "pos": "n",
    "ipa": "/ˈfʌn.əl/",
    "meaningVi": "Cáiphễu",
    "topicId": 1,
    "topicName": "Đồ dùng học tập (School stationery)"
  },
  {
    "word": "Pack",
    "pos": "v",
    "ipa": "/pæk/",
    "meaningVi": "Bó,gói",
    "topicId": 2,
    "topicName": "Hành động (Actions)"
  },
  {
    "word": "Paint",
    "pos": "v",
    "ipa": "/peint/",
    "meaningVi": "Quétsơn",
    "topicId": 2,
    "topicName": "Hành động (Actions)"
  },
  {
    "word": "Paste",
    "pos": "v",
    "ipa": "/peist/",
    "meaningVi": "Dán",
    "topicId": 2,
    "topicName": "Hành động (Actions)"
  },
  {
    "word": "Pick",
    "pos": "v",
    "ipa": "/pik/",
    "meaningVi": "Hái,nhổ",
    "topicId": 2,
    "topicName": "Hành động (Actions)"
  },
  {
    "word": "Plant",
    "pos": "v",
    "ipa": "/plænt/",
    "meaningVi": "Trồng",
    "topicId": 2,
    "topicName": "Hành động (Actions)"
  },
  {
    "word": "Play",
    "pos": "v",
    "ipa": "/plei/",
    "meaningVi": "Chơi",
    "topicId": 2,
    "topicName": "Hành động (Actions)"
  },
  {
    "word": "Point",
    "pos": "v",
    "ipa": "/pɔint/",
    "meaningVi": "Chỉ",
    "topicId": 2,
    "topicName": "Hành động (Actions)"
  },
  {
    "word": "Pour",
    "pos": "v",
    "ipa": "/pɔ:/",
    "meaningVi": "Rót,đổ",
    "topicId": 2,
    "topicName": "Hành động (Actions)"
  },
  {
    "word": "Pull",
    "pos": "v",
    "ipa": "/pul/",
    "meaningVi": "Lôi, kéo",
    "topicId": 2,
    "topicName": "Hành động (Actions)"
  },
  {
    "word": "Push",
    "pos": "v",
    "ipa": "/puʃ/",
    "meaningVi": "Xô,đẩy",
    "topicId": 2,
    "topicName": "Hành động (Actions)"
  },
  {
    "word": "Rake",
    "pos": "v",
    "ipa": "/reik/",
    "meaningVi": "Cào,cời",
    "topicId": 2,
    "topicName": "Hành động (Actions)"
  },
  {
    "word": "Read",
    "pos": "v",
    "ipa": "/ri:d/",
    "meaningVi": "Đọc",
    "topicId": 2,
    "topicName": "Hành động (Actions)"
  },
  {
    "word": "Ride",
    "pos": "v",
    "ipa": "/raid/",
    "meaningVi": "Đi, cưỡi",
    "topicId": 2,
    "topicName": "Hành động (Actions)"
  },
  {
    "word": "Row",
    "pos": "v",
    "ipa": "/rou/",
    "meaningVi": "Chèothuyền",
    "topicId": 2,
    "topicName": "Hành động (Actions)"
  },
  {
    "word": "Run",
    "pos": "v",
    "ipa": "/rʌn/",
    "meaningVi": "Chạy",
    "topicId": 2,
    "topicName": "Hành động (Actions)"
  },
  {
    "word": "Sail",
    "pos": "v",
    "ipa": "/seil/",
    "meaningVi": "Lái(thuyềnbuồm)",
    "topicId": 2,
    "topicName": "Hành động (Actions)"
  },
  {
    "word": "Scrub",
    "pos": "v",
    "ipa": "/skrʌb/",
    "meaningVi": "Lau,chùi,cọrửa",
    "topicId": 2,
    "topicName": "Hành động (Actions)"
  },
  {
    "word": "See",
    "pos": "v",
    "ipa": "/si:/",
    "meaningVi": "Thấy,xem",
    "topicId": 2,
    "topicName": "Hành động (Actions)"
  },
  {
    "word": "Set",
    "pos": "v",
    "ipa": "/set/",
    "meaningVi": "Để,đặt",
    "topicId": 2,
    "topicName": "Hành động (Actions)"
  },
  {
    "word": "Sew",
    "pos": "v",
    "ipa": "/soʊ/",
    "meaningVi": "May,khâu",
    "topicId": 2,
    "topicName": "Hành động (Actions)"
  },
  {
    "word": "Shout",
    "pos": "v",
    "ipa": "/ʃaʊt/",
    "meaningVi": "Lahét,reohò",
    "topicId": 2,
    "topicName": "Hành động (Actions)"
  },
  {
    "word": "Show",
    "pos": "v",
    "ipa": "/ʃou/",
    "meaningVi": "",
    "topicId": 2,
    "topicName": "Hành động (Actions)"
  },
  {
    "word": "Sing",
    "pos": "v",
    "ipa": "/siɳ/",
    "meaningVi": "Hát,hót",
    "topicId": 2,
    "topicName": "Hành động (Actions)"
  },
  {
    "word": "Sit",
    "pos": "v",
    "ipa": "/sit/",
    "meaningVi": "Ngồi",
    "topicId": 2,
    "topicName": "Hành động (Actions)"
  },
  {
    "word": "Skate",
    "pos": "v",
    "ipa": "/skeit/",
    "meaningVi": "Trượtbăng",
    "topicId": 2,
    "topicName": "Hành động (Actions)"
  },
  {
    "word": "Skip",
    "pos": "v",
    "ipa": "/skip/",
    "meaningVi": "Nhảy",
    "topicId": 2,
    "topicName": "Hành động (Actions)"
  },
  {
    "word": "Sleep",
    "pos": "v",
    "ipa": "/sli:p/",
    "meaningVi": "Ngủ",
    "topicId": 2,
    "topicName": "Hành động (Actions)"
  },
  {
    "word": "Slide",
    "pos": "v",
    "ipa": "/slaid/",
    "meaningVi": "Trượt",
    "topicId": 2,
    "topicName": "Hành động (Actions)"
  },
  {
    "word": "Sneeze",
    "pos": "v",
    "ipa": "/sni:z/",
    "meaningVi": "Hắthơi",
    "topicId": 2,
    "topicName": "Hành động (Actions)"
  },
  {
    "word": "Spin",
    "pos": "v",
    "ipa": "/spɪn/",
    "meaningVi": "Quay",
    "topicId": 2,
    "topicName": "Hành động (Actions)"
  },
  {
    "word": "Stand",
    "pos": "v",
    "ipa": "/stænd/",
    "meaningVi": "Đứng",
    "topicId": 2,
    "topicName": "Hành động (Actions)"
  },
  {
    "word": "Stop",
    "pos": "v",
    "ipa": "/stɔp/",
    "meaningVi": "Ngừng",
    "topicId": 2,
    "topicName": "Hành động (Actions)"
  },
  {
    "word": "Sweep",
    "pos": "v",
    "ipa": "/swi:p/",
    "meaningVi": "Quétqua;lanra",
    "topicId": 2,
    "topicName": "Hành động (Actions)"
  },
  {
    "word": "Swim",
    "pos": "v",
    "ipa": "/swim/",
    "meaningVi": "Bơi",
    "topicId": 2,
    "topicName": "Hành động (Actions)"
  },
  {
    "word": "Swing",
    "pos": "v",
    "ipa": "/swɪŋ/",
    "meaningVi": "Đuđưa",
    "topicId": 2,
    "topicName": "Hành động (Actions)"
  },
  {
    "word": "Take",
    "pos": "v",
    "ipa": "/teik/",
    "meaningVi": "Cầm,nắm,lấy",
    "topicId": 2,
    "topicName": "Hành động (Actions)"
  },
  {
    "word": "Talk",
    "pos": "v",
    "ipa": "/tɔ:k/",
    "meaningVi": "Nóichuyện",
    "topicId": 2,
    "topicName": "Hành động (Actions)"
  },
  {
    "word": "Tell",
    "pos": "v",
    "ipa": "/tel/",
    "meaningVi": "Nói",
    "topicId": 2,
    "topicName": "Hành động (Actions)"
  },
  {
    "word": "Throw",
    "pos": "v",
    "ipa": "/θrəʊ/",
    "meaningVi": "Ném,quăng",
    "topicId": 2,
    "topicName": "Hành động (Actions)"
  },
  {
    "word": "Tie",
    "pos": "v",
    "ipa": "/tai/",
    "meaningVi": "Buộc,cột,trói",
    "topicId": 2,
    "topicName": "Hành động (Actions)"
  },
  {
    "word": "Brushyourteeth",
    "pos": "v. phr",
    "ipa": "/brʌʃ ti:θ/",
    "meaningVi": "Đánhrăng",
    "topicId": 3,
    "topicName": "Hoạt động thường ngày (Daily activities)"
  },
  {
    "word": "Buy",
    "pos": "v",
    "ipa": "/bai/",
    "meaningVi": "Mua",
    "topicId": 3,
    "topicName": "Hoạt động thường ngày (Daily activities)"
  },
  {
    "word": "Combthehair",
    "pos": "v. phr",
    "ipa": "/koumðəheə/",
    "meaningVi": "Chảiđầu",
    "topicId": 3,
    "topicName": "Hoạt động thường ngày (Daily activities)"
  },
  {
    "word": "Cook",
    "pos": "v",
    "ipa": "/kuk/",
    "meaningVi": "Nấuăn",
    "topicId": 3,
    "topicName": "Hoạt động thường ngày (Daily activities)"
  },
  {
    "word": "Doexercise",
    "pos": "v. phr",
    "ipa": "/du:eksəsaiz/",
    "meaningVi": "Tậpthểdục",
    "topicId": 3,
    "topicName": "Hoạt động thường ngày (Daily activities)"
  },
  {
    "word": "Doyourhomework",
    "pos": "v. phr",
    "ipa": "/du‘houmwə:k/",
    "meaningVi": "Làmbàitậpvềnhà",
    "topicId": 3,
    "topicName": "Hoạt động thường ngày (Daily activities)"
  },
  {
    "word": "Eatout",
    "pos": "v. phr",
    "ipa": "/ˈiːt ˌaʊt/",
    "meaningVi": "Điănởngoài",
    "topicId": 3,
    "topicName": "Hoạt động thường ngày (Daily activities)"
  },
  {
    "word": "Feedthedog",
    "pos": "v. phr",
    "ipa": "/ff:dðədɔg/",
    "meaningVi": "Chochóăn",
    "topicId": 3,
    "topicName": "Hoạt động thường ngày (Daily activities)"
  },
  {
    "word": "Finishworking",
    "pos": "v. phr",
    "ipa": "/’ffniʃ ˈwəːkɪŋ/",
    "meaningVi": "Kếtthúccôngviệc",
    "topicId": 3,
    "topicName": "Hoạt động thường ngày (Daily activities)"
  },
  {
    "word": "Gardening",
    "pos": "v",
    "ipa": "/ˈɡɑː.dən.ɪŋ/",
    "meaningVi": "Làmvườn",
    "topicId": 3,
    "topicName": "Hoạt động thường ngày (Daily activities)"
  },
  {
    "word": "Getdressed",
    "pos": "v. phr",
    "ipa": "/getdres/",
    "meaningVi": "Mặcquầnáo",
    "topicId": 3,
    "topicName": "Hoạt động thường ngày (Daily activities)"
  },
  {
    "word": "Getup",
    "pos": "v. phr",
    "ipa": "/getΛp/",
    "meaningVi": "Thứcdậy",
    "topicId": 3,
    "topicName": "Hoạt động thường ngày (Daily activities)"
  },
  {
    "word": "Gohome",
    "pos": "v. phr",
    "ipa": "/gouhoum/",
    "meaningVi": "Vềnhà",
    "topicId": 3,
    "topicName": "Hoạt động thường ngày (Daily activities)"
  },
  {
    "word": "Goshopping",
    "pos": "v. phr",
    "ipa": "/gouˈʃɒp.ɪŋ/",
    "meaningVi": "Đimuasắm",
    "topicId": 3,
    "topicName": "Hoạt động thường ngày (Daily activities)"
  },
  {
    "word": "Gotobed",
    "pos": "v. phr",
    "ipa": "/goutəbed/",
    "meaningVi": "Đingủ",
    "topicId": 3,
    "topicName": "Hoạt động thường ngày (Daily activities)"
  },
  {
    "word": "Gotothemovies",
    "pos": "v. phr",
    "ipa": "/goutəðəˈmuː.vi/",
    "meaningVi": "Đixemphim",
    "topicId": 3,
    "topicName": "Hoạt động thường ngày (Daily activities)"
  },
  {
    "word": "Haveabath",
    "pos": "v. phr",
    "ipa": "/hævə‘bɑ:θ/",
    "meaningVi": "Đitắm",
    "topicId": 3,
    "topicName": "Hoạt động thường ngày (Daily activities)"
  },
  {
    "word": "Haveanap",
    "pos": "v. phr",
    "ipa": "/ˌhæv.ənæp/",
    "meaningVi": "Ngủngắn",
    "topicId": 3,
    "topicName": "Hoạt động thường ngày (Daily activities)"
  },
  {
    "word": "Havebreakfast",
    "pos": "v. phr",
    "ipa": "/ˌhævˈbrek.fəst/",
    "meaningVi": "Ănsáng",
    "topicId": 3,
    "topicName": "Hoạt động thường ngày (Daily activities)"
  },
  {
    "word": "Havedinner",
    "pos": "v. phr",
    "ipa": "/ˌhævˈdɪn.ər/",
    "meaningVi": "Ántối",
    "topicId": 3,
    "topicName": "Hoạt động thường ngày (Daily activities)"
  },
  {
    "word": "Havelunch",
    "pos": "v. phr",
    "ipa": "/ˌhævlʌntʃ/",
    "meaningVi": "Ăntrưa",
    "topicId": 3,
    "topicName": "Hoạt động thường ngày (Daily activities)"
  },
  {
    "word": "Haveashower",
    "pos": "v. phr",
    "ipa": "/hævəˈʃaʊər/",
    "meaningVi": "Tắmvòihoasen",
    "topicId": 3,
    "topicName": "Hoạt động thường ngày (Daily activities)"
  },
  {
    "word": "Listentomusic",
    "pos": "v. phr",
    "ipa": "/ˈlɪs.ən tuːˈmjuː.zɪk/",
    "meaningVi": "Nghenhạc",
    "topicId": 3,
    "topicName": "Hoạt động thường ngày (Daily activities)"
  },
  {
    "word": "Makebreakfast",
    "pos": "v. phr",
    "ipa": "/meik‘brekfəst/",
    "meaningVi": "Làmbữaănsáng",
    "topicId": 3,
    "topicName": "Hoạt động thường ngày (Daily activities)"
  },
  {
    "word": "Makeup",
    "pos": "v. phr",
    "ipa": "/meikΛp/",
    "meaningVi": "Trangđiểm",
    "topicId": 3,
    "topicName": "Hoạt động thường ngày (Daily activities)"
  },
  {
    "word": "Meditation",
    "pos": "n",
    "ipa": "/ˌmedi’teiʃn/",
    "meaningVi": "Thiền",
    "topicId": 3,
    "topicName": "Hoạt động thường ngày (Daily activities)"
  },
  {
    "word": "Playoutside",
    "pos": "v. phr",
    "ipa": "/pleɪˌaʊtˈsaɪd/",
    "meaningVi": "Đirangoàichơi",
    "topicId": 3,
    "topicName": "Hoạt động thường ngày (Daily activities)"
  },
  {
    "word": "Playsports",
    "pos": "v. phr",
    "ipa": "/pleɪspɔːts/",
    "meaningVi": "Chơithểthao",
    "topicId": 3,
    "topicName": "Hoạt động thường ngày (Daily activities)"
  },
  {
    "word": "Readbooks",
    "pos": "v. phr",
    "ipa": "/riːd bʊks/",
    "meaningVi": "Đọcsách",
    "topicId": 3,
    "topicName": "Hoạt động thường ngày (Daily activities)"
  },
  {
    "word": "Readnewspapers",
    "pos": "v. phr",
    "ipa": "/ri:d’nju:zˌpeipəz/",
    "meaningVi": "Đọcbáo",
    "topicId": 3,
    "topicName": "Hoạt động thường ngày (Daily activities)"
  },
  {
    "word": "Relax",
    "pos": "v",
    "ipa": "/rɪˈlæks/",
    "meaningVi": "Thưgiãn",
    "topicId": 3,
    "topicName": "Hoạt động thường ngày (Daily activities)"
  },
  {
    "word": "Setthealarm",
    "pos": "v. phr",
    "ipa": "/setðəə’lɑ:m/",
    "meaningVi": "Đặtchuôngbáo",
    "topicId": 3,
    "topicName": "Hoạt động thường ngày (Daily activities)"
  },
  {
    "word": "Shave",
    "pos": "v",
    "ipa": "/∫eiv/",
    "meaningVi": "Cạorâu",
    "topicId": 3,
    "topicName": "Hoạt động thường ngày (Daily activities)"
  },
  {
    "word": "Sleep",
    "pos": "v",
    "ipa": "/sliːp/",
    "meaningVi": "Ngủ",
    "topicId": 3,
    "topicName": "Hoạt động thường ngày (Daily activities)"
  },
  {
    "word": "Study",
    "pos": "v",
    "ipa": "/ˈstʌd.i/",
    "meaningVi": "Họctập,nghiên",
    "topicId": 3,
    "topicName": "Hoạt động thường ngày (Daily activities)"
  },
  {
    "word": "Surftheinternet",
    "pos": "v. phr",
    "ipa": "/sɜːf ðiː ˈɪn.tə.net/",
    "meaningVi": "Lướtmạng",
    "topicId": 3,
    "topicName": "Hoạt động thường ngày (Daily activities)"
  },
  {
    "word": "v. phr",
    "pos": "noun",
    "ipa": "/teikðə‘rʌbiʃaut/",
    "meaningVi": "Điđổrác",
    "topicId": 3,
    "topicName": "Hoạt động thường ngày (Daily activities)"
  },
  {
    "word": "Drink",
    "pos": "v",
    "ipa": "/driɳk/",
    "meaningVi": "Uống",
    "topicId": 3,
    "topicName": "Hoạt động thường ngày (Daily activities)"
  },
  {
    "word": "Turnoff",
    "pos": "phrasalv",
    "ipa": "/tɜrnɒf/",
    "meaningVi": "Tắt",
    "topicId": 3,
    "topicName": "Hoạt động thường ngày (Daily activities)"
  },
  {
    "word": "Visit your friend",
    "pos": "v. phr",
    "ipa": "/ˈvɪz.ɪt jɔːr frend/",
    "meaningVi": "Thămbạnbè",
    "topicId": 3,
    "topicName": "Hoạt động thường ngày (Daily activities)"
  },
  {
    "word": "Wakeup",
    "pos": "phrasalv",
    "ipa": "/weikΛp/",
    "meaningVi": "Tỉnhgiấc",
    "topicId": 3,
    "topicName": "Hoạt động thường ngày (Daily activities)"
  },
  {
    "word": "Washyourface",
    "pos": "v. phr",
    "ipa": "/wɒʃjɔːrfeɪs/",
    "meaningVi": "Rửamặt",
    "topicId": 3,
    "topicName": "Hoạt động thường ngày (Daily activities)"
  },
  {
    "word": "Washthedishes",
    "pos": "v. phr",
    "ipa": "/wɔʃðədɪʃ/",
    "meaningVi": "Rửachén",
    "topicId": 3,
    "topicName": "Hoạt động thường ngày (Daily activities)"
  },
  {
    "word": "Watchtelevision",
    "pos": "v. phr",
    "ipa": "/wɔtʃ‘teliˌviʤn/",
    "meaningVi": "Xemtivi",
    "topicId": 3,
    "topicName": "Hoạt động thường ngày (Daily activities)"
  },
  {
    "word": "Work",
    "pos": "v",
    "ipa": "/wə:k/",
    "meaningVi": "Làmviệc",
    "topicId": 3,
    "topicName": "Hoạt động thường ngày (Daily activities)"
  },
  {
    "word": "Sea",
    "pos": "n",
    "ipa": "/siː/",
    "meaningVi": "Biển",
    "topicId": 4,
    "topicName": "Chủ đề Biển (Sea & Ocean)"
  },
  {
    "word": "Ocean",
    "pos": "n",
    "ipa": "/ˈəʊʃən/",
    "meaningVi": "Đạidương",
    "topicId": 4,
    "topicName": "Chủ đề Biển (Sea & Ocean)"
  },
  {
    "word": "Wave",
    "pos": "n",
    "ipa": "/weɪv/",
    "meaningVi": "Sóng",
    "topicId": 4,
    "topicName": "Chủ đề Biển (Sea & Ocean)"
  },
  {
    "word": "Island",
    "pos": "n",
    "ipa": "/ˈaɪlənd/",
    "meaningVi": "Hònđảo",
    "topicId": 4,
    "topicName": "Chủ đề Biển (Sea & Ocean)"
  },
  {
    "word": "Harbor",
    "pos": "n",
    "ipa": "/ˈhɑːr.bɚ/",
    "meaningVi": "Cảngbiển",
    "topicId": 4,
    "topicName": "Chủ đề Biển (Sea & Ocean)"
  },
  {
    "word": "Lighthouse",
    "pos": "n",
    "ipa": "/ˈlaɪthaʊs/",
    "meaningVi": "Hảiđăng",
    "topicId": 4,
    "topicName": "Chủ đề Biển (Sea & Ocean)"
  },
  {
    "word": "Submarine",
    "pos": "n",
    "ipa": "/ˌsʌbmərˈiːn/",
    "meaningVi": "Tàungầm",
    "topicId": 4,
    "topicName": "Chủ đề Biển (Sea & Ocean)"
  },
  {
    "word": "Ship",
    "pos": "n",
    "ipa": "/ʃɪp/",
    "meaningVi": "Tàuthuỷ",
    "topicId": 4,
    "topicName": "Chủ đề Biển (Sea & Ocean)"
  },
  {
    "word": "Boat",
    "pos": "n",
    "ipa": "/bəʊt/",
    "meaningVi": "Thuyền",
    "topicId": 4,
    "topicName": "Chủ đề Biển (Sea & Ocean)"
  },
  {
    "word": "Captain",
    "pos": "n",
    "ipa": "/ˈkæptɪn/",
    "meaningVi": "Thuyềntrưởng",
    "topicId": 4,
    "topicName": "Chủ đề Biển (Sea & Ocean)"
  },
  {
    "word": "Fisherman",
    "pos": "n",
    "ipa": "/ˈfɪʃəmən/",
    "meaningVi": "Ngưdân",
    "topicId": 4,
    "topicName": "Chủ đề Biển (Sea & Ocean)"
  },
  {
    "word": "Lifeguard",
    "pos": "n",
    "ipa": "/ˈlaɪfɡɑːd/",
    "meaningVi": "Ngườicứuhộ",
    "topicId": 4,
    "topicName": "Chủ đề Biển (Sea & Ocean)"
  },
  {
    "word": "Seashore",
    "pos": "n",
    "ipa": "/ˈsiːʃɔːr/",
    "meaningVi": "Bờbiển",
    "topicId": 4,
    "topicName": "Chủ đề Biển (Sea & Ocean)"
  },
  {
    "word": "Beach",
    "pos": "n",
    "ipa": "/biːtʃ/",
    "meaningVi": "Bãibiển",
    "topicId": 4,
    "topicName": "Chủ đề Biển (Sea & Ocean)"
  },
  {
    "word": "Coast",
    "pos": "n",
    "ipa": "/kəʊst/",
    "meaningVi": "Bờ(biển)",
    "topicId": 4,
    "topicName": "Chủ đề Biển (Sea & Ocean)"
  },
  {
    "word": "Seagull",
    "pos": "n",
    "ipa": "/ˈsiː.ɡʌl/",
    "meaningVi": "Mòngbiển",
    "topicId": 4,
    "topicName": "Chủ đề Biển (Sea & Ocean)"
  },
  {
    "word": "Whale",
    "pos": "n",
    "ipa": "/weɪl/",
    "meaningVi": "Cávoi",
    "topicId": 4,
    "topicName": "Chủ đề Biển (Sea & Ocean)"
  },
  {
    "word": "Shark",
    "pos": "n",
    "ipa": "/ʃɑːk/",
    "meaningVi": "Cámập",
    "topicId": 4,
    "topicName": "Chủ đề Biển (Sea & Ocean)"
  },
  {
    "word": "Dolphin",
    "pos": "n",
    "ipa": "/ˈdɒlfɪn/",
    "meaningVi": "Cáheo",
    "topicId": 4,
    "topicName": "Chủ đề Biển (Sea & Ocean)"
  },
  {
    "word": "Octopus",
    "pos": "n",
    "ipa": "/ˈɑːktəpəs/",
    "meaningVi": "Bạchtuộc",
    "topicId": 4,
    "topicName": "Chủ đề Biển (Sea & Ocean)"
  },
  {
    "word": "Fish",
    "pos": "n",
    "ipa": "/fɪʃ/",
    "meaningVi": "Cá",
    "topicId": 4,
    "topicName": "Chủ đề Biển (Sea & Ocean)"
  },
  {
    "word": "Jellyffsh",
    "pos": "n",
    "ipa": "/ˈdʒelifɪʃ/",
    "meaningVi": "Sứa",
    "topicId": 4,
    "topicName": "Chủ đề Biển (Sea & Ocean)"
  },
  {
    "word": "Seahorse",
    "pos": "n. phr",
    "ipa": "/ˈsiˌhɔrs/",
    "meaningVi": "Cángựa",
    "topicId": 4,
    "topicName": "Chủ đề Biển (Sea & Ocean)"
  },
  {
    "word": "Seaweed",
    "pos": "n",
    "ipa": "/ˈsiːwiːd/",
    "meaningVi": "Rongbiển",
    "topicId": 4,
    "topicName": "Chủ đề Biển (Sea & Ocean)"
  },
  {
    "word": "Coral",
    "pos": "n",
    "ipa": "/ˈkɒrəl/",
    "meaningVi": "Sanhô",
    "topicId": 4,
    "topicName": "Chủ đề Biển (Sea & Ocean)"
  },
  {
    "word": "Coralreef",
    "pos": "n. phr",
    "ipa": "/ˌkɒr.əl ˈriːf/",
    "meaningVi": "Rạnsanhô",
    "topicId": 4,
    "topicName": "Chủ đề Biển (Sea & Ocean)"
  },
  {
    "word": "Shellffsh",
    "pos": "n",
    "ipa": "/ˈʃel.fɪʃ/",
    "meaningVi": "Độngvậtcóvỏ",
    "topicId": 4,
    "topicName": "Chủ đề Biển (Sea & Ocean)"
  },
  {
    "word": "Clam",
    "pos": "n",
    "ipa": "/klæm/",
    "meaningVi": "Nghêu",
    "topicId": 4,
    "topicName": "Chủ đề Biển (Sea & Ocean)"
  },
  {
    "word": "Starffsh",
    "pos": "n",
    "ipa": "/ˈstɑːrfɪʃ/",
    "meaningVi": "Saobiển",
    "topicId": 4,
    "topicName": "Chủ đề Biển (Sea & Ocean)"
  },
  {
    "word": "Seal",
    "pos": "n",
    "ipa": "/siːl/",
    "meaningVi": "Hảicẩu",
    "topicId": 4,
    "topicName": "Chủ đề Biển (Sea & Ocean)"
  },
  {
    "word": "Turtle",
    "pos": "n",
    "ipa": "/ˈtɜːtl/",
    "meaningVi": "Rùabiển",
    "topicId": 4,
    "topicName": "Chủ đề Biển (Sea & Ocean)"
  },
  {
    "word": "Crab",
    "pos": "n",
    "ipa": "/kræb/",
    "meaningVi": "Cua",
    "topicId": 4,
    "topicName": "Chủ đề Biển (Sea & Ocean)"
  },
  {
    "word": "Decimal",
    "pos": "n",
    "ipa": "/ˈdes.ɪ.məl/",
    "meaningVi": "Sốthậpphân",
    "topicId": 5,
    "topicName": "Chủ đề Số đếm (Numbers)"
  },
  {
    "word": "Fraction",
    "pos": "n",
    "ipa": "/ˈfræk.ʃən/",
    "meaningVi": "Phânsố",
    "topicId": 5,
    "topicName": "Chủ đề Số đếm (Numbers)"
  },
  {
    "word": "Percentage",
    "pos": "n",
    "ipa": "/pəˈsen.tɪdʒ/",
    "meaningVi": "Phầntrăm",
    "topicId": 5,
    "topicName": "Chủ đề Số đếm (Numbers)"
  },
  {
    "word": "Divide",
    "pos": "v",
    "ipa": "/dɪˈvaɪd/",
    "meaningVi": "Chia",
    "topicId": 5,
    "topicName": "Chủ đề Số đếm (Numbers)"
  },
  {
    "word": "Plus",
    "pos": "pre",
    "ipa": "/plʌs/",
    "meaningVi": "Cộng",
    "topicId": 5,
    "topicName": "Chủ đề Số đếm (Numbers)"
  },
  {
    "word": "Minus",
    "pos": "pre",
    "ipa": "/ˈmaɪ.nəs/",
    "meaningVi": "Trừ",
    "topicId": 5,
    "topicName": "Chủ đề Số đếm (Numbers)"
  },
  {
    "word": "Multiply",
    "pos": "v",
    "ipa": "/ˈmʌl.tɪ.plaɪ/",
    "meaningVi": "Nhân",
    "topicId": 5,
    "topicName": "Chủ đề Số đếm (Numbers)"
  },
  {
    "word": "Total",
    "pos": "adj",
    "ipa": "/ˈtəʊ.təl/",
    "meaningVi": "Tổng,tổngsố",
    "topicId": 5,
    "topicName": "Chủ đề Số đếm (Numbers)"
  },
  {
    "word": "Dozen",
    "pos": "n",
    "ipa": "/ˈdʌz.ən/",
    "meaningVi": "Tá(12đơnvị)",
    "topicId": 5,
    "topicName": "Chủ đề Số đếm (Numbers)"
  },
  {
    "word": "Around",
    "pos": "adv",
    "ipa": "/əˈraʊnd/",
    "meaningVi": "Khoảng",
    "topicId": 5,
    "topicName": "Chủ đề Số đếm (Numbers)"
  },
  {
    "word": "Zero",
    "pos": "n",
    "ipa": "/ˈzɪə.rəʊ/",
    "meaningVi": "Sốkhông",
    "topicId": 5,
    "topicName": "Chủ đề Số đếm (Numbers)"
  },
  {
    "word": "Hundred",
    "pos": "n",
    "ipa": "/ˈhʌn.drəd/",
    "meaningVi": "Mộttrăm",
    "topicId": 5,
    "topicName": "Chủ đề Số đếm (Numbers)"
  },
  {
    "word": "Thousand",
    "pos": "n",
    "ipa": "/ˈθaʊ.zənd/",
    "meaningVi": "Mộtnghìn",
    "topicId": 5,
    "topicName": "Chủ đề Số đếm (Numbers)"
  },
  {
    "word": "Million",
    "pos": "n",
    "ipa": "/ˈmɪl.jən/",
    "meaningVi": "Mộttriệu",
    "topicId": 5,
    "topicName": "Chủ đề Số đếm (Numbers)"
  },
  {
    "word": "Billion",
    "pos": "n",
    "ipa": "/ˈbɪl.jən/",
    "meaningVi": "Mộttỷ",
    "topicId": 5,
    "topicName": "Chủ đề Số đếm (Numbers)"
  },
  {
    "word": "Half",
    "pos": "n",
    "ipa": "/hɑːf/",
    "meaningVi": "Mộtnửa",
    "topicId": 5,
    "topicName": "Chủ đề Số đếm (Numbers)"
  },
  {
    "word": "Customer",
    "pos": "n",
    "ipa": "/ˈkʌs.tə.mər/",
    "meaningVi": "Kháchhàng",
    "topicId": 6,
    "topicName": "Mua sắm (Shopping)"
  },
  {
    "word": "Cashier",
    "pos": "n",
    "ipa": "/kæʃˈɪər/",
    "meaningVi": "Nhânviênthungân",
    "topicId": 6,
    "topicName": "Mua sắm (Shopping)"
  },
  {
    "word": "Attendant",
    "pos": "n",
    "ipa": "/əˈten.dənt/",
    "meaningVi": "Ngườiphụcvụ",
    "topicId": 6,
    "topicName": "Mua sắm (Shopping)"
  },
  {
    "word": "Manager",
    "pos": "n",
    "ipa": "/ˈmæn.ɪ.dʒər/",
    "meaningVi": "Giámđốc,quảnlý",
    "topicId": 6,
    "topicName": "Mua sắm (Shopping)"
  },
  {
    "word": "Wallet",
    "pos": "n",
    "ipa": "/ˈwɒl.ɪt/",
    "meaningVi": "Vítiền",
    "topicId": 6,
    "topicName": "Mua sắm (Shopping)"
  },
  {
    "word": "Purse",
    "pos": "n",
    "ipa": "/pɜːs/",
    "meaningVi": "Vítiền(nữ)",
    "topicId": 6,
    "topicName": "Mua sắm (Shopping)"
  },
  {
    "word": "Scale",
    "pos": "n",
    "ipa": "/skeɪl/",
    "meaningVi": "Cáicân",
    "topicId": 6,
    "topicName": "Mua sắm (Shopping)"
  },
  {
    "word": "Counter",
    "pos": "n",
    "ipa": "/ˈkaʊn.tər/",
    "meaningVi": "Quầyhàng",
    "topicId": 6,
    "topicName": "Mua sắm (Shopping)"
  },
  {
    "word": "Barcodereader",
    "pos": "n. phr",
    "ipa": "/ˈbɑːˌkəʊdˈriː.dər/",
    "meaningVi": "Máyđọcmãvạch",
    "topicId": 6,
    "topicName": "Mua sắm (Shopping)"
  },
  {
    "word": "Receipt",
    "pos": "n",
    "ipa": "/rɪˈsiːt/",
    "meaningVi": "Biênlai",
    "topicId": 6,
    "topicName": "Mua sắm (Shopping)"
  },
  {
    "word": "Pay",
    "pos": "v",
    "ipa": "/peɪ/",
    "meaningVi": "Trảtiền",
    "topicId": 6,
    "topicName": "Mua sắm (Shopping)"
  },
  {
    "word": "Expensive",
    "pos": "adj",
    "ipa": "/ɪkˈspen.sɪv/",
    "meaningVi": "Đắt",
    "topicId": 6,
    "topicName": "Mua sắm (Shopping)"
  },
  {
    "word": "Cheap",
    "pos": "n",
    "ipa": "/tʃiːp/",
    "meaningVi": "Rẻ",
    "topicId": 6,
    "topicName": "Mua sắm (Shopping)"
  },
  {
    "word": "Discount",
    "pos": "n",
    "ipa": "/ˈdɪs.kaʊnt/",
    "meaningVi": "Giảmgiá",
    "topicId": 6,
    "topicName": "Mua sắm (Shopping)"
  },
  {
    "word": "Sell",
    "pos": "v",
    "ipa": "/sel/",
    "meaningVi": "Bán",
    "topicId": 6,
    "topicName": "Mua sắm (Shopping)"
  },
  {
    "word": "Price",
    "pos": "n",
    "ipa": "/praɪs/",
    "meaningVi": "Giácả",
    "topicId": 6,
    "topicName": "Mua sắm (Shopping)"
  },
  {
    "word": "Trolley",
    "pos": "n",
    "ipa": "/ˈtrɒl.i/",
    "meaningVi": "Xeđẩy",
    "topicId": 6,
    "topicName": "Mua sắm (Shopping)"
  },
  {
    "word": "Creditcard",
    "pos": "n. phr",
    "ipa": "/ˈkred.ɪt ˌkɑːd/",
    "meaningVi": "Thẻtíndụng",
    "topicId": 6,
    "topicName": "Mua sắm (Shopping)"
  },
  {
    "word": "Cash",
    "pos": "n",
    "ipa": "/kæʃ/",
    "meaningVi": "Tiềnmặt",
    "topicId": 6,
    "topicName": "Mua sắm (Shopping)"
  },
  {
    "word": "Shop",
    "pos": "n",
    "ipa": "/ʃɒp/",
    "meaningVi": "Cửahàng",
    "topicId": 6,
    "topicName": "Mua sắm (Shopping)"
  },
  {
    "word": "Money",
    "pos": "n",
    "ipa": "/ˈmʌn.i/",
    "meaningVi": "Tiền",
    "topicId": 6,
    "topicName": "Mua sắm (Shopping)"
  },
  {
    "word": "Basket",
    "pos": "n",
    "ipa": "/ˈbɑː.skɪt/",
    "meaningVi": "Rổ,giỏ",
    "topicId": 6,
    "topicName": "Mua sắm (Shopping)"
  },
  {
    "word": "Bag",
    "pos": "n",
    "ipa": "/bæɡ/",
    "meaningVi": "Túi",
    "topicId": 6,
    "topicName": "Mua sắm (Shopping)"
  },
  {
    "word": "Buy",
    "pos": "v",
    "ipa": "/baɪ/",
    "meaningVi": "Mua",
    "topicId": 6,
    "topicName": "Mua sắm (Shopping)"
  },
  {
    "word": "Greengrocer",
    "pos": "n",
    "ipa": "/ˈɡriːŋ.ɡrəʊ.sər/",
    "meaningVi": "Cửahàngbánrau",
    "topicId": 6,
    "topicName": "Mua sắm (Shopping)"
  },
  {
    "word": "Housewares",
    "pos": "n",
    "ipa": "/ˈhaʊs.weəz/",
    "meaningVi": "Đồgiadụng",
    "topicId": 6,
    "topicName": "Mua sắm (Shopping)"
  },
  {
    "word": "Toystore",
    "pos": "n. phr",
    "ipa": "/tɔɪ stɔːr/",
    "meaningVi": "Cửahàngđồchơi",
    "topicId": 6,
    "topicName": "Mua sắm (Shopping)"
  },
  {
    "word": "Shoppingmall",
    "pos": "n. phr",
    "ipa": "/ˈʃɒp.ɪŋ ˌmɔːl/",
    "meaningVi": "Trungtâmmuasắm",
    "topicId": 6,
    "topicName": "Mua sắm (Shopping)"
  },
  {
    "word": "Grocerystore",
    "pos": "n. phr",
    "ipa": "/ˈɡrəʊ.sər.i ˌstɔːr/",
    "meaningVi": "Cửahàngtạphóa",
    "topicId": 6,
    "topicName": "Mua sắm (Shopping)"
  },
  {
    "word": "Bargain",
    "pos": "n",
    "ipa": "/ˈbɑː.ɡɪn/",
    "meaningVi": "Mặccả",
    "topicId": 6,
    "topicName": "Mua sắm (Shopping)"
  },
  {
    "word": "Brochure",
    "pos": "n",
    "ipa": "/ˈbrəʊ.ʃər/",
    "meaningVi": "Tậpquảngcáo",
    "topicId": 6,
    "topicName": "Mua sắm (Shopping)"
  },
  {
    "word": "Liquorstore",
    "pos": "n. phr",
    "ipa": "/ˈlɪk.ə ˌstɔːr/",
    "meaningVi": "Quánrượu",
    "topicId": 6,
    "topicName": "Mua sắm (Shopping)"
  },
  {
    "word": "Drugstore",
    "pos": "n",
    "ipa": "/ˈdrʌɡ.stɔːr/",
    "meaningVi": "Tiệmthuốc",
    "topicId": 6,
    "topicName": "Mua sắm (Shopping)"
  },
  {
    "word": "Candystore",
    "pos": "n. phr",
    "ipa": "/ˈkæn.diˌstɔːr/",
    "meaningVi": "Cửahàngkẹo",
    "topicId": 6,
    "topicName": "Mua sắm (Shopping)"
  },
  {
    "word": "Giftshop",
    "pos": "n. phr",
    "ipa": "/ˈɡɪft ˌʃɒp/",
    "meaningVi": "Cửahàngđồlưu",
    "topicId": 6,
    "topicName": "Mua sắm (Shopping)"
  },
  {
    "word": "Petshop",
    "pos": "n. phr",
    "ipa": "/petʃɒp/",
    "meaningVi": "Tiệmthúcưng",
    "topicId": 6,
    "topicName": "Mua sắm (Shopping)"
  },
  {
    "word": "Shoeshop",
    "pos": "n. phr",
    "ipa": "/ʃuːʃɒp/",
    "meaningVi": "Tiệmgiày",
    "topicId": 6,
    "topicName": "Mua sắm (Shopping)"
  },
  {
    "word": "Meatshop",
    "pos": "n. phr",
    "ipa": "/miːtʃɒp/",
    "meaningVi": "Cửahàngthịt",
    "topicId": 6,
    "topicName": "Mua sắm (Shopping)"
  },
  {
    "word": "Florist",
    "pos": "n",
    "ipa": "/ˈflɒr.ɪst/",
    "meaningVi": "Ngườibánhoa",
    "topicId": 6,
    "topicName": "Mua sắm (Shopping)"
  },
  {
    "word": "Butcher",
    "pos": "n",
    "ipa": "/ˈbʊtʃ.ər/",
    "meaningVi": "Ngườibánthịt",
    "topicId": 6,
    "topicName": "Mua sắm (Shopping)"
  },
  {
    "word": "Lamp",
    "pos": "n",
    "ipa": "/læmp/",
    "meaningVi": "Đèn",
    "topicId": 7,
    "topicName": "Phòng ngủ (Bedroom)"
  },
  {
    "word": "Pillowcase",
    "pos": "n",
    "ipa": "/ˈpɪl.əʊ.keɪs/",
    "meaningVi": "Baogối",
    "topicId": 7,
    "topicName": "Phòng ngủ (Bedroom)"
  },
  {
    "word": "Curtain",
    "pos": "n",
    "ipa": "/ˈkɜː.tən/",
    "meaningVi": "Rèm",
    "topicId": 7,
    "topicName": "Phòng ngủ (Bedroom)"
  },
  {
    "word": "Bed",
    "pos": "n",
    "ipa": "/bed/",
    "meaningVi": "Giường",
    "topicId": 7,
    "topicName": "Phòng ngủ (Bedroom)"
  },
  {
    "word": "Mirror",
    "pos": "n",
    "ipa": "/ˈmɪr.ər/",
    "meaningVi": "Gương",
    "topicId": 7,
    "topicName": "Phòng ngủ (Bedroom)"
  },
  {
    "word": "Cushion",
    "pos": "n",
    "ipa": "/ˈkʊʃ.ən/",
    "meaningVi": "Đệm",
    "topicId": 7,
    "topicName": "Phòng ngủ (Bedroom)"
  },
  {
    "word": "Wardrobe",
    "pos": "n",
    "ipa": "/ˈwɔː.drəʊb/",
    "meaningVi": "Tủquầnáo",
    "topicId": 7,
    "topicName": "Phòng ngủ (Bedroom)"
  },
  {
    "word": "Fittedcarpet",
    "pos": "n. phr",
    "ipa": "/ˌfɪt.ɪd ˈkɑː.pɪt/",
    "meaningVi": "Thảmlótsàn",
    "topicId": 7,
    "topicName": "Phòng ngủ (Bedroom)"
  },
  {
    "word": "Dressing table",
    "pos": "n. phr",
    "ipa": "/ˈdres.ɪŋˌteɪ.bəl/",
    "meaningVi": "Bàntrangđiểm",
    "topicId": 7,
    "topicName": "Phòng ngủ (Bedroom)"
  },
  {
    "word": "Wallpaper",
    "pos": "n",
    "ipa": "/ˈwɔːlˌpeɪ.pər/",
    "meaningVi": "Giấydántường",
    "topicId": 7,
    "topicName": "Phòng ngủ (Bedroom)"
  },
  {
    "word": "Pillow",
    "pos": "n",
    "ipa": "/ˈpɪl.əʊ/",
    "meaningVi": "Gối",
    "topicId": 7,
    "topicName": "Phòng ngủ (Bedroom)"
  },
  {
    "word": "Carpet",
    "pos": "n",
    "ipa": "/ˈKɑː.pɪt/",
    "meaningVi": "Tấmthảm",
    "topicId": 7,
    "topicName": "Phòng ngủ (Bedroom)"
  },
  {
    "word": "Blind",
    "pos": "n",
    "ipa": "/blaɪnd/",
    "meaningVi": "Mành,rèmche",
    "topicId": 7,
    "topicName": "Phòng ngủ (Bedroom)"
  },
  {
    "word": "Mattress",
    "pos": "n",
    "ipa": "/ˈmæt.rəs/",
    "meaningVi": "Nệm",
    "topicId": 7,
    "topicName": "Phòng ngủ (Bedroom)"
  },
  {
    "word": "Bedspread",
    "pos": "n",
    "ipa": "/ˈbed.spred/",
    "meaningVi": "Khăntrảigiường",
    "topicId": 7,
    "topicName": "Phòng ngủ (Bedroom)"
  },
  {
    "word": "Blanket",
    "pos": "n",
    "ipa": "/ˈblæŋ.kɪt/",
    "meaningVi": "Tấmchăn,mền",
    "topicId": 7,
    "topicName": "Phòng ngủ (Bedroom)"
  },
  {
    "word": "Jewelry",
    "pos": "n",
    "ipa": "/ˈdʒuːl.ri/",
    "meaningVi": "Trangsức",
    "topicId": 7,
    "topicName": "Phòng ngủ (Bedroom)"
  },
  {
    "word": "Alarm clock",
    "pos": "n. phr",
    "ipa": "/əˈlɑːmˌklɒk/",
    "meaningVi": "Đồnghồbáothức",
    "topicId": 7,
    "topicName": "Phòng ngủ (Bedroom)"
  },
  {
    "word": "Airconditioner",
    "pos": "n. phr",
    "ipa": "/ˈeəkənˌdɪʃ.ən.ər/",
    "meaningVi": "Máyđiềuhòa",
    "topicId": 7,
    "topicName": "Phòng ngủ (Bedroom)"
  },
  {
    "word": "Boxspring",
    "pos": "n. phr",
    "ipa": "/ˈbɒksˌsprɪŋ/",
    "meaningVi": "Khunglòxonâng",
    "topicId": 7,
    "topicName": "Phòng ngủ (Bedroom)"
  },
  {
    "word": "Comforter",
    "pos": "n",
    "ipa": "/ˈkʌm.fə.tər/",
    "meaningVi": "Chănbông",
    "topicId": 7,
    "topicName": "Phòng ngủ (Bedroom)"
  },
  {
    "word": "Hanger",
    "pos": "n",
    "ipa": "/ˈhæŋ.ər/",
    "meaningVi": "Móctreo(quầnáo)",
    "topicId": 7,
    "topicName": "Phòng ngủ (Bedroom)"
  },
  {
    "word": "Closet",
    "pos": "n",
    "ipa": "/ˈklɒz.ɪt/",
    "meaningVi": "Tủđóngtrong",
    "topicId": 7,
    "topicName": "Phòng ngủ (Bedroom)"
  },
  {
    "word": "Comb",
    "pos": "n",
    "ipa": "/kəʊm/",
    "meaningVi": "Lược",
    "topicId": 7,
    "topicName": "Phòng ngủ (Bedroom)"
  },
  {
    "word": "Lightswitch",
    "pos": "n",
    "ipa": "/laɪt swɪtʃ/",
    "meaningVi": "Côngtắcđiện",
    "topicId": 7,
    "topicName": "Phòng ngủ (Bedroom)"
  },
  {
    "word": "Chestofdrawers",
    "pos": "n. phr",
    "ipa": "/ˌtʃest əv ˈdrɔːz/",
    "meaningVi": "Tủkéo",
    "topicId": 7,
    "topicName": "Phòng ngủ (Bedroom)"
  },
  {
    "word": "Classmate",
    "pos": "n",
    "ipa": "/ˈklɑːs.meɪt/",
    "meaningVi": "Bạncùnglớp",
    "topicId": 8,
    "topicName": "Tình bạn (Friendship)"
  },
  {
    "word": "Schoolmate",
    "pos": "n",
    "ipa": "/ˈskuːl.meɪt/",
    "meaningVi": "Bạncùngtrường",
    "topicId": 8,
    "topicName": "Tình bạn (Friendship)"
  },
  {
    "word": "Roommate",
    "pos": "n",
    "ipa": "/ˈruːm.meɪt/",
    "meaningVi": "Bạncùngphòng",
    "topicId": 8,
    "topicName": "Tình bạn (Friendship)"
  },
  {
    "word": "Soulmate",
    "pos": "n",
    "ipa": "/ˈsəʊl.meɪt/",
    "meaningVi": "Tri kỷ",
    "topicId": 8,
    "topicName": "Tình bạn (Friendship)"
  },
  {
    "word": "Colleague",
    "pos": "n",
    "ipa": "/ˈkɒl.iːɡ/",
    "meaningVi": "Đồngnghiệp",
    "topicId": 8,
    "topicName": "Tình bạn (Friendship)"
  },
  {
    "word": "Comradeship",
    "pos": "n",
    "ipa": "/ˈkɒm.reɪd.ʃɪp/",
    "meaningVi": "Tìnhbạn,tìnhđồng",
    "topicId": 8,
    "topicName": "Tình bạn (Friendship)"
  },
  {
    "word": "Partner",
    "pos": "n",
    "ipa": "/ˈpɑːt.nər/",
    "meaningVi": "Cộngsự",
    "topicId": 8,
    "topicName": "Tình bạn (Friendship)"
  },
  {
    "word": "Associate",
    "pos": "n",
    "ipa": "/əˈsəʊ.si.eɪt/",
    "meaningVi": "Bạnđồngliêu,đồng",
    "topicId": 8,
    "topicName": "Tình bạn (Friendship)"
  },
  {
    "word": "Buddy",
    "pos": "n",
    "ipa": "/ˈbʌd.i/",
    "meaningVi": "Bạnthân",
    "topicId": 8,
    "topicName": "Tình bạn (Friendship)"
  },
  {
    "word": "Ally",
    "pos": "n",
    "ipa": "/ˈæl.aɪ/",
    "meaningVi": "Đồngminh",
    "topicId": 8,
    "topicName": "Tình bạn (Friendship)"
  },
  {
    "word": "Companion",
    "pos": "n",
    "ipa": "/kəmˈpæn.jən/",
    "meaningVi": "Bạnđồnghành",
    "topicId": 8,
    "topicName": "Tình bạn (Friendship)"
  },
  {
    "word": "Pal",
    "pos": "n",
    "ipa": "/pæl/",
    "meaningVi": "Bạn(từlóng)",
    "topicId": 8,
    "topicName": "Tình bạn (Friendship)"
  },
  {
    "word": "Friendship",
    "pos": "n",
    "ipa": "/ˈfrend.ʃɪp/",
    "meaningVi": "Tìnhbạn",
    "topicId": 8,
    "topicName": "Tình bạn (Friendship)"
  },
  {
    "word": "Close",
    "pos": "adj",
    "ipa": "/kləʊz/",
    "meaningVi": "Thânthiết",
    "topicId": 8,
    "topicName": "Tình bạn (Friendship)"
  },
  {
    "word": "Dishwasher",
    "pos": "n",
    "ipa": "/ˈdɪʃˌwɒʃ.ər/",
    "meaningVi": "Máyrửachén",
    "topicId": 9,
    "topicName": "Nhà bếp (Kitchen & Cooking)"
  },
  {
    "word": "Dishdrainer",
    "pos": "n. phr",
    "ipa": "/dɪʃ ˈdreɪ.nər/",
    "meaningVi": "Kệđểchénbát",
    "topicId": 9,
    "topicName": "Nhà bếp (Kitchen & Cooking)"
  },
  {
    "word": "Steamer",
    "pos": "n",
    "ipa": "/ˈstiː.mər/",
    "meaningVi": "Nồihấp",
    "topicId": 9,
    "topicName": "Nhà bếp (Kitchen & Cooking)"
  },
  {
    "word": "Colander",
    "pos": "n",
    "ipa": "/ˈkɒl.ən.dər/",
    "meaningVi": "Cáichao",
    "topicId": 9,
    "topicName": "Nhà bếp (Kitchen & Cooking)"
  },
  {
    "word": "Lid",
    "pos": "n",
    "ipa": "/lɪd/",
    "meaningVi": "Nắp,vung",
    "topicId": 9,
    "topicName": "Nhà bếp (Kitchen & Cooking)"
  },
  {
    "word": "Blender",
    "pos": "n",
    "ipa": "/ˈblen.dər/",
    "meaningVi": "Máyxaysinhtố",
    "topicId": 9,
    "topicName": "Nhà bếp (Kitchen & Cooking)"
  },
  {
    "word": "Pot",
    "pos": "n",
    "ipa": "/pɒt/",
    "meaningVi": "Nồi",
    "topicId": 9,
    "topicName": "Nhà bếp (Kitchen & Cooking)"
  },
  {
    "word": "Toaster",
    "pos": "n",
    "ipa": "/ˈtəʊ.stər/",
    "meaningVi": "Lònướngbánh",
    "topicId": 9,
    "topicName": "Nhà bếp (Kitchen & Cooking)"
  },
  {
    "word": "Dishtowel",
    "pos": "n",
    "ipa": "/ˈdɪʃ.taʊəl/",
    "meaningVi": "Khănlauchén",
    "topicId": 9,
    "topicName": "Nhà bếp (Kitchen & Cooking)"
  },
  {
    "word": "Refrigerator",
    "pos": "n",
    "ipa": "/rɪˈfrɪdʒ.ər.eɪ.tər/",
    "meaningVi": "Tủlạnh",
    "topicId": 9,
    "topicName": "Nhà bếp (Kitchen & Cooking)"
  },
  {
    "word": "Freezer",
    "pos": "n",
    "ipa": "/ˈfriː.zər/",
    "meaningVi": "Tủđông",
    "topicId": 9,
    "topicName": "Nhà bếp (Kitchen & Cooking)"
  },
  {
    "word": "Cabinet",
    "pos": "n",
    "ipa": "/ˈkæb.ɪ.nət/",
    "meaningVi": "Tủ(cónhiềungăn)",
    "topicId": 9,
    "topicName": "Nhà bếp (Kitchen & Cooking)"
  },
  {
    "word": "Microwave",
    "pos": "n",
    "ipa": "/ˈmaɪ.krə.weɪv/",
    "meaningVi": "Lòvisóng",
    "topicId": 9,
    "topicName": "Nhà bếp (Kitchen & Cooking)"
  },
  {
    "word": "Bowl",
    "pos": "n",
    "ipa": "/bəʊl/",
    "meaningVi": "Bát,chén",
    "topicId": 9,
    "topicName": "Nhà bếp (Kitchen & Cooking)"
  },
  {
    "word": "Cutting board",
    "pos": "n. phr",
    "ipa": "/ˈkʌt.ɪŋ ˌbɔːd/",
    "meaningVi": "Thớt",
    "topicId": 9,
    "topicName": "Nhà bếp (Kitchen & Cooking)"
  },
  {
    "word": "Stove",
    "pos": "n",
    "ipa": "/stəʊv/",
    "meaningVi": "Bếplò",
    "topicId": 9,
    "topicName": "Nhà bếp (Kitchen & Cooking)"
  },
  {
    "word": "Coffee maker",
    "pos": "n. phr",
    "ipa": "/ˈkɒf.i ˌmeɪ.kər/",
    "meaningVi": "Máyphacàphê",
    "topicId": 9,
    "topicName": "Nhà bếp (Kitchen & Cooking)"
  },
  {
    "word": "Oven",
    "pos": "adv",
    "ipa": "/ˈʌv.ən/",
    "meaningVi": "Lò,lònướng",
    "topicId": 9,
    "topicName": "Nhà bếp (Kitchen & Cooking)"
  },
  {
    "word": "Ovencleaner",
    "pos": "n. phr",
    "ipa": "/ˈʌv.ənˈkliː.nər/",
    "meaningVi": "Nướctẩyrửalò",
    "topicId": 9,
    "topicName": "Nhà bếp (Kitchen & Cooking)"
  },
  {
    "word": "Jar",
    "pos": "n",
    "ipa": "/dʒɑːr/",
    "meaningVi": "Lọ",
    "topicId": 9,
    "topicName": "Nhà bếp (Kitchen & Cooking)"
  },
  {
    "word": "Sink",
    "pos": "n",
    "ipa": "/sɪŋk/",
    "meaningVi": "Bồnrửabát",
    "topicId": 9,
    "topicName": "Nhà bếp (Kitchen & Cooking)"
  },
  {
    "word": "Dishrack",
    "pos": "n. phr",
    "ipa": "/ˈdɪʃ ˌræk/",
    "meaningVi": "Khayđểráochén",
    "topicId": 9,
    "topicName": "Nhà bếp (Kitchen & Cooking)"
  },
  {
    "word": "Sponge",
    "pos": "n",
    "ipa": "/spʌndʒ/",
    "meaningVi": "Bọtbiển",
    "topicId": 9,
    "topicName": "Nhà bếp (Kitchen & Cooking)"
  },
  {
    "word": "Chopstick",
    "pos": "n",
    "ipa": "/ˈtʃɒp.stɪk/",
    "meaningVi": "Đũa",
    "topicId": 9,
    "topicName": "Nhà bếp (Kitchen & Cooking)"
  },
  {
    "word": "Pan",
    "pos": "n",
    "ipa": "/pæn/",
    "meaningVi": "Chảo",
    "topicId": 9,
    "topicName": "Nhà bếp (Kitchen & Cooking)"
  },
  {
    "word": "Cooker",
    "pos": "n",
    "ipa": "/ˈkʊk.ər/",
    "meaningVi": "Bếp,nồinấu",
    "topicId": 9,
    "topicName": "Nhà bếp (Kitchen & Cooking)"
  },
  {
    "word": "Mug",
    "pos": "n",
    "ipa": "/mʌɡ/",
    "meaningVi": "Cốclớn",
    "topicId": 9,
    "topicName": "Nhà bếp (Kitchen & Cooking)"
  },
  {
    "word": "Kettle",
    "pos": "n",
    "ipa": "/ˈket.əl/",
    "meaningVi": "Ấmđunnước",
    "topicId": 9,
    "topicName": "Nhà bếp (Kitchen & Cooking)"
  },
  {
    "word": "Glass",
    "pos": "n",
    "ipa": "/ɡlɑːs/",
    "meaningVi": "Ly",
    "topicId": 9,
    "topicName": "Nhà bếp (Kitchen & Cooking)"
  },
  {
    "word": "Teapot",
    "pos": "n",
    "ipa": "/ˈtiː.pɒt/",
    "meaningVi": "Ấmphatrà",
    "topicId": 9,
    "topicName": "Nhà bếp (Kitchen & Cooking)"
  },
  {
    "word": "Grill",
    "pos": "n",
    "ipa": "/ɡrɪl/",
    "meaningVi": "Vỉnướng",
    "topicId": 9,
    "topicName": "Nhà bếp (Kitchen & Cooking)"
  },
  {
    "word": "Tray",
    "pos": "n",
    "ipa": "/treɪ/",
    "meaningVi": "Cáikhay,cáimâm",
    "topicId": 9,
    "topicName": "Nhà bếp (Kitchen & Cooking)"
  },
  {
    "word": "Whisk",
    "pos": "n",
    "ipa": "/wɪsk/",
    "meaningVi": "Máyđánhtrứng",
    "topicId": 9,
    "topicName": "Nhà bếp (Kitchen & Cooking)"
  },
  {
    "word": "Knife",
    "pos": "n",
    "ipa": "/naɪf/",
    "meaningVi": "Dao",
    "topicId": 9,
    "topicName": "Nhà bếp (Kitchen & Cooking)"
  },
  {
    "word": "Spoon",
    "pos": "n",
    "ipa": "/spuːn/",
    "meaningVi": "Muỗng,thìa",
    "topicId": 9,
    "topicName": "Nhà bếp (Kitchen & Cooking)"
  },
  {
    "word": "Earring",
    "pos": "n",
    "ipa": "/ˈɪə.rɪŋ/",
    "meaningVi": "Bôngtai",
    "topicId": 10,
    "topicName": "Đồ trang sức (Jewellery)"
  },
  {
    "word": "Necklace",
    "pos": "n",
    "ipa": "/ˈnek.ləs/",
    "meaningVi": "Dâychuyền",
    "topicId": 10,
    "topicName": "Đồ trang sức (Jewellery)"
  },
  {
    "word": "Bracelet",
    "pos": "n",
    "ipa": "/ˈbreɪ.slət/",
    "meaningVi": "Vòngtay",
    "topicId": 10,
    "topicName": "Đồ trang sức (Jewellery)"
  },
  {
    "word": "Brooch",
    "pos": "n",
    "ipa": "/brəʊtʃ/",
    "meaningVi": "Trâmcài",
    "topicId": 10,
    "topicName": "Đồ trang sức (Jewellery)"
  },
  {
    "word": "Hairclip",
    "pos": "n. phr",
    "ipa": "/ˈHeəˌklɪp/",
    "meaningVi": "Kẹptóc",
    "topicId": 10,
    "topicName": "Đồ trang sức (Jewellery)"
  },
  {
    "word": "Wedding ring",
    "pos": "n. phr",
    "ipa": "/ˈwed.ɪŋˌrɪŋ/",
    "meaningVi": "Nhẫncưới",
    "topicId": 10,
    "topicName": "Đồ trang sức (Jewellery)"
  },
  {
    "word": "Jeweler",
    "pos": "n",
    "ipa": "/ˈdʒuː.ə.lɚ/",
    "meaningVi": "Thợkimhoàn",
    "topicId": 10,
    "topicName": "Đồ trang sức (Jewellery)"
  },
  {
    "word": "Jewelrystore",
    "pos": "n. phr",
    "ipa": "/ˈdʒuː.əl.ri stɔː r/",
    "meaningVi": "Cửahàngtrangsức",
    "topicId": 10,
    "topicName": "Đồ trang sức (Jewellery)"
  },
  {
    "word": "Anklet",
    "pos": "n",
    "ipa": "/ˈæŋ.klət/",
    "meaningVi": "Vòngchân",
    "topicId": 10,
    "topicName": "Đồ trang sức (Jewellery)"
  },
  {
    "word": "Noble",
    "pos": "adj",
    "ipa": "/ˈnəʊ.bəl/",
    "meaningVi": "Quý",
    "topicId": 10,
    "topicName": "Đồ trang sức (Jewellery)"
  },
  {
    "word": "Luxurious",
    "pos": "adj",
    "ipa": "/lʌɡˈʒʊə.ri.əs/",
    "meaningVi": "Sangtrọng,xahoa",
    "topicId": 10,
    "topicName": "Đồ trang sức (Jewellery)"
  },
  {
    "word": "Modern",
    "pos": "adj",
    "ipa": "/ˈmɒd.ən/",
    "meaningVi": "Hiệnđại",
    "topicId": 10,
    "topicName": "Đồ trang sức (Jewellery)"
  },
  {
    "word": "Suitable",
    "pos": "adj",
    "ipa": "/ˈsuː.tə.bəl/",
    "meaningVi": "Phùhợp,thíchhợp",
    "topicId": 10,
    "topicName": "Đồ trang sức (Jewellery)"
  },
  {
    "word": "Twinkle",
    "pos": "v",
    "ipa": "/ˈtwɪŋ.kəl/",
    "meaningVi": "Lấplánh",
    "topicId": 10,
    "topicName": "Đồ trang sức (Jewellery)"
  },
  {
    "word": "Bead",
    "pos": "n",
    "ipa": "/biːd/",
    "meaningVi": "Hạt(củachuỗihạt)",
    "topicId": 10,
    "topicName": "Đồ trang sức (Jewellery)"
  },
  {
    "word": "Hairtie",
    "pos": "n. phr",
    "ipa": "/ˈheəˌtaɪ/",
    "meaningVi": "Dâybuộctóc",
    "topicId": 10,
    "topicName": "Đồ trang sức (Jewellery)"
  },
  {
    "word": "Pocketwatch",
    "pos": "n. phr",
    "ipa": "/ˈpɒk.ɪt wɒtʃ/",
    "meaningVi": "Đồnghồbỏtúi",
    "topicId": 10,
    "topicName": "Đồ trang sức (Jewellery)"
  },
  {
    "word": "Tiepin",
    "pos": "n",
    "ipa": "/ˈtaɪ.pɪn/",
    "meaningVi": "Ghimcàvạt",
    "topicId": 10,
    "topicName": "Đồ trang sức (Jewellery)"
  },
  {
    "word": "Preciousstone",
    "pos": "n. phr",
    "ipa": "/ˌpreʃ.əs ˈstəʊn/",
    "meaningVi": "Đáquý",
    "topicId": 10,
    "topicName": "Đồ trang sức (Jewellery)"
  },
  {
    "word": "Land",
    "pos": "n",
    "ipa": "/lænd/",
    "meaningVi": "Đất,đấtđai",
    "topicId": 11,
    "topicName": "Môi trường (Environment)"
  },
  {
    "word": "Pollute",
    "pos": "v",
    "ipa": "/pəˈluːt/",
    "meaningVi": "Làmônhiễm",
    "topicId": 11,
    "topicName": "Môi trường (Environment)"
  },
  {
    "word": "Decompose",
    "pos": "v",
    "ipa": "/ˌdiː.kəmˈpəʊz/",
    "meaningVi": "Phânhủy",
    "topicId": 11,
    "topicName": "Môi trường (Environment)"
  },
  {
    "word": "Balance",
    "pos": "n",
    "ipa": "/ˈbæl.əns/",
    "meaningVi": "Sựcânbằng",
    "topicId": 11,
    "topicName": "Môi trường (Environment)"
  },
  {
    "word": "Climate change",
    "pos": "n. phr",
    "ipa": "/ˈklaɪ.mətˌtʃeɪndʒ/",
    "meaningVi": "Biếnđổikhíhậu",
    "topicId": 11,
    "topicName": "Môi trường (Environment)"
  },
  {
    "word": "Global warming",
    "pos": "n. phr",
    "ipa": "/ˌɡləʊ.bəl ˈwɔː.mɪŋ/",
    "meaningVi": "Nónglêntoàncầu",
    "topicId": 11,
    "topicName": "Môi trường (Environment)"
  },
  {
    "word": "Oil slick",
    "pos": "n. phr",
    "ipa": "/ˈɔɪl ˌslɪk/",
    "meaningVi": "Dầuloang",
    "topicId": 11,
    "topicName": "Môi trường (Environment)"
  },
  {
    "word": "Ozone layer",
    "pos": "n. phr",
    "ipa": "/ˈəʊ.zəʊnˌleɪ.ər/",
    "meaningVi": "Tầngozon",
    "topicId": 11,
    "topicName": "Môi trường (Environment)"
  },
  {
    "word": "Ecology",
    "pos": "n",
    "ipa": "/iˈkɒl.ə.dʒi/",
    "meaningVi": "Sinhtháihọc",
    "topicId": 11,
    "topicName": "Môi trường (Environment)"
  },
  {
    "word": "Water",
    "pos": "n",
    "ipa": "/ˈwɔː.tər/",
    "meaningVi": "Nước",
    "topicId": 11,
    "topicName": "Môi trường (Environment)"
  },
  {
    "word": "Air",
    "pos": "n",
    "ipa": "/eər/",
    "meaningVi": "Khôngkhí",
    "topicId": 11,
    "topicName": "Môi trường (Environment)"
  },
  {
    "word": "Forest",
    "pos": "n",
    "ipa": "/ˈfɒr.ɪst/",
    "meaningVi": "Rừng",
    "topicId": 11,
    "topicName": "Môi trường (Environment)"
  },
  {
    "word": "Flora",
    "pos": "n",
    "ipa": "/ˈflɔː.rə/",
    "meaningVi": "Hệthựcvật",
    "topicId": 11,
    "topicName": "Môi trường (Environment)"
  },
  {
    "word": "Creature",
    "pos": "n",
    "ipa": "/ˈkriː.tʃər/",
    "meaningVi": "Sinhvật",
    "topicId": 11,
    "topicName": "Môi trường (Environment)"
  },
  {
    "word": "Insect",
    "pos": "n",
    "ipa": "/ˈɪn.sekt/",
    "meaningVi": "Côntrùng",
    "topicId": 11,
    "topicName": "Môi trường (Environment)"
  },
  {
    "word": "Reproduction",
    "pos": "n",
    "ipa": "/ˌriː.prəˈdʌk.ʃən/",
    "meaningVi": "Sựsinhsản",
    "topicId": 11,
    "topicName": "Môi trường (Environment)"
  },
  {
    "word": "Wildlife",
    "pos": "n",
    "ipa": "/ˈwaɪld.laɪf/",
    "meaningVi": "Độngvậthoangdã",
    "topicId": 11,
    "topicName": "Môi trường (Environment)"
  },
  {
    "word": "Sewage",
    "pos": "n",
    "ipa": "/ˈsuː.ɪdʒ/",
    "meaningVi": "Nướcthải",
    "topicId": 11,
    "topicName": "Môi trường (Environment)"
  },
  {
    "word": "Fauna",
    "pos": "n",
    "ipa": "/ˈfɔː.nə/",
    "meaningVi": "Hệđộngvật",
    "topicId": 11,
    "topicName": "Môi trường (Environment)"
  },
  {
    "word": "Drapes",
    "pos": "n",
    "ipa": "/dreɪps/",
    "meaningVi": "Màncửa",
    "topicId": 12,
    "topicName": "Phòng khách (Living room)"
  },
  {
    "word": "Cushion",
    "pos": "n",
    "ipa": "/ˈkʊʃ.ən/",
    "meaningVi": "Đệmngồi",
    "topicId": 12,
    "topicName": "Phòng khách (Living room)"
  },
  {
    "word": "Sofa",
    "pos": "n",
    "ipa": "/ˈsəʊ.fə/",
    "meaningVi": "Ghếsô-pha",
    "topicId": 12,
    "topicName": "Phòng khách (Living room)"
  },
  {
    "word": "Rug",
    "pos": "n",
    "ipa": "/rʌɡ/",
    "meaningVi": "Tấmthảm",
    "topicId": 12,
    "topicName": "Phòng khách (Living room)"
  },
  {
    "word": "Banister",
    "pos": "n",
    "ipa": "/ˈbæn.ɪ.stər/",
    "meaningVi": "Lancan",
    "topicId": 12,
    "topicName": "Phòng khách (Living room)"
  },
  {
    "word": "Bookcase",
    "pos": "n",
    "ipa": "/ˈbʊk.keɪs/",
    "meaningVi": "Tủsách",
    "topicId": 12,
    "topicName": "Phòng khách (Living room)"
  },
  {
    "word": "Ceiling",
    "pos": "n",
    "ipa": "/ˈsiː.lɪŋ/",
    "meaningVi": "Trầnnhà",
    "topicId": 12,
    "topicName": "Phòng khách (Living room)"
  },
  {
    "word": "Clock",
    "pos": "n",
    "ipa": "/klɒk/",
    "meaningVi": "Đồnghồtreotường",
    "topicId": 12,
    "topicName": "Phòng khách (Living room)"
  },
  {
    "word": "Desk",
    "pos": "n",
    "ipa": "/desk/",
    "meaningVi": "Bànlàmviệc",
    "topicId": 12,
    "topicName": "Phòng khách (Living room)"
  },
  {
    "word": "Frame",
    "pos": "n",
    "ipa": "/freɪm/",
    "meaningVi": "Khung(ảnh,cửa)",
    "topicId": 12,
    "topicName": "Phòng khách (Living room)"
  },
  {
    "word": "Lampshade",
    "pos": "n",
    "ipa": "/ˈlæmp.ʃeɪd/",
    "meaningVi": "Chụpđèn",
    "topicId": 12,
    "topicName": "Phòng khách (Living room)"
  },
  {
    "word": "Mantelpiece",
    "pos": "n",
    "ipa": "/ˈmæn.təl.piːs/",
    "meaningVi": "Bệlòsưởi",
    "topicId": 12,
    "topicName": "Phòng khách (Living room)"
  },
  {
    "word": "Painting",
    "pos": "n",
    "ipa": "/ˈpeɪn.tɪŋ/",
    "meaningVi": "Bứctranh",
    "topicId": 12,
    "topicName": "Phòng khách (Living room)"
  },
  {
    "word": "Speaker",
    "pos": "n",
    "ipa": "/ˈspiː.kər/",
    "meaningVi": "Loa",
    "topicId": 12,
    "topicName": "Phòng khách (Living room)"
  },
  {
    "word": "Step",
    "pos": "n",
    "ipa": "/step/",
    "meaningVi": "Bậcthang",
    "topicId": 12,
    "topicName": "Phòng khách (Living room)"
  },
  {
    "word": "Stereosystem",
    "pos": "n. phr",
    "ipa": "/ˈster.i.əʊ ˈsɪs.təm/",
    "meaningVi": "Dànmáyhát(có",
    "topicId": 12,
    "topicName": "Phòng khách (Living room)"
  },
  {
    "word": "Stereo",
    "pos": "n",
    "ipa": "/ˈster.i.əʊ/",
    "meaningVi": "Máyxtê-rê-ô",
    "topicId": 12,
    "topicName": "Phòng khách (Living room)"
  },
  {
    "word": "Television",
    "pos": "n",
    "ipa": "/ˈtel.ɪ.vɪʒ.ən/",
    "meaningVi": "Ti vi",
    "topicId": 12,
    "topicName": "Phòng khách (Living room)"
  },
  {
    "word": "Vase",
    "pos": "n",
    "ipa": "/vɑːz/",
    "meaningVi": "Cáibình,lọ",
    "topicId": 12,
    "topicName": "Phòng khách (Living room)"
  },
  {
    "word": "Wallunit",
    "pos": "n. phr",
    "ipa": "/wɔːlˈjuː.nɪt/",
    "meaningVi": "Tủtường",
    "topicId": 12,
    "topicName": "Phòng khách (Living room)"
  },
  {
    "word": "Lamp",
    "pos": "n",
    "ipa": "/læmp/",
    "meaningVi": "Đèn",
    "topicId": 12,
    "topicName": "Phòng khách (Living room)"
  },
  {
    "word": "Calendar",
    "pos": "n",
    "ipa": "/ˈkæl.ən.dər/",
    "meaningVi": "Lịch",
    "topicId": 12,
    "topicName": "Phòng khách (Living room)"
  },
  {
    "word": "Fan",
    "pos": "n",
    "ipa": "/fæn/",
    "meaningVi": "Cáiquạt",
    "topicId": 12,
    "topicName": "Phòng khách (Living room)"
  },
  {
    "word": "Chair",
    "pos": "n",
    "ipa": "/tʃeər/",
    "meaningVi": "Cáighế",
    "topicId": 12,
    "topicName": "Phòng khách (Living room)"
  },
  {
    "word": "Stool",
    "pos": "n",
    "ipa": "/stuːl/",
    "meaningVi": "Ghếđẩu",
    "topicId": 12,
    "topicName": "Phòng khách (Living room)"
  },
  {
    "word": "Ashtray",
    "pos": "n",
    "ipa": "/ˈæʃ.treɪ/",
    "meaningVi": "Đồgạttànthuốc",
    "topicId": 12,
    "topicName": "Phòng khách (Living room)"
  },
  {
    "word": "Bookshelf",
    "pos": "n",
    "ipa": "/ˈbʊk.ʃelf/",
    "meaningVi": "Kệsách",
    "topicId": 12,
    "topicName": "Phòng khách (Living room)"
  },
  {
    "word": "Fuse",
    "pos": "n",
    "ipa": "/fjuːz/",
    "meaningVi": "Cầuchì",
    "topicId": 12,
    "topicName": "Phòng khách (Living room)"
  },
  {
    "word": "Switch",
    "pos": "n",
    "ipa": "/swɪtʃ/",
    "meaningVi": "Côngtắc",
    "topicId": 12,
    "topicName": "Phòng khách (Living room)"
  },
  {
    "word": "Couch",
    "pos": "n",
    "ipa": "/kaʊtʃ/",
    "meaningVi": "Trườngkỷ",
    "topicId": 12,
    "topicName": "Phòng khách (Living room)"
  },
  {
    "word": "Curtain",
    "pos": "n",
    "ipa": "/ˈkɜː.tən/",
    "meaningVi": "Rèmcửa",
    "topicId": 12,
    "topicName": "Phòng khách (Living room)"
  },
  {
    "word": "Radiologist",
    "pos": "n",
    "ipa": "/ˌreɪ.diˈɒl.ə.dʒɪst/",
    "meaningVi": "Bácsĩchụp",
    "topicId": 13,
    "topicName": "Bệnh viện & Y tế (Hospital & Healthcare)"
  },
  {
    "word": "Emergencyroom",
    "pos": "n. phr",
    "ipa": "/ɪˈmɜː.dʒən.siˌruːm/",
    "meaningVi": "Phòngcấpcứu",
    "topicId": 13,
    "topicName": "Bệnh viện & Y tế (Hospital & Healthcare)"
  },
  {
    "word": "Obstetrician",
    "pos": "n",
    "ipa": "/ˌɒb.stəˈtrɪʃ.ən/",
    "meaningVi": "Bácsĩsảnkhoa",
    "topicId": 13,
    "topicName": "Bệnh viện & Y tế (Hospital & Healthcare)"
  },
  {
    "word": "Operatingroom",
    "pos": "n. phr",
    "ipa": "/ˈɒp.ər.eɪ.tɪŋ ˌruːm/",
    "meaningVi": "Phòngphẫuthuật",
    "topicId": 13,
    "topicName": "Bệnh viện & Y tế (Hospital & Healthcare)"
  },
  {
    "word": "Needle",
    "pos": "n",
    "ipa": "/ˈniː.dəl/",
    "meaningVi": "Kimtiêm",
    "topicId": 13,
    "topicName": "Bệnh viện & Y tế (Hospital & Healthcare)"
  },
  {
    "word": "Laboratory",
    "pos": "n",
    "ipa": "/ləˈbɒr.ə.tər.i/",
    "meaningVi": "Phòngthínghiệm",
    "topicId": 13,
    "topicName": "Bệnh viện & Y tế (Hospital & Healthcare)"
  },
  {
    "word": "Pharmacy",
    "pos": "n",
    "ipa": "/ˈfɑː.mə.si/",
    "meaningVi": "Tiệmthuốc",
    "topicId": 13,
    "topicName": "Bệnh viện & Y tế (Hospital & Healthcare)"
  },
  {
    "word": "Hospitalbed",
    "pos": "n. phr",
    "ipa": "/ˈhɒs.pɪ.təl bed/",
    "meaningVi": "Giườngbệnh",
    "topicId": 13,
    "topicName": "Bệnh viện & Y tế (Hospital & Healthcare)"
  },
  {
    "word": "Callbutton",
    "pos": "n. phr",
    "ipa": "/kɔːl ˈbʌt.ən/",
    "meaningVi": "Chuônggọi(ytá)",
    "topicId": 13,
    "topicName": "Bệnh viện & Y tế (Hospital & Healthcare)"
  },
  {
    "word": "Doctor",
    "pos": "n",
    "ipa": "/ˈdɒk.tər/",
    "meaningVi": "Bácsĩ",
    "topicId": 13,
    "topicName": "Bệnh viện & Y tế (Hospital & Healthcare)"
  },
  {
    "word": "Nurse",
    "pos": "n",
    "ipa": "/nɜːs/",
    "meaningVi": "Ytá",
    "topicId": 13,
    "topicName": "Bệnh viện & Y tế (Hospital & Healthcare)"
  },
  {
    "word": "Gurney",
    "pos": "n",
    "ipa": "/ˈɡɜː.ni/",
    "meaningVi": "Xeđẩytay",
    "topicId": 13,
    "topicName": "Bệnh viện & Y tế (Hospital & Healthcare)"
  },
  {
    "word": "Waitingroom",
    "pos": "n. phr",
    "ipa": "/ˈweɪ.tɪŋˌruːm/",
    "meaningVi": "Phòngchờ",
    "topicId": 13,
    "topicName": "Bệnh viện & Y tế (Hospital & Healthcare)"
  },
  {
    "word": "Surgeon",
    "pos": "n",
    "ipa": "/ˈsɜː.dʒən/",
    "meaningVi": "Bácsĩphẫuthuật",
    "topicId": 13,
    "topicName": "Bệnh viện & Y tế (Hospital & Healthcare)"
  },
  {
    "word": "Midwife",
    "pos": "n",
    "ipa": "/ˈmɪd.waɪf/",
    "meaningVi": "Bàđỡ",
    "topicId": 13,
    "topicName": "Bệnh viện & Y tế (Hospital & Healthcare)"
  },
  {
    "word": "Injection",
    "pos": "n",
    "ipa": "/ɪnˈdʒek.ʃən/",
    "meaningVi": "Việctiêmthuốc",
    "topicId": 13,
    "topicName": "Bệnh viện & Y tế (Hospital & Healthcare)"
  },
  {
    "word": "Calcium",
    "pos": "n",
    "ipa": "/ˈkæl.si.əm/",
    "meaningVi": "Canxi",
    "topicId": 13,
    "topicName": "Bệnh viện & Y tế (Hospital & Healthcare)"
  },
  {
    "word": "Hospital",
    "pos": "n",
    "ipa": "/ˈhɒs.pɪ.təl/",
    "meaningVi": "Bệnhviện",
    "topicId": 13,
    "topicName": "Bệnh viện & Y tế (Hospital & Healthcare)"
  },
  {
    "word": "Crutch",
    "pos": "n",
    "ipa": "/krʌtʃ/",
    "meaningVi": "Cáinạng",
    "topicId": 13,
    "topicName": "Bệnh viện & Y tế (Hospital & Healthcare)"
  },
  {
    "word": "Paramedic",
    "pos": "n",
    "ipa": "/ˌpær.əˈmed.ɪk/",
    "meaningVi": "Nhânviênytế",
    "topicId": 13,
    "topicName": "Bệnh viện & Y tế (Hospital & Healthcare)"
  },
  {
    "word": "Stretcher",
    "pos": "n",
    "ipa": "/ˈstretʃ.ər/",
    "meaningVi": "Cángcứuthương",
    "topicId": 13,
    "topicName": "Bệnh viện & Y tế (Hospital & Healthcare)"
  },
  {
    "word": "Rush",
    "pos": "n",
    "ipa": "/rʌʃ/",
    "meaningVi": "Đưađi,chuyểnđi",
    "topicId": 13,
    "topicName": "Bệnh viện & Y tế (Hospital & Healthcare)"
  },
  {
    "word": "Treat",
    "pos": "v",
    "ipa": "/triːt/",
    "meaningVi": "Điềutrị,chữatrị",
    "topicId": 13,
    "topicName": "Bệnh viện & Y tế (Hospital & Healthcare)"
  },
  {
    "word": "Condition",
    "pos": "n",
    "ipa": "/kənˈdɪʃ.ən/",
    "meaningVi": "Tìnhtrạng",
    "topicId": 13,
    "topicName": "Bệnh viện & Y tế (Hospital & Healthcare)"
  },
  {
    "word": "Recovery",
    "pos": "n",
    "ipa": "/rɪˈkʌv.ər.i/",
    "meaningVi": "Sựbìnhphục",
    "topicId": 13,
    "topicName": "Bệnh viện & Y tế (Hospital & Healthcare)"
  },
  {
    "word": "Suffer",
    "pos": "v",
    "ipa": "/ˈsʌf.ər/",
    "meaningVi": "Chịuđựng",
    "topicId": 13,
    "topicName": "Bệnh viện & Y tế (Hospital & Healthcare)"
  },
  {
    "word": "Deteriorate",
    "pos": "v",
    "ipa": "/dɪˈtɪə.ri.ə.reɪt/",
    "meaningVi": "Xấuđi,tệhơn",
    "topicId": 13,
    "topicName": "Bệnh viện & Y tế (Hospital & Healthcare)"
  },
  {
    "word": "Coma",
    "pos": "n",
    "ipa": "/ˈkəʊ.mə/",
    "meaningVi": "Sựhônmê",
    "topicId": 13,
    "topicName": "Bệnh viện & Y tế (Hospital & Healthcare)"
  },
  {
    "word": "Monitor",
    "pos": "n",
    "ipa": "/ˈmɒn.ɪ.tər/",
    "meaningVi": "Mànhình",
    "topicId": 14,
    "topicName": "Máy tính & Công nghệ (Computers & IT)"
  },
  {
    "word": "Mousepad",
    "pos": "n. phr",
    "ipa": "/ˈmaʊsˌpæd/",
    "meaningVi": "Tấmlótchuột",
    "topicId": 14,
    "topicName": "Máy tính & Công nghệ (Computers & IT)"
  },
  {
    "word": "Printer",
    "pos": "n",
    "ipa": "/ˈprɪn.tər/",
    "meaningVi": "Máyin",
    "topicId": 14,
    "topicName": "Máy tính & Công nghệ (Computers & IT)"
  },
  {
    "word": "Scanner",
    "pos": "n",
    "ipa": "/ˈskæn.ər/",
    "meaningVi": "Máyquét",
    "topicId": 14,
    "topicName": "Máy tính & Công nghệ (Computers & IT)"
  },
  {
    "word": "Open",
    "pos": "v",
    "ipa": "/ˈəʊ.pən/",
    "meaningVi": "Khởiđộng,mở",
    "topicId": 14,
    "topicName": "Máy tính & Công nghệ (Computers & IT)"
  },
  {
    "word": "Close",
    "pos": "v",
    "ipa": "/kləʊz/",
    "meaningVi": "Đóng,tắt",
    "topicId": 14,
    "topicName": "Máy tính & Công nghệ (Computers & IT)"
  },
  {
    "word": "Delete",
    "pos": "v",
    "ipa": "/dɪˈliːt/",
    "meaningVi": "Xóa,loạibỏ",
    "topicId": 14,
    "topicName": "Máy tính & Công nghệ (Computers & IT)"
  },
  {
    "word": "Insert",
    "pos": "v",
    "ipa": "/ɪnˈsɜːt/",
    "meaningVi": "Chovào,chèn",
    "topicId": 14,
    "topicName": "Máy tính & Công nghệ (Computers & IT)"
  },
  {
    "word": "Merge",
    "pos": "v",
    "ipa": "/mɜːdʒ/",
    "meaningVi": "Sátnhập",
    "topicId": 14,
    "topicName": "Máy tính & Công nghệ (Computers & IT)"
  },
  {
    "word": "Helpline",
    "pos": "n",
    "ipa": "/ˈhelp.laɪn/",
    "meaningVi": "Đườngdâytrợgiúp",
    "topicId": 14,
    "topicName": "Máy tính & Công nghệ (Computers & IT)"
  },
  {
    "word": "Harddisk",
    "pos": "n. phr",
    "ipa": "/ˈhɑːdˌdɪsk/",
    "meaningVi": "Ổcứng",
    "topicId": 14,
    "topicName": "Máy tính & Công nghệ (Computers & IT)"
  },
  {
    "word": "Software",
    "pos": "n",
    "ipa": "/ˈsɒft.weər/",
    "meaningVi": "Phầnmềm",
    "topicId": 14,
    "topicName": "Máy tính & Công nghệ (Computers & IT)"
  },
  {
    "word": "CD-ROM",
    "pos": "n",
    "ipa": "/ˌsiː.diːˈrɒm/",
    "meaningVi": "ĐĩaCDdữliệu",
    "topicId": 14,
    "topicName": "Máy tính & Công nghệ (Computers & IT)"
  },
  {
    "word": "Toolbar",
    "pos": "n",
    "ipa": "/ˈtuːl.bɑːr/",
    "meaningVi": "Thanhcôngcụ",
    "topicId": 14,
    "topicName": "Máy tính & Công nghệ (Computers & IT)"
  },
  {
    "word": "Database",
    "pos": "n",
    "ipa": "/ˈdeɪ.tə.beɪs/",
    "meaningVi": "Cơsởdữliệu",
    "topicId": 14,
    "topicName": "Máy tính & Công nghệ (Computers & IT)"
  },
  {
    "word": "Hacker",
    "pos": "n",
    "ipa": "/ˈhæk.ər/",
    "meaningVi": "Tintặc",
    "topicId": 14,
    "topicName": "Máy tính & Công nghệ (Computers & IT)"
  },
  {
    "word": "Save",
    "pos": "v",
    "ipa": "/seɪvæz/",
    "meaningVi": "Lưu",
    "topicId": 14,
    "topicName": "Máy tính & Công nghệ (Computers & IT)"
  },
  {
    "word": "Select",
    "pos": "v",
    "ipa": "/sɪˈlekt/",
    "meaningVi": "Chọn",
    "topicId": 14,
    "topicName": "Máy tính & Công nghệ (Computers & IT)"
  },
  {
    "word": "Copy",
    "pos": "v",
    "ipa": "/ˈkɒp.i/",
    "meaningVi": "Saochép",
    "topicId": 14,
    "topicName": "Máy tính & Công nghệ (Computers & IT)"
  },
  {
    "word": "Computer",
    "pos": "n",
    "ipa": "/kəmˈpjuː.tər/",
    "meaningVi": "Máyvitính",
    "topicId": 14,
    "topicName": "Máy tính & Công nghệ (Computers & IT)"
  },
  {
    "word": "Laptop",
    "pos": "n",
    "ipa": "/ˈlæp.tɒp/",
    "meaningVi": "Máytínhxáchtay",
    "topicId": 14,
    "topicName": "Máy tính & Công nghệ (Computers & IT)"
  },
  {
    "word": "Speaker",
    "pos": "n",
    "ipa": "/ˈspiː.kər/",
    "meaningVi": "Loa",
    "topicId": 14,
    "topicName": "Máy tính & Công nghệ (Computers & IT)"
  },
  {
    "word": "File",
    "pos": "n",
    "ipa": "/faɪl/",
    "meaningVi": "Tệp,tậptin",
    "topicId": 14,
    "topicName": "Máy tính & Công nghệ (Computers & IT)"
  },
  {
    "word": "Diskdrive",
    "pos": "n. phr",
    "ipa": "/ˈdɪskˌdraɪv/",
    "meaningVi": "Ổđĩa",
    "topicId": 14,
    "topicName": "Máy tính & Công nghệ (Computers & IT)"
  },
  {
    "word": "Battery",
    "pos": "n",
    "ipa": "/ˈbæt.ər.i/",
    "meaningVi": "Pin",
    "topicId": 14,
    "topicName": "Máy tính & Công nghệ (Computers & IT)"
  },
  {
    "word": "Click",
    "pos": "n",
    "ipa": "/klɪk/",
    "meaningVi": "Nhấpchuột",
    "topicId": 14,
    "topicName": "Máy tính & Công nghệ (Computers & IT)"
  },
  {
    "word": "Type",
    "pos": "n",
    "ipa": "/taɪp/",
    "meaningVi": "Đánhchữ,gõchữ",
    "topicId": 14,
    "topicName": "Máy tính & Công nghệ (Computers & IT)"
  },
  {
    "word": "Mouse",
    "pos": "n",
    "ipa": "/maʊs/",
    "meaningVi": "Conchuột",
    "topicId": 14,
    "topicName": "Máy tính & Công nghệ (Computers & IT)"
  },
  {
    "word": "Keyboard",
    "pos": "n",
    "ipa": "/ˈkiː.bɔːd/",
    "meaningVi": "Bànphím",
    "topicId": 14,
    "topicName": "Máy tính & Công nghệ (Computers & IT)"
  },
  {
    "word": "Mousemat",
    "pos": "n. phr",
    "ipa": "/ˈmaʊsˌmæt/",
    "meaningVi": "Miếnglótchuột",
    "topicId": 14,
    "topicName": "Máy tính & Công nghệ (Computers & IT)"
  },
  {
    "word": "Key",
    "pos": "n",
    "ipa": "/kiː/",
    "meaningVi": "Phím",
    "topicId": 14,
    "topicName": "Máy tính & Công nghệ (Computers & IT)"
  },
  {
    "word": "Shutdown",
    "pos": "phrasalv",
    "ipa": "/ʃʌt daʊn/",
    "meaningVi": "Tắtmáy",
    "topicId": 14,
    "topicName": "Máy tính & Công nghệ (Computers & IT)"
  },
  {
    "word": "Folder",
    "pos": "n",
    "ipa": "/ˈfəʊl.dər/",
    "meaningVi": "Thưmục",
    "topicId": 14,
    "topicName": "Máy tính & Công nghệ (Computers & IT)"
  },
  {
    "word": "Print",
    "pos": "v",
    "ipa": "/prɪnt/",
    "meaningVi": "In",
    "topicId": 14,
    "topicName": "Máy tính & Công nghệ (Computers & IT)"
  },
  {
    "word": "Program",
    "pos": "n",
    "ipa": "/ˈprəʊ.ɡræm/",
    "meaningVi": "Chươngtrình",
    "topicId": 14,
    "topicName": "Máy tính & Công nghệ (Computers & IT)"
  },
  {
    "word": "Search",
    "pos": "v",
    "ipa": "/sɜːtʃ/",
    "meaningVi": "Tìmkiếm(thông",
    "topicId": 14,
    "topicName": "Máy tính & Công nghệ (Computers & IT)"
  },
  {
    "word": "Screen",
    "pos": "n",
    "ipa": "/skriːn/",
    "meaningVi": "Mànhình",
    "topicId": 14,
    "topicName": "Máy tính & Công nghệ (Computers & IT)"
  },
  {
    "word": "Dusting",
    "pos": "n",
    "ipa": "/ˈdʌs.tɪŋ/",
    "meaningVi": "Việcquétbụi",
    "topicId": 15,
    "topicName": "Công việc nhà (Housework & Chores)"
  },
  {
    "word": "Cooking",
    "pos": "n",
    "ipa": "/ˈkʊk.ɪŋ/",
    "meaningVi": "Việcnấuăn",
    "topicId": 15,
    "topicName": "Công việc nhà (Housework & Chores)"
  },
  {
    "word": "Ironing",
    "pos": "n",
    "ipa": "/ˈaɪə.nɪŋ/",
    "meaningVi": "Việcủiđồ",
    "topicId": 15,
    "topicName": "Công việc nhà (Housework & Chores)"
  },
  {
    "word": "Sweep",
    "pos": "v",
    "ipa": "/swiːp/",
    "meaningVi": "Quétdọn",
    "topicId": 15,
    "topicName": "Công việc nhà (Housework & Chores)"
  },
  {
    "word": "Wipe",
    "pos": "v",
    "ipa": "/waɪp/",
    "meaningVi": "Chùi,lausạch",
    "topicId": 15,
    "topicName": "Công việc nhà (Housework & Chores)"
  },
  {
    "word": "Throwout",
    "pos": "phrasalv",
    "ipa": "/θrəʊaʊt/",
    "meaningVi": "Vứt,bỏđi",
    "topicId": 15,
    "topicName": "Công việc nhà (Housework & Chores)"
  },
  {
    "word": "Vacuum",
    "pos": "v",
    "ipa": "/ˈvæk.juːm/",
    "meaningVi": "Hútbụi",
    "topicId": 15,
    "topicName": "Công việc nhà (Housework & Chores)"
  },
  {
    "word": "Cleaning",
    "pos": "n",
    "ipa": "/ˈkliː.nɪŋ/",
    "meaningVi": "Việcdọndẹp",
    "topicId": 15,
    "topicName": "Công việc nhà (Housework & Chores)"
  },
  {
    "word": "Polish",
    "pos": "v",
    "ipa": "/ˈpɒl.ɪʃ/",
    "meaningVi": "Đánhbóng",
    "topicId": 15,
    "topicName": "Công việc nhà (Housework & Chores)"
  },
  {
    "word": "Fold",
    "pos": "v",
    "ipa": "/fəʊld/",
    "meaningVi": "Gấpgọn,gậplại",
    "topicId": 15,
    "topicName": "Công việc nhà (Housework & Chores)"
  },
  {
    "word": "Scrub",
    "pos": "v",
    "ipa": "/skrʌb/",
    "meaningVi": "Chà,cọrửa",
    "topicId": 15,
    "topicName": "Công việc nhà (Housework & Chores)"
  },
  {
    "word": "Tighten",
    "pos": "v",
    "ipa": "/ˈtaɪ.tən/",
    "meaningVi": "Thắt,vặn(chặt)",
    "topicId": 15,
    "topicName": "Công việc nhà (Housework & Chores)"
  },
  {
    "word": "Makethebed",
    "pos": "v. phr",
    "ipa": "/meɪkðəbed/",
    "meaningVi": "Dọngiường",
    "topicId": 15,
    "topicName": "Công việc nhà (Housework & Chores)"
  },
  {
    "word": "Setthetable",
    "pos": "v. phr",
    "ipa": "/setðəˈteɪ.bəl/",
    "meaningVi": "Bàychénbát",
    "topicId": 15,
    "topicName": "Công việc nhà (Housework & Chores)"
  },
  {
    "word": "Clearthetable",
    "pos": "v. phr",
    "ipa": "/klɪər ðəˈteɪ.bəl/",
    "meaningVi": "Dọndẹpchénbát",
    "topicId": 15,
    "topicName": "Công việc nhà (Housework & Chores)"
  },
  {
    "word": "Mowthelawn",
    "pos": "v. phr",
    "ipa": "/məʊðəlɔːn/",
    "meaningVi": "Cắtcỏ",
    "topicId": 15,
    "topicName": "Công việc nhà (Housework & Chores)"
  },
  {
    "word": "Dishwashing",
    "pos": "n",
    "ipa": "/dɪʃˈwɒʃ.ɪŋ/",
    "meaningVi": "Việcrửachén",
    "topicId": 15,
    "topicName": "Công việc nhà (Housework & Chores)"
  },
  {
    "word": "Watertheplants",
    "pos": "v. phr",
    "ipa": "/ˈwɔː.tərðəˈplɑːnt/",
    "meaningVi": "Tướicây",
    "topicId": 15,
    "topicName": "Công việc nhà (Housework & Chores)"
  },
  {
    "word": "Cleanthekitchen",
    "pos": "v. phr",
    "ipa": "/kliːn ðə ˈkɪʧən/",
    "meaningVi": "Laudọnbếp",
    "topicId": 15,
    "topicName": "Công việc nhà (Housework & Chores)"
  },
  {
    "word": "Bakery",
    "pos": "n",
    "ipa": "/ˈbeɪ.kər.i/",
    "meaningVi": "Tiệmbánh",
    "topicId": 16,
    "topicName": "Cửa hàng (Shops & Stores)"
  },
  {
    "word": "Bookshop",
    "pos": "n",
    "ipa": "/ˈbʊk.ʃɒp/",
    "meaningVi": "Tiệmsách",
    "topicId": 16,
    "topicName": "Cửa hàng (Shops & Stores)"
  },
  {
    "word": "Butcher's",
    "pos": "n",
    "ipa": "/ˈbʊtʃ.ər/",
    "meaningVi": "Cửahàngthịt",
    "topicId": 16,
    "topicName": "Cửa hàng (Shops & Stores)"
  },
  {
    "word": "Candystore",
    "pos": "n. phr",
    "ipa": "/ˈkæn.diˌstɔːr/",
    "meaningVi": "Cửahàngkẹo",
    "topicId": 16,
    "topicName": "Cửa hàng (Shops & Stores)"
  },
  {
    "word": "Greengrocer",
    "pos": "n",
    "ipa": "/ˈɡriːŋ.ɡrəʊ.sər/",
    "meaningVi": "Cửahàngbánrau",
    "topicId": 16,
    "topicName": "Cửa hàng (Shops & Stores)"
  },
  {
    "word": "Flowershop",
    "pos": "n. phr",
    "ipa": "/flaʊərʃɒp/",
    "meaningVi": "Cửahànghoa",
    "topicId": 16,
    "topicName": "Cửa hàng (Shops & Stores)"
  },
  {
    "word": "Store",
    "pos": "n",
    "ipa": "/ˌstɔːr/",
    "meaningVi": "Cửahàng",
    "topicId": 16,
    "topicName": "Cửa hàng (Shops & Stores)"
  },
  {
    "word": "Giftshop",
    "pos": "n. phr",
    "ipa": "/ˈɡɪft ˌʃɒp/",
    "meaningVi": "Cửahàngđồlưu",
    "topicId": 16,
    "topicName": "Cửa hàng (Shops & Stores)"
  },
  {
    "word": "Shop",
    "pos": "n",
    "ipa": "/ˌʃɒp/",
    "meaningVi": "Cửahàng",
    "topicId": 16,
    "topicName": "Cửa hàng (Shops & Stores)"
  },
  {
    "word": "Foodstall",
    "pos": "n. phr",
    "ipa": "/fuːdstɔːl/",
    "meaningVi": "Quánăn",
    "topicId": 16,
    "topicName": "Cửa hàng (Shops & Stores)"
  },
  {
    "word": "Dry-cleaner's",
    "pos": "n",
    "ipa": "/ˌdraɪˈkliː.nəz/",
    "meaningVi": "Tiệmgiặtủi",
    "topicId": 16,
    "topicName": "Cửa hàng (Shops & Stores)"
  },
  {
    "word": "Shoestore",
    "pos": "n. phr",
    "ipa": "/ʃuːˌstɔːr/",
    "meaningVi": "Tiệmgiày",
    "topicId": 16,
    "topicName": "Cửa hàng (Shops & Stores)"
  },
  {
    "word": "Barbershop",
    "pos": "n",
    "ipa": "/ˈbɑː.bə.ʃɒp/",
    "meaningVi": "Tiệmcắttócnam",
    "topicId": 16,
    "topicName": "Cửa hàng (Shops & Stores)"
  },
  {
    "word": "Bookstall",
    "pos": "n",
    "ipa": "/ˈbʊk.stɔːl/",
    "meaningVi": "Quầybánsách",
    "topicId": 16,
    "topicName": "Cửa hàng (Shops & Stores)"
  },
  {
    "word": "Sportscenter",
    "pos": "n. phr",
    "ipa": "/ˈspɔːrts ˌsen.t̬ɚ/",
    "meaningVi": "Trungtâmthểthao",
    "topicId": 16,
    "topicName": "Cửa hàng (Shops & Stores)"
  },
  {
    "word": "Play",
    "pos": "n",
    "ipa": "/pleɪ/",
    "meaningVi": "Vởkịch",
    "topicId": 17,
    "topicName": "Giải trí (Entertainment)"
  },
  {
    "word": "Circus",
    "pos": "n",
    "ipa": "/ˈsɜː.kəs/",
    "meaningVi": "Rạpxiếc",
    "topicId": 17,
    "topicName": "Giải trí (Entertainment)"
  },
  {
    "word": "Stadium",
    "pos": "n",
    "ipa": "/ˈsteɪ.di.əm/",
    "meaningVi": "Sânvậnđộng",
    "topicId": 17,
    "topicName": "Giải trí (Entertainment)"
  },
  {
    "word": "Orchestra",
    "pos": "n",
    "ipa": "/ˈɔː.kɪ.strə/",
    "meaningVi": "Bannhạc,dànnhạc",
    "topicId": 17,
    "topicName": "Giải trí (Entertainment)"
  },
  {
    "word": "Scene",
    "pos": "n",
    "ipa": "/siːn/",
    "meaningVi": "Phâncảnh",
    "topicId": 17,
    "topicName": "Giải trí (Entertainment)"
  },
  {
    "word": "Opera",
    "pos": "n",
    "ipa": "/ˈɒp.ər.ə/",
    "meaningVi": "Nhạckịch,ô-pê-ra",
    "topicId": 17,
    "topicName": "Giải trí (Entertainment)"
  },
  {
    "word": "Theater",
    "pos": "n",
    "ipa": "/ˈθɪə.tər/",
    "meaningVi": "Nhàhát",
    "topicId": 17,
    "topicName": "Giải trí (Entertainment)"
  },
  {
    "word": "Applaud",
    "pos": "v",
    "ipa": "/əˈplɔːd/",
    "meaningVi": "Vỗtay(tánthưởng)",
    "topicId": 17,
    "topicName": "Giải trí (Entertainment)"
  },
  {
    "word": "Perform",
    "pos": "v",
    "ipa": "/pəˈfɔːm/",
    "meaningVi": "Trìnhdiễn,biểu",
    "topicId": 17,
    "topicName": "Giải trí (Entertainment)"
  },
  {
    "word": "Exhibit",
    "pos": "n",
    "ipa": "/ɪɡˈzɪb.ɪt/",
    "meaningVi": "Vậttriểnlãm",
    "topicId": 17,
    "topicName": "Giải trí (Entertainment)"
  },
  {
    "word": "Artgallery",
    "pos": "n. phr",
    "ipa": "/ˈɑːt ˌɡæl.ər.i/",
    "meaningVi": "Phòngtriểnlãm",
    "topicId": 17,
    "topicName": "Giải trí (Entertainment)"
  },
  {
    "word": "Comedy",
    "pos": "n",
    "ipa": "/ˈkɒm.ə.di/",
    "meaningVi": "Hàikịch",
    "topicId": 17,
    "topicName": "Giải trí (Entertainment)"
  },
  {
    "word": "Chambermusic",
    "pos": "n. phr",
    "ipa": "/ˈtʃeɪm.bəˌmjuː.zɪk/",
    "meaningVi": "Nhạcthínhphòng",
    "topicId": 17,
    "topicName": "Giải trí (Entertainment)"
  },
  {
    "word": "Casino",
    "pos": "n",
    "ipa": "/kəˈsiː.nəʊ/",
    "meaningVi": "Sòngbạc",
    "topicId": 17,
    "topicName": "Giải trí (Entertainment)"
  },
  {
    "word": "Pub",
    "pos": "n",
    "ipa": "/pʌb/",
    "meaningVi": "Quánrượu",
    "topicId": 17,
    "topicName": "Giải trí (Entertainment)"
  },
  {
    "word": "Concerthall",
    "pos": "n. phr",
    "ipa": "/ˈkɒn.sətˌhɔːl/",
    "meaningVi": "Phònghoànhạc",
    "topicId": 17,
    "topicName": "Giải trí (Entertainment)"
  },
  {
    "word": "Travel",
    "pos": "v",
    "ipa": "/ˈtræv.əl/",
    "meaningVi": "Dulịch",
    "topicId": 18,
    "topicName": "Du lịch (Travel & Tourism)"
  },
  {
    "word": "Travelagent",
    "pos": "n. phr",
    "ipa": "/ˈtræv.əlˌeɪ.dʒənt/",
    "meaningVi": "Đạilýdulịch",
    "topicId": 18,
    "topicName": "Du lịch (Travel & Tourism)"
  },
  {
    "word": "Vacation",
    "pos": "n",
    "ipa": "/veɪˈkeɪ.ʃən/",
    "meaningVi": "Kỳnghỉ",
    "topicId": 18,
    "topicName": "Du lịch (Travel & Tourism)"
  },
  {
    "word": "Flight",
    "pos": "n",
    "ipa": "/flaɪt/",
    "meaningVi": "Chuyếnbay",
    "topicId": 18,
    "topicName": "Du lịch (Travel & Tourism)"
  },
  {
    "word": "Voyage",
    "pos": "n",
    "ipa": "/ˈvɔɪ.ɪdʒ/",
    "meaningVi": "Chuyếnhảihành",
    "topicId": 18,
    "topicName": "Du lịch (Travel & Tourism)"
  },
  {
    "word": "Relax",
    "pos": "v",
    "ipa": "/rɪˈlæks/",
    "meaningVi": "Thưgiãn",
    "topicId": 18,
    "topicName": "Du lịch (Travel & Tourism)"
  },
  {
    "word": "Cancel",
    "pos": "v",
    "ipa": "/ˈkæn.səl/",
    "meaningVi": "Hủybỏ",
    "topicId": 18,
    "topicName": "Du lịch (Travel & Tourism)"
  },
  {
    "word": "Homestay",
    "pos": "n",
    "ipa": "/ˈhəʊm.steɪ/",
    "meaningVi": "(dịchvụ)lưutrútại",
    "topicId": 18,
    "topicName": "Du lịch (Travel & Tourism)"
  },
  {
    "word": "Souvenir",
    "pos": "n",
    "ipa": "/ˌsuː.vənˈɪər/",
    "meaningVi": "Quàlưuniệm",
    "topicId": 18,
    "topicName": "Du lịch (Travel & Tourism)"
  },
  {
    "word": "Travelsickness",
    "pos": "n. phr",
    "ipa": "/ˈtræv.əlˌsɪk.nəs/",
    "meaningVi": "Việcsaytàuxe",
    "topicId": 18,
    "topicName": "Du lịch (Travel & Tourism)"
  },
  {
    "word": "Journey",
    "pos": "n",
    "ipa": "/ˈdʒɜː.ni/",
    "meaningVi": "Chuyếnđi",
    "topicId": 18,
    "topicName": "Du lịch (Travel & Tourism)"
  },
  {
    "word": "Peakseason",
    "pos": "n. phr",
    "ipa": "/piːk ˈsiː.zən/",
    "meaningVi": "Mùacaođiểm",
    "topicId": 18,
    "topicName": "Du lịch (Travel & Tourism)"
  },
  {
    "word": "Route",
    "pos": "n",
    "ipa": "/ruːt/",
    "meaningVi": "Tuyếnđường",
    "topicId": 18,
    "topicName": "Du lịch (Travel & Tourism)"
  },
  {
    "word": "Trip",
    "pos": "n",
    "ipa": "/trɪp/",
    "meaningVi": "Chuyếnđi(ngắn",
    "topicId": 18,
    "topicName": "Du lịch (Travel & Tourism)"
  },
  {
    "word": "Excursion",
    "pos": "n",
    "ipa": "/ɪkˈskɜː.ʃən/",
    "meaningVi": "Chuyếnthamquan",
    "topicId": 18,
    "topicName": "Du lịch (Travel & Tourism)"
  },
  {
    "word": "Luggage",
    "pos": "n",
    "ipa": "/ˈlʌɡ.ɪdʒ/",
    "meaningVi": "Hànhlý",
    "topicId": 18,
    "topicName": "Du lịch (Travel & Tourism)"
  },
  {
    "word": "Tourist",
    "pos": "n",
    "ipa": "/ˈtʊə.rɪst/",
    "meaningVi": "Dukhách",
    "topicId": 18,
    "topicName": "Du lịch (Travel & Tourism)"
  },
  {
    "word": "Ticket",
    "pos": "n",
    "ipa": "/ˈtɪk.ɪt/",
    "meaningVi": "Vé",
    "topicId": 18,
    "topicName": "Du lịch (Travel & Tourism)"
  },
  {
    "word": "Eager",
    "pos": "adj",
    "ipa": "/ˈiː.ɡər/",
    "meaningVi": "Háohức",
    "topicId": 18,
    "topicName": "Du lịch (Travel & Tourism)"
  },
  {
    "word": "Sunglasses",
    "pos": "n",
    "ipa": "/ˈsʌŋˌɡlɑː.sɪz/",
    "meaningVi": "Kínhmát",
    "topicId": 18,
    "topicName": "Du lịch (Travel & Tourism)"
  },
  {
    "word": "Safari",
    "pos": "n",
    "ipa": "/səˈfɑː.ri/",
    "meaningVi": "Chuyếnthámhiểm",
    "topicId": 18,
    "topicName": "Du lịch (Travel & Tourism)"
  },
  {
    "word": "Moon",
    "pos": "n",
    "ipa": "/muːn/",
    "meaningVi": "Trăng",
    "topicId": 19,
    "topicName": "Tết Trung thu (Mid-Autumn Festival)"
  },
  {
    "word": "Cake",
    "pos": "n",
    "ipa": "/keɪk/",
    "meaningVi": "Bánhngọt",
    "topicId": 19,
    "topicName": "Tết Trung thu (Mid-Autumn Festival)"
  },
  {
    "word": "Toy",
    "pos": "n",
    "ipa": "/tɔɪ/",
    "meaningVi": "Đồchơi",
    "topicId": 19,
    "topicName": "Tết Trung thu (Mid-Autumn Festival)"
  },
  {
    "word": "Mask",
    "pos": "n",
    "ipa": "/mɑːsk/",
    "meaningVi": "Mặtnạ",
    "topicId": 19,
    "topicName": "Tết Trung thu (Mid-Autumn Festival)"
  },
  {
    "word": "Banyan",
    "pos": "n",
    "ipa": "/ˈbæn.jæn/",
    "meaningVi": "Câyđa",
    "topicId": 19,
    "topicName": "Tết Trung thu (Mid-Autumn Festival)"
  },
  {
    "word": "Lantern",
    "pos": "n",
    "ipa": "/ˈlæn.tən/",
    "meaningVi": "Lồngđèn",
    "topicId": 19,
    "topicName": "Tết Trung thu (Mid-Autumn Festival)"
  },
  {
    "word": "Bamboo",
    "pos": "n",
    "ipa": "/bæmˈbuː/",
    "meaningVi": "Tre",
    "topicId": 19,
    "topicName": "Tết Trung thu (Mid-Autumn Festival)"
  },
  {
    "word": "Perform",
    "pos": "n",
    "ipa": "/pəˈfɔːm/",
    "meaningVi": "Trìnhdiễn,biểu",
    "topicId": 19,
    "topicName": "Tết Trung thu (Mid-Autumn Festival)"
  },
  {
    "word": "Celebrate",
    "pos": "n",
    "ipa": "/ˈsel.ə.breɪt/",
    "meaningVi": "Kỷniệm",
    "topicId": 19,
    "topicName": "Tết Trung thu (Mid-Autumn Festival)"
  },
  {
    "word": "Rabbit",
    "pos": "n",
    "ipa": "/ˈræb.ɪt/",
    "meaningVi": "Thỏ",
    "topicId": 19,
    "topicName": "Tết Trung thu (Mid-Autumn Festival)"
  },
  {
    "word": "Sport",
    "pos": "n",
    "ipa": "/spɔːrt/",
    "meaningVi": "Thểthao",
    "topicId": 20,
    "topicName": "Thể thao (Sports)"
  },
  {
    "word": "Skiing",
    "pos": "n",
    "ipa": "/ˈskiː.ɪŋ/",
    "meaningVi": "Trượttuyết",
    "topicId": 20,
    "topicName": "Thể thao (Sports)"
  },
  {
    "word": "Ice skating",
    "pos": "n. phr",
    "ipa": "/ˈaɪsˌskeɪ.tɪŋ/",
    "meaningVi": "Trượtbăng",
    "topicId": 20,
    "topicName": "Thể thao (Sports)"
  },
  {
    "word": "Horseracing",
    "pos": "n. phr",
    "ipa": "/ˈhɔːrs ˌreɪ.sɪŋ/",
    "meaningVi": "Đuangựa",
    "topicId": 20,
    "topicName": "Thể thao (Sports)"
  },
  {
    "word": "Running",
    "pos": "n",
    "ipa": "/ˈrʌn.ɪŋ/",
    "meaningVi": "Chạy",
    "topicId": 20,
    "topicName": "Thể thao (Sports)"
  },
  {
    "word": "Walking",
    "pos": "n",
    "ipa": "/ˈwɔː.kɪŋ/",
    "meaningVi": "Đibộ,tảnbộ",
    "topicId": 20,
    "topicName": "Thể thao (Sports)"
  },
  {
    "word": "Watersports",
    "pos": "n. phr",
    "ipa": "/ˈwɔː.tərspɔːrts/",
    "meaningVi": "Thểthaodướinước",
    "topicId": 20,
    "topicName": "Thể thao (Sports)"
  },
  {
    "word": "Boxing",
    "pos": "n",
    "ipa": "/ˈbɒk.sɪŋ/",
    "meaningVi": "Quyềnanh",
    "topicId": 20,
    "topicName": "Thể thao (Sports)"
  },
  {
    "word": "Swimming",
    "pos": "n",
    "ipa": "/ˈswɪm.ɪŋ/",
    "meaningVi": "Bơilội",
    "topicId": 20,
    "topicName": "Thể thao (Sports)"
  },
  {
    "word": "Football",
    "pos": "n",
    "ipa": "/ˈfʊt.bɔːl/",
    "meaningVi": "Bóngđá",
    "topicId": 20,
    "topicName": "Thể thao (Sports)"
  },
  {
    "word": "Basketball",
    "pos": "n",
    "ipa": "/ˈbæs.kɪtˌbɔːl/",
    "meaningVi": "Bóngrổ",
    "topicId": 20,
    "topicName": "Thể thao (Sports)"
  },
  {
    "word": "Badminton",
    "pos": "n",
    "ipa": "/ˈbæd.mɪn.tən/",
    "meaningVi": "Cầulông",
    "topicId": 20,
    "topicName": "Thể thao (Sports)"
  },
  {
    "word": "Tennis",
    "pos": "n",
    "ipa": "/ˈtɛn.ɪs/",
    "meaningVi": "Quầnvợt",
    "topicId": 20,
    "topicName": "Thể thao (Sports)"
  },
  {
    "word": "Table tennis",
    "pos": "n. phr",
    "ipa": "/ˈteɪ.bəl ˈtɛn.ɪs/",
    "meaningVi": "Bóngbàn",
    "topicId": 20,
    "topicName": "Thể thao (Sports)"
  },
  {
    "word": "Baseball",
    "pos": "n",
    "ipa": "/ˈbeɪs.bɔːl/",
    "meaningVi": "Bóngchày",
    "topicId": 20,
    "topicName": "Thể thao (Sports)"
  },
  {
    "word": "Cycling",
    "pos": "n",
    "ipa": "/ˈsaɪ.klɪŋ/",
    "meaningVi": "Đuaxeđạp,đạpxe",
    "topicId": 20,
    "topicName": "Thể thao (Sports)"
  },
  {
    "word": "Golf",
    "pos": "n",
    "ipa": "/ɡɑːlf/",
    "meaningVi": "Đánhgôn",
    "topicId": 20,
    "topicName": "Thể thao (Sports)"
  },
  {
    "word": "Contactsport",
    "pos": "n. phr",
    "ipa": "/ˈkɒn.tæktspɔːrt/",
    "meaningVi": "Thểthaotiếpxúc",
    "topicId": 20,
    "topicName": "Thể thao (Sports)"
  },
  {
    "word": "Water polo",
    "pos": "n. phr",
    "ipa": "/ˈwɔː.tərˈpoʊ.loʊ/",
    "meaningVi": "Bóngnước",
    "topicId": 20,
    "topicName": "Thể thao (Sports)"
  },
  {
    "word": "Archery",
    "pos": "n",
    "ipa": "/ˈɑːr.tʃər.i/",
    "meaningVi": "Bắncung",
    "topicId": 20,
    "topicName": "Thể thao (Sports)"
  },
  {
    "word": "Weightlifting",
    "pos": "n",
    "ipa": "/ˈweɪtˌlɪf.tɪŋ/",
    "meaningVi": "Cửtạ",
    "topicId": 20,
    "topicName": "Thể thao (Sports)"
  },
  {
    "word": "Wrestling",
    "pos": "n",
    "ipa": "/ˈrɛs.lɪŋ/",
    "meaningVi": "Đấuvật",
    "topicId": 20,
    "topicName": "Thể thao (Sports)"
  },
  {
    "word": "Bowling",
    "pos": "n",
    "ipa": "/ˈboʊ.lɪŋ/",
    "meaningVi": "Bónggỗ",
    "topicId": 20,
    "topicName": "Thể thao (Sports)"
  },
  {
    "word": "Lacrosse",
    "pos": "n",
    "ipa": "/ləˈkrɒs/",
    "meaningVi": "Bóngvợt",
    "topicId": 20,
    "topicName": "Thể thao (Sports)"
  },
  {
    "word": "Hockey",
    "pos": "n",
    "ipa": "/ˈhɒk.i/",
    "meaningVi": "Khúccôncầu",
    "topicId": 20,
    "topicName": "Thể thao (Sports)"
  },
  {
    "word": "Referee",
    "pos": "n",
    "ipa": "/ˌrɛf.əˈriː/",
    "meaningVi": "Trọngtài",
    "topicId": 20,
    "topicName": "Thể thao (Sports)"
  },
  {
    "word": "Dart",
    "pos": "n",
    "ipa": "/dɑːrt/",
    "meaningVi": "Némphitiêu",
    "topicId": 20,
    "topicName": "Thể thao (Sports)"
  },
  {
    "word": "SEAGames",
    "pos": "n. phr",
    "ipa": "/ˈsiː ˌɡeɪmz/",
    "meaningVi": "ĐạihộiThểthao",
    "topicId": 20,
    "topicName": "Thể thao (Sports)"
  },
  {
    "word": "Host",
    "pos": "v",
    "ipa": "/hoʊst/",
    "meaningVi": "Đăngcai,tổchức",
    "topicId": 20,
    "topicName": "Thể thao (Sports)"
  },
  {
    "word": "Wushu",
    "pos": "n",
    "ipa": "/ˈwuː.ʃuː/",
    "meaningVi": "(môn)võwushu",
    "topicId": 20,
    "topicName": "Thể thao (Sports)"
  },
  {
    "word": "Sportsmanship",
    "pos": "n",
    "ipa": "/ˈspɔːrts.mənˌʃɪp/",
    "meaningVi": "Tinhthầnthểthao",
    "topicId": 20,
    "topicName": "Thể thao (Sports)"
  },
  {
    "word": "Captain",
    "pos": "n",
    "ipa": "/ˈkæp.tən/",
    "meaningVi": "Độitrưởng",
    "topicId": 20,
    "topicName": "Thể thao (Sports)"
  },
  {
    "word": "Cross-country",
    "pos": "n",
    "ipa": "/ˌkrɒsˈkʌn.tri/",
    "meaningVi": "Chạyviệtdã",
    "topicId": 20,
    "topicName": "Thể thao (Sports)"
  },
  {
    "word": "Village",
    "pos": "n",
    "ipa": "/ˈvɪl.ɪdʒ/",
    "meaningVi": "Ngôilàng",
    "topicId": 21,
    "topicName": "Quê hương & Nông thôn (Hometown & Countryside)"
  },
  {
    "word": "Countryside",
    "pos": "n",
    "ipa": "/ˈkʌn.tri.saɪd/",
    "meaningVi": "Nôngthôn",
    "topicId": 21,
    "topicName": "Quê hương & Nông thôn (Hometown & Countryside)"
  },
  {
    "word": "Cottage",
    "pos": "n",
    "ipa": "/ˈkɒt.ɪdʒ/",
    "meaningVi": "Nhàtranh",
    "topicId": 21,
    "topicName": "Quê hương & Nông thôn (Hometown & Countryside)"
  },
  {
    "word": "Winding",
    "pos": "adj",
    "ipa": "/ˈwaɪn.dɪŋ/",
    "meaningVi": "Quanhco,uốnkhúc",
    "topicId": 21,
    "topicName": "Quê hương & Nông thôn (Hometown & Countryside)"
  },
  {
    "word": "Well",
    "pos": "n",
    "ipa": "/wel/",
    "meaningVi": "Giếng",
    "topicId": 21,
    "topicName": "Quê hương & Nông thôn (Hometown & Countryside)"
  },
  {
    "word": "Buffalo",
    "pos": "n",
    "ipa": "/ˈbʌf.ə.ləʊ/",
    "meaningVi": "Contrâu",
    "topicId": 21,
    "topicName": "Quê hương & Nông thôn (Hometown & Countryside)"
  },
  {
    "word": "Field",
    "pos": "n",
    "ipa": "/ffːld/",
    "meaningVi": "Cánhđồng",
    "topicId": 21,
    "topicName": "Quê hương & Nông thôn (Hometown & Countryside)"
  },
  {
    "word": "Canal",
    "pos": "n",
    "ipa": "/kəˈnæl/",
    "meaningVi": "Kênh",
    "topicId": 21,
    "topicName": "Quê hương & Nông thôn (Hometown & Countryside)"
  },
  {
    "word": "River",
    "pos": "n",
    "ipa": "/ˈrɪv.ər/",
    "meaningVi": "Sông",
    "topicId": 21,
    "topicName": "Quê hương & Nông thôn (Hometown & Countryside)"
  },
  {
    "word": "Pond",
    "pos": "n",
    "ipa": "/pɒnd/",
    "meaningVi": "Ao",
    "topicId": 21,
    "topicName": "Quê hương & Nông thôn (Hometown & Countryside)"
  },
  {
    "word": "Folkmusic",
    "pos": "n. phr",
    "ipa": "/ˈfoʊkˌmju.zɪk/",
    "meaningVi": "Nhạcdângian",
    "topicId": 21,
    "topicName": "Quê hương & Nông thôn (Hometown & Countryside)"
  },
  {
    "word": "Farm",
    "pos": "n",
    "ipa": "/fɑːm/",
    "meaningVi": "Trangtrại",
    "topicId": 21,
    "topicName": "Quê hương & Nông thôn (Hometown & Countryside)"
  },
  {
    "word": "Plow",
    "pos": "v",
    "ipa": "/plaʊ/",
    "meaningVi": "Cày",
    "topicId": 21,
    "topicName": "Quê hương & Nông thôn (Hometown & Countryside)"
  },
  {
    "word": "Agriculture",
    "pos": "n",
    "ipa": "/ˈæɡ.rɪ.kʌl.tʃər/",
    "meaningVi": "Nôngnghiệp",
    "topicId": 21,
    "topicName": "Quê hương & Nông thôn (Hometown & Countryside)"
  },
  {
    "word": "Boat",
    "pos": "n",
    "ipa": "/bəʊt/",
    "meaningVi": "Thuyền",
    "topicId": 21,
    "topicName": "Quê hương & Nông thôn (Hometown & Countryside)"
  },
  {
    "word": "Peaceful",
    "pos": "adj",
    "ipa": "/ˈpiːs.fəl/",
    "meaningVi": "Yênbình",
    "topicId": 21,
    "topicName": "Quê hương & Nông thôn (Hometown & Countryside)"
  },
  {
    "word": "Bay",
    "pos": "n",
    "ipa": "/beɪ/",
    "meaningVi": "Vịnh",
    "topicId": 21,
    "topicName": "Quê hương & Nông thôn (Hometown & Countryside)"
  },
  {
    "word": "Hill",
    "pos": "n",
    "ipa": "/hɪl/",
    "meaningVi": "Ngọnđồi",
    "topicId": 21,
    "topicName": "Quê hương & Nông thôn (Hometown & Countryside)"
  },
  {
    "word": "Forest",
    "pos": "n",
    "ipa": "/ˈfɒr.ɪst/",
    "meaningVi": "Rừng",
    "topicId": 21,
    "topicName": "Quê hương & Nông thôn (Hometown & Countryside)"
  },
  {
    "word": "Mountain",
    "pos": "n",
    "ipa": "/ˈmaʊn.tɪn/",
    "meaningVi": "Núi",
    "topicId": 21,
    "topicName": "Quê hương & Nông thôn (Hometown & Countryside)"
  },
  {
    "word": "Port",
    "pos": "n",
    "ipa": "/pɔːt/",
    "meaningVi": "Bếncảng",
    "topicId": 21,
    "topicName": "Quê hương & Nông thôn (Hometown & Countryside)"
  },
  {
    "word": "Lake",
    "pos": "n",
    "ipa": "/leɪk/",
    "meaningVi": "Hồ",
    "topicId": 21,
    "topicName": "Quê hương & Nông thôn (Hometown & Countryside)"
  },
  {
    "word": "Sea",
    "pos": "n",
    "ipa": "/siː/",
    "meaningVi": "Biển",
    "topicId": 21,
    "topicName": "Quê hương & Nông thôn (Hometown & Countryside)"
  },
  {
    "word": "Sand",
    "pos": "n",
    "ipa": "/sænd/",
    "meaningVi": "Cát",
    "topicId": 21,
    "topicName": "Quê hương & Nông thôn (Hometown & Countryside)"
  },
  {
    "word": "Valley",
    "pos": "n",
    "ipa": "/ˈvæl.i/",
    "meaningVi": "Thunglũng",
    "topicId": 21,
    "topicName": "Quê hương & Nông thôn (Hometown & Countryside)"
  },
  {
    "word": "Waterfall",
    "pos": "n",
    "ipa": "/ˈwɔː.tə.fɔːl/",
    "meaningVi": "Thácnước",
    "topicId": 21,
    "topicName": "Quê hương & Nông thôn (Hometown & Countryside)"
  },
  {
    "word": "Barn",
    "pos": "n",
    "ipa": "/bɑːn/",
    "meaningVi": "Khothóc",
    "topicId": 21,
    "topicName": "Quê hương & Nông thôn (Hometown & Countryside)"
  },
  {
    "word": "Harvest",
    "pos": "n",
    "ipa": "/ˈhɑː.vɪst/",
    "meaningVi": "Vụgặt",
    "topicId": 21,
    "topicName": "Quê hương & Nông thôn (Hometown & Countryside)"
  },
  {
    "word": "Cattle",
    "pos": "n",
    "ipa": "/ˈkæt.əl/",
    "meaningVi": "Giasúc",
    "topicId": 21,
    "topicName": "Quê hương & Nông thôn (Hometown & Countryside)"
  },
  {
    "word": "Rural",
    "pos": "adj",
    "ipa": "/ˈrʊə.rəl/",
    "meaningVi": "(thuộc)nôngthôn",
    "topicId": 21,
    "topicName": "Quê hương & Nông thôn (Hometown & Countryside)"
  },
  {
    "word": "Cliff",
    "pos": "n",
    "ipa": "/klɪf/",
    "meaningVi": "Váchđá",
    "topicId": 21,
    "topicName": "Quê hương & Nông thôn (Hometown & Countryside)"
  },
  {
    "word": "Landscape",
    "pos": "n",
    "ipa": "/ˈlænd.skeɪp/",
    "meaningVi": "Phongcảnh",
    "topicId": 21,
    "topicName": "Quê hương & Nông thôn (Hometown & Countryside)"
  },
  {
    "word": "Terracedhouse",
    "pos": "n. phr",
    "ipa": "/ˈrəʊˌhaʊs/",
    "meaningVi": "Dãynhà",
    "topicId": 21,
    "topicName": "Quê hương & Nông thôn (Hometown & Countryside)"
  },
  {
    "word": "View",
    "pos": "n",
    "ipa": "/vjuː/",
    "meaningVi": "Khungcảnh,quang",
    "topicId": 21,
    "topicName": "Quê hương & Nông thôn (Hometown & Countryside)"
  },
  {
    "word": "Bride",
    "pos": "n",
    "ipa": "/braɪd/",
    "meaningVi": "Côdâu",
    "topicId": 22,
    "topicName": "Đám cưới (Wedding)"
  },
  {
    "word": "Vow",
    "pos": "n",
    "ipa": "/vaʊ/",
    "meaningVi": "Lờithề",
    "topicId": 22,
    "topicName": "Đám cưới (Wedding)"
  },
  {
    "word": "Groomsman",
    "pos": "n",
    "ipa": "/ˈɡruːmz.mən/",
    "meaningVi": "Phùrể",
    "topicId": 22,
    "topicName": "Đám cưới (Wedding)"
  },
  {
    "word": "Groom",
    "pos": "n",
    "ipa": "/ɡruːm/",
    "meaningVi": "Chúrể",
    "topicId": 22,
    "topicName": "Đám cưới (Wedding)"
  },
  {
    "word": "Tuxedo",
    "pos": "n",
    "ipa": "/tʌkˈsiː.dəʊ/",
    "meaningVi": "Áoximôckinh",
    "topicId": 22,
    "topicName": "Đám cưới (Wedding)"
  },
  {
    "word": "Party",
    "pos": "n",
    "ipa": "/ˈpɑː.ti/",
    "meaningVi": "Bữatiệc",
    "topicId": 22,
    "topicName": "Đám cưới (Wedding)"
  },
  {
    "word": "Wedding",
    "pos": "n",
    "ipa": "/ˈwed.ɪŋ/",
    "meaningVi": "Đámcưới",
    "topicId": 22,
    "topicName": "Đám cưới (Wedding)"
  },
  {
    "word": "Weddingcard",
    "pos": "n. phr",
    "ipa": "/ˈwed.ɪŋkɑːd/",
    "meaningVi": "Thiệpmờiđámcưới",
    "topicId": 22,
    "topicName": "Đám cưới (Wedding)"
  },
  {
    "word": "Reception",
    "pos": "n",
    "ipa": "/rɪˈsep.ʃən/",
    "meaningVi": "Tiệcchiêuđãi",
    "topicId": 22,
    "topicName": "Đám cưới (Wedding)"
  },
  {
    "word": "Champagne",
    "pos": "n",
    "ipa": "/ʃæmˈpeɪn/",
    "meaningVi": "Rượusâmpanh",
    "topicId": 22,
    "topicName": "Đám cưới (Wedding)"
  },
  {
    "word": "Bouquet",
    "pos": "n",
    "ipa": "/buˈkeɪ/",
    "meaningVi": "Bóhoa",
    "topicId": 22,
    "topicName": "Đám cưới (Wedding)"
  },
  {
    "word": "Married",
    "pos": "adj",
    "ipa": "/ˈmær.id/",
    "meaningVi": "Đãkếthôn",
    "topicId": 22,
    "topicName": "Đám cưới (Wedding)"
  },
  {
    "word": "Newlywed",
    "pos": "n",
    "ipa": "/ˈnjuː.li.wed/",
    "meaningVi": "Ngườimớicưới",
    "topicId": 22,
    "topicName": "Đám cưới (Wedding)"
  },
  {
    "word": "Cake",
    "pos": "n",
    "ipa": "/keɪk/",
    "meaningVi": "Bánhngọt",
    "topicId": 22,
    "topicName": "Đám cưới (Wedding)"
  },
  {
    "word": "Ring",
    "pos": "n",
    "ipa": "/rɪŋ/",
    "meaningVi": "Nhẫn",
    "topicId": 22,
    "topicName": "Đám cưới (Wedding)"
  },
  {
    "word": "Emblem",
    "pos": "n",
    "ipa": "/ˈem.bləm/",
    "meaningVi": "Biểutượng",
    "topicId": 22,
    "topicName": "Đám cưới (Wedding)"
  },
  {
    "word": "Band",
    "pos": "n",
    "ipa": "/bænd/",
    "meaningVi": "Bannhạc",
    "topicId": 22,
    "topicName": "Đám cưới (Wedding)"
  },
  {
    "word": "Congratulation",
    "pos": "n",
    "ipa": "/kənˌɡrætʃ.əˈleɪ.ʃən/",
    "meaningVi": "Lờichúcmừng",
    "topicId": 22,
    "topicName": "Đám cưới (Wedding)"
  },
  {
    "word": "Jewelry",
    "pos": "n",
    "ipa": "/ˈdʒuː.əl.ri/",
    "meaningVi": "Trangsức",
    "topicId": 22,
    "topicName": "Đám cưới (Wedding)"
  },
  {
    "word": "Wine",
    "pos": "n",
    "ipa": "/waɪn/",
    "meaningVi": "Rượuvang",
    "topicId": 22,
    "topicName": "Đám cưới (Wedding)"
  },
  {
    "word": "Dowry",
    "pos": "n",
    "ipa": "/ˈdaʊ.ri/",
    "meaningVi": "Củahồimôn",
    "topicId": 22,
    "topicName": "Đám cưới (Wedding)"
  },
  {
    "word": "Honeymoon",
    "pos": "n",
    "ipa": "/ˈhʌn.i.muːn/",
    "meaningVi": "Tuầntrăngmật",
    "topicId": 22,
    "topicName": "Đám cưới (Wedding)"
  },
  {
    "word": "Anniversary",
    "pos": "n",
    "ipa": "/ˌæn.ɪˈvɜː.sər.i/",
    "meaningVi": "Ngàykỷniệm",
    "topicId": 22,
    "topicName": "Đám cưới (Wedding)"
  },
  {
    "word": "Anh",
    "pos": "noun",
    "ipa": "/emrểˌanh/",
    "meaningVi": "em",
    "topicId": 22,
    "topicName": "Đám cưới (Wedding)"
  },
  {
    "word": "Brother-in-law",
    "pos": "n",
    "ipa": "/ˈbrʌð.ə.rɪn.lɔː/",
    "meaningVi": "",
    "topicId": 22,
    "topicName": "Đám cưới (Wedding)"
  },
  {
    "word": "Chị",
    "pos": "noun",
    "ipa": "/emdâuˌchị/",
    "meaningVi": "em",
    "topicId": 22,
    "topicName": "Đám cưới (Wedding)"
  },
  {
    "word": "Sister-in-law",
    "pos": "n",
    "ipa": "/ˈsɪs.tə.rɪn.lɔː/",
    "meaningVi": "",
    "topicId": 22,
    "topicName": "Đám cưới (Wedding)"
  },
  {
    "word": "Engaged",
    "pos": "v",
    "ipa": "/ɪnˈɡeɪdʒd/",
    "meaningVi": "Đãđínhước,hứa",
    "topicId": 22,
    "topicName": "Đám cưới (Wedding)"
  },
  {
    "word": "Couple",
    "pos": "n",
    "ipa": "/ˈkʌp.əl/",
    "meaningVi": "Cặpđôi,đôivợ",
    "topicId": 22,
    "topicName": "Đám cưới (Wedding)"
  },
  {
    "word": "Husband",
    "pos": "n",
    "ipa": "/ˈhʌz.bənd/",
    "meaningVi": "Chồng",
    "topicId": 22,
    "topicName": "Đám cưới (Wedding)"
  },
  {
    "word": "Wife",
    "pos": "n",
    "ipa": "/waɪf/",
    "meaningVi": "Vợ",
    "topicId": 22,
    "topicName": "Đám cưới (Wedding)"
  },
  {
    "word": "Ceremony",
    "pos": "n",
    "ipa": "/ˈser.ɪ.mə.ni/",
    "meaningVi": "Nghilễ,nghithức",
    "topicId": 22,
    "topicName": "Đám cưới (Wedding)"
  },
  {
    "word": "Betroth",
    "pos": "v",
    "ipa": "/bɪˈtrəʊð/",
    "meaningVi": "Hứahôn,đínhhôn",
    "topicId": 22,
    "topicName": "Đám cưới (Wedding)"
  },
  {
    "word": "Switchoff",
    "pos": "phrasalv",
    "ipa": "/swɪtʃɒf/",
    "meaningVi": "Tắt",
    "topicId": 23,
    "topicName": "Sân bay (Airport & Aviation)"
  },
  {
    "word": "Lavatory",
    "pos": "n",
    "ipa": "/ˈlæv.ə.tər.i/",
    "meaningVi": "Phòngvệsinh",
    "topicId": 23,
    "topicName": "Sân bay (Airport & Aviation)"
  },
  {
    "word": "Blanket",
    "pos": "n",
    "ipa": "/ˈblæŋ.kɪt/",
    "meaningVi": "Tấmchăn,mền",
    "topicId": 23,
    "topicName": "Sân bay (Airport & Aviation)"
  },
  {
    "word": "Oxygenmask",
    "pos": "n. phr",
    "ipa": "/ˈɒk.sɪ.dʒənˌmɑːsk/",
    "meaningVi": "Mặtnạthởoxy",
    "topicId": 23,
    "topicName": "Sân bay (Airport & Aviation)"
  },
  {
    "word": "Serve",
    "pos": "v",
    "ipa": "/sɜːv/",
    "meaningVi": "Phụcvụ",
    "topicId": 23,
    "topicName": "Sân bay (Airport & Aviation)"
  },
  {
    "word": "Windowseat",
    "pos": "n. phr",
    "ipa": "/ˈwɪn.dəʊˌsiːt/",
    "meaningVi": "Ghếcạnhcửasổ",
    "topicId": 23,
    "topicName": "Sân bay (Airport & Aviation)"
  },
  {
    "word": "Airsick",
    "pos": "adj",
    "ipa": "/ˈeə.sɪk/",
    "meaningVi": "Saymáybay",
    "topicId": 23,
    "topicName": "Sân bay (Airport & Aviation)"
  },
  {
    "word": "Cockpit",
    "pos": "n",
    "ipa": "/ˈkɒk.pɪt/",
    "meaningVi": "Buồnglái",
    "topicId": 23,
    "topicName": "Sân bay (Airport & Aviation)"
  },
  {
    "word": "Fasten",
    "pos": "v",
    "ipa": "/ˈfɑː.sən/",
    "meaningVi": "Thắt,buộc",
    "topicId": 23,
    "topicName": "Sân bay (Airport & Aviation)"
  },
  {
    "word": "Takeoff",
    "pos": "n. phr",
    "ipa": "/teɪkɒf/",
    "meaningVi": "Cấtcánh",
    "topicId": 23,
    "topicName": "Sân bay (Airport & Aviation)"
  },
  {
    "word": "Co-pilot",
    "pos": "n",
    "ipa": "/ˈkəʊˌpaɪ.lət/",
    "meaningVi": "Phicôngphụ",
    "topicId": 23,
    "topicName": "Sân bay (Airport & Aviation)"
  },
  {
    "word": "Assist",
    "pos": "v",
    "ipa": "/əˈsɪst/",
    "meaningVi": "Hỗtrợ,giúpđỡ",
    "topicId": 23,
    "topicName": "Sân bay (Airport & Aviation)"
  },
  {
    "word": "First-class",
    "pos": "adj",
    "ipa": "/ˌfɜːst ˈklɑːs/",
    "meaningVi": "(ghế)hạngnhất",
    "topicId": 23,
    "topicName": "Sân bay (Airport & Aviation)"
  },
  {
    "word": "Conffscate",
    "pos": "v",
    "ipa": "/ˈkɒn.fɪ.skeɪt/",
    "meaningVi": "Tịchthu",
    "topicId": 23,
    "topicName": "Sân bay (Airport & Aviation)"
  },
  {
    "word": "Turnon",
    "pos": "phrasalv",
    "ipa": "/tɜːn ɒn/",
    "meaningVi": "Bật,mở",
    "topicId": 23,
    "topicName": "Sân bay (Airport & Aviation)"
  },
  {
    "word": "Fever",
    "pos": "n",
    "ipa": "/ˈffːvɚ/",
    "meaningVi": "Sốt",
    "topicId": 24,
    "topicName": "Sức khỏe (Health & Wellness)"
  },
  {
    "word": "Cough",
    "pos": "n",
    "ipa": "/kɔf/",
    "meaningVi": "Ho",
    "topicId": 24,
    "topicName": "Sức khỏe (Health & Wellness)"
  },
  {
    "word": "Hurt",
    "pos": "v",
    "ipa": "/hɜːt/",
    "meaningVi": "Đau",
    "topicId": 24,
    "topicName": "Sức khỏe (Health & Wellness)"
  },
  {
    "word": "Swollen",
    "pos": "adj",
    "ipa": "/ˈswoʊlən/",
    "meaningVi": "Bịsưng",
    "topicId": 24,
    "topicName": "Sức khỏe (Health & Wellness)"
  },
  {
    "word": "Pus",
    "pos": "n",
    "ipa": "/pʌs/",
    "meaningVi": "Mủ",
    "topicId": 24,
    "topicName": "Sức khỏe (Health & Wellness)"
  },
  {
    "word": "Graze",
    "pos": "v",
    "ipa": "/Greiz/",
    "meaningVi": "Trầyxước(da)",
    "topicId": 24,
    "topicName": "Sức khỏe (Health & Wellness)"
  },
  {
    "word": "Headache",
    "pos": "n",
    "ipa": "/ˈhɛdeɪk/",
    "meaningVi": "Đauđầu",
    "topicId": 24,
    "topicName": "Sức khỏe (Health & Wellness)"
  },
  {
    "word": "Insomnia",
    "pos": "n",
    "ipa": "/ɪnˈsɑːmniə/",
    "meaningVi": "Chứngmấtngủ",
    "topicId": 24,
    "topicName": "Sức khỏe (Health & Wellness)"
  },
  {
    "word": "Rash",
    "pos": "n",
    "ipa": "/ræʃ/",
    "meaningVi": "Phátban",
    "topicId": 24,
    "topicName": "Sức khỏe (Health & Wellness)"
  },
  {
    "word": "Blackeye",
    "pos": "n. phr",
    "ipa": "/blækaɪ/",
    "meaningVi": "Thâmmắt",
    "topicId": 24,
    "topicName": "Sức khỏe (Health & Wellness)"
  },
  {
    "word": "Bruise",
    "pos": "n",
    "ipa": "/bruːz/",
    "meaningVi": "Vếtthâm",
    "topicId": 24,
    "topicName": "Sức khỏe (Health & Wellness)"
  },
  {
    "word": "Constipation",
    "pos": "n",
    "ipa": "/ˌkɑːnstɪˈpeɪʃn/",
    "meaningVi": "Táobón",
    "topicId": 24,
    "topicName": "Sức khỏe (Health & Wellness)"
  },
  {
    "word": "Diarrhea",
    "pos": "n",
    "ipa": "/ˌdaɪəˈriːə/",
    "meaningVi": "Tiêuchảy",
    "topicId": 24,
    "topicName": "Sức khỏe (Health & Wellness)"
  },
  {
    "word": "Soreeyes",
    "pos": "n. phr",
    "ipa": "/’so:r ais/",
    "meaningVi": "Đaumắt",
    "topicId": 24,
    "topicName": "Sức khỏe (Health & Wellness)"
  },
  {
    "word": "Runnynose",
    "pos": "n. phr",
    "ipa": "/rʌniɳnəʊz/",
    "meaningVi": "Sổmũi",
    "topicId": 24,
    "topicName": "Sức khỏe (Health & Wellness)"
  },
  {
    "word": "Sniffle",
    "pos": "v",
    "ipa": "/sniflz/",
    "meaningVi": "Sổmũi",
    "topicId": 24,
    "topicName": "Sức khỏe (Health & Wellness)"
  },
  {
    "word": "Sneeze",
    "pos": "v",
    "ipa": "/sni:z/",
    "meaningVi": "Hắthơi",
    "topicId": 24,
    "topicName": "Sức khỏe (Health & Wellness)"
  },
  {
    "word": "Badbreath",
    "pos": "n. phr",
    "ipa": "/bædbreθ/",
    "meaningVi": "Hôimiệng",
    "topicId": 24,
    "topicName": "Sức khỏe (Health & Wellness)"
  },
  {
    "word": "Earache",
    "pos": "n",
    "ipa": "/’iəreik/",
    "meaningVi": "Đautai",
    "topicId": 24,
    "topicName": "Sức khỏe (Health & Wellness)"
  },
  {
    "word": "Nausea",
    "pos": "n",
    "ipa": "/’nɔ:sjə/",
    "meaningVi": "Chứngbuồnnôn",
    "topicId": 24,
    "topicName": "Sức khỏe (Health & Wellness)"
  },
  {
    "word": "Eatingdisorder",
    "pos": "n. phr",
    "ipa": "/ˈiːtɪŋ dɪsˈɔːrdər/",
    "meaningVi": "Rốiloạnănuống",
    "topicId": 24,
    "topicName": "Sức khỏe (Health & Wellness)"
  },
  {
    "word": "Asthma",
    "pos": "n",
    "ipa": "/ˈæzmə/",
    "meaningVi": "Hen,suyễn",
    "topicId": 24,
    "topicName": "Sức khỏe (Health & Wellness)"
  },
  {
    "word": "Backache",
    "pos": "n",
    "ipa": "/ˈbækeɪkbəʊn/",
    "meaningVi": "Bệnhđaulưng",
    "topicId": 24,
    "topicName": "Sức khỏe (Health & Wellness)"
  },
  {
    "word": "Chill",
    "pos": "n",
    "ipa": "/tʃɪl/",
    "meaningVi": "Cảmlạnh",
    "topicId": 24,
    "topicName": "Sức khỏe (Health & Wellness)"
  },
  {
    "word": "Fevervirus",
    "pos": "n. phr",
    "ipa": "/’ff:və‘vaiərəs/",
    "meaningVi": "Sốtsiêuvi",
    "topicId": 24,
    "topicName": "Sức khỏe (Health & Wellness)"
  },
  {
    "word": "Allergy",
    "pos": "n",
    "ipa": "/ˈælərdʒi/",
    "meaningVi": "Dịứng",
    "topicId": 24,
    "topicName": "Sức khỏe (Health & Wellness)"
  },
  {
    "word": "Paralyse",
    "pos": "v",
    "ipa": "/ˈpærəlaɪz/",
    "meaningVi": "Liệt",
    "topicId": 24,
    "topicName": "Sức khỏe (Health & Wellness)"
  },
  {
    "word": "Infected",
    "pos": "v",
    "ipa": "/in’dʤekʃn/",
    "meaningVi": "Nhiễmtrùng",
    "topicId": 24,
    "topicName": "Sức khỏe (Health & Wellness)"
  },
  {
    "word": "Inflamed",
    "pos": "adj",
    "ipa": "/ɪnˈfleɪmd/",
    "meaningVi": "Bịviêm",
    "topicId": 24,
    "topicName": "Sức khỏe (Health & Wellness)"
  },
  {
    "word": "Gout",
    "pos": "n",
    "ipa": "/ɡaʊt/",
    "meaningVi": "BệnhGút",
    "topicId": 24,
    "topicName": "Sức khỏe (Health & Wellness)"
  },
  {
    "word": "Hepatitis",
    "pos": "n",
    "ipa": "/ˌhepəˈtaɪtɪs/",
    "meaningVi": "Viêmgan",
    "topicId": 24,
    "topicName": "Sức khỏe (Health & Wellness)"
  },
  {
    "word": "Lump",
    "pos": "n",
    "ipa": "/lʌmp/",
    "meaningVi": "Ubướu",
    "topicId": 24,
    "topicName": "Sức khỏe (Health & Wellness)"
  },
  {
    "word": "Insectbite",
    "pos": "n. phr",
    "ipa": "/ˈɪn.sekt baɪt/",
    "meaningVi": "Côntrùngđốt",
    "topicId": 24,
    "topicName": "Sức khỏe (Health & Wellness)"
  },
  {
    "word": "Stomachache",
    "pos": "n",
    "ipa": "/ˈstʌmək-eɪk/",
    "meaningVi": "Đaudạdày",
    "topicId": 24,
    "topicName": "Sức khỏe (Health & Wellness)"
  },
  {
    "word": "Toothache",
    "pos": "n",
    "ipa": "/ˈtuːθ.eɪk/",
    "meaningVi": "Đaurăng",
    "topicId": 24,
    "topicName": "Sức khỏe (Health & Wellness)"
  },
  {
    "word": "Highbloodpressure",
    "pos": "n.phr",
    "ipa": "/haɪblʌdˈpreʃ.əʳ/",
    "meaningVi": "Caohuyếtáp",
    "topicId": 24,
    "topicName": "Sức khỏe (Health & Wellness)"
  },
  {
    "word": "Sorethroat",
    "pos": "n. phr",
    "ipa": "/sɔːʳ θrəʊt/",
    "meaningVi": "Viêmhọng",
    "topicId": 24,
    "topicName": "Sức khỏe (Health & Wellness)"
  },
  {
    "word": "Sprain",
    "pos": "n",
    "ipa": "/spreɪn/",
    "meaningVi": "Bonggân",
    "topicId": 24,
    "topicName": "Sức khỏe (Health & Wellness)"
  },
  {
    "word": "Burn",
    "pos": "n",
    "ipa": "/bɜːn/",
    "meaningVi": "Bỏng",
    "topicId": 24,
    "topicName": "Sức khỏe (Health & Wellness)"
  },
  {
    "word": "Malaria",
    "pos": "n",
    "ipa": "/məˈleriə/",
    "meaningVi": "Sốtrét",
    "topicId": 24,
    "topicName": "Sức khỏe (Health & Wellness)"
  },
  {
    "word": "Scabies",
    "pos": "n",
    "ipa": "/ˈskeɪbiːz/",
    "meaningVi": "Bệnhghẻ",
    "topicId": 24,
    "topicName": "Sức khỏe (Health & Wellness)"
  },
  {
    "word": "Smallpox",
    "pos": "n",
    "ipa": "/ˈsmɔːlpɑːks/",
    "meaningVi": "Bệnhđậumùa",
    "topicId": 24,
    "topicName": "Sức khỏe (Health & Wellness)"
  },
  {
    "word": "Heartattack",
    "pos": "n. phr",
    "ipa": "/hɑːrt əˈtæk/",
    "meaningVi": "Nhồimáucơtim",
    "topicId": 24,
    "topicName": "Sức khỏe (Health & Wellness)"
  },
  {
    "word": "Tuberculosis",
    "pos": "n",
    "ipa": "/tuːˌbɜːrkjəˈloʊsɪs/",
    "meaningVi": "Bệnhlao",
    "topicId": 24,
    "topicName": "Sức khỏe (Health & Wellness)"
  },
  {
    "word": "Diabetes",
    "pos": "n",
    "ipa": "/ˌdaiə’bi:tiz/",
    "meaningVi": "Bệnhtiểuđường",
    "topicId": 24,
    "topicName": "Sức khỏe (Health & Wellness)"
  },
  {
    "word": "Cancer",
    "pos": "n",
    "ipa": "/ˈkænsər/",
    "meaningVi": "Bệnhungthư",
    "topicId": 24,
    "topicName": "Sức khỏe (Health & Wellness)"
  },
  {
    "word": "Pneumonia",
    "pos": "n",
    "ipa": "/nuːˈmoʊniə/",
    "meaningVi": "Viêmphổi",
    "topicId": 24,
    "topicName": "Sức khỏe (Health & Wellness)"
  },
  {
    "word": "Chickenpox",
    "pos": "n. phr",
    "ipa": "/ˈtʃɪkɪn pɑːks/",
    "meaningVi": "Bệnhthủyđậu",
    "topicId": 24,
    "topicName": "Sức khỏe (Health & Wellness)"
  },
  {
    "word": "Depression",
    "pos": "n",
    "ipa": "/dɪˈpreʃn/",
    "meaningVi": "Trầmcảm",
    "topicId": 24,
    "topicName": "Sức khỏe (Health & Wellness)"
  },
  {
    "word": "Lowbloodpressure",
    "pos": "n.phr",
    "ipa": "/loʊblʌdˈpreʃər/",
    "meaningVi": "Huyếtápthấp",
    "topicId": 24,
    "topicName": "Sức khỏe (Health & Wellness)"
  },
  {
    "word": "Hypertension",
    "pos": "n",
    "ipa": "/ˌhaɪ.pəˈten.ʃən/",
    "meaningVi": "Huyếtápcao",
    "topicId": 24,
    "topicName": "Sức khỏe (Health & Wellness)"
  },
  {
    "word": "Measles",
    "pos": "n",
    "ipa": "/ˈmiːzlz/",
    "meaningVi": "Bệnhsởi",
    "topicId": 24,
    "topicName": "Sức khỏe (Health & Wellness)"
  },
  {
    "word": "Migraine",
    "pos": "n",
    "ipa": "/ˈmaɪɡreɪn/",
    "meaningVi": "Bệnhđaunửađầu",
    "topicId": 24,
    "topicName": "Sức khỏe (Health & Wellness)"
  },
  {
    "word": "Mumps",
    "pos": "n",
    "ipa": "/mʌmps/",
    "meaningVi": "Bệnhquaibị",
    "topicId": 24,
    "topicName": "Sức khỏe (Health & Wellness)"
  },
  {
    "word": "Rheumatism",
    "pos": "n",
    "ipa": "/ˈruːmətɪzəm/",
    "meaningVi": "Bệnhthấpkhớp",
    "topicId": 24,
    "topicName": "Sức khỏe (Health & Wellness)"
  },
  {
    "word": "Tomato",
    "pos": "n",
    "ipa": "/təˈmɑːtəʊ/",
    "meaningVi": "Càchua",
    "topicId": 25,
    "topicName": "Rau, củ, quả (Vegetables & Produce)"
  },
  {
    "word": "Spinach",
    "pos": "n",
    "ipa": "/ˈspɪnɪtʃ/",
    "meaningVi": "Rauchânvịt",
    "topicId": 25,
    "topicName": "Rau, củ, quả (Vegetables & Produce)"
  },
  {
    "word": "Water Spinach",
    "pos": "n. phr",
    "ipa": "/ˈwɔːtə(r)ˈspɪnɪtʃ/",
    "meaningVi": "RauMuống",
    "topicId": 25,
    "topicName": "Rau, củ, quả (Vegetables & Produce)"
  },
  {
    "word": "Thai Basil",
    "pos": "n. phr",
    "ipa": "/taɪˈbæz.əl/",
    "meaningVi": "HúngQuế",
    "topicId": 25,
    "topicName": "Rau, củ, quả (Vegetables & Produce)"
  },
  {
    "word": "Eggplant",
    "pos": "n",
    "ipa": "/ˈeɡplɑːnt/",
    "meaningVi": "Càtím",
    "topicId": 25,
    "topicName": "Rau, củ, quả (Vegetables & Produce)"
  },
  {
    "word": "Beet",
    "pos": "n",
    "ipa": "/biːt/",
    "meaningVi": "Củcảiđường",
    "topicId": 25,
    "topicName": "Rau, củ, quả (Vegetables & Produce)"
  },
  {
    "word": "Pepper",
    "pos": "n",
    "ipa": "/ˈpepə(r)/",
    "meaningVi": "Ớt",
    "topicId": 25,
    "topicName": "Rau, củ, quả (Vegetables & Produce)"
  },
  {
    "word": "Cauliflower",
    "pos": "n",
    "ipa": "/’kɔliflauə/",
    "meaningVi": "Súplơ",
    "topicId": 25,
    "topicName": "Rau, củ, quả (Vegetables & Produce)"
  },
  {
    "word": "Cilantro",
    "pos": "n",
    "ipa": "/sɪˈlæn.trəʊ/",
    "meaningVi": "Raumùi",
    "topicId": 25,
    "topicName": "Rau, củ, quả (Vegetables & Produce)"
  },
  {
    "word": "Marrow",
    "pos": "n",
    "ipa": "/ˈmærəʊ/",
    "meaningVi": "Bíngô",
    "topicId": 25,
    "topicName": "Rau, củ, quả (Vegetables & Produce)"
  },
  {
    "word": "Fish Mint",
    "pos": "n. phr",
    "ipa": "/ˈfɪʃ mɪnt/",
    "meaningVi": "DiếpCá",
    "topicId": 25,
    "topicName": "Rau, củ, quả (Vegetables & Produce)"
  },
  {
    "word": "Rice Paddy",
    "pos": "n. phr",
    "ipa": "/ˈraɪs ˌpæd.i/",
    "meaningVi": "Ngòôm",
    "topicId": 25,
    "topicName": "Rau, củ, quả (Vegetables & Produce)"
  },
  {
    "word": "Batata",
    "pos": "n",
    "ipa": "/bæ’tɑ:tə/",
    "meaningVi": "Khoailang",
    "topicId": 25,
    "topicName": "Rau, củ, quả (Vegetables & Produce)"
  },
  {
    "word": "Asparagus",
    "pos": "n",
    "ipa": "/əˈspærəɡəs/",
    "meaningVi": "Măngtây",
    "topicId": 25,
    "topicName": "Rau, củ, quả (Vegetables & Produce)"
  },
  {
    "word": "Mustard Leaves",
    "pos": "n. phr",
    "ipa": "/ˈmʌstədli:vz/",
    "meaningVi": "Cảibẹxanh",
    "topicId": 25,
    "topicName": "Rau, củ, quả (Vegetables & Produce)"
  },
  {
    "word": "Pumpkinbuds",
    "pos": "n. phr",
    "ipa": "/ˈpʌmp.kɪnbʌdz/",
    "meaningVi": "Bôngbí",
    "topicId": 25,
    "topicName": "Rau, củ, quả (Vegetables & Produce)"
  },
  {
    "word": "Pumpkin",
    "pos": "n",
    "ipa": "/ˈpʌmpkɪn/",
    "meaningVi": "Bíđỏ",
    "topicId": 25,
    "topicName": "Rau, củ, quả (Vegetables & Produce)"
  },
  {
    "word": "Corn",
    "pos": "n",
    "ipa": "/kɔːn/",
    "meaningVi": "Ngô",
    "topicId": 25,
    "topicName": "Rau, củ, quả (Vegetables & Produce)"
  },
  {
    "word": "Pepper-elder",
    "pos": "n. phr",
    "ipa": "/ˈpepəˈeldə(r)/",
    "meaningVi": "RaucàngCua",
    "topicId": 25,
    "topicName": "Rau, củ, quả (Vegetables & Produce)"
  },
  {
    "word": "Onion",
    "pos": "n",
    "ipa": "/’ʌniən/",
    "meaningVi": "Củhành",
    "topicId": 25,
    "topicName": "Rau, củ, quả (Vegetables & Produce)"
  },
  {
    "word": "Cress",
    "pos": "n",
    "ipa": "/kres/",
    "meaningVi": "Raucảixoong",
    "topicId": 25,
    "topicName": "Rau, củ, quả (Vegetables & Produce)"
  },
  {
    "word": "Celery",
    "pos": "n",
    "ipa": "/ˈseləri/",
    "meaningVi": "Cầntây",
    "topicId": 25,
    "topicName": "Rau, củ, quả (Vegetables & Produce)"
  },
  {
    "word": "Potato",
    "pos": "n",
    "ipa": "/pəˈteɪtəʊ/",
    "meaningVi": "Khoaitây",
    "topicId": 25,
    "topicName": "Rau, củ, quả (Vegetables & Produce)"
  },
  {
    "word": "Carrot",
    "pos": "n",
    "ipa": "/ˈkærət/",
    "meaningVi": "Càrốt",
    "topicId": 25,
    "topicName": "Rau, củ, quả (Vegetables & Produce)"
  },
  {
    "word": "Artichoke",
    "pos": "n",
    "ipa": "/’ɑ:tit∫ouk/",
    "meaningVi": "Câyatiso",
    "topicId": 25,
    "topicName": "Rau, củ, quả (Vegetables & Produce)"
  },
  {
    "word": "Beetroot",
    "pos": "n",
    "ipa": "/’bi:tru:t/",
    "meaningVi": "Củdền",
    "topicId": 25,
    "topicName": "Rau, củ, quả (Vegetables & Produce)"
  },
  {
    "word": "Second",
    "pos": "n",
    "ipa": "/ˈsek.ənd/",
    "meaningVi": "Giây",
    "topicId": 26,
    "topicName": "Thời gian (Time)"
  },
  {
    "word": "Minute",
    "pos": "n",
    "ipa": "/ˈmɪn.ɪt/",
    "meaningVi": "Phút",
    "topicId": 26,
    "topicName": "Thời gian (Time)"
  },
  {
    "word": "Hour",
    "pos": "n",
    "ipa": "/aʊr/",
    "meaningVi": "Tiếng",
    "topicId": 26,
    "topicName": "Thời gian (Time)"
  },
  {
    "word": "Week",
    "pos": "n",
    "ipa": "/wiːk/",
    "meaningVi": "Tuần",
    "topicId": 26,
    "topicName": "Thời gian (Time)"
  },
  {
    "word": "Decade",
    "pos": "n",
    "ipa": "/dekˈeɪd/",
    "meaningVi": "Thậpniên",
    "topicId": 26,
    "topicName": "Thời gian (Time)"
  },
  {
    "word": "Century",
    "pos": "n",
    "ipa": "/ˈsen.tʃər.i/",
    "meaningVi": "Thếkỷ",
    "topicId": 26,
    "topicName": "Thời gian (Time)"
  },
  {
    "word": "Weekend",
    "pos": "n",
    "ipa": "/ˈwiːend/",
    "meaningVi": "Cuốituần",
    "topicId": 26,
    "topicName": "Thời gian (Time)"
  },
  {
    "word": "Month",
    "pos": "n",
    "ipa": "/mʌnθ/",
    "meaningVi": "Tháng",
    "topicId": 26,
    "topicName": "Thời gian (Time)"
  },
  {
    "word": "Year",
    "pos": "n",
    "ipa": "/jɪr/",
    "meaningVi": "Năm",
    "topicId": 26,
    "topicName": "Thời gian (Time)"
  },
  {
    "word": "Millennium",
    "pos": "n",
    "ipa": "/mɪˈlen.i.əm/",
    "meaningVi": "Thiênniênkỷ",
    "topicId": 26,
    "topicName": "Thời gian (Time)"
  },
  {
    "word": "Morning",
    "pos": "n",
    "ipa": "/ˈmɔːnɪŋ/",
    "meaningVi": "Buổisáng",
    "topicId": 26,
    "topicName": "Thời gian (Time)"
  },
  {
    "word": "Afternoon",
    "pos": "n",
    "ipa": "/ˌæf.tɚˈnuːn/",
    "meaningVi": "Buổichiều",
    "topicId": 26,
    "topicName": "Thời gian (Time)"
  },
  {
    "word": "Evening",
    "pos": "n",
    "ipa": "/ˈiːnɪŋ/",
    "meaningVi": "Buổitối",
    "topicId": 26,
    "topicName": "Thời gian (Time)"
  },
  {
    "word": "Midnight",
    "pos": "n",
    "ipa": "/ˈmɪd.naɪt/",
    "meaningVi": "Nửađêm",
    "topicId": 26,
    "topicName": "Thời gian (Time)"
  },
  {
    "word": "Dusk",
    "pos": "n",
    "ipa": "/dʌsk/",
    "meaningVi": "Hoànghôn",
    "topicId": 26,
    "topicName": "Thời gian (Time)"
  },
  {
    "word": "Dawn",
    "pos": "n",
    "ipa": "/dɑːn/",
    "meaningVi": "Bìnhminh",
    "topicId": 26,
    "topicName": "Thời gian (Time)"
  },
  {
    "word": "Road",
    "pos": "n",
    "ipa": "/roʊd/",
    "meaningVi": "Đường",
    "topicId": 27,
    "topicName": "Giao thông (Traffic & Transportation)"
  },
  {
    "word": "Traffc",
    "pos": "n",
    "ipa": "/ˈtræfɪk/",
    "meaningVi": "Giaothông",
    "topicId": 27,
    "topicName": "Giao thông (Traffic & Transportation)"
  },
  {
    "word": "Vehicle",
    "pos": "n",
    "ipa": "/ˈviːəkl/",
    "meaningVi": "Phươngtiện",
    "topicId": 27,
    "topicName": "Giao thông (Traffic & Transportation)"
  },
  {
    "word": "Roadside",
    "pos": "n",
    "ipa": "/ˈroʊdsaɪd/",
    "meaningVi": "Lềđường",
    "topicId": 27,
    "topicName": "Giao thông (Traffic & Transportation)"
  },
  {
    "word": "Carhire",
    "pos": "n. phr",
    "ipa": "/kɑːr ˈhaɪər/",
    "meaningVi": "Việcthuêxeôtô",
    "topicId": 27,
    "topicName": "Giao thông (Traffic & Transportation)"
  },
  {
    "word": "Ringroad",
    "pos": "n. phr",
    "ipa": "/rɪŋ roʊd/",
    "meaningVi": "Đườngvànhđai",
    "topicId": 27,
    "topicName": "Giao thông (Traffic & Transportation)"
  },
  {
    "word": "Petrolstation",
    "pos": "n. phr",
    "ipa": "/ˈpetrəlˈsteɪʃn/",
    "meaningVi": "Trạmxăng",
    "topicId": 27,
    "topicName": "Giao thông (Traffic & Transportation)"
  },
  {
    "word": "Kerb",
    "pos": "n",
    "ipa": "/kɜːrb/",
    "meaningVi": "Lềđường",
    "topicId": 27,
    "topicName": "Giao thông (Traffic & Transportation)"
  },
  {
    "word": "Roadsign",
    "pos": "n. phr",
    "ipa": "/roʊdsaɪn/",
    "meaningVi": "Biểnbáogiao",
    "topicId": 27,
    "topicName": "Giao thông (Traffic & Transportation)"
  },
  {
    "word": "Turning",
    "pos": "n",
    "ipa": "/ˈtɜːrnɪŋ/",
    "meaningVi": "Chỗrẽ,ngãrẽ",
    "topicId": 27,
    "topicName": "Giao thông (Traffic & Transportation)"
  },
  {
    "word": "Fork",
    "pos": "n",
    "ipa": "/fɔːrk/",
    "meaningVi": "Ngãba",
    "topicId": 27,
    "topicName": "Giao thông (Traffic & Transportation)"
  },
  {
    "word": "Toll",
    "pos": "n",
    "ipa": "/toʊl/",
    "meaningVi": "Lệphíquađường,",
    "topicId": 27,
    "topicName": "Giao thông (Traffic & Transportation)"
  },
  {
    "word": "Toll road",
    "pos": "n. phr",
    "ipa": "/toʊlroʊd/",
    "meaningVi": "Đườngcóthuphí",
    "topicId": 27,
    "topicName": "Giao thông (Traffic & Transportation)"
  },
  {
    "word": "Motorway",
    "pos": "n",
    "ipa": "/ˈmoʊtərweɪ/",
    "meaningVi": "Xalộ",
    "topicId": 27,
    "topicName": "Giao thông (Traffic & Transportation)"
  },
  {
    "word": "Hardshoulder",
    "pos": "n. phr",
    "ipa": "/hɑːrdˈʃoʊldə/",
    "meaningVi": "Vạtđấtcạnhxalộ",
    "topicId": 27,
    "topicName": "Giao thông (Traffic & Transportation)"
  },
  {
    "word": "Dualcarriageway",
    "pos": "n. phr",
    "ipa": "/duːəl ˈkærɪdʒweɪ/",
    "meaningVi": "Xalộhaichiều",
    "topicId": 27,
    "topicName": "Giao thông (Traffic & Transportation)"
  },
  {
    "word": "One-waystreet",
    "pos": "n. phr",
    "ipa": "/wʌnweɪstriːt/",
    "meaningVi": "Đườngmộtchiều",
    "topicId": 27,
    "topicName": "Giao thông (Traffic & Transportation)"
  },
  {
    "word": "T-junction",
    "pos": "n",
    "ipa": "/tiːˈdʒʌŋkʃn/",
    "meaningVi": "Ngãba",
    "topicId": 27,
    "topicName": "Giao thông (Traffic & Transportation)"
  },
  {
    "word": "Roundabout",
    "pos": "n",
    "ipa": "/ˈraʊndəbaʊt/",
    "meaningVi": "Bùngbinh",
    "topicId": 27,
    "topicName": "Giao thông (Traffic & Transportation)"
  },
  {
    "word": "Accident",
    "pos": "n",
    "ipa": "/ˈæksɪdənt/",
    "meaningVi": "Tainạn",
    "topicId": 27,
    "topicName": "Giao thông (Traffic & Transportation)"
  },
  {
    "word": "Breathalyser",
    "pos": "n",
    "ipa": "/ˈbreθəlaɪzər/",
    "meaningVi": "Thiếtbịkiểmtrađộ",
    "topicId": 27,
    "topicName": "Giao thông (Traffic & Transportation)"
  },
  {
    "word": "Traffcwarden",
    "pos": "n. phr",
    "ipa": "/ˈtræfɪkˈwɔːrdn/",
    "meaningVi": "Nhânviênkiểm",
    "topicId": 27,
    "topicName": "Giao thông (Traffic & Transportation)"
  },
  {
    "word": "Parking-meter",
    "pos": "n",
    "ipa": "/ˈpɑːrkɪŋˈmiːtər/",
    "meaningVi": "Đồnghồđỗxe",
    "topicId": 27,
    "topicName": "Giao thông (Traffic & Transportation)"
  },
  {
    "word": "Carpark",
    "pos": "n. phr",
    "ipa": "/kɑːr pɑːrk/",
    "meaningVi": "Bãiđỗxe",
    "topicId": 27,
    "topicName": "Giao thông (Traffic & Transportation)"
  },
  {
    "word": "Parkingspace",
    "pos": "n. phr",
    "ipa": "/ˈpɑːrkɪŋspeɪs/",
    "meaningVi": "Chỗđỗxe",
    "topicId": 27,
    "topicName": "Giao thông (Traffic & Transportation)"
  },
  {
    "word": "Parkingticket",
    "pos": "n. phr",
    "ipa": "/ˈpɑːrkɪŋˈtɪkɪt/",
    "meaningVi": "Véđỗxe",
    "topicId": 27,
    "topicName": "Giao thông (Traffic & Transportation)"
  },
  {
    "word": "Drivinglicence",
    "pos": "n. phr",
    "ipa": "/ˈdraɪvɪŋˈlaɪsns/",
    "meaningVi": "Bằngláixe",
    "topicId": 27,
    "topicName": "Giao thông (Traffic & Transportation)"
  },
  {
    "word": "Reversegear",
    "pos": "n. phr",
    "ipa": "/rɪˈvɜːrs ɡɪr/",
    "meaningVi": "Sốlùi(xemáy)",
    "topicId": 27,
    "topicName": "Giao thông (Traffic & Transportation)"
  },
  {
    "word": "Learnerdriver",
    "pos": "n. phr",
    "ipa": "/ˈlɜːrnər ˈdraɪvər/",
    "meaningVi": "Ngườihọcláixe",
    "topicId": 27,
    "topicName": "Giao thông (Traffic & Transportation)"
  },
  {
    "word": "Passenger",
    "pos": "n",
    "ipa": "/ˈpæsɪndʒər/",
    "meaningVi": "Hànhkhách",
    "topicId": 27,
    "topicName": "Giao thông (Traffic & Transportation)"
  },
  {
    "word": "Stall",
    "pos": "v",
    "ipa": "/stɔːl/",
    "meaningVi": "Làmchếtmáy",
    "topicId": 27,
    "topicName": "Giao thông (Traffic & Transportation)"
  },
  {
    "word": "Tyrepressure",
    "pos": "n. phr",
    "ipa": "/ˈtaɪər ˈpreʃər/",
    "meaningVi": "Ápsuấtlốpxe",
    "topicId": 27,
    "topicName": "Giao thông (Traffic & Transportation)"
  },
  {
    "word": "Traffclight",
    "pos": "n. phr",
    "ipa": "/ˈtræfɪklaɪt/",
    "meaningVi": "Đèngiaothông",
    "topicId": 27,
    "topicName": "Giao thông (Traffic & Transportation)"
  },
  {
    "word": "Speedlimit",
    "pos": "n. phr",
    "ipa": "/spiːdˈlɪmɪt/",
    "meaningVi": "Giớihạntốcđộ",
    "topicId": 27,
    "topicName": "Giao thông (Traffic & Transportation)"
  },
  {
    "word": "Speedingffne",
    "pos": "n. phr",
    "ipa": "/ˈspiːdɪŋ faɪn/",
    "meaningVi": "Phạttốcđộ",
    "topicId": 27,
    "topicName": "Giao thông (Traffic & Transportation)"
  },
  {
    "word": "Levelcrossing",
    "pos": "n. phr",
    "ipa": "/ˈlevl ˈkrɔːsɪŋ/",
    "meaningVi": "Chỗchắntàu",
    "topicId": 27,
    "topicName": "Giao thông (Traffic & Transportation)"
  },
  {
    "word": "Jumpleads",
    "pos": "n. phr",
    "ipa": "/dʒʌmpliːdz/",
    "meaningVi": "Dâysạcđiện",
    "topicId": 27,
    "topicName": "Giao thông (Traffic & Transportation)"
  },
  {
    "word": "Oil",
    "pos": "n",
    "ipa": "/ɔɪl/",
    "meaningVi": "Dầu",
    "topicId": 27,
    "topicName": "Giao thông (Traffic & Transportation)"
  },
  {
    "word": "Diesel",
    "pos": "n",
    "ipa": "/ˈdiːzl/",
    "meaningVi": "Dầudiesel",
    "topicId": 27,
    "topicName": "Giao thông (Traffic & Transportation)"
  },
  {
    "word": "Petrol",
    "pos": "n",
    "ipa": "/ˈpetrəl/",
    "meaningVi": "Xăng",
    "topicId": 27,
    "topicName": "Giao thông (Traffic & Transportation)"
  },
  {
    "word": "Unleaded",
    "pos": "adj",
    "ipa": "/ˌʌnˈledɪd/",
    "meaningVi": "Khôngchì",
    "topicId": 27,
    "topicName": "Giao thông (Traffic & Transportation)"
  },
  {
    "word": "Petrolpump",
    "pos": "n. phr",
    "ipa": "/ˈpetrəlpʌmp/",
    "meaningVi": "Bơmxăng",
    "topicId": 27,
    "topicName": "Giao thông (Traffic & Transportation)"
  },
  {
    "word": "Driver",
    "pos": "n",
    "ipa": "/ˈdraɪvər/",
    "meaningVi": "Tàixế",
    "topicId": 27,
    "topicName": "Giao thông (Traffic & Transportation)"
  },
  {
    "word": "Drive",
    "pos": "n. phr",
    "ipa": "/draɪv/",
    "meaningVi": "Láixe",
    "topicId": 27,
    "topicName": "Giao thông (Traffic & Transportation)"
  },
  {
    "word": "Changegear",
    "pos": "n. phr",
    "ipa": "/tʃeɪndʒɡɪr/",
    "meaningVi": "Chuyểnsố",
    "topicId": 27,
    "topicName": "Giao thông (Traffic & Transportation)"
  },
  {
    "word": "Jack",
    "pos": "n",
    "ipa": "/dʒæk/",
    "meaningVi": "Đònbẩy,palăng",
    "topicId": 27,
    "topicName": "Giao thông (Traffic & Transportation)"
  },
  {
    "word": "Flattyre",
    "pos": "n. phr",
    "ipa": "/flætˈtaɪər/",
    "meaningVi": "Lốpxìhơi",
    "topicId": 27,
    "topicName": "Giao thông (Traffic & Transportation)"
  },
  {
    "word": "Puncture",
    "pos": "n",
    "ipa": "/ˈpʌŋktʃər/",
    "meaningVi": "Sựthủngxăm",
    "topicId": 27,
    "topicName": "Giao thông (Traffic & Transportation)"
  },
  {
    "word": "Angry",
    "pos": "adj",
    "ipa": "/ˈæŋɡri/",
    "meaningVi": "Tứcgiận",
    "topicId": 28,
    "topicName": "Cảm xúc & Cảm giác (Feelings & Emotions)"
  },
  {
    "word": "Sleepy",
    "pos": "adj",
    "ipa": "/ˈsliːpi/",
    "meaningVi": "Buồnngủ",
    "topicId": 28,
    "topicName": "Cảm xúc & Cảm giác (Feelings & Emotions)"
  },
  {
    "word": "Grateful",
    "pos": "adj",
    "ipa": "/ˈɡreɪtfl/",
    "meaningVi": "Biếtơn",
    "topicId": 28,
    "topicName": "Cảm xúc & Cảm giác (Feelings & Emotions)"
  },
  {
    "word": "Scared",
    "pos": "adj",
    "ipa": "/skeəd/",
    "meaningVi": "-/skerd/ Sợhãi",
    "topicId": 28,
    "topicName": "Cảm xúc & Cảm giác (Feelings & Emotions)"
  },
  {
    "word": "Embarrassed",
    "pos": "adj",
    "ipa": "/ɪmˈbærəst/",
    "meaningVi": "Bốirối,xấuhổ",
    "topicId": 28,
    "topicName": "Cảm xúc & Cảm giác (Feelings & Emotions)"
  },
  {
    "word": "Confused",
    "pos": "adj",
    "ipa": "/kənˈfjuːzd/",
    "meaningVi": "Lúngtúng,bốirối",
    "topicId": 28,
    "topicName": "Cảm xúc & Cảm giác (Feelings & Emotions)"
  },
  {
    "word": "Sad",
    "pos": "adj",
    "ipa": "/sæd/",
    "meaningVi": "Buồnrầu",
    "topicId": 28,
    "topicName": "Cảm xúc & Cảm giác (Feelings & Emotions)"
  },
  {
    "word": "Hungry",
    "pos": "adj",
    "ipa": "/ˈhʌŋɡri/",
    "meaningVi": "Đóibụng",
    "topicId": 28,
    "topicName": "Cảm xúc & Cảm giác (Feelings & Emotions)"
  },
  {
    "word": "Full",
    "pos": "adj",
    "ipa": "/fʊl/",
    "meaningVi": "No",
    "topicId": 28,
    "topicName": "Cảm xúc & Cảm giác (Feelings & Emotions)"
  },
  {
    "word": "Happy",
    "pos": "adj",
    "ipa": "/ˈhæpi/",
    "meaningVi": "Vui, hạnhphúc",
    "topicId": 28,
    "topicName": "Cảm xúc & Cảm giác (Feelings & Emotions)"
  },
  {
    "word": "Jealous",
    "pos": "adj",
    "ipa": "/ˈdʒeləs/",
    "meaningVi": "Ghen,ghentuông",
    "topicId": 28,
    "topicName": "Cảm xúc & Cảm giác (Feelings & Emotions)"
  },
  {
    "word": "Thirsty",
    "pos": "adj",
    "ipa": "/ˈθɜːsti/",
    "meaningVi": "- /ˈθɜːrsti/ Khátnước",
    "topicId": 28,
    "topicName": "Cảm xúc & Cảm giác (Feelings & Emotions)"
  },
  {
    "word": "Tense",
    "pos": "adj",
    "ipa": "/tens/",
    "meaningVi": "Căngthẳng",
    "topicId": 28,
    "topicName": "Cảm xúc & Cảm giác (Feelings & Emotions)"
  },
  {
    "word": "Tired",
    "pos": "adj",
    "ipa": "/ˈtaɪəd/",
    "meaningVi": "-/ˈtaɪərd/ Mệtmỏi",
    "topicId": 28,
    "topicName": "Cảm xúc & Cảm giác (Feelings & Emotions)"
  },
  {
    "word": "Bored",
    "pos": "v",
    "ipa": "/bɔːd/",
    "meaningVi": "-/bɔːrd/ Chánnản",
    "topicId": 28,
    "topicName": "Cảm xúc & Cảm giác (Feelings & Emotions)"
  },
  {
    "word": "Reliable",
    "pos": "adj",
    "ipa": "/rɪˈlaɪəbəl/",
    "meaningVi": "Đángtincậy",
    "topicId": 29,
    "topicName": "Tính cách (Personality traits)"
  },
  {
    "word": "Rude",
    "pos": "adj",
    "ipa": "/ruːd/",
    "meaningVi": "Thôlỗ",
    "topicId": 29,
    "topicName": "Tính cách (Personality traits)"
  },
  {
    "word": "Selffsh",
    "pos": "adj",
    "ipa": "/ˈsɛlfɪʃ/",
    "meaningVi": "Íchkỷ",
    "topicId": 29,
    "topicName": "Tính cách (Personality traits)"
  },
  {
    "word": "Sensitive",
    "pos": "adj",
    "ipa": "/ˈsɛnsɪtɪv/",
    "meaningVi": "Nhạycảm",
    "topicId": 29,
    "topicName": "Tính cách (Personality traits)"
  },
  {
    "word": "Stubborn",
    "pos": "adj",
    "ipa": "/ˈstʌb.ərn/",
    "meaningVi": "Bướngbỉnh",
    "topicId": 29,
    "topicName": "Tính cách (Personality traits)"
  },
  {
    "word": "Patient",
    "pos": "adj",
    "ipa": "/ˈpeɪʃənt/",
    "meaningVi": "Kiênnhẫn",
    "topicId": 29,
    "topicName": "Tính cách (Personality traits)"
  },
  {
    "word": "Humorous",
    "pos": "adj",
    "ipa": "/ˈhjuː.mər.əs/",
    "meaningVi": "Hàihước",
    "topicId": 29,
    "topicName": "Tính cách (Personality traits)"
  },
  {
    "word": "Sincere",
    "pos": "adj",
    "ipa": "/sɪnˈsɪr/",
    "meaningVi": "Chânthành",
    "topicId": 29,
    "topicName": "Tính cách (Personality traits)"
  },
  {
    "word": "Generous",
    "pos": "adj",
    "ipa": "/ˈʤɛnərəs/",
    "meaningVi": "Hàophóng",
    "topicId": 29,
    "topicName": "Tính cách (Personality traits)"
  },
  {
    "word": "Honest",
    "pos": "adj",
    "ipa": "/ˈɒn.ɪst/",
    "meaningVi": "Trungthực",
    "topicId": 29,
    "topicName": "Tính cách (Personality traits)"
  },
  {
    "word": "Kind",
    "pos": "adj",
    "ipa": "/kaɪnd/",
    "meaningVi": "Tửtế,tốtbụng",
    "topicId": 29,
    "topicName": "Tính cách (Personality traits)"
  },
  {
    "word": "Loyal",
    "pos": "adj",
    "ipa": "/lɔɪəl/",
    "meaningVi": "Trungthành",
    "topicId": 29,
    "topicName": "Tính cách (Personality traits)"
  },
  {
    "word": "Modest",
    "pos": "adj",
    "ipa": "/ˈmɒd.ɪst/",
    "meaningVi": "Khiêmtốn",
    "topicId": 29,
    "topicName": "Tính cách (Personality traits)"
  },
  {
    "word": "Nasty",
    "pos": "adj",
    "ipa": "/ˈnæsti/",
    "meaningVi": "Khóchịu",
    "topicId": 29,
    "topicName": "Tính cách (Personality traits)"
  },
  {
    "word": "Shy",
    "pos": "adj",
    "ipa": "/ʃaɪ/",
    "meaningVi": "Nhútnhát",
    "topicId": 29,
    "topicName": "Tính cách (Personality traits)"
  },
  {
    "word": "Sociable",
    "pos": "adj",
    "ipa": "/ˈsoʊʃəbəl/",
    "meaningVi": "Hòađồng",
    "topicId": 29,
    "topicName": "Tính cách (Personality traits)"
  },
  {
    "word": "Reserved",
    "pos": "adj",
    "ipa": "/ˈθɔːt.fəl/",
    "meaningVi": "Rụtrè,dèdặt",
    "topicId": 29,
    "topicName": "Tính cách (Personality traits)"
  },
  {
    "word": "Conffdent",
    "pos": "adj",
    "ipa": "/ˈkɑnfədənt/",
    "meaningVi": "Tựtin",
    "topicId": 29,
    "topicName": "Tính cách (Personality traits)"
  },
  {
    "word": "Pleasant",
    "pos": "adj",
    "ipa": "/ˈplɛzənt/",
    "meaningVi": "Lịchsự,hòanhã",
    "topicId": 29,
    "topicName": "Tính cách (Personality traits)"
  },
  {
    "word": "Clever",
    "pos": "adj",
    "ipa": "/ˈklɛvər/",
    "meaningVi": "Thôngminh",
    "topicId": 29,
    "topicName": "Tính cách (Personality traits)"
  },
  {
    "word": "Thoughtful",
    "pos": "adj",
    "ipa": "/ˈθɔːt.fəl/",
    "meaningVi": "Âncần,chuđáo",
    "topicId": 29,
    "topicName": "Tính cách (Personality traits)"
  },
  {
    "word": "Proud",
    "pos": "adj",
    "ipa": "/praʊd/",
    "meaningVi": "Tựtrọng",
    "topicId": 29,
    "topicName": "Tính cách (Personality traits)"
  },
  {
    "word": "Lazy",
    "pos": "adj",
    "ipa": "/ˈleɪzi/",
    "meaningVi": "Lườibiếng",
    "topicId": 29,
    "topicName": "Tính cách (Personality traits)"
  },
  {
    "word": "Crazy",
    "pos": "adj",
    "ipa": "/ˈkreɪzi/",
    "meaningVi": "Ngungốc",
    "topicId": 29,
    "topicName": "Tính cách (Personality traits)"
  },
  {
    "word": "Silly",
    "pos": "adj",
    "ipa": "/ˈsɪli/",
    "meaningVi": "Ngốcnghếch",
    "topicId": 29,
    "topicName": "Tính cách (Personality traits)"
  },
  {
    "word": "Bossy",
    "pos": "adj",
    "ipa": "/ˈbɒs.i/",
    "meaningVi": "Hốnghách",
    "topicId": 29,
    "topicName": "Tính cách (Personality traits)"
  },
  {
    "word": "Gossip",
    "pos": "n",
    "ipa": "/ˈɡɒs.ɪp/",
    "meaningVi": "Ngườimáchlẻo",
    "topicId": 29,
    "topicName": "Tính cách (Personality traits)"
  },
  {
    "word": "Extrovert",
    "pos": "n",
    "ipa": "/ˈɛk.strə.vɜːt/",
    "meaningVi": "Ngườihướngngoại",
    "topicId": 29,
    "topicName": "Tính cách (Personality traits)"
  },
  {
    "word": "Coward",
    "pos": "n",
    "ipa": "/kaʊərd/",
    "meaningVi": "Ngườinhátgan",
    "topicId": 29,
    "topicName": "Tính cách (Personality traits)"
  },
  {
    "word": "Big-head",
    "pos": "n",
    "ipa": "/ˈbɪɡhɛd/",
    "meaningVi": "Ngườitựcao",
    "topicId": 29,
    "topicName": "Tính cách (Personality traits)"
  },
  {
    "word": "Snob",
    "pos": "n",
    "ipa": "/snɒb/",
    "meaningVi": "Ngườihợmhĩnh",
    "topicId": 29,
    "topicName": "Tính cách (Personality traits)"
  },
  {
    "word": "Liar",
    "pos": "n",
    "ipa": "/laɪər/",
    "meaningVi": "Ngườinóidối",
    "topicId": 29,
    "topicName": "Tính cách (Personality traits)"
  },
  {
    "word": "Ambitious",
    "pos": "adj",
    "ipa": "/æmˈbɪʃəs/",
    "meaningVi": "Thamvọng",
    "topicId": 29,
    "topicName": "Tính cách (Personality traits)"
  },
  {
    "word": "Introvert",
    "pos": "n",
    "ipa": "/ˈɪn.trə.vɜːt/",
    "meaningVi": "Ngườihướngnội",
    "topicId": 29,
    "topicName": "Tính cách (Personality traits)"
  },
  {
    "word": "Stingy",
    "pos": "adj",
    "ipa": "/ˈstɪnʤi/",
    "meaningVi": "Keokiệt",
    "topicId": 29,
    "topicName": "Tính cách (Personality traits)"
  },
  {
    "word": "Arrogant",
    "pos": "adj",
    "ipa": "/ˈær.ə.ɡənt/",
    "meaningVi": "Kiêucăng",
    "topicId": 29,
    "topicName": "Tính cách (Personality traits)"
  },
  {
    "word": "Vain",
    "pos": "adj",
    "ipa": "/veɪn/",
    "meaningVi": "Tựphụ",
    "topicId": 29,
    "topicName": "Tính cách (Personality traits)"
  },
  {
    "word": "Hostile",
    "pos": "adj",
    "ipa": "/ˈhɒs.təl/",
    "meaningVi": "Thùđịch",
    "topicId": 29,
    "topicName": "Tính cách (Personality traits)"
  },
  {
    "word": "Juice",
    "pos": "n",
    "ipa": "/dʒuːs/",
    "meaningVi": "Nướcép",
    "topicId": 30,
    "topicName": "Đồ uống (Beverages & Drinks)"
  },
  {
    "word": "Lemonade",
    "pos": "n",
    "ipa": "/ˌlɛm.əˈneɪd/",
    "meaningVi": "Nướcchanh",
    "topicId": 30,
    "topicName": "Đồ uống (Beverages & Drinks)"
  },
  {
    "word": "Beer",
    "pos": "n",
    "ipa": "/bɪr/",
    "meaningVi": "Bia",
    "topicId": 30,
    "topicName": "Đồ uống (Beverages & Drinks)"
  },
  {
    "word": "Soda",
    "pos": "n",
    "ipa": "/ˈsoʊdə/",
    "meaningVi": "Sô-đa",
    "topicId": 30,
    "topicName": "Đồ uống (Beverages & Drinks)"
  },
  {
    "word": "Cider",
    "pos": "n",
    "ipa": "/ˈsaɪdər/",
    "meaningVi": "Rượutáo",
    "topicId": 30,
    "topicName": "Đồ uống (Beverages & Drinks)"
  },
  {
    "word": "Rum",
    "pos": "n",
    "ipa": "/rʌm/",
    "meaningVi": "Rượurum",
    "topicId": 30,
    "topicName": "Đồ uống (Beverages & Drinks)"
  },
  {
    "word": "Gingerale",
    "pos": "n. phr",
    "ipa": "/ˈʤɪnʤəreɪl/",
    "meaningVi": "Nướcgừng",
    "topicId": 30,
    "topicName": "Đồ uống (Beverages & Drinks)"
  },
  {
    "word": "Champagne",
    "pos": "n",
    "ipa": "/ʃæmˈpeɪn/",
    "meaningVi": "Rượusâmpanh",
    "topicId": 30,
    "topicName": "Đồ uống (Beverages & Drinks)"
  },
  {
    "word": "Bitter",
    "pos": "adj",
    "ipa": "/ˈbɪtər/",
    "meaningVi": "Đắng",
    "topicId": 30,
    "topicName": "Đồ uống (Beverages & Drinks)"
  },
  {
    "word": "Malt",
    "pos": "n",
    "ipa": "/mɔːlt/",
    "meaningVi": "Mạchnha",
    "topicId": 30,
    "topicName": "Đồ uống (Beverages & Drinks)"
  },
  {
    "word": "Barley",
    "pos": "n",
    "ipa": "/ˈbɑːr.li/",
    "meaningVi": "Lúamạch",
    "topicId": 30,
    "topicName": "Đồ uống (Beverages & Drinks)"
  },
  {
    "word": "Distillery",
    "pos": "n",
    "ipa": "/dɪˈstɪləri/",
    "meaningVi": "Nhàmáyrượu",
    "topicId": 30,
    "topicName": "Đồ uống (Beverages & Drinks)"
  },
  {
    "word": "Coffee",
    "pos": "n",
    "ipa": "/ˈkɔː.ff/",
    "meaningVi": "Càphê",
    "topicId": 30,
    "topicName": "Đồ uống (Beverages & Drinks)"
  },
  {
    "word": "Milk",
    "pos": "n",
    "ipa": "/mɪlk/",
    "meaningVi": "Sữa",
    "topicId": 30,
    "topicName": "Đồ uống (Beverages & Drinks)"
  },
  {
    "word": "Tea",
    "pos": "n",
    "ipa": "/tiː/",
    "meaningVi": "Trà",
    "topicId": 30,
    "topicName": "Đồ uống (Beverages & Drinks)"
  },
  {
    "word": "Redwine",
    "pos": "n. phr",
    "ipa": "/rɛdwaɪn/",
    "meaningVi": "Rượuvangđỏ",
    "topicId": 30,
    "topicName": "Đồ uống (Beverages & Drinks)"
  },
  {
    "word": "Non-alcoholic",
    "pos": "adj",
    "ipa": "/ˌnɑːnˌæl.kəˈhɒl.ɪk/",
    "meaningVi": "Khôngcồn",
    "topicId": 30,
    "topicName": "Đồ uống (Beverages & Drinks)"
  },
  {
    "word": "Full-cream",
    "pos": "adj",
    "ipa": "/ˌfʊl ˈkriːm/",
    "meaningVi": "Nguyênkem",
    "topicId": 30,
    "topicName": "Đồ uống (Beverages & Drinks)"
  },
  {
    "word": "Herbal",
    "pos": "adj",
    "ipa": "/ˈhɜːr.bəl/",
    "meaningVi": "(chứa)thảomộc",
    "topicId": 30,
    "topicName": "Đồ uống (Beverages & Drinks)"
  },
  {
    "word": "Mineralwater",
    "pos": "n. phr",
    "ipa": "/ˈmɪn.ər.əl ˈwɔː.tər/",
    "meaningVi": "Nướckhoáng",
    "topicId": 30,
    "topicName": "Đồ uống (Beverages & Drinks)"
  },
  {
    "word": "Lotus",
    "pos": "n",
    "ipa": "/ˈloʊtəs/",
    "meaningVi": "Hoasen",
    "topicId": 31,
    "topicName": "Các loài hoa (Flowers)"
  },
  {
    "word": "Lily",
    "pos": "adv",
    "ipa": "/ˈlɪli/",
    "meaningVi": "Hoaloakèn",
    "topicId": 31,
    "topicName": "Các loài hoa (Flowers)"
  },
  {
    "word": "Poppy",
    "pos": "n",
    "ipa": "/ˈpɒp.i/",
    "meaningVi": "Hoaanhtúc",
    "topicId": 31,
    "topicName": "Các loài hoa (Flowers)"
  },
  {
    "word": "Bougainvillea",
    "pos": "n",
    "ipa": "/ˌbuː.ɡənˈvɪl.i.ə/",
    "meaningVi": "Hoagiấy",
    "topicId": 31,
    "topicName": "Các loài hoa (Flowers)"
  },
  {
    "word": "Gerberaflower",
    "pos": "n",
    "ipa": "/ˈɡɜːr.bər.ə ˈflaʊ.ər/",
    "meaningVi": "Hoađồngtiền",
    "topicId": 31,
    "topicName": "Các loài hoa (Flowers)"
  },
  {
    "word": "Tuberose",
    "pos": "n",
    "ipa": "/ˈtuː.bəˌroʊz/",
    "meaningVi": "Hoahuệ",
    "topicId": 31,
    "topicName": "Các loài hoa (Flowers)"
  },
  {
    "word": "Dahlia",
    "pos": "n",
    "ipa": "/ˈdeɪ.li.ə/",
    "meaningVi": "Hoathượcdược",
    "topicId": 31,
    "topicName": "Các loài hoa (Flowers)"
  },
  {
    "word": "Jasmine",
    "pos": "n",
    "ipa": "/ˈʤæzmɪn/",
    "meaningVi": "Hoalài",
    "topicId": 31,
    "topicName": "Các loài hoa (Flowers)"
  },
  {
    "word": "Sunflower",
    "pos": "n",
    "ipa": "/ˈsʌnˌflaʊ.ər/",
    "meaningVi": "Hoahướngdương",
    "topicId": 31,
    "topicName": "Các loài hoa (Flowers)"
  },
  {
    "word": "Marigold",
    "pos": "n",
    "ipa": "/ˈmær.ɪˌɡoʊld/",
    "meaningVi": "Hoacúcvạnthọ",
    "topicId": 31,
    "topicName": "Các loài hoa (Flowers)"
  },
  {
    "word": "Orchid",
    "pos": "n",
    "ipa": "/ˈɔːr.kɪd/",
    "meaningVi": "Hoalan",
    "topicId": 31,
    "topicName": "Các loài hoa (Flowers)"
  },
  {
    "word": "Rose",
    "pos": "n",
    "ipa": "/roʊz/",
    "meaningVi": "Hoahồng",
    "topicId": 31,
    "topicName": "Các loài hoa (Flowers)"
  },
  {
    "word": "Carnation",
    "pos": "n",
    "ipa": "/kɑːrˈneɪ.ʃən/",
    "meaningVi": "Hoacẩmchướng",
    "topicId": 31,
    "topicName": "Các loài hoa (Flowers)"
  },
  {
    "word": "Cherryblossom",
    "pos": "n. phr",
    "ipa": "/ˈtʃɛr.i ˈblɒs.əm/",
    "meaningVi": "Hoaanhđào",
    "topicId": 31,
    "topicName": "Các loài hoa (Flowers)"
  },
  {
    "word": "Poinsettia",
    "pos": "n",
    "ipa": "/ˌpɔɪnˈsɛˌtiə/",
    "meaningVi": "Hoatrạngnguyên",
    "topicId": 31,
    "topicName": "Các loài hoa (Flowers)"
  },
  {
    "word": "Flamboyant",
    "pos": "n",
    "ipa": "/flæmˈbɔɪənt/",
    "meaningVi": "Hoaphượng",
    "topicId": 31,
    "topicName": "Các loài hoa (Flowers)"
  },
  {
    "word": "Hibiscus",
    "pos": "n",
    "ipa": "/hɪˈbɪs.kəs/",
    "meaningVi": "Hoadâmbụt",
    "topicId": 31,
    "topicName": "Các loài hoa (Flowers)"
  },
  {
    "word": "Peachblossom",
    "pos": "n. phr",
    "ipa": "/piːtʃ ˈblɒs.əm/",
    "meaningVi": "Hoađào",
    "topicId": 31,
    "topicName": "Các loài hoa (Flowers)"
  },
  {
    "word": "Movie",
    "pos": "n",
    "ipa": "/ˈmuː.vi/",
    "meaningVi": "Phim",
    "topicId": 32,
    "topicName": "Phim ảnh (Movies & Cinema)"
  },
  {
    "word": "Famous",
    "pos": "adj",
    "ipa": "/ˈfeɪməs/",
    "meaningVi": "Nổitiếng",
    "topicId": 32,
    "topicName": "Phim ảnh (Movies & Cinema)"
  },
  {
    "word": "Comedy",
    "pos": "n",
    "ipa": "/ˈkɑmədi/",
    "meaningVi": "Hàikịch",
    "topicId": 32,
    "topicName": "Phim ảnh (Movies & Cinema)"
  },
  {
    "word": "Audience",
    "pos": "n",
    "ipa": "/ˈɔː.di.əns/",
    "meaningVi": "Khángiả",
    "topicId": 32,
    "topicName": "Phim ảnh (Movies & Cinema)"
  },
  {
    "word": "Film Festival",
    "pos": "n. phr",
    "ipa": "/fɪlmˈfɛstɪvəl/",
    "meaningVi": "Liênhoanphim",
    "topicId": 32,
    "topicName": "Phim ảnh (Movies & Cinema)"
  },
  {
    "word": "Trailer",
    "pos": "n",
    "ipa": "/ˈtreɪlər/",
    "meaningVi": "Đoạnphimquảng",
    "topicId": 32,
    "topicName": "Phim ảnh (Movies & Cinema)"
  },
  {
    "word": "Moviestar",
    "pos": "n. phr",
    "ipa": "/ˈmuː.vistɑːr/",
    "meaningVi": "Ngôisaođiệnảnh",
    "topicId": 32,
    "topicName": "Phim ảnh (Movies & Cinema)"
  },
  {
    "word": "Soundtrack",
    "pos": "n",
    "ipa": "/ˈsaʊnˌtræk/",
    "meaningVi": "Nhạcphim",
    "topicId": 32,
    "topicName": "Phim ảnh (Movies & Cinema)"
  },
  {
    "word": "Cartoon",
    "pos": "n",
    "ipa": "/kɑːrˈtuːn/",
    "meaningVi": "Phimhoạthình",
    "topicId": 32,
    "topicName": "Phim ảnh (Movies & Cinema)"
  },
  {
    "word": "Drama",
    "pos": "n",
    "ipa": "/ˈdrɑː.mə/",
    "meaningVi": "Vởkịch",
    "topicId": 32,
    "topicName": "Phim ảnh (Movies & Cinema)"
  },
  {
    "word": "Actionfflm",
    "pos": "n. phr",
    "ipa": "/ˈækʃənfɪlm/",
    "meaningVi": "Phimhànhđộng",
    "topicId": 32,
    "topicName": "Phim ảnh (Movies & Cinema)"
  },
  {
    "word": "Celebrity",
    "pos": "n",
    "ipa": "/səˈlɛbrɪti/",
    "meaningVi": "Ngườinổitiếng",
    "topicId": 32,
    "topicName": "Phim ảnh (Movies & Cinema)"
  },
  {
    "word": "Script",
    "pos": "n",
    "ipa": "/skrɪpt/",
    "meaningVi": "Kịchbản",
    "topicId": 32,
    "topicName": "Phim ảnh (Movies & Cinema)"
  },
  {
    "word": "Theater",
    "pos": "n",
    "ipa": "/ˈθiː.ə.tər/",
    "meaningVi": "Nhàhát",
    "topicId": 32,
    "topicName": "Phim ảnh (Movies & Cinema)"
  },
  {
    "word": "Actor",
    "pos": "n",
    "ipa": "/ˈæktər/",
    "meaningVi": "Namdiễnviên",
    "topicId": 32,
    "topicName": "Phim ảnh (Movies & Cinema)"
  },
  {
    "word": "Actress",
    "pos": "n",
    "ipa": "/ˈæk.trɪs/",
    "meaningVi": "Nữdiễnviên",
    "topicId": 32,
    "topicName": "Phim ảnh (Movies & Cinema)"
  },
  {
    "word": "Director",
    "pos": "n",
    "ipa": "/dɪˈrɛktər/",
    "meaningVi": "Đạodiễn",
    "topicId": 32,
    "topicName": "Phim ảnh (Movies & Cinema)"
  },
  {
    "word": "Romantic",
    "pos": "adj",
    "ipa": "/roʊˈmæntɪk/",
    "meaningVi": "Lãngmạn",
    "topicId": 32,
    "topicName": "Phim ảnh (Movies & Cinema)"
  },
  {
    "word": "Silent fflm",
    "pos": "n. phr",
    "ipa": "/ˈsaɪlənt fɪlm/",
    "meaningVi": "Phimcâm",
    "topicId": 32,
    "topicName": "Phim ảnh (Movies & Cinema)"
  },
  {
    "word": "Movieticket",
    "pos": "n. phr",
    "ipa": "/ˈmuː.viˈtɪk.ɪt/",
    "meaningVi": "Véxemphim",
    "topicId": 32,
    "topicName": "Phim ảnh (Movies & Cinema)"
  },
  {
    "word": "Stadium",
    "pos": "n",
    "ipa": "/ˈsteɪdiəm/",
    "meaningVi": "Sânvậnđộng",
    "topicId": 33,
    "topicName": "Bóng đá (Football / Soccer)"
  },
  {
    "word": "Stand",
    "pos": "n",
    "ipa": "/stænd/",
    "meaningVi": "Khánđài",
    "topicId": 33,
    "topicName": "Bóng đá (Football / Soccer)"
  },
  {
    "word": "Pitch",
    "pos": "n",
    "ipa": "/pɪʧ/",
    "meaningVi": "Sân",
    "topicId": 33,
    "topicName": "Bóng đá (Football / Soccer)"
  },
  {
    "word": "Touchline",
    "pos": "n",
    "ipa": "/ˈtʌtʃ.laɪn/",
    "meaningVi": "Đườngbiên",
    "topicId": 33,
    "topicName": "Bóng đá (Football / Soccer)"
  },
  {
    "word": "Penaltyarea",
    "pos": "n. phr",
    "ipa": "/ˈpɛnəlti ˈɛriə/",
    "meaningVi": "Khuphạtđền",
    "topicId": 33,
    "topicName": "Bóng đá (Football / Soccer)"
  },
  {
    "word": "Goal",
    "pos": "n",
    "ipa": "/goʊl/",
    "meaningVi": "Khungthành",
    "topicId": 33,
    "topicName": "Bóng đá (Football / Soccer)"
  },
  {
    "word": "Penalty",
    "pos": "n",
    "ipa": "/ˈpɛnəlti/",
    "meaningVi": "Phạtđền",
    "topicId": 33,
    "topicName": "Bóng đá (Football / Soccer)"
  },
  {
    "word": "Cornerkick",
    "pos": "n. phr",
    "ipa": "/ˈkɔːr.nər kɪk/",
    "meaningVi": "Cúđáphạtgóc",
    "topicId": 33,
    "topicName": "Bóng đá (Football / Soccer)"
  },
  {
    "word": "Freekick",
    "pos": "n. phr",
    "ipa": "/ˌfriː ˈkɪk/",
    "meaningVi": "Đáphạttrựctiếp",
    "topicId": 33,
    "topicName": "Bóng đá (Football / Soccer)"
  },
  {
    "word": "Kickoff",
    "pos": "phrasalv",
    "ipa": "/ˈkɪk.ɔːf/",
    "meaningVi": "Bắtđầu,lănbóng",
    "topicId": 33,
    "topicName": "Bóng đá (Football / Soccer)"
  },
  {
    "word": "Offside",
    "pos": "n",
    "ipa": "/ˌɒfˈsaɪd/",
    "meaningVi": "Việtvị",
    "topicId": 33,
    "topicName": "Bóng đá (Football / Soccer)"
  },
  {
    "word": "Cornerflag",
    "pos": "n. phr",
    "ipa": "/ˈkɔːr.nər flæɡ/",
    "meaningVi": "Cờcắmtạigócsân",
    "topicId": 33,
    "topicName": "Bóng đá (Football / Soccer)"
  },
  {
    "word": "Bet",
    "pos": "v",
    "ipa": "/bɛt/",
    "meaningVi": "Cáđộ",
    "topicId": 33,
    "topicName": "Bóng đá (Football / Soccer)"
  },
  {
    "word": "Thebench",
    "pos": "n. phr",
    "ipa": "/ðəbɛnʧ/",
    "meaningVi": "Băngghếdựbị",
    "topicId": 33,
    "topicName": "Bóng đá (Football / Soccer)"
  },
  {
    "word": "Foul",
    "pos": "n",
    "ipa": "/faʊl/",
    "meaningVi": "Lỗi, phaphạmlỗi",
    "topicId": 33,
    "topicName": "Bóng đá (Football / Soccer)"
  },
  {
    "word": "Goalline",
    "pos": "n. phr",
    "ipa": "/ˈɡoʊllaɪn/",
    "meaningVi": "Vạchkẻ(khung",
    "topicId": 33,
    "topicName": "Bóng đá (Football / Soccer)"
  },
  {
    "word": "Shoot",
    "pos": "v",
    "ipa": "/ʃuːt/",
    "meaningVi": "Ném,sút",
    "topicId": 33,
    "topicName": "Bóng đá (Football / Soccer)"
  },
  {
    "word": "Goalkeeper",
    "pos": "n",
    "ipa": "/ˈɡoʊlˌkiː.pər/",
    "meaningVi": "Thủmôn",
    "topicId": 33,
    "topicName": "Bóng đá (Football / Soccer)"
  },
  {
    "word": "Defender",
    "pos": "n",
    "ipa": "/dɪˈfɛn.dər/",
    "meaningVi": "Hậuvệ",
    "topicId": 33,
    "topicName": "Bóng đá (Football / Soccer)"
  },
  {
    "word": "Centreback",
    "pos": "n. phr",
    "ipa": "/ˈsɛn.tər bæk/",
    "meaningVi": "Trungvệ",
    "topicId": 33,
    "topicName": "Bóng đá (Football / Soccer)"
  },
  {
    "word": "Midffelder",
    "pos": "n",
    "ipa": "/ˈmɪdˌffːl.dər/",
    "meaningVi": "Trungvệ",
    "topicId": 33,
    "topicName": "Bóng đá (Football / Soccer)"
  },
  {
    "word": "Winger",
    "pos": "n",
    "ipa": "/ˈwɪŋ.ər/",
    "meaningVi": "Cầuthủchạybiên",
    "topicId": 33,
    "topicName": "Bóng đá (Football / Soccer)"
  },
  {
    "word": "Referee",
    "pos": "n",
    "ipa": "/ˌrɛf.əˈriː/",
    "meaningVi": "Trọngtài",
    "topicId": 33,
    "topicName": "Bóng đá (Football / Soccer)"
  },
  {
    "word": "Commentator",
    "pos": "n",
    "ipa": "/ˈkɒm.ənˌteɪ.tər/",
    "meaningVi": "Bìnhluậnviên",
    "topicId": 33,
    "topicName": "Bóng đá (Football / Soccer)"
  },
  {
    "word": "Supporter",
    "pos": "n",
    "ipa": "/səˈpɔːr.tər/",
    "meaningVi": "Cổđộngviên",
    "topicId": 33,
    "topicName": "Bóng đá (Football / Soccer)"
  },
  {
    "word": "Linesman",
    "pos": "n",
    "ipa": "/ˈlaɪnz.mən/",
    "meaningVi": "Trọngtàibiên",
    "topicId": 33,
    "topicName": "Bóng đá (Football / Soccer)"
  },
  {
    "word": "Hooligan",
    "pos": "n",
    "ipa": "/ˈhuː.lɪ.ɡən/",
    "meaningVi": "Kẻcônđồ,quá",
    "topicId": 33,
    "topicName": "Bóng đá (Football / Soccer)"
  },
  {
    "word": "Redcard",
    "pos": "n. phr",
    "ipa": "/ˈrɛdkɑːrd/",
    "meaningVi": "Thẻđỏ",
    "topicId": 33,
    "topicName": "Bóng đá (Football / Soccer)"
  },
  {
    "word": "Yellowcard",
    "pos": "n. phr",
    "ipa": "/ˈjɛl.oʊ kɑːrd/",
    "meaningVi": "Thẻvàng",
    "topicId": 33,
    "topicName": "Bóng đá (Football / Soccer)"
  },
  {
    "word": "Coach",
    "pos": "n",
    "ipa": "/koʊtʃ/",
    "meaningVi": "Huấnluyệnviên",
    "topicId": 33,
    "topicName": "Bóng đá (Football / Soccer)"
  },
  {
    "word": "Reserveteam",
    "pos": "n. phr",
    "ipa": "/rɪˈzɜːrv tiːm/",
    "meaningVi": "Độidựbị",
    "topicId": 33,
    "topicName": "Bóng đá (Football / Soccer)"
  },
  {
    "word": "Caution",
    "pos": "n",
    "ipa": "/ˈkɔː.ʃən/",
    "meaningVi": "Lờicảnhcáo",
    "topicId": 33,
    "topicName": "Bóng đá (Football / Soccer)"
  },
  {
    "word": "Stimulant",
    "pos": "n",
    "ipa": "/ˈstɪm.jʊ.lənt/",
    "meaningVi": "Chấtkíchthích",
    "topicId": 33,
    "topicName": "Bóng đá (Football / Soccer)"
  },
  {
    "word": "Strategy",
    "pos": "n",
    "ipa": "/ˈstræt.ə.dʒi/",
    "meaningVi": "Chiếnlược",
    "topicId": 33,
    "topicName": "Bóng đá (Football / Soccer)"
  },
  {
    "word": "Striker",
    "pos": "n",
    "ipa": "/ˈstraɪ.kər/",
    "meaningVi": "Tiềnđạo",
    "topicId": 33,
    "topicName": "Bóng đá (Football / Soccer)"
  },
  {
    "word": "Winter",
    "pos": "n",
    "ipa": "/ˈwɪn.tər/",
    "meaningVi": "Mùađông",
    "topicId": 34,
    "topicName": "Giáng sinh (Christmas)"
  },
  {
    "word": "Candle",
    "pos": "n",
    "ipa": "/ˈkæn.dəl/",
    "meaningVi": "Nến",
    "topicId": 34,
    "topicName": "Giáng sinh (Christmas)"
  },
  {
    "word": "Snow",
    "pos": "n",
    "ipa": "/snoʊ/",
    "meaningVi": "Tuyết",
    "topicId": 34,
    "topicName": "Giáng sinh (Christmas)"
  },
  {
    "word": "Sack",
    "pos": "n",
    "ipa": "/sæk/",
    "meaningVi": "Bao,túi",
    "topicId": 34,
    "topicName": "Giáng sinh (Christmas)"
  },
  {
    "word": "Card",
    "pos": "n",
    "ipa": "/kɑːrd/",
    "meaningVi": "Tấmthiệp",
    "topicId": 34,
    "topicName": "Giáng sinh (Christmas)"
  },
  {
    "word": "Fireplace",
    "pos": "n",
    "ipa": "/ˈfaɪərˌpleɪs/",
    "meaningVi": "Lòsưởi",
    "topicId": 34,
    "topicName": "Giáng sinh (Christmas)"
  },
  {
    "word": "Chimney",
    "pos": "n",
    "ipa": "/ˈtʃɪm.ni/",
    "meaningVi": "Ốngkhói",
    "topicId": 34,
    "topicName": "Giáng sinh (Christmas)"
  },
  {
    "word": "Gift",
    "pos": "n",
    "ipa": "/ɡɪft/",
    "meaningVi": "Quàtặng",
    "topicId": 34,
    "topicName": "Giáng sinh (Christmas)"
  },
  {
    "word": "Christmas",
    "pos": "n",
    "ipa": "/ˈkrɪs.məs/",
    "meaningVi": "LễGiángSinh",
    "topicId": 34,
    "topicName": "Giáng sinh (Christmas)"
  },
  {
    "word": "Ornament",
    "pos": "n",
    "ipa": "/ˈɔːr.nə.mənt/",
    "meaningVi": "Đồtrangtrí",
    "topicId": 34,
    "topicName": "Giáng sinh (Christmas)"
  },
  {
    "word": "Pinetree",
    "pos": "n. phr",
    "ipa": "/paɪntriː/",
    "meaningVi": "Câythông",
    "topicId": 34,
    "topicName": "Giáng sinh (Christmas)"
  },
  {
    "word": "Sled",
    "pos": "v",
    "ipa": "/slɛd/",
    "meaningVi": "Xetrượttuyết",
    "topicId": 34,
    "topicName": "Giáng sinh (Christmas)"
  },
  {
    "word": "Bell",
    "pos": "n",
    "ipa": "/bɛl/",
    "meaningVi": "Chuông",
    "topicId": 34,
    "topicName": "Giáng sinh (Christmas)"
  },
  {
    "word": "Snowflake",
    "pos": "n",
    "ipa": "/ˈsnoʊˌfleɪk/",
    "meaningVi": "Bôngtuyết",
    "topicId": 34,
    "topicName": "Giáng sinh (Christmas)"
  },
  {
    "word": "Wreath",
    "pos": "n",
    "ipa": "/riːθ/",
    "meaningVi": "Vònghoa",
    "topicId": 34,
    "topicName": "Giáng sinh (Christmas)"
  },
  {
    "word": "Scarf",
    "pos": "n",
    "ipa": "/skɑːrf/",
    "meaningVi": "Khănchoàngcổ",
    "topicId": 34,
    "topicName": "Giáng sinh (Christmas)"
  },
  {
    "word": "Christmastree",
    "pos": "n. phr",
    "ipa": "/ˈkrɪs.məstriː/",
    "meaningVi": "CâythôngGiáng",
    "topicId": 34,
    "topicName": "Giáng sinh (Christmas)"
  },
  {
    "word": "Christmascard",
    "pos": "n. phr",
    "ipa": "/ˈkrɪs.məskɑːrd/",
    "meaningVi": "ThiệpGiángsinh",
    "topicId": 34,
    "topicName": "Giáng sinh (Christmas)"
  },
  {
    "word": "Beef",
    "pos": "n",
    "ipa": "/biːf/",
    "meaningVi": "Thịtbò",
    "topicId": 35,
    "topicName": "Đồ ăn (Food & Cuisine)"
  },
  {
    "word": "Pork",
    "pos": "n",
    "ipa": "/pɔːrk/",
    "meaningVi": "Thịtheo",
    "topicId": 35,
    "topicName": "Đồ ăn (Food & Cuisine)"
  },
  {
    "word": "Bacon",
    "pos": "n",
    "ipa": "/ˈbeɪ.kən/",
    "meaningVi": "Thịtbarọixông",
    "topicId": 35,
    "topicName": "Đồ ăn (Food & Cuisine)"
  },
  {
    "word": "Ham",
    "pos": "n",
    "ipa": "/hæm/",
    "meaningVi": "Thịtđùi,thịtxông",
    "topicId": 35,
    "topicName": "Đồ ăn (Food & Cuisine)"
  },
  {
    "word": "Yoghurt",
    "pos": "n",
    "ipa": "/ˈjoʊ.ɡərt/",
    "meaningVi": "Sữachua",
    "topicId": 35,
    "topicName": "Đồ ăn (Food & Cuisine)"
  },
  {
    "word": "Pie",
    "pos": "n",
    "ipa": "/paɪ/",
    "meaningVi": "Bánhnướng",
    "topicId": 35,
    "topicName": "Đồ ăn (Food & Cuisine)"
  },
  {
    "word": "Bread",
    "pos": "n",
    "ipa": "/brɛd/",
    "meaningVi": "Bánhmì",
    "topicId": 35,
    "topicName": "Đồ ăn (Food & Cuisine)"
  },
  {
    "word": "Cake",
    "pos": "n",
    "ipa": "/keɪk/",
    "meaningVi": "Bánhngọt",
    "topicId": 35,
    "topicName": "Đồ ăn (Food & Cuisine)"
  },
  {
    "word": "Chip",
    "pos": "n",
    "ipa": "/tʃɪp/",
    "meaningVi": "Khoaitâychiên",
    "topicId": 35,
    "topicName": "Đồ ăn (Food & Cuisine)"
  },
  {
    "word": "Biscuit",
    "pos": "n",
    "ipa": "/ˈbɪs.kɪt/",
    "meaningVi": "Bánhquy",
    "topicId": 35,
    "topicName": "Đồ ăn (Food & Cuisine)"
  },
  {
    "word": "Noodle",
    "pos": "n",
    "ipa": "/ˈnuː.dəl/",
    "meaningVi": "Mì,bún",
    "topicId": 35,
    "topicName": "Đồ ăn (Food & Cuisine)"
  },
  {
    "word": "Butter",
    "pos": "n",
    "ipa": "/ˈbʌt.ər/",
    "meaningVi": "Bơ",
    "topicId": 35,
    "topicName": "Đồ ăn (Food & Cuisine)"
  },
  {
    "word": "Olive",
    "pos": "n",
    "ipa": "/ˈɒl.ɪv/",
    "meaningVi": "Quảôliu",
    "topicId": 35,
    "topicName": "Đồ ăn (Food & Cuisine)"
  },
  {
    "word": "Soy",
    "pos": "n",
    "ipa": "/sɔɪ/",
    "meaningVi": "Đậunành",
    "topicId": 35,
    "topicName": "Đồ ăn (Food & Cuisine)"
  },
  {
    "word": "Flour",
    "pos": "n",
    "ipa": "/ˈflaʊər/",
    "meaningVi": "Bột",
    "topicId": 35,
    "topicName": "Đồ ăn (Food & Cuisine)"
  },
  {
    "word": "Lunch",
    "pos": "n",
    "ipa": "/lʌntʃ/",
    "meaningVi": "Bữaăntrưa",
    "topicId": 35,
    "topicName": "Đồ ăn (Food & Cuisine)"
  },
  {
    "word": "Mint",
    "pos": "n",
    "ipa": "/mɪnt/",
    "meaningVi": "Bạchà",
    "topicId": 35,
    "topicName": "Đồ ăn (Food & Cuisine)"
  },
  {
    "word": "Vanilla",
    "pos": "n",
    "ipa": "/vəˈnɪl.ə/",
    "meaningVi": "Vani",
    "topicId": 35,
    "topicName": "Đồ ăn (Food & Cuisine)"
  },
  {
    "word": "Candy",
    "pos": "n",
    "ipa": "/ˈkæn.di/",
    "meaningVi": "Kẹo",
    "topicId": 35,
    "topicName": "Đồ ăn (Food & Cuisine)"
  },
  {
    "word": "Popcorn",
    "pos": "n",
    "ipa": "/ˈpɒp.kɔːrn/",
    "meaningVi": "Bỏngngô",
    "topicId": 35,
    "topicName": "Đồ ăn (Food & Cuisine)"
  },
  {
    "word": "Snack",
    "pos": "n",
    "ipa": "/snæk/",
    "meaningVi": "Bữaănnhẹ",
    "topicId": 35,
    "topicName": "Đồ ăn (Food & Cuisine)"
  },
  {
    "word": "Barbecue",
    "pos": "n",
    "ipa": "/ˈbɑːr.bɪ.kjuː/",
    "meaningVi": "Tiệcnướngngoài",
    "topicId": 35,
    "topicName": "Đồ ăn (Food & Cuisine)"
  },
  {
    "word": "Fastfood",
    "pos": "n. phr",
    "ipa": "/ˌfæstˈfuːd/",
    "meaningVi": "Thứcănnhanh",
    "topicId": 35,
    "topicName": "Đồ ăn (Food & Cuisine)"
  },
  {
    "word": "Junkfood",
    "pos": "n. phr",
    "ipa": "/ˈdʒʌŋkˌfuːd/",
    "meaningVi": "Đồănvặt",
    "topicId": 35,
    "topicName": "Đồ ăn (Food & Cuisine)"
  },
  {
    "word": "Frozenfood",
    "pos": "n. phr",
    "ipa": "/ˈfroʊ.zənˌfuːd/",
    "meaningVi": "Thựcphẩmđông",
    "topicId": 35,
    "topicName": "Đồ ăn (Food & Cuisine)"
  },
  {
    "word": "Healthfood",
    "pos": "n. phr",
    "ipa": "/ˈhɛlθ ˌfuːd/",
    "meaningVi": "Thựcphẩmtựnhiên",
    "topicId": 35,
    "topicName": "Đồ ăn (Food & Cuisine)"
  },
  {
    "word": "Distinctive",
    "pos": "adj",
    "ipa": "/dɪˈstɪŋk.tɪv/",
    "meaningVi": "Đặctrưng,khác",
    "topicId": 35,
    "topicName": "Đồ ăn (Food & Cuisine)"
  },
  {
    "word": "Flavor",
    "pos": "n",
    "ipa": "/ˈfleɪ.vər/",
    "meaningVi": "Hươngvị",
    "topicId": 35,
    "topicName": "Đồ ăn (Food & Cuisine)"
  },
  {
    "word": "Balanceddiet",
    "pos": "n. phr",
    "ipa": "/ˈbæl.ənstˈdaɪ.ət/",
    "meaningVi": "Chếđộănuống",
    "topicId": 35,
    "topicName": "Đồ ăn (Food & Cuisine)"
  },
  {
    "word": "Stale",
    "pos": "adj",
    "ipa": "/steɪl/",
    "meaningVi": "Ôi,thiu",
    "topicId": 35,
    "topicName": "Đồ ăn (Food & Cuisine)"
  },
  {
    "word": "Sour",
    "pos": "adj",
    "ipa": "/ˈsaʊ.ər/",
    "meaningVi": "Chua",
    "topicId": 35,
    "topicName": "Đồ ăn (Food & Cuisine)"
  },
  {
    "word": "Burnt",
    "pos": "adj",
    "ipa": "/bɜːrnt/",
    "meaningVi": "Cháy,khét",
    "topicId": 35,
    "topicName": "Đồ ăn (Food & Cuisine)"
  },
  {
    "word": "Overdone",
    "pos": "adj",
    "ipa": "/ˌoʊ.vərˈdʌn/",
    "meaningVi": "Quáchín,rục",
    "topicId": 35,
    "topicName": "Đồ ăn (Food & Cuisine)"
  },
  {
    "word": "Underdone",
    "pos": "adj",
    "ipa": "/ˌʌn.dərˈdʌn/",
    "meaningVi": "Chưachín,tái",
    "topicId": 35,
    "topicName": "Đồ ăn (Food & Cuisine)"
  },
  {
    "word": "Full",
    "pos": "adj",
    "ipa": "/fʊl/",
    "meaningVi": "No",
    "topicId": 35,
    "topicName": "Đồ ăn (Food & Cuisine)"
  },
  {
    "word": "Veal",
    "pos": "n",
    "ipa": "/viːl/",
    "meaningVi": "Thịtbê",
    "topicId": 35,
    "topicName": "Đồ ăn (Food & Cuisine)"
  },
  {
    "word": "Cereal",
    "pos": "n",
    "ipa": "/ˈsɪər.i.əl/",
    "meaningVi": "Ngũcốc",
    "topicId": 35,
    "topicName": "Đồ ăn (Food & Cuisine)"
  },
  {
    "word": "Hotdog",
    "pos": "n. phr",
    "ipa": "/ˈhɒtdɒɡ/",
    "meaningVi": "Bánhmìkẹpxúc",
    "topicId": 35,
    "topicName": "Đồ ăn (Food & Cuisine)"
  },
  {
    "word": "Music",
    "pos": "n",
    "ipa": "/ˈmjuː.zɪk/",
    "meaningVi": "Âmnhạc",
    "topicId": 36,
    "topicName": "Âm nhạc (Music)"
  },
  {
    "word": "Band",
    "pos": "n",
    "ipa": "/bænd/",
    "meaningVi": "Nhómnhạc,ban",
    "topicId": 36,
    "topicName": "Âm nhạc (Music)"
  },
  {
    "word": "Play",
    "pos": "v",
    "ipa": "/pleɪ/",
    "meaningVi": "Chơi(nhạccụ)",
    "topicId": 36,
    "topicName": "Âm nhạc (Music)"
  },
  {
    "word": "Note",
    "pos": "n",
    "ipa": "/noʊt/",
    "meaningVi": "Nốtnhạc",
    "topicId": 36,
    "topicName": "Âm nhạc (Music)"
  },
  {
    "word": "Drum",
    "pos": "n",
    "ipa": "/drʌm/",
    "meaningVi": "Trống",
    "topicId": 36,
    "topicName": "Âm nhạc (Music)"
  },
  {
    "word": "Playlist",
    "pos": "n",
    "ipa": "/ˈpleɪ.lɪst/",
    "meaningVi": "Danhsáchbàihát",
    "topicId": 36,
    "topicName": "Âm nhạc (Music)"
  },
  {
    "word": "Musician",
    "pos": "n",
    "ipa": "/mjuˈzɪʃ.ən/",
    "meaningVi": "Nhạcsĩ",
    "topicId": 36,
    "topicName": "Âm nhạc (Music)"
  },
  {
    "word": "Perform",
    "pos": "v",
    "ipa": "/pərˈfɔːrm/",
    "meaningVi": "Trìnhdiễn,biểu",
    "topicId": 36,
    "topicName": "Âm nhạc (Music)"
  },
  {
    "word": "Rhythm",
    "pos": "n",
    "ipa": "/ˈrɪð.əm/",
    "meaningVi": "Nhịpđiệu",
    "topicId": 36,
    "topicName": "Âm nhạc (Music)"
  },
  {
    "word": "Dance",
    "pos": "v",
    "ipa": "/dæns/",
    "meaningVi": "Nhảy,khiêuvũ",
    "topicId": 36,
    "topicName": "Âm nhạc (Music)"
  },
  {
    "word": "Listen",
    "pos": "v",
    "ipa": "/ˈlɪs.ən/",
    "meaningVi": "Lắngnghe",
    "topicId": 36,
    "topicName": "Âm nhạc (Music)"
  },
  {
    "word": "Volume",
    "pos": "n",
    "ipa": "/ˈvɑːl.juːm/",
    "meaningVi": "Âmlượng",
    "topicId": 36,
    "topicName": "Âm nhạc (Music)"
  },
  {
    "word": "Song",
    "pos": "n",
    "ipa": "/sɔːŋ/",
    "meaningVi": "Bàihát",
    "topicId": 36,
    "topicName": "Âm nhạc (Music)"
  },
  {
    "word": "Sing",
    "pos": "v",
    "ipa": "/sɪŋ/",
    "meaningVi": "Hát,cahát",
    "topicId": 36,
    "topicName": "Âm nhạc (Music)"
  },
  {
    "word": "Piano",
    "pos": "n",
    "ipa": "/piˈæn.oʊ/",
    "meaningVi": "Đànpiano",
    "topicId": 36,
    "topicName": "Âm nhạc (Music)"
  },
  {
    "word": "Guitar",
    "pos": "n",
    "ipa": "/ɡɪˈtɑːr/",
    "meaningVi": "Đànghi-ta",
    "topicId": 36,
    "topicName": "Âm nhạc (Music)"
  },
  {
    "word": "Instrument",
    "pos": "n",
    "ipa": "/ˈɪn.strə.mənt/",
    "meaningVi": "Nhạccụ",
    "topicId": 36,
    "topicName": "Âm nhạc (Music)"
  },
  {
    "word": "Harmony",
    "pos": "n",
    "ipa": "/ˈhɑːr.mə.ni/",
    "meaningVi": "Hoàâm",
    "topicId": 36,
    "topicName": "Âm nhạc (Music)"
  },
  {
    "word": "Melody",
    "pos": "n",
    "ipa": "/ˈmɛl.ə.di/",
    "meaningVi": "Giaiđiệu",
    "topicId": 36,
    "topicName": "Âm nhạc (Music)"
  },
  {
    "word": "String",
    "pos": "n",
    "ipa": "/strɪŋ/",
    "meaningVi": "Dâyđàn",
    "topicId": 36,
    "topicName": "Âm nhạc (Music)"
  },
  {
    "word": "Thebrass",
    "pos": "n. phr",
    "ipa": "/ðəbræs/",
    "meaningVi": "Dànkènđồng",
    "topicId": 36,
    "topicName": "Âm nhạc (Music)"
  },
  {
    "word": "Symphony",
    "pos": "n",
    "ipa": "/ˈsɪm.fə.ni/",
    "meaningVi": "Bảngiaohưởng",
    "topicId": 36,
    "topicName": "Âm nhạc (Music)"
  },
  {
    "word": "Overture",
    "pos": "n",
    "ipa": "/ˈoʊ.vər.tʃʊr/",
    "meaningVi": "Khúcdạođầu",
    "topicId": 36,
    "topicName": "Âm nhạc (Music)"
  },
  {
    "word": "Conductor",
    "pos": "n",
    "ipa": "/kənˈdʌk.tər/",
    "meaningVi": "Nhạctrưởng",
    "topicId": 36,
    "topicName": "Âm nhạc (Music)"
  },
  {
    "word": "Composer",
    "pos": "n",
    "ipa": "/kəmˈpoʊ.zər/",
    "meaningVi": "Nhàsoạnnhạc",
    "topicId": 36,
    "topicName": "Âm nhạc (Music)"
  },
  {
    "word": "Voice",
    "pos": "n",
    "ipa": "/vɔɪs/",
    "meaningVi": "Giọngnói,giọng",
    "topicId": 36,
    "topicName": "Âm nhạc (Music)"
  },
  {
    "word": "Solo",
    "pos": "n",
    "ipa": "/ˈsoʊ.loʊ/",
    "meaningVi": "Bàiđơnca",
    "topicId": 36,
    "topicName": "Âm nhạc (Music)"
  },
  {
    "word": "Leadsinger",
    "pos": "n. phr",
    "ipa": "/liːd ˈsɪŋ.ər/",
    "meaningVi": "Casĩhátchính",
    "topicId": 36,
    "topicName": "Âm nhạc (Music)"
  },
  {
    "word": "Guitarist",
    "pos": "n",
    "ipa": "/ɡɪˈtɑːr.ɪst/",
    "meaningVi": "Nghệsĩghi-ta",
    "topicId": 36,
    "topicName": "Âm nhạc (Music)"
  },
  {
    "word": "Drummer",
    "pos": "n",
    "ipa": "/ˈdrʌm.ər/",
    "meaningVi": "Ngườiđánhtrống",
    "topicId": 36,
    "topicName": "Âm nhạc (Music)"
  },
  {
    "word": "Lyrics",
    "pos": "n",
    "ipa": "/ˈlɪr.ɪks/",
    "meaningVi": "Lờibàihát",
    "topicId": 36,
    "topicName": "Âm nhạc (Music)"
  },
  {
    "word": "Chorus",
    "pos": "n",
    "ipa": "/ˈkɔːr.əs/",
    "meaningVi": "Điệpkhúc",
    "topicId": 36,
    "topicName": "Âm nhạc (Music)"
  },
  {
    "word": "Opera",
    "pos": "n",
    "ipa": "/ˈɑː.pə.rə/",
    "meaningVi": "Nhạckịch,ô-pê-ra",
    "topicId": 36,
    "topicName": "Âm nhạc (Music)"
  },
  {
    "word": "Folkmusic",
    "pos": "n. phr",
    "ipa": "/ˈfoʊkˌmjuː.zɪk/",
    "meaningVi": "Nhạcdângian",
    "topicId": 36,
    "topicName": "Âm nhạc (Music)"
  },
  {
    "word": "Album",
    "pos": "n",
    "ipa": "/ˈæl.bəm/",
    "meaningVi": "Tuyểntậpcakhúc",
    "topicId": 36,
    "topicName": "Âm nhạc (Music)"
  },
  {
    "word": "Tune",
    "pos": "n",
    "ipa": "/tjuːn/",
    "meaningVi": "Giaiđiệu",
    "topicId": 36,
    "topicName": "Âm nhạc (Music)"
  },
  {
    "word": "Violin",
    "pos": "n",
    "ipa": "/ˌvaɪəˈlɪn/",
    "meaningVi": "Đànvi-ô-lông",
    "topicId": 36,
    "topicName": "Âm nhạc (Music)"
  },
  {
    "word": "Date",
    "pos": "n",
    "ipa": "/deɪt/",
    "meaningVi": "Buổihẹnhò",
    "topicId": 37,
    "topicName": "Tình yêu (Love & Romance)"
  },
  {
    "word": "Engagement",
    "pos": "n",
    "ipa": "/ɪnˈɡeɪdʒ.mənt/",
    "meaningVi": "Đínhhôn",
    "topicId": 37,
    "topicName": "Tình yêu (Love & Romance)"
  },
  {
    "word": "Ring",
    "pos": "n",
    "ipa": "/rɪŋ/",
    "meaningVi": "Nhẫn",
    "topicId": 37,
    "topicName": "Tình yêu (Love & Romance)"
  },
  {
    "word": "Romantic",
    "pos": "adj",
    "ipa": "/roʊˈmæn.tɪk/",
    "meaningVi": "Lãngmạn",
    "topicId": 37,
    "topicName": "Tình yêu (Love & Romance)"
  },
  {
    "word": "Sweet",
    "pos": "adj",
    "ipa": "/swiːt/",
    "meaningVi": "Ngọtngào",
    "topicId": 37,
    "topicName": "Tình yêu (Love & Romance)"
  },
  {
    "word": "Alone",
    "pos": "adj",
    "ipa": "/əˈloʊn/",
    "meaningVi": "Mộtmình",
    "topicId": 37,
    "topicName": "Tình yêu (Love & Romance)"
  },
  {
    "word": "Couple",
    "pos": "n",
    "ipa": "/ˈkʌp.əl/",
    "meaningVi": "Cặpđôi",
    "topicId": 37,
    "topicName": "Tình yêu (Love & Romance)"
  },
  {
    "word": "Forever",
    "pos": "adv",
    "ipa": "/fɔːrˈɛv.ər/",
    "meaningVi": "Mãimãi",
    "topicId": 37,
    "topicName": "Tình yêu (Love & Romance)"
  },
  {
    "word": "Boyfriend",
    "pos": "n",
    "ipa": "/ˈbɔɪ.frɛnd/",
    "meaningVi": "Bạntrai",
    "topicId": 37,
    "topicName": "Tình yêu (Love & Romance)"
  },
  {
    "word": "Girlfriend",
    "pos": "n",
    "ipa": "/ˈɡɜːl.frɛnd/",
    "meaningVi": "Bạngái",
    "topicId": 37,
    "topicName": "Tình yêu (Love & Romance)"
  },
  {
    "word": "Kiss",
    "pos": "v",
    "ipa": "/kɪs/",
    "meaningVi": "Hôn",
    "topicId": 37,
    "topicName": "Tình yêu (Love & Romance)"
  },
  {
    "word": "Heart",
    "pos": "n",
    "ipa": "/hɑːrt/",
    "meaningVi": "Tráitim",
    "topicId": 37,
    "topicName": "Tình yêu (Love & Romance)"
  },
  {
    "word": "Hug",
    "pos": "v",
    "ipa": "/hʌɡ/",
    "meaningVi": "Ôm",
    "topicId": 37,
    "topicName": "Tình yêu (Love & Romance)"
  },
  {
    "word": "Propose",
    "pos": "v",
    "ipa": "/prəˈpoʊz/",
    "meaningVi": "Cầuhôn",
    "topicId": 37,
    "topicName": "Tình yêu (Love & Romance)"
  },
  {
    "word": "Chocolate",
    "pos": "n",
    "ipa": "/ˈtʃɒk.lɪt/",
    "meaningVi": "Sô-cô-la",
    "topicId": 37,
    "topicName": "Tình yêu (Love & Romance)"
  },
  {
    "word": "Wedding",
    "pos": "n",
    "ipa": "/ˈwɛd.ɪŋ/",
    "meaningVi": "Đámcưới",
    "topicId": 37,
    "topicName": "Tình yêu (Love & Romance)"
  },
  {
    "word": "Anniversary",
    "pos": "n",
    "ipa": "/ˌæn.ɪˈvɜː.sər.i/",
    "meaningVi": "Ngàykỷniệm",
    "topicId": 37,
    "topicName": "Tình yêu (Love & Romance)"
  },
  {
    "word": "Darling",
    "pos": "n",
    "ipa": "/ˈdɑːr.lɪŋ/",
    "meaningVi": "Emyêu,anhyêu",
    "topicId": 37,
    "topicName": "Tình yêu (Love & Romance)"
  },
  {
    "word": "Single",
    "pos": "adj",
    "ipa": "/ˈsɪŋ.ɡəl/",
    "meaningVi": "Độcthân",
    "topicId": 37,
    "topicName": "Tình yêu (Love & Romance)"
  },
  {
    "word": "Restaurant",
    "pos": "n",
    "ipa": "/ˈrɛs.tə.rɒnt/",
    "meaningVi": "Nhàhàng",
    "topicId": 38,
    "topicName": "Nhà hàng & Khách sạn (Restaurant & Hotel)"
  },
  {
    "word": "Maincourse",
    "pos": "n. phr",
    "ipa": "/meɪnkɔːrs/",
    "meaningVi": "Mónchính",
    "topicId": 38,
    "topicName": "Nhà hàng & Khách sạn (Restaurant & Hotel)"
  },
  {
    "word": "Napkin",
    "pos": "n",
    "ipa": "/ˈnæp.kɪn/",
    "meaningVi": "Khănăn",
    "topicId": 38,
    "topicName": "Nhà hàng & Khách sạn (Restaurant & Hotel)"
  },
  {
    "word": "Wine",
    "pos": "n",
    "ipa": "/waɪn/",
    "meaningVi": "Rượuvang",
    "topicId": 38,
    "topicName": "Nhà hàng & Khách sạn (Restaurant & Hotel)"
  },
  {
    "word": "Cutlery",
    "pos": "n",
    "ipa": "/ˈkʌt.lə.ri/",
    "meaningVi": "Dụngcụăn",
    "topicId": 38,
    "topicName": "Nhà hàng & Khách sạn (Restaurant & Hotel)"
  },
  {
    "word": "Drink",
    "pos": "n",
    "ipa": "/drɪŋk/",
    "meaningVi": "Đồuống",
    "topicId": 38,
    "topicName": "Nhà hàng & Khách sạn (Restaurant & Hotel)"
  },
  {
    "word": "Combo",
    "pos": "n",
    "ipa": "/ˈkɒm.boʊ/",
    "meaningVi": "Gói,bộ",
    "topicId": 38,
    "topicName": "Nhà hàng & Khách sạn (Restaurant & Hotel)"
  },
  {
    "word": "Sidedish",
    "pos": "n. phr",
    "ipa": "/saɪddɪʃ/",
    "meaningVi": "Đồănkèm",
    "topicId": 38,
    "topicName": "Nhà hàng & Khách sạn (Restaurant & Hotel)"
  },
  {
    "word": "Meal",
    "pos": "n",
    "ipa": "/miːl/",
    "meaningVi": "Bữaăn",
    "topicId": 38,
    "topicName": "Nhà hàng & Khách sạn (Restaurant & Hotel)"
  },
  {
    "word": "Order",
    "pos": "v",
    "ipa": "/ˈɔːr.dər/",
    "meaningVi": "Gọimón",
    "topicId": 38,
    "topicName": "Nhà hàng & Khách sạn (Restaurant & Hotel)"
  },
  {
    "word": "Speciality",
    "pos": "n",
    "ipa": "/ˌspeʃ.iˈæl.ə.ti/",
    "meaningVi": "Đặcsản",
    "topicId": 38,
    "topicName": "Nhà hàng & Khách sạn (Restaurant & Hotel)"
  },
  {
    "word": "Dessert",
    "pos": "n",
    "ipa": "/dɪˈzɜːrt/",
    "meaningVi": "Móntrángmiệng",
    "topicId": 38,
    "topicName": "Nhà hàng & Khách sạn (Restaurant & Hotel)"
  },
  {
    "word": "Salad",
    "pos": "n",
    "ipa": "/ˈsæl.əd/",
    "meaningVi": "Rautrộn",
    "topicId": 38,
    "topicName": "Nhà hàng & Khách sạn (Restaurant & Hotel)"
  },
  {
    "word": "Menu",
    "pos": "n",
    "ipa": "/ˈmɛnjuː/",
    "meaningVi": "Thựcđơn",
    "topicId": 38,
    "topicName": "Nhà hàng & Khách sạn (Restaurant & Hotel)"
  },
  {
    "word": "Waiter",
    "pos": "n",
    "ipa": "/ˈweɪ.tər/",
    "meaningVi": "Ngườihầubàn",
    "topicId": 38,
    "topicName": "Nhà hàng & Khách sạn (Restaurant & Hotel)"
  },
  {
    "word": "Guest",
    "pos": "n",
    "ipa": "/ɡɛst/",
    "meaningVi": "Khách",
    "topicId": 38,
    "topicName": "Nhà hàng & Khách sạn (Restaurant & Hotel)"
  },
  {
    "word": "Coupon",
    "pos": "n",
    "ipa": "/ˈkuː.pɒn/",
    "meaningVi": "Phiếugiảmgiá",
    "topicId": 38,
    "topicName": "Nhà hàng & Khách sạn (Restaurant & Hotel)"
  },
  {
    "word": "Neat",
    "pos": "adj",
    "ipa": "/niːt/",
    "meaningVi": "Gọngàng,ngăn",
    "topicId": 38,
    "topicName": "Nhà hàng & Khách sạn (Restaurant & Hotel)"
  },
  {
    "word": "Animated",
    "pos": "adj",
    "ipa": "/ˈæn.ɪˌmeɪ.tɪd/",
    "meaningVi": "Náonhiệt,sôinổi",
    "topicId": 38,
    "topicName": "Nhà hàng & Khách sạn (Restaurant & Hotel)"
  },
  {
    "word": "Hotel",
    "pos": "n",
    "ipa": "/hoʊˈtɛl/",
    "meaningVi": "Kháchsạn",
    "topicId": 38,
    "topicName": "Nhà hàng & Khách sạn (Restaurant & Hotel)"
  },
  {
    "word": "Housekeeper",
    "pos": "n",
    "ipa": "/ˈhaʊsˌkiː.pər/",
    "meaningVi": "Nhânviêndọn",
    "topicId": 38,
    "topicName": "Nhà hàng & Khách sạn (Restaurant & Hotel)"
  },
  {
    "word": "Hall",
    "pos": "n",
    "ipa": "/hɔːl/",
    "meaningVi": "Hànhlang",
    "topicId": 38,
    "topicName": "Nhà hàng & Khách sạn (Restaurant & Hotel)"
  },
  {
    "word": "Vacancy",
    "pos": "n",
    "ipa": "/ˈveɪ.kən.si/",
    "meaningVi": "Phòngtrống",
    "topicId": 38,
    "topicName": "Nhà hàng & Khách sạn (Restaurant & Hotel)"
  },
  {
    "word": "Lobby",
    "pos": "n",
    "ipa": "/ˈlɒb.i/",
    "meaningVi": "Hànhlang",
    "topicId": 38,
    "topicName": "Nhà hàng & Khách sạn (Restaurant & Hotel)"
  },
  {
    "word": "Concierge",
    "pos": "n",
    "ipa": "/kɒn.siˈɛrʒ/",
    "meaningVi": "Nhânviênhướng",
    "topicId": 38,
    "topicName": "Nhà hàng & Khách sạn (Restaurant & Hotel)"
  },
  {
    "word": "Check-in",
    "pos": "n",
    "ipa": "/ˈtʃɛk.ɪn/",
    "meaningVi": "Việcnhậnphòng",
    "topicId": 38,
    "topicName": "Nhà hàng & Khách sạn (Restaurant & Hotel)"
  },
  {
    "word": "Deskclerk",
    "pos": "n. phr",
    "ipa": "/dɛskklɜːrk/",
    "meaningVi": "Nhânviênlễtân",
    "topicId": 38,
    "topicName": "Nhà hàng & Khách sạn (Restaurant & Hotel)"
  },
  {
    "word": "Double bed",
    "pos": "n. phr",
    "ipa": "/ˈdʌb.əlbɛd/",
    "meaningVi": "Giườngđôi",
    "topicId": 38,
    "topicName": "Nhà hàng & Khách sạn (Restaurant & Hotel)"
  },
  {
    "word": "Single bed",
    "pos": "n. phr",
    "ipa": "/ˈsɪŋ.ɡəl bɛd/",
    "meaningVi": "Giườngđơn",
    "topicId": 38,
    "topicName": "Nhà hàng & Khách sạn (Restaurant & Hotel)"
  },
  {
    "word": "Doorman",
    "pos": "n",
    "ipa": "/ˈdɔːr.mən/",
    "meaningVi": "Nhânviêngáccửa",
    "topicId": 38,
    "topicName": "Nhà hàng & Khách sạn (Restaurant & Hotel)"
  },
  {
    "word": "Reception",
    "pos": "n",
    "ipa": "/rɪˈsɛp.ʃən/",
    "meaningVi": "Quầylễtân",
    "topicId": 38,
    "topicName": "Nhà hàng & Khách sạn (Restaurant & Hotel)"
  },
  {
    "word": "Elevator",
    "pos": "n",
    "ipa": "/ˈɛl.ɪˌveɪ.tər/",
    "meaningVi": "Thangmáy",
    "topicId": 38,
    "topicName": "Nhà hàng & Khách sạn (Restaurant & Hotel)"
  },
  {
    "word": "Reservation",
    "pos": "n",
    "ipa": "/ˌrɛz.ərˈveɪ.ʃən/",
    "meaningVi": "Sựđặtchỗtrước",
    "topicId": 38,
    "topicName": "Nhà hàng & Khách sạn (Restaurant & Hotel)"
  },
  {
    "word": "Bellboy",
    "pos": "n",
    "ipa": "/ˈbɛl.bɔɪ/",
    "meaningVi": "Ngườitrựctầng",
    "topicId": 38,
    "topicName": "Nhà hàng & Khách sạn (Restaurant & Hotel)"
  },
  {
    "word": "Checkout",
    "pos": "phrasalv",
    "ipa": "/ˈtʃɛk aʊt/",
    "meaningVi": "Trảphòng",
    "topicId": 38,
    "topicName": "Nhà hàng & Khách sạn (Restaurant & Hotel)"
  },
  {
    "word": "Nurseryschool",
    "pos": "n. phr",
    "ipa": "/ˈnɜː.sər.i skuːl/",
    "meaningVi": "Trườngmẫugiáo",
    "topicId": 39,
    "topicName": "Trường học (School & Classroom)"
  },
  {
    "word": "Teacher",
    "pos": "n",
    "ipa": "/ˈtiː.tʃər/",
    "meaningVi": "Giáoviên",
    "topicId": 39,
    "topicName": "Trường học (School & Classroom)"
  },
  {
    "word": "Classmate",
    "pos": "n",
    "ipa": "/ˈklæs.meɪt/",
    "meaningVi": "Bạncùnglớp",
    "topicId": 39,
    "topicName": "Trường học (School & Classroom)"
  },
  {
    "word": "Library",
    "pos": "n",
    "ipa": "/ˈlaɪ.brər.i/",
    "meaningVi": "Thưviện",
    "topicId": 39,
    "topicName": "Trường học (School & Classroom)"
  },
  {
    "word": "Pen",
    "pos": "n",
    "ipa": "/pɛn/",
    "meaningVi": "Bútmực",
    "topicId": 39,
    "topicName": "Trường học (School & Classroom)"
  },
  {
    "word": "Pencil",
    "pos": "n",
    "ipa": "/ˈpɛn.səl/",
    "meaningVi": "Bútchì",
    "topicId": 39,
    "topicName": "Trường học (School & Classroom)"
  },
  {
    "word": "Ruler",
    "pos": "n",
    "ipa": "/ˈruː.lər/",
    "meaningVi": "Câythước",
    "topicId": 39,
    "topicName": "Trường học (School & Classroom)"
  },
  {
    "word": "Calculator",
    "pos": "n",
    "ipa": "/ˈkæl.kjʊ.leɪ.tər/",
    "meaningVi": "Máytínhcầmtay",
    "topicId": 39,
    "topicName": "Trường học (School & Classroom)"
  },
  {
    "word": "Chalk",
    "pos": "n",
    "ipa": "/tʃɔːk/",
    "meaningVi": "Phấn",
    "topicId": 39,
    "topicName": "Trường học (School & Classroom)"
  },
  {
    "word": "Student",
    "pos": "n",
    "ipa": "/ˈstjuː.dənt/",
    "meaningVi": "Sinhviên,họcsinh",
    "topicId": 39,
    "topicName": "Trường học (School & Classroom)"
  },
  {
    "word": "Classroom",
    "pos": "n",
    "ipa": "/ˈklæs.ruːm/",
    "meaningVi": "Phònghọc",
    "topicId": 39,
    "topicName": "Trường học (School & Classroom)"
  },
  {
    "word": "Primaryschool",
    "pos": "n. phr",
    "ipa": "/ˈpraɪ.mə.riskuːl/",
    "meaningVi": "Trườngtiểuhọc",
    "topicId": 39,
    "topicName": "Trường học (School & Classroom)"
  },
  {
    "word": "Secondaryschool",
    "pos": "n. phr",
    "ipa": "/ˈsɛk.ən.dər.i skuːl/",
    "meaningVi": "Trườngtrunghọc",
    "topicId": 39,
    "topicName": "Trường học (School & Classroom)"
  },
  {
    "word": "Highschool",
    "pos": "n. phr",
    "ipa": "/haɪskuːl/",
    "meaningVi": "Trườngtrunghọc",
    "topicId": 39,
    "topicName": "Trường học (School & Classroom)"
  },
  {
    "word": "College",
    "pos": "n",
    "ipa": "/ˈkɒl.ɪdʒ/",
    "meaningVi": "Trườngđạihọc,",
    "topicId": 39,
    "topicName": "Trường học (School & Classroom)"
  },
  {
    "word": "University",
    "pos": "n",
    "ipa": "/ˌjuː.nɪˈvɜː.sə.ti/",
    "meaningVi": "Trườngđạihọc",
    "topicId": 39,
    "topicName": "Trường học (School & Classroom)"
  },
  {
    "word": "Principal",
    "pos": "n",
    "ipa": "/ˈprɪn.sɪ.pəl/",
    "meaningVi": "Hiệutrưởng",
    "topicId": 39,
    "topicName": "Trường học (School & Classroom)"
  },
  {
    "word": "Blackboard",
    "pos": "n",
    "ipa": "/ˈblæk.bɔːd/",
    "meaningVi": "Bảngđen",
    "topicId": 39,
    "topicName": "Trường học (School & Classroom)"
  },
  {
    "word": "Compass",
    "pos": "n",
    "ipa": "/ˈkʌm.pəs/",
    "meaningVi": "Com-pa",
    "topicId": 39,
    "topicName": "Trường học (School & Classroom)"
  },
  {
    "word": "History",
    "pos": "n",
    "ipa": "/ˈhɪs.tər.i/",
    "meaningVi": "Mônlịchsử",
    "topicId": 39,
    "topicName": "Trường học (School & Classroom)"
  },
  {
    "word": "Economics",
    "pos": "n",
    "ipa": "/ˌiː.kəˈnɒm.ɪks/",
    "meaningVi": "Kinhtếhọc",
    "topicId": 39,
    "topicName": "Trường học (School & Classroom)"
  },
  {
    "word": "Chemistry",
    "pos": "n",
    "ipa": "/ˈkɛm.ɪ.stri/",
    "meaningVi": "Hóahọc",
    "topicId": 39,
    "topicName": "Trường học (School & Classroom)"
  },
  {
    "word": "Biology",
    "pos": "n",
    "ipa": "/baɪˈɒl.ə.dʒi/",
    "meaningVi": "Sinhhọc",
    "topicId": 39,
    "topicName": "Trường học (School & Classroom)"
  },
  {
    "word": "IT",
    "pos": "n",
    "ipa": "/aɪˈtiː/",
    "meaningVi": "Côngnghệthông",
    "topicId": 39,
    "topicName": "Trường học (School & Classroom)"
  },
  {
    "word": "Geography",
    "pos": "n",
    "ipa": "/dʒɪˈɒɡ.rə.ff/",
    "meaningVi": "Địalý",
    "topicId": 39,
    "topicName": "Trường học (School & Classroom)"
  },
  {
    "word": "Art",
    "pos": "n",
    "ipa": "/ɑːrt/",
    "meaningVi": "Mỹthuật",
    "topicId": 39,
    "topicName": "Trường học (School & Classroom)"
  },
  {
    "word": "Fail",
    "pos": "v",
    "ipa": "/feɪl/",
    "meaningVi": "Rớt;đánhrớt",
    "topicId": 39,
    "topicName": "Trường học (School & Classroom)"
  },
  {
    "word": "Pass",
    "pos": "v",
    "ipa": "/pɑːs/",
    "meaningVi": "Đậu,đỗ(kỳthi)",
    "topicId": 39,
    "topicName": "Trường học (School & Classroom)"
  },
  {
    "word": "Graduate",
    "pos": "v",
    "ipa": "/ˈɡrædʒ.u.eɪt/",
    "meaningVi": "Tốt nghiệp",
    "topicId": 39,
    "topicName": "Trường học (School & Classroom)"
  },
  {
    "word": "Degree",
    "pos": "n",
    "ipa": "/dɪˈɡriː/",
    "meaningVi": "Bằngcấp",
    "topicId": 39,
    "topicName": "Trường học (School & Classroom)"
  },
  {
    "word": "Playground",
    "pos": "n",
    "ipa": "/ˈpleɪ.ɡraʊnd/",
    "meaningVi": "Sânchơi",
    "topicId": 39,
    "topicName": "Trường học (School & Classroom)"
  },
  {
    "word": "Uniform",
    "pos": "n",
    "ipa": "/ˈjuː.nɪ.fɔːm/",
    "meaningVi": "Đồngphục",
    "topicId": 39,
    "topicName": "Trường học (School & Classroom)"
  },
  {
    "word": "Grade",
    "pos": "n",
    "ipa": "/ɡreɪd/",
    "meaningVi": "Điểmsố",
    "topicId": 39,
    "topicName": "Trường học (School & Classroom)"
  },
  {
    "word": "Formteacher",
    "pos": "n. phr",
    "ipa": "/fɔːmˈtiː.tʃər/",
    "meaningVi": "Giáoviênchủ",
    "topicId": 39,
    "topicName": "Trường học (School & Classroom)"
  },
  {
    "word": "Proctor",
    "pos": "n",
    "ipa": "/ˈprɒk.tər/",
    "meaningVi": "Giámthị",
    "topicId": 39,
    "topicName": "Trường học (School & Classroom)"
  },
  {
    "word": "Schoolbag",
    "pos": "n. phr",
    "ipa": "/skuːl bæg/",
    "meaningVi": "Cặp",
    "topicId": 39,
    "topicName": "Trường học (School & Classroom)"
  },
  {
    "word": "Dean",
    "pos": "n",
    "ipa": "/diːn/",
    "meaningVi": "Trưởngkhoa",
    "topicId": 39,
    "topicName": "Trường học (School & Classroom)"
  },
  {
    "word": "Lesson",
    "pos": "n",
    "ipa": "/ˈles.ən/",
    "meaningVi": "Bàihọc",
    "topicId": 39,
    "topicName": "Trường học (School & Classroom)"
  },
  {
    "word": "Course",
    "pos": "n",
    "ipa": "/kɔːs/",
    "meaningVi": "Khoáhọc",
    "topicId": 39,
    "topicName": "Trường học (School & Classroom)"
  },
  {
    "word": "Navyblue",
    "pos": "n. phr",
    "ipa": "/ˈneɪ.vi bluː/",
    "meaningVi": "Màuxanhnướcbiển",
    "topicId": 40,
    "topicName": "Màu sắc (Colours)"
  },
  {
    "word": "Brightred",
    "pos": "n. phr",
    "ipa": "/braɪtrɛd/",
    "meaningVi": "(màu)đỏtươi",
    "topicId": 40,
    "topicName": "Màu sắc (Colours)"
  },
  {
    "word": "Vivid",
    "pos": "adj",
    "ipa": "/ˈvɪv.ɪd/",
    "meaningVi": "Rựcrỡ",
    "topicId": 40,
    "topicName": "Màu sắc (Colours)"
  },
  {
    "word": "Weather",
    "pos": "n",
    "ipa": "/ˈwɛð.ər/",
    "meaningVi": "Thờitiết",
    "topicId": 41,
    "topicName": "Thời tiết (Weather)"
  },
  {
    "word": "Warm",
    "pos": "adj",
    "ipa": "/wɔːrm/",
    "meaningVi": "Ấmáp,ấm",
    "topicId": 41,
    "topicName": "Thời tiết (Weather)"
  },
  {
    "word": "Wind",
    "pos": "n",
    "ipa": "/wɪnd/",
    "meaningVi": "Gió",
    "topicId": 41,
    "topicName": "Thời tiết (Weather)"
  },
  {
    "word": "Rain",
    "pos": "n",
    "ipa": "/reɪn/",
    "meaningVi": "Mưa",
    "topicId": 41,
    "topicName": "Thời tiết (Weather)"
  },
  {
    "word": "Temperature",
    "pos": "n",
    "ipa": "/ˈtɛm.prə.tʃər/",
    "meaningVi": "Nhiệtđộ",
    "topicId": 41,
    "topicName": "Thời tiết (Weather)"
  },
  {
    "word": "Weatherforecast",
    "pos": "n. phr",
    "ipa": "/ˈwɛð.ərˈfɔːr.kæst/",
    "meaningVi": "Bảntindựbáothời",
    "topicId": 41,
    "topicName": "Thời tiết (Weather)"
  },
  {
    "word": "Sunny",
    "pos": "n",
    "ipa": "/ˈsʌn.i/",
    "meaningVi": "Cónắng",
    "topicId": 41,
    "topicName": "Thời tiết (Weather)"
  },
  {
    "word": "Sunshine",
    "pos": "n",
    "ipa": "/ˈsʌn.ʃaɪn/",
    "meaningVi": "Ánhnắngmặttrời",
    "topicId": 41,
    "topicName": "Thời tiết (Weather)"
  },
  {
    "word": "Icy",
    "pos": "n",
    "ipa": "/ˈaɪ.si/",
    "meaningVi": "Lạnhlẽo",
    "topicId": 41,
    "topicName": "Thời tiết (Weather)"
  },
  {
    "word": "Atmosphere",
    "pos": "n",
    "ipa": "/ˈæt.mə.sfɪər/",
    "meaningVi": "Bầukhíquyển",
    "topicId": 41,
    "topicName": "Thời tiết (Weather)"
  },
  {
    "word": "Dry",
    "pos": "adj",
    "ipa": "/draɪ/",
    "meaningVi": "Khô",
    "topicId": 41,
    "topicName": "Thời tiết (Weather)"
  },
  {
    "word": "Sun",
    "pos": "n",
    "ipa": "/sʌn/",
    "meaningVi": "Mặttrời",
    "topicId": 41,
    "topicName": "Thời tiết (Weather)"
  },
  {
    "word": "Cloud",
    "pos": "n",
    "ipa": "/klaʊd/",
    "meaningVi": "Đámmây",
    "topicId": 41,
    "topicName": "Thời tiết (Weather)"
  },
  {
    "word": "Fog",
    "pos": "n",
    "ipa": "/fɔːɡ/",
    "meaningVi": "Sươngmù",
    "topicId": 41,
    "topicName": "Thời tiết (Weather)"
  },
  {
    "word": "Snow",
    "pos": "n",
    "ipa": "/snoʊ/",
    "meaningVi": "Tuyết",
    "topicId": 41,
    "topicName": "Thời tiết (Weather)"
  },
  {
    "word": "Cold",
    "pos": "adj",
    "ipa": "/koʊld/",
    "meaningVi": "Lạnh",
    "topicId": 41,
    "topicName": "Thời tiết (Weather)"
  },
  {
    "word": "Cool",
    "pos": "adj",
    "ipa": "/kuːl/",
    "meaningVi": "Mátmẻ",
    "topicId": 41,
    "topicName": "Thời tiết (Weather)"
  },
  {
    "word": "Hot",
    "pos": "adj",
    "ipa": "/hɒt/",
    "meaningVi": "Nóng",
    "topicId": 41,
    "topicName": "Thời tiết (Weather)"
  },
  {
    "word": "Wet",
    "pos": "adj",
    "ipa": "/wɛt/",
    "meaningVi": "Ẩmướt",
    "topicId": 41,
    "topicName": "Thời tiết (Weather)"
  },
  {
    "word": "Erratic",
    "pos": "adj",
    "ipa": "/ɪˈræt.ɪk/",
    "meaningVi": "Thấtthường",
    "topicId": 41,
    "topicName": "Thời tiết (Weather)"
  },
  {
    "word": "Thunder",
    "pos": "n",
    "ipa": "/ˈθʌn.dər/",
    "meaningVi": "Sấm",
    "topicId": 41,
    "topicName": "Thời tiết (Weather)"
  },
  {
    "word": "Hailstone",
    "pos": "n",
    "ipa": "/ˈheɪl.stoʊn/",
    "meaningVi": "Viênmưađá",
    "topicId": 41,
    "topicName": "Thời tiết (Weather)"
  },
  {
    "word": "Blustery",
    "pos": "adj",
    "ipa": "/ˈblʌs.tər.i/",
    "meaningVi": "Cógiólớn",
    "topicId": 41,
    "topicName": "Thời tiết (Weather)"
  },
  {
    "word": "Downpour",
    "pos": "n",
    "ipa": "/ˈdaʊn.pɔːr/",
    "meaningVi": "Mưalớn",
    "topicId": 41,
    "topicName": "Thời tiết (Weather)"
  },
  {
    "word": "Raincoat",
    "pos": "n",
    "ipa": "/ˈreɪn.koʊt/",
    "meaningVi": "Áomưa",
    "topicId": 41,
    "topicName": "Thời tiết (Weather)"
  },
  {
    "word": "Blizzard",
    "pos": "n",
    "ipa": "/ˈblɪz.ərd/",
    "meaningVi": "Bãotuyết",
    "topicId": 41,
    "topicName": "Thời tiết (Weather)"
  },
  {
    "word": "Rainbow",
    "pos": "n",
    "ipa": "/ˈreɪn.boʊ/",
    "meaningVi": "Cầuvồng",
    "topicId": 41,
    "topicName": "Thời tiết (Weather)"
  },
  {
    "word": "Dew",
    "pos": "n",
    "ipa": "/djuː/",
    "meaningVi": "Sương",
    "topicId": 41,
    "topicName": "Thời tiết (Weather)"
  },
  {
    "word": "Sleet",
    "pos": "n",
    "ipa": "/sliːt/",
    "meaningVi": "Mưatuyết",
    "topicId": 41,
    "topicName": "Thời tiết (Weather)"
  },
  {
    "word": "Stormy",
    "pos": "adj",
    "ipa": "/ˈstɔːr.mi/",
    "meaningVi": "Cóbão",
    "topicId": 41,
    "topicName": "Thời tiết (Weather)"
  },
  {
    "word": "Snowflake",
    "pos": "n",
    "ipa": "/ˈsnoʊ.fleɪk/",
    "meaningVi": "Bôngtuyết",
    "topicId": 41,
    "topicName": "Thời tiết (Weather)"
  },
  {
    "word": "Puddle",
    "pos": "n",
    "ipa": "/ˈpʌd.əl/",
    "meaningVi": "Vũngnướcmưa",
    "topicId": 41,
    "topicName": "Thời tiết (Weather)"
  },
  {
    "word": "Lightning",
    "pos": "n",
    "ipa": "/ˈlaɪt.nɪŋ/",
    "meaningVi": "Tiachớp",
    "topicId": 41,
    "topicName": "Thời tiết (Weather)"
  },
  {
    "word": "Mild",
    "pos": "adj",
    "ipa": "/maɪld/",
    "meaningVi": "Ônhoà",
    "topicId": 41,
    "topicName": "Thời tiết (Weather)"
  },
  {
    "word": "Dull",
    "pos": "adj",
    "ipa": "/dʌl/",
    "meaningVi": "Uám",
    "topicId": 41,
    "topicName": "Thời tiết (Weather)"
  },
  {
    "word": "Shelter",
    "pos": "n",
    "ipa": "/ˈʃɛl.tər/",
    "meaningVi": "Chỗtrúẩn",
    "topicId": 41,
    "topicName": "Thời tiết (Weather)"
  },
  {
    "word": "Celsius",
    "pos": "adj",
    "ipa": "/ˈsɛl.si.əs/",
    "meaningVi": "(thuộc)độC",
    "topicId": 41,
    "topicName": "Thời tiết (Weather)"
  },
  {
    "word": "Fine",
    "pos": "n",
    "ipa": "/faɪn/",
    "meaningVi": "Đẹp",
    "topicId": 41,
    "topicName": "Thời tiết (Weather)"
  },
  {
    "word": "Skirt",
    "pos": "n",
    "ipa": "/skɜːrt/",
    "meaningVi": "Váy",
    "topicId": 42,
    "topicName": "Quần áo & Trang phục (Clothes & Fashion)"
  },
  {
    "word": "Leggings",
    "pos": "n",
    "ipa": "/ˈlɛɡ.ɪŋz/",
    "meaningVi": "Quầnbó",
    "topicId": 42,
    "topicName": "Quần áo & Trang phục (Clothes & Fashion)"
  },
  {
    "word": "Overalls",
    "pos": "n",
    "ipa": "/ˈoʊ.vər.ɔːlz/",
    "meaningVi": "Quầnyếm",
    "topicId": 42,
    "topicName": "Quần áo & Trang phục (Clothes & Fashion)"
  },
  {
    "word": "Turtleneck",
    "pos": "n",
    "ipa": "/ˈtɜːr.tl̩.nɛk/",
    "meaningVi": "Áocổlọ",
    "topicId": 42,
    "topicName": "Quần áo & Trang phục (Clothes & Fashion)"
  },
  {
    "word": "Bowtie",
    "pos": "n. phr",
    "ipa": "/ˈboʊtaɪ/",
    "meaningVi": "Nơconbướm",
    "topicId": 42,
    "topicName": "Quần áo & Trang phục (Clothes & Fashion)"
  },
  {
    "word": "Tie",
    "pos": "n",
    "ipa": "/taɪ/",
    "meaningVi": "Càvạt",
    "topicId": 42,
    "topicName": "Quần áo & Trang phục (Clothes & Fashion)"
  },
  {
    "word": "Tunic",
    "pos": "n",
    "ipa": "/ˈtuː.nɪk/",
    "meaningVi": "Áotrùmhông",
    "topicId": 42,
    "topicName": "Quần áo & Trang phục (Clothes & Fashion)"
  },
  {
    "word": "Vest",
    "pos": "n",
    "ipa": "/vɛst/",
    "meaningVi": "Áogi-lê",
    "topicId": 42,
    "topicName": "Quần áo & Trang phục (Clothes & Fashion)"
  },
  {
    "word": "T-shirt",
    "pos": "n",
    "ipa": "/ˈtiː.ʃɜːrt/",
    "meaningVi": "Áothun",
    "topicId": 42,
    "topicName": "Quần áo & Trang phục (Clothes & Fashion)"
  },
  {
    "word": "Shirt",
    "pos": "n",
    "ipa": "/ʃɜːrt/",
    "meaningVi": "Áosơmi",
    "topicId": 42,
    "topicName": "Quần áo & Trang phục (Clothes & Fashion)"
  },
  {
    "word": "Jeans",
    "pos": "n",
    "ipa": "/dʒiːnz/",
    "meaningVi": "Quầnjean",
    "topicId": 42,
    "topicName": "Quần áo & Trang phục (Clothes & Fashion)"
  },
  {
    "word": "Dress",
    "pos": "n",
    "ipa": "/drɛs/",
    "meaningVi": "Áođầm",
    "topicId": 42,
    "topicName": "Quần áo & Trang phục (Clothes & Fashion)"
  },
  {
    "word": "Coat",
    "pos": "n",
    "ipa": "/koʊt/",
    "meaningVi": "Áokhoác",
    "topicId": 42,
    "topicName": "Quần áo & Trang phục (Clothes & Fashion)"
  },
  {
    "word": "Jacket",
    "pos": "n",
    "ipa": "/ˈdʒæk.ɪt/",
    "meaningVi": "Áokhoác",
    "topicId": 42,
    "topicName": "Quần áo & Trang phục (Clothes & Fashion)"
  },
  {
    "word": "Sweater",
    "pos": "n",
    "ipa": "/ˈswɛt.ər/",
    "meaningVi": "Áolen",
    "topicId": 42,
    "topicName": "Quần áo & Trang phục (Clothes & Fashion)"
  },
  {
    "word": "Jumpsuit",
    "pos": "n",
    "ipa": "/ˈdʒʌmp.suːt/",
    "meaningVi": "Bộáoliềnquần",
    "topicId": 42,
    "topicName": "Quần áo & Trang phục (Clothes & Fashion)"
  },
  {
    "word": "Shorts",
    "pos": "n",
    "ipa": "/ʃɔːrts/",
    "meaningVi": "Quầnđùi",
    "topicId": 42,
    "topicName": "Quần áo & Trang phục (Clothes & Fashion)"
  },
  {
    "word": "Suit",
    "pos": "n",
    "ipa": "/suːt/",
    "meaningVi": "Bộcomlê",
    "topicId": 42,
    "topicName": "Quần áo & Trang phục (Clothes & Fashion)"
  },
  {
    "word": "Anorak",
    "pos": "n",
    "ipa": "/ˈæn.ə.ræk/",
    "meaningVi": "Áongoàicómũ",
    "topicId": 42,
    "topicName": "Quần áo & Trang phục (Clothes & Fashion)"
  },
  {
    "word": "Hat",
    "pos": "n",
    "ipa": "/hæt/",
    "meaningVi": "Mũ,nón",
    "topicId": 42,
    "topicName": "Quần áo & Trang phục (Clothes & Fashion)"
  },
  {
    "word": "Cap",
    "pos": "n",
    "ipa": "/kæp/",
    "meaningVi": "Mũlưỡitrai",
    "topicId": 42,
    "topicName": "Quần áo & Trang phục (Clothes & Fashion)"
  },
  {
    "word": "Glove",
    "pos": "n",
    "ipa": "/ɡlʌv/",
    "meaningVi": "Găngtay",
    "topicId": 42,
    "topicName": "Quần áo & Trang phục (Clothes & Fashion)"
  },
  {
    "word": "Scarf",
    "pos": "n",
    "ipa": "/skɑːrf/",
    "meaningVi": "Khănchoàngcổ",
    "topicId": 42,
    "topicName": "Quần áo & Trang phục (Clothes & Fashion)"
  },
  {
    "word": "Sandals",
    "pos": "n",
    "ipa": "/ˈsæn.dəlz/",
    "meaningVi": "Giàyxăng-đan",
    "topicId": 42,
    "topicName": "Quần áo & Trang phục (Clothes & Fashion)"
  },
  {
    "word": "Slippers",
    "pos": "n",
    "ipa": "/ˈslɪp.ərz/",
    "meaningVi": "Đôidép",
    "topicId": 42,
    "topicName": "Quần áo & Trang phục (Clothes & Fashion)"
  },
  {
    "word": "Pocket",
    "pos": "n",
    "ipa": "/ˈpɒk.ɪt/",
    "meaningVi": "Túi(quầnáo)",
    "topicId": 42,
    "topicName": "Quần áo & Trang phục (Clothes & Fashion)"
  },
  {
    "word": "Sleeve",
    "pos": "n",
    "ipa": "/sliːv/",
    "meaningVi": "Tayáo",
    "topicId": 42,
    "topicName": "Quần áo & Trang phục (Clothes & Fashion)"
  },
  {
    "word": "Collar",
    "pos": "n",
    "ipa": "/ˈkɒl.ər/",
    "meaningVi": "Cổáo",
    "topicId": 42,
    "topicName": "Quần áo & Trang phục (Clothes & Fashion)"
  },
  {
    "word": "Zip",
    "pos": "n",
    "ipa": "/zɪp/",
    "meaningVi": "Khóakéo",
    "topicId": 42,
    "topicName": "Quần áo & Trang phục (Clothes & Fashion)"
  },
  {
    "word": "Blouse",
    "pos": "n",
    "ipa": "/blaʊs/",
    "meaningVi": "Áosơminữ",
    "topicId": 42,
    "topicName": "Quần áo & Trang phục (Clothes & Fashion)"
  },
  {
    "word": "Button",
    "pos": "n",
    "ipa": "/ˈbʌt.ən/",
    "meaningVi": "Khuy,nút",
    "topicId": 42,
    "topicName": "Quần áo & Trang phục (Clothes & Fashion)"
  },
  {
    "word": "Underwear",
    "pos": "n",
    "ipa": "/ˈʌn.dərˌwɛər/",
    "meaningVi": "Đồlót",
    "topicId": 42,
    "topicName": "Quần áo & Trang phục (Clothes & Fashion)"
  },
  {
    "word": "Bra",
    "pos": "n",
    "ipa": "/brɑː/",
    "meaningVi": "Áongực",
    "topicId": 42,
    "topicName": "Quần áo & Trang phục (Clothes & Fashion)"
  },
  {
    "word": "Pants",
    "pos": "n",
    "ipa": "/pænts/",
    "meaningVi": "Quầndài",
    "topicId": 42,
    "topicName": "Quần áo & Trang phục (Clothes & Fashion)"
  },
  {
    "word": "Belt",
    "pos": "n",
    "ipa": "/bɛlt/",
    "meaningVi": "Dâynịt",
    "topicId": 42,
    "topicName": "Quần áo & Trang phục (Clothes & Fashion)"
  },
  {
    "word": "Highheels",
    "pos": "n. phr",
    "ipa": "/haɪhiːlz/",
    "meaningVi": "Giàycaogót",
    "topicId": 42,
    "topicName": "Quần áo & Trang phục (Clothes & Fashion)"
  },
  {
    "word": "Tryon",
    "pos": "phrasalv",
    "ipa": "/traɪ ɒn/",
    "meaningVi": "Thử(quầnáo)",
    "topicId": 42,
    "topicName": "Quần áo & Trang phục (Clothes & Fashion)"
  },
  {
    "word": "Size",
    "pos": "n",
    "ipa": "/saɪz/",
    "meaningVi": "Kíchcỡ",
    "topicId": 42,
    "topicName": "Quần áo & Trang phục (Clothes & Fashion)"
  },
  {
    "word": "Head",
    "pos": "n",
    "ipa": "/hɛd/",
    "meaningVi": "Đầu",
    "topicId": 43,
    "topicName": "Bộ phận cơ thể (Body parts)"
  },
  {
    "word": "Face",
    "pos": "n",
    "ipa": "/feɪs/",
    "meaningVi": "Khuônmặt",
    "topicId": 43,
    "topicName": "Bộ phận cơ thể (Body parts)"
  },
  {
    "word": "Hair",
    "pos": "n",
    "ipa": "/hɛr/",
    "meaningVi": "Tóc",
    "topicId": 43,
    "topicName": "Bộ phận cơ thể (Body parts)"
  },
  {
    "word": "Ear",
    "pos": "n",
    "ipa": "/ɪr/",
    "meaningVi": "Tai",
    "topicId": 43,
    "topicName": "Bộ phận cơ thể (Body parts)"
  },
  {
    "word": "Neck",
    "pos": "n",
    "ipa": "/nɛk/",
    "meaningVi": "Cổ",
    "topicId": 43,
    "topicName": "Bộ phận cơ thể (Body parts)"
  },
  {
    "word": "Forehead",
    "pos": "n",
    "ipa": "/ˈfɔːrˌhɛd/",
    "meaningVi": "Trán",
    "topicId": 43,
    "topicName": "Bộ phận cơ thể (Body parts)"
  },
  {
    "word": "Beard",
    "pos": "n",
    "ipa": "/bɪrd/",
    "meaningVi": "Râu",
    "topicId": 43,
    "topicName": "Bộ phận cơ thể (Body parts)"
  },
  {
    "word": "Eye",
    "pos": "n",
    "ipa": "/aɪ/",
    "meaningVi": "Mắt",
    "topicId": 43,
    "topicName": "Bộ phận cơ thể (Body parts)"
  },
  {
    "word": "Nose",
    "pos": "n",
    "ipa": "/noʊz/",
    "meaningVi": "Mũi",
    "topicId": 43,
    "topicName": "Bộ phận cơ thể (Body parts)"
  },
  {
    "word": "Mouth",
    "pos": "n",
    "ipa": "/maʊθ/",
    "meaningVi": "Miệng",
    "topicId": 43,
    "topicName": "Bộ phận cơ thể (Body parts)"
  },
  {
    "word": "Chin",
    "pos": "n",
    "ipa": "/tʃɪn/",
    "meaningVi": "Cằm",
    "topicId": 43,
    "topicName": "Bộ phận cơ thể (Body parts)"
  },
  {
    "word": "Shoulder",
    "pos": "n",
    "ipa": "/ˈʃoʊl.dər/",
    "meaningVi": "Vai",
    "topicId": 43,
    "topicName": "Bộ phận cơ thể (Body parts)"
  },
  {
    "word": "Elbow",
    "pos": "n",
    "ipa": "/ˈɛl.boʊ/",
    "meaningVi": "Khuỷutay",
    "topicId": 43,
    "topicName": "Bộ phận cơ thể (Body parts)"
  },
  {
    "word": "Arm",
    "pos": "n",
    "ipa": "/ɑ:rm/",
    "meaningVi": "Cánhtay",
    "topicId": 43,
    "topicName": "Bộ phận cơ thể (Body parts)"
  },
  {
    "word": "Chest",
    "pos": "n",
    "ipa": "/tʃɛst/",
    "meaningVi": "Ngực",
    "topicId": 43,
    "topicName": "Bộ phận cơ thể (Body parts)"
  },
  {
    "word": "Armpit",
    "pos": "n",
    "ipa": "/ˈɑ:rmˌpɪt/",
    "meaningVi": "Nách",
    "topicId": 43,
    "topicName": "Bộ phận cơ thể (Body parts)"
  },
  {
    "word": "Wrist",
    "pos": "n",
    "ipa": "/rɪst/",
    "meaningVi": "Cổtay",
    "topicId": 43,
    "topicName": "Bộ phận cơ thể (Body parts)"
  },
  {
    "word": "Navel",
    "pos": "n",
    "ipa": "/ˈneɪ.vəl/",
    "meaningVi": "Rún,rốn",
    "topicId": 43,
    "topicName": "Bộ phận cơ thể (Body parts)"
  },
  {
    "word": "Ankle",
    "pos": "n",
    "ipa": "/ˈæŋ.kəl/",
    "meaningVi": "Mắtcáchân",
    "topicId": 43,
    "topicName": "Bộ phận cơ thể (Body parts)"
  },
  {
    "word": "Waist",
    "pos": "n",
    "ipa": "/weɪst/",
    "meaningVi": "Eo",
    "topicId": 43,
    "topicName": "Bộ phận cơ thể (Body parts)"
  },
  {
    "word": "Abdomen",
    "pos": "n",
    "ipa": "/ˈæb.də.mən/",
    "meaningVi": "Bụng",
    "topicId": 43,
    "topicName": "Bộ phận cơ thể (Body parts)"
  },
  {
    "word": "Leg",
    "pos": "n",
    "ipa": "/lɛɡ/",
    "meaningVi": "Chân",
    "topicId": 43,
    "topicName": "Bộ phận cơ thể (Body parts)"
  },
  {
    "word": "Thigh",
    "pos": "n",
    "ipa": "/θaɪ/",
    "meaningVi": "Đùi",
    "topicId": 43,
    "topicName": "Bộ phận cơ thể (Body parts)"
  },
  {
    "word": "Knee",
    "pos": "n",
    "ipa": "/niː/",
    "meaningVi": "Đầugối",
    "topicId": 43,
    "topicName": "Bộ phận cơ thể (Body parts)"
  },
  {
    "word": "Hand",
    "pos": "n",
    "ipa": "/hænd/",
    "meaningVi": "Bàntay",
    "topicId": 43,
    "topicName": "Bộ phận cơ thể (Body parts)"
  },
  {
    "word": "Thumb",
    "pos": "n",
    "ipa": "/θʌm/",
    "meaningVi": "Ngóntaycái",
    "topicId": 43,
    "topicName": "Bộ phận cơ thể (Body parts)"
  },
  {
    "word": "Back",
    "pos": "n",
    "ipa": "/bæk/",
    "meaningVi": "Lưng",
    "topicId": 43,
    "topicName": "Bộ phận cơ thể (Body parts)"
  },
  {
    "word": "Foot",
    "pos": "n",
    "ipa": "/fʊt/",
    "meaningVi": "Bànchân",
    "topicId": 43,
    "topicName": "Bộ phận cơ thể (Body parts)"
  },
  {
    "word": "Finger",
    "pos": "n",
    "ipa": "/ˈfɪŋ.ɡər/",
    "meaningVi": "Ngóntay",
    "topicId": 43,
    "topicName": "Bộ phận cơ thể (Body parts)"
  },
  {
    "word": "Toe",
    "pos": "n",
    "ipa": "/toʊ/",
    "meaningVi": "Ngónchân",
    "topicId": 43,
    "topicName": "Bộ phận cơ thể (Body parts)"
  },
  {
    "word": "Publicschool",
    "pos": "n. phr",
    "ipa": "/ˈpʌb.lɪk skuːl/",
    "meaningVi": "Trườngcônglập",
    "topicId": 44,
    "topicName": "Giáo dục (Education)"
  },
  {
    "word": "Privateschool",
    "pos": "n. phr",
    "ipa": "/ˈpraɪ.vɪt skuːl/",
    "meaningVi": "Trườngtưthục",
    "topicId": 44,
    "topicName": "Giáo dục (Education)"
  },
  {
    "word": "Secondaryschool",
    "pos": "n. phr",
    "ipa": "/ˈsɛk.ənˌdɛr.i skuːl/",
    "meaningVi": "Trườngtrunghọc",
    "topicId": 44,
    "topicName": "Giáo dục (Education)"
  },
  {
    "word": "Highschool",
    "pos": "n. phr",
    "ipa": "/haɪskuːl/",
    "meaningVi": "Trườngtrunghọc",
    "topicId": 44,
    "topicName": "Giáo dục (Education)"
  },
  {
    "word": "Primaryschool",
    "pos": "n",
    "ipa": "/ˈpraɪˌmɛr.i skuːl/",
    "meaningVi": "Trườngtiểuhọc",
    "topicId": 44,
    "topicName": "Giáo dục (Education)"
  },
  {
    "word": "Nurseryschool",
    "pos": "n. phr",
    "ipa": "/ˈnɜːr.sər.i skuːl/",
    "meaningVi": "Trườngmẫugiáo",
    "topicId": 44,
    "topicName": "Giáo dục (Education)"
  },
  {
    "word": "School",
    "pos": "n",
    "ipa": "/skuːl/",
    "meaningVi": "Trườnghọc",
    "topicId": 44,
    "topicName": "Giáo dục (Education)"
  },
  {
    "word": "College",
    "pos": "n",
    "ipa": "/ˈkɒl.ɪdʒ/",
    "meaningVi": "Trườngđạihọc,",
    "topicId": 44,
    "topicName": "Giáo dục (Education)"
  },
  {
    "word": "University",
    "pos": "n",
    "ipa": "/ˌjuː.nɪˈvɜːr.sə.ti/",
    "meaningVi": "Trườngđạihọc",
    "topicId": 44,
    "topicName": "Giáo dục (Education)"
  },
  {
    "word": "Professor",
    "pos": "n",
    "ipa": "/prəˈfɛs.ər/",
    "meaningVi": "Giáosư",
    "topicId": 44,
    "topicName": "Giáo dục (Education)"
  },
  {
    "word": "Lecturer",
    "pos": "n",
    "ipa": "/ˈlɛk.tʃər.ər/",
    "meaningVi": "Giảngviên",
    "topicId": 44,
    "topicName": "Giáo dục (Education)"
  },
  {
    "word": "Researcher",
    "pos": "n",
    "ipa": "/rɪˈsɜːr.tʃər/",
    "meaningVi": "Nghiêncứuviên",
    "topicId": 44,
    "topicName": "Giáo dục (Education)"
  },
  {
    "word": "Graduate",
    "pos": "v",
    "ipa": "/ˈɡrædʒ.u.eɪt/",
    "meaningVi": "Tốtnghiệp",
    "topicId": 44,
    "topicName": "Giáo dục (Education)"
  },
  {
    "word": "Degree",
    "pos": "n",
    "ipa": "/dɪˈɡriː/",
    "meaningVi": "Bằngcấp",
    "topicId": 44,
    "topicName": "Giáo dục (Education)"
  },
  {
    "word": "Thesis",
    "pos": "n",
    "ipa": "/ˈθiː.sɪs/",
    "meaningVi": "Luậnvăn,luậnán",
    "topicId": 44,
    "topicName": "Giáo dục (Education)"
  },
  {
    "word": "Lecture",
    "pos": "n",
    "ipa": "/ˈlɛk.tʃər/",
    "meaningVi": "Bàigiảng,bài",
    "topicId": 44,
    "topicName": "Giáo dục (Education)"
  },
  {
    "word": "Debate",
    "pos": "n",
    "ipa": "/dɪˈbeɪt/",
    "meaningVi": "Cuộctranhluận",
    "topicId": 44,
    "topicName": "Giáo dục (Education)"
  },
  {
    "word": "Semester",
    "pos": "n",
    "ipa": "/sɪˈmɛs.tər/",
    "meaningVi": "Họckỳ",
    "topicId": 44,
    "topicName": "Giáo dục (Education)"
  },
  {
    "word": "Student",
    "pos": "n",
    "ipa": "/ˈstjuː.dənt/",
    "meaningVi": "Sinhviên,họcsinh",
    "topicId": 44,
    "topicName": "Giáo dục (Education)"
  },
  {
    "word": "Tuitionfee",
    "pos": "n. phr",
    "ipa": "/tjuːˈɪʃ.ən ffː/",
    "meaningVi": "Họcphí",
    "topicId": 44,
    "topicName": "Giáo dục (Education)"
  },
  {
    "word": "Exam",
    "pos": "n",
    "ipa": "/ɪɡˈzæm/",
    "meaningVi": "Bàithi,kìthi",
    "topicId": 44,
    "topicName": "Giáo dục (Education)"
  },
  {
    "word": "Fail",
    "pos": "v",
    "ipa": "/feɪl/",
    "meaningVi": "Thitrượt",
    "topicId": 44,
    "topicName": "Giáo dục (Education)"
  },
  {
    "word": "Pass",
    "pos": "v",
    "ipa": "/pæs/",
    "meaningVi": "Đậu,đỗ",
    "topicId": 44,
    "topicName": "Giáo dục (Education)"
  },
  {
    "word": "Study",
    "pos": "v",
    "ipa": "/ˈstʌd.i/",
    "meaningVi": "Học",
    "topicId": 44,
    "topicName": "Giáo dục (Education)"
  },
  {
    "word": "Learn",
    "pos": "v",
    "ipa": "/lɜːrn/",
    "meaningVi": "Học",
    "topicId": 44,
    "topicName": "Giáo dục (Education)"
  },
  {
    "word": "Curriculum",
    "pos": "n",
    "ipa": "/kəˈrɪk.jə.ləm/",
    "meaningVi": "Chươngtrìnhgiảng",
    "topicId": 44,
    "topicName": "Giáo dục (Education)"
  },
  {
    "word": "Course",
    "pos": "n",
    "ipa": "/kɔːrs/",
    "meaningVi": "Khóahọc",
    "topicId": 44,
    "topicName": "Giáo dục (Education)"
  },
  {
    "word": "Subject",
    "pos": "n",
    "ipa": "/ˈsʌb.dʒɪkt/",
    "meaningVi": "Mônhọc",
    "topicId": 44,
    "topicName": "Giáo dục (Education)"
  },
  {
    "word": "Grade",
    "pos": "n",
    "ipa": "/ɡreɪd/",
    "meaningVi": "Điểmsố",
    "topicId": 44,
    "topicName": "Giáo dục (Education)"
  },
  {
    "word": "Mark",
    "pos": "n",
    "ipa": "/mɑːrk/",
    "meaningVi": "Điểmsố",
    "topicId": 44,
    "topicName": "Giáo dục (Education)"
  },
  {
    "word": "Qualiffcation",
    "pos": "n",
    "ipa": "/ˌkwɒl.ɪ.fɪˈkeɪ.ʃən/",
    "meaningVi": "Trìnhđộchuyên",
    "topicId": 44,
    "topicName": "Giáo dục (Education)"
  },
  {
    "word": "Attendance",
    "pos": "n",
    "ipa": "/əˈtɛn.dəns/",
    "meaningVi": "Sựcómặt",
    "topicId": 44,
    "topicName": "Giáo dục (Education)"
  },
  {
    "word": "Absence",
    "pos": "n",
    "ipa": "/ˈæb.səns/",
    "meaningVi": "Sựvắngmặt",
    "topicId": 44,
    "topicName": "Giáo dục (Education)"
  },
  {
    "word": "Projector",
    "pos": "n",
    "ipa": "/prəˈdʒɛk.tər/",
    "meaningVi": "Máychiếu",
    "topicId": 44,
    "topicName": "Giáo dục (Education)"
  },
  {
    "word": "Textbook",
    "pos": "n",
    "ipa": "/ˈtɛkstˌbʊk/",
    "meaningVi": "Sáchgiáokhoa",
    "topicId": 44,
    "topicName": "Giáo dục (Education)"
  },
  {
    "word": "Question",
    "pos": "n",
    "ipa": "/ˈkwɛs.tʃən/",
    "meaningVi": "Câuhỏi",
    "topicId": 44,
    "topicName": "Giáo dục (Education)"
  },
  {
    "word": "Answer",
    "pos": "v",
    "ipa": "/ˈæn.sər/",
    "meaningVi": "Trảlời",
    "topicId": 44,
    "topicName": "Giáo dục (Education)"
  },
  {
    "word": "Mistake",
    "pos": "n",
    "ipa": "/mɪˈsteɪk/",
    "meaningVi": "Sailầm,lỗi",
    "topicId": 44,
    "topicName": "Giáo dục (Education)"
  },
  {
    "word": "Right",
    "pos": "adj",
    "ipa": "/raɪt/",
    "meaningVi": "Đúng",
    "topicId": 44,
    "topicName": "Giáo dục (Education)"
  },
  {
    "word": "Wrong",
    "pos": "adj",
    "ipa": "/rɒŋ/",
    "meaningVi": "Sai",
    "topicId": 44,
    "topicName": "Giáo dục (Education)"
  },
  {
    "word": "Register",
    "pos": "n",
    "ipa": "/ˈrɛdʒ.ɪ.stər/",
    "meaningVi": "Sổsách",
    "topicId": 44,
    "topicName": "Giáo dục (Education)"
  },
  {
    "word": "Assembly",
    "pos": "n",
    "ipa": "/əˈsɛm.bli/",
    "meaningVi": "Cuộchọp",
    "topicId": 44,
    "topicName": "Giáo dục (Education)"
  },
  {
    "word": "Holiday",
    "pos": "n",
    "ipa": "/ˈhɒl.ɪ.deɪ/",
    "meaningVi": "Kỳnghỉ",
    "topicId": 44,
    "topicName": "Giáo dục (Education)"
  },
  {
    "word": "Teacher",
    "pos": "n",
    "ipa": "/ˈtiː.tʃər/",
    "meaningVi": "Giáoviên",
    "topicId": 44,
    "topicName": "Giáo dục (Education)"
  },
  {
    "word": "Pupil",
    "pos": "n",
    "ipa": "/ˈpjuː.pəl/",
    "meaningVi": "Họcsinh",
    "topicId": 44,
    "topicName": "Giáo dục (Education)"
  },
  {
    "word": "Playground",
    "pos": "n",
    "ipa": "/ˈpleɪ.ɡraʊnd/",
    "meaningVi": "Sânchơi",
    "topicId": 44,
    "topicName": "Giáo dục (Education)"
  },
  {
    "word": "Library",
    "pos": "n",
    "ipa": "/ˈlaɪ.brər.i/",
    "meaningVi": "Thưviện",
    "topicId": 44,
    "topicName": "Giáo dục (Education)"
  },
  {
    "word": "Hall",
    "pos": "n",
    "ipa": "/hɔːl/",
    "meaningVi": "Hộitrường",
    "topicId": 44,
    "topicName": "Giáo dục (Education)"
  },
  {
    "word": "Dormitory",
    "pos": "n",
    "ipa": "/ˈdɔːr.mɪ.tɔːr.i/",
    "meaningVi": "Kýtúcxá",
    "topicId": 44,
    "topicName": "Giáo dục (Education)"
  },
  {
    "word": "Locker",
    "pos": "n",
    "ipa": "/ˈlɒk.ər/",
    "meaningVi": "Tủcókhoá",
    "topicId": 44,
    "topicName": "Giáo dục (Education)"
  },
  {
    "word": "Classroom",
    "pos": "n",
    "ipa": "/ˈklæs.ruːm/",
    "meaningVi": "Phònghọc",
    "topicId": 44,
    "topicName": "Giáo dục (Education)"
  },
  {
    "word": "Chalk",
    "pos": "n",
    "ipa": "/tʃɔːk/",
    "meaningVi": "Phấn",
    "topicId": 44,
    "topicName": "Giáo dục (Education)"
  },
  {
    "word": "Lesson",
    "pos": "n",
    "ipa": "/ˈlɛs.ən/",
    "meaningVi": "Bàihọc",
    "topicId": 44,
    "topicName": "Giáo dục (Education)"
  },
  {
    "word": "Homework",
    "pos": "n",
    "ipa": "/ˈhoʊm.wɜːrk/",
    "meaningVi": "Bàitậpvềnhà",
    "topicId": 44,
    "topicName": "Giáo dục (Education)"
  },
  {
    "word": "Test",
    "pos": "n",
    "ipa": "/tɛst/",
    "meaningVi": "Bàikiểmtra",
    "topicId": 44,
    "topicName": "Giáo dục (Education)"
  },
  {
    "word": "Husband",
    "pos": "n",
    "ipa": "/ˈhʌz.bənd/",
    "meaningVi": "Chồng",
    "topicId": 45,
    "topicName": "Gia đình (Family)"
  },
  {
    "word": "Grandson",
    "pos": "n",
    "ipa": "/ˈɡrænd.sʌn/",
    "meaningVi": "Cháutrai(củaông",
    "topicId": 45,
    "topicName": "Gia đình (Family)"
  },
  {
    "word": "Uncle",
    "pos": "n",
    "ipa": "/ˈʌŋ.kəl/",
    "meaningVi": "Chú,cậu,…",
    "topicId": 45,
    "topicName": "Gia đình (Family)"
  },
  {
    "word": "Aunt",
    "pos": "n",
    "ipa": "/ænt/",
    "meaningVi": "Cô,dì,…",
    "topicId": 45,
    "topicName": "Gia đình (Family)"
  },
  {
    "word": "Niece",
    "pos": "n",
    "ipa": "/niːs/",
    "meaningVi": "Cháugái(củacô,",
    "topicId": 45,
    "topicName": "Gia đình (Family)"
  },
  {
    "word": "Nephew",
    "pos": "n",
    "ipa": "/ˈnɛ.vjuː/",
    "meaningVi": "Cháutrai(củacô,",
    "topicId": 45,
    "topicName": "Gia đình (Family)"
  },
  {
    "word": "Son-in-law",
    "pos": "n",
    "ipa": "/ˈsʌnɪnlɔː/",
    "meaningVi": "Conrể",
    "topicId": 45,
    "topicName": "Gia đình (Family)"
  },
  {
    "word": "Daughter-in-law",
    "pos": "n",
    "ipa": "/ˈdɔː.tər ɪn lɔː/",
    "meaningVi": "Condâu",
    "topicId": 45,
    "topicName": "Gia đình (Family)"
  },
  {
    "word": "Granddaughter",
    "pos": "n",
    "ipa": "/ˈɡrændˌdɔː.tər/",
    "meaningVi": "Cháugái(củaông",
    "topicId": 45,
    "topicName": "Gia đình (Family)"
  },
  {
    "word": "Grandfather",
    "pos": "n",
    "ipa": "/ˈɡrændˌfɑː.ðər/",
    "meaningVi": "Ôngnội,ôngngoại",
    "topicId": 45,
    "topicName": "Gia đình (Family)"
  },
  {
    "word": "Wife",
    "pos": "n",
    "ipa": "/waɪf/",
    "meaningVi": "Vợ",
    "topicId": 45,
    "topicName": "Gia đình (Family)"
  },
  {
    "word": "Father",
    "pos": "n",
    "ipa": "/ˈfɑː.ðər/",
    "meaningVi": "Bố",
    "topicId": 45,
    "topicName": "Gia đình (Family)"
  },
  {
    "word": "Mother",
    "pos": "n",
    "ipa": "/ˈmʌð.ər/",
    "meaningVi": "Mẹ",
    "topicId": 45,
    "topicName": "Gia đình (Family)"
  },
  {
    "word": "Daughter",
    "pos": "n",
    "ipa": "/ˈdɔː.tər/",
    "meaningVi": "Congái",
    "topicId": 45,
    "topicName": "Gia đình (Family)"
  },
  {
    "word": "Son",
    "pos": "n",
    "ipa": "/sʌn/",
    "meaningVi": "Contrai",
    "topicId": 45,
    "topicName": "Gia đình (Family)"
  },
  {
    "word": "Sister",
    "pos": "n",
    "ipa": "/ˈsɪs.tər/",
    "meaningVi": "Chịgái,emgái",
    "topicId": 45,
    "topicName": "Gia đình (Family)"
  },
  {
    "word": "Brother",
    "pos": "n",
    "ipa": "/ˈbrʌð.ər/",
    "meaningVi": "Anhtrai,emtrai",
    "topicId": 45,
    "topicName": "Gia đình (Family)"
  },
  {
    "word": "Grandmother",
    "pos": "n",
    "ipa": "/ˈɡrændˌmʌð.ər/",
    "meaningVi": "Bànội,bàngoại",
    "topicId": 45,
    "topicName": "Gia đình (Family)"
  },
  {
    "word": "Anh",
    "pos": "noun",
    "ipa": "/emrểˌanh/",
    "meaningVi": "em",
    "topicId": 45,
    "topicName": "Gia đình (Family)"
  },
  {
    "word": "Brother-in-law",
    "pos": "n",
    "ipa": "/ˈbrʌð.ərɪnlɔː/",
    "meaningVi": "",
    "topicId": 45,
    "topicName": "Gia đình (Family)"
  },
  {
    "word": "Cousin",
    "pos": "n",
    "ipa": "/ˈkʌz.ɪn/",
    "meaningVi": "Anhhọ,emhọ",
    "topicId": 45,
    "topicName": "Gia đình (Family)"
  },
  {
    "word": "Parent",
    "pos": "n",
    "ipa": "/ˈpɛr.ənt/",
    "meaningVi": "Bố,mẹ",
    "topicId": 45,
    "topicName": "Gia đình (Family)"
  },
  {
    "word": "Relative",
    "pos": "n",
    "ipa": "/ˈrɛl.ə.tɪv/",
    "meaningVi": "Họhàng,người",
    "topicId": 45,
    "topicName": "Gia đình (Family)"
  },
  {
    "word": "Mother-in-law",
    "pos": "n",
    "ipa": "/ˈmʌð.ərɪnlɔː/",
    "meaningVi": "Mẹchồng,mẹvợ",
    "topicId": 45,
    "topicName": "Gia đình (Family)"
  },
  {
    "word": "Father-in-law",
    "pos": "n",
    "ipa": "/ˈfɑː.ðər ɪn lɔː/",
    "meaningVi": "Bốchồng,bốvợ",
    "topicId": 45,
    "topicName": "Gia đình (Family)"
  },
  {
    "word": "Chị",
    "pos": "noun",
    "ipa": "/emdâuˌchị/",
    "meaningVi": "em",
    "topicId": 45,
    "topicName": "Gia đình (Family)"
  },
  {
    "word": "Sister-in-law",
    "pos": "n",
    "ipa": "/ˈsɪs.tər ɪn lɔː/",
    "meaningVi": "",
    "topicId": 45,
    "topicName": "Gia đình (Family)"
  },
  {
    "word": "Adopt",
    "pos": "v",
    "ipa": "/əˈdɒpt/",
    "meaningVi": "Nhậnconnuôi",
    "topicId": 45,
    "topicName": "Gia đình (Family)"
  },
  {
    "word": "Children",
    "pos": "n",
    "ipa": "/ˈtʃɪl.drən/",
    "meaningVi": "Concái",
    "topicId": 45,
    "topicName": "Gia đình (Family)"
  },
  {
    "word": "Takecareof",
    "pos": "v. phr",
    "ipa": "/teɪkkɛərəv/",
    "meaningVi": "Chămsóc,quan",
    "topicId": 45,
    "topicName": "Gia đình (Family)"
  },
  {
    "word": "Familytree",
    "pos": "n. phr",
    "ipa": "/ˈfæm.ə.litriː/",
    "meaningVi": "Giaphả",
    "topicId": 45,
    "topicName": "Gia đình (Family)"
  },
  {
    "word": "Anniversary",
    "pos": "n",
    "ipa": "/ˌæn.ɪˈvɜː.sə.ri/",
    "meaningVi": "Ngàykỷniệm",
    "topicId": 45,
    "topicName": "Gia đình (Family)"
  },
  {
    "word": "Stepchild",
    "pos": "n",
    "ipa": "/ˈstɛpˌtʃaɪld/",
    "meaningVi": "Conriêng",
    "topicId": 45,
    "topicName": "Gia đình (Family)"
  },
  {
    "word": "Half-brother",
    "pos": "n",
    "ipa": "/ˈhɑːfˌbrʌð.ər/",
    "meaningVi": "(cùngcha/mẹkhác",
    "topicId": 45,
    "topicName": "Gia đình (Family)"
  },
  {
    "word": "Half-sister",
    "pos": "n",
    "ipa": "/ˈhɑːfˌsɪs.tər/",
    "meaningVi": "(cùngcha/mẹkhác",
    "topicId": 45,
    "topicName": "Gia đình (Family)"
  },
  {
    "word": "Godfather",
    "pos": "n",
    "ipa": "/ˈɡɒdˌfɑː.ðər/",
    "meaningVi": "Chađỡđầu",
    "topicId": 45,
    "topicName": "Gia đình (Family)"
  },
  {
    "word": "Hereditary",
    "pos": "adj",
    "ipa": "/həˈrɛd.ɪ.tər.i/",
    "meaningVi": "Ditruyền",
    "topicId": 45,
    "topicName": "Gia đình (Family)"
  },
  {
    "word": "Stepmother",
    "pos": "n",
    "ipa": "/ˈstɛpˌmʌð.ər/",
    "meaningVi": "Mẹkế",
    "topicId": 45,
    "topicName": "Gia đình (Family)"
  },
  {
    "word": "Stepfather",
    "pos": "n",
    "ipa": "/ˈstɛpˌfɑː.ðər/",
    "meaningVi": "Chadượng",
    "topicId": 45,
    "topicName": "Gia đình (Family)"
  },
  {
    "word": "Orphan",
    "pos": "n",
    "ipa": "/ˈɔːr.fən/",
    "meaningVi": "Trẻmồcôi",
    "topicId": 45,
    "topicName": "Gia đình (Family)"
  },
  {
    "word": "Generation",
    "pos": "n",
    "ipa": "/ˌdʒɛn.əˈreɪ.ʃən/",
    "meaningVi": "Thếhệ",
    "topicId": 45,
    "topicName": "Gia đình (Family)"
  },
  {
    "word": "Orange",
    "pos": "n",
    "ipa": "/ˈɔːr.ɪndʒ/",
    "meaningVi": "Quảcam",
    "topicId": 46,
    "topicName": "Trái cây (Fruits)"
  },
  {
    "word": "Lemon",
    "pos": "n",
    "ipa": "/ˈlɛm.ən/",
    "meaningVi": "Quảchanh",
    "topicId": 46,
    "topicName": "Trái cây (Fruits)"
  },
  {
    "word": "Mango",
    "pos": "n",
    "ipa": "/ˈmæŋ.ɡoʊ/",
    "meaningVi": "Quảxoài",
    "topicId": 46,
    "topicName": "Trái cây (Fruits)"
  },
  {
    "word": "Apple",
    "pos": "n",
    "ipa": "/ˈæp.əl/",
    "meaningVi": "Quảtáo",
    "topicId": 46,
    "topicName": "Trái cây (Fruits)"
  },
  {
    "word": "Tangerine",
    "pos": "n",
    "ipa": "/ˌtæn.dʒəˈriːn/",
    "meaningVi": "Quảquýt",
    "topicId": 46,
    "topicName": "Trái cây (Fruits)"
  },
  {
    "word": "Grape",
    "pos": "n",
    "ipa": "/ɡreɪp/",
    "meaningVi": "Quảnho",
    "topicId": 46,
    "topicName": "Trái cây (Fruits)"
  },
  {
    "word": "Strawberry",
    "pos": "n",
    "ipa": "/ˈstrɔːˌbɛr.i/",
    "meaningVi": "Quảdâutây",
    "topicId": 46,
    "topicName": "Trái cây (Fruits)"
  },
  {
    "word": "Melon",
    "pos": "n",
    "ipa": "/ˈmɛl.ən/",
    "meaningVi": "Quảdưa",
    "topicId": 46,
    "topicName": "Trái cây (Fruits)"
  },
  {
    "word": "Passionfruit",
    "pos": "n. phr",
    "ipa": "/ˈpæʃ.ənˌfruːt/",
    "meaningVi": "Quảchanhdây",
    "topicId": 46,
    "topicName": "Trái cây (Fruits)"
  },
  {
    "word": "Grapefruit",
    "pos": "n",
    "ipa": "/ˈɡreɪpˌfruːt/",
    "meaningVi": "Quảbưởichùm",
    "topicId": 46,
    "topicName": "Trái cây (Fruits)"
  },
  {
    "word": "Watermelon",
    "pos": "n",
    "ipa": "/ˈwɔː.tərˌmɛl.ən/",
    "meaningVi": "Quảdưahấu",
    "topicId": 46,
    "topicName": "Trái cây (Fruits)"
  },
  {
    "word": "Peach",
    "pos": "n",
    "ipa": "/piːtʃ/",
    "meaningVi": "Quảđào",
    "topicId": 46,
    "topicName": "Trái cây (Fruits)"
  },
  {
    "word": "Pear",
    "pos": "n",
    "ipa": "/pɛr/",
    "meaningVi": "Quảlê",
    "topicId": 46,
    "topicName": "Trái cây (Fruits)"
  },
  {
    "word": "Banana",
    "pos": "n",
    "ipa": "/bəˈnæn.ə/",
    "meaningVi": "Quảchuối",
    "topicId": 46,
    "topicName": "Trái cây (Fruits)"
  },
  {
    "word": "Plum",
    "pos": "n",
    "ipa": "/plʌm/",
    "meaningVi": "Quảmận",
    "topicId": 46,
    "topicName": "Trái cây (Fruits)"
  },
  {
    "word": "Papaya",
    "pos": "n",
    "ipa": "/pəˈpaɪ.ə/",
    "meaningVi": "Quảđuđủ",
    "topicId": 46,
    "topicName": "Trái cây (Fruits)"
  },
  {
    "word": "Avocado",
    "pos": "n",
    "ipa": "/ˌæv.əˈkɑː.doʊ/",
    "meaningVi": "Quảbơ",
    "topicId": 46,
    "topicName": "Trái cây (Fruits)"
  },
  {
    "word": "Starfruit",
    "pos": "n",
    "ipa": "/ˈstɑːrˌfruːt/",
    "meaningVi": "Quảkhế",
    "topicId": 46,
    "topicName": "Trái cây (Fruits)"
  },
  {
    "word": "Pineapple",
    "pos": "n",
    "ipa": "/ˈpaɪnˌæp.əl/",
    "meaningVi": "Quảdứa",
    "topicId": 46,
    "topicName": "Trái cây (Fruits)"
  },
  {
    "word": "Coconut",
    "pos": "n",
    "ipa": "/ˈkoʊ.kəˌnʌt/",
    "meaningVi": "Quảdừa",
    "topicId": 46,
    "topicName": "Trái cây (Fruits)"
  },
  {
    "word": "Raspberry",
    "pos": "n",
    "ipa": "/ˈræzˌbɛr.i/",
    "meaningVi": "Quảmâmxôi",
    "topicId": 46,
    "topicName": "Trái cây (Fruits)"
  },
  {
    "word": "Nectarine",
    "pos": "n",
    "ipa": "/ˈnɛk.təˌriːn/",
    "meaningVi": "Quảxuânđào",
    "topicId": 46,
    "topicName": "Trái cây (Fruits)"
  },
  {
    "word": "Mulberry",
    "pos": "n",
    "ipa": "/ˈmʌlˌbɛr.i/",
    "meaningVi": "Quảdâutằm",
    "topicId": 46,
    "topicName": "Trái cây (Fruits)"
  },
  {
    "word": "Raisin",
    "pos": "n",
    "ipa": "/ˈreɪ.zən/",
    "meaningVi": "Nhokhô",
    "topicId": 46,
    "topicName": "Trái cây (Fruits)"
  },
  {
    "word": "Jackfruit",
    "pos": "n",
    "ipa": "/ˈdʒækˌfruːt/",
    "meaningVi": "Quảmít",
    "topicId": 46,
    "topicName": "Trái cây (Fruits)"
  },
  {
    "word": "Persimmon",
    "pos": "n",
    "ipa": "/pərˈsɪm.ən/",
    "meaningVi": "Quảhồng",
    "topicId": 46,
    "topicName": "Trái cây (Fruits)"
  },
  {
    "word": "Custardapple",
    "pos": "n. phr",
    "ipa": "/ˈkʌs.tərdˌæp.əl/",
    "meaningVi": "Quảna",
    "topicId": 46,
    "topicName": "Trái cây (Fruits)"
  },
  {
    "word": "Quince",
    "pos": "n",
    "ipa": "/kwɪns/",
    "meaningVi": "Quảmộcqua",
    "topicId": 46,
    "topicName": "Trái cây (Fruits)"
  },
  {
    "word": "Cherry",
    "pos": "n",
    "ipa": "/ˈtʃɛr.i/",
    "meaningVi": "Quảanhđào",
    "topicId": 46,
    "topicName": "Trái cây (Fruits)"
  },
  {
    "word": "Kiwi",
    "pos": "n",
    "ipa": "/ˈkiː.wi/",
    "meaningVi": "Quảkiwi",
    "topicId": 46,
    "topicName": "Trái cây (Fruits)"
  },
  {
    "word": "Pomegranate",
    "pos": "n",
    "ipa": "/ˈpɒm.ɪˌɡræn.ɪt/",
    "meaningVi": "Quảlựu",
    "topicId": 46,
    "topicName": "Trái cây (Fruits)"
  },
  {
    "word": "Guava",
    "pos": "n",
    "ipa": "/ˈɡwɑː.və/",
    "meaningVi": "Quảổi",
    "topicId": 46,
    "topicName": "Trái cây (Fruits)"
  },
  {
    "word": "Apricot",
    "pos": "n",
    "ipa": "/ˈeɪ.prɪˌkɒt/",
    "meaningVi": "Quảmơ",
    "topicId": 46,
    "topicName": "Trái cây (Fruits)"
  },
  {
    "word": "Blueberry",
    "pos": "n",
    "ipa": "/ˈbluːˌbɛr.i/",
    "meaningVi": "Quảviệtquất",
    "topicId": 46,
    "topicName": "Trái cây (Fruits)"
  },
  {
    "word": "Durian",
    "pos": "n",
    "ipa": "/ˈdʊr.i.ən/",
    "meaningVi": "Quảsầuriêng",
    "topicId": 46,
    "topicName": "Trái cây (Fruits)"
  },
  {
    "word": "Lychee",
    "pos": "n",
    "ipa": "/ˈlaɪ.tʃiː/",
    "meaningVi": "Quảvải",
    "topicId": 46,
    "topicName": "Trái cây (Fruits)"
  },
  {
    "word": "Tamarind",
    "pos": "n",
    "ipa": "/ˈtæm.ər.ɪnd/",
    "meaningVi": "Quảme",
    "topicId": 46,
    "topicName": "Trái cây (Fruits)"
  },
  {
    "word": "Piglet",
    "pos": "n",
    "ipa": "/ˈpɪɡ.lɪt/",
    "meaningVi": "Lợncon",
    "topicId": 47,
    "topicName": "Động vật (Animals)"
  },
  {
    "word": "Sow",
    "pos": "n",
    "ipa": "/saʊ/",
    "meaningVi": "Lợncái",
    "topicId": 47,
    "topicName": "Động vật (Animals)"
  },
  {
    "word": "Pig",
    "pos": "n",
    "ipa": "/pɪɡ/",
    "meaningVi": "Lợn",
    "topicId": 47,
    "topicName": "Động vật (Animals)"
  },
  {
    "word": "Duck",
    "pos": "n",
    "ipa": "/dʌk/",
    "meaningVi": "Vịt",
    "topicId": 47,
    "topicName": "Động vật (Animals)"
  },
  {
    "word": "Animal",
    "pos": "n",
    "ipa": "/ˈæn.ɪ.məl/",
    "meaningVi": "Độngvật",
    "topicId": 47,
    "topicName": "Động vật (Animals)"
  },
  {
    "word": "Goat",
    "pos": "n",
    "ipa": "/ɡoʊt/",
    "meaningVi": "Dê",
    "topicId": 47,
    "topicName": "Động vật (Animals)"
  },
  {
    "word": "Horse",
    "pos": "n",
    "ipa": "/hɔːrs/",
    "meaningVi": "Ngựa",
    "topicId": 47,
    "topicName": "Động vật (Animals)"
  },
  {
    "word": "Goose",
    "pos": "n",
    "ipa": "/ɡuːs/",
    "meaningVi": "Ngỗng",
    "topicId": 47,
    "topicName": "Động vật (Animals)"
  },
  {
    "word": "Donkey",
    "pos": "n",
    "ipa": "/ˈdɒŋ.ki/",
    "meaningVi": "Lừa",
    "topicId": 47,
    "topicName": "Động vật (Animals)"
  },
  {
    "word": "Sheep",
    "pos": "n",
    "ipa": "/ʃiːp/",
    "meaningVi": "Cừu",
    "topicId": 47,
    "topicName": "Động vật (Animals)"
  },
  {
    "word": "Ox",
    "pos": "n",
    "ipa": "/ɒks/",
    "meaningVi": "Bò",
    "topicId": 47,
    "topicName": "Động vật (Animals)"
  },
  {
    "word": "Dog",
    "pos": "n",
    "ipa": "/dɒɡ/",
    "meaningVi": "Chó",
    "topicId": 47,
    "topicName": "Động vật (Animals)"
  },
  {
    "word": "Cat",
    "pos": "n",
    "ipa": "/kæt/",
    "meaningVi": "Mèo",
    "topicId": 47,
    "topicName": "Động vật (Animals)"
  },
  {
    "word": "Chicken",
    "pos": "n",
    "ipa": "/ˈtʃɪk.ɪn/",
    "meaningVi": "Gà",
    "topicId": 47,
    "topicName": "Động vật (Animals)"
  },
  {
    "word": "Rooster",
    "pos": "n",
    "ipa": "/ˈruː.stər/",
    "meaningVi": "Gàtrống",
    "topicId": 47,
    "topicName": "Động vật (Animals)"
  },
  {
    "word": "Hen",
    "pos": "n",
    "ipa": "/hɛn/",
    "meaningVi": "Gàmái",
    "topicId": 47,
    "topicName": "Động vật (Animals)"
  },
  {
    "word": "Cow",
    "pos": "n",
    "ipa": "/kaʊ/",
    "meaningVi": "Bòcái",
    "topicId": 47,
    "topicName": "Động vật (Animals)"
  },
  {
    "word": "Bull",
    "pos": "n",
    "ipa": "/bʊl/",
    "meaningVi": "Bòđực",
    "topicId": 47,
    "topicName": "Động vật (Animals)"
  },
  {
    "word": "Calf",
    "pos": "n",
    "ipa": "/kɑːf/",
    "meaningVi": "Bê",
    "topicId": 47,
    "topicName": "Động vật (Animals)"
  },
  {
    "word": "Rabbit",
    "pos": "n",
    "ipa": "/ˈræb.ɪt/",
    "meaningVi": "Thỏ",
    "topicId": 47,
    "topicName": "Động vật (Animals)"
  },
  {
    "word": "Owl",
    "pos": "n",
    "ipa": "/aʊl/",
    "meaningVi": "Cú",
    "topicId": 47,
    "topicName": "Động vật (Animals)"
  },
  {
    "word": "Deer",
    "pos": "n",
    "ipa": "/dɪr/",
    "meaningVi": "Hươu,nai",
    "topicId": 47,
    "topicName": "Động vật (Animals)"
  },
  {
    "word": "Mink",
    "pos": "n",
    "ipa": "/mɪŋk/",
    "meaningVi": "Chồnvizon",
    "topicId": 47,
    "topicName": "Động vật (Animals)"
  },
  {
    "word": "Monkey",
    "pos": "n",
    "ipa": "/ˈmʌŋ.ki/",
    "meaningVi": "Khỉ",
    "topicId": 47,
    "topicName": "Động vật (Animals)"
  },
  {
    "word": "Snake",
    "pos": "n",
    "ipa": "/sneɪk/",
    "meaningVi": "Rắn",
    "topicId": 47,
    "topicName": "Động vật (Animals)"
  },
  {
    "word": "Lizard",
    "pos": "n",
    "ipa": "/ˈlɪz.ərd/",
    "meaningVi": "Thằnlằn",
    "topicId": 47,
    "topicName": "Động vật (Animals)"
  },
  {
    "word": "Giraffe",
    "pos": "n",
    "ipa": "/dʒəˈræf/",
    "meaningVi": "Hươucaocổ",
    "topicId": 47,
    "topicName": "Động vật (Animals)"
  },
  {
    "word": "Bear",
    "pos": "n",
    "ipa": "/bɛr/",
    "meaningVi": "Gấu",
    "topicId": 47,
    "topicName": "Động vật (Animals)"
  },
  {
    "word": "Rhino",
    "pos": "n",
    "ipa": "/ˈraɪ.noʊ/",
    "meaningVi": "Têgiác",
    "topicId": 47,
    "topicName": "Động vật (Animals)"
  },
  {
    "word": "Elephant",
    "pos": "n",
    "ipa": "/ˈɛl.ɪ.fənt/",
    "meaningVi": "Voi",
    "topicId": 47,
    "topicName": "Động vật (Animals)"
  },
  {
    "word": "Panther",
    "pos": "n",
    "ipa": "/ˈpæn.θər/",
    "meaningVi": "Báođen",
    "topicId": 47,
    "topicName": "Động vật (Animals)"
  },
  {
    "word": "Leopard",
    "pos": "n",
    "ipa": "/ˈlɛp.ərd/",
    "meaningVi": "Báo",
    "topicId": 47,
    "topicName": "Động vật (Animals)"
  },
  {
    "word": "Tiger",
    "pos": "n",
    "ipa": "/ˈtaɪ.ɡər/",
    "meaningVi": "Hổ",
    "topicId": 47,
    "topicName": "Động vật (Animals)"
  },
  {
    "word": "Lion",
    "pos": "n",
    "ipa": "/ˈlaɪ.ən/",
    "meaningVi": "Sưtử",
    "topicId": 47,
    "topicName": "Động vật (Animals)"
  },
  {
    "word": "Fox",
    "pos": "n",
    "ipa": "/fɒks/",
    "meaningVi": "Cáo",
    "topicId": 47,
    "topicName": "Động vật (Animals)"
  },
  {
    "word": "Dinosaur",
    "pos": "n",
    "ipa": "/ˈdaɪ.nəˌsɔːr/",
    "meaningVi": "Khủnglong",
    "topicId": 47,
    "topicName": "Động vật (Animals)"
  },
  {
    "word": "Turtle",
    "pos": "n",
    "ipa": "/ˈtɜːr.təl/",
    "meaningVi": "Rùabiển",
    "topicId": 47,
    "topicName": "Động vật (Animals)"
  },
  {
    "word": "Snail",
    "pos": "n",
    "ipa": "/sneɪl/",
    "meaningVi": "Ốcsên",
    "topicId": 47,
    "topicName": "Động vật (Animals)"
  },
  {
    "word": "Crow",
    "pos": "n",
    "ipa": "/kroʊ/",
    "meaningVi": "Quạ",
    "topicId": 47,
    "topicName": "Động vật (Animals)"
  },
  {
    "word": "Parrot",
    "pos": "n",
    "ipa": "/ˈpær.ət/",
    "meaningVi": "Vẹt",
    "topicId": 47,
    "topicName": "Động vật (Animals)"
  },
  {
    "word": "Caterpillar",
    "pos": "n",
    "ipa": "/ˈkæt.ərˌpɪl.ər/",
    "meaningVi": "Sâubướm",
    "topicId": 48,
    "topicName": "Côn trùng (Insects)"
  },
  {
    "word": "Cocoon",
    "pos": "n",
    "ipa": "/kəˈkuːn/",
    "meaningVi": "Cáikén(tằm)",
    "topicId": 48,
    "topicName": "Côn trùng (Insects)"
  },
  {
    "word": "Butterfly",
    "pos": "n",
    "ipa": "/ˈbʌt.ərˌflaɪ/",
    "meaningVi": "Bướm",
    "topicId": 48,
    "topicName": "Côn trùng (Insects)"
  },
  {
    "word": "Dragonfly",
    "pos": "n",
    "ipa": "/ˈdræɡ.ənˌflaɪ/",
    "meaningVi": "Chuồnchuồn",
    "topicId": 48,
    "topicName": "Côn trùng (Insects)"
  },
  {
    "word": "Cricket",
    "pos": "n",
    "ipa": "/ˈkrɪk.ɪt/",
    "meaningVi": "Dế",
    "topicId": 48,
    "topicName": "Côn trùng (Insects)"
  },
  {
    "word": "Grasshopper",
    "pos": "n",
    "ipa": "/ˈɡræsˌhɒp.ər/",
    "meaningVi": "Châuchấu",
    "topicId": 48,
    "topicName": "Côn trùng (Insects)"
  },
  {
    "word": "Cockroach",
    "pos": "n",
    "ipa": "/ˈkɒkˌroʊtʃ/",
    "meaningVi": "Gián",
    "topicId": 48,
    "topicName": "Côn trùng (Insects)"
  },
  {
    "word": "Beetle",
    "pos": "n",
    "ipa": "/ˈbiː.təl/",
    "meaningVi": "Bọcánhcứng",
    "topicId": 48,
    "topicName": "Côn trùng (Insects)"
  },
  {
    "word": "Termite",
    "pos": "n",
    "ipa": "/ˈtɜːr.maɪt/",
    "meaningVi": "Mối",
    "topicId": 48,
    "topicName": "Côn trùng (Insects)"
  },
  {
    "word": "Ant",
    "pos": "n",
    "ipa": "/ænt/",
    "meaningVi": "Kiến",
    "topicId": 48,
    "topicName": "Côn trùng (Insects)"
  },
  {
    "word": "Mosquito",
    "pos": "n",
    "ipa": "/məˈskiː.toʊ/",
    "meaningVi": "Muỗi",
    "topicId": 48,
    "topicName": "Côn trùng (Insects)"
  },
  {
    "word": "Ladybug",
    "pos": "n",
    "ipa": "/ˈleɪ.diˌbʌɡ/",
    "meaningVi": "Bọrùa",
    "topicId": 48,
    "topicName": "Côn trùng (Insects)"
  },
  {
    "word": "Spider",
    "pos": "n",
    "ipa": "/ˈspaɪ.dər/",
    "meaningVi": "Nhện",
    "topicId": 48,
    "topicName": "Côn trùng (Insects)"
  },
  {
    "word": "Firefly",
    "pos": "n",
    "ipa": "/ˈfaɪrˌflaɪ/",
    "meaningVi": "Đomđóm",
    "topicId": 48,
    "topicName": "Côn trùng (Insects)"
  },
  {
    "word": "Fly",
    "pos": "n",
    "ipa": "/flaɪ/",
    "meaningVi": "Ruồi",
    "topicId": 48,
    "topicName": "Côn trùng (Insects)"
  },
  {
    "word": "Bee",
    "pos": "n",
    "ipa": "/biː/",
    "meaningVi": "Ong",
    "topicId": 48,
    "topicName": "Côn trùng (Insects)"
  },
  {
    "word": "Wasp",
    "pos": "n",
    "ipa": "/wɒsp/",
    "meaningVi": "Ongbắpcày",
    "topicId": 48,
    "topicName": "Côn trùng (Insects)"
  },
  {
    "word": "Centipede",
    "pos": "n",
    "ipa": "/ˈsɛn.tɪˌpiːd/",
    "meaningVi": "Rết",
    "topicId": 48,
    "topicName": "Côn trùng (Insects)"
  },
  {
    "word": "Class",
    "pos": "n",
    "ipa": "/klæs/",
    "meaningVi": "Lớphọc",
    "topicId": 49,
    "topicName": "Học tập (Studying & Learning)"
  },
  {
    "word": "Classroom",
    "pos": "n",
    "ipa": "/ˈklæsˌruːm/",
    "meaningVi": "Phònghọc",
    "topicId": 49,
    "topicName": "Học tập (Studying & Learning)"
  },
  {
    "word": "Textbook",
    "pos": "n",
    "ipa": "/ˈtɛkstˌbʊk/",
    "meaningVi": "Sáchgiáokhoa",
    "topicId": 49,
    "topicName": "Học tập (Studying & Learning)"
  },
  {
    "word": "Workbook",
    "pos": "n",
    "ipa": "/ˈwɜːkˌbʊk/",
    "meaningVi": "Sáchbàitập",
    "topicId": 49,
    "topicName": "Học tập (Studying & Learning)"
  },
  {
    "word": "Referencebook",
    "pos": "n. phr",
    "ipa": "/ˈrɛf.ər.əns ˌbʊk/",
    "meaningVi": "Sáchthamkhảo",
    "topicId": 49,
    "topicName": "Học tập (Studying & Learning)"
  },
  {
    "word": "Notebook",
    "pos": "n",
    "ipa": "/ˈnoʊtˌbʊk/",
    "meaningVi": "Vở",
    "topicId": 49,
    "topicName": "Học tập (Studying & Learning)"
  },
  {
    "word": "Notepad",
    "pos": "n",
    "ipa": "/ˈnoʊtˌpæd/",
    "meaningVi": "Sổghichép",
    "topicId": 49,
    "topicName": "Học tập (Studying & Learning)"
  },
  {
    "word": "Pencil",
    "pos": "n",
    "ipa": "/ˈpɛn.səl/",
    "meaningVi": "Bútchì",
    "topicId": 49,
    "topicName": "Học tập (Studying & Learning)"
  },
  {
    "word": "Crayon",
    "pos": "n",
    "ipa": "/ˈkreɪ.ɒn/",
    "meaningVi": "Bútchìmàu",
    "topicId": 49,
    "topicName": "Học tập (Studying & Learning)"
  },
  {
    "word": "Pencilsharpener",
    "pos": "n. phr",
    "ipa": "/ˈpɛn.səl ˌʃɑːp.nər/",
    "meaningVi": "Đồgọtbútchì",
    "topicId": 49,
    "topicName": "Học tập (Studying & Learning)"
  },
  {
    "word": "Eraser",
    "pos": "n",
    "ipa": "/ɪˈreɪ.zər/",
    "meaningVi": "Cụctẩy",
    "topicId": 49,
    "topicName": "Học tập (Studying & Learning)"
  },
  {
    "word": "Pen",
    "pos": "n",
    "ipa": "/pɛn/",
    "meaningVi": "Bútmực",
    "topicId": 49,
    "topicName": "Học tập (Studying & Learning)"
  },
  {
    "word": "Ballpoint pen",
    "pos": "n. phr",
    "ipa": "/ˈbɔːl.pɔɪnt ˌpɛn/",
    "meaningVi": "Bútbi",
    "topicId": 49,
    "topicName": "Học tập (Studying & Learning)"
  },
  {
    "word": "Paper",
    "pos": "n",
    "ipa": "/ˈpeɪ.pər/",
    "meaningVi": "Giấy",
    "topicId": 49,
    "topicName": "Học tập (Studying & Learning)"
  },
  {
    "word": "Desk",
    "pos": "n",
    "ipa": "/dɛsk/",
    "meaningVi": "Bànhọc",
    "topicId": 49,
    "topicName": "Học tập (Studying & Learning)"
  },
  {
    "word": "Map",
    "pos": "n",
    "ipa": "/mæp/",
    "meaningVi": "Bảnđồ",
    "topicId": 49,
    "topicName": "Học tập (Studying & Learning)"
  },
  {
    "word": "Glue",
    "pos": "n",
    "ipa": "/ɡluː/",
    "meaningVi": "Hồdán",
    "topicId": 49,
    "topicName": "Học tập (Studying & Learning)"
  },
  {
    "word": "Scissors",
    "pos": "n",
    "ipa": "/ˈsɪz.ərz/",
    "meaningVi": "Kéo",
    "topicId": 49,
    "topicName": "Học tập (Studying & Learning)"
  },
  {
    "word": "Ruler",
    "pos": "n",
    "ipa": "/ˈruː.lər/",
    "meaningVi": "Thước",
    "topicId": 49,
    "topicName": "Học tập (Studying & Learning)"
  },
  {
    "word": "Protractor",
    "pos": "n",
    "ipa": "/prəˈtræk.tər/",
    "meaningVi": "Thướcđogóc",
    "topicId": 49,
    "topicName": "Học tập (Studying & Learning)"
  },
  {
    "word": "Ink",
    "pos": "n",
    "ipa": "/ɪŋk/",
    "meaningVi": "Mực",
    "topicId": 49,
    "topicName": "Học tập (Studying & Learning)"
  },
  {
    "word": "Chalk",
    "pos": "n",
    "ipa": "/tʃɔːk/",
    "meaningVi": "Phấn",
    "topicId": 49,
    "topicName": "Học tập (Studying & Learning)"
  },
  {
    "word": "Folder",
    "pos": "n",
    "ipa": "/ˈfoʊl.dər/",
    "meaningVi": "Thưmục",
    "topicId": 49,
    "topicName": "Học tập (Studying & Learning)"
  },
  {
    "word": "Tree",
    "pos": "n",
    "ipa": "/triː/",
    "meaningVi": "Cây",
    "topicId": 50,
    "topicName": "Thực vật (Plants & Trees)"
  },
  {
    "word": "Pine",
    "pos": "n",
    "ipa": "/paɪn/",
    "meaningVi": "Câythông",
    "topicId": 50,
    "topicName": "Thực vật (Plants & Trees)"
  },
  {
    "word": "Cedar",
    "pos": "n",
    "ipa": "/ˈsiː.dər/",
    "meaningVi": "Câytuyếttùng",
    "topicId": 50,
    "topicName": "Thực vật (Plants & Trees)"
  },
  {
    "word": "Oak",
    "pos": "n",
    "ipa": "/oʊk/",
    "meaningVi": "Câysồi",
    "topicId": 50,
    "topicName": "Thực vật (Plants & Trees)"
  },
  {
    "word": "Ivy",
    "pos": "n",
    "ipa": "/ˈaɪ.vi/",
    "meaningVi": "Dâythườngxuân",
    "topicId": 50,
    "topicName": "Thực vật (Plants & Trees)"
  },
  {
    "word": "Moss",
    "pos": "n",
    "ipa": "/mɔːs/",
    "meaningVi": "Rêu",
    "topicId": 50,
    "topicName": "Thực vật (Plants & Trees)"
  },
  {
    "word": "Mushroom",
    "pos": "n",
    "ipa": "/ˈmʌʃ.rʊm/",
    "meaningVi": "Nấm",
    "topicId": 50,
    "topicName": "Thực vật (Plants & Trees)"
  },
  {
    "word": "Wheat",
    "pos": "n",
    "ipa": "/wiːt/",
    "meaningVi": "Lúamì",
    "topicId": 50,
    "topicName": "Thực vật (Plants & Trees)"
  },
  {
    "word": "Corn",
    "pos": "n",
    "ipa": "/kɔːrn/",
    "meaningVi": "Bắp,ngô",
    "topicId": 50,
    "topicName": "Thực vật (Plants & Trees)"
  },
  {
    "word": "Flower",
    "pos": "n",
    "ipa": "/ˈflaʊ.ər/",
    "meaningVi": "Hoa",
    "topicId": 50,
    "topicName": "Thực vật (Plants & Trees)"
  },
  {
    "word": "Grass",
    "pos": "n",
    "ipa": "/ɡræs/",
    "meaningVi": "Cỏ",
    "topicId": 50,
    "topicName": "Thực vật (Plants & Trees)"
  },
  {
    "word": "Herb",
    "pos": "n",
    "ipa": "/hɜːrb/",
    "meaningVi": "Thảomộc",
    "topicId": 50,
    "topicName": "Thực vật (Plants & Trees)"
  },
  {
    "word": "Bush",
    "pos": "n",
    "ipa": "/bʊʃ/",
    "meaningVi": "Bụicây,bụirậm",
    "topicId": 50,
    "topicName": "Thực vật (Plants & Trees)"
  },
  {
    "word": "Coconuttree",
    "pos": "n. phr",
    "ipa": "/ˈkoʊ.kəˌnʌttriː/",
    "meaningVi": "Câydừa",
    "topicId": 50,
    "topicName": "Thực vật (Plants & Trees)"
  },
  {
    "word": "Appletree",
    "pos": "n. phr",
    "ipa": "/ˈæpəltriː/",
    "meaningVi": "Câytáo",
    "topicId": 50,
    "topicName": "Thực vật (Plants & Trees)"
  },
  {
    "word": "Shrubland",
    "pos": "n",
    "ipa": "/ˈʃrʌblænd/",
    "meaningVi": "Vùngcâybụi",
    "topicId": 50,
    "topicName": "Thực vật (Plants & Trees)"
  },
  {
    "word": "Denmark",
    "pos": "n",
    "ipa": "/ˈdɛnˌmɑːrk/",
    "meaningVi": "ĐanMạch",
    "topicId": 51,
    "topicName": "Quốc gia (Countries & Nations)"
  },
  {
    "word": "England",
    "pos": "n",
    "ipa": "/ˈɪŋ.ɡlənd/",
    "meaningVi": "Anh",
    "topicId": 51,
    "topicName": "Quốc gia (Countries & Nations)"
  },
  {
    "word": "Sweden",
    "pos": "n",
    "ipa": "/ˈswiː.dən/",
    "meaningVi": "ThụyĐiển",
    "topicId": 51,
    "topicName": "Quốc gia (Countries & Nations)"
  },
  {
    "word": "Austria",
    "pos": "n",
    "ipa": "/ˈɒs.tri.ə/",
    "meaningVi": "Áo",
    "topicId": 51,
    "topicName": "Quốc gia (Countries & Nations)"
  },
  {
    "word": "Australia",
    "pos": "n",
    "ipa": "/ɒˈstreɪlɪə/",
    "meaningVi": "Úc",
    "topicId": 51,
    "topicName": "Quốc gia (Countries & Nations)"
  },
  {
    "word": "France",
    "pos": "n",
    "ipa": "/fræns/",
    "meaningVi": "Pháp",
    "topicId": 51,
    "topicName": "Quốc gia (Countries & Nations)"
  },
  {
    "word": "Germany",
    "pos": "n",
    "ipa": "/ˈdʒɜː.mə.ni/",
    "meaningVi": "Đức",
    "topicId": 51,
    "topicName": "Quốc gia (Countries & Nations)"
  },
  {
    "word": "Switzerland",
    "pos": "n",
    "ipa": "/ˈswɪtsərlənd/",
    "meaningVi": "ThụySĩ",
    "topicId": 51,
    "topicName": "Quốc gia (Countries & Nations)"
  },
  {
    "word": "Greece",
    "pos": "n",
    "ipa": "/ɡriːs/",
    "meaningVi": "HyLạp",
    "topicId": 51,
    "topicName": "Quốc gia (Countries & Nations)"
  },
  {
    "word": "Italy",
    "pos": "n",
    "ipa": "/ˈɪtəli/",
    "meaningVi": "Ý",
    "topicId": 51,
    "topicName": "Quốc gia (Countries & Nations)"
  },
  {
    "word": "Spain",
    "pos": "n",
    "ipa": "/speɪn/",
    "meaningVi": "TâyBanNha",
    "topicId": 51,
    "topicName": "Quốc gia (Countries & Nations)"
  },
  {
    "word": "Russia",
    "pos": "n",
    "ipa": "/ˈrʌʃə/",
    "meaningVi": "Nga",
    "topicId": 51,
    "topicName": "Quốc gia (Countries & Nations)"
  },
  {
    "word": "Canada",
    "pos": "n",
    "ipa": "/ˈkænədə/",
    "meaningVi": "Canada",
    "topicId": 51,
    "topicName": "Quốc gia (Countries & Nations)"
  },
  {
    "word": "Mexico",
    "pos": "n",
    "ipa": "/ˈmɛksɪkoʊ/",
    "meaningVi": "Mêxicô",
    "topicId": 51,
    "topicName": "Quốc gia (Countries & Nations)"
  },
  {
    "word": "America",
    "pos": "n",
    "ipa": "/əˈmɛrɪkə/",
    "meaningVi": "Mỹ",
    "topicId": 51,
    "topicName": "Quốc gia (Countries & Nations)"
  },
  {
    "word": "Brazil",
    "pos": "n",
    "ipa": "/brəˈzɪl/",
    "meaningVi": "Braxin",
    "topicId": 51,
    "topicName": "Quốc gia (Countries & Nations)"
  },
  {
    "word": "Japan",
    "pos": "n",
    "ipa": "/dʒəˈpæn/",
    "meaningVi": "NhậtBản",
    "topicId": 51,
    "topicName": "Quốc gia (Countries & Nations)"
  },
  {
    "word": "Korea",
    "pos": "n",
    "ipa": "/kəˈriə/",
    "meaningVi": "HànQuốc",
    "topicId": 51,
    "topicName": "Quốc gia (Countries & Nations)"
  },
  {
    "word": "China",
    "pos": "n",
    "ipa": "/ˈtʃaɪ.nə/",
    "meaningVi": "TrungQuốc",
    "topicId": 51,
    "topicName": "Quốc gia (Countries & Nations)"
  },
  {
    "word": "Herring",
    "pos": "n",
    "ipa": "/ˈhɛr.ɪŋ/",
    "meaningVi": "Cátrích",
    "topicId": 52,
    "topicName": "Hải sản (Seafood)"
  },
  {
    "word": "Skate",
    "pos": "n",
    "ipa": "/skeɪt/",
    "meaningVi": "Cáđuối",
    "topicId": 52,
    "topicName": "Hải sản (Seafood)"
  },
  {
    "word": "Salmon",
    "pos": "n",
    "ipa": "/ˈsæmən/",
    "meaningVi": "Cáhồi",
    "topicId": 52,
    "topicName": "Hải sản (Seafood)"
  },
  {
    "word": "Prawn",
    "pos": "n",
    "ipa": "/prɔːn/",
    "meaningVi": "Tôm",
    "topicId": 52,
    "topicName": "Hải sản (Seafood)"
  },
  {
    "word": "Cuttleffsh",
    "pos": "n",
    "ipa": "/ˈkʌtəl.fɪʃ/",
    "meaningVi": "Mựcnang",
    "topicId": 52,
    "topicName": "Hải sản (Seafood)"
  },
  {
    "word": "Lobster",
    "pos": "n",
    "ipa": "/ˈlɒbstər/",
    "meaningVi": "Tômhùm",
    "topicId": 52,
    "topicName": "Hải sản (Seafood)"
  },
  {
    "word": "Squid",
    "pos": "n",
    "ipa": "/skwɪd/",
    "meaningVi": "Mựcống",
    "topicId": 52,
    "topicName": "Hải sản (Seafood)"
  },
  {
    "word": "Shrimp",
    "pos": "n",
    "ipa": "/ʃrɪmp/",
    "meaningVi": "Tôm",
    "topicId": 52,
    "topicName": "Hải sản (Seafood)"
  },
  {
    "word": "Oyster",
    "pos": "n",
    "ipa": "/ˈɔɪ.stər/",
    "meaningVi": "Hàu",
    "topicId": 52,
    "topicName": "Hải sản (Seafood)"
  },
  {
    "word": "Crab",
    "pos": "n",
    "ipa": "/kræb/",
    "meaningVi": "Cua",
    "topicId": 52,
    "topicName": "Hải sản (Seafood)"
  },
  {
    "word": "Cockle",
    "pos": "n",
    "ipa": "/ˈkɒk.əl/",
    "meaningVi": "Sò",
    "topicId": 52,
    "topicName": "Hải sản (Seafood)"
  },
  {
    "word": "Scallop",
    "pos": "n",
    "ipa": "/ˈskɒl.əp/",
    "meaningVi": "Sòđiệp",
    "topicId": 52,
    "topicName": "Hải sản (Seafood)"
  },
  {
    "word": "Octopus",
    "pos": "n",
    "ipa": "/ˈɒk.tə.pʊs/",
    "meaningVi": "Bạchtuộc",
    "topicId": 52,
    "topicName": "Hải sản (Seafood)"
  },
  {
    "word": "Fish",
    "pos": "n",
    "ipa": "/fɪʃ/",
    "meaningVi": "Cá",
    "topicId": 52,
    "topicName": "Hải sản (Seafood)"
  },
  {
    "word": "Eel",
    "pos": "n",
    "ipa": "/iːl/",
    "meaningVi": "Lươn",
    "topicId": 52,
    "topicName": "Hải sản (Seafood)"
  },
  {
    "word": "Mussel",
    "pos": "n",
    "ipa": "/ˈmʌsəl/",
    "meaningVi": "Vẹm",
    "topicId": 52,
    "topicName": "Hải sản (Seafood)"
  },
  {
    "word": "Clam",
    "pos": "n",
    "ipa": "/klæm/",
    "meaningVi": "Nghêu",
    "topicId": 52,
    "topicName": "Hải sản (Seafood)"
  },
  {
    "word": "Jellyffsh",
    "pos": "n",
    "ipa": "/ˈdʒɛliˌfɪʃ/",
    "meaningVi": "Sứa",
    "topicId": 52,
    "topicName": "Hải sản (Seafood)"
  },
  {
    "word": "Charcoal",
    "pos": "n",
    "ipa": "/ˈtʃɑːrˌkoʊl/",
    "meaningVi": "Thancủi",
    "topicId": 53,
    "topicName": "Năng lượng (Energy & Power)"
  },
  {
    "word": "Battery",
    "pos": "n",
    "ipa": "/ˈbætəri/",
    "meaningVi": "Pin",
    "topicId": 53,
    "topicName": "Năng lượng (Energy & Power)"
  },
  {
    "word": "Gasoline",
    "pos": "n",
    "ipa": "/ˈɡæsəˌliːn/",
    "meaningVi": "Xăng",
    "topicId": 53,
    "topicName": "Năng lượng (Energy & Power)"
  },
  {
    "word": "Turbine",
    "pos": "n",
    "ipa": "/ˈtɜr.baɪn/",
    "meaningVi": "Tua-bin",
    "topicId": 53,
    "topicName": "Năng lượng (Energy & Power)"
  },
  {
    "word": "Sun",
    "pos": "n",
    "ipa": "/sʌn/",
    "meaningVi": "Mặttrời",
    "topicId": 53,
    "topicName": "Năng lượng (Energy & Power)"
  },
  {
    "word": "Wind",
    "pos": "n",
    "ipa": "/wɪnd/",
    "meaningVi": "Gió",
    "topicId": 53,
    "topicName": "Năng lượng (Energy & Power)"
  },
  {
    "word": "Waterfall",
    "pos": "n",
    "ipa": "/ˈwɔːtərˌfɔːl/",
    "meaningVi": "Thácnước",
    "topicId": 53,
    "topicName": "Năng lượng (Energy & Power)"
  },
  {
    "word": "Reffnery",
    "pos": "n",
    "ipa": "/rɪˈfaɪnəri/",
    "meaningVi": "Nhàmáylọc",
    "topicId": 53,
    "topicName": "Năng lượng (Energy & Power)"
  },
  {
    "word": "Nuclearreactor",
    "pos": "n. phr",
    "ipa": "/ˈnjuː.kliər riˈæktər/",
    "meaningVi": "Lòphảnứnghạt",
    "topicId": 53,
    "topicName": "Năng lượng (Energy & Power)"
  },
  {
    "word": "Dam",
    "pos": "n",
    "ipa": "/dæm/",
    "meaningVi": "Đập(thủyđiện)",
    "topicId": 53,
    "topicName": "Năng lượng (Energy & Power)"
  },
  {
    "word": "Powerplant",
    "pos": "n. phr",
    "ipa": "/ˈpaʊərplænt/",
    "meaningVi": "Nhàmáyđiện",
    "topicId": 53,
    "topicName": "Năng lượng (Energy & Power)"
  },
  {
    "word": "Transformer",
    "pos": "n",
    "ipa": "/trænsˈfɔːrmər/",
    "meaningVi": "Máybiếnthế",
    "topicId": 53,
    "topicName": "Năng lượng (Energy & Power)"
  },
  {
    "word": "Heat",
    "pos": "v",
    "ipa": "/hiːt/",
    "meaningVi": "Sưởiấm,làmnóng",
    "topicId": 53,
    "topicName": "Năng lượng (Energy & Power)"
  },
  {
    "word": "Naturalgas",
    "pos": "n. phr",
    "ipa": "/ˈnætʃərəlɡæs/",
    "meaningVi": "Khítựnhiên",
    "topicId": 53,
    "topicName": "Năng lượng (Energy & Power)"
  },
  {
    "word": "Diesel",
    "pos": "n",
    "ipa": "/ˈdiːzəl/",
    "meaningVi": "Dầuđi-ê-zen",
    "topicId": 53,
    "topicName": "Năng lượng (Energy & Power)"
  },
  {
    "word": "Solar power",
    "pos": "n. phr",
    "ipa": "/ˈsoʊlərˈpaʊər/",
    "meaningVi": "Nănglượngmặttrời",
    "topicId": 53,
    "topicName": "Năng lượng (Energy & Power)"
  },
  {
    "word": "Dancer",
    "pos": "n",
    "ipa": "/ˈdæn.sər/",
    "meaningVi": "Vũcông",
    "topicId": 54,
    "topicName": "Nghề nghiệp (Jobs & Occupations)"
  },
  {
    "word": "Designer",
    "pos": "n",
    "ipa": "/dɪˈzaɪ.nər/",
    "meaningVi": "Nhàthiếtkế",
    "topicId": 54,
    "topicName": "Nghề nghiệp (Jobs & Occupations)"
  },
  {
    "word": "Magician",
    "pos": "n",
    "ipa": "/məˈdʒɪʃ.ən/",
    "meaningVi": "Nhàảothuật",
    "topicId": 54,
    "topicName": "Nghề nghiệp (Jobs & Occupations)"
  },
  {
    "word": "Tourguide",
    "pos": "n. phr",
    "ipa": "/tʊrɡaɪd/",
    "meaningVi": "Hướngdẫnviêndu",
    "topicId": 54,
    "topicName": "Nghề nghiệp (Jobs & Occupations)"
  },
  {
    "word": "Sailor",
    "pos": "n",
    "ipa": "/ˈseɪ.lər/",
    "meaningVi": "Thủythủ",
    "topicId": 54,
    "topicName": "Nghề nghiệp (Jobs & Occupations)"
  },
  {
    "word": "Commentator",
    "pos": "n",
    "ipa": "/ˈkɒm.ənˌteɪ.tər/",
    "meaningVi": "Bìnhluậnviên",
    "topicId": 54,
    "topicName": "Nghề nghiệp (Jobs & Occupations)"
  },
  {
    "word": "Dentist",
    "pos": "n",
    "ipa": "/ˈdɛn.tɪst/",
    "meaningVi": "Nhasĩ",
    "topicId": 54,
    "topicName": "Nghề nghiệp (Jobs & Occupations)"
  },
  {
    "word": "Postman",
    "pos": "n",
    "ipa": "/ˈpoʊst.mæn/",
    "meaningVi": "Ngườiđưathư",
    "topicId": 54,
    "topicName": "Nghề nghiệp (Jobs & Occupations)"
  },
  {
    "word": "Writer",
    "pos": "n",
    "ipa": "/ˈraɪ.tər/",
    "meaningVi": "Nhàvăn",
    "topicId": 54,
    "topicName": "Nghề nghiệp (Jobs & Occupations)"
  },
  {
    "word": "Pilot",
    "pos": "n",
    "ipa": "/ˈpaɪ.lət/",
    "meaningVi": "Phicông",
    "topicId": 54,
    "topicName": "Nghề nghiệp (Jobs & Occupations)"
  },
  {
    "word": "Plumber",
    "pos": "n",
    "ipa": "/ˈplʌm.ər/",
    "meaningVi": "Thợsửachữaống",
    "topicId": 54,
    "topicName": "Nghề nghiệp (Jobs & Occupations)"
  },
  {
    "word": "Tailor",
    "pos": "n",
    "ipa": "/ˈteɪ.lər/",
    "meaningVi": "Thợmay",
    "topicId": 54,
    "topicName": "Nghề nghiệp (Jobs & Occupations)"
  },
  {
    "word": "Copywriter",
    "pos": "n",
    "ipa": "/ˈkɒp.iˌraɪ.tər/",
    "meaningVi": "Ngườiviếtbài",
    "topicId": 54,
    "topicName": "Nghề nghiệp (Jobs & Occupations)"
  },
  {
    "word": "Journalist",
    "pos": "n",
    "ipa": "/ˈdʒɜː.nə.lɪst/",
    "meaningVi": "Nhàbáo",
    "topicId": 54,
    "topicName": "Nghề nghiệp (Jobs & Occupations)"
  },
  {
    "word": "Grocer",
    "pos": "n",
    "ipa": "/ˈɡroʊ.sər/",
    "meaningVi": "Ngườibántạphóa",
    "topicId": 54,
    "topicName": "Nghề nghiệp (Jobs & Occupations)"
  },
  {
    "word": "Clerk",
    "pos": "n",
    "ipa": "/klɜrk/",
    "meaningVi": "Ngườithưký",
    "topicId": 54,
    "topicName": "Nghề nghiệp (Jobs & Occupations)"
  },
  {
    "word": "Assistant",
    "pos": "n",
    "ipa": "/əˈsɪs.tənt/",
    "meaningVi": "Trợlý",
    "topicId": 54,
    "topicName": "Nghề nghiệp (Jobs & Occupations)"
  },
  {
    "word": "Model",
    "pos": "n",
    "ipa": "/ˈmɒd.əl/",
    "meaningVi": "Ngườimẫu",
    "topicId": 54,
    "topicName": "Nghề nghiệp (Jobs & Occupations)"
  },
  {
    "word": "Freelancer",
    "pos": "n",
    "ipa": "/ˈfriːˌlænsər/",
    "meaningVi": "Ngườilàmviệctự",
    "topicId": 54,
    "topicName": "Nghề nghiệp (Jobs & Occupations)"
  },
  {
    "word": "Consultant",
    "pos": "n",
    "ipa": "/kənˈsʌl.tənt/",
    "meaningVi": "Chuyênviêntưvấn",
    "topicId": 54,
    "topicName": "Nghề nghiệp (Jobs & Occupations)"
  },
  {
    "word": "Self-employed",
    "pos": "adj",
    "ipa": "/ˌsɛlfɪmˈplɔɪd/",
    "meaningVi": "Tựlàmchủ",
    "topicId": 54,
    "topicName": "Nghề nghiệp (Jobs & Occupations)"
  },
  {
    "word": "Supervisor",
    "pos": "n",
    "ipa": "/ˈsuː.pərˌvaɪ.zər/",
    "meaningVi": "Giámsátviên",
    "topicId": 54,
    "topicName": "Nghề nghiệp (Jobs & Occupations)"
  },
  {
    "word": "Salesmanager",
    "pos": "n. phr",
    "ipa": "/seɪlz ˈmæn.ɪ.dʒər/",
    "meaningVi": "Giámđốckinh",
    "topicId": 54,
    "topicName": "Nghề nghiệp (Jobs & Occupations)"
  },
  {
    "word": "Mechanic",
    "pos": "n",
    "ipa": "/məˈkæn.ɪk/",
    "meaningVi": "Thợcơkhí",
    "topicId": 54,
    "topicName": "Nghề nghiệp (Jobs & Occupations)"
  },
  {
    "word": "Hairdresser",
    "pos": "n",
    "ipa": "/ˈhɛərˌdrɛs.ər/",
    "meaningVi": "Thợcắttóc",
    "topicId": 54,
    "topicName": "Nghề nghiệp (Jobs & Occupations)"
  },
  {
    "word": "Architect",
    "pos": "n",
    "ipa": "/ˈɑːrkɪˌtɛkt/",
    "meaningVi": "Kiếntrúcsư",
    "topicId": 54,
    "topicName": "Nghề nghiệp (Jobs & Occupations)"
  },
  {
    "word": "Engineer",
    "pos": "n",
    "ipa": "/ˌɛn.dʒɪˈnɪər/",
    "meaningVi": "Kỹsư",
    "topicId": 54,
    "topicName": "Nghề nghiệp (Jobs & Occupations)"
  },
  {
    "word": "Vet",
    "pos": "n",
    "ipa": "/vɛt/",
    "meaningVi": "Bácsĩthúy",
    "topicId": 54,
    "topicName": "Nghề nghiệp (Jobs & Occupations)"
  },
  {
    "word": "Shoemaker",
    "pos": "n",
    "ipa": "/ˈʃuːˌmeɪ.kər/",
    "meaningVi": "Thợđónggiày",
    "topicId": 54,
    "topicName": "Nghề nghiệp (Jobs & Occupations)"
  },
  {
    "word": "Translator",
    "pos": "n",
    "ipa": "/trænzˈleɪ.tər/",
    "meaningVi": "Biêndịchviên",
    "topicId": 54,
    "topicName": "Nghề nghiệp (Jobs & Occupations)"
  },
  {
    "word": "Interpreter",
    "pos": "n",
    "ipa": "/ɪnˈtɜː.prɪ.tər/",
    "meaningVi": "Phiêndịchviên",
    "topicId": 54,
    "topicName": "Nghề nghiệp (Jobs & Occupations)"
  },
  {
    "word": "Policeoffcer",
    "pos": "n. phr",
    "ipa": "/pəˈliːs ˈɒfɪ.sər/",
    "meaningVi": "Cảnhsát",
    "topicId": 54,
    "topicName": "Nghề nghiệp (Jobs & Occupations)"
  },
  {
    "word": "Teacher",
    "pos": "n",
    "ipa": "/ˈtiː.tʃər/",
    "meaningVi": "Giáoviên",
    "topicId": 54,
    "topicName": "Nghề nghiệp (Jobs & Occupations)"
  },
  {
    "word": "Doctor",
    "pos": "n",
    "ipa": "/ˈdɒk.tər/",
    "meaningVi": "Bácsĩ",
    "topicId": 54,
    "topicName": "Nghề nghiệp (Jobs & Occupations)"
  },
  {
    "word": "Nurse",
    "pos": "n",
    "ipa": "/nɜrs/",
    "meaningVi": "Ytá",
    "topicId": 54,
    "topicName": "Nghề nghiệp (Jobs & Occupations)"
  },
  {
    "word": "Farmer",
    "pos": "n",
    "ipa": "/ˈfɑː.mər/",
    "meaningVi": "Nôngdân",
    "topicId": 54,
    "topicName": "Nghề nghiệp (Jobs & Occupations)"
  },
  {
    "word": "Keep-fft",
    "pos": "n",
    "ipa": "/kiːp-fɪt/",
    "meaningVi": "Thểdục",
    "topicId": 55,
    "topicName": "Chế độ ăn uống (Diet & Nutrition)"
  },
  {
    "word": "Regular",
    "pos": "adj",
    "ipa": "/ˈrɛɡ.jʊ.lər/",
    "meaningVi": "Thườngxuyên",
    "topicId": 55,
    "topicName": "Chế độ ăn uống (Diet & Nutrition)"
  },
  {
    "word": "Diabetes",
    "pos": "n",
    "ipa": "/ˌdaɪəˈbiːtiːz/",
    "meaningVi": "Bệnhtiểuđường",
    "topicId": 55,
    "topicName": "Chế độ ăn uống (Diet & Nutrition)"
  },
  {
    "word": "Dietitian",
    "pos": "n",
    "ipa": "/ˌdaɪɪˈtɪʃən/",
    "meaningVi": "Chuyêngiavềdinh",
    "topicId": 55,
    "topicName": "Chế độ ăn uống (Diet & Nutrition)"
  },
  {
    "word": "Goiter",
    "pos": "n",
    "ipa": "/ˈɡɔɪtər/",
    "meaningVi": "Bướucổ",
    "topicId": 55,
    "topicName": "Chế độ ăn uống (Diet & Nutrition)"
  },
  {
    "word": "Body",
    "pos": "n",
    "ipa": "/ˈbɒdi/",
    "meaningVi": "Cơthể",
    "topicId": 55,
    "topicName": "Chế độ ăn uống (Diet & Nutrition)"
  },
  {
    "word": "Thin",
    "pos": "adj",
    "ipa": "/θɪn/",
    "meaningVi": "Gầy,ốm",
    "topicId": 55,
    "topicName": "Chế độ ăn uống (Diet & Nutrition)"
  },
  {
    "word": "Dietary",
    "pos": "adj",
    "ipa": "/ˈdaɪəˌtɛri/",
    "meaningVi": "(thuộc)chếđộăn",
    "topicId": 55,
    "topicName": "Chế độ ăn uống (Diet & Nutrition)"
  },
  {
    "word": "Fat",
    "pos": "adj",
    "ipa": "/fæt/",
    "meaningVi": "Mập",
    "topicId": 55,
    "topicName": "Chế độ ăn uống (Diet & Nutrition)"
  },
  {
    "word": "Overweight",
    "pos": "adj",
    "ipa": "/ˌoʊvərˈweɪt/",
    "meaningVi": "Béo,thừacân",
    "topicId": 55,
    "topicName": "Chế độ ăn uống (Diet & Nutrition)"
  },
  {
    "word": "Eatingdisorder",
    "pos": "n. phr",
    "ipa": "/ˈiːtɪŋ dɪsˈɔːrdər/",
    "meaningVi": "Rốiloạnănuống",
    "topicId": 55,
    "topicName": "Chế độ ăn uống (Diet & Nutrition)"
  },
  {
    "word": "Nutrient",
    "pos": "n",
    "ipa": "/ˈnuːtriənt/",
    "meaningVi": "Chấtdinhdưỡng",
    "topicId": 55,
    "topicName": "Chế độ ăn uống (Diet & Nutrition)"
  },
  {
    "word": "Ingredient",
    "pos": "n",
    "ipa": "/ɪnˈɡriːdiənt/",
    "meaningVi": "Thànhphần,",
    "topicId": 55,
    "topicName": "Chế độ ăn uống (Diet & Nutrition)"
  },
  {
    "word": "Allergy",
    "pos": "n",
    "ipa": "/ˈælədʒi/",
    "meaningVi": "Dịứng",
    "topicId": 55,
    "topicName": "Chế độ ăn uống (Diet & Nutrition)"
  },
  {
    "word": "Vitamin",
    "pos": "n",
    "ipa": "/ˈvaɪtəmɪn/",
    "meaningVi": "Vi-ta-min",
    "topicId": 55,
    "topicName": "Chế độ ăn uống (Diet & Nutrition)"
  },
  {
    "word": "Overeat",
    "pos": "v",
    "ipa": "/ˌoʊvərˈiːt/",
    "meaningVi": "Ănquánhiều",
    "topicId": 55,
    "topicName": "Chế độ ăn uống (Diet & Nutrition)"
  },
  {
    "word": "Nutritious",
    "pos": "adj",
    "ipa": "/njuˈtrɪʃəs/",
    "meaningVi": "Bổdưỡng",
    "topicId": 55,
    "topicName": "Chế độ ăn uống (Diet & Nutrition)"
  },
  {
    "word": "Vegetarian",
    "pos": "n",
    "ipa": "/ˌvɛdʒɪˈtɛəriən/",
    "meaningVi": "Ngườiănchay",
    "topicId": 55,
    "topicName": "Chế độ ăn uống (Diet & Nutrition)"
  },
  {
    "word": "Mineral",
    "pos": "n",
    "ipa": "/ˈmɪnərəl/",
    "meaningVi": "Khoángchất",
    "topicId": 55,
    "topicName": "Chế độ ăn uống (Diet & Nutrition)"
  },
  {
    "word": "Earthquake",
    "pos": "n",
    "ipa": "/ˈɜːrθˌkweɪk/",
    "meaningVi": "Độngđất",
    "topicId": 56,
    "topicName": "Thảm họa thiên nhiên (Natural disasters)"
  },
  {
    "word": "Aftershock",
    "pos": "n",
    "ipa": "/ˈæftərˌʃɒk/",
    "meaningVi": "Dưchấn",
    "topicId": 56,
    "topicName": "Thảm họa thiên nhiên (Natural disasters)"
  },
  {
    "word": "Flood",
    "pos": "n",
    "ipa": "/flʌd/",
    "meaningVi": "Lũlụt",
    "topicId": 56,
    "topicName": "Thảm họa thiên nhiên (Natural disasters)"
  },
  {
    "word": "Famine",
    "pos": "n",
    "ipa": "/ˈfæmɪn/",
    "meaningVi": "Nạnđói",
    "topicId": 56,
    "topicName": "Thảm họa thiên nhiên (Natural disasters)"
  },
  {
    "word": "Avalanche",
    "pos": "n",
    "ipa": "/ˈævəˌlæntʃ/",
    "meaningVi": "Tuyếtlở",
    "topicId": 56,
    "topicName": "Thảm họa thiên nhiên (Natural disasters)"
  },
  {
    "word": "Blizzard",
    "pos": "n",
    "ipa": "/ˈblɪzərd/",
    "meaningVi": "Bãotuyết",
    "topicId": 56,
    "topicName": "Thảm họa thiên nhiên (Natural disasters)"
  },
  {
    "word": "Tornado",
    "pos": "n",
    "ipa": "/tɔrˈneɪdoʊ/",
    "meaningVi": "Lốcxoáy",
    "topicId": 56,
    "topicName": "Thảm họa thiên nhiên (Natural disasters)"
  },
  {
    "word": "Forestffre",
    "pos": "n. phr",
    "ipa": "/ˈfɔːrɪst ˌfaɪər/",
    "meaningVi": "Cháyrừng",
    "topicId": 56,
    "topicName": "Thảm họa thiên nhiên (Natural disasters)"
  },
  {
    "word": "Hurricane",
    "pos": "n",
    "ipa": "/ˈhɜːrɪˌkeɪn/",
    "meaningVi": "Bão",
    "topicId": 56,
    "topicName": "Thảm họa thiên nhiên (Natural disasters)"
  },
  {
    "word": "Storm",
    "pos": "n",
    "ipa": "/stɔːrm/",
    "meaningVi": "Bão",
    "topicId": 56,
    "topicName": "Thảm họa thiên nhiên (Natural disasters)"
  },
  {
    "word": "Evacuation",
    "pos": "n",
    "ipa": "/ɪˌvækjuˈeɪʃən/",
    "meaningVi": "Sựsơtán",
    "topicId": 56,
    "topicName": "Thảm họa thiên nhiên (Natural disasters)"
  },
  {
    "word": "Evacuate",
    "pos": "v",
    "ipa": "/ɪˈvækjuˌeɪt/",
    "meaningVi": "Sơtán",
    "topicId": 56,
    "topicName": "Thảm họa thiên nhiên (Natural disasters)"
  },
  {
    "word": "Catastrophic",
    "pos": "adj",
    "ipa": "/ˌkætəˈstrɒfɪk/",
    "meaningVi": "Thảmkhốc",
    "topicId": 56,
    "topicName": "Thảm họa thiên nhiên (Natural disasters)"
  },
  {
    "word": "Nationwide",
    "pos": "adj",
    "ipa": "/ˌneɪʃənˈwaɪd/",
    "meaningVi": "Toànquốc",
    "topicId": 56,
    "topicName": "Thảm họa thiên nhiên (Natural disasters)"
  },
  {
    "word": "Precaution",
    "pos": "n",
    "ipa": "/prɪˈkɔːʃən/",
    "meaningVi": "Sựphòngngừa",
    "topicId": 56,
    "topicName": "Thảm họa thiên nhiên (Natural disasters)"
  },
  {
    "word": "Avenue",
    "pos": "n",
    "ipa": "/ˈævəˌnjuː/",
    "meaningVi": "Đạilộ",
    "topicId": 57,
    "topicName": "Chỉ đường & Phương hướng (Directions)"
  },
  {
    "word": "Between",
    "pos": "pre",
    "ipa": "/bɪˈtwiːn/",
    "meaningVi": "Ởgiữa",
    "topicId": 57,
    "topicName": "Chỉ đường & Phương hướng (Directions)"
  },
  {
    "word": "Behind",
    "pos": "pre",
    "ipa": "/bɪˈhaɪnd/",
    "meaningVi": "Ởphíasau",
    "topicId": 57,
    "topicName": "Chỉ đường & Phương hướng (Directions)"
  },
  {
    "word": "Curve",
    "pos": "v",
    "ipa": "/kɜːrv/",
    "meaningVi": "Uốncong",
    "topicId": 57,
    "topicName": "Chỉ đường & Phương hướng (Directions)"
  },
  {
    "word": "In front of",
    "pos": "pre",
    "ipa": "/ɪnfrʌntəv/",
    "meaningVi": "(vị trí) ở phía trước,",
    "topicId": 57,
    "topicName": "Chỉ đường & Phương hướng (Directions)"
  },
  {
    "word": "Opposite",
    "pos": "pre",
    "ipa": "/ˈɒpəzɪt/",
    "meaningVi": "Trướcmặt,đốidiện",
    "topicId": 57,
    "topicName": "Chỉ đường & Phương hướng (Directions)"
  },
  {
    "word": "Near",
    "pos": "pre",
    "ipa": "/nɪər/",
    "meaningVi": "Gần",
    "topicId": 57,
    "topicName": "Chỉ đường & Phương hướng (Directions)"
  },
  {
    "word": "Turnright",
    "pos": "v. phr",
    "ipa": "/tɜrnraɪt/",
    "meaningVi": "Rẽphải",
    "topicId": 57,
    "topicName": "Chỉ đường & Phương hướng (Directions)"
  },
  {
    "word": "Turnleft",
    "pos": "v. phr",
    "ipa": "/tɜrnlɛft/",
    "meaningVi": "Rẽtrái",
    "topicId": 57,
    "topicName": "Chỉ đường & Phương hướng (Directions)"
  },
  {
    "word": "Junction",
    "pos": "n",
    "ipa": "/ˈdʒʌŋkʃən/",
    "meaningVi": "Giaolộ",
    "topicId": 57,
    "topicName": "Chỉ đường & Phương hướng (Directions)"
  },
  {
    "word": "Turning",
    "pos": "n",
    "ipa": "/ˈtɜrnɪŋ/",
    "meaningVi": "Ngãrẽ",
    "topicId": 57,
    "topicName": "Chỉ đường & Phương hướng (Directions)"
  },
  {
    "word": "Roundabout",
    "pos": "n",
    "ipa": "/ˈraʊndəˌbaʊt/",
    "meaningVi": "Bùngbinh",
    "topicId": 57,
    "topicName": "Chỉ đường & Phương hướng (Directions)"
  },
  {
    "word": "Pavement",
    "pos": "n",
    "ipa": "/ˈpeɪvmənt/",
    "meaningVi": "Vỉahè",
    "topicId": 57,
    "topicName": "Chỉ đường & Phương hướng (Directions)"
  },
  {
    "word": "Bar",
    "pos": "n",
    "ipa": "/bɑːr/",
    "meaningVi": "Quầybánrượu",
    "topicId": 58,
    "topicName": "Phòng khách sạn (Hotel room & amenities)"
  },
  {
    "word": "Chef",
    "pos": "n",
    "ipa": "/ʃɛf/",
    "meaningVi": "Đầubếp",
    "topicId": 58,
    "topicName": "Phòng khách sạn (Hotel room & amenities)"
  },
  {
    "word": "Waiter",
    "pos": "n",
    "ipa": "/ˈweɪtər/",
    "meaningVi": "Ngườihầubàn",
    "topicId": 58,
    "topicName": "Phòng khách sạn (Hotel room & amenities)"
  },
  {
    "word": "Waitress",
    "pos": "n",
    "ipa": "/ˈweɪtrəs/",
    "meaningVi": "Ngườihầubàn(nữ)",
    "topicId": 58,
    "topicName": "Phòng khách sạn (Hotel room & amenities)"
  },
  {
    "word": "Bill",
    "pos": "n",
    "ipa": "/bɪl/",
    "meaningVi": "Hóađơn",
    "topicId": 58,
    "topicName": "Phòng khách sạn (Hotel room & amenities)"
  },
  {
    "word": "Service",
    "pos": "n",
    "ipa": "/ˈsɜːr.vɪs/",
    "meaningVi": "Dịchvụ",
    "topicId": 58,
    "topicName": "Phòng khách sạn (Hotel room & amenities)"
  },
  {
    "word": "Tip",
    "pos": "n",
    "ipa": "/tɪp/",
    "meaningVi": "Tiềnboa",
    "topicId": 58,
    "topicName": "Phòng khách sạn (Hotel room & amenities)"
  },
  {
    "word": "Knife",
    "pos": "n",
    "ipa": "/naɪf/",
    "meaningVi": "Dao",
    "topicId": 58,
    "topicName": "Phòng khách sạn (Hotel room & amenities)"
  },
  {
    "word": "Bowl",
    "pos": "n",
    "ipa": "/boʊl/",
    "meaningVi": "Bát",
    "topicId": 58,
    "topicName": "Phòng khách sạn (Hotel room & amenities)"
  },
  {
    "word": "Teapot",
    "pos": "n",
    "ipa": "/ˈtiːˌpɒt/",
    "meaningVi": "Bìnhtrà",
    "topicId": 58,
    "topicName": "Phòng khách sạn (Hotel room & amenities)"
  },
  {
    "word": "Glass",
    "pos": "n",
    "ipa": "/ɡlæs/",
    "meaningVi": "Ly",
    "topicId": 58,
    "topicName": "Phòng khách sạn (Hotel room & amenities)"
  },
  {
    "word": "Breakfast",
    "pos": "n",
    "ipa": "/ˈbrɛk.fəst/",
    "meaningVi": "Bữaănsáng",
    "topicId": 58,
    "topicName": "Phòng khách sạn (Hotel room & amenities)"
  },
  {
    "word": "Dinner",
    "pos": "n",
    "ipa": "/ˈdɪn.ər/",
    "meaningVi": "Bữaăntối",
    "topicId": 58,
    "topicName": "Phòng khách sạn (Hotel room & amenities)"
  },
  {
    "word": "Lunch",
    "pos": "n",
    "ipa": "/lʌntʃ/",
    "meaningVi": "Bữaăntrưa",
    "topicId": 58,
    "topicName": "Phòng khách sạn (Hotel room & amenities)"
  },
  {
    "word": "Bookingoffce",
    "pos": "n. phr",
    "ipa": "/ˈbʊkɪŋˈɒfɪs/",
    "meaningVi": "Phòngbánvé",
    "topicId": 58,
    "topicName": "Phòng khách sạn (Hotel room & amenities)"
  },
  {
    "word": "Menu",
    "pos": "n",
    "ipa": "/ˈmɛnjuː/",
    "meaningVi": "Thựcđơn",
    "topicId": 58,
    "topicName": "Phòng khách sạn (Hotel room & amenities)"
  },
  {
    "word": "Starter",
    "pos": "n",
    "ipa": "/ˈstɑːr.tər/",
    "meaningVi": "Mónkhaivị",
    "topicId": 58,
    "topicName": "Phòng khách sạn (Hotel room & amenities)"
  },
  {
    "word": "Maincourse",
    "pos": "n. phr",
    "ipa": "/meɪnkɔːrs/",
    "meaningVi": "Mónchính",
    "topicId": 58,
    "topicName": "Phòng khách sạn (Hotel room & amenities)"
  },
  {
    "word": "Dessert",
    "pos": "n",
    "ipa": "/dɪˈzɜːrt/",
    "meaningVi": "Móntrángmiệng",
    "topicId": 58,
    "topicName": "Phòng khách sạn (Hotel room & amenities)"
  },
  {
    "word": "Advanced",
    "pos": "adj",
    "ipa": "/ədˈvænst/",
    "meaningVi": "Tiêntiến",
    "topicId": 59,
    "topicName": "Bưu điện (Post office)"
  },
  {
    "word": "Equip",
    "pos": "v",
    "ipa": "/ɪˈkwɪp/",
    "meaningVi": "Trangbị",
    "topicId": 59,
    "topicName": "Bưu điện (Post office)"
  },
  {
    "word": "Expressmail",
    "pos": "n. phr",
    "ipa": "/ɪkˈsprɛsmeɪl/",
    "meaningVi": "Thưchuyểnphát",
    "topicId": 59,
    "topicName": "Bưu điện (Post office)"
  },
  {
    "word": "Graphic",
    "pos": "adj",
    "ipa": "/ˈɡræfɪk/",
    "meaningVi": "Thuộcđồhọa",
    "topicId": 59,
    "topicName": "Bưu điện (Post office)"
  },
  {
    "word": "Notify",
    "pos": "v",
    "ipa": "/ˈnoʊtɪˌfaɪ/",
    "meaningVi": "Thôngbáo",
    "topicId": 59,
    "topicName": "Bưu điện (Post office)"
  },
  {
    "word": "Parcel",
    "pos": "n",
    "ipa": "/ˈpɑːrsəl/",
    "meaningVi": "Bưukiện,bưuphẩm",
    "topicId": 59,
    "topicName": "Bưu điện (Post office)"
  },
  {
    "word": "Press",
    "pos": "n",
    "ipa": "/prɛs/",
    "meaningVi": "Báochí",
    "topicId": 59,
    "topicName": "Bưu điện (Post office)"
  },
  {
    "word": "Receive",
    "pos": "v",
    "ipa": "/rɪˈsiːv/",
    "meaningVi": "Nhận",
    "topicId": 59,
    "topicName": "Bưu điện (Post office)"
  },
  {
    "word": "Secure",
    "pos": "adj",
    "ipa": "/sɪˈkjʊr/",
    "meaningVi": "(cảmgiác)yên",
    "topicId": 59,
    "topicName": "Bưu điện (Post office)"
  },
  {
    "word": "Service",
    "pos": "n",
    "ipa": "/ˈsɜːrvɪs/",
    "meaningVi": "Dịchvụ",
    "topicId": 59,
    "topicName": "Bưu điện (Post office)"
  },
  {
    "word": "Spacious",
    "pos": "adj",
    "ipa": "/ˈspeɪʃəs/",
    "meaningVi": "Rộngrãi",
    "topicId": 59,
    "topicName": "Bưu điện (Post office)"
  },
  {
    "word": "Speedy",
    "pos": "adj",
    "ipa": "/ˈspiːdi/",
    "meaningVi": "Nhanhchóng",
    "topicId": 59,
    "topicName": "Bưu điện (Post office)"
  },
  {
    "word": "Staff",
    "pos": "n",
    "ipa": "/stæf/",
    "meaningVi": "Nhânviên",
    "topicId": 59,
    "topicName": "Bưu điện (Post office)"
  },
  {
    "word": "Subscribe",
    "pos": "v",
    "ipa": "/səbˈskraɪb/",
    "meaningVi": "Đặtmua",
    "topicId": 59,
    "topicName": "Bưu điện (Post office)"
  },
  {
    "word": "Surfacemail",
    "pos": "n. phr",
    "ipa": "/ˈsɜːrfɪs meɪl/",
    "meaningVi": "Thưgửibằng",
    "topicId": 59,
    "topicName": "Bưu điện (Post office)"
  },
  {
    "word": "Technology",
    "pos": "n",
    "ipa": "/tɛkˈnɒlədʒi/",
    "meaningVi": "Côngnghệ",
    "topicId": 59,
    "topicName": "Bưu điện (Post office)"
  },
  {
    "word": "Thoughtful",
    "pos": "adj",
    "ipa": "/ˈθɔːtfəl/",
    "meaningVi": "Âncần,chuđáo",
    "topicId": 59,
    "topicName": "Bưu điện (Post office)"
  },
  {
    "word": "Transfer",
    "pos": "v",
    "ipa": "/trænsˈfɜːr/",
    "meaningVi": "Chuyển",
    "topicId": 59,
    "topicName": "Bưu điện (Post office)"
  },
  {
    "word": "Transmit",
    "pos": "v",
    "ipa": "/trænzˈmɪt/",
    "meaningVi": "Truyền",
    "topicId": 59,
    "topicName": "Bưu điện (Post office)"
  },
  {
    "word": "Well-trained",
    "pos": "adj",
    "ipa": "/wɛltreɪnd/",
    "meaningVi": "Đượcđàotạobài",
    "topicId": 59,
    "topicName": "Bưu điện (Post office)"
  },
  {
    "word": "Staffmovements",
    "pos": "n. phr",
    "ipa": "/stæfˈmuːvmənts/",
    "meaningVi": "Luânchuyểnnhân",
    "topicId": 60,
    "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
  },
  {
    "word": "Retire",
    "pos": "v",
    "ipa": "/rɪˈtaɪər/",
    "meaningVi": "Nghỉhưu",
    "topicId": 60,
    "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
  },
  {
    "word": "Dismiss",
    "pos": "v",
    "ipa": "/dɪsˈmɪs/",
    "meaningVi": "Sathải",
    "topicId": 60,
    "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
  },
  {
    "word": "Finance",
    "pos": "n",
    "ipa": "/ˈfaɪnæns/",
    "meaningVi": "Tàichính",
    "topicId": 60,
    "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
  },
  {
    "word": "Appointment",
    "pos": "n",
    "ipa": "/əˈpɔɪntmənt/",
    "meaningVi": "Sựbổnhiệm",
    "topicId": 60,
    "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
  },
  {
    "word": "Multinational",
    "pos": "adj",
    "ipa": "/ˌmʌltɪˈnæʃənəl/",
    "meaningVi": "Đaquốcgia",
    "topicId": 60,
    "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
  },
  {
    "word": "Investor",
    "pos": "n",
    "ipa": "/ɪnˈvɛstər/",
    "meaningVi": "Nhàđầutư",
    "topicId": 60,
    "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
  },
  {
    "word": "Inherit",
    "pos": "v",
    "ipa": "/ɪnˈhɛrɪt/",
    "meaningVi": "Thừakế",
    "topicId": 60,
    "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
  },
  {
    "word": "Accountant",
    "pos": "n",
    "ipa": "/əˈkaʊntənt/",
    "meaningVi": "Nhânviênkếtoán",
    "topicId": 60,
    "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
  },
  {
    "word": "Lend",
    "pos": "v",
    "ipa": "/lɛnd/",
    "meaningVi": "Chovay",
    "topicId": 60,
    "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
  },
  {
    "word": "Borrow",
    "pos": "v",
    "ipa": "/ˈbɒroʊ/",
    "meaningVi": "Vay,mượn",
    "topicId": 60,
    "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
  },
  {
    "word": "Rent",
    "pos": "v",
    "ipa": "/rɛnt/",
    "meaningVi": "Thuê",
    "topicId": 60,
    "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
  },
  {
    "word": "Distribution",
    "pos": "n",
    "ipa": "/ˌdɪstrɪˈbjuːʃən/",
    "meaningVi": "Sựphânphối,phân",
    "topicId": 60,
    "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
  },
  {
    "word": "Co-ordinate",
    "pos": "v",
    "ipa": "/koʊˈɔrdəˌneɪt/",
    "meaningVi": "Phốihợp,sắpxếp",
    "topicId": 60,
    "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
  },
  {
    "word": "Purchase",
    "pos": "v",
    "ipa": "/ˈpɜrʧəs/",
    "meaningVi": "Mua",
    "topicId": 60,
    "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
  },
  {
    "word": "Stockexchange",
    "pos": "n. phr",
    "ipa": "/stɒkɪksˈʧeɪndʒ/",
    "meaningVi": "Sàngiaodịch",
    "topicId": 60,
    "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
  },
  {
    "word": "Stockmarket",
    "pos": "n. phr",
    "ipa": "/stɒkˈmɑrkɪt/",
    "meaningVi": "Thịtrườngchứng",
    "topicId": 60,
    "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
  },
  {
    "word": "Opportunity",
    "pos": "n",
    "ipa": "/ˌɒpərˈtunɪti/",
    "meaningVi": "Cơhội",
    "topicId": 60,
    "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
  },
  {
    "word": "Challenge",
    "pos": "n",
    "ipa": "/ˈʧæləndʒ/",
    "meaningVi": "Thửthách",
    "topicId": 60,
    "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
  },
  {
    "word": "Career",
    "pos": "n",
    "ipa": "/kəˈrɪər/",
    "meaningVi": "Nghềnghiệp,sự",
    "topicId": 60,
    "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
  },
  {
    "word": "Intensivecourse",
    "pos": "n. phr",
    "ipa": "/ɪnˈtɛnsɪvkɔrs/",
    "meaningVi": "Khóahọccấptốc",
    "topicId": 60,
    "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
  },
  {
    "word": "Commerce",
    "pos": "n",
    "ipa": "/ˈkɑːmɜrs/",
    "meaningVi": "Thươngmại",
    "topicId": 60,
    "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
  },
  {
    "word": "Costly",
    "pos": "adj",
    "ipa": "/ˈkɒstli/",
    "meaningVi": "Tốnkém",
    "topicId": 60,
    "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
  },
  {
    "word": "Responsible",
    "pos": "adj",
    "ipa": "/rɪˈspɒnsəbl/",
    "meaningVi": "Chịutráchnhiệm",
    "topicId": 60,
    "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
  },
  {
    "word": "Communicate",
    "pos": "v",
    "ipa": "/kəˈmjuːnɪˌkeɪt/",
    "meaningVi": "Giaotiếp",
    "topicId": 60,
    "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
  },
  {
    "word": "Abroad",
    "pos": "adv",
    "ipa": "/əˈbrɔd/",
    "meaningVi": "Ởnướcngoài",
    "topicId": 60,
    "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
  },
  {
    "word": "Inheritance",
    "pos": "n",
    "ipa": "/ɪnˈhɛrɪtəns/",
    "meaningVi": "Sựthừakế",
    "topicId": 60,
    "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
  },
  {
    "word": "Fortune",
    "pos": "n",
    "ipa": "/ˈfɔrʧən/",
    "meaningVi": "Tàisản,vậnmay",
    "topicId": 60,
    "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
  },
  {
    "word": "Property",
    "pos": "n",
    "ipa": "/ˈprɒpərti/",
    "meaningVi": "Tàisản",
    "topicId": 60,
    "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
  },
  {
    "word": "Cashmachine",
    "pos": "n. phr",
    "ipa": "/kæʃməˈʃiːn/",
    "meaningVi": "Máyrúttiền",
    "topicId": 60,
    "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
  },
  {
    "word": "Onlineaccount",
    "pos": "n. phr",
    "ipa": "/ˈɒnˌlaɪn əˈkaʊnt/",
    "meaningVi": "Tàikhoảntrực",
    "topicId": 60,
    "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
  },
  {
    "word": "Insurancepolicy",
    "pos": "n. phr",
    "ipa": "/ɪnˈʃʊrəns ˈpɒlɪsi/",
    "meaningVi": "Hợpđồngbảohiểm",
    "topicId": 60,
    "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
  },
  {
    "word": "Creditcard",
    "pos": "n. phr",
    "ipa": "/ˈkrɛdɪtkɑrd/",
    "meaningVi": "Thẻtíndụng",
    "topicId": 60,
    "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
  },
  {
    "word": "Debitcard",
    "pos": "n. phr",
    "ipa": "/ˈdɛbɪtkɑrd/",
    "meaningVi": "Thẻghinợ",
    "topicId": 60,
    "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
  },
  {
    "word": "Rentalcontract",
    "pos": "n. phr",
    "ipa": "/ˈrɛntəl ˈkɒntrækt/",
    "meaningVi": "Hợpđồngchothuê",
    "topicId": 60,
    "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
  },
  {
    "word": "Discount",
    "pos": "n",
    "ipa": "/ˈdɪskaʊnt/",
    "meaningVi": "Sựgiảmgiá,chiết",
    "topicId": 60,
    "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
  },
  {
    "word": "Creditlimit",
    "pos": "n. phr",
    "ipa": "/ˈkrɛdɪtˈlɪmɪt/",
    "meaningVi": "Hạnmứctíndụng",
    "topicId": 60,
    "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
  },
  {
    "word": "Survey",
    "pos": "n",
    "ipa": "/ˈsɜːrveɪ/",
    "meaningVi": "Khảosát",
    "topicId": 60,
    "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
  },
  {
    "word": "Possession",
    "pos": "n",
    "ipa": "/pəˈzɛʃən/",
    "meaningVi": "Sựsởhữu",
    "topicId": 60,
    "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
  },
  {
    "word": "Equality",
    "pos": "n",
    "ipa": "/ɪˈkwɒlɪti/",
    "meaningVi": "Sựngangbằng",
    "topicId": 60,
    "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
  },
  {
    "word": "Poverty",
    "pos": "n",
    "ipa": "/ˈpɒvərti/",
    "meaningVi": "Sựnghèo",
    "topicId": 60,
    "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
  },
  {
    "word": "Charge",
    "pos": "n",
    "ipa": "/ʧɑrdʒ/",
    "meaningVi": "Phí, tiền phải trả",
    "topicId": 60,
    "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
  },
  {
    "word": "Outsource",
    "pos": "v",
    "ipa": "/ˈaʊtsɔrs/",
    "meaningVi": "Thuêngoài",
    "topicId": 60,
    "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
  },
  {
    "word": "Grant",
    "pos": "n",
    "ipa": "/ɡrænt/",
    "meaningVi": "Trợcấp,côngnhận",
    "topicId": 60,
    "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
  },
  {
    "word": "Warehouse",
    "pos": "n",
    "ipa": "/ˈwɛrˌhaʊs/",
    "meaningVi": "Khohàng",
    "topicId": 60,
    "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
  },
  {
    "word": "Lease",
    "pos": "v",
    "ipa": "/liːs/",
    "meaningVi": "Chothuê",
    "topicId": 60,
    "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
  },
  {
    "word": "In-house",
    "pos": "adj",
    "ipa": "/ˈɪnhaʊs/",
    "meaningVi": "Tiếnhànhtrong",
    "topicId": 60,
    "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
  },
  {
    "word": "Back-office",
    "pos": "n",
    "ipa": "/bækˈɒfɪs/",
    "meaningVi": "Vănphònghành",
    "topicId": 60,
    "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
  },
  {
    "word": "Campaign",
    "pos": "n",
    "ipa": "/kæmˈpeɪn/",
    "meaningVi": "Chiếndịch",
    "topicId": 60,
    "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
  },
  {
    "word": "Insecurity",
    "pos": "n",
    "ipa": "/ˌɪnsɪˈkjʊrɪti/",
    "meaningVi": "Tínhkoantoàn",
    "topicId": 60,
    "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
  },
  {
    "word": "Compensation",
    "pos": "n",
    "ipa": "/ˌkɒmpənˈseɪʃən/",
    "meaningVi": "Sựđềnbù,bồi",
    "topicId": 60,
    "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
  },
  {
    "word": "Commit",
    "pos": "v",
    "ipa": "/kəˈmɪt/",
    "meaningVi": "Camkết",
    "topicId": 60,
    "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
  },
  {
    "word": "Short-termcost",
    "pos": "n. phr",
    "ipa": "/ˈʃɔrtˌtɜrm kɒst/",
    "meaningVi": "Chiphíngắnhạn",
    "topicId": 60,
    "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
  },
  {
    "word": "Long-termgain",
    "pos": "n. phr",
    "ipa": "/ˈlɒŋˌtɜrmɡeɪn/",
    "meaningVi": "Tiềnkiếmđượcdài",
    "topicId": 60,
    "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
  },
  {
    "word": "Expense",
    "pos": "n",
    "ipa": "/ɪkˈspɛns/",
    "meaningVi": "Phítổn",
    "topicId": 60,
    "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
  },
  {
    "word": "Invoice",
    "pos": "n",
    "ipa": "/ˈɪnvɔɪs/",
    "meaningVi": "Hóađơn",
    "topicId": 60,
    "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
  },
  {
    "word": "Bribery",
    "pos": "n",
    "ipa": "/ˈbraɪbəri/",
    "meaningVi": "Sựđútlót,hốilộ",
    "topicId": 60,
    "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
  },
  {
    "word": "Corrupt",
    "pos": "v",
    "ipa": "/kəˈrʌpt/",
    "meaningVi": "Thamnhũng",
    "topicId": 60,
    "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
  },
  {
    "word": "Balanceoftrade",
    "pos": "n. phr",
    "ipa": "/ˈbælɪnsəvtreɪd/",
    "meaningVi": "Cáncânthương",
    "topicId": 60,
    "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
  },
  {
    "word": "Budget",
    "pos": "n",
    "ipa": "/ˈbʌdʒɪt/",
    "meaningVi": "Ngânsách",
    "topicId": 60,
    "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
  },
  {
    "word": "Costofborrowing",
    "pos": "n. phr",
    "ipa": "/kɒstəvˈbɒroʊɪŋ/",
    "meaningVi": "Chiphívay",
    "topicId": 60,
    "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
  },
  {
    "word": "Retailbanking",
    "pos": "n. phr",
    "ipa": "/ˈriːteɪl ˈbæŋkɪŋ/",
    "meaningVi": "Ngânhàngbánlẻ",
    "topicId": 60,
    "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
  },
  {
    "word": "Commercialbank",
    "pos": "n. phr",
    "ipa": "/kəˈmɜrʃəlbæŋk/",
    "meaningVi": "Ngânhàngthương",
    "topicId": 60,
    "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
  },
  {
    "word": "Centralbank",
    "pos": "n. phr",
    "ipa": "/ˈsɛntrəl bæŋk/",
    "meaningVi": "Ngânhàngtrung",
    "topicId": 60,
    "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
  },
  {
    "word": "Treasury",
    "pos": "n",
    "ipa": "/ˈtrɛʒəri/",
    "meaningVi": "Khobạc",
    "topicId": 60,
    "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
  },
  {
    "word": "Investmentbank",
    "pos": "n. phr",
    "ipa": "/ɪnˈvɛstməntbæŋk/",
    "meaningVi": "Ngânhàngđầutư",
    "topicId": 60,
    "topicName": "Ngân hàng & Tài chính (Bank & Finance)"
  }
];

/**
 * Tra cứu nhanh từ vựng trong bộ 3000 từ Oxford
 */
export function findOxfordWord(keyword: string): OxfordWordItem | undefined {
  const clean = keyword.trim().toLowerCase();
  return OXFORD_3000_VOCABULARY.find(
    (item) => item.word.toLowerCase() === clean
  );
}

/**
 * Tìm kiếm từ vựng theo tiền tố hoặc từ khóa
 */
export function searchOxfordVocabulary(query: string, maxResults: number = 20): OxfordWordItem[] {
  const clean = query.trim().toLowerCase();
  if (!clean) return [];

  const exactMatches: OxfordWordItem[] = [];
  const prefixMatches: OxfordWordItem[] = [];
  const containsMatches: OxfordWordItem[] = [];

  for (const item of OXFORD_3000_VOCABULARY) {
    const itemWord = item.word.toLowerCase();
    if (itemWord === clean) {
      exactMatches.push(item);
    } else if (itemWord.startsWith(clean)) {
      prefixMatches.push(item);
    } else if (itemWord.includes(clean) || item.meaningVi.toLowerCase().includes(clean)) {
      containsMatches.push(item);
    }
  }

  return [...exactMatches, ...prefixMatches, ...containsMatches].slice(0, maxResults);
}
