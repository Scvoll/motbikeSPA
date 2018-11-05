import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import {text} from "./popUpTextBlock";

const navMenu = ["HOME","ABOUT US", "OFFER", "SERVICES", "LISTINGS", "SHOP", "BLOG","CONTACT"];
const bannerText = ["LOREM IPSUM IS SIMPLY DUMMY TEXT",
    "LIVE TO RIDE",
    `Lorem Ipsum is simply dummy text od the printing and typesetting industry.
    Lorem Ipsum has been the industry\`s 
    standard dummy text ever since the 1500s, when an unknown`];


export class BannerBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuIsActive: false,
            navStyle: {left: 0},
            bgMenuStyle: {backgroundColor: "rgba(0, 0, 0, 0.85)"},
            menuNavIsFixed: {marginTop: 0, position: "absolute"},
            displayMenu: {display: "hidden"}
        };
        this.toggleMenu = this.toggleMenu.bind(this)
    }

    componentDidMount() {

        if (document.body.clientWidth < 700) {
            this.setState(
                {
                    navStyle: {left: "-356px"},
                    displayMenu: {display: "block"}
                })
        }


        window.addEventListener("resize", () => {
            let width = document.body.clientWidth;
            if (this.state.menuIsActive) {
                this.toggleMenu();
            }
            if (width <= 700) {
                this.setState(
                    {
                        navStyle: {left: "-356px"},
                        displayMenu: {display: "block"}
                    });


                if (window.pageYOffset > 72) {
                    this.setState({menuNavIsFixed: {marginTop: "-72px", position: "fixed"}})
                }
            }

            if (width > 700) {
                this.setState(
                    {
                        navStyle: {left: 0},
                        displayMenu: {display: "none"},
                        menuNavIsFixed: {marginTop: 0, position: "absolute"}
                    });
            }
        });

        window.addEventListener('click', (e) => {
           if (this.state.menuIsActive) {
               this.toggleMenu(e);
           }
        });
        window.onscroll = () => {
            let width = document.body.clientWidth;
            let scrolled = window.pageYOffset || document.documentElement.scrollTop;
            if (scrolled > 72 && this.state.menuNavIsFixed.marginTop === 0 && width <= 700) {
                this.setState({menuNavIsFixed: {marginTop: "-72px", position: "fixed"}})
            }
            if (scrolled < 72 && this.state.menuNavIsFixed.marginTop !== 0) {
                this.setState({menuNavIsFixed: {marginTop: 0, position: "absolute"}})
            }
        }
    }

    toggleMenu (e) {
        if (e) e.stopPropagation();

        let styles = this.getNavAndMenuStyles(this.state);
        this.setState((prev) => (
            {
                menuIsActive: !prev.menuIsActive,
                navStyle: styles[0],
                bgMenuStyle: styles[1]
            }))
    }

    getNavAndMenuStyles (state) {
        if (state.menuIsActive) {
            return [{left: "-356px"},{backgroundColor: "rgba(0, 0, 0, 0.85)"}]
        }
        return [{left: 0},{backgroundColor: "transparent"}]
    }

    render () {
        return (
            <div className={"bannerBlock"}>
                <div className={"innerBannerBlock"}>
                    <FontAwesomeIcon icon={"bars"}
                                     className={'menu'}
                                     style={{...this.state.bgMenuStyle,
                                         ...this.state.menuNavIsFixed,
                                         ...this.state.displayMenu
                                     }}
                                     onClick={(e) => this.toggleMenu(e)}/>
                    <BannerTextBlock click={this.props.click}/>
                    <div className={"navigation"}
                         style={{...this.state.navStyle, ...this.state.menuNavIsFixed}}
                         onClick={(e) => e.stopPropagation()}>
                        <ul>
                            {navMenu.map((item, key) => {
                                return  <AnchorLink key={key} href={"#" + item}>
                                            <li>{item}</li>
                                        </AnchorLink>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}


const BannerTextBlock = (props) => {
    return (
        <ul className={"bannerText"}>
            {bannerText.map((item,key) => {
                return (
                    <li key={key}>{item}</li>
                )
            })}
            <li className={"learnButton"} onClick={() => props.click(text.substring(0,850))}><span>LEARN MORE</span></li>
        </ul>
    )
};