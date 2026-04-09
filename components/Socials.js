import Link from "next/link";
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiTiktokLine,
  RiLinkedinLine,
  RiGithubLine,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className=" flex items-center  mr-5 gap-x-3 text-2xl">
      <Link
        href={"https://www.youtube.com/@MdSohel-599"}
        target="_blank"
        className=" hover:text-accent  transition-all duration-300"
      >
        <RiYoutubeLine></RiYoutubeLine>
      </Link>

      <Link
        href={"https://www.facebook.com/sohel700599"}
        target="_blank"
        className=" hover:text-accent transition-all duration-300"
      >
        <RiFacebookLine></RiFacebookLine>
      </Link>

      <Link
        href={"https://www.instagram.com/sohel700599"}
        target="_blank"
        className=" hover:text-accent transition-all duration-300"
      >
        <RiInstagramLine></RiInstagramLine>
      </Link>

      <Link
        href={"https://www.tiktok.com/@sohel700599"}
        target="_blank"
        className=" hover:text-accent transition-all duration-300"
      >
        <RiTiktokLine></RiTiktokLine>
      </Link>

      <Link
        href={"https://www.linkedin.com/in/md-sohel-rana-s599"}
        target="_blank"
        className=" hover:text-accent transition-all duration-300"
      >
        <RiLinkedinLine></RiLinkedinLine>
      </Link>

      <Link
        href={"https://github.com/mdsohelrana599"}
        target="_blank"
        className=" hover:text-accent transition-all duration-300"
      >
        <RiGithubLine></RiGithubLine>
      </Link>
    </div>
  );
};

export default Socials;
