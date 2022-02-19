// import Image from 'next/image'

export default function Experience({ history }) {
    const parser = (items) => {
        return items.map((block, index) => {
            if ("bulleted_list_item" in block) {
                return (
                    <div className="" key={index}>
                        <li className=" text-sm font-light">{block.bulleted_list_item}</li>
                    </div>
                )
            }

        })
    }
    return (
        <div className=" md:px-4 pb-3 bg-zinc-200 md:mx-2 rounded-md shadow-md">
            <p className=" ml-2 mb-3 mt-4 text-2xl font-semibold">Experience</p>
            <div>
                {
                    history.map((project, index) => {

                        return (
                            <div className=" p-2 mb-3 m-2 " key={index}>
                                <div className="flex flex-row">
                                    <div className=" ">
                                        <img alt="meaningfull text" width={45} height={45} className=" max-w-[50px] rounded-xl" src={project.picture} />
                                    </div>
                                    <div className=" ml-2">
                                        <p className=" text-lg font-semibold">{project.title}</p>
                                        <p className=" text-sm">{project.description}</p>
                                    </div>

                                </div>
                                <div className="ml-4 mt-2">
                                    {parser(project.info)}
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
};