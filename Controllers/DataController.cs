using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using PhotoGallery.Models;
using PhotoGallery.Services.Interfaces;

namespace PhotoGallery.Controllers
{
    [Route("api/[controller]")]
    public class DataController : Controller
    {
        private IDataAccessService _dataAccessService;

        public DataController(IDataAccessService service)
        {
            _dataAccessService = service;
        }

        [HttpGet("[action]")]
        public IEnumerable<Image> GetCarouselImages()
        {
            try
            {
                return _dataAccessService.GetCarouselImages();
            }
            catch (Exception ex)
            {
                // TODO figure out logging
                return null;
            }
        }
    }
}
