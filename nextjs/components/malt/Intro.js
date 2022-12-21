
export default function Intro() {
    return (
        <div className="w-full bg-zinc-900">
            <div className="p-7">
                <div className="flex flex-wrap mt-2 max-w-[1000px] m-auto bg-white rounded-md shadow-md shadow-white">
                    <div className=" w-full md:w-6/12">
                        <div className="flex items-center justify-center text-center w-full">
                            <img alt="meaningfull text" className=" md:max-w-[500px] rounded-xl" src="https://ewr1.vultrobjects.com/siteimages/maltlogolite.png" />
                        </div>
                    </div>
                    <div className="flex items-center justify-center text-center w-full md:w-6/12 p-3">
                        <div className=" mt-3">
                            <p className=" pb-0 text-center text-black text-5xl font-roboto font-black">Model Assisted</p>
                            <p className=" pb-0 text-center text-black text-5xl font-roboto font-black">Labeling Toolkit</p>
                            <p className=" text-xl text-black font-roboto pt-4">Malt empowers hackers to create labeled object detection datasets fast! You can quickly navigate through a video to find objects to label, and most impressively you can use a pre-trained TflowLite model to automatically place a bounding box around images!</p>
                           
                        </div>
                    </div>
                </div>
            </div>
    
        </div>
    )
}