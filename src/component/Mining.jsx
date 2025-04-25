import { useState } from 'react';
import bitcoin from '../assets/bitcoin.png';
import miner from '../assets/miner.png'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Mining = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const data = [
        { unit: 'Gh/S', value: '410.0' },
        { unit: 'Th/S', value: '2.1' },
        { unit: 'Gh/S', value: '20.0' },
        { unit: 'Th/S', value: '1.1' },
        { unit: 'Gh/S', value: '410.0' },
    ];
    return (
        <div className="min-h-screen bg-[#181D30] text-white font-sans relative ">
            {/* Header */}
            <div className="flex justify-end px-6 pt-8">
                <p className="text-xs text-gray-300">Save 17.30%</p>
            </div>

            {/* Bitcoin logo and bot name */}
            <div className="flex flex-col items-center mt-4 ">
                <img src={bitcoin} alt="Bitcoin" className="w-40 " />
            </div>

            {/* Mining power section */}
            <div className="mx-6 mt-9 bg-[#2C89FF] p-5   rounded-2xl flex items-center justify-between">
                <div className='flex gap-2 '>
                    <div>
                        <img src={miner} alt="" />
                    </div>
                    <div>
                        <p className="text-white text-sm mb-1">All mining power</p>
                        <p className="text-sm font-semibold text-white">
                            <span className="text-white text-lg">0 </span>
                            <span className="text-[#a5afb4]">Gh/s + <span className='text-xl'>200</span> Gh/s</span>
                        </p>
                    </div>
                </div>
                <button className="bg-white text-black text-sm font-semibold px-4 py-1 rounded-full -mt-5">
                    View &gt;
                </button>
            </div>

            {/* Choose computing power */}
            <div className="mt-8  px-6 ">
                {/* Title with left and right arrows */}
                <div className="flex items-center justify-between mb-4">
                    <p className="text-white text-lg">Choose computing power</p>
                    <div className='flex gap-3'>
                    <FaArrowLeft className="text-gray-400" />
                    <FaArrowRight className="text-gray-400" />
                    </div>
                </div>

                {/* Cards */}
                <div className="flex gap-3 overflow-x-auto hide-scrollbar pt-1">
                    {data.map((item, idx) => (
                        <div
                            key={idx}
                            onClick={() => setActiveIndex(idx)}
                            className={`flex-shrink-0 w-20 h-24 rounded-3xl flex flex-col items-center justify-center cursor-pointer transition-all duration-300 ${activeIndex === idx
                                    ? 'bg-[#1C3259] border border-[#4688df9a]'
                                    : 'bg-[#1C2C45] opacity-60'
                                }`}
                        >
                            <p className="text-sm text-gray-300">{item.unit}</p>
                            <p className="text-xl">{item.value}</p>
                        </div>
                    ))}
                </div>
            </div>


        </div>
    );
};

export default Mining;
