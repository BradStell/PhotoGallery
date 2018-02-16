using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PhotoGallery.Models;
using PhotoGallery.Services.Interfaces;
using Microsoft.Extensions.Logging;
using PhotoGallery.Repositories.Interfaces;

namespace PhotoGallery.Repositories
{
    public class ImageRepository : IImageRepository
    {
        private readonly ApplicationDbContext _db;
        private readonly ILogger _logger;

        public ImageRepository(ApplicationDbContext context, ILogger<ImageRepository> logger)
        {
            _db = context;
            _logger = logger;
        }

        public List<Image> GetCarouselImages()
        {
            try
            {
                return _db.Images.Where(image => image.IsCarouselImage == true).ToList();
            }
            catch (Exception ex)
            {
                _logger.LogError("Error", ex);
                return null;
            }
        }

        public List<Image> GetImagesInGallery(Guid galleryId)
        {
            try
            {
                return _db.Images.Where(image => image.Gallery_Id == galleryId).ToList();
            }
            catch (Exception ex)
            {
                _logger.LogError("Error", ex);
                return null;
            }
        }

        public void UploadNewImage(Image image)
        {
            _db.Images.Add(image);
            _db.SaveChanges();
        }
    }
}