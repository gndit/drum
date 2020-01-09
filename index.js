var n = document.querySelectorAll(".drum").length;
for(let i=0;i<n;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
  
  var btnelmnt = this.innerHTML;
  
  switch ("btnelmnt") {
    case "w":
    var tom1 = new Audio('sounds/tom-1.mp3');
    tom1.play();
    break;

    case "a":
    var tom2 = new Audio('sounds/tom-2.mp3')
    tom2.play();
    break;
    case "s":
    var tom3 = new Audio('sounds/tom-2.mp3')
    tom3.play();
    break;

    case "d":
    var tom4 = new Audio('sounds/tom-2.mp3')
    tom4.play();
    break;

    case "j":
    var snare = new Audio('sounds/tom-2.mp3')
    snare.play();
    break;

    case "k":
    var kick = new Audio('sounds/tom-2.mp3')
    kick.play();
     break;

    case "l":
    var crash = new Audio('sounds/tom-2.mp3')
    crash.play();
    break;
      
    default:alert(btnelmnt);
      break;
  }
 });
}