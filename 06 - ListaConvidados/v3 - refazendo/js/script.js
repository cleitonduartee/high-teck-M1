var nomeConvidado = "";
var idade = "";
var sexo = "";
var elementoEditar =[];
var contador = 0;
var validar = false;

class GerenciadorLista{

    lerConvidado(){
      nomeConvidado = document.getElementById("InputNome").value;
      idade = document.getElementById("InputIdade").value;
      sexo = document.querySelector("input[type=radio]:checked");
     
                     
    }
    validar(){
        if(nomeConvidado !="" && idade !=""  && sexo !=null){
            validar = true;
        }else{
            alert("Por favor, preencher todos os campos!");
            
        }
    }
    salvar(){
        console.log("chamou salvar")
        this.lerConvidado();
        if(elementoEditar == ""){ 
            this.validar();           
            if(validar){
                this.adicionar();
                validar = false;
            }
        }else{
            this.salvarEdicao;
        }
        this.limparDados();
        
    }
    adicionar(){
        console.log("chamou adicionar!")
       let lista = document.getElementById("lista");
       
       ////  Criando Elementos ///
       let linha = document.createElement("tr");
       let colunaNome = document.createElement("td");
       let colunaIdade = document.createElement("td");
       let colunaSexo = document.createElement("td");
       let colunaImgExcluir = document.createElement("img");
       let colunaImgEditar = document.createElement("img");

       

       /// passando conteudo ///
       colunaNome.innerText =  nomeConvidado;
       colunaIdade.innerText =  idade;
       colunaSexo.innerText =  sexo.value;

       //passando os ID nos elementos ///
       linha.id = "linha-"+contador;
       colunaNome.id = "nome-"+contador;
       colunaIdade.id = "idade-"+contador;
       colunaSexo.id = "sexo-"+contador;

       // atributos //
       colunaNome.classList.add("tableNome");

       /// passando atributo para imagens ///
       colunaImgEditar.setAttribute("src","img/editar.png", "onclick", `editar(${contador})`);
       colunaImgExcluir.setAttribute("src","img/lixo.png", "onclick", `excluir(${contador})`);

       //// inserindo elementos ////
       linha.appendChild(colunaNome);
       linha.appendChild(colunaIdade);
       linha.appendChild(colunaSexo);
       linha.appendChild(colunaImgEditar);
       linha.appendChild(colunaImgExcluir);

       lista.appendChild(linha);


    }
    salvarEdicao(){
       
    }
    editar(id1, id2, id3){
         
       

    }
    excluir(id){
       
    }
    limparDados(){
        document.getElementById("InputNome").value = "";
        document.getElementById("InputIdade").value ="";
        nomeConvidado = "";
        idade = "";
        console.log(nomeConvidado);
    }
   
    
}

let obj = new GerenciadorLista();


