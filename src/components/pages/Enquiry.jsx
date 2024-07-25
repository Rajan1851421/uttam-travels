import { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";

function Contactus() {
  const [loading, setLoading] = useState(false);
  const form = useRef();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.sendForm('service_0ky6glr', 'template_b7qmekf', form.current, {
      publicKey: '6Dz5OmCSaJ4po8_yB',
    })
      .then(
        () => {
          toast.success("Message Sent");
          setLoading(false);
          setTimeout(()=>{
            form.current.reset(); // Clear the form
          },2000)
        },
        () => {
          toast.error("Message Failed");
          setLoading(false);
        },
      );
  };

  return (
    <>
      <section className="bg-blue-50 dark:bg-[#FBCFE8] my-2 md:my-6 mx-2 md:mx-14" id="contact">               
         <p className="text-center font-bold uppercase py-2 ">Raise Enquary</p>
            <div className="grid p-5 ">             
              <div className="card h-fit w-full " id="form">               
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
       
      </section>
    </>
  );
}

export default Contactus;
