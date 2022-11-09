import Image from "next/image";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";
import MobileNav from "./MobileNav";
import NavItem from "./NavItem";

const Header = () => {
  const navLinks = [
    {
      id: 0,
      text: "Home",
      route: "/",
    },
    {
      id: 1,
      text: "Contact Us",
      route: "/contact",
    },
    {
      id: 2,
      text: "FAQ",
      route: "/faq",
    },
    {
      id: 3,
      text: "Pricing",
      route: "/pricing",
    },
  ];

  return (
    <header className="fixed w-full backdrop-blur-md z-40">
      <div className="w-[min(85%,1200px)] mx-auto py-4 flex items-center justify-between">
        <div className="left flex items-center gap-20">
          <Link href="/">
            <small className="font-bold text-xl">Paisaflix</small>
          </Link>
          <nav className="hidden md:flex">
            <ul className="flex gap-8">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <NavItem route={link.route} text={link.text} />
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="right flex items-center gap-3 lg:gap-8">
          <AiOutlineSearch className="text-xl cursor-pointer lg:text-2xl" />
          <div className="relative w-8 aspect-square lg:w-10 cursor-pointer">
            <Image
              className="rounded-full border-[1px] border-white object-cover"
              src="https://i.pravatar.cc/45"
              alt="avatar"
              fill
            />
          </div>

          <p className="font-semibold hidden md:flex">Soy Paisanx</p>

          <MobileNav navLinks={navLinks} />
        </div>
      </div>
    </header>
  );
};

export default Header;
