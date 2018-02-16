
export interface IImage {
    id: string;
    pathName: string;
    title: string;
    isCarouselImage: boolean;
    gallery_Id: string;
    gallery?: IGallery;
}

export interface IGallery {
    id: string;
    title: string;
    coverImage_Id: string;
    coverImage: IImage;
    createDateTime: any;
    images: IImage[];
}
