// import { IRole } from "@/models/admin.models";
// import AdminServices from "@/services/Admin-services/admin.services";
import { IRole } from "@/models/index.model";
import { Badge, Spinner, useDisclosure } from "@chakra-ui/react";

import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { BsDash } from "react-icons/bs";
import { MdAdd, MdAddCircleOutline } from "react-icons/md";
import RoleCard from "./roleCard";
import SearchBar from "../utils/SearchBar";
import RoleTable from "../utils/roleTable";
// import RoleCard from "./RoleCard";

export default function RoleTab({ roles }: { roles: IRole[] }) {
  const [searchItem, setSearchItem] = useState("");
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

  useEffect(() => {
    // getRoles();
  }, []);

  return (
    <>
      <div className="bg-white  p-5 flex flex-col gap-4 rounded-xl border-[1px] border-[#ccc] ">
        <div className="flex gap-2 items-center">
          <p className="text-sm text-black">Roles</p>
          <div className="w-fit h-fit flex justify-center items-center p-2 rounded-full text-[#026AA2] bg-[#F0F9FF]">
            <p className="text-sm">{roles.length}</p>
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
              New Role
            </button>
          </div>
        </div>
        <RoleTable currentItems={roles} />
      </div>
    </>
  );
}
