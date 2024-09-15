import Layout from "@/components/layout";
import ClientNavbar from "@/components/layout/navbar";
import UserTable from "@/components/utils/userTable";
import { useEffect } from "react";
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
  useEffect(() => {
    // Set the state to true once component mounts
    // setIsClient(true);
  }, []);

  return (
    <Layout>
      <div className="flex h-full flex-row">
        <div className="p-5 flex h-full overflow-scroll flex-col gap-7 w-[70%]">
          <div className="flex flex-col gap-1">
            <p className="text-xl font-semibold">Hello, Paul</p>
            <p className="text-sm text-[#B5B5C3]">Welcome back</p>
          </div>
          <div className="flex flex-col gap-3 w-full md:flex-row">
            <div className="w-full h-[220px] bg-[#F6D9E3] rounded-xl flex flex-col p-5 gap-4">
              <p className="font-semibold">Students</p>
              <div className="h-[100px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    width={500}
                    height={200}
                    data={data}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    {/* <CartesianGrid strokeDasharray="3 3" /> */}
                    {/* <XAxis dataKey="name" />
          <YAxis /> */}
                    <Tooltip />
                    {/* <Legend /> */}
                    <Line type="monotone" dataKey="pv" stroke="#ffffff" />
                    {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-2xl font-bold">567</p>
                <p className="text-sm font-bold">+ 28% this week</p>
              </div>
            </div>
            <div className="w-full h-[220px] bg-[#CBF0F4] rounded-xl flex flex-col p-5 gap-4">
              <p className="font-semibold">Sports</p>
              <div className="h-[100px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    width={500}
                    height={200}
                    data={data}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    {/* <CartesianGrid strokeDasharray="3 3" /> */}
                    {/* <XAxis dataKey="name" />
          <YAxis /> */}
                    <Tooltip />
                    {/* <Legend /> */}
                    <Bar
                      dataKey="pv"
                      fill="#ffffff"
                      activeBar={<Rectangle fill="pink" stroke="blue" />}
                      barSize={5}
                    />
                    {/* <Bar dataKey="uv" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} /> */}
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-2xl font-bold">47</p>
                <p className="text-sm font-bold">+ 28% this week</p>
              </div>
            </div>
          </div>
          <div className="w-full bg-white rounded-xl p-5 flex flex-col gap-5">
            <div className="w-full flex justify-between items-center">
              <div className="flex flex-col gap-2">
                <p className="text-xl font-semibold text-black">Student List</p>
                <p className="text-sm text-[#B5B5C3] font-semibold ">
                  560 students
                </p>
              </div>
              <div className="flex items-center gap-2 justify-end">
                <button className="w-fit h-fit rounded-lg text-xs text-white bg-[#FF9C50] px-5 py-2 flex items-center gap-2 font-semibold">
                  <MdAdd />
                  Add Student
                </button>
                <button className="w-fit h-fit rounded-lg text-xs text-[#A1A5B7] bg-[#F5F8FA] px-5 py-2 flex items-center gap-2 font-semibold">
                  View all
                </button>
              </div>
            </div>
            <UserTable currentItems={students} />
          </div>
        </div>
        <div className="h-full bg-[#0B0C0D] w-[30%] noscroll p-5 flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <p className="text-xl text-white">Top Sport</p>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div className="bg-[#2D2E31] shadow-md rounded-lg p-3 flex flex-col gap-2">
                <p className="font-semibold text-xl text-white">38</p>
                <p className="font-semibold text-[#546182] text-sm">
                  Basket Ball
                </p>
              </div>
              <div className="bg-[#2D2E31] shadow-md rounded-lg p-3 flex flex-col gap-2">
                <p className="font-semibold text-xl text-white">204</p>
                <p className="font-semibold text-[#546182] text-sm">
                  Table Tennis
                </p>
              </div>
              <div className="bg-[#2D2E31] shadow-md rounded-lg p-3 flex flex-col gap-2">
                <p className="font-semibold text-xl text-white">76</p>
                <p className="font-semibold text-[#546182] text-sm">Football</p>
              </div>
              <div className="bg-[#2D2E31] shadow-md rounded-lg p-3 flex flex-col gap-2">
                <p className="font-semibold text-xl text-white">9</p>
                <p className="font-semibold text-[#546182] text-sm">Rugby</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <p className="text-xl text-white">Best Students</p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 w-full">
                <div className="w-[20%] bg-[#CBF0F4] rounded-lg h-full"></div>
                <div className="flex flex-col gap-2">
                  <p className="text-sm text-white">Blue Doughnut</p>
                  <p className="text-sm text-[#546182]">
                    Study the highway types
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 w-full">
                <div className="w-[20%] bg-[#CBF0F4] rounded-lg h-full"></div>
                <div className="flex flex-col gap-2">
                  <p className="text-sm text-white">Blue Doughnut</p>
                  <p className="text-sm text-[#546182]">
                    Study the highway types
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 w-full">
                <div className="w-[20%] bg-[#CBF0F4] rounded-lg h-full"></div>
                <div className="flex flex-col gap-2">
                  <p className="text-sm text-white">Blue Doughnut</p>
                  <p className="text-sm text-[#546182]">
                    Study the highway types
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 w-full">
                <div className="w-[20%] bg-[#CBF0F4] rounded-lg h-full"></div>
                <div className="flex flex-col gap-2">
                  <p className="text-sm text-white">Blue Doughnut</p>
                  <p className="text-sm text-[#546182]">
                    Study the highway types
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}