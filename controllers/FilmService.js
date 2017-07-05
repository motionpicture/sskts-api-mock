'use strict';

exports.findFilmById = function(args, res, next) {
  /**
   * 作品取得
   *
   * filmId String ID
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

