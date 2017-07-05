'use strict';

exports.createMyCard = function(args, res, next) {
  /**
   * 会員カード追加
   *
   * no response value expected for this operation
   **/
  res.end();
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

exports.findMyProfile = function(args, res, next) {
  /**
   * 会員プロフィール取得
   *
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

exports.findMySeatReservationAssets = function(args, res, next) {
  /**
   * 会員座席予約資産検索
   *
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

exports.updateMyProfile = function(args, res, next) {
  /**
   * 会員プロフィール更新
   *
   * no response value expected for this operation
   **/
  res.end();
}

