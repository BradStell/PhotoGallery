using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace PhotoGallery.Models
{
    public class Image
    {
        [Key]
        public Guid Id { get; set; }
        public string PathName { get; set; }
        public string Title { get; set; }
        public bool? IsCarouselImage { get; set; }
        public Guid Gallery_Id { get; set; }
        [ForeignKey("Gallery_Id")]
        public Gallery Gallery { get; set; }
    }
}