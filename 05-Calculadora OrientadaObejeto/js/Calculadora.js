var n1 = "";
var n2 = "";
class Calculadora{

     somar(){
                this.lerDados();
                if(n1!=""&&n2!=""){
                    let num1 = parseFloat(n1);
                    let num2 = parseFloat(n2);
                    let result = num1 + num2;
                    alert(result);
                }else{
                    alert("Insira os numeros nos campos para realizar a soma!")
                }
     }
      subtrair(){
                
               this.lerDados();
               if(n1!=""&&n2!=""){
                   let num1 = parseFloat(n1);
                   let num2 = parseFloat(n2);
                   let result = num1 - num2;
                   alert(result)
                   this.limpaDados();
               }else{
                   alert("Insira os numeros nos campos para realizar a subtrair!")
               }

            }
            multiplicar(){
               this.lerDados();
               if(n1!=""&&n2!=""){
                   let num1 = parseFloat(n1);
                   let num2 = parseFloat(n2);
                   let result = num1 * num2;
                   alert(result);
                   this.limpaDados();
               }else{
                   alert("Insira os numeros nos campos para realizar a multiplicação!")
               }
            }
          dividir(){
                this.lerDados();
                if(n1!=""&&n2!=""){
                    if(n2!="0"){
                        let num1 = parseFloat(n1);
                        let num2 = parseFloat(n2);
                        let result = num1 / num2;
                        alert(result);
                        this.limpaDados();
                    }else{
                        alert("Impossível dividir por zero!");
                        this.limpaDados();
                    }

                }else{
                    alert("Insira os numeros nos campos para realizar a divisão!")
                }
               
            }
            lerDados(){
                n1 = document.getElementById("n1").value
                n2 = document.getElementById("n2").value
            }
            limpaDados(){
                document.getElementById("n1").value="";
                document.getElementById("n2").value="";
            }
}
let calc = new Calculadora();


            
           
        