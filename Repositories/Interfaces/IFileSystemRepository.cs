using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PhotoGallery.Models;
using PhotoGallery.Services.Interfaces;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Http;

namespace PhotoGallery.Repositories.Interfaces
{
    public interface IFileSystemRepository
    {
        void SaveNewFile(IFormFile file);
    }
}