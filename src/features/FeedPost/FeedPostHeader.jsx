import { Ellipsis } from "lucide-react";

import Avatar from "../../assets/avatar.png";

const FeedPostHeader = () => {
  return (
    <div className="flex items-center justify-between">

      <div className="flex items-center">
        <img
          src={Avatar}
          className="w-9 h-9 object-cover rounded-full ring-2 ring-white"
        />
        <div className="flex flex-col justify-center ml-2  ">
          <p className="text-white text-sm font-semibold leading-5">kyivoperative</p>
          <p className="text-white text-sm">6 days ago</p>
        </div>
      </div>

      <Ellipsis className="text-white mr-3" />
    </div>
  );
};

export default FeedPostHeader;

