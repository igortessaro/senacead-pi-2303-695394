using DescomplicaGastos.Api.Commands;
using DescomplicaGastos.Api.Repository;
using DescomplicaGastos.Api.Repository.Entities;
using Microsoft.AspNetCore.Mvc;

namespace DescomplicaGastos.Api.Controllers;

[Route("api/[controller]")]
[ApiController]
public class UserController : ControllerBase
{
    private readonly IUserRespository _userRepository;

    public UserController(IUserRespository userRepository)
    {
        _userRepository = userRepository;
    }

    [HttpPost]
    public async Task<IActionResult> CreateAsync([FromBody] CreateUserCommand user)
    {
        var entity = new User(user.Name, user.Password);
        await _userRepository.AddAsync(entity);

        return Ok(entity);
    }

    [HttpGet("{name}")]
    public async Task<IActionResult> GetAsync(string name)
    {
        var user = await _userRepository.GetSingleAsync(x => x.Name.Equals(name, StringComparison.CurrentCultureIgnoreCase));
        return Ok(user);
    }
}
