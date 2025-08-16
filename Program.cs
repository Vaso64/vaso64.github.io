using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using Portfolio;
using Portfolio.Services;

var builder = WebAssemblyHostBuilder.CreateDefault(args);
builder.RootComponents.Add<App>("#app");
builder.RootComponents.Add<HeadOutlet>("head::after");

builder.Services.AddSingleton(sp => new HttpClient { BaseAddress = new Uri(builder.HostEnvironment.BaseAddress) });
builder.Services.AddSingleton<IDataService, DataService>();


var host = builder.Build();

await using var scope = host.Services.CreateAsyncScope();
var dataService = scope.ServiceProvider.GetRequiredService<IDataService>();
await dataService.InitializeAsync();

await host.RunAsync();