using DescomplicaGastos.Api.Repository.Entities;
using MongoDB.Driver;
using System.Linq.Expressions;

namespace DescomplicaGastos.Api.Repository;

public sealed class UserRepository : IUserRespository
{
    private readonly IMongoCollection<User> _users;

    public UserRepository(MongoContext dbContext)
    {
        this._users = dbContext.Database.GetCollection<User>(MongoCollectionNames.Users);
    }

    public async Task AddAsync(User obj)
    {
        await this._users.InsertOneAsync(obj);
    }

    public async Task DeleteAsync(Expression<Func<User, bool>> predicate)
    {
        _ = await _users.DeleteOneAsync(predicate);
    }

    public IQueryable<User> GetAll()
    {
        return this._users.AsQueryable();
    }

    public async Task<User> GetSingleAsync(Expression<Func<User, bool>> predicate)
    {
        var filter = Builders<User>.Filter.Where(predicate);
        return (await this._users.FindAsync(filter)).FirstOrDefault();
    }

    public async Task<User> UpdateAsync(User obj)
    {
        var filter = Builders<User>.Filter.Where(x => x.Id == obj.Id);

        var updateDefBuilder = Builders<User>.Update;
        var updateDef = updateDefBuilder.Combine(new UpdateDefinition<User>[]
        {
                updateDefBuilder.Set(x => x.Name, obj.Name),
                updateDefBuilder.Set(x => x.Password, obj.Password)
        });
        await this._users.FindOneAndUpdateAsync(filter, updateDef);

        return await this._users.FindOneAndReplaceAsync(x => x.Id == obj.Id, obj);
    }
}
