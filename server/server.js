const express = require('express');
require('dotenv').config();
const cors = require('cors');

const app = express();

app.use(cors());

app.use('/api', apiRouter);

app.listen(process.env.PORT, () => console.log(`Welcome to port ${process.env.PORT} my lord`));
