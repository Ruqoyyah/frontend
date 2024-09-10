import { useRouter } from "next/router";
import { MdArrowCircleLeft, MdOutlineArrowCircleLeft } from "react-icons/md";

type navbarProps = {
  page: string;
  //   dashboad: boolean;
};
export default function ActionNavbar({ page }: navbarProps) {
  const router = useRouter();
  return (
    <div className="w-full sticky top-0 flex border-b-[1px] border-[#E9EBF0] items-center justify-between z-10 p-5 bg-[#FCFCFC]">
      <div className="flex flex-row items-center gap-2 gap-1">
        <MdOutlineArrowCircleLeft
          className="text-2xl text-[#757D8A]"
          onClick={() => router.back()}
        />
        <p className="text-xl text-[#2D2D2D]  font-semibold">{page}</p>
        {/* <p className="text-sm text-[#72777B] ">{date}</p> */}
      </div>
    </div>
  );
}
