using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using PhotoGallery.Models;
using Microsoft.Extensions.DependencyInjection;

namespace PhotoGallery
{
    public static class SeedTestData
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            using (var _db = new ApplicationDbContext(serviceProvider.GetRequiredService<DbContextOptions<ApplicationDbContext>>()))
            {
                if (_db.Images.Any())
                {
                    return;   // DB has been seeded
                }

                _db.Images.AddRange(
                    new Image()
                    {
                        Id = new Guid(),
                        PathName = @"lafoten.jpg",
                        Title = @"Lafoten Islands",
                        IsCarouselImage = true,
                        Gallery = null
                    },
                    new Image()
                    {
                        Id = new Guid(),
                        PathName = @"dolomites_landscape_photography_trecime_3.jpg",
                        Title = @"Dolomites Landscape",
                        IsCarouselImage = true,
                        Gallery = null
                    },
                    new Image()
                    {
                        Id = new Guid(),
                        PathName = @"russian_winter.jpg",
                        Title = @"Russian Winter",
                        IsCarouselImage = true,
                        Gallery = null
                    },
                    new Image()
                    {
                        Id = new Guid(),
                        PathName = @"dolomites_milkyway_photography_trecime_1.jpg",
                        Title = @"Dolomites Milkyway",
                        IsCarouselImage = true,
                        Gallery = null
                    },
                    new Image()
                    {
                        Id = new Guid(),
                        PathName = @"clt-pink.jpg",
                        Title = @"Charlotte Flamingo Sunset",
                        IsCarouselImage = true,
                        Gallery = null
                    }
                );

                _db.SaveChanges();
            }
        }
    }
}

/*

using (var context = new MvcMovieContext(
                serviceProvider.GetRequiredService<DbContextOptions<MvcMovieContext>>()))
            {
                // Look for any movies.
                if (context.Movie.Any())
                {
                    return;   // DB has been seeded
                }

                context.Movie.AddRange(
                     new Movie
                     {
                         Title = "When Harry Met Sally",
                         ReleaseDate = DateTime.Parse("1989-1-11"),
                         Genre = "Romantic Comedy",
                         Price = 7.99M
                     },

                     new Movie
                     {
                         Title = "Ghostbusters ",
                         ReleaseDate = DateTime.Parse("1984-3-13"),
                         Genre = "Comedy",
                         Price = 8.99M
                     },

                     new Movie
                     {
                         Title = "Ghostbusters 2",
                         ReleaseDate = DateTime.Parse("1986-2-23"),
                         Genre = "Comedy",
                         Price = 9.99M
                     },

                   new Movie
                   {
                       Title = "Rio Bravo",
                       ReleaseDate = DateTime.Parse("1959-4-15"),
                       Genre = "Western",
                       Price = 3.99M
                   }
                );
                context.SaveChanges();
            }
*/