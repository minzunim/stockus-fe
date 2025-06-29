'use client';

import { useEffect, useState } from "react";
import api from "@/lib/axios";
import { MarketSummaryItem } from "@/app/model/MarketSummary";

export default function MarketSummary() {

    const [summary, setSummary] = useState<MarketSummaryItem[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const getMarketSummary = async () => {
        setIsLoading(true);
        const { data } = await api.get("/market/summary");
        setSummary(data.data);
        setIsLoading(false);
    };

    const convertTicker = (ticker: string) => {
        switch (ticker) {
            case "^DJI":
                return "Dow Jones";
            case "^GSPC":
                return "S&P500";
            case "^IXIC":
                return "NASDAQ";
            default:
                return "모름";
        }
    };

    useEffect(() => {
        getMarketSummary();
    }, []);

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">📈 Market Summary</h2>
            <div className="overflow-x-auto whitespace-nowrap hide-scrollbar">
                {isLoading ? (
                    <div>Loading...</div>
                ) : summary.length > 0 ? (
                    summary.map((item: MarketSummaryItem) => (
                        <div
                            key={item.ticker}
                            className="inline-block w-[100px] mr-4 p-2 rounded-sm border border-gray-300 text-center">
                            <div className="font-bold">{convertTicker(item.ticker)}</div>
                            <div>{(item.cur_close).toFixed(2)}
                                <div>
                                    <span className={`${item.change_rate > 0 ? 'text-red-600' : 'text-blue-600'}`}>{item.change_rate > 0 ? '▴' : '▾'}</span>
                                    <span className='text-sm'>({item.change_rate}%)</span>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div>데이터가 없습니다</div>
                )}
            </div>
        </div>
    );
}