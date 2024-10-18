// import { CreateUserDto, IRole } from "@/models/admin.models";
// import AdminServices from "@/services/Admin-services/admin.services";
import { CreateSport, ISport, SignUpDto } from "@/models/index.model";
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
  sport: ISport;
};
export default function EditSportModal({ isOpen, onClose, sport }: modalProps) {
  const [sportName, setSportName] = useState<string>("");
  const [sportType, setSportType] = useState<string>("");
  const [season, setSeason] = useState<string>("");
  const [deadline, setDeadline] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const [loading, setIsloading] = useState<boolean>(false);

  const toast = useToast();
  const router = useRouter();
  const editSport = async (id: number) => {
    if (sportName === "") {
      toast({
        title: "Create",
        description: "Please Enter a sport name",
        duration: 2000,
        status: "error",
      });
      return;
    }
    if (sportType === "") {
      toast({
        title: "Create",
        description: "Please select sport type",
        duration: 2000,
        status: "error",
      });
      return;
    }
    if (deadline === "") {
      toast({
        title: "Create",
        description: "Please select registration deadline",
        duration: 2000,
        status: "error",
      });
      return;
    }
    if (year === "") {
      toast({
        title: "Create",
        description: "Please select year",
        duration: 2000,
        status: "error",
      });
      return;
    }
    if (season === "") {
      toast({
        title: "Create",
        description: "Please provide season",
        duration: 2000,
        status: "error",
      });
      return;
    }
    setIsloading(true);
    let data: CreateSport = {
      sportName,
      sportType,
      enrollmentDeadline: deadline,
      year: parseInt(year),
      season,
    };
    try {
      const res = await AdminServices.editSport(data, id);
      if (res.statusCode == "OK") {
        toast({
          title: "Create",
          description: "Sport Created",
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
        title: "Error",
        description: `${error.response.data.message}`,
        duration: 2000,
        status: "error",
      });
      console.log(error, "mav");
    }
  };

  useEffect(() => {
    if (sport) {
      setSportName(sport.sportName);
      setSportType(sport.sportType);
      setSeason(sport.season as string);
      setYear(sport.year.toString());
      setDeadline(sport.enrollmentDeadline);
    }
  }, [sport]);

  return (
    <Modal isOpen={isOpen} size={"md"} onClose={onClose}>
      <ModalOverlay />
      <ModalContent borderRadius={32}>
        <ModalHeader>
          <div className="flex flex-col gap-1 ">
            <p className="font-semibold text-[#1F2937]">Edit Sport</p>
            <p className="text-sm text-[#424550]"></p>
          </div>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <div className="flex flex-col items-center gap-5 w-full">
            <div className="flex flex-col gap-2 w-full">
              <p className="leading-24  text-sm font-[400]">Sport Name</p>
              <Input
                size={"lg"}
                placeholder="Enter sport name"
                value={sportName}
                border={"1px solid #cccccc50"}
                type="sportname"
                onChange={(e) => setSportName(e.target.value)}
              />
              <p className="leading-24  text-sm font-[400]">Season</p>
              <Input
                size={"lg"}
                placeholder="Enter Season"
                value={season}
                border={"1px solid #cccccc50"}
                type="sportname"
                onChange={(e) => setSeason(e.target.value)}
              />

              <p className="leading-24  text-sm font-[400]">Year</p>
              <Select value={year} onChange={(e) => setYear(e.target.value)}>
                <option value="">Select Year</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
                <option value="2028">2028</option>
                <option value="2029">2029</option>
              </Select>
              <p className="leading-24  text-sm font-[400]">Sport Type</p>
              <Select
                value={sportType}
                onChange={(e) => setSportType(e.target.value)}
              >
                <option value="">Select sport type</option>
                <option value="TEAM">Team</option>
                <option value="INDIVIDUAL">Individual</option>
              </Select>
              <p className="leading-24  text-sm font-[400]">
                Registration Deadline
              </p>
              <Input
                size={"lg"}
                placeholder=""
                value={deadline}
                border={"1px solid #cccccc50"}
                type="datetime-local"
                onChange={(e) => setDeadline(e.target.value)}
              />
            </div>
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
                editSport(sport.id);
              }}
            >
              {" "}
              {loading ? <Spinner /> : "Edit"}
            </button>
          </div>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
