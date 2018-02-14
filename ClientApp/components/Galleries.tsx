import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import autobind from 'react-autobind';
import { DataService, IDataService } from '../services/dataService';
import { IGallery } from '../interfaces/ModelInterfaces';

const dataService: IDataService = new DataService();

interface IGalleriesState {
    galleries: IGallery[];
}

export class Galleries extends React.Component<RouteComponentProps<{}>, IGalleriesState> {
    constructor() {
        super();
        autobind(this);

        dataService.getGalleries().then( (data) => {
            this.setState( (prevState) => ({ galleries: data }));
        });
    }

    public render() {
        return (
            <div>
                <h1>Galleries</h1>
            </div>
        );
    }
}
