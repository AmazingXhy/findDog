let wid = document.body.clientWidth;
let heig = document.body.clientHeight;
let Sound;
let dog;

function preload() {
	Sound = loadSound("./static/wang.mp3");
}

function setup() {
  createCanvas(wid, heig);

  dog = [random(0, width), random(0, height)];

  Sound.setVolume(0.4);
  Sound.play();
}

function draw() {
  if(Sound.isPlaying()) {
    let deltaX = mouseX - dog[0];
    let deltaY = mouseY - dog[1];
    let distance = pow(deltaX * deltaX + deltaY * deltaY, 0.5);
    let value = map(distance, 0, pow(width*width + height*height, 0.5), 1.5, 0.1);
    Sound.setVolume(value);
    console.log("dis:", distance);
    if(abs(mouseX - dog[0]) <= 5 && abs(mouseY - dog[1] <= 5)) {
      Sound.pause();
      alert("You find the DOG!");
    }
  } else {
    Sound.play()
  }
}