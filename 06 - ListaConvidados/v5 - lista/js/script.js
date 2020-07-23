class GerenciadorConvidados {

    constructor() {
        this.edicao = ""
        this.soma = 0;
        this.convidados = [];

    }

    buscarConvidados() {

        // var xhttp = new XMLHttpRequest();
        // xhttp.onreadystatechange = () => {
        //     if (xhttp.readyState == 4 && xhttp.status == 200) {
        //         let conv = JSON.parse(xhttp.response);
        //         this.convidados = conv;
        //         this.gerarTabela();
        //     }
        // };
        // xhttp.open(
        //     "GET",
        //     "https://fdp-2018-modulo2.herokuapp.com/convidados",
        //     true
        // );
        // xhttp.send();
        fetch("https://fdp-2018-modulo2.herokuapp.com/convidados")
            .then((x) => {
                return x.json()
            })
            .then((res) => {
                this.convidados = res;
                this.gerarTabela();

            })
    }

    salvarBancoDeDados(convidado) {
        // var xhttp = new XMLHttpRequest();
        // xhttp.onreadystatechange = () => {
        //     if (xhttp.readyState == 4 && xhttp.status == 200) {
        //         this.buscarConvidados();
        //     }
        // };
        // xhttp.open(
        //     "POST",
        //     "https://fdp-2018-modulo2.herokuapp.com/convidados",
        //     true
        // );
        // xhttp.setRequestHeader("Content-Type", "application/json");
        // xhttp.send(JSON.stringify(convidado));

        fetch("https://fdp-2018-modulo2.herokuapp.com/convidados", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-type": "application/json",
            },
            body: JSON.stringify(convidado)

        })
            .then((x) => {
                return x.json();
            })
            .then((res) => {
                this.buscarConvidados();

            })
    }

    salvar() {
        let convidado = this.lerConvidado()
        let validado = this.validar(convidado)
        if (validado) {
            this.soma = 0;
            this.salvarBancoDeDados(convidado);
            this.limpar()
        } else {
            alert("Preencha todos os Campos")
        }
    }

    lerConvidado() {//return
        let convidado = {}
        convidado.nome = document.getElementById("inputNome").value
        convidado.idade = document.getElementById("inputIdade").value

        if (document.querySelector("input[type=radio]:checked") != null) {
            convidado.sexo = document.querySelector("input[type=radio]:checked").value
        }
        return convidado;
    }
    validar(convidado) {
        if (convidado.nome && convidado.idade && convidado.sexo) {
            return true
        }
        return false


    }//return true/false

    gerarTabela() {
        let tabela = document.getElementById("lista");
        tabela.innerHTML = "";

        for (let i = 0; i < this.convidados.length; i++) {
            this.inserirLinha(this.convidados[i]);
            this.soma++
        }
        this.somarConvidados();
    }
    inserirLinha(convidado) {
        let tabela = document.getElementById("lista")

        let linha = tabela.insertRow();
        linha.classList.add("d-flex")

        let colunaNome = linha.insertCell();
        colunaNome.classList.add("p-2")
        colunaNome.classList.add("flex-grow-1");
        let colunaIdade = linha.insertCell();
        colunaIdade.classList.add("p-2")
        let colunaSexo = linha.insertCell();
        colunaSexo.classList.add("p-2")
        let colunaImgEditar = linha.insertCell();
        colunaImgEditar.classList.add("p-2")
        let colunaImgExcluir = linha.insertCell();
        colunaImgExcluir.classList.add("p-2")

        let imgEditar = document.createElement('img');
        imgEditar.src = "img/editar.png"
        imgEditar.setAttribute('onclick', `obj.editar(${JSON.stringify(convidado._id)})`)

        let imgExcluir = document.createElement('img');
        imgExcluir.src = "img/excluir.png"
        imgExcluir.setAttribute('onclick', `obj.remover(${JSON.stringify(convidado._id)},${JSON.stringify(convidado.nome)})`)

        colunaImgEditar.appendChild(imgEditar);
        colunaImgExcluir.appendChild(imgExcluir);

        colunaNome.innerText = convidado.nome;
        colunaIdade.innerText = convidado.idade;
        colunaSexo.innerText = convidado.sexo;

    } //

    editar(id) {

        let achou = false;
        let i = 0;
        while (!achou && i < this.convidados.length) {
            if (this.convidados[i]._id == id) {
                document.getElementById("inputNome").value = this.convidados[i].nome
                document.getElementById("inputIdade").value = this.convidados[i].idade

                if (this.convidados[i].sexo == "M") {
                    document.getElementById("masc").checked = true
                } else {
                    document.getElementById("fem").checked = true
                }
                achou = true;
            }
            i++
        }

        this.edicao = id;
        document.getElementById("btn").style.display = "none";
        document.getElementById("btnEdicao").style.display = "inline-block";

    }
    salvarEdicao() {
        let convidado = this.lerConvidado();
        this.soma = 0;
        // var xhttp = new XMLHttpRequest();
        // xhttp.onreadystatechange = () => {
        //     if (xhttp.readyState == 4 && xhttp.status == 200) {
        //         this.buscarConvidados();
        //     }
        // };
        // xhttp.open(
        //     "PUT",
        //     `https://fdp-2018-modulo2.herokuapp.com/convidados/${this.edicao}`,
        //     true
        // );
        // xhttp.setRequestHeader("Content-Type", "application/json");
        // xhttp.send(JSON.stringify(convidado));

        fetch(`https://fdp-2018-modulo2.herokuapp.com/convidados/${this.edicao}`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-type": "application/json",
            },
            body: JSON.stringify(convidado)
        })
            .then((x) => {
                return x.json()
            })
            .then((res) => {
                this.buscarConvidados();

            })
        this.edicao = ""
        this.limpar();
        document.getElementById("btn").style.display = "inline-block";
        document.getElementById("btnEdicao").style.display = "none";



    }
    remover(id, nome) {


        if (confirm(`Tem certeza que deseja excluir ${nome} ?`)) {
            // var xhttp = new XMLHttpRequest();
            // xhttp.onreadystatechange = () => {
            //     if (xhttp.readyState == 4 && xhttp.status == 200) {
            //         this.buscarConvidados();
            //     }
            // };
            // xhttp.open(
            //     "DELETE",
            //     `https://fdp-2018-modulo2.herokuapp.com/convidados/${id}`,
            //     true
            // );
            // xhttp.setRequestHeader("Content-Type", "application/json");
            // xhttp.send(JSON.stringify());

            fetch(`https://fdp-2018-modulo2.herokuapp.com/convidados/${id}`, {
                method: "DELETE",
                
            })
                .then((x) => {
                    console.log(x);
                    if(x.ok){
                        return x.json()
                    }
                   
                })
                .then((res) => {
                    this.buscarConvidados();

                })
            this.soma = 0;

        }


    }

    limpar() {

        document.getElementById("inputNome").value = ""
        document.getElementById("inputIdade").value = ""

        if (document.querySelector("input[type=radio]:checked")) {
            document.querySelector("input[type=radio]:checked").checked = false
        }

        document.getElementById("btn").style.display = "inline-block";
        document.getElementById("btnEdicao").style.display = "none";


    }
    somarConvidados() {
        if (this.soma > 0) {
            document.getElementById("totalConvidado").innerText = "Total de convidados: " + this.soma;
        } else {
            document.getElementById("totalConvidado").innerText = "Nenhum convidado"
        }
    }

}
let obj = new GerenciadorConvidados();