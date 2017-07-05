'use strict';

exports.findPerformanceById = function(args, res, next) {
  /**
   * パフォーマンス取得
   * IDでパフォーマンス情報を取得します。
   *
   * performanceId String パフォーマンスID
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

exports.searchPerformances = function(args, res, next) {
  /**
   * パフォーマンス検索
   * 条件を指定してパフォーマンスを検索します。
   *
   * authorization String Bearerトークン
   * returns inline_response_200_1
   **/
  var examples = {};
  examples['application/json'] = {
  "data" : [ "{}" ]
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

