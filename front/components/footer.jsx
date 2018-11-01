import React from 'react'
import { IconsTab } from "./header";

const footerText = {
    about: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when 
    an unknown printer took a galley of type and scrambled it to make a type specimen book. 
    It has survived not only five centuries, but also the leap into electronic type`,
    events: [
        {month: "mar", date: '15', title: 'EVENTNAME', text: 'Lorem psum is simply dummy text'},
        {month: "mar", date: '07', title: 'EVENTNAME', text: 'Lorem psum is simply dummy text'},
        {month: "mar", date: '04', title: 'EVENTNAME', text: 'Lorem psum is simply dummy text'},
        {month: "mar", date: '02', title: 'EVENTNAME', text: 'Lorem psum is simply dummy text'}
        ]
};

export const Footer = () => {
    return (
        <div>
            <TopFooter/>
            <MainFooter/>
            <Copyrights/>
        </div>
    )
};

const TopFooter = () => {
    return (
        <div className={'topFooter'}>
            <div className={'innerTopFooter'}>
                <IconsTab/>
            </div>
        </div>
    )
};

const MainFooter = () => {
    return (
        <div className={'mainFooter'} >
            <div className={'innerMainFooter'}>
                <About/>
                <Events/>
                <Contacts/>
            </div>
        </div>
    )
};

const About = () => {
    return (
        <div className={'about'}>
            <div>ABOUT MOTCLUB</div>
            <div>{footerText.about}</div>
            <div>MORE INFO</div>
        </div>
    )
};

const Events = () => {
    return (
        <div className={'allEvents'}>
            <div className={'titleEvents'}>LATEST EVENT</div>
            {footerText.events.map(
                (event, key) => {
                    return (
                        <div className={'eventBlock'} key={key}>
                            <div className={'date'}>
                                <div>{event.month}</div>
                                <div>{event.date}</div>
                            </div>
                            <div className={"eventText"}>
                                <div>{event.title}</div>
                                <div>{event.text}</div>
                            </div>
                        </div>
                    )
                }
            )}
        </div>
    )
};

const Contacts = () => {
    return (
        <div className={'contacts'}>
            <div>CONTACT INFO</div>
            <div>(+44)245 449 543</div>
            <div className={'address'}>
                <span>CLUB ADDRESS</span><br/>
                638 Ground Road,Main Station,<br/> London 00765 <br/>
                <span className={'emailTitle'}>Email:</span>
                <div className={'emails'}>
                    motor@gmail.com<br/>
                    motop@gmail.com
                </div>
            </div>
        </div>
    )
};

const Copyrights = () => {
    return (
        <div className={'rights'}>
            <div className={'innerRights'}>
                @Copyrights 2015 by PSDFrebies.com. All rights reserved.
            </div>
        </div>
    )
};