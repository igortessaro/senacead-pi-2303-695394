using System.ComponentModel.DataAnnotations;

namespace DescomplicaGastos.Api.Commands;

public sealed class LoginCommand
{
    [Required]
    public string UserName { get; set; } = string.Empty;
    [Required]
    public string Password { get; set; } = string.Empty;
}

