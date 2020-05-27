class Carro {
    constructor(id,nome, marca, ano) {
        this.id = id;
        this.nome = nome;
        this.marca = marca;
        this.ano = ano
    }
}

class GerenciadorPedidos {
    constructor() {
        this.carros = [];
        this.iniciaId = 0;
        this.idEdicao = null;
    }
    criaId(){
        this.iniciaId++;
        return this.iniciaId;
    }
    lerDados() {
        let carro = {}
        carro.nome = document.getElementById("nome").value;
        carro.marca = document.getElementById("marca").value;
        carro.ano = document.getElementById("ano").value;

        return carro;
    }
    validar(carro) {
        if (carro.nome && carro.marca && carro.ano) {
            return true;
        }
        return false;
    }
    formatText(text){
        let minusculo = text.toLowerCase();
        let maisculo = minusculo.charAt(0).toUpperCase() + minusculo.slice(1)
        return maisculo;
    }
    salvar() {
        let carro = this.lerDados();
        if (this.validar(carro)) {
            if(this.idEdicao == null){
                let carroNovo = new Carro(this.criaId(), carro.nome,carro.marca,carro.ano)
                this.carros.push(carroNovo);
                this.inseriNaTabela(this.carros);
                this.cancelar();
            }else{
                this.salvarIdicao(carro);
            }
            
        } else {
            alert("Preencha Todos os Campos")
        }
    }
    cancelar() {
        document.getElementById("nome").value = "";
        document.getElementById("marca").value = "";
        document.getElementById("ano").value = "";

        this.idEdicao = null;
    }
    resultado() {

            let maisNovo = this.carros[0];
            let maisVelho = this.carros[0];    
            let somaAnoscarros = 0;
            

            for(let i =0;i<this.carros.length;i++){
                if(this.carros[i].ano > maisNovo.ano){
                    maisNovo = this.carros[i];
                }
                if(this.carros[i].ano < maisVelho.ano){
                    maisVelho = this.carros[i]
                }
                somaAnoscarros += parseInt(this.carros[i].ano)
            }
            let media = parseInt(somaAnoscarros / this.carros.length);

        if(this.carros.length >1){
            
           
    
            document.getElementById("resultado").innerHTML = `
               <strong> Carro mais novo: </strong>${this.formatText(maisNovo.nome)}, ${maisNovo.ano} <br>
               <strong> Carro mais velho: </strong>${this.formatText(maisVelho.nome)}, ${maisVelho.ano} <br>
               <strong> Media dos Carros: </strong>${media}
            
            `
        }else if(this.carros.length == 1){
            document.getElementById("resultado").innerHTML = `
            <strong> Carro mais novo: </strong>${this.formatText(this.carros[0].nome)}, ${this.carros[0].ano} <br>
            <strong> Carro mais velho: </strong> <br>
            <strong> Media dos Carros: </strong>${this.carros[0].ano}
         
         `
        }else{
            alert("Não existe registro para Realizar o Resultado!")
            document.getElementById("resultado").innerHTML = "";
             }
        }
    
    inseriNaTabela(carros) {
       let tabela = "";
        for(let i=0; i<carros.length;i++){
            tabela += `
            <tr>
                <td>${this.formatText(carros[i].nome)}</td>
                <td>${this.formatText(carros[i].marca)}</td>
                <td>${carros[i].ano}</td>
                <td><button class="btn btn-outline-warning" onclick="gerenciador.editar(${carros[i].id})" >Edit</button>  <button class="btn btn-outline-danger" onclick="gerenciador.excluir(${carros[i].id})">Excluir</button></td>
            </tr>                           
            `           
        }
        tabela += `</tbody>`

        this.saveCarrosStorage(carros);
        document.getElementById('tabelaTbody').innerHTML = tabela;
    }
    editar(id){
        this.idEdicao = id;
        for(let i = 0; i<this.carros.length;i++){
            if(this.carros[i].id == id){
                
                document.getElementById("nome").value = this.carros[i].nome;
                document.getElementById("marca").value = this.carros[i].marca;
                document.getElementById("ano").value = this.carros[i].ano;                
            }
        }
        
        
    }
    excluir(id){
        if(confirm("Deseja Excluir?")){
            for(let i =0; i<this.carros.length;i++){
                if(this.carros[i].id == id){
                    this.carros.splice(i,1)
                    this.inseriNaTabela(this.carros);
                }
            }
        }
        
    }
    salvarIdicao(carro){

        for(let i =0; i<this.carros.length;i++){
            if(this.carros[i].id == this.idEdicao){
                this.carros[i] = {id: this.idEdicao, nome:carro.nome,marca:carro.marca,ano:carro.ano}
            }
        }
        this.inseriNaTabela(this.carros);
        this.cancelar();

    }
    saveCarrosStorage(carros){
        let jsonCarros = JSON.stringify(carros);
        let jsonId = JSON.stringify(this.iniciaId);

        localStorage.setItem("idCarros", jsonId);
        localStorage.setItem("listaCarros", jsonCarros);
    }
    initListaCarrosStorage(){
        let list = localStorage.getItem("listaCarros");
        let id = localStorage.getItem("idCarros");
        if(list && id){
            this.iniciaId = JSON.parse(id);
            this.carros = JSON.parse(list);
            this.inseriNaTabela(this.carros);
        }
    }
    
}
let gerenciador = new GerenciadorPedidos();
gerenciador.initListaCarrosStorage();