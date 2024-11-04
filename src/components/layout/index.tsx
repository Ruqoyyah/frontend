import ClientSidebar from "../clientSideBar";
import CoachSidebar from "../coachSideBar";
import Sidebar from "../sidebar";

type childrenProps = {
  children: React.ReactNode;
  student?: string;
};
export default function Layout({ children, student }: childrenProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[20%_1fr] bg-white font-mukta w-full z-10 h-screen  bg-[#fafafa] ease-in-out duration-700">
      <div className="p-2  h-full">
        {!student ? (
          <Sidebar />
        ) : student === "student" ? (
          <ClientSidebar />
        ) : (
          <CoachSidebar />
        )}
      </div>
      <div className="h-full overflow-scroll">{children}</div>
    </div>
  );
}
