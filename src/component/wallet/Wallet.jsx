import { useState } from 'react';
import btc from '../../assets/cryptocurrency-color_btc.png';
import historyImage from '../../assets/wdhistory.png';
import bitcoinwd from '../../assets/bitcoin-withdraw.png';
import recommendedIcon from '../../assets/recomended.png';
import { FiX } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
 
const Wallet = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedNetwork, setSelectedNetwork] = useState('');
    const [history, setHistory] = useState([]); // Initially no history
    const navigate = useNavigate();

    const networks = [
        { name: 'Lighting', range: '0.0000002-0.00045 BTC', recommended: true },
        { name: 'BEP-20', range: '≥0.0005 BTC' },
        { name: 'BTC', range: '≥0.001 BTC' }
    ];

    return (
        <div className="min-h-screen bg-[#181D30] text-white font-sans flex flex-col">
            {/* Top section */}
            <div className="bg-gradient-to-t from-[#DC851C] to-[#0C1220] rounded-b-4xl p-6 text-center">
                <div className="flex justify-center mb-2">
                    <img src={btc} alt="BTC" className="pt-8" />
                </div>
                <h2 className="text-xl text-gray-300">Bitcoin</h2>
                <div className="text-2xl font-semibold mt-2">
                    0.000000008332321 <span className="text-sm text-gray-400">BTC</span>
                </div>

                {/* Button Section */}
                <div className='pt-9 flex justify-end'>
                    <button
                        onClick={() => setShowModal(true)}
                        className="mt-5 bg-[#2C89FF] flex items-center justify-center gap-2 px-6 py-3 rounded-full text-white text-base border border-gray-400"
                    >
                        <img src={bitcoinwd} alt="" />
                        Withdraw
                    </button>
                </div>
            </div>

            {/* Withdraw history */}
            <div className="flex-1 p-6 pb-24">
                <h3 className="text-2xl text-gray-200 mb-8 text-left">Withdraw history</h3>

                {/* If history is empty show default */}
                {history.length === 0 ? (
                    <img src={historyImage} alt="No History" className="pt-4 mx-auto mb-6" />
                ) : (
                    <div className="space-y-4">
                        {history.map((item, index) => (
                            <div key={index} className="bg-[#22273A] rounded-2xl p-4 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <img src={btc} alt="BTC" className="w-10 h-10" />
                                    <div>
                                        <div className="text-gray-200 text-lg font-semibold">{item.amount} BTC</div>
                                        <div className="text-sm text-gray-400">{item.date}</div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-gray-400 text-sm">Withdrawal time</div>
                                    <div className="text-gray-300 text-sm">{item.time}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Withdraw Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black/30 backdrop-blur-xs bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div className="bg-[#181D30] rounded-2xl p-6 w-full max-w-md relative border border-gray-700">
                        {/* Close button */}
                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute bg-[#2D3349] p-1 rounded-lg top-4 right-4 text-gray-400 hover:text-white"
                        >
                            <FiX size={24} />
                        </button>

                        <h2 className="text-xl font-semibold -mt-2 mb-6">Select a network</h2>

                        <div className="space-y-3">
                            {networks.map((network) => (
                                <div
                                    key={network.name}
                                    onClick={() => {
                                        setSelectedNetwork(network.name);
                                        setShowModal(false);
                                        navigate("/payment"); // navigate to payment
                                    }}
                                    className={`py-4 px-2 rounded-xl cursor-pointer transition-all flex items-center justify-between ${selectedNetwork === network.name
                                            ? "bg-[#2C89FF] bg-opacity-20 border border-[#2C89FF]"
                                            : "bg-[#22273A] hover:bg-[#2A3042] border border-[#2E3447]"}`
                                    }
                                >
                                    <div>
                                        <div className="flex items-center relative">
                                            <span className="text-xl text-gray-200">{network.name}</span>
                                            {network.recommended && (
                                                <img
                                                    src={recommendedIcon}
                                                    alt="Recommended"
                                                    className="-top-4 -left-2 absolute"
                                                />
                                            )}
                                        </div>
                                        <span className="text-lg text-gray-400">{network.range}</span>
                                    </div>
                                    <span className="text-white text-2xl font-light">{`>`}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Wallet;
