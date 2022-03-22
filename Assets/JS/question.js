let progress = document.querySelector(".progress-bar");
let next = document.getElementById("next");
let previous = document.getElementById("previous");

let progBar = 0 ;
next.addEventListener("click" , function(){
   if(progBar < 100){
    progBar += 4.5;
    progress.style.width = progBar + "%";
   }
});
previous.addEventListener("click" , function(e){
    if( progBar > 0){
     progBar -= 4.5;
     progress.style.width = progBar + "%";

    }
 })