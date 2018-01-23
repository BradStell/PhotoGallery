import React, { Component } from "react";
import autoBind from "react-autobind";
import { RouteComponentProps } from "react-router";
import styled from "styled-components";
import { DataService, IDataService } from "../services/dataService";

const dataService: IDataService = new DataService();

interface ILocalState {
  title: string;
  isCarouselImage: boolean;
  isGalleryImage: boolean;
  selectedGallery: string;
  newGalleryName: string;
  newImage: string;
}

interface ILocalProps {}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormTitle = styled.h2`
  text-align: center;
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

const TextInput = styled.input``;

const CheckboxInput = styled.input``;

const UploadImageButton = styled.button`
  margin: 0 auto;
`;

export class ImageUploadFrom extends Component<ILocalProps, ILocalState> {
  constructor() {
    super();
    autoBind(this);

    this.state = {
      title: "",
      isCarouselImage: false,
      isGalleryImage: false,
      selectedGallery: "",
      newGalleryName: "",
      newImage: ""
    };
  }

  private handleImageTitleChange(e) {
    e.preventDefault();
    this.setState({
      title: e.target.value
    });
  }

  private handleCarouselImageCheckbox() {
    this.setState({
      isCarouselImage: !this.state.isCarouselImage
    });
  }

  private handleGalleryImageCheckbox() {
    this.setState({
      isGalleryImage: !this.state.isGalleryImage
    });
  }

  private handleGallerySelectChange(e) {
    this.setState({
      selectedGallery: e.target.value
    });
  }

  private handleImageUpload(e) {
    e.preventDefault();
    console.log(this.state);
    dataService.uploadNewImage(this.state);
  }

  private handleNewGalleryNameChange(e) {
    this.setState({
      newGalleryName: e.target.value
    });
  }

  private handleNewImageSelection(e) {
    this.setState({
      newImage: e.target.value
    });
  }

  public render() {
    return (
      <Wrapper>
        <FormTitle>Image Upload Form</FormTitle>
        <Form id="image-upload-form">
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
            <Label htmlFor="carousel-image-checkbox">
              Is this a carousel Image?
            </Label>
            <CheckboxInput
              type="checkbox"
              name="carousel-image-checkbox"
              id="carousel-image-checkbox"
              onChange={this.handleCarouselImageCheckbox}
              checked={this.state.isCarouselImage}
            />
          </FormField>
          <FormField>
            <Label htmlFor="gallery-image-checkbox">
              Is this a gallery Image?
            </Label>
            <CheckboxInput
              type="checkbox"
              name="gallery-image-checkbox"
              id="gallery-image-checkbox"
              onChange={this.handleGalleryImageCheckbox}
              checked={this.state.isGalleryImage}
            />
          </FormField>
          {this.state.isGalleryImage && (
            <FormField>
              <Label htmlFor="gallery-select">
                Select a gallery for the image.
              </Label>
              <select onChange={this.handleGallerySelectChange} name="Gallery">
                <option value="gallery1">Gallery 1</option>
                <option value="gallery2">Gallery 2</option>
                <option value="gallery3">Gallery 3</option>
                <option value="newGallery">New Gallery</option>
              </select>
            </FormField>
          )}
          {this.state.isGalleryImage &&
            this.state.selectedGallery === "newGallery" && (
              <FormField>
                <Label htmlFor="new-gallery-name">
                  Enter a name for the new gallery.
                </Label>
                <TextInput
                  type="text"
                  name="new-gallery-name"
                  id="new-gallery-name"
                  onChange={this.handleNewGalleryNameChange}
                  value={this.state.newGalleryName}
                />
              </FormField>
            )}
          <FormField>
            <Label htmlFor="new-image">Select your image</Label>
            <input
              type="file"
              name="new-image"
              id="new-image"
              accept="image/*"
              onChange={this.handleNewImageSelection}
              value={this.state.newImage}
            />
          </FormField>
          <FormField>
            <UploadImageButton
              onClick={this.handleImageUpload}
              disabled={!this.state.title || !this.state.newImage}
            >
              Upload Image
            </UploadImageButton>
          </FormField>
        </Form>
      </Wrapper>
    );
  }
}
