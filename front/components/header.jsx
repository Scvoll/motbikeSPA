import React from "react";

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMotorcycle, faAngleLeft, faAngleRight, faBars } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter, faInstagram, faYoutubeSquare, fab } from '@fortawesome/free-brands-svg-icons'

library.add(faMotorcycle, faYoutubeSquare,  faInstagram ,faTwitter, faFacebookF, faAngleLeft, faAngleRight, faBars);


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
            <FontAwesomeIcon icon={["fab","facebook-f"]}/>
            <FontAwesomeIcon icon={["fab","twitter"]}/>
            <FontAwesomeIcon icon={["fab","instagram"]}/>
            <FontAwesomeIcon icon={["fab","youtube-square"]}/>
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