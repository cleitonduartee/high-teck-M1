
class Login{
    constructor(id,name,userName,passWord){
        this.id = id
        this.name = name
        this.userName = userName
        this.password = passWord
    }
}

class GerenciadorLogim{
    constructor(){
        this.id = 0;
        this.listLogin = []
    }

    salvar(){
        let dadosLogin = this.lerDados();
        
        if(!this.validation(dadosLogin)){
            alert('Preencha todos os campos do formulário!')
            return
        }
    
        let novoLogim = new Login(this.id,dadosLogin.nome,dadosLogin.userName,dadosLogin.passWord)
        this.id++,

        this.listLogin.push(novoLogim);
                
        this.savarLocalStorage(this.listLogin);
        this.limparFormulario();

        location = "login.html"
    }
    lerDados(){
        let obj = {}      
        obj.nome = document.getElementById("name").value;
        obj.userName = document.getElementById("usarName").value;
        obj.passWord = document.getElementById("passWord").value;
       
        return obj;
    
    }
    validation(dados){
        if(!(dados.nome && dados.userName && dados.passWord)){
            
            return false
        }
        return true
    }
    
    savarLocalStorage(listLogin){
        let jsonLogin = JSON.stringify(listLogin);
        localStorage.setItem(`listLogin`, jsonLogin )
    }
    
    limparFormulario(){
        document.getElementById("name").value = "";
        document.getElementById("usarName").value = "";
        document.getElementById("passWord").value = "";
    }
    verificaLogin(){
        let dados = this.lerDados();

        console.log(dados);
    }

}

let dados = new GerenciadorLogim();