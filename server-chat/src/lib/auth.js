/*
**  Func de création et de vérification de JS Web Token
**  (Un token sert à identifier un user lors de sa connection pour protéger des routes)
*/

const jwt = require('jsonwebtoken');

module.exports.verifyJWTToken = function verifyJWTToken(token) {
  return new Promise((resolve, reject) =>
  {
    jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => 
    {
      if (err || !decodedToken)
      {
        return reject(err);
      }
      resolve(decodedToken);
    });
  });
};

module.exports.createJWToken = function createJWToken(user) {
  const token = jwt.sign(
    { 
      data: user
    },
      process.env.JWT_SECRET, 
    { 
      expiresIn: 3600,
      algorithm: 'HS256'
    }
  );

  return token;
};