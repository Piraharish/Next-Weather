import { LuLoader2 } from "react-icons/lu";

const Loader = () => {
  return (
    <div className="flex items-center h-20 justify-center">
      <LuLoader2 size={20} className="animate-spin text-primary" />
    </div>
  );
};

export default Loader;
