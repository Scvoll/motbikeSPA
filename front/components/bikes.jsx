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
const price = ["2899$","3499$","5000$","9999$"];

export const Bikes = () => {
    return (
        <div className={'bikes'}>
            <div className={'innerBikes'} >
                <div id={"SHOP"}>{topBikesText[0]}</div>
                <div>{topBikesText[1]}</div>
                <div className={"bikesImages"}>
                    {imgSources.map((src, id) => {
                        return (
                            <Bike key={id} imgSrc={src} price={price[id]}/>
                        )
                    })}
                </div>
            </div>
        </div>
    )
};

class Bike extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            animation: {},
            isActive: false
        };
        this.toggleAnimation = this.toggleAnimation.bind(this);
    }

    toggleAnimation () {
        if (!this.state.isActive) {
            this.setState((prev) => (
                {
                    animation: {
                        left: "50px",
                        opacity: 1
                    },
                    isActive: !prev.isActive
                }
            ))
        } else {
            this.setState((prev) => (
                {
                    animation: {
                        left: "-50px",
                        opacity: 0
                    },
                    isActive: !prev.isActive
                }
            ))
        }
    }

    render() {
        return (
            <div className={'bike'}>
                <img src={this.props.imgSrc}/>
                <div onClick={this.toggleAnimation}>CLICK HERE</div>
                <span className={"price"} style={this.state.animation}>{this.props.price}</span>
            </div>
        )
    }
}