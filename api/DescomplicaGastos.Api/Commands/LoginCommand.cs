namespace DescomplicaGastos.Api.Commands;

public sealed class LoginCommand
{
    public string UserName { get; set; } = string.Empty;
    public string Password { get; set; } = string.Empty;
}

