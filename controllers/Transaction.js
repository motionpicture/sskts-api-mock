'use strict';

var url = require('url');

var Transaction = require('./TransactionService');

module.exports.transactions_close = function transactions_close (req, res, next) {
  Transaction.transactions_close(req.swagger.params, res, next);
};

module.exports.transactions_createCard = function transactions_createCard (req, res, next) {
  Transaction.transactions_createCard(req.swagger.params, res, next);
};

module.exports.transactions_createEmailNotification = function transactions_createEmailNotification (req, res, next) {
  Transaction.transactions_createEmailNotification(req.swagger.params, res, next);
};

module.exports.transactions_createGMOAuthorization = function transactions_createGMOAuthorization (req, res, next) {
  Transaction.transactions_createGMOAuthorization(req.swagger.params, res, next);
};

module.exports.transactions_createInquiryKey = function transactions_createInquiryKey (req, res, next) {
  Transaction.transactions_createInquiryKey(req.swagger.params, res, next);
};

module.exports.transactions_createMvtkAuthorization = function transactions_createMvtkAuthorization (req, res, next) {
  Transaction.transactions_createMvtkAuthorization(req.swagger.params, res, next);
};

module.exports.transactions_createSeatReservationAuthorization = function transactions_createSeatReservationAuthorization (req, res, next) {
  Transaction.transactions_createSeatReservationAuthorization(req.swagger.params, res, next);
};

module.exports.transactions_deleteAuthorization = function transactions_deleteAuthorization (req, res, next) {
  Transaction.transactions_deleteAuthorization(req.swagger.params, res, next);
};

module.exports.transactions_deleteNotification = function transactions_deleteNotification (req, res, next) {
  Transaction.transactions_deleteNotification(req.swagger.params, res, next);
};

module.exports.transactions_enableInquiry = function transactions_enableInquiry (req, res, next) {
  Transaction.transactions_enableInquiry(req.swagger.params, res, next);
};

module.exports.transactions_findByInquiryKey = function transactions_findByInquiryKey (req, res, next) {
  Transaction.transactions_findByInquiryKey(req.swagger.params, res, next);
};

module.exports.transactions_makeInquiry = function transactions_makeInquiry (req, res, next) {
  Transaction.transactions_makeInquiry(req.swagger.params, res, next);
};

module.exports.transactions_start = function transactions_start (req, res, next) {
  Transaction.transactions_start(req.swagger.params, res, next);
};

module.exports.transactions_updateAnonymousOwner = function transactions_updateAnonymousOwner (req, res, next) {
  Transaction.transactions_updateAnonymousOwner(req.swagger.params, res, next);
};

module.exports.transactions_updateOwner = function transactions_updateOwner (req, res, next) {
  Transaction.transactions_updateOwner(req.swagger.params, res, next);
};
