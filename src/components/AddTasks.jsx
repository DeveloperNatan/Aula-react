import { useState } from "react";
import Input from "./Input";
import { Plus } from "lucide-react";

function AddTasks({ onTaskAdd }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="space-y-4 p-6 bg-slate-400 rounded-lg shadow flex flex-col border-2 border-slate-300">
      <Input
        className="font-normal bg-white text-black rounded p-2 border border-black"
        type="text"
        placeholder="Title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <Input
        className="font-normal bg-white text-black rounded p-2 border border-black"
        type="text"
        placeholder="Description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />

      <button
        onClick={() => {
          if (!title.trim() || !description.trim())
            return alert("Fill in all the fields");
          onTaskAdd(title, description);
          setDescription("");
          setTitle("");
        }}
        className="self-center inline-flex items-center justify-center
             h-10 w-full rounded-md border border-slate-300
             bg-slate-300 text-slate-100 hover:bg-slate-300 transition"
      >
        <Plus className="w-5 h-5" />
      </button>
    </div>
  );
}

export default AddTasks;
