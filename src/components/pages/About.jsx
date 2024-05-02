import ContactCard from "./ContactCard"


function About() {
  return (
    <>
      <div className="mx-14">
        <h1 className="text-md md:text-2xl font-extrabold mt-2 md:mt-10 ">About Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 ">
          <div className="col-span-2 ">
            <p className="text-justify jost mt-2 md:mt-8">
              A trip to Varanasi is always fun. Visiting and admiring the beauty of the land of Mahadev is something different and special.
              The several Ghats on the banks of holy Ganga River, pleasant and rhythmic sound of Saints chanting there and the atmosphere that
              creates an enormous and religious environment are just mind-blowing. At Shri Kashi Tour &Travels, we are helping various travelers to
              get a trip to Varanasi. As a reliable name in the industry, we are offering various travel services like car & coach rental services,
              flight booking services, hotel booking services, railway ticket booking services, and tour operator services. Connect with us now to avail
              our services.

              Shri Kashi Tour &Travels is a Varanasi (Uttar Pradesh, India) based company, which was established in the year 2015. Under the great
              guidance of Mr. Pramod Kumar and Mr. Ashok Singh (owners), the company has become a tremendous travel agency in a quick time.
            </p>
            <h2 className="font-bold text-sm md:text-lg my-2 md:my-6 ">We have deigned several tour packages such as:</h2>
            <ul className="list-disc space-y-2 ml-6 ">
              <li>Heritage & culture tour</li>
              <li>Group holidays</li>
              <li>Honeymoon holidays</li>
              <li>Family holidays</li>
              <li> Wildlife tour</li>
              <li>Yoga & Ayurveda tour</li>
              <li>Adventure tour</li>
              <li>Beach holidays/ beach island tour</li>
              <li>Buddhist pilgrimage tour</li>
              <li> Romantic holidays</li>
              <li>Pilgrimage/ religious tour</li>
              <li>Cruise holidays</li>
              <li>Golden triangle tour</li>
            </ul>
            {/* contact person */}
            <div className="mt-4 md:mt-8">
              <table className="w-full  border border-blue-500 max-w-xl mt-16 mx-auto my-4">
                <thead>

                </thead>
                <tbody className="border border-blue-500">
                  <tr className="bg-white border border-blue-500">
                    <td className="py-2 px-4 border border-blue-500 bg-[#BAE6FD] font-semibold ">Name of CEO</td>
                    <td className="py-2 px-4 jost">Pramod Kumar</td>

                  </tr>
                  <tr className="bg-white border border-blue-500">
                    <td className="py-2 px-4  border border-blue-500  bg-[#BAE6FD] font-semibold ">Ownership Type</td>
                    <td className="py-2 px-4 jost">Partnership</td>

                  </tr>
                  <tr className="bg-white border-b border-blue-500">
                    <td className="py-2 px-4 border border-blue-500 bg-[#BAE6FD] font-semibold ">Year of Establishment</td>

                    <td className="py-2 px-4 jost">Since 2021</td>
                  </tr>
                  <tr className="bg-white border-b border-blue-500">
                    <td className="py-2 px-4  border border-blue-500  bg-[#BAE6FD] font-semibold ">Services We Offer</td>
                    <td className="py-2 px-4 jost ">Airline Ticketing Agents, Hotel Booking Agents, Car & Coach Rental, Rail Ticketing Agents, Tour Operators, Bus Ticketing Services</td>
                  </tr>
                  <tr className="bg-white border-b border-blue-500">
                    <td className="py-2 px-4  border border-blue-500  bg-[#BAE6FD] font-semibold ">GST No</td>
                    <td className="py-2 px-4 jost">05116413456465</td>
                  </tr>

                </tbody>
              </table>

            </div>

          </div>
          <div>

            <img className=" p-2 rounded-md " src="https://img.freepik.com/free-vector/travel-time-typography-design-with-travelling-objects_1308-89005.jpg" alt="" />
            {/* import contact card */}
            <div className="mt-4">
              <ContactCard />
            </div>
          </div>


        </div>

      </div>
    </>
  )
}

export default About
