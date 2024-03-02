var messageArray = ["My name is Yi-Jun Zheng. I'm a new born software engineer.",
                    "Graduated From: National Pintung University, Computer Science Major",
                    "Now I am an AI Engineer, expert at Large Language Model and Speech Recognition",
                    "My dream is being A Game Developer!"];
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