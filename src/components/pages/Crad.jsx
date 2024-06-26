import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const myStyle = {
  display: "-webkit-box",
  WebkitLineClamp: "2",
  WebkitBoxOrient: "vertical",
};

const initialApiData = [
  {
    category: "Innova Crysta",
    title: "Luxurios Cars for better expirience",
    date: new Date().toDateString(),
    location: "Varanasi Uttar Pradesh",
    subCategory: "Ocean",
    price: "15/km",
    image: "https://imgd.aeplcdn.com/1920x1080/n/cw/ec/51435/innova-crysta-exterior-right-front-three-quarter-3.jpeg?q=80&q=80",
    name: "infynno solution",
  },
  {
    category: "Honda Amaze",
    title: "Best car In Sedan",
    date: new Date().toDateString(),
    location: "Varanasi Uttar Pradesh",
    subCategory: "Ocean",
    price: "12/km",
    image: "https://cdni.autocarindia.com/ExtraImages/20190617033605_HONDA_AMAZE_ACE.jpg",
    name: "React js",
  },
  {
    category: "New Dzire",
    title: "This is another best sedan car",
    date: new Date().toDateString(),
    location: "Varanasi Uttar Pradesh",
    subCategory: "Ocean",
    price: "12/km",
    image: "https://d308ljkq6e62o1.cloudfront.net/img/APbi8xCoR8S4BtOFzGy8mA/file.JPG",
    name: "Laravel development",
  },
  {
    category: "Scorpio",
    title: "luxurious SUV car",
    date: new Date().toDateString(),
    location: "Varanasi Uttar Pradesh",
    subCategory: "Ocean",
    price: "15/km",
    image: "https://www.financialexpress.com/wp-content/uploads/2022/06/2022-Mahindra-Scorpio-N-9.jpg?w=1024",
    name: "Infynno",
  },
];

function Card() {
  const { Token_login, loading } = useSelector((state) => state.productStore);
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Retrieve data from sessionStorage
    const sessionData = sessionStorage.getItem("Vehicle_added");
    if (sessionData) {
      const parsedSessionData = JSON.parse(sessionData);
      // Format each stored vehicle data for display
      const sessionDataFormatted = parsedSessionData.map((item, index) => ({
        id: index + 1, // Optionally add an id if needed
        category: item.carType,
        title: item.carName,
        date: new Date().toDateString(),
        location: "Unknown Location",
        subCategory: "Unknown SubCategory",
        price: `${item.rate}/km`,
        image: item.carImg,
        name: "User Submitted",
      }));
      // Set formatted data to state
      setApiData([...initialApiData, ...sessionDataFormatted]);
    } else {
      // If no session data, set initial data
      setApiData(initialApiData);
    }
  }, []);

  return (
    <div className="bg-white bg-opacity-20 min-h-[100vh] flex items-center mx-auto ">
      <div className=" mx-auto w-full ">
        <div className="grid grid-cols-1 w-full  md:grid-cols-2 lg:grid-cols-4 gap-4 py-10 text-left mx-1 md:mx-5 xl:mx-10">
          {apiData.map((data, index) => (
            <div className="border rounded-lg hover:drop-shadow-md overflow-hidden relative bg-white" key={index}>
              <div className="cursor-pointer h-48 overflow-hidden">
                <img src={data.image} alt="Profile" className="w-full h-full hover:scale-125 delay-200 duration-300 ease-in-out" />
              </div>
              <div className="p-4 space-y-2 relative h-60 text-gray-400">
                <div>
                  <p className="text-sm font-bold truncate">{data.category}</p>
                </div>
                <div>
                  <span style={myStyle} className="text-xl font-bold text-gray-600 overflow-hidden h-14 ">{data.title}</span>
                </div>
                <div className="flex gap-2 items-center">
                  <span className="text-sm font-normal">{data.date}</span>
                </div>
                {/* <div className="flex  justify-start items-center">
                  <span className="text-sm font-normal">{data.location}</span>
                </div> */}
                <div className="bottom-2 absolute inset-x-0">
                  <div className="border-t mt-1 mb-1"></div>
                  <span className="text-xl text-gray-600 pl-4 text-center">{data.price}</span>
                </div>
                <div className="flex justify-between items-center gap-2">
                  {Token_login ? (
                    <button className="bg-[#052E16] text-white px-4 text-md hover:bg-[#1E1B4B] cursor-pointer hover:rounded-md py-1">
                      Update
                    </button>
                  ) : null}
                  <button className="bg-[#EAB308] text-white px-4 text-md hover:bg-[#1E1B4B] cursor-pointer hover:rounded-md py-1">View</button>
                  {Token_login ? (
                    <button className="bg-[#4C0519] text-white px-4 text-md hover:bg-[#1E1B4B] cursor-pointer hover:rounded-md py-1">Delete</button>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;
