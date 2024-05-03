import cors from 'cors';
import { config } from 'dotenv';
import express, { json } from 'express';
import fileRouter from './module/file/file.route';
import { DATABASE_MESSAGE } from './module/message/message';
import productRouter from './module/product/product.route';
import databaseService from './service/database.service';

config();

// database connect
databaseService
  .connect()
  .then(() => {
    console.log(DATABASE_MESSAGE.CONNECT_SUCCESS);
    return true;
  })
  .catch((error: unknown) => {
    console.error(DATABASE_MESSAGE.CONNECT_FAILED);
    console.error(error);
    return false;
  });

const app = express();
const PORT_SERVER = process.env.PORT_SERVER ?? 4000;

// env
const isProduction = process.env.NODE_ENV === 'production';
const frontendURL = isProduction
  ? process.env.PRODUCTION_FRONTEND_URL
  : process.env.DEVELOPMENT_FRONTEND_URL;

// const databaseURL = isProduction
//   ? process.env.PRODUCTION_DATABASE_URL
//   : process.env.DEVELOPMENT_DATABASE_URL;

// cors
const corsOptions = {
  origin: frontendURL,
  credentials: true, // access-control-allow-credentials:true
  allowedHeaders: ['Content-Type', 'Authorization'], // access-control-allow-headers
  optionSuccessStatus: 200,
};

// cors middleware
app.use(cors(corsOptions));

// middleware
// this is for parsing json data
const jsonParseMiddleware = json();
app.use(jsonParseMiddleware);

// this is for logging
app.all('*', (req, res, next) => {
  console.log('Time', Date.now());
  console.log(req);
  next();
});

// route
app.use('/file', fileRouter);

app.use('/product', productRouter);

app.use('/', (req, res) => {
  res.send('This is home page');
});

// error handler

// port
app.listen(PORT_SERVER, () => {
  console.log(`Server is running in ${isProduction ? 'production' : 'development'} mode`);
  console.log(`Server is running on http://localhost:${PORT_SERVER}`);
});
