
export default function Usage() {

    return (
        <div className=" w-full bg-slate-400">
        <div className=" max-w-[1300px] m-auto pt-12 pb-12">
        <p className=" pb-2 text-center text-slate-800 text-3xl font-semibold">Usage Guide</p>
        <p className=" mb-2 m-auto max-w-[500px] text-slate-800 text-center">Once your store is set up you can use this video walk through to learn how to create product listings, manage content, and track orders. Enjoy!</p>
        <iframe className="w-full h-[300px]  px-2 md:px-0 md:h-[700px]" src="https://www.youtube.com/embed/bOtPWsXo3Ag" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
        </div>
    )
};