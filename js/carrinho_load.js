import dados_produtos from '../js/produtos.js'
//Criar a quantidade certa de produtos

let lista_prod_carrinho = document.querySelector('#lista_prod_carrinho')
let ids_carrinho_ls

function create_elements_cart(){
    if(localStorage.getItem("ids_cart")){
        ids_carrinho_ls = localStorage.getItem("ids_cart").split(",")
    }
    for(let i = 0; i < parseInt(localStorage.getItem("quantidade")); i++){
        const novo_produto = document.createElement("div")
        novo_produto.className = "produto_carrinho"
        novo_produto.id = `${i}`
        novo_produto.innerHTML = 
        `<img class="img_product" src="" alt="">
        <div>
            <a href="">
                <p class="name_produto"></p>
            </a>
            <p class="preco_produto"></p>
        </div>
        <div class="container_quant_produto">
            <button class="quant_product_buttom_plus">
                <i class="fa-solid fa-chevron-up"></i>
            </button>
            <span class="quant_product_value">1</span>
            <button class="quant_product_buttom">
                <i class="fa-solid fa-chevron-up fa-rotate-180"></i>
            </button>
        </div>
        <button class="excluir_produto">
            <i class="fa-solid fa-trash"></i>
            REMOVER
        </button>`
        if(lista_prod_carrinho){
            lista_prod_carrinho.appendChild(novo_produto)
        }
    }
    const produto_carrinho = document.querySelectorAll('.produto_carrinho')
        for(let i = 0; i < parseInt(localStorage.getItem("quantidade")); i++){
        if(produto_carrinho[i]){
            const img_product = produto_carrinho[i].querySelector(".img_product")
            const nome_prod = produto_carrinho[i].querySelector(".name_produto")
            const preco_produto = produto_carrinho[i].querySelector(".preco_produto")
            
            const produto = dados_produtos.find(dados_produtos => dados_produtos.id === ids_carrinho_ls[i])
            
            img_product.src = produto.imagens[0]
            nome_prod.innerHTML = produto.nome
            preco_produto.innerHTML = produto.preco
        }
    }
}

const add_cart_button = document.querySelector("#botao_compra")
if(lista_prod_carrinho){
    create_elements_cart()
}else if(add_cart_button){
    lista_prod_carrinho = document.querySelector('#lista_prod_carrinho')
    if(localStorage.getItem("ids_cart")){
        ids_carrinho_ls = localStorage.getItem("ids_cart").split(",")
    }
    create_elements_cart()
}

export default create_elements_cart



