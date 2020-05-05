class GerenciadorConvidados{

    constructor(){
       this.edicao = ""
       this.contador = 0;
       this.soma = 0;

    }

    salvar(){
    let convidado = this.lerConvidado()
    let validado = this.validar(convidado)
        if(validado){
            if(this.edicao == ""){
                this.adicionar(convidado)
            }else{
                this.salvarEdicao(convidado)
            }
            this.limpar()
        }else{
            alert("Preencha todos os Campos")
        }
        
    


    }
    lerConvidado(){//return
        let convidado = {}
        convidado.nome = document.getElementById("inputNome").value
        convidado.idade = document.getElementById("inputIdade").value

        if(document.querySelector("input[type=radio]:checked")!= null){
            convidado.sexo =document.querySelector("input[type=radio]:checked").value
        }
        return convidado;
    }
    validar(convidado){
        if(convidado.nome && convidado.idade && convidado.sexo){
            return true
        }
        return false
        

    }//return true/false
    inserirLinha(convidado){     
        let tabela = document.getElementById("lista")

        let linha = tabela.insertRow();
        linha.id= "linha-"+this.contador

        let colunaNome = linha.insertCell();
        let colunaIdade = linha.insertCell();
        let colunaSexo = linha.insertCell();
        let colunaImgEditar = linha.insertCell();
        let colunaImgExcluir = linha.insertCell();

        let imgEditar = document.createElement('img');
        imgEditar.src = "img/editar.png"
        imgEditar.setAttribute('onclick',`obj.editar(${this.contador}, ${JSON.stringify(convidado)})`)

        let imgExcluir = document.createElement('img');
        imgExcluir.src = "img/excluir.png"
        imgExcluir.setAttribute('onclick',`obj.remover(${this.contador}, ${JSON.stringify(convidado)})`)

        colunaImgEditar.appendChild(imgEditar);
        colunaImgExcluir.appendChild(imgExcluir);

        colunaNome.innerText = convidado.nome;
        colunaIdade.innerText = convidado.idade;
        colunaSexo.innerText = convidado.sexo;

    } //
    
    
    adicionar(convidado){
        this.inserirLinha(convidado)
        this.contador++
        this.soma++
        this.somarConvidados()
      
        
    }
    editar(id, convidado){
        document.getElementById("inputNome").value = convidado.nome
        document.getElementById("inputIdade").value = convidado.idade

        if(convidado.sexo == "M"){
            document.getElementById("masc").checked = true
        }else{
            document.getElementById("fem").checked = true
        }
        this.edicao = "linha-"+id
    }
    salvarEdicao(convidado){
        let linha = document.getElementById(this.edicao)
        linha.children[0].innerText = convidado.nome
        linha.children[1].innerText = convidado.idade
        linha.children[2].innerText = convidado.sexo

        this.edicao =""     
        
        
    }
    remover(id){
        let linha = document.getElementById("linha-"+id)
        var nome = linha.children[0].innerText
       
        if(confirm(`Tem certeza que deseja excluir ${nome} ?`)){
            this.removerLinha(id)
            this.soma--
            this.somarConvidados()
        }

        
    }//confirmação, chama o remover se sim...
    removerLinha(id){
        
       document.getElementById("linha-"+id).remove()
    }
    limpar(){
        document.getElementById("inputNome").value = ""
        document.getElementById("inputIdade").value = ""

        if(document.querySelector("input[type=radio]:checked")){
            document.querySelector("input[type=radio]:checked").checked = false
        }
    }
    somarConvidados(){
        if(this.soma >0){
            document.getElementById("totalConvidado").innerText = "Total de convidados: "+this.soma;
        }else{
            document.getElementById("totalConvidado").innerText = "Nenhum convidado"
        }
    }
    
}
let obj = new GerenciadorConvidados();