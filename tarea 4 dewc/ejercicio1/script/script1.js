const fechaHalving = new Date(2024,3,19);
const fechaActual = new Date();
const meses = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];

let diferencia = Math.floor((fechaActual - fechaHalving) / (1000 * 60 * 60 * 24));
                                                          // s      m    h    d 
let dia = fechaActual.getDate();
let mes = meses[fechaActual.getMonth()] ;
let anyo = fechaActual.getFullYear();   

document.getElementById("info").innerHTML = `Estamos a ${dia} de ${mes} de ${anyo},han pasado ${diferencia} días desde el último halving de Bitcoin, que tuvo lugar el 19 de abril de 2024.`