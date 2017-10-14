"""
webserver.py

File that is the central location of code for your webserver.
"""
import requests
import os
from flask import Flask, render_template, request
import json

# Create application, and point static path (where static resources like images, css, and js files are stored) to the
# "static folder"
app = Flask(__name__,static_url_path="/static")

@app.route('/index')
def index_page():
    """
    If someone goes to http://localhost:5000/index, run this function. The string that this
    returns will be sent to the browser
    """
    return render_template("index.html") # Render the template located in "templates/index.html"

@app.route('/')
def index():
    """
    If someone goes to the root of your website (i.e. http://localhost:5000/), run this function. The string that this
    returns will be sent to the browser
    """
    return render_template("index.html") # Render the template located in "templates/index.html"

@app.route('/about')
def about_us():
    """
    If someone goes to http://localhost:5000/about, run this function. The string that this
    returns will be sent to the browser
    """
    return render_template("about_us.html") # Render the template located in "templates/about_us.html"

@app.route('/contact', methods=['GET'])
def contact_us():
    """
    If someone goes to http://localhost:5000/contact, run this function. The string that this
    returns will be sent to the browser
    """
    return render_template("contact_us.html",init=True) # Render the template located in "templates/contact_us.html"

@app.route('/contact', methods=['POST'])
def contact_us_email():
    """
    If someone goes to http://localhost:5000/contact and click the submit button, run this function. The string that this
    returns will be sent to the browser
    """
    name = request.form.get("name")
    subject = request.form.get("subject")
    message = request.form.get("message")
    email = request.form.get("email")
    notifications=[]
    success=True
    if email:
        message='Email: '+email+'\n'+message
    data = {
        'from': name+'<'+os.environ["INFO253_MAILGUN_FROM_EMAIL"]+'>',
        'to': os.environ["INFO253_MAILGUN_TO_EMAIL"],
        'subject': subject,
        'text': message}
    auth = (os.environ["INFO253_MAILGUN_USER"], os.environ["INFO253_MAILGUN_PASSWORD"])
    r = requests.post(
        'https://api.mailgun.net/v3/{}/messages'.format(os.environ["INFO253_MAILGUN_DOMAIN"]),
        auth=auth,
        data=data)
    if r.status_code == requests.codes.ok:
        notifications.append('Hi {}, your message has been sent.'.format(name))
    else:
        notifications.append("You email was not sent. Please try again later.")
        success=False
    return render_template("contact_us.html",success=success,init=False,notifications=notifications,name='',subject='',message='',email='') # Render the template located in "templates/contact_us.html"

@app.route('/blog/8-experiments-in-motivation')
def blog1():
    """
    If someone goes to http://localhost:5000/8-experiments-in-motivation, run this function. The string that this
    returns will be sent to the browser
    """
    return render_template("/blog/blog1.html") # Render the template located in "templates/blog1.html"

@app.route('/blog/a-mindful-shift-of-focus')
def blog2():
    """
    If someone goes to http://localhost:5000/a-mindful-shift-of-focus, run this function. The string that this
    returns will be sent to the browser
    """
    return render_template("/blog/blog2.html") # Render the template located in "templates/blog2.html"

@app.route('/blog/how-to-develop-an-awesome-sense-of-direction')
def blog3():
    """
    If someone goes to http://localhost:5000/how-to-develop-an-awesome-sense-of-direction, run this function. The string that this
    returns will be sent to the browser
    """
    return render_template("/blog/blog3.html") # Render the template located in "templates/blog3.html"

@app.route('/blog/training-to-be-a-good-writer')
def blog4():
    """
    If someone goes to http://localhost:5000/training-to-be-a-good-writer, run this function. The string that this
    returns will be sent to the browser
    """
    return render_template("/blog/blog4.html") # Render the template located in "templates/blog4.html"

@app.route('/blog/what-productivity-systems-wont-solve')
def blog5():
    """
    If someone goes to http://localhost:5000/what-productivity-systems-wont-solve, run this function. The string that this
    returns will be sent to the browser
    """
    return render_template("/blog/blog5.html") # Render the template located in "templates/blog5.html"
