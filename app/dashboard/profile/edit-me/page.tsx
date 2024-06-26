import SeekerEdit2 from "@/components/editProfile/seekerEdit2";
import Header from "@/components/header/Header";

const Page = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-[12%_88%] max-h-screen overflow-y-scroll">
      <Header>
        <h4 className="text-[#25324B] text-[25px] font-[700]">Edit Profile</h4>
        </Header>
      <SeekerEdit2 />
    </div>
  );
};

export default Page;
