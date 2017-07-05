'use strict';

var url = require('url');

var Screen = require('./ScreenService');

module.exports.findScreenById = function findScreenById (req, res, next) {
  Screen.findScreenById(req.swagger.params, res, next);
};
