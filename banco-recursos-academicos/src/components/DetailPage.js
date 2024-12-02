import React, { useState } from "react";

const DetailPage = ({ resource }) => {
  const [comment, setComment] = useState("");

  const handleComment = () => {
    // Código para agregar el comentario a Firestore
  };

  return (
    <div>
      <h2>{resource.title}</h2>
      <p>Categoría: {resource.category}</p>
      <a href={resource.fileUrl} target="_blank" rel="noopener noreferrer">
        Descargar Recurso
      </a>
      <h3>Comentarios:</h3>
      {/* Aquí irán los comentarios */}
      <textarea
        placeholder="Escribe un comentario"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      ></textarea>
      <button onClick={handleComment}>Agregar Comentario</button>
    </div>
  );
};

export default DetailPage;
