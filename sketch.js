// Jenn Pham
// CSE 270M, Section A
// Final Project: Implementation of IFS fractals

// IFS fractals are generated using random numbers and rules to
// create self-similar structures.
// Equations:
//   x of (n+1) = a * (x of n) + b * (y of n) + e
//   y of (n+1) = c * (x of n) + d * (y of n) + f
// From Paul Bourke:
// The fundamental iterative process involves replacing rectangles
// with a series of rectangles called the generator.
// The rectangles are replaced by a suitably scaled,
// translated, and rotated version of the generator.

// Declare first x and y
let x = 0,
  y = 0;

function setup() {
  createCanvas(400, 400);
  background(0);
  console.log("IFS fractals are generated using random numbers and rules to create self-similar structures.");
  console.log("Equations: " + "\nx of (n+1) = a * (x of n) + b * (y of n) + e" + "\ny of (n+1) = c * (x of n) + d * (y of n) + f");
  let sentence = "Welcome to IFS generator." +"\nPress a button to create an IFS.";
  fill(255);
  textSize(14);
  textFont('Monospace');
  text(sentence, 0, height / 2);
  textAlign(CENTER, CENTER);
  
  translate(width / 2, height / 2); // Place sketch in center.
  
  // Create some buttons
  button = createButton("Dragon IFS");
  button.position(0, height);
  button.mousePressed(dragon);

  button2 = createButton("Maple IFS");
  button2.position(button.width, height);
  button2.mousePressed(maple);

  button3 = createButton("Leaf IFS");
  button3.position(button.width + button2.width, height);
  button3.mousePressed(leaf);

}

// Draw the IFS fractal by selecting random points
// Then apply a rule to each point, storing the new position
// according to the x and y equations.
// Much like chaos game.

// Function to draw IFS Dragon (Paul Bourke)
// Give back one of the sets of rules after calling random.
// Save new x and y coordinates.
// Has weighted random.
function dragon() {
  background(255);
  for (let i = 0; i < 100000; i++) {
    let x2, y2;
    if (random(1) < 0.8) {
      x2 = 0.824074 * x + 0.281428 * y + -1.88229;
      y2 = -0.212346 * x + 0.864198 * y + -0.110607;
    } else {
      x2 = 0.088272 * x + 0.520988 * y + 0.78536;
      y2 = -0.463889 * x + -0.377778 * y + 8.095795;
    }

    x = x2;
    y = y2;

    stroke(212,175,55);
    strokeWeight(1);
    rect(x * 30, -y * 30 + 150, 1, 1);
  }
}

// Declare parameter table for maple leaf
let mapleRule = [
  [0.14, 0.01, 0.0, 0.51, -0.08, -1.31],
  [0.43, 0.52, -0.45, 0.5, 1.49, -0.75],
  [0.45, -0.49, 0.47, 0.47, -1.62, -0.74],
  [0.49, 0.0, 0.0, 0.51, 0.02, 1.62],
];

// Function for generating IFS Maple (Paul Bourke)
// Give back one of the sets of rules after calling random.
// Save new x and y coordinates.
function maple() {
  background(255);
  for (let i = 0; i < 100000; i++) {
    let x2, y2;
    // Get a random set in the 2D array
    let randPt = random(mapleRule); 

    // xn = ax + by + e;
    // yn = cx + dy + f;
    // Here call a b c d e f in the array.
    // This does not have a probability involved.
    x2 = randPt[0] * x + randPt[1] * y + randPt[4];
    y2 = randPt[2] * x + randPt[3] * y + randPt[5];

    x = x2;
    y = y2;

    // Draw the rectangle
    stroke(195, 106, 55);
    strokeWeight(1);
    rect(x * 60, -y * 60, 1, 1);
  }
}

// Declare parameter table for regular leaf.
let leafRule = [ [0.0000, 0.2439, 0.0000, 0.3053, 0.0000, 0.0000],
                [0.7248, 0.0337, -0.0253, 0.7426, 0.2060, 0.2538],
                [0.1583, -0.1297, 0.3550, 0.3676, 0.1383, 0.1750],
                [0.3386, 0.3694, 0.2227, -0.0756, 0.0679, 0.0826],
               ]
// Function for generating IFS Leaf (Paul Bourke)
// Give back one of the sets of rules after calling random.
// Save new x and y coordinates.
function leaf() {
  background(255);
  for (let i = 0; i < 100000; i++) {
    let x2, y2;
    let randPt = random(leafRule); 
    let p = random(1);

    // xn = ax + by + e;
    // yn = cx + dy + f;
    // Here call a b c d e f in the array. No weighted random.
    x2 = randPt[0] * x + randPt[1] * y + randPt[4];
    y2 = randPt[2] * x + randPt[3] * y + randPt[5];
    
    x = x2;
    y = y2;

    stroke(0, 100, 0);
    strokeWeight(3);
    rect(x * 450 - 200, -y * 450 + 200, 1, 1);
  }
}