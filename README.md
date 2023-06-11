# Web Server Using NodeJs
## Introduction
   So in this repo we will build a HTTP server, there is some prerequsite for this project which is some basic knowledge of javascript
   We all know that the NodeJs has gained significant popularity in recent years as a powrful platform for building scalable and efficient backend application

## What is NodeJs
   NodeJs is a javascript runtime environment that allow us to execute Javascript code on the server side, NodeJs is commonly used to create web server, APIs, and other backend services.

## Steps to create your First WebServer using NodeJS
### Install Node.js
   * Starting with install ```node.js``` on your machine. There is several ways to install NodeJs in your machine.

1.  Install manually from Official website (nodejs.org)

2.  Run a command in your shell ```install node``` and for linux ```sudo apt install node``` .

 ### Create a new Node.js project 
   * In the terminal run ```npm init``` 

 ### Installing dependencies
   *  Again in the terminal run the command ```npm install <package name >``` so there is bundle of packages in the npm(node package manager) so here we can install ```npm install express```  

### Creating a simple Web Server
   * One of the common use cases of Node.Js is building web server. Here we can maka a simple HTTP server using the built in ```http``` module in Node.js 
  > Open Server.js file 
   
   * In this Web Server example 
   1. We import the ```http``` module using the ```require``` function 
   2. We create a server using the ```createServer``` method which takes a callback function with two parameter: ```req```(request) and  ```res```(response)
   3. Inside the callback function we set the response status to 200 and the content type to ```text/plain```. The line ```res.setHeader('Content-Type', 'text/plain')``` sets the ```content-type header of the HTTP response . The ```Content-Type``` header informs the client (usually a web browser) about the type of content being sent in the response.
   4. Then we send the response with the message ```'Hello Loki'```
   5. We specify the port number (3000 in this case) on which the server should listen for incoming requests using the ```listen``` method.
   6. Finally, we log a message to the console when the server starts running.

 ### Run Your File 
   * Run the ```node``` command :

```Javascript
node server.js
```
 * Now if you visit ```http://localhost:3000``` in the browser you should see the "Hello Loki" message.  
   
 
         


