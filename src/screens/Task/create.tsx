import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import loadingbar from '../../assets/loadingbar.svg'

interface formDataType{
    title: string
    Description: string,
    isCompleted:boolean
}
const initalValue={
    title: "",
    Description: "",
    isCompleted:false
}
const CreateTask = () => {
    const navigate=useNavigate()
    const [formData, setformData] = useState<formDataType>(initalValue);
    const [loading,setLoading]=useState(false)

    const handleSubmit = async(e:any) => {
        try {
            e.preventDefault();
            setLoading(true)
            const { data } = await axios.post("api/createtask", formData)
            setLoading(false)
            setformData(initalValue)
            toast.success(data.message)
            navigate("/tasks")
        } catch (error:any) {
            setLoading(false)
            toast.error(error?.message)
            console.log(error)
        }
    }
 
  return (
      <form
          onSubmit={handleSubmit}

          className="mx-auto max-w-[1200px] w-full  flex justify-center items-center h-screen">
          <div className="grid gap-6 mb-6 md:grid-cols-1 bg-slate-400 p-4 w-[35%] rounded-lg">
            <h3 className="text-2xl font-bold text-center">Create Task</h3>
              
        <div>
          <label
            htmlFor="first_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
      Title
          </label>
          <input
            type="text"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="title"
                      required
                      value={formData.title}
                      onChange={(e) => {
                          setformData({
                          ...formData,title:e.target.value
                              
                          })
                      }}
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your message
          </label>
          <textarea
            id="message"
            rows={4}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Write your thoughts here..."
                      value={formData.Description}
                      onChange={(e) => {
                          setformData({
                          ...formData,Description:e.target.value
                              
                          })
                      }}
          ></textarea>
        </div>
        <div className="flex items-center mb-4">
          <input
            id="default-checkbox"
                      type="checkbox"
                      checked={formData.isCompleted}
                      onChange={(e) => {
                          setformData({
                          ...formData,isCompleted:e.target.checked
                              
                          })
                      }}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded 
    focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="default-checkbox"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Completed
          </label>
        </div>
        <div>
          <button
                      type="button"
                      onClick={() => { 
                          setformData(initalValue)
                          navigate("/tasks")
                        }
        }
            className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            { loading?<img src = { loadingbar } alt = 'loading'  className='w-5 h-5 bg-blue-600'  />:
            "Add"
          }
          </button>
        </div>
      </div>
    </form>
  );
};

export default CreateTask;
