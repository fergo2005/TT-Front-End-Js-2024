console.log("ESTA ACTIVO JS");



const habitaciones = [
    {
        imagen: "../img/twin-4.jpeg",
        tipo: "Single",        
        servicios: "Tv de panta plana", 
        clasificacion: 9.5,
        precio: 100000,
        disponibilidad: 5
    },
    {
        imagen: "../img/doble-twing-06.jpeg",
        tipo: "Doble twin",
        servicios: "Tv de panta plana",
        clasificacion: 9.5,
        precio: 200000,
        disponibilidad: 10
    },
    {
        imagen: "../img/doble-matrim03.jpeg",
        tipo: "Doble matrimonial",
        servicios: "Tv de panta plana",
        clasificacion: 9.5,
        precio: 250000,
        disponibilidad: 10
    },
    {
        imagen: "../img/cuadruple-05.jpeg",
        tipo: "Triple Twin",
        servicios: "Tv de panta plana",    
        clasificacion: 9.5,
        precio: 280000,
        disponibilidad: 8
    },
    {
        imagen: "../img/triple-03-1.jpeg",
        tipo: "Triple Mat + 1",
        servicios: "Tv de panta plana",
        clasificacion: 9.5,
        precio: 320000,
        disponibilidad: 2
    },
    {
        imagen: "../img/cuadruple-04.jpeg",
        tipo: "Cuadruple",
        servicios: "Tv de panta plana",     
        clasificacion: 9.5,
        precio: 400000,
        disponibilidad: 1
    }
]





let habitacionesHtml= "";
for (let i = 0; i<habitaciones.length; i++) {
    habitacionesHtml += `
        <div class="target-habitacion">
            <div class="target-hab-img">
                <img src=${habitaciones[i].imagen} alt="No carga">
            </div>
            <div class="target-hab-info">  
                <div class="target-hab-info1">
                    <p class="h-tipo">${habitaciones[i].tipo}</p>
                    <p class="h-servicios">Tv de pantalla plana</p>
                    <p class="h-servicios">${habitaciones[i].servicios}</p>
                    
                </div>
                <div class="target-hab-info2">
                    <p class="h-valoracion">${habitaciones[i].clasificacion}</p>
                    <p class="h-desde">DESDE $</p>
                    <p class="h-precio">${habitaciones[i].precio}</p>
                    <p class="h-disponibles">${habitaciones[i].disponibilidad}</p>
                    <div class="div-enlace-res">
                        <a class="t-enlace-res" href="#">Reservar</a>
                    </div>
                </div>
            </div>
        </div>    
`
}



/* tomamos el elemento div id habitaciones */
const containerHabitaciones = document.getElementById("contenedorHabitaciones");
/* A su contenido lo editamos agregandole lo que armamos */
 containerHabitaciones.innerHTML = habitacionesHtml;

