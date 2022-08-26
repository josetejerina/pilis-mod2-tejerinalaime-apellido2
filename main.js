/* Envio de datos de formulario */
function onClick (event) {
  event.preventDefault();

  const mensaje = {
    comercio: document.getElementById('comercio').value,
    titular: document.getElementById('titular').value,
    celular: document.getElementById('celular').value
  }
  console.log(mensaje);

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(mensaje),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((response) => response.json())
    .then((json) => { 
        console.log(json);
        Swal.fire(
            'Enviado',
            'Gracias por su participación', 
            'success'
        );
        cleanForm();
    })
function cleanForm() {
    let formulario = document.getElementById('formulario');    
    formulario.reset();    
} 
}


let boton = document.getElementById("send");
boton.addEventListener("click", onClick); 

/* Informacion del clima */
async function getClima() {
try {
  /* Latitud y longitud de la Ciudad Cultural-S.S. de JUJUY donde se realizara el evento */
  const response = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=-24.18325&lon=-65.33134&appid=9e122cd782b2d0333f5fe4e7fa192062&lang=es');

  const data = await response.json();
  console.log(data);

  const city = document.getElementById('city');
  const date = document.getElementById('date');
  const temp = document.getElementById('temp');
  const weather = document.getElementById('weather');

  city.innerHTML = data.name;
  date.innerHTML = (new Date()).toLocaleDateString();
  temp.innerHTML = Math.round(data.main.temp - 273.15);
  weather.innerHTML = data.weather[0].description;
} catch {
  console.log("Algo paso, no se pudo resolver...");
}
}
getClima();

  
  
  
  
  

