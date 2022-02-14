
export default function Languages({ languages }) {
    const parser = (items) => {
        console.log('here')
        console.log(items)
        if (items.length == 0) {
            return
        }
        console.log('here')
        return items[0].info.map((block, index) => {
            console.log(block)
            if ("bulleted_list_item" in block) {
                let [name, amount] = block.bulleted_list_item.split("::")
                return (
                    <div key={index} className="">
                        <p className=" text-gray-700 text-md font-semibold">{name}</p>
                        <div className="w-full bg-gray-100 h-2 mb-3">
                            <div key={index} className={` bg-green-700 h-2 w-[${amount}%]`}></div>
                        </div>
                    </div>
                )
            }

        })
    }
    return (
        <div className=" md:px-4 pb-3 bg-zinc-200 md:mx-2 rounded-md shadow-md">
            <p className=" ml-2 mb-3 mt-4 text-2xl font-semibold">Foreign Languages</p>
            <div className="">
                {parser(languages)}
            </div>
        </div>
    )
};