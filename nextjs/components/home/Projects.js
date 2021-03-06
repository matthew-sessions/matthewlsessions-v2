// import Image from 'next/image';

import { product } from "prelude-ls"

export default function Projects({ projects }) {
    const parser = (items) => {
        return items.map((block, index) => {
            return (
                <div className="" key={index}>
                    <p className="text-zinc-800 text-sm font-light ">{block.paragraph}</p>
                </div>
            )
        })
    }
    return (
        <div className=" md:px-4 pb-3 bg-zinc-200 md:mx-2 rounded-md  shadow-md">
            <p className=" ml-2 mb-3 mt-4 text-2xl text-zinc-800 font-catamaran">Projects</p>
            <div>
                {
                    projects.map((project, index) => {
                        return (
                            <div onClick={() => window.location.replace(project.link)} className=" p-2 mb-3 m-2 hover:bg-zinc-300 hover:rounded-xl" key={index}>
                                <div className="flex flex-row">
                                    <div className=" ">
                                        <img alt="meaningfull text" width={90} height={70} className="  md:max-w-[100px] rounded-xl" src={project.picture} />
                                    </div>
                                    <div className=" ml-2">
                                        <p className="text-zinc-800  text-lg font-catamaran">{project.title}</p>
                                        <p className="text-zinc-800  hidden md:block text-sm ">{project.description}</p>
                                    </div>

                                </div>

                                {parser(project.info)}
                                <div className="rounded-md shadow m-3">
                                    <a
                                        href={product.link}
                                        className=" md:hidden flex items-center md:mt-1 justify-center px-8 py-2 border border-transparent text-base font-medium rounded-md text-gray-200 bg-zinc-800 md:px-10"
                                    >
                                        View Project
                                    </a>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
};