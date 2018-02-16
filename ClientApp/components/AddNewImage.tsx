import * as React from 'react';
import autobind from 'react-autobind';
import DataService from '../services/dataService';
import { IGallery, IImage } from '../interfaces/ModelInterfaces';
import styled from 'styled-components';
import uuid from 'uuid/v4';

interface ILocalState {
    newImage: IImage;
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
            }
        };

        autobind(this);
    }

    private fileIsSelected(event: any): void {
        const file: any = event.target.files[0];

        if (file && file.type.match('image.*')) {
            const form = new FormData();
            form.append('file', file);
            form.append('name', 'brad');

            fetch('/api/Image/UploadImage',{
                credentials: 'include',
                method: 'POST',
                headers: {
                    'Accept': 'application/json, application/xml, text/plain, text/html, *.*'
                },
                body: form
            });
        }
    }

    private propertyValueChanged(propertyName: string, value: any) {
        this.setState((prevState) => {
            return {
                ...prevState,
                newImage: {
                    ...prevState.newImage,
                    [propertyName]: value
                }
            };
        });
    }

    public componentWillUpdate() {
        return true;
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
                <SubTitle>Add New Image</SubTitle>
                <label>Title</label>
                <input type="text" value={this.state.newImage.title} onChange={(event) => this.propertyValueChanged('title', event.target.value)} />
                <label>Is image on carousel?</label>
                <input type="checkbox" checked={this.state.newImage.isCarouselImage} />
                <label>Belongs to gallery</label>
                <select>
                    <option>Test 1</option>
                    <option>Test 2</option>
                    <option>Test 3</option>
                </select>
                {/* <InputWrapper>
                    <CustomReadOnlyInput value={'Choose File...'} className={'CustomReadOnlyInput'} />
                    <CustomLabel htmlFor="file">Browse</CustomLabel>
                    <CustomInput type="file" name="file" id="file" onChange={this.fileSelected} accept=".png,.jpeg,.jpg,.gif" />
                </InputWrapper>
                <ThumbnailWrapper>
                    <Image className="thumb" src={null} />
                    {null ? RemoveIconButton : ''}
                </ThumbnailWrapper> */}
                <input type="file" onChange={this.fileIsSelected} accept=".png,.jpeg,.jpg,.gif" />
            </Wrapper>
        );
    }
}
