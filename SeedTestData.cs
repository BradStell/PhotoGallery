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

                // Image Ids
                Guid lafotenGuid = Guid.NewGuid();
                Guid dolomitesGuid = Guid.NewGuid();
                Guid charlotteGuid = Guid.NewGuid();

                // Gallery Ids
                Guid danielKordanGalleryId = Guid.NewGuid();
                Guid shainblumGalleryId = Guid.NewGuid();
                Guid charlotteKordanGalleryId = Guid.NewGuid();

                _db.Images.AddRange(
                    new Image()
                    {
                        Id = lafotenGuid,
                        PathName = @"lafoten.jpg",
                        Title = @"Lafoten Islands CI",
                        IsCarouselImage = true
                    },
                    new Image()
                    {
                        Id = dolomitesGuid,
                        PathName = @"dolomites_landscape_photography_trecime_3.jpg",
                        Title = @"Dolomites Landscape CI",
                        IsCarouselImage = true
                    },
                    new Image()
                    {
                        Id = Guid.NewGuid(),
                        PathName = @"russian_winter.jpg",
                        Title = @"Russian Winter CI",
                        IsCarouselImage = true
                    },
                    new Image()
                    {
                        Id = Guid.NewGuid(),
                        PathName = @"dolomites_milkyway_photography_trecime_1.jpg",
                        Title = @"Dolomites Milkyway CI",
                        IsCarouselImage = true
                    },
                    new Image()
                    {
                        Id = charlotteGuid,
                        PathName = @"clt-pink.jpg",
                        Title = @"Charlotte Flamingo Sunset CI",
                        IsCarouselImage = true
                    },

                    new Image()
                    {
                        Id = Guid.NewGuid(),
                        PathName = @"lafoten.jpg",
                        Title = @"Lafoten Islands",
                        IsCarouselImage = false,
                        Gallery_Id = danielKordanGalleryId
                    },
                    new Image()
                    {
                        Id = Guid.NewGuid(),
                        PathName = @"dolomites_landscape_photography_trecime_3.jpg",
                        Title = @"Dolomites Landscape",
                        IsCarouselImage = false,
                        Gallery_Id = shainblumGalleryId
                    },
                    new Image()
                    {
                        Id = Guid.NewGuid(),
                        PathName = @"russian_winter.jpg",
                        Title = @"Russian Winter",
                        IsCarouselImage = false,
                        Gallery_Id = danielKordanGalleryId
                    },
                    new Image()
                    {
                        Id = Guid.NewGuid(),
                        PathName = @"dolomites_milkyway_photography_trecime_1.jpg",
                        Title = @"Dolomites Milkyway",
                        IsCarouselImage = false,
                        Gallery_Id = shainblumGalleryId
                    },
                    new Image()
                    {
                        Id = Guid.NewGuid(),
                        PathName = @"clt-pink.jpg",
                        Title = @"Charlotte Flamingo Sunset",
                        IsCarouselImage = false,
                        Gallery_Id = charlotteKordanGalleryId
                    }
                );

                _db.Galleries.AddRange(
                    new Gallery()
                    {
                        Id = danielKordanGalleryId,
                        Title = "Daniel Kordan",
                        CreateDateTime = new DateTime(),
                        CoverImage_Id = lafotenGuid
                    },
                    new Gallery()
                    {
                        Id = shainblumGalleryId,
                        Title = "Michael Shainblum",
                        CreateDateTime = new DateTime(),
                        CoverImage_Id = dolomitesGuid
                    },
                    new Gallery()
                    {
                        Id = charlotteKordanGalleryId,
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
