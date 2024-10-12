import Link from "next/link";
import Image from "next/image";

export default function Blogs() {
    return (
        <>
            <div className="flex flex-wrap justify-center gap-5 w-screen-lg mx-auto p-4"> {/* Added padding and max width for responsiveness */}
                {/* Blog Card 1 */}
                <div className="bg-white shadow-md border border-gray-200 rounded-lg sm:w-60 w-full mb-5 h-max"> 
                    <Link href="#">
                        <Image 
                            className="rounded-t-lg w-full" 
                            src="/html.jpg" 
                            width={400} 
                            height={400} 
                            alt="Noteworthy technology acquisitions 2021"
                        />
                    </Link>
                    <div className="p-5">
                        <Link href="#">
                            <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">Html5 Tech</h5>
                        </Link>
                        <p className="font-normal text-gray-700 mb-3">HTML5 (Hypertext Markup Language 5) is a markup language... </p>
                        <Link 
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" 
                            href="#"
                        >
                            Read more
                        </Link>
                    </div>
                </div>

                {/* Blog Card 2 */}
                <div className="bg-white shadow-md border border-gray-200 rounded-lg mb-5 sm:w-60 w-full h-max"> 
                    <Link href="#">
                        <Image 
                            className="rounded-t-lg w-full" 
                            src="/css.jpg" 
                            width={400} 
                            height={400} 
                            alt="Noteworthy technology acquisitions 2021"
                        />
                    </Link>
                    <div className="p-5">
                        <Link href="#">
                            <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">Css3 Tech</h5>
                        </Link>
                        <p className="font-normal text-gray-700 mb-3">CSS is the acronym of “Cascading Style Sheets”. CSS is a computer... </p>
                        <Link 
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" 
                            href="#"
                        >
                            Read more
                        </Link>
                    </div>
                </div>

                {/* Blog Card 3 */}
                <div className="bg-white shadow-md border border-gray-200 rounded-lg mb-5 sm:w-60 w-full h-max"> 
                    <Link href="#">
                        <Image 
                            className="rounded-t-lg w-full h-[160px]" 
                            src="/js.jpg" 
                            width={400} 
                            height={400} 
                            alt="Noteworthy technology acquisitions 2021"
                        />
                    </Link>
                    <div className="p-5">
                        <Link href="#">
                            <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">JavaScript Tech</h5>
                        </Link>
                        <p className="font-normal text-gray-700 mb-3">JavaScript is a scripting or programming language that allows you to implement...</p>
                        <Link 
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" 
                            href="#"
                        >
                            Read more
                        </Link>
                    </div>
                </div>
            </div>

            {/* Second Row */}
            <div className="flex flex-wrap justify-center gap-5 w-screen-lg mx-auto p-4"> {/* Container for the cards */}
                {/* Blog Card 1 */}
                <div className="bg-white shadow-md border border-gray-200 rounded-lg sm:w-60 w-full mb-5 h-max"> 
                    <Link href="#">
                        <Image 
                            className="rounded-t-lg w-full" 
                            src="/html.jpg" 
                            width={400} 
                            height={400} 
                            alt="Html5 Tech"
                        />
                    </Link>
                    <div className="p-5">
                        <Link href="#">
                            <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">Html5 Tech</h5>
                        </Link>
                        <p className="font-normal text-gray-700 mb-3">HTML5 (Hypertext Markup Language 5) is a markup language... </p>
                        <Link 
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" 
                            href="#"
                        >
                            Read more
                        </Link>
                    </div>
                </div>

                {/* Blog Card 2 */}
                <div className="bg-white shadow-md border border-gray-200 rounded-lg sm:w-60 w-full mb-5 h-max"> 
                    <Link href="#">
                        <Image 
                            className="rounded-t-lg w-full" 
                            src="/css.jpg" 
                            width={400} 
                            height={400} 
                            alt="Css3 Tech"
                        />
                    </Link>
                    <div className="p-5">
                        <Link href="#">
                            <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">Css3 Tech</h5>
                        </Link>
                        <p className="font-normal text-gray-700 mb-3">CSS is the acronym of “Cascading Style Sheets”. CSS is a computer... </p>
                        <Link 
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" 
                            href="#"
                        >
                            Read more
                        </Link>
                    </div>
                </div>

                {/* Blog Card 3 */}
                <div className="bg-white shadow-md border border-gray-200 rounded-lg sm:w-60 w-full mb-5 h-max"> 
                    <Link href="#">
                        <Image 
                            className="rounded-t-lg w-full h-[160px]" 
                            src="/js.jpg" 
                            width={400} 
                            height={400} 
                            alt="JavaScript Tech"
                        />
                    </Link>
                    <div className="p-5">
                        <Link href="#">
                            <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">JavaScript Tech</h5>
                        </Link>
                        <p className="font-normal text-gray-700 mb-3">JavaScript is a scripting or programming language that allows you to implement...</p>
                        <Link 
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" 
                            href="#"
                        >
                            Read more
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
