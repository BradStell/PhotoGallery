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
    height: 400px;
    width: 600px;
    border: 3px solid gray;
`;

const GalleryTitle: any = styled.h4`
    font-family: 'Open Sans';
`;

export default class Gallery extends React.Component<ILocalProps, ILocalState> {
    constructor() {
        super();
    }

    public render() {
        return (
            <Wrapper>
                <div style={{ textAlign: 'center' }}>
                    <GalleryTitle>{this.props.title}</GalleryTitle>
                </div>
                <ImageWrapper style={{ backgroundImage: `url('GalleryImages/${this.props.imageLocation}')` }} />
            </Wrapper>
        );
    }
}
