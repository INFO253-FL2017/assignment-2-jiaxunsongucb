1. What is the function of the following technologies in your assignment:
    1. HTML is the skeleton of the website. It contains all the content that shows in the browser. It also contains the structure of the page. All the links of medias and other pages are also included in HTML.
    2. CSS will add styles onto the page according to the structure defined in HTML.
    3. JavaScript can change the content of the page to make web pages interactive.
    4. Python will run the flask to control the back-end. The webserver.py file is basically the "server" itself. When someone goes to a route, the flask will find a specific function in webserve.py according to the route to return the content. 
    5. Flask is a framework in Python. The webserve.py file is run and called under this framework.
    6. HTTP: The browser uses HTTP request methods to communicate with the server and will get HTTP responses from the server.
    7. GET and POST requests are two HTTP request methods. Specifically, GET requests data from a specified resource, while POST submits data to be processed to a specified resource. In this assignment, GET is used to obtain the content of the web page, and POST is used to submit data in the contact page.
 2. How does HTML, CSS, and JavaScript work together in the browser for this assignment?
 HTML is the structured skeleton of the website. CSS provides styles according to the structure defined in HTML. JavaScript also relies on the structure of the HTML. JavaScript can make the web pages interactive by adjusting HTML and CSS.
 3. How does Python and Flask work together in the server for this assignment?
 Python, namely the webserver.py file is running under the framework of FLask (which is also a module in Python). When the flask is run, it creates a host through which a client can request data. And in the webserver.py file, routes and corresponding functions are defined. When the client goes to a route, such as http://localhost:5000/index, the flask will look for this route in the webserver.py file and call the corresponding function to return the requested data.
 4. List all of the possible GET and POST requests that your server returns a response for and describes what happens for each GET and POST request
- "GET /index HTTP/1.1" 200 - successful GET request that obtains the content from the route "/index".
- "GET /static/css/style.css HTTP/1.1" 200 - successful GET request that obtains the css file from the route "/static/css/style.css".
- "GET /static/js/script.js HTTP/1.1" 200 - successful GET request that obtains the js file from the route "/static/js/script.js".
- "GET /static/images/index/portrait.png HTTP/1.1" 200 - successful GET request that obtains the image file from the route "/static/images/index/portrait.png".
- "GET /about HTTP/1.1" 200 - successful GET request that obtains the content from the route "/about".
- "GET /static/css/about_us.css HTTP/1.1" 200 - successful GET request that obtains the content from the route "/index".
- "GET /static/images/about_us/nick_wilde.jpg HTTP/1.1" 200 - successful GET request that obtains the content from the route "/static/images/about_us/nick_wilde.jpg".
- "GET /static/images/about_us/harry_potter_poster.jpg HTTP/1.1" 200 - successful GET request that obtains the content from the route "/static/images/about_us/harry_potter_poster.jpg".
- "GET /contact HTTP/1.1" 200 - successful GET request that obtains the content from the route "/contact".
- "GET /blog/8-experiments-in-motivation HTTP/1.1" 200 - successful GET request that obtains the content from the route "/blog/8-experiments-in-motivation".
- "GET /blog/a-mindful-shift-of-focus HTTP/1.1" 200 - successful GET request that obtains the content from the route "/blog/a-mindful-shift-of-focus".
- "GET /blog/how-to-develop-an-awesome-sense-of-direction HTTP/1.1" 200 - successful GET request that obtains the content from the route "/blog/how-to-develop-an-awesome-sense-of-direction".
- "GET /blog/training-to-be-a-good-writer HTTP/1.1" 200 - successful GET request that obtains the content from the route "/blog/training-to-be-a-good-writer".
- "GET /blog/what-productivity-systems-wont-solve HTTP/1.1" 200 - successful GET request that obtains the content from the route "/blog/what-productivity-systems-wont-solve".
- "POST /contact HTTP/1.1" 200 - successful POST request that sends data from contact page to the server and get the content from the route "/contact".

