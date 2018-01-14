import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import styled from 'styled-components';

const Wrapper: any = styled.div`
    height: 300px;
    background-color: gray;
`;

export default class Carousel extends React.Component<{}, {}> {

    constructor() {
        super();
    }
    
    public render() {
        return (
            <Wrapper />
        );
    }
}
