import * as React from 'react';
import MenuItem from './MenuItem';

export class NavMenu extends React.Component<{}, {}> {
    public render() {
        return (
            <div>
                <div id="main-header" className="main-header-wrapper">
                    <div className="menu-container">
                        <ul className="menu-container">
                            <MenuItem linkTo={'/'} label={'Home'} />
                            <MenuItem linkTo={'/galleries'} label={'Galleries'} />
                            <MenuItem linkTo={'/about'} label={'About Me'} />
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
