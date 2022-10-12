import React from 'react'
import Button from '../../../components/Button'
import { useNavigate } from "react-router-dom";
import { ParaphTextStyled } from '../../../styled/components/text';

const LoginSession = () => {
    let navigate = useNavigate()
    const clickHandle = () => {
        navigate('../home', { replace: true })
    }
    return (
        <div>
            <img className="avatar-login" alt="user-avatar-login" src={'https://wallpaperaccess.com/full/2213424.jpg'} />
            <ParaphTextStyled
                variant={'primary'}
                className={"login-session-mail"}
            >
                supercrew3@gmail.com
            </ParaphTextStyled>
            <div className="submit-sign-in">
                <Button
                    textContent={'Log in'}
                    variantName="default"
                    borderRadius={20}
                    fontSize={16}
                    clickHandle={clickHandle}
                />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <ParaphTextStyled
                    variant={'primary'}
                >
                    Not you?&nbsp;
                </ParaphTextStyled>
                <ParaphTextStyled
                    variant={'primary'}
                    className="custom-link-primary"
                >
                    Use another account
                </ParaphTextStyled>
            </div>
        </div>
    )
}

export default LoginSession