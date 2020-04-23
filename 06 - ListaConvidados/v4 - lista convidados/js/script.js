var inputNome = "";
var inputIdade = "";
var inputSexo = "";
var validar = false;
var elementEdicao = false;
var idEdicao= "";
var contador = 0;
var totalConvidado = 0;


class GerenciadorConvidados{

    lerDados(){
       inputNome = document.getElementById("inputNome").value
       inputIdade = document.getElementById("inputIdade").value
       inputSexo = document.querySelector("input[type='radio']:checked")
    }
    salvar(){
       this.lerDados();
    //    console.log(inputNome, inputIdade, sexo)
        if(elementEdicao == false){
            this.validar();
            if(validar){
                this.criaElemento();                
                contador++;
                totalConvidado++;
                this.total();
                
            }
        }else{
            this.salvarEdicao();
        }
        this.limparDados();
       
    }
    validar(){
        if(inputIdade != "" && inputNome != "" && inputSexo !=null){
            validar = true;
        }else{
            alert("Por favor, preencher todos os campos!")
        }

    }
    salvarEdicao(){
        document.getElementById("nome-"+idEdicao).innerText = inputNome;
        document.getElementById("idade-"+idEdicao).innerText = inputIdade;
        document.getElementById("sexo-"+idEdicao).innerText =  inputSexo.value;

        document.querySelector("button").innerText = "Adicionar";

        this.limparDados();
        elementEdicao = false;


    }
    editar(id){

        elementEdicao = true;

        let nome = document.getElementById(`nome-${id}`).innerText
        let idade = document.getElementById(`idade-${id}`).innerText
        let sexo = document.getElementById(`sexo-${id}`).innerText
        
        document.getElementById("inputNome").value = nome;
        document.getElementById("inputIdade").value = idade;

        if(sexo == "M"){
            document.getElementById("masc").checked = true;
        }else{
            document.getElementById("fem").checked = true;
        }

        document.querySelector("button").innerText = "Atualizar";
        idEdicao = id;
        
    }
    excluir(id){
       
      
      document.getElementById(id).remove();
      totalConvidado--;
      this.total();
    }

    
    criaElemento(){
        var lista = document.getElementById("lista");
        
        /////Criando Elementos ////
        let linha = document.createElement("tr");
        let colunaNome = document.createElement("td");
        let colunaIdade = document.createElement("td");
        let colunaSexo = document.createElement("td");
        let divImg = document.createElement("div");
        let imgEditar = document.createElement("img");
        let imgExcluir = document.createElement("img");

        //// Passando ID para os elementos///
        linha.id = "linha-"+contador;
        colunaNome.id = "nome-"+contador;
        colunaIdade.id = "idade-"+contador;
        colunaSexo.id = "sexo-"+contador;

        /// Passando Atributos para os Elementos ///

        imgEditar.setAttribute("src","img/editar.png", "onclick" );
        imgExcluir.setAttribute("src","img/excluir.png", );
        imgEditar.setAttribute("onclick", `obj.editar('${contador}');`);
        imgExcluir.setAttribute("onclick", `obj.excluir('linha-${contador}');`);
        divImg.classList.add("classImg");
        colunaNome.classList.add("tableNome");



        /// Passando Conteudo para os elementos ///
        colunaNome.innerText = inputNome;
        colunaIdade.innerText = inputIdade;
        colunaSexo.innerText = inputSexo.value;

        /// Posicionando Elementos ///

        divImg.appendChild(imgEditar);
        divImg.appendChild(imgExcluir);
        linha.appendChild(colunaNome);
        linha.appendChild(colunaIdade);
        linha.appendChild(colunaSexo);
        linha.appendChild(divImg);

        lista.appendChild(linha);

    }
    
    limparDados(){
       document.getElementById("inputNome").value = "";
       document.getElementById("inputIdade").value = "";
       let sexo = document.querySelector("input[type='radio']:checked");
       if( sexo != null ){
       sexo.checked = null;
       }
    }
    total(){
       let total = document.getElementById("totalConvidado");
        if(totalConvidado == 0){
            total.innerText = "Nenhum convidado";
        }else{
            total.innerText = "Total convidados: "+ totalConvidado;
        }
    }   
}
let obj = new GerenciadorConvidados();