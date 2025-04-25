import React from 'react';
import { FaInfoCircle, FaUser, FaShoppingBag, FaWallet, FaBitcoin } from 'react-icons/fa';
import { BsGraphUpArrow } from 'react-icons/bs';
import { HiChevronRight, HiOutlineSpeakerphone } from 'react-icons/hi';

const Home = () => {
  return (
    <div className="bg-[#0C1220] min-h-screen text-white relative pb-28">
      {/* Top Balance Section */}
      <div className="p-6 rounded-b-4xl bg-gradient-to-t from-[#E48B1E] to-[#0C1220] relative">
        <div className="flex justify-between items-center">
          <p className="text-lg font-semibold">BTC Balance</p>
          <FaInfoCircle />
        </div>
        <div className="flex justify-center my-6">
          <img src="/path/to/bitcoin-icon.png" alt="Bitcoin" className="w-20" />
        </div>
        <h1 className="text-center text-2xl font-bold">
          0.0000000863108930 BTC
        </h1>

        {/* Claim Button */}
        <div className="flex justify-center mt-5">
          <button className="bg-[#2C89FF] text-white px-6 py-2 rounded-full flex items-center gap-2 shadow-lg">
            <HiOutlineSpeakerphone className="text-xl" />
            ****65 claimed 3.5 GH/s free power
          </button>
        </div>
      </div>

      {/* Earning Details Section */}
      <div className="grid grid-cols-2 gap-4 p-6">
      {/* Earning Card */}
      <div className="bg-[#1C2C45] p-4 rounded-2xl relative overflow-hidden">
        {/* Top Section */}
        <div className="flex items-center gap-2 mb-2">
          <div className="bg-[#E48B1E] p-1 rounded-full">
            <FaBitcoin className="text-white text-sm" />
          </div>
          <div className="flex flex-col">
            <p className="text-xs text-white">Earning Details</p>
            <p className="text-xs text-gray-400">0000000 BTC</p>
          </div>
        </div>

        {/* Middle Graph Section */}
        <div className="h-14 w-full my-2">
          <img
            src="/path/to/graph.png" // <-- ekhane tumi wavy orange graph image use korba
            alt="Graph"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bottom Section */}
        <div className="flex items-center justify-between mt-2">
          <p className="text-xs text-gray-300">0.000000065281718</p>
          <div className="bg-[#2C3A59] p-1 rounded-full">
            <HiChevronRight className="text-white text-xs" />
          </div>
        </div>
      </div>

      {/* Invitation Reward Card */}
      <div className="bg-[#1C2C45] p-4 rounded-2xl relative overflow-hidden">
        {/* Top Section */}
        <div className="flex items-center gap-2 mb-2">
          <div className="bg-[#E48B1E] p-1 rounded-full">
            <FaBitcoin className="text-white text-sm" />
          </div>
          <div className="flex flex-col">
            <p className="text-xs text-white">Invitation Reward</p>
            <p className="text-xs text-gray-400">0000000 BTC</p>
          </div>
        </div>

        {/* Middle Graph Section */}
        <div className="h-14 w-full my-2">
          <img
            src="/path/to/graph.png" // <-- same graph image ekhaneo
            alt="Graph"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bottom Section */}
        <div className="flex items-center justify-between mt-2">
          <p className="text-xs text-gray-300">0.000000065281718</p>
          <div className="bg-[#2C3A59] p-1 rounded-full">
            <HiChevronRight className="text-white text-xs" />
          </div>
        </div>
      </div>
    </div>
      {/* Mining Speed and Progress */}
      <div className="bg-[#1C2C45] mx-6 mt-4 p-4 rounded-2xl">
        <div className="flex items-center gap-2 mb-4">
          <BsGraphUpArrow />
          <p className="text-xl">3.5 Gh/s</p>
          <span className="text-xs bg-blue-500 px-2 py-1 rounded-full">+45%</span>
        </div>

        {/* Progress Bar */}
        <div className="relative w-full bg-gray-700 h-2 rounded-full">
          <div className="absolute top-0 left-0 h-2 bg-blue-500 rounded-full" style={{ width: '67%' }}></div>
        </div>
        <p className="text-xs mt-2">Watch 50 ads to reach today's loss offset goal.</p>

        {/* Buttons */}
        <div className="flex justify-between mt-4">
          <button className="border border-gray-500 px-6 py-2 rounded-full">Invite</button>
          <button className="bg-[#2C89FF] px-6 py-2 rounded-full">Clime 12/35</button>
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="fixed bottom-5 left-0 w-full flex justify-center gap-10 px-6 z-50">
        <div className="bg-[#22273A] flex justify-evenly border border-gray-500 rounded-full p-4 w-[90%]">
          <FaUser className="text-white text-2xl" />
          <FaShoppingBag className="text-white text-2xl" />
          <FaWallet className="text-white text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Home;
