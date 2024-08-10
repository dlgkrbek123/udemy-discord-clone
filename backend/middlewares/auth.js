const jwt = require('jsonwebtoken');

const config = process.env;

const verifyToken = (req, res, next) => {
  let token = req.body.token || req.query.token || req.headers['authorization'];

  if (!token) {
    return res.status(403).send('A Token is required for authentication');
  }

  try {
    // 디코딩하여 req.user에 추가
    token = token.replace(/^Bearer\s+/, '');
    const decoded = jwt.verify(token, config.TOKEN_KEY);
    req.user = decoded;
  } catch (error) {
    return res.status(401).send('Invalid Token');
  }

  next();
};

module.exports = verifyToken;
