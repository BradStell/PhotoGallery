import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';

export class NavMenu extends React.Component<{}, {}> {
    public render() {
        return (
            <div>
                <div id="main-header" className="main-header-wrapper">
                    <div className="menu-container">
                        <ul className="menu-container">
                            <li className="menu-item">
                                <NavLink to={ '/' } exact activeClassName='active-nav'>
                                    <span>Home</span>
                                </NavLink>
                            </li>
                            <li className="menu-item">
                                <NavLink to={ '/galleries' } exact activeClassName='active-nav'>
                                    <span>Galleries</span>
                                </NavLink>
                            </li>
                            <li className="menu-item">
                                <NavLink to={ '/fetchdata' } exact activeClassName='active-nav'>
                                    <span>About Me</span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
