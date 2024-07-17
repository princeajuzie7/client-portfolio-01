"use client";

import { Typography, Button } from "@material-tailwind/react";
import CourseCard from "@/components/course-card";
import Link from "next/link";

const COURSES = [
  {
    img: "/image/books/book1.jpg",
    tag: "Beginner • 25 Classes • 200 Students",
    price: " ₦5k",
    label: " ₦15k",
    title: "Fast Business Growth Without Limit",
    desc: "If you are confused about how to start a business or you have started one already and you are struggling with sales ,not having customers and you are looking for answers then  You have come to the right place where you will get the answers you seek.",
  },

];

export function ExploreCourses() {
  return (
    <section className="px-8 mt-5" >
      <div className="container mx-auto mb-24 text-center" >
        <Typography variant="h2" color="blue-gray">
          Explore Courses
        </Typography>
        <Typography
          variant="lead"
          className="mt-2 mx-auto w-full px-4 !text-gray-500 lg:w-6/12 lg:px-8"
        >
          Browse through my courses and find the one that
          fits your needs.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-24 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-14 " id="course">
        {COURSES.map((props, idx) => (
          <CourseCard key={idx} {...props} />
        ))}

      </div>

      <div className="flex item-center justify-center my-5">
      <Link
                href="https://t.me/+uB2rVR9mGeRiMDg0"
                target="_blank"
              >
                <Button color="gray" className='flex items-center justify-center gap-3' > 
                <svg
  width="24px"
  height="24px"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <g id="SVGRepo_bgCarrier" strokeWidth={0} />
  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
  <g id="SVGRepo_iconCarrier">
    {" "}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.28869 2.76279C1.41968 2.36983 1.84442 2.15746 2.23737 2.28845L2.54176 2.38991C3.16813 2.59868 3.69746 2.7751 4.1137 2.96873C4.55613 3.17456 4.94002 3.42965 5.23112 3.83352C5.52222 4.2374 5.64282 4.68226 5.69817 5.16708C5.72644 5.41467 5.73936 5.69227 5.74526 5.99996H16.4508C18.5058 5.99996 19.5333 5.99996 19.9779 6.67422C20.4225 7.34849 20.0177 8.2929 19.2082 10.1817L18.7797 11.1817C18.4017 12.0636 18.2128 12.5045 17.8371 12.7522C17.4614 13 16.9817 13 16.0222 13H5.9034C6.00839 13.5398 6.17403 13.8558 6.40921 14.091C6.68598 14.3677 7.07455 14.5482 7.80832 14.6468C8.56367 14.7484 9.56479 14.75 11.0002 14.75H18.0002C18.4144 14.75 18.7502 15.0857 18.7502 15.5C18.7502 15.9142 18.4144 16.25 18.0002 16.25H10.9453C9.57774 16.25 8.47542 16.25 7.60845 16.1334C6.70834 16.0124 5.95047 15.7535 5.34855 15.1516C4.74664 14.5497 4.48774 13.7918 4.36673 12.8917C4.25017 12.0247 4.25018 10.9224 4.2502 9.55484L4.2502 6.883C4.2502 6.17 4.24907 5.69823 4.20785 5.33722C4.16883 4.99538 4.10068 4.83049 4.01426 4.71059C3.92784 4.59069 3.79296 4.47389 3.481 4.32877C3.15155 4.17551 2.70435 4.02524 2.02794 3.79978L1.76303 3.71147C1.37008 3.58049 1.15771 3.15575 1.28869 2.76279ZM8.0002 8.24996C7.58599 8.24996 7.2502 8.58575 7.2502 8.99996C7.2502 9.41417 7.58599 9.74996 8.0002 9.74996H11.0002C11.4144 9.74996 11.7502 9.41417 11.7502 8.99996C11.7502 8.58575 11.4144 8.24996 11.0002 8.24996H8.0002Z"
      fill="#fff"
    />{" "}
    <path
      d="M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z"
      fill="#fff"
    />{" "}
    <path
      d="M16.5 18.0001C17.3284 18.0001 18 18.6716 18 19.5001C18 20.3285 17.3284 21.0001 16.5 21.0001C15.6716 21.0001 15 20.3285 15 19.5001C15 18.6716 15.6716 18.0001 16.5 18.0001Z"
      fill="#fff"
    />{" "}
  </g>
</svg>

                 Click here to get it now  
                 



<svg
  width="34px"
  height="34px"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  className="animate-bounce"
>
  <g id="SVGRepo_bgCarrier" strokeWidth={0} />
  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
  <g id="SVGRepo_iconCarrier">
    {" "}
    <path
      d="M9 3.5V2M5.06066 5.06066L4 4M5.06066 13L4 14.0607M13 5.06066L14.0607 4M3.5 9H2M8.5 8.5L12.6111 21.2778L15.5 18.3889L19.1111 22L22 19.1111L18.3889 15.5L21.2778 12.6111L8.5 8.5Z"
      stroke="#FF0000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />{" "}
  </g>
</svg>
                 </Button>


              </Link>
      </div>
    </section>
  );
}

export default ExploreCourses;
