using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace PhotoGallery.Models
{
    public class Gallery
    {
        [Key]
        public Guid Id { get; set; }
        public string Title { get; set; }
        public DateTime CreateDateTime { get; set; }
        public Guid CoverImage_Id { get; set; }
        [ForeignKey("CoverImage_Id")]
        public Image CoverImage { get; set; }
    }
}