import * as React from 'react';
import { RouteComponentProps } from 'react-router';

interface IGalleryState {
}

export class Gallery extends React.Component<RouteComponentProps<{}>, IGalleryState> {
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
