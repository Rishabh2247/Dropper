import { ArrowRight } from "lucide-react";
import Link from "next/link";


export default function Home() {
  return (
    <main className="">
     <div className="flex flex-col lg:flex-row items-center bg-[#1E1919] dark:bg-slate-800">
      <div className="p-10 flex flex-col bg-[#2B2929] dark:bg-slate-800 text-white space-y-5">
        <h1 className="text-5xl font-bold">Welcome to Dropper. <br />
        <br/>
        Storing everything for you and your business needs. All in one place
        </h1>

        <p className="pb-28">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nihil optio hic at provident soluta! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur sunt omnis soluta eveniet numquam! Nihil autem aliquid, ab ex nisi cupiditate, temporibus aliquam assumenda mollitia aut reiciendis itaque, molestias laborum?</p>

        <Link 
        href="/dashboard"
        className="flex cursor-pointer bg-blue-500 p-5 w-fit" 
        >
         Try it for free!
         <ArrowRight className="ml-10" />
        </Link>
      </div>

      <div className="bg-[#1E1919] dark:bg-slate-800 h-full p-18 m-2">
        <video autoPlay loop muted className="rounded-lg">
          <source 
          src="https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/overview/lp-header-graphite200-1920x1080.mp4"
          type="video/mp4"
          />
        </video>
      </div>
     </div>

    
    </main>
  );
}
