const projectRoute = require('express').Router()
const Controller = require('../controller/controller')
const Authentication = require('../middleware/authentication')
const Authorization = require('../middleware/authorization')

projectRoute.use(Authentication)
projectRoute.get('/', Controller.FetchProject) // Done & Tested
projectRoute.post('/', Controller.AddProject) // Done & Tested
projectRoute.post('/getfriend',Controller.GetFriend) //Done & Tested
projectRoute.post('/friend', Authorization, Controller.AddFriend)// Done & Tested
projectRoute.delete('/friend', Authorization, Controller.DeleteFriend) //Done & Tested
projectRoute.post('/task', Authorization, Controller.FetchTask) // Done & Tested
projectRoute.post('/addtask',Authorization, Controller.CreateTask) // Done & Tested
projectRoute.patch('/task/:id', Authorization, Controller.UpdateTask) // Done & Tested
projectRoute.delete('/task/:id', Authorization, Controller.DeleteTask)// Done & Tested

module.exports = projectRoute