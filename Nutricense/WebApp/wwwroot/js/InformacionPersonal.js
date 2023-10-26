
function EvaluacionController() {
    this.ApiService = "Cliente";
    this.InitView = function () {


        const objStorage = JSON.parse(localStorage.getItem('objnosuscrito'));
        const correoInput = document.querySelector('#inputCorreo');
        const nombreInput = document.querySelector('#inputNombre');
        const apellidosInput = document.querySelector('#inputApellidos');
        const edadInput = document.querySelector('#inputEdad');


        if (objStorage !== null) {
            correoInput.value = objStorage.Correo;
            nombreInput.value = objStorage.Nombre;
            apellidosInput.value = objStorage.Apellidos;
            edadInput.value = objStorage.Edad;
            
        }

        let btnSiguiente = document.querySelector('#btnSiguiente');

        btnSiguiente.addEventListener('click', () => {

            let objCliente = {};

            objCliente.Correo = correoInput.value;
            objCliente.Nombre = nombreInput.value;
            objCliente.Apellidos = apellidosInput.value;
            objCliente.Edad = edadInput.value;
           




            let camposAValidar = document.querySelectorAll('.requerido');
            let selectsAValidar = document.querySelectorAll('select');
            //let emailAValidar = document.querySelector('#inputCorreo');


            let validado = this.validarVacios(camposAValidar);
            let selectValidado = this.validarVacios(selectsAValidar);
            //let emailValidado = this.validarEmail(emailAValidar)


            if (!validado || !selectValidado) {
                Swal.fire({
                    icon: 'error',
                    title: 'Llenar todos los campos',
                    text: 'Llenar todos los campos',
                    showCloseButton: true
                });
            } /*else if (!emailValidado) {
                Swal.fire({
                    icon: 'error',
                    title: 'El formato del email debe ser correcto',
                    text: 'El email debe seguir el siguiente formato: ejemplo@ejemplo.com',
                    showCloseButton: true
                });
            } */else {
                localStorage.setItem('objnosuscrito', JSON.stringify(objCliente))
                sessionStorage.setItem('evaluacionAccess',true)
                window.location.href = "medidas";

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


}





$(document).ready(function () {
    var view = new EvaluacionController();
    view.InitView();


});