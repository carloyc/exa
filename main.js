
function update(nombre){
    let nombre = document.querySelector("nombre").value;
    let apellidomaterno = document.querySelector("apellidomaterno").value;
    let apellidopaterno = document.querySelector("apellidopaterno").value;
    let favor = document.querySelector("favor").value;
    console.log(data = { nombre: nombre, apellido1: apellidomaterno, apellido2: apellidopaterno, Pokemon: favor});
    datos();
}

function create() {
    let nombre = document.querySelector("nombre").value;
    let apellidomaterno = document.querySelector("apellidomaterno").value;
    let apellidopaterno = document.querySelector("apellidopaterno").value;
    let favor = document.querySelector("favor").value;
    console.log(data = { nombre: nombre, apellido1: apellidomaterno, apellido2: apellidopaterno, Pokemon: favor});
    datos();
}



function delete() {
    let nombre = document.querySelector("#nombre").value;
    let apellidomaterno = document.querySelector("apellidomaterno").value;
    let apellidopaterno = document.querySelector("apellidopaterno").value;
    let favor = document.querySelector("favor").value;
    console.log(data = { nombre: null, apellido1: null, apellido2: null, Pokemon: null});
}

