import { useState } from "react"


function Enquiry() {
  const [fname, setFname] = useState('')
  const [email, setEmail] = useState('')
  const [mobile, setMobile] = useState(null)
  const [msg, setMsg] = useState('')

  const handleFormSubmit =(e)=>{
    e.preventDefault()
    console.log(fname,email,mobile,msg);
    alert("Our Team Reach out ASAP")
  }

  return (
    <>
      <div className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-center text-2xl font-bold mb-4">Enquiry Form</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" >
              Full Name
            </label>
            <input onChange={(e) => setFname(e.target.value)} value={fname} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="fullName" type="text" placeholder="Your Full Name" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" >
              Email
            </label>
            <input onChange={(e) => setEmail(e.target.value)} value={email} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email Address" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" >
              Mobile
            </label>
            <input onChange={(e) => setMobile(e.target.value)} value={mobile} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="mobile" type="tel" placeholder="Mobile Number" />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Message
            </label>
            <textarea onChange={(e) => setMsg(e.target.value)} value={msg} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" placeholder="Your Message"></textarea>
          </div>
          <div className="flex items-center justify-center">
            <button onClick={handleFormSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Submit
            </button>
          </div>
        </form>
      </div>

    </>
  )
}

export default Enquiry
