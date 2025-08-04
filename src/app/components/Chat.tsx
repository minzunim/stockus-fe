'use client';

import { useEffect, useState } from 'react';

export default function Chat() {

    const [messages, setMessages] = useState([
        { id: 1, text: "안녕하세요! 주식 투자에 대해 궁금한 점이 있으시면 언제든 물어보세요.", isBot: true, timestamp: new Date() },
        { id: 2, text: "오늘 시장 상황은 어때요?", isBot: false, timestamp: new Date() },
        { id: 3, text: "오늘은 다우존스, S&P500, 나스닥 모두 하락세를 보이고 있습니다. 특히 나스닥은 2.24% 하락했네요.", isBot: true, timestamp: new Date() }
    ]);
    const [inputMessage, setInputMessage] = useState('');

    const handleSendMessage = () => {
        if (inputMessage.trim() === '') return;
        
        const newMessage = {
            id: messages.length + 1,
            text: inputMessage,
            isBot: false,
            timestamp: new Date()
        };
        
        setMessages([...messages, newMessage]);
        setInputMessage('');
        
        // 봇 응답 시뮬레이션
        setTimeout(() => {
            const botResponse = {
                id: messages.length + 2,
                text: "죄송합니다. 현재 봇 응답 기능은 개발 중입니다. 곧 더 나은 서비스를 제공하겠습니다!",
                isBot: true,
                timestamp: new Date()
            };
            setMessages(prev => [...prev, botResponse]);
        }, 1000);
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    };

    return (
        <div className="flex flex-col h-screen bg-gray-50">

            {/* 메시지 영역 */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                    <div key={message.id} className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
                        <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                            message.isBot 
                                ? 'bg-white border border-gray-200 text-gray-800' 
                                : 'bg-blue-500 text-white'
                        }`}>
                            <p className="text-sm">{message.text}</p>
                            <p className={`text-xs mt-1 ${
                                message.isBot ? 'text-gray-500' : 'text-blue-100'
                            }`}>
                                {message.timestamp.toLocaleTimeString('ko-KR', { 
                                    hour: '2-digit', 
                                    minute: '2-digit' 
                                })}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* 입력 영역 */}
            <div className="bg-white border-t px-4 py-3">
                <div className="flex items-center space-x-2">
                    <input
                        type="text"
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="메시지를 입력하세요..."
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button
                        onClick={handleSendMessage}
                        disabled={inputMessage.trim() === ''}
                        className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                    </button>
                </div>
            </div>

        </div>
    );
}