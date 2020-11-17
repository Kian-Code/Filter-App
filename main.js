Nose_X = 0;
Nose_Y = 0;

function preload()
{
Clown_Nose = loadImage('https://i.postimg.cc/nhdvmqcL/Clown-nose.png');
Mustache = loadImage('https://i.postimg.cc/Z5rQhbZm/mustache.png');
}

function setup()
{
    Canvas = createCanvas(300 , 300);
    Canvas.center();
    video = createCapture(VIDEO);
    video.size(300 , 300);
    video.hide();
    PoseNet = ml5.poseNet(video , modelloaded);
    PoseNet.on('pose' , GotPoses);
}
function modelloaded()
{
    console.log("Posenet is initialized");
}
function GotPoses(results)
{
if (results.length > 0) 
{
    console.log(results);
    console.log("Nose X: " + results[0].pose.nose.x );
    console.log("Nose Y: " + results[0].pose.nose.y );

    Nose_X = results[0].pose.nose.x -37;
    Nose_Y = results[0].pose.nose.y -37;
}
}
function draw()
{
    image(video , 0 , 0 , 300 , 300);
    image(Clown_Nose, Nose_X , Nose_Y , 80,80);
    image(Mustache, Nose_X - 9, Nose_Y + 40 , 100,100);

}

function Take_Snapshot()
{
    save('My Clown Nose.png');
}