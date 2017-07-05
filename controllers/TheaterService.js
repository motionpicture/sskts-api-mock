'use strict';

exports.findTheaterById = function(args, res, next) {
  /**
   * 劇場取得
   * IDで劇場情報を取得します。
   *
   * theaterId String ID
   * authorization String Bearerトークン
   * returns inline_response_200_2
   **/
  var examples = {};
  examples['application/json'] = {
  "data" : "{}"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.findTheatersById = function(args, res, next) {
  /**
   * 劇場検索
   * 条件を指定して劇場を検索します。
   *
   * authorization String Bearerトークン
   * returns inline_response_200_2
   **/
  var examples = {};
  examples['application/json'] = {
  "data" : "{}"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

