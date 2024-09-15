import ActionNavbar from "@/components/layout/ActionNav";
import SearchBar from "@/components/utils/SearchBar";
import UserTable from "@/components/utils/userTable";
import { IRole, IUser } from "@/models/index.model";
import { Badge } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { MdAdd } from "react-icons/md";

const roles: IRole[] = [
  {
    id: 1,
    name: "Admin",
    description: "This role supercedes all roles",
    is_active: true,
    created_by: "Quadri",
    last_updated_by: "",
    created_at: "",
    updated_at: "",
    users: [
      {
        id: 1,
        firstname: "Razaq",
        lastname: "Adegbite",
        email: "akinpelumoyo@gmail.com",
        is_active: true,
        role_id: 1,
        created_by: "",
        last_updated_by: "",
        created_at: "",
        updated_at: "",
      },
      {
        id: 1,
        firstname: "Quadri",
        lastname: "Akinpelu",
        email: "akinpelumoyo@gmail.com",
        is_active: true,
        role_id: 1,
        created_by: "",
        last_updated_by: "",
        created_at: "",
        updated_at: "",
      },
    ],
  },
  {
    id: 2,
    name: "Designer",
    description: "This role provides services to the customer",
    is_active: true,
    created_by: "Quadri",
    last_updated_by: "",
    created_at: "",
    updated_at: "",
    users: [
      {
        id: 1,
        firstname: "Quadri",
        lastname: "Akinpelu",
        email: "akinpelumoyo@gmail.com",
        is_active: true,
        role_id: 1,
        created_by: "",
        last_updated_by: "",
        created_at: "",
        updated_at: "",
      },
    ],
  },
  {
    id: 3,
    name: "Customer",
    description: "This role is an end user",
    is_active: true,
    created_by: "Quadri",
    last_updated_by: "",
    created_at: "",
    updated_at: "",
    users: [
      {
        id: 1,
        firstname: "Quadri",
        lastname: "Akinpelu",
        email: "akinpelumoyo@gmail.com",
        is_active: true,
        role_id: 1,
        created_by: "",
        last_updated_by: "",
        created_at: "",
        updated_at: "",
      },
    ],
  },
  {
    id: 4,
    name: "Suppport",
    description: "This role is an end user",
    is_active: true,
    created_by: "Quadri",
    last_updated_by: "",
    created_at: "",
    updated_at: "",
    users: [
      {
        id: 1,
        firstname: "Quadri",
        lastname: "Akinpelu",
        email: "akinpelumoyo@gmail.com",
        is_active: true,
        role_id: 1,
        created_by: "",
        last_updated_by: "",
        created_at: "",
        updated_at: "",
      },
    ],
  },
];
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
export default function UserDetails() {
  const router = useRouter();
  const [searchItem, setSearchTerm] = useState<string>("");
  const [usersearchItem, setUserSearchTerm] = useState<string>("");
  const [selectedRole, setSelectedRole] = useState(users[0]);
  const [view, setView] = useState<string>("overview");
  return (
    <div className="bg-[#F5F5F5]">
      <ActionNavbar page="Role Information" />
      <div className="flex justify-center py-5 h-screen">
        <div className="w-[85%] flex gap-5">
          <div className="w-[30%] flex flex-col gap-2">
            <SearchBar searchTerm={searchItem} setSearchTerm={setSearchTerm} />
            <button
              onClick={() => router.push("/access_control/createRole")}
              className="w-full px-5 py-2 bg-[#5E604D] rounded-xl text-white flex justify-center items-center gap-2"
            >
              <MdAdd />
              New User
            </button>
            <div className="flex flex-col gap-1">
              {users.map((item, index) => (
                <div
                  className={`rounded-lg p-3 items-end flex cursor-pointer  hover:bg-[#F6E7D7] ease-in-out transition duration-700 gap-2 ${
                    item.id === selectedRole.id ? "bg-[#F6E7D7]" : "bg-white"
                  }`}
                  key={index}
                  onClick={() => setSelectedRole(item)}
                >
                  <div className=" flex items-center gap-2">
                    <div className="w-[30px] h-[30px] text-[#1553BE] flex justify-center items-center rounded-full bg-[#EFF8FF] overflow-hidden">
                      {item?.firstname?.charAt(0).toUpperCase()}
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-sm font-semibold">
                      {item.firstname} {item.lastname}
                    </p>
                    <p className="text-[#667085] text-xs  text-sm font-semibold">
                      {item.email}
                    </p>
                  </div>
                  <p className="text-[#667085]  text-sm font-semibold">
                    Role: <span className="text-black">{item.role?.name}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-[70%] h-full bg-white rounded-xl p-5 flex flex-col gap-5">
            <p className="w-full text-xl font-semibold">Overview</p>
            <div className="w-full flex items-center gap-3">
              <p className="text-sm text-[#6B7A99]">
                Created Date{" "}
                <span className="text-black"> 12th july, 2021</span>
              </p>
              <p className="text-sm text-[#6B7A99]">
                Created Time <span className="text-black"> 4:28PM</span>
              </p>
            </div>
            <div className="flex items-center gap-3">
              <p className="text-xl font-semibold">
                {selectedRole.firstname} {selectedRole.lastname}
              </p>
              <Badge color={"#6941C6"} bg={"#F9F5FF"}>
                {selectedRole.role?.name}
              </Badge>
            </div>
            {/* <p className="text-sm text-[#6B7A99]">{selectedRole.description}</p> */}

            <div className="w-full flex items-center justify-between">
              <div className="flex gap-2 items-center">
                <p className="text-sm text-black">Users</p>
                <div className="w-fit h-fit flex justify-center items-center p-2 rounded-full text-[#026AA2] bg-[#F0F9FF]">
                  <p className="text-sm">{users.length}</p>
                </div>
              </div>
              <div className="flex items-center  ">
                <div className="flex items-center gap-2">
                  {/* Add Filter */}

                  <button className="w-fit px-5 py-2 bg-[#5E604D] rounded-xl text-white flex items-center gap-2">
                    <MdAdd />
                    Add User
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full flex items-center justify-between">
              <div className="w-[30%]">
                <SearchBar
                  searchTerm={searchItem}
                  setSearchTerm={setSearchTerm}
                />
              </div>
            </div>

            {/* <UserTable currentItems={users} /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
