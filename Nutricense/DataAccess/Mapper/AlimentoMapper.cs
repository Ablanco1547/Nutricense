using DataAccess.DAO;
using DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Mapper
{
    public class AlimentoMapper
    {

        public SqlOperation GetRetrieveAllStatement()
        {
            var sqlOperation = new SqlOperation();
            sqlOperation.ProcedureName = "RET_ALL_ALIMENTOS_PR";
            return sqlOperation;
        }

        public BaseDTO BuildObject(Dictionary<string, object> row)

        {
            //Basado en la composicion de la fila en la base de datos construimos el objeto en POO
            var alimentoDTO = new Alimento
            {
                Id = (int)row["Id"],
                Nombre = (string)row["Nombre"],
                FuenteFibra = (string)row["FuenteFibra"],
                GrupoAlimenticio = (string)row["GrupoAlimenticio"],
                TamannoPorcion = (string)row["TamannoPorcion"]

            };
            return alimentoDTO;

        }

        public List<BaseDTO> BuildObjects(List<Dictionary<string, object>> lstRows)
        {
            var lstResults = new List<BaseDTO>();
            foreach (var item in lstRows)
            {
                var alimentoDTO = BuildObject(item);
                lstResults.Add(alimentoDTO);
            }

            return lstResults;

        }
    }
}
