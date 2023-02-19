
let cicloPersonagem = 0;

let arrayPersonagens = ["https://sm.ign.com/t/ign_br/screenshot/default/naruto-shippuden_zy11.960.jpg", "https://i0.wp.com/semprefuigeek.com.br/wp-content/uploads/2022/04/kurama-morreu-em-boruto.jpg?fit=1200%2C675&ssl=1",];

let arrayNomesDePersonagens = ["Naruto", "Kurama"];

function start(){
    window.location.href = "./perguntas.html?" + cicloPersonagem;
}

function left(){
    if(cicloPersonagem <= 0 ){
        cicloPersonagem = 0
        alert("Fim da lista");
    }
    else{
        cicloPersonagem = cicloPersonagem - 1;
        atualizaPersonagem();
    }
}

function right(){
    if(cicloPersonagem >= 1){
        cicloPersonagem = 1;
        alert("Fim da lista");
    }
    else{
        cicloPersonagem = cicloPersonagem + 1;
        atualizaPersonagem();
    }
}

function atualizaPersonagem(){
    const VIEWS = document.getElementById('views')
    const NAME_PERSON = document.getElementById('name-person')
    VIEWS.innerHTML = `<img src="${arrayPersonagens[cicloPersonagem]}" alt="imagem de anime">`;
    NAME_PERSON.innerHTML = `<h1>Quiz ${arrayNomesDePersonagens[cicloPersonagem]}</h1>`;
}



