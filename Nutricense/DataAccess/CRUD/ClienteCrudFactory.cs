using DataAccess.DAO;
using DataAccess.Mapper;
using DTOs;
using NPOI.SS.Formula.Functions;
using System;
using System.Collections.Generic;
using System.Data.SqlTypes;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.CRUD
{
    public class ClienteCrudFactory : CrudFactory
    {
        ClienteMapper _mapper;

        public ClienteCrudFactory()
        {
            _dao = SqlDao.GetInstance();
            _mapper = new ClienteMapper();
        }

        public override void Create(BaseDTO dto)
        {


            var cliente = (Cliente)dto;
            //Buscamos el sql operation a utilizar para crear el registro en DB

            var sqlOperation = _mapper.GetCreateStatement(cliente);

            //Le indicamos al dao que ejecute la operacion

             _dao.ExecuteProcedure(sqlOperation);


        }

        public override void Delete(BaseDTO dto)
        {
            throw new NotImplementedException();
        }

        public override T Retrieve<T>()
        {
            throw new NotImplementedException();
        }

        public override List<T> RetrieveAll<T>()
        {
            throw new NotImplementedException();
        }

        public override List<T> RetrieveAllByEmail<T>(BaseDTO dto)
        {
            throw new NotImplementedException();
        }

        public override T RetrieveById<T>(int id)
        {
            throw new NotImplementedException();
        }

        public override void Update(BaseDTO dto)
        {
            throw new NotImplementedException();
        }
    }
}
