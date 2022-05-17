
const apiUrl = "https://api.themoviedb.org/3"
const key = "api_key=fb53fcbe4ab07a6b86225562961c0730&language=pt-BR"
const url = apiUrl + "/discover/movie?sort_by=popularity.desc&" + key
const itensCarousel = document.querySelector(".carousel")
const imgUrl = 'https://image.tmdb.org/t/p/w500'
const botaoProcurar = document.querySelector("#btnProcurar")


function inicio(){
    receberApi(url)
}

receberApi(url)
function receberApi(diretorio){
    fetch(diretorio)
    .then(data => data.json())
    .then(data => {
        callback(data.results)
        console.log(data)
    }) 
}

function callback(data){
    itensCarousel.innerHTML = ""
    for(let i = 0; i < 11; i++){
        itensCarousel.innerHTML += `<div class="carousel-itens">
        <button><img src="./assents/image/botao-play-film.png" alt="botão play"></button>
        <img src='${imgUrl + data[i].poster_path}' alt='test'>
        </div>`
    }
} 




botaoProcurar.addEventListener('change', mostraResultado)
function mostraResultado(){
    let valor = botaoProcurar.value
    let urlPesquisa = `${apiUrl}/search/movie?${key}&query=${valor}`
    itensCarousel.innerHTML = ""
    receberApi(urlPesquisa)
}





//video

/* 


const video = document.querySelector(".video")


const testVideo = "https://api.themoviedb.org/3/movie/580489?api_key=fb53fcbe4ab07a6b86225562961c0730&language=pt-BR&append_to_response=videos"


const testvideo2 = `https://api.themoviedb.org/3/movie/580489/videos?${key}`


function videos(diretoriov){
    fetch(diretoriov)
    .then(data => data.json())
    .then(data => {
        console.log(data.results[0].key)
        video.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${data.results[0].key}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    }) 
}

videos(testvideo2)
 */