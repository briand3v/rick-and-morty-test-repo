import React from 'react';
import Lottie from 'lottie-react';
import LottieNotFound from '../assets/lottie/not-found.json';
import { ParaphTextStyled } from '../styled/components/text';

const NotFound = () => {
    return (
        <>
            <ParaphTextStyled variant="default" className="not-found-title">
                Page not found
            </ParaphTextStyled>
            <div className="lottie-animation-container-not-found">
                <Lottie animationData={LottieNotFound} loop={true} height={100} />
            </div>
        </>
    )
}

export default NotFound;