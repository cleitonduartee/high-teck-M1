function fecharMenu(){
console.log("Chamou fechar menu!")
document.getElementById("imgmenu").classList.remove("iniciar");//remove Class inicia na pagina para sumir imgmenu
document.getElementById("imgmenu").classList.remove("someImg");//remove Class criado pela função AbrirMenu, que retira imgmenu
document.getElementById("menu").classList.remove("menuAberto");//remove class criado pela função abrirmenu, que cria uma class para inserir o menu
document.getElementById("corpo").classList.remove("corpo70");//remove class criado pela função abrirmenu, que cria uma class para inserir o corpo em 70% com deley
document.getElementById("menu").classList.add("menuFechado");//cria class na nav que esconde menu (nav: width:0%)
document.getElementById("corpo").classList.add("corpoTotal");//cria class na main que coloca corpo como 100% (main: width:100%)

}
function abrirMenu(){
console.log("Chamou abrir menu!")
document.getElementById("menu").classList.remove("menuFechado");
document.getElementById("corpo").classList.remove("corpoTotal");
document.getElementById("imgmenu").classList.add("someImg");
document.getElementById("menu").classList.add("menuAberto");//criada para usar o transition
document.getElementById("corpo").classList.add("corpo70");//cria class na nav que esconde menu (nav: width:0%)


}


