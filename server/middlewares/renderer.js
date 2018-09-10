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

    // TODO. filter gOption from config.
    docStr = docStr.replace(/{{nonce}}/g, res.locals.nonce); 
    docStr = docStr.replace(/{{tiffanyApi}}/g, tiffanyApi || '');
    docStr = docStr.replace(/{{hasToken}}/g, hasValidToken);
    docStr = docStr.replace(/{{eosChainId}}/g, eosChainid);
    docStr = docStr.replace(/{{eosChainUrl}}/g, clientEosUrl);
    docStr = docStr.replace(/{{gOption}}/g, JSON.stringify(config));
    res.send(docStr);
  });
};

module.exports = renderer;
