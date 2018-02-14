import '../css/site.css';
import * as React from 'react';
import NavMenu from './NavMenu';

export interface ILayoutProps {
    children?: React.ReactNode;
}

export default class Layout extends React.Component<ILayoutProps, {}> {
    public render() {
        return (
            <div>
                <div>
                    <NavMenu />
                </div>
                <div>
                    { this.props.children }
                </div>
            </div>
        );
    }
}
