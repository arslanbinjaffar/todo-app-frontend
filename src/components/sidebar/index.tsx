import { FaCheckSquare } from "react-icons/fa";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { BiCommand } from "react-icons/bi";
import { FaLocationPinLock } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { FcRefresh } from "react-icons/fc";
import { BiSolidNotification } from "react-icons/bi";
import { LuShieldQuestion } from "react-icons/lu";
const Sidebar = () => {
  return (
    <div className="w-full md:max-w-[80px]  bg-gray-200 ">
      <section className="flex flex-row md:flex-col items-center justify-evenly md:justify-between flex-wrap sm:flex-nowrap w-full py-5  h-full">
        <div className="flex md:flex-col flex-row  items-center gap-6">
          <figure className=" h-auto mx-auto">
            <img
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2w
                  CEAAoHCBUVFRgVFRUYGBgZGBgYGBgYGBgYGBgYGBgZGRgYGBgcIS4lHB4rIRgYJ
                  jgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHDQrIyQ2MTQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ
                  0MTQ0NDQ0NDQ0ND80NDQ0NDQ0NDQ0NDQ/NP/AABEIALcBEwMBIgACEQEDEQH/xAAbAAACAwEBAQAA
                  AAAAAAAAAAAAAQIFBgQDB//EAD0QAAIBAgQDBQUFBgYDAAAAAAECAAMRBAUSITFBUQYiYXGBEzK
                  RobFCUnLB0QdigpLh8BQjorLC8SQzc//EABgBAQEBAQEAAAAAAAAAAAAAAAABAgME/8QAIREBAQ
                  EBAAIDAAMBAQAAAAAAAAECESExAxJBMlFxYSL/2gAMAwEAAhEDEQA/AKwCFoxHaed3QkrR2jtAjC0kBHaBC0LSdoiI6IEQkrRWgK0I7QtALRWkhBtpRGRdwouTYeMrMdnKodKjUflKHH5i9Ui+wHIcJZm1m6kaSpmtMcCT5TwOcpzUzN0
                  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"
              alt="image"
              className="rounded-lg w-10 h-10"
            />
          </figure>
          <FaCheckSquare
            size={25}
            className="text-blue-500 hover:text-gray-400  cursor-pointer"
          />
          <BsFillCalendarDateFill
            size={25}
            className="text-gray-400 cursor-pointer hover:text-blue-500"
          />
          <BiCommand
            size={25}
            className="text-gray-400 cursor-pointer hover:text-blue-500"
          />
          <FaLocationPinLock
            size={25}
            className="text-gray-400 cursor-pointer hover:text-blue-500"
          />
          <FaSearch
            size={25}
            className="text-gray-400 cursor-pointer hover:text-blue-500"
          />
        </div>
        <div className=" flex md:flex-col flex-row  items-end gap-6">
          <FcRefresh
            size={25}
            className="text-gray-400 cursor-pointer hover:text-blue-500"
          />
          <BiSolidNotification
            size={25}
            className="text-gray-400 cursor-pointer hover:text-blue-500"
          />
          <LuShieldQuestion
            size={25}
            className="text-gray-400 cursor-pointer hover:text-blue-500"
          />
        </div>
      </section>
    </div>
  );
};

export default Sidebar;
