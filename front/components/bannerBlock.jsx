import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const navMenu = ["HOME","ABOUT US", "OFFER", "SERVICES", "LISTINGS", "BLOG", "CONTACT", "SHOP"];
const bannerText = ["LOREM IPSUM IS SIMPLY DUMMY TEXT",
    "LIVE TO RIDE",
    `Lorem Ipsum is simply dummy text od the printing and typesetting industry.
    Lorem Ipsum has been the industry\`s 
    standard dummy text ever since the 1500s, when an unknown`];


export const BannerBlock = () => {
    return (
        <div className={"bannerBlock"}>
            <div className={"innerBannerBlock"}>
                <FontAwesomeIcon icon={"bars"} className={'menu'}/>
                <BannerTextBlock/>
                <div className={"navigation"}>
                    <ul>
                    {navMenu.map((item, key) => {
                        return <li key={key}>{item}</li>

                    })}
                    </ul>
                </div>

            </div>
        </div>
    )
};

const BannerTextBlock = () => {
    return (
        <ul className={"bannerText"}>
            {bannerText.map((item,key) => {
                return (
                    <li key={key}>{item}</li>
                )
            })}
            <li className={"learnButton"}><span>LEARN MORE</span></li>
        </ul>
    )
};