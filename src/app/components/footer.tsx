import Link from "next/link";
import Image from "next/image";
export default function Footer() {
    return (
      <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <Link
              href="https://flowbite.com/"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <Image
                 width={50}
                 height={100}
                src="/logo.png"
                className="h-10"
                alt="Moeed blog logo"
              />
            </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              
              <li>
                <Link href="/aboutus" className="hover:underline mr-2">
                  About Us 
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline me-4 md:me-6">
                   Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm sm:text-center dark:text-gray-400 bg-black text-white p-5">
            © 2024{" "}
            <Link href="https://www.linkedin.com/in/muhammad-moeed-qadri-977568269/" className="hover:underline" target="_blank">
              Tech Blogs
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    );
  }
  