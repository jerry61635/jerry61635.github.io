var messageArray = ["asr_dev=[kaldi, espnet]",
                    "game_dev=[Unity, Unreal]",
                    "web_dev=[node.js, html]",
                    "lang=[cht, eng, C++, C#, python, bash]"];
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