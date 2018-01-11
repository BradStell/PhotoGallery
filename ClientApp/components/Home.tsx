import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import autoBind from 'react-autobind';

interface ILocalState {
    currentImage: number;
}

export class Home extends React.Component<RouteComponentProps<{}>, ILocalState> {
    
    private _imageList: string[] = [
        'dolmites.png',
        'clt-pink.jpg',
        'lafoten.jpg'
    ]

    constructor() {
        super();
        autoBind(this);
        this.state = { currentImage: 0 };
    }

    private goToPreviousImage() {
        this.setState((prevState: ILocalState) => ({
            currentImage: this.state.currentImage === 0 ? this._imageList.length - 1 : this.state.currentImage - 1
        }));
    }

    private goToNextImage() {
        this.setState((prevState: ILocalState) => ({
            currentImage: this.state.currentImage === this._imageList.length - 1 ? 0 : this.state.currentImage + 1
        }));
    }

    private buildImageCarousel(): JSX.Element[] {
        return this._imageList.map((image: string, index: number): JSX.Element =>
            this.state.currentImage === index ?
                <li key={index} className="main-image" style={{ opacity: 1, visibility: 'visible', zIndex: 2, backgroundImage: `url('GalleryImages/${image}')` }}/>
                :
                <li key={index} className="main-image" style={{ opacity: 0, visibility: 'hidden', zIndex: -1, backgroundImage: `url('GalleryImages/${image}')` }}/>
        );
    }
    
    public render() {
        return (
            <div className="home-page-wrapper">
                <div style={{ display: 'flex', flexFlow: 'row nowrap'}}>
                    <button onClick={this.goToPreviousImage}>Prev</button>
                    <button onClick={this.goToNextImage}>Next</button>
                </div>
                <div className="carousel-wrapper">
                    <ul className="img-carousel">
                        { this.buildImageCarousel() }
                    </ul>
                </div>
                <div className="footer" />
            </div>
        );
    }
}
