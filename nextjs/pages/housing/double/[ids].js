import { useRouter } from "next/router";
import { useEffect, useState } from 'react';
import HousingChart from '../../../components/housing/HousingChart';
import ThreeYearChange from '../../../components/housing/ThreeYearChange';
import StatCard from "../../../components/housing/StatCard";
import Search from "../../../components/housing/Search";

const fetchCart = async (setData, id) => {
    const response = await fetch(`http://0.0.0.0:8000/api/housing/deepsearch/${id}`);
    console.log(response.status)
    if (response.status === 201) {
        const d = await response.json();
        setData(d)
    } else {
        // console.log(response)
        setData("test")
    }
};

const DoubleLocation = () => {
    const [data, setData] = useState(null)
    const [dataTwo, setDataTwo] = useState(null)
    const router = useRouter();
    const ids = router.query.ids;
    let id = null;
    let idTwo = null;
    let location = null;
    let type = null;
    let state = null;
    let locationTwo = null;
    let typeTwo = null;
    let stateTwo = null;
    useEffect(() => {
        if (ids) {
            id = ids.split(":")[0]
            idTwo = ids.split(":")[1]
            fetchCart(setData, id)
            fetchCart(setDataTwo, idTwo)
        }
    }, [ids])
    if (data) {
        location = data.regionName;
        state = data.regionState;
        type = data.regionType;
        id = data["_id"];
    }
    if (dataTwo) {
        locationTwo = dataTwo.regionName;
        stateTwo = dataTwo.regionState;
        typeTwo = dataTwo.regionType;
        idTwo = dataTwo["_id"];
    }
    return (
        <div className=" pb-9 h-full bg-zinc-700">
            <div className=" bg-zinc-600 h-16 shadow-lg pt-4 pl-4 font-semibold text-xl"><p className=" italic text-slate-50">Data From Zillow</p></div>
            <div className="max-w-[1500px] m-auto ">
                <div className="flex flex-wrap m-auto mt-5 mb-5 ">
                    <div className=" px-2 pb-3 w-full  md:w-6/12 ">
                        <div className="shadow-lg mx-2 pb-4 mb-2 rounded-md bg-zinc-600 pl-7 pt-2 flex flex-wrap">
                            <div className=" w-10/12">
                                <p className=" text-xl text-slate-50">{locationTwo}</p>
                                <p className=" text-md font-thin text-slate-50">Region Type: {typeTwo} located in {stateTwo}</p>
                            </div>
                            <div className=" text-red-400">
                                <a href={`/housing/${id}`}>
                                    <p className=" shadow-md px-2 rounded-md hover:bg-zinc-700">remove</p>
                                </a>
                            </div>
                        </div>
                        <div className="bg-zinc-600 rounded-md mx-2 shadow-lg">
                            <HousingChart data={dataTwo} />
                        </div>
                        <div className=" mt-2 mx-2 bg-zinc-600 rounded-md shadow-lg">
                            <ThreeYearChange data={dataTwo} />
                        </div>
                        <div className="flex flex-wrap m-auto mt-5 mb-5">
                            <div className=" w-full md:w-4/12 mb-3">
                                <StatCard data={dataTwo} focusRegion="recession_drop" focusState="recession_drop_st" title="Recession Impact" info="Indicates the percentage change from the highest property value right before the 2007-2008 housing crisis to the lowest value before the price started to recover." />
                            </div>
                            <div className=" w-full md:w-4/12 mb-3">
                                <StatCard data={dataTwo} info="Indicates the percentage change from the highest property value right before the 2007-2008 housing crisis to the current property value." focusRegion="recession_high_to_recovery" focusState="recession_high_to_recovery_st" title="Recession Recovery Full" />
                            </div>
                            <div className="w-full md:w-4/12 mb-3">
                                <StatCard info="Indicates the percentage change from the lowest property value after the 2007-2008 housing crisis to the current property value." data={data} focusRegion="recession_recovery" focusState="recession_recovery_st" title="Recession Recovery High" />
                            </div>
                        </div>
                    </div>
                    <div className=" px-2 pb-3 w-full  md:w-6/12 ">
                        <div className="shadow-lg mx-2 pb-4 mb-2 rounded-md bg-zinc-600 pl-7 pt-2 flex flex-wrap">
                            <div className=" w-10/12">
                                <p className=" text-xl text-slate-50">{location}</p>
                                <p className=" text-md font-thin text-slate-50">Region Type: {type} located in {state}</p>
                            </div>
                            <div className=" text-red-400">
                                <a href={`/housing/${idTwo}`}>
                                    <p className=" shadow-md px-2 rounded-md hover:bg-zinc-700">remove</p>
                                </a>
                            </div>
                        </div>
                        <div className="bg-zinc-600 rounded-md mx-2 shadow-lg">
                            <HousingChart data={data} />
                        </div>
                        <div className=" mt-2 mx-2 bg-zinc-600 rounded-md shadow-lg">
                            <ThreeYearChange data={data} />
                        </div>
                        <div className="flex flex-wrap m-auto mt-5 mb-5">
                            <div className=" w-full md:w-4/12 mb-3">
                                <StatCard data={data} focusRegion="recession_drop" focusState="recession_drop_st" title="Recession Impact" info="Indicates the percentage change from the highest property value right before the 2007-2008 housing crisis to the lowest value before the price started to recover." />
                            </div>
                            <div className=" w-full md:w-4/12 mb-3">
                                <StatCard data={data} info="Indicates the percentage change from the highest property value right before the 2007-2008 housing crisis to the current property value." focusRegion="recession_high_to_recovery" focusState="recession_high_to_recovery_st" title="Recession Recovery Full" />
                            </div>
                            <div className="w-full md:w-4/12 mb-3">
                                <StatCard info="Indicates the percentage change from the lowest property value after the 2007-2008 housing crisis to the current property value." data={data} focusRegion="recession_recovery" focusState="recession_recovery_st" title="Recession Recovery High" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default DoubleLocation;