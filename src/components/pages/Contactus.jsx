import { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";

function Contactus() {
  const [loading, setLoading] = useState(false);
  const form = useRef();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      const response = await emailjs.sendForm('service_0ky6glr', 'template_b7qmekf', form.current, {
        publicKey: '6Dz5OmCSaJ4po8_yB',
      });
      console.log('EmailJS response:', response);
      toast.success("Message Sent");
      setLoading(false);
      setTimeout(() => {
        form.current.reset(); // Clear the form
      }, 2000);
    } catch (error) {
      console.error('EmailJS error:', error);
      toast.error("Message Failed");
      setLoading(false);
    }
  };
  
  
  return (
    <>
      <section className="bg-blue-50 dark:bg-[#FBCFE8] my-2 md:my-6 mx-2 md:mx-14" id="contact">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mb-4">
            <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
              <p className="text-base font-semibold uppercase tracking-wide text-blue-600">
                Contact
              </p>
              <h2 className="font-heading mb-4 font-bold tracking-tight text-gray-900 text-3xl sm:text-5xl">
                Get in Touch
              </h2>
            </div>
          </div>
          <div className="flex items-stretch justify-center">
            <div className="grid md:grid-cols-2">
              <div className="h-full pr-6">
                <p className="mt-3 mb-12 text-lg text-gray-600">
                  These options are concise and clear, while still conveying the message that you are open to communication.
                </p>
                <ul className="mb-6 md:mb-0">
                  <li className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                        strokeLinejoin="round" className="h-6 w-6">
                        <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                        <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z">
                        </path>
                      </svg>
                    </div>
                    <div className="ml-4 mb-4">
                      <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 text-[#312E81]">Our Address
                      </h3>
                      <p className="text-gray-600">Hoplapur Road</p>
                      <p className="text-gray-600">Shivpur Varanasi U.P India</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                        strokeLinejoin="round" className="h-6 w-6">
                        <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2">
                        </path>
                        <path d="M15 7a2 2 0 0 1 2 2"></path>
                        <path d="M15 3a6 6 0 0 1 6 6"></path>
                      </svg>
                    </div>
                    <div className="ml-4 mb-4">
                      <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 text-[#312E81]">Contact
                      </h3>
                      <p className="text-gray-600">Mobile: +91-7052002200</p>
                      <p className="text-gray-600">Mail: uttamtravel@mail.com</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                        strokeLinejoin="round" className="h-6 w-6">
                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                        <path d="M12 7v5l3 3"></path>
                      </svg>
                    </div>
                    <div className="ml-4 mb-4">
                      <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 text-[#312E81]">Working
                        hours</h3>
                      <p className="text-gray-600">Monday - Friday: 08:00 - 17:00</p>
                      <p className="text-gray-600">Saturday & Sunday: 08:00 - 12:00</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
                <h2 className="mb-4 text-2xl font-bold text-[#312E81] uppercase">Ready to Get Started?</h2>
                <form ref={form} onSubmit={sendEmail} className='flex flex-col'>
                  <div className="flex flex-col">
                    <label htmlFor="from_name" className="text-sm font-medium mb-2">Name</label>
                    <input type="text" id="from_name" name="from_name" className="border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-indigo-500" />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="to_name" className="text-sm font-medium mb-2">Mobile</label>
                    <input type="number" id="to_name" name="to_name" className="border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-indigo-500" />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="message" className="text-sm font-medium mb-2">Message</label>
                    <textarea id="message" name="message" className="border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-indigo-500 h-24"></textarea>
                  </div>
                  <button type="submit" value='send' className="bg-indigo-500 text-white mt-2 px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    {loading ? "Sending ..." : 'Send'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contactus;
