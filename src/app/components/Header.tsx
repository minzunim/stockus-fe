'use client'

export default function Header() {
    
    return (
        <header className="bg-gray-800 text-white p-4">
            <h1 className="text-xl font-bold">
                <img 
                  src="/icons/chill_guy_icon.webp" 
                  alt="" 
                  className="inline-block w-6 h-6" />
                &nbsp;오늘의 주식 시장은요...</h1>
        </header>
    );
}