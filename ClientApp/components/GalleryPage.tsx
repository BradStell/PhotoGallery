import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

interface ILocalState {
}

interface ILocalProps {
}

export default class GalleryPage extends React.Component<RouteComponentProps<{}>, ILocalState> {
    constructor() {
        super();
    }

    public render() {
        return (
            <div>
                <h1>gallery page</h1>
            </div>
        );
    }
}
