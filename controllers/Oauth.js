'use strict';

var url = require('url');

var Oauth = require('./OauthService');

module.exports.getAccessToken = function getAccessToken (req, res, next) {
  Oauth.getAccessToken(req.swagger.params, res, next);
};
