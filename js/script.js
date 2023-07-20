const b_aplicar_filtro = document.querySelector("#aplicar_filtro")  // Botão para aplicar o filtro


// Função para FILTRAR os produtos
function filtrar(marca){
    const filtro_marca = document.querySelectorAll(".filtro_marca")
    const produto = document.querySelectorAll(".produto")

    //console.log(marca)
    for(let j = 0; j < produto.length; j++){
        if(!produto[j].outerText.includes(marca)){ //verifica se não contem o nome da marca para ocutar
            produto[j].classList.add("hide");
        }
    }
}

// ==================== EVENTOS ================

// Evento FILTRAR
b_aplicar_filtro.addEventListener("click", () => {
    const filtro_marca = document.querySelectorAll(".filtro_marca")
    
    for(let i = 0; i < filtro_marca.length; i++){ // For percorre todos os filtros para checar qual está selecionado
        switch(filtro_marca[i].id){
            case "Asus":
                if(filtro_marca[i].checked){
                    filtrar("Asus")  // Envia a marca selecionada para função
                    console.log(filtro_marca[i])
                }
            case "HyperX":
                if(filtro_marca[i].checked){
                    filtrar("HyperX")
                    console.log(filtro_marca[i])
                }
            case "Redragon":
                if(filtro_marca[i].checked){
                    filtrar("Redragon")
                    console.log(filtro_marca[i])
                }
            case "AMD":
                if(filtro_marca[i].checked){
                    filtrar("AMD")
                    console.log(filtro_marca[i])
                }
            case "Husky":
                if(filtro_marca[i].checked){
                    filtrar("Husky") 
                    console.log(filtro_marca[i])
                }
        }
    }
})



