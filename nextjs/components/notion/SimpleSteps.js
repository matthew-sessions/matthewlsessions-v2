
export default function SimpleSteps() {

    return (
        <div id="notion" className=" mt-24 max-w-[1300px] m-auto mb-24">
            <div className=" text-center mb-3">
            <p className=" text-xl md:text-3xl font-bold text-slate-700 ">Three Steps to Create a FREE</p>
            <p className=" text-xl md:text-3xl font-extrabold text-slate-700">Notion Powered Ecommerce Site</p>
            </div>
            <div className="flex flex-wrap">
                <div className=" w-full md:w-4/12">
                    <div className="bg-slate-100 text-slate-800  shadow-lg m-4 flex items-center justify-center h-[100px] rounded-xl">
                     <div>
                         <div className="flex items-center justify-center ">
                         <img className=" w-[50px]" src="https://ewr1.vultrobjects.com/siteimages/notion.png"/>
                         </div>
                         <div>
                         <p className=" text-xl font-semibold">Setup Notion</p>
                         </div>
                     </div>
                    </div>
                </div>
                <div className="w-full md:w-4/12">
                    <div className="bg-slate-100 text-slate-800  shadow-lg m-4 flex items-center justify-center h-[100px] rounded-xl">
                     <div>
                         <div className="flex items-center justify-center ">
                         <img className=" w-[50px]" src="https://ewr1.vultrobjects.com/siteimages/stripe.png"/>
                         </div>
                         <div>
                         <p className=" text-xl font-semibold">Get Stripe API Keys</p>
                         </div>
                     </div>
                    </div>
                </div>
                <div className=" w-full md:w-4/12">
                    <div className="bg-slate-100 text-slate-800  shadow-lg m-4 flex items-center justify-center h-[100px] rounded-xl">
                     <div>
                         <div className="flex items-center justify-center ">
                         <img className=" w-[50px]" src="https://ewr1.vultrobjects.com/siteimages/deta.png"/>
                         </div>
                         <div>
                         <p className=" text-xl font-semibold">Deploy</p>
                         </div>
                     </div>
                    </div>
                </div>
            </div>
        </div>
    )
};