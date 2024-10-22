import Layout from "@/components/layout";
import EnrollModal from "@/components/modals/createUserModal";
import GenSportTable from "@/components/utils/generalSportsTable";
import StudentSportTable from "@/components/utils/studentSportTable";
import UserTable from "@/components/utils/userTable";
import { ISport, IUser } from "@/models/index.model";
import StudentServices from "@/services/Student-servcices";
import { useDisclosure, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { MdAdd } from "react-icons/md";
import axios from "axios";
import SportTable from "@/components/utils/sportTable";

export default function Sports() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [student, setStudent] = useState<IUser>();
  const toast = useToast();
  const getStudent = async (id: number) => {
    try {
      const res = await StudentServices.GetUserById(id);

      if (res.statusCode == "OK") {
        setStudent(res.data);
      } else {
        // setIsloading(false);
        console.log(res);
      }
    } catch (error: any) {
      // setIsloading(false);
      toast({
        title: "Error",
        description: `${error.response.data.message}`,
        duration: 2000,
        status: "error",
      });
      console.log(error, "mav");
    }
  };

  useEffect(() => {
    const user =
      typeof window !== undefined
        ? JSON.parse(localStorage.getItem("currentUser") as string)
        : null;
    // setUser(user);
    if (user) {
      getStudent(user.id);
    }
  }, []);
  const students = [
    {
      name: "Basketball",
      grade: "A+",
      nos: 30,
    },
    {
      name: "Basketball",
      grade: "A+",
      nos: 30,
    },
    {
      name: "Basketball",
      grade: "A+",
      nos: 30,
    },
    {
      name: "Basketball",
      grade: "A+",
      nos: 30,
    },
    {
      name: "Basketball",
      grade: "A+",
      nos: 30,
    },
    {
      name: "Basketball",
      grade: "A+",
      nos: 30,
    },
  ];
  return (
    <Layout student>
      <div className="flex h-full flex-col gap-5 p-5">
        <div className="bg-[#1B283F] rounded-xl">
          <div className="imagebg1 p-5 rounded-xl">
            <div className="flex flex-col gap-7">
              <p className="text-2xl md:w-[30%] font-semibold leading-8 text-white">
                Manage your sports activities effortlessly.
              </p>
              <button
                className="w-fit h-fit rounded-lg text-xs text-white bg-[#FF9C50] px-5 py-2 flex items-center gap-2 font-semibold"
                onClick={onOpen}
              >
                <MdAdd />
                Enroll
              </button>
            </div>
          </div>
        </div>
        <div className=" flex h-full overflow-scroll flex-col gap-7 w-full">
          <div className="w-full bg-white rounded-xl  flex flex-col gap-5">
            <div className="w-full flex justify-between items-center">
              <div className="flex flex-col gap-2">
                <p className="text-xl font-semibold text-black">Sport List</p>
                <p className="text-sm text-[#B5B5C3] font-semibold "></p>
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

                {/* <button className="w-full h-fit rounded-lg text-xs text-white bg-[#FF9C50] px-5 py-2 flex items-center gap-2 font-semibold">
                  <MdAdd />
                  Enroll
                </button> */}
                {/* <button className="w-fit h-fit rounded-lg text-xs text-[#A1A5B7] bg-[#F5F8FA] px-5 py-2 flex items-center gap-2 font-semibold">
                  View all
                </button> */}
              </div>
            </div>
            <SportTable currentItems={student?.sport as ISport[]} />
            <EnrollModal
              isOpen={isOpen}
              onClose={onClose}
              student={student as IUser}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
