import React, { Component }  from 'react';
import autoBind from 'react-autobind';
import { RouteComponentProps } from 'react-router';
import styled from 'styled-components';
import { ImageUploadFrom }from './ImageUploadForm';

interface ILocalState { }

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export class Admin extends Component<RouteComponentProps<{}>, ILocalState> {
  constructor() {
    super();
    autoBind(this);
  }

  public render () {
    return (
      <Wrapper>
      <h1>Admin Page</h1>
      <ImageUploadFrom />
      </Wrapper>
    );
  }
}