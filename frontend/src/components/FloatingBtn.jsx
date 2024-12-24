import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function FloatingBtn() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/add-review");
  };

  return (
    <button
      className="fixed z-50 shadow-lg bg-black text-white hover:bg-slate-600 flex items-center justify-center transition-all duration-300 ease-in-out
                 bottom-4 right-4 rounded-full w-12 h-12
                 sm:bottom-6 sm:right-6 sm:w-14 sm:h-14
                 md:bottom-8 md:right-8 md:w-16 md:h-16"
      onClick={handleClick}
    >
      <Plus className="w-5 h-5 sm:w-6 sm:h-6" />
      <span className="sr-only">Add Review</span>
    </button>
  );
}
