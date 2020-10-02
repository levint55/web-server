var middleware = {
  requireAuthentication: (req, res, next) => {
    console.log("private");
    next();
  },
  logger: (req, res, next) => {
    console.log(`Request ${new Date().toString()} ${req.method} ${req.originalUrl}`);
    next();
  }
};

module.exports = middleware;