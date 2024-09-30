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
import AdminServices from "@/services/Admin-services";
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
  const deleteUser = async (id: number) => {
    try {
      const res = await AdminServices.deleteStudent(id);
      if (res.statusCode == "OK") {
        toast({
          title: "Student Management",
          status: "success",
          description: "Successfully deleted a User",
        });
        router.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

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
        <Table variant="striped" size={"sm"}>
          <Thead>
            <Tr>
              <Th>NAME</Th>
              <Th>EMAIL</Th>
              <Th>ID</Th>
              <Th>SPORTS </Th>
              <Th>ACTION </Th>
            </Tr>
          </Thead>
          <Tbody>
            {current?.map((user, index: number) => (
              <Tr key={index} bg={"white"} mb={10} border={"none"}>
                <Td>
                  <div className="w-full flex items-center gap-2">
                    <div className="w-[30px] h-[30px]  flex justify-center items-center rounded-full bg-[#E5ECF6] overflow-hidden">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M8 1.5C8 1.5 8.91519 1.5 9.75176 1.85384C9.75176 1.85384 10.5594 2.19544 11.182 2.81802C11.182 2.81802 11.8046 3.4406 12.1462 4.24824C12.1462 4.24824 12.5 5.08481 12.5 6C12.5 6 12.5 6.91519 12.1462 7.75176C12.1462 7.75176 11.8046 8.55941 11.182 9.18198C11.182 9.18198 10.5594 9.80456 9.75176 10.1462C9.75176 10.1462 8.91519 10.5 8 10.5C8 10.5 7.08481 10.5 6.24824 10.1462C6.24824 10.1462 5.4406 9.80456 4.81802 9.18198C4.81802 9.18198 4.19545 8.55941 3.85384 7.75176C3.85384 7.75176 3.5 6.91519 3.5 6C3.5 6 3.5 5.08481 3.85384 4.24824C3.85384 4.24824 4.19544 3.44059 4.81802 2.81802C4.81802 2.81802 5.4406 2.19544 6.24824 1.85384C6.24824 1.85384 7.08481 1.5 8 1.5ZM8 2.5C8 2.5 6.55025 2.5 5.52513 3.52513C5.52513 3.52513 4.5 4.55025 4.5 6C4.5 6 4.5 7.44975 5.52513 8.47487C5.52513 8.47487 6.55025 9.5 8 9.5C8 9.5 9.44975 9.5 10.4749 8.47487C10.4749 8.47487 11.5 7.44975 11.5 6C11.5 6 11.5 4.55025 10.4749 3.52513C10.4749 3.52513 9.44975 2.5 8 2.5Z"
                          fill="#1C1C1C"
                        />
                        <path
                          d="M11.2503 11.3704C12.7587 12.2414 13.6295 13.75 13.6295 13.75C13.6958 13.8648 13.805 13.9486 13.933 13.983C13.9753 13.9943 14.0188 14 14.0625 14C14.0677 14 14.073 13.9999 14.0782 13.9998C14.1606 13.9972 14.2411 13.9743 14.3125 13.933C14.4672 13.8437 14.5625 13.6787 14.5625 13.5C14.5625 13.4923 14.5623 13.4846 14.562 13.4769C14.5583 13.397 14.5355 13.3193 14.4955 13.25C13.4908 11.5094 11.7503 10.5044 11.7503 10.5044C10.0098 9.49945 8 9.49945 8 9.49945C5.9902 9.49945 4.2497 10.5044 4.2497 10.5044C2.50934 11.5093 1.50462 13.2498 1.50462 13.2498C1.46075 13.3258 1.4375 13.4123 1.4375 13.5L1.43758 13.5091C1.43832 13.5497 1.44402 13.5902 1.45455 13.6295C1.48888 13.7576 1.57269 13.8668 1.68754 13.933C1.76354 13.9769 1.84975 14 1.9375 14C1.94675 14 1.95601 13.9998 1.96525 13.9992C2.13375 13.9899 2.28617 13.8961 2.37054 13.75C3.24131 12.2414 4.74974 11.3704 4.74974 11.3704C6.25817 10.4995 8 10.4995 8 10.4995C9.74183 10.4995 11.2503 11.3704 11.2503 11.3704Z"
                          fill="#1C1C1C"
                        />
                      </svg>
                    </div>
                    <p className="font-semibold text-[#FF9C50]">
                      {user?.firstname} {user?.lastname}
                    </p>
                  </div>
                </Td>
                <Td>
                  <p className="font-[500]">{user?.email}</p>
                </Td>
                <Td>
                  <p className="font-[500]">{user?.id}</p>
                </Td>
                <Td>
                  <div className="flex gap-2 flex-wrap">
                    {user?.sport.map((item, index) => (
                      <div
                        className="w-fit h-fit rounded-full px-2 py-1 text-xs bg-[#F9F5FF] text-[#6941C6]"
                        key={index}
                      >
                        <p>{item.sportName}</p>
                      </div>
                    ))}
                  </div>
                </Td>
                <Td>
                  <div className="w-full flex items-center justify-between">
                    <BsTrashFill
                      className="z-10  cursor-pointer"
                      onClick={() => {
                        setSelectedId(user?.id);
                        onOpen();
                      }}
                    />
                    {/* <svg
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
                    </svg> */}
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="cursor-pointer"
                      onClick={() => {
                        router.push(`/admin/students/${user.id}`);
                        // setModifyAlert(!modifyAlert);
                      }}
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
              Are you sure you want to delete this student profile?
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button onClick={onClose}>Cancel</Button>
              <Button
                colorScheme="red"
                ml={3}
                onClick={() => {
                  deleteUser(selectedId);
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
