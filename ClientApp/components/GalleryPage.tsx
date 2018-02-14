import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import autobind from 'react-autobind';
import DataService from '../services/dataService';
import { IImage } from '../interfaces/ModelInterfaces';

interface ILocalState {
    galleryImages: IImage[];
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
`;

export default class GalleryPage extends React.Component<RouteComponentProps<{}>, ILocalState> {
    constructor(props: RouteComponentProps<{}>) {
        super(props);

        autobind(this);

        this.state = {
            galleryImages: null
        };

        this.getGalleryImages();
    }

    private getGalleryImages() {
        DataService.getGalleryImages(this.props.match.params['id']).then( (data) => {
            this.setState( (prevState) => ({ galleryImages: data }));
        });
    }

    public render() {

        if (!this.state.galleryImages || this.state.galleryImages.length === 0) {
            return <div />;
        }

        return (
            <div>
                <h1></h1>
                <ImageWrapper>
                    {
                        this.state.galleryImages.map((image: IImage) =>
                            <GalleryImage style={{ backgroundImage: `url('GalleryImages/${image.pathName}')` }} />
                    )}
                </ImageWrapper>
            </div>
        );
    }
}
