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
import SearchBar from "../utils/SearchBar";
// import { IUser } from "@/models/admin.models";

export default function UsersTab() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [searchItem, setSearchItem] = useState<string>("");
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
    <div className="bg-white  p-5 flex flex-col gap-4 rounded-xl border-[1px] border-[#ccc] ">
      <div className="flex gap-2 items-center">
        <p className="text-sm text-black">Users</p>
        <div className="w-fit h-fit flex justify-center items-center p-2 rounded-full text-[#026AA2] bg-[#F0F9FF]">
          <p className="text-sm">{users.length}</p>
        </div>
      </div>
      <div className="flex items-center w-full justify-between">
        <div className="w-[30%]">
          <SearchBar searchTerm={searchItem} setSearchTerm={setSearchItem} />
        </div>
        <div className="flex items-center gap-2">
          {/* Add Filter */}

          <button className="w-fit px-5 py-2 bg-[#5E604D] rounded-3xl text-white flex items-center gap-2">
            <MdAdd />
            New User
          </button>
        </div>
      </div>
      {/* <UserTable currentItems={users} /> */}
      <CreateUserModal isOpen={isOpen} onClose={onClose} />
    </div>
  );
}
