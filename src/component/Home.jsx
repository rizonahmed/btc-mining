import React, { useState } from 'react';
import { FaInfoCircle, FaUser, FaShoppingBag, FaWallet, FaBitcoin } from 'react-icons/fa';
import { BsGraphUpArrow } from 'react-icons/bs';
import { HiChevronRight, HiOutlineSpeakerphone } from 'react-icons/hi';
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import crypto from '../assets/cryptocurrency-color_btc.png';
import bitcoin from '../assets/homebtc.png'
import info from '../assets/info.png'
import sound from '../assets/sound.png'
import video from '../assets/vdio.png'
import alert from '../assets/alert-circle.png'
import zap from '../assets/zap.png'
import background from '../assets/bg.png'
import shadowbtc from '../assets/shadowbtc.png'
import shadowbtc2 from '../assets/shadowbtc2.png'



// Graph Data
const graphData = [
  { name: '1', value: 0.003202002 },
  { name: '2', value: 0.00506004 },
  { name: '3', value: 0.004006 },
  { name: '4', value: 0.005006 },
  { name: '5', value: 0.002002 },
  { name: '5', value: 0.005106 },
  { name: '6', value: 0.002700005 },
  { name: '7', value: 0.004704007 },
  { name: '8', value: 0.00591718 },
];

