import React from "react";

const VoiceSelection = () => {
  return (
    <div className="mb-4">
      <h3 className="text-lg font-semibold">Choose Voice</h3>
      <select className="w-full p-2 border border-gray-300 rounded-md">
        <option>Select from available voices</option>
        <option>Male Voice</option>
        <option>Female Voice</option>
      </select>
      <p className="text-sm text-gray-400 mt-1">The selected voice will narrate your video</p>
    </div>
  );
};

export default VoiceSelection;
