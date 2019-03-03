from flask import Flask, render_template, redirect,jsonify,request,session,send_from_directory
import os
import csv
import logging
log = logging.getLogger('werkzeug')
log.setLevel(logging.ERROR)

app = Flask(__name__)

# Calculates the area of the triangle
def triangle_area(x1,y1,x2,y2,x3,y3):
	Area = (x1*(y2-y3)+x2*(y3-y1)+x3*(y1-y2))/2
	Area = abs(Area)
	return Area

# Method which fetch the coordinates and writes into CSV File
@app.route('/coord',methods=['GET','POST'])
def fetching_coordinates():
   if (request.method == 'POST'):
	Coord = request.get_json()
	for x in Coord:
		X =  Coord[x][0]
		Y =  Coord[x][1]
		print("Your clicked Coordinates :")
		print("X coordinate : " + str(X))
		print("Y coordinate : " + str(Y))

		a1=triangle_area(504,237,1003,237,X+1,Y-1)
		a2=triangle_area(1003,237,1003,576,X+1,Y-1)
		a3=triangle_area(1003,576,504,576,X+1,Y-1)
		a4=triangle_area(504,576,504,237,X+1,Y-1)
		total = a1+a2+a3+a4
		if (a1+a2+a3+a4 == 169160) :
			with open('coordinates.csv', 'ab') as csvfile:
				writer = csv.writer(csvfile,delimiter=',')
				writer.writerow([X,Y])
		else:
			xx = str(X+1)
			yy = str(Y+1)
			print( "("+ xx + "," + yy +")"+ "is not accessible as it is outside the grid\n")
		print("\n")

   return jsonify({'reply':'success'})

@app.route('/')
def index():
   return render_template('index.html')

if __name__ == '__main__':
  app.run(debug=True)
