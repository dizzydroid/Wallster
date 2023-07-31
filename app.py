# Import Flask and other modules
from flask import Flask, render_template, request, redirect, url_for
import requests

# Create an instance of the Flask class
app = Flask(__name__)

# Define the route for the home page
@app.route('/')
def index():
    # Call the Unsplash API to get a random image URL
    response = requests.get('https://source.unsplash.com/featured/1920x1080')
    image_url = response.url

    # Render the index.html template and pass the image URL as a variable
    return render_template('index.html', image_url=image_url)

# Run the app in debug mode
if __name__ == '__main__':
    app.run(debug=True)
