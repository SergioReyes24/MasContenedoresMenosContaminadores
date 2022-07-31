let slider = document.querySelector(".slider-contenedor");
let sliderIndividual = document.querySelectorAll(".contenido-slider");
let contador = 1;
let width = sliderIndividual[0].clientWidth;
let intervalo = 3000;

//  Evento de ventana para ajustar el tamaño según la resolución
window.addEventListener("resize", function(){   
    width = sliderIndividual[0].clientWidth;
});

setInterval(function(){
    slides();
},intervalo);

function slides(){
    slider.style.transform = "translate(" + (-width*contador) + "px)";
    slider.style.transition = "transform .8s";
    contador++;

    if(contador == sliderIndividual.length){
        setTimeout(function(){
            slider.style.transform = "translate(0px)";
            slider.style.transition = "transform 0s";
        contador = 1;   
        },1500);
    }
};

// Cambio de clase cuando se realice un scroll  
window.addEventListener("scroll", function(){   
    let Header = document.querySelector("header");
    Header.classList.toggle("abajo", window.scrollY > 0);
});