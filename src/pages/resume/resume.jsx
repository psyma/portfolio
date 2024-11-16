import React, { Component } from "react"

import { FaFacebook } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaPython } from "react-icons/fa"
import { FaSymfony } from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io5"
import { MdEmail } from "react-icons/md"
import { PiFileHtmlBold } from "react-icons/pi"
import { RiReactjsFill } from "react-icons/ri"
import { SiCsharp } from "react-icons/si"
import { SiRubyonrails } from "react-icons/si"
import { TbBrandCpp } from "react-icons/tb"

import { Navbar, DarkThemeToggle, Flowbite, List } from "flowbite-react"

import Footer from "../../components/footer/footer"

export default class Resume extends Component {
    constructor(props) {
        super(props)

        this.state = { }  

        this.page = "Resume"
    }
    

    componentDidMount = () => {

    }

    render = () => {
        return <>  
            <Flowbite> 
                <Navbar>
                    <Navbar.Brand> 
                        <DarkThemeToggle />
                        <span className="self-center whitespace-nowrap text-lg font-semibold dark:text-white">Resume</span>
                    </Navbar.Brand> 
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Navbar.Link href="#/resume" active className="text-lg">Resume</Navbar.Link>
                        <Navbar.Link href="#/portfolio" className="text-lg">Portfolio</Navbar.Link> 
                    </Navbar.Collapse> 
                    <div> 
                        <div className="grid md:grid-cols-3 sm:grid-cols-1 container mx-auto flex items-start p-3 lg:gap-0 gap-10 lg:w-3/4 w-full"> 
                            <div className="flex flex-col gap-5"> 
                                <div>
                                    <img className="rounded" src="./assets/profile.png" alt="Rickben Anthony Q. Gimeda" style={{ objectFit: 'cover', width: "215px", height: "200px" }}/> 
                                    <p className="text-gray-800 dark:text-gray-300 text-lg font-semibold">Rickben Anthony Gimeda</p>
                                </div>
                                
                                <div className="flex flex-col text-sm">
                                    <a href="mailto: rickbengimeda@gmail.com" className="flex items-center gap-1 font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                        <MdEmail/>
                                        rickbengimeda@gmail.com
                                    </a>
                                    <a href="https://www.linkedin.com/in/rickben-anthony-gimeda-b5973875/" className="flex items-center gap-1 font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                        <FaLinkedin/>
                                        linkedin.com/in/rickben
                                    </a>
                                    <a href="https://github.com/psyma" className="flex items-center gap-1 font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                        <FaGithub/>
                                        github.com/psyma
                                    </a>
                                    <a href="https://github.com/codeflowerhorn" className="flex items-center gap-1 font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                        <FaGithub/>
                                        github.com/codeflowerhorn
                                    </a> 
                                    <a href="https://www.facebook.com/jpakingpotomen" className="flex items-center gap-1 font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                        <FaFacebook/>
                                        facebook.com/rickben
                                    </a> 
                                </div> 

                                <div>
                                    <h1 className="text-gray-800 dark:text-gray-300 text-lg font-bold">EDUCATION</h1>  
                                    <List className="flex flex-col gap-3 mt-3 text-sm">
                                        <List.Item className="text-gray-800 dark:text-gray-300">
                                            Primary Education
                                            <List unstyled className="ml-5">
                                                <List.Item className="text-gray-800 dark:text-gray-300 text-sm">Umapad Elementary School <br/>2002-2008</List.Item> 
                                            </List>
                                        </List.Item> 
                                        <List.Item className="text-gray-800 dark:text-gray-300">
                                            Secondary Education
                                            <List unstyled className="ml-5">
                                                <List.Item className="text-gray-800 dark:text-gray-300 text-sm">Don Gerardo Ll. Ouano MNHS <br/>2008-2012</List.Item> 
                                            </List>
                                        </List.Item> 
                                        <List.Item className="text-gray-800 dark:text-gray-300">
                                        Tertiary
                                            <List unstyled className="ml-5">
                                                <List.Item className="text-gray-800 dark:text-gray-300 text-sm">University of Cebu-Banilad BSCpE <br/>2017-2020 (Undergraduate)</List.Item> 
                                            </List>
                                        </List.Item> 
                                    </List>
                                </div>

                                <div>
                                    <h1 className="text-gray-800 dark:text-gray-300 text-lg font-bold">LANGUAGES</h1>  
                                    <List className="flex flex-col gap-3 mt-3 text-sm">
                                        <List.Item className="text-gray-800 dark:text-gray-300">
                                            Bisaya
                                            <List unstyled className="ml-5">
                                                <List.Item className="text-gray-800 dark:text-gray-300 text-sm">Native</List.Item> 
                                            </List>
                                        </List.Item> 
                                        <List.Item className="text-gray-800 dark:text-gray-300">
                                            English
                                            <List unstyled className="ml-5">
                                                <List.Item className="text-gray-800 dark:text-gray-300 text-sm">Intermediate</List.Item>
                                            </List>
                                        </List.Item> 
                                        <List.Item className="text-gray-800 dark:text-gray-300">
                                            Tagalog
                                            <List unstyled className="ml-5">
                                                <List.Item className="text-gray-800 dark:text-gray-300 text-sm">Intermediate</List.Item> 
                                            </List>
                                        </List.Item> 
                                    </List>
                                </div>
                            </div>
                            <div className="md:col-span-2 col-span-1 flex gap-10 flex-col"> 
                                <div>    
                                    <h1 className="text-gray-800 dark:text-gray-300 text-lg font-bold">CAREER PROFILE</h1>
                                    <p className="text-gray-800 dark:text-gray-300 text-sm mt-5">I began studying programming in 2018 and have since broadened my expertise to include web development, APIs, and open-source libraries. This journey has significantly enhanced my understanding of object-oriented programming, data structures, and algorithms. I also enjoy creating projects from the ground up. I am continually striving to improve my programming skills and knowledge.</p>
                                </div>
                            
                                <div> 
                                    <h1 className="text-gray-800 dark:text-gray-300 text-lg font-bold">EXPERIENCES</h1> 
                                    <div className="mt-5"> 
                                        <h2 className="text-gray-800 dark:text-gray-300 text-base font-bold">Cebu Skyland Universal Inc</h2>
                                        <h2 className="text-gray-800 dark:text-gray-300 text-base font-bold">Software Engineer (2020 - Present)</h2>
                                        <p className="text-gray-800 dark:text-gray-300 text-sm mt-1">As a software engineer, my responsibilities encompass writing, debugging, testing, and maintaining code. Additionally, I assist colleagues by providing guidance and planning their current tasks. I am prepared to take on any assignment given to me. If I encounter something unfamiliar, I proactively research it, including the use of third-party programs or open-source libraries, to integrate them into our existing projects.</p>
                                    </div>
                                </div>

                                <div> 
                                    <h1 className="text-gray-800 dark:text-gray-300 text-lg font-bold">PROJECTS</h1>
                                    <p className="text-gray-800 dark:text-gray-300 text-sm mt-5">I am responsible for developing and maintaining a variety of projects. Additionally, I study and integrate third-party programs and open-source libraries into our existing projects to enhance their functionality and performance.</p>
                                    <List className="flex flex-col gap-3 mt-3 text-sm">
                                        <List.Item className="text-gray-800 dark:text-gray-300">
                                            Application Programming Interface
                                            <List unstyled className="ml-5">
                                                <List.Item className="text-gray-800 dark:text-gray-300">An api for mostly web application but not limited to</List.Item> 
                                            </List>
                                        </List.Item>
                                        <List.Item className="text-gray-800 dark:text-gray-300">
                                            Geographic Information System
                                            <List unstyled className="ml-5">
                                                <List.Item className="text-gray-800 dark:text-gray-300">A project(s) that needs to be integrated with geographic information systems</List.Item> 
                                            </List>
                                        </List.Item>
                                        <List.Item className="text-gray-800 dark:text-gray-300">
                                            Web Applications
                                            <List unstyled className="ml-5">
                                                <List.Item className="text-gray-800 dark:text-gray-300">A project(s) powered by artificial intelligent e.g object detections, segmentation, tracking, llm & etc</List.Item> 
                                            </List>
                                        </List.Item>
                                        <List.Item className="text-gray-800 dark:text-gray-300">
                                            Artificial Intelligent
                                            <List unstyled className="ml-5">
                                                <List.Item className="text-gray-800 dark:text-gray-300">Any project(s) that is web related SSR/CSR, small/large application</List.Item> 
                                            </List>
                                        </List.Item>
                                        <List.Item className="text-gray-800 dark:text-gray-300">
                                            Cloudstack Integration
                                            <List unstyled className="ml-5">
                                                <List.Item className="text-gray-800 dark:text-gray-300">An open-source cloud computing</List.Item>  
                                            </List>
                                        </List.Item>
                                    </List>
                                </div>

                                <div> 
                                    <h1 className="text-gray-800 dark:text-gray-300 text-lg font-bold">RESPONSIBILITIES</h1>
                                    <p className="text-gray-800 dark:text-gray-300 text-sm mt-5">List of responsibilities that I usually do as a software engineer</p>
                                    <List className="flex flex-col gap-3 mt-3 text-sm">
                                        <List.Item className="text-gray-800 dark:text-gray-300">
                                            Planning
                                        </List.Item>
                                        <List.Item className="text-gray-800 dark:text-gray-300">
                                            Research
                                        </List.Item>
                                        <List.Item className="text-gray-800 dark:text-gray-300">
                                            Writing code
                                        </List.Item>
                                        <List.Item className="text-gray-800 dark:text-gray-300">
                                            Testing & Debugging
                                        </List.Item>
                                        <List.Item className="text-gray-800 dark:text-gray-300">
                                            Fixing Vulnerabilities
                                        </List.Item>
                                    </List>
                                </div>

                                <div> 
                                    <h1 className="text-gray-800 dark:text-gray-300 text-lg font-bold">LANGUAGES & FRAMEWORKS</h1>
                                    <List className="flex flex-col gap-3 mt-3 text-sm">
                                        <List.Item className="text-gray-800 dark:text-gray-300"> 
                                            <div className="inline-flex items-center flex-start gap-2">
                                                <span className="flex items-center">C/C++ <TbBrandCpp className="ml-2"/></span>  
                                            </div>
                                        </List.Item>
                                        <List.Item className="text-gray-800 dark:text-gray-300">
                                            <div className="inline-flex items-center flex-start gap-2">
                                                <span className="flex items-center">Python <FaPython className="ml-2"/></span>  
                                            </div>
                                        </List.Item>
                                        <List.Item className="text-gray-800 dark:text-gray-300">
                                            <div className="inline-flex items-center flex-start gap-2">
                                                <span className="flex items-center">ReactJS <RiReactjsFill className="ml-2"/></span>  
                                            </div>
                                        </List.Item>
                                        <List.Item className="text-gray-800 dark:text-gray-300">
                                            <div className="inline-flex items-center flex-start gap-2">
                                                <span className="flex items-center">Symfony <FaSymfony className="ml-2"/></span>  
                                            </div>
                                        </List.Item>
                                        <List.Item className="text-gray-800 dark:text-gray-300">
                                            <div className="inline-flex items-center flex-start gap-2">
                                                <span className="flex items-center">Ruby On Rails <SiRubyonrails className="ml-2"/></span>  
                                            </div>
                                        </List.Item>
                                        <List.Item className="text-gray-800 dark:text-gray-300">
                                            <div className="inline-flex items-center flex-start gap-2">
                                                <span className="flex items-center">HTML/CSS <PiFileHtmlBold className="ml-2"/></span>  
                                            </div>
                                        </List.Item>
                                        <List.Item className="text-gray-800 dark:text-gray-300">
                                            <div className="inline-flex items-center flex-start gap-2">
                                                <span className="flex items-center">JavaScript <IoLogoJavascript className="ml-2"/></span>  
                                            </div>
                                        </List.Item>
                                        <List.Item className="text-gray-800 dark:text-gray-300">
                                            <div className="inline-flex items-center flex-start gap-2">
                                                <span className="flex items-center">C# .NET & ASP.NET Core <SiCsharp className="ml-2"/></span>  
                                            </div> 
                                        </List.Item>
                                    </List>
                                </div>
                            </div> 
                        </div>  
                    </div>
                    <Footer/>
                </Navbar>
            </Flowbite>
        </>
    }
}