// import AdminLayout from "@/components/admin-facing/AdminLayout";
// import AdminNavbar from "@/components/admin-facing/AdminNavbar";
// import RoleTab from "@/components/admin-facing/RoleTab";
// import UsersTab from "@/components/admin-facing/UsersTab";
import RoleTab from "@/components/access_control/roleTab";
import UsersTab from "@/components/access_control/userTab";
import Layout from "@/components/layout";
import ClientNavbar from "@/components/layout/navbar";
import { IRole } from "@/models/index.model";
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
  const roles: IRole[] = [
    {
      id: 1,
      name: "Admin",
      description: "This role supercedes all roles",
      is_active: true,
      created_by: "Quadri",
      last_updated_by: "",
      created_at: "",
      updated_at: "",
      users: [
        {
          id: 1,
          firstname: "Razaq",
          lastname: "Adegbite",
          email: "akinpelumoyo@gmail.com",
          is_active: true,
          role_id: 1,
          created_by: "",
          last_updated_by: "",
          created_at: "",
          updated_at: "",
        },
        {
          id: 1,
          firstname: "Quadri",
          lastname: "Akinpelu",
          email: "akinpelumoyo@gmail.com",
          is_active: true,
          role_id: 1,
          created_by: "",
          last_updated_by: "",
          created_at: "",
          updated_at: "",
        },
      ],
    },
    {
      id: 2,
      name: "Designer",
      description: "This role provides services to the customer",
      is_active: true,
      created_by: "Quadri",
      last_updated_by: "",
      created_at: "",
      updated_at: "",
      users: [
        {
          id: 1,
          firstname: "Quadri",
          lastname: "Akinpelu",
          email: "akinpelumoyo@gmail.com",
          is_active: true,
          role_id: 1,
          created_by: "",
          last_updated_by: "",
          created_at: "",
          updated_at: "",
        },
      ],
    },
    {
      id: 3,
      name: "Customer",
      description: "This role is an end user",
      is_active: true,
      created_by: "Quadri",
      last_updated_by: "",
      created_at: "",
      updated_at: "",
      users: [
        {
          id: 1,
          firstname: "Quadri",
          lastname: "Akinpelu",
          email: "akinpelumoyo@gmail.com",
          is_active: true,
          role_id: 1,
          created_by: "",
          last_updated_by: "",
          created_at: "",
          updated_at: "",
        },
      ],
    },
    {
      id: 3,
      name: "Suppport",
      description: "This role is an end user",
      is_active: true,
      created_by: "Quadri",
      last_updated_by: "",
      created_at: "",
      updated_at: "",
      users: [
        {
          id: 1,
          firstname: "Quadri",
          lastname: "Akinpelu",
          email: "akinpelumoyo@gmail.com",
          is_active: true,
          role_id: 1,
          created_by: "",
          last_updated_by: "",
          created_at: "",
          updated_at: "",
        },
      ],
    },
  ];
  return (
    <Layout>
      {/* <AdminNavbar page="Access Contol" /> */}
      <ClientNavbar page="Access Control" />
      <div className="p-5">
        <Tabs my={8}>
          <div className="w-full text-white flex lg:flex-row flex-col-reverse items-center justify-between">
            <TabList className=" w-full">
              <Tab>
                <div className="flex gap-2 items-center">
                  <p className="text-sm text-black">Roles</p>
                  <div className="w-fit h-fit flex justify-center items-center p-2 rounded-full text-[#026AA2] bg-[#F0F9FF]">
                    <p className="text-sm">{roles.length}</p>
                  </div>
                </div>
              </Tab>
              <Tab>
                <div className="flex gap-2 items-center">
                  <p className="text-sm text-black">Users</p>
                  <div className="w-fit h-fit flex justify-center items-center p-2 rounded-full text-[#026AA2] bg-[#F0F9FF]">
                    <p className="text-sm">{23}</p>
                  </div>
                </div>
              </Tab>
            </TabList>
          </div>

          <TabPanels>
            <TabPanel>
              <RoleTab roles={roles} />{" "}
            </TabPanel>
            <TabPanel>
              <UsersTab />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </Layout>
  );
}
