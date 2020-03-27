var nomeConvidado = "";
var lista = "";

class GerenciadorLista{

    lerConvidado(){
        nomeConvidado = document.getElementById("dadosInput").value;
                     
    }
    adicionar(){
        this.lerConvidado();
        if(nomeConvidado !=""){
            lista += nomeConvidado+"\n";
            document.getElementById('lista').innerText = lista;
             this.limparDados();
        }else{
            alert("Insira o nome do convidado!")
        }        
    }
    limparDados(){
        document.getElementById("dadosInput").value = "";
    }
    
}

let obj = new GerenciadorLista();