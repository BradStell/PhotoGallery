import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import autoBind from 'react-autobind';
import Carousel from './Carousel';
import Footer from './Footer';
import styled from 'styled-components';

const Wrapper: any = styled.div`
    overflow-x: hidden;
    height: calc(100vh - 40px);
    position: relative;
`;

export default class Home extends React.Component<RouteComponentProps<{}>, {}> {

    constructor() {
        super();
        autoBind(this);
    }

    public render() {

        return (
            <Wrapper className='home-page-wrapper'>
                <Carousel />
                <Footer />
            </Wrapper>
        );
    }
}
