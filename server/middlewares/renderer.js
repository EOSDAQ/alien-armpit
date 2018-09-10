const path = require('path');
const fs = require('fs');
const config = require('../config');
const { generateUuid, cspMiddleware } = require('./contentSecurityPolicy');
const jwtHelper = require('./jwtHelper');

const { isJwtValid } = jwtHelper;

const renderer = (app) => {
  app.get('*', generateUuid, cspMiddleware, async (req, res) => {
    const { rootPath, staticPath } = config;
    const htmlPath = path.resolve(rootPath, staticPath.slice(1), 'index.html');
    let docStr = fs.readFileSync(htmlPath, 'utf-8');
    const {
      tiffanyApi,
      eosChainid,
      clientEosUrl,
    } = config;
    const hasValidToken = await isJwtValid(req, res);
    const gOption = JSON.stringify({
      baseCurrency: config.baseCurrency,
    });
    docStr = docStr.replace(/{{nonce}}/g, res.locals.nonce)
      .replace(/{{tiffanyApi}}/g, tiffanyApi || '')
      .replace(/{{hasToken}}/g, hasValidToken)
      .replace(/{{eosChainId}}/g, eosChainid)
      .replace(/{{eosChainUrl}}/g, clientEosUrl)
      .replace(/{{gOption}}/g, gOption);
    res.send(docStr);
  });
};

module.exports = renderer;
