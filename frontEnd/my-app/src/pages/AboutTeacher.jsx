import MeetTeachersR from '@/components/Simple/MeetTeachersR'
import MeetTeachersL from '@/components/Simple/MeetTeacherL'
import React from 'react'

const AboutTeacher = () => {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center gap-10 px-10 py-10'>
        <div className='flex flex-col justify-center items-center gap-2'>
            <h2 className='text-4xl font-semibold text-center'>Meet Our Teachers</h2>
            <p className='text-base text-center'>Our teachers are experts in their fields, with a passion for teaching and a commitment to helping students succeed.</p>
        </div>
        <div className='w-full h-full flex flex-col justify-center items-center overflow-hidden'>
            <MeetTeachersR/>
            <MeetTeachersL/>
        </div>
    </div>
  )
}

export default AboutTeacher