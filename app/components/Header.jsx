import Image from "next/image";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";
import MobileNav from "./MobileNav";

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
      <div className="w-[min(85%,1200px)] mx-auto py-3 flex items-center justify-between">
        <div className="left flex items-center gap-8">
          <small className="font-bold text-xl">Paisaflix</small>
          <nav className="hidden md:flex">
            <ul className="flex gap-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <Link href={link.route}>{link.text}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="right flex items-center gap-3">
          <AiOutlineSearch />

          <Image
            className="rounded-full border-[1px] border-white"
            width={28}
            height={28}
            src="https://loremflickr.com/24/24/dog"
            alt="avatar"
          ></Image>

          <p className="font-semibold hidden md:flex">Soy Paisanx</p>

          <MobileNav navLinks={navLinks} />
        </div>
      </div>
    </header>
  );
};

export default Header;
