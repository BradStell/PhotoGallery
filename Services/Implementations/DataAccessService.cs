using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PhotoGallery.Models;
using PhotoGallery.Services.Interfaces;
using Microsoft.Extensions.Logging;

namespace PhotoGallery.Services.Implementations
{
    public class DataAccessService : IDataAccessService
    {
        private readonly ApplicationDbContext _db;
        private readonly ILogger _logger;

        public DataAccessService(ApplicationDbContext context, ILogger<DataAccessService> logger)
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
                // TODO figure out logging
                _logger.LogError("Error", ex);
                return null;
            }
            
        }
    }
}