$(document).ready(function(){
    let contenido=document.getElementById("listado");

fetch('https://digimon-api.vercel.app/api/digimon')
.then(response=>response.json())
.then(resp=>{crearListado(resp)});

function crearListado(resp){

    for(let datoTemporal of resp){
        contenido.innerHTML +=
        `
        <tr><td><img src=${datoTemporal.img} height="40" weight="40" id="imagen"></td>
        <td>${datoTemporal.name}</td>
        <td>${datoTemporal.level}</td></tr>
        `
    };
};});

$(document).ready(function(){
    let inputBusqueda=document.getElementById("inputBusqueda");
    let botonBusqueda=document.getElementById("botonBusqueda");
    botonBusqueda.addEventListener("click",()=>{
    let terminoBusqueda=inputBusqueda.value;
    console.log("El valor seleccionado es: " + terminoBusqueda);
    fetch("https://digimon-api.vercel.app/api/digimon/name/" + terminoBusqueda)

    .then(response=>response.json())
    .then(principal=>{borrarDiv(principal)})
    .then(data=>{crearCard(data)});

    function borrarDiv(){
        let principal=document.getElementById("principal");
        principal.removeChild();
    };

    function crearCard(data){
        let contenedor=document.getElementById("contenedor");
        contenedor.innerHTML ="";
        contenedor.innerHTML +=
      `
      <div class="card" style="width: 20rem;">
    
      <img src="${data.img}" class="card-img-top" id="imagen" alt="...">
      <div class="card-body">
        <h2 id="nombre" class="card-title">${data.name}</h2>
        <p id="nivel" class="card-text">${data.level}</p>
      </div>
      <div class="card-body">
        
        <a href="https://digimon.fandom.com/wiki/${data.name}" target="_blank" class="btn btn-primary">Más información</a>
      </div>
      </div>
      </div>
      <br>`
    };
    });
});