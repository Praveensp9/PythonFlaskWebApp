# PythonFlaskWebApp

I have used Python, Flask, Javascript,HTML and CSS to do the following task. Flask is a Python package to render html webpage.

It includes the following files.

icaros.py templates/index.html static/icaros.js static/javascripts/jquery-3.2.1.min.js static/icasos.css

To run the Program, Please follow the following steps:

Add all the files in the same structure as mentioned above.

Install Python Flask in the system if not installed already.

Start the program using the following command from the directory where you cloned the above files sequentially.

$ python icaros.py

Now your application is running. you can see the following log on system console.

Serving Flask app "icaros" (lazy loading)
Environment: production WARNING: Do not use the development server in a production environment. Use a production WSGI server instead.
Debug mode: on
Go to localhost:5000 on your chrome browser to see the application rendered (index.html).

Once you start clicking on the grid, your coordinates will be stored in a file called "coordinates.csv" in the same directory.

Press END button to stop your Session.

For (x+1,y-1) coordinates which does not exists inside the grid, please click on the topmost edge row. You will get all the black dots. I have set the logging level of Python Server to ERROR. You will see only error logs, just to avoid so many logs printed on the console. Also, x and y coordinates also printed on the system console.

NOTE : Add "Allow-Control-Allow-Origin" chrome extension to your browser. This will send post request from application to the server. Not adding this extension will result in failure of transefering the data (x,y coordinates here) to the python server.

Added alert message to the user once he ends the session
Used image as the grid which is more easy and user friendly for the user.
Stores all the coordinates in a csv file in Python Server Directory
