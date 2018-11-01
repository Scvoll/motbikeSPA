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

const App = () => {
    return (
        <div>
            <Header/>
            <BannerBlock/>
            <ClubInfo/>
            <RidersBlock/>
            <Characteristic/>
            <Bikes/>
            <Blog/>
            <SignUp/>
            <Footer/>
        </div>
    )
};


render(
    <App/>,
    document.getElementById("root")
);