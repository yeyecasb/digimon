let contenido = document.getElementById("listado");

fetch('https://digimon-api.vercel.app/api/digimon')
    .then(response => response.json())
    .then(resp => { crearListado(resp) });

function crearListado(resp) {

    for (let datoTemporal of resp) {
        contenido.innerHTML +=
            `
        <tr><td><img src=${datoTemporal.img} height="40" weight="40" id="imagen"></td>
        <td><strong>${datoTemporal.name}</strong></td>
        <td><strong>${datoTemporal.level}</strong></td></tr>
        `
    };
};

function postBoton() {
    document.getElementById("principal").style.display = "none";
    let inputBusqueda = document.getElementById("inputBusqueda");
    let botonBusqueda = document.getElementById("botonBusqueda");
    //botonBusqueda.addEventListener("click", function (){
    let terminoBusqueda = inputBusqueda.value;
    url = "https://digimon-api.vercel.app/api/digimon/name/" + terminoBusqueda;
    console.log(url);
    fetch("https://digimon-api.vercel.app/api/digimon/name/" + terminoBusqueda)
        .then(response => response.json())
        .then(resp => { crearCard(resp) });
};
function crearCard(resp) {
    alert("Funciona");
    let contenedor = document.getElementById("contenedor");
    contenedor.innerHTML = "";
    contenedor.innerHTML +=
        `
      <div class="card" style="width: 20rem;">
    
      <img src="${resp.img}" class="card-img-top" id="imagen" alt="...">
      <div class="card-body">
        <h2 id="nombre" class="card-title">${resp.name}</h2>
        <p id="nivel" class="card-text">${resp.level}</p>
      </div>
      <div class="card-body">
         <a href="https://digimon.fandom.com/wiki/${resp.name}" target="_blank" class="btn btn-primary">Más información</a>
      </div>
      </div>
      </div>
      <br>`
};
    //);
//};

