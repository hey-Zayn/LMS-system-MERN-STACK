import { Button } from '@/components/ui/button'
import React from 'react'
import { Link } from 'react-router-dom'
import CourseTab from './CourseTab'
import { ArrowRight } from 'lucide-react'

const EditCourse = () => {
  return (
    <div className='flex-1'>
      <div className='flex justify-between items-center mb-5'>
            <h1 className='font-bold text-xl'>Add details in the Course</h1>
            <Link to="lecture"><Button variant="ghost" className="cursor-pointer">Go to lecture page <ArrowRight className="w-4 h-4" /></Button></Link>
      </div>
      <CourseTab/>
    </div>
  )
}

export default EditCourse
