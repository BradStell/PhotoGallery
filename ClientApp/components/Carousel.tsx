import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import autoBind from 'react-autobind';
import styled from 'styled-components';

interface Image {
    id: string;
    pathName: string;
    title: string;
    isCarouselImage: boolean;
    gallery_Id: string;
    gallery: any;
}

interface ILocalState {
    currentImage: number;
}

interface ILocalProps {
    imageList: Image[];
}

const ImageWrapper: any = styled.li`
    display: list-item;
    background-color: darkslategray;
    height: calc(100vh - 40px);
    width: 100vw;
    background-position: center top;
    background-position-x: 50%;
    background-position-y: 0%;
    background-size: cover;
    box-sizing: border-box;
    clear: both;
    left: 0px;
    list-style-image: none;
    list-style-position: outside;
    list-style-type: none;
    position: absolute;
    text-align: left;
    top: 0px;
`;

const Wrapper: any = styled.div`
    clear: both;
    height: calc(100vh - 40px);
    overflow: hidden;
    position: relative;
`;

const CarouselWrapper: any = styled.ul`
    position: absolute;
    padding: 0px;
`;

const CarouselButtonWrapper: any = styled.div`
    box-sizing: border-box;
    display: block;
    height: 0px;
    margin: 0px;
    padding: 0px;
    width: 100vw;
    color: #FAFAFA;
    cursor: pointer;

    .home-page-wrapper:hover & .nav-arrow {
        opacity: 1;
    }
`;

const Arrow: any = styled.div`
    cursor: pointer;
    height: 60px;
    opacity: 0;
    position: absolute;
    text-align: center;
    top: 50vh;
    visibility: visible;
    width: 60px;
    z-index: 50;
    border: 2px solid #FAFAFA;
    border-radius: 5px;
    padding-top: 8px;
    margin: 0px 20px;

    &.prev {
        left: 0px;
        cursor: pointer;
    }

    &.next {
        right: 0px;
        cursor: pointer;
        margin-right: 40px;
        padding-left: 2px;
    }

    &.prev::before {
        border-bottom-right-radius: 3px;
        border-top-right-radius: 3px;
        content: '<';
        font-size: 30px;
        font-weight: 400;
        height: 56px;
        text-indent: -2px;
        width: 56px;
        cursor: pointer;
    }

    &.next::before {
        border-bottom-left-radius: 3px;
        border-top-left-radius: 3px;
        content: '>';
        font-size: 30px;
        font-weight: 400;
        height: 56px;
        text-indent: 0px;
        width: 56px;
        cursor: pointer;
    }
`;

export default class Carousel extends React.Component<ILocalProps, ILocalState> {

    constructor(props: ILocalProps) {
        super(props);
        autoBind(this);

        this.state = {
            currentImage: 0
        }
    }

    private goToPreviousImage() {
        this.setState((prevState: ILocalState) => ({
            currentImage: this.state.currentImage === 0 ? this.props.imageList.length - 1 : this.state.currentImage - 1
        }));
    }

    private goToNextImage() {
        this.setState((prevState: ILocalState) => ({
            currentImage: this.state.currentImage === this.props.imageList.length - 1 ? 0 : this.state.currentImage + 1
        }));
    }

    private buildImageCarousel(): JSX.Element[] {
        return this.props.imageList.map((image: Image, index: number): JSX.Element =>
            this.state.currentImage === index ?
                <ImageWrapper key={index} style={{ opacity: 1, visibility: 'visible', zIndex: 2, backgroundImage: `url('GalleryImages/${image.pathName}')` }}/>
                :
                <ImageWrapper key={index} style={{ opacity: 0, visibility: 'hidden', zIndex: -1, backgroundImage: `url('GalleryImages/${image.pathName}')` }}/>
        );
    }
    
    public render() {

        if (!this.props.imageList || this.props.imageList.length === 0) {
            return <div />;
        }

        return (
            <Wrapper>
                <CarouselWrapper>
                    { this.buildImageCarousel() }
                </CarouselWrapper>
                <CarouselButtonWrapper>
                    <Arrow className="nav-arrow prev" onClick={this.goToPreviousImage}></Arrow>
                    <Arrow className="nav-arrow next" onClick={this.goToNextImage}></Arrow>
                </CarouselButtonWrapper>
            </Wrapper>
        );
    }
}
