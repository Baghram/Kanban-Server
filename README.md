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