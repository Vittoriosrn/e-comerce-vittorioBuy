//=================CARREGAMENTO DA PAGINA DE PRODUTOS=================
import dados_produtos from '../js/produtos.js'

// Elementos container da pagina do produto
const nome_prod = document.querySelector('.nome_produto')
const valor_avista_total = document.querySelector('.valor_avista_total')
const valor_aprazo_total = document.querySelector('#valor_aprazo_total')
const value_fild_marca = document.querySelector('#marca')
const value_fild_modelo = document.querySelector('#modelo')
const value_fild_especificacoes = document.querySelector('#especificacoes')
const value_fild_conteudo_embalagem  = document.querySelector('#Conteudo_embalagem')
const value_fild_garantia = document.querySelector('#garantia')
const value_fild_peso = document.querySelector('#peso')

const link_string = window.location.search // Seleciona URL da pagina
const id_link = link_string.replace('?produto/', '') // Seleciona o ID removendo elementos indesejado

const produto_selecionado = dados_produtos.find(dados_produtos => dados_produtos.id === id_link) //selecionar o produto correspondente ao id da url

nome_prod.innerHTML = produto_selecionado.nome
valor_avista_total.innerHTML = "R$"+(produto_selecionado.preco-(produto_selecionado.preco/100)*15)
valor_aprazo_total.innerHTML = "R$"+produto_selecionado.preco;
value_fild_marca.innerHTML = produto_selecionado.marca
value_fild_modelo.innerHTML = produto_selecionado.modelo
value_fild_especificacoes.innerHTML = produto_selecionado.especificacoes
value_fild_conteudo_embalagem.innerHTML = produto_selecionado.conteudo_embalagem
value_fild_garantia.innerHTML = produto_selecionado.garantia
value_fild_peso.innerHTML = produto_selecionado.peso