
import React, { useState } from "react";
import Icon from "./Icon"; // Assume Icon component is correctly set up

export default function Sidebar({ updatePosition, updateRotation, rotation, position }) {
  const [steps, setSteps] = useState(10);
  const [leftDegrees, setLeftDegrees] = useState(15);
  const [rightDegrees, setRightDegrees] = useState(15);
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  const handleDragStart = (event, elementType) => {
    const elementData = {
      type: elementType,
      steps,
      degrees: elementType === "turnLeft" ? leftDegrees : rightDegrees,
      coordinates,
    };
    event.dataTransfer.setData("elementData", JSON.stringify(elementData));
  };

  const handleClick = () => {
    const radians = (rotation * Math.PI) / 180;
    updatePosition({
      x: position.x + steps * Math.cos(radians),
      y: position.y + steps * Math.sin(radians),
    });
    console.log(`Move ${steps} steps`);
  };

  const handleTurnLeft = () => {
    updateRotation(rotation - leftDegrees);
    console.log(`Turn left ${leftDegrees} degrees`);
  };

  const handleTurnRight = () => {
    updateRotation(rotation + rightDegrees);
    console.log(`Turn right ${rightDegrees} degrees`);
  };

  const handleCoordinateChange = (event) => {
    const { name, value } = event.target;
    setCoordinates((prev) => ({
      ...prev,
      [name]: Number(value),
    }));
  };

  const handleGoTo = () => {
    updatePosition({ x: coordinates.x, y: coordinates.y });
    console.log(`Go to x: ${coordinates.x}, y: ${coordinates.y}`);
  };

  const stopPropagation = (event) => {
    event.stopPropagation();
  };

  return (
    <div className="w-60 flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200">
      <div className="font-bold"> {"Events"} </div>
      <div className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"When "}
        <Icon name="flag" size={15} className="text-green-600 mx-2" />
        {"clicked"}
      </div>
      <div className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"When this sprite clicked"}
      </div>
      <div className="font-bold"> {"Motion"} </div>

      {/* Move Steps Animation */}
      <div
        className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer items-center"
        onClick={handleClick}
        draggable
        onDragStart={(event) => handleDragStart(event, "move")}
      >
        Move
        <input
          type="number"
          value={steps}
          onChange={(e) => setSteps(Number(e.target.value))}
          onClick={stopPropagation}
          className="bg-blue-500 text-white text-center w-12 mx-1 outline-none"
          placeholder="Steps"
        />
        steps
      </div>

      {/* Turn Left Animation */}
      <div
        className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer items-center"
        onClick={handleTurnLeft}
        draggable
        onDragStart={(event) => handleDragStart(event, "turnLeft")}
      >
        Turn
        <Icon name="undo" size={15} className="text-white mx-2" />
        <input
          type="number"
          value={leftDegrees}
          onChange={(e) => setLeftDegrees(Number(e.target.value))}
          onClick={stopPropagation}
          className="bg-blue-500 text-white text-center w-12 mx-1 outline-none"
          placeholder="Degrees"
        />
        left
      </div>

      {/* Turn Right Animation */}
      <div
        className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer items-center"
        onClick={handleTurnRight}
        draggable
        onDragStart={(event) => handleDragStart(event, "turnRight")}
      >
        Turn
        <Icon name="redo" size={15} className="text-white mx-2" />
        <input
          type="number"
          value={rightDegrees}
          onChange={(e) => setRightDegrees(Number(e.target.value))}
          onClick={stopPropagation}
          className="bg-blue-500 text-white text-center w-12 mx-1 outline-none"
          placeholder="Degrees"
        />
        right
      </div>

      {/* Go to x, y Animation */}
      <div
        className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer items-center"
        onClick={handleGoTo}
        draggable
        onDragStart={(event) => handleDragStart(event, "goTo")}
      >
        Go to x:
        <input
          type="number"
          name="x"
          value={coordinates.x}
          onChange={handleCoordinateChange}
          onClick={stopPropagation}
          className="bg-blue-500 text-white text-center w-12 mx-1 outline-none"
          placeholder="x"
        />
        y:
        <input
          type="number"
          name="y"
          value={coordinates.y}
          onChange={handleCoordinateChange}
          onClick={stopPropagation}
          className="bg-blue-500 text-white text-center w-12 mx-1 outline-none"
          placeholder="y"
        />
      </div>
    </div>
  );
}



// import Icon from "./Icon"; // Assume Icon component is correctly set up

// export default function Sidebar({ setPosition, setRotation, rotation, position }) {
//   // States for various motions
//   const [steps, setSteps] = useState(10);
//   const [leftDegrees, setLeftDegrees] = useState(15);
//   const [rightDegrees, setRightDegrees] = useState(15);
//   const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  
//   const handleDragStart = (event, elementType) => {
//     const elementData = {
//       type: elementType,
//       steps,
//       degrees: elementType === "turnLeft" ? leftDegrees : rightDegrees,
//       coordinates,
//     };
//     event.dataTransfer.setData("elementData", JSON.stringify(elementData));
//   };
//   // Handle input change for steps
//   const handleInputChange = (event) => {
//     setSteps(Number(event.target.value));
//   };

