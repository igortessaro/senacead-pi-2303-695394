using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace DescomplicaGastos.Api.Repository.Entities;

public sealed class User
{
    public User(string name, string password)
    {
        Name = name;
        Password = password;
        Uuid = Guid.NewGuid();
    }

    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string Id { get; set; }
    public Guid Uuid { get; set; }
    public string Name { get; set; }
    public string Password { get; set; }
}
