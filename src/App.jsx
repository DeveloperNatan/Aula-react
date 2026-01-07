import { useEffect, useState } from "react";
import AddTasks from "./components/AddTasks";
import Tasks from "./components/Tasks";
import { v4 } from "uuid";
import CheckList from "./components/CheckList";
import { Activity, BookOpen, CodeXml, Languages } from "lucide-react";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  // primeiro parametro é uma funcao e o segundo uma lista
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      // precisa atualizar o estado
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function onTaskDelete(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function onTaskAdd(title, description) {
    const newTasks = {
      id: v4(),
      title: title,
      description: description,
      isCompleted: false,
    };
    setTasks([...tasks, newTasks]);
  }

  return (
    <div className="flex flex-col md:flex-row w-full h-full bg-slate-500">
      {/* tasks */}
      <div className="w-full h-full  flex justify-center p-6">
        <div className="w-[500px] space-y-4">
          <h1 className="text-3xl text-slate-100 font-bold text-center p-4">
            Tasks
          </h1>
          <AddTasks onTaskAdd={onTaskAdd} />
          <Tasks
            tasks={tasks}
            onTaskClick={onTaskClick}
            onTaskDelete={onTaskDelete}
          />
        </div>
      </div>

      {/* Checklist */}
      <div className="w-full h-full flex justify-center p-6 md:p-6">
        <div className="w-[600px]  space-y-3 rounded-md">
          <h1 className="text-3xl text-slate-100 font-bold text-center p-4">
            Weekly Statistics
          </h1>
          <div className="flex items-center">
            <h1 className="w-[10%] md:w-[15%]"></h1>
            <div className="grid grid-cols-7  text-white text-center p-2 w-[75%] bg-slate-400 border-2 border-slate-300 rounded-lg">
              {["S", "T", "Q", "Q", "S", "S", "D"].map((dia, index) => (
                <div key={index} className="bg-slate-4-- rounded font-semibold">
                  {dia}
                </div>
              ))}
            </div>
          </div>

          <div className="flex w-full items-center  bg-slate-400 border-2 border-slate-300 p-2 rounded-lg">
            <h1 className="w-[10%] md:w-[15%]  flex justify-center">
              <CodeXml />
            </h1>
            <div className="w-[85%]">
              <CheckList storageKey="Check_xml" />
            </div>
          </div>
          <div className="flex w-full items-center bg-slate-400 border-2 border-slate-300 p-2 rounded-lg">
            <h1 className="w-[10%] md:w-[15%] flex justify-center">
              <Languages />
            </h1>
            <div className="w-[85%] ">
              <CheckList storageKey="Check_book" />
            </div>
          </div>
          <div className="flex w-full items-center bg-slate-400 border-2 border-slate-300 p-2 rounded-lg">
            <h1 className="w-[10%] md:w-[15%] flex justify-center">
              <Activity />
            </h1>
            <div className="w-[85%] ">
              <CheckList storageKey="Check_book" />
            </div>
          </div>
          <div className="flex w-full items-center bg-slate-400 border-2 border-slate-300 p-2 rounded-lg">
            <h1 className="w-[10%] md:w-[15%]  flex justify-center">
              <BookOpen />
            </h1>
            <div className="w-[85%] ">
              <CheckList storageKey="Check_dumbell" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
