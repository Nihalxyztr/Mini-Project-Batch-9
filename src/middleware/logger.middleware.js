const loggerMiddleware = (req, res, next) => {
  const start = Date.now();

  res.on("finish", () => {
    const time = Date.now() - start;

    console.log(
      `[${req.traceId}] ${req.method} ${req.originalUrl} - ${res.statusCode} - ${time}ms`
    );
  });

  next();
};

export default loggerMiddleware;