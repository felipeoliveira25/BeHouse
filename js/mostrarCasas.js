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
            <button class="botao-compartilhar" data-compartilhar><i class="fa-solid fa-share-nodes"></i></button>
            
        </div>
    `
    const botaoSalvarInativo = casa.querySelector(".botao-salvar-inativo");
    const botaoSalvarAtivo = casa.querySelector(".botao-salvar-ativo");
    botaoSalvarInativo.addEventListener('click', ()=>{
       if(!botaoSalvarInativo.classList.contains('hidden')){
            botaoSalvarInativo.classList.add('hidden');
            botaoSalvarAtivo.classList.remove('hidden')
       }
    })
    botaoSalvarAtivo.addEventListener('click', ()=>{
        if(!botaoSalvarAtivo.classList.contains('hidden')){
            botaoSalvarAtivo.classList.add('hidden');
            botaoSalvarInativo.classList.remove('hidden');
        }
    })
    
    return casa;
}

async function listaCasas(){
    const listaApi = await conectaApi.listaCasas();
    listaApi.forEach(elemento => lista.appendChild(
        constroiCardCasa(elemento.imagem, elemento.titulo, elemento.preco)
    ))
}

listaCasas();




