const start = document.getElementById("comienzo");
const reset = document.getElementById("reset");

start.addEventListener("click", function(){
    let minutos = document.getElementById("minutos").value;
    let segundos = document.getElementById("segundos").value ;

    if (minutos>0) {
        segundos = segundos + (minutos * 60) 
    }
    let cuentaAtras = document.getElementById("cuentaAtras");

    let cuenta = setInterval(function () {
        if (segundos >= 0) {
            //document.write(`Faltan ${segundos} segundos`)
            cuentaAtras.innerHTML = `Faltan ${segundos} segundos`;
            segundos --;
            
        } else {
            //document.write(`BOOM!!`)
            cuentaAtras.innerHTML = `BOOM!`;
            clearInterval(cuenta);
        }
        
    },1000);


})

reset.addEventListener("click", function(){
    document.getElementById("minutos").value = "";
    document.getElementById("segundos").value = "";
    document.getElementById("cuantaAtras").innerHTML = "";
})