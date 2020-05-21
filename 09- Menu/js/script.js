class Gerenciadomenu {
    constructor() {
        this.nomesTentados = [];
        this.qtdTentativas = 5;
        this.opcaoSelecionada = false;

    }
    selecionar() {
        var opcao = document.getElementById("opcaoEscolhida").value;

        if (this.opcaoSelecionada) {
            alert("Uma opção já foi selecionada!")
            document.getElementById("opcaoEscolhida").value = "";
            return;
        }

        if (opcao != "") {
            opcao = parseInt(opcao);
            switch (opcao) {
                case 1:
                    this.opcao1();
                    this.opcaoSelecionada = true;
                    break;
                case 2:
                    this.opcao2();
                    this.opcaoSelecionada = true;
                    break;
                case 3:
                    this.opcao3();
                    this.opcaoSelecionada = true;
                    break;
                case 4:
                    window.location = "menuEncerrado.html"                   
                    break;
                default:
                    alert("Opção invalida");        

            }            
                document.getElementById("opcaoEscolhida").setAttribute("disabled", true);
                document.getElementById("opcaoEscolhida").setAttribute("placeholder","Bloqueado - (clique em voltar)")
                document.getElementById("opcaoEscolhida").value = "";
            

        } else {
            alert("Selecione a opção")
        }
        
    }
    opcao1() {

        let impares = "";
        for (let i = 1; i <= 100; i++) {
            if (i % 2 !== 0) {
                if (i == 99) {
                    impares += i
                } else {
                    impares += i + "-";
                }
            }
        }
        let resultado = `
                    <span id="resultadoOpc1">${impares}</span>
                    <div>
                        <button class="btn btn-outline-dark mt-2 ml-3" onclick="controler.voltar('opcao1')">Voltar</button>
                    </div>`
        document.getElementById("opcao1").innerHTML = resultado;
        document.getElementById("opcao1").classList.add("exibir");


    }
    opcao2() {
        let criaFuncao = `
        <div class="funcao" >
        <h2>Tente descobrir o nome secreto</h2>
        <div class="row">
            <div class="col-sm-5 mx-auto">
                <form >
                    <div class="form-group">   
                                               
                        <input type="text" class="form-control form-control-sm" placeholder="Insira o nome secreto" id="inputOpc2NomeSecreto">
                        
                        <div class="row">
                            <div class="col-sm-8 mx-auto mt-2">
                            <button type="button" class="btn btn-outline-primary" onclick="controler.adicionar()">Adicionar</button>
                            <button type="button" class="btn btn-outline-dark" onclick="controler.voltar('opcao2')">voltar</button>
                            </div>
                        </div>
                        
                    </div>
                </form>
            </div>
        </div>                       
    </div>
    <span id="resultadoOpc2"> 
       <strong>Tentativas:</strong>  5 <br>
       <strong>Nomes tentados: </strong>                       
    </span>  
     `
        document.getElementById("opcao2").innerHTML = criaFuncao;
        document.getElementById("opcao2").classList.add("exibir");

    }
    opcao3() {
        let criaFuncao = `
        <div class="funcao" >
        <h4>Digite o valor limite</h4>
        <div class="row">
            <div class="col-sm-3 mx-auto">
                <form >
                    <div class="form-group">
                       <input type="number" class="form-control form-control-sm" placeholder="numero limite" id="inputOpc3Limite">
                        <div class="row">
                            <div class="col-sm-8 mx-auto mt-2">
                            <button type="button" class="btn btn-outline-primary" onclick="controler.mostrarOcorrencia()">ir</button>
                            <button type="button" class="btn btn-outline-dark" onclick="controler.voltar('opcao3')">voltar</button>
                            </div>
                        </div>
                        
                    </div>
                </form>
            </div>
        </div>                       
    </div>
    <div class="opcao exibir" id="resultadoOpc3">
    </div>
                   
    `

    document.getElementById("opcao3").innerHTML = criaFuncao;
    document.getElementById("opcao3").classList.add("exibir");
    }

    adicionar() {
        let inputNomesecreto = document.getElementById("inputOpc2NomeSecreto").value;
        if(inputNomesecreto!=""){
          let inputNomesecretoMaisculo = this.primeiraMaiscula(inputNomesecreto);

           if(this.qtdTentativas>0){
              if(inputNomesecretoMaisculo == "Cleiton"){
                alert("Parabéns, você acertou o nome Secreto!")
                this.voltar('opcao2');
              }else{
                  let i = 0;
                  let jaTento = false;
                do{
                    if(this.nomesTentados[i]==inputNomesecretoMaisculo){
                        jaTento = true;
                    }
                    i++;                
                }while(!jaTento && i<this.nomesTentados.length)
                
                if(jaTento){
                    alert("Você já tentou esse nome")
                }else{
                this.qtdTentativas--;
                this.nomesTentados.push(inputNomesecretoMaisculo);
                
                document.getElementById("resultadoOpc2").innerHTML = `

                <strong>Tentativas:</strong>  ${this.qtdTentativas} <br>
                <strong>Nomes tentados: </strong> ${this.nomesTentados} 
                `
                }

              }
           }else{
               alert("Tentativas esgotadas")
               this.voltar('opcao2');
           }
        }else{
            alert("Preencha o campo Nome Secreto")
        }
        document.getElementById("inputOpc2NomeSecreto").value = "";
    }

    primeiraMaiscula(nome){
    let tudoMinuscula = nome.toLowerCase();
    let primeiraMaiuscula = nome.charAt(0).toUpperCase() + tudoMinuscula.slice(1);

    return primeiraMaiuscula;
    }
    mostrarOcorrencia(){
        let arr = "";
        let limite = document.getElementById("inputOpc3Limite").value;
        let qtdOcorrencia = 0;

        if(limite != ""){            
            var i = 0            
            while(i<=limite){
                            
                arr += i + " ";
                
                let cont = i + "";
                let arrAux = cont.split('');
                for(let index = 0;index<arrAux.length;index++){
                    if(arrAux[index]==1){
                        qtdOcorrencia++;
                    }
                }               
               i++;
            }
        document.getElementById("resultadoOpc3").innerHTML = `
        <p>Qtd: ${qtdOcorrencia}</p>
        <span >${arr}</span>` 
        document.getElementById("inputOpc3Limite").value = "";
        
        }else{
            alert("Preencha o campo numero limite")
        }        
        
    }

    voltar(opcao) {
        document.getElementById(opcao).innerHTML = "";
        document.getElementById(opcao).classList.remove("exibir");

        this.opcaoSelecionada = false;
        document.getElementById("opcaoEscolhida").disabled = false;
        document.getElementById("opcaoEscolhida").setAttribute("placeholder","Digite a opção...");
        
        this.nomesTentados = [];
        this.qtdTentativas = 5;
        this.opcaoSelecionada = false;
    }
}
let controler = new Gerenciadomenu();