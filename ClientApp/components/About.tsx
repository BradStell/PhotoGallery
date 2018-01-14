import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import styled from 'styled-components';

const Wrapper: any = styled.div`
    text-align: center;
`;

export class About extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return (
            <Wrapper>
                <h1>About Me</h1>
                <p>Comming Soon!</p>
            </Wrapper>
        );
    }
}
