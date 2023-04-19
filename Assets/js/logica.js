$(document).ready(function () {
    fetch('https://digimon-api.vercel.app/api/digimon')
        .then(response => response.json())
        .then(resp => { crearListado(resp) });
});

function crearListado(resp) {
    let contenido = document.getElementById("listado");
    console.log(resp);
    for (let datoTemporal of resp) {
        contenido.innerHTML +=
            `<article class="col-12 col-sm-6 col-md-4 col-lg-2 my-2">
            <div class="card">
                <img class="img-fluid" src="${datoTemporal.img}" height="40" weight="40" id="imagen" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${datoTemporal.name}</h5>
                    <p class="card-text">${datoTemporal.level}</p>
                    <a href="https://digimon.fandom.com/wiki/${datoTemporal.name}" class="btn btn-dark">Ver Wiki</a>
                </div>
            </div>
        </article>`
    };
};

function postBoton() {
    let inputBusqueda = document.getElementById("inputBusqueda");
    let terminoBusqueda = inputBusqueda.value;
    let url = "https://digimon-api.vercel.app/api/digimon/name/" + terminoBusqueda
    fetch(url)
        .then(response => response.json())
        .then(dato => { crearTarjeta(dato) });
};

function crearTarjeta(dato) {
    let principal = document.getElementById("principal");
    console.log(dato);
    principal.innerHTML = "";
    principal.innerHTML +=
        `<div class=" container card d-flex justify-content-center col-12 col-md-6 my-3" >
            <img src="${dato[0].img}" class="rounded mx-auto d-block" height="" id="imagen" alt="...">
            <div class="card-body">
                <h2 id="nombre" class="card-title text-center">${dato[0].name}</h2>
                <p id="nivel" class="card-text text-center">${dato[0].level}</p>
            </div>
            <div class="card-body text-center">
                <a href="https://digimon.fandom.com/wiki/${dato[0].name}" class="btn btn-dark">Ver Wiki</a>
            </div>
        </div>`
};