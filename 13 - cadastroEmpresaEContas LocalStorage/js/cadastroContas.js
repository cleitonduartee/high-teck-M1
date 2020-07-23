class GerenciadorContas{
    constructor(){
        this.idContas = 0;
        this.listContas = [];
        this.listEmpresas = [];
        this.edicao = null;
    }

    salvar(){
        let conta = this.lerDados();
        if(this.validation(conta)){
            conta.id = this.idContas;
            this.idContas++
            if(this.edicao == null){
                this.listContas.push(conta);
                this.gerarTabelaContas(this.listContas);
            }else{
                this.salvarEdicao();
            }
        }
        
    }
    lerDados(){
        let obj = {};
        obj.valor = document.getElementById("valor").value
        obj.tipo = document.getElementById("tipo").value
        obj.pago = document.querySelector("input[type=checkbox]").checked
        obj.receptor =JSON.parse(document.getElementById("empresa").value)

        return obj
    }
    validation(conta){
        if(conta.valor && conta.tipo && conta.receptor){
            return true
        }
        alert("Preencha os campo obrigatórios")
        return false
    }

    recptorEmpresas(){
        let empresas = '<option value="">Selecione</option>'

        for(let i=0;i<this.listEmpresas.length;i++){
           
           if(this.listEmpresas[i].status == true){
                empresas +=`
                
                <option value='${JSON.stringify(this.listEmpresas[i])}'>${this.listEmpresas[i].nome}</option>
                
                `
           }
        }
        
        document.getElementById("empresa").innerHTML = empresas;
    }
    gerarTabelaContas(listContas){
        let contas = "";

        for(let i = 0; i<listContas.length;i++){
            contas +=`
                <tr> 
                    <td>${listContas[i].valor}</td>
                    <td>${listContas[i].tipo}</td>
                    <td>${listContas[i].pago ?'Sim':'Não'}</td>
                    <td>${listContas[i].receptor.nome}</td>
                    <td>Edit | Excluir</td>
                </tr>
            `           
        }
        contas += `</tbody>`
        document.getElementById("tabela").innerHTML = contas;
        this.limparFormulario();

        this.savarContasLS(listContas);
        this.savarIdContasLS(this.idContas);
    }
    limparFormulario(){
        document.getElementById("valor").value = ""
        document.getElementById("tipo").value = ""
        document.querySelector("input[type=checkbox]").checked = false;
        document.getElementById("empresa").value = "";

        this.edicao = null;
        
    }
    
    savarContasLS(listContas){
        let jsonContas = JSON.stringify(listContas);

        localStorage.setItem("Contas", jsonContas);
    }
    savarIdContasLS(id){
        let jsonIdContas = JSON.stringify(id);

        localStorage.setItem("IdContas", jsonIdContas);
    }
    initLS(){
        let idEmpresa = JSON.parse(localStorage.getItem("IdEmpresas"));
        let listEmpresas = JSON.parse(localStorage.getItem("Empresas"));

        let listContas = JSON.parse(localStorage.getItem("Contas"));
        let idContas = JSON.parse(localStorage.getItem("IdContas"));

        if(idEmpresa && listEmpresas){
            this.id = idEmpresa;
            this.listEmpresas = listEmpresas;

            
        }
        if(listContas && idContas ){
            this.listContas = listContas;
            this.idContas = idContas;

            this.gerarTabelaContas(listContas);
        }
    }
}
let gerenciadorContas = new GerenciadorContas();

gerenciadorContas.initLS();
gerenciadorContas.recptorEmpresas();