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
                                <NavLink to={ '/counter' } exact activeClassName='active-nav'>
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


/*
<div className='main-nav'>
    <div className='navbar navbar-inverse'>
    <div className='navbar-header'>
        <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>
            <span className='sr-only'>Toggle navigation</span>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
        </button>
        <Link className='navbar-brand' to={ '/' }>PhotoGallery</Link>
    </div>
    <div className='clearfix'></div>
    <div className='navbar-collapse collapse'>
        <ul className='nav navbar-nav'>
            <li>
                <NavLink to={ '/' } exact activeClassName='active'>
                    <span className='glyphicon glyphicon-home'></span> Home
                </NavLink>
            </li>
            <li>
                <NavLink to={ '/counter' } activeClassName='active'>
                    <span className='glyphicon glyphicon-education'></span> Counter
                </NavLink>
            </li>
            <li>
                <NavLink to={ '/fetchdata' } activeClassName='active'>
                    <span className='glyphicon glyphicon-th-list'></span> Fetch data
                </NavLink>
            </li>
            <li>
                <NavLink to={ '/gallery' } activeClassName='active'>
                    <span className='glyphicon glyphicon-th-list'></span> Gallery
                </NavLink>
            </li>
        </ul>
    </div>
</div>
</div>
*/