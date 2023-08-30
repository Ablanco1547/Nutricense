using DataAccess.CRUD;
using DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core
{
    public class AlimentoManager
    {

        public List<Alimento> RetrieveAll()
        {
            var crud = new AlimentoCrudFactory();
            return crud.RetrieveAll<Alimento>();
        }
    }
}
