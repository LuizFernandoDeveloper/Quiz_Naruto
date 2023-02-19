
let cicloPersonagem = 0;

let arrayPersonagens = ["./imagens/naruto.png", "./imagens/kurama.webp",
                        "./imagens/gyuki.jpg", "./imagens/hashirama.webp",
                        "./imagens/kakashi.webp", "./imagens/madara.webp",
                        "./imagens/sakura.webp", "./imagens/sasuke.jpg", 
                        "./imagens/shikamaru.jpg", "./imagens/tobirama.jpg"];

let arrayNomesDePersonagens = ["Naruto", "Kurama", "Gyuki", "Hashirama", "Kakashi", 
                            "Madara", "sakura", "Sasuke", "Shikamaru", "Tobirama"];

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
    if(cicloPersonagem >= 9){
        cicloPersonagem = 9;
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



