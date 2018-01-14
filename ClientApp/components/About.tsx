import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class About extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return (
            <div className="center-wrapper">
                <h1>About Me</h1>
                <p>Comming Soon!</p>
            </div>
        );
    }
}
