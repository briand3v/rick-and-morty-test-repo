import React from 'react';

interface Props {
    variant?: string
    className?: string
    valueInput?: string
    onChange: any
    onFocus?: any
    refInput?: any
    placeholderInput?: string
    typeInput?: string
    padding?: number
    paddingLeft?: number
    paddingRight?: number
    direction?: string
    backgroundColor?: string
    borderRadius?: number | string
    justifyContent?: string
    fontSize?: string | number
    ref?: any
    width?: number
    height?: number
}

export const InputWrapper: React.FC<Props> = ({ refInput, className, valueInput, onChange, onFocus, placeholderInput, typeInput }) => {
    return (
        <input
            ref={refInput}
            className={className}
            value={valueInput}
            data-type={typeInput}
            placeholder={placeholderInput}
            type={typeInput === 'confirm-password' ? 'password' : typeInput}
            onChange={onChange}
            spellCheck="false"
            onFocus={onFocus}
        />
    )
}

type InputSimpleProps = {
    variant?: string,
    className?: string,
    textChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    filtersLabel: string,
    text: string
}

export const InputSimple: React.FC<InputSimpleProps> = ({ className, text, textChange, filtersLabel = '' }) => {
    return (
        <input
            className={className ?? ''}
            placeholder={"Search by " + filtersLabel}
            value={text}
            onChange={textChange}
            spellCheck="false"
        />
    )
}