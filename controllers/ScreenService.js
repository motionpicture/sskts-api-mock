'use strict';

exports.findScreenById = function(args, res, next) {
  /**
   * スクリーン取得
   *
   * screenId String ID
   * returns inline_response_404
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

