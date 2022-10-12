import styled from 'styled-components';
import { ButtonWrapper } from '../../helper/ButtonWrapper';
import { LinkWrapper } from '../../helper/LinkWrapper';
import { buttonColorsVariants, buttonBackgroundColorsVariants, textColorVariants, buttonBackgroundColor } from '../styles';


export const ButtonPrimary = styled(ButtonWrapper)`
    color: ${buttonColorsVariants};
    width: 100%;
    height: 100%;
    font-size: ${(props: any) => props.fontSize ? props.fontSize + 'px' : '16px'};
    border-radius: ${(props: any) => props.borderRadius ? props.borderRadius + 'px' : '5px'};
    background-color: ${buttonBackgroundColorsVariants};
    background-image: ${(props: any) => 'url(' + props.backgroundImage + ')' ?? ''};
    background-size: cover;
    padding: 10px 20px;
    border: none;
    background-position: center center;
    transition: all 0.3s ease-in-out;
`;

export const LinkPrimary = styled(LinkWrapper)`
    color: ${textColorVariants};
    width: 100%;
    height: 100%;
    font-size: ${(props: any) => props.fontSize ? props.fontSize + 'px' : '16px'};
    padding: 10px 20px;
    border: none;
    transition: all 0.3s ease-in-out;
`;

export const ButtonCustomPrimary = styled(ButtonWrapper)`
    padding: 5px 20px;
    border-radius: 11px;
    background-color: ${buttonBackgroundColor};
    border: none;
`