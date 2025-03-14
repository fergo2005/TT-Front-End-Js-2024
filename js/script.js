console.log("ESTA ACTIVO JS");

//PODRIA VENIR DE UN JSON

const habitaciones = [
    {
        imagen: "img/twin-4.jpg",
        tipo: "Single",
        servicios: [" Tv de pantalla plana", "Wi-Fi gratis", "Aire acondicionado", "Calefacción", "Desayuno bufet"],
        clasificacion: 8,
        precio: 100000,
        disponibilidad: 1
    },
    {
        imagen: "img/doble-twing-06.jpg",
        tipo: "Doble twin",
        servicios: [" Tv de pantalla plana", "Wi-Fi gratis", "Aire acondicionado", "Calefacción", "Desayuno bufet"],
        clasificacion: 9,
        precio: 200000,
        disponibilidad: 2
    },
    {
        imagen: "img/doble-matrim03.jpg",
        tipo: "Doble matrimonial",
        servicios: [" Tv de pantalla plana", "Wi-Fi gratis", "Aire acondicionado", "Calefacción", "Desayuno bufet"],
        clasificacion: 9,
        precio: 250000,
        disponibilidad: 3
    },
]

/* 
{
    imagen: "img/cuadruple-05.jpg",
    tipo: "Triple Twin",
    servicios: [" Tv de pantalla plana","Wi-Fi gratis", "Aire acondicionado", "Calefacción", "Desayuno bufet"],
    clasificacion: 8,
    precio: 280000,
    disponibilidad: 8
},
{
    imagen: "img/triple-03-1.jpg",
    tipo: "Triple Mat + 1",
    servicios: [" Tv de pantalla plana","Wi-Fi gratis", "Aire acondicionado", "Calefacción", "Desayuno bufet"],
    clasificacion: 9,
    precio: 320000,
    disponibilidad: 2
},
{
    imagen: "img/cuadruple-04.jpg",
    tipo: "Cuadruple",
    servicios: [" Tv de pantalla plana","Wi-Fi gratis", "Aire acondicionado", "Calefacción", "Desayuno bufet"],
    clasificacion: 9,
    precio: 400000,
    disponibilidad: 1
}
*/


/* {
    imagen: "img/cuadruple-04.jpg",
    tipo: "Quinta",
    servicios: ["Tv de panta plana", "algo mas 2", "Algo mas 3"],
    clasificacion: 7,
    precio: 500000,
    disponibilidad: 0
} */


//Creamos una variable cadena (habitacionesHtml)

