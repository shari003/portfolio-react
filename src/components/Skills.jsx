/* eslint-disable react/jsx-no-comment-textnodes */
import CPP from "../assets/c-.png"
import Python from "../assets/python.png"
import JS from "../assets/javascript.png"
import React from "../assets/react.png"
import NodeJS from "../assets/node.png"
import MongoDB from "../assets/mongo.png"
import Tailwind from "../assets/tailwind.png"
import Ex from "../assets/express.png"

const Skills = () => {
    return (
        <>
            <div name="skills" className="bg-[#0a192f] w-full h-screen text-gray-300 pt-12">
                <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                    <div>
                        <p className="text-4xl font-bold inline border-b-4 border-yellow-500">Skills</p>
                        <p className="py-4">// These are the technologies I worked with...</p>
                    </div>

                    <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
                        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                            <img className="w-20 mx-auto" src={CPP} alt="CPP logo" />
                            <p className="my-4">C++</p>
                        </div>
                        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                            <img className="w-20 mx-auto" src={Python} alt="Python logo" />
                            <p className="my-4">Python</p>
                        </div>
                        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                            <img className="w-20 mx-auto" src={JS} alt="JS logo" />
                            <p className="my-4">JavaScript</p>
                        </div>
                        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                            <img className="w-20 mx-auto" src={Tailwind} alt="GITHUB logo" />
                            <p className="my-4">Tailwindcss</p>
                        </div>
                        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                            <img className="w-20 mx-auto" src={MongoDB} alt="MongoDB logo" />
                            <p className="my-4">MongoDB</p>
                        </div>
                        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                            <img className="w-20 p-3 mx-auto bg-white invert rounded-full" src={Ex} alt="TF logo" />
                            <p className="my-4">Express.js</p>
                        </div>
                        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                            <img className="w-20 mx-auto" src={React} alt="opencv logo" />
                            <p className="my-4">React</p>
                        </div>
                        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                            <img className="w-20 mx-auto" src={NodeJS} alt="NodeJS logo" />
                            <p className="my-4">Node.js</p>
                        </div>
                        
                        
                    </div>

                </div>
            </div>
        </>
    )
}

export default Skills