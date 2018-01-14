using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PhotoGallery.Models;
using PhotoGallery.Services.Interfaces;

namespace PhotoGallery.Services.Implementations
{
    public class DataAccessService : IDataAccessService
    {
        private readonly ApplicationDbContext _db;

        public DataAccessService(ApplicationDbContext context)
        {
            _db = context;
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
                Console.WriteLine(ex);
                return null;
            }
            
        }
    }
}