// import AdminLayout from "@/components/admin-facing/AdminLayout";
// import AdminNavbar from "@/components/admin-facing/AdminNavbar";
// import SubscriptionTable from "@/components/admin-facing/SubscriptionTable";
// import { logoutClient } from "@/components/utils/hooks/hooks";
// import GlobalPagination from "@/components/utils/pagination";
// import { ISubscriber } from "@/models/admin.models";
// import AdminServices from "@/services/Admin-services/admin.services";
import Layout from "@/components/layout";
import GlobalPagination from "@/components/utils/globalPagination";
import UserTable from "@/components/utils/userTable";
import { IUser } from "@/models/index.model";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Select,
  Button,
  useToast,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import * as XLSX from "xlsx";

export default function UserManagement() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [users, setSubs] = useState<IUser[]>([]);
  const [pageCount, setPageCount] = useState(0);
  const [current, setCurrentItems] = useState<IUser[]>([]);
  const [itemOffset, setItemOffset] = useState<number>(0);
  const [limit, setLimit] = useState<number>(10);
  const toast = useToast();
  const router = useRouter();
  useEffect(() => {
    setPageCount(users?.length);
  }, [users]);
  const handlePageClick = (event: any) => {
    const newOffset = event.selected * limit;

    setItemOffset(newOffset);
    // getusers(newOffset);
  };
  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + limit;
    setCurrentItems(users?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(users?.length / limit));
  }, [itemOffset, users, limit]);
  useEffect(() => {
    // Fetch items from another resources.
    console.log(current, "jdicd");
  }, [current]);

  //   const getusers = async (offset: number) => {
  //     setIsLoading(true);
  //     try {
  //       const res = await AdminServices.getFilteredusers(10, offset);
  //       if (res.message === "users not found") {
  //         setIsLoading(false);
  //         toast({
  //           title: "Subscription",
  //           description: `${res.message}`,
  //           duration: 2000,
  //           status: "error",
  //         });
  //       } else {
  //         setIsLoading(false);
  //         if (offset === 0) {
  //           setSubs(res);
  //         } else {
  //           setSubs([...users, ...res]);
  //         }

  //         // onClose();
  //       }
  //     } catch (error: any) {
  //       setIsLoading(false);
  //       console.log(error);
  //       if (error.response.data.statusCode === 401) {
  //         toast({
  //           title: "Subscription",
  //           description: `${error.response.data.message}`,
  //           duration: 2000,
  //           status: "error",
  //         });
  //         // logoutClient();
  //         router.push("/admin/login");
  //         return;
  //       }
  //       toast({
  //         title: "Subscription",
  //         description: `${error.response.data.message}`,
  //         duration: 2000,
  //         status: "error",
  //       });
  //     }
  //   };
  useEffect(() => {
    // getusers(0);
  }, []);
  const exportToXLSX = () => {
    if (users.length === 0) {
      toast({
        title: "export",
        description: "There is no data to export",
        duration: 3000,
      });
      return;
    }
    const ws = XLSX.utils.aoa_to_sheet([
      ["#", "USERNAME", "EMAIL", "PHONE", "CURRENT PLAN", "NIN"],
      ...users.map((event, index) => [
        index + 1,
        `${event?.firstname} ${event?.lastname}`,
        `${event?.email}`,
        // `${event?.phone}`,
        // `${event?.subcriptions[0]?.plan?.title}`,
        // `${event?.nin}`,
      ]),
    ]);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    XLSX.writeFile(wb, "SUBSCRIBER SUMMARY");
  };
  return (
    <Layout>
      {/* <AdminNavbar page="users" /> */}
      <div className="p-5">
        <Tabs my={8} variant={"soft-rounded"} colorScheme="orange">
          <div className="w-full flex lg:flex-row flex-col-reverse items-center justify-between">
            <TabList className="lg:w-[80%] w-full">
              <Tab>All users</Tab>
            </TabList>

            <div className="lg:w-[25%] w-full flex items-center gap-2  lg:justify-end">
              <Button colorScheme={"blackAlpha"} onClick={exportToXLSX}>
                Export
              </Button>
            </div>
          </div>

          <TabPanels>
            <TabPanel>
              <UserTable currentItems={current} />
              <div className="flex my-5 justify-between items-center   w-full">
                <div className="flex items-center gap-2">
                  <p className="text-sm">
                    Showing{" "}
                    {current?.length > users?.length
                      ? users?.length
                      : users?.length}{" "}
                    out of {users?.length} users
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
                <GlobalPagination
                  onPageClick={handlePageClick}
                  pageCount={pageCount}
                />
              </div>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </Layout>
  );
}
