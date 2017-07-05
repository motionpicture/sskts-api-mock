'use strict';

exports.closeTransaction = function(args, res, next) {
  /**
   * 取引成立
   *
   * transactionId String 取引ID
   * no response value expected for this operation
   **/
  res.end();
}

exports.createCardOfOwnerInTransaction = function(args, res, next) {
  /**
   * 取引中所有者カード追加
   *
   * transactionId String ID
   * data Data_6 カード情報
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
    "type" : "cards"
  }
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.createEmailNotification = function(args, res, next) {
  /**
   * 取引通知作成
   *
   * transactionId String 取引ID
   * data Data_11 メール通知データ
   * returns inline_response_200_7
   **/
  var examples = {};
  examples['application/json'] = {
  "data" : {
    "id" : "",
    "type" : "notifications"
  }
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
   * transactionId String 取引ID
   * data Data_7 GMOオーソリデータ
   * returns inline_response_200_6
   **/
  var examples = {};
  examples['application/json'] = {
  "data" : {
    "id" : "",
    "type" : "authorizations"
  }
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
   * transactionId String 取引ID
   * data Data_9 ムビチケ着券データ
   * returns inline_response_200_6
   **/
  var examples = {};
  examples['application/json'] = {
  "data" : {
    "id" : "",
    "type" : "authorizations"
  }
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
   * transactionId String 取引ID
   * data Data_8 COA仮予約データ
   * returns inline_response_200_6
   **/
  var examples = {};
  examples['application/json'] = {
  "data" : {
    "id" : "",
    "type" : "authorizations"
  }
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
   * transactionId String 取引ID
   * authorizationId String 承認ID
   * no response value expected for this operation
   **/
  res.end();
}

exports.deleteNotification = function(args, res, next) {
  /**
   * 取引通知削除
   *
   * transactionId String 取引ID
   * notificationId String 通知ID
   * no response value expected for this operation
   **/
  res.end();
}

exports.enableInquiryOfTransaction = function(args, res, next) {
  /**
   * 取引照会キー作成
   *
   * transactionId String 取引ID
   * data Data_10 取引照会キー
   * no response value expected for this operation
   **/
  res.end();
}

exports.makeInquiryOfTransaction = function(args, res, next) {
  /**
   * 取引照会
   *
   * data Data_3 照会キー
   * returns inline_response_200_5
   **/
  var examples = {};
  examples['application/json'] = {
  "data" : {
    "attributes" : {
      "expires_at" : "",
      "started_at" : "",
      "owners" : {
        "id" : "",
        "group" : ""
      },
      "status" : ""
    },
    "id" : "",
    "type" : "transactions"
  }
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
   * data Data_2 
   * returns inline_response_200_5
   **/
  var examples = {};
  examples['application/json'] = {
  "data" : {
    "attributes" : {
      "expires_at" : "",
      "started_at" : "",
      "owners" : {
        "id" : "",
        "group" : ""
      },
      "status" : ""
    },
    "id" : "",
    "type" : "transactions"
  }
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
   * data Data_4 プロフィール
   * no response value expected for this operation
   **/
  res.end();
}

exports.updateOwnerInTransaction = function(args, res, next) {
  /**
   * 取引中所有者更新
   *
   * transactionId String 取引ID
   * ownerId String 所有者ID
   * data Data_5 プロフィール
   * returns inline_response_200_2
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
    "type" : "owners"
  }
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

