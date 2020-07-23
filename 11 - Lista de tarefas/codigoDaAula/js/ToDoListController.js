class ToDoListController {
    constructor(){
        this.tarefas = []
        this.indiceEdicao = null;
        this.geradorId = 0;
    }

    lerDados(){
        let tarefa  ={}
        tarefa.descrição = document.getElementById("inputDescricao").value;
        tarefa.concluida = false;
    }
    validar(tarefa){
        if(tarefa.descrição = ""){
            alert("Insira uma Tarefa");
            return false;
        }
        return true;
    }
    
    salvar(){
        let tarefa = this.lerDados();
        if(this.validar(tarefa)){
            if(this.indiceEdicao == null){
                this.adicionar(tarefa)
            }else{
                this.salvarEdicao(tarefa);
            }
            this.limpar();
            this.criarTabela();
        }
    }

    adicionar(){
        tarefa.id = this.geradorId;
        this.geradorId++;

        this.tarefas.push(tarefa);
    }

    criarTabela(tarefas){
        let tr = "";

        for(let i=0; i<tarefas.length; i++){
          tr +=  `            <tr>
            <td>
              <img src="img/unchecked.svg" alt="Concluída" id="checked-${i}" onclick="todoListController.finalizado('checked-${i}')"' />
            </td>
            <td>${tarefas[i]}</td>
            <td>
              <img src="img/delete.svg" alt="Concluída" id="${i}" onclick="todoListController.remove(${i})"/>
            </td>
            <td>
              <img src="img/edit.svg" alt="Concluída" id="${i}"/>
            </td>
          </tr>
            `
        }
        document.getElementById("tabelaDeTarefas").innerHTML = tr

    }
    limpar(){
        this.indiceEdicao = null;
        document.getElementById("inputDescricao").value= "";
    }
    finalizado(id){
        console.log("chamou Finalizado", id)      
       
    }
    remove(id){    
        console.log(id)    
        this.tarefas.splice(id, 1);
        this.criarTabela(this.tarefas);
    }
}

let todoListController = new ToDoListController();
