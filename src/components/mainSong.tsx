

const Song = ({ currentSong }: { currentSong: any }) => {

  return (
    <div
      className="bg-no-repeat bg-cover bg-bottom bg-[#662fb3] flex flex-col items-center justify-center min-h-[30rem] gap-7"
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(31, 34, 37, 0.9), rgba(68, 72, 76, 0.8)),url(${currentSong.cover})`,
      }}
    >
      <img className="cover-art w-1/5 h-full object-cover" src={currentSong.cover} alt="Cover Art" />
            <h2 className="text-3xl font-extrabold">{currentSong.name}</h2>
            <h3 className="text-xl">{currentSong.artist}</h3>

      
    </div>
  );
};

export default Song;