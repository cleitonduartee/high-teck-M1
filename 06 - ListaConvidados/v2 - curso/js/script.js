var nomeConvidado = "";
var elementoEditar = "";
var contador = 0;

class GerenciadorLista{

    lerConvidado(){
        nomeConvidado = document.getElementById("dadosInput").value;
                     
    }
    salvar(){
        this.lerConvidado();
        if(nomeConvidado!= ""){
            if(elementoEditar ==""){
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
        //Buscando elemento div raiz da lista
        let lista = document.getElementById("lista");

        //Creando elemento necessário para inserir o item da lista
        let div = document.createElement("div");
        let span = document.createElement("span");
        let divImg = document.createElement("div");
        let imgExcluir = document.createElement("img");
        let imgEditar = document.createElement("img");

        //Setando valores nos elementos
        //////DIV////
        div.id = "div-"+contador;

        /////SPAN/////
        span.innerText = nomeConvidado;
        span.id = "span"+ contador;

        /////Imagens/////
        imgEditar.setAttribute("src", "img/editar.png")
        imgEditar.setAttribute("onclick", `obj.editar('span${contador}')`);

        ///DIVIMG///
        divImg.id = "divImg";

        /////Imagens/////
        imgExcluir.setAttribute("src", "img/lixo.png")
        imgExcluir.setAttribute("onclick", `obj.excluir('div-${contador}')`);

        /////Definindo Hierarquia dos elementos///
        //pai.appendChild(filho)
        divImg.appendChild(imgEditar);
        divImg.appendChild(imgExcluir);
        div.appendChild(span);
        div.appendChild(divImg);

        
        lista.appendChild(div);
    }
    salvarEdicao(){
        let id = elementoEditar;
        let conteudo = document.getElementById("dadosInput").value;
        document.getElementById(id).innerText = conteudo;
        document.querySelector("button").innerText = "Adicionar";
        elementoEditar = "";
    }
    editar(id){
        // console.log(id)
        let text =  document.getElementById(id).innerText;        
        document.getElementById("dadosInput").value = text;
        elementoEditar = id; 
        document.querySelector("button").innerText = "Atualizar";
       

    }
    excluir(id){
        console.log(id)
        let div = document.getElementById(id)
        div.remove();

    }
    limparDados(){
        document.getElementById("dadosInput").value = "";

    }
    cancelar(){
        this.limparDados();
        document.querySelector("button").innerText = "Adicionar";
        elementoEditar = "";
    }
    
}

let obj = new GerenciadorLista();