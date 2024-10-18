// import { IUser } from "@/models/admin.models";
// import AdminServices from "@/services/Admin-services/admin.services";
import { ISport, IUser } from "@/models/index.model";
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
  Spinner,
} from "@chakra-ui/react";

import Image from "next/image";
import { useRouter } from "next/router";
import { useCallback, useEffect, useRef, useState } from "react";
import { BsTrashFill } from "react-icons/bs";
import GlobalPagination from "./globalPagination";
import { getFormattedDate } from "./helpers";
import { MdDelete } from "react-icons/md";
import AdminServices from "@/services/Admin-services";
// import GlobalPagination from "../utils/pagination";

type adUserTableProp = {
  currentItems: ISport[];
};
export default function GenSportTable({ currentItems }: adUserTableProp) {
  const router = useRouter();
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState<number>(0);
  const [limit, setLimit] = useState<number>(10);
  const [current, setCurrentItems] = useState<ISport[]>([]);
  const [selectedId, setSelectedId] = useState<number>(0);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef<HTMLButtonElement | null>(null);
  const [loading, setIsloading] = useState<boolean>(false);

  const toast = useToast();
  const deleteUser = async (id: number) => {
    setIsloading(true);
    try {
      const res = await AdminServices.deleteSport(id);
      if (res.statusCode === "OK") {
        setIsloading(false);
        toast({
          title: "Sport Management",
          status: "success",
          description: "Successfully deleted a sport",
        });
        router.reload();
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
              <Th>SPORT TYPE</Th>
              <Th>CREATED DATE</Th>
              <Th>REG.DEADLINE</Th>
              <Th>SEASON</Th>
              <Th>ACTION</Th>
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
                      {user?.sportName}
                    </p>
                  </div>
                </Td>
                <Td>
                  <p className="font-[500]">{user?.sportType}</p>
                </Td>
                <Td>
                  {" "}
                  <p className="font-[500]">
                    {getFormattedDate(user?.creationDate)}
                  </p>
                </Td>
                <Td>
                  {" "}
                  <p className="font-[500]">
                    {getFormattedDate(user?.enrollmentDeadline as string)}
                  </p>
                </Td>
                <Td>
                  {" "}
                  <p className="font-[500]">
                    {user?.season}, {user?.year}
                  </p>
                </Td>
                <Td>
                  <div className="flex items-center gap-2">
                    <MdDelete
                      onClick={() => {
                        setSelectedId(user.id);
                        onOpen();
                      }}
                      className="cursor-pointer"
                    />
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="cursor-pointer"
                      onClick={() => {
                        router.push({
                          pathname: `/admin/sport/${user.id}`,
                          query: {
                            sport: JSON.stringify(user),
                          },
                        });
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
              Are you sure you want to delete this sport?
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
                {loading ? <Spinner /> : "Delete"}
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </div>
  );
}
