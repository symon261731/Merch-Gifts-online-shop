const express = require('express');

const router = express.Router();
const { Request } = require('../db/models');

router.post('/telephoneNumber', async (req, res) => {
  try {
    const { telephone } = req.body;
    await Request.create({ telephone });
    res.sendStatus(200);
  } catch (e) {
    console.log(req);
    res.sendStatus(501);
  }
});

module.exports = router;
