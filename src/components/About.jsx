/* eslint-disable react/no-unescaped-entities */
const About = () => {
    return (
        <>
            <div name="about" className="bg-[#0a192f] w-full h-screen text-gray-300">
                <div className="flex flex-col justify-center items-center w-full h-full">
                    <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
                        <div className="sm:text-right pb-8 pl-4 ">
                            <p className="text-4xl font-bold inline border-b-4 border-yellow-500">About</p>
                        </div>
                        <div></div>
                    </div>
                    <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                        <div className="sm:text-right text-4xl font-bold">
                            <p>Hi, I'm Shri, nice to meet you! Please take a look around.</p>
                        </div>
                        <div>
                            Hey there! I'm a super pumped 4th-year Engineering student, specializing in Full-stack Web Development. I've crushed it with multiple cool projects in these areas! Always on the lookout for new tech to geek out on. Building top-notch software is my jam, and I'm all about bringing fresh and innovative solutions to the table. I love crafting software that rocks their world!
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About