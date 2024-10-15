import Link from "next/link";
import Image from "next/image";
import Header from "../components/header";
import Footer  from "../components/footer";

type Data = {
  title: string;
  description: string;
  image: string;
  author:string;
  date:string;
  slug :string;
};

const blog: Data[] = [
  {
    title: "Html5 Tech",
    description:
      "HTML5 (Hypertext Markup Language 5) is a markup language...",
    image: "/html.jpg",
    author: "Muhammad Moeed",
    date: "October 10, 2024",
    slug:"html"

  },
  {
    title: "Css3 Tech",
    description:
      "CSS is the acronym of “Cascading Style Sheets”. CSS is a computer...",
    image: "/css.jpg",
    author: "Muhammad Moeed",
    date: "October 10, 2024",
    slug:"css"

  },
  {
    title: "JavaScript Tech",
    description: "JavaScript is the programming language of the web...",
    image: "/js.jpg",
    author: "Muhammad Moeed",
    date: "October 10, 2024",
    slug:"javascript"

  },
  {
    title: "Tailwind Tech",
    description:
      "Tailwind CSS is a design system implementation in pure CSS...",
    image: "/tailwend.jpeg",
    author: "Muhammad Moeed",
    date: "October 10, 2024",
    slug:"tailwind"

  },
  {
    title: "TypeScript Tech",
    description:
      "TypeScript is a free and open-source high-level programming language ...",
    image: "/typescript.jpg",
    author: "Muhammad Moeed",
    date: "October 10, 2024",
    slug:"typescript"

  },
  {
    title: "Nextjs Tech",
    description: "Background. Next.js is a React framework that enables several ...",
    image: "/nextjs.png",
    author: "Muhammad Moeed",
    date: "October 10, 2024",
    slug:"nextjs"

  },
];

export default function Content() {
  return (
    <>
      <Header />
      <div className="container mx-auto text-center py-8">
        <h1 className="text-4xl font-bold">Tech Blogs</h1>
        <p className="mt-2 text-gray-700">Learn the latest technologies</p>
      </div>
      <div className="flex flex-wrap justify-center gap-5 w-screen-lg mx-auto p-4">
        {blog.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md border border-gray-200 rounded-lg sm:w-60 w-full mb-5 h-max"
          >
            <Link href="#">
              <Image
                className="rounded-t-lg w-full sm:w-full h-[200px] sm:h-[150px]"
                src={item.image}
                width={400}
                height={300}
                alt={item.title}
              />
            </Link>
            <div className="p-5">
              <Link href="#">
                <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
                  {item.title}
                </h5>
              </Link>
              <p className="font-normal text-gray-700 mb-3">
                {item.description}
              </p>
              <div className="text-sm text-gray-500 mb-4">
                <span>By {item.author}</span> | <span>{item.date}</span>
              </div>
              <Link
                className="text-white bg-black focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
                href={`/blogs/pages/${item.slug}`}
              >
                Read more
              </Link>
            </div>
          </div>
        ))}
      </div>
      <Footer/>
    </>
  );
}
