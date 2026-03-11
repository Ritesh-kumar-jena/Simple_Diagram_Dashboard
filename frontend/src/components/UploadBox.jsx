import React from "react";

const UploadBox = ({ setImage, fileName }) => {

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage({
        url: URL.createObjectURL(file),
        name: file.name
      });
    }
  };

  return (
    <div className="border p-4 rounded-lg bg-gray-100 flex flex-col items-center gap-2">
      <input type="file" accept="image/png, image/jpeg" onChange={handleUpload} />

      {fileName && (
        <p className="text-sm text-gray-600">
          Uploaded: {fileName}
        </p>
      )}
    </div>
  );
};

export default UploadBox;