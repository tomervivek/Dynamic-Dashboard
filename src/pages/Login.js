import React, { useState } from 'react';
import NavigationWrapper from '../components/NavigationWrapper';
import { layouts } from '../config';
import LayoutSelector from '../components/LayoutSelector';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [currentLayout, setCurrentLayout] = useState(0);
    const handleSubmit = () => {
        console.log("Login");
        };

    return (
        <NavigationWrapper setCurrentLayout={setCurrentLayout} currentLayout={currentLayout} >



<LayoutSelector layout={layouts.login[currentLayout]}>
        <form onSubmit={handleSubmit} className="space-y-4">



            <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                    type="email"
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#EF7167] focus:border-[#EF7167] sm:text-sm"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <input
                    type="password"
                    value={password}
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#EF7167] focus:border-[#EF7167] sm:text-sm"
                />
            </div>
            <div>
                <button type="submit" className="w-full px-4 py-2 bg-[#EF7167] text-white rounded-md hover:bg-opacity-80">
                    Login
                </button>
            </div>
        </form>
        
        </LayoutSelector>
        </NavigationWrapper>
    );
};

export default Login;
