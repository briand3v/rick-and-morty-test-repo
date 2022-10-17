import React, { useState } from 'react';
import { useLogoutUserMutation } from '../../../redux/api/authApi';
import { Navigator, NavTabs, NavTabItem } from '../../../styled/components/navigator';
import NavItem from './NavItem';
import './navbar.styles.css';
import Button from '../../../components/Button';
import { SpanTextStyled } from '../../../styled/components/text';
import DarkMode from '../../../components/DarkModeButton';
import { userApi } from '../../../redux/api/userApi';

const Navbar = () => {
    const [selected, setSelected] = useState<string>('home');
    const onSelectHandle = (e: any) => setSelected(e.target.getAttribute('data-id') ?? 'home')
    // logout action
    const [logoutUser] = useLogoutUserMutation()
    const logoutHandle = async () => {
        logoutUser()
        window.location.href = '/signin';
    }

    const user = userApi.endpoints.getMe.useQueryState(null, {
        selectFromResult: (data) => data,
    });

    return (
        <>
            <header>
                <Navigator
                    variant="primary"
                    className="navbar"
                >
                    <SpanTextStyled variant="default" className="app-header-title">Rick and morty</SpanTextStyled>
                    <NavTabs className="nav-content-links" variant={"default"}>
                        <NavTabItem variant={"default"} className="nav-content-links-item">
                            <NavItem
                                key={2}
                                id={'home'}
                                path={'/'}
                                name={'Characters'}
                                active={selected === 'home'}
                                selectHandle={onSelectHandle}
                            />
                        </NavTabItem>
                        {
                            user?.data && (
                                <NavTabItem variant={"default"} className="nav-content-links-item">
                                    <div className="log-out-button-container">
                                        <Button
                                            variantName="default"
                                            clickHandle={logoutHandle}
                                            textContent={'log out'}
                                            fontSize={12}
                                            />
                                    </div>
                                </NavTabItem>
                            )
                        }
                        <div className="dark-toggle-container">
                            <DarkMode />
                        </div>
                    </NavTabs>
                </Navigator>
            </header>
        </>
    )
}

export default Navbar;