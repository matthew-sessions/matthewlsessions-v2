
export default function Skills({ skills }) {
    const parser = (items) => {
        if (items.length == 0) {
            return
        }
        return items[0].info.map((block, index) => {
            if ("bulleted_list_item" in block) {
                return (
                    <div className=" shadow-md mr-1 bg-gray-600 p-[2px] mb-1 rounded-md" key={index}>
                        <p className=" text-gray-50 text-xs font-light">{block.bulleted_list_item}</p>
                    </div>
                )
            }

        })
    }
    return (
        <div className=" md:px-4 pb-3 bg-zinc-200 md:mx-2 rounded-md shadow-md">
            <p className=" ml-2 mb-3 mt-4 text-2xl font-semibold">Skills & Frameworks</p>
            <div className="flex flex-wrap">
                {parser(skills)}
            </div>
        </div>
    )
};