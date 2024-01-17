import React from 'react';
import { Transition } from '@headlessui/react';

const Library = ({ className }: { className: string }) => {
  return (
    <Transition
      show={className ? true : false}
      enter="transition-opacity transition-transform duration-300"
      enterFrom="opacity-80 -translate-x-full"
      enterTo="opacity-100 translate-x-0"
      leave="transition-opacity transition-transform duration-300"
      leaveFrom="opacity-100 translate-x-0"
      leaveTo="opacity-0 -translate-x-full"
    >
    <div className={`w-96 bg-black h-full absolute transition-all duration-500 ease-in-out opacity-0 transform translate-x-1 ${className}`}>
    <div className='h-24 pl-10 text-2xl items-center justify-start flex underline-offset-8 underline '>
        <h1>Library</h1>
   
    </div>
</div>
    </Transition>
  );
};

export default Library;
