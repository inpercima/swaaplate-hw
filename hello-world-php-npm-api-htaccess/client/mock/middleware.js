const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  if (req.method === 'POST' && req.path === '/auth') {
    if (req.body.username === 'hello-world-php-npm-api-htaccess' && req.body.password === 'hello-world-php-npm-api-htaccess') {
      res.status(200).json({
        token: jwt.sign({
          username: req.body.username,
        }, 'secretKey', {
          expiresIn: '1h',
        })
      })
    } else {
      res.status(400).json({ message: 'Username or password is incorrect.' })
    }
  } else {
    next()
  }
}