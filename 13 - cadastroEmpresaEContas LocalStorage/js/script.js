function fecharMenu(){
    console.log("Chamou fechar menu!");
    document.getElementById("imgmenu").classList.remove("iniciar");
    document.getElementById("menu").classList.remove("abrirMenu");
    document.getElementById("corpo").classList.remove("mainMetade");
    document.getElementById("menu").classList.add("fecharMenu");
    document.getElementById("corpo").classList.add("mainTotal");
}
function abrirMenu(){
    console.log("Chamou abrir menu!")
    document.getElementById("menu").classList.remove("fecharMenu");
    document.getElementById("corpo").classList.remove("mainTotal");
    document.getElementById("imgmenu").classList.add("iniciar");
    document.getElementById("menu").classList.add("abrirMenu");
    document.getElementById("corpo").classList.add("mainMetade");
}
function tamanhotela(){
    let tamanho = Window.innerWidth;
    console.log(tamanho)
}
