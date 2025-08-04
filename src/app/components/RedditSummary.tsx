'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

import { DCSummaryItem } from "@/app/model/DCsummary";
import api from "@/lib/axios";
import { useEffect, useState } from "react";

export default function RedditSummary() {

    const [llmSummary, setLlmSummary] = useState<any>();
    const [isLoading, setIsLoading] = useState(true);

    const getLlmSummary = async () => {
        setIsLoading(true);
        const { data } = await api.get("/llm/summary?cm=rd");

        console.log('data', data);

        setLlmSummary(data);
        setIsLoading(false);
    };

    const convertLlmText = (text: string) => {

        const convertText = text
            .replace(/Mixed/g, "🤔")
            .replace(/Negative/g, "💔")
            .replace(/Positive/g, "😇");
        // .replace(/-/g, "▪︎");

        // typing 효과 

        return convertText;
    };

    useEffect(() => {
        getLlmSummary();
    }, []);

    return (
        <div className="mt-5 no-scrollbar">
            <h2 className="text-xl font-bold mb-4">
                <img src="/icons/reddit_icon.webp" alt="" className="inline-block w-4 h-4 mb-1" />
                &nbsp;Reddit 실시간 핫 종목 🔥<img src="/icons/refresh_icon.png" className="inline w-5 h-5 ml-3" onClick={getLlmSummary} /></h2>
            {/*isLoading ? (
                <p>Loading...</p>
            ) : llmSummary && llmSummary.text && llmSummary.time_stamp ? (
                <>
                    <div className="text-gray-400 mb-2">{`(${llmSummary.time_stamp} 기준)`}</div>
                    <div>
                        <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            rehypePlugins={[rehypeRaw]}
                        >{convertLlmText(llmSummary.text)}
                        </ReactMarkdown>
                    </div>
                </>
            ) : (
                <p>No summary available.</p>
            )*/}
            {isLoading ? (
                <p>분석 중입니다...</p>
            ) : (
              <div className="p-2 bg-gray-50">
                <div className="w-full overflow-x-auto">
                  <table className="min-w-full bg-white shadow-md rounded-xl overflow-hidden">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Ticker</th>
                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">요약</th>
                        <th className="py-3 px-4 text-center text-sm font-semibold text-gray-600">평가</th>
                        {/* <th className="py-3 px-4 text-center text-sm font-semibold text-gray-600">Community</th> */}
                      </tr>
                    </thead>
                    <tbody>
                      {llmSummary?.text.map((stock: any, index: number) => (
                        <tr key={index} className="border-t hover:bg-gray-50">
                          <td className="py-3 px-3 text-gray-700 font-medium"><a href={`https://m.stock.naver.com/search?q=${stock.ticker}&resultTab=stock%2Cindex%2Cmarketindicator%2Ccoin%2Cipo`}>{stock.ticker}</a></td>
                          <td className="py-3 px-3 text-gray-600 text-sm">{stock.summary}</td>
                          <td className="py-3 px-3 text-center">
                            <span
                              className={`px-3 py-1 rounded-full text-sm font-semibold capitalize whitespace-nowrap ${
                                stock.rating === 'buy'
                                  ? 'bg-green-100 text-green-700'
                                  : stock.rating === 'hold'
                                  ? 'bg-yellow-100 text-yellow-700'
                                  : 'bg-gray-100 text-gray-700'
                              }`}
                            >
                              {stock.rating}
                            </span>
                          </td>
                          {/* <td className="py-3 px-4 text-center text-gray-500 uppercase">{stock.community}</td> */}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )
            }
        </div>
    );
}
