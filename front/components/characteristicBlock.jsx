import React from "react"
import avatar from "../static/images/avatar.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const personInfo = `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a type
       specimen book. It has survived not`;

export const Characteristic = () => {
    return (
        <div className={"characterBlock"} id={"LISTINGS"}>
            <div className={"innerCharacter"}>
                <PersonBlock/>
                <PersonBlock/>
                <div className={'personIcons'}>
                    <FontAwesomeIcon icon={'angle-left'}/>
                    <FontAwesomeIcon icon={'angle-right'}/>
                </div>
            </div>
        </div>
    )
};

const PersonBlock = () => {
    return (
        <div className={"person"}>
            <img src={avatar}/>
            <div>{personInfo}</div>
            <div>OUR CUSTOMERS ARE ENJOYING</div>
            <div>our customers are enjoying</div>
        </div>
    )
};