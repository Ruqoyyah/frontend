// import { CreateFaqDto, EditRoleDto, IRole } from "@/models/admin.models";
// import AdminServices from "@/services/Admin-services/admin.services";
import { IRole } from "@/models/index.model";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  Select,
  Checkbox,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
type modalProps = {
  isOpen: boolean;
  onClose: () => void;
  role: IRole;
};
export default function EditRoleModal({ isOpen, onClose, role }: modalProps) {
  const [roleName, setRoleName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [isActive, setIsActive] = useState<boolean>(false);
  const toast = useToast();
  const router = useRouter();
  useEffect(() => {
    setRoleName(role.name);
    setDescription(role.description);
    setIsActive(role.is_active);
  }, [role]);
  //   const editRole = async (id: number) => {
  //     let data: EditRoleDto = {
  //       name: roleName,
  //       description: description,
  //       is_active: isActive,
  //     };

  //     try {
  //       const res = await AdminServices.EditRole(id, data);

  //       if (res.id != undefined) {
  //         toast({
  //           title: "Edit Role",
  //           status: "success",
  //           description: "Successfully editted role",
  //         });
  //         router.reload();
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  return (
    <Modal isOpen={isOpen} size={"md"} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader color={"#1B066C"}>Create Role</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <div className="flex flex-col items-center w-full gap-3">
            <div className="w-full flex flex-col items-start justify-start gap-[4px]">
              <p className="font-[500] text-[#2D3748] text-sm w-auto">
                Role Name
              </p>
              <Input
                className=""
                type="text"
                placeholder="Enter Role Name"
                name="roleName"
                value={roleName}
                size={"lg"}
                onChange={(e) => setRoleName(e.target.value)}
              />
            </div>
            <div className="w-full flex flex-col items-start justify-start gap-[4px]">
              <p className="font-[500] text-[#2D3748] text-sm w-auto">
                Role Description
              </p>
              <Textarea
                className=""
                placeholder="Enter Role Description"
                name="description"
                value={description}
                size={"lg"}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="w-full flex flex-col items-start justify-start gap-[4px]">
              <p className="font-[500] text-[#2D3748] text-sm w-auto">
                Activity
              </p>

              <Select
                size={"lg"}
                value={isActive ? "true" : "false"}
                onChange={(e) => {
                  if (e.target.value === "true") {
                    setIsActive(true);
                  } else {
                    setIsActive(false);
                  }
                }}
              >
                {/* <option value="Please select a role">
                  Please select activity
                </option> */}
                <option value="true">active</option>
                <option value="false">Inactive</option>
              </Select>
            </div>
          </div>
        </ModalBody>

        <ModalFooter>
          <div className="w-full flex flex-col lg:flex-row lg:justify-end items-center gap-2 items-center">
            <button
              className="py-2 w-full bg-[#1B066C] text-white font-semibold rounded-lg"
              onClick={() => {
                // editRole(role?.id);
              }}
            >
              Edit
            </button>
          </div>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
