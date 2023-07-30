/* eslint-disable react/jsx-no-comment-textnodes */
import iris from "../assets/projects/iris_tracker_1.png";
import siamese_net from "../assets/projects/siamese_net.png";
import flipkart_scrapper from "../assets/projects/flipkart_scrapper.png";
import hate_speech from "../assets/projects/hate_speech.png";

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
                    <div style={{backgroundImage: `url(${hate_speech})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">

                        {/* Hover Effect */}
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl text-center block m-auto  w-[100%] font-bold text-white tracking-wider">
                                Hate Speech Detection on Videos 
                            </span>
                            <div className="pt-8 text-center">
                                <a href="https://www.kaggle.com/code/zorrus/nlp-project-hate-speech" target="_blank" rel="noreferrer">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                                </a>                                  
                            </div>
                        </div>
                    </div>


                    {/* Second */}
                    <div style={{backgroundImage: `url(${iris})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">

                        {/* Hover Effect */}
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl text-center block m-auto  w-[100%] font-bold text-white tracking-wider">
                                Iris Tracker
                            </span>
                            <div className="pt-8 text-center">
                                <a href="https://github.com/shari003/iris_tracker" target="_blank" rel="noreferrer"> 
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                                </a>                                  
                            </div>
                        </div>
                    </div>

                    {/* Third */}
                    <div style={{backgroundImage: `url(${siamese_net})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">

                        {/* Hover Effect */}
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl text-center block m-auto  w-[100%] font-bold text-white tracking-wider">
                                One Shot Facial Recognition <br />(Siamese Net)
                            </span>
                            <div className="pt-8 text-center">
                                <a href="https://github.com/shari003/one-shot-face-recognition" target="_blank" rel="noreferrer">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                                </a>                                  
                            </div>
                        </div>
                    </div>

                    {/* Fourth Project */}
                    <div style={{backgroundImage: `url(${flipkart_scrapper})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">

                        {/* Hover Effect */}
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl text-center block m-auto  w-[100%] font-bold text-white tracking-wider">
                                Flipkart Auto Reviews Scrapper 
                            </span>
                            <div className="pt-8 text-center">
                                <a href="https://github.com/shari003/flipkart-reviews-scrapper" target="_blank" rel="noreferrer">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
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