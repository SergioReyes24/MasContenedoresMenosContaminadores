let slider = document.querySelector(".slider-contenedor");
let sliderIndividual = document.querySelectorAll(".contenido-slider");
let contador = 1;
let width = sliderIndividual[0].clientWidth;
let intervalo = 3000;
const enlaces = document.getElementsByClassName("enlaces")[0];
const iconoMenu = document.getElementsByClassName("IconoMenu")[0];
const Icono = document.getElementById("Icono");
let abierto = false;

//  Evento de ventana para ajustar el tamaño según la resolución
window.addEventListener("resize", function(){   
    width = sliderIndividual[0].clientWidth;
});

setInterval(function(){
    slides();
},intervalo);

function slides(){
    slider.style.transform = "translate(" + (-width*contador) + "px)";
    slider.style.transition = "transform 0.5s";
    contador++;

    if(contador == sliderIndividual.length){
        setTimeout(function(){
            slider.style.transform = "translate(0px)";
            slider.style.transition = "transform 0s";
        contador = 1;   
        },1500);
    };
};

// Cambio de clase cuando se realice un scroll en el header 
window.addEventListener("scroll", function(){   
    let Header = document.querySelector("header");
    Header.classList.toggle("abajo", window.scrollY > 0);
});

// Menu desplegable
const ToggleMenu = () => {  //  Función encargada de cambiar la clase y darle una transición
    enlaces.classList.toggle("enlaces2");
    enlaces.style.transition = "transform 0.5s ease-in-out";
};

iconoMenu.addEventListener("click", function(){
    ToggleMenu();
    if(document.querySelector(".enlaces.enlaces2")){    //  Si existe una etiqueta con estás dos clases cambia el valor de la variable
        abierto = true;
    }else {
        abierto = false;
    };
});

window.addEventListener("click", function(e){   //  Evento que cuando se le da click en cualquier parte fuera del icono del menú se siga ejecutando
    if(abierto){
        if(e.target !== Icono){
            ToggleMenu();
            abierto = false;
        };
    };
});

window.addEventListener("resize", function(){ //    Cuando la pantalla tiene una anchura mayor a 900 pixeles no se activa el menú porque estará en horizontal
    if(screen.width > 900){
        if(abierto){
            ToggleMenu();
            enlaces.style.transition = "none";
            abierto = false;
        };
    };
});