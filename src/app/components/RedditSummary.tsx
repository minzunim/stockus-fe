'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

import { DCSummaryItem } from "@/app/model/DCsummary";
import api from "@/lib/axios";
import { useEffect, useState } from "react";

export default function RedditSummary() {

    const [llmSummary, setLlmSummary] = useState<DCSummaryItem>();
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
            <h2 className="text-2xl font-bold mb-4">
                <img src="/icons/reddit_icon.webp" alt="" className="inline-block w-6 h-6" />
                &nbsp;Reddit Summary<img src="/icons/refresh_icon.png" className="inline w-5 h-5 ml-3" onClick={getLlmSummary} /></h2>
            {isLoading ? (
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
            )}
        </div>
    );
}
