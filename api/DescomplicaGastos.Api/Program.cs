using DescomplicaGastos.Api.Options;
using DescomplicaGastos.Api.Repository;

const string originsPolicy = "AllowAllOrigins";
var headersExposed = new[] { "Date", "Content-Type", "Content-Disposition", "Content-Length" };

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
_ = builder.Services.AddScoped<IUserRespository, UserRepository>();

_ = builder.Services.AddControllers();
_ = builder.Services.AddEndpointsApiExplorer();
_ = builder.Services.AddSwaggerGen();
_ = builder.Services.AddCors(options =>
{
    options.AddPolicy(originsPolicy,
        b => b.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod().WithExposedHeaders(headersExposed));
});
_ = builder.Services.Configure<DatabaseSettings>(builder.Configuration.GetSection("MongoConnection"));
_ = builder.Services.AddScoped<MongoContext>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

_ = app.UseHttpsRedirection();
_ = app.UseAuthorization();
_ = app.UseCors(originsPolicy);
_ = app.MapControllers();

app.Run();
