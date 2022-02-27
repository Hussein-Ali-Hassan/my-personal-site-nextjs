import { useRouter } from "next/router";
import Link from "next/link";

export default function Nav() {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <nav className="flex items-center lg:items-start">
      <Link href="/" passHref>
        <img
          src="/me/husseinhassan.JPG"
          alt="Image of Hussein Hassan"
          className="mr-4 h-[60px] w-[60px] cursor-pointer rounded-full object-cover md:mr-12 md:h-[75px] md:w-[75px]"
        />
      </Link>
      <div className="flex flex-col">
        <Link href="/" passHref>
          <h1 className="cursor-pointer text-xl font-bold leading-none text-black md:font-extrabold lg:text-3xl lg:leading-tight">
            Hussein Hassan
          </h1>
        </Link>
        <ul className="mt-4 flex space-x-7 text-sm uppercase tracking-wide md:text-xs">
          <Link href="/services" passHref>
            <li
              className={`${
                pathname === "/services"
                  ? "text-black underline"
                  : "text-gray-500"
              } cursor-pointer font-semibold hover:text-black`}
            >
              Services
            </li>
          </Link>
          <Link href="/projects" passHref>
            <li
              className={`${
                pathname === "/projects"
                  ? "text-black underline"
                  : "text-gray-500"
              } cursor-pointer font-semibold hover:text-black`}
            >
              Projects
            </li>
          </Link>
          <Link href="/contact" passHref>
            <li
              className={`${
                pathname === "/contact"
                  ? "text-black underline"
                  : "text-gray-500"
              } cursor-pointer font-semibold hover:text-black`}
            >
              Contact
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}
