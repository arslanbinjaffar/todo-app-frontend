import { FC, ButtonHTMLAttributes } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  title: string;
  className?: string;
  onClick?: (e: any) => void;
}

const Button: FC<Props> = ({
  isLoading,
  title,
  className = "",
  onClick,
  type = "button",
  ...props
}) => {
  return (
    <button
      type={type}
      className={`my-3 flex justify-end items-end text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2
      dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 capitalize
      ${isLoading ? "bg-white " : "bg-blue-700 "}
      ${className}`}
      onClick={onClick}
      {...props}
    >
      {isLoading ? (
        <AiOutlineLoading3Quarters
          className="text-blue-900 animate-rotate"
          size={20}
        />
      ) : (
        title
      )}
    </button>
  );
};

export default Button;

