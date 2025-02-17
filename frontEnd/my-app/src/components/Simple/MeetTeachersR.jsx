import React from 'react'
import  { useEffect, useRef } from "react";
import { gsap } from "gsap";
import teacher from "../../Assets/teacher1.png";
import teacher2 from "../../Assets/teacher2.png";
import teacher3 from "../../Assets/teacher3.png";
import teacher4 from "../../Assets/teacher4.png";
import teacher5 from "../../Assets/teacher5.png";
import teacher6 from "../../Assets/teacher6.png";
import teacher7 from "../../Assets/teacher7.png";
import teacher8 from "../../Assets/teacher8.png";

import TeacherCard from './TeacherCard';
const MeetTeachersR = () => {
    const carouselRef = useRef(null);
    const teacherData = [
        {
            name: "Zrand Hobs",
            profession: "Developer",
            image: teacher,
            rating: 4.9,
             
        },
        {
            name: "Dorothy Wood",
            profession: "Teacher",
            image: teacher2,
            rating: 4.9,
           
        },
        {
            name: "Timothy Baker",
            profession: "Teacher",
            image: teacher3,
            rating: 4.9,
           
        },
        {
            name: "Shane Pratt",
            profession: "Developer",
            image: teacher4,
            rating: 4.9,
        },
        {
            name: "Frances Washing",
            profession: "Developer",
            image: teacher5,
            rating: 4.9,
        },
        {
            name: "Jason Bell",
            profession: "Web Designer",
            image: teacher6,
            rating: 4.9,
        },
        {
            name: "Kathryn Sanchez",
            profession: "Teacher",
            image: teacher7,
            rating: 4.9,
        },
        {
            name: "Jaime Strickland",
            profession: "Web Designer",
            image: teacher8,
            rating: 4.9,
        }
    ]

  useEffect(() => {
    const carousel = carouselRef.current;
    // const cards = carousel.querySelectorAll(".card");

    // Duplicate the cards for infinite scrolling
    carousel.innerHTML += carousel.innerHTML;

    // Calculate the total width of the carousel
    const totalWidth = carousel.scrollWidth / 2;

    // GSAP animation for infinite scrolling
    const tl = gsap.timeline({ repeat: -1 }); // Infinite repeat

    tl.to(carousel, {
      x: -totalWidth, // Move the carousel to the left
      duration: 90, // Adjust duration for speed
      ease: "none", // Linear animation
    });

    // Reset the carousel position when the animation repeats
    tl.eventCallback("onRepeat", () => {
      gsap.set(carousel, { x: 0 }); // Reset to the start
    });
  }, []);
  return (
    <div>
      <div className="relative overflow-hidden py-2">
      <div
        ref={carouselRef}
        className="flex gap-8 w-max "
      >
        {/* Cards */}
        {teacherData.map((card, index) => (
          <TeacherCard key={index} {...card} teacherData={teacherData} />
        ))}
      </div>

    </div>
    </div>
  )
}

export default MeetTeachersR
