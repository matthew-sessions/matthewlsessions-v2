import { useEffect, useState } from "react"
import SimpleSteps from "../components/notion/SimpleSteps";
import SetupNotion from "../components/notion/SetupNotion";
import SetupStripe from "../components/notion/SetupStripe";
import DeployStep from "../components/notion/DeployStep";
import OneClickDeploy from "../components/notion/OneClickDeploy";
import Usage from "../components/notion/Usage";
import Head from 'next/head';

export default function Notion() {
  const [index, setIndex] = useState(0);
  const wordList = ['product listings', 'content', 'prices', 'orders']


  useEffect(() => {
    let interval = null;

    interval = setInterval(() => {
      if (wordList.length - 1 <= index) {
        setIndex(0)
      } else {
        setIndex(index => index + 1);
      }

    }, 1200);

    return () => clearInterval(interval);
  }, [index]);
  return (
    <div className=" w-screen">
      <Head>
        <link rel="shortcut icon" href="https://ewr1.vultrobjects.com/siteimages/notion_black_logo_icon_147102.png" />
      </Head>

      <header className="relative flex items-center justify-center h-screen mb-12 overflow-hidden bg-black">
        <div
          className="relative w-full z-30 h-full 0"
        >
          <div className="flex items-center justify-center h-full bg-slate-400 md:bg-opacity-60 bg-opacity-75">
            <div className=" text-center md:bg-slate-200 md:bg-opacity-80 p-4 rounded-xl shadow-md">
              <p className=" text-slate-800 font-extrabold text-5xl">Notion Powered Ecommerce</p>
              <p className="text-slate-800 text-5xl">manage {wordList[index]}</p>
              <p className="text-slate-800 text-5xl font-semibold">entirely on Notion</p>
              <div>
                <a href="#notion" className="mr-1">
                  <button className="mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Get Started
                  </button>
                </a>

              </div>

            </div>
          </div>
        </div>
        <video
          autoPlay
          loop
          muted
          className="videoTag absolute z-10 w-auto min-w-full min-h-full max-w-none"
        >
          <source
            src="https://ewr1.vultrobjects.com/siteimages/fastmute.mp4"
            type="video/mp4"
          />
        </video>
      </header>
      <SimpleSteps />
      <SetupNotion />
      <SetupStripe />
      <DeployStep />
      <OneClickDeploy />
      <Usage />
    </div>
  )
}