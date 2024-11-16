import React, { Component } from "react"

import { Navbar, DarkThemeToggle, Flowbite } from "flowbite-react"

export default class Portfolio extends Component {
    constructor(props) {
        super(props)

        this.state = { }  
    }
    

    componentDidMount = () => {

    }

    render = () => {
        return <> 
            <Flowbite> 
                <Navbar>
                    <Navbar.Brand> 
                        <DarkThemeToggle />
                        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
                    </Navbar.Brand> 
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Navbar.Link href="#/resume" active className="text-xl">Resume</Navbar.Link>
                        <Navbar.Link href="#/portfolio" className="text-xl">Portfolio</Navbar.Link> 
                    </Navbar.Collapse> 
                    <div> 
                        <div className="grid md:grid-cols-3 sm:grid-cols-1 container mx-auto flex items-start p-3 lg:gap-0 gap-10 lg:w-3/4 w-full">
                            <div className="flex flex-col gap-5">
                                1
                            </div>
                            <div className="md:col-span-2 col-span-1 flex gap-10 flex-col">
                                2
                            </div>
                        </div>
                    </div>
                </Navbar>
            </Flowbite>
        </>
    }
}