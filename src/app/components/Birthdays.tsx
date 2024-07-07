import Image from "next/image";
import Link from "next/link";

const Birthdays = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      <div className="flex items-center justify-between font-medium">
        <span className="text-gray-500">Birtday</span>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="https://images.pexels.com/photos/25288239/pexels-photo-25288239/free-photo-of-kota-jalan-pemandangan-lanskap.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="">Hendra Kurniawan</span>
        </div>
        <div className="flex gap-3 justify-end">
          <button className="bg-blue-500 text-white text-xs px-2 py-1 rounded-md">
            Celebrate
          </button>
        </div>
      </div>
      {/* Upcoming */}
      <div className="p-4 bg-slate-100 rounded-lg flex items-center gap-4">
        <Image src="/gift.png" alt="" width={24} height={24} />
        <Link href="/" className="flex flex-col gap-1 text-sm">
          <span className="text-gray-700 font-semibold">
            UpComming Birtdays
          </span>
          <span className="text-gray-500 text-sm">See other 16 have Upcomming birthdays </span>
        </Link>
      </div>
    </div>
  );
};

export default Birthdays;
