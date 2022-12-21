
export default function Install() {
    return (
        <div className="w-full bg-logo-green">
            <div className="p-7">
                <div className="flex flex-wrap max-w-[1000px] m-auto bg-white rounded-md shadow-md shadow-white">
                    <div className="w-full md:w-6/12 text-center p-4">
                        <p className=" pb-0 text-center text-black text-4xl font-roboto font-black">Install</p>
                        <div className=" bg-logo-green select-all max-w-[260px] ml-auto mr-auto mt-6 rounded-sm border-zinc-900 border-2">
                            <p className="text-xl font-semibold text-white">pip3 install maltk</p>
                        </div>
                    </div>
                    <div className="w-full md:w-6/12 text-center p-4">
                        <p className=" pb-0 text-center text-black text-4xl font-roboto font-black">Launch</p>
                        <div className=" bg-logo-green select-all max-w-[260px] ml-auto mr-auto mt-6 rounded-sm border-zinc-900 border-2">
                            <p className="text-xl font-semibold text-white">malt</p>
                        </div>
                        <p className="text-black text-xl font-roboto font-black">or</p>
                        <div className=" bg-logo-green select-all max-w-[260px] ml-auto mr-auto rounded-sm border-zinc-900 border-2">
                            <p className="text-xl font-semibold text-white">python3 -m malt</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}