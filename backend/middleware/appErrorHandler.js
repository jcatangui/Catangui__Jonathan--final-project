function appErrorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500).json({ message: "Server error" });
}

export default appErrorHandler;
