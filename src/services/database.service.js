import mongoose from 'mongoose';
import logger from './logger.service.js';
import settings from '../config/settings.js';

const options = {
  autoIndex: false,
  poolSize: 10,
  bufferMaxEntries: 0,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

async function connectDB() {
  try {
    await mongoose.connect(`mongodb://${settings.dbUrl}`, options);
    logger.info('MongoDB connection successful');
  } catch (error) {
    logger.error('MongoDB connection unsuccessful, retry after 5 seconds.');
    setTimeout(connectDB, 5000);
  }
}

export default { connectDB };
