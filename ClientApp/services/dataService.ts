import { IImage} from '../interfaces/ModelInterfaces';

export interface IDataService {
    getCarouselImages();
}

export class DataService implements IDataService {
    public getCarouselImages() {
        return fetch('api/Data/GetCarouselImages')
            .then(response => response.json() as Promise<IImage>)
            .then(data => {
                return data;
            })
            .catch(er => {
                console.log(er);
                return null;
            });
    }
}