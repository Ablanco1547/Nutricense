using DataAccess.DAO;
using DTOs;
using NPOI.SS.Formula.Functions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.CRUD
{
    public abstract class CrudFactory
    {
        protected SqlDao _dao;

        public abstract void Create(BaseDTO dto);
        public abstract T Retrieve<T>();

        public abstract T RetrieveById<T>(int id);

        public abstract List<T> RetrieveAll<T>();
        public abstract List<T> RetrieveAllByEmail<T>(BaseDTO dto);


        public abstract void Update(BaseDTO dto);

        public abstract void Delete(BaseDTO dto);

    }
}
