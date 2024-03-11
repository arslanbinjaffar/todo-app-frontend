import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { BsFillSendPlusFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { MdAddChart } from "react-icons/md";
import { useNavigate } from "react-router-dom";
interface formDataType {
  _id?: string;
  title: string;
  Description: string;
  isCompleted: any;
}

const Tasks = ({
  initialData,
  handleTaskAdded,
}: {
  initialData: formDataType;
  handleTaskAdded: () => void;
}) => {
  const initalValue = {
    title: "",
    Description: "",
    isCompleted: "",
  };
  const navigate = useNavigate();
  const [formData, setformData] = useState(initalValue);
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (Object.keys(initialData).length !== 0) {
      try {
        setLoading(true);
        const { data } = await axios.patch(
          `api/updatetask/${initialData?._id}`,
          formData,
        );
        setLoading(false);
        setformData(initalValue);
        navigate('/')
        handleTaskAdded();
        toast(data.message);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    } else {
      try {
        setLoading(true);
        const { data } = await axios.post("api/createtask", formData);
        setLoading(false);
        setformData(initalValue);
        handleTaskAdded();
        toast.success(data.message);
      } catch (error: any) {
        setLoading(false);
        toast.error(error?.message);
        console.log(error);
      }
    }
  };

  useEffect(() => {
    setformData(initialData);
  }, [initialData]);
  return (
    <section className="p-5 max-w-[500px] w-full md:border border-gray-300  shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] h-full">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* <LuBarChartHorizontalBig size={20} /> */}
          <h2 className="text-2xl capitalize font-bold">Create Task</h2>
        </div>
        <div className="flex items-center gap-2">
          {/* <TbMobiledata size={20} /> */}
          {/* <HiOutlineDotsHorizontal size={20} /> */}
        </div>
      </div>
      <div className="w-full ">
        <input
          type="text"
          className="bg-[#F7F7F7] w-full p-2 rounded-md placeholder:text-sm focus:outline-none placeholder:lowercase placeholder:text-gray-300"
          placeholder="+ Add Task to your title"
          value={formData.title}
          onChange={(e) => {
            setformData({
              ...formData,
              title: e.target.value,
            });
          }}
        />
      </div>
      <div className="w-full my-4">
        <textarea
          name=""
          id=""
          cols={7}
          rows={3}
          style={{ resize: "none" }}
          className="bg-[#F7F7F7] w-full p-2 rounded-md place focus:outline-none"
          value={formData.Description}
          onChange={(e) => {
            setformData({
              ...formData,
              Description: e.target.value,
            });
          }}
        ></textarea>
      </div>
      <div className="flex justify-between">
        <div className="flex items-center mb-4">
          <input
            id="completed"
            type="checkbox"
            checked={formData.isCompleted === "true" ? true : false}
            onChange={(e) => {
              setformData({
                ...formData,
                isCompleted: e.target.checked ? "true" : "false", // Set it as a string
              });
            }}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded 
    focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="completed"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Completed
          </label>
        </div>
        <button
          onClick={handleSubmit}
          className=" my-3 flex justify-end items-end text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2
      dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 capitalize"
        >
          {loading ? (
            <AiOutlineLoading3Quarters
              className="text-blue-900 animate-rotate"
              size={20}
            />
          ) : (
            <>
              {Object.keys(initialData).length !== 0 ? (
                <MdAddChart size={20} />
              ) : (
                <BsFillSendPlusFill size={20} />
              )}
            </>
          )}
        </button>
      </div>
    </section>
  );
};

export default Tasks;
