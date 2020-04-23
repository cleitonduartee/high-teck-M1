var nomeConvidado = "";
var idade = "";
var sexo = "";
var elementoEditar =[];
var contador = 0;

class GerenciadorLista{

    lerConvidado(){
        nomeConvidado = document.getElementById("InputNome").value;
        idade = document.getElementById("InputIdade").value;
        sexo = document.querySelector('input[name="sexo"]:checked').value
        
                     
    }
    salvar(){
        this.lerConvidado();
        if(nomeConvidado!= ""){
            console.log(elementoEditar)
            if(elementoEditar == ""){
                this.adicionar();
                contador++;
            }else{
                this.salvarEdicao();
            }
            this.limparDados();
        }else{
            alert("Preencha o campo com o nome do convidado!")
        }
    }
    adicionar(){
        this.lerConvidado();
        //Buscando elemento div raiz da lista
        let lista = document.getElementById("lista");

        //Creando elemento necessário para inserir o item da lista
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");
        let divImg = document.createElement("div");
        let imgExcluir = document.createElement("img");
        let imgEditar = document.createElement("img");

        //Setando valores nos elementos
        //////DIV////
        tr.id = "tr-"+contador;
        td1.id = "td1-"+contador;
        td2.id = "td2-"+contador;
        td3.id = "td3-"+contador;
        tr.classList.add("listaItem");

        td1.classList.add("tnome")

        /////TD/////
        td1.innerText = nomeConvidado;
        td2.innerText =  sexo;
        td3.innerText =  idade;

        ///DIVIMG///
        divImg.id = "divImg";

        /////Imagens/////
        imgEditar.setAttribute("src", "img/editar.png")
        imgEditar.setAttribute("onclick", `obj.editar('td1-${contador}', 'td2-${contador}','td3-${contador}')`);

        
        /////Imagens/////
        imgExcluir.setAttribute("src", "img/lixo.png")
        imgExcluir.setAttribute("onclick", `obj.excluir('tr-${contador}')`);

        /////Definindo Hierarquia dos elementos///
        //pai.appendChild(filho)
        divImg.appendChild(imgEditar);
        divImg.appendChild(imgExcluir);
        td4.appendChild(divImg);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);

        
        lista.appendChild(tr);
    }
    salvarEdicao(){
        let { id1, id2, id3, } = elementoEditar;
        document.getElementById(id1).innerText = nomeConvidado;
        document.getElementById(id2).innerText = sexo;
        document.getElementById(id3).innerText = idade;
        elementoEditar = [];
        document.querySelector("button").innerText = "Adicionar";
    }
    editar(id1, id2, id3){
          console.log(id1)
          elementoEditar = {id1, id2, id3};
          console.log(elementoEditar);
          nomeConvidado =document.getElementById(id1).innerText ;
          sexo =document.getElementById(id2).innerText;
          idade =document.getElementById(id3).innerText;

         document.getElementById("InputNome").value = nomeConvidado;
         document.getElementById("InputIdade").value = idade;
         
         if(sexo=="M"){
             document.getElementById("masculino").checked = true;
         }else{
            document.getElementById("feminino").checked = true;
         }
         
         document.querySelector("button").innerText = "Atualizar";
        
       

    }
    excluir(id){
        //console.log(tr)
         let tr = document.getElementById(id)
         tr.remove();
        console.log(tr)

    }
    limparDados(){
        document.getElementById("InputNome").value = "";
        document.getElementById("InputIdade").value = "";
        document.querySelector('input[name="sexo"]:checked').checked = false;
    }
    cancelar(){
        this.limparDados();
        document.querySelector("button").innerText = "Adicionar";
        elementoEditar = [];
    }
    
}

let obj = new GerenciadorLista();


