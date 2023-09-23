
function EvaluacionController() {
    this.ApiService = "Cliente";
    this.InitView = function () {

        let btnCalcular = document.querySelector('#btnCalculo');

        btnCalcular.addEventListener('click', () => {

            let objCliente = {};

            objCliente.Correo = document.querySelector('#inputCorreo').value;
            objCliente.Nombre = document.querySelector('#inputNombre').value;
            objCliente.Apellidos = document.querySelector('#inputApellidos').value;
            objCliente.Sexo = document.querySelector('#sexoSelect').value;
            objCliente.Peso = document.querySelector('#inputPeso').value;
            objCliente.Talla = document.querySelector('#inputTalla').value;
            objCliente.Edad = document.querySelector('#inputEdad').value;
            objCliente.ActividadFisica = document.querySelector('#actividadFisicaSelect').value;




            let camposAValidar = document.querySelectorAll('input');
            let selectsAValidar = document.querySelectorAll('select');
            let emailAValidar = document.querySelector('#inputCorreo');


            let validado = this.validarVacios(camposAValidar);
            let selectValidado = this.validarVacios(selectsAValidar);
            let emailValidado = this.validarEmail(emailAValidar)


            if (!validado || !selectValidado) {
                Swal.fire({
                    icon: 'error',
                    title: 'Llenar todos los campos',
                    text: 'Llenar todos los campos',
                    showCloseButton: true
                });
            } else if (!emailValidado) {
                Swal.fire({
                    icon: 'error',
                    title: 'El formato del email debe ser correcto',
                    text: 'El email debe seguir el siguiente formato: ejemplo@ejemplo.com',
                    showCloseButton: true
                });
            } else {

                this.crearCliente(objCliente)
            }






        })

    }

    this.validarVacios = (campos) => {
        let validado = false;
        let falsos = 0;
        campos.forEach(campo => {

            if (campo.value == '') {
                campo.classList.add('is-invalid');
                campo.style = 'border-color: #ff7851!important';
                falsos++;
            } else {
                campo.classList.remove('is-invalid');
                campo.style = 'border-color: #5a5a5a!important';

            }
        })

        if (falsos > 0) {
            validado = false
        } else {
            validado = true
        }
            
        return validado
    }

    this.validarEmail = (campo) => {
        let validado = false;
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        let test = emailPattern.test(campo.value);
        if (test == true) {
            campo.classList.remove('is-invalid');
            campo.style = 'border-color: #5a5a5a!important';
            validado = true;
        } else {
            campo.classList.add('is-invalid');
            campo.style = 'border-color: #ff7851!important';
            validado = false;

        }

        return validado;

    }

    this.crearCliente = (pObjetoCliente) => {

        var ctrlActions = new ControlActions();
        var serviceToCreate = this.ApiService + `/Create`;

        ctrlActions.PostToAPI(serviceToCreate, pObjetoCliente, function (data) {



            Swal.fire({
                icon: 'success',
                title: 'Se creo la vara',
                text: 'Llenar todos los campos',
                showCloseButton: true
            });
            
            console.log(data);

        })


    }


}





$(document).ready(function () {
    var view = new EvaluacionController();
    view.InitView();


});