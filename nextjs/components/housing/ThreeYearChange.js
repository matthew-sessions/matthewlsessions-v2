import React, { useState, useEffect } from "react";

import {
    Legend,
    Tooltip,
    XAxis,
    ResponsiveContainer,
    BarChart, Bar
} from "recharts";


const ThreeYearChange = ({ data }) => {
    const [rName, setRName] = useState(null);
    const [stName, setStName] = useState(null);
    const [rechartData, setRechartData] = useState([])
    useEffect(() => {
        if (data) {
            const holder = Array.from(data["twelve_months_growth"])
            setRechartData(holder.splice(-36))
            setRName(data.regionName)
            setStName(data.regionState)
        }
    }, [data])


    return (
        <div>
            <p className=" pl-4 pt-2 text-slate-50 text-lg">Last 3-year % Change</p>
            <ResponsiveContainer width="100%" height={100}>
                <BarChart width={150} height={500} data={rechartData}>
                    <XAxis dataKey="date" hide={true} />
                    <Tooltip dataKey="date" cursor={{ stroke: "#e5ffd4" }} contentStyle={{ backgroundColor: "#28303A" }} />
                    <Legend wrapperStyle={{ bottom: 5 }} />
                    <Bar dataKey={rName} fill="#b8ffb6" />
                    <Bar dataKey={stName} fill="#48e8ec" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )



};
export default ThreeYearChange;