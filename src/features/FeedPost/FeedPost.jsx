import FeedPostHeader from "./FeedPostHeader";
import FeedPostBody from "./FeedPostBody";
import FeedPostActions from "./FeedPostActions";
import FeedPostComments from "./FeedPostComments";

const FeedPost = () => {
  return (
    <div className="mt-5 ml-3">
      <FeedPostHeader />
      <FeedPostBody />
      <FeedPostActions />
      <FeedPostComments />
    </div>
  );
};

export default FeedPost;
