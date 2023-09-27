
function EvaluacionController() {
    this.ApiService = "Cliente";
    this.InitView = function () {

        const btnCalcular = document.querySelector('#btnCalcular');

        const btnVolver = document.querySelector('#btnVolver');
        
        btnCalcular.addEventListener('click', () => {

            let objCliente = JSON.parse(localStorage.getItem('objnosuscrito'));

            objCliente.Sexo = document.querySelector('#sexoSelect').value;
            objCliente.Peso = document.querySelector('#inputPeso').value;
            objCliente.Talla = document.querySelector('#inputTalla').value;
            objCliente.ActividadFisica = document.querySelector('#actividadFisicaSelect').value;




            let camposAValidar = document.querySelectorAll('input');
            let selectsAValidar = document.querySelectorAll('select');


            let validado = this.validarVacios(camposAValidar);
            let selectValidado = this.validarVacios(selectsAValidar);


            if (!validado || !selectValidado) {
                Swal.fire({
                    icon: 'error',
                    title: 'Llenar todos los campos',
                    text: 'Llenar todos los campos',
                    showCloseButton: true
                });
            } else {
                objCliente.TallaMts = this.calcularTallaMts(objCliente.Talla);

                objCliente.IMC = parseInt(this.calcularIMC(objCliente.Peso, objCliente.TallaMts).toFixed(2))



                if (objCliente.Edad >= 20 && objCliente.Edad < 65) {
                    objCliente.estadoIMC = this.comparacionIMCAdulto(objCliente.IMC);
                } else if (objCliente.Edad >= 65) {
                    objCliente.estadoIMC = this.comparacionIMCAdultoMayor(objCliente.IMC);
                } else {
                    objCliente.estadoIMC = "Compare con la hoja de curvas de la CCSS"
                }




                if (objCliente.Sexo == "Hombre") {
                    objCliente.ValorSexoMif = parseInt(5);
                } else if (objCliente.Sexo == "Mujer") {
                    objCliente.ValorSexoMif = parseInt(-161);
                }

                objCliente.TmbMifflin = this.calcularTMBMifflin(objCliente.Peso, objCliente.Talla, objCliente.Edad, objCliente.ValorSexoMif).toFixed(0)




                console.log(objCliente)
                this.crearCliente(objCliente)

            }






        })



        btnVolver.addEventListener('click', () => {

            window.location.href = "InformacionPersonal";
        } )
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

    this.crearCliente = async (pObjetoCliente) => {

        var ctrlActions = new ControlActions();
        var serviceToCreate = this.ApiService + `/Create`;

        ctrlActions.PostToAPI(serviceToCreate, pObjetoCliente, function (data) {



            localStorage.removeItem('objnosuscrito');

            localStorage.setItem('objresultado', JSON.stringify(pObjetoCliente))



            window.location.href = 'Resultados';


            console.log(data);

        })


    }

    this.calcularTallaMts = (pTallaCms) => {
        let resultadoMts = (pTallaCms / 100);
        return resultadoMts;
    }

    this.calcularIMC = (pPeso, pEstaturaMts) => {
        let potencia = Math.pow(pEstaturaMts, 2)
        let calculoIMC = pPeso / potencia;

        return calculoIMC
    };

    this.comparacionIMCAdulto = (pIMC) => {
        switch (true) {
            case pIMC >= 40:
                return "Obesidad 3"
                break;
            case pIMC >= 35:
                return "Obesidad 2"
                break;
            case pIMC >= 30:
                return "Obesidad 1"
                break;
            case pIMC >= 25:
                return "Sobrepeso"
                break;
            case pIMC >= 18.5:
                return "Normal"
                break;
            case pIMC >= 17:
                return "Peso bajo 1"
                break;
            case pIMC >= 16:
                return "Peso bajo 2"
                break;
            case pIMC < 16:
                return "Peso bajo 3"
                break;
        }

    };

    this.comparacionIMCAdultoMayor = (pIMC) => {
        switch (true) {
            case pIMC >= 40:
                return "Obesidad 3"
                break;
            case pIMC >= 35:
                return "Obesidad 2"
                break;
            case pIMC >= 30:
                return "Obesidad 1"
                break;
            case pIMC >= 27:
                return "Sobrepeso"
                break;
            case pIMC >= 22:
                return "Normal"
                break;
            case pIMC >= 18.5:
                return "Peso insuficiente"
                break;
            case pIMC >= 18.4:
                return "Desnutricion leve"
                break;
            case pIMC < 16.9:
                return "Desnutricion moderada"
                break;
            case pIMC < 16:
                return "Desnutricion severa"
                break;
        }


    }



    this.calcularTMBMifflin = (pPeso, pTallaCm, pEdad, pValorSexoMif) => {
        return (10 * pPeso) + (6.25 * pTallaCm) - (5 * pEdad) + pValorSexoMif;
    }








}





$(document).ready(function () {
    var view = new EvaluacionController();
    view.InitView();


});