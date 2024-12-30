#Overview
TodoGURU is a task management application backend built with Node.js, Express, and MongoDB. This backend provides RESTful APIs for user authentication and task management, including creating, retrieving, updating, and deleting tasks with authentication using JWT.

#Technologies Used
    Node.js
    Express
    Mongoose
    MongoDB
    dotenv
    bcryptjs
    jsonwebtoken
    cors

#Setup Instructions
Clone the repository and navigate to the project directory.
Install the necessary dependencies using npm.
Create a .env file to store your environment variables, including your MongoDB URI, port number, and JWT secret.
Start the server.

#Environment Variables
MONGODB_URI: Connection string for your MongoDB database.
PORT: Port number for the server (default is 5000).
JWT_SECRET: Secret key for signing JSON Web Tokens.

#API Endpoints :
#User Authentication

#Register a New User
  Endpoint: POST /api/auth/register
  Request Body: Requires a username and password.
  Response: Returns a success message upon successful registration or an error message if registration fails.

ex:
  POST  http://localhost:5000/api/auth/login
   Header:
     key:Content-Type  value: application/json
   Body:
     {
    "username": "XXX", 
    "password": "YYYY"
      }
  Output:
     "message": "User  registered"

#Login a User

  Endpoint: POST /api/auth/login
  Request Body: Requires a username and password.
  Response: Returns a JWT token upon successful login or an error message if login fails.
  Task Management

  ex:
   POST  http://localhost:5000/api/auth/login
   Header:
     key:Content-Type  value: application/json
     
   Body:
     {
    "username": "XXX", 
    "password": "YYYY"
      }
  Output:
  "token": "XXXXXXXXXXXXXXXX" -->This is the token to get the access to the database 

#Add a New Task

  Endpoint: POST /api/tasks
  Headers: Requires an Authorization header with a Bearer token.
  Request Body: Requires a title, description, and due date for the task.
  Response: Returns a success message and the created task upon successful addition or an error message if the addition fails.
  
#Get All Tasks (with Pagination)

  Endpoint: GET /api/tasks?page=1&limit=10
  Headers: Requires an Authorization header with a Bearer token.
  Response: Returns an array of tasks along with pagination information.

#Get a Single Task by ID

  Endpoint: GET /api/tasks/:taskId
  Headers: Requires an Authorization header with a Bearer token.
  Response: Returns the requested task or an error message if the task is not found.

#Update a Task by ID

  Endpoint: PUT /api/tasks/:taskId
  Headers: Requires an Authorization header with a Bearer token.
  Request Body: Requires updated title, description, and due date for the task.
  Response: Returns a success message and the updated task upon successful update or an error message if the update fails.

#Delete a Task by ID

  Endpoint: DELETE /api/tasks/:taskId
  Headers: Requires an Authorization header with a Bearer token.
  Response: Returns a success message upon successful deletion or an error message if the task is not found.

