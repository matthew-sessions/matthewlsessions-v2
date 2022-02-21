import React, { useState, useEffect } from "react";
import {
    CartesianGrid,
    Legend,
    Line,
    LineChart,
    Tooltip,
    XAxis,
    ResponsiveContainer,
    Brush,
    BarChart, Bar
} from "recharts";

const colorMap = {
    "Single Family Home": "#e5ffd4",
    "Condo": "#b8ffb6",
    "One Bedroom": "#62fbe7",
    "Two Bedroom": "#48e8ec",
    "Three Bedroom": "#20c5dd",
    "Four Bedroom": "#8493CA",
    "Five Plus Bedrooms": "#7DA7D9"
}

const HousingChart = ({ data }) => {
    const [rechartData, setRechartData] = useState([])
    const [rechartLines, setRechartLines] = useState(null)
    useEffect(() => {
        if (data) {
            const lineHolder = []
            Object.keys(data.rechart[0]).map(val => {
                if (val !== "pchange" && val !== "date") {
                    lineHolder.push(<Line key={val} dot={false} type="monotone" dataKey={val} strokeWidth={3} stroke={colorMap[val]} />)
                }
            })
            setRechartLines(lineHolder);
            const rechartHolder = data.rechart
            data["twelve_months_growth"].forEach(function (value, i) {
                rechartHolder[i]["pchange"] = value[data.regionName]
            })

            setRechartData(data.rechart)

        }
    }, [data])
    return (
        <div>
            <ResponsiveContainer width="100%" height={100}>
                <BarChart width={150} height={500} data={rechartData} syncId="date">
                    <Bar dataKey="pchange" fill="#b8ffb6" />
                </BarChart>
            </ResponsiveContainer>
            <ResponsiveContainer width='100%' height={400}>
                <LineChart
                    data={rechartData}
                    // height={500}
                    // width={500}
                    // margin={{ top: 5, right: 30, left: 20, bottom: 25 }}
                    syncId="date"
                >
                    <XAxis dataKey="date" />
                    <CartesianGrid strokeDasharray="5 5" />
                    <Tooltip cursor={{ stroke: "#e5ffd4", fill: "black" }} contentStyle={{ backgroundColor: "#28303A" }} />
                    <Legend wrapperStyle={{ bottom: 5 }} />
                    {rechartLines}
                    <Brush travellerWidth={30} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default HousingChart;