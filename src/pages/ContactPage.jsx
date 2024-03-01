import PageLayout from '../components/PageLayout';
import '../index.css'

function ContactPage () {
    return (
        <PageLayout>
            <section className="text-gray-600 body-font relative">
                <div className="container px-3 py-20 mx-auto w-full bg-white border-t border-b p-4 shadow-sm" style={{ borderColor: '#00bcd4' }}>
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-4xl text-2xl font-medium title-font mb-4 text-gray-900">GET IN TOUCH</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Have a question? Or just want to say 'Hi!'? Reach out to us with the form below.</p>
                    </div>
        
                    <div className="lg:w-1/2 md:w-2/3 mx-auto">
                        <div className="flex flex-wrap -m-2">
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                                    <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border focus:border-#00bcd4 focus:bg-white focus:ring-2 focus:ring-#00bcd4 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" style={{borderColor: '#00bcd4'}}/>
                                </div>
                            </div>
        
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                                    <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border focus:border-#00bcd4 focus:bg-white focus:ring-2 focus:ring-#00bcd4 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" style={{borderColor: '#00bcd4'}}/>
                                </div>
                            </div>
                            
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                                    <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border focus:border-#00bcd4 focus:bg-white focus:ring-2 focus:ring-#00bcd4 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" style={{borderColor: '#00bcd4'}}></textarea>
                                </div>
                            </div>
        
                            <div className="p-2 w-full">
                                <button className="flex mx-auto text-white bg-#00bcd4 border-0 py-2 px-8 focus:outline-none hover:bg-#00bcd4-dark rounded text-lg" style={{backgroundColor: '#00bcd4', boxShadow: '0 4px 6px -1px rgba(0, 188, 212, 0.5), 0 2px 4px -2px rgba(0, 188, 212, 0.5)'}}>Send Message</button>
                            </div>
                            
                            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                                <a className="text-#00bcd4">shannon-alexis@hotmail.com</a>

                                <div className="px-10 flex flex-col items-center">
                                    <img src="imgs/signature.png" alt="Signature" className="w-1/3" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </PageLayout>
    );
}

export default ContactPage;