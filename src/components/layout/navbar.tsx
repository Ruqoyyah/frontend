import { useEffect, useState } from "react";
import { MdNotifications, MdNotificationsNone } from "react-icons/md";
import { Image } from "@chakra-ui/react";
// import SearchBar from "../utils/SearchBar";
import axios from "axios";
// import { IClient } from "@/models/client.model";
// import { useRouter } from "next/router";
import { SiWebmoney } from "react-icons/si";
import { useRouter } from "next/router";
import FancyButton from "../utils/fancyButton";
type navbarProps = {
  page: string;
  //   dashboad: boolean;
};
export default function ClientNavbar({ page }: navbarProps) {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [date, setDate] = useState<string>("");
  //   const [user, setUser] = useState<IClient>();
  const router = useRouter();
  function getFormattedDate() {
    // Array of weekday names
    const weekdays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    // Array of abbreviated month names
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    // Get the current date
    const now = new Date();
    // Get the day of the week, day of the month, month, and year
    const weekday = weekdays[now.getDay()];
    const day = String(now.getDate()).padStart(2, "0");
    const month = months[now.getMonth()];
    const year = now.getFullYear();

    // Format the date
    const formattedDate = `${weekday} ${day} ${month}, ${year}`;
    return formattedDate;
  }

  useEffect(() => {
    setDate(getFormattedDate());
  }, []);
  return (
    <div className="w-full sticky top-0 flex border-b-[1px] border-[#ffffff60] items-center justify-between z-10 px-5 py-3 bg-transparent">
      <div className="flex flex-col gap-1">
        <p className="text-xl text-white  font-semibold">Sporter+</p>
      </div>

      <div className="flex items-center gap-4">
        <button className="bg-greybg px-5 py-2 rounded-lg border-[#fafafa] border w-fit h-fit text-white">
          Login
        </button>
        <FancyButton text="Sign Up" onClick={() => {}} />
      </div>
    </div>
  );
}
//
