import React from 'react'
import bikeOne from '../static/images/bikeOne.jpg'
import bikeTwo from '../static/images/bikeTwo.jpg'
import bikeThree from '../static/images/bikeThree.jpg'
import bikeFour from '../static/images/bikeFour.jpg'

const topBikesText = ["LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING",
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a type
       specimen book.`
];

const imgSources = [bikeOne, bikeTwo, bikeThree, bikeFour];

export const Bikes = () => {
    return (
        <div className={'bikes'}>
            <div className={'innerBikes'}>
                <div>{topBikesText[0]}</div>
                <div>{topBikesText[1]}</div>
                <div className={"bikesImages"}>
                    {imgSources.map((src, id) => {
                        return (
                            <Bike key={id} imgSrc={src}/>
                        )
                    })}
                </div>
            </div>
        </div>
    )
};

const Bike = (props) => {
    return (
        <div className={'bike'} >
            <img src={props.imgSrc}/>
            <div>CLICK HERE</div>
        </div>
    )
};