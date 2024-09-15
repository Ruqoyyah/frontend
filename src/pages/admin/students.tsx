import Layout from "@/components/layout";
import UserTable from "@/components/utils/userTable";
import { BiSearch } from "react-icons/bi";
import { MdAdd } from "react-icons/md";

export default function Students() {
  const students = [
    {
      name: "Tony Bright",
      grade: "A+",
      sport: "Basketball",
      email: "sample@gmail.com",
    },
    {
      name: "Tony Bright",
      grade: "A+",
      sport: "Basketball",
      email: "sample@gmail.com",
    },
    {
      name: "Tony Bright",
      grade: "A+",
      sport: "Basketball",
      email: "sample@gmail.com",
    },
    {
      name: "Tony Bright",
      grade: "A+",
      sport: "Basketball",
      email: "sample@gmail.com",
    },
    {
      name: "Tony Bright",
      grade: "A+",
      sport: "Basketball",
      email: "sample@gmail.com",
    },
    {
      name: "Tony Bright",
      grade: "A+",
      sport: "Basketball",
      email: "sample@gmail.com",
    },
  ];
  return (
    <Layout>
      <div className="flex h-full flex-col gap-5 p-5">
        <div className="bg-[#F0DCC0] rounded-xl">
          <div className="imagebg1 p-5 rounded-xl">
            <div className="flex flex-col gap-7">
              <p className="text-2xl md:w-[30%] font-semibold leading-8 text-black">
                Manage student sports activities effortlessly.
              </p>
              <button className="w-fit h-fit rounded-lg text-xs text-white bg-[#FF9C50] px-5 py-2 flex items-center gap-2 font-semibold">
                <MdAdd />
                Add Student
              </button>
            </div>
          </div>
        </div>
        <div className=" flex h-full overflow-scroll flex-col gap-7 w-full">
          <div className="w-full bg-white rounded-xl  flex flex-col gap-5">
            <div className="w-full flex justify-between items-center">
              <div className="flex flex-col gap-2">
                <p className="text-xl font-semibold text-black">Student List</p>
                <p className="text-sm text-[#B5B5C3] font-semibold ">
                  560 students
                </p>
              </div>
              <div className="flex items-center gap-2 justify-end">
                <div className=" flex items-center   text-zinc-800 border-[1px]  mr-3 rounded-lg px-3 py-2 w-full text-[#D5D5D5] rounded-lg border-[#D5D5D5] h-10 font-thin">
                  <BiSearch className="text-[20px]  " />
                  <input
                    type="text"
                    className=" text-xs bg-transparent  outline-none"
                    placeholder="Search"
                    // value={searchTerm}
                    // onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>

                <button className="w-full h-fit rounded-lg text-xs text-white bg-[#FF9C50] px-5 py-2 flex items-center gap-2 font-semibold">
                  <MdAdd />
                  Add Student
                </button>
                {/* <button className="w-fit h-fit rounded-lg text-xs text-[#A1A5B7] bg-[#F5F8FA] px-5 py-2 flex items-center gap-2 font-semibold">
                  View all
                </button> */}
              </div>
            </div>
            <UserTable currentItems={students} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
