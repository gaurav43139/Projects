
import React from "react";
import CatSprite from "./CatSprite";
import { useState ,useRef} from "react";

export default function PreviewArea({
  sprites,
  setSprites,
  selectedSpriteId,
  setSelectedSpriteId,
}) {

  const [isSpriteVisible, setIsSpriteVisible] = useState(false); 
  // Handle click to select a sprite
  const handleSelect = (id) => {
    setSelectedSpriteId(id);
  };

  // Handle drag over to allow dropping
  const handleDragOver = (event) => {
    event.preventDefault(); // Prevent default behavior to allow drop
  };

  // Handle drop event to update sprite position
  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation(); 
    // Get the dragged sprite ID from the data transfer object
    const draggedSpriteId = event.dataTransfer.getData("sprite-id");
    if (!draggedSpriteId) return;

    // Get the drop position
    const dropPosition = {
      x: event.clientX - event.currentTarget.getBoundingClientRect().left,
      y: event.clientY - event.currentTarget.getBoundingClientRect().top,
    };
    const spriteIdNumber = parseInt(draggedSpriteId, 10);
    // Update the position of the dragged sprite
    setSprites((prevSprites) =>
      prevSprites.map((sprite) =>
        sprite.id === spriteIdNumber
          ? { ...sprite, position: dropPosition }
          : sprite
      )
    );
  };

  const toggleSpriteVisibility = () => {
    setIsSpriteVisible((prev) => !prev);
  };

  return (
    <div
      className="relative w-full h-full bg-gray-100"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <button
        onClick={toggleSpriteVisibility}
        className="absolute top-2 left-2 bg-blue-500 text-white px-4 py-2 rounded"
      >
        {isSpriteVisible ? "Hide Sprite" : "Show Sprite"}
      </button>

      {sprites.map((sprite) => {
        if (sprite.id === 2 && !isSpriteVisible) return null;
        
        return (
        <CatSprite
          key={sprite.id}
          id={sprite.id}
          position={sprite.position}
          rotation={sprite.rotation}
          isSelected={sprite.id === selectedSpriteId}
          onClick={() => handleSelect(sprite.id)}
          sprites={sprites} 
          
        />
      )
    })}
      
    </div>
  );
}



