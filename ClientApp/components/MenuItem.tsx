import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

interface ILocalProps {
    linkTo: string;
    label: string;
}

const MenuItemWrapper: any = styled.li`
    display: block;
    padding: 10px 0px;
    font-family: 'Open Sans';
    font-weight: 700;
    cursor: pointer;
    transition: color 1s ease;
    color: #739393;
    height: 35px;
    margin-left: 2px;
    margin-right: 2px;

    &:hover, &:active, &:focus {
        border-bottom: 3px solid lightseagreen;
        color: #537373;
    }

    & > a.active-nav {
        border-bottom: 3px solid lightseagreen;
        color: #537373;
    }
`;

export default class MenuItem extends React.Component<ILocalProps, {}> {
    public render() {
        return (
            <MenuItemWrapper>
                <NavLink to={ this.props.linkTo } exact activeClassName='active-nav'>
                    <span>{this.props.label}</span>
                </NavLink>
            </MenuItemWrapper>
        );
    }
}

/*
.menu-item {
    display: block;
    padding: 10px 0px;
    font-family: 'Open Sans';
    font-weight: 700;
    cursor: pointer;
    transition: color 1s ease;
    color: #739393;
    height: 35px;
    margin-left: 2px;
    margin-right: 2px;
}

.menu-item:hover, .menu-item:active, .menu-item:focus {
    border-bottom: 3px solid lightseagreen;
    color: #537373;
}

.menu-item > a.active-nav {
    border-bottom: 3px solid lightseagreen;
    color: #537373;
}
*/