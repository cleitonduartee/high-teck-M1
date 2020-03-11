function porc(){
    let valor = parseFloat(document.getElementById("valor").value);
    let porcet = parseFloat(document.getElementById("porcet").value)

    let porcet1 = porcet/100;
    let res = valor * porcet1;   
    alert("Porcentagem = " + res.toFixed(2)+"%")
    document.getElementById("valor").value="";
    document.getElementById("porcet").value="";

    
}