var nomes = []
function salvar(){
    
    var nome = document.getElementById("nome").value;
    if(nome != ""){
        nomes.push(nome)
    }else{
        alert("Preencha o Campo nome")
    }
    criaList(nomes);
}
function criaList(arr){
    var table = document.getElementById("table")
    var botoes = `<thead> <tr>`
    var nomes = `<tbody><tr>`
    

    for(let i=0;i<arr.length;i++){
        botoes += `           
             <td><button onclick=excluir(${i})>${i}</button></td>                     
            `
        nomes  += `
        <td>${arr[i]}</td>
        `
    }
    botoes += `</tr>
    </thead>`;
    nomes += `</tr>
    </thead>`
    table.innerHTML = botoes + nomes;
    document.getElementById("nome").value="";
}
function excluir(id){
    console.log(id)
    nomes.splice(id,1);
    criaList(nomes);
}
