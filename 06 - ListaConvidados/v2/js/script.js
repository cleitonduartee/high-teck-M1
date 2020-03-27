// var nomeConvidado = "";
var listaConvidado = "";
var qtd = 0;

class GerenciadorConvidados{
    LerDados(){
        
        let nomeConvidado = document.getElementById("nomeConvidado").value;
        listaConvidado = `
        <div class="listaInserida" id=${++qtd}> 
           <div class="esquerdo">
                 <span>${nomeConvidado}</span> 
           </div>                           
           <div class="direito">
                 <img src="img/editar.png" title="Editar" alt="Editar Nome" onclick="listaConvidados.Excluir(${qtd})">
                 <img src="img/lixo.png" title="Excluir" alt="Excluir Nome" onclick="listaConvidados.Excluir(${qtd})">          
           </div>              
        </div>`;
    }
    Adicionar(){
        this.LerDados();
        document.getElementById("lista").insertAdjacentHTML('beforeend', listaConvidado ); /*beforeend: Dentro do elemento, após seu último filho*/
        this.LimparDados();
    }
    Editar(){
        console.log("chamou editar")
    }
    Excluir(id){
       let element = document.getElementById(id);
       element.parentNode.removeChild(element);
       --qtd;

    }
    LimparDados(){
        document.getElementById("nomeConvidado").value = "";
        listaConvidado = "";
    }

}
let listaConvidados =  new GerenciadorConvidados();