"use client";
import React, { useState, useRef } from "react";
import Image from 'next/image'
import Navbar from '../components/navbar'
import Library from '../components/library'
import MainSong from '../components/mainSong'
import songsArray from '../lib/data'
import AudioPlayer from '../components/audioplayer'

export default function Home() {
  const [isLibrary, setIsLibrary] = useState(false)
  const [songs, setSongs] = useState(songsArray);
  const [currentSong, setCurrentSong] = useState(songs[1]);
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

  return (
   <div className='bg-gradient-horizontal w-full h-screen '>
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
   </div>
  )
}