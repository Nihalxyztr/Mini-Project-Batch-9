const userRequests = {};

const WINDOW_SIZE = 10 * 1000; // 10 seconds
const MAX_REQUESTS = 5;

const rateLimiter = (req, res, next) => {
  const user = req.ip;

  if (!userRequests[user]) {
    userRequests[user] = [];
  }

  const currentTime = Date.now();

  // Remove old requests
  userRequests[user] = userRequests[user].filter(
    (timestamp) => currentTime - timestamp < WINDOW_SIZE
  );

  if (userRequests[user].length >= MAX_REQUESTS) {
    return res.status(429).json({
      message: "Too many requests, please try again later"
    });
  }

  userRequests[user].push(currentTime);
  next();
};

module.exports = rateLimiter;