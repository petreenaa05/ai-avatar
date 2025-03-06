import React, { useState } from "react";

const avatars = [{id:1,src:"/images.jpg",alt:"image1"},{id:2,src:"/jeppiaar-founder.webp",alt:"image2"},{id:3,src:"/unnamed.png",alt:"image2"}]

const AvatarSelection = () => {
  const [selectedAvatar, setSelectedAvatar] = useState(null);

  return (
    <div className="mb-4">
      <h3 className="text-lg font-semibold">Choose Avatar</h3>
      <div className="flex gap-4 mt-2">
        {avatars.map((avatars, index) => (
          <button key={index} onClick={() => setSelectedAvatar(avatars)}>
           <img src={avatars.src} alt={avatars.alt} className="w-8 h-8" />
          </button>
        ))}
      </div>
      <p className="text-sm text-gray-400 mt-1">The selected avatar will appear in your video</p>
    </div>
  );
};

export default AvatarSelection;
