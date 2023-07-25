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
select_ordem.addEventListener('change', (e) => {
    const array_prod = Array.from(produto) // função from para transformar NodeList em array para o sort
    //Mostrar produtos ordenados
    switch (e.target.value){
        case 'preco_crescente':

        break
        case 'preco_decrescente':
            array_prod.sort((a, b) => { // Metodo sort para ordenar o array de elementos
                if(Number(a.querySelector(".value_preco").innerText) < Number(b.querySelector(".value_preco").innerText)){
                    return 1  // retorna 1 para verdadeiro em ordem decrescente e -1 para ordem crescente
                }else{
                    return -1 
                }
            })
            //Limpar os produtos
            produto.forEach(() => {
                document.querySelector(".produto").remove() // Seleciona cada produto e remove
            })
        break
        case 'promocao':

        break
        case 'mais_procurados':

        break
        case 'mais_avaliados':
    }
    array_prod.forEach((e) =>{
        const lista_produtos = document.querySelector("#lista_produtos")
        lista_produtos.appendChild(e) // e representa o produto que o forEach está percorrendo
    })
})




