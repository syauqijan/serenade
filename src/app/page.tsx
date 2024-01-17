"use client";
import React, { useState, useRef } from "react";
import Image from 'next/image'
import Navbar from '../components/navbar'
import Library from '../components/library'
import Song from '../components/song'
import Data from '../lib/data'
export default function Home() {
  const [isLibrary, setIsLibrary] = useState(false)
  const [songs, setSongs] = useState(Data());
  const [currentSong, setCurrentSong] = useState(songs[1]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });

  const audioRef = useRef(null);

  const timeHandler = (e: { target: { currentTime: any; duration: any; }; }) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({ ...songInfo, currentTime: current, duration: duration });
  };
  const handleLibrary = () => {
    setIsLibrary(!isLibrary)
  }

  return (
   <div className='bg-gradient-horizontal w-full h-screen '>
      <Library className={isLibrary ? 'opacity-100 translate-x-0' : ''} />
      <Navbar handleLibrary={handleLibrary} />
      <Song currentSong={currentSong} />
   </div>
  )
}