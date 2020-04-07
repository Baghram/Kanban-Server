const router = require('express').Router()
const userRoute = require('./userroute')
const projectRoute = require('./projectroute')


router.get('/', function(req, res) {
    res.status(200).json({
        message: 'home domain connected'
    })
})

router.use('/project', projectRoute)
router.use('/user', userRoute)



module.exports = router