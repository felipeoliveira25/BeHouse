import { conectaApi } from "./conectaApi.js";

const lista = document.querySelector(".lista-casas")

function constroiCardCasa(imagem, titulo, preco){
    const casa = document.createElement("li")
    casa.className = " swiper-slide casa-lista"
    casa.innerHTML = `
        <img src="${imagem}" alt="">
        <h3>${titulo}</h3>
        <p>${preco}</p>
        <div class="botoes-card">
            <input type="button" value="More Details" class="botao-comprar" data-comprar>
            <button class="botao-salvar-inativo"><i class="fa-regular fa-bookmark"></i></button>
            <button class="botao-salvar-ativo hidden" data-salvar><i class="fa-solid fa-bookmark"></i></button>
            
            
        </div>
    `
    
    const botaoSalvarInativo = casa.querySelector(".botao-salvar-inativo");
    const botaoSalvarAtivo = casa.querySelector(".botao-salvar-ativo");

    salvarCasas(botaoSalvarInativo, botaoSalvarAtivo)
    
    
    return casa;
}

function salvarCasas(botaoInativo, botaoAtivo){
    botaoInativo.addEventListener('click', ()=>{
        if(!botaoInativo.classList.contains('hidden')){
             botaoInativo.classList.add('hidden');
             botaoAtivo.classList.remove('hidden')
        }
     })
     botaoAtivo.addEventListener('click', ()=>{
         if(!botaoAtivo.classList.contains('hidden')){
             botaoAtivo.classList.add('hidden');
             botaoInativo.classList.remove('hidden');
         }
     })
}







async function listaCasas(){
    const listaApi = await conectaApi.listaCasas();
    listaApi.forEach(elemento => lista.appendChild(
        constroiCardCasa(elemento.imagem, elemento.titulo, elemento.preco)
    ))
}

listaCasas();