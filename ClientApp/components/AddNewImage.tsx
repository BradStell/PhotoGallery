import * as React from 'react';
import autobind from 'react-autobind';
import DataService from '../services/dataService';
import { IGallery, IImage } from '../interfaces/ModelInterfaces';
import styled from 'styled-components';
import uuid from 'uuid/v4';
import { Input, Checkbox, Select, Button } from 'antd';
import ReadOnlyInput from './ReadOnlyInput';

const Option = Select.Option;

interface ILocalState {
    newImage: IImage;
    galleries: IGallery[];
    imageBlob: any;
    imageBase64String: string;
}

interface ILocalProps {
}

const Wrapper: any = styled.div`
    width: 80vw;
    border: 3px solid #929292;
    border-radius: 4px;
`;

const SubTitle: any = styled.h4`
    font-family: 'Open Sans';
    font-weight: 500;
    font-size: 120%;
`;

const CustomLabel: any = styled.label`
    background-color: #919191;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: .28571429rem;
    border-top-left-radius: 0;
    border-top-right-radius: .28571429rem;
    color: white;
    cursor: pointer;
    display: inline-block;
    font-family: 'Open Sans';
    font-size: .78571429rem;
    font-weight: 700;
    height: 28px;
    padding: .45em;
    text-align: center;
    text-transform: none;
    width: 70px;
`;

const InputWrapper: any = styled.div`
    margin-top: 5px;
    margin: 5px;
    min-height: 15px;
`;

const CustomInput: any = styled.input`
    display: none;
    height: 0.1px;
    margin-bottom: 15px;
    visibility: hidden;
    width: 0.1px;
`;

const CustomReadOnlyInput: any = styled(ReadOnlyInput)`
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
    width: 40%;
`;

const ThumbnailWrapper: any = styled.div`
    margin-top: 5px;
    margin: 5px;
`;

const Image: any = styled.img`
    height: 200px;
`;

const ImageContainer: any = styled.div`
    border: 1px solid lightgray;
    max-height: 200px;
    min-width: 100px;
    width: 20px;
    max-width: 500px;
`;

const StyledRemoveIconButton: any = styled.button`
    border-radius: 50% !important;
    font-size: 14px !important;
    height: 25px;
    margin-left: -12px !important;
    margin-top: -5px !important;
    padding: 0 !important;
    width: 25px;
`;

const FormWrapper: any = styled.div`
    display: flex;
    flex-flow: column nowrap;
`;

const StyledLabel: any = styled.label`
    font-family: 'Open Sans';
    font-weight: 700;
    color: #828282;
    margin-left: 20px;
`;

const StyledInput: any = styled(Input)`
    width: 70% !important;
`;

export default class AddNewImage extends React.Component<ILocalProps, ILocalState> {

    constructor(props: ILocalProps) {
        super(props);

        this.state = {
            newImage: {
                id: uuid(),
                pathName: '',
                title: 'New Image',
                isCarouselImage: false,
                gallery_Id: null
            },
            galleries: null,
            imageBlob: null,
            imageBase64String: null
        };

        autobind(this);

        this.loadGalleries();
    }

    private loadGalleries() {
        DataService.getGalleries().then((result) => {
            this.setState((prevState) => ({
                ...prevState,
                galleries: result
            }));
        });
    }

    private fileIsSelected(event: any): void {
        const file: any = event.target.files[0];

        if (file && file.type.match('image.*')) {
            this.setState((prevState) => ({...prevState, imageBlob: file}));

            const fileReader: FileReader = new FileReader();
            fileReader.onload = this.onImageLoad;
            fileReader.readAsDataURL(file);
        }
    }

    private onImageLoad(event: any) {
        const base64 = event.target.result;
        this.setState((prevState) => ({ ...prevState, imageBase64String: base64 }));
    }

    // TODO - refactor out ant components to new react components and consolidate the property changed function to be generic
    private propertyValueChanged(propertyName: string, value: any) {
        this.setState((prevState) => ({
            ...prevState,
            newImage: {
                ...prevState.newImage,
                [propertyName]: value
            }
        }));
    }

