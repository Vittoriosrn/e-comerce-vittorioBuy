const b_aplicar_filtro = document.querySelector("#aplicar_filtro")  // Botão para aplicar o filtro
const produto = document.querySelectorAll(".produto") // todos os produtos em amostra
const select_ordem = document.querySelector("#select_ordem")

// ==================== FUNÇÕES ====================

// Função para FILTRAR os produtos
function filtrar(marcas){
    if(marcas.length > 0){
        for(let p = 0; p < produto.length; p++){
            for(let m = 0; m < marcas.length; m++){
                if(produto[p].outerText.includes(marcas[m])){
                    produto[p].classList.remove("hide")
                    produto[p].classList.add("check") // para checar se o produto selecionado no filtro já esta à amostra
                }else{
                    if(!produto[p].classList.contains("check")){ // se nao tiver amostra ele pode ocutar
                        produto[p].classList.add("hide")
                        produto[p].classList.add("hide_now")
                    }
                }
            }
        }
    }else{
        for(let p = 0; p < produto.length; p++){  // For para remover o hide de cada produto
            produto[p].classList.remove("hide")
        }
    }
    for(let i = 0; i < produto.length; i++){ // for para remover o check dos produtos
        produto[i].classList.remove("check")
    }
}

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

// Evento/Função ORDENAR
select_ordem.addEventListener('change', () => {
    let array_prod = []
    for(let i = 0; i < produto.length; i++){
        for(let j = 0; j < produto.length; j++){
            if(produto[i].querySelector(".preco_produto").innerText > array_prod[j]){
                array_prod[j] = produto[i].querySelector(".preco_produto").innerText
            }
        }
    }
    console.log(array_prod)
})




