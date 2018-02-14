using System;
using System.Collections.Generic;
using PhotoGallery.Models;

namespace PhotoGallery.Services.Interfaces
{
  public interface IImageService
  {
    List<Image> GetCarouselImages();
    List<Image> GetImagesInGallery(Guid galleryId);
    void UploadNewImage(Image image);
  }
}