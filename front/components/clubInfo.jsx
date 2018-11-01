import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import gallaryImage from '../static/images/gallaryImage.jpg'

const InfoText = ["LOREM IPSUM IS SIMPLY DUMMY TEXT",
    "our customers are enjoying",
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
     Lorem Ipsum has been the industry's standard dummy text ever since the`];

export const ClubInfo = () => {
    return (
        <div className={"infoBlock"}>
            <div className={"innerInfoBlock"}>
            <span>{InfoText[0]}</span>
            <ul>
                <li key={1}>{InfoText[1]}</li>
                <li key={2}>{InfoText[2]}</li>
                <li key={3}><span>LEARN MORE</span></li>
            </ul>
            <div className={"gallary"}>
                <FontAwesomeIcon icon={"angle-left"} className={"leftArrow"}/>
                <img src={gallaryImage}/>
                <img src={gallaryImage}/>
                <img src={gallaryImage}/>
                <FontAwesomeIcon icon={"angle-right"} className={"rightArrow"}/>
            </div>
            </div>
        </div>
    )
};
