import Image from "next/image";
function Comments() {
  return (
    <div className="flex flex-col gap-4">
      {/* TOP */}
      <div className="flex item-center gap-4">
        <Image
          src="https://images.pexels.com/photos/26575821/pexels-photo-26575821/free-photo-of-wanita-duduk-di-rumput.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          width={32}
          height={32}
          className="w-8 h-8 rounded-full"
        />
        <div className="flex-1 flex items-center justify-between bg-slate-100 rounded-xl w-full px-6 py-2">
          <input
            type="text"
            className="bg-transparent outline-none flex-1"
            placeholder="Write a comment..."
          ></input>
          <Image
            src="/emoji.png"
            alt=""
            width={16}
            height={16}
            className="cursor-pointer"
          />
        </div>
      </div>
      {/* Comments */}
      <div className="flex-1 flex justify-between gap-4">
        <Image
          src="https://images.pexels.com/photos/26575821/pexels-photo-26575821/free-photo-of-wanita-duduk-di-rumput.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          width={40}
          height={40}
          className="w-10 h-10 rounded-full"
        />

        <div className="flex flex-col gap-4">
          <span className="font-medium">Aulia Zafira Nurul Avisa</span>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a
          </p>
          <div className="flex gap-8">
            <div className="flex items-center gap-4 p-2 rounded-xl">
              <Image
                src="/like.png"
                alt=""
                width={16}
                height={16}
                className="cursor-pointer"
              />
              <span className="text-gray-300">|</span>
              <span className="text-gray-500">
                123 <span className="hidden md:inline">Likes</span>
              </span>
              <div className="text-gray-500">Reply</div>
            </div>
          </div>
        </div>
        <Image
          src="/more.png"
          alt=""
          width={16}
          height={16}
          className="h-4 w-4"
        />
      </div>
    </div>
  );
}

export default Comments;
