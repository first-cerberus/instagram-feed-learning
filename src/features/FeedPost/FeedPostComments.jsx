

const FeedPostComments = () => {
  const comments = [
    {
      id: 1,
      author: "user_one",
      text: "Amazing view! 🔥",
      likes: 234
    },
    {
      id: 2,
      author: "user_two",
      text: "Breathtaking landscape",
      likes: 156
    }
  ];

  return (
    <div className="mt-4 pr-3">
      <p className="text-gray-400 text-sm mb-3">View all 128 comments</p>
      
      {comments.map((comment) => (
        <div key={comment.id} className="mb-3">
          <div className="flex gap-2">
            <p className="text-white text-sm font-semibold">{comment.author}</p>
            <p className="text-white text-sm">{comment.text}</p>
          </div>
          <p className="text-gray-500 text-xs mt-1">{comment.likes} likes</p>
        </div>
      ))}

      <input
        type="text"
        placeholder="Add a comment..."
        className="w-full mt-4 bg-transparent text-white text-sm placeholder-gray-500 border-b border-gray-700 pb-2 focus:outline-none focus:border-white transition"
      />
    </div>
  );
};

export default FeedPostComments;