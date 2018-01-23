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
                // Use this to remove all items from db when adding new seed data
                // start app with this and saveContext un commented
                // comment back out and uncomment seed data and run app
                //_db.Images.RemoveRange(_db.Images);
                //_db.Galleries.RemoveRange(_db.Galleries);

                if (_db.Images.Any() || _db.Galleries.Any())
                {
                    return;   // DB has been seeded
                }

                Guid lafotenGuid = Guid.NewGuid();
                Guid dolomitesGuid = Guid.NewGuid();
                Guid charlotteGuid = Guid.NewGuid();

                _db.Images.AddRange(
                    new Image()
                    {
                        Id = lafotenGuid,
                        PathName = @"lafoten.jpg",
                        Title = @"Lafoten Islands",
                        IsCarouselImage = true,
                        Gallery = null
                    },
                    new Image()
                    {
                        Id = dolomitesGuid,
                        PathName = @"dolomites_landscape_photography_trecime_3.jpg",
                        Title = @"Dolomites Landscape",
                        IsCarouselImage = true,
                        Gallery = null
                    },
                    new Image()
                    {
                        Id = Guid.NewGuid(),
                        PathName = @"russian_winter.jpg",
                        Title = @"Russian Winter",
                        IsCarouselImage = true,
                        Gallery = null
                    },
                    new Image()
                    {
                        Id = Guid.NewGuid(),
                        PathName = @"dolomites_milkyway_photography_trecime_1.jpg",
                        Title = @"Dolomites Milkyway",
                        IsCarouselImage = true,
                        Gallery = null
                    },
                    new Image()
                    {
                        Id = charlotteGuid,
                        PathName = @"clt-pink.jpg",
                        Title = @"Charlotte Flamingo Sunset",
                        IsCarouselImage = true,
                        Gallery = null
                    }
                );

                _db.Galleries.AddRange(
                    new Gallery()
                    {
                        Id = Guid.NewGuid(),
                        Title = "Daniel Kordan",
                        CreateDateTime = new DateTime(),
                        CoverImage_Id = lafotenGuid
                    },
                    new Gallery()
                    {
                        Id = Guid.NewGuid(),
                        Title = "Michael Shainblum",
                        CreateDateTime = new DateTime(),
                        CoverImage_Id = dolomitesGuid
                    },
                    new Gallery()
                    {
                        Id = Guid.NewGuid(),
                        Title = "Charlotte",
                        CreateDateTime = new DateTime(),
                        CoverImage_Id = charlotteGuid
                    }
                );

                _db.SaveChanges();
            }
        }
    }
}
