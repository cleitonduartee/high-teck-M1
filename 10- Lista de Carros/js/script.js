class Carros{
    constructor(id,nome,marca,ano){
        this.id = id;
        this.nome = nome;
        this.marca = marca;
        this.ano = ano;
    }
}

class GerenciadorCarro{
    constructor(){
        
        this.carros = [];
        this.contador = 0;
        this.idEdicao = null;
    }
    criaId(){
        this.contador ++
        return this.contador;
    }
    salvarCarro(){
        let carro = this.lerDados();
        if(this.validador(carro)){
            if(this.idEdicao == null){           
            let novoCarro = new Carros(this.criaId(),carro.nome,carro.marca,carro.ano);
            this.carros.push(novoCarro);
            this.criaTabela(this.carros);
            }
        }
    }
    resultado(){
        let divResultado = document.getElementById("resultado");
        if(this.carros.length>1){
            let carroMaisNovo = this.verificaCarroMaisNovo();
            let carroMaisVelho = this.verificaCarroMaisVelho(carroMaisNovo.ano);
            let mediaCarros = this.verificaMediaCarros(this.carros);

           

            let imprimeResultado = `
            <strong>Carro mais novo: </strong>${    this.formatString(carroMaisNovo.nome)}, ${carroMaisNovo.ano}<br>
            <strong>Carro mais velho: </strong>${    this.formatString(carroMaisVelho.nome)}, ${carroMaisVelho.ano}<br>
            <strong>Média dos carros:  </strong>${mediaCarros}
            `
            divResultado.innerHTML = imprimeResultado;
        }else{
            let imprimeResultado = `
            <strong>Carro mais novo: </strong>${    this.formatString(this.carros[0].nome)}, ${this.carros[0].ano}<br>
            <strong>Carro mais velho: </strong>${    this.formatString(this.carros[0].nome)}, ${this.carros[0].ano}<br>
            <strong>Média dos carros:  </strong>${this.carros[0].ano}
            `
            divResultado.innerHTML = imprimeResultado;
        }



    }
    verificaCarroMaisNovo(){
        let carroNovo;
        let maior = "0";
        for(let i =0; i<this.carros.length;i++){
            
            if(this.carros[i].ano >maior){
                maior= this.carros[i].ano;
                carroNovo = this.carros[i];
            }        
        }
        return carroNovo;
    }
    verificaCarroMaisVelho(anoMaisNovo){
        let carroMaisVelho  = {}
        let menor = anoMaisNovo
        for(let i=0;i<this.carros.length;i++){
            if(this.carros[i].ano < menor){
                menor = this.carros[i].ano
                carroMaisVelho = this.carros[i];
            }
        }
        return carroMaisVelho;

    }
    verificaMediaCarros(carros){
        let somaAnosdosCarros = null;

        for(let i=0;i<carros.length;i++){
            somaAnosdosCarros += parseInt(carros[i].ano);
        }
        let media = somaAnosdosCarros / carros.length;
        return parseInt(media);

    }
    cancelar(){
        document.getElementById("inputNome").value = "";
        document.getElementById("inputMarca").value = "";
        document.getElementById("inputAno").value = "";

        document.getElementById("btnSalvar").style.display = "flex";
        document.getElementById("btnAtualizar").style.display = "none";

        this.idEdicao = null;

    }
    lerDados(){
        let carro = {};
        carro.nome = document.getElementById("inputNome").value;
        carro.marca = document.getElementById("inputMarca").value;
        carro.ano = document.getElementById("inputAno").value;

        return carro;
    }
    validador(carro){      

        if(carro.nome =="" || carro.marca ==""||carro.ano==""){
            alert("Preencha todos os campos");
            return false;
        }
        return true;

    }
    criaTabela(carros){
       
       let tabela = `
         <thead>
            <tr >
                <th >Nome</th>
                <th class="text-center">Marca</th>
                <th class="text-center">Ano</th>
                <th class="text-center">Action</th>
            </tr>
        </thead>
        <tbody>
           `
           
           for(let i = 0; i<carros.length;i++){
            tabela +=
            `
            <tr >
                <td >${this.formatString(carros[i].nome)}</td>
                <td class="text-center">${this.formatString(carros[i].marca)}</td>
                <td class="text-center">${carros[i].ano}</td>
                <td class="text-center"><button class="btn btn-outline-warning" onclick="gerenciador.editar(${carros[i].id})">Edit</button> <button class="btn btn-outline-danger" onclick="gerenciador.excluir(${carros[i].id})">Excluir</button></td>
            </tr>        
            `
           }
           tabela+= `</tbody>`
           document.getElementById("tabela").innerHTML = tabela;
           this.salvarStorage(carros);
           this.resultado();
           this.cancelar();
    }
    editar(id){
        this.idEdicao = id;
        for(let i= 0; i<this.carros.length;i++){
            if(this.carros[i].id == id){
                document.getElementById("inputNome").value = this.carros[i].nome;
                document.getElementById("inputMarca").value = this.carros[i].marca
                document.getElementById("inputAno").value = this.carros[i].ano;
            }
        }
        document.getElementById("btnSalvar").style.display = "none";
        document.getElementById("btnAtualizar").style.display = "flex";
        
    }
    excluir(id){
        if(confirm("Deseja excluir ?")){
            this.carros.pop(id)

            this.criaTabela(this.carros);
        }
    }
    salvarEdicao(){
        let carro = this.lerDados();
        for(let i = 0; i<this.carros.length;i++){
            if(this.carros[i].id==this.idEdicao){
                this.carros[i] = { "id":this.idEdicao,"nome":carro.nome,"marca":carro.marca,"ano":carro.ano}
                this.criaTabela(this.carros);
            }
        }
       
        this.cancelar();
    }
    formatString(string){
        let minusculo = string.toLowerCase();
        let primeiraMaiscula = minusculo.charAt(0).toUpperCase() + minusculo.slice(1);

        return primeiraMaiscula;

    }
    salvarStorage(carros){
        let jsonCarros = JSON.stringify(carros);
        let jsonId = JSON.stringify(this.contador);

        localStorage.setItem("carros", jsonCarros);
        localStorage.setItem("ultimoId", jsonId);
    }

    initStorage(){
        var initStorage = localStorage.getItem("carros");
        var initStorageID = localStorage.getItem("ultimoId");

        if(initStorage){
            this.carros = JSON.parse(initStorage);
        }
        if(initStorageID){
            this.contador = JSON.parse(initStorageID);
        }
        this.criaTabela(this.carros);
    }

}

let gerenciador = new GerenciadorCarro();
gerenciador.initStorage();