

function playSound() {
  
  var sound = document.getElementById("button-sound");
  sound.play();
 
  setTimeout(function(){ window.location.href='./register.html'; }, 500);
 
}

function hamMenu() {
  document.getElementById("hm").style.transform="translateY(00%)";
}

function clsMenu(){
  document.getElementById("hm").style.transform="translateY(-100%)";
}
