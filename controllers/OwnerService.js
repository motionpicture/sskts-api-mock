'use strict';

exports.createMyCard = function(args, res, next) {
  /**
   * 会員カード追加
   *
   * data Data_2 ID
   * returns inline_response_201
   **/
  var examples = {};
  examples['application/json'] = {
  "data" : {
    "attributes" : {
      "card_no" : "",
      "card_seq" : "",
      "expire" : "",
      "card_name" : "",
      "holder_name" : ""
    },
    "id" : "",
    "type" : "aeiou"
  }
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.deleteMyCard = function(args, res, next) {
  /**
   * 会員カード削除
   *
   * cardId String ID
   * no response value expected for this operation
   **/
  res.end();
}

exports.findMyCards = function(args, res, next) {
  /**
   * 会員カード検索
   *
   * returns inline_response_200_4
   **/
  var examples = {};
  examples['application/json'] = {
  "data" : [ {
    "attributes" : {
      "card_no" : "",
      "card_seq" : "",
      "expire" : "",
      "card_name" : "",
      "holder_name" : ""
    },
    "id" : "",
    "type" : "aeiou"
  } ]
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.findMyProfile = function(args, res, next) {
  /**
   * 会員プロフィール取得
   *
   * returns inline_response_200_3
   **/
  var examples = {};
  examples['application/json'] = {
  "data" : {
    "attributes" : {
      "name_first" : "",
      "tel" : "",
      "name_last" : "",
      "email" : ""
    },
    "id" : "aeiou",
    "type" : "aeiou"
  }
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.findMySeatReservationAssets = function(args, res, next) {
  /**
   * 会員座席予約資産検索
   *
   * returns inline_response_200_5
   **/
  var examples = {};
  examples['application/json'] = {
  "data" : [ {
    "attributes" : {
      "performance_day" : "",
      "theater_address" : "",
      "ticket_code" : "",
      "film_kbn_joueihousiki" : "",
      "screen" : "",
      "film_name" : "",
      "performance_time_start" : "",
      "seat_code" : "",
      "screen_section" : "",
      "add_glasses" : "",
      "film_kbn_jimakufukikae" : "",
      "ticket_name" : {
        "ja" : "aeiou",
        "en" : "aeiou"
      },
      "performance_time_end" : "",
      "ticket_name_kana" : "",
      "kbn_eisyahousiki" : "",
      "screen_name" : "",
      "mvtk_kbn_kensyu" : "",
      "theater" : "",
      "film_name_original" : "",
      "film_minutes" : "",
      "theater_name" : "",
      "std_price" : "",
      "mvtk_app_price" : "",
      "film_name_short" : "",
      "add_price" : "",
      "mvtk_num" : "",
      "theater_name_kana" : "",
      "dis_price" : "",
      "mvtk_kbn_maeuriken" : "",
      "mvtk_sales_price" : "",
      "film" : "",
      "sale_price" : "",
      "mvtk_kbn_denshiken" : "",
      "performance" : "",
      "film_name_kana" : "",
      "film_kbn_eirin" : "",
      "film_copyright" : "",
      "film_kbn_eizou" : ""
    },
    "id" : "",
    "type" : "aeiou"
  } ]
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.updateMyProfile = function(args, res, next) {
  /**
   * 会員プロフィール更新
   *
   * data Data_1 ID
   * no response value expected for this operation
   **/
  res.end();
}

