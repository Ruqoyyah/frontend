import Layout from "@/components/layout";
import AddEventModal from "@/components/modals/addEvent";
import EventTable from "@/components/utils/eventTable";

import { IEvent } from "@/models/index.model";
import AdminServices from "@/services/Admin-services";
import StudentServices from "@/services/Student-servcices";
import { useDisclosure, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { MdAdd } from "react-icons/md";

export default function StudentEvent() {
  const [events, setevents] = useState<IEvent[]>([]);
  const [view, setView] = useState<string>("all");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [searchterm, setSearchTerm] = useState<string>("");
  const toast = useToast();
  const getStudentEvents = async (id: number) => {
    try {
      const res = await StudentServices.GetEventsByUserId(id);
      if (res.statusCode == "OK") {
        setevents(res.data);
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
  const getallUpcomingEvents = async (id: number) => {
    try {
      const res = await StudentServices.GetUpcomingEventsByUserId(id);
      if (res.statusCode == "OK") {
        setevents(res.data);
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
  const getallPastEvents = async (id: number) => {
    try {
      const res = await StudentServices.GetPastEventsByUserId(id);
      if (res.statusCode == "OK") {
        setevents(res.data);
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
    if (view === "all") {
      getStudentEvents(user.id);
    } else if (view === "upcoming") {
      getallUpcomingEvents(user.id);
    } else {
      getallPastEvents(user.id);
    }
  }, [view]);
  useEffect(() => {
    handleSearchEvents(searchterm);
  }, [searchterm]);
  const handleSearchEvents = (searchTerm: string) => {
    const filtred = events.filter((item) =>
      item.eventName.includes(searchTerm)
    );
    setevents(filtred);
    console.log(filtred, "file");
  };
  return (
    <Layout>
      <div className="flex h-full flex-col gap-5 p-5">
        <div className="bg-[#1B283F] rounded-xl">
          <div className="imagebg1 p-5 rounded-xl">
            <div className="flex flex-col gap-7">
              <p className="text-2xl md:w-[30%] font-semibold leading-8 text-white">
                Manage sport events effortlessly.
              </p>
              <button
                className="w-fit h-fit rounded-lg text-xs text-white bg-[#FF9C50] px-5 py-2 flex items-center gap-2 font-semibold"
                onClick={() => {
                  onOpen();
                }}
              >
                <MdAdd />
                Create Event
              </button>
            </div>
          </div>
        </div>
        <div className=" flex h-full overflow-scroll flex-col gap-7 w-full">
          <div className="w-full bg-white rounded-xl  flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <p
                className={`cursor-pointer  hover:text-black hover:underline underline-offset-8 ${
                  view == "all"
                    ? "underline text-black font-semibold"
                    : "text-[#B5B5C3]"
                }`}
                onClick={() => setView("all")}
              >
                All
              </p>
              <p
                className={`cursor-pointer  hover:text-black hover:underline underline-offset-8 ${
                  view == "upcoming"
                    ? "underline text-black font-semibold"
                    : "text-[#B5B5C3]"
                }`}
                onClick={() => setView("upcoming")}
              >
                Upcoming Events
              </p>
              <p
                className={`cursor-pointer  hover:text-black hover:underline underline-offset-8 ${
                  view == "past"
                    ? "underline text-black font-semibold"
                    : "text-[#B5B5C3]"
                }`}
                onClick={() => setView("past")}
              >
                Past Events
              </p>
            </div>
            <div className="w-full flex justify-between items-center">
              <div className="flex flex-col gap-2">
                <p className="text-xl font-semibold text-black">Event List</p>
                <p className="text-sm text-[#B5B5C3] font-semibold ">
                  {events.length} event{events.length > 1 ? "s" : ""}{" "}
                </p>
              </div>
              <div className="flex items-center gap-2 justify-end">
                <div className=" flex items-center   text-zinc-800 border-[1px]  mr-3 rounded-lg px-3 py-2 w-full text-[#D5D5D5] rounded-lg border-[#D5D5D5] h-10 font-thin">
                  <BiSearch className="text-[20px]  " />
                  <input
                    type="text"
                    className=" text-xs bg-transparent  outline-none"
                    placeholder="Search"
                    value={searchterm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>

                {/* <button className="w-full h-fit rounded-lg text-xs text-white bg-[#FF9C50] px-5 py-2 flex items-center gap-2 font-semibold">
                  <MdAdd />
                  Add Sport
                </button> */}
                {/* <button className="w-fit h-fit rounded-lg text-xs text-[#A1A5B7] bg-[#F5F8FA] px-5 py-2 flex items-center gap-2 font-semibold">
                  View all
                </button> */}
              </div>
            </div>

            {/* <GenSportTable currentItems={sports} /> */}
            <EventTable currentItems={events} />

            <AddEventModal isOpen={isOpen} onClose={onClose} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
