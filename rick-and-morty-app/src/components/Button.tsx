import React from 'react';
import { ButtonPrimary } from '../styled/components/button';

interface props {
    textContent: string
    variantName?: any
    borderRadius?: number | string
    fontSize?: string | number
    clickHandle?: any
}

const Button = ({
    textContent = 'default',
    variantName,
    borderRadius,
    fontSize,
    clickHandle
}: props) => {
    const variantStyle = variantName ?? 'primary';
    return (
        <ButtonPrimary
            className="button-custom-main"
            variant={variantStyle}
            borderRadius={borderRadius}
            fontSize={fontSize}
            onclick={clickHandle}
        >
            {textContent}
            {/* <img alt="arrow-right-button" src={require('../assets/icons/arrow-right-button.png')} height={15} className="arrow-right-button" /> */}
        </ButtonPrimary>
    )
}

export default Button;