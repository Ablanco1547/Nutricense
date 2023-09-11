using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTOs
{
    internal class MedidasVisitante : BaseDTO
    {

        public DateTime FechaCreacion { get; set; }
        public double Peso { get; set; }
        public int Edad { get; set; }

        public int ActivdadFisica { get; set; }

        public double IMC { get; set; }
        public int PesoIdeal { get; set; }
        public int RequerimientoCalorico { get; set; }
        
        public int PesoAjustadoIMC { get; set; }

    }
}
