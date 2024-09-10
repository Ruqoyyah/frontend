// import { IUser } from "@/models/admin.models";
// import AdminServices from "@/services/Admin-services/admin.services";
import { IRole, IUser } from "@/models/index.model";
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
  currentItems: IRole[];
};
export default function RoleTable({ currentItems }: adUserTableProp) {
  const router = useRouter();
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState<number>(0);
  const [limit, setLimit] = useState<number>(10);
  const [current, setCurrentItems] = useState<IRole[]>([]);
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
        <Table variant="striped">
          <Thead>
            <Tr>
              <Th>ROLES</Th>
              <Th>DESCRIPTION</Th>
              <Th>USER</Th>
              <Th>DATE CREATED</Th>
            </Tr>
          </Thead>
          <Tbody>
            {current?.map((user, index: number) => (
              <Tr key={index} bg={"white"} mb={10} border={"none"}>
                <Td>
                  <div className="w-full flex items-center gap-2">
                    <div className="w-[30px] h-[30px] text-[#1553BE] flex justify-center items-center rounded-full bg-[#EFF8FF] overflow-hidden">
                      {user?.name?.charAt(0).toUpperCase()}
                    </div>
                    <p className="font-[500]">{user?.name}</p>
                  </div>
                </Td>
                <Td>
                  <p className="font-[500]">{user?.description}</p>
                </Td>
                <Td>
                  <div className="flex items-center w-full justify-center">
                    {user?.users?.map((item, index) => {
                      if (index < 5) {
                        return (
                          <div
                            className="w-[30px] text-sm flex items-center justify-center h-[30px] rounded-full ml-[-10px] bg-[#5E604D] text-white"
                            key={index}
                          >
                            {item.firstname.charAt(0)}
                            {item.lastname.charAt(0)}
                          </div>
                        );
                      }
                    })}
                  </div>
                </Td>
                {/* <Td>
                  <p className="font-[500]">{user?.created_at.split("T")[0]}</p>
                </Td> */}
                <Td>
                  <div className="w-full flex items-center justify-between">
                    <BsTrashFill
                      className="z-10 text-red-600 curso-r-pointer"
                      onClick={() => {
                        setSelectedId(user?.id);
                        onOpen();
                      }}
                    />
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="cursor-pointer"
                    >
                      <g clip-path="url(#clip0_2536_463)">
                        <path
                          d="M24.1666 12.4999C24.3855 12.2811 24.6453 12.1074 24.9313 11.989C25.2173 11.8705 25.5238 11.8096 25.8333 11.8096C26.1428 11.8096 26.4493 11.8705 26.7353 11.989C27.0213 12.1074 27.2811 12.2811 27.5 12.4999C27.7188 12.7188 27.8924 12.9786 28.0109 13.2646C28.1294 13.5506 28.1903 13.8571 28.1903 14.1666C28.1903 14.4761 28.1294 14.7826 28.0109 15.0686C27.8924 15.3546 27.7188 15.6144 27.5 15.8333L16.25 27.0833L11.6666 28.3333L12.9166 23.7499L24.1666 12.4999Z"
                          stroke="#667085"
                          stroke-width="1.66667"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_2536_463">
                          <rect
                            width="20"
                            height="20"
                            fill="white"
                            transform="translate(10 10)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="cursor-pointer"
                      onClick={() =>
                        router.push(`/access_control/role/${user.id}`)
                      }
                    >
                      <rect
                        x="0.5"
                        y="0.5"
                        width="19"
                        height="19"
                        rx="3.5"
                        stroke="#A4AAB2"
                        strokeOpacity="0.28"
                      />
                      <path
                        d="M7.79992 6.65382L8.45435 6L12.0189 9.5633C12.0763 9.6204 12.1219 9.68829 12.1531 9.76308C12.1842 9.83787 12.2002 9.91807 12.2002 9.99907C12.2002 10.0801 12.1842 10.1603 12.1531 10.2351C12.1219 10.3099 12.0763 10.3778 12.0189 10.4348L8.45435 14L7.80053 13.3462L11.1461 10L7.79992 6.65382Z"
                        fill="#667085"
                      />
                    </svg>
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
