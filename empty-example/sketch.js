
var images = [];
var i = 0;
var img;

  // Declare variable 'img'.

function setup() {
  createCanvas(1275, 585);
  images[0] = loadImage("background.jpg");
  img = loadImage("template.png");
  images[1] = loadImage("under 20.jpg");
  images[2] = loadImage("under 40.jpg"); 
  images[3] = loadImage("under 50.jpg");
  images[4] = loadImage("under 60.jpg");
  images[5] = loadImage("under 70.jpg");
  images[6] = loadImage("under 80.jpg");
  images[7] = loadImage("over 80.jpg"); // Load the image

  r = random(255);
  g = random(255);
  b = random(255);
}

function draw() {
  // Displays the image at its actual size at point (0,0)

 // if (i < 3) {
 // 	image(images[3], 0, 0);
 // 	
 // }


  image(images[i], 0, 0);
  image(img, 0, 0);
  strokeWeight(2);
  stroke(123, 150, 0);
  fill(123, 7, 0, 127);
  ellipse(1000, 50, 50, 50);
  ellipse(1000, 125, 50, 50);
  ellipse(1000, 200, 50, 50);
  ellipse(1000, 275, 50, 50);
  ellipse(1000, 350, 50, 50);
  ellipse(1000, 425, 50, 50);
  ellipse(1000, 500, 50, 50);


}

function mousePressed() {
  // Check if mouse is inside the circle
  var d = dist(mouseX, mouseY, 1000, 50);
  if (d < 50) {
    i = 1;

  }

  var a = dist(mouseX, mouseY, 1000, 125);
  if (a < 50) {

    i = 2;

  }

  var c = dist(mouseX, mouseY, 1000, 200);
  if (c < 50) {
    i = 3;

  }

  var e = dist(mouseX, mouseY, 1000, 275);
  if (e < 50) {

    i = 4;

  }

  var f = dist(mouseX, mouseY, 1000, 350);
  if (f < 50) {

    i = 5;

  }

  var g = dist(mouseX, mouseY, 1000, 425);
  if (g < 50) {
    i = 6;

  } 

  var h = dist(mouseX, mouseY, 1000, 500);
  if (h < 50) {
    i = 7;

  }   

}