const Home = () => {
  const [progress, setProgress] = useState(67); // ডিফল্ট 67%

  return (
    <div className="bg-[#181D30] min-h-screen text-white relative pb-28 pt-2">

      {/* Top Balance Section */}
      <div className="p-6 mx-3 mb-8 rounded-b-3xl bg-gradient-to-t from-[#F7931A] to-[#181D30] relative">
        <div className="flex justify-between items-center -mx-4">
          <p className="text-lg  text-gray-200 flex items-center gap-2"><img src={crypto} alt="" /> BTC Balance</p>
          <img className='object-cover' src={info} alt="" />
        </div>

        <div className="flex justify-center mt-9 mb-2">
          <div className=" ">
            <img src={bitcoin} alt="" />
          </div>
        </div>

        <h1 className="text-center text-2xl font-[500] pb-4"><span className='text-[#cac8c8dd]'>0</span>.0000000863108930 BTC</h1>

        <div className="flex justify-center mt-5">
          <button className="border-4 border-[#181D30] flex items-center gap-2 bg-[#2C89FF] text-gray-200 px-4 py-2 rounded-full text-sm absolute">
            <img src={sound} alt="" />            ****65 claimed 3.5 GH/s free power
          </button>
        </div>
      </div>

      {/* Earnings and Invitation Section */}
      <div className="grid grid-cols-2 gap-2 p-3">

        {/* Earning Details Card */}
        <div className="bg-[#22273A] pt-4 rounded-2xl shadow-inner">
          <div className="flex items-center gap-2 mb-2 px-3">
            <div className="  p-1 rounded-full">
              <img className='' src={shadowbtc} alt="" />
            </div>
            <div>
              <p className="text-xs text-gray-400 ">Earning Details</p>
              <p className="text- text-gray-100">0000000 <span className='text-xs text-gray-400'>BTC</span></p>
            </div>
          </div>

          {/* Graph */}
          <div className="h-26 w-full my-2">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={graphData}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#E48B1E" stopOpacity={0.8} />
                    <stop offset="100%" stopColor="#E48B1E" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#E48B1E"
                  fill="url(#colorValue)" // Gradient ব্যবহার করা হচ্ছে
                  strokeWidth={1}
                />
                <XAxis dataKey="name" hide />
                <YAxis hide />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="flex items-center gap-2  -mt-8 mx-2">
            <p className=" text-sm text-gray-100">0.000000065281718</p>
            <div className="bg-[#2C3A59] p-1 rounded-full">
              <HiChevronRight className="text-white text-xs" />
            </div>
          </div>
        </div>

        {/* Invitation Reward Card */}
        <div className="bg-[#22273A] py-4 rounded-2xl shadow-inner">
          <div className="flex items-center gap-2 mb-2 px-3">
            <div className="  p-1 rounded-full">
              <img src={shadowbtc} alt="" />
            </div>
            <div>
              <p className="text-xs text-gray-400 ">Invitation Reward</p>
              <p className="text- text-gray-100">0000000 <span className='text-xs text-gray-400'>BTC</span></p>
            </div>
          </div>

          {/* Graph */}
          <div className="h-26 w-full my-2">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={graphData}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#E48B1E" stopOpacity={0.8} />
                    <stop offset="100%" stopColor="#E48B1E" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#E48B1E"
                  fill="url(#colorValue)" // Gradient ব্যবহার করা হচ্ছে
                  strokeWidth={1}
                />
                <XAxis dataKey="name" hide />
                <YAxis hide />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="flex items-center gap-2 -mt-8 mx-2">
            <p className=" text-sm text-gray-100">0.000000065281718</p>
            <div className="bg-[#2C3A59] p-1 rounded-full">
              <HiChevronRight className="text-white text-xs" />
            </div>
          </div>
        </div>
      </div>



      {/* Total Mining Power Section */}
      <div className="bg-[#22273A] mx-3 mt-3 mb-6 pt-4 rounded-3xl">
        <div className="flex items-center justify-between mb-2 px-2">
          <div className="flex items-center gap-2">
            <img src={shadowbtc2} alt="" />
            <div>
              <p className="text-sm text-gray-400 flex items-center gap-2">Total Mining Power <img className='w-1/9 mt-1' src={alert} alt="" /></p>
              <p className=" font-semibold text-gray-400"><span className='text-2xl text-white'>3.5</span> Gh/s</p>
            </div>
          </div>
          <button className="text-xs  bg-[#263C65] border text-blue-400 border-[#2766be] px-3 py-1 rounded-full">Activate</button>
        </div>



        <div>
          <img src={background} alt="" />
        </div>

        <div className="flex justify-between text-xs text-gray-400 pb-4 -mt-5 px-3 ">
          <div>
            <p className="text-sm pb-2 text-gray-400 flex items-center gap-2">Total Mining Power <img className='w-1/9 mt-1' src={alert} alt="" /></p>
            <p className="text-red-700">0.0% <span className='text-[#F7931A]'>+0.0%</span></p>
          </div>
          <div className="">
            <p className="text-sm pb-2 text-gray-400 flex items-center gap-2">Total Mining Power <img className='w-1/9 mt-1' src={alert} alt="" /></p>
            <p className="text-green-400"><span className='text-gray-400'>0.0%</span> Offset</p>
          </div>
        </div>
      </div>



      {/* Mining Speed Section */}
      <div className="bg-[#24293C] mx-3 mt-4 p-5 rounded-2xl">
        <div className='flex justify-between  '>
          <div className="flex items-center gap-3 mb-4">
            <img src={video} alt="" />
            <p className=" font-semibold"><span className='text-2xl'>3.5</span> Gh/s</p>
            <span className="text-xs  bg-[#263C65] border text-blue-400 border-[#2766be] px-2 py-1 rounded-full flex justify-between gap-1"><img src={zap} alt="" /> +45%</span>
          </div>
          <div className='mt-1'>
            <img src={alert} alt="" />
          </div>
        </div>

        {/* Progressbar */}
        <div className="relative w-full bg-gray-700 h-4 rounded-full  my-4">
          {/* Progress Bar (Blue Color) */}
          <div
            className="absolute top-0 left-0 h-full bg-[#2C89FF] rounded-full"
            style={{ width: `${progress}%` }}
          ></div>

          {/* Percentage Text (Dynamic Position) */}
          <span
            className="absolute top-1/2 text-xs text-white font-medium px-1 py-2 rounded-full bg-[#2C89FF]"
            style={{
              left: `${progress}%`,
              transform: 'translate(-50%, -50%)', // Center the text
            }}
          >
            {progress}%
          </span>
        </div>

        <p className="text-sm mt-2 text-gray-400">Watch <span className='text-base text-white'>50</span> ads to reach today's loss offset goal.</p>

        {/* Buttons */}
        <div className="flex justify-between mt-4 gap-4">
          <button className="w-full bg-[#2C3144]  px-6 py-3 rounded-full text-sm text-gray-100">Invite</button>
          <button className="w-full  bg-[#2C89FF] px-6 py-3 rounded-full text-sm text-gray-100">Claim 12/ <span className='text-[#bebbbbcc] font-semibold'>35</span></button>
        </div>
      </div>



    </div>
  );
};

export default Home;
