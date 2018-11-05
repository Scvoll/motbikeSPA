import React from "react";

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMotorcycle, faAngleLeft, faAngleRight, faBars, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter, faInstagram, faYoutubeSquare, fab } from '@fortawesome/free-brands-svg-icons'

library.add(faMotorcycle, faYoutubeSquare,  faInstagram ,faTwitter, faFacebookF,
    faAngleLeft, faAngleRight, faBars, faTimesCircle);


export const Header = () => {
    return (
        <div className={"header"} id={"HOME"}>
            <div className={"innerHeader"}>
                <IconsTab/>
            </div>
        </div>
    )
};

const SocialIcons = () => {
    return (
        <div className={"socialIcons"}>
            <a href={"https://www.facebook.com/"}><FontAwesomeIcon icon={["fab","facebook-f"]}/></a>
            <a href={"https://twitter.com/"}><FontAwesomeIcon icon={["fab","twitter"]}/></a>
            <a href={"https://www.instagram.com/"}><FontAwesomeIcon icon={["fab","instagram"]}/></a>
            <a href={"https://www.youtube.com"}><FontAwesomeIcon icon={["fab","youtube-square"]}/></a>
        </div>
    )
};

export const IconsTab = () => {
    return (
        <div>
            <FontAwesomeIcon className={"motoIcon"} icon={"motorcycle"}/>
            <span className={"logoMot"}>MOT</span><span className={"logoClub"}>CLUB</span>
            <SocialIcons/>
        </div>
    )
};