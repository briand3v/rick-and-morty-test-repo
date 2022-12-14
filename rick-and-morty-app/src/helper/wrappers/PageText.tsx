import React from 'react';

interface Props {
    variant?: string
    className?: string
    children?: React.ReactNode
    fontSize?: number
    left?: number
    color?: string
    width?: number | string
    fontWeight?: number
    onClick?: React.EventHandler<any>
    href?: string
    ref?: React.ForwardedRef<any>
    dataId?: string | number
}

export const PageParaphText: React.FC<Props> = ({ className, children }) => {
    return (
        <p className={className}>{children}</p>
    )
}

export const PageLinkText: React.FC<Props> = ({ className, children, onClick, href, ref, dataId }) => {
    return (
        <a className={className} onClick={onClick} href={href} ref={ref} data-id={dataId}>{children}</a>
    )
}


export const PageSpanText: React.FC<Props> = ({ className, children }) => {
    return (
        <span className={className}>{children}</span>
    )
}

export const PageDivText: React.FC<Props> = ({ className, children }) => {
    return (
        <div className={className}>{children}</div>
    )
}