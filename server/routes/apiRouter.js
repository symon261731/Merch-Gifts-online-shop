const express = require('express');

const router = express.Router();
const { Request } = require('../db/models');

router.post('/TelephoneNumber', async (req, res) => {
  const { telephone } = req.body;
  await Request.create({ telephone });
  res.sendStatus(200);
});

module.exports = router;
