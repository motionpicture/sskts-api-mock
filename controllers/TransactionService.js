'use strict';

exports.transactions_close = function(args, res, next) {
  /**
   * 取引成立
   * 取引を成立させます。
   *
   * transactionId String 取引ID
   * authorization String Bearerトークン
   * no response value expected for this operation
   **/
  res.end();
}

exports.transactions_createCard = function(args, res, next) {
  /**
   * 取引中所有者カード追加
   * 取引中の所有者のカードを作成します。
   *
   * transactionId String ID
   * data Data_7 登録前カード情報
   * authorization String Bearerトークン
   * returns inline_response_201
   **/
  var examples = {};
  examples['application/json'] = {
  "data" : {
    "attributes" : {
      "card_no" : "*************111",
      "card_seq" : "0",
      "expire" : "18/12",
      "card_name" : "Visa",
      "holder_name" : "Tetsu Yamazaki"
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

exports.transactions_createEmailNotification = function(args, res, next) {
  /**
   * 取引通知作成
   * 進行中の取引に対して、成立後の通知を作成します。
   *
   * transactionId String 取引ID
   * data Data_13 メール通知データ
   * authorization String Bearerトークン
   * returns inline_response_200_8
   **/
  var examples = {};
  examples['application/json'] = {
  "data" : {
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

exports.transactions_createGMOAuthorization = function(args, res, next) {
  /**
   * GMO承認追加
   * 進行中の取引にGMO承認を追加します。
   *
   * transactionId String 取引ID
   * data Data_8 GMOオーソリデータ
   * authorization String Bearerトークン
   * returns inline_response_200_7
   **/
  var examples = {};
  examples['application/json'] = {
  "data" : {
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

exports.transactions_createInquiryKey = function(args, res, next) {
  /**
   * 取引照会キー作成
   * 取引を成立後に照会できるように、照会キーを作成します。
   *
   * transactionId String 取引ID
   * data Data_11 取引照会キー
   * authorization String Bearerトークン
   * no response value expected for this operation
   **/
  res.end();
}

exports.transactions_createMvtkAuthorization = function(args, res, next) {
  /**
   * ムビチケ承認追加
   * 進行中の取引にムビチケ承認を追加します。
   *
   * transactionId String 取引ID
   * data Data_10 ムビチケ着券データ
   * authorization String Bearerトークン
   * returns inline_response_200_7
   **/
  var examples = {};
  examples['application/json'] = {
  "data" : {
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

exports.transactions_createSeatReservationAuthorization = function(args, res, next) {
  /**
   * 座席予約承認追加
   * 進行中の取引に座席予約承認を追加します。
   *
   * transactionId String 取引ID
   * data Data_9 COA仮予約データ
   * authorization String Bearerトークン
   * returns inline_response_200_7
   **/
  var examples = {};
  examples['application/json'] = {
  "data" : {
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

exports.transactions_deleteAuthorization = function(args, res, next) {
  /**
   * 承認解除
   * 進行中の取引から承認を解除します。
   *
   * transactionId String 取引ID
   * authorizationId String 承認ID
   * authorization String Bearerトークン
   * no response value expected for this operation
   **/
  res.end();
}

exports.transactions_deleteNotification = function(args, res, next) {
  /**
   * 取引通知削除
   * 進行中の取引から、成立後の通知を削除します。
   *
   * transactionId String 取引ID
   * notificationId String 通知ID
   * authorization String Bearerトークン
   * no response value expected for this operation
   **/
  res.end();
}

exports.transactions_enableInquiry = function(args, res, next) {
  /**
   * 取引照会キー作成
   * 取引を成立後に照会できるように、照会キーを作成します。
   *
   * transactionId String 取引ID
   * data Data_12 取引照会キー
   * authorization String Bearerトークン
   * no response value expected for this operation
   **/
  res.end();
}

exports.transactions_findByInquiryKey = function(args, res, next) {
  /**
   * 取引照会
   * 照会キーで取引を検索します。具体的には、劇場コード&予約番号&電話番号による照会です。
   *
   * authorization String Bearerトークン
   * theater_code String 劇場コード (optional)
   * reserve_num Integer 予約番号 (optional)
   * tel String 電話番号 (optional)
   * returns inline_response_200_6
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
      "status" : "aeiou"
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

exports.transactions_makeInquiry = function(args, res, next) {
  /**
   * 取引照会
   * 予約番号と電話番号を使用して、取引を照会します。
   *
   * data Data_4 照会キー
   * authorization String Bearerトークン
   * returns inline_response_200_6
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
      "status" : "aeiou"
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

exports.transactions_start = function(args, res, next) {
  /**
   * 取引開始
   * 取引を開始します。
   *
   * data Data_3 
   * authorization String Bearerトークン
   * returns inline_response_200_6
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
      "status" : "aeiou"
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

exports.transactions_updateAnonymousOwner = function(args, res, next) {
  /**
   * 取引中匿名所有者更新
   * 取引中の匿名所有者のプロフィールを更新します。
   *
   * transactionId String ID
   * data Data_5 プロフィール
   * authorization String Bearerトークン
   * no response value expected for this operation
   **/
  res.end();
}

exports.transactions_updateOwner = function(args, res, next) {
  /**
   * 取引中所有者更新
   * 取引中の所有者のプロフィールを更新します。
   *
   * transactionId String 取引ID
   * ownerId String 所有者ID
   * data Data_6 プロフィール
   * authorization String Bearerトークン
   * returns inline_response_200_3
   **/
  var examples = {};
  examples['application/json'] = {
  "data" : {
    "attributes" : {
      "name_first" : "てつ",
      "tel" : "09012345678",
      "name_last" : "やまざき",
      "email" : "yamazaki@motionpicture.jp"
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

