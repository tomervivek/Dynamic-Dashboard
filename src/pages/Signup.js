import React, { useState } from 'react';
import NavigationWrapper from '../components/NavigationWrapper';
import { layouts } from '../config';
import LayoutSelector from '../components/LayoutSelector';
const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [currentLayout, setCurrentLayout] = useState(0);
    const handleSubmit = () => {
    console.log("Sign Up");
    };

    return (
        <NavigationWrapper setCurrentLayout={setCurrentLayout} currentLayout={currentLayout} >



<LayoutSelector layout={layouts.signup[currentLayout]}>
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
                <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                <input
                    type="password"
                    value={confirmPassword}
                    required
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#EF7167] focus:border-[#EF7167] sm:text-sm"
                />
            </div>
            <div>
                <button type="submit" className="w-full px-4 py-2 bg-[#EF7167] text-white rounded-md hover:bg-opacity-80">
                    Sign Up
                </button>
            </div>
        </form>
        
        </LayoutSelector>
        </NavigationWrapper>
    );
};

export default Signup;
