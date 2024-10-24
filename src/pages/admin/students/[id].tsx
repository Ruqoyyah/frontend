import Layout from "@/components/layout";
import EditStudentModal from "@/components/modals/editStudentModal";
import SportTable from "@/components/utils/sportTable";
import StudentSportTable from "@/components/utils/studentSportTable";
import { ISport, IUser } from "@/models/index.model";
import AdminServices from "@/services/Admin-services";
import StudentServices from "@/services/Student-servcices";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { MdArrowBack } from "react-icons/md";

export default function IndividualStudent() {
  const router = useRouter();
  const { id } = router.query;
  const toast = useToast();
  const [student, setStudent] = useState<IUser>();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isEditOpen,
    onOpen: onEditOpen,
    onClose: onEditClose,
  } = useDisclosure();
  const cancelRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (id) {
      getStudent(parseInt(id as string));
    }
  }, [id]);
  const events = [
    {
      evname: "Event 1",
      hosted: "Admin",
      date: "03 Sep, 4:20PM",
    },
    {
      evname: "Event 2",
      hosted: "Admin",
      date: "03 Sep, 4:20PM",
    },
    {
      evname: "Event 3",
      hosted: "Admin",
      date: "03 Sep, 4:20PM",
    },
  ];

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
  const deleteUser = async (id: number) => {
    try {
      const res = await AdminServices.deleteStudent(id);
      if (res.statusCode == "OK") {
        toast({
          title: "Student Management",
          status: "success",
          description: "Successfully deleted a User",
        });
        router.push("/admin/students");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <div className="flex w-full h-full flex-row">
        <div className="p-5 w-full flex h-full overflow-scroll flex-col gap-7 ">
          <div className="flex flex-col gap-1">
            <p className="text-xl font-semibold">Student Profile</p>
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
                onClick={() => onEditOpen()}
              >
                Edit student
              </button>
              <button
                className="flex gap-2 items-center text-red-600 bg-red-100 rounded-lg px-5 py-2 text-sm font-semibold"
                onClick={() => onOpen()}
              >
                Delete student
              </button>
            </div>
          </div>
          <div className="w-full flex gap-5">
            <div className="w-[40%] p-5 bg-white rounded-xl shadow-md flex flex-col gap-3">
              <div className="flex flex-col gap-2 items-center ">
                <div className="bg-[#FF9C5066] rounded-full h-[60px] w-[60px] flex items-center justify-center text-white">
                  <p className="text-xl">
                    {student?.firstname.charAt(0).toUpperCase()}
                    {student?.lastname.charAt(0).toUpperCase()}
                  </p>
                </div>
                <p className="text-[#6B7A99]">
                  {student?.firstname} {student?.lastname}
                </p>
                <p className="text-[#ADB8CC] text-sm">{student?.email}</p>
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
                      No. of Sports
                    </p>
                    {/* <p className="text-sm font-semibold text-[#B5B5C3] ">
                      Successful Fellas
                    </p> */}
                  </div>
                </div>
                <div className="w-fit h-fit px-3 py-1 rounded-lg bg-[#EEE5FF] text-[#8950FC] text-sm font-semibold">
                  {student?.sport.length}
                </div>
              </div>
            </div>
            {/* <div className="w-[60%] p-5 bg-white flex flex flex-col gap-5 rounded-xl shadow-md">
              <div className="flex flex-col gap-1">
                <p className="">Upcoming Events</p>
                <p className="text-sm text-[#B5B5C3] font-semibold">
                  Next Event is in 9 days
                </p>
              </div>
              {events?.map((event, index) => (
                <div key={index} className="flex items-center justify-between">
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
                        {event.evname}
                      </p>
                      <p className="text-[#B5B5C3] text-xs font-semibold">
                        {event.hosted}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm font-semibold">{event.date}</p>
                </div>
              ))}
            </div> */}
          </div>
          <div className="w-full bg-white rounded-xl  flex flex-col gap-5">
            <div className="w-full flex justify-between items-center">
              <div className="flex flex-col gap-2">
                <p className="text-xl font-semibold text-black">Sport List</p>
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
            <EditStudentModal
              onClose={onEditClose}
              isOpen={isEditOpen}
              student={student as IUser}
            />
            <StudentSportTable
              currentItems={student?.sport as ISport[]}
              id={student?.id as number}
            />
          </div>
        </div>
      </div>
      <AlertDialog
        isOpen={isOpen}
        onClose={onClose}
        leastDestructiveRef={cancelRef}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure you want to delete this student profile?
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button onClick={onClose}>Cancel</Button>
              <Button
                colorScheme="red"
                ml={3}
                onClick={() => {
                  deleteUser(parseInt(id as string));
                }}
              >
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Layout>
  );
}
