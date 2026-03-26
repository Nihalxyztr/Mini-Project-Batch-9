import logger from "../utils/logger.js";

const loggerMiddleware = (req, res, next) => {
  logger.info(`[${req.traceId}] ${req.method} ${req.url} - ${req.ip}`);
  next();
};

export default loggerMiddleware;