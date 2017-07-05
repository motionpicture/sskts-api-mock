'use strict';

var url = require('url');

var Transaction = require('./TransactionService');

module.exports.closeTransaction = function closeTransaction (req, res, next) {
  Transaction.closeTransaction(req.swagger.params, res, next);
};

module.exports.createCardOfOwnerInTransaction = function createCardOfOwnerInTransaction (req, res, next) {
  Transaction.createCardOfOwnerInTransaction(req.swagger.params, res, next);
};

module.exports.createEmailNotification = function createEmailNotification (req, res, next) {
  Transaction.createEmailNotification(req.swagger.params, res, next);
};

module.exports.createGMOAuthorization = function createGMOAuthorization (req, res, next) {
  Transaction.createGMOAuthorization(req.swagger.params, res, next);
};

module.exports.createMvtkAuthorization = function createMvtkAuthorization (req, res, next) {
  Transaction.createMvtkAuthorization(req.swagger.params, res, next);
};

module.exports.createSeatReservationAuthorization = function createSeatReservationAuthorization (req, res, next) {
  Transaction.createSeatReservationAuthorization(req.swagger.params, res, next);
};

module.exports.deleteAuthorization = function deleteAuthorization (req, res, next) {
  Transaction.deleteAuthorization(req.swagger.params, res, next);
};

module.exports.deleteNotification = function deleteNotification (req, res, next) {
  Transaction.deleteNotification(req.swagger.params, res, next);
};

module.exports.enableInquiryOfTransaction = function enableInquiryOfTransaction (req, res, next) {
  Transaction.enableInquiryOfTransaction(req.swagger.params, res, next);
};

module.exports.findTransactionById = function findTransactionById (req, res, next) {
  Transaction.findTransactionById(req.swagger.params, res, next);
};

module.exports.makeInquiryOfTransaction = function makeInquiryOfTransaction (req, res, next) {
  Transaction.makeInquiryOfTransaction(req.swagger.params, res, next);
};

module.exports.startTransaction = function startTransaction (req, res, next) {
  Transaction.startTransaction(req.swagger.params, res, next);
};

module.exports.updateAnonymousOwner = function updateAnonymousOwner (req, res, next) {
  Transaction.updateAnonymousOwner(req.swagger.params, res, next);
};

module.exports.updateOwnerInTransaction = function updateOwnerInTransaction (req, res, next) {
  Transaction.updateOwnerInTransaction(req.swagger.params, res, next);
};
