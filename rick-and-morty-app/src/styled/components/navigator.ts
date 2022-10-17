import styled from 'styled-components';
import { deviceMax, NavbarStylesVariantsBackground } from '../styles';
import { NavigatorTabItem, NavigatorTabs, NavigatorWrapper } from '../../helper/wrappers/navWrapper';
import { PageDivText as DivText } from '../../helper/wrappers/PageText';

export const LogoApp = styled(DivText)`
    display: flex;
    width: 40%;
    @media only screen and ${deviceMax.mobileL} {
        width: 100%;
        justify-content: center;
    }
`

export const NavTabs = styled(NavigatorTabs)`
    display: flex;
    width: 100%;
    @media only screen and ${deviceMax.laptopL} {
        width: 80%;
    }
    @media only screen and ${deviceMax.mobileL} {
        width: 100%;
    }
`;

export const NavTabItem = styled(NavigatorTabItem)`
    display: flex;
    justify-content: center;
    width: 50%;
    @media only screen and ${deviceMax.laptopL} {
        width: 20%;
    }
    @media only screen and ${deviceMax.mobileL} {
        width: 50%;
    }
`;

export const Navigator = styled(NavigatorWrapper)`
    width: 100%;
    display: flex;
    padding: 20px;
    position: relative;
    background-color: #fff;
    box-shadow: -1px 1px 4px 0px #6f6f6f4d;
    @media only screen and ${deviceMax.mobileL} {
        flex-direction: column;
        align-items: center;
    }
`;