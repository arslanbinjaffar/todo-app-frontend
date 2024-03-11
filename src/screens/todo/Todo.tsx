import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Create, DisplayTask, Schedule, Sidebar } from "../../components";
import axios from "axios";

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const getAllTasks = async () => {
    try {
      const { data } = await axios.get("api/gettasks");
      setTasks(data.getAllTask);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllTasks();
  }, []);

  const location = useLocation();
  const { id } = useParams();
  const initialData = location.state
    ? location.state.find((state: any) => state._id == id)
    : {};
  const handleTaskAdded = () => {
    getAllTasks();
  };
  return (
    <div className="flex  flex-col  items-center justify-center overflow-auto my-5">
      {/* <Sidebar /> */}
      {/* <Schedule /> */}
      <Create handleTaskAdded={handleTaskAdded} initialData={initialData} />
      <DisplayTask handleTaskAdded={handleTaskAdded} tasks={tasks} />
    </div>
  );
};

export default Todo;
