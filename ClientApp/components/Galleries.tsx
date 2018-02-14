import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import autobind from 'react-autobind';
import { DataService, IDataService } from '../services/dataService';
import { IGallery } from '../interfaces/ModelInterfaces';
import Gallery from './Gallery';
import styled from 'styled-components';

const dataService: IDataService = new DataService();

interface IGalleriesState {
    galleries: IGallery[];
}

const ImageContainer: any = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
`;

const PageTitle: any = styled.h1`
    font-family: 'Open Sans';
`;

export class Galleries extends React.Component<RouteComponentProps<{}>, IGalleriesState> {
    constructor() {
        super();
        autobind(this);

        this.state = {
            galleries: null
        };

        dataService.getGalleries().then( (data) => {
            this.setState( (prevState) => ({ galleries: data }));
        });
    }

    public render() {

        if (!this.state.galleries || this.state.galleries.length === 0) {
            return <div />;
        }

        return (
            <div>
                <div style={{ textAlign: 'center' }}>
                    <PageTitle>Galleries</PageTitle>
                </div>
                <ImageContainer>
                    {this.state.galleries.map((gallery: IGallery) =>
                        <Gallery key={gallery.id} title={gallery.title} imageLocation={gallery.coverImage.pathName} />
                    )}
                </ImageContainer>
            </div>
        );
    }
}
