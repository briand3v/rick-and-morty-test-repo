import React from 'react'
import Lottie from 'lottie-react'
import LottieLoading from '../assets/lottie/loading.json'

const LoaderPrimary = () => {
    return (
        <div className="lottie-animation-container">
            <Lottie animationData={LottieLoading} loop={true} height={50} />
        </div>
    )
}

export default LoaderPrimary