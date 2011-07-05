var rightDown = false;
var leftDown = false;
var downDown = false;
var upDown = false;

//set rightDown or leftDown if the right or left keys are down
function onKeyDown(evt) {
  if (evt.keyCode == 39) {
      rightDown = true;
  }
  else if (evt.keyCode == 37) {
      leftDown = true;
  } else if (evt.keyCode == 40) {
      downDown = true;
  } else if (evt.keyCode == 38) {
      upDown = true;
  } 
}

//and unset them when the right or left key is released
function onKeyUp(evt) {
  if (evt.keyCode == 39) {
      rightDown = false;
  } else if (evt.keyCode == 37) {
      leftDown = false;
  } else if (evt.keyCode == 40) {
      downDown = false;
  } else if (evt.keyCode == 38) {
      upDown = false;
  }
}

