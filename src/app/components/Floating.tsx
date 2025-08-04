'use client'; 

import { useRouter } from 'next/navigation';

export default function Floating() {

    const router = useRouter();

    const handleChatButtonClick = () => {
        router.push('/chat');
    };

    return (
        <div className="fixed bottom-20 right-4 flex flex-col space-y-3 z-50">
                <button 
                    onClick={handleChatButtonClick}
                    className="w-12 h-12 bg-pink-500 text-white rounded-full shadow-lg hover:bg-pink-600 transition-colors flex items-center justify-center"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                </button>
                {/* <button className="w-12 h-12 bg-gray-100 text-gray-600 rounded-full shadow-lg hover:bg-gray-200 transition-colors flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                </button>
                <button className="w-12 h-12 bg-gray-100 text-gray-600 rounded-full shadow-lg hover:bg-gray-200 transition-colors flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </button> */}
            </div>
    );
}