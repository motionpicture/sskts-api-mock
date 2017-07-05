'use strict';

var url = require('url');

var Owner = require('./OwnerService');

module.exports.createMyCard = function createMyCard (req, res, next) {
  Owner.createMyCard(req.swagger.params, res, next);
};

module.exports.deleteMyCard = function deleteMyCard (req, res, next) {
  Owner.deleteMyCard(req.swagger.params, res, next);
};

module.exports.findMyCards = function findMyCards (req, res, next) {
  Owner.findMyCards(req.swagger.params, res, next);
};

module.exports.findMyProfile = function findMyProfile (req, res, next) {
  Owner.findMyProfile(req.swagger.params, res, next);
};

module.exports.findMySeatReservationAssets = function findMySeatReservationAssets (req, res, next) {
  Owner.findMySeatReservationAssets(req.swagger.params, res, next);
};

module.exports.updateMyProfile = function updateMyProfile (req, res, next) {
  Owner.updateMyProfile(req.swagger.params, res, next);
};
