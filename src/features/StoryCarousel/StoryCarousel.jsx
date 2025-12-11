import Avatar from "/src/assets/avatar.png";

const storiesData = [
  { id: 1, name: "ebeb.ede", img: `${ Avatar }`, isRead: true },
  { id: 2, name: "lazy_english", img: `${ Avatar }`, isRead: false },
  { id: 3, name: "kievracer", img: `${ Avatar }`, isRead: false },
  { id: 4, name: "wdho.zxc", img: `${ Avatar }`, isRead: false },
  { id: 5, name: "abosd.qw", img: `${ Avatar }`, isRead: false },
  { id: 6, name: "first_cerberus", img: `${ Avatar }`, isRead: false },
  { id: 7, name: "gwdho.hq", img: `${ Avatar }`, isRead: false },
  { id: 8, name: "gkfd.me", img: `${ Avatar }`, isRead: false },
];

const StoryItem = ({name, img, isRead}) => {
  return (
    <div className="flex flex-col items-center shrink-0 w-20 mt-1">
      <div>
        <img
          src={img}
          alt="avatar"
          className="w-15 h-15 object-cover rounded-full ring-2 ring-white"
        />
      </div>
      <p className="text-xs truncate w-full text-center text-white  mt-1">{name}</p>
    </div>
  );
};

const StoryCarousel = () => {
  return (
    <div className="pt-17">
      <div className="flex space-x-3 overflow-x-scroll custom-scrollbar">
        {storiesData.map((story) => (
          <StoryItem key={story.id} {...story} />
        ))}
      </div>
    </div>
  );
};

export default StoryCarousel;
