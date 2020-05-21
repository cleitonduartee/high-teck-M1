//Exercicio 01:

// function imprimi(){
//     var list=[]
//     for(let i=1;i<=100;i++){
//         list.push(i);         

//         document.getElementById("span").innerText = list.join(' ');
//     }
// }

//Exercicio 02
// var numeros = [];
// function add(){
//     let numero = document.getElementById("numero").value;

//     numeros.push(numero);
//     document.getElementById("numero").value = "";
// }
// function finalizar(){
//     document.getElementById('listNumero').innerText = numeros.join(' ')
// }

//Exercicio 3
// function impar(){
//     let numero = document.getElementById("numeroo").value;
//     var list = ''
//     for(let i=0;i<=numero;i++){
//         let impar = i%2        
//         if(impar!=0){
//           list = list +" "+ i;          
//         }
//     }
//     document.getElementById("numeroo").value = "";
//     document.getElementById('listNumero').innerText = list;
// }

//exercicio 4 
var secreto = 'Cleiton'
var contador = 5;
function testar(){
    
    let tentativa = [];
    let digitado = document.getElementById("secreto").value;

    if(digitado == secreto){
        alert("Parabéns você acertou!");
        tentativa = []
        contador = 5;
        document.getElementById('tentativa').innerText = "Você tem 5 tentativas"
    }else if(contador>0){
        tentativa.push(digitado);
        contador--;
        document.getElementById('tentativa').innerText = "Você tem "+contador+" tentativas"
        
    }else{
        alert("tentativas encerradas")
    }
    document.getElementById("secreto").value = "";



 }
