
let costoServicioBasico = 50.000;
let costoServicioIntermedio   = 100.000;
let costoServicioPremium    = 150.000;
let totalValorServicios = 0;


let cantidadServicios = document.getElementById("cantidad");
let categoria       = document.getElementById("categoria");



function total_aproximado() {

    if (categoria.value == 0) {
        totalValorServicios = costoServicioBasico * cantidadServicios;
    }

    if (categoria.value == 1) {
        totalValorServicios = costoServicioIntermedio * cantidadServicios;
    }
    
    if (categoria.value == 2) {
         totalValorServicios = costoServicioPremium * cantidadServicios;
    }

    total.innerHTML = totalValorServicios;
}

resumen.addEventListener('click', total_aproximado);

function reset_total_aproximado() {
    total.innerHTML = "";
}

borrar.addEventListener('click', reset_total_aproximado);