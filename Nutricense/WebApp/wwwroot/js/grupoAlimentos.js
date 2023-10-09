function AlimentosController() {
    let arrayRespuesta;
    let busquedaAlimentoInput = document.querySelector('#busquedaAlimentoInput');
    this.ViewName = "Alimentos";
    this.ApiService = "Alimento";

    //Metodo para inicializar la vista
    this.InitView = function () {

        console.log("Alimento view init");
        this.traerDatosTabla()





        busquedaAlimentoInput.addEventListener('input', function () {



            let arrayFiltrado = arrayRespuesta.filter((alimento => {
                let nombre = alimento.nombre.toLowerCase();
                let grupo = alimento.grupoAlimenticio.toLowerCase();
                let input = busquedaAlimentoInput.value.toLowerCase();

                return nombre.includes(input) + grupo.includes(input);
            }))

            llenarTabla(arrayFiltrado)

        })


    }

    this.traerDatosTabla = async function () {
        let urlService = '/RetrieveAll'
        var ctrlActions = new ControlActions();

         await ctrlActions.GetToApi(this.ApiService + urlService, async function (response) {

            arrayRespuesta = response;       
             llenarTabla(arrayRespuesta)


        })

        return arrayRespuesta

    }





}
llenarTabla = function (arrayDatos) {
    let tableBody = tableBodyAlimentos;
    let tabla = document.querySelector('#tblAlimentos');

    tableBody.innerHTML = ''


    arrayDatos.forEach(objeto => {

        let tr = document.createElement('tr');

        let tdAlimento = document.createElement('td');
        let tdGrupo = document.createElement('td');
        let tdPorcion = document.createElement('td');
        let tdFibra = document.createElement('td');

        tdAlimento.innerHTML = objeto.nombre;
        tdGrupo.innerHTML = objeto.grupoAlimenticio;
        tdPorcion.innerHTML = objeto.tamannoPorcion;

        if (objeto.fuenteFibra == 'Si') {
            tdFibra.innerHTML = `${objeto.fuenteFibra} <span><i class="fa-solid fa-seedling" style="color: #2fb65c;"></i></span>`;
        } else {
            tdFibra.innerHTML = objeto.fuenteFibra;
        }
      


        tr.appendChild(tdAlimento)
        tr.appendChild(tdGrupo)
        tr.appendChild(tdPorcion)
        tr.appendChild(tdFibra)

        tableBody.appendChild(tr)
    })




}

  
//Instanciamiento inicial de la clase
//Siempre se ejecuta al finalizar la carga de la pagina
$(document).ready(function () {
    var view = new AlimentosController();
    view.InitView();
});