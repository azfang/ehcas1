$(document).ready(function(){
    $('body').hide().delay(300).fadeIn(500);
    });

var ppbutton = document.getElementById("playVideo");
ppbutton.addEventListener("click", playVideo);
function playVideo() { 
    $('.vid').trigger('play');
} 

var ppbutton = document.getElementById("pauseVideo");
ppbutton.addEventListener("click", pauseVideo);
function pauseVideo() { 
    $('.vid').trigger('pause');
} 
