using System.ComponentModel.DataAnnotations;

namespace DescomplicaGastos.Api.Commands;

public sealed class UpdateExpenseCommand
{
    [Required]
    public string Description { get; set; } = string.Empty;
    [Required]
    public decimal Value { get; set; }
    [Required]
    public string Category { get; set; } = string.Empty;
}
