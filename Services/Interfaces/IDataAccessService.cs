using System;
using System.Collections.Generic;
using PhotoGallery.Models;

namespace PhotoGallery.Services.Interfaces
{
    public interface IDataAccessService
    {
        List<Image> GetCarouselImages();
    }
}