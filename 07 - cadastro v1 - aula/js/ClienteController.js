let nome = "";
let email = "";
let elementoSexo = null;
let cursos = null;
let estado = "";
let cidade = "";
let elementoEditar = "";
let contador = 0;
let ehValido = false;
let idEdicao = "";

class ClienteController {
  lerDados() {
    nome = document.getElementById("nome").value;
    email = document.getElementById("email").value;
    elementoSexo = document.querySelector("input[type=radio]:checked");
    cursos = document.querySelector("input[type=checkbox]:checked");
    estado = document.getElementById("estado").value;
    cidade = document.getElementById("cidade").value;
  }

  salvar() {
    this.lerDados();
    this.validar();

    if (ehValido) {
      if (elementoEditar == "") {
        this.adicionar();
      } else {
        this.salvarEdicao();
      }

      this.limpar();
    }
  }

  validar() {
    let buffer = "";

    if (nome == "") {
      buffer += "O campo nome é obrigatório! \n";
    }

    if (email == "") {
      buffer += "O campo e-mail é obrigatório!\n";
    }
    if (elementoSexo == null) {
      buffer += "Selecione o sexo!\n";
    }

    if (cursos == null) {
      buffer += "Escolha pelo menos um curso de interesse!\n";
    }

    if (estado == "") {
      buffer += "Selecione um estado!\n";
    }

    if (cidade == "") {
      buffer += "O campo cidade é obrigatório!\n";
    }

    if (buffer != "") {
      document.getElementById("mensagem").innerText = buffer;
      document.getElementById("mensagens").classList.add("show");
      ehValido = false;
    } else {
      ehValido = true;
    }
  }

  editar(id) {
    
    idEdicao = id;

    let idLinha = "linha-" + id;

    let linha = document.getElementById(idLinha);

    let nomeEd = linha.children[0].innerText;
    document.getElementById("nome").value = nomeEd;

    let emailEd = linha.children[1].innerText;
    document.getElementById("email").value = emailEd;

    let sexoEd =  linha.children[2].innerText;
    if(sexoEd == "M"){
      document.getElementById("masc").checked = true
    }else{
      document.getElementById("fem").checked = true
    }

    
    let cursosEd = linha.children[3].innerText;    
    let web = cursosEd.includes("Web") // includes verifica se tem essa string e retorna true/false
    let mobile = cursosEd.indexOf("Mobile")//indexOf verifica se tem essa string e retorna a posição se tiver, se nao -1.
    let desktop = cursosEd.includes("Desktop")
       
    
      if(web==true){
        document.getElementById("web").checked = true
      }
      if (mobile!=-1){
        document.getElementById("mobile").checked = true
      }
      if (desktop==true){
        document.getElementById("desktop").checked = true
      }
        

    /* Opção com For Of */
    // for(let curso of cursosEd){
    //   if(curso == "Web"){
    //     document.getElementById("web").checked = true
    //   }
    //   if( curso == "Mobile"){
    //     document.getElementById("mobile").checked = true
    //   }
    //   if(curso == "Desktop"){
    //     document.getElementById("desktop").checked = true
    //   }
    // }

    let cidade = linha.children[4].innerText;    
    document.getElementById("cidade").value = cidade;

    let estado = linha.children[5].innerText;
    document.getElementById("estado").value = estado;
    
    elementoEditar = "editar";


    //TODO: Finalizar preparação pra edição
  }

  salvarEdicao() {
    //TODO: Implementar
    
    let idLinha = "linha-" + idEdicao;

    let linha = document.getElementById(idLinha);

    linha.children[0].innerText = nome;
    linha.children[1].innerText = email;
    linha.children[2].innerText = elementoSexo.value;

    let cursosDeInteresse = "";

    if (document.getElementById("web").checked) {
      cursosDeInteresse += document.getElementById("web").value + ", ";
    }

    if (document.getElementById("mobile").checked) {
      cursosDeInteresse += document.getElementById("mobile").value + ", ";
    }

    if (document.getElementById("desktop").checked) {
      cursosDeInteresse += document.getElementById("desktop").value ;
    }


    linha.children[3].innerText = cursosDeInteresse;
    linha.children[4].innerText = cidade;
    linha.children[5].innerText = estado;
    
    this.limpar();


  }

  excluir(id) {
    if (confirm("Tem certeza que deseja excluir este cliente?")) {
      document.getElementById("linha-" + id).remove();
    }
  }

  limpar() {
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("cidade").value = "";
    document.getElementById("estado").value = "";

    if (document.getElementById("masc").checked) {
      document.getElementById("masc").checked = false;
    } else {
      document.getElementById("fem").checked = false;
    }

    if (document.getElementById("web").checked) {
      document.getElementById("web").checked = false;
    }

    if (document.getElementById("mobile").checked) {
      document.getElementById("mobile").checked = false;
    }

    if (document.getElementById("desktop").checked) {
      document.getElementById("desktop").checked = false;
    }

    elementoEditar = "";
    ehValido = false;
    idEdicao = "";
  }

  adicionar() {
    let tabela = document.getElementById("tabela");

    let linha = tabela.insertRow();
    linha.id = "linha-" + contador;

    let colunaNome = linha.insertCell();
    let colunaEmail = linha.insertCell();
    let colunaSexo = linha.insertCell();
    let colunaCursos = linha.insertCell();
    let colunaCidade = linha.insertCell();
    let colunaEstado = linha.insertCell();
    let colunaEditar = linha.insertCell();
    let colunaExcluir = linha.insertCell();

    colunaNome.innerText = nome;
    colunaEmail.innerText = email;
    colunaSexo.innerText = elementoSexo.value;
    colunaEstado.innerText = estado;
    colunaCidade.innerText = cidade;

    let cursosDeInteresse = "";

    if (document.getElementById("web").checked) {
      cursosDeInteresse += document.getElementById("web").value + ", ";
    }

    if (document.getElementById("mobile").checked) {
      cursosDeInteresse += document.getElementById("mobile").value + ", ";
    }

    if (document.getElementById("desktop").checked) {
      cursosDeInteresse += document.getElementById("desktop").value ;
    }

    colunaCursos.innerText = cursosDeInteresse;

    let imagemEditar = document.createElement("img");
    let imagemExcluir = document.createElement("img");

    imagemEditar.src = "img/editar.svg";
    imagemEditar.setAttribute("onclick", `controller.editar(${contador})`);

    imagemExcluir.src = "img/deletar.svg";
    imagemExcluir.setAttribute("onclick", `controller.excluir(${contador})`);

    colunaEditar.appendChild(imagemEditar);
    colunaExcluir.appendChild(imagemExcluir);

    contador++;
  }
}

let controller = new ClienteController();
