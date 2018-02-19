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
    imageBlob: any;
    imageBase64String: string;
    newGallery: IGallery;
}

interface ILocalProps {
}

const Wrapper: any = styled.div`
    width: 80vw;
    border: 3px solid #929292;
    border-radius: 4px;
`;

const SubTitle: any = styled.h2`
    font-family: 'Open Sans';
    font-weight: 500;
    font-size: 140%;
    color: #2CB1A8;
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

const CustomReadOnlyInput: any = styled(ReadOnlyInput)`
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
    width: 40%;
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

const ThumbnailWrapper: any = styled.div`
    margin-top: 5px;
    margin: 5px;
`;

const Image: any = styled.img`
    height: 200px;
`;

export default class AddNewGallery extends React.Component<ILocalProps, ILocalState> {

    constructor(props: ILocalProps) {
        super(props);

        this.state = {
            imageBlob: null,
            imageBase64String: null,
            newGallery: {
                id: uuid(),
                title: 'New Gallery',
                coverImage_Id: null
            }
        };

        autobind(this);
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

    private createNewGallery() {
        const form = new FormData();
        form.append('file', this.state.imageBlob);
        form.append('galleryData', JSON.stringify(this.state.newGallery));

        // TODO put in service
        fetch('/api/Gallery/CreateGallery',{
            credentials: 'include',
            method: 'POST',
            headers: {
                'Accept': 'application/json, application/xml, text/plain, text/html, *.*'
            },
            body: form
        });
    }

    private propertyValueChanged(propertyName: string, value: string) {
        this.setState((prevState) => ({
            ...prevState,
            newGallery: {
                ...prevState.newGallery,
                [propertyName]: value
            }
        }));
    }

    // TODO clean up all inline styles
    public render() {

        return (
            <div style={{ paddingTop: '20px'}}>
                <div style={{textAlign: 'left'}}>
                    <SubTitle>Add New Gallery</SubTitle>
                </div>
                <Wrapper>
                <div style={{ display: 'flex', flexFlow: 'row nowrap', paddingTop: '20px' }}>
                    <FormWrapper style={{ width: '50%' }}>
                        <div style={{ display: 'flex', flexFlow: 'row nowrap', paddingBottom: '1em', height: '3em' }}>
                            <div style={{ width: '30%' }}>
                                <StyledLabel>Title</StyledLabel>
                            </div>
                            <div style={{ width: '30%' }}>
                                <StyledInput value={this.state.newGallery.title} onChange={(event) => this.propertyValueChanged('title', event.target.value)} />
                            </div>
                        </div>
                        <div style={{width: '25%', padding: '10px', flexGrow: 1, display: 'flex' }}>
                            <Button style={{ alignSelf: 'flex-end' }} onClick={this.createNewGallery}>Create</Button>
                        </div>
                    </FormWrapper>
                    <div style={{ width: '50%' }}>
                        <div style={{ display: 'flex', flexFlow: 'column nowrap', paddingBottom: '1em' }}>
                            <div style={{ width: '100%', display: 'flex', flexFlow: 'row nowrap' }}>
                                <CustomReadOnlyInput value={this.state.imageBlob && this.state.imageBlob.name || 'Choose Cover Image...'} />
                                <CustomLabel htmlFor='galleryFile'>Browse</CustomLabel>
                                <input style={{ display: 'none', height: '0.1px', width: '0.1px', visibility: 'hidden' }} id='galleryFile' name='galleryFile' type="file" onChange={this.fileIsSelected} accept=".png,.jpeg,.jpg,.gif" />
                            </div>
                            <ThumbnailWrapper>
                                <Image className="thumb" src={this.state.imageBase64String} />
                            </ThumbnailWrapper>
                        </div>
                    </div>
                </div>
                </Wrapper>
            </div>
        );
    }
}
