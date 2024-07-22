// import AdminLayout from "@/components/admin-facing/AdminLayout";
// import AdminNavbar from "@/components/admin-facing/AdminNavbar";
// import RoleTab from "@/components/admin-facing/RoleTab";
// import UsersTab from "@/components/admin-facing/UsersTab";
import RoleTab from "@/components/access_control/roleTab";
import UsersTab from "@/components/access_control/userTab";
import Layout from "@/components/layout";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Select,
  Button,
} from "@chakra-ui/react";
export default function AccessControl() {
  return (
    <Layout>
      {/* <AdminNavbar page="Access Contol" /> */}
      <Tabs variant={"soft-rounded"} colorScheme="orange" my={8}>
        <div className="w-full text-white flex lg:flex-row flex-col-reverse items-center justify-between">
          <TabList className=" w-full">
            <Tab>Users</Tab>
            <Tab>Roles</Tab>
          </TabList>
        </div>

        <TabPanels>
          <TabPanel>
            <UsersTab />
          </TabPanel>
          <TabPanel>
            <RoleTab />{" "}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Layout>
  );
}
