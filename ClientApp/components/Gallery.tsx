import * as React from 'react';
import styled from 'styled-components';

interface ILocalState {
}

interface ILocalProps {
    title: string;
    imageLocation: string;
}

const Wrapper: any = styled.div`
    cursor: pointer;
`;

const ImageWrapper: any = styled.div`
    background-position: center top;
    background-position-x: 50%;
    background-position-y: 0%;
    background-size: cover;
    height: 200px;
    width: 300px;
`;

export default class Gallery extends React.Component<ILocalProps, ILocalState> {
    constructor() {
        super();
    }

    public render() {
        return (
            <Wrapper>
                <h1>{this.props.title}</h1>
                <ImageWrapper style={{ backgroundImage: `url('GalleryImages/${this.props.imageLocation}')` }} />
            </Wrapper>
        );
    }
}
