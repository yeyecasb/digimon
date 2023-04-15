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
    let dato=document.getElementById("Select1");

fetch('https://digimon-api.vercel.app/api/digimon')
.then(response=>response.json())
.then(resp=>{crearListado(resp)});

function crearListado(resp){

    for(let datoTemporal of resp){
        dato.innerHTML +=
        `
        <option>${datoTemporal.name}</option>
        `
    };
    let contenido=document.getElementById("contenido");
    select.addEventListener("change", function () {
    let selectedValue = select.options[select.selectedIndex].value;
    fetch("https://digimon-api.vercel.app/api/digimon/name"+selectedValue)
    .then(response => response.json())
    .then(resp =>{crearCard(resp)});
    function crearCard(resp){
        contenido.innerHTML +=
        `
        <img src="${resp.img}" class="card-img-top" id="foto" alt="...">
        <div class="card-body">
        <h4 id="name" class="card-title">${resp.name}</h4>
        <p id="level" class="card-text">${resp.level}</p>
      </div>
      <br>
        `
    };
    });
};});
/*let contenido=document.getElementById("contenido");

    select.addEventListener("change", function () {
    let selectedValue = select.options[select.selectedIndex].value;
    console.log("El valor seleccionado es: " + selectedValue);
    fetch("https://digimon-api.vercel.app/api/digimon/name"+selectedValue)
    .then(response => response.json())
    .then(data => {
      tarjeta(data)
    });
  });

  function tarjeta(data) {

    contenido.innerHTML = "";

    contenido.innerHTML +=
      `
      <div class="card" style="width: 20rem;">
    
      <img src="${data.img}" class="card-img-top" id="foto" alt="...">
      <div class="card-body">
        <h4 id="name" class="card-title">${data.name}</h4>
        <p id="level" class="card-text">${data.level}</p>
      </div>
      <br>
      `

  }


});

$(document).ready(function () {

  
  
    let select = document.getElementById("Select");
  
    select.addEventListener("change", function () {
      let selectedValue = select.options[select.selectedIndex].value;
      console.log("El valor seleccionado es: " + selectedValue);
      fetch("https://studio-ghibli-films-api.herokuapp.com/api/"+selectedValue)
      .then(response => response.json())
      .then(data => {
        tarjeta(data)
      });
    });
  
    function tarjeta(data) {
  
      informacion.innerHTML = "";
  
      informacion.innerHTML +=
        `
        <option>Escoge un digimon...</option>

        <div class="card" style="width: 20rem;">
      
        <img src="${data.poster}" class="card-img-top" id="foto" alt="...">
        <div class="card-body">
          <h4 id="titulo" class="card-title">${data.title}</h4>
          <p id="historia" class="card-text">${data.synopsis}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li id="tituloRomanizado" class="list-group-item"><strong>Título romanizado:</strong> ${data.hepburn}</li>
          <li id="anio" class="list-group-item"><strong>Año de estreno:</strong> ${data.release}</li>
          <li id="anio" class="list-group-item"><strong>Director:</strong> ${data.director}</li>
        
        </ul>
        <div class="card-body">
          
          <a href="${data.url}" target="_blank" class="btn btn-primary">Más información</a>
        </div>
        </div>
        </div>
        <br>
        `
  
    }
  
  });*/