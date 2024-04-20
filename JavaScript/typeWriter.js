var messageArray = ["My name is Yi-Jun Zheng. I'm a new born software engineer.",
                    "Being a digital artist's mentor, guiding Generative AI to paint worlds of imagination with strokes of data.",
                    "Graduated From: National Pintung University, Majoring in Computer Science ",
                    "Now I am an AI Engineer. Expert at Large Language Model & Speech AI"];
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