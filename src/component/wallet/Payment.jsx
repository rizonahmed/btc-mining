import { FiArrowLeft, FiChevronDown, FiCheck, FiX } from 'react-icons/fi';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation
import selectbg from '../../assets/selectbg.png';
import select from '../../assets/select.png';
import speed from '../../assets/Speed.png';
import zbd from '../../assets/ZBD.png';
import muun from '../../assets/Muun.png';
import leave from '../../assets/leave.png';
import crypto from '../../assets/cryptocurrency-color_btc.png';

const Payment = () => {
    const [selectedWallet, setSelectedWallet] = useState('Speed');
    const [selectedMethod, setSelectedMethod] = useState('Invoice');
    const [currency, setCurrency] = useState('BTC');
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [amount, setAmount] = useState('');
    const [lightningAddress, setLightningAddress] = useState('example@speed.app');
    const [showModal, setShowModal] = useState(false);

    const navigate = useNavigate();

    const currencyOptions = ['BTC', 'Lighting', 'BEP_20'];

    const handleMethodChange = (method) => {
        setSelectedMethod(method);
        if (method === 'Lightning') {
            setAmount('0.0000020');
        } else {
            setAmount('');
        }
    };

    return (
        <div className="min-h-screen bg-[#0F172A] text-white p-4 relative pb-32 font-sans">
            {/* Header */}
            <div className="flex items-center mb-6">
                <button className="text-white text-2xl">
                    <img className='mt-1' src={leave} alt="" />
                </button>
                <h1 className="flex-1 text-center text-xl">Withdraw</h1>
            </div>

            {/* Bitcoin Balance */}
            <div className="flex flex-col items-center mb-8">
                <div className="w-10 h-10 rounded-full flex items-center justify-center mb-2">
                    <img src={crypto} alt="" />
                </div>
                <p className="text-gray-400 text-2xl">Bitcoin Balance</p>
                <h2 className="text-2xl mt-2 text-gray-100">
                    0.0000000008332321 <span className="text-sm text-gray-400">BTC</span>
                </h2>
            </div>

            {/* Select Collection Wallet */}
            <div className='pb-2 text-gray-200'>
                Select Collection Wallet
            </div>
            <div className="flex gap-3 overflow-x-auto no-scrollbar pb-10">
                {[
                    { name: 'Speed', icon: speed },
                    { name: 'ZBD', icon: zbd },
                    { name: 'Muun', icon: muun },
                ].map(wallet => (
                    <div
                        key={wallet.name}
                        onClick={() => setSelectedWallet(wallet.name)}
                        className={`relative flex flex-col items-center justify-center p-4 rounded-xl min-w-[105px] border
                            ${selectedWallet === wallet.name ? 'bg-[#2C89FF] border-gray-600' : 'bg-[#1E293B] border-gray-600'} transition`}
                    >
                        <div className="rounded-md flex items-center justify-center text-[#2C89FF] text-lg font-bold overflow-hidden">
                            <img src={wallet.icon} alt={wallet.name} className="w-6 h-6" />
                        </div>
                        <p className="text-sm mt-2 font-semibold">{wallet.name}</p>
                        {selectedWallet === wallet.name && (
                            <>
                                <img src={select} alt="Selected" className="absolute bottom-1 object-cover right-1 z-10" />
                                <img className='absolute right-0 bottom-0' src={selectbg} alt="" />
                            </>
                        )}
                    </div>
                ))}
            </div>

            {/* Amount Section */}
            <div className="mb-6 relative">
                <p className="text-gray-400 text-sm mb-2"><span className='text-gray-200'>Amount</span> (0.0000002 - 0.00025)</p>
                <div className="flex items-center bg-[#1E293B] rounded-lg p-3 relative">
                    <input
                        type="text"
                        placeholder="Enter amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="bg-transparent outline-none flex-1 text-white text-sm placeholder-gray-500"
                    />
                    <button
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="flex items-center gap-1 text-white px-3 py-1 rounded-md text-sm relative"
                    >
                        {currency}
                        <FiChevronDown />
                    </button>
                    {dropdownOpen && (
                        <div className="absolute right-3 top-14 bg-[#1E293B] border border-[#334155] rounded-lg shadow-md w-28 z-10">
                            {currencyOptions.map((option) => (
                                <div
                                    key={option}
                                    onClick={() => {
                                        setCurrency(option);
                                        setDropdownOpen(false);
                                    }}
                                    className="px-4 py-2 hover:bg-[#334155] cursor-pointer text-sm"
                                >
                                    {option}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Invoice or Lightning Address */}
            <div className="mb-6">
                <div className="flex items-center gap-6 mb-3">
                    <label className="flex items-center gap-2 cursor-pointer">
                        <div 
                            onClick={() => handleMethodChange('Invoice')}
                            className={`w-5 h-5 rounded-full border flex items-center justify-center 
                                ${selectedMethod === 'Invoice' ? 'bg-[#2C89FF] border-[#2C89FF]' : 'border-gray-400'}`}
                        >
                            {selectedMethod === 'Invoice' && <FiCheck className="text-white text-sm" />}
                        </div>
                        <span className="text-sm">Invoice</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                        <div 
                            onClick={() => handleMethodChange('Lightning')}
                            className={`w-5 h-5 rounded-full border flex items-center justify-center 
                                ${selectedMethod === 'Lightning' ? 'bg-[#2C89FF] border-[#2C89FF]' : 'border-gray-400'}`}
                        >
                            {selectedMethod === 'Lightning' && <FiCheck className="text-white text-sm" />}
                        </div>
                        <span className="text-sm">Lighting address</span>
                    </label>
                </div>

                <div className="relative">
                    {selectedMethod === 'Invoice' ? (
                        <input
                            type="text"
                            placeholder="lnbc1****************sdasd"
                            className="bg-[#1E293B] w-full p-3 rounded-lg text-sm text-white placeholder-gray-500"
                        />
                    ) : (
                        <input
                            type="text"
                            value={lightningAddress}
                            onChange={(e) => setLightningAddress(e.target.value)}
                            className="bg-[#1E293B] w-full p-3 rounded-lg text-sm text-white placeholder-gray-500"
                        />
                    )}
                    <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl">?</button>
                </div>
            </div>

            {/* Note */}
            <div className="text-gray-400 text-xs mb-8">
                Make sure the amount entered when creating the invoice is 0 <span className="text-[#F7931A]">sats=obtc</span>
            </div>

            {/* Withdraw Button */}
            <button
                onClick={() => setShowModal(true)}
                className="w-full bg-gradient-to-r from-[#2C88FE] to-[#2C89FF] py-3 rounded-full font-semibold text-lg"
            >
                Withdraw
            </button>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center backdrop-blur-xs bg-black/60 bg-opacity-60 z-50">
                    <div className="bg-[#181D30] p-6 rounded-2xl relative w-80 text-center">
                        <button
                            className="absolute top-4 right-4 text-gray-400 p-1 rounded-lg  bg-[#2D3349]"
                            onClick={() => setShowModal(false)}
                        >
                            <FiX size={24} />
                        </button>
                        <h2 className="text-lg  mb-3 pt-5">Please confirm your address</h2>
                        <p className="text-gray-400 text-sm mb-6">
                            Since we cannot verify the accuracy of your address, please ensure the address is correct to avoid any loss of assets.
                            <br />
                            <span className="text-white text-sm">(brandoncoin@speed.app)</span>
                        </p>
                        <div className="flex gap-4">
                            <button
                                onClick={() => setShowModal(false)}
                                className="flex-1 bg-[#22273A] border border-gray-800 py-2 rounded-full text-white"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => navigate('/withdrawDetails')}
                                className="flex-1 bg-[#2C89FF] py-2 rounded-full text-white font-semibold"
                            >
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Payment;
