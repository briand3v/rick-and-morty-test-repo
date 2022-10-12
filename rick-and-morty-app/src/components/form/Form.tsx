import React, { useEffect } from 'react'
import FromValidations from './FormValidaton'
import { useNavigate } from "react-router-dom";
import Button from '../Button';
import { InputForm } from '../../styled/components/input';
import LoginSession from '../../pages/Authentication/components/LoginSession';
import { 
    InputValidations, 
    Validations,
    CheckUserNameValidationProps,
    CheckEmailValidationProps,
    CheckPasswordValidationProps,
    CheckConfirmPasswordValidationProps,
    ValidateOptions
} from '../../types/authentication';
import { FormStructure } from '../../constants/form-structure';


const Form = ({ login }: { login: boolean }) => {
    let navigate = useNavigate()
    const [validationOptions, setValidationOptions] = React.useState<Validations>(FormStructure)
    const [inputsValidations, setInputsValidations] = React.useState<InputValidations>({
        userName: null,
        password: null,
        email: null,
        confirmPassword: null
    })
    const [inputUsername, setInputUsername] = React.useState<string>('')
    const [inputEmail, setInputEmail] = React.useState<string>('')
    const [inputPassword, setInputPassword] = React.useState<string>('')
    const [inputConfirmPassword, setInputConfirmPassword] = React.useState<string>('')
    const [formChecksFailed, setFormChecksFailed] = React.useState<boolean>(false)

    const [alreadyHasSession] = React.useState<boolean>(true)

    useEffect(() => {
        const checkUsernameValidation = () => {
            return { usernamecharacters: inputUsername.length > 5 }
        }

        const checkEmailValidation = () => {
            return { emailformat: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(inputEmail) }
        }

        const checkPasswordValidation = () => {
            return {
                passwordcharactersminimum: inputPassword.length > 7,
                passwordonenumber: /(?=.*\d)/.test(inputPassword),
                passwordspecialcharacter: /(?=.*[#$^+=!*()@%&])/.test(inputPassword)
            }
        }

        const checkConfirmPasswordValidation = () => {
            return {
                confirmmatchpassword: (inputPassword.length > 0 && inputPassword === inputConfirmPassword)
            }
        }

        let userName: CheckUserNameValidationProps = checkUsernameValidation()
        let email: CheckEmailValidationProps = checkEmailValidation()
        let password: CheckPasswordValidationProps = checkPasswordValidation()
        let confirmPassword: CheckConfirmPasswordValidationProps = checkConfirmPasswordValidation()

        setValidationOptions((statePrev: Validations) => ({
            ...statePrev,
            userName: statePrev.userName.map((userNameValidation: ValidateOptions) => {
                userNameValidation.show = false
                if (userNameValidation.key === 'usernamecharacters' && !userName.usernamecharacters && statePrev.currentTyping === 'username') {
                    userNameValidation.validate = false
                    userNameValidation.show = true
                }
                return userNameValidation
            }),
            email: statePrev.email.map((emailValidation: ValidateOptions) => {
                emailValidation.show = false
                if (emailValidation.key === 'emailformat' && !email.emailformat && statePrev.currentTyping === 'email') {
                    emailValidation.validate = false
                    emailValidation.show = true
                }
                return emailValidation
            }),
            password: statePrev.password.map((passwordValidation: ValidateOptions) => {
                passwordValidation.show = false
                if (statePrev.currentTyping === 'password') {
                    if (passwordValidation.key === 'passwordcharactersminimum' && !password.passwordcharactersminimum) {
                        passwordValidation.validate = false
                        passwordValidation.show = true
                    }
                    if (passwordValidation.key === 'passwordonenumber' && !password.passwordonenumber) {
                        passwordValidation.validate = false
                        passwordValidation.show = true
                    }
                    if (passwordValidation.key === 'passwordspecialcharacter' && !password.passwordspecialcharacter) {
                        passwordValidation.validate = false
                        passwordValidation.show = true
                    }
                }
                return passwordValidation
            }),
            confirmPassword: statePrev.confirmPassword.map((confirmPasswordValidation: ValidateOptions) => {
                confirmPasswordValidation.show = false
                if (confirmPasswordValidation.key === 'confirmmatchpassword' && !confirmPassword.confirmmatchpassword && statePrev.currentTyping === 'confirm-password') {
                    confirmPasswordValidation.validate = false
                    confirmPasswordValidation.show = true
                }
                return confirmPasswordValidation
            }),
        }))

        if (!userName.usernamecharacters || !password.passwordcharactersminimum) setFormChecksFailed(true)

        setInputsValidations((statePrev: InputValidations) => ({
            ...statePrev,
            userName: userName.usernamecharacters,
            password: password.passwordcharactersminimum && password.passwordonenumber && password.passwordspecialcharacter,
            email: email.emailformat,
            confirmPassword: confirmPassword.confirmmatchpassword
        }))

    }, [inputUsername, inputPassword, inputEmail, inputConfirmPassword])

    const inputChangeHandler = (e: any) => {
        let type = e.target.getAttribute('data-type')
        setValidationOptions((statePrev: Validations) => ({ ...statePrev, currentTyping: type }))
        switch (type) {
            case 'username': setInputUsername(e.target.value); break;
            case 'email': setInputEmail(e.target.value); break;
            case 'password': setInputPassword(e.target.value); break;
            case 'confirm-password': setInputConfirmPassword(e.target.value); break;
        }
    }

    const inputFocusHandler = (e: any) => {
        let type = e.target.getAttribute('data-type')
        setValidationOptions((statePrev: Validations) => ({ ...statePrev, currentTyping: type }))
    }

    const clickHandle = () => {
        navigate('../quotes', { replace: true })
    }

    return (
        <>
            <div className="group-form-input">
                {
                    login && alreadyHasSession ? (
                        <LoginSession />
                    ) : (
                        <>
                            <div className="group-form">
                                <img src={require('../../assets/icons/user-form.png')} alt="icon-username" height={25} style={{ marginRight: 5 }} />
                                <div style={{ display: 'flex', width: '100%', flexDirection: 'column' }}>
                                    <InputForm
                                        className={"username-form" + (inputsValidations.userName ? ' success' : '')}
                                        variant={"default"}
                                        placeholderInput={"Username"}
                                        fontSize={18}
                                        valueInput={inputUsername}
                                        typeInput="username"
                                        onChange={inputChangeHandler}
                                        onFocus={inputFocusHandler}
                                    />
                                    <span className={"line-separator-animate" + (validationOptions.currentTyping === 'username' ? ' animate' : '')}></span>
                                    <div style={{ position: 'absolute', bottom: 10, right: 20 }}>
                                        <img className={'input-check' + (inputsValidations.userName && !login ? ' show' : '')} src={require('../../assets/icons/check-mark-success.png')} alt="icon-username" height={20} />
                                    </div>
                                </div>
                            </div>
                            {
                                !login && (
                                    <div className="group-form">
                                        <img src={require('../../assets/icons/mail-icon.png')} alt="icon-username" height={18} style={{ marginRight: 12 }} />
                                        <div style={{ display: 'flex', width: '100%', flexDirection: 'column' }}>
                                            <InputForm
                                                className={"email-form" + (inputsValidations.email ? ' success' : '')}
                                                variant={"default"}
                                                placeholderInput={"Email"}
                                                fontSize={18}
                                                valueInput={inputEmail}
                                                typeInput="email"
                                                onChange={inputChangeHandler}
                                                onFocus={inputFocusHandler}
                                            />
                                            <span className={"line-separator-animate" + (validationOptions.currentTyping === 'email' ? ' animate' : '')}></span>
                                            <div style={{ position: 'absolute', bottom: 10, right: 20 }}>
                                                <img className={'input-check' + (inputsValidations.email && !login ? ' show' : '')} src={require('../../assets/icons/check-mark-success.png')} alt="icon-username" height={20} />
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                            <div className="group-form">
                                <img src={require('../../assets/icons/password-form-icon.png')} alt="icon-username" height={18} style={{ marginRight: 12 }} />
                                <div style={{ display: 'flex', width: '100%', flexDirection: 'column' }}>
                                    <InputForm
                                        className={"password-form" + (inputsValidations.password ? ' success' : '')}
                                        variant={"default"}
                                        placeholderInput={"Password"}
                                        fontSize={18}
                                        valueInput={inputPassword}
                                        typeInput="password"
                                        onChange={inputChangeHandler}
                                        onFocus={inputFocusHandler}
                                    />
                                    <span className={"line-separator-animate" + (validationOptions.currentTyping === 'password' ? ' animate' : '')}></span>
                                    <div style={{ position: 'absolute', bottom: 10, right: 20 }}>
                                        <img className={'input-check' + (inputsValidations.password && !login ? ' show' : '')} src={require('../../assets/icons/check-mark-success.png')} alt="icon-username" height={20} />
                                    </div>
                                </div>
                            </div>
                            {
                                !login && (
                                    <div className="group-form">
                                        <img src={require('../../assets/icons/password-form-icon.png')} alt="icon-username" height={18} style={{ marginRight: 12 }} />
                                        <div style={{ display: 'flex', width: '100%', flexDirection: 'column' }}>
                                            <InputForm
                                                className={"confirm-password-form" + (inputsValidations.confirmPassword ? ' success' : '')}
                                                variant={"default"}
                                                placeholderInput={"Confirm password"}
                                                fontSize={18}
                                                valueInput={inputConfirmPassword}
                                                typeInput="confirm-password"
                                                onChange={inputChangeHandler}
                                                onFocus={inputFocusHandler}
                                            />
                                            <span className={"line-separator-animate" + (validationOptions.currentTyping === 'confirm-password' ? ' animate' : '')}></span>
                                            <div style={{ position: 'absolute', bottom: 10, right: 20 }}>
                                                <img className={'input-check' + (inputsValidations.confirmPassword && !login ? ' show' : '')} src={require('../../assets/icons/check-mark-success.png')} alt="icon-username" height={20} />
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                            <div className="submit-sign-in">
                                <Button
                                    textContent={login ? 'Log In' : 'Create'}
                                    variantName="default"
                                    borderRadius={20}
                                    fontSize={16}
                                    clickHandle={clickHandle}
                                />
                            </div>
                        </>
                    )
                }
            </div>

            <FromValidations
                formChecksFailed={formChecksFailed}
                inputsValidations={inputsValidations}
                login={login}
                validationOptions={validationOptions}
            />
        </>
    )
}

export default Form