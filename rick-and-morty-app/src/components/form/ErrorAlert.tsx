import React from 'react';
import { ParaphTextStyled } from '../../styled/components/text';

interface ErrorAlertProps  {
    message: string;
}

const ErrorAlert = ({ message }: ErrorAlertProps) => {
    return (
        <div>
            Error ocurred
            <ParaphTextStyled
                variant="primary"
                color={'red'}
            >
                {message}
            </ParaphTextStyled>
        </div>
    )
}

export default ErrorAlert