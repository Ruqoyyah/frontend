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
import { LoginDto } from "@/models/index.model";
const inter = Inter({ subsets: ["latin"] });

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
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
  const login = async () => {
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
    let data: LoginDto = {
      email,
      password,
    };
    try {
      const res = await AdminServices.login(data);
      if (res.user.id != undefined) {
        setIsloading(false);
        localStorage.setItem("token", res.payload.token);
        CookieManager.setCookie("jwt", res.payload.token, 1);
        CookieManager.setCookie("user", JSON.stringify(res.user), 1);
        sessionStorage.setItem("User", JSON.stringify(res.user));
        toast({
          title: "Authentication",
          description: "Login Successfull",
          duration: 2000,
          status: "success",
        });
        router.push("/dashboard");
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
    <div className="home-bg flex items-center justify-center">
      <div className="w-[80%] md:w-[60%] lg:w-[40%] bg-white flex flex-col gap-3 rounded-lg p-5">
        <div className="flex items-center gap-5 w-full">
          <Image
            src={"/icons/logoPlace.svg"}
            alt="logo"
            width={200}
            height={200}
            className="w-[5%]"
          />
          <div className="w-[95%]">
            <p className="leading-24 text-xl ">Sign in to your account</p>
          </div>
        </div>

        <div className="flex flex-col gap-5 w-full">
          <div className="flex flex-col gap-2 w-full">
            <p className="leading-24  text-sm font-[400]">Email Address</p>
            <Input
              size={"lg"}
              bg={"#FFFFFF50"}
              placeholder="Username"
              value={email}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <p className="leading-24  text-sm font-[400]">Password</p>
            <div className="w-full flex items-center gap-2 border-[1px] pr-2 bg-[#FFFFFF50] border-[#cccccc50] rounded-lg">
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
          <div className="flex flex-col gap-1">
            <p
              className="leading-24 cursor-pointer text-secondary text-right  text-[14px] font-semibold"
              onClick={onForgotOpen}
            >
              Forgot Password?
            </p>
          </div>
          <button
            className="w-full py-2 rounded-lg cursor-pointer bg-black text-white font-semibold text-center "
            // disabled={disabled}
            onClick={() => {
              login();
            }}
          >
            {loading ? <Spinner /> : "Login"}
          </button>

          {/* <SignUpModal isOpen={isOpen} onClose={onClose} /> */}
        </div>
      </div>
    </div>
  );
}
