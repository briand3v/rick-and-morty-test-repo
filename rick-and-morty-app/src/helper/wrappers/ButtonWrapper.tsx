import React from 'react';

interface Props {
    variant?: string
    className?: string
    children?: React.ReactNode
    padding?: number
    disabled?: boolean
    paddingLeft?: number
    paddingRight?: number
    direction?: string
    backgroundColor?: string
    borderRadius?: number | string
    inclination?: string
    backgroundImage?: NodeRequire
    backgroundPosition?: string
    justifyContent?: string
    fontSize?: string | number
    ref?: any
    width?: number
    height?: number
    onclick?: any
}

export const ButtonWrapper: React.FC<Props> = ({ className, children, onclick, disabled}) => {
    return (
        <button
            disabled={disabled}
            className={className}
            onClick={onclick}
        >{children}</button>
    )
}