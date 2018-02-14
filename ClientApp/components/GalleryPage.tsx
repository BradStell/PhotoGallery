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

export default class GalleryPage extends React.Component<RouteComponentProps<{}>, ILocalState> {
    constructor() {
        super();

        autobind(this);

        this.getGalleryImages();
    }

    private getGalleryImages() {
        DataService.getGalleryImages().then( (data) => {
            this.setState( (prevState) => ({ galleries: data }));
        });
    }

    public render() {
        return (
            <div>
                <h1>gallery page</h1>
            </div>
        );
    }
}
