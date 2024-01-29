// landingPage.tsx

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Transition } from '@headlessui/react';

const LandingPage = () => {
    const [showMainPage, setShowMainPage] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowMainPage(true);
        }, 3000); // Tampilkan halaman utama setelah 3 detik

        return () => clearTimeout(timer);
    }, []);

    const navigateToMainPage = () => {
        router.push('/mainPage'); // Ganti '/mainPage' dengan rute ke halaman utama Anda
    };

    return (
        <div className="h-screen flex justify-center items-center bg-gradient-to-r from-blue-500 to-green-500">
            <Transition
                show={!showMainPage}
                enter="transition-opacity duration-1000"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-1000"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="text-white text-4xl font-bold">Welcome to My Website</div>
            </Transition>
            {showMainPage && (
                <Transition
                    show={showMainPage}
                    enter="transition-opacity duration-1000"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity duration-1000"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    afterLeave={navigateToMainPage}
                >
                    {/* Tambahkan halaman utama di sini */}
                    <div className="absolute inset-0 flex justify-center items-center">
                        <p className="text-white text-4xl font-bold">This is the main page</p>
                    </div>
                </Transition>
            )}
        </div>
    );
};

export default LandingPage;
