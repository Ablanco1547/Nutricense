let evaluacionAccess = sessionStorage.getItem('evaluacionAccess');

if (evaluacionAccess !== "trueResult" ) {
    window.location.href = "/EvaluacionNutricional/InformacionPersonal"
}
function EvaluacionController() {
    this.ApiService = "Cliente";
    this.InitView = function () {



        const objCliente = JSON.parse(localStorage.getItem('objresultado'));

        const tablaResultados = document.querySelector('#tblResultados');

        const resultadoIMC = document.querySelector('#resultadoIMC');
        const resultadoPesoIdeal = document.querySelector('#resultadoPesoIdeal');
        const resultadoRequerimiento = document.querySelector('#resultadoRequerimiento');
        const estadoIMC = document.querySelector('#estadoIMC');

        const nombreCliente = document.querySelector('#nombreCliente');

        const btnVolver = document.querySelector('#btnVolver');
        
        
        nombreCliente.innerHTML = `${objCliente.Nombre} ${objCliente.Apellidos}`

        resultadoIMC.innerHTML = `${objCliente.IMC} kg/m2 - ${objCliente.EstadoIMC} `;

        resultadoPesoIdeal.innerHTML = `${objCliente.PesoIdealImc} kgs `;

        resultadoRequerimiento.innerHTML = `${objCliente.VetMifflin} kcal `;

        btnVolver.addEventListener('click', function () {

            sessionStorage.setItem('evaluacionAccess', false)

            window.location.href = "/EvaluacionNutricional/InformacionPersonal";
        } )

        localStorage.removeItem('objresultado');

    }


}







$(document).ready(function () {



    var view = new EvaluacionController();
    view.InitView();


});