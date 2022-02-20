
import React from "react";
// import { Container, p, Grid, Tooltip } from '@material-ui/core';
// import HelpOutlineIcon from '@material-ui/icons/HelpOutline';


const StatCard = ({ data, info, focusRegion, focusState, title }) => {
    if (data) {
        const region = data[focusRegion];
        const state = data[focusState];
        let color = "text-lg font-semibold text-red-400";
        if (region >= state) {
            color = "text-lg font-semibold text-emerald-200"
        }
        return (
            // <Container >
            <div className=" bg-zinc-600 mx-2 rounded-md shadow-md">
                <div className=" w-full relative flex flex-row items-center group pt-2 ">
                    <div className=" ml-1">
                        <svg className=" relative w-5 h-5 text-zinc-50 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path className="" fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                        </svg>
                        <div className="absolute w-full bottom-0  flex-col items-center hidden mb-6 group-hover:block">
                            <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-zinc-700 shadow-lg">{info}</span>
                            <div className="w-3 h-3 -mt-2 rotate-45 bg-zinc-50"></div>
                        </div>
                    </div>
                    <div className=" w-full">
                        <p className="  text-center text-zinc-50 pl-1 ">{title}</p>

                    </div>

                </div>
                <div className="flex flex-row pb-2">
                    <div className=" m-auto text-center">
                        <p className={color}>{region}</p>
                        <p className=" text-slate-50">Region</p>
                    </div>
                    <div className=" m-auto text-center">
                        <p className=" text-lg font-semibold text-emerald-200">{state}</p>
                        <p className=" text-slate-50">State</p>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div></div>
        )
    }

}

export default StatCard;