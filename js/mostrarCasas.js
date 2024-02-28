import { conectaApi } from "./conectaApi.js";

const lista = document.querySelector(".lista-casas")

function constroiCardCasa(imagem, titulo, preco){
    const casa = document.createElement("li")
    casa.className = " swiper-slide casa-lista"
    casa.innerHTML = `
        <img src="${imagem}" alt="">
        <h3>${titulo}</h3>
        <p>${preco}</p>
        <button>Buy</button>
    `

    return casa;
}

async function listaCasas(){
    const listaApi = await conectaApi.listaCasas();
    listaApi.forEach(elemento => lista.appendChild(
        constroiCardCasa(elemento.imagem, elemento.titulo, elemento.preco)
    ))
}

listaCasas();