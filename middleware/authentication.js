let jwt = require('jsonwebtoken')
const {User} = require('../models')


module.exports = function(req, res, next) {

    let Access_Token = req.headers.access_token
    let Authenticate = jwt.verify(Access_Token, process.env.SECRET)
    console.log(Authenticate)
    User.findOne({
        where: {
            Email: Authenticate.Email
        }
    })
        .then(function(result) {
            if(result !== null) {
                req.Authenticated = result
                next()
            }
            else {
                let err = {
                    msg: 'Authentication Failed'
                }
                throw err
            }
        })
        .catch(function(err) {
            next(err)
        })

}