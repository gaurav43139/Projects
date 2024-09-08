
import React, { useState, useRef } from "react";

export default function MidArea({ setPosition, setRotation, rotation, position }) {
  const [scripts, setScripts] = useState([]);
  const scriptAreaRef = useRef(null);

  // Handle drop of blocks into the MidArea
  const handleDrop = (event) => {
    event.preventDefault();
    const elementData = JSON.parse(event.dataTransfer.getData("elementData"));

    // Get the drop position relative to the ScriptArea
    const dropX =
      event.clientX - scriptAreaRef.current.getBoundingClientRect().left;
    const dropY =
      event.clientY - scriptAreaRef.current.getBoundingClientRect().top;

    // Store the script with its drop coordinates
    setScripts((prevScripts) => [
      ...prevScripts,
      { ...elementData, position: { x: dropX, y: dropY } },
    ]);
  };

  // Allow blocks to be dropped
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  // Execute scripts to update position and rotation
  const executeScripts = () => {
    scripts.forEach((script) => {
      if (script.type === "move") {
        // Move sprite by steps
        const radians = (rotation * Math.PI) / 180;
        setPosition({
          x: position.x + script.steps * Math.cos(radians),
          y: position.y + script.steps * Math.sin(radians),
        });
        console.log(`Move ${script.steps} steps`);
      } else if (script.type === "turnLeft") {
        // Turn sprite left
        setRotation(rotation - script.degrees);
        console.log(`Turn left ${script.degrees} degrees`);
      } else if (script.type === "turnRight") {
        // Turn sprite right
        setRotation(rotation + script.degrees);
        console.log(`Turn right ${script.degrees} degrees`);
      } else if (script.type === "goTo") {
        // Go to specific coordinates
        setPosition(script.coordinates);
        console.log(
          `Go to x: ${script.coordinates.x}, y: ${script.coordinates.y}`
        );
      }
    });
  };

  return (
    <div
      ref={scriptAreaRef}
      className="relative w-full h-full bg-gray-200"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <div className="font-bold p-2">Mid Area</div>
      {/* Display dropped scripts for visual feedback */}
      {scripts.map((script, index) => (
      <button
       key={index}
       className="absolute bg-blue-500 p-2 rounded cursor-pointer text-white"
       style={{ top: script.position.y, left: script.position.x }}
       onClick={() => executeScripts(script)}
      >
          {script.type === "move" && `Move ${script.steps} steps`}
          {script.type === "turnLeft" && `Turn Left ${script.degrees} degrees`}
          {script.type === "turnRight" && `Turn Right ${script.degrees} degrees`}
          {script.type === "goTo" &&
            `Go to x: ${script.coordinates.x}, y: ${script.coordinates.y}`}
        </button>
      ))}
      
    </div>
  );
}


