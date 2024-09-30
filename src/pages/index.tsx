import ClientNavbar from "@/components/layout/navbar";
import FancyButton from "@/components/utils/fancyButton";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <div className="body h-screen">
      <ClientNavbar page="emptu" />
      <div className="w-full h-[88%] overflow-hidden relative flex flex-col lg:flex-row">
        <div className="container relative">
          <div className="w-full flex z-40 h-full items-center">
            <div className="flex w-full p-5 lg:w-[50%] z-40 justify-center flex-col gap-5">
              <p className="lg:text-5xl md:text-3xl sm:text-2xl text-xl text-white">
                Welcome to Sports Enrolment System
              </p>
              <p className="text-[#D6D6D670]">
                Manage student sports activities effortlessly.
              </p>
              <div
                className="flex flex-col md:flex-row 
               w-full gap-5 md:gap-2"
              >
                <FancyButton
                  text="Start Now"
                  onClick={() => {
                    router.push("/login");
                  }}
                />
              </div>
              <p className="text-xs text-[#D6D6D670]">
                We care about your data in our privacy policy.
              </p>
            </div>
          </div>
          <Image
            src="/img/basketball.png"
            alt="side"
            width={500}
            height={500}
            className="absolute top-[100px] md:top-[0px] md:right-[-90px] w-[100%] h-[100%]"
          />
        </div>
      </div>
    </div>
  );
}
