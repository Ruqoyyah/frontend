import ActionNavbar from "@/components/layout/ActionNav";
import SearchBar from "@/components/utils/SearchBar";
import UserTable from "@/components/utils/userTable";
import { IRole, IUser } from "@/models/index.model";
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
export default function RoleDetails() {
  const router = useRouter();
  const [searchItem, setSearchTerm] = useState<string>("");
  const [usersearchItem, setUserSearchTerm] = useState<string>("");
  const [selectedRole, setSelectedRole] = useState(roles[0]);
  const [view, setView] = useState<string>("overview");
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
  return (
    <div className="bg-[#F5F5F5]">
      <ActionNavbar page="Role Information" />
      <div className="flex justify-center py-5 h-screen">
        <div className="w-[80%] flex gap-5">
          <div className="w-[30%] flex flex-col gap-2">
            <SearchBar searchTerm={searchItem} setSearchTerm={setSearchTerm} />
            <button
              onClick={() => router.push("/access_control/createRole")}
              className="w-full px-5 py-2 bg-[#5E604D] rounded-xl text-white flex justify-center items-center gap-2"
            >
              <MdAdd />
              New Role
            </button>
            <div className="flex flex-col gap-1">
              {roles.map((item, index) => (
                <div
                  className={`rounded-lg p-3 flex cursor-pointer flex-col hover:bg-[#F6E7D7] ease-in-out transition duration-700 gap-2 ${
                    item.id === selectedRole.id ? "bg-[#F6E7D7]" : "bg-white"
                  }`}
                  key={index}
                  onClick={() => setSelectedRole(item)}
                >
                  <p className=" text-sm font-semibold">{item.name}</p>
                  <p className=" text-sm text-[#667085] ">{item.name}</p>
                  <div className="flex items-center gap-2">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.9998 6.59172C14.9748 6.59172 14.9581 6.59172 14.9331 6.59172H14.8915C13.3165 6.54172 12.1415 5.32505 12.1415 3.82505C12.1415 2.29172 13.3915 1.05005 14.9165 1.05005C16.4415 1.05005 17.6915 2.30005 17.6915 3.82505C17.6831 5.33338 16.5081 6.55005 15.0081 6.60005C15.0081 6.59172 15.0081 6.59172 14.9998 6.59172ZM14.9165 2.29172C14.0748 2.29172 13.3915 2.97505 13.3915 3.81672C13.3915 4.64172 14.0331 5.30839 14.8581 5.34172C14.8665 5.33339 14.9331 5.33339 15.0081 5.34172C15.8165 5.30006 16.4415 4.63339 16.4498 3.81672C16.4498 2.97505 15.7665 2.29172 14.9165 2.29172Z"
                        fill="#C3CAD9"
                      />
                      <path
                        d="M15.0084 12.7334C14.6834 12.7334 14.3584 12.7084 14.0334 12.65C13.6917 12.5917 13.4667 12.2667 13.525 11.925C13.5834 11.5834 13.9084 11.3584 14.25 11.4167C15.275 11.5917 16.3584 11.4 17.0834 10.9167C17.475 10.6584 17.6834 10.3334 17.6834 10.0084C17.6834 9.68337 17.4667 9.3667 17.0834 9.10837C16.3584 8.62504 15.2584 8.43337 14.225 8.61671C13.8834 8.68337 13.5584 8.45004 13.5 8.10837C13.4417 7.76671 13.6667 7.44171 14.0084 7.38338C15.3667 7.14171 16.775 7.40004 17.775 8.0667C18.5084 8.55837 18.9334 9.25837 18.9334 10.0084C18.9334 10.75 18.5167 11.4584 17.775 11.9584C17.0167 12.4584 16.0334 12.7334 15.0084 12.7334Z"
                        fill="#C3CAD9"
                      />
                      <path
                        d="M4.97503 6.59175C4.96669 6.59175 4.95836 6.59175 4.95836 6.59175C3.45836 6.54175 2.28336 5.32508 2.27502 3.82508C2.27502 2.29174 3.52503 1.04175 5.05003 1.04175C6.57503 1.04175 7.82502 2.29175 7.82502 3.81675C7.82502 5.32508 6.65002 6.54175 5.15002 6.59175L4.97503 5.96675L5.03336 6.59175C5.01669 6.59175 4.99169 6.59175 4.97503 6.59175ZM5.05836 5.34175C5.10836 5.34175 5.15003 5.34175 5.20003 5.35008C5.94169 5.31675 6.59169 4.65008 6.59169 3.82508C6.59169 2.98341 5.90836 2.30008 5.06669 2.30008C4.22503 2.30008 3.54169 2.98341 3.54169 3.82508C3.54169 4.64174 4.17502 5.30008 4.98336 5.35008C4.99169 5.34175 5.02502 5.34175 5.05836 5.34175Z"
                        fill="#C3CAD9"
                      />
                      <path
                        d="M4.96663 12.7334C3.94163 12.7334 2.95829 12.4584 2.19996 11.9584C1.46663 11.4667 1.04163 10.7584 1.04163 10.0084C1.04163 9.26671 1.46663 8.55837 2.19996 8.0667C3.19996 7.40004 4.60829 7.14171 5.96663 7.38338C6.30829 7.44171 6.53329 7.76671 6.47496 8.10837C6.41663 8.45004 6.09163 8.68337 5.74996 8.61671C4.71663 8.43337 3.62496 8.62504 2.89163 9.10837C2.49996 9.3667 2.29163 9.68337 2.29163 10.0084C2.29163 10.3334 2.50829 10.6584 2.89163 10.9167C3.61663 11.4 4.69996 11.5917 5.72496 11.4167C6.06663 11.3584 6.39163 11.5917 6.44996 11.925C6.50829 12.2667 6.28329 12.5917 5.94163 12.65C5.61663 12.7084 5.29163 12.7334 4.96663 12.7334Z"
                        fill="#C3CAD9"
                      />
                      <path
                        d="M9.99981 12.8166C9.97481 12.8166 9.95814 12.8166 9.93314 12.8166H9.89148C8.31648 12.7666 7.14148 11.5499 7.14148 10.0499C7.14148 8.51657 8.39148 7.2749 9.91648 7.2749C11.4415 7.2749 12.6915 8.5249 12.6915 10.0499C12.6831 11.5582 11.5081 12.7749 10.0081 12.8249C10.0081 12.8166 10.0081 12.8166 9.99981 12.8166ZM9.91648 8.51657C9.07481 8.51657 8.39148 9.19991 8.39148 10.0416C8.39148 10.8666 9.03315 11.5332 9.85815 11.5666C9.86648 11.5582 9.93315 11.5582 10.0081 11.5666C10.8165 11.5249 11.4415 10.8582 11.4498 10.0416C11.4498 9.20824 10.7665 8.51657 9.91648 8.51657Z"
                        fill="#C3CAD9"
                      />
                      <path
                        d="M9.99986 18.9666C8.99986 18.9666 7.99986 18.7083 7.22486 18.1833C6.49153 17.6916 6.06653 16.9916 6.06653 16.2416C6.06653 15.4999 6.48319 14.7833 7.22486 14.2916C8.78319 13.2583 11.2249 13.2583 12.7749 14.2916C13.5082 14.7833 13.9332 15.4833 13.9332 16.2333C13.9332 16.9749 13.5165 17.6916 12.7749 18.1833C11.9999 18.6999 10.9999 18.9666 9.99986 18.9666ZM7.91653 15.3416C7.52486 15.5999 7.31653 15.9249 7.31653 16.2499C7.31653 16.5749 7.5332 16.8916 7.91653 17.1499C9.04153 17.9083 10.9499 17.9083 12.0749 17.1499C12.4665 16.8916 12.6749 16.5666 12.6749 16.2416C12.6749 15.9166 12.4582 15.5999 12.0749 15.3416C10.9582 14.5833 9.04986 14.5916 7.91653 15.3416Z"
                        fill="#C3CAD9"
                      />
                    </svg>
                    <p className="text-sm text-[#6B7A99]">
                      Users:{" "}
                      <span className="text-black">{item.users?.length}</span>
                    </p>
                  </div>
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
            <p className="text-xl font-semibold">{selectedRole.name}</p>
            <p className="text-sm text-[#6B7A99]">{selectedRole.description}</p>

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
