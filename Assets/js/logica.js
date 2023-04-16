$(document).ready();
let contenido = document.getElementById("listado");

fetch('https://digimon-api.vercel.app/api/digimon')
    .then(response => response.json())
    .then(resp => { crearListado(resp) });

function crearListado(resp) {

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
                </article>
          `
    };
};

function postBoton() {
    document.getElementById("principal").style.display = "none";
    let inputBusqueda = document.getElementById("inputBusqueda");
    //let botonBusqueda = document.getElementById("botonBusqueda");
    let terminoBusqueda = inputBusqueda.value;
    url = "https://digimon-api.vercel.app/api/digimon/name/" + terminoBusqueda;
    console.log(url);
    fetch(url)
        .then(response => response.json())
        .then(resp => { crearCard(resp) });
};

function crearCard(resp) {
    console.log(resp);
    let tarjeta = document.getElementById("tarjeta");
   // tarjeta.innerHTML = "";
    tarjeta.innerHTML +=
        `
    <div class="card row justify-content-md-center text-center col-12 my-5" >
        <img src="${resp.img}" class="img-fluid" height="100" id="imagen" alt="...">
        <div class="card-body col-12 my-5">
          <h2 id="nombre" class="card-title">${resp.name}</h2>
          <p id="nivel" class="card-text">${resp.level}</p>
        </div>
        <div class="card-body">
           <a href="https://digimon.fandom.com/wiki/${resp.name}" target="_blank" class="btn btn-black">Datos Digimon</a>
        </div>
    </div>
    <br>`
};


