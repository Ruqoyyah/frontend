import { MdAdd } from "react-icons/md";
// import UserSummaryCard from "./UserSummaryCard";
import { useDisclosure } from "@chakra-ui/react";
// import UserTable from "./UserTable";
// import CreateUserModal from "../utils/modals/CreateUserModal";
// import AdminServices from "@/services/Admin-services/admin.services";
import { useEffect, useState } from "react";
import UserSummaryCard from "./userSummaryCard";
import { IUser } from "@/models/index.model";
import UserTable from "../utils/userTable";
import CreateUserModal from "../modals/createUserModal";
// import { IUser } from "@/models/admin.models";

export default function UsersTab() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  //   const [users, setUsers] = useState<IUser[]>([]);

  //   const getAllUsers = async () => {
  //     try {
  //       const res = await AdminServices.getUsers();
  //       if (res[0].id != undefined) {
  //         setUsers(res);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  const users: IUser[] = [
    {
      id: 1,
      firstname: "Quadri ",
      lastname: "Akinpelu",
      email: "akinpelumoyo@gmail.com",
      is_active: true,
      role_id: 1,
      created_by: "quadri Akinpelu",
      last_updated_by: "",
      created_at: "2024-07-13T09:45:00",
      updated_at: "",
      role: {
        id: 1,
        name: "Admin",
        description: "This role supercedes all roles",
        is_active: true,
        created_by: "Quadri",
        last_updated_by: "",
        created_at: "2024-07-13T09:45:00",
        updated_at: "",
      },
    },
    {
      id: 2,
      firstname: "Ayo",
      lastname: "Arakangudu",
      email: "ayoAra@gmail.com",
      is_active: true,
      role_id: 1,
      created_by: "quadri Akinpelu",
      last_updated_by: "",
      created_at: "2024-07-13T09:45:00",
      updated_at: "",
      role: {
        id: 1,
        name: "Admin",
        description: "This role supercedes all roles",
        is_active: true,
        created_by: "Quadri",
        last_updated_by: "",
        created_at: "2024-07-13T09:45:00",
        updated_at: "",
      },
    },
    {
      id: 3,
      firstname: "Josephine",
      lastname: "Shorunke",
      email: "JoeShorunke@gmail.com",
      is_active: true,
      role_id: 1,
      created_by: "quadri Akinpelu",
      last_updated_by: "",
      created_at: "2024-07-13T09:45:00",
      updated_at: "",
      role: {
        id: 1,
        name: "Admin",
        description: "This role supercedes all roles",
        is_active: true,
        created_by: "Quadri",
        last_updated_by: "",
        created_at: "",
        updated_at: "",
      },
    },
  ];

  useEffect(() => {
    // getAllUsers();
  }, []);

  return (
    <div className="w-full ">
      <div className="mt-5 flex justify-between w-full">
        <div className="w-[30%]">
          <UserSummaryCard users={users} />
        </div>
        <div className="">
          <button
            className="w-fit h-fit px-5 py-2 rounded-xl bg-primary text-active flex items-center gap-2 font-semibold"
            onClick={onOpen}
          >
            {" "}
            <MdAdd />
            Add New User
          </button>
        </div>
      </div>
      <div className="my-8">
        <UserTable currentItems={users} />
      </div>
      <CreateUserModal isOpen={isOpen} onClose={onClose} />
    </div>
  );
}
