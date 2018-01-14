import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import autoBind from 'react-autobind';

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
            _imageList: null,
            currentImage: 0
        }

        fetch('api/Data/GetCarouselImages')
            .then(response => response.json())
            .then(data => {
                this.setState(prevState => ({ _imageList: data }));
            });
    }

    private goToPreviousImage() {
        this.setState((prevState: ILocalState) => ({
            currentImage: this.state.currentImage === 0 ? this.state._imageList.length - 1 : this.state.currentImage - 1
        }));
    }

    private goToNextImage() {
        this.setState((prevState: ILocalState) => ({
            currentImage: this.state.currentImage === this.state._imageList.length - 1 ? 0 : this.state.currentImage + 1
        }));
    }

    private buildImageCarousel(): JSX.Element[] {
        return this.state._imageList.map((image: Image, index: number): JSX.Element =>
            this.state.currentImage === index ?
                <li key={index} className="main-image" style={{ opacity: 1, visibility: 'visible', zIndex: 2, backgroundImage: `url('GalleryImages/${image.pathName}')` }}/>
                :
                <li key={index} className="main-image" style={{ opacity: 0, visibility: 'hidden', zIndex: -1, backgroundImage: `url('GalleryImages/${image.pathName}')` }}/>
        );
    }
    
    public render() {

        if (!this.state._imageList) {
            return <div />;
        }

        return (
            <div className="home-page-wrapper">
                <div className="carousel-wrapper">
                    <ul className="img-carousel">
                        { this.buildImageCarousel() }
                    </ul>
                </div>
                <div className="carousel-nav-button-wrapper">
                    <div className="nav-arrow prev" onClick={this.goToPreviousImage}></div>
                    <div className="nav-arrow next" onClick={this.goToNextImage}></div>
                </div>
                <div className="footer" />
            </div>
        );
    }
}
