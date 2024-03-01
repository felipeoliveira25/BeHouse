async function listaCasas(){
    const conexao = await fetch("http://localhost:3000/casas-comprar");
    const casas = await conexao.json();
    
    return casas;
}

async function criaCasa(imagem, titulo, preco){
    const conexao = await fetch("http://localhost:3000/casas-comprar",{
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            imagem: imagem,
            titulo: titulo,
            preco: `R$${preco}`
        })
    });
    if(!conexao.ok){
        throw new Error("Não foi possível enviar a casa")
    }
    const casaConvertida = conexao.json();

    return casaConvertida;
}





 export const conectaApi = {
     listaCasas,
     criaCasa
}
