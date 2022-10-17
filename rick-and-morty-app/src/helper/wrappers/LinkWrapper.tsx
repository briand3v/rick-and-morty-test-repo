import React from 'react';

interface Props {
    variant?: string;
    className?: string;
    children?: React.ReactNode;
    onLinkClick: any;
    padding?: number;
    paddingLeft?: number;
    paddingRight?: number;
    direction?: string;
    backgroundColor?: string;
    borderRadius?: number | string;
    inclination?: string;
    backgroundImage?: NodeRequire;
    backgroundPosition?: string;
    justifyContent?: string;
    fontSize?: string | number;
    ref?: any;
    width?: number;
    height?: number;
}

export const LinkWrapper: React.FC<Props> = ({ className, onLinkClick, children }) => {
    return (
        <div className={className} onClick={onLinkClick}>{children}</div>
    )
}