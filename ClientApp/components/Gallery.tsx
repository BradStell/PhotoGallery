import * as React from 'react';
import { RouteComponentProps } from 'react-router';

interface GalleryState {
}

export class Gallery extends React.Component<RouteComponentProps<{}>, GalleryState> {
    constructor() {
        super();
    }

    public render() {
        return (
            <div>
                <h1>Gallery</h1>
            </div>
        );
    }
}
