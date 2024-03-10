import { IoTodaySharp } from "react-icons/io5";
import { LuInbox } from "react-icons/lu";
import { BsCalendarDay } from "react-icons/bs";
import { FaBars } from "react-icons/fa6";
import { CiShoppingTag } from "react-icons/ci";
import { CiSquareCheck } from "react-icons/ci";
import { TbTrashXFilled } from "react-icons/tb";
const Schedule = () => {
  const dateDays = [
    {
      title: "Today",
      icon: (
        <IoTodaySharp
          size={20}
          className="text-gray-400 cursor-pointer group hover:text-blue-500"
        />
      ),
      route: "",
      notifications: "6",
    },
    {
      title: "next 7 Days",
      icon: (
        <BsCalendarDay
          size={20}
          className="text-gray-400 cursor-pointer hover:text-blue-500"
        />
      ),
      route: "",
      notifications: "3",
    },
    {
      title: "inbox",
      icon: (
        <LuInbox
          size={20}
          className="text-gray-400 cursor-pointer hover:text-blue-500"
        />
      ),
      route: "",
      notifications: "1",
    },
  ];
  const listData = [
    { title: "stuff to do", route: "", notifications: "1" },
    { title: "travel planning", route: "", notifications: "22" },
    { title: "zapier", route: "", notifications: "2" },
    { title: "world document parent", route: "", notifications: "" },
  ];
  const tagsData = [
    { title: "work", route: "", notifications: "1", color: "#8B2E73" },
    { title: "fun", route: "", notifications: "2", color: "#458AEF" },
  ];
  const tasksData = [
    {
      title: "Complete",
      icon: (
        <CiSquareCheck
          size={20}
          className="text-gray-400 cursor-pointer group hover:text-blue-500"
        />
      ),
      route: "",
      notifications: "1",
    },
    {
      title: "Trash",
      icon: (
        <TbTrashXFilled
          size={20}
          className="text-gray-400 cursor-pointer group hover:text-blue-500"
        />
      ),
      route: "",
      notifications: "2",
    },
  ];
  return (
    <section className="md:border-r border-r-gray-300  md:max-w-[250px] w-full p-2 md:block hidden">
      <div className="flex flex-col gap-2 pt-5 p-1">
        {dateDays.map(({ icon, notifications, title }, index) => {
          return (
            <div
              className={`flex items-center justify-between hover:bg-gray-300 group-date cursor-pointer p-3 rounded-md
                       ${index == 0 ? "bg-gray-300" : ""}`}
            >
              <div className="flex gap-2 items-center">
                {icon}
                <h6 className="capitalize text-base font-normal text-black">
                  {title}
                </h6>
              </div>
              <p className="text-sm text-gray-500 font-normal">
                {notifications}
              </p>
            </div>
          );
        })}
      </div>
      <div className="w-full h-[1px] bg-gray-300"></div>
      <div className="my-5">
        <h6 className="capitalize text-gray-300 text-base">lists</h6>
        {listData.map(({ title, notifications }) => {
          return (
            <div
              className={`flex items-center justify-between hover:bg-gray-300 group-date cursor-pointer p-3 rounded-md
                    `}
            >
              <div className="flex gap-2 items-center">
                <FaBars size={20} className="text-gray-500" />
                <h6 className="capitalize text-base font-normal text-black">
                  {title.length > 15 ? title.substring(0, 15) + "..." : title}
                </h6>
              </div>
              <p className="text-sm text-gray-500 font-normal">
                {notifications}
              </p>
            </div>
          );
        })}
      </div>
      <div className="my-5">
        <h6 className="capitalize text-gray-300 text-base">filters</h6>
      </div>
      <div className="my-5">
        <h6 className="capitalize text-gray-300 text-base">tags</h6>
        {tagsData.map(({ title, notifications }) => {
          return (
            <div
              className={`flex items-center justify-between hover:bg-gray-300 group-date cursor-pointer p-3 rounded-md
                    `}
            >
              <div className="flex gap-2 items-center">
                <CiShoppingTag size={20} className="text-gray-500" />
                <h6 className="capitalize text-base font-normal text-black">
                  {title.length > 15 ? title.substring(0, 15) + "..." : title}
                </h6>
              </div>
              <p className="text-sm text-gray-500 font-normal">
                {notifications}
              </p>
            </div>
          );
        })}
      </div>
      <div className="my-5">
        {tasksData.map(({ title, notifications, icon }) => {
          return (
            <div
              className={`flex items-center gap-3 justify-between hover:bg-gray-300 group-date cursor-pointer p-3 rounded-md
                    `}
            >
              <div className="flex gap-2 items-center">
                {icon}
                <h6 className="capitalize text-base font-normal text-black">
                  {title.length > 15 ? title.substring(0, 15) + "..." : title}
                </h6>
              </div>
              <p className="text-sm text-gray-500 font-normal">
                {notifications}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Schedule;
