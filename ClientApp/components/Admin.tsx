import React, { Component }  from 'react';
import autoBind from 'react-autobind';
import { RouteComponentProps } from 'react-router';
import styled from 'styled-components';
import AddNewImage from './AddNewImage';
import AddNewGallery from './AddNewGallery';
//import { ImageUploadFrom }from './ImageUploadForm';

interface ILocalState { }

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default class Admin extends Component<RouteComponentProps<{}>, ILocalState> {
  constructor() {
    super();
    autoBind(this);
  }

  public render () {
    return (
      <Wrapper>
        <h1 style={{ color: '#2CB1A8' }}>Admin Page</h1>
        <AddNewImage />
        <AddNewGallery />
      </Wrapper>
    );
  }
}
