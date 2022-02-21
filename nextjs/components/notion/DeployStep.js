
export default function DeployStep() {

    return (
        <div className=" w-full bg-slate-100">
        <div className=" max-w-[1300px] m-auto pt-12 pb-12">
           
            <div className="flex flex-wrap mt-2">
                <div className=" w-full md:w-6/12">
                <iframe className="w-full h-[300px] px-2 md:px-0 md:h-[500px]" src="https://www.youtube.com/embed/bOtPWsXo3Ag" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div className="flex items-center justify-center text-center w-full md:w-6/12">
                    <div className=" mt-3">
                    <p className=" pb-5 text-center text-slate-700 text-3xl font-semibold">Deployment Tutorial</p>
                    <p className=" text-lg text-slate-800">🚀 create a Deta.sh account</p>
                    <p className=" text-lg text-slate-800">🌐 get your domain name ready</p>
                    <p className=" text-lg text-slate-800">✔️ enter access keys on One Click Deploy</p>
                    <div className=" mt-11">
                        <a href="https://www.deta.sh/" target="_blank" rel="noreferrer"  >
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Deta.sh Account
                        </button>
                        </a>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
};