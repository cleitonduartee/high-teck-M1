var pedidos = [];


class PedidoCamisa{
    constructor(nome,p=0,m=0,g=0){
        this.nome = nome;
        this.p = parseInt(p);
        this.m = parseInt(m);
        this.g = parseInt(g);
    }
    total(){
        let precoP = 10;
        let precoM = 12;
        let precoG = 15;

        return (precoP * this.p) + (precoM * this.m) + (precoG * this.g);
    }
}

function salvar(){
   var dados = lerDados();
    
    if(validar(dados)){
        if(document.getElementById('edicao').value == ""){
            let pedido = new PedidoCamisa(dados.Nome,dados.P,dados.M,dados.G)
            pedidos.push(pedido);
            criaTabela(pedidos);
        }else{
            salvarEdicao(dados);
        }
    }else{
        alert("Preencha pelo menos um campo!")
    }

    limpaTela();
}
function lerDados(){
    let pedido = {}
    pedido.Nome = document.getElementById('nome').value;
    pedido.P = document.getElementById('p').value;
    pedido.M = document.getElementById('m').value;
    pedido.G = document.getElementById('g').value;
    if(pedido.P ==""){
        pedido.P = '0'; 
    }
    if(pedido.M == ""){
        pedido.M = '0';        
    }
    if(pedido.G == ""){
        pedido.G='0';
    }
    return pedido;
}
function criaTabela(pedido){
    if(pedido.length == 0){
        document.getElementById('listTabela').innerText = ""
    }else{
        var tabela = `
        <thead>
        <tr>
            <th>Nome</th>
            <th>P</th>
            <th>M</th>
            <th>G</th>
            <th>Total</th>
            <th></th>
            <th></th>
        </tr>
        </thead>
        <tbody>
        `

        for(let i=0;i<pedido.length;i++){

        tabela += `
        <tr>
            <td>${pedido[i].nome}</td>
            <td>${pedido[i].p}</td>
            <td>${pedido[i].m}</td>
            <td>${pedido[i].g}</td>
            <td>${pedido[i].total()}</td>
            <td><button onclick='edit(${[i]})' class="btn btn-light">Edit</button></td>
            <td><button onclick='excluir(${[i]})' class="btn btn-light">Excluir</button></td>
        </tr>`        
        
        }
        tabela += '</tbody>';
        document.getElementById("listTabela").innerHTML = tabela;
    }

}
function validar(obj){
    
    if(obj.P || obj.M || obj.G){
        return true
    }else{
        return false;
    }
}
function limpaTela(){
    document.getElementById('nome').value = "";
    document.getElementById('m').value = "";
    document.getElementById('p').value = "";
    document.getElementById('g').value = "";
}
function edit(id){
    document.getElementById('nome').value = pedidos[id].nome
    document.getElementById('p').value = pedidos[id].p
    document.getElementById('m').value = pedidos[id].m
    document.getElementById('g').value = pedidos[id].g

    document.getElementById('edicao').value = id;
    
}
function excluir(id){
    if(confirm("tem certeza que deseja excluir?")){
    pedidos.splice(id,1);
    criaTabela(pedidos);
    }
}
function salvarEdicao(dados){
    let id = document.getElementById('edicao').value;
    pedidos[id].p = dados.P;
    pedidos[id].m = dados.M;
    pedidos[id].g = dados.G;

    document.getElementById('edicao').value = "";
    criaTabela(pedidos);
}