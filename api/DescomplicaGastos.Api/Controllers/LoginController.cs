using DescomplicaGastos.Api.Commands;
using Microsoft.AspNetCore.Mvc;

namespace DescomplicaGastos.Api.Controllers;

[Route("api/[controller]")]
[ApiController]
public class LoginController : ControllerBase
{
    [HttpPost]
    public IActionResult FazerLogin([FromBody] LoginCommand login)
    {
        return Ok(login);
    }
}
