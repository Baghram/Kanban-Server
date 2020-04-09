const {User, ProjectUser, Project, Task} = require('../models')

class Controller {

    static FetchProject(req, res, next) { //DONE AND TESTED

        ProjectUser.findAll({
            where: {
                UserId: req.Authenticated.id
            },
            include: ['Project']
        })
            .then(function(result) {
                return res.status(200).json(result)
            })
            .catch(function(err) {
                next(err)
            })
    }

    static AddProject(req,res, next) { //DONE AND TESTED
        let {Title} = req.body
        Project.create({
            Title
        })
            .then(function(result) {
                return ProjectUser.create({
                    UserId: req.Authenticated.id,
                    ProjectId: result.id
                })
            })
            .then(function(result) {
                return res.status(201).json({
                    msg: "Successfully Create Project"
                })
            })
            .catch(function(err) {
                next(err)
            })
    }

    static GetFriend(req, res, next) {
        let {ProjectId} = req.body
        ProjectUser.findAll({
            where: {
                ProjectId
            },
            include: ['User']
        })
            .then(function(result) {
                return res.status(200).json(result)
            })
            .catch(function(err) {
                console.log(err)
                next(err)
            })
    }

    static AddFriend(req, res, next) {
        let {Email, ProjectId} = req.body
        let UserId;
        User.findOne({
            where: {
                Email
            }
        })
            .then(function(result) {
                if(result !== null) {
                    UserId = result.id
                    return ProjectUser.findOne({
                        where: {
                            UserId
                        }
                    })
                }
                else {
                    let err = {
                        msg: 'Please Fill Valid Email'
                    }
                    throw err
                }
            })
            .then(function(result) {
                if(result == null) {
                    return ProjectUser.create({
                        UserId,
                        ProjectId
                    })
                } else {
                    let err = {
                        msg: 'Email Already Exist'
                    }
                }
            })
            .then(function(result) {
                return res.status(201).json({
                    msg: 'Succesfully Add Email'
                })
            })
            .catch(function(err) {
                next(err)
            })

    }

    static DeleteFriend(req, res, next) {
        let {ProjectId, Email} = req.body
        User.findOne({
            where: {
                Email
            }
        })
        .then(function(result) {
            if(result !== null) {
                return ProjectUser.destroy({
                    where: {
                        ProjectId,
                        UserId: result.id
                    }
                })
            }
            else {
                let err = {
                    msg: 'Please Fill Valid Email'
                }
                throw err
            }
        })
        .then(function(result) {
            return res.status(200).json({
                msg: 'Successfully Delete'
            })
        })
        .catch(function(err) {
            next(err)
        })

    }

    static FetchTask(req, res, next) {
        let {ProjectId} = req.body
        Task.findAll({
            where: {
                ProjectId
            }
        })
            .then(function(result) {
                return res.status(200).json(result)
            })
            .catch(function(err) {
                console.log(err)
                next(err)
            })

    }

    static CreateTask(req, res, next) {
        let {Title, Category, Description, ProjectId} = req.body
        Task.create({
            Title,
            Category,
            Description,
            ProjectId
        })
            .then(function(result) {
                return res.status(201).json(result)
            })
            .catch(function(err) {
                next(err)
            })

    }
    
    static UpdateTask(req, res, next) {
        let {Title, Category, Description, ProjectId } = req.body
        Task.findOne({
            where: {
                id: req.params.id
            }
        })
        .then(function(result) {
           if(result !== null) {
               return Task.update({
                   Title,
                   Category,
                   Description,
                   ProjectId
               }, {
                   where: {
                       id: req.params.id
                   }
               })
               
           } else {
               let err ={
                   msg: 'Task Does Not Exist'
               }
               throw err
           }
            
        }) 
        .then(function(result) {
            return res.status(201).json({
                msg: "Update Success"
            })
        })
        .catch(function(err) {
            next(err)
        })
    }

    static DeleteTask(req, res, next) {
        Task.findOne({
            where: {
                id: req.params.id
            }
        })
            .then(function(result) {
                if(result !== null) {
                    return Task.destroy({
                        where: {
                            id: req.params.id
                        }
                    })
                }
                else {
                    let err ={
                        msg: 'Task Does Not Exist'
                    }
                    throw err
                }
            })
            .then(function(result) {
                return res.status(201).json({
                    msg: 'Successfully Delete'
                })
            })
            .catch(function(err) {
                console.log(err)
                next(err)
            })
    }

    

}

module.exports = Controller