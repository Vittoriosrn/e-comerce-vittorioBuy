const b_aplicar_filtro = document.querySelector("#aplicar_filtro")  // Botão para aplicar o filtro


// Função para FILTRAR os produtos
function filtrar(marcas){
    const filtro_marca = document.querySelectorAll(".filtro_marca") // todos os filtros
    const produto = document.querySelectorAll(".produto") // todos os produtos em amostra

    if(marcas.length > 0){
        for(let p = 0; p < produto.length; p++){
            for(let m = 0; m < marcas.length; m++){
                if(!produto[p].outerText.includes(marcas[m])){
                    produto[p].classList.add("hide")
                }else{
                    produto[p].classList.remove("hide")
                }
            }
        }
    }else{
        for(let p = 0; p < produto.length; p++){  // For para remover o hide de cada produto
            produto[p].classList.remove("hide")
        }
    }
}

// ==================== EVENTOS ====================

// Evento FILTRAR
b_aplicar_filtro.addEventListener("click", () => {
    const filtro_marca = document.querySelectorAll(".filtro_marca")
    const produtos_checked = [] // Array para armazena os filtros selecionado
    let n_checked = 0 // Esse indice define a posição dos filtros checados no array
    
    for(let i = 0; i < filtro_marca.length; i++){ // For percorre todos os filtros para checar qual está selecionado
        if(filtro_marca[i].checked){
            produtos_checked[n_checked] = filtro_marca[i].id
            n_checked++
        }
    }
    filtrar(produtos_checked)
})



