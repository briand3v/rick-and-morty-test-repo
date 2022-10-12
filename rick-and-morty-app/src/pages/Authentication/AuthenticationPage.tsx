import React, { useState, useEffect } from 'react';
import Form from '../../components/form/Form';
import { LinkPrimary } from '../../styled/components/button';
import { CardPrimary } from '../../styled/components/card';
import { Container, ContainerSection } from '../../styled/components/container';
import { ParaphTextStyled } from '../../styled/components/text';

const AuthenticationPage = () => {
    const [initPage, setInitPage] = useState<boolean>(false)
    const [login, setLogin] = useState<boolean>(true)

    useEffect(() => {
        setInitPage(true)
    }, [])

    const signInTypeToggle = () => {
        setLogin(!login)
    }

    return (
        <Container className="full-height">
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
                <div className={"sign-up-container-left" + (initPage ? ' show' : '')}>
                    <ParaphTextStyled className={"title-page"} variant="primary" fontSize={22}>
                        Welcome back!
                    </ParaphTextStyled>
                    <div style={{ width: '60%' }}>
                        <CardPrimary
                            backgroundColor="transparent"
                            borderRadius={20}
                        >
                            <Form login={login} />
                            <div className="view-switch-login">
                                <ParaphTextStyled
                                    variant="primary"
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
                </div>
                <div className={"sign-up-container-right" + (initPage ? ' show' : '')}
                    style={{
                        backgroundImage: 'url(' + require('../../assets/mockups/signin-mockup.jpeg') + ')'
                    }}
                >
                    <div className="overlay-main"></div>
                    <ParaphTextStyled
                        className={"no-overlap"}
                        variant="simple" fontSize={31}>
                        Connect with your friends by quotes
                    </ParaphTextStyled>
                    <div className={"no-overlap"} style={{ width: '80%' }}>
                        <ParaphTextStyled
                            variant="simple" fontSize={23}>
                            "The most important kind of freedom is to be what you really are."
                        </ParaphTextStyled>
                        <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
                            <ParaphTextStyled
                                variant="simple" fontSize={18}>
                                ~ Jim Morrison
                            </ParaphTextStyled>
                        </div>
                    </div>
                </div>

            </ContainerSection>
        </Container>
    )
}

export default AuthenticationPage;