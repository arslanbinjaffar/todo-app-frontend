import { FiEdit } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function EditTasKComponent({ editID, tasks }: { editID: string; tasks: any }) {
  const navigate = useNavigate();
  const handleEdit = () => {
    navigate(`/tasks/${editID}`, { state: tasks });
  };

  return (
    <span
      className="cursor-pointer text-blue-500 hover:text-blue-700"
      onClick={handleEdit}
    >
      <FiEdit />
    </span>
  );
}

export default EditTasKComponent;
