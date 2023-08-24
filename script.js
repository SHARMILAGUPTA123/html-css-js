var x= document.getElementById("b");
x.addEventListener("click",makesound);
function makesound()
{

    var audio=new Audio('b.mp3');
    audio.play();
}
