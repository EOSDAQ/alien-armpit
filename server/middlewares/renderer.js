const path = require('path');
const fs = require('fs');
const config = require('../config');
const { generateUuid, cspMiddleware } = require('./contentSecurityPolicy');

const renderer = (app) => {
  app.get('*', generateUuid, cspMiddleware, (req, res) => {
    const { rootPath, staticPath } = config;
    const htmlPath = path.resolve(rootPath, staticPath.slice(1), 'index.html');
    let docStr = fs.readFileSync(htmlPath, 'utf-8');
    const { tiffanyApi } = config;
    docStr = docStr.replace(/{{nonce}}/g, res.locals.nonce); 
    docStr = docStr.replace(
      /{{api}}/g, 
      `<meta property="api:tiffany" content=${tiffanyApi}>`,
    );
    
    res.send(docStr);
  });
};

module.exports = renderer;
