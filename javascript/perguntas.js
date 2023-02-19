const loading  = document.getElementById("load");
const caseBtns = document.getElementById("case-btns");
const perguntas = document.getElementById("perguntas");
const scor = document.getElementById("scor");
const responseOne = document.getElementById("resposta-um");
const responseTwo = document.getElementById("resposta-dois");
const responseThree = document.getElementById("resposta-tres");
const areaQuiz =  document.getElementById("area-quiz")
let load = 0;
let score = 0;
let position = 0;
let randomOption = 0;
let sizeArrayPersonagem = 0;
let parametroPersonagem = Number.parseInt(((window.location.search).replace('?', '')))
let respostaCertaDaRodada  = "";

let kuramaPeruntasRespostas = [
    {
        "pergunta":"Quantos caudas Tem a kurama?",
        "Resposta-certa":"Nove",
        "resposta-errada":"Duas",
        "resposta-errada2":"Sete"
    },
    {
        "pergunta":"Quantos jinchuuriki a kurama  teve?",
        "Resposta-certa":"Sete",
        "resposta-errada":"Um",
        "resposta-errada2":"Três"
    },
    {
        "pergunta":"Quem criou Kurama?",
        "Resposta-certa":"hagoromo otsutsuki",
        "resposta-errada":"Kakashi",
        "resposta-errada2":"hashirama"
    },
    {
        "pergunta":"Nome do ataque mais forte da kurama?",
        "Resposta-certa":"bijuu dama",
        "resposta-errada":"Rasengan",
        "resposta-errada2":"Chidori"
    },
    {
        "pergunta":"Qual a cor da Kurama?",
        "Resposta-certa": "laranja",
        "resposta-errada":"Vermelho",
        "resposta-errada2":"Amarelo"
    },
    {
        "pergunta":"Qual a cor da bijuu dama?",
        "Resposta-certa": "roxo",
        "resposta-errada":"Azul",
        "resposta-errada2":"Vermelho"
    },
    {
        "pergunta":"Nome do personagem que dominou o poder da kurama?",
        "Resposta-certa": "naruto",
        "resposta-errada":"Tobirama",
        "resposta-errada2":"Hashirama"
    },
    {
        "pergunta":"Quem foi o segundo jinchuuriki do kurama?",
        "Resposta-certa": "mito",
        "resposta-errada":"Kashina",
        "resposta-errada2":"Minato"
    }
    
]
let narutoPeruntasRespostas = [
    {
        "pergunta":"Qual é a cor do cabelo de naruto?",
        "Resposta-certa":"Amarelo",
        "resposta-errada":"vermelho",
        "resposta-errada2":"Verde"
    },
    {
        "pergunta":"Qual é o nome da esposa do  naruto?",
        "Resposta-certa":"Hinata Hyuga",
        "resposta-errada":"ino yamanaka",
        "resposta-errada2":"Sakura Haruno"
    },
    {
        "pergunta":"Qual é o nome do clã do naruto?",
        "Resposta-certa":"Clã Uzumaki",
        "resposta-errada":"Clã Akimichi",
        "resposta-errada2":"Clã Hatake"
    },
    {
        "pergunta":"Qual é o clan da esposa do naruto?",
        "Resposta-certa":"Clã Hyuga",
        "resposta-errada":"Clã Uchiha",
        "resposta-errada2":"Clã Yamanaka"
    },
    {
        "pergunta":"Qual é a técnica mais usada pelo naruto, tanto defensiva quando ofensiva",
        "Resposta-certa": "clones das sombras",
        "resposta-errada":"Shinra Tensei",
        "resposta-errada2":"Chidori"
    },
    {
        "pergunta":"Qual é o melhor ataque do naruto ?",
        "Resposta-certa": "Rasengan",
        "resposta-errada":"Clones das sombras",
        "resposta-errada2":"Chidori"
    },
    {
        "pergunta":"Qual é o ataque mais destrutivo?",
        "Resposta-certa": "Rasenshuriken",
        "resposta-errada":"Clones das sombras",
        "resposta-errada2":"Rasengan"
    },
    {
        "pergunta":"O naruto pode dominar o poder da kurama ?",
        "Resposta-certa": "Sim",
        "resposta-errada":"Não",
        "resposta-errada2":"Todas erradas"
    }
    
]


atualizaGames()


function respostaUm(value){
    if(respostaCertaDaRodada == value){
        score ++;
        atualizaGames()
    }
    else{
        atualizaGames();
    }
}

function respostaDois(value){
    if(respostaCertaDaRodada == value){
        score ++;
        atualizaGames();
    }
    else{
        atualizaGames();
    }
}

function respostaTres(value){
    if(respostaCertaDaRodada == value){
        score ++;
        atualizaGames()
    }
    else{
        atualizaGames();
    }
}

function atualizaGames(){
    load ++;
    if(load >= 9){
        pageFinaL();
    }
    scor.innerText = `${score}/8`;
    loading.setAttribute("value", load);
    randomOption =  Math.floor(Math.random() * 3);
    switch (parametroPersonagem){
        case 0:
            naruto();
            break
        case 1:
            kurama();
            break
    }
    position++;
}


function pageFinaL(){
    areaQuiz.innerHTML = `  <div class="final-page">
                                <h1 id="scor"><span>Score:</span> ${score}/8</h1>
                                <button onclick="pageHome()">Clique aqui para jogar outro Quiz</button>
                            </div>`
}

