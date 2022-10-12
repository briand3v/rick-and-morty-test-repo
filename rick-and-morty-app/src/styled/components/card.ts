import styled from 'styled-components';
import { containerStylesVariants, textColorVariants } from '../styles';
import { PageItemWrapper as ContainerWrapper } from '../../helper/ContentWrapper';

export const CardPrimary = styled(ContainerWrapper)`
    width: 100%;
    height: 100%;
    border-radius: ${(props: any) => props.borderRadius ? props.borderRadius + 'px' : '5px'};
    background-color: ${(props: any) => props.backgroundColor ?? '#fff'};
    background-image: ${(props: any) => 'url(' + props.backgroundImage + ')' ?? ''};
    background-size: contain;
    background-repeat: no-repeat;
    transform: ${(props: any) => props.inclination === 'right' ? 'rotate(0deg)' : 'rotate(0deg)'};
    background-position: center center;
    position: relative;
`;

export const CardProfile = styled(ContainerWrapper)`
    width: 100%;
    height: 100%;
    border-radius: ${(props: any) => props.borderRadius ? props.borderRadius + 'px' : '50%'};
    background-color: ${(props: any) => props.backgroundColor ?? '#fff'};
    background-image: ${(props: any) => 'url(' + props.backgroundImage + ')' ?? ''};
    background-size: cover;
    transform: ${(props: any) => props.inclination === 'right' ? 'rotate(0deg)' : 'rotate(0deg)'};
    background-position: center center;
`;

export const TabAnimation = styled(ContainerWrapper)`
    position: relative;
    display: flex;
    width: 60px;
    height: 60px;
    border-radius: 13px;
    background-color: ${(props: any) => props.backgroundColor ?? '#fff'};
    padding: ${(props: any) => props.padding ? props.padding + 'px' : '0px'};
    flex-direction: ${(props: any) => props.direction ?? 'row'};
    justify-content: center;
    align-items: center;
`

export const TagCustomPrimary = styled(ContainerWrapper)`
    position: relative;
    display: flex;
    border-radius: 11px;
    background-color: ${(props: any) => props.backgroundColor ?? '#fff'};
    padding: ${(props: any) => props.padding ? props.padding : '2px 10px'};
    flex-direction: ${(props: any) => props.direction ?? 'row'};
    color: ${textColorVariants};
    justify-content: center;
    align-items: center;
`

export const CardPreviewPanel = styled(ContainerWrapper)`
    background-color: ${containerStylesVariants};
`