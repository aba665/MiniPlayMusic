var tocar = document.getElementById("play")
var musica = document.getElementById("o")
var namemusic = document.getElementById("nome")
var album = document.querySelector(".image")
var proximo = document.getElementById("proximo")
var nextsong = document.getElementById("s1")
image = document.getElementById("pl")
var duracaoMusica = document.querySelector(".fim")

duracaoMusica.textContent = segundosparaMinutos(Math.floor(musica.duration))

musica.addEventListener("timeupdate", atualizarBarra)

function playMusic(){

    if (musica.paused) {
        musica.play();
        image.src = "image/pause.png"

    }

    else {
        musica.pause();
    image.src = "image/play.png"

    }

}

function atualizarBarra(){
    let barra = document.querySelector("progress")
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%'
    let tempoDecorrido = document.querySelector(".inicio")
    tempoDecorrido.textContent = segundosparaMinutos(Math.floor(musica.currentTime))
}
function segundosparaMinutos(segundos){
    let campoMinutos = Math.floor(segundos / 60)
    let campoSegundos = segundos % 60
    if(campoSegundos < 10){
        campoSegundos = '0' + campoSegundos
    }
    return campoMinutos + ':' + campoSegundos
}

// proximo.addEventListener("click", ()=>{
//     nextsong.removeAttribute("src")
//     nextsong.setAttribute("src", "../assets/Let Her Go - Passenger.mp3")
//     playMusic()
// })