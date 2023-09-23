using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTOs
{
    public class Cliente : BaseDTO
    {
        public string Nombre { get; set; }
        public string Correo { get; set; }
        public string? Telefono { get; set; }

        public DateTime FechaNacimiento { get; set; }

        public int Talla { get; set; }

        public int Peso { get; set; }

        public int Edad { get; set; }
        public string Sexo { get; set; }

        public string? Direccion { get; set; }

        public string Apellidos { get; set; }

        public DateTime? FechaRegistro { get; set; }
    }
}
