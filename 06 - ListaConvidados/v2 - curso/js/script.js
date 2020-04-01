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
        let imgExcluir = document.createElement("img");
        let imgEditar = document.createElement("img");

        //Setando valores nos elementos

        /////SPAN/////
        span.innerText = nomeConvidado;
        span.id = "span"+ contador;

        /////Imagens/////
        imgEditar.setAttribute("src", "img/editar.png")
        imgEditar.setAttribute("onclick", `obj.editar('item-${contador}')`);

        /////Imagens/////
        imgEditar.setAttribute("src", "img/excluir.png")
        imgEditar.setAttribute("onclick", `obj.excluir('item-${contador}')`);

        /////Definindo Hierarquia dos elementos///
        //pai.appendChild(filho)
        div.appendChild(span);
        div.appendChild(imgEditar);
        div.appendChild(imgExcluir);
        lista.appendChild(div);
    }
    editar(id){
        
    }
    excluir(id){

    }
    limparDados(){
        document.getElementById("dadosInput").value = "";
    }
    
}

let obj = new GerenciadorLista();