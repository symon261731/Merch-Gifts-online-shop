const express = require('express');

const router = express.Router();

router.post('/TelephoneNumber', (req, res) => {
  const { telephone } = req.body;
  console.log(telephone);
  res.sendStatus(200);
});

module.exports = router;
