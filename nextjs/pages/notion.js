import { useEffect, useState } from "react"
import SimpleSteps from "../components/notion/SimpleSteps";
import SetupNotion from "../components/notion/SetupNotion";
import SetupStripe from "../components/notion/SetupStripe";
import DeployStep from "../components/notion/DeployStep";
import OneClickDeploy from "../components/notion/OneClickDeploy";
import Usage from "../components/notion/Usage";

export default function Notion() {
    const [index, setIndex] = useState(0);
    const wordList = ['product listings','content','prices', 'orders']
  

    useEffect(() => {
      let interval = null;
  
        interval = setInterval(() => {
          if(wordList.length - 1 <= index){
              setIndex(0)
          }else{
            setIndex(index => index + 1);
          }
          
        }, 1200);
      
      return () => clearInterval(interval);
    }, [ index]);
    return (
        <div className=" w-screen">
            <div className=" max-h-[800px] h-screen bg-cover bg-center bg-fixed bg-no-repeat bg-[url('https://i1.wp.com/www.swipetips.com/wp-content/uploads/2021/10/image-128.png?resize=768%2C427&ssl=1')]">
                <div className="flex items-center justify-center h-full bg-slate-400 bg-opacity-60">
                    <div className=" text-center ">
                        <p className=" text-slate-800 font-extrabold text-5xl">Notion Powered Ecommerce</p>
                        <p className="text-slate-800 text-5xl">manage {wordList[index]}</p>
                        <p className="text-slate-800 text-5xl font-semibold">entirely on Notion</p>
                        <a href="#notion" >
                        <button className="mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Get Started
                        </button>
                        </a>
                    </div>
                </div>
            </div>
            <SimpleSteps/>
            <SetupNotion/>
            <SetupStripe />
            <DeployStep/>
            <OneClickDeploy />
            <Usage />
        </div>
    )
}