import * as React from 'react';

// Third-party components
import styled from 'styled-components';

// Props

interface ILocalProps {
    className: any;
    value: string;
}

// End Props

// Styled components

const ReadonlyInputDiv: any = styled.div`
    border-radius: .28571429rem;
    border: 1px solid gray;
    color: rgba(0,0,0,.87);
    float: left;
    font-family: 'Roboto Regular';
    height: 28px;
    line-height: 1.21428571em;
    max-width: 100%;
    text-align: left;
    width: 70%;
    padding: 5px 8px;
`;

// End Styled components

const ReadOnlyInput = (props: ILocalProps) => {
    const { className, value } = props;

    return (
        <ReadonlyInputDiv className={className}>
            {value}
        </ReadonlyInputDiv>
    );
};

export default ReadOnlyInput;
