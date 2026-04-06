import Link from "next/link";
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiTiktokLine,
  RiLinkedinLine,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className=" flex items-center gap-x-4 text-xl">
      <Link
        href={""}
        className=" hover:text-accent transition-all duration-300"
      >
        <RiYoutubeLine></RiYoutubeLine>
      </Link>

      <Link
        href={""}
        className=" hover:text-accent transition-all duration-300"
      >
        <RiFacebookLine></RiFacebookLine>
      </Link>

      <Link
        href={""}
        className=" hover:text-accent transition-all duration-300"
      >
        <RiInstagramLine></RiInstagramLine>
      </Link>

      <Link
        href={""}
        className=" hover:text-accent transition-all duration-300"
      >
        <RiTiktokLine></RiTiktokLine>
      </Link>
      <Link
        href={""}
        className=" hover:text-accent transition-all duration-300"
      >
        <RiLinkedinLine></RiLinkedinLine>
      </Link>
    </div>
  );
};

export default Socials;
