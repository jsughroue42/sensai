import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';


export default function Page() {
  return (
    <main className="text-white min-h-screen bg-gradient-to-br from-black to-slate-800">
       <nav className="flex items-center justify-between p-4 border-white px-20 py-5">
       <p className="text-5xl">Sens<span className="text-lime-700 text-5xl">AI</span></p>
       <ul className="flex">
        <li className="list-none">
          <a href="#" className="no-underline mx-10">Platform</a>
        </li>
        <li className="list-none">
          <a href="#" className="no-underline mx-10">Resources</a>
        </li>
        <li className="list-none">
          <a href="#" className="no-underline mx-10">Pricing</a>
        </li>
      </ul>
      <ul className="flex">
        <li className="list-none mx-5">
          <a href="#" className="no-underline">Request a Demo</a>
        </li>
        <Link href="/login" className="flex items-center gap-5 self-start rounded-lg bg-green-700 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base">
            <span>Log in</span> 
            <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
      </ul>
        </nav>  

        <div className="text-white mt-10 pt-56 pb-56 ml-36 mr-36 border-t border-b">
      <h1 className="text-6xl">
        AI-Powered <br />
        Sales <span className="text-lime-700"> Automation </span>
      </h1>
      <p className="font-thin text-lg mt-8">
        Empowering sales teams worldwide with intelligent automation,<br />
        transforming the way businesses engage with customers and <br />
        prospects to drive revenue growth and commercial success.
      </p>
      <a
        href="#"
        className="bg-lime-700 rounded-3xl mt-10 py-3 px-6 text-lg inline-block mr-4 hover:bg-transparent hover:border-lime-700 hover:text-white duration-300 hover:border border border-transparent"
      >
        Get Started
      </a>
      <a href="#" className="text-lg inline-block"> Learn More &#10148; </a>
    </div>

    <div className="mt-40 flex justify-center items-center md:space-x-64">
      <section className="justify-center text-3xl">
        Key Insights
        <p className="justify-center mt-8 text-lg w-60">
          Empowering sales teams worldwide with intelligent automation,
          transforming the way businesses engage with customers and prospects to
          drive revenue growth and commercial success.
        </p>
      </section>
      <section className="justify-center text-3xl">
        Sensai Digital Assistant
        <p className="justify-center mt-8 text-lg w-60">
          Empowering sales teams worldwide with intelligent automation,
          transforming the way businesses engage with customers and prospects to
          drive revenue growth and commercial success.
        </p>
      </section>
      <section className="justify-center text-3xl">
        Data Analytics
        <p className="justify-center mt-8 text-lg w-60">
          Empowering sales teams worldwide with intelligent automation,
          transforming the way businesses engage with customers and prospects to
          drive revenue growth and commercial success.
        </p>
      </section>
    </div>

    <div className="mt-96 flex justify-center items-center space-x-4">
      <p className="text-center text-2xl font-thin">
        Extract Key Insights to Automate <br />Tailored Messaging with our
        <br />SensAI Digital Assistant
      </p>
    </div>
    </main>
  );
}
