let song; // variable to store the mp3 file
let amplitude; // variable to store amplitude analyzer
let N = 40;
let x = 40;
let y = 40;

function preload() {
  // Load your mp3 file
  song = loadSound('audio.mp3');
}

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  background(0);
  stroke(255);

  // Create a new Amplitude analyzer
  amplitude = new p5.Amplitude();
  // Play the loaded song (optional: loop)
  song.play();
}

function draw() {
  
  // Get the amplitude level from the audio file
  let level = amplitude.getLevel();
  
  // now you have assigned the amplitude value to a new variable
  
  // so you can use this to modulate the properties of your pattern
  let M = level*N;
  let rotationSpeed = map(level, 0, 1, 0.5, 2);
  
  /* draw your pattern */
  
  //check your micLevel 
  console.log(level);
  
  strokeWeight(M);
  stroke((M+2)*10, (M+2)*20, (M+2)*30);
  // rotate(rotationSpeed*M)
  
  if(y<=height-40){
     line(x-5,y-5,x+5,y+5);
    x+=25;
    
  if(x>width-40){
    x=40;
    y+=20;
  if(y>height-40){
    x=40;
    y=40;
    background(0)
  }
    }
  }
}
