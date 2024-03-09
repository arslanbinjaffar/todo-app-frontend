import { useEffect, useState } from "react";
import axios from "axios";
import { FiEdit } from "react-icons/fi";
// import { Button, Modal } from 'flowbite-react';
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import loadingImage from '../../assets/loading.svg'
// interface getAllTaskType {
//   title: string;
//   Description: string;
//   isCompleted: boolean;
// }[]

const Tasks = () => {
    const navigate=useNavigate()
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
    const [deleteID,setDeleteID]=useState("")
  const getAllTasks = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("api/gettasks");
        setTasks(data.getAllTask);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getAllTasks();
  }, [deleteID]);

  if (loading) {
    return (
      <div className="mx-auto max-w-[500px]  flex justify-center items-center">
        <div className="grid gap-6 mb-6 md:grid-cols-1 p-4">
          <img src={loadingImage} alt="loading image" className="w-20 h-20"/>
        </div>
      </div>
    );
  }
  const headings = ['Title', 'Message', 'Completed', 'Actions'];
    return (
        <section className="mx-auto max-w-[1200px] w-full  flex justify-center items-center h-auto my-10">

      {
          tasks?.length == 0 &&
      (
          
            <div className="flex flex-col items-center">
                        <h2>no Tasks</h2>
                        <button type="button"
                            onClick={()=>navigate("/create")}
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2
                         dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Create Task</button>
          </div>
          )
      
      }
            {tasks.length > 0 &&  
                <>
                <div className="relative overflow-x-auto md:w-[60%] w-[90%]  ">
                                <h3 className="text-2xl font-bold text-left my-3">All Tasks</h3>

      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {headings.map((heading, index) => (
              <th key={index} scope="col" className="px-6 py-3">
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tasks.map((item:any, index) => (
            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="px-6 py-4">{item?.title}</td>
              <td className="px-6 py-4">{item?.Description}</td>
              <td className="px-6 py-4">{item?.isCompleted=="true" ? 'Yes' : 'No'}</td>
                  <td className="px-6 py-4 flex gap-2">
                      <EditTasK
                          editID={item?._id}
                          tasks={tasks}
                      />
                      {/* Icons for edit and delete actions */}
                      <DeleteTask deleteID={item?._id}
                      setDeleteID={setDeleteID}
                      />


              </td>
            </tr>
          ))}
        </tbody>
                    </table>
                    <button type="button"
                            onClick={()=>navigate("/create")}
                            className="my-3 flex justify-end items-end text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2
                         dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 capitalize">add more task</button>
                </div>
                
                </>
                
            }
            </section>
            
  );
};

export default Tasks;


function EditTasK({editID,tasks}:{editID:string,tasks:any}) {
    const navigate=useNavigate()
    const handleEdit = () => {
        navigate(`/edit/${editID}`,{state:tasks});      
    }

    return (
        <span className="cursor-pointer text-blue-500 hover:text-blue-700" onClick={handleEdit}> 
        <FiEdit />
                        </span>
    )
}



function DeleteTask({ deleteID ,setDeleteID}: { deleteID: string,setDeleteID:any }) {
    // const [loading, setLoading] = useState(false)
//   const [openModal, setOpenModal] = useState(false);
    
    const handleDelete = async() => {
        try {
            // setLoading(true)
            const { data } = await axios.delete(`api/deletetask/${deleteID}`)
            setDeleteID(deleteID)
            // setLoading(false)
            toast(data.message)
        } catch (error:any) {
            // setLoading(false)
            console.log(error)
            toast(error.message)
        }
   } 
    return (
        <>
        <span className="cursor-pointer text-red-500 hover:text-red-700" 
       onClick={handleDelete}
       >
        <MdDelete />
        </span>
            {/* <Modal show={openModal} onClose={() => setOpenModal(false)}
            >
        <Modal.Header>Are you Sure</Modal.Header>
        <Modal.Footer>
                    <Button onClick={() => {
                        ()
                        setOpenModal(false)
                    }}>Yes</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal> */}
      </>

    )
}
