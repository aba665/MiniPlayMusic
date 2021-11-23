var tocar = document.getElementById("play")
var musica = document.getElementById("o")
var namemusic = document.getElementById("nome")
var album = document.querySelector("#img")
var nameArtista = document.getElementById("Artista")
var fundoTela = document.getElementById("corpo")
var voltar = document.getElementById("anterior")
var proximo = document.getElementById("proximo")
var nextsong = document.getElementById("s1")
var indexMusica = 0
image = document.getElementById("pl")
var duracaoMusica = document.querySelector(".fim")

var songsCollection = [
    {nome: "Yellow", artista: "Coldplay", img: "../image/Coldyellow.jpg", src: "../assets/Coldplay  -  Yellow.mp3", fundo: "../image/cold.jpg"},
    {nome: "Stressed Out", artista: "Twenty One Pilots", img: "../image/stressedout.jpg", src: "../assets/Stressed Out.mp3", fundo: "../image/fundoStressed.jpg"},
    {nome: "In The End", artista: "Linkin Park", img: "../image/intheend.jpg", src: "../assets/In The End.mp3", fundo: "../image/fundolinkinpark.jpg"},
    {nome: "The Scientist", artista: "Coldplay", img: "../image/scientist.jpg", src: "../assets/The Scientist.mp3", fundo: "../image/cold.jpg"},
    {nome: "Let Her Go", artista: "Passenger", img: "../image/lether.jpg", src: "../assets/Let Her Go.mp3", fundo: "../image/lethergo.jpg"},
    {nome: "Send Me An Angel", artista: "Scorpions", img: "../image/scorpions.jpg", src: "../assets/Send Me An Angel.mp3", fundo: "../image/fundoscorpions.jpg"},
    {nome: "Bring Me To Life", artista: "Evanescence", img: "../image/bring.jpg", src: "../assets/Bring me to life.mp3", fundo: "../image/fundobring.jpg"},
    {nome: "Come As You Are", artista: "Nirvana", img: "../image/nirvana.jpg", src: "../assets/Come As You Are.mp3", fundo: "../image/fundonirvana.jpg"}
]
loaderMusica(indexMusica)

musica.addEventListener("timeupdate", atualizarBarra)

anterior.addEventListener("click", () => {
    indexMusica--
    if(indexMusica < 0){
        indexMusica = 7
    }
    loaderMusica(indexMusica)
    playMusic()
})

proximo.addEventListener("click", () => {
    indexMusica++
    if(indexMusica > 7){
        indexMusica = 0
    }
    loaderMusica(indexMusica)
    playMusic()
})

function loaderMusica(index){
    musica.setAttribute("src", songsCollection[index].src)
    musica.addEventListener("loadeddata", () =>{
        namemusic.textContent = songsCollection[index].nome
        nameArtista.textContent = songsCollection[index].artista
        album.src = songsCollection[index].img
        fundoTela.setAttribute("background", songsCollection[index].fundo)
        duracaoMusica.textContent = segundosparaMinutos(Math.floor(musica.duration))
      
    })

}

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
    passarMusica(indexMusica)
}
function segundosparaMinutos(segundos){
    let campoMinutos = Math.floor(segundos / 60)
    let campoSegundos = segundos % 60
    if(campoSegundos < 10){
        campoSegundos = '0' + campoSegundos
    }
    return campoMinutos + ':' + campoSegundos
}