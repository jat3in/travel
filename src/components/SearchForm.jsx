
import React, { useState } from 'react';
import TravellerClassModal from './TravellerClassModal';

const SearchForm = () => {
  const [fromValue, setFromValue] = useState('');
  const [toValue, setToValue] = useState('');
  const [travellerClass, setTravellerClass] = useState(''); 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRotated, setIsRotated] = useState(false);

  const handleExchange = () => {
    const temp = fromValue;
    setFromValue(toValue);
    setToValue(temp);
    setIsRotated(true); 
    setTimeout(() => setIsRotated(false), 500);
  };

  const handleModalClose = (cabinClass, travellers) => {
    setTravellerClass(`${cabinClass} - ${travellers} Traveller(s)`);
    setIsModalOpen(false);
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="bg-background bg-cover bg-center min-h-screen flex items-center justify-center">
   
     <style>
        {`
          @keyframes App-logo-spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
          .rotate-360 {
            animation: App-logo-spin 0.5s linear;
          }
          .placeholder-dark::placeholder {
            color: black;
          }
          .placeholder-lightblue::placeholder {
            color: lightblue;
          }
          .placeholder-multiline::placeholder {
            white-space: pre-wrap;
        `}
      </style>
    <div className="border-2 border-black rounded-2xl flex flex-col items-center justify-center mx-auto w-11/12 max-w-6xl p-6">
     
      <div className="flex justify-start text-white items-center mb-6 w-full">
        <input type="radio" name="trip" id="one-way" defaultChecked />
        <label htmlFor="one-way" className="ml-2" >One way</label>
        <input type="radio" name="trip" id="round-trip" className="ml-4" />
        <label htmlFor="round-trip" className="ml-2">Round Trip</label>
        <input type="radio" name="trip" id="multicity" className="ml-4" />
        <label htmlFor="multicity" className="ml-2">Multicity</label>
      </div>
      <div className="flex flex-wrap md:flex-nowrap items-center justify-between w-full  ">
      <div className="relative w-full md:w-1/6 m-0.5 ">
          <input 
            type="text" 
            name="from"
            placeholder="Country or City"
            value={fromValue}
            onChange={(e) => setFromValue(e.target.value)} 
            className="p-2 border border-white  w-full h-20 rounded-l-2xl placeholder-light-blue  hover:border-blue-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
          <label 
            htmlFor="from"
            className="absolute top-0 left-0 p-2 text-dark "
          >
            From
          </label>
        </div>

        <button 
         className={`p-2 cursor-pointer bg-white text-blue-800 border-2 border-blue-800  rounded-full w-12 h-12 mx-2 transform transition-transform duration-500 ${isRotated ? 'rotate-360' : ''}`}
         onClick={handleExchange}
        >
          ⇆
        </button>
        <div className="relative w-full md:w-1/6 m-0.5 ">
          <input 
            type="text" 
            name="to"
            placeholder="Destination"
            value={toValue}
            onChange={(e) => setToValue(e.target.value)} 
            className="p-2 border border-white w-full h-20  placeholder-light-blue  hover:border-blue-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
          <label 
            htmlFor="to"
            className="absolute top-0 left-0 p-2 text-dark "
          >
            To
          </label>
        </div>

        <div className="relative w-full md:w-1/6 m-0.5 ">
          <input 
            type="date" 
            name="departure"
            placeholder="Add Date"
            defaultValue={today}
            className="p-2 border border-white w-full h-20  placeholder-light-blue  hover:border-blue-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
          <label 
            htmlFor="departure"
            className="absolute top-0 left-0 p-2 text-dark "
          >
            Departure
          </label>
        </div>

        <div className="relative w-full md:w-1/6 m-0.5">
          <input 
            type="date" 
            name="return"
            placeholder="add date"
            defaultValue={today}
            className="p-2 border border-white w-full h-20  placeholder-light-blue  hover:border-blue-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
          <label 
            htmlFor="return"
            className="absolute top-0 left-0 p-2 text-dark "
          >
            Return
          </label>
        </div>

        <div className="relative w-full md:w-1/6 m-0.5 ">
          <input 
            type="text" 
            name="traveller-class"
            placeholder="Draveller class"
            value={travellerClass}
            onClick={() => setIsModalOpen(true)}
            readOnly
            className="p-2 border border-white w-full h-20 rounded-r-2xl placeholder-light-blue  hover:border-blue-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
          <label 
            htmlFor="traveller-class"
            className="absolute top-0 left-0 p-2 text-dark "
          >
            Traveller & Class
          </label>
        </div>
      </div>
      <button className="bg-yellow-500 text-black p-2 px-6  border-none cursor-pointer rounded-lg mt-6 hover:bg-yellow-400 transform hover:scale-105 transition-transform duration-300">
    
       SEARCH
      </button>
      {isModalOpen && 
        <TravellerClassModal onClose={handleModalClose} />
      }
    </div>
    </div>
  );
};

export default SearchForm;