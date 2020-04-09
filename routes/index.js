const router = require('express').Router()
const userRoute = require('./userroute')
const projectRoute = require('./projectroute')
const socket = require('../helper/socket')

router.get('/', function(req, res) {
    req.io.sockets.emit('tralala', {
        message: 'HALELUYAAA'
    })
    res.status(200).json({
        message: 'home domain connected'
    })
})




router.use('/project', projectRoute)
router.use('/user', userRoute)



module.exports = router