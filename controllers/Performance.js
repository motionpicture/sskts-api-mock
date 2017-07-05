'use strict';

var url = require('url');

var Performance = require('./PerformanceService');

module.exports.findPerformanceById = function findPerformanceById (req, res, next) {
  Performance.findPerformanceById(req.swagger.params, res, next);
};

module.exports.searchPerformances = function searchPerformances (req, res, next) {
  Performance.searchPerformances(req.swagger.params, res, next);
};
