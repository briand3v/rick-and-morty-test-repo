import styled from 'styled-components';
import {
    PageParaphText as ParaphText,
    PageDivText as DivText,
    PageSpanText as SpanText
} from '../../helper/PageText';
import { textColorVariants } from '../styles';

export const ParaphTextStyled = styled(ParaphText)`
    color: ${textColorVariants};
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
