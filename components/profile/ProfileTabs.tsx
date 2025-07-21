import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProfileCard from "./ProfileCard";
import ProfileForm from "./ProfileForm";
import AdminTable from "./AdminTable";

const ProfileTabs = () => {
  return (
    <div className="p-6">
      <Tabs defaultValue="account" className="max-w-[880px] w-full">
        <TabsList className="w-full">
          <TabsTrigger value="account">My Profile</TabsTrigger>
          <TabsTrigger value="admin">Manage Admins</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="md:col-span-1">
              <ProfileCard />
            </div>
            <div className="col-span-2">
              <ProfileForm />
            </div>
          </div>
        </TabsContent>
        <TabsContent value="admin">
            <AdminTable />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProfileTabs;
