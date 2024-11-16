import React, { Component } from "react"

export default class Footer extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    componentDidMount() { }

    render() {
        return <>
            <p className="mx-auto text-gray-800 dark:text-gray-300 text-sm font-semibold my-3">{new Date().getFullYear()} Portfolio. All rights reserved</p>
        </>
    }
}