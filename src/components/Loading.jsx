import { useEffect } from "react";
import { useState } from "react";

export default function Loading({ onComplete }) {
  const [text, setText] = useState();
  const fullText = "<kyawzayya.dev/>";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);

        setTimeout(() => {
          onComplete();
        }, 700);
      }
    }, 30);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed z-20 inset-0 bg-gray-950/50 backdrop-blur-lg text-gray-100 flex flex-col items-center justify-center">
      <div className="mb-4 text-4xl font-mono font-bold bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
        {text}
        <span className="animate-blink ml-1 text-white">|</span>
      </div>
      <div className="w-[200px] h-[2.5px] bg-gray-100 rounded relative overflow-hidden">
        <div className="w-[40%] h-full bg-gradient-to-r from-blue-600 to-cyan-400 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
      </div>
    </div>
  );
}
