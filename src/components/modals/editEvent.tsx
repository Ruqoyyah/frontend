import { CreateEvent, ISport } from "@/models/index.model";
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
  useToast,
  Spinner,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type modalProps = {
  isOpen: boolean;
  onClose: () => void;
  id: number;
};
export default function EditEventModal({ isOpen, onClose, id }: modalProps) {
  const [eventName, seteventName] = useState<string>("");
  const [eventDate, seteventDate] = useState<string>("");
  const [sportId, setSportId] = useState<string>("");
  const [loading, setIsloading] = useState<boolean>(false);
  const [sports, setSports] = useState<ISport[]>([]);
  const toast = useToast();
  const router = useRouter();
  const editEvent = async (id: number) => {
    if (eventName === "") {
      toast({
        title: "Edit",
        description: "Please Enter a event name",
        duration: 2000,
        status: "error",
      });
      return;
    }
    if (sportId === "") {
      toast({
        title: "Create",
        description: "Please select sport ",
        duration: 2000,
        status: "error",
      });
      return;
    }
    setIsloading(true);
    let data: CreateEvent = {
      sportId: parseInt(sportId),
      eventName,
      eventDate,
    };
    try {
      const res = await AdminServices.editEvent(data, id);
      if (res.statusCode == "OK") {
        toast({
          title: "Create",
          description: "Sport Edited",
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
  const getEvent = async (id: number) => {
    try {
      const res = await AdminServices.getSingleEvent(id);
      if (res.statusCode == "OK") {
        // setSports(res.data);
        setSportId(res.data.sport.id);
        seteventName(res.data.eventName);
        seteventDate(res.data.eventDate);
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
    if (id) {
      getEvent(id);
      getallSports();
    }
  }, [id]);

  return (
    <Modal isOpen={isOpen} size={"md"} onClose={onClose}>
      <ModalOverlay />
      <ModalContent borderRadius={32}>
        <ModalHeader>
          <div className="flex flex-col gap-1 ">
            <p className="font-semibold text-[#1F2937]">Edit Sport Event.</p>
            <p className="text-sm text-[#424550]"></p>
          </div>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <div className="flex flex-col items-center gap-5 w-full">
            <div className="flex flex-col gap-2 w-full">
              <p className="leading-24  text-sm font-[400]">Event Name</p>
              <Input
                size={"lg"}
                placeholder="Enter event name"
                value={eventName}
                border={"1px solid #cccccc50"}
                type="text"
                onChange={(e) => seteventName(e.target.value)}
              />
              <p className="leading-24  text-sm font-[400]">Event Date</p>
              <Input
                size={"lg"}
                placeholder=""
                value={eventDate}
                border={"1px solid #cccccc50"}
                type="datetime-local"
                onChange={(e) => seteventDate(e.target.value)}
              />
              <p className="leading-24  text-sm font-[400]">Sport </p>
              <Select
                value={sportId}
                onChange={(e) => setSportId(e.target.value)}
              >
                <option value="">Select sport</option>
                {sports.map((item, index) => (
                  <option key={index} value={item.id}>
                    {item.sportName}
                  </option>
                ))}
              </Select>
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
                editEvent(id);
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
