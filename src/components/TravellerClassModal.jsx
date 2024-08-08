import React, { useState } from 'react';

const TravellerClassModal = ({ onClose }) => {
  const [selectedCabin, setSelectedCabin] = useState('Economy');
  const [numberOfTravellers, setNumberOfTravellers] = useState(1);

  const handleSave = () => {
    onClose(selectedCabin, numberOfTravellers);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-blue-500 border-[2px] p-5 rounded-lg max-w-sm w-full">
        <h2 className="text-xl font-bold mb-4">Select Cabin & Traveller</h2>
        <div className="mb-4">
          <label className="block mb-1">Cabin</label>
          <select
            className="w-full p-2 border rounded-md"
            value={selectedCabin}
            onChange={(e) => setSelectedCabin(e.target.value)}
          >
            <option>Economy</option>
            <option>Premium Economy</option>
            <option>Business</option>
            <option>First Class</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-1">Travellers</label>
          <input
            type="number"
            className="w-full p-2 border rounded-md"
            value={numberOfTravellers}
            onChange={(e) => setNumberOfTravellers(Number(e.target.value))}
            min="1"
          />
        </div>
        <div className="flex justify-end">
          <button
            className="bg-blue-900 text-white p-2 rounded-lg mr-2"
            onClick={handleSave}
          >
            Save
          </button>
          <button
            className="bg-gray-300 text-black p-2 rounded-lg"
            onClick={() => onClose('', '')}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default TravellerClassModal;
