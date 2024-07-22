// import { IRole } from "@/models/admin.models";
import { Button, useDisclosure } from "@chakra-ui/react";
// import EditRoleModal from "../utils/modals/EditRole";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  useToast,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
// import AdminServices from "@/services/Admin-services/admin.services";
import { useRef } from "react";
import EditRoleModal from "../modals/editRoleModal";
import { IRole } from "@/models/index.model";
type RoleProp = {
  role: IRole;
};
export default function RoleCard({ role }: RoleProp) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isDeleteOpen,
    onOpen: onDeleteOpen,
    onClose: onDeleteClose,
  } = useDisclosure();
  const router = useRouter();
  const toast = useToast();
  const cancelRef = useRef<HTMLButtonElement | null>(null);

  //   const deleteFaq = async (id: number) => {
  //     try {
  //       const res = AdminServices.deleteRole(id);
  //       if (res != undefined) {
  //         toast({
  //           title: "Role Delete",
  //           status: "success",
  //           description: "Successfully deleted a Role",
  //         });
  //         router.reload();
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  return (
    <div className="w-full h-full border-[#ccc]  h-fit bg-white rounded-xl shadow-md p-5 xl:p-[32px]">
      <p className="font-semibold xl:text-xl ">{role.name}</p>
      <p className="font-semibold my-4 text-sm font-semibold text-[#A1A5B7]">
        {role?.description}
      </p>

      <div className="flex items-center justify-end gap-3 mt-4">
        <button
          className="bg-black text-secondary rounded-lg text-sm w-fit h-fit flex items-center gap-2 py-1 px-2 font-semibold"
          onClick={onOpen}
        >
          Edit
        </button>
        <button
          className="bg-[#69707D20] rounded-lg flex text-sm items-center gap-2 py-1 px-2 font-semibold "
          onClick={onDeleteOpen}
        >
          Delete
        </button>
      </div>
      <EditRoleModal role={role} isOpen={isOpen} onClose={onClose} />
      <AlertDialog
        isOpen={isDeleteOpen}
        onClose={onDeleteClose}
        leastDestructiveRef={cancelRef}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure you want to delete this role?
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button onClick={onClose}>Cancel</Button>
              <Button
                colorScheme="red"
                ml={3}
                onClick={() => {
                  //   deleteFaq(role.id);
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
