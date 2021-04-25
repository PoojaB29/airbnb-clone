/**
 * This is an HOC. Use this 'withResponsive' hoc component for responsive UI.
 */

import React from "react";
import { useMediaQuery } from "react-responsive";
    
const withResponsive = (Component) => {

    return function (props) {
        const responsiveInfo = {
            isDesktop : useMediaQuery({ minWidth: 992 }),
            isTablet : useMediaQuery({ minWidth: 768, maxWidth: 991 }),
            isMobile : useMediaQuery({ maxWidth: 767 }),
            isNotMobile : useMediaQuery({ minWidth: 768 }),
            isPortrait : useMediaQuery({ query: '(orientation: portrait)' }),
            isRetina : useMediaQuery({ query: '(min-resolution: 2dppx)' })
        }
        return <Component {...props} responsiveInfo={responsiveInfo} />
    }
}

export default withResponsive;