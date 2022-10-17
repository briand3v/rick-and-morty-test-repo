import React from 'react';

interface Props {
    variant?: string
    className?: string
    children?: React.ReactNode
    padding?: number
    paddingLeft?: number
    paddingRight?: number
    direction?: string
    backgroundColor?: string
    borderRadius?: number
    inclination?: string
    backgroundImage?: NodeRequire | string
    backgroundPosition?: string
    justifyContent?: string
    alignItems?: string
    mobileDisplay?: string
    ref?: any
    width?: number
    height?: number
}

export const PageItemWrapper: React.FC<Props> = ({ className, children }) => {
    return (
        <div className={className}>{children}</div>
    )
}