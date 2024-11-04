// import { CreateUserDto, IRole } from "@/models/admin.models";
// import AdminServices from "@/services/Admin-services/admin.services";
import { SignUpDto } from "@/models/index.model";
import AdminServices from "@/services/Admin-services";
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
  Textarea,
  Spinner,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FaArrowRight, FaEye, FaEyeSlash } from "react-icons/fa";
import { MdArrowRight } from "react-icons/md";
type modalProps = {
  isOpen: boolean;
  onClose: () => void;
};
export default function AddCoachModal({ isOpen, onClose }: modalProps) {
  const [firstname, setFirstname] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [regno, setRegNo] = useState<string>("");
  const [loading, setIsloading] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");

  const toast = useToast();
  const router = useRouter();
  const createUser = async () => {
    if (firstname === "") {
      toast({
        title: "Create",
        description: "Please Enter a valid firstname",
        duration: 2000,
        status: "error",
      });
      return;
    }

    if (username === "") {
      toast({
        title: "Create",
        description: "Please Enter a username",
        duration: 2000,
        status: "error",
      });
      return;
    }
    if (lastname === "") {
      toast({
        title: "Create",
        description: "Please Enter a valid lastname",
        duration: 2000,
        status: "error",
      });
      return;
    }
    if (email === "") {
      toast({
        title: "Create",
        description: "Please Enter a valid email address",
        duration: 2000,
        status: "error",
      });
      return;
    }
    if (password === "") {
      toast({
        title: "Create",
        description: "Please Enter a password",
        duration: 2000,
        status: "error",
      });
      return;
    }
    setIsloading(true);
    let data: SignUpDto = {
      firstname,
      lastname,
      username,
      password,
      email,
      registnumber: regno,
    };
    try {
      const res = await AdminServices.CreateCoach(data);
      if (res.statusCode == "CREATED") {
        toast({
          title: "Create",
          description: "Student Created",
          duration: 2000,
          status: "success",
        });
        router.reload();
      } else {
        setIsloading(false);
        console.log(res);
      }
    } catch (error: any) {
      setIsloading(false);
      toast({
        title: "Create",
        description: `${error.response.data.message}`,
        duration: 2000,
        status: "error",
      });
      console.log(error, "mav");
    }
  };

  return (
    <Modal isOpen={isOpen} size={"md"} onClose={onClose}>
      <ModalOverlay />
      <ModalContent borderRadius={32}>
        <ModalHeader>
          <div className="flex flex-col gap-1 ">
            <p className="font-semibold text-[#1F2937]">Add New Coach</p>
            <p className="text-sm text-[#424550]"></p>
          </div>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <div className="flex flex-col items-center gap-5 w-full">
            <div className="flex flex-col gap-2 w-full">
              <p className="leading-24  text-sm font-[400]">Firstname</p>
              <Input
                size={"lg"}
                placeholder="Enter your firstname"
                value={firstname}
                border={"1px solid #cccccc50"}
                type="text"
                onChange={(e) => setFirstname(e.target.value)}
              />
              <p className="leading-24  text-sm font-[400]">Lastname</p>
              <Input
                size={"lg"}
                placeholder="Enter your lastname"
                value={lastname}
                border={"1px solid #cccccc50"}
                type="text"
                onChange={(e) => setLastname(e.target.value)}
              />
              <p className="leading-24  text-sm font-[400]">Username</p>
              <Input
                size={"lg"}
                placeholder="Enter your lastname"
                value={username}
                border={"1px solid #cccccc50"}
                type="text"
                onChange={(e) => setUsername(e.target.value)}
              />
              <p className="leading-24  text-sm font-[400]">Email</p>
              <Input
                size={"lg"}
                placeholder="Enter your email"
                value={email}
                border={"1px solid #cccccc50"}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <p className="leading-24  text-sm font-[400]">Reg. No</p>
              <Input
                size={"lg"}
                placeholder="Enter your email"
                value={regno}
                border={"1px solid #cccccc50"}
                type="text"
                onChange={(e) => setRegNo(e.target.value)}
              />
              <p className="leading-24  text-sm font-[400]">Password</p>
              <div className="w-full flex items-center gap-2 border-[1px] pr-2  border-[#cccccc50] rounded-lg">
                <Input
                  type={showPassword ? "text" : "password"}
                  //   className="bg-[#F8F8F8]"

                  size={"lg"}
                  value={password}
                  border={"none"}
                  placeholder="Password"
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
            {/* <div className="flex flex-col gap-1">
            <p
              className="leading-24 cursor-pointer text-secondary text-right  text-[14px] font-semibold"
              onClick={onForgotOpen}
            >
              Forgot Password?
            </p>
          </div> */}

            {/* <SignUpModal isOpen={isOpen} onClose={onClose} /> */}
          </div>
        </ModalBody>

        <ModalFooter>
          <div className="w-full flex flex-col lg:flex-row lg:justify-end items-center gap-2 items-center">
            <button
              className="py-2 w-full border-[#3E6CF44D] border text-[#082A94] font-semibold rounded-lg"
              onClick={() => {
                onClose();
              }}
            >
              {" "}
              Discard
            </button>
            <button
              className="py-2 w-full bg-[#FF9C50] flex justify-center items-center gap-2 text-white font-semibold rounded-lg"
              onClick={() => {
                createUser();
              }}
            >
              {" "}
              {loading ? <Spinner /> : "Create"}
            </button>
          </div>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
