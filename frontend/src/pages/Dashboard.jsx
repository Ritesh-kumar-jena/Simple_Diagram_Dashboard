import React, { useEffect, useState } from "react";
import UploadBox from "../components/UploadBox";
import DiagramViewer from "../components/DiagramViewer";
import ComponentList from "../components/ComponentList";
import { getComponents } from "../services/api";

const Dashboard = () => {

  const [image, setImage] = useState(null);
  const [components, setComponents] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      const data = await getComponents();
      setComponents(data);
    };
    loadData();
  }, []);

  return (
    <div className="p-6 space-y-6">

      <UploadBox setImage={setImage} fileName={image?.name} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        <div className="md:col-span-2">
          <DiagramViewer image={image} />
        </div>

        <ComponentList
          components={components}
          selected={selected}
          setSelected={setSelected}
        />

      </div>

    </div>
  );
};

export default Dashboard;