1. What is the function of the following technologies in your assignment:
    1. HTML is the skeleton of the website. It contains all the content that shows in the browser. It also contains the structure of the page. All the links of medias and other pages are also included in HTML.
    2. CSS will add styles onto the page according to the structure defined in HTML.
    3. JavaScript can change the content of the page to make web pages interactive.
    4. Python will run the flask to control the back-end. The webserver.py file is basically the "server" itself. When someone goes to a route, the flask will find a specific function in webserve.py according to the route to return the content. 
    5. Flask is a framework in Python. The webserve.py file is run and called under this framework.
    6. HTTP: The browser uses HTTP request methods to communicate with the server and will get HTTP responses from the server.
    7. GET and POST requests are two HTTP request methods. Specifically, GET requests data from a specified resource, while POST submits data to be processed to a specified resource.
 2. How does HTML, CSS, and JavaScript work together in the browser for this assignment?
 HTML is the structured skeleton of the website. CSS provides styles according to the structure defined in HTML. JavaScript also relies on the structure of the HTML. JavaScript can make the web pages interactive by adjusting HTML and CSS.
 3. How does Python and Flask work together in the server for this assignment?
 Python, namely the webserver.py file is running under the framework of FLask (which is also a module in Python). When the flask is run, it creates a host through which a client can request data. And in the webserver.py file, routes and corresponding functions are defined. When the client goes to a route, such as http://localhost:5000/index, the flask will look for this route in the webserver.py file and call the corresponding function to return the requested data.
 4. List all of the possible GET and POST requests that your server returns a response for and describes what happens for each GET and POST request
 For the routes of '/', '/index', '/about', '/blog/8-experiments-in-motivation', '/blog/a-mindful-shift-of-focus', '/blog/how-to-develop-an-awesome-sense-of-direction', '/blog/training-to-be-a-good-writer' and '/blog/what-productivity-systems-wont-solve', the server returns a response for GET. If someone goes to the route '/contact', the server will return a response for GET, which is the html file. And if the user click the submit button, and if 
all the fields are filled out, the data will be submited to the server using POST request. Then the server will send out the data through mailgun API.