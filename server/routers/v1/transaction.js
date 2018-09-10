const express = require('express');
const HttpError = require('http-errors');

const router = express.Router();

// 토큰의 거래기록
router.get('/symbol/:symbol/tx', async (req, res) => {

});

// 개인의 토큰 거래기록
router.get('/symbol/:symbol/user/:accountName/tx', async (req, res) => {
  
});