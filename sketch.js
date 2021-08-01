
function setup() {
  createCanvas(400,400);
  
}

function draw() 
{
textSize(15)
   text('click the arrow keys to change the background colors',10,200)
  if (keyIsDown(RIGHT_ARROW)) 
  { background('blue') }

  if (keyIsDown(LEFT_ARROW)) 
  { background('yellow') }

  if (keyIsDown(UP_ARROW)) 
  { background('green') }

  if (keyIsDown(DOWN_ARROW)) 
  { background('red') }

  
  

}