--> Testing with Postman(I have given a example in each Endpoints to check it's working or not in the Postman application):
  To test the API endpoints using Postman:

#Register a New User

  Set the request type to POST and enter the URL for the register endpoint.
  In the body, select JSON and provide the username and password.
  Send the request and check the response.

#Login a User

  Set the request type to POST and enter the URL for the login endpoint.
  In the body, select JSON and provide the username and password.
  Send the request and check the response for the JWT token.
  
#Add a New Task

  Set the request type to POST and enter the URL for the add task endpoint.
  In the headers, add the Authorization header with the Bearer token.
  In the body, select JSON and provide the task details.
  Send the request and check the response.

   POST: http://localhost:5000/api/tasks
  Header:
   key:Content-Type  value: application/json
   key:Authorization  value: Bearer <Your_Token>
Body:
  {
  "title": "Lap",
  "description": "Buy the Gaming Laptop",
  "dueDate": "2025-10-01"
}

Output:
  {
    "message": "Task created",
    "task": {
        "title": "Lap",
        "description": "Buy the Gaming Laptop",
        "dueDate": "2025-10-01T00:00:00.000Z",
        "_id": "67728c77592032c26e282690",
        "taskId": "05d55654-7512-4f78-9dda-d9537a38f838",
        "createdAt": "2024-12-30T12:05:11.548Z",
        "updatedAt": "2024-12-30T12:05:11.548Z",
        "__v": 0
    }
}

#Get All Tasks

  Set the request type to GET and enter the URL for the get all tasks endpoint.
  In the headers, add the Authorization header with the Bearer token.
  Send the request and check the response for the list of tasks.

 ex:
  POST: http://localhost:5000/api/tasks
  Header:
   key:Content-Type  value: application/json
  key:Authorization  value: Bearer <Your_Token>

  output:
    {
    "tasks": [
        {
            "_id": "677185b8b29e6e9cb8caa98f",
            "title": "Collage",
            "description": "Complete all the collage work to make the.",
            "dueDate": "2024-12-15T00:00:00.000Z",
            "taskId": "677185b8b29e6e9cb8caa98f",
            "__v": 0,
            "createdAt": "2024-12-30T11:00:07.674Z",
            "updatedAt": "2024-12-30T11:00:07.675Z"
        }
    ],
    "totalPages": 1,
    "currentPage": 1
}
  
#Get a Single Task

  Set the request type to GET and enter the URL for the get task by ID endpoint, replacing :taskId with the actual task ID.
  In the headers, add the Authorization header with the Bearer token.
  Send the request and check the response.

 ex:
  POST: http://localhost:5000/api/tasks/677185b8b29e6e9cb8caa98f --> get the particular task with the unique taskId
  Header:
   key:Content-Type  value: application/json
  key:Authorization  value: Bearer <Your_Token>

  output:
    {
    "_id": "677185b8b29e6e9cb8caa98f",
    "title": "Collage",
    "description": "Complete all the collage work to make the.",
    "dueDate": "2024-12-15T00:00:00.000Z",
    "taskId": "677185b8b29e6e9cb8caa98f",
    "__v": 0,
    "createdAt": "2024-12-30T11:13:41.926Z",
    "updatedAt": "2024-12-30T11:13:41.926Z"
}
  
#Update a Task

  Set the request type to PUT and enter the URL for the update task endpoint, replacing :taskId with the actual task ID.
  In the headers, add the Authorization header with the Bearer token.
  In the body, select JSON and provide the updated task details.
  Send the request and check the response.

ex:
  POST: http://localhost:5000/api/tasks/677185b8b29e6e9cb8caa98f --> get the particular task with the unique taskId
  Header:
   key:Content-Type  value: application/json
  key:Authorization  value: Bearer <Your_Token>
Body:
  "title": "Web Development"

Output:
{
    "message": "Task updated",
    "task": {
        "_id": "677185b8b29e6e9cb8caa98f",
        "title": "Web Development",
        "description": "Complete all the collage work to make the.",
        "dueDate": "2024-12-15T00:00:00.000Z",
        "taskId": "677185b8b29e6e9cb8caa98f",
        "__v": 0,
        "createdAt": "2024-12-30T11:16:38.633Z",
        "updatedAt": "2024-12-30T11:16:38.633Z"
    }
}

#Delete a Task

  Set the request type to DELETE and enter the URL for the delete task endpoint, replacing :taskId with the actual task ID.
  In the headers, add the Authorization header with the Bearer token.
  Send the request and check the response for the success message.

ex:
  POST: http://localhost:5000/api/tasks/677185b8b29e6e9cb8caa98f --> get the particular task with the unique taskId
  Header:
   key:Content-Type  value: application/json
  key:Authorization  value: Bearer <Your_Token>

Output:
   "message": "Task deleted"
  
#Contributing
If you would like to contribute to the TodoGURU project, please fork the repository and submit a pull request with your changes.
