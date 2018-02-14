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
    public class GalleryRepository : IGalleryRepository
    {
        private readonly ApplicationDbContext _db;
        private readonly ILogger _logger;

        public GalleryRepository(ApplicationDbContext context, ILogger<GalleryRepository> logger)
        {
            _db = context;
            _logger = logger;
        }

        public List<Gallery> GetGalleries()
        {
            try
            {
                return _db.Galleries.ToList();
            }
            catch (Exception ex)
            {
                _logger.LogError("Error", ex);
                return null;
            }

        }
    }
}