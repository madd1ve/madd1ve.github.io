function setup() {
  createCanvas(500,400);
}

function draw() {
  background(120);
  line(100, 0, 100, 400);
  line(200, 0, 200, 400);
  line(300, 0, 300, 400);
 
  if (mouseX > 0 && mouseX <= 100) {
    fill(0, 0, 255);
    ellipse(mouseX, mouseY, 40, 40);
    textSize(25)
    text('i rode \n a bike',10,100)
 
  }
 
  else if (mouseX > 100 && mouseX <= 200) {
    fill(255, 0, 0);
    ellipse(mouseX, mouseY, 40, 40);
    textSize(30)
    text('i love \n chipotle ',110,100);
  }
 
  else if (mouseX > 200 && mouseX <= 300) {
    fill(0, 255, 0);
    ellipse(mouseX, mouseY, 40, 40);
     textSize(35)
    text('i love  \n walter ',210,100);
  }
 
  else if (mouseX > 300 && mouseX <= 400) {
    fill('pink');
    ellipse(mouseX, mouseY, 40, 40);
     textSize(40)
    text('i love \n skittles ',320,100);
  }

}