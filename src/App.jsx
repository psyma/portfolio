import React, { Component } from "react";    
import Resume from "./pages/resume/resume";

export default class App extends Component {
    constructor(props) {
        super(props)

        this.state = { }  
    }
    

    componentDidMount = () => {

    }

    render = () => {
        return <> 
            <Resume/>
        </>
    }
}