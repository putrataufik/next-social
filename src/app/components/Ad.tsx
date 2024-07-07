import Image from "next/image";

const Ad = ({ size }: { size: "sm" | "md" | "lg" }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm">
      {/* TOP */}
      <div className="flex items-center gap-4 justify-between text-gray-500 font-medium">
        <span>Sponsored Ads</span>
        <Image src="/more.png" alt="" width={16} height={16} />
      </div>
      {/* Bottom */}
      <div
        className={`flex flex-col mt-4 ${size === "sm" ? "gap-2" : "gap-4"}`}
      >
        <div
          className={`relative w-full ${
            size === "sm" ? "h-24" : size === "md" ? "h-36" : "h-48"
          }`}
        >
          <Image
            src="https://images.pexels.com/photos/14803628/pexels-photo-14803628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            className="rounded-lg object-cover"
          />
        </div>
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/14803628/pexels-photo-14803628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            height={24}
            width={24}
            className="rounded-full h-6 w-6 object-cover"
          />
          <span className="text-blue-400 font-medium">BigChef Lounge</span>
        </div>
        <p className={size === "sm" ? "text-sm" : "text-sm"}>
          {size === "sm"
            ? "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to "
            : size === "md"
            ? "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual"
            : "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content"}
        </p>
        <button className="bg-gray-200 text-gray-500 p-2 text-xs">Learn More</button>
      </div>
    </div>
  );
};

export default Ad;
