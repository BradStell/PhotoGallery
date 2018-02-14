import * as React from 'react';
import MenuItem from './MenuItem';
import styled from 'styled-components';

const Wrapper: any = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    border-bottom: 2px solid #939393;
    height: 40px;
    background-color: #FAFAFA;
`;

const MenuContainer: any = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    cursor: pointer;
    color: #739393;
`;

const MenuContainerUl: any = styled.ul`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    cursor: pointer;
    color: #739393;
`;

export default class NavMenu extends React.Component<{}, {}> {
    public render() {
        return (
            <Wrapper id="main-header">
                <MenuContainer>
                    <MenuContainerUl>
                        <MenuItem linkTo={'/'} label={'Home'} />
                        <MenuItem linkTo={'/galleries'} label={'Galleries'} />
                        <MenuItem linkTo={'/about'} label={'About Me'} />
                    </MenuContainerUl>
                </MenuContainer>
            </Wrapper>
        );
    }
}
