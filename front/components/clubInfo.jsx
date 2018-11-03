import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import gallaryImage from '../static/images/gallaryImage.jpg'

const InfoText = ["LOREM IPSUM IS SIMPLY DUMMY TEXT",
    "our customers are enjoying",
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
     Lorem Ipsum has been the industry's standard dummy text ever since the`];

export class ClubInfo extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            zIndexImgs: [{zIndex: 3},{zIndex: 1},{zIndex: 2}]
        };
    }

    changeZIndex(className) {
        let zArr = this.state.zIndexImgs.map((item) => item.zIndex);
        if (className === "leftArrow") {
            zArr.unshift(zArr.pop());
        }
        if (className === "rightArrow") {
            zArr.push(zArr.shift());
        }
        zArr = zArr.map((item) => {
            return {zIndex: item}
        });

        this.setState({zIndexImgs: zArr})
    }

    render () {
        return (
            <div className={"infoBlock"} id={"ABOUT US"}>
                <div className={"innerInfoBlock"}>
                    <span>{InfoText[0]}</span>
                    <ul>
                        <li key={1}>{InfoText[1]}</li>
                        <li key={2}>{InfoText[2]}</li>
                        <li key={3}><span>LEARN MORE</span></li>
                    </ul>
                    <div className={"gallary"}>
                        <FontAwesomeIcon icon={"angle-left"}
                                         className={"leftArrow"}
                                         onClick={() => this.changeZIndex("leftArrow")}/>
                        <img src={gallaryImage} style={this.state.zIndexImgs[0]}/>
                        <img src={gallaryImage} style={this.state.zIndexImgs[1]}/>
                        <img src={gallaryImage} style={this.state.zIndexImgs[2]}/>
                        <FontAwesomeIcon icon={"angle-right"}
                                         className={"rightArrow"}
                                         onClick={() => this.changeZIndex("rightArrow")}/>
                    </div>
                </div>
            </div>
        )
    }
}
