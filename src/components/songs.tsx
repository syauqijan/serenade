import React, {RefObject, useState} from 'react'
import Player from '@/lib/player'
import songsArray from '@/lib/data';
import { Dispatch, SetStateAction} from 'react';
import { FC } from 'react';

interface Song {
    name: string;
    cover: string;
    artist: string;
    audio: string;
    id: string;
    active: boolean;
}

interface SongProps {
    id: string;
    song: {name: string;
        cover: string;
        artist: string;
        audio: string;
        id: string;
        active: boolean;};
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
const songs : FC<SongProps> = ({song, currentSong, songs,setSongs, setCurrentSong, isPlaying, audioRef, setIsPlaying, songInfo, setSongInfo}) => {
    const [activeSong, setActiveSong] = useState(null);
    const songHandler = () =>{
       
        const newSongs = songs.map((s) => {
            if (s.id === song.id) {
              return {
                ...s,
                active: true,
                
              };
            } else {
              return {
                ...s,
                active: false,
              };
            }
          });
          setSongs(newSongs);
          
          setCurrentSong(song)
          Player(isPlaying, audioRef)
          if (audioRef.current) {
              audioRef.current.play();
              setIsPlaying(true);

          }
          console.log(newSongs)
          console.log(songs)
          console.log(song.active)
          console.log(currentSong.active)
          
    }

  return (
    <div className={`h-32 flex flex-row ml-8 mr-8 mt-3 hover:bg-primary hover:rounded-md cursor-pointer hover:transition-colors ${song.active? 'bg-primary' : ''}`} onClick={()=>songHandler()}>
        <img className='w-24 h-24 ml-6 mt-4 mb-4  justify-center  rounded-md object-cover' src={song.cover} alt="Cover Art" />
        <div className='pl-5 justify-center flex flex-col'>
            <h2 className='text-lg'>{song.name}</h2>
            <p className='text-sm'>{song.artist}</p>
        </div>


    </div>
  )
}

export default songs