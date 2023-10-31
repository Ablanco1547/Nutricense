const grupoAlimentosMdl = document.querySelector("#grupoAlimentosMdl");
const beneficiosMdl = document.querySelector("#beneficiosMdl");
const recomendacionesMdl = document.querySelector("#recomendacionesMdl");

const grupoAlimentosBtn = document.querySelector("#grupoAlimentosBtn");
const beneficiosBtn = document.querySelector("#beneficiosBtn");
const recomendacionesBtn = document.querySelector("#recomendacionesBtn");


const imgArticuloAlimentos = document.querySelector("#imgArticuloAlimentos");
const imgArticuloEjercicio = document.querySelector("#imgArticuloEjercicio");
const imgArticuloFibra = document.querySelector("#imgArticuloFibra");


grupoAlimentosBtn.addEventListener('click', function () {

    grupoAlimentosMdl.style.display = 'block';


})

imgArticuloAlimentos.addEventListener('click', function () {

    grupoAlimentosMdl.style.display = 'block';


})


beneficiosBtn.addEventListener('click', function () {

    beneficiosMdl.style.display = 'block';


})

imgArticuloEjercicio.addEventListener('click', function () {

    beneficiosMdl.style.display = 'block';


})


recomendacionesBtn.addEventListener('click', function () {

    recomendacionesMdl.style.display = 'block';


})

imgArticuloFibra.addEventListener('click', function () {

    recomendacionesMdl.style.display = 'block';


})





window.onclick = function (event) {
    if (event.target == grupoAlimentosMdl || event.target == beneficiosMdl || event.target == recomendacionesMdl) {
        grupoAlimentosMdl.style.display = "none";
        beneficiosMdl.style.display = "none";
        recomendacionesMdl.style.display = "none";
    }
}

let btnCerrar = document.querySelectorAll('.btnCerrar');

btnCerrar.forEach(btn => {

    btn.onclick = function (event) {
            grupoAlimentosMdl.style.display = "none";
            beneficiosMdl.style.display = "none";
            recomendacionesMdl.style.display = "none";

    }

})