//   // Handle click event for moving steps
//   const handleClick = () => {
//     // Move object by steps along the current rotation angle
//     const radians = (rotation * Math.PI) / 180;
//     setPosition((prev) => ({
//       x: prev.x + steps * Math.cos(radians),
//       y: prev.y + steps * Math.sin(radians),
//     }));
//     console.log(`Move ${steps} steps`);
//   };

//   // Handle turning left
//   const handleTurnLeft = () => {
//     setRotation((prev) => prev - leftDegrees);
//     console.log(`Turn left ${leftDegrees} degrees`);
//   };

//   // Handle turning right
//   const handleTurnRight = () => {
//     setRotation((prev) => prev + rightDegrees);
//     console.log(`Turn right ${rightDegrees} degrees`);
//   };

//   // Handle input change for left degrees
//   const handleLeftDegreeChange = (event) => {
//     setLeftDegrees(Number(event.target.value));
//   };

//   // Handle input change for right degrees
//   const handleRightDegreeChange = (event) => {
//     setRightDegrees(Number(event.target.value));
//   };

//   // Handle changes for coordinates
//   const handleCoordinateChange = (event) => {
//     const { name, value } = event.target;
//     setCoordinates((prev) => ({
//       ...prev,
//       [name]: Number(value),
//     }));
//   };

//   // Handle Go to x, y coordinates
//   const handleGoTo = () => {
//     setPosition({ x: coordinates.x, y: coordinates.y });
//     console.log(`Go to x: ${coordinates.x}, y: ${coordinates.y}`);
//   };

//   // Stop event propagation
//   const stopPropagation = (event) => {
//     event.stopPropagation();
//   };

//   return (
//     <div className="w-60 flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200">
//       <div className="font-bold"> {"Events"} </div>
//       <div className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
//         {"When "}
//         <Icon name="flag" size={15} className="text-green-600 mx-2" />
//         {"clicked"}
//       </div>
//       <div className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
//         {"When this sprite clicked"}
//       </div>
//       <div className="font-bold"> {"Motion"} </div>

//       {/* Move Steps Animation */}
//       <div
//         className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer items-center" onClick={handleClick}
//         draggable
//         onDragStart={(event) => handleDragStart(event, "move")}
//       >
//         Move
//         <input
//           type="number"
//           value={steps}
//           onChange={handleInputChange}
//           onClick={stopPropagation}
//           className="bg-blue-500 text-white text-center w-12 mx-1 outline-none"
//           placeholder="Steps"
//         />
//         steps
//       </div>

//       {/* Turn Left Animation */}
//       <div
//         className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer items-center" onClick={handleTurnLeft}
//         draggable
//         onDragStart={(event) => handleDragStart(event, "turnLeft")}
//       >
//         Turn
//         <Icon name="undo" size={15} className="text-white mx-2" />
//         <input
//           type="number"
//           value={leftDegrees}
//           onChange={handleLeftDegreeChange}
//           onClick={stopPropagation}
//           className="bg-blue-500 text-white text-center w-12 mx-1 outline-none"
//           placeholder="Degrees"
//         />
//         left
//       </div>

//       {/* Turn Right Animation */}
//       <div
//         className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer items-center" onClick={handleTurnRight}
//         draggable
//         onDragStart={(event) => handleDragStart(event, "turnRight")}
//       >
//         Turn
//         <Icon name="redo" size={15} className="text-white mx-2" />
//         <input
//           type="number"
//           value={rightDegrees}
//           onChange={handleRightDegreeChange}
//           onClick={stopPropagation}
//           className="bg-blue-500 text-white text-center w-12 mx-1 outline-none"
//           placeholder="Degrees"
//         />
//         right
//       </div>

//       {/* Go to x: ___ y: ___ Animation */}
//       <div
//         className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer items-center" onClick={handleGoTo}
//         draggable
//         onDragStart={(event) => handleDragStart(event, "goTo")}
//       >
//         Go to x:
//         <input
//           type="number"
//           name="x"
//           value={coordinates.x}
//           onChange={handleCoordinateChange}
//           onClick={stopPropagation}
//           className="bg-blue-500 text-white text-center w-12 mx-1 outline-none"
//           placeholder="x"
//         />
//         y:
//         <input
//           type="number"
//           name="y"
//           value={coordinates.y}
//           onChange={handleCoordinateChange}
//           onClick={stopPropagation}
//           className="bg-blue-500 text-white text-center w-12 mx-1 outline-none"
//           placeholder="y"
//         />
//       </div>
//     </div>
//   );
// }