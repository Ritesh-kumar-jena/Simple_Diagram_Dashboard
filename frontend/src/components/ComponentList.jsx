import React from "react";

const ComponentList = ({ components, selected, setSelected }) => {
  return (
    <div className="border rounded-lg p-4 h-full">

      <h2 className="font-bold mb-3">Components</h2>

      <ul className="space-y-2">
        {components.map((item) => (
          <li
            key={item.id}
            onClick={() => setSelected(item.id)}
            className={`cursor-pointer p-2 rounded 
            ${selected === item.id ? "bg-blue-500 text-white" : "bg-gray-100"}`}
          >
            {item.name}
          </li>
        ))}
      </ul>

    </div>
  );
};

export default ComponentList;