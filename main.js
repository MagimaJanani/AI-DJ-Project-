song="";
function preload(){
    song=loadSound("Auli'i Cravalho - How Far I'll Go.mp3");
}
function setup() {
    canvas=createCanvas(600,500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();
}
 function draw() {
     image(video,0,0,600,500);

     fill("#FF0000");
     stroke("#FF0000");
    if(scoreLeftWrist > 0.2){
      
     circle(leftWristX,leftWristY,20);
     InNumberleftWristY=Number(leftWristY);
     remove_decimal=floor(InNumberleftWristY);
     leftWristY_divide_1000=remove_decimal/1000;
     volume=leftWristY_divide_1000*2;
     document.getElementById("volume").innerHTML="Volume ="+volume;
     song.setVolume(volume); 
    }

 }
 function play(){
 song.play();
 }