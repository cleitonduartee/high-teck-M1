class GerenciadorEmpresas{
    constructor(){
        this.id = 0;
        this.listEmpresas = [];
        this.edicao = null;
    }
    salvar(){
        let empresa = this.lerDados();
        if(this.validation(empresa)){
            if(this.edicao ==null){
                empresa.id = this.id ;
                this.id++
                
                this.listEmpresas.push(empresa);
                this.gerarTabela(this.listEmpresas)
            }else{
                this.salvarEdicao(empresa, this.edicao)
            }
            
        }
        this.limparFormulario();
    }
    lerDados(){
        let obj = {}
        obj.nome = document.getElementById("nome").value;
        obj.endereco = document.getElementById("endereco").value;
        obj.cnpj = document.getElementById("cnpj").value;
        obj.razaoSocial = document.getElementById("razaoSocial").value;
        obj.status = true;
    
        return obj;
    }
    limparFormulario(){
        document.getElementById("nome").value = "";
        document.getElementById("endereco").value = "";
        document.getElementById("cnpj").value = "";
        document.getElementById("razaoSocial").value = ""; 
        this.edicao = null;  
    }
    validation(empresa){
        let buffer = "";
        if(empresa.nome && empresa.endereco && empresa.cnpj && empresa.razaoSocial){
            return true;
        }
        alert("Preencha todo o formulário!")
        return false
    }
    gerarTabela(listEmpresas){
        let linha = "";

        for(let i=0; i<this.listEmpresas.length; i++){
            linha +=`
            <tr>
                <td>${listEmpresas[i].nome}</td>
                <td>${listEmpresas[i].endereco}</td>
                <td>${listEmpresas[i].cnpj}</td>
                <td>${listEmpresas[i].razaoSocial}</td>
                <td><button onclick="gerenciadorEmpresa.editar(${listEmpresas[i].id})" type="button" class="btn btn-outline-warning btn-sm">Edit</button>  | ${listEmpresas[i].status ?"<img src='./img/ativa.svg' alt='Ativo' title='Ativo' onclick='gerenciadorEmpresa.alterarStatus("+listEmpresas[i].id+")'>":'<img src="./img/inativa.svg" alt="Inativo"  title="Inativo" onclick="gerenciadorEmpresa.alterarStatus('+listEmpresas[i].id+')">' }   </td> 
            </tr>
            `
        }
        linha += ` </tbody>`
        this.savarEmpresasLS(this.listEmpresas);
        this.savarIdEmpresasLS(this.id)
        document.getElementById("tabela").innerHTML = linha;
    }
    savarEmpresasLS(listEmpresa){
        let jsonEmpresas = JSON.stringify(listEmpresa);

        localStorage.setItem("Empresas", jsonEmpresas);
    }
    savarIdEmpresasLS(id){
        let jsonId = JSON.stringify(id);

        localStorage.setItem("IdEmpresas", jsonId);
    }
    initLS(){
        let idEmpresa = JSON.parse(localStorage.getItem("IdEmpresas"));
        let listEmpresas = JSON.parse(localStorage.getItem("Empresas"))

        if(idEmpresa && listEmpresas){
            this.id = idEmpresa;
            this.listEmpresas = listEmpresas;

            this.gerarTabela(listEmpresas);
        }
    }
    alterarStatus(id){
        
        if(confirm("Deseja Alterar Status da Empresa? ")){

            for(let i =0; i<this.listEmpresas.length;i++){
                if(this.listEmpresas[i].id == id){
                    this.listEmpresas[i].status = !this.listEmpresas[i].status
                }
            }
        }
        this.gerarTabela(this.listEmpresas);

    }
    editar(id){

        for(let i =0; i<this.listEmpresas.length;i++){
            if(this.listEmpresas[i].id == id){

                document.getElementById("nome").value = this.listEmpresas[i].nome;
                document.getElementById("endereco").value = this.listEmpresas[i].endereco;
                document.getElementById("cnpj").value = this.listEmpresas[i].cnpj;
                document.getElementById("razaoSocial").value = this.listEmpresas[i].razaoSocial;

                this.edicao = id;
            }
        }
    }
    salvarEdicao(dados, id){

        for(let i =0; i<this.listEmpresas.length;i++){
            if(this.listEmpresas[i].id == id){

                this.listEmpresas[i].nome = dados.nome
                this.listEmpresas[i].endereco = dados.endereco
                this.listEmpresas[i].cnpj = dados.cnpj
                this.listEmpresas[i].razaoSocial = dados.razaoSocial               
            }
        }
        this.gerarTabela(this.listEmpresas);

    }
}
let gerenciadorEmpresa = new GerenciadorEmpresas();
