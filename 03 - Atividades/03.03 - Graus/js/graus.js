function celsius(){
    let arg = parseFloat(document.getElementById("number").value)
    

    let resp = (arg - 32)*(5/9);
    alert(`${arg}°F é = ${resp.toFixed(0)}°C`)

    document.getElementById("number").value="";
}
function fahrenheit(){
    let arg = parseFloat(document.getElementById("number").value)
    
    let resp = (9/5*arg)+32;
    alert(`${arg}°C é = ${resp.toFixed(0)}°F`)
    document.getElementById("number").value="";
}