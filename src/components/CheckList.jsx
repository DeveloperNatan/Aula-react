import { useEffect, useState } from "react";
// import { v4 } from "uuid";
import { CheckIcon, Trash, X } from "lucide-react";

function CheckList({ storageKey }) {
  const [Check, setChecks] = useState(
    JSON.parse(localStorage.getItem(storageKey)) ||
      Array.from({ length: 7 }, () => ({ isCompleted: null }))
  );

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(Check));
  }, [Check, storageKey]);

  const toggleCheck = (index) => {
    const newChecks = [...Check];
    newChecks[index].isCompleted = !newChecks[index].isCompleted;
    setChecks(newChecks);
  };

  const CheckNull = () => {
    const resetChecks = Array.from({ length: 7 }, () => ({
      isCompleted: null,
    }));
    setChecks(resetChecks);
  };

  return (
    <div className="grid grid-cols-8 gap-2 mx-2 my-2 rounded-md">
      {Check.map((item, index) => (
        <div
          key={index}
          className="flex justify-center items-center rounded-md h-8 w-8 md:h-10 md:w-10 mx-auto my-auto"
        >
          <div
            onClick={() => toggleCheck(index)}
            className="bg-slate-100 rounded-sm w-full h-full flex items-center justify-center cursor-pointer"
          >
            {item.isCompleted === true && (
              <CheckIcon className="text-green-500 w-5 h-5" />
            )}
            {item.isCompleted === false && (
              <X className="text-red-500 w-5 h-5" />
            )}
            {item.isCompleted === null && (
              <div className="bg-slate-100 rounded-sm w-full h-full flex items-center justify-center cursor-pointer"></div>
            )}
          </div>
        </div>
      ))}
      <div>
        <button onClick={CheckNull} className="appearance-none">
          <Trash className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

export default CheckList;
