//=================CARREGAMENTO DA PAGINA DE PRODUTOS=================
import dados_produtos from '../js/produtos.js'

// Elementos container da pagina do produto
const nome_prod_container = document.querySelector('.nome_produto')
const valor_avista_total_container = document.querySelector('.valor_avista_total')

const link_string = window.location.search // Seleciona URL da pagina
const id_link = link_string.replace('?produto/', '') // Seleciona o ID removendo elementos indesejado

const produto_selecionado = dados_produtos.find(dados_produtos => dados_produtos.id === id_link) //selecionar o produto correspondente ao id da url

nome_prod_container.innerHTML = produto_selecionado.nome
valor_avista_total_container.innerHTML = produto_selecionado.preco