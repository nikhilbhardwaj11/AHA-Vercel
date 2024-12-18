import UserSideBar from "@/components/MyAccount/UserSideBar";

export default function SettingsLayout({ children }) {
  return (
    <div className="bg-gray9 lg:bg-mobileBG">
      <div className="flex items-start  max-w-[1446px] px-5 gap-[38px] my-0 mx-auto py-[22px] lg:flex-col lg:px-0 lg:pt-0 lg:gap-[24px]">
        <UserSideBar />
        {children}
      </div>
    </div>
  );
}
