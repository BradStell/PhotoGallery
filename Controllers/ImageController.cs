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

        [HttpGet("[action]")]
        public IActionResult UploadNewImage(dynamic image)
        {
            // Image newImage = new Image
            // {
            //     Id = Guid.NewGuid(),
            //     PathName = image.pathName,
            //     Title = image.title,
            //     IsCarouselImage = image.IsCarouselImage,
            //     Gallery_Id = image.Gallery_Id ? image.Gallery_Id : "",
            //     Gallery = image.newGalleryName
            // };


            // try
            // {
            //     _dataAccessService.UploadNewImage(image);
            //     return Ok();
            // }
            // catch (Exception ex)
            // {
            //     _logger.LogError("Error", ex);
            //     return BadRequest();
            // }
            return null;
        }
    }
}