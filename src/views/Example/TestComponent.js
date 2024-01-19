import React from "react";

class TestComponent extends React.Component {

    state = {
        firstName: "",
        lastName: ""
        // name: 'Quang Hoang'
    }
    // handleOnChangeName = (event) => {
    //     this.setState({
    //         name: event.target.value
    //     })
    // }
    // handleClickButton = () => {
    //     console.log("you have clicked the button")
    //     alert("Click me")
    // }

    handleChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }

    handleChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        // alert("Click submit")
        console.log(">>> Check: ", this.state)
    }

    render() {
        // let name = 'Hoang';
        console.log(">> new render: ", this.state)
        return (
            <form>
                <label htmlFor="fname">First Name: </label><br />
                <input
                    type="text"
                    value={this.state.firstName}
                    onChange={(event) => this.handleChangeFirstName(event)}
                /><br />
                <label htmlFor="lname">Last Name: </label><br />
                <input
                    type="text"
                    value={this.state.lastName}
                    onChange={(event) => this.handleChangeLastName(event)}
                /><br />
                <input
                    type="submit"
                    value="Submit"
                    onClick={(event) => this.handleSubmit(event)}
                />
            </form>
        )
    }
}




export default TestComponent;