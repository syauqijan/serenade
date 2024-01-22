import React , {Fragment} from 'react';
import { Transition } from '@headlessui/react';
import Songs from './songs';
import songsArray from '@/lib/data';
const Library = ({ className }: { className: string }) => {
  return (
    <Transition
      show={className ? true : false}
      as={Fragment}
      enter="transition-opacity transition-transform duration-300"
      enterFrom="opacity-80 -translate-x-full"
      enterTo="opacity-100 translate-x-0"
      leave="transition-opacity transition-transform duration-300"
      leaveFrom="opacity-100 translate-x-0"
      leaveTo="opacity-90 -translate-x-full"
    >
    <div className={`w-96 bg-tertiary h-full max-h-full fixed ${className}`}>
    <div className='h-24 justify-start flex flex-col '>
        <h1 className='text-2xl pt-10 pl-10'>Library</h1>
        <hr  className='border-white/70 border-1  mb-5 mt-2 ml-8 mr-8' />
   
    </div>
    <div className=' h-full max-h-full  overflow-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-100'>
      {songsArray.map((song) => (
          <Songs
            song={song}
            id={song.id}
            currentSong={song}
            songInfo={{ currentTime: 0, duration: 0 }}
            isPlaying={false}
            setIsPlaying={() => {}}
            audioRef={{ current: null }}
            setSongInfo={() => {}}
            songs={songsArray}
            setCurrentSong={() => {}}
            setSongs={() => {}}



          />
      ))}
    </div>
    

</div>
    </Transition>
  );
};

export default Library;
