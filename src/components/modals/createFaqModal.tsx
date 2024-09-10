// import { CreateFaqDto } from "@/models/admin.models";
// import AdminServices from "@/services/Admin-services/admin.services";
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
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
type modalProps = {
  isOpen: boolean;
  onClose: () => void;
};
export default function CreatFaqModal({ isOpen, onClose }: modalProps) {
  const toast = useToast();
  const router = useRouter();
  const [question, setQuestion] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");

  //   const createFaq = async () => {
  //     let data: CreateFaqDto = {
  //       question,
  //       answer,
  //     };
  //     console.log(data);
  //     try {
  //       const res = await AdminServices.CreateFaq(data);

  //       if (res.id != undefined) {
  //         toast({
  //           title: "FAQ Creation",
  //           status: "success",
  //           description: "Successfully created a FAQ",
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
        <ModalHeader color={"black"}>Create FAQ</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <div className="flex flex-col items-center w-full gap-3">
            <div className="flex flex-col gap-1 w-full">
              <p className="font-[500] text-[#2D3748] text-sm w-auto">
                Question
              </p>

              <div className="w-full flex items-center gap-2 border-[1px] px-2 bg-[#F8F8F8] border-[#cccccc] rounded-lg">
                <Textarea
                  //   className="bg-[#F8F8F8]"
                  size={"lg"}
                  value={question}
                  border={"none"}
                  bg={"transparent"}
                  focusBorderColor="transparent"
                  outline={"none"}
                  onChange={(e) => setQuestion(e.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-col gap-1 w-full">
              <p className="font-[500] text-[#2D3748] text-sm w-auto">Answer</p>

              <div className="w-full flex items-center gap-2 border-[1px] px-2 bg-[#F8F8F8] border-[#cccccc] rounded-lg">
                <Textarea
                  //   className="bg-[#F8F8F8]"
                  size={"lg"}
                  value={answer}
                  border={"none"}
                  bg={"transparent"}
                  focusBorderColor="transparent"
                  outline={"none"}
                  onChange={(e) => setAnswer(e.target.value)}
                />
              </div>
            </div>
          </div>
        </ModalBody>

        <ModalFooter>
          <div className="w-full flex flex-col lg:flex-row lg:justify-end items-center gap-2 items-center">
            <button
              className="w-fit px-5 py-2 bg-[#5E604D] rounded-3xl text-white flex items-center gap-2"
              onClick={() => {
                // createFaq();
                onClose();
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
