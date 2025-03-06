import { useState } from "react";
import { Volume2, Maximize, RefreshCcw } from "lucide-react";

export default function EventPage() {
  const [eventTitle, setEventTitle] = useState("Event Title");
  const [eventDetails, setEventDetails] = useState("Event details");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-6">
      {/* Event Video */}
      <div className="w-full max-w-4xl h-full rounded-lg overflow-hidden">
        <video className="w-full h-full object-fill" controls>
          <source src="hi.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Event Info */}
      <div className="flex justify-between items-center w-full max-w-4xl mt-4">
        <button className="px-4 py-2 bg-gray-300 rounded-lg text-black">Make changes</button>
        <div className="text-center">
          <h1 className="text-lg font-bold">{eventTitle}</h1>
          <p className="text-gray-600 text-sm">{eventDetails}</p>
        </div>
        <div className="flex gap-3">
          <RefreshCcw className="w-6 h-6 text-black" />
          <Volume2 className="w-6 h-6 text-black" />
          <Maximize className="w-6 h-6 text-black" />
        </div>
      </div>
    </div>
  );
}
