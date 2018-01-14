using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using PhotoGallery.Models;

namespace PhotoGallery.Controllers
{
    [Route("api/[controller]")]
    public class DataController : Controller
    {
        private ApplicationDbContext _db;

        public DataController(ApplicationDbContext context)
        {
            _db = context;
        }

        [HttpGet("[action]")]
        public IEnumerable<Image> GetCarouselImages()
        {
            var images = _db.Images.Where(image => image.IsCarouselImage == true).ToList();
            return images;
        }
    }
}
