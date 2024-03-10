import { useMemo } from "react";
import { CiCalendarDate } from "react-icons/ci";
import { FaFlag } from "react-icons/fa";
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
      <section className="w-full">
        <div className="flex items-center justify-between p-3 my-5">
          <div className="flex">
            <input
              id="default-checkbox"
              type="checkbox"
              className="border border-red-500"
            />
            <span className="h-[0.5px] w-[0.5px] border border-gray-300 ms-2"></span>
            <div className="text-red-500 flex items-center gap-1">
              <CiCalendarDate />
              <span className="text-xs font-medium">9 Nov, 21d overdue</span>
            </div>
          </div>
          <FaFlag className="text-red-500" size={15} />
        </div>
        <div className="h-[0.8px] w-full bg-gray-300"></div>
        {/* tasks */}
        <div className="p-3">
          {tasks.map((item: any, index: number) => (
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
