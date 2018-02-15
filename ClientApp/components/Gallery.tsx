import * as React from 'react';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

interface ILocalState {
}

interface ILocalProps {
    title: string;
    imageId: string;
    imageLocation: string;
}

const Wrapper: any = styled.div`
    cursor: pointer;
    margin-left: 5px;
    margin-right: 5px;
`;

const ImageWrapper: any = styled.div`
    background-position: center top;
    background-position-x: 50%;
    background-position-y: 0%;
    background-size: cover;
    height: 400px;
    width: 600px;
    border: 3px solid #929292;
`;

const GalleryTitle: any = styled.h4`
    font-family: 'Open Sans';
    color: #AAAAAA;
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
                <NavLink to={`/gallery/${this.props.imageId}`} exact>
                    <ImageWrapper style={{ backgroundImage: `url('GalleryImages/${this.props.imageLocation}')` }} />
                </NavLink>
            </Wrapper>
        );
    }
}
