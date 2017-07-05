'use strict';

exports.closeTransaction = function(args, res, next) {
  /**
   * 取引成立
   *
   * id String ID
   * no response value expected for this operation
   **/
  res.end();
}

exports.createCardOfOwnerInTransaction = function(args, res, next) {
  /**
   * 取引中所有者カード追加
   *
   * transactionId String ID
   * no response value expected for this operation
   **/
  res.end();
}

exports.createEmailNotification = function(args, res, next) {
  /**
   * 取引通知作成
   *
   * id String ID
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

exports.createGMOAuthorization = function(args, res, next) {
  /**
   * GMO承認追加
   *
   * transactionId String ID
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

exports.createMvtkAuthorization = function(args, res, next) {
  /**
   * ムビチケ承認追加
   *
   * transactionId String ID
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

exports.createSeatReservationAuthorization = function(args, res, next) {
  /**
   * 座席予約承認追加
   *
   * transactionId String ID
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

exports.deleteAuthorization = function(args, res, next) {
  /**
   * 承認解除
   *
   * transactionId String ID
   * authorizationId String authorization ID
   * no response value expected for this operation
   **/
  res.end();
}

exports.deleteNotification = function(args, res, next) {
  /**
   * 取引通知削除
   *
   * id String ID
   * notificationId String ID
   * no response value expected for this operation
   **/
  res.end();
}

exports.enableInquiryOfTransaction = function(args, res, next) {
  /**
   * 取引照会キー作成
   *
   * transactionId String ID
   * no response value expected for this operation
   **/
  res.end();
}

exports.findTransactionById = function(args, res, next) {
  /**
   * 取引取得
   *
   * transactionId String ID
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

exports.makeInquiryOfTransaction = function(args, res, next) {
  /**
   * 取引照会
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

exports.startTransaction = function(args, res, next) {
  /**
   * 取引開始
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

exports.updateAnonymousOwner = function(args, res, next) {
  /**
   * 取引中匿名所有者更新
   *
   * transactionId String ID
   * no response value expected for this operation
   **/
  res.end();
}

exports.updateOwnerInTransaction = function(args, res, next) {
  /**
   * 取引中所有者更新
   *
   * transactionId String ID
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

