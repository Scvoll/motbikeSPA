import React from "react"
import { render } from "react-dom"
import "./front/styles/style.scss"
import { Header } from "./front/components/header";
import { BannerBlock } from "./front/components/bannerBlock";
import { ClubInfo } from "./front/components/clubInfo";
import { RidersBlock } from "./front/components/ridersBlock";
import { Characteristic } from "./front/components/characteristicBlock";
import { Bikes } from "./front/components/bikes";
import { Blog } from "./front/components/blog";
import { SignUp } from "./front/components/signUp";
import { Footer } from "./front/components/footer";
import { PopUpText } from "./front/components/popUpTextBlock";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            popUpIsClicked: false,
            bgPopup: {right: "100%"},
            text: "",
        };
        this.anyButtonClick = this.anyButtonClick.bind(this);
    }

    anyButtonClick (text) {
        if (this.state.popUpIsClicked) {
            this.setState(prev => (
                {
                    popUpIsClicked: !prev.popUpIsClicked,
                    bgPopup: {right: "100%"}
                }
            ));
            document.body.style.overflow = "auto";
        } else {
            this.setState( prev => (
                {
                    popUpIsClicked: !prev.popUpIsClicked,
                    bgPopup: {
                        right: 0,
                        overflow: "auto"
                    },
                    text: text
                }
            ));
            document.body.style.overflow = "hidden";
        }
    }

    render() {
        return (
            <div>
                <Header/>
                <BannerBlock click={this.anyButtonClick}/>
                <ClubInfo click={this.anyButtonClick}/>
                <RidersBlock click={this.anyButtonClick}/>
                <Characteristic/>
                <Bikes/>
                <Blog click={this.anyButtonClick}/>
                <SignUp/>
                <Footer click={this.anyButtonClick}/>
                <PopUpText bg={this.state.bgPopup} text={this.state.text} click={this.anyButtonClick}/>
            </div>
        )
    }
}


render(
    <App/>,
    document.getElementById("root")
);