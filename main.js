nose_X=0;
nose_Y=0;
left_wrist_x=0;
right_wrist_x=0;
difference=0;
function setup()
{
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,550);
    canvas.position(580,150);

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("Posenet is Initialized");
}

function gotPoses(results)
{
if(results.length > 0)
{
    console.log(results);
    nose_X=results[0].pose.nose.x;
    nose_Y=results[0].pose.nose.y;
    console.log("Nose_X = "+ nose_X + ", Nose_Y = " + nose_Y);
    left_wrist_x=results[0].pose.leftWrist.x;
    right_wrist_x=results[0].pose.rightWrist.x;
    difference=floor(left_wrist_x - right_wrist_x);
    console.log("Left_Wrist_X = " + left_wrist_x + ", Right_Wrist_X = " + right_wrist_x + ", Difference = " +difference);
    
}
}

function draw()
{
    background("#dcf7cd");
    document.getElementById("square_side").innerHTML = "The width and height of the square will be equal to " + difference + "px";
    fill("#ed154f");
    stroke("#ed154f");
    square(nose_X, nose_Y, difference);
}