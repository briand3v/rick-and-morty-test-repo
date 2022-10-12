import styled from 'styled-components';
import { PageItemWrapper as ContainerWrapper } from '../../helper/ContentWrapper'
import { boxStylesVariants, containerStyles, containerStylesVariants, shadowColorVariants } from '../styles';

export const Container = styled.div`
    width: 100%;
    flex: 1;
    ${containerStyles}
`;

export const ContainerVariant = styled.div`
    background-color: ${containerStylesVariants};
`;


export const ContainerFlex = styled.div`
    display: flex;
    flex: 1;
    border-radius: ${(props: any) => props.borderRadius + 'px' ?? '0px'};
    background-color: ${containerStylesVariants};
`;

export const ContainerSection = styled(ContainerWrapper)`
    position: relative;
    width: 100%;
    display: flex;
    height: ${(props: any) => props.height ? props.height + 'px' : '100vh'};
    padding: ${(props: any) => props.padding ? props.padding + 'px' : '20px'};
    padding-left: ${(props: any) => props.paddingLeft ? props.paddingLeft + 'px' : '20px'};
    padding-right: ${(props: any) => props.paddingRight ? props.paddingRight + 'px' : '20px'};
    flex-direction: ${(props: any) => props.direction ? props.direction : 'row'};
    justify-content: ${(props: any) => props.justifyContent ? props.justifyContent : 'center'};
    background-color: ${containerStylesVariants};
    background-image: ${(props: any) => props.backgroundImage ? 'url(' + props.backgroundImage + ')' : 'none'};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: ${(props: any) => props.backgroundPosition ? props.backgroundPosition : 'center top'};;
    align-items: ${(props: any) => props.alignItems ? props.alignItems : 'center'};
`;

export const BoxCustom = styled(ContainerWrapper)`
    display: flex;
    width: ${(props: any) => props.width + 'px' ?? '100px'};
    height: ${(props: any) => props.height ? props.height + 'px' : '100%'};
    padding: ${(props: any) => props.padding + 'px' ?? '20px'};
    padding-left: ${(props: any) => props.paddingLeft + 'px' ?? '20px'};
    padding-right: ${(props: any) => props.paddingRight + 'px' ?? '20px'};
    flex-direction: ${(props: any) => props.direction};
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    background-color: ${(props: any) => props.backgroundColor ?? boxStylesVariants};
    box-shadow: 0px 1px 3px 3px ${shadowColorVariants};
`;

export const ComponentPanelContainer = styled(ContainerWrapper)`
    height: 100%;
    width: 80%;
    display: flex;
    flex-direction: column;
`