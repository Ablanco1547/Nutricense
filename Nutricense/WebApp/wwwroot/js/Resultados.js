
function EvaluacionController() {
    this.ApiService = "Cliente";
    this.InitView = function () {



        const objCliente = JSON.parse(localStorage.getItem('objresultado'));

        tablaResultados = document.querySelector('#tblResultados');


        const btnCalcular = document.querySelector('#btnCalcular');



     
    }



}





$(document).ready(function () {
    var view = new EvaluacionController();
    view.InitView();


});