import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { RouteComponentProps } from 'react-router';
import styled from 'styled-components';

interface ILocalState {
  title: string;
  isCarouselImage: boolean;
  isGalleryImage: boolean;
 }

interface ILocalProps { }

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormTitle = styled.h2`

`;

const Form = styled.form`
  margin-top: 2rem;
`;

const FormField = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

const Label = styled.label`
  margin-right: 1rem;
`;

const TextInput = styled.input`

`;

const CheckboxInput = styled.input`

`;

const UploadImageButton = styled.button`
  margin: 0 auto;
`;

export class ImageUploadFrom extends Component<ILocalProps, ILocalState> {
  constructor() {
    super();
    autoBind(this);

    this.state = {
      title: '',
      isCarouselImage: false,
      isGalleryImage: false
    };
  }

  private handleImageTitleChange (e) {
    e.preventDefault();
    this.setState({
      title: e.target.value
    });
  }

  private handleCarouselImageCheckbox () {
    this.setState({
      isCarouselImage: !this.state.isCarouselImage
    });
  }

  private handleGalleryImageCheckbox () {
    this.setState({
      isGalleryImage: !this.state.isGalleryImage
    });
  }

  private HandleImageUpload(e) {
    e.preventDefault();
  }

  public render() {
    return (
      <Wrapper>
        <FormTitle>Image Upload Form</FormTitle>
        <Form id='image-upload-form'>
          <FormField>
            <Label htmlFor="image-title">Image Title:</Label>
            <TextInput
              type="text"
              name="image-title"
              id="image-title"
              onChange={this.handleImageTitleChange}
              value={this.state.title}
            />
          </FormField>
          <FormField>
            <Label htmlFor="carousel-image-checkbox">Is this a carousel Image?</Label>
            <CheckboxInput
              type="checkbox"
              name="carousel-image-checkbox"
              id="carousel-image-checkbox"
              onChange={this.handleCarouselImageCheckbox}
              checked={this.state.isCarouselImage}
            />
          </FormField>
          <FormField>
            <Label htmlFor="gallery-image-checkbox">Is this a gallery Image?</Label>
            <CheckboxInput
              type="checkbox"
              name="gallery-image-checkbox"
              id="gallery-image-checkbox"
              onChange={this.handleGalleryImageCheckbox}
              checked={this.state.isGalleryImage}
            />
          </FormField>
          <FormField>
            <UploadImageButton onClick={this.HandleImageUpload}>Upload Image</UploadImageButton>
          </FormField>
        </Form>
      </Wrapper>
    );
  }
}
