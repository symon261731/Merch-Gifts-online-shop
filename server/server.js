const express = require('express');
const cors = require('cors');
require('dotenv').config();
const apiRouter = require('./routes/apiRouter');

const app = express();

app.use(cors());

app.use('/api', apiRouter);

app.listen(process.env.PORT, () => console.log(`Welcome to port ${process.env.PORT} my lord`));
