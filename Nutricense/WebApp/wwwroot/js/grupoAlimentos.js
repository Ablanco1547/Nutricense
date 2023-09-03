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
                let input = busquedaAlimentoInput.value.toLowerCase()
                return nombre.includes(input)
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




      /*
//VER CLASE Y ARREGLAR ESTA PICHA
    this.loadTable = function () {
        var ctrlActions = new ControlActions();

        //Ruta para extraer la data del API
        var urlService = ctrlActions.GetUrlApiService(this.ApiService + "/RetrieveAll");
        //definir columnas de extraccion del JSON de la tabla (los nombres deben ser iguales al json)
        var columns = [
            columns[0] = { data: "id" },
            columns[1] = { data: "nombre" },
            columns[2] = { data: "grupoAlimenticio" },
            columns[3] = { data: "tamannoPorcion" },
            columns[4] = { data: 'fuenteFibra' }
        ]

        //Por medio de Jquery convertimos la tabla normal en un datatable
        $('#tblAlimentos').dataTable({
            "ajax": {
                "url": urlService,
                "dataSrc": "",
            },
            "columns": columns
        });


    }*/
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