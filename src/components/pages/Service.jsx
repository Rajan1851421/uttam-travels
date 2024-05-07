import { useState } from "react";
import { ImCross } from "react-icons/im";

import EnquiryFrom from './Enquiry'


function Service() {

  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    tourDescription: '',
    departureDate: '',
    numberOfDays: '',
    email: '',
    mobileNo: '',

  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    console.log(formData);
    setIsOpen(false)


  };
  const handleCloseModal = () => {
    setIsOpen(false)

  }

  const enquiryForm = () => {
    setIsOpen(true)
  }





  return (
    <>
      <div className="max-w-full">
        <img className=" h-[200px] md:h-[500px] w-full" src="https://chikucab.com/images/home/slidebg.webp" alt="" />
      </div>

      <div className=" ">
        <div className="p-8 roumded-lg shadow-lg bg-[#FEF9C3] m-1 md:m-10  ">
          <div className="mx-auto ">
            <h1 className="font-bold text-lg md:text-3xl uppercase text-[#78716C] ">Jackpot Deals on Top Selling Packages</h1>
            <p className="text-[#A8A29E] text-md ">Save extra with our exclusive deals!</p>
            <div className="grid grid-cols-2 md:grid-cols-7 mt-4  gap-2">
              <div className="relative">
                <img className="rounded-md shadow-md block w-full" loading="lazy" src="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/3052/Beautiful%20tropical%20beach%20in%20Thailand.jpg?crop=134:207&downsize=134:207" alt="" />
                <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t
                 from-gray-950 to-transparent mx-auto text-center text-white font-semibold">Thiland 5N 1000/-</div>
              </div>

              <div className="relative">
                <img className="rounded-md shadow-md block w-full" loading="lazy" src="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1328/ZF.jpg?crop=134:207&downsize=134:207" alt="" />
                <div className="absolute inset-x-0 bottom-0 h-8
                 bg-gradient-to-t from-gray-800 to-transparent mx-auto text-center text-white font-semibold">Goa 4N 15000/- </div>
              </div>
              <div className="relative">
                <img className="rounded-md shadow-md block w-full" loading="lazy" src="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1369/Verdant%20tea%20plantations%20of%20Munnar.jpg?crop=134:207&downsize=134:207" alt="" />
                <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-gray-800 to-transparent mx-auto text-center text-white font-semibold">
                  Kerala 4N 20000/-
                </div>
              </div>
              <div className="relative">
                <img className="rounded-md shadow-md block w-full" loading="lazy" src="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1404/Pura-Ulun-Danu-temple.jpg?crop=134:207&downsize=134:207" alt="" />
                <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-gray-800 to-transparent mx-auto text-center text-white font-semibold">
                  Bali 4N 124578/-
                </div>
              </div>
              <div className="relative">
                <img className="rounded-md shadow-md block w-full" loading="lazy" src="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/3147/DTCM_The%20Address%20JBR_Night.jpg?crop=134:207&downsize=134:207" alt="" />
                <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-gray-800 to-transparent mx-auto text-center text-white font-semibold">
                  Dubai 5N 500000/-
                </div>
              </div>
              <div className="relative">
                <img className="rounded-md shadow-md block w-full" loading="lazy" src="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/4308/Houseboat%20on%20Dal%20Lake.jpg?crop=134:207&downsize=134:207" alt="" />
                <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-gray-800 to-transparent mx-auto text-center text-white font-semibold">
                  Kashmir 6N 45000/-
                </div>
              </div>
              <div className="relative">
                <img className="rounded-md shadow-md block w-full" loading="lazy" src="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/3736/Yen-stream-in-Autumn.jpg?crop=134:207&downsize=134:207" alt="" />
                <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-gray-800 to-transparent mx-auto text-center text-white font-semibold">
                  Vietanam 6N 65000/-
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>

      {/* international destinations */}

      <div className=" ">
        <div className="p-8 roumded-lg shadow-lg bg-[#FEF9C3] m-1 md:m-10  ">
          <div className="mx-auto ">
            <h1 className="font-bold text-lg md:text-3xl uppercase text-[#78716C] ">International Destinations!</h1>
            <p className="text-[#A8A29E] text-md ">Save extra with our exclusive deals!</p>
            <div className="grid grid-cols-2 md:grid-cols-7 mt-4  gap-2">
              <div className="relative">
                <img className="rounded-md shadow-md block w-full" loading="lazy" src="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/3198/shutterstock_176887880.jpg?crop=156:227&downsize=156:227" alt="" />
                <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t
                 from-gray-950 to-transparent mx-auto text-center text-white font-semibold">Europe</div>
              </div>

              <div className="relative">
                <img className="rounded-md shadow-md block w-full" loading="lazy" src="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/3067/I.jpg?crop=156:227&downsize=156:227" alt="" />
                <div className="absolute inset-x-0 bottom-0 h-8
                 bg-gradient-to-t from-gray-800 to-transparent mx-auto text-center text-white font-semibold">Thiland</div>
              </div>
              <div className="relative">
                <img className="rounded-md shadow-md block w-full" loading="lazy" src="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1971/PetronasTwinTowersAndKLCCPark.jpg?crop=156:227&downsize=156:227" alt="" />
                <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-gray-800 to-transparent mx-auto text-center text-white font-semibold">
                  Malesia
                </div>
              </div>
              <div className="relative">
                <img className="rounded-md shadow-md block w-full" loading="lazy" src="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/4916/kuta.jpg?crop=156:227&downsize=156:227" alt="" />
                <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-gray-800 to-transparent mx-auto text-center text-white font-semibold">
                  Bali
                </div>
              </div>
              <div className="relative">
                <img className="rounded-md shadow-md block w-full" loading="lazy" src="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/3147/majestic-mauritus-and-dubai.jpg?crop=156:227&downsize=156:227" alt="" />
                <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-gray-800 to-transparent mx-auto text-center text-white font-semibold">
                  Dubai
                </div>
              </div>
              <div className="relative">
                <img className="rounded-md shadow-md block w-full" loading="lazy" src="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/2514/singapore1.jpg?crop=156:227&downsize=156:227" alt="" />
                <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-gray-800 to-transparent mx-auto text-center text-white font-semibold">
                  Singspoor
                </div>
              </div>
              <div className="relative">
                <img className="rounded-md shadow-md block w-full" loading="lazy" src="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/61/Opera-Bar.jpg?crop=370:240?crop=156:227&downsize=156:227" alt="" />
                <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-gray-800 to-transparent mx-auto text-center text-white font-semibold">
                  Australia
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>

      {/* OUR TOUR PACKEGES */}
      <h1 className="uppercase text-md md:text-2xl font-extrabold my-4 text-center jost  ">Our Top Tour Packeges</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 mx-2 md:mx-10 gap-4 ">
        <div className="col-span-2">
          <div className="col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-3 border ">
              <div className="col-span-2">
                <div className="flex flex-col justify-start items-center p-2">
                  <p className=" font-semibold text-lg text-[#2563EB] capitalize ">Chandigarh Manali Shimla Tour</p>
                  <div className="my-2 ">
                    <p><strong>Duration :</strong> 7 Nights / 8 Days</p>
                    <p><strong>Destination Covered :</strong> Chandigarh City, Manali, Shimla, Kufri, Solang Valley, Tibetan Monasteries, Hadimba Temple, Jakhu Temple, Open Hand Monument, Rock Garden, Capitol Complex</p>
                    <p><strong>Tour Activities :</strong> Hill Stations & Valleys, Hill Stations & Valleys, Lakes & Rivers</p>
                  </div>
                  <button className="bg-[#172554] text-white px-3 py-2 text-sm" onClick={enquiryForm} >Enquiry Now for Best Deals</button>
                </div>
              </div>
              <div>
                <img className="h-full w-full" src="https://ttw.wlimg.com/package-images/photo-big/dir_25/746270/321991.jpg" alt="" />
              </div>
            </div>
          </div>

          <div className="col-span-2 mt-4">
            <div className="grid grid-cols-1 md:grid-cols-3 border ">
              <div className="col-span-2">
                <div className="flex flex-col justify-start items-center p-2">
                  <p className=" font-semibold text-lg text-[#2563EB] capitalize ">Varanasi Sarnath Tour</p>
                  <div className="my-2 ">
                    <p><strong>Duration :</strong>  3 Nights / 4 Days</p>
                    <p><strong>Destination Covered :</strong>  Varanasi, Sarnath, Durga Temple, Vishwanath Temple</p>
                    <p><strong>Tour Activities :</strong> Religious & Pilgrimage</p>
                  </div>
                  <button className="bg-[#172554] text-white px-3 py-2 text-sm " onClick={enquiryForm} >Enquiry Now for Best Deals</button>
                </div>
              </div>
              <div>
                <img className="h-full w-full" src="https://ttw.wlimg.com/package-images/photo-small/dir_25/746270/321992.jpg" alt="" />
              </div>
            </div>
          </div>

          <div className="col-span-2 mt-4">
            <div className="grid grid-cols-1 md:grid-cols-3 border ">
              <div className="col-span-2">
                <div className="flex flex-col justify-start items-center p-2">
                  <p className=" font-semibold text-lg text-[#2563EB] capitalize ">Varanasi Allahabad Ayodhya Tour</p>
                  <div className="my-2 ">
                    <p><strong>Duration :</strong>3 Nights / 4 Days</p>
                    <p><strong>Destination Covered :</strong> Varanasi, Prayagraj, Ayodhya, Allahabad Museum</p>
                    <p><strong>Tour Activities :</strong> Forts and Palaces, Religious & Pilgrimage</p>
                  </div>
                  <button className="bg-[#172554] text-white px-3 py-2 text-sm " onClick={enquiryForm} >Enquiry Now for Best Deals</button>
                </div>
              </div>
              <div>
                <img className="h-full w-full" src="https://ttw.wlimg.com/package-images/photo-small/dir_25/746270/321993.jpg" alt="" />
              </div>
            </div>
          </div>

          <div className="col-span-2 mt-4 ">
            <div className="grid grid-cols-1 md:grid-cols-3 border ">
              <div className="col-span-2">
                <div className="flex flex-col justify-start items-center p-2">
                  <p className=" font-semibold text-lg text-[#2563EB] capitalize ">Varanasi Allahabad Ayodhya Tour</p>
                  <div className="my-2 ">
                    <p><strong>Duration :</strong>3 Nights / 4 Days</p>
                    <p><strong>Destination Covered :</strong> Varanasi, Prayagraj, Ayodhya, Allahabad Museum</p>
                    <p><strong>Tour Activities :</strong> Forts and Palaces, Religious & Pilgrimage</p>
                  </div>
                  <button className="bg-[#172554] text-white px-3 py-2 text-sm " onClick={enquiryForm} >Enquiry Now for Best Deals</button>
                </div>
              </div>
              <div>
                <img className="h-full w-full" src="https://ttw.wlimg.com/package-images/photo-small/dir_25/746270/321993.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <EnquiryFrom />
        </div>
      </div>



     

      {/* enquiry modal */}

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="modal bg-white p-5 mt-4  ">
            <div className="modal-content">
              <div className='flex justify-end '>
                <span className="close" onClick={handleCloseModal}><ImCross className='cursor-pointer ' /></span>
              </div>
              <h2 className='text-center my-5 font-bold uppercase text-xl'>Enquiry Form</h2>
              <form onSubmit={handleSubmit}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                  <div className='mb-3 flex flex-col '>
                    <label htmlFor="">Full Name</label>
                    <input type="text" name="fullName" placeholder="Your Full Name" value={formData.fullName} onChange={handleChange} required />
                  </div>
                  <div className='mb-3 flex flex-col '>
                    <label htmlFor="">Discription</label>
                    <input type="text" name="tourDescription" placeholder="Tour Description" value={formData.tourDescription} onChange={handleChange} required />
                  </div>
                  <div className='mb-3 flex flex-col '>
                    <label htmlFor="">Departure Date</label>
                    <input type="text" name="departureDate" placeholder="Departure Date" value={formData.departureDate} onChange={handleChange} required />
                  </div>
                  <div className='mb-3 flex flex-col '>
                    <label htmlFor="">Bookin In Days</label>
                    <input type="number" name="numberOfDays" placeholder="Number of Days" value={formData.numberOfDays} onChange={handleChange} required />
                  </div>
                  <div className='mb-3 flex flex-col '>
                    <label htmlFor="">Your Email</label>
                    <input type="email" name="email" placeholder="Email id" value={formData.email} onChange={handleChange} required />
                  </div>
                  <div className='mb-3 flex flex-col '>
                    <label htmlFor="Mobile">Mobile</label>
                    <input type="tel" name="mobileNo" placeholder="Mobile No." value={formData.mobileNo} onChange={handleChange} required />
                  </div>
                </div>
                <button className='mt-5 bg-[#172554] text-white px-5 py-2 text-sm w-full ' type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div >

      )
      }





    </>
  )
}

export default Service
