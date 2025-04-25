import { FiCopy } from 'react-icons/fi';
import pending from '../../assets/pending.png';
import leave from '../../assets/leave.png';
import dot from '../../assets/dot.png'
import next from '../../assets/next.png'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const WithdrawDetails = () => {
  const [copiedField, setCopiedField] = useState('');

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => {
      setCopiedField('');
    }, 1000); // 1 second
  };

  return (
    <div className="pb-28 bg-[#181D30] z-[9999] relative text-white flex flex-col items-center px-4 pt-6">
      {/* Top Back Button */}
      <div className="w-full flex items-center">
        <button className="text-white text-2xl">
         <Link to="/payment">
         <img src={leave} alt="" />
         </Link>
        </button>
        <h1 className="flex-1 text-center text-lg font-semibold">Withdrawal Details</h1>
      </div>

      {/* Pending Icon */}
      <div className="mt-8 flex flex-col items-center">
        <div className="pt-4">
          <img src={pending} alt="" />
        </div>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-2xl flex gap-1 items-center">
            <img src={dot} alt="" /> Pending
          </span>
        </div>
        <p className="text-gray-400 text-center mt-2 text-lg">We will process it within 48 hours,</p>
      </div>

      {/* Details Card */}
      <div className="bg-[#22273A] w-full mt-8 rounded-2xl p-5 space-y-4">
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Transfer Network</span>
          <span className="font-medium text-gray-200">Lightning Network</span>
        </div>

        <div className="flex justify-between text-sm items-center">
          <div>
            <p className="text-gray-400">Address</p>
            <p className="text-gray-400">example@speed.app</p>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => handleCopy('example@speed.app', 'address')}>
              <FiCopy className="w-4 h-4 text-white" />
            </button>
            {copiedField === 'address' && (
              <span className="text-green-400 text-xs">Copied!</span>
            )}
          </div>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Amount</span>
          <span className="font-medium text-gray-200">0.0000002</span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Initiation time</span>
          <span className="font-medium text-gray-200">Feb 06 2025 06:58:38</span>
        </div>

        <div className="flex justify-between text-sm items-center">
          <span className="text-gray-400">Withdraw ID</span>
          <div className="flex items-center gap-2">
            <span className="font-medium text-gray-200">202502065784</span>
            <button onClick={() => handleCopy('202502065784', 'withdrawId')}>
              <FiCopy className="w-4 h-4 text-white" />
            </button>
            {copiedField === 'withdrawId' && (
              <span className="text-green-400 text-xs">Copied!</span>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between gap-10 items-center">
        <div className="text-gray-400 text-xs mt-6">
          <p>if you have any questions about this transaction,</p>
          <p>please contact us via email at</p>
          <a href="mailto:help@bcmining.zendesk.com" className="text-blue-500">help@bcmining.zendesk.com</a>
        </div>

        <div className="mt-4 mb-2">
          <Link to="/wallet">
          <img src={next} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WithdrawDetails;
