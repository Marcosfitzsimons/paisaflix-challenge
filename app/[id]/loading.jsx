import { BiLoaderAlt } from "react-icons/bi";

const Loading = () => {
  return (
    <div className="w-[min(85%,1200px)] mx-auto pt-24 lg:pt-32 flex justify-center">
      <BiLoaderAlt className="animate-spin text-3xl text-yellow-400" />
    </div>
  );
};

export default Loading;
