console.log("ESTA ACTIVO JS");



const habitaciones = [
    {
        imagen: "img/twin-4.jpg",
        tipo: "Single",
        servicios: [" Tv de pantalla plana hasta ", "Wi-Fi gratis"],
        clasificacion: 9,
        precio: 100000,
        disponibilidad: 5
    },
    {
        imagen: "img/doble-twing-06.jpg",
        tipo: "Doble twin",
        servicios: ["Tv de panta plana"],
        clasificacion: 9,
        precio: 200000,
        disponibilidad: 10
    },
    {
        imagen: "img/doble-matrim03.jpg",
        tipo: "Doble matrimonial",
        servicios: ["Tv de panta plana"],
        clasificacion: 9,
        precio: 250000,
        disponibilidad: 10
    },
    {
        imagen: "img/cuadruple-05.jpg",
        tipo: "Triple Twin",
        servicios: ["Tv de panta plana"],
        clasificacion: 8,
        precio: 280000,
        disponibilidad: 8
    },
    {
        imagen: "img/triple-03-1.jpg",
        tipo: "Triple Mat + 1",
        servicios: ["Tv de panta plana"],
        clasificacion: 9,
        precio: 320000,
        disponibilidad: 2
    },
    {
        imagen: "img/cuadruple-04.jpg",
        tipo: "Cuadruple",
        servicios: ["Tv de panta plana"],
        clasificacion: 9,
        precio: 400000,
        disponibilidad: 1
    },
    {
        imagen: "img/cuadruple-04.jpg",
        tipo: "Quinta",
        servicios: ["Tv de panta plana", "algo mas 2", "Algo mas 3"],
        clasificacion: 7,
        precio: 500000,
        disponibilidad: 0
    }

]





let habitacionesHtml = "";
for (let i = 0; i < habitaciones.length; i++) {
    habitacionesHtml += `
        <div class="target-habitacion">
            <div class="target-hab-img">
                <img src=${habitaciones[i].imagen} alt="No carga">
            </div>
            <div class="target-hab-info">  
                <div class="target-hab-info1">
                    <p class="h-tipo">${habitaciones[i].tipo}</p>                    
                    <p class="h-servicios">${habitaciones[i].servicios[0]}</p>
                    <p class="h-servicios">${habitaciones[i].servicios[1]}</p>
                    <p class="h-servicios">${habitaciones[i].servicios[2]}</p>
                    <p class="h-servicios">${habitaciones[i].servicios[3]}</p>
                    <p class="h-servicios">${habitaciones[i].servicios[4]}</p>
                </div>
                <div class="target-hab-info2">
                    <p class="h-valoracion">${habitaciones[i].clasificacion} </p>
                    <p class="h-valoracion"> ☆ ☆ ☆ ☆ ☆ </p>                      
                    <p class="h-desde">DESDE $</p>
                    <p class="h-precio">${habitaciones[i].precio}</p>
                    <p class="h-disponibles">Cant. ${habitaciones[i].disponibilidad}</p>
                    <div class="div-enlace-res">
                        <input type="button" class="btn-enlace-res" id="agregar-reserva" value="RESERVAR">
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

/* Agregamos un listener a los botones reservar de las habitaciones */
const botonesReservar = document.querySelectorAll