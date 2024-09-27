// import { CreateUserDto, IRole } from "@/models/admin.models";
// import AdminServices from "@/services/Admin-services/admin.services";
import { IRole, ISport, IUser } from "@/models/index.model";
import AdminServices from "@/services/Admin-services";
import StudentServices from "@/services/Student-servcices";
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
  student: IUser;
  sportId: number;
};
export default function ModifyEnrollModal({
  isOpen,
  onClose,
  student,
  sportId,
}: modalProps) {
  const [firstName, setFirstName] = useState<string>("");
  const [sports, setSports] = useState<ISport[]>([]);
  const [sport, setSport] = useState<number>();
  const [loading, setIsloading] = useState<boolean>(false);

  const [roles, setRoles] = useState<any[]>([{ id: 1, name: "basketball" }]);
  useEffect(() => {
    // getRoles();
  }, []);
  const toast = useToast();
  const router = useRouter();

  const getallSports = async () => {
    try {
      const res = await AdminServices.getAllSports();
      if (res.statusCode == "OK") {
        setSports(res.data);
      } else {
        // setIsloading(false);
        console.log(res);
      }
    } catch (error: any) {
      // setIsloading(false);
      toast({
        title: "Error",
        description: `${error.response.data.message}`,
        duration: 2000,
        status: "error",
      });
      console.log(error, "mav");
    }
  };
  useEffect(() => {
    getallSports();
    setSport(sportId);
  }, []);

  const enroll = async (userId: number, sportId: number) => {
    setIsloading(true);
    try {
      const res = await StudentServices.ModifyUserSport(userId, sportId);
      if (res.statusCode === "OK") {
        setIsloading(false);

        toast({
          title: "Enroll",
          description: "You have successfully enrolled",
          duration: 2000,
          status: "success",
        });
        router.reload();
      }
    } catch (error: any) {
      setIsloading(false);

      console.log(error);
      toast({
        title: "Enroll",
        description: `${error.response.data.message}`,
        duration: 2000,
        status: "error",
      });
    }
  };
  return (
    <Modal isOpen={isOpen} size={"md"} onClose={onClose}>
      <ModalOverlay />
      <ModalContent borderRadius={32}>
        <ModalHeader>
          <div className="flex flex-col gap-1 ">
            <p className="font-semibold text-[#1F2937]">
              Change the sport you are enrolled in
            </p>
            {/* <p className="text-sm text-[#424550]">
              Your request will be sent out for approval.
            </p> */}
          </div>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <div className="flex flex-col items-center w-full gap-3">
            <div className="w-full flex flex-col items-start justify-start gap-[4px]">
              <p className="font-[500] text-[#2D3748] text-sm w-auto">Sport</p>

              <Select
                size={"lg"}
                onChange={(e) => setSport(parseInt(e.target.value))}
                value={sportId}
              >
                <option value="">Please select a sport</option>
                {sports &&
                  sports.map((item, index) => (
                    <option value={item.id} key={index}>
                      {item.sportName}
                    </option>
                  ))}
              </Select>
            </div>
            {/* <div className="w-full flex flex-col items-start justify-start gap-[4px]">
              <p className="font-[500] text-[#2D3748] text-sm w-auto">
                Purpose
              </p>
              <Textarea
                className=""
                placeholder="Purpose"
                name="purpose"
                value={firstName}
                size={"lg"}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div> */}
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
                enroll(student.id, sport as number);
              }}
            >
              {loading ? <Spinner /> : "Enroll"}
            </button>
          </div>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
