/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
const Contact = () => {
    return (
        <div name="contact" className="pt-[3.6rem] bg-[#0a192f] w-full h-[120vh] flex justify-center items-center p-4">
            <form method="POST" action="https://getform.io/f/d1ba0618-fe5e-42a7-97eb-2af4fa17bfeb" className="flex flex-col max-w-[600px] w-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-yellow-500 text-gray-300">Contact</p>
                    <p className="text-gray-300 py-4">// Submit the form below or mail me - shri04052003@gmail.com</p>
                </div>

                <input className="p-2 bg-[#ccd6f6]" type="text" placeholder="Name" name="name"/>
                <input className="my-4 p-2 bg-[#ccd6f6]" type="email" placeholder="Email" name="email"/>
                <textarea className="bg-[#ccd6f6] p-2" name="message" rows="10" placeholder="Message"></textarea>
                <button className="text-white border-2 hover:bg-yellow-500 hover:border-yellow-500 px-4 py-3 mx-auto flex items-center my-8">Let's Connect</button>

            </form>

        </div>
    )
}

export default Contact