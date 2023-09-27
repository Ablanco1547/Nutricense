using DataAccess.DAO;
using DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Mapper
{
    public class ClienteMapper
    {

        public SqlOperation GetCreateStatement (BaseDTO dto)
        {
            var sqlOperation = new SqlOperation();
            sqlOperation.ProcedureName = "CRE_CLIENTE_PR";

            var cliente = (Cliente)dto;

            sqlOperation.AddVarcharParam("P_NOMBRE", cliente.Nombre);
            sqlOperation.AddVarcharParam("P_CORREO", cliente.Correo);
            sqlOperation.AddDateTimeParam("P_FECHANACIMIENTO", DateTime.Now);
            sqlOperation.AddIntParam("P_TALLA", cliente.Talla);
            sqlOperation.AddIntParam("P_PESO", cliente.Peso);
            sqlOperation.AddVarcharParam("P_SEXO", cliente.Sexo);
            sqlOperation.AddVarcharParam("P_DIRECCION","Costa Rica");
            sqlOperation.AddVarcharParam("P_APELLIDOS", cliente.Apellidos);
            sqlOperation.AddIntParam("P_EDAD", cliente.Edad);

            return sqlOperation;
        }



        public BaseDTO BuildObject(Dictionary<string, object> row)

        {
            //Basado en la composicion de la fila en la base de datos construimos el objeto en POO
            var clienteDTO = new Cliente
            {
                Id = (int)row["Id"],
                Nombre = (string)row["Nombre"],
                Correo = (string)row["Correo"],
                Telefono = (string)row["Telefono"],
                FechaNacimiento = (DateTime)row["FechaNacimiento"],
                Talla = (int)row["Talla"],
                Peso = (int)row["Peso"],
                Sexo = (string)row["Sexo"],
                Direccion = (string)row["Direccion"],
                Apellidos = (string)row["Apellidos"],
                FechaRegistro = (DateTime)row["FechaRegistro"],
                Edad = (int)row["Edad"]
            };



            return clienteDTO;

        }




    }
}
