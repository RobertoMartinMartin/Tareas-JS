const nombres = [];
let cuadroTexto = document.getElementById("nombre");

cuadroTexto.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        let texto = cuadroTexto.value.trim();

        if (texto !== "") {
            
            const regex = /^[A-Z][a-z]+\s[A-Z][a-z]+$/ ;
            if (regex.test(texto)){

                nombres.push(texto);
                document.getElementById("error").innerHTML = ``;
                cuadroTexto.value = "";}
            else {
                document.getElementById("error").innerHTML = `Formato de nombre incorrecto<br>
                debe estar formado por nombre y apellido separados por un espacio y con la primera letra en mayúscula`;
            }
        } 
        else if (nombres.length > 0) {
            let indiceMayor = 0;
            let indiceMenor = 0;
            let mayor = nombres[0].length;
            let menor = nombres[0].length;

            for (let i = 1; i < nombres.length; i++) {
                if (nombres[i].length > mayor) {
                    mayor = nombres[i].length;
                    indiceMayor = i;
                }
                if (nombres[i].length < menor) {
                    menor = nombres[i].length;
                    indiceMenor = i;
                }
            }

            let longitudTotal = 0;
            for (let i = 0; i < nombres.length; i++) {
                longitudTotal += nombres[i].length;
            }
            let media = longitudTotal / nombres.length;

            document.getElementById("listado").innerHTML = `
                El primer nombre completo introducido: ${nombres[0]}<br>
                El último nombre completo introducido: ${nombres[nombres.length - 1]}<br>
                El nombre completo más largo: ${nombres[indiceMayor]}<br>
                El nombre completo más corto: ${nombres[indiceMenor]}<br>
                La media de longitud de los nombres completos es: ${media.toFixed(2)}<br>
            `;
        }
    }
});