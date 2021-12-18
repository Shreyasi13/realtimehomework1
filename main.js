function preload(){
  img=loadImage("photo-1602143407151-7111542de6e8.jpeg");
  img1=loadImage("air-jordan-1-mid-shoes-B4QlG6.jpeg");
  img2=loadImage("download (2).jpeg");
}
function setup() {
    classifier=ml5.imageClassifier('MobileNet',modelLoaded);
  }
  
  function modelLoaded(){
    console.log('Model Loaded!')
  }
  
  function draw(){
    classifier.classify(img,gotResults);
    classifier.classify(img1,gotResults1);
    classifier.classify(img2,gotResults2);
  }
  
  function gotResults(error,results){
    if(error){
      console.error(error);
    }
    else{
      console.log(results);
      document.getElementById("result_object_name").innerHTML=results[0].label;
      
    }
  }
  function gotResults1(error,results){
    if(error){
      console.error(error);
    }
    else{
      console.log(results);
      document.getElementById("result_object_name1").innerHTML=results[1].label;
      
    }
  }
  function gotResults2(error,results){
    if(error){
      console.error(error);
    }
    else{
      console.log(results);
      document.getElementById("result_object_name2").innerHTML=results[2].label;
      
    }
  }