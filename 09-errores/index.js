function suma(a, b) {
    if(a === undefined || b === undefined) {
        throw new Error('Faltan parametros');
    }
    if(typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Parametros no numericos');
    }
    return a + b;
}

const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

try {
    const res = suma("4", 5);
} catch (error) {
    logger.error(error.message);
}