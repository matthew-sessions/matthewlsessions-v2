export default function ShortCuts() {
    return (
        <div className="w-full bg-zinc-900">
            <div className="p-7">
                <div className="flex flex-wrap mt-2 max-w-[1000px] m-auto bg-white rounded-md shadow-md shadow-white">
                    <div className="justify-center text-center w-full md:w-6/12 p-6">
                        <div className="pb-2">
                        <p className=" pb-0 text-center text-black text-3xl font-roboto font-black">Shortcut Commands</p>
                        </div>
                        <div className="overflow-x-auto relative">
                        <table className="w-full text-lg text-left">
                            <thead className="text-lg text-white uppercase bg-zinc-900 ">
                                <tr>
                                    <th scope="col" className="py-3 px-6">
                                        Key
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        Description
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className=" bg-logo-green">
                                    <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap ">
                                       D
                                    </th>
                                    <td className="py-4 px-6 font-semibold">
                                        Draw a new Bounding Box
                                    </td>
                                </tr>
                                <tr className=" bg-logo-green-lite">
                                    <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap ">
                                       N
                                    </th>
                                    <td className="py-4 px-6 font-semibold">
                                        Move to the next frame
                                    </td>
                                </tr>
                                <tr className=" bg-logo-green">
                                    <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap ">
                                       B
                                    </th>
                                    <td className="py-4 px-6 font-semibold">
                                        Move back a frame
                                    </td>
                                </tr>
                                <tr className=" bg-logo-green-lite">
                                    <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap ">
                                       Delete
                                    </th>
                                    <td className="py-4 px-6 font-semibold">
                                        Double click a box and then press delete to remove the box
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>

                    <div className="items-center justify-center text-center w-full md:w-6/12">
                    <div className="pt-6 pb-2">
                        <p className=" pb-0 text-center text-black text-3xl font-roboto font-black">Demo</p>
                        </div>
                        <div className="pl-2 pr-2">
                            <iframe className="w-full h-[300px]" src="https://www.youtube.com/embed/boDstvzXJUc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
    
        </div>
    )
}