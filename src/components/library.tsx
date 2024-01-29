import React , {Fragment, useEffect, RefObject, Dispatch, SetStateAction} from 'react';
import { Transition } from '@headlessui/react';
import Songs from './songs';
import songsArray from '@/lib/data';
interface Song {
  name: string;
  cover: string;
  artist: string;
  audio: string;
  id: string;
  active: boolean;
}
interface AudioPlayerProps {
  currentSong: Song;
  songInfo: { currentTime: number; duration: number; };
  isPlaying: boolean;
  setIsPlaying: (isPlaying: boolean) => void;
  audioRef: RefObject<HTMLAudioElement>;
  setSongInfo: (songInfo: { currentTime: number; duration: number; }) => void;
  songs: Song[];
  setCurrentSong: Dispatch<SetStateAction<Song>>;
  setSongs: Dispatch<SetStateAction<Song[]>>;
}
const Library = ({
    songs,
    setCurrentSong,
    audioRef,
    isPlaying,
    setSongs,
    songInfo,
    setSongInfo,
    setIsPlaying,
    className
  }: AudioPlayerProps & {className?: string
}) => {
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
    <div className={`w-96 bg-tertiary h-full max-h-full fixed overflow-auto scrollbar-thin scrollbar-thumb-quaternary scrollbar-track-primary scrollbar-thumb-rounded-full  ${className}`}>
    <div className='h-24 justify-start flex flex-col '>
        <h1 className='text-2xl pt-10 pl-10'>Library</h1>
        <hr  className='border-white/70 border-1  mb-5 mt-2 ml-8 mr-8' />
   
    </div>
    <div className=' h-full max-h-full  '>
      {songs.map((song) => (
          <Songs
            song={song}
            key={song.id}
            id={song.id}
            currentSong={song}
            songInfo={songInfo}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            audioRef={audioRef}
            setSongInfo={setSongInfo}
            songs={songs}
            setCurrentSong={setCurrentSong}
            setSongs={setSongs}



          />
      ))}
    </div>
    

</div>
    </Transition>
  );
};

export default Library;