function pageHome(){
    window.location.href = "./index.html";
}




function naruto(){

    perguntas.innerHTML = `<p>${narutoPeruntasRespostas[position].pergunta}</p>`
    respostaCertaDaRodada = narutoPeruntasRespostas[position]["Resposta-certa"];
    sizeArrayPersonagem = perguntas.innerHTML = `<p>${narutoPeruntasRespostas[position].pergunta}</p>`
    respostaCertaDaRodada = narutoPeruntasRespostas[position]["Resposta-certa"];
    sizeArrayPersonagem = narutoPeruntasRespostas.length

    if(randomOption = 0){
        caseBtns.innerHTML = `<button id="resposta-um" value="${narutoPeruntasRespostas[position]["Resposta-certa"]}"onclick="respostaUm(this.value)">${narutoPeruntasRespostas[position]["Resposta-certa"]}</button>
                            <button id="resposta-doi"  value="${narutoPeruntasRespostas[position]["resposta-errada"]}" onclick="respostaDois(this.value)">${narutoPeruntasRespostas[position]["resposta-errada"]}</button>
                            <button id="resposta-tres" value="${narutoPeruntasRespostas[position]["resposta-errada2"]}" onclick="respostaTres(this.value)">${narutoPeruntasRespostas[position]["resposta-errada2"]}</button>`;
    }
    else if (randomOption = 1){
        caseBtns.innerHTML = `<button id="resposta-um" value="${narutoPeruntasRespostas[position]["resposta-errada2"]}" onclick="respostaUm(this.value)">  ${narutoPeruntasRespostas[position]["resposta-errada2"]}</button>
                            <button id="resposta-doi"  value="${narutoPeruntasRespostas[position]["Resposta-certa"]}" onclick="respostaDois(this.value)">${narutoPeruntasRespostas[position]["Resposta-certa"]}</button>
                            <button id="resposta-tres" value="${narutoPeruntasRespostas[position]["resposta-errada"]}" onclick="respostaTres(this.value)">${narutoPeruntasRespostas[position]["resposta-errada"]}</button>`;
    }
    else{
        caseBtns.innerHTML = `<button id="resposta-um" value="${narutoPeruntasRespostas[position]["resposta-errada2"]}" onclick="respostaUm(this.value)">  ${narutoPeruntasRespostas[position]["resposta-errada2"]}</button>
                            <button id="resposta-doi"  value="${narutoPeruntasRespostas[position]["resposta-errada"]}"onclick="respostaDois(this.value)"> ${narutoPeruntasRespostas[position]["resposta-errada"]}</button>
                            <button id="resposta-tres" value="${narutoPeruntasRespostas[position]["Resposta-certa"]}" onclick="respostaTres(this.value)">${narutoPeruntasRespostas[position]["Resposta-certa"]}</button>`
    }
}


function kurama(){

    perguntas.innerHTML = `<p>${narutoPeruntasRespostas[position].pergunta}</p>`
    respostaCertaDaRodada = kuramaPeruntasRespostas[position]["Resposta-certa"];
    sizeArrayPersonagem = kuramaPeruntasRespostas.length

    if(randomOption = 0){
        caseBtns.innerHTML = `<button id="resposta-um" value="${narutoPeruntasRespostas[position]["Resposta-certa"]}"onclick="respostaUm(this.value)">${narutoPeruntasRespostas[position]["Resposta-certa"]}</button>
                            <button id="resposta-doi"  value="${narutoPeruntasRespostas[position]["resposta-errada"]}" onclick="respostaDois(this.value)">${narutoPeruntasRespostas[position]["resposta-errada"]}</button>
                            <button id="resposta-tres" value="${narutoPeruntasRespostas[position]["resposta-errada2"]}" onclick="respostaTres(this.value)">${narutoPeruntasRespostas[position]["resposta-errada2"]}</button>`;
    }
    else if (randomOption = 1){
        caseBtns.innerHTML = `<button id="resposta-um" value="${narutoPeruntasRespostas[position]["resposta-errada2"]}" onclick="respostaUm(this.value)">  ${narutoPeruntasRespostas[position]["resposta-errada2"]}</button>
                            <button id="resposta-doi"  value="${narutoPeruntasRespostas[position]["Resposta-certa"]}" onclick="respostaDois(this.value)">${narutoPeruntasRespostas[position]["Resposta-certa"]}</button>
                            <button id="resposta-tres" value="${narutoPeruntasRespostas[position]["resposta-errada"]}" onclick="respostaTres(this.value)">${narutoPeruntasRespostas[position]["resposta-errada"]}</button>`;
    }
    else{
        caseBtns.innerHTML = `<button id="resposta-um" value="${narutoPeruntasRespostas[position]["resposta-errada2"]}" onclick="respostaUm(this.value)">  ${narutoPeruntasRespostas[position]["resposta-errada2"]}</button>
                            <button id="resposta-doi"  value="${narutoPeruntasRespostas[position]["resposta-errada"]}"onclick="respostaDois(this.value)"> ${narutoPeruntasRespostas[position]["resposta-errada"]}</button>
                            <button id="resposta-tres" value="${narutoPeruntasRespostas[position]["Resposta-certa"]}" onclick="respostaTres(this.value)">${narutoPeruntasRespostas[position]["Resposta-certa"]}</button>`
    }
}