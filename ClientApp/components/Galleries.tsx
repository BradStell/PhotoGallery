import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import autobind from 'react-autobind';
import DataService from '../services/dataService';
import { IGallery } from '../interfaces/ModelInterfaces';
import Gallery from './Gallery';
import styled from 'styled-components';

interface IGalleriesState {
    galleries: IGallery[];
}

const ImageContainer: any = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
`;

const PageTitle: any = styled.h1`
    font-family: 'Open Sans';
`;

const Wrapper: any = styled.div`
    background-color: #F5E5F5;
    height: 100vh;
`;

export default class Galleries extends React.Component<RouteComponentProps<{}>, IGalleriesState> {
    constructor() {
        super();
        autobind(this);

        this.state = {
            galleries: null
        };

        this.getGalleries();
    }

    private getGalleries() {
        DataService.getGalleries().then( (data) => {
            this.setState( (prevState) => ({ galleries: data }));
        });
    }

    public render() {

        if (!this.state.galleries || this.state.galleries.length === 0) {
            return <div />;
        }

        return (
            <Wrapper>
                <div style={{ textAlign: 'center' }}>
                    <PageTitle>Galleries</PageTitle>
                </div>
                <ImageContainer>
                    {this.state.galleries.map((gallery: IGallery) =>
                        <Gallery key={gallery.id} title={gallery.title} imageId={gallery.id} imageLocation={gallery.coverImage.pathName} />
                    )}
                </ImageContainer>
            </Wrapper>
        );
    }
}
