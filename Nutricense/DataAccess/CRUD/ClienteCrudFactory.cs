using DataAccess.DAO;
using DTOs;
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
            _dao = SqlDao.getInstance();
            _mapper = new ClienteMapper();
        }

        public override void Create(BaseDTO dto)
        {
            throw new NotImplementedException();
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
