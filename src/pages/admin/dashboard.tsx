import Layout from "@/components/layout";
import ClientNavbar from "@/components/layout/navbar";
import AddStudentModal from "@/components/modals/addStudentModal";
import UserTable from "@/components/utils/userTable";
import { ISport, IUser } from "@/models/index.model";
import AdminServices from "@/services/Admin-services";
import { useDisclosure, useToast } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { LuCalendarRange } from "react-icons/lu";
import { MdAdd } from "react-icons/md";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  Rectangle,
} from "recharts";

export default function Dashboard() {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  const router = useRouter();
  const [sports, setSports] = useState<ISport[]>([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const [user, setUser] = useState<any>();
  const [students, setStudents] = useState<IUser[]>([]);
  const getallStudents = async () => {
    try {
      const res = await AdminServices.getUserbyType("STUDENT");
      if (res.statusCode == "OK") {
        setStudents(res.data);
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
  const getallSports = async () => {
    try {
      const res = await AdminServices.getAllSports();
      if (res.statusCode == "OK") {
        setSports(res.data);
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
    setUser(user);
    getallStudents();
    getallSports();
  }, []);

  return (
    <Layout>
      <div className="flex h-full flex-row">
        <div className="p-5 flex h-full overflow-scroll flex-col gap-7 w-full">
          <div className="flex flex-col gap-1">
            <p className="text-xl font-semibold">Hello, {user?.firstName}</p>
            <p className="text-sm text-[#B5B5C3]">Welcome back</p>
          </div>
          <div className="flex flex-col gap-3 w-full md:flex-row">
            <div className="w-full h-[270px] bg-[#F6D9E3] rounded-xl flex flex-col p-5 gap-4">
              <p className="font-semibold">Students</p>
              <div className="h-[150px] w-full">
                <Image
                  src="/img/students.png"
                  alt="sports"
                  width={500}
                  height={500}
                  className="h-full"
                />
              </div>
              <div className="flex items-center justify-between">
                <p className="text-2xl font-bold">{students?.length}</p>
                {/* <p className="text-sm font-bold">+ 28% this week</p> */}
              </div>
            </div>
            <div className="w-full h-[270px] bg-[#CBF0F4] rounded-xl flex flex-col p-5 gap-4">
              <p className="font-semibold">Sports</p>
              <div className="h-[150px] w-full">
                <Image
                  src="/img/sports.png"
                  alt="sports"
                  width={500}
                  height={500}
                  className="h-full"
                />
              </div>
              <div className="flex items-center justify-between">
                <p className="text-2xl font-bold">{sports.length}</p>
                {/* <p className="text-sm font-bold">+ 28% this week</p> */}
              </div>
            </div>
          </div>
          <div className="w-full bg-white rounded-xl p-5 flex flex-col gap-5">
            <div className="w-full flex justify-between items-center">
              <div className="flex flex-col gap-2">
                <p className="text-xl font-semibold text-black">Student List</p>
                <p className="text-sm text-[#B5B5C3] font-semibold ">
                  {students?.length}
                </p>
              </div>
              <div className="flex items-center gap-2 justify-end">
                <button
                  className="w-fit h-fit rounded-lg text-xs text-white bg-[#FF9C50] px-5 py-2 flex items-center gap-2 font-semibold"
                  onClick={() => onOpen()}
                >
                  <MdAdd />
                  Add Student
                </button>
                <button
                  className="w-fit h-fit rounded-lg text-xs text-[#A1A5B7] bg-[#F5F8FA] px-5 py-2 flex items-center gap-2 font-semibold"
                  onClick={() => {
                    router.push("/admin/students");
                  }}
                >
                  View all
                </button>
              </div>
            </div>
            <UserTable currentItems={students} />
            <AddStudentModal isOpen={isOpen} onClose={onClose} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
