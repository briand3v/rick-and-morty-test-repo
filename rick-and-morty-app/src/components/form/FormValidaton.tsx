import React from 'react';
import { ParaphTextStyled } from '../../styled/components/text';
import './form.style.css';

interface FromValidationsProps {
    formChecksFailed: any;
    inputsValidations: any;
    login: boolean;
    validationOptions: any;
}

interface ValidateOptions {
    key: string;
    label: string;
    validate: boolean;
    show: boolean;
}

const FromValidations = ({ validationOptions, inputsValidations, formChecksFailed, login }: FromValidationsProps) => {
    return (
        <div className={"group-form-checks" + (formChecksFailed && !login ? ' show' : '')}>
            {
                validationOptions?.userName?.map((checkInputOptions: ValidateOptions, i: number) => (
                    checkInputOptions.show && (
                        <div key={i} className={"group-form-checks-username" + (!checkInputOptions.validate ? ' show' : '')}>
                            <ParaphTextStyled
                                variant="success"
                                fontSize={12}
                            >
                                {checkInputOptions.label}
                            </ParaphTextStyled>
                        </div>
                    )
                ))
            }

            {
                validationOptions?.email?.map((checkInputOptions: ValidateOptions, i: number) => (
                    checkInputOptions.show && (
                        <div key={i} className={"group-form-checks-email" + (!checkInputOptions.validate ? ' show' : '')}>
                            <ParaphTextStyled
                                variant="success"
                                fontSize={12}
                            >
                                {checkInputOptions.label}
                            </ParaphTextStyled>
                        </div>
                    )
                ))
            }

            {
                validationOptions?.password?.map((checkInputOptions: ValidateOptions, i: number) => (
                    checkInputOptions.show && (
                        <div key={i} className={"group-form-checks-password" + (!checkInputOptions.validate ? ' show' : '')}>
                            <ParaphTextStyled
                                variant="success"
                                fontSize={12}
                            >
                                {checkInputOptions.label}
                            </ParaphTextStyled>
                        </div>
                    )
                ))
            }

            {
                validationOptions?.confirmPassword?.map((checkInputOptions: ValidateOptions, i: number) => (
                    checkInputOptions.show && (
                        <div key={i} className={"group-form-checks-confirm-password" + (!checkInputOptions.validate ? ' show' : '')}>
                            <ParaphTextStyled
                                variant="success"
                                fontSize={12}
                            >
                                {checkInputOptions.label}
                            </ParaphTextStyled>
                        </div>
                    )
                ))
            }
        </div>
    )
}

export default FromValidations