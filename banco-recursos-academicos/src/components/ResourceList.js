import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

const ResourceList = ({ user }) => {
  const [resources, setResources] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const fetchResources = async () => {
      const q = filter
        ? query(collection(db, "resources"), where("category", "==", filter))
        : collection(db, "resources");

      const querySnapshot = await getDocs(q);
      setResources(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    };

    fetchResources();
  }, [filter]);

  return (
    <div>
      <h2>Lista de Recursos</h2>
      <input
        type="text"
        placeholder="Filtrar por categoría"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      {resources.map((resource) => (
        <div key={resource.id}>
          <h3>{resource.title}</h3>
          <a href={resource.fileUrl} target="_blank" rel="noopener noreferrer">
            Ver recurso
          </a>
        </div>
      ))}
    </div>
  );
};

export default ResourceList;
