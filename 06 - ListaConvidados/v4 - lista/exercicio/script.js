class lista{
    constructor(){
        this.nome = []
    }
    adicionar(){
        let nome = document.getElementById("inputNome").value
        this.nome.push(nome)
        console.log(this.nome)
        this.listar()
    }
    listar(){
        let lista = document.getElementById("lista")
        lista.innerText = this.nome
        this.limpar()
    }
    limpar(){
        document.getElementById("inputNome").value = ""
    }
    
}
let obj = new lista()