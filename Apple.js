img = "";
status = "";
applex = 0;
appley = 0;
label = "";
height = 0;
width = 0;

function setup() {
    canvas = createCanvas(640,300);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd',modelloaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function preload() {
    img = loadImage("Apple.jpg");
}

function draw() {
    image(img,0,0,640,420);
}

function modelloaded() {
    console.log("model loaded!");
    status = true;
    objectDetector.detect(img,gotResults)
}

function gotResults(error,results) {
    if (error) {
        console.log(error)
    }
    console.log(results)
    
}