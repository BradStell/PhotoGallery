using System;
using System.Collections.Generic;
using PhotoGallery.Models;

namespace PhotoGallery.Services.Interfaces
{
  public interface IImageService
  {
    List<Image> GetCarouselImages();
    void UploadNewImage(Image image);
  }
}