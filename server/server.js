const express = require('express');
const cors = require('cors');
require('dotenv').config();
const morgan = require('morgan');
const apiRouter = require('./routes/apiRouter');

const app = express();

app.use(cors(
  {
    credentials: true,
    origin: true,
  },
));
app.use(morgan('dev'));
app.use(express.json());

app.use('/api', apiRouter);

app.listen(process.env.PORT, () => console.log(`Welcome to port ${process.env.PORT} my lord`));
