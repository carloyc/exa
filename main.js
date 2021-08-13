
function update(nombre){
    let nombre = document.querySelector("nombre").value;
    let apellidopaterno = document.querySelector("apellidomaterno").value;
    let apellidomaterno = document.querySelector("apellidopaterno").value;
    let favor = document.querySelector("favor").value;
    console.log(data = { nombre: nombre, apellidopaterno: apellidopaterno, apellidomaterno: apellidomaterno, favor: favor});
    datos();
}

function create() {
    let nombre = document.querySelector("nombre").value;
    let apellidopaterno = document.querySelector("apellidopaterno").value;
    let apellidomaterno = document.querySelector("apellidomaterno").value;
    let favor = document.querySelector("favor").value;
    console.log(data = { nombre: nombre, apellidopaterno: apellidopaterno, apellidomaterno: apellidomaterno, favor: favor});
    datos();
}



function delete() {
    let nombre = document.querySelector("#nombre").value;
    let apellidopaterno = document.querySelector("apellidopaterno").value;
    let apellidomaterno = document.querySelector("apellidomaterno").value;
    let favor = document.querySelector("favor").value;
    console.log(data = { nombre: null, apellidopaterno: null, apellidomaterno: null, favor: null});
}

function Mostrar() {
    panel.textContent = "";
    data.forEach(x => {
        f = document.createElement("option");
        f.innerText = `${x.nombre} ${x.apellidopaterno} ${x.apellidomaterno} ${x.favor}`;
        panel.append(f);
    });
}
