
export default function SetupStripe() {

    return (
        <div id="notion" className=" w-full ">
        <div className=" max-w-[1300px] m-auto pt-12  pb-12">
           
            <div className="flex flex-wrap md:flex-row-reverse mt-2">
                <div className=" w-full md:w-6/12">
                <iframe className="w-full h-[300px] md:h-[500px]" src="https://www.youtube.com/embed/bOtPWsXo3Ag" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div className="flex items-center justify-center text-center w-full md:w-6/12">
                    <div className="">
                    <p className="text-slate-800 pb-5 text-center text-slate-800 text-3xl font-semibold mt-10">Stripe Setup Tutorial</p>
                    <p className="text-slate-800 text-lg">🔑 go to the API keys tab</p>
                    <p className="text-slate-800 text-lg">💰 navigate to your Stripe Dashboard</p>
                    <p className="text-slate-800 text-lg">✋ make sure you are not on the test data setting</p>
                    <p className="text-slate-800 text-lg">🔓 copy the Secret Key</p>
                    <div className=" mt-11">
                        <a href="https://dashboard.stripe.com/apikeys" target="_blank" rel="noreferrer"  >
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Stripe API Keys
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