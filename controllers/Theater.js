'use strict';

var url = require('url');

var Theater = require('./TheaterService');

module.exports.findTheaterById = function findTheaterById (req, res, next) {
  Theater.findTheaterById(req.swagger.params, res, next);
};

module.exports.findTheatersById = function findTheatersById (req, res, next) {
  Theater.findTheatersById(req.swagger.params, res, next);
};
