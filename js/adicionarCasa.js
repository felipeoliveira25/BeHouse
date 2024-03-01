import { conectaApi } from "./conectaApi.js"
const botaoAddHome = document.querySelector("[data-adicionar]")
const formulario = document.querySelector(".form-adicionar-casa")
const btnFecharForm = document.querySelector(".fechar-form")

function aparecerFormulario(evento){
    evento.preventDefault()
    document.body.classList.toggle("hidden-body")
    formulario.classList.toggle("hidden")
}
botaoAddHome.addEventListener("click", aparecerFormulario)

 btnFecharForm.addEventListener("click", ()=>{
     document.body.classList.remove("hidden-body")
     formulario.classList.add("hidden")
 })



async function addCasaNova(evento){
    evento.preventDefault();

    const imagem = document.querySelector("[data-imagem]").value;
    const titulo = document.querySelector("[data-titulo]").value;
    const preco = document.querySelector("[data-preco]").value;

    try{
        await conectaApi.criaCasa(imagem, titulo, preco)

        document.body.classList.remove("hidden-body")
        formulario.classList.add("hidden")
        alert("Casa adicionada")
    }catch(e){
        alert(e)
    }
}
formulario.addEventListener("submit", evento => addCasaNova(evento))