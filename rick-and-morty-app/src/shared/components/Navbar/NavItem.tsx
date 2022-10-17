import React from 'react'
import { Link } from 'react-router-dom'
import ButtonLink from '../button/ButtonLink'

const NavItem = ({ id, path, name, selectHandle, active = false }: {
    id: string | number
    path: string
    name: string
    active?: boolean
    selectHandle: any
}) => {
    return (
        <div key={id} className={"nav-item" + (active ? ' selected' : '')}>
            <Link to={path}>
                <ButtonLink
                    href={path}
                    onClick={selectHandle}
                    name={name}
                    id={id}
                />
            </Link>
        </div>
    )
}

export default NavItem