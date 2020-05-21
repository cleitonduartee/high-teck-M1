var itens = []


function salvar(){
    let dado = document.getElementById("dado").value
    itens.push(dado);
    clearData();
    
}
function mostrar(){
    document.getElementById("itens").innerText = itens;
}
function clearData(){
    document.getElementById("dado").value = "";
}
function ordenar(){
    
    for(let i =0; i<itens.length;i++){
        for(iten of itens){
            if(iten < itens[i]){
                
                console.log(iten)
            }
        }
    }
    
}