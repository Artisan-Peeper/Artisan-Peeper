import React from 'react'
import AreaCard from '@/components/AreaCard'
import scores from '../../../scores.json'

const Assessmentchoices = () => {

  return (
    <>
    <div className='flex flex-col justify-center align-middle items-center '>
      <h1 className='ml-20 mt-6 px-4 max-w-auto text-center text-[2rem] border-[1px] mb-5 rounded-md  border-black dark:border-slate-400 text-wrap bg-slate-50 dark:bg-indigo-950'>Soft Skills Evaluation</h1>
    <div className='ml-20 mr-1 py-3 h-auto max-w-auto grid auto-row-min
    
    sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-y-5 md:gap-y-5 lg:gap-y-3 xl:gap-y-4 gap-x-4'>
    {scores.map((scores) => (
          <AreaCard key={scores.id} scores={scores} title={scores.title} score={scores.score} upto={scores.upto}/>
        ))}
      </div>
    </div>
    </>
  )
}

export default Assessmentchoices