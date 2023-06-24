var messageArray = ["I'm a new grand software engineer.",
                    "Computer Science major."];
var textPosition = 0;
var speed = 30;
var index = 0;

typewriter = () => {
    document.querySelector("#para"+(index+1)).
    innerHTML = messageArray[index].substring(0,textPosition);
        
    if(textPosition++ != messageArray[index].length)
        setTimeout(typewriter, speed);
    else {
        textPosition = 0;
        index++;
        setTimeout(typewriter, speed);
    }
}

window.addEventListener("load", typewriter)