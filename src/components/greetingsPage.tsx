import { useEffect, useState } from "react";
import Link from "next/link";
import { Transition } from "@headlessui/react";

const GreetingsPage = () => {
  const [showMainPage, setShowMainPage] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowMainPage(true);
    }, 3000); // Menunggu 3 detik sebelum menampilkan halaman utama

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-b from-blue-400 to-purple-600">
      <Transition
        show={!showMainPage}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="text-white text-4xl font-bold animate-pulse">
          Loading...
        </div>
      </Transition>

      <Transition
        show={showMainPage}
        enter="transition-opacity duration-1000"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-1000"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="absolute inset-0 flex justify-center items-center">
          <Link href="/" passHref>
            <a className="text-white text-4xl font-bold bg-blue-500 py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">
              Go to Main Page
            </a>
          </Link>
        </div>
      </Transition>
    </div>
  );
};

export default GreetingsPage;
