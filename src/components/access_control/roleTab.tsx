// import { IRole } from "@/models/admin.models";
// import AdminServices from "@/services/Admin-services/admin.services";
import { IRole } from "@/models/index.model";
import { Badge, Spinner, useDisclosure } from "@chakra-ui/react";

import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { BsDash } from "react-icons/bs";
import { MdAdd, MdAddCircleOutline } from "react-icons/md";
import RoleCard from "./roleCard";
// import RoleCard from "./RoleCard";

export default function RoleTab() {
  const [show, setShow] = useState("all");
  //   const [roles, setRoles] = useState<IRole[]>([]);

  //   const getRoles = async () => {
  //     try {
  //       const res = await AdminServices.getRoles();
  //       // setPermissions(res);
  //       setRoles(res);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  const router = useRouter();

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
    },
  ];

  useEffect(() => {
    // getRoles();
  }, []);

  return (
    <>
      <div className="bg-white  p-5 flex items-center justify-between rounded-xl border-[1px] border-[#ccc] ">
        <div className=" flex items-center  gap-4 w-[70%]">
          <div className="w-full border-dashed border-[#ccc] border-[1px] rounded-lg p-5 ">
            <p className="font-bold xl:text-[20px]">{roles?.length}</p>
            <p className="font-bold text-sm xl:text-[14px] text-[#B5B5C3]">
              Total roles
            </p>
          </div>
          <div className="w-full border-dashed border-[#ccc] border-[1px] rounded-lg p-5 ">
            <p className="font-bold xl:text-[20px]">{roles?.length}</p>
            <p className="font-bold text-sm xl:text-[14px] text-[#B5B5C3]">
              Active Now
            </p>
          </div>
          {/* <div className="w-full border-dashed border-[#ccc] border-[1px] rounded-lg p-5 ">
            <p className="font-bold xl:text-[20px]">39</p>
            <p className="font-bold text-sm xl:text-[14px] text-[#B5B5C3]">
              New Users
            </p>
          </div> */}
        </div>
        <div className="w-[30%] flex justify-end">
          <button
            className="bg-black p-3 text-secondary gap-2 rounded-lg flex items-center"
            onClick={() => router.push("/admin/create-role")}
          >
            <MdAdd />
            Add New Role
          </button>
        </div>
      </div>
      <div className="mt-5 p-[32px] bg-white rounded-[20px] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <p className="font-semibold">All Roles</p>
          {/* <Badge borderRadius={12}>100 users</Badge> */}
        </div>
        <div className="flex items-center gap-4">
          <p
            className={
              show === "all"
                ? "text-black font-semibold underline underline-offset-8 cursor-pointer "
                : " cursor-pointer text-[#00000040] font-semibold "
            }
            onClick={() => {
              setShow("all");
            }}
          >
            All Roles
          </p>
          {/* <p
            className={
              show === "default"
                ? "text-black font-semibold underline underline-offset-8 cursor-pointer "
                : " cursor-pointer text-[#00000040] font-semibold "
            }
            onClick={() => {
              setShow("default");
            }}
          >
            Default Roles
          </p>
          <p
            className={
              show === "custom"
                ? "text-black font-semibold underline underline-offset-8 cursor-pointer "
                : " cursor-pointer text-[#00000040] font-semibold "
            }
            onClick={() => {
              setShow("custom");
            }}
          >
            Custom Roles
          </p> */}
        </div>
      </div>
      {show === "all" && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mt-5">
            {roles ? (
              roles.map((item, index) => <RoleCard role={item} key={index} />)
            ) : (
              <div className=" w-full h-full flex justify-center items-center">
                <Spinner />
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
}
