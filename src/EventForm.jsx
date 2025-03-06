import React from "react";
import { useNavigate } from "react-router-dom";

const EventForm = () => {
  const navigate = useNavigate();

  const handleGenerateVideo = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/get-api-key");
      const data = await response.json();
      const apiKey = data.apiKey;

      const apiData = {
        apiKey,
        // ...other data...
      };
      console.log(apiData); // Replace with actual API call
      navigate("/video");
    } catch (error) {
      console.error("Error fetching API key:", error);
    }
  };

  return (
    <form className="space-y-4">
      <div>
        <label className="block text-gray-700 font-medium">Event Name</label>
        <input type="text" className="w-full p-2 border border-gray-300 rounded-md" placeholder="Enter Event Name" />
        <p className="text-sm text-gray-400">Give your event a title</p>
      </div>

      <div>
        <label className="block text-gray-700 font-medium">Agenda</label>
        <textarea className="w-full p-2 border border-gray-300 rounded-md" placeholder="Enter Event Agenda"></textarea>
        <p className="text-sm text-gray-400">Outline the schedule for the event</p>
      </div>

      <div>
        <label className="block text-gray-700 font-medium">Special Guests</label>
        <input type="text" className="w-full p-2 border border-gray-300 rounded-md" placeholder="Enter guest names" />
      </div>

      <div>
        <label className="block text-gray-700 font-medium">Sources about them</label>
        <input type="text" className="w-full p-2 border border-gray-300 rounded-md" placeholder="Enter sources" />
      </div>

      <div className="flex justify-between">
        <button type="button" className="px-6 py-2 border border-black text-black rounded-md">Save & Exit</button>
        <button type="submit" onClick={handleGenerateVideo} className="px-6 py-2 bg-black text-white rounded-md">Generate AI Video</button>
      </div>
    </form>
  );
};

export default EventForm;
