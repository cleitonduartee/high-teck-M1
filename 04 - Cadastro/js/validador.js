    var nome = "";
    var email = "";
    var sexoMasc= "";
    var sexoFem= "";
    var cursos = "";
    var estado = "";
    var foto = "";
    var dataNasc = "";
    

class Gerenciador{
  validar(){
    this.lerDados();
    // let nome = document.getElementById("nome").value;
    // let email = document.getElementById("email").value;
    // let sexoMasc= document.getElementById("masc").checked;
    // let sexoFem= document.getElementById("fem").checked;
    // let cursos = document.querySelectorAll("[type=checkbox]:checked").length;
    // let estado = document.getElementById("estado").value;
    // let foto = document.getElementById("foto").value;
    // let dataNasc = document.getElementById("nasc").value;
    // let buffer = "";
    let buffer = "";
    if(nome== ""){
        buffer=buffer +"O campo nome é obrigatorio!\n";
    }
    if (email == ""){
        buffer=buffer  +"O campo email é obrigatorio!\n";
    }
    if(!sexoMasc && !sexoFem){        
        buffer=buffer  +"Selecione o sexo\n";       
    }
    if(cursos == 0){
        buffer=buffer   +"Escolha pelo menos um curso de interesse!\n";
    }
    if (estado == "") {
        buffer=buffer  +"Selecione um estado!\n";
      }
    
      if (foto == "") {
        buffer=buffer   +"Selecione uma foto!\n";
      }
    
      if (dataNasc == "") {
        buffer=buffer   +"Selecione a data de nascimento!\n";
      }
     if(buffer !=""){

         
         document.getElementById("meensagens").classList.remove("show");
          document.getElementById("mensagem").innerText = buffer;
         document.getElementById("meensagens").classList.add("show");
         
        //alert(buffer)
     }
}
lerDados(){
     nome = document.getElementById("nome").value;
     email = document.getElementById("email").value;
     sexoMasc= document.getElementById("masc").checked;
     sexoFem= document.getElementById("fem").checked;
     cursos = document.querySelectorAll("[type=checkbox]:checked").length;
     estado = document.getElementById("estado").value;
     foto = document.getElementById("foto").value;
     dataNasc = document.getElementById("nasc").value;
    

}
fechaMensag(){
    document.getElementById("meensagens").classList.remove("show");
}
}
let obj = new Gerenciador();

