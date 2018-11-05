import React from 'react'

const signText = ["SIGNUP FOR NEWSLETTER",
    "Donec ac nese eget sem ultrices tempus. Phasellus et sem quis felis pharetra conv"];

export class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            input: ""
        };
        this.checkInput = this.checkInput.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            input: e.target.value
        })
    }

    checkInput () {
        let input = this.state.input.trim();
        if (input) {
            let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
            if (reg.test(input)) {
                this.setState({
                    input: "SUCCESS!"
                },() => setTimeout( () =>
                    this.setState({input:""}), 1000
                ));
            } else {
                this.setState({
                    input: "INCORRECT EMAIL!"
                }, () => setTimeout( () =>
                this.setState({input: ""}), 1200
                ))
            }
        }
    }

    render() {
        return (
            <div className={'signUp'}>
                <div className={'innerSignUp'}>
                    <div className={"signText"}>
                        <div>{signText[0]}</div>
                        <div>{signText[1]}</div>
                    </div>
                    <div className={"emailInput"}>
                        <input placeholder={"Enter Your Email Address"} value={this.state.input} onChange={this.handleChange}/>
                        <div onClick={() => this.checkInput()}>SUBMIT</div>
                    </div>
                </div>
            </div>
        )
    }
}