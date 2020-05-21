var clientes = [];
var idUpdate = "";
function salvar(){
       let dados = lerDados();    
    let validado = validar(dados);

    if(validado == true){
        if(idUpdate === "" ){
            clientes.push(dados);
            setList(clientes);
        }else{
            saveUpdate(dados)
        }
    }else{
        alert(validado);
    }
    limparCadastro()

}
function lerDados(){
    let dados = {};
    dados.nome = document.getElementById("nome").value;
    dados.email = document.getElementById("email").value;
    dados.cpf = document.getElementById("cpf").value;
    dados.endereco = document.getElementById("endereco").value;
    return dados;
}
function validar(dados){
    let errors = ""
    if(dados.nome == ""){
        errors += "Preencher Campo Nome!\n"
    }
    if(dados.email ==""){
        errors += "Preencher Campo Email!\n"
    }
    if(dados.cpf ==""){
        errors += "Preencher Campo Cpf!\n"
    }
    if(dados.endereco == ""){
        errors += "Preencher Campo Endereço!\n"
    }
    if(errors == ""){
        return true;
    }else{
        return errors; 
    }

}
function limparCadastro(){
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("cpf").value = "";
    document.getElementById("endereco").value = "";
}
function setList(obj){
    

    var table = document.getElementById("table");
    var list = `
    <thead>
    <tr>
        <th>Nome</th>
        <th>Email</th>
        <th>CPF</th>
        <th>Endereço</th>
        <th>Action</th>
    </tr>
    </thead>
    <tbody>`

    for(let i=0;i<obj.length;i++){
        list +=`
        <tr>
            <td>${obj[i].nome}    </td>
            <td>${obj[i].email}    </td>
            <td>${obj[i].cpf}      </td>
            <td>${obj[i].endereco} </td>
            <td><button onclick="edit(${i})" >Edit</button> | <button onclick="excluir(${i})" >Excluir</button></td>
        </tr>
        `
    }
    list += '</tbody>'

    table.innerHTML = list;


}
function edit(id){
    console.log(id)
    document.getElementById("nome").value = clientes[id].nome;
    document.getElementById("email").value = clientes[id].email;
    document.getElementById("cpf").value = clientes[id].cpf;
    document.getElementById("endereco").value = clientes[id].endereco;

    
    document.getElementById("btnSalvar").innerText = "Atualizar";
    idUpdate = id;

}
function saveUpdate(dados){
    clientes[idUpdate] = {"nome":dados.nome, "email":dados.email, "cpf":dados.cpf, "endereco":dados.endereco};

    setList(clientes);
    idUpdate = "";
    document.getElementById("btnSalvar").innerText = "Salvar";

}
function excluir(id){
    if(confirm("Deseja Excluir?")){
        clientes.splice(id,1);
        setList(clientes);
    }
    if(clientes.length == 0){
        document.getElementById("table").innerHTML = "";
    }
}