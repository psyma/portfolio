import React, { Component } from "react"

import { FaFacebook } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa" 
import { IoIosMail } from "react-icons/io"; 
import { Card, Flowbite, DarkThemeToggle, Navbar, Tabs } from "flowbite-react"

import Footer from "../../components/footer/footer"

export default class Portfolio extends Component {
    constructor(props) {
        super(props)

        this.state = { }  

        this.page = "Portfolio"

        document.title = "Portfolio"
        document.getElementById("icon").href = "./assets/P.svg"
    }
    

    componentDidMount = () => {

    }

    render = () => {
        return <> 
            <Flowbite> 
                <Navbar>
                    <Navbar.Brand> 
                        <DarkThemeToggle />
                        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">{this.page}</span>
                    </Navbar.Brand> 
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Navbar.Link href="#/resume" className="text-xl">Resume</Navbar.Link>
                        <Navbar.Link href="#/portfolio" active className="text-xl">Portfolio</Navbar.Link> 
                    </Navbar.Collapse> 
                    <div> 
                        <div className="grid md:grid-cols-3 sm:grid-cols-1 container mx-auto flex items-start p-3 lg:gap-0 gap-10 lg:w-3/4 w-full">
                            <div className="flex flex-col gap-5"> 
                                <div>
                                    <img className="rounded flex mx-auto" src="./assets/profile.png" alt="Rickben Anthony Q. Gimeda" style={{ objectFit: 'cover', width: "215px", height: "200px" }}/> 
                                    <p className="text-gray-800 dark:text-gray-300 indent-10 text-justify text-sm mt-3">My name is Rickben Anthony Q. Gimeda, and I began my programming career during my second year of the Bachelor of Science in Computer Engineering program in 2018. Initially, I encountered significant challenges in my programming classes. However, over time, I developed a deep appreciation for the field and its potential. This newfound passion ultimately led me to pursue a career as a programmer.</p>
                                    <p className="text-gray-800 dark:text-gray-300 mt-5 text-justify text-sm">Throughout my professional experience, I have had the opportunity to work on a diverse array of projects, spanning web development, mobile applications, and artificial intelligence, among other areas. My exposure to various technologies has given me a broad skill set, though I don’t specialize in any single programming language or framework. Instead, I embrace the versatility of working with different technologies, adapting to the unique requirements of each project I undertake. This approach has allowed me to continuously learn and grow as a programmer, and to contribute effectively to a wide range of technological challenges.</p>
                                    <div className="flex justify-center gap-2 mt-2 text-xl">
                                        <a href="mailto: rickbengimeda@gmail.com" className="flex items-center gap-1 font-medium text-blue-600 dark:text-blue-500 hover:underline text-2xl">
                                            <IoIosMail/> 
                                        </a>
                                        <a href="https://www.linkedin.com/in/rickben-anthony-gimeda-b5973875/" className="flex items-center gap-1 font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                            <FaLinkedin/> 
                                        </a>
                                        <a href="https://github.com/psyma" className="flex items-center gap-1 font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                            <FaGithub/> 
                                        </a> 
                                        <a href="https://www.facebook.com/jpakingpotomen" className="flex items-center gap-1 font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                            <FaFacebook/> 
                                        </a> 
                                    </div> 
                                </div> 
                            </div>
                            <div className="md:col-span-2 col-span-1 flex flex-col items-center">
                                <div>    
                                    <h1 className="text-gray-800 dark:text-gray-300 text-xl font-bold">PROJECTS</h1>
                                </div>

                                <div> 
                                    <Tabs aria-label="Tabs with underline" variant="underline" className="flex items-center">
                                        <Tabs.Item active title="Old">  
                                            <Card
                                                className="max-w-md"
                                                imgAlt="PUZZLE GAME"
                                                imgSrc="./assets/thumbnails/puzzle.png">
                                                <h2 className="text-lg font-bold text-gray-800 dark:text-gray-300">
                                                    PUZZLE GAME
                                                </h2>
                                                <p className="text-gray-800 dark:text-gray-300 text-sm">
                                                    The Puzzle Game is the most recent project I developed using C#. I created this game in March 2020 during the early stages of the lockdown as a way to stay productive. The game follows the traditional puzzle format, requiring players to arrange pieces correctly to achieve victory. 
                                                    <a href="https://github.com/PSYMA/Puzzle-Game-CSharp-WPF" target="_blank" className="text-blue-600 dark:text-blue-500 hover:underline"> source code</a>
                                                </p>
                                            </Card>
                                            <Card
                                                className="max-w-md mt-10"
                                                imgAlt="TIC TAC TOE"
                                                imgSrc="./assets/thumbnails/tictactoe.png">
                                                <h2 className="text-lg font-bold text-gray-800 dark:text-gray-300">
                                                    TIC TAC TOE
                                                </h2>
                                                <p className="text-gray-800 dark:text-gray-300 text-sm">
                                                    This Tic Tac Toe Game was my preliminary project for my C# programming course in college. Unlike traditional Tic Tac Toe, this version includes additional features and enhanced graphics. However, the fundamental rules of the game remain the same.
                                                    <a href="https://github.com/PSYMA/TIC-TAC-TOE-CSharp-WPF" target="_blank" className="text-blue-600 dark:text-blue-500 hover:underline"> source code</a>
                                                </p>
                                            </Card>
                                            <Card
                                                className="max-w-md mt-10"
                                                imgAlt="THE MATCHING GAME"
                                                imgSrc="./assets/thumbnails/match.png">
                                                <h2 className="text-lg font-bold text-gray-800 dark:text-gray-300">
                                                    THE MATCHING GAME
                                                </h2>
                                                <p className="text-gray-800 dark:text-gray-300 text-sm">
                                                    This Matching Game was my midterm project for my C# programming course in college. The game involves pairing cells with their corresponding matches. Mistakes result in a reduction of HP, and if your HP reaches zero, you lose the game.
                                                    <a href="https://github.com/PSYMA/The-Matching-Game-CSharp-WPF-" target="_blank" className="text-blue-600 dark:text-blue-500 hover:underline"> source code</a>
                                                </p>
                                            </Card>
                                            <Card
                                                className="max-w-md mt-10"
                                                imgAlt="THE HIDDEN BATTLE GAME"
                                                imgSrc="./assets/thumbnails/battle.png">
                                                <h2 className="text-lg font-bold text-gray-800 dark:text-gray-300">
                                                    THE HIDDEN BATTLE GAME
                                                </h2>
                                                <p className="text-gray-800 dark:text-gray-300 text-sm">
                                                    The Hidden Battle Game was my final project for my C# programming course in college. This is the most challenging project I have created in C# to date, requiring significant time and effort to complete. The game is based on a traditional board game.
                                                    <a href="https://www.youtube.com/watch?v=4gHJlYLomrs%20target=" target="_blank" className="text-blue-600 dark:text-blue-500 hover:underline"> link, </a>
                                                    <a href="https://github.com/PSYMA/The-Hidden-Game-Battle-CSharp-WPF-" target="_blank" className="text-blue-600 dark:text-blue-500 hover:underline"> source code</a>
                                                </p>
                                            </Card>
                                            <Card
                                                className="max-w-md mt-10"
                                                imgAlt="LIBRARY SYSTEM GUI"
                                                imgSrc="./assets/thumbnails/csLibrary.png">
                                                <h2 className="text-lg font-bold text-gray-800 dark:text-gray-300">
                                                    LIBRARY SYSTEM GUI
                                                </h2>
                                                <p className="text-gray-800 dark:text-gray-300 text-sm">
                                                    This Library System is an enhanced version of my Simple Library System developed in C++. It is integrated with SQLite, offers several features, and is both graphical and user-friendly. I created this project to gain experience with database integration.
                                                    <a href="https://github.com/PSYMA/Library-System-CSharp-WPF" target="_blank" className="text-blue-600 dark:text-blue-500 hover:underline"> source code</a>
                                                </p>
                                            </Card>
                                            <Card
                                                className="max-w-md mt-10"
                                                imgAlt="THE PONG GAME"
                                                imgSrc="./assets/thumbnails/pong.png">
                                                <h2 className="text-lg font-bold text-gray-800 dark:text-gray-300">
                                                    THE PONG GAME
                                                </h2>
                                                <p className="text-gray-800 dark:text-gray-300 text-sm">
                                                    This is one of my earliest projects from my initial days of programming in C. The game is quite simple: you control a paddle to catch a ball. If you fail to catch the ball, you lose. Clear all the stars, and you win.
                                                    <a href="https://github.com/psyma/Ping-pong-Game-simple-Cpp-Console" target="_blank" className="text-blue-600 dark:text-blue-500 hover:underline"> source code</a>
                                                </p>
                                            </Card>
                                            <Card
                                                className="max-w-md mt-10"
                                                imgAlt="SIMPLE LIBRARY SYSTEM "
                                                imgSrc="./assets/thumbnails/cppLibrary.png">
                                                <h2 className="text-lg font-bold text-gray-800 dark:text-gray-300">
                                                    SIMPLE LIBRARY SYSTEM  
                                                </h2>
                                                <p className="text-gray-800 dark:text-gray-300 text-sm">
                                                    This Simple Library System was my final project for my C language course. As a beginner at the time, I faced many challenges during its development. The system is straightforward, allowing students to borrow and return books.
                                                    <a href="https://github.com/PSYMA/Library-System-simple-C-Cpp-Console" target="_blank" className="text-blue-600 dark:text-blue-500 hover:underline"> source code</a>
                                                </p>
                                            </Card>
                                        </Tabs.Item>
                                        <Tabs.Item title="New">
                                            <Card
                                                className="max-w-md"
                                                imgAlt="WEBSITE BLOG"
                                                imgSrc="./assets/thumbnails/codeflowerhorn.png">
                                                <h2 className="text-lg font-bold text-gray-800 dark:text-gray-300">
                                                    WEBSITE BLOG
                                                </h2>
                                                <p className="text-gray-800 dark:text-gray-300 text-sm">
                                                    I’ve developed a dedicated blog to share my expertise in various programming languages. This platform is designed to be a valuable resource for programmers, featuring tutorials, insights, and best practices across a range of languages. My goal is to contribute to the programming community by providing useful information and fostering continuous learning and growth.
                                                    <a href="https://codeflowerhorn.com" target="_blank" className="text-blue-600 dark:text-blue-500 hover:underline"> link</a>
                                                </p>
                                            </Card>
                                            <Card
                                                className="max-w-md mt-10"
                                                imgAlt="AMICANEM CHAT APPLICATION"
                                                imgSrc="./assets/thumbnails/amicanem.png">
                                                <h2 className="text-lg font-bold text-gray-800 dark:text-gray-300">
                                                    CHAT APPLICATION
                                                </h2>
                                                <p className="text-gray-800 dark:text-gray-300 text-sm">
                                                    As a personal project and passion, I’ve developed this chat application with the goal of creating a publicly accessible platform for real-time communication. Driven by my interest in both software development and user experience, I designed this chat app to offer seamless, intuitive interactions. It’s crafted to be a versatile tool for various communication needs, whether for casual conversations or more structured discussions. By making it publicly available, I hope to provide a valuable resource for users seeking a reliable and engaging chat experience, while also honing my skills and exploring new technologies.
                                                    <a href="https://amicanem.com" target="_blank" className="text-blue-600 dark:text-blue-500 hover:underline"> link</a>
                                                </p>
                                            </Card>
                                        </Tabs.Item> 
                                    </Tabs> 
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