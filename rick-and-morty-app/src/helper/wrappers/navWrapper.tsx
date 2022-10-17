import React from 'react';

interface Props {
    variant: string
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
    ref?: any
    width?: number
    height?: number
}

export const NavigatorWrapper: React.FC<Props> = ({ className, children }) => {
    return (
        <nav className={className}>{children}</nav>
    )
}

export const NavigatorTabs: React.FC<Props> = ({ className, children }) => {
    return (
        <div className={className}>
            {children}
        </div>
    )
}

export const NavigatorTabItem: React.FC<Props> = ({ className, children }) => {
    return (
        <div className={className}>
            {children}
        </div>
    )
}