import { createLogger, format, transports } from 'winston';

export const logger = createLogger({
  transports: [
    new transports.Console({
      format: format.combine()
    }),
    new transports.File({
      dirname: 'logs',
      level: 'error',
      filename: 'error.log',
      format: format.combine(format.uncolorize(), format.json())
    }),
    new transports.File({
      dirname: 'logs',
      level: 'info',
      filename: 'combined.log',
      format: format.combine(format.uncolorize(), format.json())
    })
  ],
  format: format.combine(
    format((info) => {
      info.level = info.level.toUpperCase();
      return info;
    })(),
    format.colorize({ all: true }),
    format.splat(),
    format.metadata(),
    format.timestamp({ format: 'DD-MM-YYYY HH:mm:ss' }),
    format.align(),
    format.printf(({ timestamp, level, message, metadata }) => {
      return `[${level}]: ${timestamp} : ${message}. ${
        Object.keys(metadata).length === 0 ? '' : JSON.stringify(metadata)
      }`;
    })
  )
});
