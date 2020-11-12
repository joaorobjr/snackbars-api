import winston from 'winston';
import settings from '../config/settings.js';

const { combine, label, timestamp, printf } = winston.format;

const logFormat = printf(({ timestamp, label, level, message }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

const logger = winston.createLogger({
  level: settings.logLevel,
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      filename: `./src/server/logs/${settings.appName}.log`,
    }),
  ],
  format: combine(
    label({ label: `${settings.appName}` }),
    timestamp(),
    logFormat
  ),
});
export default logger;
