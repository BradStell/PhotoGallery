using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace PhotoGallery.Migrations
{
    public partial class SeedData1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Images",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Gallery_Id = table.Column<Guid>(nullable: true),
                    IsCarouselImage = table.Column<bool>(nullable: true),
                    PathName = table.Column<string>(nullable: true),
                    Title = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Images", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Galleries",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    CoverImage_Id = table.Column<Guid>(nullable: false),
                    CreateDateTime = table.Column<DateTime>(nullable: false),
                    Title = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Galleries", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Galleries_Images_CoverImage_Id",
                        column: x => x.CoverImage_Id,
                        principalTable: "Images",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Galleries_CoverImage_Id",
                table: "Galleries",
                column: "CoverImage_Id");

            migrationBuilder.CreateIndex(
                name: "IX_Images_Gallery_Id",
                table: "Images",
                column: "Gallery_Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Images_Galleries_Gallery_Id",
                table: "Images",
                column: "Gallery_Id",
                principalTable: "Galleries",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Galleries_Images_CoverImage_Id",
                table: "Galleries");

            migrationBuilder.DropTable(
                name: "Images");

            migrationBuilder.DropTable(
                name: "Galleries");
        }
    }
}
