function preload() {

} 

function setup() {
canvas = createCanvas(640,480);
canvas.position(110,250);
video = createCapture(VIDEO);
video.hide();
tint_color = "";
}

function draw() {
    image(video,0,0,640,480);
    tint(tint_color);
    circle(70, 51,  70);
    circle(500, 51, 70);
    circle(500, 400, 70);
    circle(70, 400, 70);
}

function take_snapshot() {
    save("student_name.png");
}