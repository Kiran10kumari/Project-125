lipsX=0;
lipsY=0;

function preload(){
    clown_nose=loadImage('https://i.postimg.cc/3Rp5vMJ9/455-4557163-icon-clown-nose-circle-hd-png-download.png');
}

function setup() {
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}

function gotPoses(results) {
    if(results.length > 0){
        console.log(results);
        lipsX=results[0].pose.lips.x;
        lipsY=results[0].pose.lips.y;
        console.log("lips x=" + lipsX);
        console.log("lips y=" + lipsY);
        console.log("lips x="+results[0].pose.lips.x);
        console.log("lips y="+results[0].pose.lips.y);
        console.log(results);
    }
}

function draw(){
    image(video,0,0,300,300)
}

function take_snapshot(){
    save('myFilterImage.png');
}