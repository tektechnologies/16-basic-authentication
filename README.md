![CF](http://i.imgur.com/7v5ASc8.png) 16: Basic Auth
===

## Submission Instructions
  * Follow the lab submission instructions in the reference folder 

## Learning Objectives  
* students will be able to create basic authorization middleware
* students will be able to test basic authorization for signup/signin routes
* students will be able to create bearer authentication middleware
* students will be able to utilize their bearer authentication middleware in their route structures
* students will be able to test against authenticated routes

## Requirements

### Feature Tasks

* create an HTTP server using `express`
* using `mongoose`, create a **User** model with the following properties and options:
  * `username` - *required and unique*
  * `email` - *required and unique*
  * `password` - *required - this must be hashed and can not stored as plain text*
* use the **npm** `debug` module to log function calls that are used within your application
* use the **express** `Router` to create a custom router for allowing users to **sign up** and **sign in**
* use the **npm** `dotenv` module to house the following environment variables:
  * `PORT`
  * `MONGODB_URI`
  * `APP_SECRET` *(used for signing and verify tokens)*

## Description

* create a bearer auth middleware module (feel free to use the one from lecture as a reference point)
* create a new resource that has at least three properties
  * this resource must have a property of `userID` that references the `_id` of the user that created the resource
  * the `userID` property can only be set from an `_id` found using your bearer auth middleware module
* as always, use the **npm** `debug` module to log function calls that are used within your application
* using the express `Router`, create routes for doing **RESTFUL CRUD** operations against your resource

## Server Endpoints

### `/api/signup`
* `POST` request
* the client should pass the username and password in the body of the request
* the server should respond with a token (generated using `jwt`)
* the server should respond with **400 Bad Request** to a failed request

### `/api/signin`
* `GET` request
* the client should pass the username and password to the server using a `Basic:` authorization header
* use middleware to parse the auth header for username/password
* perform some basic validation
* the server should respond with a token for authenticated users
* the server should respond with **401 Unauthorized** for non-authenticated users

**Incorporate the authentication and authorization model, routes and middleware into your express server, putting `auth` in front of every API route, ensuring they all require a login for access.**

### `/api/resource-name`

* `POST` request
* pass data as stringifed JSON in the body of a post request to create a new resource

### `/api/resource-name/:id`
* `GET` request
* pass the id of a resource though the url endpoint to `req.params` to fetch a resource   
* `PUT` request
* pass data as stringifed JSON in the body of a put request to update a resource
* `DELETE` request
* pass the id of a resource though the url endpoint *(using `req.params`)* to delete a resource

## Tests

* create a test that will ensure that your API returns a status code of **404** for any routes that have not been registered
* `/api/signup`
  * `POST` - test **400**, if no request body has been provided or the body is invalid
  * `POST` - test **200**, if the request body has been provided and is valid
* `/api/signin`
  * `GET` - test **401**, if the user could not be authenticated
  * `GET` - test **200**, responds with token for a request with a valid basic authorization header

* create a series of tests to ensure that your `/api/resource-name` endpoint responds as described for each condition below:
* `GET` - test **200**, for a request made with a valid id
* `GET` - test **401**, if no token was provided
* `GET` - test **404**, for a valid request with an id that was not found
* `PUT` - test **200**, for a post request with a valid body
* `PUT` - test **401**, if no token was provided
* `PUT` - test **400**, if the body was invalid
* `PUT` - test **404**, for a valid request made with an id that was not found
* `POST` - test **200**, for a post request with a valid body
* `POST` - test **401**, if no token was provided
* `POST` - test **400**, if no body was provided or if the body was invalid
