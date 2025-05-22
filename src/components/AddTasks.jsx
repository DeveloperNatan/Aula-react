import { useState } from "react";
import Input from "./Input";

function AddTasks({ onTaskAdd }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="space-y-4 p-6 bg-slate-300 rounded-md shadow flex flex-col">
      <Input
        type="text"
        placeholder="Digite sua tarefa"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <Input
        type="text"
        placeholder="Digite sua descricao"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button
        onClick={() => {
          // verificar se existe conteudo
          if (!title.trim() || !description.trim()) {
            return alert("Preencha todos os campos");
          }
          onTaskAdd(title, description);
          setDescription("");
          setTitle("");
        }}
      >
        Adiconar
      </button>
    </div>
  );
}

export default AddTasks;
