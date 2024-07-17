// components
"use client"
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import OutImpressiveStats from "./out-impressive-stats";
import CoursesCategories from "./courses-categories";
import ExploreCourses from "./explore-courses";
import Testimonial from "./testimonial";
import Events from "./events";
import StudentsFeedback from "./students-feedback";
import TrustedCompany from "./trusted-companies";
import CourseVideo from "./course-video";
import Countdown from "./countdown";
import Finally from "./finally";
import Hostingpage from "./hostingpage";
import { useEffect, useState } from "react";

export default function Campaign() {
  const [hidden, setHidden ] = useState(false)

  useEffect(()=>{
     
    setTimeout(()=>{
      setHidden(true)
    },1000)

  },[])


  return (
    <>
    {  hidden?
    <div className="flex items-center justify-center h-[100vh]">


      <Hostingpage />
    </div>

    :
      <>
      
      <Navbar />
      <Hero />
      <OutImpressiveStats />
       <CourseVideo />
      <ExploreCourses />
     <Countdown />
      {/* <CoursesCategories /> */}
      {/* <Events /> */}
      {/* <StudentsFeedback /> */}
      {/* <TrustedCompany /> */}
      <Finally />
    
      <Footer />
      </>
    }
    </>
  );
}
