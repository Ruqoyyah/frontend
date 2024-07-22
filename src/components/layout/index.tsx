import Sidebar from "../sidebar";

type childrenProps = {
  children: React.ReactNode;
};
export default function Layout({ children }: childrenProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[20%_1fr] bg-white font-mukta w-full z-10 h-screen  ease-in-out duration-700">
      <div className="p-2 h-full">
        <Sidebar />
      </div>
      <div className="">{children}</div>
    </div>
  );
}
