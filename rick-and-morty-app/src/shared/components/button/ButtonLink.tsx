import React from 'react'
import { SpanTextStyled } from '../../../styled/components/text'

interface ButtonLinkProps {
    id: string | number
    name: string
    href: any
    onClick: React.EventHandler<any>
}
const ButtonLink = React.forwardRef(({ onClick, href, name, id }: ButtonLinkProps, ref: React.ForwardedRef<any>) => {
    return (
        <SpanTextStyled
            ref={ref}
            href={href}
            variant="default"
            onClick={onClick}
            dataId={id}
        >
            {name}
        </SpanTextStyled>
    )
})

export default ButtonLink