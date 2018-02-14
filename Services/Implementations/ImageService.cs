using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PhotoGallery.Models;
using PhotoGallery.Services.Interfaces;
using Microsoft.Extensions.Logging;
using PhotoGallery.Repositories.Interfaces;

namespace PhotoGallery.Services.Implementations
{
    public class ImageService : IImageService
    {
        private readonly IImageRepository _imageRepository;
        private readonly ILogger _logger;

        public ImageService(IImageRepository imageRepository, ILogger<ImageService> logger)
        {
            _imageRepository = imageRepository;
            _logger = logger;
        }

        public List<Image> GetCarouselImages()
        {
            try
            {
                return _imageRepository.GetCarouselImages();
            }
            catch (Exception ex)
            {
                // TODO figure out logging
                _logger.LogError("Error", ex);
                return null;
            }

        }

        public List<Image> GetImagesInGallery(Guid galleryId)
        {
            try
            {
                return _imageRepository.GetImagesInGallery(galleryId);
            }
            catch (Exception ex)
            {
                // TODO figure out logging
                _logger.LogError("Error", ex);
                return null;
            }
        }

        public void UploadNewImage(Image image)
        {
            // _db.Images.Add(image);
            // _db.SaveChanges();
        }
    }
}