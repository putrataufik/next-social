import Link from "next/link"

const UserInfoCard = ({userId} : {userId:string}) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      <div className="flex items-center justify-between font-medium">
        <span className="text-gray-500">User Information</span>
        <Link href="/" className="text-blue-500 text-xs">
          FriendRequest
        </Link>
      </div>
    </div>
  )
}

export default UserInfoCard
