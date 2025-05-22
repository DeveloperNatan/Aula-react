import { ChevronLeftIcon } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  return (
    <div className="h-screen w-screen bg-slate-500 p-6">
      <div className="w-[600px] space-y-4">
        <div className="flex justify-center items-center relative h-12">
          <button
            className="absolute left-0"
            onClick={() => {
              // window.history.back(); legal, mas me parece meio troll
              //   ou criar uma funcao la em cima
              navigate("/");
            }}
          >
            <ChevronLeftIcon />
          </button>
          <h1 className="text-3xl text-slate-100 font-bold text-center absolute right-6">
            Detalhes de tarefas
          </h1>
        </div>
        <div className="bg-slate-400 p-4 rounded-md shadow-md">
          <h2 className="text-xl text-white font-bold">{title}</h2>
          <p className="text-white">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
