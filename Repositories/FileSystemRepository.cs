using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PhotoGallery.Models;
using PhotoGallery.Services.Interfaces;
using Microsoft.Extensions.Logging;
using PhotoGallery.Repositories.Interfaces;
using Microsoft.AspNetCore.Http;
using System.IO;

namespace PhotoGallery.Repositories
{
    public class FileSystemRepository : IFileSystemRepository
    {
        private readonly ILogger _logger;

        public FileSystemRepository(ILogger<ImageRepository> logger)
        {
            _logger = logger;
        }

        public async void SaveNewFile(IFormFile file)
        {
            try
            {
                var path = Path.Combine(Directory.GetCurrentDirectory(), "Gallery", file.FileName);

                using (var stream = new FileStream(path, FileMode.Create))
                {
                    await file.CopyToAsync(stream);
                }
            }
            catch (Exception ex)
            {
                _logger.LogError("Error", ex);
            }
        }
    }
}