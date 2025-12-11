import useScrollDirection from "../../hooks/useScrollDirection";

import { Heart, Plus } from "lucide-react";
import Instagram from "/src/assets/instagram.png";

const Header = () => {
  const scrollDirection = useScrollDirection();

  const headerVisibility =
    scrollDirection === "down" ? "-translate-y-full" : "translate-y-0";

  return (
    <div
      className={`flex justify-between p-4 items-center bg-black fixed top-0 left-0 right-0 transition-transform duration-300 ${headerVisibility} z-50`}
    >
      <Plus className="text-white" />
      <img
        src={Instagram}
        alt="instagram logo"
        className="w-27 h-8 translate-y-1"
      ></img>
      <Heart className="text-white" />
    </div>
  );
};

export default Header;
