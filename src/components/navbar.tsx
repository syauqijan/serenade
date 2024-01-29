import Image from 'next/image'
const navbar  = ({ handleLibrary }: { handleLibrary: () => void }) => {

  return (
    <div>

    
    <div className='w-full h-20 bg-primary flex flex-row justify-around items-center pt-8 pb-8'>
      <div className='text-2xl flex flex-row gap-3'>
        <Image src='/images/Serenade.png' alt="logo" width={128} height={128} />
      </div>
      <div>
        <button className='w-32 h-10 rounded-md border-white border bg-primary flex flex-row gap-3 items-center justify-center hover:bg-darkAccent transition-colors duration-200' onClick={handleLibrary}>
          Library
          <Image src='/images/music.svg' alt="music"width={40} height={40} className='w-4 h-4' />

        </button>
      </div>
    </div>
    </div>
  )
}

export default navbar