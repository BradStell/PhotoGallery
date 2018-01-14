import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import autoBind from 'react-autobind';
import Carousel from './Carousel';

interface Image {
    id: string;
    pathName: string;
    title: string;
    isCarouselImage: boolean;
    gallery_Id: string;
    gallery: any;
}

interface ILocalState {
    currentImage: number;
    _imageList: Image[];
}

export class Home extends React.Component<RouteComponentProps<{}>, ILocalState> {

    constructor() {
        super();
        autoBind(this);

        this.state = {
            _imageList: [],
            currentImage: 0
        }

        fetch('api/Data/GetCarouselImages')
            .then(response => response.json() as Promise<Image>)
            .then(data => {
                this.setState(prevState => ({ _imageList: data }));
            });
    }
    
    public render() {

        return (
            <div className="home-page-wrapper">
                <Carousel imageList={this.state._imageList} />
                <div className="footer" />
            </div>
        );
    }
}
