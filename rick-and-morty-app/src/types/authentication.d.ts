export interface InputValidations {
    userName?: null | boolean
    password: null | boolean
    email: null | boolean
    confirmPassword: null | boolean
}

export interface Validations {
    currentTyping: string
    userName: ValidateOptions[]
    email: ValidateOptions[]
    password: ValidateOptions[]
    confirmPassword: ValidateOptions[]
}

export interface ValidateOptions {
    key: string
    label: string
    validate: boolean
    show: boolean
}

export interface CheckUserNameValidationProps {
    usernamecharacters: boolean
}

export interface CheckEmailValidationProps {
    emailformat: boolean
}

export interface CheckPasswordValidationProps {
    passwordcharactersminimum: boolean
    passwordonenumber: boolean
    passwordspecialcharacter: boolean
}

export interface CheckConfirmPasswordValidationProps {
    confirmmatchpassword: boolean
}
