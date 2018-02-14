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
`;

export default class GalleryPage extends React.Component<RouteComponentProps<{}>, ILocalState> {
    constructor(props: RouteComponentProps<{}>) {
        super(props);

        autobind(this);

        this.state = {
            gallery: null
        };

        this.getGalleryImages();
    }

    private getGalleryImages() {
        DataService.getGalleryById(this.props.match.params['id']).then( (data) => {
            this.setState( (prevState) => ({ gallery: data }));
        });
    }

    public render() {

        if (!this.state.gallery) {
            return <div />;
        }

        return (
            <div>
                <h1></h1>
                <ImageWrapper>
                    {
                        this.state.gallery.images.map((image: IImage) =>
                            <GalleryImage style={{ backgroundImage: `url('GalleryImages/${image.pathName}')` }} />
                    )}
                </ImageWrapper>
            </div>
        );
    }
}