var tocar = document.getElementById("play")
var musica = document.getElementById("o")
var proximo = document.getElementById("proximo")
var nextsong = document.getElementById("s1")
image = document.getElementById("pl")

var musics = []
function playMusic(){
    // musica.play()
    if (musica.paused) {
        musica.play();
        image.src = "image/pause.png"

    }

    else {
        musica.pause();
    image.src = "image/play.png"

    }

}

proximo.addEventListener("click", ()=>{
    nextsong.removeAttribute("src")
    nextsong.setAttribute("src", "../assets/Let Her Go - Passenger.mp3")
    playMusic()
})