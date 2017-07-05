'use strict';

var url = require('url');

var Film = require('./FilmService');

module.exports.findFilmById = function findFilmById (req, res, next) {
  Film.findFilmById(req.swagger.params, res, next);
};
