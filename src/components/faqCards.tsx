import { IFaq } from "@/models/index.model";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useRef } from "react";
import { BsTrashFill } from "react-icons/bs";

type FaqProps = {
  faq: IFaq;
};
export default function FaqCard({ faq }: FaqProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const toast = useToast();
  const cancelRef = useRef<HTMLButtonElement | null>(null);

  // const deleteFaq = async (id: number) => {
  //   try {
  //     const res = AdminServices.deleteFaq(id);
  //     if (res != undefined) {
  //       toast({
  //         title: "FAQ Delete",
  //         status: "success",
  //         description: "Successfully deleted a FAQ",
  //       });
  //       router.reload();
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div className="w-full bg-white h-full border-[1px] shadow-md rounded-xl p-5 flex flex-col gap-1">
      <div className="w-full flex items-center justify-between">
        <p className="font-bold text-sm">
          Question: <span className="text-xs font-normal">{faq?.question}</span>
        </p>
        <BsTrashFill className="text-xs cursor-pointer" onClick={onOpen} />
      </div>
      <p className="font-bold text-sm">
        Answer: <span className="text-xs font-normal">{faq?.answer}</span>
      </p>

      <AlertDialog
        isOpen={isOpen}
        onClose={onClose}
        leastDestructiveRef={cancelRef}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure you want to delete this Faq?
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button onClick={onClose}>Cancel</Button>
              <Button
                colorScheme="red"
                ml={3}
                onClick={() => {
                  // deleteFaq(faq.id);
                }}
              >
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </div>
  );
}
