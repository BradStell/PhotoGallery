import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import autobind from 'react-autobind';
import DataService from '../services/dataService';
import { IGallery, IImage } from '../interfaces/ModelInterfaces';

interface ILocalState {
    gallery: IGallery;
}

interface ILocalProps {
}

const ImageWrapper: any = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
`;

const GalleryImage: any = styled.div`
    background-position: center top;
    background-position-x: 50%;
    background-position-y: 0%;
    background-size: cover;
    height: 400px;
    width: 600px;
    border: 3px solid #929292;
    margin-left: 5px;
    margin-right: 5px;
    cursor: pointer;
`;

const Title: any = styled.h1`
    font-family: 'Open Sans';
    color: #AAAAAA;
`;

const Wrapper: any = styled.div`
    height: 100vh;
    background-color: #212121;
`;

export default class GalleryPage extends React.Component<RouteComponentProps<{}>, ILocalState> {
    constructor(props: RouteComponentProps<{}>) {
        super(props);

        autobind(this);

        this.state = {
            gallery: null
        };

        this.getGalleryImages();
        this.getImageDimensions();
    }

    private getGalleryImages() {
        DataService.getGalleryById(this.props.match.params['id']).then( (data) => {
            this.setState( (prevState) => ({ gallery: data }));
        });
    }

    private showcaseImage(image: IImage) {
        console.log(image);
    }

    private getImageDimensions() {
        const img = new Image();
        img.src = 'GalleryImages/lafoten.jpg';
        img.onload = () => {
            const height = img.height;
            const width = img.width;
        };
    }

    public render() {

        if (!this.state.gallery) {
            return <div />;
        }

        return (
            <Wrapper>
                <div style={{ textAlign: 'center' }}>
                    <Title>{ this.state.gallery.title }</Title>
                </div>
                <ImageWrapper>
                    {
                        this.state.gallery.images.map((image: IImage) =>
                            <GalleryImage key={image.id} style={{ backgroundImage: `url('GalleryImages/${image.pathName}')` }} onClick={() => this.showcaseImage(image) } />
                        )
                    }
                </ImageWrapper>
                <div style={{ width: '100vw', position: 'absolute', top: 0, left: 0, display: 'inline-block', verticalAlign: 'middle', zIndex: 1000, opacity: 0.5 }}>
                    <div style={{ opacity: 1, textAlign: 'center', position: 'absolute', top: '100px', left: '300px' }}>
                        <GalleryImage style={{ opacity: 1, width: '1200px', height: '700px', backgroundImage: `url('GalleryImages/lafoten.jpg')` }} />
                    </div>
                </div>
            </Wrapper>
        );
    }
}