//armamos la cadena que vamos a asignar a esa variable con los acentos franceses o invertidos (`)

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
                    <p class="h-servicios"><i>icon </i>${habitaciones[i].servicios[0]}</p>
                    <p class="h-servicios"><i>icon </i>${habitaciones[i].servicios[1]}</p>
                    <p class="h-servicios"><i>icon </i>${habitaciones[i].servicios[2]}</p>
                    <p class="h-servicios"><i>icon </i>${habitaciones[i].servicios[3]}</p>
                    <p class="h-servicios"><i>icon </i>${habitaciones[i].servicios[4]}</p>
                    
                </div>
                <div class="target-hab-info2">
                    <p class="h-valoracion">${habitaciones[i].clasificacion} Puntos </p 
                    <p class="h-valoracion">
                        <span>
                            <i class="fa-solid fa-star" style="color: #FFD438;"></i>
                            <i class="fa-solid fa-star" style="color: #FFD438;"></i>
                            <i class="fa-solid fa-star" style="color: #FFD438;"></i>
                            <i class="fa-solid fa-star" style="color: #FFD438;"></i>
                            <i class="fa-solid fa-star" style="color: #FFD438;"></i>
                        </span>                        
                    </p>                      
                    
                    <p class="h-desde">DESDE   $</p>
                    <p class="h-precio">${habitaciones[i].precio}</p>
                    
                </div>
            </div>
        </div>
    `
}

/* tomamos el elemento div id habitaciones */
const contenedorDeHabitaciones = document.getElementById("contenedor_habitaciones");
/* A su contenido lo editamos agregandole lo que armamos */
contenedorDeHabitaciones.innerHTML = habitacionesHtml;




// para seccion de disponibles


let habitacionesDisponiblesHtml = "";
let cantDisponibles = 0;
console.log(cantDisponibles)

for (let i = 0; i < habitaciones.length; i++) {

    if (habitaciones[i].disponibilidad != 0) {
        cantDisponibles += 1;
        habitacionesDisponiblesHtml += `
        <div class="target-habitacion">
            <div class="target-hab-img">
                <img src=${habitaciones[i].imagen} alt="No carga">
            </div>
            <div class="target-hab-info">  
                <div class="target-hab-info1">
                    <p class="h-tipo">${habitaciones[i].tipo}</p>                    
                    <p class="h-servicios"><i>icon </i>${habitaciones[i].servicios[0]}</p>
                    <p class="h-servicios"><i>icon </i>${habitaciones[i].servicios[1]}</p>
                    <p class="h-servicios"><i>icon </i>${habitaciones[i].servicios[2]}</p>
                    <p class="h-servicios"><i>icon </i>${habitaciones[i].servicios[3]}</p>
                    <p class="h-servicios"><i>icon </i>${habitaciones[i].servicios[4]}</p>
                    
                </div>
                <div class="target-hab-info2">
                    
                    <p class="h-valoracion">
                        <span>
                            <i class="fa-solid fa-star" style="color: #FFD438;"></i>
                            <i class="fa-solid fa-star" style="color: #FFD438;"></i>
                            <i class="fa-solid fa-star" style="color: #FFD438;"></i>
                            <i class="fa-solid fa-star" style="color: #FFD438;"></i>
                            <i class="fa-solid fa-star" style="color: #FFD438;"></i>
                        </span>                        
                    </p>        

                    <p class="h-desde">DISPONIBLE(S)</p>
                    
                    <p class="h-precio">${habitaciones[i].disponibilidad}</p>
                    
                    <div class="div-enlace-res">
                        <input class="btn-reservar" type="button" value="RESERVAR">                        
                    </div>

                </div>
            </div>
        </div>
    `
    };

}

/* tomamos la seccion por id habitacionesDisponibles */
const contenedorDeHabitacionesDisponibles = document.getElementById("contenedor_habitaciones_disponibles");
/* Y a su contenido lo editamos agregandole lo que armamos */
contenedorDeHabitacionesDisponibles.innerHTML = habitacionesDisponiblesHtml;


if (cantDisponibles == 0) {
    const textoSegunDisponibilidad = document.getElementById("segun_disponibilidad");
    textoSegunDisponibilidad.innerHTML = `<p class="titulo-red">Sin disponibilidad AHORA</p>`;
    console.log(cantDisponibles);
}
else {
    const textoSegunDisponibilidad = document.getElementById("segun_disponibilidad");
    textoSegunDisponibilidad.innerHTML = `<p class="titulo-red">Disponibles AHORA</p>`;

}



//Vamos a dar funcionalidad a los botones reservar


//Seleccionamos todos lo botones de la clase btn-reservar
/* Botones reservar de cada habitacion */
const botonesReservar = document.querySelectorAll(".btn-reservar");
console.log(botonesReservar);


/* Agregamos un listener a los botones reservar de las habitaciones */

/* Guardamos en variables los elementos que vamos a trabajar */

/* La lista donde vamos a colocar las habitaciones a reservar */

//Variable para el div con id contenedor_habitaciones_a_reservar ul
const listaHabitacionesAReservar = document.querySelector("#contenedor_habitaciones_a_reservar ul");
console.log(listaHabitacionesAReservar);

//Variable para el elemento con id valor_reserva es un parrafo
const textoValorReserva = document.getElementById("texto_valor_reserva");
console.log("Texto valor reserva " + textoValorReserva);


/* tomamos el elemento div id habitaciones a reservar */

/* const contenedorDeHabitacionesAReservar = document.getElementById("contenedor_habitaciones_a_reservar"); */



/* pendiente */
/* tomo el elemento div id habit a reservar */
/* const contenedorHabitacionesAReservar = document.getElementById("contenedor_habitaciones_a_reservar");
contenedorHabitacionesAReservar.innerHTML = habitacionesAReservar; */

let valorTotalReserva = 0;
console.log("valor Total Reserva " + valorTotalReserva);
/* agregamos el lidtener a los botones ahora si */
for (let i = 0; i < botonesReservar.length; i++) {
    function agregarHabitacionAReservar() {
        console.log("hice clic en el boton de indice: " + i);


        const elementoLi = document.createElement("li");
        elementoLi.innerText = `Habitacion ${habitaciones[i].tipo}`;
        
        /* elementoLi.innerText = ` $  ${habitaciones[i].precio}`; */
        console.log(elementoLi);

        /*   listaParaReservar.appendChild(elementoLi) */
        listaHabitacionesAReservar.appendChild(elementoLi);

        valorTotalReserva += habitaciones[i].precio;
        console.log("valor Total Reserva " + valorTotalReserva);

        textoValorReserva.innerText = "Valor aproximado de la reserva: $ " + valorTotalReserva;
        console.log("Texto valor reserva " + textoValorReserva);
        
    }

    botonesReservar[i].addEventListener("click", agregarHabitacionAReservar);


}


// Agregar listener al boton limpiar

const botonLimpiarReserva = document.getElementById("limpiar_Reserva");
console.log(botonLimpiarReserva);

function limpiarReserva(){
    listaHabitacionesAReservar.innerHTML = "";
    textoValorReserva.innerHTML = "";
    valorTotalReserva = 0;
};

botonLimpiarReserva.addEventListener("click", limpiarReserva);

console.log("fin script-js");
