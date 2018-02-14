using System;
using System.Collections.Generic;
using PhotoGallery.Models;

namespace PhotoGallery.Services.Interfaces
{
  public interface IGalleryService
  {
    List<Gallery> GetGalleries();
  }
}