window.addEventListener("keydown",function(e){  //Event listenener to fire up key Pressed.
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); //Associating audio with key
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);    //Associating keycode with audio
        key.classList.add("playing");   //Adding the playing class to include css styles
        if (!key || !audio){            //If no key is associated return nothing
            return;
        };
        audio.play();                   //Calls the funcion to play the audio
        audio.currentTime = 0;        //Resets audio so that u can repeat
        setTimeout(function(){key.classList.remove("playing");; }, 200); //Timeout method to remove transition

});