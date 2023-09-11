using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core
{
    public class ClienteManager
    {
        public ClienteManager() { }
        public void Create(Cliente cliente)
        {
            var crud = new ClienteCrudFactory();
            crud.Create(cliente);
        }
    }
}
