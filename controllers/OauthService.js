'use strict';

exports.getAccessToken = function(args, res, next) {
  /**
   * OAuth
   * OAuth認可エンドポイント。アクセストークンを取得します。
   *
   * data Data ID
   * returns inline_response_200
   **/
  var examples = {};
  examples['application/json'] = {
  "access_token" : "",
  "token_type" : "Bearer",
  "expires_in" : ""
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

