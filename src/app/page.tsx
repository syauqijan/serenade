"use client";
import { useState, useRef, useEffect } from "react";
import Navbar from '../components/navbar'
import Library from '../components/library'
import MainSong from '../components/mainSong'
import songsArray from '../lib/data'
import AudioPlayer from '../components/audioplayer'
import { Transition } from "@headlessui/react";

export default function Home() {
  const [isLibrary, setIsLibrary] = useState(false)
  const [songs, setSongs] = useState(songsArray);
  const [currentSong, setCurrentSong] = useState(songs[6]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });

  const audioRef = useRef(null);

  const timeHandler = (e: React.SyntheticEvent<HTMLAudioElement, Event>) => {
    const current = (e.target as HTMLAudioElement).currentTime;
    const duration = (e.target as HTMLAudioElement).duration;
    setSongInfo({ ...songInfo, currentTime: current, duration: duration });
  };
  const handleLibrary = () => {
    setIsLibrary(!isLibrary)
  }
  const [showMainPage, setShowMainPage] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowMainPage(true);
    }, 1000); // Menunggu 3 detik sebelum menampilkan halaman utama

    return () => clearTimeout(timeout);
  }, []);

  return (
   <div className='bg-gradient-horizontal w-full h-screen justify-center items-center '>
      {/* <Transition
        show={!showMainPage}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className=" flex w-full h-full justify-center items-center text-center bg-gradient-to-r from-rightGradient to-leftGradient text-transparent bg-clip-text text-4xl font-bold animate-pulse">
          Make Music Matter
        </div>
      </Transition> */}

      <Transition
        show={showMainPage}
        enter="transition-opacity duration-1000"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-1000"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Library 
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        audioRef={audioRef}
        setSongInfo={setSongInfo}
        songInfo={songInfo}
        songs={songs}
        setCurrentSong={setCurrentSong}
        setSongs={setSongs}
        className={isLibrary ? 'opacity-100 translate-x-0' : ''} />
      <Navbar handleLibrary={handleLibrary} />
      <MainSong currentSong={currentSong} />
      <AudioPlayer 
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        audioRef={audioRef}
        setSongInfo={setSongInfo}
        songInfo={songInfo}
        songs={songs}
        setCurrentSong={setCurrentSong}
        setSongs={setSongs}
      />
      <audio
        onTimeUpdate={timeHandler}
        onLoadedMetadata={timeHandler}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
      </Transition>
      
   </div>
  )
}