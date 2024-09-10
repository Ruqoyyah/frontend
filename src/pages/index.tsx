import ClientNavbar from "@/components/layout/navbar";
import FancyButton from "@/components/utils/fancyButton";

export default function Home() {
  return (
    <div className="body h-screen">
      <ClientNavbar page="emptu" />
      <div className="w-full h-[88%] flex flex-col lg:flex-row">
        <div className="w-full flex items-center justify-center">
          <div className="flex w-full p-5 lg:w-[80%]  justify-center flex-col gap-5">
            <p className="lg:text-5xl md:text-3xl sm:text-2xl text-xl text-white">
              Welcome to Sports Enrolment System
            </p>
            <p className="text-[#D6D6D670]">
              Manage student sports activities effortlessly.
            </p>
            <div className="flex items-center w-full gap-2">
              <input
                type="text"
                placeholder="enter your email"
                className="bg-transparent border border-[#fafafa] p-2 w-[70%] rounded-lg"
              />
              <FancyButton text="Start Now" onClick={() => {}} />
            </div>
            <p className="text-xs text-[#D6D6D670]">
              We care about your data in our privacy policy.
            </p>
          </div>
        </div>
        <div className="sideImg h-full w-full"></div>
      </div>
    </div>
  );
}
