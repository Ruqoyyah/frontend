import Layout from "@/components/layout";
import EditSportModal from "@/components/modals/editSport";
import { getFormattedDate } from "@/components/utils/helpers";
import SportTable from "@/components/utils/sportTable";
import UserTable from "@/components/utils/userTable";
import { IEvent, ISport, IUser } from "@/models/index.model";
import AdminServices from "@/services/Admin-services";
import { useDisclosure, useToast } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { MdArrowBack } from "react-icons/md";

export default function IndividualSport() {
  const router = useRouter();
  const id = router.query.id as string;
  const sportq = router.query.sport;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const [students, setStudents] = useState<IUser[]>([]);
  const [sport, setSport] = useState<ISport>();
  const [Events, setEvents] = useState<IEvent[]>([]);
  const getallStudents = async (id: number) => {
    try {
      const res = await AdminServices.getUserbySport(id);
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
  const getupcomingEvents = async (id: number) => {
    try {
      const res = await AdminServices.getUpcomingEventsBySport(id);
      if (res.statusCode == "OK") {
        setEvents(res.data);
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
    if (id && sportq) {
      getallStudents(parseInt(id as string));
      getupcomingEvents(parseInt(id as string));
      setSport(JSON.parse(sportq as string));
    }
  }, [id, sportq]);

  function findClosestEvent(events: IEvent[]): number {
    const now = new Date();
    let closestEvent: IEvent | null = null;
    let minDaysDifference: number | null = null;

    for (const event of events) {
      const eventDate = new Date(event.eventDate);
      const timeDifference = eventDate.getTime() - now.getTime();
      const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));

      // If the event is in the future and it's the closest so far, update
      if (
        daysDifference >= 0 &&
        (minDaysDifference === null || daysDifference < minDaysDifference)
      ) {
        minDaysDifference = daysDifference;
        closestEvent = event;
      }
    }

    return minDaysDifference !== null ? minDaysDifference : -1;
  }
  return (
    <Layout>
      <div className="flex w-full h-full flex-row">
        <div className="p-5 w-full flex h-full overflow-scroll flex-col gap-7 ">
          <div className="flex flex-col gap-1">
            <p className="text-xl font-semibold">Sport Profile</p>
            {/* <p className="text-sm text-[#B5B5C3]">Welcome back</p> */}
          </div>
          <div className="flex w-full items-center justify-between">
            <button
              className="flex gap-2 items-center text-[#B5B5C3] text-sm font-semibold"
              onClick={() => router.back()}
            >
              <MdArrowBack /> <p className="">Back</p>
            </button>
            <div className="flex gap-3">
              <button
                className="flex gap-2 items-center text-blue-600 bg-blue-100 rounded-lg px-5 py-2 text-sm font-semibold"
                onClick={() => onOpen()}
              >
                Edit sport
              </button>
              {/* <button
                className="flex gap-2 items-center text-red-600 bg-red-100 rounded-lg px-5 py-2 text-sm font-semibold"
                // onClick={() => onOpen()}
              >
                Delete sport
              </button> */}
            </div>
          </div>
          <div className="w-full flex gap-5">
            <div className="w-[40%] p-5 bg-white rounded-xl shadow-md flex flex-col gap-3">
              <div className="flex flex-col gap-2 items-center ">
                <div className="bg-[#FF9C5066] rounded-full h-[60px] w-[60px] flex items-center justify-center text-white">
                  <p className="text-xl">
                    {sport?.sportName.charAt(0).toUpperCase()}
                  </p>
                </div>
                <p className="text-[#6B7A99]">{sport?.sportName}</p>
                {/* <p className="text-[#ADB8CC] text-sm">admin@gmail.com</p> */}
              </div>
              {/* <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <svg
                    width="44"
                    height="44"
                    viewBox="0 0 44 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="44" height="44" rx="6" fill="#F3F6F9" />
                    <rect
                      opacity="0.3"
                      x="23.5415"
                      y="14.1667"
                      width="3.125"
                      height="16.6667"
                      rx="1.5625"
                      fill="#80808F"
                    />
                    <rect
                      x="18.3335"
                      y="19.375"
                      width="3.125"
                      height="11.4583"
                      rx="1.5625"
                      fill="#80808F"
                    />
                    <rect
                      x="28.75"
                      y="21.4583"
                      width="3.125"
                      height="9.375"
                      rx="1.5625"
                      fill="#80808F"
                    />
                    <rect
                      x="13.125"
                      y="23.5417"
                      width="3.125"
                      height="7.29167"
                      rx="1.5625"
                      fill="#80808F"
                    />
                  </svg>

                  <div className="flex flex-col gap-1">
                    <p className="text-sm font-semibold text-[#3F4254]">
                      Average Performance
                    </p>
                    <p className="text-sm font-semibold text-[#B5B5C3] ">
                      Successful Fellas
                    </p>
                  </div>
                </div>
                <div className="w-fit h-fit px-3 py-1 rounded-lg bg-[#C9F7F5] text-sm text-[#1BC5BD] font-semibold">
                  6
                </div>
              </div> */}
              {/* <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <svg
                    width="44"
                    height="44"
                    viewBox="0 0 44 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="44" height="44" rx="6" fill="#F3F6F9" />
                  </svg>
                  <div className="flex flex-col gap-2">
                    <p className="text-sm font-semibold text-[#3F4254]">
                      Grade
                    </p>
                    <p className="text-sm font-semibold text-[#B5B5C3] ">
                      Successful Fellas
                    </p>
                  </div>
                </div>
              </div> */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <svg
                    width="44"
                    height="44"
                    viewBox="0 0 44 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="44" height="44" rx="6" fill="#F3F6F9" />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15.5411 27.9377L16.5523 26.8299C17.9079 28.1219 19.6525 28.9458 21.5417 29.1554V30.1666H20.5833C19.5248 30.1666 18.6667 31.0247 18.6667 32.0832H26.3333C26.3333 31.0247 25.4752 30.1666 24.4167 30.1666H23.4583V29.1556C27.7708 28.6789 31.125 25.0228 31.125 20.5832C31.125 17.7936 29.7902 15.2252 27.5796 13.612C27.152 13.3 26.5525 13.3937 26.2405 13.8212C25.9285 14.2488 26.0222 14.8483 26.4497 15.1603C28.171 16.4164 29.2083 18.4123 29.2083 20.5832C29.2083 24.2881 26.2049 27.2916 22.5 27.2916C20.4522 27.2916 18.5576 26.3696 17.2906 24.8102C16.9212 24.3555 16.2339 24.3358 15.839 24.7684L14.1256 26.6455C13.7687 27.0364 13.7963 27.6425 14.1872 27.9994C14.5781 28.3562 15.1843 28.3286 15.5411 27.9377Z"
                      fill="#80808F"
                    />
                    <path
                      opacity="0.3"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M22.5 26.3333C25.6756 26.3333 28.25 23.7589 28.25 20.5833C28.25 17.4076 25.6756 14.8333 22.5 14.8333C19.3244 14.8333 16.75 17.4076 16.75 20.5833C16.75 23.7589 19.3244 26.3333 22.5 26.3333Z"
                      fill="#80808F"
                    />
                  </svg>

                  <div className="flex flex-col gap-1">
                    <p className="text-sm font-semibold text-[#3F4254]">
                      Season
                    </p>
                    {/* <p className="text-sm font-semibold text-[#B5B5C3] ">
                      Successful Fellas
                    </p> */}
                  </div>
                </div>
                <div className="w-fit h-fit px-3 text-xs py-1 rounded-lg bg-[#EEE5FF] text-[#8950FC] text-sm font-semibold">
                  {sport?.season}, {sport?.year}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <svg
                    width="44"
                    height="44"
                    viewBox="0 0 44 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="44" height="44" rx="6" fill="#F3F6F9" />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15.5411 27.9377L16.5523 26.8299C17.9079 28.1219 19.6525 28.9458 21.5417 29.1554V30.1666H20.5833C19.5248 30.1666 18.6667 31.0247 18.6667 32.0832H26.3333C26.3333 31.0247 25.4752 30.1666 24.4167 30.1666H23.4583V29.1556C27.7708 28.6789 31.125 25.0228 31.125 20.5832C31.125 17.7936 29.7902 15.2252 27.5796 13.612C27.152 13.3 26.5525 13.3937 26.2405 13.8212C25.9285 14.2488 26.0222 14.8483 26.4497 15.1603C28.171 16.4164 29.2083 18.4123 29.2083 20.5832C29.2083 24.2881 26.2049 27.2916 22.5 27.2916C20.4522 27.2916 18.5576 26.3696 17.2906 24.8102C16.9212 24.3555 16.2339 24.3358 15.839 24.7684L14.1256 26.6455C13.7687 27.0364 13.7963 27.6425 14.1872 27.9994C14.5781 28.3562 15.1843 28.3286 15.5411 27.9377Z"
                      fill="#80808F"
                    />
                    <path
                      opacity="0.3"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M22.5 26.3333C25.6756 26.3333 28.25 23.7589 28.25 20.5833C28.25 17.4076 25.6756 14.8333 22.5 14.8333C19.3244 14.8333 16.75 17.4076 16.75 20.5833C16.75 23.7589 19.3244 26.3333 22.5 26.3333Z"
                      fill="#80808F"
                    />
                  </svg>

                  <div className="flex flex-col gap-1">
                    <p className="text-sm font-semibold text-[#3F4254]">
                      Enrollment Deadline
                    </p>
                    {/* <p className="text-sm font-semibold text-[#B5B5C3] ">
                      Successful Fellas
                    </p> */}
                  </div>
                </div>
                <div className="w-fit h-fit px-3 text-xs py-1 rounded-lg bg-[#EEE5FF] text-[#8950FC] text-sm font-semibold">
                  {getFormattedDate(sport?.enrollmentDeadline as string)}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <svg
                    width="44"
                    height="44"
                    viewBox="0 0 44 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="44" height="44" rx="6" fill="#F3F6F9" />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15.5411 27.9377L16.5523 26.8299C17.9079 28.1219 19.6525 28.9458 21.5417 29.1554V30.1666H20.5833C19.5248 30.1666 18.6667 31.0247 18.6667 32.0832H26.3333C26.3333 31.0247 25.4752 30.1666 24.4167 30.1666H23.4583V29.1556C27.7708 28.6789 31.125 25.0228 31.125 20.5832C31.125 17.7936 29.7902 15.2252 27.5796 13.612C27.152 13.3 26.5525 13.3937 26.2405 13.8212C25.9285 14.2488 26.0222 14.8483 26.4497 15.1603C28.171 16.4164 29.2083 18.4123 29.2083 20.5832C29.2083 24.2881 26.2049 27.2916 22.5 27.2916C20.4522 27.2916 18.5576 26.3696 17.2906 24.8102C16.9212 24.3555 16.2339 24.3358 15.839 24.7684L14.1256 26.6455C13.7687 27.0364 13.7963 27.6425 14.1872 27.9994C14.5781 28.3562 15.1843 28.3286 15.5411 27.9377Z"
                      fill="#80808F"
                    />
                    <path
                      opacity="0.3"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M22.5 26.3333C25.6756 26.3333 28.25 23.7589 28.25 20.5833C28.25 17.4076 25.6756 14.8333 22.5 14.8333C19.3244 14.8333 16.75 17.4076 16.75 20.5833C16.75 23.7589 19.3244 26.3333 22.5 26.3333Z"
                      fill="#80808F"
                    />
                  </svg>

                  <div className="flex flex-col gap-1">
                    <p className="text-sm font-semibold text-[#3F4254]">
                      No. of Students
                    </p>
                    {/* <p className="text-sm font-semibold text-[#B5B5C3] ">
                      Successful Fellas
                    </p> */}
                  </div>
                </div>
                <div className="w-fit h-fit px-3 py-1 text-xs rounded-lg bg-[#EEE5FF] text-[#8950FC] text-sm font-semibold">
                  {students.length}
                </div>
              </div>
            </div>
            <div className="w-[60%] max-h-[300px] p-5 bg-white flex flex flex-col gap-5 rounded-xl shadow-md">
              <p className="">Upcoming Events</p>
              {Events.length > 0 ? (
                <div className="flex flex-col gap-4">
                  <p className="text-sm text-[#B5B5C3] font-semibold">
                    Next Event is in {findClosestEvent(Events)} days
                  </p>

                  {Events?.map((event, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2">
                        <svg
                          width="44"
                          height="44"
                          viewBox="0 0 44 44"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width="44" height="44" rx="6" fill="#FFF4DE" />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M14.3335 12.25C13.7812 12.25 13.3335 12.6977 13.3335 13.25V30.75C13.3335 31.3023 13.7812 31.75 14.3335 31.75H15.5835C16.1358 31.75 16.5835 31.3023 16.5835 30.75V13.25C16.5835 12.6977 16.1358 12.25 15.5835 12.25H14.3335ZM19.7502 12.25C19.1979 12.25 18.7502 12.6977 18.7502 13.25V30.75C18.7502 31.3023 19.1979 31.75 19.7502 31.75H21.0002C21.5524 31.75 22.0002 31.3023 22.0002 30.75V13.25C22.0002 12.6977 21.5524 12.25 21.0002 12.25H19.7502Z"
                            fill="#FFA800"
                          />
                          <rect
                            opacity="0.3"
                            x="23.6001"
                            y="13.2512"
                            width="3.25"
                            height="19.5"
                            rx="1"
                            transform="rotate(-19 23.6001 13.2512)"
                            fill="#FFA800"
                          />
                        </svg>
                        <div className="flex flex-col gap-1">
                          <p className="text-[#3F4254] font-semibold">
                            {event.eventName}
                          </p>
                        </div>
                      </div>
                      <p className="text-sm font-semibold">
                        {getFormattedDate(event.eventDate)}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center gap-2">
                  <Image
                    src={"/img/noEvent.png"}
                    alt="image"
                    width={500}
                    height={500}
                    className="w-[200px] h-[200px]"
                  />
                  <p className="font-[500] text-sm ">
                    There are no upcoming events for this sport.
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="w-full bg-white rounded-xl  flex flex-col gap-5">
            <div className="w-full flex justify-between items-center">
              <div className="flex flex-col gap-2">
                <p className="text-xl font-semibold text-black">Student List</p>
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

                {/* <button className="w-fit h-fit rounded-lg text-xs text-[#A1A5B7] bg-[#F5F8FA] px-5 py-2 flex items-center gap-2 font-semibold">
                  View all
                </button> */}
              </div>
            </div>
            <UserTable currentItems={students} />
          </div>
        </div>
      </div>
      <EditSportModal
        isOpen={isOpen}
        onClose={onClose}
        sport={sport as ISport}
      />
    </Layout>
  );
}
