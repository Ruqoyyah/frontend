import { IUser } from "@/models/index.model";

type SummaryProp = {
  users: IUser[];
};
export default function UserSummaryCard({ users }: SummaryProp) {
  return (
    <div className="w-full shadow-md border-[1px] border-[#ccc] bg-white rounded-xl p-5 flex flex-col gap-4">
      <div className="">
        <p className="font-bold lg:text-2xl">{users?.length}</p>
        <p className="font-semibold text-[#B5B5C3]">Total Users</p>
      </div>
      {/* <div className="w-full flex items-center gap-5">
        <div className="flex flex-col w-full justify-between items-end h-full p-5">
          <div className=""></div>
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-[10px] h-[2px] bg-[#00A3FF] rounded-[2px]"></div>
              <p className="text-[#B5B5C3 font-semibold ">Active</p>
            </div>
            <p className="text-[#B5B5C3 font-semibold ">{users?.length}</p>
          </div>
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-[10px] h-[2px] bg-[#50CD89] rounded-[2px]"></div>
              <p className="text-[#B5B5C3 font-semibold ">Inactive</p>
            </div>
            <p className="text-[#B5B5C3 font-semibold ">{users?.length}</p>
          </div>
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-[10px] h-[2px] bg-[#E4E6EF] rounded-[2px]"></div>
              <p className="text-[#B5B5C3 font-semibold ">Suspended</p>
            </div>
            <p className="text-[#B5B5C3 font-semibold ">{users?.length}</p>
          </div>
        </div>
      </div> */}
    </div>
  );
}
