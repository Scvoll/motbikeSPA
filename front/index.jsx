import React from "react"
import { render } from "react-dom"
import "./styles/style.scss"
import { Header } from "./components/header";
import { BannerBlock } from "./components/bannerBlock";
import { ClubInfo } from "./components/clubInfo";
import { RidersBlock } from "./components/ridersBlock";
import { Characteristic } from "./components/characteristicBlock";
import { Bikes } from "./components/bikes";
import { Blog } from "./components/blog";
import { SignUp } from "./components/signUp";
import { Footer } from "./components/footer";

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