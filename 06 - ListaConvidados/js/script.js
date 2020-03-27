var input = "";
var quantidade = 0

class ListaConvidados{
    inserir(){
        this.lerdado()
        if(input!=""){
          let lista = document.getElementById("lista").innerHTML;
          lista = lista + `<li id=${++quantidade}><div class="esquerdo"> <span>${input}</span></div> <div class="direito">
          <img src="img/editar.png" title="editar" id="editar" onclick="convidados.editar(${quantidade})">
          <img src="img/lixo.png" title="excluir" id="excluir"  onclick="convidados.excluir(${quantidade})"></div></li>`           /*"<li>"+input+"<img>"+"</li>";*/
          document.getElementById("lista").innerHTML = lista; 
          this.limpadados(); 
           this.totalconvidado();
        }else{
            alert("Insira o nome do convidado!")
        }
        document.getElementById("lista")
    }
    editar(id){
        // console.log(id)
        let element = document.getElementById(id);
        element= document.getElementsByClassName("esquerdo")[0].innerText;
        if(element!=""){
            document.getElementById("convidado").value = element;
            document.getElementsByTagName("button")[0].innerText = "Atualizar";
            /*verificar como conolar onclick na tag*/
            this.atualizar(id);
        }
    }
    atualizar(id){
        let novoNome=document.getElementById("convidado").value
        let element = document.getElementById(id);
        element= document.getElementsByClassName("esquerdo")[0].innerText = novoNome;
        
        
    }
    excluir(id){
        console.log(id);
        let element = document.getElementById(id);
        element.parentNode.removeChild(element);
        --quantidade;
        this.totalconvidado();
        
    }
    

    lerdado(){
        input = document.getElementById("convidado").value;
    }
    limpadados(){
        input = document.getElementById("convidado").value = "";
    }
    totalconvidado(){
        if(quantidade!=0){
       let text;
       text = "Total de convidados : " + quantidade;
       document.getElementById("total").innerHTML = text;
    //    console.log(total)
        }else{
            document.getElementById("total").innerHTML = "Nenhum convidado inserido!"
        }
    }
}
let convidados = new ListaConvidados();
