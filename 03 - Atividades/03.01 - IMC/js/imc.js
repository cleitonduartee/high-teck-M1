function Calcular(){
    
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);
   
        let altura2 = altura * altura;
        let res = peso/altura2;

        //alert("IMC = "+res.toFixed(1))     
        resultado(res.toFixed(1));
    
    }
    function resultado(response){
        let res = response;

        switch(true){
                case res >=18.5 && res <=24.9:
                alert(`IMC = ${res}. Resultado= 'Peso normal'`);
                break;
                case res >24.9 && res <=29.9:
                alert(`IMC = ${res}. Resultado= 'Sobrepeso'`);
                break;
                case res >29.9 && res <=34.9:
                alert(`IMC = ${res}. Resultado= 'Obesidade grau 1'`);
                break;
                case res >34.9:
                alert(`IMC = ${res}. Resultado= 'Obesidade grau 2'`);
                break;
        }
    }

//     IMC	Resultado
// Entre 18,5 e 24,9	Peso normal
// Entre 25 e 29,9	Sobrepeso
// Entre 30 e 34,9	Obesidade grau 1
// Entre 35 e 39,9	Obesidade grau 2