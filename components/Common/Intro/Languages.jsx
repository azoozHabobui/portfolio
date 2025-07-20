import { Progress } from "antd";
import { useEffect, useState } from "react";

const Languages = () => {
    const [arabic, setArabic] = useState(0);
    const [french, setFrench] = useState(0);
    const [english, setEnglish] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            if (arabic < 98) setArabic(prev => prev + 1);
            if (english < 61) setEnglish(prev => prev + 1);
            if (french < 50) setFrench(prev => prev + 1);
        }, 30);
        return () => clearInterval(timer);
    }, [arabic, french, english]);

    return (
        <div className="w-full py-10 px-4 bg-gradient-to-b from-[#111827] to-[#1f2937] rounded-xl shadow-md">
            <h2 className="text-center text-white text-2xl font-bold mb-8 tracking-wide">🌐 Language Proficiency</h2>

            <div className="flex flex-wrap justify-center gap-8">
                <div className="flex flex-col items-center gap-y-2">
                    <Progress strokeColor="#16a34a" type="circle" percent={arabic} size={90} />
                    <span className='text-sm font-semibold text-white'>Arabic</span>
                </div>
                    <div className="flex flex-col items-center gap-y-2">
                    <Progress strokeColor="#facc15" type="circle" percent={english} size={90} />
                    <span className='text-sm font-semibold text-white'>English</span>
                </div>
                <div className="flex flex-col items-center gap-y-2">
                    <Progress strokeColor="#3b82f6" type="circle" percent={french} size={90} />
                    <span className='text-sm font-semibold text-white'>French</span>
                </div>
            </div>
        </div>
    );
};

export default Languages;
