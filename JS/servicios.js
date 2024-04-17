
let costoServicioBasico = 100;


let cantidadServicios = document.getElementById("cantidad");
let categoria       = document.getElementById("categoria");



function total_aproximado() {

    let totalValorServicios = (cantidadServicios.value) * costoServicioBasico;

    if (categoria.value == 0) {
        totalValorServicios = (cantidadServicios.value) * costoServicioBasico;
    }

    if (categoria.value == 1) {
        totalValorServicios = (cantidadServicios.value) * costoServicioBasico + 50;
    }
    
    if (categoria.value == 2) {
        totalValorServicios = (cantidadServicios.value) * costoServicioBasico + 100;
    }

    total.innerHTML = totalValorServicios;
}

resumen.addEventListener('click', total_aproximado);

function reset_total_aproximado() {
    total.innerHTML = "";
}

borrar.addEventListener('click', reset_total_aproximado);