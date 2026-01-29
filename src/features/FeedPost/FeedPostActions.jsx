import { Heart, MessageCircle, Share2 } from "lucide-react";

const FeedPostActions = () => {
  return (
    <div className="mt-4 flex gap-4 pr-3">
      <button className="hover:opacity-70 transition">
        <Heart className="w-6 h-6 text-white" strokeWidth={1.5} />
      </button>
      <button className="hover:opacity-70 transition">
        <MessageCircle className="w-6 h-6 text-white" strokeWidth={1.5} />
      </button>
      <button className="hover:opacity-70 transition">
        <Share2 className="w-6 h-6 text-white" strokeWidth={1.5} />
      </button>
    </div>
  );
};

export default FeedPostActions;