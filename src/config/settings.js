import dotenv from 'dotenv';

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

const settings = {
  port: 3000,
  dbUrl: process.env.DBURL,
  appEndpoint: 'http://localhost:3000',
  apiEndpoint: 'http://localhost:3000}',
  appName: process.env.npm_package_name,
  logLevel: 'info',
};

export default settings;
