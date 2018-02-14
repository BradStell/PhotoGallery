import { IImage, IGallery } from '../interfaces/ModelInterfaces';

export interface IDataService {
    getCarouselImages();
    getGalleries();
    //uploadNewImage(image);
}

class DataService implements IDataService {

    public getCarouselImages() {
        return fetch('api/Image/GetCarouselImages')
            .then( (response) => response.json() as Promise<IImage>)
            .then((data) => {
                return data;
            })
            .catch((er) => {
                console.log(er);
                return null;
            });
    }

    public getGalleries() {
        return fetch('api/Gallery/GetGalleries')
            .then( (response) => response.json() as Promise<IGallery>)
            .then((data) => {
                return data;
            })
            .catch((er) => {
                console.log(er);
                return null;
            });
    }

    // public uploadNewImage(image) {
    //     return fetch('api/Data/UploadNewImage')
    //         .then((response) => response.json() as Promise<IImage>)
    //         // .then(data => {
    //         //     return data;
    //         // })
    //         .catch((er) => {
    //             console.log(er);
    //             return null;
    //         });
    // }
}

export default new DataService();
