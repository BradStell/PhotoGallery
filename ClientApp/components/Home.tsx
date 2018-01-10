import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class Home extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return (
            <div className="home-page-wrapper">
                <div className="main-image" />
                <div className="footer" />
            </div>
        );
    }
}
