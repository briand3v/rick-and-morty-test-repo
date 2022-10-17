import React from 'react'
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useDarkMode } from 'usehooks-ts'

type DarkModeProps = {}

const DarkMode: React.FC<DarkModeProps> = () => {
    const { isDarkMode, toggle } = useDarkMode()
    return (
        <DarkModeSwitch
            checked={isDarkMode}
            onChange={toggle}
            size={24}
        />
    )
}

export default DarkMode