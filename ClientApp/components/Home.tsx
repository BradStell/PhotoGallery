import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class Home extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return (
            <div className="home-page-wrapper">
            <div style={{ display: 'flex', flexFlow: 'row nowrap'}}>
                <button >Prev</button>
                <button >Next</button>
            </div>
                <div className="carousel-wrapper">
                    <ul className="img-carousel">
                        <li className="main-image" style={{ opacity: 0, visibility: 'hidden', backgroundImage: `url('GalleryImages/dolmites.png')` }}/>
                        <li className="main-image" style={{ opacity: 1, visibility: 'visible', backgroundImage: `url('GalleryImages/clt-pink.jpg')` }} />
                    </ul>
                </div>
                <div className="footer" />
            </div>
        );
    }
}
