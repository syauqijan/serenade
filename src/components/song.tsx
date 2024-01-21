import React, { useState } from "react";

const Song = ({ currentSong }: { currentSong: any }) => {
    // const currentSong = {
    // name: "Song Name",
    // artist: "Artist Name",
    // cover: "/images/cover.jpg",
    // audio: "/audio/1.mp3",
    // color: ["#205950", "#2ab3bf"],
    // id: 1,
    // active: true,
    // };
  return (
    <div
      className="song-container bg-no-repeat bg-cover bg-bottom bg-[#662fb3] flex flex-col items-center justify-center min-h-[30rem] gap-7"
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(31, 34, 37, 0.9), rgba(68, 72, 76, 0.8)),url(${currentSong.cover})`,
      }}
    >
      <img className="cover-art w-1/5 h-full object-cover" src={currentSong.cover} alt="Cover Art" />
      {/* <div className="flex flex-col justify-center items-center "> */}
            <h2 className="text-2xl">{currentSong.name}</h2>
            <h3 className="text-xl">{currentSong.artist}</h3>
      {/* </div> */}
      
    </div>
  );
};

export default Song;