// import { IUser } from "@/models/admin.models";
// import AdminServices from "@/services/Admin-services/admin.services";
import { IUser } from "@/models/index.model";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Select,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  useDisclosure,
  Button,
  useToast,
} from "@chakra-ui/react";

import Image from "next/image";
import { useRouter } from "next/router";
import { useCallback, useEffect, useRef, useState } from "react";
import { BsTrashFill } from "react-icons/bs";
import GlobalPagination from "./globalPagination";
// import GlobalPagination from "../utils/pagination";

type adUserTableProp = {
  currentItems: IUser[];
};
export default function UserTable({ currentItems }: adUserTableProp) {
  const router = useRouter();
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState<number>(0);
  const [limit, setLimit] = useState<number>(10);
  const [current, setCurrentItems] = useState<IUser[]>([]);
  const [selectedId, setSelectedId] = useState<number>(0);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef<HTMLButtonElement | null>(null);

  const toast = useToast();
  //   const deleteUser = async (id: number) => {
  //     try {
  //       const res = AdminServices.deleteSingleUser(id);
  //       if (res != undefined) {
  //         toast({
  //           title: "User Management",
  //           status: "success",
  //           description: "Successfully deleted a User",
  //         });
  //         router.reload();
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  useEffect(() => {
    setPageCount(currentItems?.length);
  }, [currentItems]);
  const handlePageClick = (event: any) => {
    const newOffset = event.selected * limit;
    setItemOffset(newOffset);
  };
  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + limit;
    setCurrentItems(currentItems?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(currentItems?.length / limit));
  }, [itemOffset, currentItems, limit]);

  return (
    <div className="">
      <TableContainer>
        <Table variant="striped" colorScheme="orange">
          <Thead>
            <Tr>
              <Th>NAME</Th>
              <Th>EMAIL</Th>
              <Th>ROLE</Th>
              <Th>DATE CREATED</Th>
            </Tr>
          </Thead>
          <Tbody>
            {current?.map((user, index: number) => (
              <Tr key={index} bg={"white"} mb={10} border={"none"}>
                <Td>
                  <div className="w-full flex items-center gap-2">
                    <div className="w-[30px] h-[30px] text-secondary flex justify-center items-center rounded-full bg-black overflow-hidden">
                      {user?.firstname?.charAt(0).toUpperCase()}
                    </div>
                    <p className="font-[500]">
                      {user?.firstname} {user?.lastname}
                    </p>
                  </div>
                </Td>
                <Td>
                  <p className="font-[500]">{user?.email}</p>
                </Td>
                <Td>
                  <p className="font-[500]">{user?.role.name}</p>
                </Td>
                <Td>
                  <p className="font-[500]">{user?.created_at.split("T")[0]}</p>
                </Td>
                <Td>
                  <div className="w-full">
                    <BsTrashFill
                      className="z-10 text-red-600 curso-r-pointer"
                      onClick={() => {
                        setSelectedId(user?.id);
                        onOpen();
                      }}
                    />
                  </div>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      {/* <div className="flex my-5 justify-between items-center   w-full">
        <div className="flex items-center gap-2">
          <p className="text-sm">
            Showing{" "}
            {current?.length > currentItems?.length
              ? currentItems?.length
              : currentItems?.length}{" "}
            out of {currentItems?.length} items
          </p>

          <Select
            w={100}
            value={limit}
            // size={"xs"}
            onChange={(e) => setLimit(parseInt(e.target.value))}
          >
            <option value={"10"}>10</option>
            <option value={"50"}>50</option>
            <option value={"70"}>70</option>
            <option value={"100"}>100</option>
          </Select>
        </div>
        <GlobalPagination onPageClick={handlePageClick} pageCount={pageCount} />
      </div> */}
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
                  //   deleteUser(selectedId);
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
