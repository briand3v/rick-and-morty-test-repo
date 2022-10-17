import styled from 'styled-components';
import { InputSimple, InputWrapper } from '../../helper/wrappers/InputWrapper';
import { inputColorsVariantsText, textColorVariants } from '../styles';


export const InputForm = styled(InputWrapper)`
    width: 100%;
    height: 100%;
    color: ${textColorVariants};
    font-size: ${(props: any) => props.fontSize ? props.fontSize + 'px' : '16px'};
    border-radius: ${(props: any) => props.borderRadius ? props.borderRadius + 'px' : '0px'};
    background-color: ${(props: any) => props.backgroundColor ? props.backgroundColor : 'transparent'};
    transition: all 0.3s ease-in-out;
    border: none;
    padding: 15px 10px;
    &::placeholder {
        color: ${textColorVariants};
    }
`;

export const InputSearch = styled(InputSimple)`
    border: none;
    width: 100%;
    height: 100%;
    padding: 10px;
    font-size: 22px;
    font-weight: 700;
    color: ${inputColorsVariantsText};
    background-color: transparent;
    &::placeholder {
        font-size: 22px;
        color: ${inputColorsVariantsText};
        font-weight: 700;
    }
`;