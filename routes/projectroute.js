const projectRoute = require('express').Router()
const Controller = require('../controller/controller')
const Authentication = require('../middleware/authentication')

projectRoute.use(Authentication)
projectRoute.get('/', Controller.FetchProject) // Done & Tested
projectRoute.post('/', Controller.AddProject) // Done & Tested
projectRoute.post('/friend', Controller.AddFriend)
projectRoute.delete('/friend', Controller.DeleteFriend)
projectRoute.get('/task', Controller.FetchTask)
projectRoute.post('/task', Controller.CreateTask)
projectRoute.patch('/task/:id', Controller.UpdateTask)
projectRoute.delete('/task/:id', Controller.DeleteTask)

module.exports = projectRoute