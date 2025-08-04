'use client';

import Link from "next/link";

export default function Header() {

    return (
        <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
            <Link href={'/'}>
                <h1 className="text-xl font-bold">
                    📊&nbsp;오늘의 미국 주식 브리핑
                </h1>
            </Link>
        </header>
    );
}