score = 0;
crossOver = true;

audio = new Audio("bgm.mp3");
audiogo = new Audio("gameover.mp3")

setTimeout(() => {
    audio.play();
}, 2000);


document.onkeydown = function (e) {

    if (e.keyCode == 38) {
        puppy = document.querySelector(".puppy");
        puppy.classList.add('animatedPuppy');
        setTimeout(() => {
            puppy.classList.remove('animatedPuppy');
        }, 800);
    }

    if (e.keyCode == 39) {
        puppy = document.querySelector(".puppy");
        puppydx = parseInt(window.getComputedStyle(puppy, null).getPropertyValue('left'));
        puppy.style.left = puppydx + 100 + "px";

    }

    if (e.keyCode == 37) {
        puppy = document.querySelector(".puppy");
        puppydx = parseInt(window.getComputedStyle(puppy, null).getPropertyValue('left'));
        puppy.style.left = puppydx - 100 + "px";

    }


}

setInterval(() => {

    puppy = document.querySelector('.puppy');
    cactus = document.querySelector('.cactus');
    gameOver = document.querySelector(".gameOver");

    dx = parseInt(window.getComputedStyle(puppy, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(puppy, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(cactus, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(cactus, null).getPropertyValue('top'));

    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);

    if (offsetX < 100 && offsetY < 40) {
        gameOver.style.visibility = "visible";
        cactus.classList.remove('animatedCactus');
        audiogo.play();
        setTimeout(() => {
            audio.pause()
        }, 1000);
        setTimeout(() => {
            audiogo.pause();

        }, 2000);

    } else if (crossOver && offsetX < 150) {
        score = score + 1;
        updatedScore(score);
        crossOver = false;
        setTimeout(() => {
            crossOver = true;
        }, 1000);

    }

}, 100);


function updatedScore(score) {
    document.getElementById("scoreCount").innerHTML = `<p>Your Score : ${score} </p>`

}

