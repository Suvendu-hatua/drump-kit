
var len = document.querySelectorAll("button").length;
for (var i = 0; i < len; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", clickHandle);

}
function clickHandle() {
    var drum = this.innerHTML;
    makeSound(drum);
}

function makeSound(drum)
{
    if (drum == "w") {
        var audio = new Audio('sounds/tom-1.mp3');
        audio.play();
    }
    else if (drum == "a") {
        var audio = new Audio('sounds/tom-2.mp3');
        audio.play();
    }
    else if (drum == "s") {
        var audio = new Audio('sounds/tom-3.mp3');
        audio.play();
    }
    else if (drum == "d") {
        var audio = new Audio('sounds/tom-4.mp3');
        audio.play();
    }
    else if(drum == "j")
    {
        // console.log(drum);
        var audio= new Audio('sounds/tom-3.mp3');
        audio.play();
    }
    else if (drum == "k") {
        var audio= new Audio('sounds/crash.mp3');
        audio.play();
    }
    else if (drum == "l") {
        var audio= new Audio('sounds/kick-bass.mp3');
        audio.play();
    }
    else
    console.log(drum);

}

document.addEventListener("keydown",abc);
function abc(e)
{
   makeSound(e.key);
}
