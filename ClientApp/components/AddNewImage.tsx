import * as React from 'react';
import autobind from 'react-autobind';
import DataService from '../services/dataService';
import { IGallery, IImage } from '../interfaces/ModelInterfaces';
import styled from 'styled-components';
import uuid from 'uuid/v4';
import { Input, Checkbox, Select, Button } from 'antd';

const Option = Select.Option;

interface ILocalState {
    newImage: IImage;
    galleries: IGallery[];
    imageBlob: any;
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

const CustomReadOnlyInput: any = styled(CustomInput)`
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
`;

const ThumbnailWrapper: any = styled.div`
    margin-top: 5px;
    margin: 5px;
`;

const Image: any = styled.img`
    border: 1px solid lightgray;
    max-height: 100px;
    max-width: 100px;
    min-height: 75px;
    min-width: 75px;
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
`;

const StyledInput: any = styled(Input)`
    width: 25% !important;
`;

export default class AddNewImage extends React.Component<ILocalProps, ILocalState> {

    private fileName: string;

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
            imageBlob: null
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
            // const form = new FormData();
            // form.append('file', file);
            // form.append('name', 'brad');

            // fetch('/api/Image/UploadImage',{
            //     credentials: 'include',
            //     method: 'POST',
            //     headers: {
            //         'Accept': 'application/json, application/xml, text/plain, text/html, *.*'
            //     },
            //     body: form
            // });
            this.setState((prevState) => ({...prevState, imageBlob: file}));
        }
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
        // const RemoveIconButton: JSX.Element = (
        //     <StyledRemoveIconButton
        //         content={'x'}
        //         size='small'
        //         onClick={() => null}
        //     />
        // );

        return (
            <Wrapper>
                <SubTitle>Add New Image</SubTitle>
                <FormWrapper>
                    <div>
                        <StyledLabel>Title</StyledLabel>
                        <StyledInput value={this.state.newImage.title} onChange={(event) => this.propertyValueChanged('title', event.target.value)} />
                    </div>
                    <div>
                        <StyledLabel>Is image on carousel?</StyledLabel>
                        <Checkbox checked={this.state.newImage.isCarouselImage} onChange={this.changeCheckbox} />
                    </div>
                    <div>
                        <StyledLabel>Belongs to gallery</StyledLabel>
                        <Select onChange={this.dropdownChange} style={{width: '500px'}}>
                            {
                                this.state.galleries && this.state.galleries.map((gallery: IGallery) =>
                                    <Option key={gallery.id} value={gallery.id}>{gallery.title}</Option>
                                )
                            }
                        </Select>
                    </div>
                    <div>
                        <input type="file" onChange={this.fileIsSelected} accept=".png,.jpeg,.jpg,.gif" />
                    </div>
                    <div style={{width: '25%'}}>
                        <Button onClick={this.uploadNewImage}>Create</Button>
                    </div>
                </FormWrapper>
            </Wrapper>
        );
    }
}

{/* <InputWrapper>
    <CustomReadOnlyInput value={'Choose File...'} className={'CustomReadOnlyInput'} />
    <CustomLabel htmlFor="file">Browse</CustomLabel>
    <CustomInput type="file" name="file" id="file" onChange={this.fileSelected} accept=".png,.jpeg,.jpg,.gif" />
</InputWrapper>
<ThumbnailWrapper>
    <Image className="thumb" src={null} />
    {null ? RemoveIconButton : ''}
</ThumbnailWrapper> */}
