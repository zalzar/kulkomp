
const Dashboard = () => {
    return (
        <div className="flex h-screen bg-black text-white">
            {/* Left Sidebar */}
            <div className="w-1/6 bg-black p-4 flex flex-col justify-between items-center relative">
                {/* Top Circular Button */}
                <div className="h-12 w-12 bg-gray-600 rounded-full mb-6"></div>

                {/* Vertical Slider Line */}
                <div className="flex flex-col items-center space-y-6">
                    <div className="h-48 w-1 bg-gray-600"></div>
                    <p className="text-sm tracking-wider vertical-rl" style={{ writingMode: 'vertical-rl' }}>Vertical Text</p>
                </div>

                {/* Bottom Circular Profile Image */}
                <div className="w-12 h-12 rounded-full bg-white"></div>
            </div>

            {/* Main Content Area */}
            <div className="w-5/6 bg-white text-black p-6 relative">
                {/* Top-Right Menu Button */}
                <div className="absolute top-6 right-6">
                    <button className="h-12 w-12 bg-black text-white rounded-full">Menu</button>
                </div>

                {/* Profile Section and Vertical Slider */}
                <div className="flex space-x-6 mb-6">
                    {/* Profile Section */}
                    <div className="w-1/3 p-4 bg-gray-200 rounded-lg">
                        {/* Profile Image */}
                        <div className="h-24 w-24 bg-gray-500 rounded-full mb-4"></div>
                        <p className="text-sm mb-4">Profile Name</p>
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-sm">On Launch</span>
                            <div className="relative inline-block w-12 align-middle select-none transition duration-200 ease-in">
                                <input type="checkbox" name="toggle" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" />
                                <label htmlFor="toggle" className="toggle-label block overflow-hidden h-6 rounded-full bg-black cursor-pointer"></label>
                            </div>
                        </div>
                    </div>

                    {/* Vertical Slider and Buttons */}
                    <div className="flex flex-col justify-between space-y-4">
                        {/* Vertical Slider */}
                        <div className="flex items-center">
                            <div className="h-4 w-4 bg-black rounded-full"></div>
                            <div className="h-24 w-1 bg-black mx-4"></div>
                            <div className="h-4 w-4 bg-black rounded-full"></div>
                        </div>

                        {/* Category Buttons */}
                        <div className="flex space-x-2">
                            <button className="px-4 py-2 bg-gray-300 rounded-full">AI</button>
                            <button className="px-4 py-2 bg-gray-300 rounded-full">Robotics</button>
                            <button className="px-4 py-2 bg-gray-300 rounded-full">Design</button>
                            <button className="px-4 py-2 bg-gray-300 rounded-full">Future</button>
                        </div>
                    </div>
                </div>

                {/* Main Image Section */}
                <div className="w-full h-96 bg-gray-800 rounded-lg overflow-hidden mb-6" style={{ backgroundImage: "url('https://source.unsplash.com/random')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    {/* Placeholder for the image */}
                </div>

                {/* Footer: Futuristic Technologies Title */}
                <div className="mt-auto">
                    <h1 className="text-5xl font-bold flex items-center">
                        Futuristic <span className="mx-2 text-2xl">⚫</span> <span className="mx-2 text-3xl">✴</span> Technologies
                    </h1>
                    <p className="text-lg mt-2">Advanced AI, Robotics, and Beyond</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