    private changeCheckbox(event: any) {
        const val = event.target.checked;
        this.setState((prevState) => ({
            ...prevState,
            newImage: {
                ...prevState.newImage,
                isCarouselImage: val
            }
        }));
    }

    private dropdownChange(value) {
        this.setState((prevState) => ({
            ...prevState,
            newImage: {
                ...prevState.newImage,
                gallery_Id: value
            }
        }));
    }

    private uploadNewImage() {
        const form = new FormData();
        form.append('file', this.state.imageBlob);
        form.append('imageData', JSON.stringify(this.state.newImage));

        fetch('/api/Image/UploadImage',{
            credentials: 'include',
            method: 'POST',
            headers: {
                'Accept': 'application/json, application/xml, text/plain, text/html, *.*'
            },
            body: form
        });
    }

    public render() {
        const RemoveIconButton: JSX.Element = (
            <StyledRemoveIconButton
                content={'x'}
                size='small'
                onClick={() => null}
            />
        );

        return (
            <Wrapper>
                <div style={{textAlign: 'center'}}>
                    <SubTitle>Add New Image</SubTitle>
                </div>
                <div style={{ display: 'flex', flexFlow: 'row nowrap' }}>
                    <FormWrapper style={{ width: '50%' }}>
                        <div style={{ display: 'flex', flexFlow: 'row nowrap', paddingBottom: '1em' }}>
                            <div style={{ width: '30%' }}>
                                <StyledLabel>Title</StyledLabel>
                            </div>
                            <div style={{ width: '30%' }}>
                                <StyledInput value={this.state.newImage.title} onChange={(event) => this.propertyValueChanged('title', event.target.value)} />
                            </div>
                        </div>
                        <div style={{ display: 'flex', flexFlow: 'row nowrap', paddingBottom: '1em' }}>
                            <div style={{ width: '30%' }}>
                                <StyledLabel>Is image on carousel?</StyledLabel>
                            </div>
                            <div style={{ width: '30%' }}>
                                <Checkbox checked={this.state.newImage.isCarouselImage} onChange={this.changeCheckbox} />
                            </div>
                        </div>
                        <div style={{ display: 'flex', flexFlow: 'row nowrap', paddingBottom: '1em' }}>
                            <div style={{ width: '30%' }}>
                                <StyledLabel>Belongs to gallery</StyledLabel>
                            </div>
                            <div style={{ width: '30%' }}>
                                <Select onChange={this.dropdownChange} style={{width: '70%'}}>
                                    {
                                        this.state.galleries && this.state.galleries.map((gallery: IGallery) =>
                                            <Option key={gallery.id} value={gallery.id}>{gallery.title}</Option>
                                        )
                                    }
                                </Select>
                            </div>
                        </div>
                    </FormWrapper>
                    <div style={{ width: '50%' }}>
                        <div style={{ display: 'flex', flexFlow: 'column nowrap', paddingBottom: '1em' }}>
                            <div style={{ width: '100%', display: 'flex', flexFlow: 'row nowrap' }}>
                                <CustomReadOnlyInput value={this.state.imageBlob && this.state.imageBlob.name || 'Choose File...'} />
                                <CustomLabel htmlFor='file'>Browse</CustomLabel>
                                <input style={{ display: 'none', height: '0.1px', width: '0.1px', visibility: 'hidden' }} id='file' name='file' type="file" onChange={this.fileIsSelected} accept=".png,.jpeg,.jpg,.gif" />
                            </div>
                            <ThumbnailWrapper>
                                <Image className="thumb" src={this.state.imageBase64String} />
                                {this.state.imageBlob ? RemoveIconButton : ''}
                            </ThumbnailWrapper>
                        </div>
                    </div>
                </div>
                <div style={{width: '25%'}}>
                    <Button onClick={this.uploadNewImage}>Create</Button>
                </div>
            </Wrapper>
        );
    }
}
