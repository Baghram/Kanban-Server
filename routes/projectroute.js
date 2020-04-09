const projectRoute = require('express').Router()
const Controller = require('../controller/controller')
const Authentication = require('../middleware/authentication')

projectRoute.use(Authentication)
projectRoute.get('/', Controller.FetchProject) // Done & Tested
projectRoute.post('/', Controller.AddProject) // Done & Tested
projectRoute.post('/getfriend',Controller.GetFriend) //Done & Tested
projectRoute.post('/friend', Controller.AddFriend)// Done & Tested
projectRoute.delete('/friend', Controller.DeleteFriend) //Done & Tested
projectRoute.post('/task', Controller.FetchTask) // Done & Tested
projectRoute.post('/addtask', Controller.CreateTask) // Done & Tested
projectRoute.patch('/task/:id', Controller.UpdateTask) // Done & Tested
projectRoute.delete('/task/:id', Controller.DeleteTask)// Done & Tested

module.exports = projectRoute