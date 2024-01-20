import React, { useEffect, RefObject } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPause } from '@fortawesome/free-solid-svg-icons'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { Dispatch, SetStateAction} from 'react';
import Player from '../lib/player'
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

    const audioPlayer = ({
        currentSong,
        songInfo,
        isPlaying,
        setIsPlaying,
        audioRef,
        setSongInfo,
        songs,
        setCurrentSong,
        setSongs,
        }: AudioPlayerProps) => {
    const formatTime = (time: number): string => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds}`;
    }
    useEffect(() => {
        const newSongs = songs.map((song) => {
          if (song.id === currentSong.id) {
            return {
              ...song,
              active: true,
            };
          } else {
            return {
              ...song,
              active: false,
            };
          }
        });
        setSongs(newSongs);
      }, [currentSong]);
      
      //event handlers
      const playHandler = () => {
        if (audioRef.current) {
          if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(!isPlaying);
          } else {
            audioRef.current.play();
            setIsPlaying(!isPlaying);
          }
        }
      };
      
      const dragHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (audioRef.current) {
          audioRef.current.currentTime = Number(e.target.value);
          setSongInfo({ ...songInfo, currentTime: Number(e.target.value) });
        }
      };    
      
      const skipTrackHandler = (direction: string) => {
        let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
        if (direction === "skip-forward") {
          setCurrentSong(songs[(currentIndex + 1) % songs.length]);
        }
        if (direction === "skip-back") {
          if ((currentIndex - 1) % songs.length === -1) {
            setCurrentSong(songs[songs.length - 1]);
            Player(isPlaying, audioRef);
            return;
          }
          setCurrentSong(songs[(currentIndex - 1) % songs.length]);
        }
        Player(isPlaying, audioRef);
      };
    
    return (
        <div className='bg-primary w-full h-40'>
            <div className='flex flex-row items-center justify-center '>
                <p>{formatTime(songInfo.currentTime)}</p>
                <input
                    className="song-input"
                    type="range"
                    min={0}
                    max={songInfo.duration || 0}
                    value={songInfo.currentTime}
                    onChange={dragHandler}
                />
                <p>{formatTime(songInfo.duration)}</p>
            </div>
            <div className='flex flex-row justify-between items-center'>
            <button onClick={playHandler} className=' flex rounded-full bg-quaternary w-8 h-8 items-center justify-center text-center'>
                        <FontAwesomeIcon icon={faPause} style={{color: "#1e1a20", fontSize:'20'}} />
                </button>
                <button onClick={playHandler} className='flex rounded-full bg-quaternary w-8 h-8 items-center justify-center text-center'>
                        <FontAwesomeIcon icon={faPlay} style={{color: "#1e1a20", fontSize:'20'}} />
                </button>
                <button>
                    
                </button>
            </div>
                
                

        </div>
    )
}

export default audioPlayer