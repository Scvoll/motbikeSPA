import React from 'react'
import {text} from "./popUpTextBlock";

export const topRidersText = ['LOREM IPSUM IS SIMPLY DUMMY TEXT',
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a type
       specimen book. It has survived not`];

const bottomRidersText = ['LOREM IPSUM IS SIMPLY DUMMY TEXT LOREM IPSUM IS SIMPLY',
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown`];

export const RidersBlock = (props) => {
    return (
        <div>
            <div className={"topRidersText"} id={'OFFER'}>
                <div className={"innerTopRidersText"}>
                    <div>{topRidersText[0]}</div>
                    <div>{topRidersText[1]}</div>
                </div>
            </div>
            <div className={"ridersImages"}/>
            <div className={"bottomRidersText"}  id={"SERVICES"}>
                <div className={'innerBottomRidersText'}>
                    <BottomTextBlock click={props.click}/>
                    <BottomTextBlock click={props.click}/>
                </div>
            </div>
        </div>

    )
};

const BottomTextBlock = (props) => {
    return (
        <div className={"ridersBottomBlock"}>
            <div>{bottomRidersText[0]}</div>
            <div>{bottomRidersText[1]}</div>
            <div onClick={() => props.click(text.substring(0,700))}>LEARN MORE</div>
        </div>
    )
};