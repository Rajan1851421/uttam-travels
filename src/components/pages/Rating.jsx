

const ServiceRatingCard = () => {


  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="px-4 py-2">
        <h2 className="text-2xl font-semibold text-gray-800">service</h2>
        <div className="flex mt-2">
          <svg className="w-6 h-6 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 2c.3 0 .5.1.7.3l3.5 3.2c.3.3.5.7.5 1.2v13c0 .6-.4 1-1 1H9c-.6 0-1-.4-1-1V6.5c0-.5.2-.9.5-1.2L11.3 2.3c.2-.2.4-.3.7-.3m0-2c-.6 0-1.2.3-1.6.9l-4 3.7c-.3.2-.4.5-.4.8v15c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-15c0-.3-.1-.6-.4-.8l-4-3.7c-.4-.6-1-1-1.6-1z"/>
          </svg>
          <div className="ml-2 text-gray-600">4</div>
        </div>
        <div className="flex mt-2">
          <svg className="w-6 h-6 fill-current text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 2c.3 0 .5.1.7.3l3.5 3.2c.3.3.5.7.5 1.2v13c0 .6-.4 1-1 1H9c-.6 0-1-.4-1-1V6.5c0-.5.2-.9.5-1.2L11.3 2.3c.2-.2.4-.3.7-.3m0-2c-.6 0-1.2.3-1.6.9l-4 3.7c-.3.2-.4.5-.4.8v15c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-15c0-.3-.1-.6-.4-.8l-4-3.7c-.4-.6-1-1-1.6-1z"/>
          </svg>
          <div className="ml-2 text-gray-600">120 reviews</div>
        </div>
      </div>
    </div>
  );
};

export default ServiceRatingCard;
