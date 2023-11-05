const string originsPolicy = "AllowAllOrigins";
var headersExposed = new[] { "Date", "Content-Type", "Content-Disposition", "Content-Length" };

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors(options =>
{
    options.AddPolicy(originsPolicy,
        b => b.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod().WithExposedHeaders(headersExposed));
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.UseCors(originsPolicy);
app.MapControllers();
app.Run();
