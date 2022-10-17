import React from 'react';
import { ButtonPrimary } from '../styled/components/button';

interface ButtonProps {
    textContent: string;
    variantName?: any;
    borderRadius?: number | string;
    fontSize?: string | number;
    clickHandle?: any;
    disabled?: boolean
}

const Button = ({
    textContent = 'default',
    variantName,
    borderRadius,
    fontSize,
    clickHandle,
    disabled
}: ButtonProps) => {
    const variantStyle = variantName ?? 'primary';
    return (
        <ButtonPrimary
            className={"button-custom-main" + (disabled ? ' disabled': '')}
            variant={variantStyle}
            borderRadius={borderRadius}
            fontSize={fontSize}
            onclick={clickHandle}
            disabled={disabled}
        >
            {textContent}
        </ButtonPrimary>
    )
}

export default Button;