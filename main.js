function setup()
{
canvas = createCanvas(400,400);
canvas.center();

video = createCapture(VIDEO);
video.hide();
}

status1 = "";
text_input = "";
function start()
{
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Object";
    text_input = document.getElementById("Input").value;
}

function modelLoaded()
{
    console.log("Model is Loaded!");
    status1 = true;
}

function draw()
{
    image(video,0,0,400,400);
}

/*function start()
{
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status : Dectecting Object";
}*/
