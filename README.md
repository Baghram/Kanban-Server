Title
Register

URL

/user/register

Method:

POST 

URL Params

Required:

-

Optional:

-

Data Params

Email:String,
Password:String

Success Response:


Code: 201
Content: {
    "message": "Register Success!!",
    "Email": "testing@mail.com"
}
Error Response:

Code:400 Bad Request
Content: {
    "type": "Bad Request",
    "message": "Email Already Exist"
}

__________________________________________________________________
Title
Login

URL

/user/login

Method:

POST 

URL Params

Required:

-

Optional:

-

Data Params

Email:String,
Password:String

Success Response:


Code: 201
Content: {
    "Access_Token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiRW1haWwiOiJ0ZXN0aW5nQG1haWwuY29tIiwiaWF0IjoxNTg2Mjc0NTE2fQ.kG_C8Y1uR-b6Ztd8xeUFYgzWkZlqIuRLT34xJbDBZXU",
    "Email": "testing@mail.com"
}
Error Response:

Code:400 Bad Request
Content: {
    "type": "Bad request",
    "message": Error Messages
}

__________________________________________________________________
Title
Get Project

URL

/project

Method:

GET 

URL Params

Required:

-Headers: access_token:string

Optional:

-

Data Params

-

Success Response:


Code: 200
Content: [
    {
        "id": 1,
        "ProjectId": 4,
        "UserId": 1,
        "createdAt": "2020-04-07T16:00:20.072Z",
        "updatedAt": "2020-04-07T16:00:20.072Z",
        "Project": {
            "id": 4,
            "Title": null,
            "createdAt": "2020-04-07T16:00:19.957Z",
            "updatedAt": "2020-04-07T16:00:19.957Z"
        }
    },
    {
        "id": 2,
        "ProjectId": 5,
        "UserId": 1,
        "createdAt": "2020-04-07T16:00:57.571Z",
        "updatedAt": "2020-04-07T16:00:57.571Z",
        "Project": {
            "id": 5,
            "Title": "Project-1",
            "createdAt": "2020-04-07T16:00:57.406Z",
            "updatedAt": "2020-04-07T16:00:57.406Z"
        }
    }
]
Error Response:

Code:400 Bad Request
Content: {
    "type": "Bad request",
    "message": Error Messages
}

__________________________________________________________________
Title
Add Project

URL

/project

Method:

POST 

URL Params

Required:

-Headers: access_token:string

Optional:

-

Data Params

-Title: String

Success Response:


Code: 200
Content: {
    "msg": "Successfully Create Project"
}
Error Response:

Code:400 Bad Request
Content: [
    "Validation notEmpty on Title failed"
]

__________________________________________________________________
Title
Add Friend

URL

/project/friend

Method:

POST 

URL Params

Required:

-Headers: access_token:string

Optional:

-

Data Params

-Email: String,
-ProjectId: Integer

Success Response:


Code: 200
Content: {
    "msg": "Succesfully Add Email"
}
Error Response:

Code:400 Bad Request
Content: {
    "type": "Bad Request",
    "message": "Please Fill Valid Email"
}

__________________________________________________________________
Title
DELETE Friend

URL

/project/friend

Method:

DELETE 

URL Params

Required:

-Headers: access_token:string

Optional:

-

Data Params

-Email: String,
-ProjectId: Integer

Success Response:


Code: 200
Content: {
    "msg": "Successfully Delete"
}
Error Response:

Code:400 Bad Request
Content: {
    "type": "Bad Request",
    "message": "Error Messages"
}

__________________________________________________________________
Title
Get Task

URL

/project/task

Method:

GET 

URL Params

Required:

-Headers: access_token:string

Optional:

-

Data Params

-ProjectId: Integer

Success Response:


Code: 200
Content:[
    {
        "id": 1,
        "Title": "ProjectTitle",
        "Category": "Done",
        "Description": "ProjectDescription",
        "ProjectId": 7,
        "createdAt": "2020-04-08T13:18:29.938Z",
        "updatedAt": "2020-04-08T13:18:29.938Z"
    }
]
Error Response:

Code:400 Bad Request
Content: {
    "type": "Bad Request",
    "message": "Error Messages"
}

__________________________________________________________________
Title
Create Task

URL

/project/task

Method:

POST 

URL Params

Required:

-Headers: access_token:string

Optional:

-

Data Params

-Title: String,
-Category: String,
-Description: String
-ProjectId: Integer

Success Response:


Code: 201
Content: {
    "id": 1,
    "Title": "ProjectTitle",
    "Category": "Done",
    "Description": "ProjectDescription",
    "ProjectId": 7,
    "updatedAt": "2020-04-08T13:18:29.938Z",
    "createdAt": "2020-04-08T13:18:29.938Z"
}
Error Response:

Code:400 Bad Request
Content: {
    "type": "Bad Request",
    "message": "Error Messages"
}

__________________________________________________________________
Title
Update Task

URL

/project/task/:id

Method:

Patch 

URL Params

Required:

-Headers: access_token:string,
-id: Req.params.id : Integer

Optional:

-

Data Params

-Title: String,
-Category: String,
-Description: String
-ProjectId: Integer

Success Response:


Code: 201
Content: {
    "msg": "Update Success"
}
Error Response:

Code:400 Bad Request
Content: {
    "type": "Bad Request",
    "message": "Error Messages"
}

__________________________________________________________________
Title
Delete Task

URL

/project/task/:id

Method:

Delete 

URL Params

Required:

-Headers: access_token:string,
-id: Req.params.id : Integer

Optional:

-

Data Params

Success Response:


Code: 201
Content: {
    "msg": "Successfully Delete"
}
Error Response:

Code:400 Bad Request
Content: {
    "type": "Bad Request",
    "message": "Task Does Not Exist"
}

__________________________________________________________________