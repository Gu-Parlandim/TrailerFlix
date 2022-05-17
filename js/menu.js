const barraPesquisar = document.querySelector(".nav-config input")
const botao = document.querySelector(".procurar .procurar-img button")
const botaoMobile = document.querySelector("#botao-mobile")
const navegacao = document.querySelector(".nav-conteudos")
const test = document.querySelector(".conteudos")
const barraMenu = document.querySelector(".container")


// Metodos
const botaoPesquisar = ()=> barraPesquisar.style.visibility == "hidden" ? botaoOn() : botaoOff()

function botaoOn(){
    barraPesquisar.style.visibility = "visible"
    barraPesquisar.style.transition = "0.7s"
    barraPesquisar.style.width = "200px"
    barraPesquisar.style.margin =  "5px"
    barraPesquisar.style.padding = "5px 5px 5px 40px"
    botao.style.position = "absolute"
    botao.style.bottom = "7px"
    botao.style.left = "8px"
}

function botaoOff(){
    barraPesquisar.style.visibility = "hidden"
    barraPesquisar.style.width = 0
    barraPesquisar.style.margin = 0
    barraPesquisar.style.padding = "0"
    botao.style.position = "relative"
    botao.style.bottom = "0px"
    botao.style.left = "0px"
}

const mostraBotaoMobile = () => navegacao.classList.add("ativa")
const escoderBotaoMobile = () => navegacao.classList.toggle("ativa")

const funDeTest = () => {
    if(navegacao.classList.contains("ativa")){
        setTimeout(myCallback, 500);
    }
}

function mudarFundo() {
    if(this.pageYOffset != 0){
        barraMenu.style.transition = "0.5s"
        barraMenu.style.background = "#141414"
    }
    else {
        barraMenu.style.background = "linear-gradient(to bottom,rgba(0,0,0,.7) 10%,rgba(0,0,0,0))"
    
    }
}


const myCallback= () => navegacao.classList.remove("ativa")

window.addEventListener("scroll", mudarFundo)
test.addEventListener("mouseleave", funDeTest)
botaoMobile.addEventListener('mouseover',mostraBotaoMobile)
navegacao.addEventListener("mouseleave", escoderBotaoMobile)


botaoPesquisar()



