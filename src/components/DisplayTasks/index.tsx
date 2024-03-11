import { useMemo } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { DeleteTask, EditTasK } from ".."; // Assuming you have EditTask component

const DisplayTask = ({
  tasks,
  handleTaskAdded,
}: {
  tasks: any;
  handleTaskAdded: any;
}) => {
  return useMemo(() => {
    return (
      <section className="max-w-[500px] w-full shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg">
   
        <div className="h-[0.8px] w-full bg-gray-300"></div>
        {/* tasks */}
        <div className="p-3">
          {tasks.sort((a:any,b:any)=>b.title-a.title).map((item: any, index: number) => (
            <div
              className="flex justify-between items-start relative my-2"
              key={index}
            >
              <div className="flex flex-col gap-1">
                <h4 className="font-bold text-lg">{item.title}</h4>
                <p className="font-medium text-base">{item.Description}</p>
              </div>
              <div className="flex gap-3">
                <DeleteTask
                  handleTaskAdded={handleTaskAdded}
                  deleteID={item._id}
                />
                <EditTasK tasks={tasks} editID={item._id} />
                <FaBarsStaggered
                  size={20}
                  className="text-gray-300 cursor-pointer"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }, [tasks]);
};

export default DisplayTask;
