// import React from 'react'
// import { Card } from '../ui/card'

import { TrendingDown, TrendingUp } from "lucide-react";
const CardAdmin = () => {
    return (
        <>
            <Card
                title="Total Revenue"
                value="$120,054.24"
                pillText="2.75%"
                trend="up"
                period="From Jan 1st - Jul 31st"

            />
            <Card
                title="Students"
                value="110"
                pillText="1.01%"
                trend="up"
                period="From Jan 1st - Jul 31st"
            />
            <Card
                title="Teachers"
                value="11"
                pillText="1.01%"
                trend="down"
                period="From Jan 1st - Jul 31st"
            />
            <Card
                title="Courses"
                value="2350"
                pillText="1.01%"
                trend="up"
                period="From Jan 1st - Jul 31st"

            />
        </>
    )
}

export default CardAdmin

const Card = ({ title, value, pillText, trend, period }) => {
    return (
        <div className="w-full col-span-4 p-4 rounded border border-stone-300">
            <div className="flex mb-8 items-start justify-between">
                <div>

                    <h3 className="text-stone-500 mb-2 text-sm">{title}</h3>
                    <p className="text-3xl font-semibold">{value}</p>
                </div>

                <span
                    className={`text-xs flex items-center gap-1 font-medium px-2 py-1 rounded ${trend === "up"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                >
                    {trend === "up" ? <TrendingUp size={14} /> : <TrendingDown size={14} />}{" "}
                    {pillText}
                </span>
            </div>

            <p className="text-xs text-stone-500">{period}</p>
        </div>
    );
};