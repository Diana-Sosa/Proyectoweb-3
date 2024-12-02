import React, { useState } from "react";
import { db, storage } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const AddResource = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [file, setFile] = useState(null);

  const uploadResource = async () => {
    try {
      let fileUrl = "";
      if (file) {
        const storageRef = ref(storage, `resources/${file.name}`);
        await uploadBytes(storageRef, file);
        fileUrl = await getDownloadURL(storageRef);
      }

      await addDoc(collection(db, "resources"), {
        title,
        category,
        fileUrl,
        createdAt: new Date(),
      });

      alert("Recurso subido con éxito");
    } catch (error) {
      console.error("Error al subir recurso:", error);
    }
  };

  return (
    <div>
      <h2>Subir Recurso</h2>
      <input
        type="text"
        placeholder="Título del recurso"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Categoría"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={uploadResource}>Subir Recurso</button>
    </div>
  );
};

export default AddResource;
