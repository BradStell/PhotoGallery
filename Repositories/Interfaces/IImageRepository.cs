using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PhotoGallery.Models;
using PhotoGallery.Services.Interfaces;
using Microsoft.Extensions.Logging;

namespace PhotoGallery.Repositories.Interfaces
{
    public interface IImageRepository
    {
        List<Image> GetCarouselImages();
        List<Image> GetImagesInGallery(Guid galleryId);
    }
}