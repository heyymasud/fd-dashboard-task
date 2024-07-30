const jwt = require("jsonwebtoken");
require("dotenv").config();

const authMiddleware = (req, res, next) => {
  const authorization = req.headers["authorization"];

  if (!authorization) {
    return res.status(403).json({
      message: "Unauthorized",
    });
  }

  const token = authorization.split(" ")[1];
  try {
    jwt.verify(token, process.env.JWT_SECRET)
  } catch (err) {
    return res.status(403).json({
      message: "Invalid Token",
    })
  }

  next();
};

module.exports = authMiddleware;
