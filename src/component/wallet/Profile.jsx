 
import group from '../../assets/goupe.png'
import square from '../../assets/add-square.png'
import share from '../../assets/share.png'
import support from '../../assets/support.png'
import setting from '../../assets/setting.png'
import account from '../../assets/account.png'
import logout from '../../assets/signout.png'

const Profile = () => {
    return (
        <div className="min-h-screen bg-[#2C3144]  text-white font-sans ">
            
            {/* Profile section */}
            <div className='flex justify-between   pt-7 px-7'>
            <div className="flex  gap-2  ">
                <img
                    src="https://i.pravatar.cc/100"
                    alt="avatar"
                    className="w-14 h-14 rounded-full"
                />
                <div className='-mt-2'>
                <div className=" mt-2">ID: 1759360</div>
                <button className="text-xs bg-[#22273A] px-3 text-gray-400 py-1 rounded-full mt-1">
                    Enter the invitation code &gt;
                </button>
                </div>
            </div>
            <div>
                <img className='object-cover' src={group} alt="" />
            </div>
            </div>

            {/* Balance */}
            <div className="text-center mt-6">
                <div className="text-2xl font-semibold">0.000000000000 <span className='text-sm text-gray-400 '>BTC</span></div>
                <div className="text-gray-400">Rewards <span className="text-xs text-blue-500 mt-1" > Today</span></div>
            </div>

            {/* Invite section */}
            <div className="flex justify-between mx-8 gap-3 mt-9 mb-16">
                <button className="bg-[#22273A] text-gray-400 px-5 py-2 rounded-full text-base  flex items-center gap-2">
                    <img className='object-cover ' src={square} alt="" /> QEOTSB
                </button>
                <button className="bg-[#2C89FF] text-white px-5 py-3 rounded-full text-base">
                    Invite friends
                </button>
            </div>

            {/* Menu list */}
            <div className="bg-[#22273A] rounded-t-4xl mt-6 pb-32 p-4 space-y-4">
                {[
                    { icon: share , label: "Share" },
                    { icon: support , label: "Support" },
                    { icon: setting, label: "Setting" },
                    { icon: account, label: "Account" },
                    { icon: logout, label: "Sign Out" },
                ].map((item, index) => (
                    <div
                        key={index}
                        className="flex justify-between items-center text-gray-400 p-2 hover:bg-[#3A425C] rounded-lg cursor-pointer"
                    >
                        <div className="flex items-center gap-3">
                            <div className="text-lg"><img src={item.icon} alt="" /></div>
                            <span className='text-lg '>{item.label}</span>
                        </div>
                        <div className="text-sm">{">"}</div>
                    </div>
                ))}
            </div>

            
        </div>
    );
};

export default Profile;
