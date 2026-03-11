import React from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const DiagramViewer = ({ image }) => {
  if (!image) {
    return <p className="text-center mt-10">Upload a diagram to view</p>;
  }

  return (
    <div className="border rounded-lg p-4">

      <TransformWrapper>
        {({ zoomIn, zoomOut, resetTransform }) => (
          <>
            <div className="flex gap-2 mb-3">
              <button onClick={() => zoomIn()} className="px-3 py-1 bg-blue-500 text-white rounded">
                Zoom In
              </button>

              <button onClick={() => zoomOut()} className="px-3 py-1 bg-blue-500 text-white rounded">
                Zoom Out
              </button>

              <button onClick={() => resetTransform()} className="px-3 py-1 bg-gray-500 text-white rounded">
                Reset
              </button>
            </div>

            <TransformComponent>
              <img src={image.url} alt="diagram" className="max-h-[400px]" />
            </TransformComponent>
          </>
        )}
      </TransformWrapper>

    </div>
  );
};

export default DiagramViewer;