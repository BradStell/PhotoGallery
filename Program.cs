using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.DependencyInjection;
using PhotoGallery.Models;

namespace PhotoGallery
{
    public class Program
    {
        public static void Main(string[] args)
        {
            // This will be the code to use
            // other code is temp for seeding db with fake data using DI manually using service provider
            //BuildWebHost(args).Run();


            // For manually using DI with service provider just for seeding db with SeedTestData class
            // for fake data load for now
            var host = BuildWebHost(args);

            using (var scope = host.Services.CreateScope())
            {
                var services = scope.ServiceProvider;

                try
                {
                    // Requires using MvcMovie.Models;
                    SeedTestData.Initialize(services);
                }
                catch (Exception ex)
                {
                    var logger = services.GetRequiredService<ILogger<Program>>();
                    logger.LogError(ex, "An error occurred seeding the DB.");
                }
            }

            host.Run();
        }

        public static IWebHost BuildWebHost(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>()
                //.UseContentRoot(Directory.GetCurrentDirectory())
                .Build();
    }
}
