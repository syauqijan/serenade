import React, { useEffect, RefObject } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronLeft, faCirclePause } from '@fortawesome/free-solid-svg-icons'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import { Dispatch, SetStateAction} from 'react';
import Player from '../lib/player'
import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons/faCircleChevronRight";
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
    // const formatTime = (time: number): string => {
    //     const minutes = Math.floor(time / 60);
    //     const seconds = Math.floor(time % 60);
    //     return `${minutes}:${seconds}`;
    // }
    const formatTime = (time: number): string => {
      return (
        Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
      );
    };
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
            <div className='flex flex-row items-center justify-center pt-10 gap-2'>
              <div className="w-16 justify-center items-center text-center">
                <p>{formatTime(songInfo.currentTime)}</p>
              </div>
             
                <input
                      className="w-1/3 h-1.5 rounded-md cursor-pointer bg-primary "
                      type="range"
                      min={0}
                      max={songInfo.duration || 0}
                      value={songInfo.currentTime}
                      onChange={dragHandler}
                  />
          
              <div className="w-16 justify-center items-center text-center">
                <p>{songInfo.duration? formatTime(songInfo.duration): "0:00"}</p>
              </div>

            </div>
            <div className='flex flex-row justify-center items-center gap-16 pt-6'>
              <FontAwesomeIcon  icon={faCircleChevronLeft} className='w-8 h-8 cursor-pointer' onClick={() => skipTrackHandler('skip-back')} />
                {isPlaying ? (
                    <FontAwesomeIcon  icon={faCirclePause} className='w-11 h-11 cursor-pointer' onClick={playHandler} />
                ) : (
                    <FontAwesomeIcon  icon={faCirclePlay} className='w-11 h-11 cursor-pointer' onClick={playHandler} />
                )}
                <FontAwesomeIcon  icon={faCircleChevronRight} className='w-8 h-8 cursor-pointer' onClick={() => skipTrackHandler('skip-forward')} />
            </div>
                
                

        </div>
    )
}

export default audioPlayer