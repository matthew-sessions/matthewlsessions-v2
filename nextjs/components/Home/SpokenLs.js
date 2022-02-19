
export default function SpokenLs({ ls }) {
    return (
        <div className=" md:px-4 pb-3 bg-zinc-200 md:mx-2 rounded-md shadow-md">
            <p className=" ml-2 mb-3 mt-4 text-2xl font-semibold">Languages</p>
            <div>
                <div className="">
                    <p className=" text-gray-700 text-md font-semibold">🇲🇾 Malay (Fluent)</p>
                    <div className="w-full bg-gray-100 h-2 mb-3">
                        <div className={` bg-green-700 h-2 w-[85%]`}></div>
                    </div>
                </div>
                <div className="">
                    <p className=" text-gray-700 text-md font-semibold">🇹🇼 🇨🇳 Mandarin (中文) (Proficient)</p>
                    <div className="w-full bg-gray-100 h-2 mb-3">
                        <div className={` bg-green-700 h-2 w-[65%]`}></div>
                    </div>
                </div>
                <div className="">
                    <p className=" text-gray-700 text-md font-semibold">🇮🇩 Indonesian (Proficient)</p>
                    <div className="w-full bg-gray-100 h-2 mb-3">
                        <div className={` bg-green-700 h-2 w-[62%]`}></div>
                    </div>
                </div>
            </div>
        </div>
    )
};