using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using PhotoGallery.Models;
using PhotoGallery.Services.Interfaces;

namespace PhotoGallery.Controllers
{
    [Route("api/[controller]")]
    public class ImageController : Controller
    {
        private readonly IImageService _imageService;
        private readonly ILogger _logger;

        public ImageController(IImageService imageService, ILogger<ImageController> logger)
        {
            _imageService = imageService;
            _logger = logger;
        }

        [HttpGet("[action]")]
        public IActionResult GetCarouselImages()
        {
            try
            {
                return Ok(_imageService.GetCarouselImages());
            }
            catch (Exception ex)
            {
                _logger.LogError("Error", ex);
                return BadRequest();
            }
        }

        [HttpPost("[action]")]  // TODO pass in as object not string
        public async Task<IActionResult> UploadImage(IFormFile file, string imageData)
        {
            Image image = JsonConvert.DeserializeObject<Image>(imageData);
            image.PathName = file.FileName;

            var path = Path.Combine(Directory.GetCurrentDirectory(), "Gallery", file.FileName);

            using (var stream = new FileStream(path, FileMode.Create))
            {
                await file.CopyToAsync(stream);
            }

            _imageService.UploadNewImage(image);

            return null;
        }
    }
}
