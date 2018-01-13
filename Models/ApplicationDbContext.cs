using Microsoft.EntityFrameworkCore;

namespace PhotoGallery.Models
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<Image> Images { get; set; }
        public DbSet<Gallery> Galleries { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite("Data Source=photogallery.db");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Gallery>().ToTable("Galleries");
            modelBuilder.Entity<Image>().ToTable("Images");
        }
    }
}
