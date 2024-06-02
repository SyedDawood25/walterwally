import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Logo from "@/assets/images/logo.png";

type MainPageLayoutType = {
  children: React.ReactNode;
};

const MainPageLayout = ({ children }: MainPageLayoutType) => {
  return (
    <main className="flex flex-col bg-[#0A100D] p-20 gap-y-12">
      <header>
        <div className="flex justify-between items-center">
          <div className="w-[150px]">
            <Image src={Logo} alt="Logo" />
          </div>
          <div>
            <UserButton />
          </div>
        </div>
      </header>

      <div>{children}</div>
    </main>
  );
};

export default MainPageLayout;
