import { css } from 'styled-components';
import theme from 'styled-theming';

// palette colors 
const primaryColor = '#008bb5';
const white = '#fff';
const whiteSecondary = '#ede0d4';
const black = '#101628';
const blackSecondary = '#25335d';
const greyDark = '#343a40';
const greyLight = '#adb5bd';
const green = '#00ec00';
const blueBack = '#119cad';
const redPrimary = '#e21313'

export const containerStyles = theme('mode', {
    light: css`
        background: ${white};
        color: ${white};
    `,
    dark: css`
        background: ${black};
        color: ${black};
    `
});

export const containerStylesVariants = theme.variants('mode', 'variant', {
    default: { light: white, dark: black },
    primary: { light: white, dark: black },
    secondary: { light: whiteSecondary, dark: blackSecondary },
    third: { light: blackSecondary, dark: whiteSecondary },
    success: { light: white, dark: black },
    warning: { light: white, dark: black }
});

export const boxStylesVariants = theme.variants('mode', 'variant', {
    default: { light: white, dark: black },
    primary: { light: white, dark: black },
    secondary: { light: whiteSecondary, dark: blackSecondary },
    third: { light: whiteSecondary, dark: blackSecondary },
    success: { light: white, dark: black },
    warning: { light: white, dark: black }
});

export const buttonBackgroundColor = theme.variants('mode', 'variant', {
    default: { light: white, dark: black },
    primary: { light: white, dark: black },
    success: { light: white, dark: black },
    warning: { light: redPrimary, dark: redPrimary }
});

export const shadowColorVariants = theme.variants('mode', 'variant', {
    default: { light: white, dark: black },
    primary: { light: '#d8d8d882', dark: '#0e1322' },
    secondary: { light: '#d8d8d882', dark: '#0e1322' }
});

export const textColorVariants = theme.variants('mode', 'variant', {
    default: { light: black, dark: black },
    default2: { light: white, dark: white },
    primary: { light: black, dark: white },
    secondary: { light: whiteSecondary, dark: blackSecondary },
    nullable: { light: greyLight, dark: greyLight },
    success: { light: green, dark: green },
    warning: { light: redPrimary, dark: redPrimary },
    simple: { light: white, dark: white },
    selected: { light: greyDark, dark: white },
    noSelected: { light: greyLight, dark: white }
});


/* BUTTONS */

export const buttonBorderColorsVariants = theme.variants('mode', 'variant', {
    default: { light: black, dark: black },
    primary: { light: black, dark: white },
    secondary: { light: blackSecondary, dark: whiteSecondary },
    success: { light: white, dark: black },
    warning: { light: redPrimary, dark: redPrimary },
    simple: { light: primaryColor, dark: primaryColor },
    selected: { light: greyDark, dark: white },
    noSelected: { light: greyLight, dark: white }
});


export const buttonColorsVariants = theme.variants('mode', 'variant', {
    default: { light: white, dark: white },
    primary: { light: white, dark: black },
    secondary: { light: whiteSecondary, dark: blackSecondary },
    success: { light: white, dark: black },
    warning: { light: white, dark: black },
    simple: { light: primaryColor, dark: primaryColor },
    selected: { light: greyDark, dark: white },
    noSelected: { light: greyLight, dark: white }
});

export const buttonBackgroundColorsVariants = theme.variants('mode', 'variant', {
    default: { light: blueBack, dark: blueBack },
    primary: { light: black, dark: white },
    secondary: { light: whiteSecondary, dark: blackSecondary },
    success: { light: white, dark: black },
    warning: { light: white, dark: black },
    simple: { light: primaryColor, dark: primaryColor },
    selected: { light: greyDark, dark: white },
    noSelected: { light: greyLight, dark: white }
});

/* BUTTONS */

/* INPUTS */

const whiteDarkPrimary = '#989fb3'
export const inputColorsVariantsText = theme.variants('mode', 'variant', {
    default: { light: whiteDarkPrimary, dark: whiteSecondary },
    primary: { light: whiteDarkPrimary, dark: whiteSecondary }
})

/* INPUTS */