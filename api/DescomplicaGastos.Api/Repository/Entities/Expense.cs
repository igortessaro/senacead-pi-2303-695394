using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace DescomplicaGastos.Api.Repository.Entities;

public sealed class Expense
{
    public Expense(Guid userUuid, string description, decimal value, string category)
    {
        UserUuid = userUuid;
        Description = description;
        Value = value;
        CreatedAt = DateTime.UtcNow;
        Category = category;
    }

    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string Id { get; set; } = string.Empty;
    public Guid UserUuid { get; set; }
    public string Description { get; set; } = string.Empty;
    public decimal Value { get; set; }
    public string Category { get; set; } = string.Empty;
    public DateTime CreatedAt { get; set; }
}
