import Image from "next/image";
import { Inter } from "next/font/google";
import { Input, Spinner, useDisclosure, useToast } from "@chakra-ui/react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { LoginDto } from "@/models/auth.model";
// import AuthServices from "@/services/Auth-services/auth.service";
// import CookieManager from "@/services/cookie-manager/cookie-manager";
import { useRouter } from "next/router";
import CookieManager from "@/utils/cookiemanager";
import AdminServices from "@/services/Admin-services";
import { LoginDto, SignUpDto } from "@/models/index.model";
import ClientNavbar from "@/components/layout/navbar";
import FancyButton from "@/components/utils/fancyButton";
const inter = Inter({ subsets: ["latin"] });

export default function SignupAdmin() {
  const router = useRouter();
  const [firstname, setFirstname] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [regno, setRegNo] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [loading, setIsloading] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(true);
  const {
    isOpen: isForgotOpen,
    onOpen: onForgotOpen,
    onClose: onForgotClose,
  } = useDisclosure();
  const toast = useToast();
  const createUser = async () => {
    if (firstname === "") {
      toast({
        title: "Authentication",
        description: "Please Enter a valid firstname",
        duration: 2000,
        status: "error",
      });
      return;
    }
    if (lastname === "") {
      toast({
        title: "Authentication",
        description: "Please Enter a valid lastname",
        duration: 2000,
        status: "error",
      });
      return;
    }
    if (email === "") {
      toast({
        title: "Authentication",
        description: "Please Enter a valid email address",
        duration: 2000,
        status: "error",
      });
      return;
    }
    if (password === "") {
      toast({
        title: "Authentication",
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
      const res = await AdminServices.CreateAdminUser(data);
      if (res.statusCode == "OK") {
        const data2: LoginDto = {
          email,
          password,
        };
        const res2 = await AdminServices.login(data2);
        setIsloading(false);
        const { jwt, ...rest } = res2.data;
        localStorage.setItem("token", jwt);
        CookieManager.setCookie("jwt", jwt, 1);
        localStorage.setItem("currentUser", JSON.stringify(rest));

        toast({
          title: "Authentication",
          description: "Sign up Successfull",
          duration: 2000,
          status: "success",
        });
        router.push("/admin/dashboard");
      } else {
        setIsloading(false);
        console.log(res);
      }
    } catch (error: any) {
      setIsloading(false);
      toast({
        title: "Authentication",
        description: `${error.response.data.message}`,
        duration: 2000,
        status: "error",
      });
      console.log(error, "mav");
    }
  };
  useEffect(() => {
    if (email !== "" && password !== "") {
      setDisabled(false);
    }
  }, [email, password]);
  return (
    <div className="body flex flex-col text-white gap-5 pb-8">
      <ClientNavbar page="emptu" />
      <div className="h-[89%] flex items-center justify-center">
        <div className="w-[80%] md:w-[60%] lg:w-[40%] bg-[#23262880] flex flex-col gap-3 rounded-lg p-5">
          <div className="flex flex-col items-center gap-2 w-full">
            <p className="leading-24 text-white text-xl ">Sign Up as Admin</p>
            <p className="text-[#D6D6D670]">
              To get started, you need to sign up here.
            </p>
          </div>

          <div className="flex text-white flex-col items-center gap-5  w-full">
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
            <FancyButton
              text="Create Account"
              // disabled={disabled}
              loading={loading}
              onClick={() => {
                createUser();
              }}
            />

            {/* <SignUpModal isOpen={isOpen} onClose={onClose} /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
