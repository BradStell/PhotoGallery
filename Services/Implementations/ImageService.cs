using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PhotoGallery.Models;
using PhotoGallery.Services.Interfaces;
using Microsoft.Extensions.Logging;
using PhotoGallery.Repositories.Interfaces;
using Microsoft.AspNetCore.Http;
using System.IO;

namespace PhotoGallery.Services.Implementations
{
    public class ImageService : IImageService
    {
        private readonly IImageRepository _imageRepository;
        private readonly IFileSystemRepository _fileSystemRepository;
        private readonly ILogger _logger;

        public ImageService(IImageRepository imageRepository, IFileSystemRepository fileSystemRepository, ILogger<ImageService> logger)
        {
            _imageRepository = imageRepository;
            _fileSystemRepository = fileSystemRepository;
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

        public void UploadNewImage(IFormFile file, Image image)
        {
            try
            {
                image.PathName = file.FileName; // TODO set this on client

                _fileSystemRepository.SaveNewFile(file);
                _imageRepository.UploadNewImage(image);
            }
            catch (Exception ex)
            {
                _logger.LogError("Error", ex);
            }
        }
    }
}