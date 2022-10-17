import React, { useState, useEffect } from 'react';
import Form from '../../components/form/Form';
import { LinkPrimary } from '../../styled/components/button';
import { CardPrimary } from '../../styled/components/card';
import { Container, ContainerSection, ContainerSectionChild } from '../../styled/components/container';
import { ParaphTextStyled } from '../../styled/components/text';
import { useRegisterUserMutation, useLoginUserMutation } from '../../redux/api/authApi';
import { RegisterInput, LoginInput } from '../../constants/form-structure';
import { useNavigate } from 'react-router-dom';

const AuthenticationPage = () => {
    const [registerUser, {
        isLoading,
        isSuccess,
        isError,
        error
    }] =
        useRegisterUserMutation()

    let navigate = useNavigate()
    const [initPage, setInitPage] = useState<boolean>(false)
    const [login, setLogin] = useState<boolean>(true)
    const [errorEvent, setErrorEvent] = useState<any>({
        show: false,
        message: ''
    });

    const [loginUser, { 
        isLoading: isLoadingLogin, 
        isSuccess: isSuccessLogin, 
        isError: isErrorLogin,
        error: errorLogin
    }] =
        useLoginUserMutation()

    useEffect(() => {
        setInitPage(true)
    }, [])

    useEffect(() => {
        if (errorEvent.show) {
            setTimeout(() => {
                setErrorEvent(false);
            }, 4000);
        }
    }, [errorEvent])

    useEffect(() => {
        if (isSuccess) {
            setLogin(true);
        }
        if (isError) {
            setErrorEvent({
                show: true,
                message: (error as any)?.data?.message || 'User already exist'
            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoading])

    useEffect(() => {
        if (isSuccessLogin) {
            navigate('/')
        }
        if (isErrorLogin) {
            setErrorEvent({
                show: true,
                message: (errorLogin as any)?.data?.message || 'User does not exist'
            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoadingLogin])

    const signInTypeToggle = () => {
        setLogin(!login)
        setErrorEvent(false)
    }

    const handleSubmit = (inputsValidations: any) => {
        if (login) {
            const data: LoginInput = inputsValidations
            loginUser(data)
        } else {
            const data: RegisterInput = inputsValidations
            registerUser(data)
        }
    }

    return (
        <Container className="parent-container">
            <ContainerSection
                padding={30}
                direction={'row'}
                paddingLeft={0}
                paddingRight={0}
                justifyContent={"flex-end"}
                alignItems={"flex-end"}
                className="container-section"
                variant="primary"
            >
                <ContainerSectionChild
                    className={"sign-up-container-left" + (initPage ? ' show' : '')}
                    direction={'column'}
                >
                    <ParaphTextStyled className={"title-page"} variant="primary" fontSize={22} fontWeight={700}>
                        Welcome back!
                    </ParaphTextStyled>
                    <div>
                        <CardPrimary
                            variant="secondary"
                            backgroundColor="transparent"
                            borderRadius={20}
                        >
                            <Form 
                                loginAction={login} 
                                handleSubmit={handleSubmit}
                                errorAlert={errorEvent}
                                />
                            <div className="view-switch-login">
                                <ParaphTextStyled
                                    variant="secondary"
                                    fontSize={15}
                                >
                                    {login ? 'Don\'t you have an account?' : 'Already have an account?'}
                                </ParaphTextStyled>
                                <div className="link-login">
                                    <LinkPrimary
                                        className="custom-link-primary"
                                        variant={"primary"}
                                        onLinkClick={signInTypeToggle}
                                    >
                                        {login ? 'Create' : 'Log In'}
                                    </LinkPrimary>
                                </div>
                            </div>
                        </CardPrimary>
                    </div>
                </ContainerSectionChild>
                <ContainerSectionChild
                    className={"sign-up-container-right" + (initPage ? ' show' : '')}
                    backgroundImage={require('../../assets/mockups/signin-mockup.jpeg')}
                    mobileDisplay={'none'}
                >
                    <div className="overlay-main"></div>
                    <ParaphTextStyled
                        className={"no-overlap"}
                        variant="simple" fontSize={31}>
                        Know more about this awesome show
                    </ParaphTextStyled>
                    <div className={"no-overlap"} style={{ width: '80%' }}>
                        <ParaphTextStyled
                            variant="simple" fontSize={23}>
                            "To live is to risk it all; otherwise you’re just an inert chunk of randomly assembled molecules drifting wherever the universe blows you…"
                        </ParaphTextStyled>
                        <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
                            <ParaphTextStyled
                                variant="simple" fontSize={18}>
                                ~ Rick sanchez
                            </ParaphTextStyled>
                        </div>
                    </div>
                </ContainerSectionChild>
            </ContainerSection>
        </Container>
    )
}

export default AuthenticationPage;