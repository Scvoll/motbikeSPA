import React from 'react'

const signText = ["SIGNUP FOR NEWSLETTER",
    "Donec ac nese eget sem ultrices tempus. Phasellus et sem quis felis pharetra conv"];

export const SignUp = () => {
    return (
        <div className={'signUp'}>
            <div className={'innerSignUp'}>
                <div className={"signText"}>
                    <div>{signText[0]}</div>
                    <div>{signText[1]}</div>
                </div>
                <div className={"emailInput"}>
                    <input placeholder={"Enter Your Email Address"}/>
                    <div>SUBMIT</div>
                </div>
            </div>
        </div>
    )
};