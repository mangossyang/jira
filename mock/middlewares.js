module.exports = (req, res, next) => {
  const { method, path, body } = req
  if (method === 'POST' && path === '/login') {
    if (body.username === 'admin' && body.password === 'a') {
      return res.status(200).json({
        user: {
          token: '123'
        }
      })
    } else {
      return res.status(400).json({
        msg: 'error'
      })
    }
  }
  next()
}
