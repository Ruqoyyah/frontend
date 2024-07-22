// import { ISubscriber } from "@/models/admin.models";
// import { IClient } from "@/models/client.model";
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
} from "@chakra-ui/react";

type StaffTableProps = {
  currentItems: IUser[];
};

export default function UserTable({ currentItems }: StaffTableProps) {
  return (
    <div className="">
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>USERNAME</Th>
              <Th>EMAIL</Th>
              <Th>PHONE</Th>

              <Th>PLAN</Th>
            </Tr>
          </Thead>
          <Tbody>
            {currentItems?.map((user, index: number) => {
              return (
                <Tr key={index}>
                  <Td>
                    <div className="w-full flex items-center gap-2">
                      <div className="w-[30px] h-[30px] border-[2px] text-white flex justify-center items-center border-white rounded-full bg-[#1B066C] overflow-hidden">
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
                    <p className="font-[500]">Designer</p>
                  </Td>
                  <Td>
                    <p className="font-[500]"></p>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
}
