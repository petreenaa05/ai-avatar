import React from "react";
import AvatarSelection from "../AvatarSelection";
import VoiceSelection from "../VoiceSelection";
import EventForm from "../EventForm";

const Home = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-12">
      <div className="grid grid-cols-2 max-w-6xl w-full gap-20">
        {/* Left Section - Heading */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold leading-tight">Create Your AI-Generated Event Video</h1>
          <p className="text-gray-500 mt-3 text-lg">Fill in the details below to customize your video.</p>
        </div>

        {/* Right Section - Form */}
        <div className="bg-white p-8 shadow-lg rounded-lg w-full border border-gray-200">
          <AvatarSelection />
          <VoiceSelection />
          <EventForm />
        </div>
      </div>
    </div>
  );
};

export default Home;
