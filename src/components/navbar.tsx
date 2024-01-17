import React, {useState} from 'react'
import Library from './library'
const navbar  = ({ handleLibrary }: { handleLibrary: () => void }) => {
  // const [isLibrary, setIsLibrary] = useState(false)
  // const handleLibrary = () => {
  //   setIsLibrary(!isLibrary)
  // }
  return (
    <div>

    
    <div className='w-full h-20 bg-primary flex flex-row justify-around items-center pt-8 pb-8'>
      <div className='text-2xl flex flex-row gap-3'>
        <p>Serenade</p>
      </div>
      <div>
        <button className='w-32 h-10 rounded-md border-white border bg-primary flex flex-row gap-3 items-center justify-center' onClick={handleLibrary}>
          Library
          <img src='/images/music.svg' alt="music" className='w-4 h-4' />

        </button>
      </div>
    </div>
    </div>
  )
}

export default navbar