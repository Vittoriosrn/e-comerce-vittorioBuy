import produto_selecionado from '../js/produtos_load.js'
import create_elements_cart from '../js/carrinho_load.js'

const b_aplicar_filtro = document.querySelector("#aplicar_filtro")  // Botão para aplicar o filtro
const produto = document.querySelectorAll(".produto") // todos os produtos em amostra
const select_ordem = document.querySelector("#select_ordem")
const spans_filtro_preco = document.querySelectorAll(".span_preco"); // Selecionar todos os spans do filtro por preço
const imagens_produto = document.querySelectorAll(".img_mini");
const ver_parcelameto_button = document.querySelector("#ver_parcelamento");
const parcelamentos_container = document.querySelector(".parcelamentos")
const parcelamento_text = document.querySelector(".parcelamento_select");
const add_cart_button = document.querySelector("#botao_compra")
// ==================== FUNÇÕES ====================
// Função filtrar por PREÇO
function filtrar_preco(menor_preco, maior_preco){
    for(let p = 0; p < produto.length; p++){
        let value_preco = Number(produto[p].querySelector(".value_preco").innerText)
        if(value_preco <= maior_preco && value_preco >= menor_preco && !produto[p].classList.contains("hide_now")){
            produto[p].classList.remove("hide")
            produto[p].classList.add("check") // para checar se o produto selecionado no filtro já esta à amostra
        }else{
            if(!produto[p].classList.contains("check")){ // se nao tiver amostra ele pode ocutar
                produto[p].classList.add("hide")
            }
        }
    }
    for(let i = 0; i < produto.length; i++){ // for para remover o check dos produtos
        produto[i].classList.remove("check")
    }
}
// Função para FILTRAR geral para os produtos
function filtrar(param){
    if(!isNaN(param)){
        switch(param){
            case 0:
                filtrar_preco(0, 500)
            break
            case 1:
                filtrar_preco(500, 1000)
            break
            case 2:
                filtrar_preco(1000, 1500)
            break
            case 3:
                filtrar_preco(2000, 2500)
            break
            case 4:
                filtrar_preco(2500, Infinity)
            break
            case 5:
                filtrar_preco(0, Infinity)
            break
        }
    }else{
        if(param.length > 0 && param[0] != "empty"){
            for(let p = 0; p < produto.length; p++){
                for(let m = 0; m < param.length; m++){
                    if(produto[p].outerText.includes(param[m])){
                        produto[p].classList.remove("hide")
                        produto[p].classList.add("check") // para checar se o produto selecionado no filtro já esta à amostra
                        produto[p].classList.remove("hide_now")
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
                produto[p].classList.remove("hide_now")
            }
        }
        for(let i = 0; i < produto.length; i++){ // for para remover o check dos produtos
            produto[i].classList.remove("check")
        }
    }
}
// Evento FILTRAR POR PREÇO
spans_filtro_preco.forEach((span, index) =>{ 
    span.addEventListener("click", () =>{
        filtrar(index)
    })
})

// Evento FILTRAR
if(b_aplicar_filtro){
    b_aplicar_filtro.addEventListener("click", () => {
        const filtro_marca = document.querySelectorAll(".filtro_marca")
        const produtos_checked = ['empty'] // Array para armazena os filtros selecionado
        let n_checked = 0 // Esse indice define a posição dos filtros checados no array
        
        for(let i = 0; i < filtro_marca.length; i++){ // For percorre todos os filtros para checar qual está selecionado
            if(filtro_marca[i].checked){
                produtos_checked[n_checked] = filtro_marca[i].id
                n_checked++
            }
        }
        filtrar(produtos_checked)
    })
}

// Evento/Função ORDENAR
if(select_ordem){
    select_ordem.addEventListener('change', (e) => {
        const array_prod = Array.from(produto) // função from para transformar NodeList em array para o sort
    
        switch (e.target.value){
            case 'preco_crescente':
                array_prod.sort((a, b) => { // Metodo sort para ordenar o array de elementos
                    if(Number(a.querySelector(".value_preco").innerText) < Number(b.querySelector(".value_preco").innerText)){
                        return -1  // retorna 1 para verdadeiro em ordem decrescente e -1 para ordem crescente
                    }else{
                        return 1
                    }
                })
            break
            case 'preco_decrescente':
                array_prod.sort((a, b) => {
                    if(Number(a.querySelector(".value_preco").innerText) < Number(b.querySelector(".value_preco").innerText)){
                        return 1
                    }else{
                        return -1
                    }
                })
            break
            case 'promocao':
                array_prod.sort((a, b) => {
                    if(Number(a.querySelector(".promocao_porc").innerText) < Number(b.querySelector(".promocao_porc").innerText)){
                        return 1
                    }else{
                        return -1
                    }
                })
            break
            case 'mais_avaliados':
                array_prod.sort((a, b) => {
                    if(Number(a.querySelector(".avaliacao").innerText) < Number(b.querySelector(".avaliacao").innerText)){
                        return 1
                    }else{
                        return -1
                    }
                })
            }
        //Limpar os produtos
        produto.forEach(() => {
            document.querySelector(".produto").remove() // Seleciona cada produto e remove
        })
        //Adicionar os produtos de volta na ordem
        array_prod.forEach((e) =>{
            const lista_produtos = document.querySelector("#lista_produtos")
            lista_produtos.appendChild(e) // e representa o produto que o forEach está percorrendo
        })
    })
}

// Evento de alternar imagem na pagina do produto

imagens_produto.forEach((imagens_produto, index) =>{
    imagens_produto.addEventListener("click", () =>{
        const img_full = document.querySelector(".img_full")
        img_full.src = `${produto_selecionado.imagens[index]}`
    })
})
// mostrar parcelamentos
if(ver_parcelameto_button){
    ver_parcelameto_button.addEventListener("click", () =>{
        if(parcelamentos_container.classList.contains("hide")){
            parcelamentos_container.classList.remove("hide") 
        }else{
            parcelamentos_container.classList.add("hide") 
        }
    })
}
// selecionar parcelamento 
const parcelamentos = document.querySelectorAll('.valor')
parcelamentos.forEach((parcelamentos) => {
    parcelamentos.addEventListener("click", () => {
        parcelamento_text.innerHTML = parcelamentos.innerHTML;

        if(parcelamentos_container.classList.contains("hide")){
            parcelamentos_container.classList.remove("hide") 
        }else{
            parcelamentos_container.classList.add("hide") 
        }
    })
})

// =============================== SCRIPT CARRINHO ===============================

// ADICIONAR AO CARRINHO

let produto_carrinho
if(localStorage.getItem("ids_cart")){
    produto_carrinho = localStorage.getItem("ids_cart").split(",")
}
if(!produto_carrinho){
    produto_carrinho = []
}
let quantidade
quantidade = parseInt(localStorage.getItem("quantidade"));
if(!quantidade){
    quantidade = 0
}
if(add_cart_button){
    console.log(typeof(produto_carrinho))
    add_cart_button.addEventListener("click", () => {
    produto_carrinho[quantidade] = produto_selecionado.id
    let repeat_quant = 0;
    for(let i = 0; i < quantidade; i++){
        if(produto_carrinho[i] == produto_carrinho[quantidade]){
            repeat_quant++
        }
    }
    if(!repeat_quant > 0){
        localStorage.setItem("ids_cart", produto_carrinho)
        quantidade++;
        localStorage.setItem("quantidade", quantidade)
        console.log("Produto já adicionado ao carrinho")
    }else{
        console.log("Produto já está no carrinho")
    }
    //localStorage.removeItem("ids_cart")
    //localStorage.removeItem("quantidade")
})
}

// REMOVE PRODUCT

excluir_produto_carrinho()

function excluir_produto_carrinho(){
    const excluir_produto_button = document.querySelectorAll(".excluir_produto")
    excluir_produto_button.forEach((excluir_produto_button, index) => {
        excluir_produto_button.addEventListener("click", () =>{
            for(let i = index; i < quantidade; i++){
                produto_carrinho[i] = produto_carrinho[i+1]
            }
            produto_carrinho.pop() // remover ultimo elemento do array
        
            localStorage.clear()
            localStorage.setItem("ids_cart", produto_carrinho)
            quantidade--
            localStorage.setItem("quantidade", quantidade)
    
            const lista_prod_carrinho = document.querySelector('#lista_prod_carrinho')
            while(lista_prod_carrinho.firstChild){
                lista_prod_carrinho.removeChild(lista_prod_carrinho.firstChild)
            }
           create_elements_cart()
           excluir_produto_carrinho()
           update_resume()
        })
    })
}

// SELECT PRODUCT QUANTITY

if(document.querySelector('.quant_product_value')){
    const quant_product_buttom = document.querySelectorAll('.quant_product_buttom')
    const quant_product_buttom_plus = document.querySelectorAll('.quant_product_buttom_plus')
    let quant_product_value = document.querySelectorAll('.quant_product_value')

    quant_product_buttom.forEach((quant_product_buttom, index) => {
        quant_product_buttom.addEventListener('click', () => {
            let new_quant_product = Number(quant_product_value[index].innerHTML)
            if(new_quant_product > 1){
                quant_product_value[index].innerHTML = `${new_quant_product-1}`
            }
            update_resume()
        })
    })
    quant_product_buttom_plus.forEach((quant_product_buttom_plus, index) =>{
        quant_product_buttom_plus.addEventListener('click', () => {
            let new_quant_product = Number(quant_product_value[index].innerHTML)
            if(new_quant_product >= 1){
                quant_product_value[index].innerHTML = `${new_quant_product+1}`
            }
            update_resume()
        })
    })
}

// UPDATE RESUME CART
update_resume()
function update_resume(){
    const valor_carrinho_avista = document.querySelector(".valor_carrinho_avista")
    const valor_carrinho_total = document.querySelector(".valor_carrinho_total")
    const valor_produtos = document.querySelector(".valor_produtos")
    const all_products = document.querySelectorAll(".produto_carrinho")
    let valor_total = 0
    let valor_avista  = 0

    for(let i = 0; i < Number(localStorage.getItem("quantidade")); i++){
        // valor total e a prazo
        valor_total += Number((all_products[i].querySelector(".preco_produto").innerHTML))
        valor_carrinho_total.innerHTML = valor_total.toFixed(2).replace(".", ",")
        valor_produtos.innerHTML = valor_total.toFixed(2).replace(".", ",")

        //valor à vista com desconto
        valor_avista += Number((all_products[i].querySelector(".preco_produto").innerHTML))
        valor_avista -= (valor_avista/100)*15
        valor_carrinho_avista.innerHTML = valor_avista.toFixed(2).replace(".", ",")
    }

    //valor_carrinho_avista.innerHTML = 

}











