status_cocossdmodel = "";
img = "";
status = "";

function preload(){
    img = loadImage('bed.jpg');

}
function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector("coccossd",modelLoaded);
    document.getElementById("status").innerHTML = "Status : detecting objects";
}
function modelLoaded(){
    console.log("Model Loaded cocossd is loaded")
    status = true;
    objectDetector.detect(img,gotResult);
}
function gotResult(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);
}
function draw(){
    image(img,0,0,640,420);
}