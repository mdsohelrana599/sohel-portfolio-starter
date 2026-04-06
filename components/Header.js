import Link from "next/link";
import Socials from "./Socials";

const Header = () => {
  return (
    <header className=" absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className=" container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center py-8 gap-y-3">
          <Link href='/'>
            <h1 class="text-4xl md:text-4xl ">
              <span class="font-bold text-[#f0f0f0]">SOHEL</span>
              <span class="font-normal text-accent ]">.RANA</span>
            </h1>
          </Link>

          <Socials></Socials>
        </div>
      </div>
    </header>
  );
};

export default Header;
