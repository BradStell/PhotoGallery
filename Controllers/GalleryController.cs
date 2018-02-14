using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using PhotoGallery.Models;
using PhotoGallery.Services.Interfaces;

namespace PhotoGallery.Controllers
{
    [Route("api/[controller]")]
    public class GalleryController : Controller
    {
        private readonly IGalleryService _galleryService;
        private readonly ILogger _logger;

        public GalleryController(IGalleryService galleryService, ILogger<ImageController> logger)
        {
            _galleryService = galleryService;
            _logger = logger;
        }

        [HttpGet("[action]")]
        public IActionResult GetGalleries()
        {
            try
            {
                return Ok(_galleryService.GetGalleries());
            }
            catch (Exception ex)
            {
                _logger.LogError("Error", ex);
                return BadRequest();
            }
        }

        [HttpGet("[action]")]
        public IActionResult GetGalleryImages([FromQuery] Guid galleryId)
        {
            try
            {
                return Ok(_galleryService.GetGalleryImages(galleryId));
            }
            catch (Exception ex)
            {
                _logger.LogError("Error", ex);
                return BadRequest();
            }
        }
    }
}
