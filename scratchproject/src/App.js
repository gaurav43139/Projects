
import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import MidArea from "./components/MidArea";
import PreviewArea from "./components/PreviewArea";

export default function App() {
  // State for managing multiple sprites
  const [sprites, setSprites] = useState([
    { id: 1, position: { x: 50, y: 50 }, rotation: 0 },
    { id: 2, position: { x: 150, y: 150 }, rotation: 0 },
  ]);

  // State for tracking the currently selected sprite
  const [selectedSpriteId, setSelectedSpriteId] = useState(1);

  // Update position of the selected sprite
  const updatePosition = (newPosition) => {
    setSprites((prevSprites) =>
      prevSprites.map((sprite) =>
        sprite.id === selectedSpriteId
          ? { ...sprite, position: newPosition }
          : sprite
      )
    );
  };

  // Update rotation of the selected sprite
  const updateRotation = (newRotation) => {
    setSprites((prevSprites) =>
      prevSprites.map((sprite) =>
        sprite.id === selectedSpriteId
          ? { ...sprite, rotation: newRotation }
          : sprite
      )
    );
  };

  // Handle sprite selection
  const handleSpriteSelect = (id) => {
    setSelectedSpriteId(id);
  };

  return (
    <div className="bg-blue-100 pt-6 font-sans">
      <div className="h-screen overflow-hidden flex flex-row">
        <div className="flex-1 h-screen overflow-hidden flex flex-row bg-white border-t border-r border-gray-200 rounded-tr-xl mr-2">
          <Sidebar
            updatePosition={updatePosition}
            updateRotation={updateRotation}
            rotation={
              sprites.find((sprite) => sprite.id === selectedSpriteId)?.rotation
            }
            position={
              sprites.find((sprite) => sprite.id === selectedSpriteId)?.position
            }
          />
          <MidArea
            setPosition={updatePosition}
            setRotation={updateRotation}
            rotation={
              sprites.find((sprite) => sprite.id === selectedSpriteId)?.rotation
            }
            position={
              sprites.find((sprite) => sprite.id === selectedSpriteId)?.position
            }
          />
        </div>
        <div className="w-1/3 h-screen overflow-hidden flex flex-row bg-white border-t border-l border-gray-200 rounded-tl-xl ml-2">
          <PreviewArea
            sprites={sprites}
            setSprites={setSprites}
            selectedSpriteId={selectedSpriteId}
            setSelectedSpriteId={handleSpriteSelect}
          />
        </div>
      </div>
    </div>
  );
}



