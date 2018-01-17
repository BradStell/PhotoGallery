import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import autoBind from 'react-autobind';
import Carousel from './Carousel';
import Footer from './Footer';
import { IImage} from '../interfaces/ModelInterfaces';
import { DataService, IDataService } from '../services/dataService';
import styled from 'styled-components';

const dataService: IDataService = new DataService();

interface ILocalState {
    currentImage: number;
    _imageList: IImage[];
}

const Wrapper: any = styled.div`
    overflow-x: hidden;
    height: calc(100vh - 40px);
    position: relative;
`;

export class Home extends React.Component<RouteComponentProps<{}>, ILocalState> {

    constructor() {
        super();
        autoBind(this);

        this.state = {
            _imageList: [],
            currentImage: 0
        };

        dataService.getCarouselImages().then( (data) => {
            this.setState( (prevState) => ({ _imageList: data }));
        });
    }

    public render() {

        return (
            <Wrapper className='home-page-wrapper'>
                <Carousel imageList={this.state._imageList} />
                <Footer />
            </Wrapper>
        );
    }
}
