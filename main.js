music = "";
music2 = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;



function preload() {
    music = loadSound("music.mp3");
    music2 = loadSound("music2.mp3");
}

function setup(){
    canvas = createCanvas(500,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    posenet = ml5.poseNet(video, ModelLoaded); 
    posenet.on('pose', gotResults);
}

function draw(){
    image(video,0,0,500,500)
}

function ModelLoaded(){
    console.log("Posenet is Initialized!");
}


function gotResults(results){
    if(results.length > 0){
        console.log(results);
        
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
    }
}




















