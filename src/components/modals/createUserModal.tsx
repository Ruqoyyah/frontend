// import { CreateUserDto, IRole } from "@/models/admin.models";
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
  useToast,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
type modalProps = {
  isOpen: boolean;
  onClose: () => void;
};
export default function CreateUserModal({ isOpen, onClose }: modalProps) {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [roles, setRoles] = useState<IRole[]>([]);
  useEffect(() => {
    // getRoles();
  }, []);
  const toast = useToast();
  const router = useRouter();
  //   const getRoles = async () => {
  //     try {
  //       const res = await AdminServices.getRoles();
  //       // setPermissions(res);
  //       setRoles(res);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   const createUser = async () => {
  //     let data: CreateUserDto = {
  //       firstname: firstName,
  //       lastname: lastName,
  //       email: email,
  //       role_id: parseInt(role),
  //       password: password,
  //     };
  //     try {
  //       const res = await AdminServices.CreateUser(data);
  //       if (res.id !== undefined) {
  //         toast({
  //           title: "User Creation",
  //           description: "You have successfully created a new user",
  //           duration: 2000,
  //           status: "success",
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
        <ModalHeader color={"#1B066C"}>Create User</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <div className="flex flex-col items-center w-full gap-3">
            <div className="w-full flex flex-col items-start justify-start gap-[4px]">
              <p className="font-[500] text-[#2D3748] text-sm w-auto">
                First Name
              </p>
              <Input
                className=""
                type="text"
                placeholder="Enter First Name"
                name="firstName"
                value={firstName}
                size={"lg"}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="w-full flex flex-col items-start justify-start gap-[4px]">
              <p className="font-[500] text-[#2D3748] text-sm w-auto">
                Last Name
              </p>
              <Input
                className=""
                type="text"
                placeholder="Enter Last Name"
                name="lastName"
                value={lastName}
                size={"lg"}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <p className="font-[500] text-[#2D3748] text-sm w-auto">
                Password
              </p>

              <div className="w-full flex items-center gap-2 border-[1px] px-2 bg-[#F8F8F8] border-[#cccccc] rounded-lg">
                <Input
                  type={showPassword ? "text" : "password"}
                  //   className="bg-[#F8F8F8]"
                  size={"lg"}
                  value={password}
                  border={"none"}
                  bg={"transparent"}
                  focusBorderColor="transparent"
                  outline={"none"}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {!showPassword ? (
                  <FaEye
                    className="cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                ) : (
                  <FaEyeSlash
                    className="cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                )}
              </div>
            </div>

            <div className="w-full flex flex-col items-start justify-start gap-[4px]">
              <p className="font-[500] text-[#2D3748] text-sm w-auto">
                Email Address
              </p>

              <Input
                className=""
                type="text"
                placeholder="EnterEmail Address"
                name="email"
                value={email}
                size={"lg"}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="w-full flex flex-col items-start justify-start gap-[4px]">
              <p className="font-[500] text-[#2D3748] text-sm w-auto">Role</p>

              <Select size={"lg"} onChange={(e) => setRole(e.target.value)}>
                <option value="Please select a role">
                  Please select a role
                </option>
                {roles &&
                  roles.map((item, index) => (
                    <option value={item.id} key={index}>
                      {item.name}
                    </option>
                  ))}
              </Select>
            </div>
          </div>
        </ModalBody>

        <ModalFooter>
          <div className="w-full flex flex-col lg:flex-row lg:justify-end items-center gap-2 items-center">
            <button
              className="py-2 w-full bg-[#1B066C] text-white font-semibold rounded-lg"
              onClick={() => {
                // createUser();
              }}
            >
              {" "}
              Create
            </button>
          </div>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
