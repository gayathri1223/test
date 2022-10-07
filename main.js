var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function run(event){
    console.log(event);

    var content = event.results[0][0].transcript;
    console.log(event);
    

    document.getElementById("textbox").innerHTML = content;
    console.log(content);
    speak();

}
function speak()
{
var synth = windoe.speechsynthesis;

speak_data = "taking your selfie in 5 seconds"

var utterThis = new SpeechSynthesisUtterance(speak_data);

synth.speak(utterThis);
Webcam.attach(camera);
 setTimeout (function()
{
    take_snapshot();
},5000);
}

function save(){
    link=document.getElementById("link");
    image = document.getElementById("selfie_image").src ;
    link.href=image;
    link.click();
    
}
Webcam.set({
    width :360,
    height :250,
    image_format : 'png',
    png_quality :90
});
camera = document.getElementById("camera");
function take_snapshot()
{
    console.log(img_id);

    webcam.snap(function(data_uri){
        if(img_id=="selfie1"){
        document.getElementById("result1").innerHTML ='img id="selfie_image" src="'+data_uri+'">';
    }
    if(img_id=="selfie2"){
        document.getElementById("result2").innerHTML ='img id="selfie_image" src="'+data_uri+'">';
    }
    if(img_id=="selfie3"){
        document.getElementById("result3").innerHTML ='img id="selfie_image" src="'+data_uri+'">';
    }
    }};
if(content =="take my selfie")
{
    console.log("taking selfie ---");
    speak();
}
