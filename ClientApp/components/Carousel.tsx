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
}

interface ILocalProps {
    imageList: Image[];
}

export default class Carousel extends React.Component<ILocalProps, ILocalState> {

    constructor(props: ILocalProps) {
        super(props);
        autoBind(this);

        this.state = {
            currentImage: 0
        }
    }

    private goToPreviousImage() {
        this.setState((prevState: ILocalState) => ({
            currentImage: this.state.currentImage === 0 ? this.props.imageList.length - 1 : this.state.currentImage - 1
        }));
    }

    private goToNextImage() {
        this.setState((prevState: ILocalState) => ({
            currentImage: this.state.currentImage === this.props.imageList.length - 1 ? 0 : this.state.currentImage + 1
        }));
    }

    private buildImageCarousel(): JSX.Element[] {
        return this.props.imageList.map((image: Image, index: number): JSX.Element =>
            this.state.currentImage === index ?
                <li key={index} className="main-image" style={{ opacity: 1, visibility: 'visible', zIndex: 2, backgroundImage: `url('GalleryImages/${image.pathName}')` }}/>
                :
                <li key={index} className="main-image" style={{ opacity: 0, visibility: 'hidden', zIndex: -1, backgroundImage: `url('GalleryImages/${image.pathName}')` }}/>
        );
    }
    
    public render() {

        if (!this.props.imageList || this.props.imageList.length === 0) {
            return <div />;
        }

        return (
            <div className="carousel-wrapper">
                <ul className="img-carousel">
                    { this.buildImageCarousel() }
                </ul>
                <div className="carousel-nav-button-wrapper">
                    <div className="nav-arrow prev" onClick={this.goToPreviousImage}></div>
                    <div className="nav-arrow next" onClick={this.goToNextImage}></div>
                </div>
            </div>
        );
    }
}
