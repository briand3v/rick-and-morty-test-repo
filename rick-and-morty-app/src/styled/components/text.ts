import styled from 'styled-components';
import {
    PageParaphText as ParaphText,
    PageDivText as DivText,
    PageSpanText as SpanText,
    PageLinkText
} from '../../helper/wrappers/PageText';
import { deviceMax, textColorVariants } from '../styles';

export const ParaphTextStyled = styled(ParaphText)`
    color: ${(props: any) => props.color ? props.color : textColorVariants};
    font-size: ${(props: any) => props.fontSize ? props.fontSize + 'px' : 'none'};
`;

export const DivTextStyled = styled(DivText)`
    line-height: 2rem;
    color: ${textColorVariants};
`;

export const SpanTextStyled = styled(SpanText)`
    color: ${textColorVariants};
    font-weight: ${(props: any) => props.fontWeight ? props.fontWeight : '400'};
`;

export const NumberPrimary = styled(SpanText)`
    font-weight: 700;
    font-size: 13px;
    color: ${textColorVariants}
`;

export const TitleTextStyled = styled(ParaphText)`
    font-size: ${(props: any) => props.fontSize ? props.fontSize + 'px' : '27px'};
    text-transform: ${(props: any) => props.textTransform ?? 'none'};
    text-align: ${(props: any) => props.textAlign ?? 'start'};
    color: ${textColorVariants};
    font-weight: 700;
    @media only screen and ${deviceMax.mobileL} {
        font-size: 2rem;
        margin-bottom: 10px;
    }
`;

export const LinkTextStyled = styled(PageLinkText)`
    color: ${textColorVariants};
    font-size: ${(props: any) => props.fontSize ? props.fontSize + 'px' : '14px'};
    text-transform: ${(props: any) => props.textTransform ?? 'none'};
    text-align: ${(props: any) => props.textAlign ?? 'start'};
    margin-top: 10px;
    margin-bottom: 10px;
    margin-right: 10px;
    margin-left: 10px;
`;
