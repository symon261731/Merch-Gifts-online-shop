const express = require('express');
require('dotenv').config();

const app = express();

app.listen(process.env.PORT, () => console.log(`Welcome to port ${process.env.PORT} my lord`));
