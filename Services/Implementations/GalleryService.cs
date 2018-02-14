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
    public class GalleryService : IGalleryService
    {
        private readonly IGalleryRepository _galleryRepository;
        private readonly ILogger _logger;

        public GalleryService(IGalleryRepository galleryRepository, ILogger<ImageService> logger)
        {
            _galleryRepository = galleryRepository;
            _logger = logger;
        }

        public List<Gallery> GetGalleries()
        {
            try
            {
                return _galleryRepository.GetGalleries();
            }
            catch (Exception ex)
            {
                // TODO figure out logging
                _logger.LogError("Error", ex);
                return null;
            }
        }
    }
}