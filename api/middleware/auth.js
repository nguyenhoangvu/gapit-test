'use strict'

module.exports = {
  isLoggedIn: (req, res, next) => {
    try {
      if (req.headers.authorization) {
        const token = req.headers.authorization.split(' ')[1]
        token === '1234' ? next() : {}
      } else {
        return res.status(401).send({
          msg: 'Your session is invalid!'
        })
      }
    } catch (err) { }
  },

  getUser: async function (token) {
    const user = await new Promise(((resolve, reject) => {
      token.then(r => {
        resolve(r)
      }, err => {
        reject(err)
      })
    }))
    return user.rows[0];
  }
}