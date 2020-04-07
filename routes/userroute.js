const userRoute = require('express').Router()
const UserController = require('../controller/usercontroller')

userRoute.post('/register', UserController.Register) //DONE & TESTED
userRoute.post('/login', UserController.Login) // DONE & TESTED


module.exports=userRoute