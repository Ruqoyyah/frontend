import ActionNavbar from "@/components/layout/ActionNav";
import { Input, Textarea } from "@chakra-ui/react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { MdArrowRight } from "react-icons/md";

export default function CreateRole() {
  return (
    <div className="bg-[#F5F5F5]">
      <ActionNavbar page="Create Role" />
      <div className="flex justify-center py-5 h-screen">
        <div className="w-[50%] h-fit bg-white rounded-3xl flex-col flex gap-5 p-5">
          <div className="flex flex-col gap-2">
            <p className="font-semibold md:text-[18px]">Create a new role</p>
            <p className="text-sm ">
              To complete creating a new role, fill the requirements below
            </p>
          </div>
          <Input
            size={"lg"}
            bg={"#FFFFFF50"}
            placeholder="Name"
            //   value={email}
            type="text"
            //   onChange={(e) => setEmail(e.target.value)}
          />
          <Textarea placeholder="Description" />

          <div className="w-full gap-3 flex items-center">
            <button className="w-full py-3 rounded-xl flex bg-[#3E6CF408] text-[#3E6CF4] items-center justify-center">
              Discard
            </button>
            <button className="w-full py-3 rounded-xl flex bg-[#5E604D] gap-2 text-white items-center justify-center">
              Save
              <FaLongArrowAltRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
