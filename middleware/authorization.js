const {ProjectUser} = require('../models')

module.exports = function(req, res, next) {
    ProjectUser.findOne({
        where: {
            ProjectId : req.body.ProjectId,
            UserId: req.Authenticated.id
        }
    })
        .then(result => {
            if(result !== null) {
                next()
            }
            else {
                let err = {
                    msg: 'Not Authorized'
                }
                throw err
            }
        })
        .catch(err => {
            next(err)
        })
    
}