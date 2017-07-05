'use strict';

exports.findPerformanceById = function(args, res, next) {
  /**
   * Find performance by ID
   * Returns a single performance
   *
   * performanceId String パフォーマンスID
   * returns inline_response_200_1
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
   * 
   *
   * returns inline_response_200
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

