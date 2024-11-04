import CookieManager from "@/utils/cookiemanager";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BsGrid } from "react-icons/bs";
import { CiSettings } from "react-icons/ci";
import { FaFileSignature } from "react-icons/fa";
import { FaQuestion } from "react-icons/fa6";
import { IoIosBriefcase } from "react-icons/io";
import { LuUser2 } from "react-icons/lu";
import { PiBarricadeFill, PiSignOut } from "react-icons/pi";
import { SiOpenaccess } from "react-icons/si";

export default function CoachSidebar() {
  const router = useRouter();
  const [user, setUser] = useState<any>();
  useEffect(() => {
    const user =
      typeof window !== undefined
        ? JSON.parse(localStorage.getItem("currentUser") as string)
        : null;
    setUser(user);
  }, []);
  const logout = () => {
    router.push("/login");
    localStorage.clear();
    CookieManager.deleteCookie("jwt");
  };
  return (
    <div className="w-full bg-[#F2F3F5] rounded-xl h-full p-5 flex flex-col justify-between">
      <div className="flex flex-col  gap-4">
        <div className="">
          <p className=" font-semibold">Sporter++</p>
        </div>
        {/* UserCard */}
        <div className="w-full rounded-xl p-5 bg-[#5E604D08] flex items-center gap-2">
          <div className="h-[30px] w-[30px] overflow-hidden rounded-full">
            <Image
              src={"/img/Avatar.png"}
              alt="profileBg"
              width={500}
              height={500}
            />
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-semibold text-sm text-primary">
              {" "}
              {user?.firstName} {user?.lastName}
            </p>
            <p className=" text-xs text-[#83899F]">Coach</p>
          </div>
        </div>
        <div
          className={`w-full flex gap-3 cursor-pointer items-center font-semibold hover:text-black ease-in-out duration-700 px-5 py-2 rounded-lg  ${
            router.asPath == "/coach" ? "text-black " : "text-[#5E6278]"
          }`}
          onClick={() => {
            router.push("/coach");
          }}
        >
          {router.asPath == "/coach" ? (
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.6 7.33325H2C1.6 7.33325 1.33334 7.59992 1.33334 7.99992C1.33334 8.39992 1.6 8.66659 2 8.66659H9.6V7.33325Z"
                fill="#181C32"
              />
              <path
                opacity="0.3"
                d="M9.59999 13.3334V2.66675L14.4667 7.53341C14.7333 7.80007 14.7333 8.20009 14.4667 8.46676L9.59999 13.3334Z"
                fill="#181C32"
              />
            </svg>
          ) : (
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.6 7.33325H2C1.6 7.33325 1.33334 7.59992 1.33334 7.99992C1.33334 8.39992 1.6 8.66659 2 8.66659H9.6V7.33325Z"
                fill="#7E8299"
              />
              <path
                opacity="0.3"
                d="M9.59999 13.3334V2.66675L14.4667 7.53341C14.7333 7.80007 14.7333 8.20009 14.4667 8.46676L9.59999 13.3334Z"
                fill="#7E8299"
              />
            </svg>
          )}

          <p className={` text-[14px]`}>Dashboard</p>
        </div>

        {/* <div
            className={`w-full flex gap-3 cursor-pointer items-center font-semibold hover:text-primary hover:bg-hoverBg ease-in-out duration-700 px-5 py-2 rounded-lg  ${
              router.asPath == "/"
                ? "text-primary bg-hoverBg"
                : "text-[#5E604D30]"
            }`}
            onClick={() => {
              router.push("/dashboard");
            }}
          >
            <CiSettings />
            <p className={` text-[14px]`}>Settings</p>
          </div> */}
      </div>
      <div className="">
        <div
          className={`w-full flex gap-3 cursor-pointer items-center font-semibold text-[#5E6278] hover:text-black  ease-in-out duration-400 px-5 py-2 rounded-full  text-primary
             `}
          onClick={logout}
        >
          <PiSignOut />
          <p className={` text-[14px]`}>Sign Out</p>
        </div>
      </div>
    </div>
  );
}
