async function listaCasas(){
    const conexao = await fetch("http://localhost:3000/casas");
    const casas = await conexao.json();
    

    return casas;
}




 export const conectaApi = {
     listaCasas
}
