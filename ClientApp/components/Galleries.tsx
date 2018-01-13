import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import autobind from 'react-autobind';

interface IGalleriesState {
}

export class Galleries extends React.Component<RouteComponentProps<{}>, IGalleriesState> {
    constructor() {
        super();
        autobind(this);
    }

    public render() {
        return (
            <div>

            </div>
        );
    }
}
