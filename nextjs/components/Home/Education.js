// import Image from 'next/image'

export default function Education({ education }) {
    const parser = (items) => {
        return items.map((block, index) => {
            return (
                <div className="" key={index}>
                    <p className=" text-sm font-light">{block.paragraph}</p>
                </div>
            )
        })
    }
    return (
        <div className=" md:px-4 pb-3 bg-zinc-200 md:mx-2 rounded-md shadow-md">
            <p className=" ml-2 mb-3 mt-4 text-2xl font-semibold">Education</p>
            <div>
                {
                    education.map((project, index) => {

                        return (
                            <div className=" p-2 mb-3 m-2" key={index}>
                                <div className="flex flex-row">
                                    < div className=" " >
                                        <img alt="meaningfull text" width={45} height={45} className=" max-w-[45px] rounded-xl" src={project.picture} />
                                    </div>
                                    <div className=" ml-2 mb-1">
                                        <p className=" text-xs font-semibold">{project.title}</p>
                                        <p className=" text-xs">{project.description}</p>
                                    </div>

                                </div>

                                {parser(project.info)}
                            </div >
                        )
                    })
                }

            </div >
        </div >
    )
};