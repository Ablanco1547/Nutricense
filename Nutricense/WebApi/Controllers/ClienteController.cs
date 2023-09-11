using DTOs;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{


    [Route("api/[controller]")]
    [ApiController]


    public class ClienteController : ControllerBase
    {


        [HttpPost]
        [Route("Create")]

        public async Task<IActionResult> Create (Cliente cliente)
        {
            try
            {
                var cm = new ClienteManager();
                cm.Create(evento);

                return Ok(cliente);
            }catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
