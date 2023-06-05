# Centeuno-APIs

A RESTful web service written in node.js and express.js which contains all the APIs as stated in the assignment.

## APIs List : 

- GET /api/products/list?size={no_of_items}&page={offset}: Get all products but with the limitation of size and page offset.
- GET /api/products/{id} : Get only that product whose id matches with the specified {id}


## Tech

This project uses a number of Libraries to work properly:

- Node.js
- Express.js

## Installation

It requires [Node.js](https://nodejs.org/) v10+ to run.

### Steps to run this project : 

```sh
Step 1 : Clone this Repo 
Step 2 : Open your bash shell and run code git clone {git clone url}
Step 3 : Install the dependencies and devDependencies and start the server.

Step 4 : 

cd centeuno-assignment
npm i
npm start : For development enviorments
```
The local server will start at 127.0.0.1:3000/


### POSTMAN API COLLECTION
[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/17373422-662ac273-29e7-4ea3-97a1-37ea19b64ed5?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D17373422-662ac273-29e7-4ea3-97a1-37ea19b64ed5%26entityType%3Dcollection%26workspaceId%3D8b7ad081-e86e-4420-a3e2-fa4ced2b1851)