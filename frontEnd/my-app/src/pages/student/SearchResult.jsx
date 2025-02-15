// import React from 'react'
import client from "../../Assets/clients.png"
import { Link } from "react-router-dom"

const SearchResult = ({course}) => {
    const courseId = "dsafdasdfasdf"
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-200 py-4 gap-4">
       <Link to={`/course-detail/${courseId}`} className="flex flex-col md:flex-row gap-4 w-full md:auto">
         <img src={client} alt="course-thumbnail" className="h-32 w-full md:w-56 object-cover rounded"/>
         <div className="flex flex-col gap-2">
            <h3 className="text-lg font-bold md:text-xl ">Course Title</h3>
            <p className="text-sm text-gray-600">Course Description</p>
            <p className="text-sm  text-gray-700">Instructor Name : <span className="bold">Zayn</span> </p>
            <p className="text-sm text-gray-700">Rating : 4.5</p>
         </div>
       </Link>
    </div>
  )
}

export default SearchResult
