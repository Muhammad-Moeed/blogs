import Link from "next/link";
import Image from "next/image";
export default function Home() {
  return (
<article className="max-w-2xl px-6 py-24 mx-auto space-y-12 dark:bg-gray-100 dark:text-gray-900">
	<div className="w-full mx-auto space-y-4 text-center">
	<h1 className="text-xs font-bold bg-blue-500 rounded-tr-full rounded-bl-full pt-10 pb-10 pl-12 pr-12 border-r-8 border-b-8 leading-tight md:text-2xl">
  The latest tech news and enhance your skills with our insightful articles
</h1>
	</div>
	<div className="dark:text-gray-800">
		<p>  Welcome to our blog! Stay updated with the latest tech news and insights that help you enhance your skills. Explore articles covering everything from trends to tutorials, all crafted to keep you ahead in the tech world.
		</p>
	</div>
	<div className="pt-12 border-t dark:border-gray-300">
		<div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
			<Image src="/moeed.png" width={100} height={100} alt="" className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-300" />
			<div className="flex flex-col">
				<h4 className="text-lg font-semibold">Muhammad Moeed</h4>
				<p className="dark:text-gray-600">As a passionate tech enthusiast and skilled web developer, Moeed shares the latest tech trends, insights, and tutorials to help you stay ahead in the digital world. Join him on this journey to enhance your skills and explore the ever-evolving world of technology.
				</p>
			</div>
		</div>
		<div className="flex justify-center pt-4 space-x-4 align-center">
			<Link rel="noopener noreferrer" href="https://github.com/Muhammad-Moeed" aria-label="GitHub" className="p-2 rounded-md dark:text-gray-800 hover:dark:text-violet-600" target="_blank">
				<svg viewBox="0 0 496 512" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-current">
					<path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
				</svg>
			</Link>
			<Link rel="noopener noreferrer" href="mailto:m.moeedq497@gmail.com" aria-label="Email" className="p-2 rounded-md dark:text-gray-800 hover:dark:text-violet-600" target="_blank">
				<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-current">
					<path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path>
				</svg>
			</Link>
		</div>
	</div>
</article>  );
}
