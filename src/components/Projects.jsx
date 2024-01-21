/* eslint-disable react/jsx-no-comment-textnodes */
import jetflix from "../assets/projects/jetflix.png";
import quickcrave from "../assets/projects/quickcrave.png";
import pulspal from "../assets/projects/pulspal.png";
import admin_dash from "../assets/projects/admin_dash.png";

const Projects = () => {
    return (
        <div name="projects" className="pt-[6rem] w-full md:h-screen text-gray-300 bg-[#0a192f]">
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-yellow-500">Projects</p>
                    <p className="py-6">// Check out some of my recent Projects...</p>
                </div>

                {/* Main Container */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

                    {/* Container Grid Items Start from Here :- */}

                    {/* First Project */}
                    <div style={{backgroundImage: `url(${jetflix})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">

                        {/* Hover Effect */}
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl p-1 text-center block m-auto  w-[100%] font-bold text-white tracking-wider">
                                Jetflix (Powered by GPT) 
                            </span>
                            <div className="pt-8 text-center">
                                <a href="https://github.com/shari003/NetflixGPT" target="_blank" rel="noreferrer">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                                </a>   
                                <a href="https://netflixgpt-5a4f4.web.app/" target="_blank" rel="noreferrer">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Site</button>
                                </a>                                 
                            </div>
                        </div>
                    </div>

                    {/* Second */}
                    <div style={{backgroundImage: `url(${quickcrave})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">

                        {/* Hover Effect */}
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl text-center block m-auto  w-[100%] font-bold text-white tracking-wider">
                                QuickCrave
                            </span>
                            <div className="pt-8 text-center">
                                <a href="https://github.com/shari003/QuickCrave" target="_blank" rel="noreferrer">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                                </a>      
                                <a href="https://quickcrave.netlify.app/" target="_blank" rel="noreferrer">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Site</button>
                                </a>                             
                            </div>
                        </div>
                    </div>

                    {/* Third */}
                    <div style={{backgroundImage: `url(${pulspal})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">

                        {/* Hover Effect */}
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl text-center block m-auto w-[100%] font-bold text-white tracking-wider">
                                Pulspal
                            </span>
                            <div className="pt-8 text-center">
                                <a href="https://github.com/shari003/Pulspal" target="_blank" rel="noreferrer">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                                </a>                                  
                            </div>
                        </div>
                    </div>

                    {/* Fourth */}
                    <div style={{backgroundImage: `url(${admin_dash})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">

                        {/* Hover Effect */}
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl text-center block m-auto w-[100%] font-bold text-white tracking-wider">
                                Admin Dashboard
                            </span>
                            <div className="pt-8 text-center">
                                <a href="https://github.com/shari003/react-admin-dashboard" target="_blank" rel="noreferrer">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                                </a>   
                                <a href="https://admin-frontend-05mb.onrender.com/dashboard" target="_blank" rel="noreferrer">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Site</button>
                                </a>                                
                            </div>
                        </div>
                    </div>

                </div>


            </div>

        </div>
    )
}

export default Projects