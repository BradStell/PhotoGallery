using Microsoft.EntityFrameworkCore;

namespace PhotoGallery.Models
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public DbSet<Image> Images { get; set; }
        public DbSet<Gallery> Galleries { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Gallery>().ToTable("Galleries");
            modelBuilder.Entity<Image>().ToTable("Images");
        }
    }
}
