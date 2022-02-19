
import React, { useState, useEffect } from "react";
// import { Container, p, Grid, Tooltip } from '@material-ui/core';
// import HelpOutlineIcon from '@material-ui/icons/HelpOutline';


const Search = ({ id }) => {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [debouncedText, setDebouncedText] = useState(searchTerm);
    const handle = (event) => {
        setSearchTerm(event.target.value)
    }
    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedText(searchTerm)
        }, 100);
        return () => {
            clearTimeout(timerId);
        };
    }, [searchTerm]);

    useEffect(() => {
        const searchHousing = async () => {
            const res = await fetch(`http://0.0.0.0:8000/api/housing/search/${debouncedText}`)
            if (res.ok) {
                const data = await res.json();
                setData(data.results)
            }
        }
        searchHousing()
    }, [debouncedText]);
    const renderedResults = data.map((result) => {
        return (
            <div key={result.RegionID} className=" pt bg-zinc-600 mb-1 mx-12 rounded-md flex shadow-md flex-wrap">
                <div className="  w-9/12">
                    <div className=" text-center w-24">
                        <p className=" text-slate-50 mb-[-5px]">{result.RegionName}</p>
                        <p className=" text-slate-50 font-thin">{result.state}</p>
                    </div>
                </div>
                <div className=" pt-3 w-3/12">
                    <a href={`/housing/double/${id}:${result.RegionID}`} >
                        <button type="button" className="text-white bg-zinc-100 hover:bg-zinc-800 focus:ring-4 focus:ring-zinc-200 font-thin rounded-lg text-sm px-3 py-1 text-center mr-2 mb-2 dark:bg-zinc-500 dark:hover:bg-zinc-700 dark:focus:ring-zinc-800">View {result.RegionType}</button>
                    </a>
                </div>
            </div>
        )
    })

    return (
        // <Container >
        <div className=" pb-2 pt-1 w-full bg-zinc-600  rounded-md shadow-md">
            <p className=" pl-12 py-1 text-zinc-200">👇  Search for a city to compare</p>
            <div className=" px-12">
                <input className="w-full pl-4 h-10 rounded-md text-zinc-200 bg-zinc-500 shadow-md" type="text" placeholder="Search for a city" name="Search" onChange={handle} value={searchTerm} />
            </div>
            <div className=" pt-3">
                {renderedResults}
            </div>
        </div>
    )


}

export default Search;