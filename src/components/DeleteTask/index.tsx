import axios from "axios";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";

function DeleteTask({
  deleteID,
  handleTaskAdded,
}: {
  deleteID: string;
  handleTaskAdded: () => void;
}) {
  const handleDelete = async () => {
    try {
      const { data } = await axios.delete(`api/deletetask/${deleteID}`);
      toast(data.message);
      handleTaskAdded();
    } catch (error: any) {
      console.log(error);
      toast(error.message);
    }
  };
  return (
    <>
      <span
        className="cursor-pointer text-red-500 hover:text-red-700"
        onClick={handleDelete}
      >
        <MdDelete />
      </span>
    </>
  );
}

export default DeleteTask;
