  // Flag which turns on/off the user Session
  var flag = 1
  
  // Calculate the total area of the triangle
  function triangle_area(x1,y1,x2,y2,x3,y3){
    var Area = (x1*(y2-y3)+x2*(y3-y1)+x3*(y1-y2))/2
    Area = Math.abs(Area)
    return Area;
  }

  // Calculate the total area the of reactangle
  function calculate_area(area,x,y){
    var a1,a2,a3,a4;
    a1=triangle_area(504,237,1003,237,x,y)
    a2=triangle_area(1003,237,1003,576,x,y)
    a3=triangle_area(1003,576,504,576,x,y)
    a4=triangle_area(504,576,504,237,x,y)
    total_area = a1+a2+a3+a4
    console.log(total_area)
    return total_area
  }

  // Method which draw dots once the user clicks on the clickable area 
  function showCoords(event) {
    if(flag == 1){
    var color = '#000000',
    size = '5px';
    var x = event.clientX;
    var y = event.clientY;

   var names = []
   names.push(x);
   names.push(y);
   var coords = "X coords: " + x + ", Y coords: " + y;

   // Draw the Black dot once the used clicks on the grid
   $("map").append( $('<div />').css({
          backgroundColor: color,
          height: size,
          left: x + 'px',
          position: 'absolute',
          top: y + 'px',
          width: size
        })
    );

   // Total area of the grid
   var area = 169161;
   var total = calculate_area(area,x+1,y-1)

   // Draw the Red dot the grid if the clicked coordinates lie inside the grid
   if(total == area){
   color = '#FF0000',
   $("map").append( $('<div />').css({
          backgroundColor: color,
          height: size,
          left: x+1 + 'px',
          position: 'absolute',
          top: y-1 + 'px',
          width: size
        })
    );
  }

  // Ajax call made to the server running on port 5000 for sending the x and y coordinates
  $.ajax(
   {
    type:'POST',
    contentType:'application/json;charset-utf-08',
    dataType:'json',
    url:'http://127.0.0.1:5000/coord',
    traditional: "true",
    data: JSON.stringify({names}),
    success:function (data) {
            var reply=data.reply;
            if (reply=="success")
              {
               return;
              }
            else
              {
               alert("Error ocured while passing coordinates")
              }

            }
    }
   ); 

  }
}

 // This method ends the session for user to click
 function end_session(){
    flag=0
    alert("Thank you! Your Session Ended.The clicked coordinates are saved in the coordinates.csv file")
 }
