import React from "react";
import Image from "next/image";

const Addpost = () => {
  return (
    <div className="p-4 bg-white rounded-lg flex gap-4 justify-between text-sm">
      {/* AVATAR */}
      <Image
        src="https://images.pexels.com/photos/26609628/pexels-photo-26609628/free-photo-of-kayu-orang-orang-masyarakat-rakyat.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
        width={48}
        height={48}
        className="w-12 h-12 object-cover rounded-full"
      />
      {/* Post */}
      <div className="flex-1">
        {/* Text Input */}
        <div className="flex gap-4">
          <textarea
            placeholder="What's on your mind?"
            className="bg-slate-100 rounded-lg flex-1 p-2"
          ></textarea>
          <Image
            src="/emoji.png"
            alt=""
            width={48}
            height={48}
            className="w-5 h-5 cursor-pointer self-end"
          />
        </div>
        {/* Post Options */}
        <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
            <div className="flex items-center gap-2 cursor-pointer">
                <Image src="/addImage.png" alt="" width={20} height={20} />
                Photo
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
                <Image src="/addVideo.png" alt="" width={22} height={22} />
                Video
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
                <Image src="/addEvent.png" alt="" width={20} height={20} />
                Event
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
                <Image src="/poll.png" alt="" width={20} height={20} />
                Poll
            </div>
        </div>
      </div>
    </div>
  );
};

export default Addpost;
