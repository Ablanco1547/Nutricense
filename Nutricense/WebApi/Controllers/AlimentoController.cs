using Core;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{

    [Route("api/[controller]")]
    [ApiController]



    public class AlimentoController : ControllerBase
    {
        [HttpGet]

        [Route("retrieveAll")]
        public async Task<IActionResult> RetrieveAll()
        {
            try
            {
                var am = new AlimentoManager();
                var results = am.RetrieveAll();

                return Ok(results);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

    }
}
