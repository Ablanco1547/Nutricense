using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTOs
{
    public class Alimento : BaseDTO
    {
        public string Nombre { get; set; }
        public string FuenteFibra { get; set; }
        public string GrupoAlimenticio { get; set; }
        public string TamannoPorcion { get; set; }

    }
}
