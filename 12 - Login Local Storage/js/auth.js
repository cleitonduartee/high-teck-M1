class GerenciaAth{
    constructor(){
        this.listLogin = [];
    }

    autenticacao(){
        let dados = this.lerDados()
        if(this.validation(dados)){

            this.recuperaLoginStorrage();

            for(let i =0;i<this.listLogin.length;i++){
                if(this.listLogin[i].userName == dados.userName){
                    if(this.listLogin[i].passWord == dados.passWord){
                        location = "index.htm"
                    }else{
                        alert("PassWord errado")
                    }
                }
            }

        }
    }
    lerDados(){
        let obj = {}

        obj.userName = document.getElementById("userName").value;
        obj.passWord = document.getElementById("passWord").value;

        return obj
    }
    validation(login){
        let buffer = ""
        
        if(login.userName == "" && login.userName == null){
            buffer += "Preencha o campo Login \n"
        }
        if(login.passWord == "" && login.passWord == null){
            buffer += "Preencha o campo PassWord \n"
        }

        if(buffer != ""){
            alert(buffer)
            return false
        }
        return true;
    }
    recuperaLoginStorrage(){
        let jsonStorage =JSON.parse(localStorage.getItem("listLogin"));

        if(jsonStorage){
            this.listLogin = jsonStorage;
        }
    }

}
let auth = new GerenciaAth();